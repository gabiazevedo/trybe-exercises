//Checked
let chessPiece = 'Rainha';

switch (chessPiece.toLowerCase()) {
  case 'rainha':
  console.log('rainha -> Movimento horizontal, vertical e diagonal');
  break;

  case 'peão':
  console.log('peão -> Movimenta uma casa à frente');
  break;

  case 'rei':
  console.log('rei -> Movimento em todas as direções');
  break;

  case 'Torre':
  console.log('torre -> Movimento vertical e horizontal');
  break;

  case 'Bispo':
  console.log('bispo -> Movimento diagonal');
  break;

  case 'Cavalo':
  console.log('cavalo -> Movimento em L');
  break;

  default:
  console.log('Erro: peça inválida');
  break;
}