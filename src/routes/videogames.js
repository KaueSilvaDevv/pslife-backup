var express = require("express");
var router = express.Router();

var videogameController = require("../controllers/videogameController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.get("/listarVideoGames", function (req, res) {
  videogameController.listarVideoGames(req, res);
});

router.get("/obterDadosConsoles", function (req, res) {
  videogameController.obterDadosConsoles(req, res);
});

router.get("/obterKpiVideoGame", function (req, res) {
  videogameController.obterKpiVideoGame(req, res);
});

module.exports = router;