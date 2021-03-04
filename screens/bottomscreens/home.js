import React, { Component,useState,useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SignUp from '../stackscreens/signup';
import CreateWord from '../bottomscreens/homestack/create';
import {ViewPostScreen} from '../bottomscreens/homestack/view';
import {ViewProfileScreen} from '../bottomscreens/homestack/viewProfile';
import {Home} from '../bottomscreens/homestack/home';
import DrawerScreen from '../drawernavigator/drawer';
import {Store,Get} from '../../components/async'
import { View } from 'react-native';


const Root = createStackNavigator();



 const HomeInBottomNav = ({navigation}) => {
     
      


    return (
      
        <Root.Navigator headerMode={false} initialRouteName="HomeInBottomNav" mode={'modal'} >
              <Root.Screen name="HomeInBottomNav" component={Home} />
             <Root.Screen  name="Create" component={CreateWord} />
    <Root.Screen name="View" component={ViewPostScreen} />
    <Root.Screen name="Profile" component={ViewProfileScreen} />
        </Root.Navigator>
      
    
    );
};

;

export default HomeInBottomNav;