import React from 'react'
import {createDrawerNavigator} from 'react-navigation'
import Contador from './Components/contador'

import Simples from './Components/Simples';
import ParImpar from './Components/ParImpar';
import { Inverter, MegaSena } from './Components/multi'
import plataformas from './Components/plataformas'
import ValidarProps from './Components/ValidarProps'
import login from './Components/login'
import Evento from './Components/Evento'
import Avo from './Components/ComunicacaoDireta'
import ListaFlex from './Components/ListaFlex'

export default createDrawerNavigator ({

  ListaFlex: {
    screen: ListaFlex,
    navigationOptions: {title:'Lista (Flex)'}
  },

  Avo: {
    screen: () => <Avo nome='joao' sobrenome='Silva'/>
  },

  Evento:{
    screen: Evento
  },

  login: {
    screen: login
  },

  validarProps: {
    screen:  () => <ValidarProps ano={18}/>
  },

  plataformas: {
    screen: plataformas
  },


  Contador: {
    screen: () => <Contador numero={100}/>
  },
  MegaSena:{
    screen: () => <MegaSena numeros={8} />,
    navigationOptions: { title: 'Mega Sena'} 
  },
  Inverter:{
    screen: () => <Inverter texto='React Native!' />,
    navigationOptions: { title: 'Inverter'} 
  },
  ParImpar:{
    screen: () => <ParImpar numero={30} />,
    navigationOptions: { title: 'Par & Impar'} 
  },
  Simples:{
    screen: () => <Simples texto='Flexivel!!!' />, 
  }

},{drawerWidth: 300})

