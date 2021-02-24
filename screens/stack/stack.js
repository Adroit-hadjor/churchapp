import React, { Component,useState,useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SignUp from '../stackscreens/signup';
import Login from '../stackscreens/login';
import DrawerScreen from '../drawernavigator/drawer';
import {Store,Get} from '../../components/async'


const Root = createStackNavigator();



 const Stack = (params) => {
     const [initialRouteName,setinitialRouteName]=useState("Login")
        const check = async() =>{
            const user = await Get('user');
            if (user) {
               // storeUser(user)
                setinitialRouteName('Drawer')
              } else {
    
                setinitialRouteName('Login');
              }
        }
     useEffect(()=>{
         
        check();
     })



    return (
      
        <Root.Navigator headerMode={false} initialRouteName={initialRouteName}>
             <Root.Screen  name="Login" component={Login} />
             <Root.Screen name="SignUp" component={SignUp} />
             <Root.Screen name="Drawer" component={DrawerScreen} />
        </Root.Navigator>
      
    
    );
};

;

export default Stack;