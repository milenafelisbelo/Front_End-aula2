function calcularMedia() {
    let notas = document.getElementById("notas").value;
    let resultado = document.getElementById("resultado");

    if (!notas) {
        resultado.textContent = "Digite pelo menos uma nota.";
        return;
    }

    let listaNotas = notas.split(",").map(n => parseFloat(n.trim())).filter(n => !isNaN(n));

    if (listaNotas.length === 0) {
        resultado.textContent = "Nenhuma nota válida inserida.";
        return;
    }

    let soma = listaNotas.reduce((acc, nota) => acc + nota, 0);
    let media = soma / listaNotas.length;

    resultado.textContent = `Média: ${media.toFixed(2)}`;
}