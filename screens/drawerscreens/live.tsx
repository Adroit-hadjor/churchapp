

import React, {Component,useState} from 'react'
import {Alert,Platform, ScrollView, Text, TouchableOpacity, View, PermissionsAndroid,TextInput,Dimensions,SafeAreaView,FlatList,BackHandler,Animated,KeyboardAvoidingView} from 'react-native'
// Import the RtcEngine class and view rendering components into your project.
import RtcEngine, {RtcLocalView, RtcRemoteView, VideoRenderMode, ChannelProfile,ClientRole,} from 'react-native-agora'
// Import the UI styles.
import styles from './Livestyle'
const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import io from "socket.io-client";
import {Get} from '../api';
import { VLCPlayer, VlCPlayerView } from 'react-native-vlc-media-player';
import REACT_APP_API_URL from './../api'
import FloatingHearts from 'react-native-floating-hearts'
const socket = io(REACT_APP_API_URL);
import * as Store from '../../components/async'
import { NavigationRouteContext } from '@react-navigation/native';





  const Item = ({ ch }) =>
  
  (
     
  
        <View style={styles.item}>
        <Text style={styles.titlex}>@{ch.username}</Text>
        <Text style={styles.title}>{ch.message}</Text>
      </View>
    
      )
   
  
  
  

// const requestCameraAndAudioPermission = async () =>{
//     try {
//         const granted = await PermissionsAndroid.requestMultiple([
//             PermissionsAndroid.PERMISSIONS.CAMERA,
//             PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
//         ])
//         if (
//             granted['android.permission.RECORD_AUDIO'] === PermissionsAndroid.RESULTS.GRANTED
//             && granted['android.permission.CAMERA'] === PermissionsAndroid.RESULTS.GRANTED
//         ) {
//             console.log('You can use the cameras & mic')
//         } else {
//             console.log('Permission denied')
//         }
//     } catch (err) {
//         console.warn(err)
//     }
// }

// Define a Props interface.
interface Props {
}
interface joinData{

}
interface chatMessages{
    message: string,
    username:string
}
// Define a State interface.
interface State {
    appId: string,
    channelName: string,
    token: string,
    joinSucceed: boolean,
    peerIds: number[],
    message: string,
    chatMessages: chatMessages[],
    username:string,
    room:number,
    joinData:joinData,
    count:number,

}

// Create an App component, which extends the properties of the Pros and State interfaces.
export default class Livex extends Component<Props, State> {
    _engine?: RtcEngine


    
   
    // Add a constructor，and initialize this.state. You need:
    // Replace yourAppId with the App ID of your Agora project.
    // Replace yourChannel with the channel name that you want to join.
    // Replace yourToken with the token that you generated using the App ID and channel name above.
    constructor(props) {

         
        
        super(props)
       
        this.state = {
            appId: 'c40594061e1f4580aae3b2af1963d01e',
            channelName: 'casa',
            token: "0061affe319d604483b9a0d45eb8b460c46IAAvyPOTe26JSzf0OflQZM7pMWQx4wPfsY3U84wADzyQuR1dZX8AAAAAEAAEa9nryXNEYAEAAQDUdERg",
            joinSucceed: false,
            peerIds: [],
            username:"",
            room:1,
            joinData:{},
            message:"",
            chatMessages:[],
            count:0,
            
          
            
        }
        // if (Platform.OS === 'android') {
        //     requestCameraAndAudioPermission().then(() => {
        //         console.log('requested!')
        //     })
        // }
    }


   

   
   // Mount the App component into the DOM.
componentDidMount() {
    this.init()
    
    if(this.state.username && this.state.message ) {
        const username = this.state.username
        const message =  this.state.message
        console.log(username+" "+message)
        socket.emit('join', { username, message }, (error) => {
            if(error) {
               
                Alert.alert("error");
            } else {
                socket.on('welcome', (data) => {
                    this.onJoinSuccess(data);
                });
            }
        }); 
    }

let x =this.receive.bind(this);
x();

let xx =this.receiveHeart.bind(this);
xx();


let y =this.getToken.bind(this);
y();
   
let yy =this.getUser.bind(this);
yy();

BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
}




handleBackButtonClick =()=> {
    this.props.navigation.goBack(null);
    this.endCall
   return true
}

getToken = async()=>{
    const url = "tokens/1"
    const s = await Get(url)
    console.log("is + " + s.token)
    this.setState({
       token:s.token
    })
}

getUser = async()=>{
   
    let s = await Store.Get("user")
    s =JSON.parse(s)
  
  this.setState({
       username:s.username
    }) 
}

