/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{useState,useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Dimensions,
  TextInput,
  Button,
  TouchableOpacity,
  Alert
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import GroupImage from '../images/groupimage'
const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);
const blue = "rgb(0,122,255)";
const fontColor = "white";
import {Post} from '../api';
import {Store,Get} from '../../components/async'

const Login = ({navigation})  => {

  const [username,setUsername]=useState("")
  const [password,setPassword]=useState("")
  const check = async() =>{
    const user = await Get('user');
    if (user) {
       // storeUser(user)
       navigation.navigate("Drawer")
      } else {

       return
      }
}
 useEffect(()=>{
 
check();
 },[])

 const signin = async() =>{
  console.log(username)
  const url = "auth/local";
  const body ={
      identifier:username,
      password:password
  }
/*   try {
    const log = await Post(url,body)
    const saveValue = await Store("token",log.jwt)
    const getValue = await Store("user",JSON.stringify(log.user))
    console.log(log.jwt)
    navigation.navigate("Drawer")
  } catch (error) {
    Alert.alert("Login Error","Wrong credentials")
  } */

  navigation.navigate("Drawer")
  
 
 }

 const signup = () =>{
    navigation.navigate("SignUp")
   }

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
     <View style={styles.container}>
       <View style={{marginBottom:50}}>
         <GroupImage />
       </View>
        <TextInput onChangeText={(e)=>{setUsername(e)}} style={styles.input}  placeholder="username or email"/>
        <TextInput onChangeText={(e)=>{setPassword(e)}} style={styles.input} secureTextEntry={true}  placeholder="password"/>
        <TouchableOpacity onPress={()=> signin()}><View style={styles.button}><Text style={styles.text} >Login</Text></View></TouchableOpacity>

        <View>
          <TouchableOpacity onPress={()=> signup()}>
          <Text>
            Don't have an account, sign up here
          </Text>
          </TouchableOpacity>
         
        </View>
     </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.lighter,
    justifyContent:"center",
    alignItems:"center",
    height:screenHeight,
    width:screenWidth,
  },
  input:{
      borderWidth:1,
      borderColor:"gainsboro",
      width:screenWidth*0.7,
      margin:5,
      textAlign:"left",
      paddingLeft:10,
      borderRadius:40
  },
  button:{
    borderWidth:1,
    borderColor:"gainsboro",
    width:screenWidth*0.7,
    height:screenHeight*0.06,
    margin:10,
    marginTop:20,
    textAlign:"center",
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:blue,
    borderRadius:40
   

  },
  text:{
    color:fontColor
  }
  
});

export default Login;
