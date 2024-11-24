const usuarioModel = require("../models/usuarioModel");

module.exports = {
    // Função para autenticar o usuário (login)
    autenticar: async (req, res) => {
        const { email, senha } = req.body;

        if (!email || !senha) {
            return res.status(400).send({ message: "Email e senha são obrigatórios!" });
        }

        try {
            const usuario = await usuarioModel.buscarPorEmail(email);

            if (!usuario) {
                return res.status(404).send({ message: "Usuário não encontrado!" });
            }

            // Compara a senha diretamente (sem hash)
            if (senha !== usuario.senha) {
                return res.status(401).send({ message: "Senha incorreta!" });
            }

            res.status(200).send({ message: "Login realizado com sucesso!", usuario });
        } catch (error) {
            console.error("Erro ao autenticar usuário:", error);
            res.status(500).send({ message: "Erro interno no servidor." });
        }
    },

    // Função para cadastrar o usuário
    cadastrar: async (req, res) => {
        const { email, senha } = req.body;

        if (!email || !senha) {
            return res.status(400).send({ message: "Email e senha são obrigatórios!" });
        }

        try {
            const usuarioExistente = await usuarioModel.buscarPorEmail(email);

            if (usuarioExistente) {
                return res.status(400).send({ message: "E-mail já cadastrado!" });
            }

            // Salva a senha diretamente no banco
            await usuarioModel.cadastrar(email, senha);

            res.status(201).send({ message: "Usuário cadastrado com sucesso!" });
        } catch (error) {
            console.error("Erro ao cadastrar usuário:", error);
            res.status(500).send({ message: "Erro interno no servidor." });
        }
    },
};
