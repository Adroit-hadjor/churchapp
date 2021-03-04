import { CurrentRenderContext } from '@react-navigation/native';
import React, { Component,useEffect,useState } from 'react';
import { View,Text,ScrollView,SafeAreaView,StyleSheet,TextInput,Dimensions,TouchableOpacity } from 'react-native';
const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Word,SelectedWord } from "../../../components/word";
import {Announcement} from '../../../components/announcement';
import {PersonCard} from '../../../components/personCard';
import {Get,Post} from '../../api';
import * as Storage from '../../../components/async'
const blue = "rgb(0,122,255)"
const active = "people"
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
    height:'88%'
  },
  search:{
    height:'12%',borderWidth:0,justifyContent:'space-around',alignItems:'center',flexDirection:'row'
  },
  filter:{
    height:60,borderBottomColor:"gainsboro",borderBottomWidth:1,justifyContent:'space-around',alignItems:'flex-end',flexDirection:'row',borderWidth:0
  }
  ,
  filter_items:{
 
   width:(screenWidth*(1/3)-10),
   textAlign:'center',
  
 
  }
});




  export function Trends({navigation}) {
    const [active,setActive]= useState('people')
    const [cancel,setCancel]= useState(false)
    const [search,setSearch]= useState("")
    const [post,setPost]= useState([])
    const [announcement,setAnnouncement]= useState([])
    const [people,setPeople]= useState([])
    const [token,setToken] = useState('')


    const check = async() =>{
      const tokens = await Storage.Get('token');
      setToken(tokens)
     console.log(token)
    }
    


    const Search = async(keyword) =>{
  

     
      if(active=="people"){
   
        const url = `users?username_contains=${keyword}`
          const find = await Get(url,token)
          setPeople(find)
        
      
     
    }
    else if (active=='posts'){
      const url = `posts?word_contains=${keyword}`
        const find = await Get(url,token)
        setPost(find)
      
    }
    else if(active=='announcements'){
      const url = `announcements?word_contains=${keyword}`
       const find = await Get(url,token)
       setAnnouncement(find)
    }
    }

    useEffect(()=>{
        check();
    },[])

    useEffect(()=>{
      Search(search)
  },[search])

    function FilteredView() {
      if(active=="people"){
   
          return(
            <>
            {
            people.length != 0 ? 
            people.map((peep)=>{
              return(
              <PersonCard key={peep.id} name={peep.username} text="asas"/>)
            })
            :
         <View style={{justifyContent:"flex-start",alignItems:"center",height:screenHeight,width:screenWidth}}>
           <Text style={{color:"grey",paddingTop:100}}>No results found</Text>
         </View>
            
          }
          </>
           
          )
        
       
      }
      else if (active=='posts'){
          return(

            <>
            {
            post.length != 0 ? 
            post.map((peep)=>{
              return(
             
                <Word key={peep.id} images={peep.image1}  name={peep.users_permissions_user.username} text={peep.word}
                  likes={109}
                  replies={25} 
                  id={9}
                  />
                )
            })
            :
         <View style={{justifyContent:"flex-start",alignItems:"center",height:screenHeight,width:screenWidth}}>
           <Text style={{color:"grey",paddingTop:100}}>No results found</Text>
         </View>
            
          }
          </>

          )
      }
      else if(active=='announcements'){
          return(
            <>
            {
            announcement.length != 0 ? 
            announcement.map((peep)=>{
              return(
                <Announcement key={peep.id}  name="adje" text="dsd"/>
                
                )
            })
            :
         <View style={{justifyContent:"flex-start",alignItems:"center",height:screenHeight,width:screenWidth}}>
           <Text style={{color:"grey",paddingTop:100}}>No results found</Text>
         </View>
            
          }
          </>
          
          )
      }
    }
    return (
      <SafeAreaView style={styles.container}>
      
        <View style={styles.search}>
       {
            cancel ? 
            <TouchableOpacity onPress={()=>{setSearch("");setCancel(false)}}>
                 <Text>
        <MaterialCommunityIcons name="close" color={"rgb(0,122,255)"} size={30} />
        </Text>
            </TouchableOpacity>
           
            :
            <View style={{display:'none'}}>

            </View>


       } 
        <View>
        <TextInput onChangeText={(e)=>{setSearch(e),setCancel(true)}} value={search} placeholder="Search " style={{fontSize:15,paddingLeft:30,width:screenWidth*0.75,borderRadius:50,borderColor:"rgb(0,122,255)",height:screenHeight*0.055,backgroundColor:"gainsboro"}}  />
        </View>
        <TouchableOpacity onPress={()=>{navigation.goBack()}}>
        <Text>
        <MaterialCommunityIcons name="arrow-left" color={"rgb(0,122,255)"} size={30} />
        </Text>
        </TouchableOpacity>
        </View>


        <View style={styles.filter}>
        <TouchableOpacity onPress={()=>setActive('people')}>
        <Text style={styles.filter_items,{borderBottomWidth:(active==='people'? 4:0),borderColor:(active==='people'? blue:'white'),color:(active==='people' ? blue:'grey'),width:(screenWidth*(1/3)),textAlign:'center',paddingBottom:(active==='people' ? 10:10),fontSize:15}}>
            People   
        </Text>
        </TouchableOpacity>
        <View>
          <TouchableOpacity onPress={()=>setActive('posts')}>
          <Text style={styles.filter_items,{borderBottomWidth:(active==='posts'? 4:0),borderColor:(active==='posts'? blue:'white'),color:(active==='posts' ? blue:'grey'),width:(screenWidth*(1/3)),textAlign:'center',paddingBottom:(active==='people' ? 10:10),fontSize:15}}>
          Posts
          </Text>
          </TouchableOpacity>
           
        </View>
        <TouchableOpacity onPress={()=>setActive('announcements')}>
        <Text style={styles.filter_items,{borderBottomWidth:(active==='announcements'? 4:0),borderColor:(active==='announcements'? blue:'white'),color:(active==='announcements' ? blue:'grey'),width:(screenWidth*(1/3)),textAlign:'center',paddingBottom:(active==='people' ? 10:10),fontSize:15}}>
       Announcements
        </Text>
        </TouchableOpacity>
        </View>
       
   
   
   
   
   
   
    <ScrollView style={styles.scrollView}>
         
       <FilteredView/>
         
      </ScrollView>
      </SafeAreaView>
    );
  }