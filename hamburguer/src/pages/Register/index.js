import React from 'react';

import LogoImg from '../../assets/logo.svg';
import './styles.css'
import {Link} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi'

export default function Register(){
  return (
    <div className="register-container">
      <div className="content">
        <section>
          <img src={LogoImg} alt="Be The Hero" />
          <h1>Solicite seu cadastro</h1>
          <p>Solicite seu cadastro, entre na nossa plataforma para ter total controle do seu negocio</p>
          <Link  className="back-link" to='/'>
            <FiArrowLeft size={16} color="#E02041"/>
            Já tenho Cadastro
          </Link>
        </section>
        <form>
          <input placeholder="Nome do Restaurante" />
          <input type="email" placeholder="E-mail" />
          <input placeholder="Whatsapp" />
          <div className="input-group">
            <input placeholder="Cidade" />
            <input placeholder="UF" style={{width: 80}} />
          </div>
          <button className="button" type="submit">Solicitar Orçamento</button>
        </form>
      </div>
    </div>
  )
}