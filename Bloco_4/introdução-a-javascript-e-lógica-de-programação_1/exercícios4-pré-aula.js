//Crie uma variável para armazenar o estado da pessoa candidata ao processo seletivo, que pode ser: 'aprovada' , 'lista' ou 'reprovada' ;
//Crie uma estrutura condicional com o switch/case que irá imprimir as mensagens do exercício anterior se o estado da pessoa candidata for 'aprovada' , 
//'lista' ou 'reprovada' . Como default , imprima a mensagem de 'não se aplica' .

let status = 'status não mencionado';

switch (status) {
  case 'aprovada':
   console.log('aprovada');
   break;

  case 'lista':
   console.log('lista');
   break;
  
  case 'reprovada':
   console.log('reprovada');
   break;
  
  default:
   console.log('não se aplica');
   break;
}