   receive=()=> { socket.on('chat message', (ch)=> {

    console.log(ch)
   
    this.setState({
        chatMessages:[...this.state.chatMessages,ch]
    })  

   

   });}


   receiveHeart=()=> { socket.on('fire', (ch)=> {

  
   
    this.setState({
       count:this.state.count+2
    })  

   

   });}
 

  
do = socket.on('welcome', (data) => {
    console.log("Welcome event inside JoinRoom", data);
    this.onJoinSuccess(data);
});





 onJoinSuccess =(data)=> {
  this.setState({
    JoinData:data,
    username:data.userData.username,
    room:data.userData.room,
   
  }) 
}

 handleChange = (e) => {
    this.setState({
        message:e.target.value})
  }
  
   handleClick = (e) => {
    this.sendMessage(this.state.message).bind(this);
  }
  
    sendMessage =  (message) => {
      
        const username = this.state.username
        console.log(message,username)
      if(this.state.message === ""){
          return;
      }
       const emmitted= socket.emit('join', { username, message })
        
    console.log(emmitted)
        this.setState({
            message:""
        })
         
  }


// Pass in your App ID through this.state, create and initialize an RtcEngine object.
init = async () => {
    const {appId} = this.state
    this._engine = await RtcEngine.create(appId)
    // Enable the video module.
    await this._engine.enableVideo()
    // Enable the local video preview.
    await this._engine.startPreview()
    // Set the channel profile as live streaming.
    await this._engine.setChannelProfile(ChannelProfile.LiveBroadcasting)
    // Set the usr role as host.
    await this._engine.setClientRole(ClientRole.Audience)

    // Listen for the UserJoined callback.
    // This callback occurs when the remote user successfully joins the channel.
    this._engine.addListener('UserJoined', (uid, elapsed) => {
        console.log('UserJoined', uid, elapsed)
        const {peerIds} = this.state
        console.log(peerIds)
        if (peerIds.indexOf(uid) === -1) {
            this.setState({
                peerIds: [...peerIds, uid]
            })
        }
      
    })

    // Listen for the UserOffline callback.
    // This callback occurs when the remote user leaves the channel or drops offline.
    this._engine.addListener('UserOffline', (uid, reason) => {
        console.log('UserOffline', uid, reason)
        const {peerIds} = this.state
        this.setState({
            // Remove peer ID from state array
            peerIds: peerIds.filter(id => id !== uid)
        })
    })

    // Listen for the JoinChannelSuccess callback.
    // This callback occurs when the local user successfully joins the channel.
    this._engine.addListener('JoinChannelSuccess', (channel, uid, elapsed) => {
        console.log('JoinChannelSuccess', channel, uid, elapsed)
        if (channel==='casa'){

            this.setState({
                joinSucceed: true
            })
        }
        else{
            Alert.alert("Pastor is yet to go live")
        }
       
    })
}

// Pass in your token and channel name through this.state.token and this.state.channelName.
// Set the ID of the local user, which is an integer and should be unique. If you set uid as 0,
// the SDK assigns a user ID for the local user and returns it in the JoinChannelSuccess callback.

startCall = async () => {

    // let started=false;
    // socket.on('start',(start)=>{
    //    console.log(start.start)
    //     started=true;
    //   })
    this.getToken();
   // console.log(this.state.token,this.state.channelName)
    // if (started){

   await this._engine.joinChannel(this.state.token, this.state.channelName, null, 0)
    
    // }else{
        // Alert.alert('No Stream Available', `Watch Past Sermons`, [
        //     {
        //         text: 'Go Back',
        //         onPress: ()=>{
        //             this.props.navigation.navigate('Home');
        //         },
        //     },
        //     {
        //       text: 'Watch',
        //       onPress: ()=>{
        //           this.props.navigation.navigate('Videos');
        //       },
              
        //     },
            
        //   ]);
        // console.log('Mada desu')
    // }
        
    
   //console.log(exec)
}


