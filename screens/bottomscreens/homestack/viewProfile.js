import React,{useState,useEffect} from 'react';
import { SafeAreaView,View,ScrollView, KeyboardAvoidingView, TextInput, TouchableOpacity,StyleSheet,ImageBackground, Text, Platform, TouchableWithoutFeedback, Button, Keyboard ,Dimensions } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);
import {  Word } from "../../../components/word";
import { Reply,SelectedWord } from "../../../components/word";
const blue = "rgb(0,122,255)";
import {AvatarProfile} from '../../../components/avatar';
import { Get,Post } from "../../api";
import * as Storage from "../../../components/async"

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
      height:'100%'
    },
 
  words:{
     // flex: 0.7, justifyContent: 'center', alignItems: 'center' ,
     
      borderBottomWidth:1.5,
      borderColor:"gainsboro",
      height:'auto',
      overflow:'hidden'
  },
  avatar:{
    position:"absolute",
    top:screenWidth*0.22,
    left:0,
    borderBottomColor:"gainsboro",
    width:screenWidth,
    justifyContent:"space-between",
    alignItems:"center",
    flexDirection:"row",
    padding:10

 
   

  },


  header:{
    width:screenWidth,
    height:screenHeight*0.2,
    backgroundColor:blue,
    justifyContent:"flex-start",
    alignItems:"center",
    paddingTop:30,
    paddingRight:5,
    marginBottom:130
   
  },
  filter:{
    height:50,borderBottomColor:"gainsboro",borderBottomWidth:1,justifyContent:'space-around',alignItems:'flex-end',flexDirection:'row'
  }
  ,
  filter_items:{
 
   width:(screenWidth*(1/3)-10),
   textAlign:'center',
 
  }

});




export function ViewProfileScreen({ navigation }) {
  const [headerImage,setHeaderImage] = useState("")
  const [active,setActive]= useState('posts')
  const [post,setPost]= useState([])
  const [likes,setLikes]= useState([])
  const [token,setToken] = useState('')
  const[count,setCount] = useState(0)


  const check = async() =>{
    const tokens = await Storage.Get('token');
    setToken(tokens)
  
  }

  useEffect(()=>{
      Search();
  },[count])


  const Search = async() =>{
  

     
    if(active=="likes"){
 
      const url = `like-posts`
        const find = await Get(url,token)
        setLikes(find)
      console.log("likes is " + JSON.stringify(find))
    
   
  }
  else if (active=='posts'){
    const url = `posts`
      const find = await Get(url,token)
      setPost(find)
      console.log("posts is " + JSON.stringify(find))
    
  }
 
  }
  
  function FilteredView() {
    if(active=="likes"){
 
        return(
          <>
         <View>

         </View>
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
           <View style={{borderBottomColor:"gainsboro",borderBottomWidth:1}}>
               <Word  key={peep.id} images={peep.image1}  name={peep.users_permissions_user.username} text={peep.word}
                likes={peep.likes}
                replies={peep.numberOfReplies} 
                id={peep.id}
                />
           </View>
             
              
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
      <ScrollView style={styles.scrollView}>
     
      <ImageBackground style={styles.header} source={{uri:headerImage?headerImage:""}} />
      <View style={{borderWidth:0,height:"auto",padding:10}}>
        <Text>
          sjnj sdjsjfj aasa awea jjhh huuiwe aw uiur uonjhjhjda
          dsadjashjh jhj djksu oauohuoafh uh uhauo
        </Text>
      </View>
      <View style={styles.filter}>
    
    <View>
      <TouchableOpacity onPress={()=>setActive('posts')}>
      <Text style={styles.filter_items,{borderBottomWidth:(active==='posts'? 4:0),borderColor:(active==='posts'? blue:'white'),color:(active==='posts' ? blue:'grey'),width:(screenWidth*(1/2)),textAlign:'center',paddingBottom:(active==='people' ? 0:5),fontSize:15}}>
      Posts
      </Text>
      </TouchableOpacity>
       
    </View>
    <TouchableOpacity onPress={()=>setActive('likes')}>
    <Text style={styles.filter_items,{borderBottomWidth:(active==='likes'? 4:0),borderColor:(active==='likes'? blue:'white'),color:(active==='announcements' ? blue:'grey'),width:(screenWidth*(1/2)),textAlign:'center',paddingBottom:(active==='people' ? 0:5),fontSize:15}}>
     Likes
    </Text>
    </TouchableOpacity>
    </View>
    <FilteredView/>


    <View  style={styles.avatar} >
   <View>
   <AvatarProfile  img={""} />
   <Text style={{color:"grey",paddingLeft:20}}>
     @ username
   </Text>
     </View>
     <TouchableOpacity>
     <MaterialCommunityIcons style={{marginTop:60,borderWidth:1,borderRadius:50,height:50,width:50,borderColor:blue,paddingLeft:9,paddingTop:10}} color="rgb(0,122,255)" name="email-outline" size={30} />
     </TouchableOpacity>
   
    
    </View>
   
   </ScrollView>

   


  
  
   
   </SafeAreaView>
  
    );
  }
  
  ;