import React, { useState } from 'react';

export default function Home({history}) {
  const [text, setText] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();
    localStorage.setItem('log', text)
    history.push('/resultado')
  }


  return (
    <>
      <p>
        <strong>ANALISADOR DE LOGS</strong>
      </p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="text">Log de suas partidas</label>
        <input
          id='text'
          type='text'
          placeholder="Aguarde..."
          value={text}
          onChange={event => setText(event.target.value)}
        />
        <button className="btn" type="submit">BUSCAR</button>
      </form>
    </>
  )
}
