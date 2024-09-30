var database = require("../database/config");

function listarVideoGames() {
  var instrucaoSql = `SELECT * FROM videogame;`;

  return database.executar(instrucaoSql);
}

function obterDadosConsoles() {

  var instrucaoSql = `select
  vd.nome console,
  count(usu.fkvideogame) qtdSelecionado
  from videogame vd
  inner join usuario usu on usu.fkvideogame = vd.id
  group by console;`;

  return database.executar(instrucaoSql);
}

function obterKpiVideoGame() {

  var instrucaoSql = `select
  vd.nome videogame,
  count(usu.fkvideogame) qtdSelecionado
  from videogame vd
  inner join usuario usu on usu.fkvideogame = vd.id
  group by videogame
  order by qtdSelecionado desc
  limit 1;`;

  return database.executar(instrucaoSql);
}


module.exports = {
  listarVideoGames,
  obterDadosConsoles,
  obterKpiVideoGame
};
