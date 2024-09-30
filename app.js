require("dotenv").config();

var express = require("express");
var cors = require("cors");
var path = require("path");
var PORTA_APP = process.env.APP_PORT;
var HOST_APP = process.env.APP_HOST;

var app = express();

// var indexRouter = require("./src/routes/index");
var usuarioRouter = require("./src/routes/usuarios");
var videogamesRouter = require("./src/routes/videogames");
var generosJogoRouter = require("./src/routes/generosJogo");
var metricasUsuarioRouter = require("./src/routes/metricasUsuario");
var periodosDiaRouter = require("./src/routes/periodosDia");


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(cors());

// app.use("/", indexRouter);
app.use("/usuarios", usuarioRouter);
app.use("/videogames", videogamesRouter);
app.use("/generosJogo", generosJogoRouter);
app.use("/metricasUsuario", metricasUsuarioRouter);
app.use("/periodosDia", periodosDiaRouter);

app.listen(PORTA_APP, function () {
    console.log(`

$$$$$$$   \$$$$$$\  $$\       $$$$$$\ $$$$$$$$\ $$$$$$$$\ 
$$  __$$\ $$  __$$\ $$ |      \_$$  _|$$  _____|$$  _____|
$$ |  $$ |$$ /  \__|$$ |        $$ |  $$ |      $$ |      
$$$$$$$  |\$$$$$$\  $$ |        $$ |  $$$$$\    $$$$$\    
$$  ____/  \____$$\ $$ |        $$ |  $$  __|   $$  __|   
$$ |      $$\   $$ |$$ |        $$ |  $$ |      $$ |      
$$ |      \$$$$$$  |$$$$$$$$\ $$$$$$\ $$ |      $$$$$$$$\ 
\__|       \______/ \________|\______|\__|      \________|
                                                                               
    \n\n\n                                                                                                 
    Servidor do seu site já está rodando! Acesse o caminho a seguir para visualizar .: http://${HOST_APP}:${PORTA_APP} :. \n\n`);
});
