import React,{useState,useEffect} from 'react';
import { Text,View,StyleSheet,Dimensions,TouchableOpacity,Share,Image,TouchableHighlight, Pressable,Modal,Alert } from 'react-native';
import {Avatar} from './avatar'
const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {ShareExample} from './share';
import { useFocusEffect } from '@react-navigation/native';
import { PinchGestureHandler } from 'react-native-gesture-handler';
import {Get,POST} from '../screens/api'
import * as Store from "./async";
const image = '../screens/images/edwin.jpg'
const images4 = [image,image,image,image]
const images3 = [image,image,image]
const images2 = [image,image]
const images1 = [image]
const image0 = []


const styles = StyleSheet.create({
    container: {
 
      backgroundColor: '#fff',
      alignItems: 'stretch',
      justifyContent: 'center',
      height:'auto',
      paddingRight:40,
      paddingLeft:40
    
    },
    iconSide:{flex:1},
    word:{
        flex:1,

    },  modalView: {
      margin: 20,
      height:screenHeight*0.9,
      width:screenWidth*0.94,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 5,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2
    },
    buttonOpen: {
      backgroundColor: "#F194FF",
    },
    buttonClose: {
      backgroundColor: "#2196F3",
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center"
    }
    
  });
  
  const ar = [1,3,4];
  
 

