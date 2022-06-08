var jogador1 = 1;
var jogador2 = 0;

var placar;

if (jogador1 > 0 && jogador2 == 0){
    console.log('jogador1 marcou ponto');
    placar = jogador1 > jogador2;

}else if (jogador2 > 0 && jogador1 == 0){
    console.log('jogador2 marcou ponto');
    placar = jogador2 > jogador1;
}else{
    console.log('Ninguem marcou ponto');
}

switch (placar){
    case placar = jogador1 > jogador2:
        console.log('jogador1 venceu');
        break;
    case placar = jogador2 > jogador1:
        console.log('jogador2 venceu');
        break;
    default:
        console.log('Ninguem ganhou!');
}