import React, { Component,useState,useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {User} from './trendsstack/user';
import {ViewAnnouncement} from './trendsstack/viewannouncement';
import {ViewPost} from './trendsstack/viewpost';
import {Trends} from './trendsstack/trends';
import {Store,Get} from '../../components/async'
import { View } from 'react-native';


const Root = createStackNavigator();



 const TrendStack = ({navigation}) => {
     
      


    return (
      
        <Root.Navigator headerMode={false} initialRouteName="Trends" mode={'modal'} >
              <Root.Screen name="Trends" component={Trends} />
              <Root.Screen  name="User" component={User} />
              <Root.Screen name="ViewAnnouncement" component={ViewAnnouncement} />
              <Root.Screen name="ViewPost" component={ViewPost} />
        </Root.Navigator>
      
    
    );
};

;

export default TrendStack;