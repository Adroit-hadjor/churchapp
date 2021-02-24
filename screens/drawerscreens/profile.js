import React,{useState} from 'react';
import { Text,View,StyleSheet,SafeAreaView,ScrollView,Dimensions,TouchableOpacity } from 'react-native';
const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);
import { Word,SelectedWord } from "../../components/word";

const blue = "rgb(0,122,255)";

const styles = StyleSheet.create({
    container: {
  
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
      width:screenWidth
     
    },
    scrollView: {
        alignItems:'stretch',
        marginHorizontal: 0,
        height:'75%',
        width:screenWidth
      },
      search:{
        height:'15%',
        borderWidth:0,
        justifyContent:'space-between',
        alignItems:'center',
        flexDirection:'row',
        paddingLeft:40,
        paddingRight:40,
        borderBottomWidth:1,
        borderBottomColor:"rgb(0,122,255)"
      },
      header:{
            height:screenHeight*0.4,
            justifyContent:'center',
            alignItems:'stretch',
            borderBottomWidth:1,
            width:screenWidth ,
            borderColor:'gainsboro'
            
      }
      ,first_header:{
        height:'40%',
        width:'100%'
      }
      ,second_header:{
        height:'60%',
        width:'100%',
        justifyContent:'space-around'
      },
      profile_row:{
        justifyContent:'space-between',
        flexDirection:'row',
        width:'100%',
        padding:10
      },
      filter:{
        height:'10%',borderBottomColor:blue,borderBottomWidth:1,justifyContent:'space-around',alignItems:'flex-end',flexDirection:'row'
      }
      ,
      filter_items:{
     
       width:(screenWidth*(1/3)-10),
       textAlign:'center',
     
      }

  });

export const Profile = (params) => {


  const [active,setActive]= useState('people')
    const [cancel,setCancel]= useState(false)

    function FilteredView() {
      if(active=="people"){
   
          return(
            <Text>
              People
            </Text>
          )
        
       
      }
      else if (active=='posts'){
          return(
            <Word   name=" Benzema" text="Lorem ipsum dolor sit amet,
               consectetuer adipiscing elit. Aenean commodo 
               ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis 
               parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu,
               pretium quis, sem. Nulla consequat ma
               " 
    likes={109}
    replies={25} 
    id={9}
    />
          )
      }
      else if(active=='announcements'){
          return(
            <Announcement name="adje" text="dsd"/>
          )
      }
    }



  return(
      <SafeAreaView style={styles.container}>
         
         <ScrollView>
           <View style={styles.header}>
           <View style={styles.first_header}>
           <Text>
              Profile
          </Text>
           </View>
           <View style={styles.second_header}>
             <View style={styles.profile_row}>
             <Text style={{fontSize:20,fontWeight:'bold'}}>
              @ Profile
             </Text>
             <Text>
            Edit Profile
             </Text>
             </View>
          
             <View>
             <Text style={{paddingBottom:10}}>
             Lorem ipsum dolor sit amet,
               consectetuer adipiscing elit. Aenean commodo 
               ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis 
               parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu,
               pretium quis, sem. Nulla consequat mas
             </Text>
             </View>

             <View style={styles.filter}>
        <TouchableOpacity onPress={()=>setActive('people')}>
        <Text style={styles.filter_items,{borderBottomWidth:(active==='people'? 4:0),borderColor:(active==='people'? blue:'white'),color:(active==='people' ? blue:'grey'),width:(screenWidth*(1/3)),textAlign:'center',paddingBottom:(active==='people' ? 0:5),fontSize:15}}>
            Posts  
        </Text>
        </TouchableOpacity>
        <View>
          <TouchableOpacity onPress={()=>setActive('posts')}>
          <Text style={styles.filter_items,{borderBottomWidth:(active==='posts'? 4:0),borderColor:(active==='posts'? blue:'white'),color:(active==='posts' ? blue:'grey'),width:(screenWidth*(1/3)),textAlign:'center',paddingBottom:(active==='people' ? 0:5),fontSize:15}}>
          Media
          </Text>
          </TouchableOpacity>
           
        </View>
        <TouchableOpacity onPress={()=>setActive('announcements')}>
        <Text style={styles.filter_items,{borderBottomWidth:(active==='announcements'? 4:0),borderColor:(active==='announcements'? blue:'white'),color:(active==='announcements' ? blue:'grey'),width:(screenWidth*(1/3)),textAlign:'center',paddingBottom:(active==='people' ? 0:5),fontSize:15}}>
       Likes
        </Text>
        </TouchableOpacity>
        </View>
          

           </View>
           </View>
     
             </ScrollView>
      </SafeAreaView>
  )
};
;