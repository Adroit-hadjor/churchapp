import React,{useState,useEffect} from 'react';
import {SafeAreaView,ScrollView, Text,View,StyleSheet,Dimensions,TextInput,Button,TouchableOpacity ,FlatList, } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Get} from "../api"
import Orientation from 'react-native-orientation';
import { VLCPlayer, VlCPlayerView } from 'react-native-vlc-media-player';
import ProgressBar from 'react-native-progress/Bar';
import { block } from 'react-native-reanimated';


const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);
const blue = "rgb(0,122,255)"

const styles=StyleSheet.create({
itemx:{
    height:screenHeight*0.85,
    borderBottomWidth:1,
    borderColor:"lightgrey",
    backgroundColor:'gainsboro',
    flexDirection:"column",
    justifyContent:"space-around",
    
    alignItems:"center"

},
header:{
    height:screenHeight*0.15,borderBottomWidth:1,borderColor:"gainsboro",justifyContent:'flex-end',alignItems:'flex-start',flexDirection:'column',
    padding:10
}
})

export const VideoDetails=({route,navigation})=>{
    return(
        <View style={{backgroundColor:'gainsboro',height:screenHeight}}>
        <View style={{...styles.header,display:'flex',backgroundColor:'white'}}>
                {/* <View>
                {/* <TextInput onChangeText={(e)=>{setSearch(e),setCancel(true)}} value={search} placeholderTextColor="white" placeholder="Search Videos" style={{fontSize:15,paddingLeft:30,width:screenWidth*0.80,borderRadius:50,borderColor:"rgb(0,122,255)",height:screenHeight*0.055,backgroundColor:"gainsboro"}}  /> 
                    <Text style={{fontSize:20,width:screenWidth*0.7,paddingLeft:15,textTransform:'capitalize'}}>{route.params.title}</Text>
                </View> */}
        <TouchableOpacity style={{width:screenWidth*0.1,}} onPress={()=>{navigation.goBack()}}>
        <Text>
        <MaterialCommunityIcons name="close-circle-outline" color={'#b3454c'} size={30} />
        </Text>
        </TouchableOpacity>

        </View>
        <View  style={styles.itemx}>
          
         
          
          <View style={{flexDirection:"column",width:'100%',display:'flex',alignItems:'center',justifyContent:'flex-start',height:screenHeight*0.65,marginBottom:10}}>
          
                  <VlCPlayerView
                 ref={ref => (this.vlcPlayer = ref)}
                 style={{width:screenWidth*0.95,height:screenHeight*0.4,borderTopLeftRadius:15,borderTopRightRadius:15,}}
                 videoAspectRatio="5:3"
                 url= {route.params.url}
                initPaused={true}
                 showControls={true}
                 showLeftButton={true}
                 seek={1}
                 
                 
                 
             /> 
             <View style={{width:screenWidth*0.95,padding:15,backgroundColor:'white',borderBottomLeftRadius:15,borderBottomRightRadius:15,}}>
             <Text style={{textAlign:'left',fontSize:15,color:'black',textTransform:'capitalize'}}>Theme: {route.params.title}</Text> 
             <View style={{flexDirection:"row"}}>
                 <Text style={{textAlign:'left',fontSize:13,color:'grey',paddingTop:10}}>Date Streamed: {route.params.date.slice(0,10)}</Text> 
            </View>
            <View style={{flexDirection:"row"}}>
                 <Text style={{textAlign:'left',fontSize:13,color:'grey',paddingTop:10}}>Time: {route.params.date.slice(11,16)} GMT</Text> 
            </View>
             </View>
             
            
          </View>
          <View style={{flexDirection:"row"}}>
                 <Text style={{...styles.title,fontSize:14,color:'grey',fontStyle:'italic'}}>"You are too needed to be wasted"</Text> 
            </View>
          
        </View>
        </View>
      );
      
}