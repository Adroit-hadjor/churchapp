import React,{useState,useEffect} from 'react';
import { View, KeyboardAvoidingView, TextInput, TouchableOpacity,StyleSheet, Text, Platform,Modal,ActivityIndicator, TouchableWithoutFeedback, Button, Keyboard ,Dimensions,Image } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);
import {Get} from '../../api'
import FormData from 'form-data';
import axios from "axios";
import ImagePicker from 'react-native-image-crop-picker';
import { Post } from "../../api";
import { WebView } from 'react-native-webview';
















function CreateWord({navigation}) {
const [word,setWord] = useState('')
const [error,setError] = useState('')
const [token,setToken] = useState('')
const [count,setCount] = useState(0)
const [imageArr,setImageArr] = useState([])
const [modalVisible, setModalVisible] = useState(false);
const blue = "rgb(0,122,255)"

const check = async() =>{
  const url= "youtubes/1"
  const tokens = await Get(url);
  setToken(tokens.link)
  console.log("tk is "+token)

}






useEffect(()=>{

check();
},[count])


  return (
   
    <View style={styles.container}>
      <View style={{height:80,backgroundColor:"white",justifyContent:"flex-end",padding:10}}> 
      <TouchableOpacity onPress={()=>navigation.navigate("HomeInBottomNav")}><Text style={{color:"blue"}}>Go Back </Text></TouchableOpacity>
      </View>
     <WebView source={{ uri: token}} />
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
    
  },
  backgroundVideo: {
  height:screenHeight
  },
});

export default CreateWord;