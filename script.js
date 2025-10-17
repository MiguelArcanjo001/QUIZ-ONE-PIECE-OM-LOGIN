// Pegando elementos
const namelogin = document.getElementById("username");
const passlogin = document.getElementById("password");
const button = document.getElementById("button");

// Funções de validação
const loginLength = v => v.length >= 5;
const passNum = v => /[0-9]/.test(v);
const loginSymbol = v => /[!@#\$%\^&\*\(\)\-\+_=\\[\]{};:'"\\|,<.>\/\?`~]/.test(v);
const passLength = v => v.length >= 8;
const noSpace = v => !/\s/.test(v);


const userRules = [
  { check: loginLength, message: "O login deve ter pelo menos 5 caracteres 🏴‍☠️", elementId: "lenghtlogin" },
  { check: noSpace, message: "O login não pode conter espaços 🚫", elementId: "space" },
];

const passRules = [
  { check: passLength, message: "A senha deve ter pelo menos 8 caracteres 🗡️", elementId: "caracteres" },
  { check: passNum, message: "A senha deve conter pelo menos um número 💰", elementId: "numero" },
  { check: loginSymbol, message: "A senha deve conter ao menos um símbolo 💎", elementId: "simbolo" },
  { check: noSpace, message: "A senha não pode conter espaços 🚫", elementId: "spacepass" }
];


function validateRules(rules, value) {
  let allOk = true;

  rules.forEach(rule => {
    const el = document.getElementById(rule.elementId);
    if (!el) return;

    if (!rule.check(value)) {
      el.textContent = "❌ " + rule.message;
      el.classList.add("erro");
      el.classList.remove("sucesso");
      allOk = false;
    } else {
      el.textContent = "✔ " + rule.message;
      el.classList.add("sucesso");
      el.classList.remove("erro");
    }
  });

  return allOk;
}

// Clique no botão
button.addEventListener("click", e => {
  e.preventDefault();
  const loginOk = validateRules(userRules, namelogin.value.trim());
  const passOk = validateRules(passRules, passlogin.value.trim());

  if (loginOk && passOk) {
    window.location.href = "quiz.html";
  }
});

// Atualização em tempo real
namelogin.addEventListener("input", () => validateRules(userRules, namelogin.value.trim()));
passlogin.addEventListener("input", () => validateRules(passRules, passlogin.value.trim()));
