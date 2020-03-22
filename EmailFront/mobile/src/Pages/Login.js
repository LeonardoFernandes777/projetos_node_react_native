import React from 'react';
import { Text, View, KeyboardAvoidingView, StyleSheet, TouchableOpacity, Image, TextInput} from 'react-native';
import Logo from '../../assets/Logo.png' 

export default function Menu() {
  async function handleSubmit(){
    
  }

  return (
  <KeyboardAvoidingView behavior='padding' style={styles.container}>
      <Image style={styles.logo} source={Logo}/>
    <View style={styles.form}>
      <Text style={styles.label}>DIGITE SEU E-MAIL *</Text>
      <TextInput style={styles.input} keyboardType='email-address' autoCorrect={false} autoCapitalize='none' placeholder='SEU E-MAIL'/>
        <Text style={styles.label}>DIGITE A SENHA DO SEU E-MAIL *</Text>
      <TextInput secureTextEntry={true} style={styles.input} placeholder='SUA SENHA'/>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>ENTRAR</Text>
      </TouchableOpacity>
    </View>
  </KeyboardAvoidingView >
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent:'center',
    alignItems: 'center',
  },

  logo:{
    height:300,
    resizeMode:'contain'
  },

  form:{
    alignSelf: 'stretch',
    paddingHorizontal: 30,
  },

  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    paddingHorizontal: 20,
    fontSize: 16,
    height: 44,
    color: '#444',
    borderRadius: 2,
    marginBottom: 10,

  }

  label:{
    fontWeight:'bold',
    color:'#444',
    marginBottom: 10,
  },

  button:{
    marginTop: 5,
    height: 42,
    backgroundColor: '#1a9bdc',
    justifyContent:'center',
    alignItems: 'center',
    borderRadius: 2,
  },

  buttonText:{
    color: '#FFF',
    fontWeight:'bold',
    fontSize: 16,
  }
})