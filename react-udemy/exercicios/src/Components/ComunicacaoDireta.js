import React,{Component} from 'react'
import{View, Text} from 'react-native'
import Padrao from '../style/padrao'


const fonte = {style: {fontSize:30}}

export const Filho = props => 
  <View>
    <Text {...fonte}>Filho:{props.nome} {props.sobrenome}</Text>
  </View>

export const Pai = props =>
  <View>
    <Text {...fonte}>Pai:{props.nome} {props.sobrenome}</Text>
    {props.children}
  </View>

export const Avo = props =>
  <View style={Padrao.ex}>
    <Text {...fonte}>Avô:{props.nome} {props.sobrenome}</Text>
    <Pai nome='André' sobrenome={props.sobrenome}>
    <Filho nome='Ana' />
    <Filho nome='Gui' />
    <Filho nome='Davi' />
    </Pai>
    <Pai {...props} nome='Pedroo'>
    <Filho nome='Rebeca' />
    <Filho nome='Renato' />
    </Pai>
  </View>

export default Avo
