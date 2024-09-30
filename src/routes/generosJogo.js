var express = require("express");
var router = express.Router();

var generoJogoController = require("../controllers/generoJogoController");

router.get("/listarGenerosJogo", function (req, res) {
    generoJogoController.listarGenerosJogo(req, res);
});

router.get("/obterGenerosJogo", function (req, res) {
    generoJogoController.obterGenerosJogo(req, res);
});

router.get("/obterKpiGeneroJogo", function (req, res) {
    generoJogoController.obterKpiGeneroJogo(req, res);
});

module.exports = router;