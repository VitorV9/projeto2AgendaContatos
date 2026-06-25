const form = document.getElementById('form-agenda');
const inputNome = document.getElementById('nome-contato');
const inputTelefone = document.getElementById('telefone-contato');
const nomesCadastrados = []
contaContatos();

let linhas = ''; 

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaContato();
    contaContatos();
});

function adicionaContato(){
    if (nomesCadastrados.includes(inputNome.value)) {
        alert(`O contato ${inputNome.value} já foi inserido!`);
    } else {
        nomesCadastrados.push(inputNome.value);

        let linha = '<tr>';
        linha += `<td>${inputNome.value}</td>`;
        linha += `<td>${inputTelefone.value}</td>`;
        linha += '</tr>';

        linhas += linha;
        const corpoTabela = document.querySelector('tbody');
        corpoTabela.innerHTML = linhas;
    }

    inputNome.value = '';
    inputTelefone.value = '';

    corpoTabela.innerHTML = linhas;
}

function contaContatos(){
    const contadorTotal = document.querySelector('tfoot td:last-child');
    const totalContatos = document.querySelectorAll('tbody tr').length;
    
    contadorTotal.innerText = totalContatos;
}