//Crie uma função de primeira classe que tenha o retorno console.log('Acordando!!');

const acordar = () => {  
return console.log('Acordando');  
}

//Crie outra função de primeira classe que tenha o retorno console.log('Bora tomar café!!');

const cafeDaManha = () => {
return console.log('Bora tomar café');
}

//Crie mais uma função de primeira classe que tenha o retorno console.log('Partiu dormir!!');

const dormir = () => {
return console.log('Partiu dormir!!');
}

//Desenvolva uma HOF chamada doingThings e configure esta função para que retorne a execução das funções de 
//primeira classe que você criou nos exemplos anteriores. Exemplo:

// Ao chamar a função doingThings:
const doingThings = (funcao1, funcao2, funcao3) => {
funcao1();
funcao2();
funcao3();
}
doingThings(cafeDaManha, acordar, dormir);
