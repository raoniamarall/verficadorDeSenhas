// Captura os elementos do DOM
const passwordInput = document.getElementById("passwordInput");
const checkButton = document.getElementById("checkButton");
const resultMessage = document.getElementById("resultMessage");

// Função para verificar a segurança da senha
function checkPasswordSecurity() {
  const password = passwordInput.value;
  const securityLevel = calculateSecurityLevel(password);

  // Define a mensagem de acordo com o nível de segurança
  let message = "";
  if (securityLevel === 0) {
    message = "Senha fraca. Tente uma combinação mais forte.";
  } else if (securityLevel === 1) {
    message = "Senha razoável. pode ser melhorada.";
  } else {
    message = "Senha forte! Você está seguro.";
  }

  resultMessage.textContent = message;
}

// Função para calcular o nível de segurança da senha
function calculateSecurityLevel(password) {
  // Verifica o tamanho da senha
  if (password.length < 8) {
    return 0; // Senha fraca
  }

  // Verifica a presença de letras maiúsculas, minúsculas, números e caracteres especiais
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumbers = /[0-9]/.test(password);
  const hasSpecialChars = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(password);

  // Calcula a pontuação com base nos critérios
  let score = 0;
  if (hasUpperCase) score++;
  if (hasLowerCase) score++;
  if (hasNumbers) score++;
  if (hasSpecialChars) score++;

  // Define o nível de segurança com base na pontuação
  if (score < 3) {
    return 1; // Senha razoável
  } else {
    return 2; // Senha forte
  }
}

// Associa a função de verificação ao botão
checkButton.addEventListener("click", checkPasswordSecurity);
