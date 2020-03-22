import React,{useState} from 'react';
import {SafeAreaView, Alert, StyleSheet, TextInput, TouchableOpacity, AsyncStorage, Text} from 'react-native';
import api from '../services/api';

export default function Book({navigation}) {
  const [date, setDate] = useState('');
  const id = navigation.getParam('id');

  async function handleSubtmit () {
    const user_id = await AsyncStorage.getItem('user');
    await api.post(`/spots/${id}/bookings`, {
      date
    }, {
      headers:{user_id}
    })
    Alert.alert('Solicitação de reserva enviada :)');

    navigation.navigate('List');
  }

  function handleCancel () {
    navigation.navigate('List');
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.label}>DATA DE INTERESSE*<Text style={styles.exemplo}>  Ex:(20 De Dezembro)</Text> </Text>
      <TextInput
      style={styles.input}
      placeholder='Qual data você quer reservar?'
      placeholderTextColor= '#999'
      autoCapitalize= "words"
      autoCorrect={false}
      value={date}
      onChangeText={setDate}
      />
      <TouchableOpacity  onPress={handleSubtmit} style={styles.button}>
        <Text style={styles.buttontext}>Solicitar reserva</Text>
      </TouchableOpacity>
      <TouchableOpacity  onPress={handleCancel} style={styles.cancelbutton}>
        <Text style={styles.buttontext}>Cancelar</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    margin:30,
  },
  label: {
    fontWeight: 'bold',
    color: '#444',
    marginBottom: 8,
    marginTop: 80,
    

  },

  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    paddingHorizontal: 20,
    fontSize: 16,
    color: '#444',
    height: 44,
    marginBottom: 20,
    borderRadius: 2,

  },

  button: {
    height: 42,
    backgroundColor: '#f05a5b',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
    fontWeight: 'bold'
  },

  cancelbutton: {
    height: 42,
    backgroundColor: '#CCC',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
    fontWeight: 'bold',
    marginTop: 10,
  },

  buttontext: {
    color: '#ffff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  exemplo:{
      fontSize: 10,
      color: '#CCC',
      marginBottom: 8,
      marginTop: 80,
  },
});
