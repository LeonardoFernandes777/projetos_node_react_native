const log = (etapa, param, param2) => {

  switch (etapa) {
    case 'NOVO JOGO':
      console.log(` \n =================================== \n`);
      console.log(` \n             GAME [${param}] \n`);
      console.log(` \n ===================================\n`);
      break;
    case 'NOVO PLAYER':
      console.log(` O Jogador ${param} Entrou na Partida`);
      break;
    case 'CK':
      console.log(` ${param} [${param2}] `);
      break;
    case 'SUICIDE':
      console.log(`====================> ${param} **** SE MATOU **** [${param2}] `);
      break;
    default:
      break;
  }

}

module.exports = log
