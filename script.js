// Pegando elementos do HTML pelo ID (sem #, porque getElementById não usa #)
const namelogin = document.getElementById("username") // campo de texto do usuário
const passlogin = document.getElementById("password") // campo de senha do usuário
const errormsg = document.getElementById("errorlogin") // <p> que mostra erro do username
const errormsgpass = document.getElementById("errorpass") // <p> que mostra erro da senha

//regex
const loginlenght = v => v.length >= 3
const passum = v => /[0-9]/.test(v)
const loginSimbol = v => /[!@#\$%\^&\*\(\)\-\+_=\\[\]{};:'"\\|,<.>\/\?`~]/.test(v);

// Pegando o botão de login
const button = document.getElementById("button");

// Evento de clique no botão
button.addEventListener("click", function(event) {
    event.preventDefault();

    let ok = true;

    // Validação do username
    if (namelogin.value.trim() === "") {
        errormsg.textContent = "Defina um nome de usuário";
        errormsg.classList.add("show");
        ok = false;
    } else {
        errormsg.textContent = "";
        errormsg.classList.remove("show");
    
     if (!loginlenght(namelogin.value.trim())) {
        errormsg.textContent = "o usuario deve ter pelo menos 3 caracteres";
        errormsg.classList.add("show");
        ok = false;
    } else {
        errormsg.textContent = "";
        errormsg.classList.remove("show");
    }

    // Validação da senha
    if ((passlogin.value.trim() === "")) {
        errormsgpass.textContent = "defina uma senha para entrar";
        errormsgpass.classList.add("show");
        ok = false;
    } else {
        errormsgpass.textContent = "";
        errormsgpass.classList.remove("show");
    }

    // Se tudo estiver correto
    if (ok) {
        window.location.href = "quiz.html";
    }
}});


// Eventos de digitação (input) para limpar erros em tempo real
namelogin.addEventListener("input", () => {
    if (namelogin.value.trim() !== "") errormsg.textContent = ""; // limpa mensagem do username
    errormsg.classList.remove("show")
});

passlogin.addEventListener("input", () => {
    if (passlogin.value.trim() !== "") errormsgpass.textContent = ""; // limpa mensagem da senha
    errormsgpass.classList.remove("show")
});





