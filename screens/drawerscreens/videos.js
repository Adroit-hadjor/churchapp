import React,{useState,useEffect} from 'react';
import {SafeAreaView,ScrollView, Text,View,StyleSheet,Dimensions,TextInput,Button,TouchableOpacity ,FlatList, } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Get, REACT_APP_API_URL} from "../api"
import Orientation from 'react-native-orientation';
import { VLCPlayer, VlCPlayerView } from 'react-native-vlc-media-player';
import ProgressBar from 'react-native-progress/Bar';
import { block } from 'react-native-reanimated';


const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);
const blue = "rgb(0,122,255)"
const styles = StyleSheet.create({
    container: {
        flex:1
    },
    itemx: {
        height:370,
        borderBottomWidth:1,
        borderColor:"lightgrey",
        backgroundColor:'gainsboro',
        flexDirection:"column",
        justifyContent:"space-around",
        
        alignItems:"center"
    
    
      },
      title: {
        fontSize: 18,
        paddingBottom:10,
        fontWeight:'500',
        textAlign:'center',
        textTransform:'capitalize',
      display:'flex',
      flex:1,
      flexDirection:'column',
      color:'#232323'
       
      },
      buttonGroup:{
        width:screenWidth,
      },
      message: {
        fontSize: 14,
        paddingLeft:10,
        color:"grey"
       
      },
    search:{
        height:'12%',borderBottomWidth:1,borderColor:"gainsboro",justifyContent:'space-around',alignItems:'center',flexDirection:'row'
      },
    header:{
        width:'100%',
        borderBottomWidth:1,
        borderBottomColor:'gainsboro',
        height:screenHeight*0.08,
        justifyContent:'center',
        alignItems:'flex-start'

        
    },
    body:{
        flexDirection:'column',
       justifyContent:'space-evenly',
       alignItems:'flex-start' ,
       height:screenHeight*0.5,
       paddingLeft:10
    },
    form:{
        padding:10,
        paddingLeft:20,
        paddingRight:20
    },
    scrollView: {
   
        marginHorizontal: 0,
        height:'88%'
      },
      vidListItem:{
        display:'flex',
        flexDirection:'row',
        padding:10,
        height:100,
        borderBottomWidth:1,
        borderBottomColor:'gainsboro'

      },
})



const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'Firsvvcvtggfgfgfgfgfgfgfgfdfdfdfdfdf Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
  ];
  
  const Item = ({ title,url,date}) =>{

    
    const [pause,setPause]=useState(true)
    const [showDummy,setShowDummy]=useState(true)
    const [stop,setStop]=useState(true)
  
    
    return(
    <View  style={styles.itemx}>
      <View style={{flexDirection:"column",alignItems:"center"}}>
      <View style={{flexDirection:"row"}}>
             <Text style={{...styles.title,fontSize:12,color:'grey'}}>{date.slice(0,10)}</Text> 
        </View>
        <View style={{flexDirection:"row"}}>
             <Text style={styles.title}>{title}</Text> 
        </View>
      
        {/* <View style={{...styles.buttonGroup,flexDirection:"row",justifyContent:'space-evenly'}}>
            <TouchableOpacity  style={{width:120,display:'flex',justifyContent:'center',color:'white'}} onPress={()=>{
              setPause(!pause)
              setShowDummy(false)
              }}>
              <View style={{width:'100%',padding:10,borderRadius:20,backgroundColor:'#0093E9'}}>
            <Text>{pause? <View style={{width:'100%',display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-evenly',}}><MaterialCommunityIcons color={"white"} name="play-circle-outline"  size={25} /><Text style={{color:'white',fontSize:16}}>Play</Text></View> :  <View style={{width:'100%',display:'flex',borderRadius:20,justifyContent:'space-evenly',flexDirection:'row',alignItems:'center',backgroundColor:'#0093E9'}}><MaterialCommunityIcons color={"white"} name="pause-circle-outline"  size={25} /><Text style={{color:'white',fontSize:16}}>Pause</Text></View>}</Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity style={{width:120,display:'flex',justifyContent:'center'}} disabled={pause?false:true} onPress={()=>{
              
              setStop(!stop)
              setShowDummy(true)
              }}>
            <View style={{backgroundColor:'#b3454c',width:'100%',borderRadius:20,padding:10,alignItems:'center',justifyContent:'space-evenly',display:'flex',flexDirection:'row'}}><MaterialCommunityIcons color={"white"} name="stop-circle-outline"  size={25} /><Text style={{color:'white',fontSize:16}}>Stop</Text></View> 
            </TouchableOpacity>
          </View>  */}
      
     
      </View>
      <View style={{flexDirection:"row",width:'100%',display:'flex',alignItems:'center',justifyContent:'center',height:200,marginBottom:10}}>
        
             <VlCPlayerView
             ref={ref => (this.vlcPlayer = ref)}
             
             style={{width:330,marginLeft:15,marginRight:15,height:200}}
             videoAspectRatio="5:3"
             url= {url}
             //resume={stop}
            initPaused={true}
             showControls={true}
             
             seek={1}
             showLeftButton={false}
             //onProgress={this.onProgress.bind(this)}
             //onEnd={this.onEnded.bind(this)}
            // onBuffering={this.onBuffering.bind(this)}
            // onError={this._onError}
            // onStopped={this.onStopped.bind(this)}
            // onPaused={this.onPaused.bind(this)}
            //resizeMode='cover' 
         />
         
         
        
        
        
      </View>
   
      
    </View>
  );}
  
