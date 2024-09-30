var metricaUsuarioModel = require("../models/metricaUsuarioModel");

function buscarUltimasMetricas(req, res) {

    const limite_linhas = 7;

    var idUsuario = req.params.idUsuario;
    console.log(`No controller o IDUSUARIO é: ${idUsuario}`)

    console.log(`Recuperando as ultimas ${limite_linhas} metricas do Usuario`);

    metricaUsuarioModel.buscarUltimasMetricas(idUsuario, limite_linhas).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas metricas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}


function buscarMetricasEmTempoReal(req, res) {

    var idUsuario = req.params.idUsuario;

    console.log(`Recuperando metricas em tempo real`);

    metricaUsuarioModel.buscarMetricasEmTempoReal(idUsuario).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas metricas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function obterKpiPeriodoMaisEscolhido(req, res) {
    var idUsuario = req.params.idUsuario;

    console.log(`Recuperando metricas em tempo real`);

    metricaUsuarioModel.obterKpiPeriodoMaisEscolhido(idUsuario).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas metricas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function obterKpiGeneroMaisEscolhido(req, res) {
    var idUsuario = req.params.idUsuario;

    console.log(`Recuperando metricas em tempo real`);

    metricaUsuarioModel.obterKpiGeneroMaisEscolhido(idUsuario).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas metricas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function obterKpiAtividadeMaisEscolhida(req, res) {
    var idUsuario = req.params.idUsuario;

    console.log(`Recuperando metricas em tempo real`);

    metricaUsuarioModel.obterKpiAtividadeMaisEscolhida(idUsuario).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas metricas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    buscarUltimasMetricas,
    buscarMetricasEmTempoReal,
    obterKpiPeriodoMaisEscolhido,
    obterKpiGeneroMaisEscolhido,
    obterKpiAtividadeMaisEscolhida
}