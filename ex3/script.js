function verificarPrimo() {
    const numero = document.getElementById("numero").value;
    const mensagem = document.getElementById("mensagem");

    if (numero < 2) {
        mensagem.textContent = "Número inválido! Digite um valor maior ou igual a 2.";
        return;
    }

    let divisores = [];
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            divisores.push(i);
            if (i !== numero / i) {
                divisores.push(numero / i);
            }
        }
    }

    if (divisores.length === 0) {
        mensagem.textContent = `${numero} é primo!`;
    } else {
        mensagem.textContent = `${numero} não é primo, divisível por: ${divisores.sort((a, b) => a - b).join(", ")}.`;
    }
}