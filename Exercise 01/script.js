/*
Bora praticar e rever tudo o que foi ensinado na aula? **💜**
Nesse desafio, você irá solicitar ao usuário que ele insira **dois números** e, a partir daí, calcular:

- [ ]  A soma dos dois números;
- [ ]  A subtração dos dois números;
- [ ]  A multiplicação dos dois números;
- [ ]  A divisão dos dois números;
- [ ]  O resto da divisão dos dois números;

Fácil até aqui, né? Bora se desafiar? 👀 🧑‍🚀

- [ ]  Verifique se a soma dos dois números é par ~~(ou ímpar)~~;
- [ ]  Verifique se os dois números inseridos são iguais ~~(ou diferentes)~~.

Lembre-se de sempre mostrar na tela o resultado de cada uma dessas operações!
O resultado final desse desafio deve ser algo em torno de:
*/


let numberOne = Number(prompt("Digite o primeiro numero:"))
let numberTwo = Number(prompt("Digite o segundo numero:"))
 

const soma = numberOne + numberTwo
const subt = numberOne - numberTwo
const div = numberOne / numberTwo
const resDiv = numberOne % numberTwo 

if (numberOne === numberTwo){
  alert("Os numeros inseridos sao iguais")
}else{
  alert("Os numeros inseridos sao diferentes")
}

if (resDiv == 0 ) {
  alert(`A soma de ${numberOne} + ${numberTwo} e par`)
}else {
  alert(`A soma de ${numberOne} + ${numberTwo} e impar`)
}

alert(`A soma dos dois numeros e ${soma}`)
alert(`A subtracao dos dois numeros e ${subt}`)
alert(`A divisao dos dois numeros e ${div}`)
alert(`O resto da divisao dos dois numeros e ${resDiv}`)
