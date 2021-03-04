import React from 'react';
import { Text,View,StyleSheet,ImageBackground } from 'react-native';



const styles = StyleSheet.create({
    container: {
   
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius:130,
      height:50,
      width:50,
      overflow:"hidden"

    },
    signup: {
   
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      overflow:"hidden",
      borderRadius:130,
      height:150,
      width:150,
    borderWidth:1,
      borderColor:"gainsboro"

    },
    iconSide:{flex:1},
    word:{
        flex:1,
        
    }
    
  });
  

export const Avatar = ({img, ...props}) => {
  return(
    <ImageBackground 
    source={img ? {uri:img} : require('../screens/images/user-active.png')} style={styles.container}>
    </ImageBackground>
  )
};



export const AvatarSignUp = ({img, ...props}) => {
  return(
    <ImageBackground 
    resizeMode="cover"
    source={img ? {uri:img} : require('../screens/images/user-active.png')} style={styles.signup}>
      <Text style={{color:"grey",textAlign:"center",width:"70%",fontSize:20}}>
        Add Profile picture
      </Text>
    </ImageBackground>
  )
};

export const AvatarProfile = ({img, ...props}) => {
  return(
    <ImageBackground 
    resizeMode="cover"
    source={img ? {uri:img} : require('../screens/images/user-active.png')} style={styles.signup}>
    
    </ImageBackground>
  )
};