const PESO_KG = 52;
const ALTURA_CM = 155;

function calculoIMC() {

  const peso = PESO_KG;
  const altura = ALTURA_CM;
  
  const calculo = (peso / Math.pow(altura / 100, 2)).toFixed(2);

  console.log(`Seu IMC é: ${calculo}.`);
};

calculoIMC();