const VideoListItem=({ navigation,title,url,date}) =>{

  return(
    <TouchableOpacity style={styles.vidListItem} onPress={()=>{navigation.navigate('VideoDetails',{navigation,title,url,date})}}>
      <View style={{backgroundColor:'#008cb4',width:screenWidth*0.2,margin:10,height:60,borderRadius:5,display:'flex',justifyContent:'center',alignItems:'center'}}>
      <MaterialCommunityIcons color={"white"} name="play-circle-outline"  size={35} />
      </View>
    < View style={{width:screenWidth*0.8,height:'100%',padding:15}}>
      <Text style={{fontSize:16,paddingBottom:5,textTransform:'capitalize'}}>{title}</Text>
      <Text style={{fontSize:13,color:'grey'}}>{date.slice(0,10)}</Text>
    </View>
    </TouchableOpacity>
  );
}

export const Videos = ({navigation}) => {
    const [search,setSearch]= useState("")
    const [cancel,setCancel]= useState(false)
    const [done,setDone] = useState("")
    const [vids,setVids]=useState([])
    const [play,setPlay]=useState(true)
    const [pause,setPause]=useState(true)
    const [stop,setStop]=useState(true)
    const [fresh,setFresh]=useState(false)


    useEffect(()=>{
    getVideos();
    },[done])

    useEffect(()=>{
      getVideosa();
      },[search])

    getVideos = async()=>{
      const url = "videos"
      let s = await Get(url)
     setVids(s)
     setFresh(false)
    
  }
  getVideosa = async()=>{
    const url = `videos?title_contains=${search}`
    const s = await Get(url)

   setVids(s)
   setFresh(false)
 
}

    const renderItem = ({ item }) => {
      
      console.log(item.video[0].url)
      return(
      
        // <Item navigation={navigation} title={item.title} url={item.video?.url} date={item.created_at} />
        <VideoListItem navigation={navigation} title={item.title} url={item.video[0].url} date={item.created_at} />
       
      );}
  return(
      <SafeAreaView style={styles.container}>
          <View style={styles.search}>
       {
            cancel ? 
            <TouchableOpacity onPress={()=>{setSearch("");setCancel(false)}}>
                 <Text>
        <MaterialCommunityIcons name="close" color={"rgb(0,122,255)"} size={30} />
        </Text>
            </TouchableOpacity>
           
            :
            <View style={{display:'none'}}>

            </View>


       } 
        <View>
        {/* <TextInput onChangeText={(e)=>{setSearch(e),setCancel(true)}} value={search} placeholderTextColor="white" placeholder="Search Videos" style={{fontSize:15,paddingLeft:30,width:screenWidth*0.80,borderRadius:50,borderColor:"rgb(0,122,255)",height:screenHeight*0.055,backgroundColor:"gainsboro"}}  /> */}
        <Text style={{fontSize:20,width:screenWidth*0.75,}}>All Videos</Text>
        </View>
        <TouchableOpacity onPress={()=>{navigation.navigate('Home')}}>
        <Text>
        <MaterialCommunityIcons name="arrow-left" color={"rgb(0,122,255)"} size={30} />
        </Text>
        </TouchableOpacity>
        </View>
        <FlatList
          data={vids}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          onRefresh={()=>{
             setFresh(true)
             getVideos();
        
        }}
        refreshing={fresh}
    />
      </SafeAreaView>
     
  )
};
;