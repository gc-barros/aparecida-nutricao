const botaoAdicionar = document.getElementById('adicionar-paciente');

function calculaIMC () {
    const pacientes = document.querySelectorAll('.paciente');
    
    for(var i = 0; i < pacientes.length; i++) {
        var paciente = pacientes[i];
    
        let pesoValido = true;
        let alturaValida = true;
        let imc = paciente.querySelector('.info-imc');
    
        let peso = paciente.querySelector('.info-peso').textContent;
        if (peso <= 0 || peso >= 1000) {
            pesoValido = false;
            imc.textContent = 'Peso inválido!'
            paciente.classList.add('paciente-invalido');
        }
    
        let altura = paciente.querySelector('.info-altura').textContent;
        if (altura <= 0 || altura >= 3.00) {
           alturaValida = false;
           imc.textContent = 'Altura inválida!'
           paciente.classList.add('paciente-invalido');
        }
    
        if (pesoValido && alturaValida) {
            imc.textContent = (peso / altura**2).toFixed(2);
        }
    }
}

botaoAdicionar.addEventListener('click', (evento) => {
    evento.preventDefault();

    let nome = document.getElementById('nome').value;
    let peso = document.getElementById('peso').value;
    let altura = document.getElementById('altura').value;
    let gordura = document.getElementById('gordura').value;
    let imc = 0;
    
    if (nome == "" || peso == "" || altura == "" || gordura == "") {
        alert("Todos os campos devem ser preenchidos!")
        return
    }

    const tabelaPacientes = document.getElementById('tabela-pacientes');
    const novoPaciente = document.createElement('tr')
    novoPaciente.classList.add('paciente');
    
    let dadosNomes = ['nome', 'peso', 'altura', 'gordura', 'imc'];
    let dados = [nome, peso, altura, gordura, imc];
    
    for (var i in dados) {
        let linhaTabela = document.createElement('td');
        linhaTabela.classList.add(`info-${dadosNomes[i]}`);
        linhaTabela.textContent = dados[i];
        novoPaciente.appendChild(linhaTabela);
    }

    tabelaPacientes.appendChild(novoPaciente);    
    calculaIMC();

    document.getElementById('nome').value = "";
    document.getElementById('peso').value = "";
    document.getElementById('altura').value = "";
    document.getElementById('gordura').value = "";
});

calculaIMC();

