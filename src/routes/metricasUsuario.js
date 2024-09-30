var express = require("express");
var router = express.Router();

var metricaUsuarioController = require("../controllers/metricaUsuarioController");

router.get("/ultimas/:idUsuario", function (req, res) {
    metricaUsuarioController.buscarUltimasMetricas(req, res);
});

router.get("/tempo-real/:idUsuario", function (req, res) {
    metricaUsuarioController.buscarMetricasEmTempoReal(req, res);
})

router.get("/obterKpiPeriodo/:idUsuario", function (req, res) {
    metricaUsuarioController.obterKpiPeriodoMaisEscolhido(req, res);
})

router.get("/obterKpiGenero/:idUsuario", function (req, res) {
    metricaUsuarioController.obterKpiGeneroMaisEscolhido(req, res);
})

router.get("/obterKpiAtividade/:idUsuario", function (req, res) {
    metricaUsuarioController.obterKpiAtividadeMaisEscolhida(req, res);
})

module.exports = router;