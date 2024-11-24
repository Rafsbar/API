// Define o ambiente de execução (produção ou desenvolvimento)
var ambiente_processo = 'desenvolvimento'; // Troque para 'producao' quando necessário

// Define o caminho do arquivo .env com base no ambiente
var caminho_env = ambiente_processo === 'producao' ? '.env' : '.env.dev';
require("dotenv").config({ path: caminho_env });

var express = require("express");
var cors = require("cors");
var path = require("path");

var PORTA_APP = process.env.APP_PORT || 8080; // Porta padrão caso APP_PORT não esteja definida
var HOST_APP = process.env.APP_HOST || "localhost"; // Host padrão caso APP_HOST não esteja definido

var app = express();

// Importa as rotas necessárias
var indexRouter = require("./src/routes/index");
var usuarioRouter = require("./src/routes/usuarios");

// Configurações básicas do Express
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(express.static(path.join(__dirname, "public"))); // Garante que os arquivos estáticos sejam servidos da pasta "public"

// Configura as rotas do servidor
app.use("/", indexRouter);
app.use("/usuarios", usuarioRouter);

// Inicia o servidor
app.listen(PORTA_APP, function () {
    console.log(`
    ##   ##  ######   #####             ####       ##     ######     ##              ##  ##    ####    ######  
    ##   ##  ##       ##  ##            ## ##     ####      ##      ####             ##  ##     ##         ##  
    ##   ##  ##       ##  ##            ##  ##   ##  ##     ##     ##  ##            ##  ##     ##        ##   
    ## # ##  ####     #####    ######   ##  ##   ######     ##     ######   ######   ##  ##     ##       ##    
    #######  ##       ##  ##            ##  ##   ##  ##     ##     ##  ##            ##  ##     ##      ##     
    ### ###  ##       ##  ##            ## ##    ##  ##     ##     ##  ##             ####      ##     ##      
    ##   ##  ######   #####             ####     ##  ##     ##     ##  ##              ##      ####    ######  

    Servidor do seu site já está rodando!
    Acesse o caminho a seguir para visualizar: http://${HOST_APP}:${PORTA_APP}
    Ambiente de execução: ${process.env.AMBIENTE_PROCESSO}
    `);

    console.log("\nPara alterar o ambiente, comente ou descomente as linhas 1 ou 2 no arquivo 'app.js'.");
});
