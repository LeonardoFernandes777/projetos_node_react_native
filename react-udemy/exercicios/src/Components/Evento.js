import React,{Component} from 'react'
import{View, Text, TextInput} from 'react-native'
import Padrao from '../style/padrao'

export default class Evento extends Component {
  state= {
    texto:''
  }

  alterarTexto = texto => {
    this.setState({ texto })
  }

  render() {
    return(
      <View style={Padrao.ex}>
        <Text style={Padrao.fonte40}>{this.state.texto}</Text>
        <TextInput value={this.state.texto} style={Padrao.input} onChangeText={this.alterarTexto}/>
      </View>
    )
  }
}