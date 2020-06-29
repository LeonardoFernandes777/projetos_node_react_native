import React, { useEffect, useState, useMemo } from 'react';
import api from '../../../services/api';
import './styles.css';
import '../../../global.css';
import Header from '../../../components/chart/Header'
import Modal from '../../../components/Modal/Modal';
import camera from '../../../assets/camera.svg';

export default function CadastroCardapio() {

  const [colaboradores, setColaboradores] = useState([]);
  const [isModalVisible, setIsModalViseble] = useState(false);
  const [foto, setFoto] = useState(null);


  const preview = useMemo(() => {
    return foto ? URL.createObjectURL(foto) : null;
  }, [foto])

  useEffect(() => {
    api.get('/listarCardapio', {
    }).then(response => {
      setColaboradores(response.data)
    })
  }, [])


  //Pegar o Id do card/button
  async function handleEditarFuncionario(id) {
    try {
      await api.put(`/atualizarColaborador/${id}`)
    } catch (err) {
      alert('Erro ao Editar funcionario');
    }
  }

  return (
    <div>
      <Header />
      <div className="div-container" style={{ paddingLeft: 250, width: '95%' }}>
        <h1 style={{ color: '#E02041', fontSize: 35 }}>Cadastrar Item no Cardapio</h1>
        <form className="cadastro-funcionario">
          <input
            required
            style={{ textTransform: "capitalize" }}
            className="input"
            placeholder="Nome Do Produto"
          />

          <select style={{ border: '1px solid #dcdce6', color: '#333', borderRadius: '8px', width: '100%', height: '60px', marginTop: 10, padding: '0 24px', fontSize: 17 }} name="categorias">
            <option value="null">Categoria</option>
            <option value="Hamburger">Hamburger</option>
            <option value="Pizza">Pizza</option>
            <option value="Macarrão">Macarrão</option>
            <option value="Bebidas">Bebidas</option>
            <option value="Doces">Doces</option>
          </select>

          <select style={{ border: '1px solid #dcdce6', color: '#333', borderRadius: '8px', width: '100%', height: '60px', marginTop: 10, padding: '0 24px', fontSize: 17 }} name="Sub-categorias">
            <option value="null">Sub-Categoria</option>
            <option value="Tradicional">Tradicional</option>
            <optgroup label="Hamburguer">
              <option value="Artesanal">Artesanal</option>
              <option value="Sanduíche Natural">Sanduíche Natural</option>
            </optgroup>

            <optgroup label="Pizza">
              <option value="Especiais">Especiais</option>
              <option value="Doces">Doces</option>
            </optgroup>

            <optgroup label="Macarrão">
              <option value="penne">penne</option>
              <option value="spaguetti">spaguetti</option>
              <option value="talharim">talharim</option>
              <option value="recheados">recheados</option>
              <option value="Especiais">Especiais</option>
            </optgroup>

            <optgroup label="Bebidas">
              <option>Refrigerantes</option>
              <option>Sucos Naturais</option>
              <option>Cervejas</option>
              <option>Doses</option>
            </optgroup>

            <optgroup label="Doces">
              <option>Açai</option>
              <option>Milk-Shake</option>
              <option>Sanduíche Natural</option>
            </optgroup>

          </select>

          <select style={{ border: '1px solid #dcdce6', color: '#333', borderRadius: '8px', width: '100%', height: '60px', marginTop: 10, padding: '0 24px', fontSize: 17 }} name="categorias">
            <option value="null">Quantas pessoas serve ?</option>
            <option value="1">1- Pessoa</option>
            <option value="2">2- Pessoas</option>
            <option value="3">3- Pessoas</option>
            <option value="4">4- Pessoas</option>
            <option value="5">5- Pessoas</option>
          </select>

          <div className="input-group">
            <input placeholder="Observações do produto / Modo de preparo" />
            <input style={{width: 150 }} maxlength="5" placeholder="Calorias" />
          </div>
          <div className="input-group">
            <input required placeholder="Preço de custo" />
            <input style={{width: 1250 }} placeholder="Preço de venda" />
            <input style={{width: 1250 }} placeholder="Tempo de preparo (min)" />
          </div>

          <select style={{ border: '1px solid #dcdce6', color: '#333', borderRadius: '8px', width: '100%', height: '60px', marginTop: 10, padding: '0 24px', fontSize: 17 }} name="categorias">
            <option value="null">Ativar/Desativar</option>
            <option value="true">Ativar</option>
            <option value="false">Desativar</option>
          </select>

          <label
            id="foto"
            style={{ backgroundImage: `url(${preview})` }}
            className={foto ? 'has-foto' : ''}
          >
            <input onChange={event => setFoto(event.target.files[0])} type="file"></input>
            <img src={camera} alt="Camera" />
          </label>
          <button className="button">Cadastrar</button>
        </form>

  

      </div>

      <div className="cadastrados" style={{ paddingLeft: 250 }}>
        <h1 style={{ color: '#E02041', fontSize: 35 }}>Itens Cadastrados</h1>
        <ul>
          {colaboradores.map(colaboradores => (
            <li key={colaboradores.id}>
              <strong>ID:&nbsp;<p>...............................&nbsp;{colaboradores.id}</p></strong>

              <strong>Nome:&nbsp;<p>...................&nbsp;{colaboradores.nome}</p></strong>

              <strong>CPF:&nbsp;<p>......................&nbsp;{colaboradores.cpf}</p></strong>

              <strong>Tefefone:&nbsp;<p>..............&nbsp;{colaboradores.telefone}</p></strong>

              <strong>Cidade:&nbsp;<p>..................&nbsp;{colaboradores.cidade}</p></strong>

              <strong>UF:&nbsp;.........................&nbsp;<p>{colaboradores.uf}</p></strong>

              <strong>E-mail:&nbsp;....................&nbsp;<p>{colaboradores.email}</p></strong>

              <strong>Cargo:&nbsp;....................&nbsp;<p>0000000</p></strong>
              <strong>Admissão:&nbsp;..............&nbsp;<p>0000000</p></strong>
              <strong>Desligamento:&nbsp;.......&nbsp;<p>0000000</p></strong>

              <strong>{colaboradores.createdAt}</strong>
              <button onClick={() => setIsModalViseble(true)} type="button">
                Editar/Atribuir Cargo
          </button>
            </li>
          ))}
        </ul>
        {isModalVisible ?
          <Modal onClose={() => setIsModalViseble(false)}>
            <div className="div-container-modal" style={{ paddingLeft: 25, width: '95%' }}>
              <h1>Editar Cadastro</h1>
              <form className="editar-funcionario">
                <input type="text" placeholder="Nome Completo" required autoFocus />
                <input type="text" placeholder="Endereço" required />
                <input maxlength="8" placeholder="CEP" required />
                <input type="tel" maxlength="13" placeholder="Telefone" required />
                <input type="date" placeholder="Admissão" required />
                <input type="date" placeholder="Desligamento" required />
                <button onClick={() => handleEditarFuncionario(colaboradores.id)} className="button-modal">Salvar</button>
              </form>
            </div>
          </Modal> : null}
      </div>
    </div>
  )
}