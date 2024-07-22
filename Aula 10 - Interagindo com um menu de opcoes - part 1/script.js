/*
Faca um programa que tenha um menu e apresente a seguinte mensagem:

Ola usuario! Digite a opcao desejada

  1. Cadastrar um item na lista
  2. Mostrar itens cadastrados
  3. Sair do programa.

___

O programa devera capturar o numero digitado pelo usuario e mostrar o seguintes cenarios:

Caso o usuario digite 1, ele podera cadastrar um item em uma lista
Caso o usuario digite 2, ele podera ver os itens cadastrados
  Se nao houver nenhum item cadastrado, mostrar a mensagem:
    "Nao existem itens cadastrados"
Caso o usuario digite 3, a aplicacao devera ser encerrada

*/


let list = []
let option;

while (option != 3){

  option = Number(prompt(`
    Ola usuario! Digite a opcao desejada
  
    1. Cadastrar um item na lista
    2. Mostrar itens cadastrados
    3. Sair do programa.
    `))
  switch(option){
    case 1:
      let item = prompt("Digite o item a ser inserido na lista:")
      list.push(item)
      break;
    case 2:
      if (list.length == 0){
        alert("Nao existe itens cadastrados")
      } else{
        alert(list)  
      } 
      break;
    case 3:
      alert("Finish section")
      break;
      
      default:
      alert("Opcao invalida. Tente novamente")
  }
}