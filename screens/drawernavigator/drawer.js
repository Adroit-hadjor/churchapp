
import React, { Component } from 'react';
import { View,Text } from 'react-native';

import { createDrawerNavigator, DrawerContentScrollView ,DrawerItemList,DrawerItem} from '@react-navigation/drawer';

import { Contact } from '../drawerscreens/contact';
import { About } from '../drawerscreens/about';
import { Settings } from "../drawerscreens/settings";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createStackNavigator } from '@react-navigation/stack';
import Live from '../drawerscreens/live'
import AsyncStorage from '@react-native-async-storage/async-storage';
import HomeInBottomNav  from '../bottomscreens/home';
import Vid from '../drawerscreens/videoStack'
function CustomDrawerContent({  ...rest }) {
 

    return (
      <DrawerContentScrollView {...rest}>
        <View style={styles.header}>
          
        </View>
     
          <DrawerItemList {...rest} />

          <View style={{height:30,paddingLeft:25,paddingRight:162,flexDirection:"row",justifyContent:"space-between",paddingTop:10}}>
         
        </View>
        
      </DrawerContentScrollView>
    );
  }
  const styles={
    header:{
      flex:1,
      height:100,
      justifyContent:"center",
      alignItems:"center",
     
      marginBottom:50
  
    }
    
  }
  const Drawer = createDrawerNavigator();
  

  
  
  export default function DrawerScreen({navigation}) {

    
   
    return (
    
          
      
  
        <Drawer.Navigator 
        drawerContent={
          props => <CustomDrawerContent {...props} />
        }
         drawerStyle={{paddingTop:10, backgroundColor: 'white'}} initialRouteName="Home">
   
     
    
         <Drawer.Screen
           name="Home" 
      component={HomeInBottomNav } 
           options={{
            title: 'Home',
            edgeWidth: 10,
             drawerIcon: ({color, focused, size }) => (
            <MaterialCommunityIcons color={color} name="home"  size={size} /> 
               )

           }}
           />


          <Drawer.Screen
           name="Live" 
           component={Live}
           options={{
            title: 'Watch Live',
             drawerIcon: ({ color,focused, size }) => (
              <MaterialCommunityIcons color={color} name="television"  size={size} />
               )
           }}
           />
           <Drawer.Screen
           name="Videos" 
           component={Vid}
           options={{
            title: 'Sermons',
             drawerIcon: ({ color,focused, size }) => (
              <MaterialCommunityIcons color={color} name="play-circle-outline"  size={size} />
               )
           }}
           />
 {/* 

          <Drawer.Screen
           name="Bookmark" 
           component={Bookmark}
           options={{
            title: 'Bookmark',
             drawerIcon: ({ color,focused, size }) => (
              <MaterialCommunityIcons color={color} name="bookmark"  size={size} />
               )
           }}
           />


          <Drawer.Screen
           name="Profile" 
           component={Profile}
           options={{
            title: 'My account',
             drawerIcon: ({ color,focused, size }) => (
              <MaterialCommunityIcons color={color} name="account"  size={size} />
               )
           }}
           />
 */}

          <Drawer.Screen
           name="Settings" 
           component={Settings} 
           options={{
            title: 'Settings',
             drawerIcon: ({ color,focused, size }) => (
              <MaterialCommunityIcons color={color} name="cog"  size={size} />
               )
           }}
           />


          <Drawer.Screen
           name="Contact" 
           component={Contact}
           options={{
            title: 'Contact',
             drawerIcon: ({ color,focused, size }) => (
              <MaterialCommunityIcons color={color} name="phone"  size={size} />
               )
           }}
           />


          <Drawer.Screen
           name="About" 
           component={About}
           options={{
            title: 'About',
             drawerIcon: ({ color,focused, size }) => (
              <MaterialCommunityIcons color={color} name="information-variant"  size={size} />
               )
           }}
           />


          
        </Drawer.Navigator>
      
        
  
    
    );
  }