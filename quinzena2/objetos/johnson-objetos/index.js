//Leia o código abaixo
//EXERCICIO 01

    // const filme = {
    // 	nome: "Auto da Compadecida", 
    // 	ano: 2000, 
    // 	elenco: [
    //     "Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
    // 		"Virginia Cavendish"
    //     ], 
    // 	transmissoesHoje: [
    // 		{canal: "Telecine", horario: "21h"}, 
    // 		{canal: "Canal Brasil", horario: "19h"}, 
    // 		{canal: "Globo", horario: "14h"}
    // 		]
    // }

    // console.log(filme.elenco[0]) // MATHEUS NACHTERGAELE
    // console.log(filme.elenco[filme.elenco.length - 1])// VIRGINIA CAVENDISH
    // console.log(filme.transmissoesHoje[2])//GLOBO, HORARIO

//EXERCICIO 02
    
    // const cachorro = {
    // 	nome: "Juca", 
    // 	idade: 3, 
    // 	raca: "SRD"
    // }

    // const gato = {...cachorro, nome: "Juba"}

    // const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

    // console.log(cachorro) // JUCA, 3, SRD
    // console.log(gato)// JUBA, 3 , SRD
    // console.log(tartaruga) // JUBO, 3, SRD
  

    // a) O que vai ser impresso no console?

    // b) O que faz a sintaxe dos três pontos antes do nome de um objeto? SPREAD, COPIA O OBJETO SOLICITADO

//EXERCICIO 03

  // function minhaFuncao(objeto, propriedade) {
  //   	return objeto[propriedade]
  //   }

  //   const pessoa = {
  //     nome: "Caio", 
  //     idade: 23, 
  //     backender: false
  //   }

  //   console.log(minhaFuncao(pessoa, "backender"))
  //   console.log(minhaFuncao(pessoa, "altura"))

    // a) O que vai ser impresso no console? FALSE, UNDEFINED

    // b) Explique o valor impresso no console. Você sabe por que isso aconteceu? BACKENDER: FALSE JA MOSTRA NO CONSOLE,
    //undefined: MOSTRA PORQUE PEDE A STRING ALTURA, SENDO QUE NO OBJETO PESSOA NÃO CONSTA ESSA INFORMAÇÃO.

//ESCRITA DE CODIGO

//Exercicio 01

// const pessoa = {
//   nome: 'Amanda',
//   apelidos: ['Amandinha ', ' Mandinha ', ' Mandi ']
// }
// function recebeObjeto(pessoa){
//   console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos}`)
// }
// console.log(recebeObjeto(pessoa))
 //   


// // //Exercicio 02
// a) Crie dois objetos diferentes com as seguintes propriedades: nome, idade e profissão.
// b) Escreva uma função que receba esses objetos e retorne um array com as seguintes informações:

// const pessoa1 = {
//   nome1: 'Bruno',
//   idade1: 23,
//   profissao1: 'Instrutor',
// }
// const pessoa2 = {
//   nome2: 'Joana',
//   idade2: 35,
//   profissao2: "Programadora" 
// }

// function lista(pessoa1) {
//   const array = [pessoa1.nome1, pessoa1.nome1.length, pessoa1.idade1,
//   pessoa1.profissao1, pessoa1.profissao1.length]
//   return array
// }

// console.log(lista(pessoa1))

// function lista2(pessoa2) {
//   const imprimeDois = [pessoa2.nome2, pessoa2.nome2.length, pessoa2.idade2,
//     pessoa2.profissao2, pessoa2.profissao2.length]
//     return imprimeDois
// }
// console.log(lista2(pessoa2))


//EXERCICIO 03
// a) Crie uma variável de escopo global que guarde um `array` vazio chamada `carrinho`
// b) Crie três novos objetos que representem frutas de um sacolão. Eles devem ter as seguintes propriedades: nome (`string`) e disponibilidade (`boolean` - devem começar como `true`)
// c) Crie uma função que **receba** um objeto fruta por **parâmetro** e coloque-a dentro do array de `carrinho`. Invoque essa função passando os três objetos criados. 
//     Aqui você deve usar o método **push()**
// d) Imprima a variável `carrinho` e garanta que ela agora seja um **array preenchido com três objetos.** 
//     Deve aparecer algo assim no console do seu navegador:
//     Se voce clicar nessa setinha, o array é expandido e deve parecer com isso:

// const carrinho = [];

// const fruta1 = {
//     nome: 'Banana',
//     disponibilidade: true
// }
// const fruta2 = {
//     nome: 'Mamão',
//     disponibilidade: true
// }
// const fruta3 = {
//     nome: 'Abacate',
//     disponibilidade: true
// }
// function compras(carrinho) {
//   const array = [fruta1, fruta2, fruta3]
//   return array
// }
// console.log(compras(carrinho.push()))



// DESAFIO //
//01 exercicio
//Crie um função que pergunte ao usuário seu nome, sua idade e sua profissão e depois
//  imprima no console um objeto com essas propriedades.
//  Depois de imprimir o novo objeto, 
// imprima também o tipo dele para garantir que é um objeto.

// const usuario1 = {
//   nome1: prompt("Qual o seu nome?"),
//   idade1: prompt("Qual sua idade"),
//   profissao: prompt("Qual a sua profissão?")
// }  
// console.log(`nome: ${usuario1.nome1}, profissão: ${usuario1.profissao}, idade: ${usuario1.idade1}`)

// function pessoa1(usuario1) {
//     const array = (usuario1.nome, usuario1.idade1, usuario1.profissao)
//     return array
// } 
// console.log(usuario1)

//EXERCICIO 02 
//Crie uma função que receba dois objetos que representam filmes. 
//Eles devem ter as propriedades: ano de lançamento e nome. 
//A função deve retornar uma mensagem no seguinte modelo:

// O primeiro filme foi lançado antes do segundo? false
// O primeiro filme foi lançado no mesmo ano do segundo? true


  const listaFilme =(filme1 , filme2)=>{
  console.log("O primeiro filme foi lançado antes do segundo?", filme1.ano > filme2.ano)
  console.log("O primeiro filme foi lançado no mesmo ano do segundo?", filme1.ano < filme2.ano)
  }
  const filme1 = { filme: "Guardiões da Galaxia II", ano: 2017}
  const filme2 = { filme: "Guerra do Amanha", ano: 2021}
  listaFilme(filme1,filme2)