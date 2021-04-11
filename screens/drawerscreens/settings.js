import React,{useState,useEffect} from 'react';
import { Text,View,StyleSheet,SafeAreaView,ScrollView,Dimensions,TouchableOpacity,KeyboardAvoidingView ,TextInput} from 'react-native';
const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);
import * as Store  from "../../components/async";

import {Put} from "../api"
const blue = "rgb(0,122,255)";

const styles = StyleSheet.create({
    container: {
  
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
      width:screenWidth
     
    },
    scrollView: {
        alignItems:'stretch',
        marginHorizontal: 0,
        height:'75%',
        width:screenWidth
      },
      item:{
          borderBottomColor:"gainsboro",
          borderBottomWidth:1,
          width:screenWidth,
          paddingTop:50,
          paddingLeft:10,
          height:100

          //justifyContent:"fl"
      },
      error:{
        width:screenWidth*0.8,
        textAlign:"left",
        color:"red"
      },
      back:{
        height:screenHeight*0.05,
        justifyContent:"center",
        alignItems:"flex-start",
         width:"100%",
         marginTop:50
      },
      input:{
          borderWidth:1,
          borderColor:"gainsboro",
          width:screenWidth*0.9,
          margin:10,
          textAlign:"left",
          paddingLeft:10,
          borderRadius:10,
          backgroundColor:"#F8F8F8",
          height:50
      },
      inputone:{
        borderWidth:1,
        borderColor:"gainsboro",
        width:screenWidth*0.9,
        margin:10,
        textAlign:"left",
        paddingLeft:10,
        marginTop:screenHeight*0.05,
        borderRadius:10,
        backgroundColor:"#F8F8F8",
        height:50
    },
    inputtwo:{
      borderWidth:1,
      borderColor:"gainsboro",
      width:screenWidth*0.9,
      margin:10,
     height:screenHeight*0.1,
      borderRadius:10,
      backgroundColor:"#F8F8F8",
      padding:10
    },
      button:{
        borderWidth:1,
        borderColor:"gainsboro",
        width:screenWidth*0.9,
        height:50,//screenHeight*0.06,
        margin:10,
        textAlign:"center",
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:blue,
        borderRadius:10
       
    
      },
      text:{
        color:"white"
      },
      header:{
        width:screenWidth,
        height:screenHeight*0.2,
        backgroundColor:blue,
        justifyContent:"flex-start",
        alignItems:"center",
        paddingTop:30,
        paddingRight:5
       
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
        top:screenWidth*0.42,
        left:0,
        borderBottomColor:"gainsboro",
        width:screenWidth,
        justifyContent:"center",
        alignItems:"center"
     
       
    
      }
      ,
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

export const Settings = ({navigation}) => {
  // const [user,setUser]=useState({})
  const [count,setount]=useState(0)
  const [username,setUsername]=useState('')
  const [usernameError,setUsernameError]=useState("")
  const [password,setPassword]=useState("")
  const [confirmPassword,setConfirmPassword]=useState("")
  const [confirmPasswordError,setConfirmPasswordError]=useState("")
  const [passwordError,setPasswordError]=useState("")

  const [emailError,setEmailError]=useState("")
  const [email,setEmail]=useState('')
  const [role,setRole]=useState('')
  const [description,setDescription]=useState('')
const getU = async() =>{
  const user= await Store.Get("user")
   const userObj=JSON.parse(user)
   setUsername(userObj.username)
   setEmail(userObj.email)
   setRole(userObj.role)
   setDescription(userObj.description)
  console.log('This is in the function',user)
}

  
useEffect(()=>{
  getU();
 
  // let uss=await user;


  },[])


  
  

 


const logout = async() =>{
  const signout = await Store.Remove("token")
  const signoutuser = await Store.Remove("user")
  navigation.navigate("Login")
}




const edit = async() =>{
  //setModalVisible(true)
  
  
  const url = "users/4";
  const body ={
      username,
      email,
      roles:role,
      description,
     

  }
  const saveValue = await Store.Get("token")


  const fe = await Put(url,body,saveValue)
  const use = JSON.stringify(fe)
  const g = await Store.Store("user",use)
  setCount(count+1)

  var formData = new FormData();
 
 // formData.append('profile_picture',  {uri: profileImage.path, name:`username${profileImage.modificationDate}`, type: 'image/jpg'});
 // formData.append('header_picture',  {uri: headerImage.path, name:`username${headerImage.modificationDate}`, type: 'image/jpg'});
  
  

  

  
  
 
 }

  const [active,setActive]= useState('people')
    const [cancel,setCancel]= useState(false)

    function password_validate(pass) {
      var re = {
          'capital' : /[A-Z]/,
          'digit'   : /[0-9]/,
          'symbol'   : /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/,
          'full'    : /[A-Za-z0-9]{7,13}$/
      };
      return re.capital .test(pass) && 
             re.digit   .test(pass) && 
             re.symbol  .test(pass) && 
             re.full    .test(pass);
  }
  
    const getUser = async(keyword) => {
      const url = `users?username=${keyword}`
      const find = await Get(url)
      console.log(find[0])
      if (find[0] !== undefined){
          setUsernameError("username already exists")
      }else{
        setUsernameError("")
      }
  
    }
  
    const getUserEmail = async(keyword) => {
      const url = `users?email=${keyword}`
      const find = await Get(url)
      console.log(find[0])
      if (find[0] !== undefined){
          setEmailError("email already exists")
      }else{
        setEmailError("")
      }
  
    }
   
    useEffect(()=>{
      const d = getUser(username)
   
  
    },[username])
  
    useEffect(()=>{
      const d = getUserEmail(email)
      
    
    },[email])
  
  
  
    useEffect(()=>{
      const d = password_validate(password)
     if(!d && password!==""){
       setPasswordError("weak password")
     }else{
       setPasswordError("")
     }
    },[password])
  
    
    useEffect(()=>{
      const d = password_validate(password)
     if(password !== confirmPassword){
       setConfirmPasswordError("confirm password is different from password")
     }else{
       setConfirmPasswordError("")
     }
    },[confirmPassword])
  
  


  return(
      <KeyboardAvoidingView style={styles.container}>
         
         <ScrollView>
          <TouchableOpacity onPress={()=>logout()}>
          <View style={styles.item}>
                    <Text style={{color:blue}}>
                        Logout
                    </Text>
         </View>
          </TouchableOpacity>
          


         <Text style={{marginTop:screenHeight*0.05,color:"grey",padding:10,fontWeight:"bold"}}>
           Edit Profile 
         </Text>
         <View style={{width:"100%",borderBottomWidth:1,borderColor:"gainsboro"}}>

         </View>
         <View style={{paddingLeft:10}}>
          <TextInput  placeholderTextColor={"grey"} value={username} onChangeText={(e)=>{setUsername(e)}} style={styles.inputone}  placeholder="username "/>
            {usernameError?<Text style={styles.error}>{usernameError}</Text> :<Text></Text>}
          <TextInput value={email} placeholderTextColor={"grey"} onChangeText={(e)=>{setEmail(e)}} style={styles.input}   placeholder="email"/>
          {emailError?<Text style={styles.error}>{emailError}</Text> :<Text></Text>}
        
        <TextInput value={role} placeholderTextColor={"grey"} onChangeText={(e)=>{setRole(e)}} style={styles.input}  placeholder="role (optional)"/>
        <Text></Text>
        <TextInput value={description} placeholderTextColor={"grey"}  onChangeText={(e)=>{setDescription(e)}} style={styles.inputtwo} multiline={true} numberOfLines={5}   placeholder="description about you (optional)"/>
        <Text></Text>
        <TouchableOpacity onPress={()=> edit()}><View style={styles.button}><Text style={styles.text} >Edit Profile</Text></View></TouchableOpacity>

        </View>
     
             </ScrollView>
      </KeyboardAvoidingView>
  )
};
;