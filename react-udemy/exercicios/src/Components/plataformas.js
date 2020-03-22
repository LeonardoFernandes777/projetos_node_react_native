import React from 'react'
import Constants from 'expo-constants'
import {View,Button, Alert, ToastAndroid, Plataform, StyleSheet, SafeAreaView} from 'react-native'

export default props => {
  const notificar = msg =>{
    if (Platform.OS == 'android') {
      ToastAndroid.show(msg, ToastAndroid.LONG)
    } else {
      Alert.alert('Informação', msg)
    }
  }
  function Separator() {
    return <View style={styles.separator} />;
  }
  return (
    <SafeAreaView style={styles.container}>
      <View>
      <Button color='black' title='Plataforma?' onPress= {() => notificar ('Parabéns!')}/>
      <Separator />    
      <Button color='blue' title='Button' onPress={() =>notificar ('Parabéns!') }/>
      </View>
    </SafeAreaView>
    
  )
}

const styles = StyleSheet.create({
  separator: {
    marginVertical: 8,
    borderBottomColor: '#000',
    borderBottomWidth: StyleSheet.hairlineWidth
  },

  container: {
    paddingTop: 50,
    flex: 1,
    marginTop: Constants.statusBarHeight,
    marginHorizontal: 16
  }

})