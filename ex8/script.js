function calcularMedia() {
    let nota1 = parseFloat(document.getElementById("nota1").value);
    let nota2 = parseFloat(document.getElementById("nota2").value);
    let resultado = document.getElementById("resultado");

    if (isNaN(nota1) || isNaN(nota2)) {
        resultado.textContent = "Por favor, insira ambas as notas!";
        return;
    }

    let media = (nota1 + nota2) / 2;

    if (media == 10) {
        resultado.textContent = "Aprovado com Distinção!";
    } else if (media >= 7) {
        resultado.textContent = "Aprovado!";
    } else {
        resultado.textContent = "Reprovado!";
    }
}