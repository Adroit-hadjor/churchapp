import React,{useState,useEffect} from 'react';
import { SafeAreaView,View,ScrollView, KeyboardAvoidingView, TextInput, TouchableOpacity,StyleSheet, Text, Platform, TouchableWithoutFeedback, Button, Keyboard ,Dimensions } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);
import { Reply,SelectedWord } from "../../../components/word";


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




export function ViewPostScreen({ route,navigation }) {
  const { post } = route.params;
  const replies=post.replies;
  const [count,setCount] = useState(0)
   useEffect(()=>{
     console.log(post.replies)
   },[count])
    function fn(){
      preNav.navigate('Create_post')
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
   {post.replies ?

   replies.map(reply=>{
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
   
   <View>
     </View>}
  
 
   
   </ScrollView>
  
   
   </SafeAreaView>
  
    );
  }
  
  ;