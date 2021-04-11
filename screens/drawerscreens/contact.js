import React from 'react';
import {SafeAreaView,ScrollView, Text,View,StyleSheet,Dimensions,TextInput,Button,Alert } from 'react-native';

import { TouchableOpacity } from 'react-native-gesture-handler';
import { useEffect, useState } from 'react';
import REACT_APP_API_URL from './../api'
import io from 'socket.io-client'
const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);
const blue = "rgb(0,122,255)"

const socket =io(REACT_APP_API_URL)

const styles = StyleSheet.create({
    container: {
        flex:1
    },
    header:{
        width:'100%',
        borderBottomWidth:1,
        borderBottomColor:'gainsboro',
        height:'auto',
        justifyContent:'center',
        padding:15,
        alignItems:'flex-start'

        
    },
    body:{
        flexDirection:'column',
       justifyContent:'space-evenly',
       alignItems:'flex-start' ,
       padding:15,
       height:'auto',
       paddingLeft:10
    },
    form:{
        padding:10,
        paddingLeft:20,
        paddingRight:20
    },
    scrollView: {
   
        marginHorizontal: 0,
        height:'88%'
      },
})
export const Contact = (params) => {





  return(
      <SafeAreaView style={styles.container}>
          <ScrollView style={styles.scrollview}>
          <View style={styles.header}>
       <Text style={{fontSize:20,color:blue}}>
              Contact Us
          </Text>
          <Text style={{fontSize:15,color:'grey',lineHeight:25,paddingTop:10}}>
          Get in touch and we'll get back to you as soon as we can.  We look forward to hearing from you!
          </Text>
       </View>
       <View style={styles.body}>
           <View style={{borderBottomWidth:1,borderColor:'gainsboro',paddingBottom:30}}>
           <Text style={{fontSize:20,color:blue,paddingBottom:5}}>
               Get In Touch
           </Text>
           <Text style={{fontSize:15,color:'black',lineHeight:30,padding:5}}>
           Prophet Sampson’s vision is to revolutionize the prophetic across the world. It’s not enough for you to simply receive prophecy but you must also receive prophetic direction to ensure the prophecy manifests in your life. This is an important part of the prophetic process that Prophet Sampson incorporates in his ministry. As a result countless people who have encountered this Man of God have experienced the miraculous in their lives.
           </Text>
           </View>
          
           <Text style={{color:blue,lineHeight:25,paddingTop:10}}>
               Phone:{'\n'}
               <Text style={{color:'black'}}>+1(704) 879-3040 {'\n'}+233 21 206 3656{'\n'}+233 20 149 6197</Text>
           </Text>
           <Text style={{color:blue,lineHeight:25}}>
               Email:{'\n'} <Text style={{color:'black'}}>info@sampsonamoateng.net</Text>
           </Text>
           <Text style={{color:blue,lineHeight:25}}>
               Address:{'\n'}  <Text style={{color:'black',textAlign:'left'}}>House Of Miracle Ministries {"\n"}  P.O.Box MD2155 Madina {"\n "} Accra Ghana</Text>
           </Text>
       </View>

    
       <View style={{...styles.form,borderTopColor:'gainsboro',borderTopWidth:1,paddingTop:20}}>
           <Text style={{marginBottom:20,fontSize:16}}>Message</Text>
           <TextInput style={{borderWidth:1,borderColor:'gainsboro',borderRadius:10,height:100,padding:10}} placeholder="Enter Message" multiline={true} numberOfLines={5} />
       </View>
       <View style={styles.form}>
          
           <TouchableOpacity onPress={()=>{
               socket.emit('test')
           }} style={{backgroundColor:blue,borderRadius:10,height:screenHeight*0.05,justifyContent:'center',alignItems:'center'}}>
                <Text style={{color:'white'}}>SEND</Text>  
                 </TouchableOpacity>
       </View>
          </ScrollView>
      </SafeAreaView>
     
  )
};
;