alert("Boas vindas ao jogo do número secreto!");
// let numeroSecreto = parseInt(Math.random() * 11);
let numeroSecreto = 29;
let palpite;
console.log(numeroSecreto);
let tentativas = 0;

while (palpite != numeroSecreto) {
  palpite = prompt("Escolha um número entre 1 e 30");
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

if (tentativas > 1) {
  alert(
    `Parabéns! Você acertou o número secreto: ${numeroSecreto} com ${tentativas} tentativas`
  );
} else {
  alert(
    `Parabéns! Você acertou o número secreto: ${numeroSecreto} com ${tentativas} tentativa`
  );
}
