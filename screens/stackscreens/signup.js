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
  TouchableOpacity
} from 'react-native';
import {AvatarSignUp} from '../../components/avatar';
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);
const blue = "rgb(0,122,255)";
const fontColor = "white";

const SignUp = ({navigation})  => {

  const [username,setUsername]=useState("")
  const [password,setPassword]=useState("")
  
  /* const check = async() =>{
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
 },[]) */

 const signin = () =>{
 navigation.navigate("Login")
 }

  return (
    <>
     
      <SafeAreaView  style={styles.container}>
        <ScrollView style={styles.scrollView}>
       <View style={styles.form}>
         <View style={styles.back} >
          <TouchableOpacity onPress={()=>navigation.goBack()}>
          <Text style={{color:blue,paddingLeft:10}}>
              Go Back
           </Text>
            </TouchableOpacity> 
         </View>
        
         <View style={styles.header}>
           <TouchableOpacity>
           <Text style={{color:"white"}}>Add Header</Text>
           </TouchableOpacity>
         
          </View>
        
    
         <Text style={{marginTop:screenHeight*0.15,color:"grey"}}>
           Enter your details below to get started
         </Text>
          <TextInput onChangeText={(e)=>{setUsername(e)}} style={styles.inputone}  placeholder="username "/>
          <TextInput onChangeText={(e)=>{setPassword(e)}} style={styles.input}   placeholder="email"/>
        <TextInput onChangeText={(e)=>{setPassword(e)}} style={styles.input} secureTextEntry={true}  placeholder="password"/>
        <TextInput onChangeText={(e)=>{setPassword(e)}} style={styles.input} secureTextEntry={true}  placeholder="confirm password"/>
        <TextInput onChangeText={(e)=>{setPassword(e)}} style={styles.input}  placeholder="role"/>
        <TextInput onChangeText={(e)=>{setPassword(e)}} style={styles.inputtwo} multiline={true} numberOfLines={5}  placeholder="description about you"/>
        <TouchableOpacity onPress={()=> signin()}><View style={styles.button}><Text style={styles.text} >Sign Up</Text></View></TouchableOpacity>

     
   
        

        
       

       </View>
    
      
     
      
       <View style={styles.avatar}>
    <AvatarSignUp  img={``} />
    </View>
   
  
        </ScrollView>
       
    
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: Colors.lighter,
   
  },
  back:{
    height:screenHeight*0.05,
    justifyContent:"center",
    alignItems:"flex-start",
     width:"100%"
  },
  input:{
      borderWidth:1,
      borderColor:"gainsboro",
      width:screenWidth*0.9,
      margin:10,
      textAlign:"left",
      paddingLeft:10,
      borderRadius:40
  },
  inputone:{
    borderWidth:1,
    borderColor:"gainsboro",
    width:screenWidth*0.9,
    margin:10,
    textAlign:"left",
    paddingLeft:10,
    marginTop:screenHeight*0.05,
    borderRadius:40
},
inputtwo:{
  borderWidth:1,
  borderColor:"gainsboro",
  width:screenWidth*0.9,
  margin:10,
  textAlign:"left",
  paddingLeft:10,
 height:screenHeight*0.15,
  borderRadius:40
},
  button:{
    borderWidth:1,
    borderColor:"gainsboro",
    width:screenWidth*0.9,
    height:screenHeight*0.06,
    margin:10,
    textAlign:"center",
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:blue,
    borderRadius:40
   

  },
  text:{
    color:fontColor
  },
  header:{
    width:"100%",
    height:screenHeight*0.2,
    backgroundColor:blue,
    justifyContent:"flex-start",
    alignItems:"center",
    paddingTop:30
   
  },
  scrollView: {
 
    marginHorizontal: 0,
    height:'100%',
    width:"100%"
  },
  form:{
    height:"auto",
    width:"100%",
    position:"relative",
    zIndex:0,
    alignItems:"center"
    
  },
  avatar:{
    position:"absolute",
    top:screenWidth*0.27,
    left:screenWidth*0.35,
 
   

  }
  
});

export default SignUp;
