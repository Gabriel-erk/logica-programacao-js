alert('Boas vindas ao jogo do número secreto!'); 
// let numeroSecreto = parseInt(Math.random() * 11);
let numeroSecreto = 29;
let palpite = prompt('Escolha um número entre 1 e 30');

if (palpite == numeroSecreto) {
    console.log('Parabéns! Você acertou o número secreto: ' + numeroSecreto);
} else {
    alert('Que pena! O número secreto era ' + numeroSecreto);
}