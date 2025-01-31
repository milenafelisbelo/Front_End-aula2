function classificarTurma() {
    let idades = document.getElementById("idades").value;
    let resultado = document.getElementById("resultado");

    if (!idades) {
        resultado.textContent = "Digite pelo menos uma idade.";
        return;
    }

    let listaIdades = idades.split(",").map(i => parseInt(i.trim())).filter(i => !isNaN(i) && i >= 0);

    if (listaIdades.length === 0) {
        resultado.textContent = "Nenhuma idade válida inserida.";
        return;
    }

    let soma = listaIdades.reduce((acc, idade) => acc + idade, 0);
    let media = soma / listaIdades.length;
    let classificacao = media <= 25 ? "Jovem" : media <= 60 ? "Adulta" : "Idosa";

    resultado.textContent = `Média: ${media.toFixed(2)} - Turma ${classificacao}`;
}