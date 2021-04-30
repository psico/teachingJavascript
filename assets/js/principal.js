function validarFormulario(e) {
    e.preventDefault();

    let valorDosCampos = document.querySelectorAll(".validar");
    let formularioValido = true;

    for (let cadaCampo of valorDosCampos) {
        if (cadaCampo.value) {
            //console.log("O campo está preenchido com: " + cadaCampo.value);
        } else {
            //console.log("existe algum campo em branco");
            formularioValido = false;
        }        

        if (cadaCampo.className === "usuario validar") {

            if( cadaCampo.value.length <= 2 || cadaCampo.value.length >= 13 ) {
                console.log("o quantidade de caractes é invalida");
                console.log(cadaCampo.value.length);
                formularioValido = false;
            }

        }
    }

    if (formularioValido === true) {
        document.querySelector(".formulario").submit();
    }
}