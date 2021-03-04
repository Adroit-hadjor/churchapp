
import React, { Component } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text,TextInput, StatusBar ,TouchableOpacity, Touchable,Dimensions } from 'react-native';
const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);
import {Avatar} from "../../../components/avatar";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const blue = "rgb(0,122,255)"
const styles = StyleSheet.create({
  container: {
    flex: 1,
  
   
  },
  item: {
  
    paddingTop:4,
    paddingBottom:0,
    marginVertical: 0,
    marginHorizontal: 0,
    borderColor:"gainsboro",
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    width:screenWidth,
    paddingRight:10,
    paddingLeft:10



  },
  title: {
    fontSize: 15,
    paddingLeft:10
   
  },
  messageRight: {
    fontSize: 14,
    marginRight:18,
    color:"white",
    backgroundColor:blue,
    height:"auto",
    padding:10,
    borderTopRightRadius:10,
    borderTopLeftRadius:10,
    borderBottomLeftRadius:10,
    maxWidth:screenWidth*0.5
   
   
  },
  messageLeft: {
    fontSize: 14,
    paddingLeft:10,
    color:"white",
    backgroundColor:blue,
    height:"auto",
    padding:10,
    borderTopRightRadius:10,
    borderTopLeftRadius:10,
    borderBottomRightRadius:10,
    maxWidth:screenWidth*0.5
   
  },
});

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Item a',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aah97f63',
    title: 'Item bsss sssss ssss sssss sssss ssss ssss ssss ssss ssss ssss sss  dsd ds dsd sdsd dsd dsdsd', 
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d724',
    title: 'Item a  sssss ssss sssss sssss',
  },
 
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97fh63',
    title: 'Item bsss sssss ssss sssss sssss ssss ssss ssss ssss ssss ssss sss  dsd ds dsd sdsd dsd dsdsd', 
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d721',
    title: 'Item a',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f6h3',
    title: 'Item bsss sssss ssss sssss sssss ssss ssss ssss ssss ssss ssss sss  dsd ds dsd sdsd dsd dsdsd', 
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72s',
    title: 'Item a',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bab',
    title: 'Item b',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63h',
    title: 'Itd', 
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29dy72',
    title: 'Item a bsss sssss ssss sssss sssss ssss ssss ssss ',
  },
];

const Item = ({ title, navigation}) => (
  title.includes('Item a') ? <View onPress={()=>{navigation.navigate("Messaging")}} style={styles.item}>
  <View style={{flexDirection:"row",alignItems:"center"}}>
 
 <View>
 
 <Text style={styles.messageLeft}>{title}</Text>
   </View> 
  </View>
  <View style={{flexDirection:"row",width:screenWidth*0.4}}>

  </View>
  
</View> :

<View onPress={()=>{navigation.navigate("Messaging")}} style={styles.item}>
  
   
    <View style={{flexDirection:"row",alignItems:"center",width:screenWidth,justifyContent:"space-between"}}>
    <View style={{flexDirection:"row",width:screenWidth*0.4}}>
  
    </View>
   <View >
   
   <Text style={styles.messageRight}>{title}</Text>
     </View> 
    </View>
    
  </View>

  
);



export const Messaging = ({navigation}) => {

  
  

  const renderItem = ({ item }) => (
    <Item navigation={navigation} title={item.title} />
  );


  return(
    <SafeAreaView style={styles.container}>
      <View style={{height:screenHeight*0.07,flexDirection:"row",justifyContent:"space-between",alignItems:"center",width:screenWidth,backgroundColor:"white",padding:10}}>
                <TouchableOpacity onPress={()=>{navigation.goBack()}}>
                <Text style={{color:blue}}>Go Back</Text>
                  </TouchableOpacity>  
                    <Text style={{color:"grey",width:screenWidth*0.5,borderRadius:40,paddingLeft:screenWidth*0.1}} > @ Rema </Text>
                    <View></View> 
                   
                </View>
    <FlatList
      data={DATA}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
     <View style={{flexDirection:"row",justifyContent:"space-around",alignItems:"center",width:screenWidth,backgroundColor:"white",padding:10}}>
                    <TextInput style={{color:"blackd",width:screenWidth*0.85,borderRadius:40,paddingLeft:20,backgroundColor:"gainsboro"}} placeholderTextColor="grey" placeholder="Reply here" />
                    <MaterialCommunityIcons color={blue} name="send-outline" size={25}/>
                   
                </View>
  </SafeAreaView>
  )
};
;