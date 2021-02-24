import React, { Component,useState,useEffect } from 'react';
import { View,Text,StyleSheet,Dimensions,ScrollView,SafeAreaView,TouchableOpacity,Button,Pressable } from 'react-native';
import { LivePlayer } from "../../../components/livePlayer";
import {LiveDetails} from "../../../components/liveDetails"
const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);
import { Word,SelectedWord } from "../../../components/word";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { useFocusEffect } from '@react-navigation/native';
import {Get} from '../../api'


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
  const [count,setCount] = useState(0)


/*   useFocusEffect(
    React.useCallback(() => {
      getWord();
    }, [count])
  );
 */
useEffect(
() => {
    getWord();
  }, [count]
);


  const getWord = async() =>{
      const url = "posts"
      const get = await Get(url)
      setPosts(get)
      console.log(posts)
  }

  function fn(){
    navigation.navigate('Create_post')
  }

  return(
    <SafeAreaView style={styles.container}>
    <ScrollView style={styles.scrollView}>
      {isLife ?  
       <View elevation={5} style={styles.live}>
 <TouchableOpacity style={{width:screenWidth*0.4}} onPress={()=>{navigation.navigate('Contact');}}>
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
  return(
      <View key={post.id}  style={styles.words}>
   
 
   
      <TouchableOpacity delayPressIn={40} onPress={()=>{
         navigation.navigate('View', {
         post:post,
        });
      }} >
       <Word  nav={navigation} fn={fn}  name={post.users_permissions_user.username}
       text={post.word}
       likes={post.likes}
       replies={post.numberOfReplies}  
       id={post.id}     
                  />
                  </TouchableOpacity>
   
   
      
    </View>)
    })}
  
     <View style={styles.words}>
   
 
   
   <TouchableOpacity delayPressIn={40} onPress={()=>{
      navigation.navigate('View');
   }} >
    <Word nav={navigation} fn={fn}  name="Kofi Adjololo" 
    text="Lorem ipsum dolor sit amet,
               consectetuer adipiscing elisggs. "
    likes={10}
    replies={25}  
    id={1}     
               />
               </TouchableOpacity>


   
 </View>
 <View style={styles.words}>
   
  
  <TouchableOpacity delayPressIn={40}>
   <Word nav={navigation} fn={fn} name="Kofi Adjololo" text="Lorem ipsum dolor sit amet,
               consectetuer adipiscing elit. Aenean commodo 
               ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis 
               parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu,
               pretium quis, sem. Nulla consequat masaaaaaaaaaaaaaaaaa" 
    likes={109}
    replies={25} 
    id={2}
    />
    </TouchableOpacity>


</View>
<View style={styles.words}>
   
  
  <TouchableOpacity delayPressIn={40} >
   <Word nav={navigation} fn={fn} name=" Benzema" text="Lorem ipsum dolor sit amet,
               consectetuer adipiscing elit. Aenean commodo 
               ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis 
               parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu,
               pretium quis, sem. Nulla consequat mas
               " 
    likes={109}
    replies={25} 
    id={9}
    />
    </TouchableOpacity>


</View>
 
 </ScrollView>

 <View style={{position:'absolute',bottom:screenHeight*0.04,right:screenWidth*0.08,width:70,height:70,borderRadius:160,backgroundColor:"rgb(0,122,255)",justifyContent:"center",alignItems:"center"}}>
  <View>
  <Text style={{color:"white"}}>
    <TouchableOpacity delayPressIn={2} onPress={() => navigation.navigate('Create')}>
    <MaterialCommunityIcons color={"white"} name="pen-plus" size={25}/>
      </TouchableOpacity>
   </Text>
    </View>
 </View>
 </SafeAreaView>

   
  )
};


