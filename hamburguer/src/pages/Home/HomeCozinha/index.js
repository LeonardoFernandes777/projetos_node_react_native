import React, {useEffect, useState} from 'react';
import api from '../../../services/api';
import logoimg from '../../../assets/logo.svg';
import {FiPower, FiBell} from 'react-icons/fi';

import {Link} from 'react-router-dom';
import '../HomeCozinha/styles.css';

export default function Profile(){
  const [pedidos, setpedidos] = useState([])

  useEffect(() => {
    api.get('/listarPedido',{
    }).then(response =>{  
    setpedidos(response.data);
    })
  }, [])

  async function HandleDeletePedido(id){
    try{
      await api.delete(`listarPedido/${id}`)
    }catch (err){
      alert("Erro Ao deletar o pedido, tente novamente.")
    }
  }
  return(
    <div className="profile-container">
      <header>
        <img src={logoimg} alt="Be The Hero" />
        <span>Bem Vindos (as)</span>

        <Link className="button" to="/incidents/new">Cadastrar Novo</Link>
        <button type="button">
          <FiPower size={18} color="#e02041" />
        </button>
      </header>
      <h1>Pedidos Encontrados</h1>
      <ul>
        {pedidos.map(pedidos => (
          <li Key={pedidos.id}>
          <strong>PEDIDO N° : .............  {pedidos.id}</strong>
          <strong>MESA:</strong>
          <p>{pedidos.numero_mesa}</p>

          <strong>QTD. DE PESSOAS</strong>
          <p>{pedidos.quantidade_pessoas}</p>

          <strong>DESCRIÇÃO DO PEDIDO:</strong>
          <p>{pedidos.cardapio.nome}</p>

          <strong>OBS:</strong>
        <p>{pedidos.cardapio.nome}.............{pedidos.observacoes}........QTD..{pedidos.quantidade_pedido}</p>


          <strong>{pedidos.createdAt}</strong>
          <strong>{pedidos.garçom_id}</strong>
          
          <button type="button">
            <FiBell size={20} color="#a8a8b3" />
          </button>
        </li>
        ))}
      </ul>
    </div>
  )
}