import React, { useEffect, useState } from 'react';
import api from '../../services/api';

export default function Resultadolog() {
  const [lista, setList] = useState([])
  useEffect(() => {
    async function loadlog() {
      const log = localStorage.getItem('log');
      const response = await api.get('/Games', { log });
      var filtrados = response.data.filter(function (response) {
        var contador = Number(response.game.contador);
        return contador === Number(log);
      });
      console.log(filtrados)
      setList(filtrados)
    }
    loadlog()
  }, []);
  return (
    <>
      <h3>Resultado da partida: </h3>
      <br/>
      <ul className="list-log">
        {lista.map(list => (
          <li key={list.game.contador}>Log Numero:  {list.game.contador}</li>
        ))}
        {lista.map(list => (
          <li key={list.game.contador}>Mapa: {list.game.map}</li>
        ))}
        {lista.map(list => (
          <li key={list.game.contador}>Total de Kills:  {list.game.total_kills}</li>
        ))}
        {lista.map(list => (
          <li key={list.game.contador}>Players:  {list.game.players.length}</li>
        ))}
        {lista.map(list => (
          <li key={list.game.contador}>Mundo Kills:  {list.validation.worldKills}</li>
        ))}
        {lista.map(list => (
          <li key={list.game.contador}>Suicidio:  {list.validation.selfKills}</li>
        ))}
         {lista.map(list => (
          <li key={list.game.contador}>Total de Kills:  {list.validation.countKills}</li>
        ))}
      </ul>
      <br/>
    </>
  );

}