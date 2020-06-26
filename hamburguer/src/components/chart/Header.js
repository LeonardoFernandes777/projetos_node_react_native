import React from 'react';
import './styles.css'
import {FiArrowLeft} from 'react-icons/fi'
import LogoImg from '../../assets/logo.svg';

// import { Container } from './styles';

const Header = () => {
  return (
    <ul className="ul-gerente">
        <img src={LogoImg} alt="Be The Hero" style={{width: 200, paddingBottom: '20px', paddingLeft:'5px'}} />
        <li><a class="active" href="/home-gerencia">MENU</a></li>
        <li><a href="/home-gerencia">DASHBOARD</a></li>
        <li><a className="li-gerente" href="/cadastro-funcionarios">FUNCIONARIOS</a></li>
        <li><a className="li-gerente" href="/home-almox">ALMOXARIFADO</a></li>
        <li><a href="/home-cardapio">CARDAPIO</a></li>
        <li><a href="/calendario">CALENDARIO</a></li>
        <li><a href="/Testes">TESTES</a></li>
        <li><a href="/">
          <FiArrowLeft size={12} color="#E02041"/>
          VOLTAR
          </a></li>
    </ul>
  )
}

export default Header;