import React from 'react';
import './styles.css'
import '../../../global.css'
import Header from '../../../components/chart/Header'
import {info} from '../../../data/data';
import Scope from '../../../components/chart/Scope';

export default function HomeGerencia(){
  
  return(
    <div>
      <Header />
        <Scope 
            entrada = {info.entrada}
            vendas = {info.vendas}
            velocidade = {info.velocidade}
            atendimento = {info.atendimento}
        />
    </div>
  )
}