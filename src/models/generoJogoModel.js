var database = require("../database/config");

function listarGenerosJogo() {
  var instrucaoSql = `SELECT * FROM generoJogo`;

  return database.executar(instrucaoSql);
}

function obterGenerosJogo() {
  var instrucaoSql = `select 
  gj.nome generoJogo, 
  count(usu.fkgeneroFavorito) qtdSelecionado 
  from generoJogo gj
  inner join usuario usu on usu.fkgeneroFavorito = gj.id
  group by generoJogo;`;

  return database.executar(instrucaoSql);
}

function obterKpiGeneroJogo() {
  var instrucaoSql = `select 
  gj.nome nomeGenero, 
  count(usu.fkgeneroFavorito) qtdSelecionado 
  from generoJogo gj 
  inner join usuario usu on usu.fkgeneroFavorito = gj.id
  group by nomeGenero
  order by qtdSelecionado desc 
  limit 1;`;

  return database.executar(instrucaoSql);
}

module.exports = { listarGenerosJogo, obterGenerosJogo, obterKpiGeneroJogo };
