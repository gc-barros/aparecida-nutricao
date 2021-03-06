var botaoAdicionarPaciente = document.querySelector('#buscar-paciente');

botaoAdicionarPaciente.addEventListener('click', () => {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api-pacientes.herokuapp.com/pacientes');

    xhr.addEventListener('load', () => {
        var erroAjax = document.querySelector('#erro-ajax');

        if (xhr.status == 200) {
            erroAjax.classList.add('invisivel');
            var resposta = xhr.responseText;
            var pacientes = JSON.parse(resposta);
    
            pacientes.forEach((paciente) => {
                adicionaPacienteNaTabela(paciente);
            });

        } else {
            console.error(xhr.status);
            console.error(xhr.responseText);
            erroAjax.classList.remove('invisivel');
        }

    });

    xhr.send();
})