/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{useState,useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Dimensions,
  TextInput,
  Alert,
  Button,
  TouchableOpacity
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);
const blue = "rgb(0,122,255)";
const fontColor = "white";
import Stack from './screens/stack/stack'
import NotificatonService from './NotificationService'
import io from "socket.io-client";
import REACT_APP_API_URL from './screens/api'
import requestUserPermission from './googleNotification';
const socket = io(REACT_APP_API_URL,{
  transports: ['websocket'],
});
const App = ()  => {
const  onNotification = (notif) => {
    Alert.alert(notif.title, notif.message);
  }
let note =new NotificatonService(onNotification)
 useEffect(()=>{
  // socket.on('start',(start)=>{
  //   console.log(start)
  // }); 
  // return ()=>{
  //   socket.disconnect()
  // }
  console.log(socket.connected)
 })
useEffect(()=>{
    
    const run =async()=>{
      await requestUserPermission().then(
        ()=>{
          console.log('Show')
        }
      ).catch((error)=>{
          console.log(error.message)
      })
    }
    run()

},[])
  return (
    <NavigationContainer>
      <Stack />
    </NavigationContainer>
 
  );
};


export default App;
