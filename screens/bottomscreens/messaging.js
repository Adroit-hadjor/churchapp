import React, { Component,useState,useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { UserList } from "./messagestack/userList";
import { Messaging } from "./messagestack/message";




const Root = createStackNavigator();



 const MessageStack = ({navigation}) => {
     
      


    return (
      
        <Root.Navigator headerMode={false} initialRouteName="UserList" mode={'modal'} >
              <Root.Screen name="UserList" component={UserList} />
              <Root.Screen  name="Messaging" component={Messaging} />
         
        </Root.Navigator>
      
    
    );
};

;

export default MessageStack;