import React,{useState,useEffect} from 'react';
import { Text,View,StyleSheet,Dimensions,TouchableOpacity,Share } from 'react-native';
import {Avatar} from './avatar'
const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {ShareExample} from './share';
import { AsyncStorage } from '@react-native-async-storage/async-storage';






const styles = StyleSheet.create({
    container: {
 
      backgroundColor: '#fff',
      alignItems: 'stretch',
      justifyContent: 'center',
      height:'auto',
      borderBottomColor:'gainsboro',
      borderBottomWidth:1
    
    },
    iconSide:{flex:1},
    word:{
        flex:1,

    }
    
  });
  
  const ar = [1,3,4];

export const Announcement = ({id,text,title,name,likes,replies,fn,nav, ...props}) => {
  const navigation = nav;
 const trimmed = text.substr(0, 6);
  const [color,setColor] = useState("rgb(0,122,255)")
  const [count,setCount] = useState(0)
  

 
 

  
  useEffect(() => {
   
   },[count]);


  return(
      <View style={styles.container}>
         <View style={{height:'auto',paddingRight:screenWidth*0.03,paddingLeft:screenWidth*0.01,justifyContent:"space-between",borderColor:"red",flexDirection:"row",width:screenWidth,  paddingTop:20,
      paddingBottom:20}}>
            <Avatar img={'https://sampsonamoateng.net/wp-content/uploads/2018/08/prof8-458x416.jpg'} style={{flex:1,borderRadius:40,borderColor:"green"}}/>
            <View style={{paddingLeft:15,flex:2,flexDirection:"column",height:"auto"}}>
              <Text style={{fontSize:18,fontWeight:'bold'}}><Text style={{fontWeight:'normal'}}>@ </Text>{name}</Text>
              <Text style={{fontSize:15,fontWeight:'bold'}}>Announcement for choir</Text>
              <View style={{borderBottomWidth:1,borderBottomColor:'gainsboro'}}></View>
              <Text>The Mysteries of the Holy Communion

Follow Prophet Sampson daily as he teaches about the Mysteries of the bread & wine. These Biblically based teachings have radically changed the lives of those who follow the teachings as the power of the blood is revealed & then applied in a practical manner.</Text>
            </View >
         </View>
         <View style={{paddingRight:90,paddingLeft:90,flexDirection:"row",height:screenWidth*0.08,justifyContent:"space-between",alignItems:"center"}}>
             
             <Text>
             <TouchableOpacity style={{flexDirection:'row',justifyContent:'space-between',width:40}}  onPress={()=> navigation.navigate('Create_post')}>
              
               <Text> 12:09</Text>
             </TouchableOpacity>
             </Text>
             <Text> 
               <TouchableOpacity style={{flexDirection:'row',justifyContent:'center',width:'100%'}}  onPress={()=> onShare(text,name)}>
                 
                  <Text style={{width:'100%'}}>
                   23/10/1998
                 </Text>
                 </TouchableOpacity>
                 </Text>
            
         </View>
      </View>
  )
};







