/*
Dada uma lista de pacientes, descubra o IMC de cada paciente e imprima

"Paciente X possui o IMC de: Y"

Onde X e o nome do paciente e Y e o IMC desse paciente

Crie uma funcao para fazer o calculo de IMC


*/
const patients = [
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

function calc(patient){
 return`
    Paciente ${patient.name} possui o IMC de:
    ${(patient.weight/ ((patient.height / 100)** 2)).toFixed(2)}
    `
}

for (let patient of patients){
 let IMCmessage = calc(patient)
 alert(IMCmessage)
}
