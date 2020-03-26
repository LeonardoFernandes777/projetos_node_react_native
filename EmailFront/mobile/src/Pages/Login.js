import React, {useState, useEffect} from 'react';
import { Text, View, KeyboardAvoidingView, StyleSheet, TouchableOpacity, Image, TextInput, ImageBackground} from 'react-native';
import Logo from '../../assets/Logo.png' 
import bg from '../../assets/bg.jpeg' 

export default function Menu({navigation}) {
  const [email, setEmail]= useState('')
  const [senha, setSenha]= useState('')

  async function handleSubmit(){
    console.log(email)
    console.log(senha)
    navigation.navigate('Home')
  }

  return (
    
  <KeyboardAvoidingView behavior='padding' style={styles.container}>
      <Image style={styles.logo} source={Logo}/>
    <View style={styles.form}>
      <Text style={styles.label}>DIGITE SEU E-MAIL *</Text>

      <TextInput
       style={styles.input} 
       keyboardType='email-address' 
       autoCorrect={false} 
       autoCapitalize='none' 
       placeholder='SEU E-MAIL'
       value={email}
       onChangeText={setEmail}
       />

        <Text style={styles.label}>DIGITE A SENHA DO SEU E-MAIL *</Text>

      <TextInput 
      secureTextEntry={true} 
      style={styles.input} 
      placeholder='SUA SENHA'
      value={senha}
       onChangeText={setSenha}
      />
      <TouchableOpacity onPress={handleSubmit} style={styles.button}>
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

  },

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
  },

  image: {
    flex: 1,
  },
})