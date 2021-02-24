import React,{useEffect,useState} from 'react';
import { Share, View, Button } from 'react-native';


const ShareExample = ({message, ...props}) => {
    

const [count,setCount] = useState(0);
const [msg,setmsg] = useState('');

useEffect(() => {
    _retrieveData = async () => {
        try {
          const value = await AsyncStorage.getItem('TASKS');
          if (value !== null) {
            // We have data!!
            console.log(value);
            setmsg(value)
          }
        } catch (error) {
          // Error retrieving data
        }
      };
  },[count]);

  
  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          {msg},
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <View style={{ marginTop: 50 }}>
      <Button onPress={onShare} title="Share" />
    </View>
  );
};

export default ShareExample;