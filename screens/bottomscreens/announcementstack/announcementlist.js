import React, { Component,useEffect,useState } from 'react';
import { View,Text,ScrollView,SafeAreaView,StyleSheet,TextInput,Dimensions,TouchableOpacity } from 'react-native';
const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Announcement  } from "../../../components/announcement";
import {Get} from "../../api"
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
    height:'75%'
  },
  search:{
    height:'15%',
    borderWidth:0,
    justifyContent:'space-between',
    alignItems:'center',
    flexDirection:'row',
    paddingLeft:40,
    paddingRight:40,
    borderBottomWidth:1,
    borderBottomColor:"rgb(0,122,255)"
  }
});




  export function Announcements({navigation}) {
    const [announcement,setAnnouncement] = useState([])
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
      const url = "announcements"
      const get = await Get(url)
      setAnnouncement(get)
      console.log(announcement)
  }
 

    return (
      <SafeAreaView style={styles.container}> 
        <View style={styles.search}>
        <Text style={{fontSize:20,color:"rgb(0,122,255)"}}>
        Announcements
        </Text>
        <TouchableOpacity onPress={()=>{navigation.goBack()}}>
        <Text>
        <MaterialCommunityIcons name="arrow-left" color={"rgb(0,122,255)"} size={30} />
        </Text>
        </TouchableOpacity>
        </View>      
    <ScrollView style={styles.scrollView}>
        <TouchableOpacity onPress={()=>navigation.navigate("ViewAnnouncement")}>
          <Announcement name="adje" text="dsd"/>
        </TouchableOpacity>
      </ScrollView>
      </SafeAreaView>
    );
  }