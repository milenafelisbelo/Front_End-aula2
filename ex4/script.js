function mostrarPrimos() {
    let n = document.getElementById("numero").value;
    let resultado = document.getElementById("resultado");
    let divisoes = document.getElementById("divisoes");

    if (n < 2) {
        resultado.textContent = "Digite um número maior ou igual a 2.";
        divisoes.textContent = "";
        return;
    }

    let primos = [];
    let totalDivisoes = 0;

    for (let i = 2; i <= n; i++) {
        let primo = true;
        for (let j = 2; j <= Math.sqrt(i); j++) {
            totalDivisoes++;
            if (i % j === 0) {
                primo = false;
                break;
            }
        }
        if (primo) primos.push(i);
    }

    resultado.textContent = `Primos entre 1 e ${n}: ${primos.join(", ")}`;
    divisoes.textContent = `Total de divisões: ${totalDivisoes}`;
}