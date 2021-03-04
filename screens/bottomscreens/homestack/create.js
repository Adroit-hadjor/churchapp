import React,{useState,useEffect} from 'react';
import { View, KeyboardAvoidingView, TextInput, TouchableOpacity,StyleSheet, Text, Platform,Modal,ActivityIndicator, TouchableWithoutFeedback, Button, Keyboard ,Dimensions,Image } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);
import {Store,Get} from '../../../components/async'
import FormData from 'form-data';
import axios from "axios";
import ImagePicker from 'react-native-image-crop-picker';
import { Post } from "../../api";

















function CreateWord({navigation}) {
const [word,setWord] = useState('')
const [error,setError] = useState('')
const [token,setToken] = useState('')
const [count,setCount] = useState(0)
const [imageArr,setImageArr] = useState([])
const [modalVisible, setModalVisible] = useState(false);
const blue = "rgb(0,122,255)"

const check = async() =>{
  const tokens = await Get('token');
  setToken(tokens)
  console.log(token)

}

const postWithImage =async()=>{

 
  const body = {
    word:word
  }
  const url = "posts"
  const go = await Post(url,body,JSON.stringify(token))
   
 
 const refId = go.id
 console.log(refId)

 if(refId>0){
  imageArr.slice(0,4).map((im)=>{
   
const d = im.modificationDate
 const name = d.toString()+".jpg"
 console.log(name)
    const data = new FormData();
    data.append('files', { uri:im.path, name:name, type: 'image/jpeg' },)
  data.append('ref', 'post') // optional, you need it if you want to link the image to an entry
  data.append('refId', refId) // optional, you need it if you want to link the image to an entry
  data.append('field', 'image1') // optional, you need it if you want to link the image to an entry
  //data.append('source', 'users-permissions');
 console.log(data)
    const res =   axios.post('http://0.0.0.0:1337/upload', data, {headers: {'Content-Type': 'multipart/form-data',Authorization: `Bearer ${token}`}}) 
 

  })
 }


 navigation.push("HomeInBottomNav")

   
  
  
   
}

const openImage = () =>{
  setImageArr([])
  ImagePicker.openPicker({
   multiple:true,
  cropping: true,
  maxFiles:4
  }).then(images => {
    
setImageArr(images)
  });
}

const send = async() =>{
  if(!word){
    setError("Your post is empty")
    return
  }
  setModalVisible(true)
  if(imageArr.length>0){
   const gone = await postWithImage();
    setModalVisible(false)
    return
  }
  const body = {
    word:word
  }
  const url = "posts"
  const go = await Post(url,body,JSON.stringify(token))

 

setModalVisible(false)
navigation.push("HomeInBottomNav")

}

useEffect(()=>{

check();
},[])


  return (
   
    <View style={styles.container}>
       <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
        
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={{justifyContent:"center",height:screenHeight*0.1,backgroundColor:"white",width:screenWidth*0.8}}>
           <View style={{flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
           <ActivityIndicator size="large" color={blue} />
            <Text style={styles.modalText}>Loading</Text>
           </View>
              
          
            </View>
        
           
          </View>
        </View>
      </Modal>
        <View style={styles.inner}>
          <View style={{width:'100%',flexDirection:'row',justifyContent:'flex-end'}}>
       <TouchableOpacity onPress={()=>{send();}}><Text style={styles.header}>Posts</Text></TouchableOpacity>
          
            </View> 
            <View>
              <TextInput onChangeText={(e)=>setWord(e)} value={word} style={styles.textInput}/>
             
            </View>
        
        <View style={{borderWidth:0,borderColor:'red',width:screenWidth,height:screenHeight*0.05,alignItems:"flex-start",justifyContent:"center"}}>
   <TouchableOpacity onPress={()=>openImage()}>
   <MaterialCommunityIcons color="rgb(0,122,255)" name="image" size={30} />
     </TouchableOpacity> 

        </View>
        <View>
        {error? <Text style={{color:"red"}}>{error}</Text>: <Text></Text>}

        </View>
      
        </View>
        <View style={{width:screenWidth,padding:10,flexDirection:"row",height:'auto',alignItems:"center",justifyContent:"center"}}>
        {imageArr.length > 0 ? imageArr.slice(0,4).map((imag) => {
            return(
              <Image resizeMode={"cover"} style={{width:"20%",height:120,marginTop:50,margin:10}} source={{uri:imag.path}}/>
            )
        }): <Text></Text>}

        </View>
        </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'white'
  },
  inner: {
    padding: 4,
  
    justifyContent: "space-around",
    height:screenHeight*0.4,
    alignItems:'center'
  },
  header: {
    fontSize: 20,
    margin:40,
    backgroundColor:"rgb(0,122,255)",
    color:"white",
    paddingTop: 5,
    paddingBottom: 5,
    paddingRight:10,
    paddingLeft:10,
    borderRadius:40
   
  },
  textInput: {
    height: 180,
    borderColor: "gainsboro",
    borderBottomWidth: 1,
    marginBottom: 36,
    width:screenWidth-1
  },
  btnContainer: {
    backgroundColor: "white",
    marginTop: 12,
    marginBottom:15
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    width:screenWidth*0.2,
    height:10,
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 5,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  buttonx: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    width:screenWidth*0.3
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontSize:25,
    paddingTop:15,
    paddingLeft:15
    
  }
  
});

export default CreateWord;