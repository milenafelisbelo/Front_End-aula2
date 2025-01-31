function mostrarDia() {
    let numero = parseInt(document.getElementById("numero").value);
    let resultado = document.getElementById("resultado");

    switch (numero) {
        case 1:
            resultado.textContent = "Domingo";
            break;
        case 2:
            resultado.textContent = "Segunda-feira";
            break;
        case 3:
            resultado.textContent = "Terça-feira";
            break;
        case 4:
            resultado.textContent = "Quarta-feira";
            break;
        case 5:
            resultado.textContent = "Quinta-feira";
            break;
        case 6:
            resultado.textContent = "Sexta-feira";
            break;
        case 7:
            resultado.textContent = "Sábado";
            break;
        default:
            resultado.textContent = "Valor Inválido!";
            break;
    }
}