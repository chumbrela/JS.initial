/*
Bora praticar e rever tudo o que foi ensinado na aula? **💜**

Nesse desafio você irá criar uma lista de **estudantes** e, cada estudante dentro dessa
 lista, deverá conter os seguintes dados:

- nome;
- nota da primeira prova;
- nota da segunda prova.

Depois de criada a lista:

- [ ]  Crie uma **função** que irá calcular a média das notas de cada aluno;
- [ ]  Supondo que a média, para esse concurso é **7**, verifique **se** cada
 aluno obteve sucesso ou não em entrar no concurso e mostre uma mensagem na tela.
*/

const students =[

  {
    name:"Isabela",
    notefirstTest: 8,
    noteSecondTest: 5,
  },
  {
    name:"Artur",
    notefirstTest: 3,
    noteSecondTest: 2,
  },
  {
    name:"Gabriel",
    notefirstTest: 10,
    noteSecondTest: 10,
  },
  {
    name:"Vinicius",
    notefirstTest: 7.5,
    noteSecondTest: 4,
  },
  {
    name:"Pedro",
    notefirstTest: 8,
    noteSecondTest: 6,
  },
  {
    name:"Clara",
    notefirstTest: 10,
    noteSecondTest: 9.5,
  },
  {
    name:"Giovanna",
    notefirstTest: 6,
    noteSecondTest: 6.5,
  },
]

function average(students){
  let media = (students.notefirstTest + students.noteSecondTest) / 2
  if (media >= 7) {
    return `${students.name} tirou a media ${media}. Parabens voce passou de ano`
  }else{
    return `${students.name} tirou a media ${media} Estude para recuperacao, voce e capaz`
  }
}

for(let student of students){
  let averageMensage = average(student)
  alert(averageMensage)
}