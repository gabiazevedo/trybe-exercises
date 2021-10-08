const fs = require('fs');

function verifyNumber(num) {
  if (num < 0) return 'negativo';
  if (num === 0) return 'neutro';
  if (num > 0) return 'positivo';
  if (num !== Number(num)) return 'diferente de Number';
}

function escreveArquivo(nomeDoArquivo, conteudoDoArquivo) {
  fs.writeFileSync(nomeDoArquivo, conteudoDoArquivo);
  return 'OK';
}

module.exports = { verifyNumber, escreveArquivo };
