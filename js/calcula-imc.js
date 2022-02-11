
const pacientes = document.querySelectorAll('.paciente');

for(var i = 0; i < pacientes.length; i++) {
    var paciente = pacientes[i];

    let peso = paciente.querySelector('.info-peso').textContent;
    let pesoValido = validaPeso(peso);

    let altura = paciente.querySelector('.info-altura').textContent;
    let alturaValida = validaAltura(altura);

    let imc = paciente.querySelector('.info-imc');

    if (!pesoValido) {
        pesoValido = false;
        imc.textContent = 'Peso inválido!'
        paciente.classList.add('paciente-invalido');
    }

    if (!alturaValida) {
        alturaValida = false;
        imc.textContent = 'Altura inválida!'
        paciente.classList.add('paciente-invalido');
    }

    if (pesoValido && alturaValida) {
        imcCalculado = calculaImc(peso, altura);
        imc.textContent = imcCalculado;
    }
}

function validaPeso(peso) {
    if (peso >= 0 && peso < 1000) {
        return true;
    } else {
        return false;
    }
}

function validaAltura(altura) {
    if (altura >= 0 && altura < 3) {
        return true;
    } else {
        return false;
    }
}

function calculaImc(peso, altura) {
    var imc = 0;
    imc = peso / (altura * altura);
    return imc.toFixed(2);
}





