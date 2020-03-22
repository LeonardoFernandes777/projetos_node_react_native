import React from 'react'
import {View, Text} from 'react-native'
import Padrao from '../style/padrao'

export default props => 
  <View>
    {
      props.numero % 2 == 0
      ? <Text style={Padrao.ex}>Par</Text>
      : <Text style={Padrao.ex}>Impar</Text>
    }
  </View>