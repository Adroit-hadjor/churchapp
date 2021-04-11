
import React,{useState} from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text,TextInput, StatusBar ,TouchableOpacity, Touchable,Dimensions } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);
import {Avatar} from "../../../components/avatar"
const blue = "rgb(0,122,255)";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"white"
   
  },
  item: {
    paddingLeft:10,
    paddingTop:10,
    paddingBottom:10,
    marginVertical: 8,
    marginHorizontal: 0,
    borderBottomWidth:1,
    borderColor:"gainsboro",
    flexDirection:"row",
    justifyContent:"space-between",
    
    alignItems:"center"


  },
  title: {
    fontSize: 15,
    paddingLeft:10
   
  },
  message: {
    fontSize: 14,
    paddingLeft:10,
    color:"grey"
   
  },
  search:{
    height:'12%',borderBottomWidth:1,justifyContent:'space-around',alignItems:'center',flexDirection:'row',borderColor:"gainsboro"
  },
});

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Firsvvcvtggfgfgfgfgfgfgfgfdfdfdfdfdf Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

const Item = ({ title, navigation}) => (
  <TouchableOpacity onPress={()=>{navigation.navigate("Messaging")}} style={styles.item}>
    <View style={{flexDirection:"row",alignItems:"center"}}>
    <Avatar img={"https://lh3.googleusercontent.com/ogw/ADGmqu-1qLmfMUE5DH8sLgUW8hmCCls1LaOa_B7oS3KixA=s32-c-mo"}/>
   <View>
   <Text style={styles.title}>{title}</Text>
   <Text style={styles.message}>{title}</Text>
     </View> 
    </View>
    <View style={{flexDirection:"row"}}>
  
    </View>
    
  </TouchableOpacity>
);


export const UserList = ({navigation}) => {

  const [cancel,setCancel]= useState(false)
  const [search,setSearch]= useState("")

  const renderItem = ({ item }) => (
    <Item navigation={navigation} title={item.title} />
  );


  return(
    <SafeAreaView style={styles.container}>
        <View style={{height:screenHeight*0.07,flexDirection:"row",justifyContent:"space-between",alignItems:"center",width:screenWidth,backgroundColor:"white",padding:5,borderBottomColor:"gainsboro",borderBottomWidth:1}}>
                <TouchableOpacity onPress={()=>{navigation.goBack()}}>
                <Text style={{color:blue}}>Go Back</Text>
                  </TouchableOpacity>  
                    <Text style={{color:blue,width:screenWidth*0.5,borderRadius:40,paddingLeft:screenWidth*0.06,fontSize:18}} > Messages </Text>
                    <View></View> 
                   
                </View>
                <View style={styles.search}>
     
        <View>
        <TextInput onChangeText={(e)=>{setSearch(e),setCancel(true)}} value={search} placeholder="Search " style={{fontSize:15,paddingLeft:30,width:screenWidth*0.95,borderRadius:10,borderColor:"rgb(0,122,255)",height:screenHeight*0.055,backgroundColor:"gainsboro"}}  />
        </View>
        
        </View>


    <FlatList
      data={DATA}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
  </SafeAreaView>
  )
};
