import React from 'react'
import Constants from 'expo-constants'
import logo from '../../assets/logo.png'
import {View, Image,TouchableOpacity,StyleSheet,Platform, SafeAreaView, TextInput, Text, KeyboardAvoidingView} from 'react-native'


export default (props) => {
  return (
    <KeyboardAvoidingView enabled={Platform.OS === 'android'} behavior='position' style={styles.container}>
      <SafeAreaView >
      <View style={styles.logocontainer}>
        <Image style={styles.logo} source={logo}/>
      </View>
      
      <View>
      <Text style={styles.usuario}>Usuário</Text>
      </View>

      <View style={styles.inputContainer}>
      <TextInput defaultValue={'+55 (62)'}style={styles.input}maxLength={17} keyboardType='number-pad'></TextInput>
      </View>

      <View>
      <Text style={styles.senha}>Senha</Text>
      </View>

      <View style={styles.inputContainer}>
      <TextInput secureTextEntry={true} placeholder={'Digite sua senha'} style={styles.inputsenha}></TextInput>
      </View>

      <TouchableOpacity style={styles.buttoncontainer}>
        <Text style={styles.button}>Esqueceu a senha?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttoncontainer2}>
        <Text style={styles.button2}>Entrar</Text>
      </TouchableOpacity>


    </SafeAreaView>
    </KeyboardAvoidingView>
  )
}


const styles = StyleSheet.create({
  separator: {
    marginVertical: 8,
    borderBottomColor: '#000',
    borderBottomWidth: StyleSheet.hairlineWidth
  },

  container: {
    backgroundColor:'black',
    paddingTop: 50,
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },

  logocontainer: {
    flex: 1,
    marginTop:200,
    paddingLeft:15,
    justifyContent:'center',
    alignItems:'center',
  },

  logo: {
    height:500,
    width:500,
    resizeMode:'contain'
  },

  usuario:{
    paddingLeft:30,
    fontSize: 23,
    color:'#daa520',
    marginTop:150,
  },


  
  senha:{
    paddingLeft:30,
    fontSize: 23,
    color:'#daa520',
    marginTop:20,
  },

  input:{
    
    color:'white',
    fontSize: 15,
    borderColor:'#daa520',
    borderBottomWidth: 2,
    marginTop:20,
  },

  inputContainer: {
    paddingLeft: 30,
    paddingRight: 30
  },

  inputsenha:{
    color:'white',
    fontSize: 15,
    borderColor:'#daa520',
    borderBottomWidth: 2,
    marginTop:20,
  },
  
  button:{
    backgroundColor:'black',
    alignItems: 'center',
    height:40,
    color:'#daa520',
  },

  buttoncontainer:{
    paddingLeft:245,
    paddingTop:15
  },

  button2:{
    paddingLeft:90,
    fontSize:20,
    backgroundColor:'#daa520',
    height:40,
    width:250,
    color:'white',
    borderRadius: 10,
    fontSize: 25,
  },

  buttoncontainer2:{
    paddingLeft:75,
    paddingTop:30
  },

})