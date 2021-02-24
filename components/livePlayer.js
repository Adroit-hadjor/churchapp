import React from 'react';
import { Text,View,StyleSheet,ImageBackground,Dimensions,TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

const styles = StyleSheet.create({
    container: {
      borderTopLeftRadius:15,
      borderBottomLeftRadius:15,
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      overflow:"hidden"
    }
  });
  


export const LivePlayer = (params) => {
  return(
    
      <ImageBackground 
      source={{uri: 'https://sampsonamoateng.net/wp-content/uploads/2018/08/prof8-458x416.jpg'}} style={styles.container}>
          <View style={{borderWidth:1,borderRadius:90,borderColor:"orange" ,width:80,height:80,position:'relative',justifyContent:"center",alignItems:"center"}}>
          <MaterialCommunityIcons  color={"orange"}  name="play-circle"  size={65} />
                </View>
               
          
      </ImageBackground>
    
  )
};
;