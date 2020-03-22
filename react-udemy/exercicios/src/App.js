import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import Simples from './Components/Simples';
import ParImpar from './Components/ParImpar';
import { Inverter, MegaSena } from './Components/multi'

export default class App extends Component {
  render() {
    return(
      <View  style={styles.container}>
        <Simples texto='Flexivel'/>
        <ParImpar numero={30} />
        <Inverter texto='React Native'/>
        <MegaSena numeros={9} />
      </View>

    );
  }
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});