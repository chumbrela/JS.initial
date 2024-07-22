/*
Crie uma lista de pacientes

Cada paciente devera conter
  nome
  idade
  peso
  altura

Escreva uma lista contendo o nome dos pacientes
 suas idades alturas e pesos
*/

let patients = [
  {
    name:"Luiz",
    age: 20,
    weight: 100,
    height: 190
  },
  {
    name:"Alexandra",
    age: 28,
    weight: 70,
    height: 170
  },
  {
    name:"Carlos",
    age: 42,
    weight: 90,
    height: 180
  },
]

let patientsNames = []
let patientsAge = []
let patientsWeight = []
let patientsHeight = []

for(let patient of patients){
  patientsNames.push(patient.name)
  patientsAge.push(patient.age)
  patientsWeight.push(patient.weight)
  patientsHeight.push(patient.height)
}

alert(
`Paciente 1 chama ${patientsNames[0]} com idade de ${patientsAge[0]} anos, pesando ${patientsWeight[0]} kg e medindo ${patientsHeight[0]} cm.
Paciente 2 chama ${patientsNames[1]} com idade de ${patientsAge[1]} anos, pesando ${patientsWeight[1]} kg e medindo ${patientsHeight[1]} cm.
Paciente 3 chama ${patientsNames[2]} com idade de ${patientsAge[2]} anos, pesando ${patientsWeight[2]} kg e medindo ${patientsHeight[2]} cm.`)
