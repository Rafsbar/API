var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

// Rota para cadastro de usuário
router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
});

// Rota para autenticação de usuário
router.post("/autenticar", function (req, res) {
    usuarioController.autenticar(req, res);
});

module.exports = router;
