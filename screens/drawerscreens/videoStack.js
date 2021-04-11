import React, { Component,useState,useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {Videos} from './videos';
import {Video} from './video';
import { VideoDetails } from './videoDetails';



const Root = createStackNavigator();



 const Vid = ({navigation}) => {
     
      


    return (
      
        <Root.Navigator headerMode={false} initialRouteName="Videos" mode={'modal'} >
              <Root.Screen name="Videos" component={Videos} />
             <Root.Screen  name="Video" component={Video} />
             <Root.Screen  name="VideoDetails" component={VideoDetails} />
        </Root.Navigator>
      
    
    );
};

;

export default Vid;