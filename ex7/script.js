let total, votos, contagem;

function iniciar() {
    total = parseInt(document.getElementById("eleitores").value);
    if (isNaN(total) || total <= 0) return alert("Digite um número válido.");
    
    votos = {1: 0, 2: 0, 3: 0};
    contagem = 0;

    document.getElementById("votacao").style.display = "block";
    document.getElementById("resultado").textContent = "";
}

function votar(candidato) {
    if (contagem < total) {
        votos[candidato]++;
        contagem++;
        if (contagem === total) finalizar();
    }
}

function finalizar() {
    document.getElementById("resultado").textContent = 
        `Candidato 1: ${votos[1]} votos\nCandidato 2: ${votos[2]} votos\nCandidato 3: ${votos[3]} votos`;
    document.getElementById("votacao").style.display = "none";
}