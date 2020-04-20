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
      jogador = param
      console.log(` Jogador ${param} [${param2}] Kill`);
      break;
    case 'SUICIDE':
      console.log(`\n <======== ${param}  SE MATOU  [${param2}] =======> \n `);
      break;
    default:
      break;
  }

}
module.exports = log;
