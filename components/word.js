import React,{useState,useEffect} from 'react';
import { Text,View,StyleSheet,Dimensions,TouchableOpacity,Share } from 'react-native';
import {Avatar} from './avatar'
const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {ShareExample} from './share';
import { AsyncStorage } from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';





const styles = StyleSheet.create({
    container: {
 
      backgroundColor: '#fff',
      alignItems: 'stretch',
      justifyContent: 'center',
      height:'auto',
    
    },
    iconSide:{flex:1},
    word:{
        flex:1,

    }
    
  });
  
  const ar = [1,3,4];

export const Word = ({id,text,name,likes,replies,fn,nav, ...props}) => {
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


