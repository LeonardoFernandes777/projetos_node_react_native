import  React from 'react';
import './styles.css'
import {Link} from 'react-router-dom'

import LogoImg from '../../../assets/logo.svg';
import burgerImg from '../../../assets/burger.png';

import {FiLogIn} from 'react-icons/fi'


export default function Logon(){
  return(
    <div className="Home-container">
      <section className="form">
        <img  src={LogoImg} alt="Be The Hero" />
        <form>
          <h1>Qual seu cargo?</h1>
          <Link className="button" to="/login-gerencia" type="submit">Gerencia</Link>
          <Link className="button" to="/login-cozinha" type="submit">Cozinha</Link>
          <Link className="button" to="/login-caixa" type="submit">Caixa</Link>
          <Link className="back-link" to='/register'>
            <FiLogIn size={16} color="#E02041"/>
            Não Tenho Cadastro
          </Link>
        </form>
      </section>
      <img className="imagem" src={burgerImg} alt="Burger" />
    </div>
  );
}