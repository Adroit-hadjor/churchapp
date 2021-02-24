import React,{useState} from 'react';
import { Text,View,StyleSheet,SafeAreaView,ScrollView,Dimensions,TouchableOpacity } from 'react-native';
const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);
import { Remove } from "../../components/async";

const blue = "rgb(0,122,255)";

const styles = StyleSheet.create({
    container: {
  
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
      width:screenWidth
     
    },
    scrollView: {
        alignItems:'stretch',
        marginHorizontal: 0,
        height:'75%',
        width:screenWidth
      },
      item:{
          borderBottomColor:"gainsboro",
          borderBottomWidth:1,
          width:screenWidth,
          //justifyContent:"fl"
      }
     

  });

export const Settings = ({navigation}) => {
const logout = async() =>{
  const signout = await Remove("token")
  const signoutuser = await Remove("user")
  navigation.navigate("Login")
}

  const [active,setActive]= useState('people')
    const [cancel,setCancel]= useState(false)

    


  return(
      <SafeAreaView style={styles.container}>
         
         <ScrollView>
          <TouchableOpacity onPress={()=>logout()}>
          <View style={styles.item}>
                    <Text>
                        Logout
                    </Text>
         </View>
          </TouchableOpacity>
         
     
             </ScrollView>
      </SafeAreaView>
  )
};
;