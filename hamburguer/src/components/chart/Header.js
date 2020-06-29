import React from 'react';
import './styles.css'
import {FiArrowLeft} from 'react-icons/fi'
import LogoImg from '../../assets/logo.svg';

// import { Container } from './styles';

const Header = () => {
  return (
    <ul className="ul-gerente">
        <img src={LogoImg} alt="Be The Hero" style={{width: 220, paddingTop: 10, paddingLeft: 10, paddingBottom: 15}} />
        <li class="active" style={{paddingLeft: 83, fontSize: 23}}>MENU</li>
        <li><a href="/home-gerencia">DASHBOARD</a></li>
        <li><a className="li-gerente" href="/cadastro-funcionarios">FUNCIONARIOS</a></li>
        <li><a className="li-gerente" href="/home-almox">ALMOXARIFADO</a></li>
        <li><a className="li-gerente" href="/home-cardapio">CARDAPIO</a></li>
        <li><a href="/calendario">CALENDARIO</a></li>
        <li><a href="/cupons">CUPONS</a></li>
        <li><a href="/cupons">CONTAS PAGAR/RECEBER</a></li>
        <li><a style={{marginBottom: 155}} href="/fornecedores">FORNECEDORES</a></li>
        <a style={{paddingLeft: 10}} href="/">
          <FiArrowLeft  size={40} color="#E02041"/>
          </a>
    </ul>
  )
}

export default Header;