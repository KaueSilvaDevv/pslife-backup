var periodoDiaModel = require("../models/periodoDiaModel");

function listarPeriodosDia(req, res) {
    periodoDiaModel.listarPeriodosDia().then((resultado) => {
    res.status(200).json(resultado);
  });
}

function obterPeriodosDiaPopulares(req, res) {
    periodoDiaModel.obterPeriodosDiaPopulares().then((resultado) => {
    res.status(200).json(resultado);
  });
}

function obterKpiPeriodo(req, res) {
    periodoDiaModel.obterKpiPeriodo().then((resultado) => {
    res.status(200).json(resultado);
  });
}

module.exports = {
listarPeriodosDia,
obterPeriodosDiaPopulares,
obterKpiPeriodo,
};
