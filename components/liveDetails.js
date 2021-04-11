import React from 'react';
import { Text,View,StyleSheet,TouchableOpacity } from 'react-native';



const styles = StyleSheet.create({
    container: {
        borderTopRightRadius:15,
        borderBottomRightRadius:15,
      flex: 1,
      paddingLeft:5,
      borderLeftWidth:1,
      borderLeftColor:'gainsboro',
      backgroundColor: '#fff',
      alignItems: 'stretch',
      justifyContent: 'space-evenly',
    }
  });
  


export const LiveDetails = ({theme,duration,program,onPress, ...props}) => {
  return(
      <View style={styles.container}>
         <View style={{paddingRight:15,flexDirection:"row",width:"100%",justifyContent:"space-between"}}>
         <Text style={{fontSize:20}}>
           SAM TV:
          </Text>
          <TouchableOpacity onPress={onPress}>
          <View style={{borderRadius:15,borderColor:"grey",borderWidth:1,width:20,height:20,justifyContent:"center",alignItems:"center",paddingBottom:4}}>
        <Text style={{color:"grey"}}>x</Text> 
          </View>
          </TouchableOpacity>
             </View>
          <Text style={{fontSize:15}}>
          { theme}
          </Text>
          <Text style={{fontSize:10,color:"grey"}}>
            Duration: { duration}
          </Text>
          <Text style={{fontSize:10,color:"grey"}}>
            Program: { program}
          </Text>
          
      </View>
  )
};
;