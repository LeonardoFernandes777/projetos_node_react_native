import React, {useEffect, useState} from 'react';
import api from '../../../services/api';
import './styles.css'
import '../../../global.css'
import Header from '../../../components/chart/Header'
import Modal from '../../../components/Modal/Modal';  
import Dropdown from 'react-dropdown';

export default function CadastroCardapio(){
  
  const [colaboradores, setColaboradores] = useState([]);
  const [isModalVisible, setIsModalViseble] = useState(false);
  const sexo = [
    'Masculino', 'Feminino'
];

const defaultOption = sexo[0];

  useEffect(() => {
    api.get('/listarCardapio',{
    }).then(response =>{  
      setColaboradores(response.data)
    })
  }, [])


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
          <input required style={{textTransform: "capitalize"}}className="input" placeholder="Nome Completo"/>
          <div className="input-group">
              <input  required maxlength="11" placeholder="CPF"/>
              <Dropdown className="drop" options={sexo}  value={defaultOption} placeholder="Sexo" />;
          </div>
          <input required placeholder="Endereço"/>
          <div className="input-group">
            <input required placeholder="Cidade" />
            <input required style={{textTransform: "uppercase", width: 80}} maxlength="2" placeholder="UF" />
          </div>
          <input type="date" placeholder="Data de Nascimento" required />
          <input maxlength="8" placeholder="CEP" required/>
          <input maxlength="13" placeholder="Telefone" required/>
          <button className="button">Cadastrar</button>
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

          <strong>Cargo:&nbsp;....................&nbsp;<p>0000000</p></strong>
          <strong>Admissão:&nbsp;..............&nbsp;<p>0000000</p></strong>
          <strong>Desligamento:&nbsp;.......&nbsp;<p>0000000</p></strong>

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