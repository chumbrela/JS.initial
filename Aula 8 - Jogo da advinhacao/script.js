/* 
** Jogo da Advinhacao **

Apresente a mensagem ao usuario:
"Advinhe o numero que estou pensando? Esta entre 0 e 10"

Crie uma logica para gerar um numero aleatorio e verificar se o numero 
digitado e o mesmo que o aleatorio gerado pelo sistema.

Enquanto o usuario nao adivinhar o numero, mostrar a mensagem:
"Erro, tente novamente:"

Caso o usuario acerte o numero, apresentar a mensagem:
"Parabens! Voce advinhou o numero em x tentativas"

Substitua o "x" da mensagem, pelo numero de tentativas

*/

alert("Jogo da Advinhacao")

let result = prompt("Advinhe o numero que estou pensando? Esta entre 0 e 10")

const numberRamdon = Math.round(Math.random() * 10)

let xTentativas = 1;

while (Number(result != numberRamdon)){
  result = prompt("Erro, tente novamente:")
  xTentativas ++
}
if(xTentativas == 1){
  alert(`Parabens! Voce advinhou o numero em ${xTentativas} tentativa`)
} else {
  alert(`Parabens! Voce advinhou o numero em ${xTentativas} tentativas`)
}