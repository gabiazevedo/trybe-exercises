const selected = document.getElementById('state');
const states = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal', 'Espiríto Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins'];

function createOption() {

  for (let index = 0; index < states.length; index += 1) {
    const option = document.createElement('option');
    option.style.fontFamily = 'Montserrat, sans-serif';
    selected.appendChild(option);
    option.innerText= states[index];
  }
}
createOption();

// Validações. Fiz com a ajuda da Ana Giorgiani

function validateData() {
  let submit = document.querySelector('#submit');

  submit.addEventListener('click', (event) => {
    
    if (document.querySelector('#name').value == '' || 
    document.querySelector('#name').value.length < 8) {
    alert('Preencha campo NOME corretamente');
    document.querySelector('#name').focus();
    event.preventDefault(event);
    return false;
    }

    if (document.querySelector('#e-mail').value == '' || 
    document.querySelector('#e-mail').value.indexOf('@') == -1 ||
    document.querySelector('#e-mail').value.indexOf('.') == -1) {
    alert('Preencha o campo E-MAIL corretamente');
    document.querySelector('#e-mail').focus();
    event.preventDefault(event);
    return false;
    }

    if (document.querySelector('#cpf-number').value.length < 11) {
    alert('Preencha o campo CPF corretamente');
    document.querySelector('#cpf-number').focus();
    event.preventDefault(event);
    return false;
    }

  });
  
}
validateData();
