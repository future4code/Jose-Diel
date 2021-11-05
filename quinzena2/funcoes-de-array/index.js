// EXERCICIOS NOTION

//01 Interpretação de Codigo

// a)O que vai ser impresso no console?
// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" }
//   ]
  
//   const novoArrayA = usuarios.map((item, index, array) => {
//      console.log(item, index, array)
//   })
  /* {nome: Amanda Rangel Apelido: Mandi}
     {nome: Lais Petra Apelido: Laura}
     {nome: Letícia Chijo Apelido: Chijo}
     */


//02
// a) O que vai ser impresso no console

// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" },
//   ]
  
//   const novoArrayB = usuarios.map((item, index, array) => {
//      return item.nome
//   })
  
//   console.log(novoArrayB)

  /* vai aparecer somente o nome seguido do apelido, sem (nome: e Apelido:); seguiodo de length 0, 1, 2*/

  //03

// a)O que vai ser impresso no console?

// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" },
//   ]
  
//   const novoArrayC = usuarios.filter((item, index, array) => {
//      return item.apelido !== "Chijo"
//   })
  
//   console.log(novoArrayC)

  /* tudo que é diferente de Chijo, Aparece Amanda Rangel e Leticia; 0, 1 (length) */


  //Exercicios de escrita

  //01

//   const dogs =[
//     { nome: "Lupin", raca: "Salsicha"},
//     { nome: "Polly", raca: "Lhasa Apso"},
//     { nome: "Madame", raca: "Poodle"},
//     { nome: "Quentinho", raca: "Salsicha"},
//     { nome: "Fluffy", raca: "Poodle"},
//     { nome: "Caramelo", raca: "Vira-lata"},
//   ]
//a) Crie um novo array que contenha apenas o nome dos doguinhos
    // const nomesDog = (item) => {
    //     return item.nome
    // }
    
    // const nomeDosPets = dogs.map(nomesDog)
    //     console.log(nomeDosPets)
    
//b) Crie um novo array apenas com os cachorros salsicha
    // const dogSalsh = (item)=>{
    //     return item.raca === 'Salsicha'
    // }

    // const racaSalsh = dogs.filter(dogSalsh)
    // console.log(racaSalsh)

//c) Crie um novo array que possuirá mensagens para enviar para todos os clientes que são poodles. A mensagem deve ser: "Você ganhou um cupom de desconto de 10% para tosar o/a [NOME]!"

//   const arrayPoodles = (item) => {
//       return item.raca === "Poodle"
//   }

//   const racaPoodles = dogs.filter (arrayPoodles)

//   const pegarNome = (item) =>{
//       console.log('Você Ganhou um cupon de desconto de 10% para tosar o/a', item.nome)
//   }

//   const nomeDosPoodles = racaPoodles.map(pegarNome)

///////////////////////////////////////
// // 02
    // const produtos = [
    //     { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    //     { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    //     { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    //     { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    //     { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    //     { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    //     { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    //     { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    //     { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    //     { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
    // ]
    
/*  a) a) Crie um novo array que contenha apenas o nome de cada item
    
     const selecionarOsNomes = (item) => {
         return item.nome
     }
     const nomeDosProdutos = produtos.map(selecionarOsNomes)
         console.log(nomeDosProdutos)*/

/*   b) Crie um novo array que contenha um objeto com o nome e o preço de cada item, aplicando 5% de desconto em todos eles
    
     const aplDesconto = produtos.map((item) =>{
     const nomes = item.nome    
/     const preco = (item.preco * 0.95).toFixed(2)

         return {nomes, preco}
    }
    )
    console.log(aplDesconto)
*/
 
/*c) Crie um novo array que contenha apenas os objetos da categoria Bebidas

     const selBebidas = (item)=>{
        return item.categoria === 'Bebidas'
    }

    const catBebidas = produtos.filter(selBebidas)
    console.log(catBebidas) */

/* d) Crie um novo array que contenha apenas os objetos cujo nome contenha a palavra "Ypê" 

    function selYpe (item){
        return item.nome.includes('Ypê')
    }
    const imprimeIpe = produtos.filter(selYpe)
    console.log(imprimeIpe)*/

    /* e) Crie um novo array onde cada item é uma frase "Compre [NOME] por [PREÇO]". Esse array deve conter frases apenas dos itens cujo nome contenha a palavra "Ypê" */

    // const cestaCompras = produtos.filter((comprar)=>{
    //     return comprar.nome.includes('Ypê') === true;
    // })
    // const compraItens = cestaCompras.map((item)=>{
    //     return `COMPRE ${item.nome} por ${item.preco}` 
    // })
    // console.log(compraItens)