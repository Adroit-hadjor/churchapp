import React, { Component,useState,useEffect } from 'react';
import { View,Text,StyleSheet,Dimensions,ScrollView,SafeAreaView,TouchableOpacity,Button,Pressable } from 'react-native';
import { LivePlayer } from "../../../components/livePlayer";
import {LiveDetails} from "../../../components/liveDetails"
const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);
import { Word,SelectedWord } from "../../../components/word";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import axios from 'axios';
import * as Store from "../../../components/async";
import { useFocusEffect } from '@react-navigation/native';
import {Get,POST} from '../../api'
const image = '../screens/images/edwin.jpg' 
const blue = "rgb(0,122,255)";
const arr = [image]

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      position:'relative'
     // alignItems: 'stretch',
     // justifyContent: 'center',
    },
    live:{
      marginTop:20,
      marginBottom:40,
         margin:20,
          borderWidth:1,
          borderColor:"gainsboro",
          borderRadius:15,
          flexDirection:"row",
          height:screenHeight*0.3,
          shadowColor: "gainsboro",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
        
         
         
    },
    scrollView: {
   
        marginHorizontal: 0,
        height:'100%'
      },
    liveComp:{
        borderWidth:1,
        height:'100%',
        width:0.5*screenWidth
      
    },
    words:{
       // flex: 0.7, justifyContent: 'center', alignItems: 'center' ,
       
        borderBottomWidth:1.5,
        borderColor:"gainsboro",
        height:'auto',
        overflow:'hidden'
    }
  });
  















export const Home = ({navigation}) => {
  const [isLife,setIsLife] = useState(true);
  const [posts,setPosts] = useState([])
  const [likedPosts,setLikedPosts] = useState([])
  const [count,setCount] = useState(0)
  const [user,setUser] = useState({})
  const [token,setToken] = useState("")


  


  const check = async()=>{
    const use = await Store.Get("user")
    console.log(use)
    const u = JSON.parse(use)
   
    setUser(u)
  }

  useEffect(
  () => {
    
    getLiked();
    }, [user])
 
 
useEffect(
() => {
    getWord();
    check();
  
  }, [count]
);




  const getWord = async() =>{
      const url = "posts"
      const get = await Get(url)
      setPosts(get)
    //  console.log(posts)
  }
  const getLiked = async() =>{
    const url = `like-posts?users_permissions_user=${user.id}`
    const get = await Get(url)
    setLikedPosts(get)
  
}

  function fn(){
    navigation.navigate('Create_post')
  }

  return(
    <SafeAreaView style={styles.container}>
        <View style={{height:screenHeight*0.07,flexDirection:"row",justifyContent:"flex-start",alignItems:"center",backgroundColor:"white",padding:10,borderBottomColor:"gainsboro",borderBottomWidth:1}}>
                
                    <Text style={{color:blue,fontSize:18}} > Home </Text>
                    <View></View> 
                   
                </View>
    <ScrollView style={styles.scrollView}>
      {isLife ?  
       <View elevation={5} style={styles.live}>
 <TouchableOpacity style={{width:screenWidth*0.4}} onPress={()=>{navigation.navigate('Live');}}>
         <LivePlayer/>
    </TouchableOpacity>
        <LiveDetails onPress={()=>setIsLife(!isLife)} theme="The Fear Of the Lord" duration="10hrs" other="First Service"/>
      
    </View>:

<View >
     
      
    </View>

    }
    <View
style={{
  borderBottomColor: 'gainsboro',
  borderBottomWidth: 1,
}}
/>
{posts.map((post)=>{
  console.log(post.users_permissions_user.profile_picture)
 
  return(
      <View key={post.id}  style={styles.words}>
   
 
   
      <TouchableOpacity delayPressIn={40} onPress={()=>{
         navigation.navigate('View', {
         post:post,
        });
      }} >
       <Word  nav={navigation} fn={fn}  name={post.users_permissions_user.username} prof_pic={post.users_permissions_user.profile_picture?"http://localhost:1337"+post.users_permissions_user.profile_picture.formats.small.url:''}
       text={post.word}
       likes={post.likes}
       replies={post.numberOfReplies}  
       id={post.id}     
       images={post.image1}
                  />
                  </TouchableOpacity>
   
   
      
    </View>)
    })}
  

  {
    posts.length == 0 ?  <View style={{justifyContent:"center",alignItems:"center",height:100}}>
   
 
   
   <Text> No post found</Text>
               
 
 
    
  </View> : <View></View>
  }
    

 
 </ScrollView>

 <View style={{position:'absolute',bottom:screenHeight*0.04,right:screenWidth*0.08,width:70,height:70,borderRadius:160,backgroundColor:"rgb(0,122,255)",justifyContent:"center",alignItems:"center"}}>
  <View>
  <Text style={{color:"white"}}>
    <TouchableOpacity delayPressIn={2} onPress={() => navigation.push('Create')}>
    <MaterialCommunityIcons color={"white"} name="pen-plus" size={25}/>
      </TouchableOpacity>
   </Text>
    </View>
 </View>
 </SafeAreaView>

   
  )
};


