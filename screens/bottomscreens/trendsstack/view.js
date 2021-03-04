import React,{useState,useEffect} from 'react';
import { SafeAreaView,View,ScrollView, KeyboardAvoidingView, TextInput, TouchableOpacity,StyleSheet, Text, Platform, TouchableWithoutFeedback, Button, Keyboard ,Dimensions,ActivityIndicator } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);
import { Reply,SelectedWord } from "../../../components/word";
import { Post,Get } from "../../api";
import * as Storage from '../../../components/async'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    position:'relative'
   // alignItems: 'stretch',
   // justifyContent: 'center',
  },
 
  scrollView: {
 
      marginHorizontal: 0,
      height:'100%'
    },
 
  words:{
     // flex: 0.7, justifyContent: 'center', alignItems: 'center' ,
     
      borderBottomWidth:1.5,
      borderColor:"gainsboro",
      height:'auto',
      overflow:'hidden'
  }
});


const blue = "rgb(0,122,255)"

export function ViewPostScreen({ route,navigation }) {
  const [reply,setReply]=useState("")
  const [reps,setReps]=useState([])
  const { post } = route.params;
  const replies=post.replies;
  const [count,setCount] = useState(0)
  const [token,setToken] = useState('')
  

  
const check = async() =>{
  const tokens = await Storage.Get('token');
  setToken(tokens)

}
const getReplies = async()=>{
  const url = `replies?post=${post.id}`
  const find = await Get(url,token)
  setReps(find)
}

useEffect(()=>{

  check();
  getReplies();

  },[])
  useEffect(()=>{

   
    getReplies();
  
    },[count])

  
    function fn(){
      preNav.navigate('Create_post')
    }
    const send = async() =>{
      if(!reply){
       
        return
      }
    
   
      const body = {
        word:reply,
        post:post.id
      }

      


      const url = "replies"
      const go = await Post(url,body,JSON.stringify(token))
    setCount(count+1)
    setReply("")
       
    }
  
    return (
      <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
     
      <View
  style={{
    borderBottomColor: 'gainsboro',
    borderBottomWidth: 1,
  }}
  />
    
       <View style={styles.words}>
     
     
     <TouchableOpacity delayPressIn={20} onPress={()=>console.log('sassas')} >
      <SelectedWord 
      fn={fn}
      name={post.users_permissions_user.username}
      text={post.word}
      likes={post.likes}
      replies={post.numberOfReplies}  
      id={1}   
        
                 />
                 </TouchableOpacity>
  
  
     
   </View>
   {reps.length>0 ?

   reps.map(reply=>{
     return(
      <View key={reply.id} style={styles.words}>
     
    
   
      <Reply  fn={fn} name={reply.users_permissions_user.username} text={reply.word}
       likes={109}
       replies={25} 
       id={reply.id}
       />

</View>
     )
   })
   
   
   
   
 
 

   :
   
   <View style={{justifyContent:"center",alignItems:"center"}}>
     <ActivityIndicator/>
     </View>}
  
 
   
   </ScrollView>
  
   <View style={{flexDirection:"row",justifyContent:"space-around",alignItems:"center",width:screenWidth,backgroundColor:"white",padding:10,borderTopWidth:1,borderColor:"gainsboro"}}>
                    <TextInput value={reply} onChangeText={(e)=>{setReply(e)}} style={{color:"black",width:screenWidth*0.85,borderRadius:40,paddingLeft:20,backgroundColor:"gainsboro"}} placeholderTextColor="grey" placeholder="Reply here" multiline={true} onSubmitEditing={()=>{send();}} />
                  <TouchableOpacity onPress={()=>send()}>
                  <MaterialCommunityIcons color={blue} name="send-outline" size={25}/>
                  </TouchableOpacity> 
                   
                </View>
   </SafeAreaView>
  
    );
  }
  
  ;