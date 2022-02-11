const botaoAdicionar = document.getElementById('adicionar-paciente');

botaoAdicionar.addEventListener('click', function(event) {
    event.preventDefault();

    var form = document.getElementById('form-adiciona');
    
    var paciente = obtemPacienteDoFormulario(form);



    var erros = validaPaciente(paciente)

    if(erros.length > 0) {
        exibeMensagensDeErro(erros);
        return;
    }

    adicionaPacienteNaTabela(paciente);

    form.reset();
    var ul = document.getElementById('mensagem-erro');
    ul.innerHTML = "";
})

function adicionaPacienteNaTabela(paciente) {
    var pacienteTr = montaTr(paciente);
    var tabela = document.querySelector('#tabela-pacientes');
    tabela.appendChild(pacienteTr);
}

function exibeMensagensDeErro(erros) {
    var ul = document.getElementById('mensagem-erro');
    ul.innerHTML = "";
    erros.forEach((erro) => {
        var li = document.createElement('li');
        li.textContent = erro;
        ul.appendChild(li);
    })
}

function obtemPacienteDoFormulario(form) {

    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }

    return paciente;
}

function montaTr(paciente) {
    var pacienteTr = document.createElement('tr');
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

function montaTd(dado, classe) {
    var td = document.createElement('td');
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}

function validaPaciente(paciente) {

    var erros = [];

    if (paciente.nome.length == 0) {
        erros.push("O nome não pode ficar em branco!")
    }

    if(!validaPeso(paciente.peso) || paciente.peso.length == 0){
        erros.push("O peso é inválido!")
    }

    if(!validaAltura(paciente.altura) || paciente.altura.length == 0){
        erros.push(" A altura é inválida!")
    } 

    if (paciente.gordura.length == 0) {
        erros.push("Digite uma gordura válida!")
    }

    return erros;
}