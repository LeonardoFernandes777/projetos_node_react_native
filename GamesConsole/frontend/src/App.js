import React, {useState}from 'react';
import './App.css';
import api from './services/api';

function App() {
  const [text, setText] = useState('');

  async function handleSubmit(event){
    event.preventDefault();
    //const response = await api.get('/Games',{ text })
    console.log(text);
  }
  return (
    <div className="container">
        <div className="content">
        <p>
        <strong>ANALISADOR DE LOGS</strong>
        </p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="text">Log de suas partidas</label>
          <input 
          id = 'text' 
          type='text' 
          placeholder="Aguarde..."
          value ={text}
          onChange={ event => setText(event.target.value)}
          />
          <button className="btn" type="submit">BUSCAR</button>
        </form>
      </div>
    </div>
  );
}

export default App;
