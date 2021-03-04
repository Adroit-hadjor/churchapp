import React, { Component,useState,useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {Announcements} from './announcementstack/announcementlist';
import {ViewAnnouncement} from './announcementstack/viewannouncement'


const Root = createStackNavigator();



 const AnnouncementStack = ({navigation}) => {
     
      


    return (
      
        <Root.Navigator headerMode={false} initialRouteName="Announcement" mode={'modal'} >
              <Root.Screen name="Announcement" component={Announcements} />
             <Root.Screen name="ViewAnnouncement" component={ViewAnnouncement} />
        </Root.Navigator>
      
    
    );
};

;

export default AnnouncementStack;