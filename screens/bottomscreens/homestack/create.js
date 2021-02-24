import React,{useState,useEffect} from 'react';
import { View, KeyboardAvoidingView, TextInput, TouchableOpacity,StyleSheet, Text, Platform, TouchableWithoutFeedback, Button, Keyboard ,Dimensions } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);
import {Store,Get} from '../../../components/async'
import { Post } from "../../api";
function CreateWord({navigation}) {
const [word,setWord] = useState('')
const [token,setToken] = useState('')
const [count,setCount] = useState(0)
function openImage (){
console.log("as")
}

const check = async() =>{
  const tokens = await Get('token');
  setToken(tokens)
 console.log(token)
}

const send = async() =>{
  const body = {
    word:word
  }
  const url = "posts"
  const go = await Post(url,body,JSON.stringify(token))

 console.log(go)

}

useEffect(()=>{

check();
},[])

  return (
   
    <View style={styles.container}>
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
  }
});

export default CreateWord;