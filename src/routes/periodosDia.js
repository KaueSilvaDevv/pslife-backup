var express = require("express");
var router = express.Router();

var periodoDiaController = require("../controllers/periodoDiaController");

router.get("/listarPeriodosDia", function (req, res) {
    periodoDiaController.listarPeriodosDia(req, res);
});

router.get("/obterPeriodosDiaPopulares", function (req, res) {
    periodoDiaController.obterPeriodosDiaPopulares(req, res);
});

router.get("/obterKpiPeriodo", function (req, res) {
    periodoDiaController.obterKpiPeriodo(req, res);
});

module.exports = router;