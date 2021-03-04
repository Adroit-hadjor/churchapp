
import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar ,TouchableOpacity, Touchable,Dimensions,ScrollView } from 'react-native';
const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);
import {Avatar} from "../../../components/avatar"
const blue = "rgb(0,122,255)";


export const ViewAnnouncement = ({navigation}) => {
  return(
    
      <SafeAreaView style={{ flex: 1,backgroundColor:"white" }}>
        <View style={{height:screenHeight*0.07,flexDirection:"row",justifyContent:"space-between",alignItems:"center",width:screenWidth,backgroundColor:"white",padding:10,borderBottomColor:"gainsboro",borderBottomWidth:1}}>
                <TouchableOpacity onPress={()=>{navigation.goBack()}}>
                <Text style={{color:blue}}>Go Back</Text>
                  </TouchableOpacity>  
                    <Text style={{color:blue,width:screenWidth*0.5,borderRadius:40,paddingLeft:screenWidth*0.06,fontSize:18}} > Announcement </Text>
                    <View></View> 
                   
                </View>
                <ScrollView >
                  <View style={{justifyContent:"center",alignItems:"center",paddingTop:30}}>
                  <Text style={{fontSize:30,borderBottomWidth:1,borderBottomColor:"gainsboro",textAlign:"center"}}>THE ANNOUNCEMENT TITLE </Text> 
                  </View>
                  <View style={{justifyContent:"center",alignItems:"center",padding:20}}>
                  <Text style={{textAlign:"justify",lineHeight:screenHeight*0.045}}>The Mysteries of the Holy Communion
                   Follow Prophet Sampson daily as he teaches about the Mysteries
                    of the bread & wine. These Biblically based teachings have radically
                     changed the lives of those who follow the teachings as the power of the
                      blood is revealed & then applied in a practical manner. 
                      The Mysteries of the Holy Communion
                   Follow Prophet Sampson daily as he teaches about the Mysteries
                    of the bread & wine. These Biblically based teachings have radically
                     changed the lives of those who follow the teachings as the power of the
                      blood is revealed & then applied in a practical manner. 
                      The Mysteries of the Holy Communion
                   Follow Prophet Sampson daily as he teaches about the Mysteries
                    of the bread & wine. These Biblically based teachings have radically
                     changed the lives of those who follow the teachings as the power of the
                      blood is revealed & then applied in a practical manner. 
                    </Text> 
                  </View>
                  <View style={{justifyContent:"center",alignItems:"flex-start",width:screenWidth,height:screenHeight*0.05,paddingLeft:10}}>
                  <Text>
                    <Text style={{fontWeight:"bold"}}>
                    Date :
                    </Text>
                  12/02/2020 </Text> 
                  </View>
                  <View style={{justifyContent:"center",alignItems:"flex-start",width:screenWidth,height:screenHeight*0.05,paddingLeft:6}}>
                  <Text> <Text style={{fontWeight:"bold"}}>
                    Time :
                    </Text>19:02 </Text> 
                  </View>
               
                </ScrollView>
       
      </SafeAreaView>
  )
};
;