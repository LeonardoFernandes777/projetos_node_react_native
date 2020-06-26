import React, {useEffect, useState} from 'react';
import api from '../../../services/api';
import './styles.css'
import '../../../global.css'
import Header from '../../../components/chart/Header'
import Modal from '../../../components/Modal/Modal';  
import InputMask from 'react-input-mask';
import axios from 'axios'
import qs from 'qs'

export default function CadastroFuncionarios(){
  
  const [colaboradores, setColaboradores] = useState([]);
  const [isModalVisible, setIsModalViseble] = useState(false);
  
  const [nomeCadastro, setNomeCadastro] = useState('');
  const [cpfCadastro, setCpfCadastro] = useState('');
  const [sexoCadastro, setSexoCadastro] = useState(''); 
  const [enderecoCadastro, setEnderecoCadastro] = useState(''); 
  const [cidadeCadastro, setCidadeCadastro] = useState('');
  const [ufCadastro, setUfCadastro] = useState('');
  const [nascimetoCadastro, setNascimentoCadastro] = useState('');
  const [cepCadastro, setCepCadastro] = useState('');
  const [telefoneCadastro, setTelefoneCadastro] = useState('');
  const [emailCadastro, setEmailCadastro] = useState('');
  const [cargo, setCargo] = useState('00000')
  const [admissao, setadmissao] = useState('00000')
  const [desligamento, setdesligamento] = useState('00000')

  useEffect(() => {
    api.get('/listarColaborador',{
    }).then(response =>{  
      setColaboradores(response.data)
    })
  }, [])

  async function handleSubmit(){
    axios({
      method: 'post',
      url: 'http://fastorder-com-br.umbler.net/Colaborador',
      data: qs.stringify({
        nome: nomeCadastro,
        data_de_nascimento: nascimetoCadastro,
        cpf: cpfCadastro,
        telefone: telefoneCadastro,
        email: emailCadastro,
        endereco: enderecoCadastro,
        cidade: cidadeCadastro,
        cep: cepCadastro,
        uf: ufCadastro,
      }),
      headers: {
        'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
      }
    })
  
  }


  //Pegar o Id do card/button
 async function handleEditarFuncionario(id){
    try{
      await api.put(`/atualizarColaborador/${id}`)
    }catch(err){
      alert('Erro ao Editar funcionario');
    }
  }

  return(
    <div>
      <Header/>
      <div className="div-container" style={{paddingLeft: 250, width: '95%'}}>
        <h1 >Cadastrar Novo Funcionario</h1>
        <form className="cadastro-funcionario">
          <input 
          required 
          style={{textTransform: "capitalize"}}
          className="input" 
          placeholder="Nome Completo"
          value={nomeCadastro}
          onChange={event => setNomeCadastro(event.target.value)}
          />

          <div className="input-group">
              <InputMask
              mask="999.999.999-99"
              placeholder="CPF"
              value={cpfCadastro}
              onChange={event => setCpfCadastro(event.target.value)}
              />

              <input
              style={{width: 200}}
              value={sexoCadastro} 
              placeholder="Sexo"
              onChange={event => setSexoCadastro(event.target.value)}
              />;
          </div>

          <input 
          type="text" 
          required
           placeholder="Endereço"
           value={enderecoCadastro}
           onChange={event => setEnderecoCadastro(event.target.value)}
           />

          <div className="input-group">
            <input 
            style={{textTransform: "capitalize"}}
            required 
            placeholder="Cidade" 
            value={cidadeCadastro}
            onChange={event => setCidadeCadastro(event.target.value)}
            />

            <input 
            required 
            style={{textTransform: "uppercase", width: 80}}
            maxlength="2" 
            placeholder="UF" 
            value={ufCadastro}
            onChange={event => setUfCadastro(event.target.value)}
            />
          </div>

          <InputMask
          mask="9999/99/99"
          placeholder="Data de Nascimento" 
          required 
          value={nascimetoCadastro}
          onChange={event => setNascimentoCadastro(event.target.value)}
          />

          <InputMask
          mask="99999-999"
          placeholder="CEP" 
          required
          value={cepCadastro}
          onChange={event => setCepCadastro(event.target.value)}
          />

          <InputMask
          mask="(99) 99999-9999"
          placeholder="Telefone" 
          required
          value={telefoneCadastro}
          onChange={event => setTelefoneCadastro(event.target.value)}
          />

          <input 
          placeholder="E-mail" 
          required
          value={emailCadastro}
          onChange={event => setEmailCadastro(event.target.value)}
          />


          <button type="submit" onClick={() => handleSubmit()} className="button">Cadastrar</button>
        </form>
      </div>

      <div className="cadastrados" style={{paddingLeft: 250 }}>
        <h1>CARDS FUNCIONARIOS</h1>
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

        <strong>Cargo:&nbsp;....................&nbsp;<p>{cargo}</p></strong>
          <strong>Admissão:&nbsp;..............&nbsp;<p>{admissao}</p></strong>
          <strong>Desligamento:&nbsp;.......&nbsp;<p>{desligamento}</p></strong>

          <strong>{colaboradores.createdAt}</strong>
          <button onClick={() => setIsModalViseble(true) }  type="button">
            Editar/Atribuir Cargo
          </button>
        </li>
        ))}
      </ul>
      {isModalVisible ? 
      <Modal onClose={() => setIsModalViseble(false)}>
      <div className="div-container-modal" style={{paddingLeft: 25, width: '95%'}}>
      <h1>Editar Cadastro</h1>
        <form className="editar-funcionario">
          <input type="text" placeholder="Nome Completo" required autoFocus />
          <input type="text" placeholder="Endereço" required />
          <input maxlength="8" placeholder="CEP" required />
          <input type="tel" maxlength="13" placeholder="Telefone" required />
          <input type="date" placeholder="Admissão" required/>
          <input type="date" placeholder="Desligamento" required/>
          <button onClick={() => handleEditarFuncionario(colaboradores.id)} className="button-modal">Salvar</button>
        </form>
      </div>
      </Modal> : null}
      </div>
    </div>
  )
}