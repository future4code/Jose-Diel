// Exercícios de interpretação de código

// exer 01
// let valor = 0
// for(let i = 0; i < 5; i++) {
//   valor += i
// }
// console.log(valor) // o laço vai incrementar o valor da variavel valor 
                    //enquanto i for menor que 5. Depois vai imprimir 4 na tela.

//exerc 02

// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// for  (let numero of lista) {
//   if (numero > 18) {
// 		console.log(numero)
// 	}
// }                           // resultado 19 , 21, 23, 25, 27, 30 // Sim, seria possivel

// exercicio 03

// const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
// let quantidadeAtual = 0
// while(quantidadeAtual < quantidadeTotal){
//   let linha = ""
//   for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
//     linha += "*"
//   }
//   console.log(linha)
//   quantidadeAtual++
// }                               // *, **, ***, ****

// Exercicio de escrita de codigo

// 1. Pergunte ao usuário quantos bichinhos de estimação ele tem e guarde esse dado em uma variável. 
    
//     a) Se a quantidade for 0, imprima no console "Que pena! Você pode adotar um pet!"
    
//     b) Se a quantidade for maior que 0, solicite que o usuário digite os nomes deles, um por um, e guarde esses nomes em um array
    
//     - 💡 Dica
        
//         Coloque o seu prompt dentro de um loop. Esse loop deve ser executado a mesma quantidade de vezes que o usuário inseriu. Por exemplo: se o usuário tem 4 pets, ele deve conseguir inserir 4 nomes.
        
    
//     c) Por fim, imprima o array com os nomes dos bichinhos no console

//a)

//  let bichosQuantidade = Number(prompt("Digite a quantidade de bichos que vc tem"))
//  let arrayDePets = []
//  if (bichosQuantidade === 0){
//      console.log ("Que pena! Você pode adotar um pet!")
//  }else{
//      while (bichosQuantidade > 0){
//          nomesDoPet = prompt("Digite o nome do pet");
//          arrayDePets.push(nomesDoPet);
//          bichosQuantidade-- ;
//      }
//  console.log (arrayDePets)
//  }