import * as React from 'react';
import { Button, View,Text,Dimensions } from 'react-native';
const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AnnouncementStack  from '../bottomscreens/announcement';
import MessageStack from '../bottomscreens/messaging';
import TrendStack from '../bottomscreens/trends';
import HomeInBottomNav from '../bottomscreens/home';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';



  
  const Tab = createBottomTabNavigator();






export function HomeWithBottomNav({navigation}) {
/* 
    const Hm = ()=>{
        return(<HomeInBottomNav />)
    } */
 
  return (

    <Tab.Navigator tabBarOptions={{style:{height:screenHeight*0.07,paddingTop:screenHeight*0.015}}}>
    <Tab.Screen 
      name="Homes"
      component={HomeInBottomNav} 
       options={{
        tabBarLabel: '',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="home" color={color} size={size} />
        ),
     
      }}
       />
    <Tab.Screen
     name="Trends"
      component={TrendStack} 
      options={{
        tabBarLabel: '',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="magnify" color={color} size={size} />
        ),
      }}
      />

    
    <Tab.Screen
     name="Announcements"
      component={AnnouncementStack}
      options={{
        tabBarLabel: '',
        tabBarIcon: ({ color, size }) => (
          <View>
          <MaterialCommunityIcons name="bullhorn" color={color} size={size} /> 
          </View>
         
        ),
        tabBarBadge: 2,
      }}
      />

<Tab.Screen
     name="Messaging"
      component={MessageStack} 
      options={{
        tabBarLabel: '',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="email" color={color} size={size} />
        ),
        tabBarBadge: 3,
      }}/>


  </Tab.Navigator>
  
  
  );
}


