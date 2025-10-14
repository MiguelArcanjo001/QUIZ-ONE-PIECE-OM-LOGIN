// Pegando elementos do HTML pelo ID (sem #, porque getElementById não usa #)
const namelogin = document.getElementById("username") // campo de texto do usuário
const passlogin = document.getElementById("password") // campo de senha do usuário
const errormsg = document.getElementById("errorlogin") // <p> que mostra erro do username
const errormsgpass = document.getElementById("errorpass") // <p> que mostra erro da senha

// Pegando o botão de login
const button = document.getElementById("button");

// Evento de clique no botão
button.addEventListener("click", function (event) {
    event.preventDefault(); // impede envio automático do form

    let ok = true; // assume que tudo está preenchido corretamente

    // Validação do username
    if (namelogin.value.trim() === "") { // trim remove espaços nas bordas
        errormsg.textContent = "defina um nome de usuario para entrar"; // mostra erro
        errormsg.classList.add("show")
        ok = false; // marca que houve erro
    } else {
        errormsg.textContent = ""; // limpa mensagem de erro
        errormsgpass.classList.remove("show")
    }

    // Validação do password
    if (passlogin.value.trim() === "") { // trim evita apenas espaços
        errormsgpass.textContent = "escolhan uma senha para entrar"; // mostra erro
        errormsgpass.classList.add("show")
        ok = false; // marca erro
    } else {
        errormsgpass.textContent = ""; // limpa mensagem de erro
       errormsgpass.classList.remove("show")
    }

    // Se tudo estiver correto
    if (ok) {
        window.location.href = "quiz.html"; // redireciona para o quiz
    }
});

// Eventos de digitação (input) para limpar erros em tempo real
namelogin.addEventListener("input", () => {
    if (namelogin.value.trim() !== "") errormsg.textContent = ""; // limpa mensagem do username
    errormsg.classList.remove("show")
});

passlogin.addEventListener("input", () => {
    if (passlogin.value.trim() !== "") errormsgpass.textContent = ""; // limpa mensagem da senha
    errormsgpass.classList.remove("show")
});
