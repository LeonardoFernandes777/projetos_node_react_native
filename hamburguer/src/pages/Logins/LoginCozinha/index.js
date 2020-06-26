import  React from 'react';
import './styles.css'
import {Link} from 'react-router-dom'

import LogoImg from '../../../assets/logo.svg';
import burgerImg from '../../../assets/burger.png';

import {FiArrowLeft} from 'react-icons/fi'


export default function Logon(){
  return(
    <div className="Login-Cozinha-container">
      <section className="form">
        <img src={LogoImg} alt="Be The Hero" />
        <form>
          <h1>Login Cozinha</h1>
          <input placeholder="Seu Usuário"/>
          <input type="password" placeholder="Sua Senha"/>        
          <Link to="/home-cozinha" className="button" type="submit">Entrar</Link>
          <Link className="back-link" to='/'>
            <FiArrowLeft size={16} color="#E02041"/>
            Voltar
          </Link>
        </form>
      </section>
      <img className="imagem" src={burgerImg} alt="Burger" />
    </div>
  );
}