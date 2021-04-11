import React from 'react';
import {SafeAreaView,ScrollView, Text,View,StyleSheet,Dimensions,TextInput,Button } from 'react-native';

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);
const blue = "rgb(0,122,255)"
const styles = StyleSheet.create({
    container: {
        flex:1
    },
    header:{
        width:'100%',
        borderBottomWidth:1,
        borderBottomColor:'gainsboro',
        height:screenHeight*0.10,
        justifyContent:'center',
        alignItems:'flex-start'

        
    },
    body:{
        flexDirection:'column',
       justifyContent:'space-evenly',
       alignItems:'flex-start' ,
       height:screenHeight*0.5,
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
export const Video = (params) => {
  return(
      <SafeAreaView style={styles.container}>
         
          <ScrollView style={styles.scrollview}>

          <View style={styles.header}>
       <Text style={{fontSize:20,paddingLeft:10,color:blue}}>
              Contact Us
          </Text>
          <Text style={{fontSize:15,paddingLeft:10,color:'grey'}}>
          Get in touch and we'll get back to you as soon as we can.  We look forward to hearing from you!
          </Text>
       </View>
       <View style={styles.body}>
           <View style={{borderBottomWidth:1,borderColor:'gainsboro',paddingBottom:30}}>
           <Text style={{fontSize:20,color:blue,paddingBottom:5}}>
               Get In Touch
           </Text>
           <Text style={{fontSize:15,color:'black'}}>
           Prophet Sampson’s vision is to revolutionize the prophetic across the world. It’s not enough for you to simply receive prophecy but you must also receive prophetic direction to ensure the prophecy manifests in your life. This is an important part of the prophetic process that Prophet Sampson incorporates in his ministry. As a result countless people who have encountered this Man of God have experienced the miraculous in their lives.
           </Text>
           </View>
          
           <Text style={{color:blue}}>
               Phone: <Text style={{color:'black'}}>+1(704) 879-3040 |+233 21 206 3656|+233 20 149 6197</Text>
           </Text>
           <Text style={{color:blue}}>
               Email: <Text style={{color:'black'}}>Info@Sampsonamoateng.Net</Text>
           </Text>
           <Text style={{color:blue}}>
               Address:  <Text style={{color:'black'}}>House Of Miracle Ministries {"\n                 "}  P.O.Box MD2155 Madina {"\n                  "} Accra Ghana</Text>
           </Text>
       </View>
       <View style={styles.form}>
           <TextInput style={{borderWidth:1,borderColor:'gainsboro',borderRadius:10,height:50,padding:10}} placeholder="Enter Name"/>
       </View>
       <View style={styles.form}>
           <TextInput style={{borderWidth:1,borderColor:'gainsboro',borderRadius:10,height:50,padding:10}} placeholder="Enter Email"/>
       </View>
       <View style={styles.form}>
           <TextInput style={{borderWidth:1,borderColor:'gainsboro',borderRadius:10,height:50,padding:10}} placeholder="Enter Country"/>
       </View>
       <View style={styles.form}>
           <TextInput style={{borderWidth:1,borderColor:'gainsboro',borderRadius:10,height:100,padding:10}} placeholder="Enter Message" multiline={true} numberOfLines={5} />
       </View>
       <View style={styles.form}>
          
           <View style={{backgroundColor:blue,borderRadius:10,height:screenHeight*0.05,justifyContent:'center',alignItems:'center'}}>
                <Text style={{color:'white'}}>SEND</Text>  
                 </View>
       </View>
         
          </ScrollView>
      </SafeAreaView>
     
  )
};
;