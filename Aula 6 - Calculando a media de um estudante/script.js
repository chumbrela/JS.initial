/*
Solicitar o nome do aluno e as 3 notas do bimestre e calcular a media daquele aluno

Se o aluno passou no bimestre, dar os parabens.

Se o aluno nao passou no bimestre, motivar o aluno e dar seu melhor na prova de recuperacao

Em ambos os casos, mostre uma mensagem com o nome do aluno e a nota
*/

let nameUser = prompt('Qual o seu nome?')
let noteOne = prompt('Qual a nota da primeira prova:') 
let noteTwo = prompt('Qual a nota da Segunda prova:')
let noteThree = prompt('Qual a nota da terceira prova:')

let resMedia = (Number(noteOne) + Number(noteTwo) + Number(noteThree)) / 3

if(resMedia > 6) {

  alert(`${nameUser} sua media foi ${resMedia.toFixed(1)}, estude para recuperacao voce e capaz`)
} else{

  alert(`Parabens ${nameUser}, voce passou de ano com a media ${resMedia}`)
}

