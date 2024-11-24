const database = require("../database/config");

// Função para buscar um usuário pelo e-mail (login)
function autenticar(email) {
    const instrucaoSql = `
        SELECT id_usuario, email, senha FROM usuarios WHERE email = '${email}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// Função para cadastrar um novo usuário
function cadastrar(email, senha) {
    const instrucaoSql = `
        INSERT INTO usuarios (email, senha) VALUES ('${email}', '${senha}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    autenticar,
    cadastrar,
};
