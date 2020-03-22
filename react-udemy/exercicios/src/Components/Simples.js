import React from 'react';
import {Text,View} from 'react-native';
import Padrao from '../style/padrao';

//export default function (props) {
//return <Text>{props.texto}</Text>
//}

export default (props) => {
  return (
    <View>
      <Text style={Padrao.ex}>GroupRoot:{props.texto}</Text>
    </View>
    
  );
} 



