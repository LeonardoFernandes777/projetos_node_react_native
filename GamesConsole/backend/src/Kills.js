const fs = require("fs");
const Config = require('../config');
const debugLog = require('./LogApp');


var Kill = 0;
var suicide = 0;
data = fs.readFile('C:\\Users\\leona\\Documents\\projetos_node_react_native\\GamesConsole\\backend\\src\\assets\\games.log', 'utf8', (err, data) => {
  if (err) throw err;
  else{
    let initGames = [];
    lines = data.split(/[\n]/)
    lines.map((line) =>{
      let arrayLine = line.trim().split(/[\\]/);
      let lineType = arrayLine[0].split(' ');
      switch (lineType[1]) {
        case 'InitGame:':
          newGame(initGames, arrayLine);
          break;
        case 'ClientUserinfoChanged:':
          newPlayer(initGames, arrayLine, line);
          break;
        case 'Kill:':
          countKills(initGames, arrayLine);
          break;
          case 'ShutdownGame:':
            console.log(' Numero Total de Kill ' + Kill)
            console.log(' Numero Total de Suicidio ' + suicide)
            console.log('\n ***** Partidda Encerrada ***** \n')
            Kill = 0
            suicide = 0
      }
    })
  }
});
function newGame(initGames, arrayLine) {
  let game = {};
  Config.validation.enableLocalLog === true ? debugLog("NOVO JOGO", initGames.length) : '';
  initGames.push(
    {
      'game': {
        map: getMapName(arrayLine),
        date: getDate(arrayLine),
        total_kills: 0,
        players: [],
        kills: {},
      },
      'validation': {
        worldKills: 0,
        selfKills: 0,
        countKill: 0
      }
    }
  );
  if (!Config.validation.showValidation) delete initGames[initGames.length - 1].validation;
  initGames[initGames.length - 1].game.push + 1;
}

function newPlayer(initGames, arrayLine, line,) {
  let startIndex = line.indexOf('n\\');
  let endIndex = line.indexOf('\\t') - 1;
  let charNumber = endIndex - startIndex;
  let player = line.trim().substr(startIndex, charNumber);
  player = player.replace(/\\/g, '');
  Config.validation.enableLocalLog === true ? debugLog("NOVO PLAYER", player) : '';
  if (initGames[initGames.length - 1].game.players.indexOf(player) === -1) {
    initGames[initGames.length - 1].game.players.push(player);
    initGames[initGames.length - 1].game.kills[player] = 0;
  }
}

function countKills(initGames, arrayLine) {
  initGames[initGames.length - 1].game.total_kills++;
  let user = arrayLine[0].includes('<world>');
  if (user) {
    countWorldKill(initGames, arrayLine);
    return;
  }
  countUserKill(initGames, arrayLine);

  function countWorldKill(initGames, arrayLine) {
    let killed = recoverPlayer(arrayLine, 'world');
    Config.validation.enableLocalLog === true ? debugLog("CK", killed.player, '-') : '';
    initGames[initGames.length - 1].game.kills[killed.player]--;
    if (Config.validation.showValidation) {
      initGames[initGames.length - 1].validation.countKills ++
    }
    return;
  }

  function countUserKill(initGames, arrayLine) {
    let killer = recoverPlayer(arrayLine, 'player');
   if (killer.validKill) {
      Config.validation.enableLocalLog === true ? debugLog("CK", killer.player, '+') : ''
      Config.validation.countKill ++
      Kill ++
    }
    else {
      if (Config.validation.showValidation) {
        initGames[initGames.length - 1].validation.selfKills ++
      }
      Config.validation.enableLocalLog === true ? debugLog("SUICIDE", killer.player, '*') : '';
      suicide ++
    }
    return;
  }
}

function recoverPlayer(logLine, deadBy) {
  let action = { player: undefined, validKill: undefined };

  if (deadBy === 'world') {
    let player = logLine[0].substr(logLine[0].indexOf('killed'));
    player = player.substr(7, player.indexOf('by'));
    player = player.split('by');
    action.player = player[0].trim();
    action.validKill = true;
  }
  else {
    let player = logLine[0].substr(logLine[0].lastIndexOf(':')).substr(2);
    player = player.slice(0, player.indexOf('killed')).trim();

    let killed = logLine[0].substr(logLine[0].lastIndexOf('killed')).substr(7);
    killed = killed.slice(0, killed.indexOf('by')).trim();
    action.player = player;


    if (player !== killed) {
      action.validKill = true;
    }
    else {
      action.validKill = false;
    }
  }
  return action;
}


function getDate(arrayLine) {
  for (let i = 0; i <= arrayLine.length; i++) {
    if (arrayLine[i] === 'version') {
      let date = arrayLine[i + 1].substr(23);
      return date;
    }
  }
}


function getMapName(arrayLine) {
  for (let i = 0; i <= arrayLine.length; i++) {
    if (arrayLine[i] === 'mapname') {
      let map = arrayLine[i + 1];
      return map;
    }
  }
}