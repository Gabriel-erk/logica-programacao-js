let porcentagemDesconto = 0;
let quantidadeMilhas = parseInt(prompt("Digite a quantidade de milhas acumuladas: "));

if(quantidadeMilhas > 5000 && quantidadeMilhas < 30000){
    porcentagemDesconto += 10;
} else {
    porcentagemDesconto += 20;
}