 sendHeart = ()=>{
     const fire ="fire"
    socket.emit('fire', { fire }, (error) => {
        if(error) {
            Alert.alert("error");
        } 
    }); 
  
 }



_renderVideos = () => {
    const renderItem = ({ item }) => (
        <Item ch={item} />
      );
      const {peerIds} = this.state
     
    const {joinSucceed} = this.state
    return joinSucceed ?
        
        <View style={styles.fullView}>
              {peerIds.map((value, index, array) => { return(
              
            <RtcRemoteView.SurfaceView
                style={styles.maxs}
                uid={value}
                channelId={this.state.channelName}
                renderMode={VideoRenderMode.Hidden}/>
                
                )})}

                      <KeyboardAvoidingView  keyboardVerticalOffset={70} behavior={"padding"} style={{ position : "absolute",top:screenHeight*0,flexDirection:"row",justifyContent:"space-around",alignItems:"flex-end",width:screenWidth,backgroundColor:"transparent",bottom:0,left:0,right:0,height:screenHeight*0.9,elevation:1,zIndex:1}} >
                    <TextInput style={{color:"white",borderColor:"white",borderWidth:1,width:screenWidth*0.7,borderRadius:40,paddingLeft:20,height:50,zIndex:13,elevation:13}} placeholderTextColor="white" placeholder="Comment here"  autoCorrect={false}
          value={this.state.message}
          onSubmitEditing={() => this.sendMessage(this.state.message)}
          onChangeText={message => {
            this.setState({message});
          }} />
          
       
                    <TouchableOpacity style={{marginBottom:10,zIndex:13,elevation:13}} onPress={() => this.sendMessage(this.state.message)}><MaterialCommunityIcons  color={"white"} name="send-outline" size={25}/></TouchableOpacity>
                    <TouchableOpacity style={{zIndex:13,elevation:13}}
        onPress={() => {this.sendHeart();}}
      >
         
       
         <MaterialCommunityIcons style={{marginBottom:10}} color={"white"} name="heart-outline" size={25}/>
      </TouchableOpacity>

      <View style={{borderColor:"white",borderWidth:0,left:screenWidth*0.65, position : "absolute",top:screenHeight*0.34,flexDirection:"row",justifyContent:"space-around",alignItems:"center",width:screenWidth*0.5,height:screenHeight*0.55}}> 
      <FloatingHearts 
          count={this.state.count} 
        color={"rgb(0,122,255)"}
        />
      </View>
                </KeyboardAvoidingView>

            


                <TouchableOpacity onPress={()=>{this.endCall()}} style={{ position : "absolute",top:screenHeight*0.04,left:screenWidth*0.9,borderColor:"white",borderWidth:1,width:25,height:25,borderRadius:40,justifyContent:"center",alignItems:"center",paddingBottom:5,elevation:18,zIndex:18}}>
               <Text style={{color:"white"}}>x</Text> 
                </TouchableOpacity>
                <KeyboardAvoidingView  keyboardVerticalOffset={130} behavior={"padding"} style={{borderColor:"white",borderWidth:0,right:screenWidth*0.5, position : "absolute",top:screenHeight*0.34,flexDirection:"row",justifyContent:"space-around",alignItems:"center",width:screenWidth*0.5,height:screenHeight*0.35,zIndex:2,elevation:2}}>
                   
                <FlatList
               
        data={this.state.chatMessages}
        renderItem={renderItem}
        ref="flatList"
        onContentSizeChange={()=> this.refs.flatList.scrollToEnd()}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
       // keyExtractor={item => item.id}
      />
                </KeyboardAvoidingView>
        </View>
        
  :null
}

_renderButton = () => {
    const {joinSucceed} = this.state
    return joinSucceed ? null :(
        <View style={styles.buttonHolder}>
        <TouchableOpacity
            onPress={this.startCall}
            style={styles.button}>
            <Text style={styles.buttonText}> Stream Service </Text>
        </TouchableOpacity>
       
    </View>
    )
}



_renderRemoteVideos = () => {
    const {peerIds} = this.state
    const {joinSucceed} = this.state

    return joinSucceed ? 
     (
        <ScrollView
          style={styles.fullView}
            contentContainerStyle={{paddingHorizontal: 2.5}}
            horizontal={true}>
            {peerIds.map((value, index, array) => {
                return (
                    // Set the rendering mode of the video view as Hidden, 
                    // which uniformly scales the video until it fills the visible boundaries.
                    <RtcRemoteView.SurfaceView
                        style={ styles.maxs}
                        uid={value}
                        channelId={this.state.channelName}
                        renderMode={VideoRenderMode.Hidden}
                        zOrderMediaOverlay={true}/>
                )
            })}
        </ScrollView>
    ):null
}


endCall = async () => {
    await this._engine?.leaveChannel()
    this.setState({peerIds: [], joinSucceed: false, chatMessages:[]})
    this.getToken();
    this.props.navigation.goBack();
   
}


render() {

   

    return (
     
            <SafeAreaView style={styles.max}>
               
                {this._renderButton()}
                {this._renderVideos()}
              
               
        
            </SafeAreaView>
           
        
    )
}
}