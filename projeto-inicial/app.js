alert("Boas vindas ao jogo do número secreto!");
let numeroMaximo = 30;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1); // multiplica por 10 pois o número gerado pelo math.random é maior que zero e menor que um, ou seja, apenas entrega números decimais como: 0.5643, 0.3425, 0.2525 etc e com a multiplicação pegamos apenas a parte inteira desse valor, movendo uma casa da vírgula, então, se me gerar: 0.4564, devido a multiplicação por 10, terei 4.564 onde o parseInt irá remover essa parte decimal para mim depois obs: somo com um pois ai teria apeans um intervalo entre 1 e 9, já que na documentação dessa função diz que o último número (no caso o 10) não é incluido, então, após a soma seria como multiplicar por 11, porém o intervalo vai corretamente de 1 a 10 agora (caso queira com 100, 200, só alterar o número que está multiplicando, ex abaixo: entre 1 e 100: let numeroSecreto = parseInt(Math.random() * 100 + 1))
let palpite;
console.log(numeroSecreto);
let tentativas = 0;

while (palpite != numeroSecreto) {
  palpite = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);
  if (palpite == numeroSecreto) {
    break;
  } else {
    if (palpite < numeroSecreto) {
      alert(`O número secreto é maior que ${palpite}`);
    } else {
      alert(`O número secreto é menor que ${palpite}`);
    }
    // fora do if/else acima pois se chegou até aqui é porque ele tentou e não acertou, já que, se tivesse, teria caido no break e o código teria se encerrado sem chegar até aqui
    tentativas++;
  }
}

let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
alert(
  `Parabéns! Você acertou o número secreto: ${numeroSecreto} com ${tentativas} ${palavraTentativa}`
);
