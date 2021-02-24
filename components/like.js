import React from 'react';
import { View ,Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';



export function Like(){
  return(
      <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
          <Text>
              Likess12 <Icon name="rocket" size={30} color="#4F8EF7" /> 
          </Text>
      </View>
  )
};
;