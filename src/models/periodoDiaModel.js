var database = require("../database/config");

function listarPeriodosDia() {
  var instrucaoSql = `SELECT * FROM periodoDia`;

  return database.executar(instrucaoSql);
}

function obterPeriodosDiaPopulares() {
  var instrucaoSql = `select
    pdd.nome periodo,
    count(usu.fkvideogame) qtdSelecionado
    from periodoDia pdd
    inner join usuario usu on usu.fkperiodoDia = pdd.id
    group by periodo;`;

  return database.executar(instrucaoSql);
}

function obterKpiPeriodo() {
  var instrucaoSql = `select
  pdd.nome periodo,
  count(usu.fkperiodoDia) qtdSelecionado
  from periodoDia pdd
  inner join usuario usu on usu.fkperiodoDia = pdd.id
  group by periodo
  order by qtdSelecionado desc
  limit 1;`;

  return database.executar(instrucaoSql);
}

module.exports = { 
  listarPeriodosDia, 
  obterPeriodosDiaPopulares, 
  obterKpiPeriodo 
};
