var videogameModel = require("../models/videogameModel");

function listarVideoGames(req, res) {
  videogameModel.listarVideoGames().then((resultado) => {
    res.status(200).json(resultado);
  });
}

function obterDadosConsoles(req, res) {
  videogameModel.obterDadosConsoles().then((resultado) => {
    res.status(200).json(resultado);
  });
}

function obterKpiVideoGame(req, res) {
  videogameModel.obterKpiVideoGame().then((resultado) => {
    res.status(200).json(resultado);
  });
}

module.exports = {
  listarVideoGames,
  obterDadosConsoles,
  obterKpiVideoGame
};
