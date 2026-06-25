const form = document.getElementById('form-agenda');
const inputNome = document.getElementById('nome-contato');
const inputTelefone = document.getElementById('telefone-contato');
const nomesCadastrados = []
const corpoTabela = document.querySelector('tbody');
contaContatos();

let linhas = ''; 

corpoTabela.addEventListener('click', function(e) {
    if (e.target.classList.contains('btn-excluir')) {
        const linha = e.target.closest('tr');
        const nomeParaRemover = linha.cells[0].innerText;
        
        const index = nomesCadastrados.indexOf(nomeParaRemover);
        if (index > -1) {
            nomesCadastrados.splice(index, 1);
        }

        linha.remove();
        linhas = corpoTabela.innerHTML;
        
        contaContatos();
    }
});

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
        linha += `<td><button type="button" class="btn-excluir">Excluir</button></td>`;
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