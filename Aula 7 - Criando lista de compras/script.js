/* 
Capture 10 items para copor a lista de um supermercado.

Apos capturar os 10 items, imprima-os, separando por virgula.

*/

let items = []

for(let item = 0; item < 10; item++) {
  let itemName = prompt(`Digite o item ${item + 1}`)

  items[item] = itemName
}
alert(items)
