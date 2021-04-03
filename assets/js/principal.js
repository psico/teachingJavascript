function validarFormulario(e) {
    e.preventDefault();
 
    let valorDoCampoNome = document.querySelector(".nome").value;
    let formularioValido = true;

    if (valorDoCampoNome) {
        console.log("o valor existe");
    } else {
        console.log("não existe nada no campo");
        formularioValido = false;
    }

    if(formularioValido === true) {
        document.querySelector(".formulario").submit();
    }
}