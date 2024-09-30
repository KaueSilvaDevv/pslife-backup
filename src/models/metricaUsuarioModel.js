var database = require("../database/config");

function buscarUltimasMetricas(idUsuario, limite_linhas) {

    var instrucaoSql = `SELECT 
                    qtdHoraJogada as hora_jogo,
                    qtdHoraEstudo as hora_estudo,
                    date_format(dtRegistro, '%d/%m') as dt_grafico
                    from metricaUsuarios
                    WHERE fkusuario = ${idUsuario}
                    ORDER BY id DESC LIMIT ${limite_linhas}`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMetricasEmTempoReal(idUsuario) {

    var instrucaoSql = `SELECT 
                        qtdHoraJogada as hora_jogo,
                        qtdHoraEstudo as hora_estudo,
                        date_format(dtRegistro, '%d/%m') as dt_grafico,
                        fkusuario
                        from metricaUsuarios
                        WHERE fkusuario = ${idUsuario}
                        ORDER BY id DESC LIMIT 1`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);

}
function obterKpiPeriodoMaisEscolhido(idUsuario) {

    var instrucaoSql = `select 
    pd.nome periodo,
    count(mu.fkperiodoDiaJogado) qtdSelecionada
    from periodoDia pd
    inner join metricaUsuarios mu on mu.fkperiodoDiaJogado = pd.id
    where mu.fkusuario = ${idUsuario}
    group by periodo
    order by qtdSelecionada desc
    limit 1;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function obterKpiGeneroMaisEscolhido(idUsuario) {

    var instrucaoSql = `select 
    gen.nome genero,
    count(mu.fkperiodoDiaJogado) qtdSelecionada
    from generoJogo gen
    inner join metricaUsuarios mu on mu.fkgenero = gen.id
    where mu.fkusuario = ${idUsuario}
    group by genero
    order by qtdSelecionada desc
    limit 1;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function obterKpiAtividadeMaisEscolhida(idUsuario) {

    var instrucaoSql = `select 
    sum(qtdHoraJogada) totalHoraJogada,
    sum(qtdHoraEstudo) totalHoraEstudo
    from metricaUsuarios
    where fkusuario = ${idUsuario}`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}



module.exports = {
    buscarUltimasMetricas,
    buscarMetricasEmTempoReal,
    obterKpiPeriodoMaisEscolhido,
    obterKpiGeneroMaisEscolhido,
    obterKpiAtividadeMaisEscolhida
}
