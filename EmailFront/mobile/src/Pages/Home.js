import React from 'react';
import { Text, View, StyleSheet, Image, SafeAreaView, TouchableOpacity, Linking} from 'react-native';

import Logo from '../../assets/Logo.png' 

export default function Home({navigation}) {

  async function handleSubmit(){
    navigation.navigate('Login')
  }


  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.logo} source={Logo}/>
      <View style={styles.form}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.text}>Enviar E-mails</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.text}>Listas de E-mails</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {Linking.openURL('')}} style={styles.button}>
          <Text style={styles.text}>Configurações</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSubmit} style={styles.buttonQuit}>
          <Text style={styles.text}>Logout</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    paddingTop: 15,
    flex: 1,
    alignItems: 'center',
  },

  logo:{
    height:160,
    resizeMode:'contain',
    marginBottom: 10,
  },
  
  textTitulo:{
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 50
  },

  form:{
    alignSelf: 'stretch',
    paddingHorizontal: 0,
  },

  buttonQuit:{
    justifyContent:'center',
    alignItems: 'center',
    backgroundColor: '#2aa7e6',
    marginHorizontal: 10,
    borderRadius: 10,
    height: 50,
    marginBottom: 50
  },

  button:{
    justifyContent:'center',
    alignItems: 'center',
    backgroundColor: '#1a9bdc',
    marginHorizontal: 10,
    borderRadius: 10,
    height: 50,
    marginBottom: 50
  },

  text:{
    fontSize: 20,
    textAlign: 'center',
  },

})
     