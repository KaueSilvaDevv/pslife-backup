var generoJogoModel = require("../models/generoJogoModel");

function listarGenerosJogo(req, res) {
    generoJogoModel.listarGenerosJogo().then((resultado) => {
    res.status(200).json(resultado);
  });
}

function obterGenerosJogo(req, res) {
    generoJogoModel.obterGenerosJogo().then((resultado) => {
    res.status(200).json(resultado);
  });
}

function obterKpiGeneroJogo(req, res) {
    generoJogoModel.obterKpiGeneroJogo().then((resultado) => {
    res.status(200).json(resultado);
  });
}

module.exports = {
listarGenerosJogo,
obterGenerosJogo,
obterKpiGeneroJogo
};
