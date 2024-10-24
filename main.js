function validarFormulario(event) {
    event.preventDefault();
    
    const campoA = parseFloat(document.getElementById("campoA").value);
    const campoB = parseFloat(document.getElementById("campoB").value);
    const mensagem = document.getElementById("mensagem");

    if (campoB > campoA) {
        mensagem.textContent = "Formulário válido! B é maior que A.";
        mensagem.style.color = "green";
    } else {
        mensagem.textContent = "Formulário inválido! B deve ser maior que A.";
        mensagem.style.color = "red";
    }
}


