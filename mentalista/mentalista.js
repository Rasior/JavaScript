var numeroSecreto = parseInt(Math.random() * 1000) + 1;
var count = 1;
var tentativasRestantes = 10;

while (tentativasRestantes > 0){
    var chute = prompt("Digite um número de 0 a 1000:");
    if (chute == numeroSecreto) {
        alert(`Você acertou! com ${count} tentativas, e o número secreto é ${numeroSecreto} `);
    } else if (chute > numeroSecreto) {
        alert(`Você errou! O número secreto é menor que ${chute} e você já deu ${count} chutes e ainda tem ${tentativasRestantes-1} tentativas`);
        
    } else if (chute < numeroSecreto) {
       alert(`Você errou! O número secreto é maior que ${chute} e você já deu ${count} chutes e ainda tem ${tentativasRestantes-1} tentativas`);
    }

    count = count + 1;
    tentativasRestantes --;
}

if (tentativasRestantes == 0){
    alert(`Você Perdeu!! o número secreto era ${numeroSecreto}`);
}
