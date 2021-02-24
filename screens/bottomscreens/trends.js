import { CurrentRenderContext } from '@react-navigation/native';
import React, { Component,useEffect,useState } from 'react';
import { View,Text,ScrollView,SafeAreaView,StyleSheet,TextInput,Dimensions,TouchableOpacity } from 'react-native';
const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Word,SelectedWord } from "../../components/word";
import {Announcement} from '../../components/announcement';
import {PersonCard} from '../../components/personCard';
import {Get,Post} from '../api';
import * as Storage from '../../components/async'
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
    height:'5%',borderBottomColor:blue,borderBottomWidth:1,justifyContent:'space-around',alignItems:'flex-end',flexDirection:'row'
  }
  ,
  filter_items:{
 
   width:(screenWidth*(1/3)-10),
   textAlign:'center',
 
  }
});




  export function Trends() {
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
          <Text style={{color:"black"}}>No results found</Text>
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
             
                <Word key={peep.id}  name={peep.users_permissions_user.username} text={peep.word}
                  likes={109}
                  replies={25} 
                  id={9}
                  />
                )
            })
            :
          <Text style={{color:"black"}}>No results found</Text>
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
          <Text style={{color:"black"}}>No results found</Text>
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
            <TouchableOpacity onPress={()=>{setCancel(false);setSearch("")}}>
                 <Text>
        <MaterialCommunityIcons name="close" color={"rgb(0,122,255)"} size={30} />
        </Text>
            </TouchableOpacity>
           
            :
            <View style={{display:'none'}}>

            </View>


       } 
        <View>
        <TextInput onChangeText={(e)=>{setSearch(e),setCancel(true)}} placeholder="Search " style={{fontSize:15,paddingLeft:30,borderWidth:1,width:screenWidth*0.75,borderRadius:50,borderColor:"rgb(0,122,255)",height:screenHeight*0.055}}  />
        </View>
        <Text>
        <MaterialCommunityIcons name="cog-outline" color={"rgb(0,122,255)"} size={30} />
        </Text>
        </View>


        <View style={styles.filter}>
        <TouchableOpacity onPress={()=>setActive('people')}>
        <Text style={styles.filter_items,{borderBottomWidth:(active==='people'? 4:0),borderColor:(active==='people'? blue:'white'),color:(active==='people' ? blue:'grey'),width:(screenWidth*(1/3)),textAlign:'center',paddingBottom:(active==='people' ? 0:5),fontSize:15}}>
            People   
        </Text>
        </TouchableOpacity>
        <View>
          <TouchableOpacity onPress={()=>setActive('posts')}>
          <Text style={styles.filter_items,{borderBottomWidth:(active==='posts'? 4:0),borderColor:(active==='posts'? blue:'white'),color:(active==='posts' ? blue:'grey'),width:(screenWidth*(1/3)),textAlign:'center',paddingBottom:(active==='people' ? 0:5),fontSize:15}}>
          Posts
          </Text>
          </TouchableOpacity>
           
        </View>
        <TouchableOpacity onPress={()=>setActive('announcements')}>
        <Text style={styles.filter_items,{borderBottomWidth:(active==='announcements'? 4:0),borderColor:(active==='announcements'? blue:'white'),color:(active==='announcements' ? blue:'grey'),width:(screenWidth*(1/3)),textAlign:'center',paddingBottom:(active==='people' ? 0:5),fontSize:15}}>
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