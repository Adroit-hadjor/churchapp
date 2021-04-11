/**
 * @format
 */

import {AppRegistry,Alert ,DeviceEventEmitter} from 'react-native';
import App from './App';
import {useEffect} from 'react'

import {name as appName} from './app.json';



AppRegistry.registerComponent(appName, () => App);
   