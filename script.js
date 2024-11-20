document.getElementById('cep').addEventListener('blur', function() {
    var cep = this.value.replace(/\D/g, '');

    if (cep.length === 8) {
        buscarCep(cep);
    }
});

function buscarCep(cep) {
    var url = `https://viacep.com.br/ws/${cep}/json/`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.erro) {
                alert('CEP não encontrado!');
                return;
            }

            document.getElementById('endereco').value = data.logradouro || '';
            document.getElementById('bairro').value = data.bairro || '';
            document.getElementById('cidade').value = data.localidade || '';
            document.getElementById('estado').value = data.uf || '';

            document.getElementById('endereco').disabled = false;
            document.getElementById('bairro').disabled = false;
            document.getElementById('cidade').disabled = false;
            document.getElementById('estado').disabled = false;
        })
        .catch(error => {
            console.error('Erro ao buscar o CEP:', error);
            alert('Erro ao buscar o CEP!');
        });
}

document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();

    let camposFaltando = [];
    
    if (document.getElementById('nome').value === '') {
        camposFaltando.push('Nome');
    }

    if (document.getElementById('email').value === '') {
        camposFaltando.push('Email');
    }

    if (document.getElementById('telefone').value === '') {
        camposFaltando.push('Telefone');
    }

    if (document.getElementById('cpf').value === '') {
        camposFaltando.push('CPF');
    }

    if (document.getElementById('data-nascimento').value === '') {
        camposFaltando.push('Data de Nascimento');
    }

    if (document.getElementById('quantia-visitas').value === '') {
        camposFaltando.push('Quantidade de Visitas');
    }

    if (document.getElementById('cep').value === '') {
        camposFaltando.push('CEP');
    }

    if (document.getElementById('endereco').value === '') {
        camposFaltando.push('Endereço');
    }

    if (document.getElementById('numero').value === '') {
        camposFaltando.push('Número');
    }

    if (document.getElementById('bairro').value === '') {
        camposFaltando.push('Bairro');
    }

    if (document.getElementById('cidade').value === '') {
        camposFaltando.push('Cidade');
    }

    if (document.getElementById('estado').value === '') {
        camposFaltando.push('Estado');
    }

    if (!document.querySelector('input[name="formaPagamento"]:checked')) {
        camposFaltando.push('Forma de Pagamento');
    }

    if (!document.getElementById('termos').checked) {
        camposFaltando.push('Termos e Condições');
    }

    if (camposFaltando.length > 0) {
        alert('Por favor, preencha todos os campos. Faltam: ' + camposFaltando.join(', '));
    } else {
        alert('Parabéns! Sua solicitação de compra para o Consulado de Vistos foi realizada com sucesso! Aguarde o contato de um de nossos consultores.');
        window.location.href = '../index.html';
    }
});

