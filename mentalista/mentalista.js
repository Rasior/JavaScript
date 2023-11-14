var numeroSecreto = parseInt(Math.random() * 1000) + 1;
var count = 1;
var tentativasRestantes = 10;

while (tentativasRestantes > 0){
    var chute = prompt("Digite um número de 0 a 1000, minha amada:");
    if (chute == numeroSecreto) {
        alert(`Você acertou! com ${count} tentativas, e o número secreto era ${numeroSecreto} VOCÊ É INCRÍVEL`);
    } else if (chute > numeroSecreto) {
        alert(`Você errou! O número secreto é menor que ${chute}, você já deu ${count} chutes e ainda tem ${tentativasRestantes-1} tentativas, você consegue minha amada!`);
        
    } else if (chute < numeroSecreto) {
       alert(`Foi quase! O número secreto é maior que ${chute}, você já deu ${count} chutes e ainda tem ${tentativasRestantes-1} tentativas, você consegue minha amada!`);
    }

    count = count + 1;
    tentativasRestantes --;
}

if (tentativasRestantes == 0){
    alert(`Perdeu Mih :( o número secreto era ${numeroSecreto}`);
}
