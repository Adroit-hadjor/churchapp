import React from 'react';
import {ImageBackground,SafeAreaView,ScrollView, Text,View,StyleSheet,Dimensions,TextInput,Button } from 'react-native';

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);
const blue = "rgb(0,122,255)"
const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'white'
    },
    header:{
        width:'100%',
        borderBottomWidth:1,
        borderBottomColor:'gainsboro',
        height:screenHeight*0.10,
        justifyContent:'center',
        alignItems:'flex-start'

        
    },
    body:{
        flexDirection:'column',
       justifyContent:'space-evenly',
       alignItems:'flex-start' ,
       height:'auto',
       width:screenWidth
    },
    form:{
        padding:10,
        width:screenWidth,
        borderColor:'red',
        //borderWidth:1,
        justifyContent:'space-between',
        alignItems:'center',
        flexDirection:'row'

    },
    scrollView: {
   
        marginHorizontal: 0,
        height:'88%'
      },
})
export const About = (params) => {
  return(
      <SafeAreaView style={styles.container}>
          <ScrollView style={styles.scrollview}>
          <View style={styles.header}>
       <Text style={{fontSize:20,paddingLeft:10,color:blue}}>
              About Us
          </Text>
          <Text style={{fontSize:15,paddingLeft:10,color:'grey'}}>
         A vision  to revolutionize the prophetic across the world
          </Text>
       </View>
       <View style={styles.body}>
           <View style={{paddingRight:10,paddingLeft:10,borderBottomWidth:1,borderColor:'gainsboro',paddingBottom:30}}>
           <Text style={{fontSize:20,color:blue,paddingBottom:5,paddingTop:10}}>
              Revolutionary Prophet
           </Text>
           <Text style={{fontSize:15,color:'black'}}>
           Prophet Sampson’s vision is to revolutionize the prophetic across the world. It’s not enough for you to simply receive prophecy but you must also receive prophetic direction to ensure the prophecy
           manifests in your life. This is an important part of the prophetic process that Prophet Sampson incorporates in his ministry. As a result countless people who have encountered this Man of God have experienced the miraculous in their lives.
           </Text>

           <Text style={{fontSize:15,color:'black',paddingTop:10}}>
           The Mysteries of the Holy Communion
        Follow Prophet Sampson daily as he teaches about the Mysteries of the bread & wine. These Biblically based teachings have
         radically changed the lives of those who follow the teachings as the power of the blood is revealed & then applied in a practical manner.
           </Text>
           </View>
         
          
         
          
          
       </View>


       <View style={styles.form}>
         <ImageBackground style={{width:screenWidth*0.45,height:screenHeight*0.3}}  source={{uri: 'https://sampsonamoateng.net/wp-content/uploads/2018/08/prof8-458x416.jpg'}} >

         </ImageBackground>
         <ImageBackground style={{width:screenWidth*0.45,height:screenHeight*0.3}}  source={{uri: 'https://sampsonamoateng.net/wp-content/uploads/2018/09/image3-1-200x300.jpeg'}} >

         </ImageBackground>
       </View>
     

       <View style={styles.body}>
           <View style={{paddingRight:10,paddingLeft:10,borderBottomWidth:1,borderColor:'gainsboro',paddingBottom:30}}>
           <Text style={{fontSize:20,color:blue,paddingBottom:5,paddingTop:10}}>
           Who Is Sampson Amoateng?
           </Text>
           <Text style={{fontSize:15,color:'black'}}>
           Prophet Sampson Amoateng has an incredible passion & love for God. He lives a life completely focused on hearing from God so that he can be used as a vessel to help change lives.   He has been called to Muslim-donated areas but his ministry spans the globe.  He yearns to see souls won for the Kingdom of God & labors tirelessly to this end.
           </Text>

           <Text style={{fontSize:15,color:'black',paddingTop:10}}>
           Prophet Sampson extends the love of God to all that he meets. His unconditional love for people has impacted thousands & inspired even the most hopeless soul to embrace his motto: you are too needed to be wasted.   He has been graced with the gift of identifying the best in people & pushing them into their destiny
           </Text>
           <Text style={{fontSize:15,color:'black',paddingTop:10}}>
           Prophet Sampson pours into young people & many are not only passionate about God but responding early to the call on their lives!
           </Text>
           </View>
         
          
         
          
          
       </View>

       <View style={styles.body}>
           <View style={{paddingRight:10,paddingLeft:10,borderBottomWidth:0,borderColor:'gainsboro',paddingBottom:30}}>
           <Text style={{fontSize:20,color:blue,paddingBottom:5,paddingTop:10}}>
           Our Vision
           </Text>
           <Text style={{fontSize:15,color:'black'}}>
           To bring hope to even the most hopeless of people that
all may come to recognize that they are
“Too Needed to Be Wasted”
           </Text>

         
           </View>
         
          
         
          
          
       </View>

       <View style={styles.body}>
           <View style={{paddingRight:10,paddingLeft:10,borderBottomWidth:0,borderColor:'gainsboro',paddingBottom:30}}>
           <Text style={{fontSize:20,color:blue,paddingBottom:5,paddingTop:10}}>
           OUR MISSION
           </Text>
           <Text style={{fontSize:15,color:'black'}}>
           To bring the life-giving, life transforming gospel of

Grace to the nations
           </Text>

         
           </View>
         
          
         
          
          
       </View>
       <View style={styles.body}>
           <View style={{paddingRight:10,paddingLeft:10,borderBottomWidth:0,borderColor:'gainsboro',paddingBottom:30}}>
           <Text style={{fontSize:20,color:blue,paddingBottom:5,paddingTop:10}}>
           OUR VALUES
           </Text>
           <Text style={{fontSize:15,color:'black'}}>
           We will operate in integrity at all times (2 Corinthians 8:21)
We will be obedient to the Word of God (Luke 11:28)
We will exercise faith &amp; trust God in all that we do (1 Chronicles 16:11)

We believe in hard work (Proverbs 18:9)
We believe in results (Psalm 128:2)
           </Text>

         
           </View>
         
          
         
          
          
       </View>
      
     
         
          </ScrollView>
      </SafeAreaView>
     
  )
};
;