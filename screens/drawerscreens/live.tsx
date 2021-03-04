import React, {Component} from 'react'
import {Platform, ScrollView, Text, TouchableOpacity, View, PermissionsAndroid,TextInput,Dimensions,SafeAreaView,FlatList} from 'react-native'
// Import the RtcEngine class and view rendering components into your project.
import RtcEngine, {RtcLocalView, RtcRemoteView, VideoRenderMode, ChannelProfile,ClientRole,} from 'react-native-agora'
// Import the UI styles.
import styles from './Livestyle'
const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
    {
        id: 'bd7acbea-c1b221-46c2-aed5-3ad53abb28ba',
        title: 'First Item',
      },
      {
        id: '3ac68afc-c6052-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
      },
      {
        id: '58694a0f-t3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
      },
      {
        id: 'bd7acbea-c1b2s21-46c2-aed5-3ad53abb28ba',
        title: 'First Item',
      },
      {
        id: '3ac68afc-c6052aa-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
      },
      {
        id: '58694a0f-t3dwwwaa1-471f-bd96-145571e29d72',
        title: 'Third Item',
      },
  ];

  const Item = ({ title }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
  
  

const requestCameraAndAudioPermission = async () =>{
    try {
        const granted = await PermissionsAndroid.requestMultiple([
            PermissionsAndroid.PERMISSIONS.CAMERA,
            PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
        ])
        if (
            granted['android.permission.RECORD_AUDIO'] === PermissionsAndroid.RESULTS.GRANTED
            && granted['android.permission.CAMERA'] === PermissionsAndroid.RESULTS.GRANTED
        ) {
            console.log('You can use the cameras & mic')
        } else {
            console.log('Permission denied')
        }
    } catch (err) {
        console.warn(err)
    }
}

// Define a Props interface.
interface Props {
}

// Define a State interface.
interface State {
    appId: string,
    channelName: string,
    token: string,
    joinSucceed: boolean,
    peerIds: number[],
}

// Create an App component, which extends the properties of the Pros and State interfaces.
export default class Live extends Component<Props, State> {
    _engine?: RtcEngine
    // Add a constructor，and initialize this.state. You need:
    // Replace yourAppId with the App ID of your Agora project.
    // Replace yourChannel with the channel name that you want to join.
    // Replace yourToken with the token that you generated using the App ID and channel name above.
    constructor(props) {
        super(props)
        this.state = {
            appId: '1affe319d604483b9a0d45eb8b460c46',
            channelName: 'casa',
            token: '0061affe319d604483b9a0d45eb8b460c46IAC5a88UJjk4p+vDfVY0j3PljcV+59skXZ4pMTTRJpAKhh1dZX8AAAAAEACIbHZg/Q04YAEAAQAGDzhg',
            joinSucceed: false,
            peerIds: [],
        }
        if (Platform.OS === 'android') {
            requestCameraAndAudioPermission().then(() => {
                console.log('requested!')
            })
        }
    }
   // Mount the App component into the DOM.
componentDidMount() {
    this.init()
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
        this.setState({
            joinSucceed: true
        })
    })
}

// Pass in your token and channel name through this.state.token and this.state.channelName.
// Set the ID of the local user, which is an integer and should be unique. If you set uid as 0,
// the SDK assigns a user ID for the local user and returns it in the JoinChannelSuccess callback.

startCall = async () => {
    await this._engine?.joinChannel(this.state.token, this.state.channelName, null, 0)
}

_renderVideos = () => {
    const renderItem = ({ item }) => (
        <Item title={item.title} />
      );
    
    const {joinSucceed} = this.state
    return joinSucceed ? (
        <View style={styles.fullView}>
            <RtcLocalView.SurfaceView
                style={styles.maxs}
                channelId={this.state.channelName}
                renderMode={VideoRenderMode.Hidden}/>
                  <View style={{ position : "absolute",top:screenHeight*0.91,flexDirection:"row",justifyContent:"space-around",alignItems:"center",width:screenWidth,paddingLeft:-30}}>
                    <TextInput style={{color:"white",borderColor:"white",borderWidth:1,width:screenWidth*0.7,borderRadius:40,paddingLeft:20}} placeholderTextColor="white" placeholder="Comment here" />
                    <MaterialCommunityIcons color={"white"} name="send-outline" size={25}/>
                    <MaterialCommunityIcons color={"white"} name="heart-outline" size={25}/>
                </View>
                <TouchableOpacity onPress={this.endCall} style={{ position : "absolute",top:screenHeight*0.04,left:screenWidth*0.9,borderColor:"white",borderWidth:1,width:25,height:25,borderRadius:40,justifyContent:"center",alignItems:"center",paddingBottom:5}}>
               <Text style={{color:"white"}}>x</Text> 
                </TouchableOpacity>
                <View style={{borderColor:"white",borderWidth:1,right:screenWidth*0.5, position : "absolute",top:screenHeight*0.37,flexDirection:"row",justifyContent:"space-around",alignItems:"center",width:screenWidth*0.5,height:screenHeight*0.5}}>
                   
                <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
                </View>
        </View>
        
    ) : null
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
    return (
        <ScrollView
            style={styles.remoteContainer}
            contentContainerStyle={{paddingHorizontal: 2.5}}
            horizontal={true}>
            {peerIds.map((value, index, array) => {
                return (
                    // Set the rendering mode of the video view as Hidden, 
                    // which uniformly scales the video until it fills the visible boundaries.
                    <RtcRemoteView.SurfaceView
                        style={styles.remote}
                        uid={value}
                        channelId={this.state.channelName}
                        renderMode={VideoRenderMode.Hidden}
                        zOrderMediaOverlay={true}/>
                )
            })}
        </ScrollView>
    )
}


endCall = async () => {
    await this._engine?.leaveChannel()
    this.setState({peerIds: [], joinSucceed: false})
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