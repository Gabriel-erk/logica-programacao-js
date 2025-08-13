alert("Boas vindas ao jogo do número secreto!");
// let numeroSecreto = parseInt(Math.random() * 11);
let numeroSecreto = 29;
console.log(numeroSecreto);
let palpite = prompt("Escolha um número entre 1 e 30");

if (palpite == numeroSecreto) {
  alert(`Parabéns! Você acertou o número secreto: ${numeroSecreto}`);
} else {
  alert("Você errou :( Tente novamente!");
  while (palpite != numeroSecreto) {
    palpite = prompt("Escolha um número entre 1 e 30");
    if (palpite == numeroSecreto) {
      alert(`Parabéns! Você acertou o número secreto: ${numeroSecreto}`);
      break;
    } else if (palpite < numeroSecreto) {
      alert(`O número secreto é maior que ${palpite}`);
    } else {
      alert(`O número secreto é menor que ${palpite}`);
    }
  }
}
