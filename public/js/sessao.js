// Sessão
function validarSessao() {
    var email = sessionStorage.EMAIL_USUARIO;

    if (email) {
        console.log("Sessão validada para o usuário:", email);
    } else {
        console.log("Nenhuma sessão encontrada. Redirecionando para login.");
        window.location = "../login.html";
    }
}

function limparSessao() {
    sessionStorage.clear();
    console.log("Sessão limpa. Redirecionando para login.");
    window.location = "../login.html";
}

// Carregamento (loading)
function aguardar() {
    var divAguardar = document.getElementById("div_aguardar");
    if (divAguardar) {
        divAguardar.style.display = "flex";
    }
}

function finalizarAguardar(texto) {
    var divAguardar = document.getElementById("div_aguardar");
    if (divAguardar) {
        divAguardar.style.display = "none";
    }

    var divErrosLogin = document.getElementById("div_erros_login");
    if (texto && divErrosLogin) {
        divErrosLogin.style.display = "flex";
        divErrosLogin.innerHTML = texto;
    }
}
