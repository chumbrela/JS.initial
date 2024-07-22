/*
Capturar 2 numeros e fazer as operacoes matematicas de soma, subtracao, mutiplicacao, divisao e resto da divisao.
E para cada operacao, mostrar um alerta com o resultado.
*/ 

let numberOne = prompt('Digite o primeiro numero:')
let numberTwo = prompt('Digite o segundo numero:')

let soma = Number(numberOne) + Number(numberTwo)
let subtracao = Number(numberOne) - Number(numberTwo)
let mutiplicacao = Number(numberOne) * Number(numberTwo)
let divisao = Number(numberOne) / Number(numberTwo)
let resDiv = Number(numberOne) % Number(numberTwo)

alert(`A soma dos numeros e: ${soma}`)
alert(`A subtracao dos numeros e: ${subtracao}`)
alert(`A multiplicacao dos numeros e: ${mutiplicacao}`)
alert(`A divisao dos numeros e: ${divisao}`)
alert(`O resto da divisao dos numeros e: ${resDiv}`)