export const Word = ({id,text,name,likes,replies,fn,nav,images,prof_pic, ...props}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [likedPosts,setLikedPosts] = useState([])
  const navigation = nav;
  const onShare = async (msg,author) => {
    console.log("sdsdsd")
    try {
      const result = await Share.share({
        message:
          `${msg} by ${author}`,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  const [color,setColor] = useState("grey")
  const [icon,setIcon] = useState("heart-outline")
  const [count,setCount] = useState(0)
  const [token,setToken] = useState("")
 
  const likeAPost = async(id)=>{
   
    const chk = isInLikes(id);
    if(chk){
     const body = {
       likedpost:id
     }
     const url = "like-posts/deleteit"
     const like = await Post(url,body,token)
     setCount(count+1)
     return
    }
    const url = "like-posts"
     const body = {
       post:id
     }
     const like = await Post(url,body,token)
     setCount(count+1)
 
   }
 
   const isInLikes = (id)=>{
     return likedPosts.some(item => id === item.post.id);
   }

   const getLiked = async() =>{
    const url = `like-posts?users_permissions_user=${user.id}`
    const get = await Get(url)
    setLikedPosts(get)
    const tk = await Store.Get("token")
    setToken(tk)
}


 
  function like(id){
      if (ar.includes(id)){
        const index = ar.indexOf(id);
        if (index > -1) {
          ar.splice(index, 1);
          console.log(ar)
          setCount(count+1)
        }
      }else{
        ar.push(id);
        console.log(ar)
        setCount(count+1)
      }
  }

  
  
   
  useEffect(
   () => {
      if(isInLikes(id)){
        setColor("red");
        setIcon("heart")
        console.log("color changeds1234s")
      }else{
        setColor("grey");
        setIcon("heart-outline")
      }
    }, [count]
  );

  useEffect(
    () => {
     getLiked();
     }, [count]
   );
   

  const RenderImages = () =>{

    if(images.length==1){
      console.log("http://localhost:1337"+images[0].formats.small.url)
    }
    
  
    if(images.length == 0 ){
      return(<View style={{margin:0}}></View>)
    }
    else if(images.length == 1){
      return(

        <View style={{height:'auto',paddingRight:screenWidth*0.03,paddingLeft:screenWidth*0.01,justifyContent:"center",borderColor:"red",flexDirection:"row",width:screenWidth,  paddingTop:20,
      paddingBottom:20}}> 
          <View style={{paddingLeft:15,flexDirection:"column",height:"auto",justifyContent:"center"}}>
      <Pressable>
      <Image resizeMode={"cover"} style={{width:screenWidth*0.8,height:screenHeight*0.29,borderRadius:40,marginLeft:10}} source={{uri:"http://localhost:1337"+images[0].formats.small.url}}/>
        </Pressable>
     </View >
     </View>)
    }else if(images.length ==2){
      return(
        
         <View style={{height:'auto',paddingRight:screenWidth*0.03,paddingLeft:screenWidth*0.01,justifyContent:"center",borderColor:"red",flexDirection:"row",width:screenWidth,  paddingTop:20,
      paddingBottom:20}}>
        <View style={{paddingLeft:15,flexDirection:"row",height:"auto",justifyContent:"center"}}>
        <Pressable>
      <Image resizeMode={"cover"} style={{width:screenWidth*0.4,height:screenHeight*0.29,borderTopLeftRadius:20,borderBottomLeftRadius:20,marginLeft:10}} source={{uri:"http://localhost:1337"+images[0].formats.small.url}}/>
      </Pressable>
      <Pressable>
      <Image resizeMode={"cover"} style={{width:screenWidth*0.4,height:screenHeight*0.29,borderTopRightRadius:20,borderBottomRightRadius:20,marginLeft:10}} source={{uri:"http://localhost:1337"+images[1].formats.small.url}}/>
      </Pressable>
     </View >
     </View>
     )
    }else if(images.length ==3){
      return(
        
         <View style={{height:'auto',paddingRight:screenWidth*0.03,paddingLeft:screenWidth*0.01,justifyContent:"center",borderColor:"red",flexDirection:"row",width:screenWidth,  paddingTop:20,
      paddingBottom:20}}>
        <View style={{paddingLeft:15,flexDirection:"row",height:"auto",justifyContent:"center"}}>
        <Pressable>
      <Image resizeMode={"cover"} style={{width:screenWidth*0.4,height:screenHeight*0.3,borderTopLeftRadius:20,borderBottomLeftRadius:20,marginLeft:10}} source={{uri:"http://localhost:1337"+images[0].formats.small.url}}/>
      </Pressable>
      <View style={{justifyContent:"space-between"}}>
      <Pressable>
      <Image resizeMode={"cover"} style={{width:screenWidth*0.4,height:screenHeight*0.145,borderTopRightRadius:20,marginLeft:5}} source={{uri:"http://localhost:1337"+images[1].formats.small.url}}/>
      </Pressable>
      <Pressable>
      <Image resizeMode={"cover"} style={{width:screenWidth*0.4,height:screenHeight*0.145,borderBottomRightRadius:20,marginLeft:5,marginTop:5}} source={{uri:"http://localhost:1337"+images[2].formats.small.url}}/>
      </Pressable>
      </View>
     
     </View >
     </View>
    )
    }
    else if(images.length == 4){
   
      return(
      
         <View style={{height:'auto',paddingRight:screenWidth*0.03,paddingLeft:screenWidth*0.01,justifyContent:"center",borderColor:"red",flexDirection:"row",width:screenWidth,  paddingTop:20,
      paddingBottom:20}}>
        <View style={{paddingLeft:15,flexDirection:"row",height:"auto",justifyContent:"center"}}>
        <View style={{justifyContent:"space-between"}}>
        <Pressable>
      <Image resizeMode={"cover"} style={{width:screenWidth*0.4,height:screenHeight*0.145,borderTopLeftRadius:20,marginLeft:5}} source={{uri:"http://localhost:1337"+images[0].formats.small.url}}/>
      </Pressable>
      <Pressable>
      <Image resizeMode={"cover"} style={{width:screenWidth*0.4,height:screenHeight*0.145,borderBottomLeftRadius:20,marginLeft:5,marginTop:5}} source={{uri:"http://localhost:1337"+images[1].formats.small.url}}/>
      </Pressable>
      </View>
      <View style={{justifyContent:"space-between"}}>
      <Pressable>
      <Image resizeMode={"cover"} style={{width:screenWidth*0.4,height:screenHeight*0.145,borderTopRightRadius:20,marginLeft:5}} source={{uri:"http://localhost:1337"+images[2].formats.small.url}}/>
      </Pressable>
      <Pressable onPress={()=>{console.log(image);setModalVisible(true)}}>
      <Image resizeMode={"cover"} style={{width:screenWidth*0.4,height:screenHeight*0.145,borderBottomRightRadius:20,marginLeft:5,marginTop:5}} source={{uri:"http://localhost:1337"+images[3].formats.small.url}}/>
      </Pressable>
      </View>
     
     </View >
     </View>
    
     )
    }
  }


  return(
      <View style={styles.container}>
          <Modal
        animationType="slide"
        presentationStyle={"overFullScreen"}
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
            <PinchGestureHandler>
              <Image resizeMode={"cover"} style={{width:"100%",maxHeight:screenHeight*0.29,borderRadius:40,marginLeft:10}} source={require(image)}/>
            </PinchGestureHandler>
          </View>
        </View>
      </Modal>
         <View style={{height:'auto',paddingRight:screenWidth*0.03,paddingLeft:screenWidth*0.01,justifyContent:"space-between",borderColor:"red",flexDirection:"row",width:screenWidth,  paddingTop:20,
      paddingBottom:20}}>
            <Avatar img={prof_pic} style={{flex:1,borderRadius:40,borderColor:"green"}}/>
            <View style={{paddingLeft:15,flex:2,flexDirection:"column",height:"auto"}}>
           <TouchableOpacity onPress={()=>nav.push("Profile")}>
           <Text style={{fontSize:15,fontWeight:'bold',color:"grey"}}>
             <Text style={{fontWeight:'normal'}}>@</Text>
             {name}
             </Text>
             </TouchableOpacity>   
              <Text>{text} </Text>
            </View >
         </View>
        
         
          <RenderImages/>
          
       
         <View style={{paddingRight:60,paddingLeft:65,flexDirection:"row",height:screenWidth*0.08,justifyContent:"space-between",alignItems:"center"}}>
             
             <Text>
             <TouchableOpacity style={{flexDirection:'row',justifyContent:'space-between',width:40}}  onPress={()=> navigation.navigate('Create_post')}>
               <MaterialCommunityIcons  color={"grey"}  name="chat-outline"  size={17} />
               <Text> {replies}</Text>
             </TouchableOpacity>
             </Text>
             <Text> 
               <TouchableOpacity style={{flexDirection:'row',justifyContent:'space-between',width:40}}  onPress={()=> onShare(text,name)}>
                 <MaterialCommunityIcons  color={"grey"}  name="share-variant"  size={17} />
                 </TouchableOpacity>
                 </Text>
             <Text>
                <TouchableOpacity style={{flexDirection:'row',justifyContent:'space-between',width:40}}  onPress={()=>isInLikes(id)}>
                   <MaterialCommunityIcons  color={color}  name={icon}  size={17} />
                   <Text>{likes}</Text>
                    </TouchableOpacity>
                    </Text>
         </View>
      </View>
  )
};



















































export const Reply = ({id,text,name,likes,replies,fn,nav, ...props}) => {
  const navigation = nav;
  const onShare = async (msg,author) => {
    console.log("sdsdsd")
    try {
      const result = await Share.share({
        message:
          `${msg} by ${author}`,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  const [color,setColor] = useState("rgb(0,122,255)")
  const [count,setCount] = useState(0)
 


 
  function like(id){
      if (ar.includes(id)){
        const index = ar.indexOf(id);
        if (index > -1) {
          ar.splice(index, 1);
          console.log(ar)
          setCount(count+1)
        }
      }else{
        ar.push(id);
        console.log(ar)
        setCount(count+1)
      }
  }

  
  
   
  useEffect(
   () => {
      if(ar.includes(id)){
        setColor("red");
        console.log("color changeds1234s")
      }else{
        setColor("rgb(0,122,255)");
      }
    }, [count]
  );
   


  return(
      <View style={styles.container}>
         <View style={{height:'auto',paddingRight:screenWidth*0.03,paddingLeft:screenWidth*0.01,justifyContent:"space-between",borderColor:"red",flexDirection:"row",width:screenWidth,  paddingTop:20,
      paddingBottom:20}}>
            <Avatar img={'https://sampsonamoateng.net/wp-content/uploads/2018/08/prof8-458x416.jpg'} style={{flex:1,borderRadius:40,borderColor:"green"}}/>
            <View style={{paddingLeft:15,flex:2,flexDirection:"column",height:"auto"}}>
              <Text style={{fontSize:15,fontWeight:'bold'}}><Text style={{fontWeight:'normal'}}>@</Text>{name}</Text>
              <Text>{text} </Text>
            </View >
         </View>
         <View style={{paddingRight:60,paddingLeft:65,flexDirection:"row",height:screenWidth*0.08,justifyContent:"space-between",alignItems:"center"}}>
             
             <Text>
             <TouchableOpacity style={{flexDirection:'row',justifyContent:'space-between',width:40}}  onPress={()=> navigation.navigate('Create_post')}>
            
             </TouchableOpacity>
             </Text>
             <Text> 
               <TouchableOpacity style={{flexDirection:'row',justifyContent:'space-between',width:40}}  onPress={()=> onShare(text,name)}>
                 <MaterialCommunityIcons  color={"rgb(0,122,255)"}  name="share-variant"  size={17} />
                 </TouchableOpacity>
                 </Text>
             <Text>
                <TouchableOpacity style={{flexDirection:'row',justifyContent:'space-between',width:40}}  onPress={()=>like(id)}>
                   <MaterialCommunityIcons  color={color}  name="heart"  size={17} />
                   <Text>{likes}</Text>
                    </TouchableOpacity>
                    </Text>
         </View>
      </View>
  )
};

export const SelectedWord = ({id,text,name,likes,replies,fn,nav, ...props}) => {
  const navigation = nav;
  const onShare = async (msg,author) => {
    console.log("sdsdsd")
    try {
      const result = await Share.share({
        message:
          `${msg} by ${author}`,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  const [color,setColor] = useState("rgb(0,122,255)")
  const [count,setCount] = useState(0)
 


 
  function like(id){
      if (ar.includes(id)){
        const index = ar.indexOf(id);
        if (index > -1) {
          ar.splice(index, 1);
          console.log(ar)
          setCount(count+1)
        }
      }else{
        ar.push(id);
        console.log(ar)
        setCount(count+1)
      }
  }

  
/*   useFocusEffect(
    React.useCallback(() => {
      if(ar.includes(id)){
        setColor("red");
        console.log("color ss")
      }else{
        setColor("rgb(0,122,255)");
      }
    }, [count])
  ); */

  return(
      <View style={styles.container}>
         <View style={{height:'auto',paddingRight:screenWidth*0.03,paddingLeft:screenWidth*0.01,justifyContent:"space-between",borderColor:"red",flexDirection:"row",width:screenWidth,  paddingTop:20,
      paddingBottom:20}}>
            <Avatar img={'https://sampsonamoateng.net/wp-content/uploads/2018/08/prof8-458x416.jpg'} style={{flex:1,borderRadius:40,borderColor:"green"}}/>
            <View style={{paddingLeft:15,flex:2,flexDirection:"column",height:"auto"}}>
              <Text style={{fontSize:25,fontWeight:'bold'}}><Text style={{fontWeight:'normal'}}>@</Text>{name}</Text>
              <Text style={{fontSize:20}}>{text}</Text>
            </View >
         </View>
         <View style={{paddingRight:90,paddingLeft:90,flexDirection:"row",height:screenWidth*0.08,justifyContent:"space-between",alignItems:"center"}}>
        <Text>
         <TouchableOpacity style={{flexDirection:'row',justifyContent:'space-between',width:40}}   onPress={()=> navigation.navigate('Create_post')}>
               <MaterialCommunityIcons  color={"rgb(0,122,255)"}  name="chat"  size={17} />
               <Text> {replies}</Text>
             </TouchableOpacity>
             </Text>
             <Text> 
               <TouchableOpacity style={{flexDirection:'row',justifyContent:'space-between',width:40}}  onPress={()=> onShare(text,name)}>
                 <MaterialCommunityIcons  color={"rgb(0,122,255)"}  name="share-variant"  size={17} />
                 </TouchableOpacity>
                 </Text>
             <Text>
                <TouchableOpacity style={{flexDirection:'row',justifyContent:'space-between',width:40}}  onPress={()=>like(id)}>
                   <MaterialCommunityIcons  color={color}  name="heart"  size={17} />
                   <Text>{likes}</Text>
                    </TouchableOpacity>
                    </Text>
         </View>
      </View>
  )
};


