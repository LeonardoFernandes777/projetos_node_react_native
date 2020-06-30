import React, { useEffect, useState, useMemo } from 'react';
import api from '../../../services/api';
import './styles.css';
import '../../../global.css';
import Header from '../../../components/chart/Header'
import Modal from '../../../components/Modal/Modal';
import camera from '../../../assets/camera.svg';
import axios from 'axios'
import qs from 'qs'

export default function CadastroCardapio() {

  const [cardapio, setCardapio] = useState([]);
  const [isModalVisible, setIsModalViseble] = useState(false);
  const [foto, setFoto] = useState(null);

  const [nomeCadastro, setNomeCadastro] = useState('');
  const [categoriaCadastro, setCategoriaCadastro] = useState('');
  const [subCategoriaCadastro, setSubCategoriaCadastro] = useState('');
  const [serveCadastro, setServeCadastro] = useState('');
  const [obsCadastro, setObsCadastro] = useState('');
  const [caloriasCadastro, setCaloriasCadastro] = useState('');
  const [precoDeCustoCadastro, setPrecoDeCustoCadastro] = useState('');
  const [precoDeVendaCadastro, setPrecoDeVendaCadastro] = useState('');
  const [tempoDePreparoCadastro, setTempoDePreparoCadastro] = useState('');
  const [ativoCadastro, setAtivoCadastro] = useState(true);
  const [fotoCadastro, setFotoCadastro] = useState(true);

  const [idcardapio, setIdcardapio] = useState('')


  const preview = useMemo(() => {
    return foto ? URL.createObjectURL(foto) : null;
  }, [foto])

  useEffect(() => {
    api.get('/listarCardapio', {
    }).then(response => {
      setCardapio(response.data)
    })
  }, [])

  async function handleCadastrarCardapio() {
    try {
      axios({
        method: 'post',
        url: 'http://fastorder-com-br.umbler.net/cadastrarCardapio',
        data: qs.stringify({
          nome: nomeCadastro,
          categoria: categoriaCadastro,
          sub_categoria: subCategoriaCadastro,
          serve: serveCadastro,
          observacoes: obsCadastro,
          calorias: caloriasCadastro,
          preco_de_custo: precoDeCustoCadastro,
          preco_de_venda: precoDeVendaCadastro,
          tempo_de_preparo: tempoDePreparoCadastro,
          ativo: ativoCadastro,
          foto: fotoCadastro
        }),
        headers: {
          'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
        }
      })
    } catch (err) {
      alert('Error');
    }

  }

  async function handleEditCardapio() {
    try {
      axios({
        method: 'put',
        url: `http://fastorder-com-br.umbler.net/atualizarCardapio/${idcardapio}`,
        data: qs.stringify({
          nome: nomeCadastro,
          categoria: categoriaCadastro,
          sub_categoria: subCategoriaCadastro,
          serve: serveCadastro,
          observacoes: obsCadastro,
          calorias: caloriasCadastro,
          preco_de_custo: precoDeCustoCadastro,
          preco_de_venda: precoDeVendaCadastro,
          tempo_de_preparo: tempoDePreparoCadastro,
          ativo: ativoCadastro,
          foto: fotoCadastro
        }),
        headers: {
          'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
        }
      })
    } catch (err) {
      alert('Error');
    }
  }

  async function handleDeleteCardapio() {
    try {
      await api.delete(`http://fastorder-com-br.umbler.net/deletarCardapio/${idcardapio}`)
    } catch (err) {
      alert('Erro ao deletar funcionario');
    }
  }

  async function idpegarcardapio(id) {
    setIsModalViseble(true)
    setIdcardapio(id)
    console.log(id)
    //console.log(idfunc)
  }



  return (
    <div>
      <Header />
      <div className="div-container" style={{ paddingLeft: 250, width: '95%' }}>
        <h1 style={{ color: '#E02041', fontSize: 35 }}>Cadastrar Item no Cardapio</h1>
        <form className="cadastro-funcionario">
          <input
            style={{ textTransform: "capitalize" }}
            className="input"
            placeholder="Nome Do Produto"
            value={nomeCadastro}
            onChange={event => setNomeCadastro(event.target.value)}
          />

          <select onChange={event => setCategoriaCadastro(event.target.value)} style={{ border: '1px solid #dcdce6', color: '#333', borderRadius: '8px', width: '100%', height: '60px', marginTop: 10, padding: '0 24px', fontSize: 17 }} name="categorias">
            <option value="null">Categoria</option>
            <option value="Hamburger">Hamburger</option>
            <option value="Pizza">Pizza</option>
            <option value="Macarrão">Macarrão</option>
            <option value="Bebidas">Bebidas</option>
            <option value="Doces">Doces</option>

          </select>

          <select onChange={event => setSubCategoriaCadastro(event.target.value)} style={{ border: '1px solid #dcdce6', color: '#333', borderRadius: '8px', width: '100%', height: '60px', marginTop: 10, padding: '0 24px', fontSize: 17 }} name="Sub-categorias">
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

          <select onChange={event => setServeCadastro(event.target.value)} style={{ border: '1px solid #dcdce6', color: '#333', borderRadius: '8px', width: '100%', height: '60px', marginTop: 10, padding: '0 24px', fontSize: 17 }} name="categorias">
            <option value="null">Quantas pessoas serve ?</option>
            <option value="1">1- Pessoa</option>
            <option value="2">2- Pessoas</option>
            <option value="3">3- Pessoas</option>
            <option value="4">4- Pessoas</option>
            <option value="5">5- Pessoas</option>
          </select>

          <div className="input-group">
            <input
              value={obsCadastro}
              onChange={event => setObsCadastro(event.target.value)}
              placeholder="Observações do produto / Modo de preparo"
            />

            <input
              value={caloriasCadastro}
              onChange={event => setCaloriasCadastro(event.target.value)}
              style={{ width: 150 }}
              maxlength="6"
              placeholder="Calorias"
            />
          </div>

          <div className="input-group">
            <input
              value={precoDeCustoCadastro}
              onChange={event => setPrecoDeCustoCadastro(event.target.value)}
              placeholder="Preço de custo"
            />

            <input
              value={precoDeVendaCadastro}
              onChange={event => setPrecoDeVendaCadastro(event.target.value)}
              style={{ width: 1250 }}
              placeholder="Preço de venda"
            />

            <input
              value={tempoDePreparoCadastro}
              onChange={event => setTempoDePreparoCadastro(event.target.value)}
              style={{ width: 1250 }}
              placeholder="Tempo de preparo (min)"
            />
          </div>

          <select onChange={event => setAtivoCadastro(event.target.value)} style={{ border: '1px solid #dcdce6', color: '#333', borderRadius: '8px', width: '100%', height: '60px', marginTop: 10, padding: '0 24px', fontSize: 17 }} name="categorias">
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
          <button onClick={() => handleCadastrarCardapio()} className="button">Cadastrar</button>
        </form>



      </div>

      <div className="cadastrados" style={{ paddingLeft: 250 }}>
        <h1 style={{ color: '#E02041', fontSize: 35 }}>Itens Cadastrados</h1>
        <ul>
          {cardapio.map(cardapio => (
            <li key={cardapio.id}>
              <strong>ID:&nbsp;<p>...............................&nbsp;{cardapio.id}</p></strong>

              <strong>Nome:&nbsp;<p>...................&nbsp;{cardapio.nome}</p></strong>

              <strong>Categoria:&nbsp;<p>......................&nbsp;{cardapio.categoria}</p></strong>

              <strong>Sub-Categoria:&nbsp;<p>..............&nbsp;{cardapio.sub_categoria}</p></strong>

              <strong>Quantas pessoas serve:&nbsp;<p>..................&nbsp;{cardapio.serve} Pessoas</p></strong>

              <strong>Obs:&nbsp;.........................&nbsp;<p>{cardapio.observacoes}</p></strong>

              <strong>Calorias:&nbsp;....................&nbsp;<p>{cardapio.calorias}</p></strong>

              <strong>Preço De Custo:&nbsp;....................&nbsp;<p>R$: {cardapio.preco_de_custo}</p></strong>
              <strong>Preço de venda:&nbsp;..............&nbsp;<p>R$: {cardapio.preco_de_venda}</p></strong>
              <strong>Tempo de preparo:&nbsp;.......&nbsp;<p>{cardapio.tempo_de_preparo} Minutos</p></strong>

              <strong>{cardapio.createdAt}</strong>
              <button onClick={() => idpegarcardapio(cardapio.id)} type="button">
                Editar
          </button>
            </li>
          ))}
        </ul>
        {isModalVisible ?
          <Modal onClose={() => setIsModalViseble(false)}>
            <div className="div-container-modal" style={{ paddingLeft: 25, width: '95%' }}>
              <h1>Editar Cadastro</h1>
              <form className="editar-funcionario">
                <input type="text" placeholder="Nome Completo"  autoFocus />
                <input type="text" placeholder="Endereço"  />
                <input maxlength="8" placeholder="CEP"  />
                <input type="tel" maxlength="13" placeholder="Telefone"  />
                <input type="date" placeholder="Admissão"  />
                <input type="date" placeholder="Desligamento"  />
                <button onClick={() => handleEditCardapio(cardapio.id)} className="button-modal">Salvar</button>
                <button onClick={() => handleDeleteCardapio(cardapio.id)} className="button-modal">Apagar</button>
              </form>
            </div>
          </Modal> : null}
      </div>
    </div>
  )
}