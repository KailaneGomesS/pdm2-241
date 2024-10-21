function validarFormulario() {
    // Validar nome com até 50 caracteres
    const nome = document.getElementById("nome").value;
    if (nome.length > 50) {
        alert("O nome não pode ter mais que 50 caracteres.");
        return false;
    }

    // Validar matrícula (somente números)
    const matricula = document.getElementById("matricula").value;
    if (isNaN(matricula)) {
        alert("A matrícula deve conter apenas números.");
        return false;
    }

    // Se todos os campos forem válidos
    alert("Formulário enviado com sucesso!");
    return true;
}
