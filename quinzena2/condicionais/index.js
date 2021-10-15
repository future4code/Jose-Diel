//Exercícios de interpretação de código
//Leia o código abaixo:
// const respostaDoUsuario = prompt("Digite o número que você quer testar")
// const numero = Number(respostaDoUsuario)

// if (numero % 2 === 0) {
//   console.log("Passou no teste.")
// } else {
//   console.log("Não passou no teste.")


// a) Explique o que o código faz. Qual o teste que ele realiza? ele faz comparação entre numeros impares e pares

// b) Para que tipos de números ele imprime no console "Passou no teste"? numeros par

// c) Para que tipos de números a mensagem é "Não passou no teste"? numeros impar

/////////////////////////////////////////

//O código abaixo foi feito por uma pessoa desenvolvedora, contratada para automatizar algumas tarefas de um supermercado:

// let fruta = prompt("Escolha uma fruta")
// let preco
// switch (fruta) {
//   case "Laranja":
//     preco = 3.5
//     break;
//   case "Maçã":
//     preco = 2.25
//     break;
//   case "Uva":
//     preco = 0.30
//     break;
//   case "Pêra":
//     preco = 5.5
//     break; // BREAK PARA O ITEM c.
//   default:
//     preco = 5
//     break;
// }
// console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

// a) Para que serve o código acima? // Vericar valor de cada fruta

// b) Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`? // O preço da fruta Maça  é R$ 5

// c) Considere que um usuário queira comprar uma `Pêra`, qual seria a mensagem impressa no console se retirássemos 
//o `break` que está logo acima do `default` (o `break` indicado pelo comentário "BREAK PARA O ITEM c.")? // O preço da fruta  Pêra  é  R$  5

//////////////////////////////////////////

// 3. Leia o código abaixo:

    
    // const numero = Number(prompt("Digite o primeiro número."))

    // if(numero > 0) {
    //   console.log("Esse número passou no teste")
    // 	let mensagem = "Essa mensagem é secreta!!!"
    // }

    // console.log(mensagem)
    

    // a) O que a primeira linha está fazendo? //Está pedindo pro Usuario digitar um numero

    // b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10? // "10" Esse numero passou no teste // 
    //"-10" da erro na linha, pois nao tem pedido de numeração menor que 0

    // c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo. // poderia usar else if para numero abaixo de 0


    //////////////////////////////////////

    //Exercícios de escrita de código
    // 1. Faça um programa que pergunta ao usuário qual a idade dele e imprima no console se ele/ela pode dirigir (apenas maiores de idade).

    // a) Faça um `prompt` para receber a idade do usuário e guarde em uma variável.

    // b) Garanta que essa variável é do tipo `Number`, você deve usar o cast para number para isso.

    // c) Agora veja se essa idade do usuário corresponde à idade mínima que permite dirigir. Se sim, imprima no console `"Você pode dirigir"`, 
    // caso contrário, imprima `"Você não pode dirigir."`

    // const idade = Number(prompt('Qual a sua idade'))
    // const dirigir = 18
    // function podeDirigir(idade, dirigir){
    //     if(idade >= dirigir){
    //         console.log('Você pode dirigir')
    //     }else{
    //         console.log('Você não pode dirigir')
    //     }
    // }
    // podeDirigir(idade, dirigir)

    ////////////////////////////////////////

    //EXERCICIO 02
    // Agora faça um programa que verifica que turno do dia um aluno estuda. Peça para digitar M (matutino) ou V (Vespertino) ou N (Noturno).
    // Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". Utilize o bloco if/else

    // const matutino = confirm('Voce estuda pela parte da manhã?')
    // const vespertino = confirm('Você estuda pela parte da tarde')
    // const noturno = confirm('Voce estuda durante a noite?')
    //     function horarioEstudo(matutino, vespertino, noturno){
    //         if(matutino){
    //             console.log('Bom Dia!')
    //         }else if(vespertino){
    //             console.log('Boa Tarde')
    //         }else if (noturno){
    //             console.log('Boa Noite!')
    //         }
    //     }
    //     horarioEstudo(matutino, vespertino, noturno)

                // ou //

                // const horarioEstudo = prompt("Informe o turno do dia que você estuda? M para Matutino, V para Vespertino e N para Noturno. ")
                // if (horarioEstudo.toUpperCase() === "M") {
                //     console.log("Bom Dia!")
                // }else if (horarioEstudo.toUpperCase() === "V") {
                //     console.log("Boa tarde!")
                // } else if (horarioEstudo.toUpperCase() === "N") {
                //     console.log("Boa noite!")
                // } else {
                //     console.log("Tente novamente digitando M para Matutino, V para Vespertino e N para Noturno. ")
                // }


 //////////////////////////////////////////

 //Repita o exercício anterior, mas utilizando a estrutura de switch case agora.

 // const turno = prompt("Em qual turno você estuda?")
    // switch(turno){
    //     case 'M':
    //         console.log('Bom Dia!')
    //         break
    //     case 'V':
    //         console.log('Boa Tarde!')
    //         break
    //     case 'N':
    //         console.log('Boa noite!')
    //         break
    //     default:
    //         console.log(' M para (matutino - Manhã), V para (Vespertino - Tarde) e N para (Noturno - Noite)')
    // }

//////////////////////////////////////////

//EXERCICIO 04
// Considere a situação: você vai ao cinema com um amigo ou amiga, porém ele/ela só assistirá a um filme com você se ele for do gênero 
//fantasia e se o ingresso está abaixo de 15 reais.
//  Faça um código que pergunta ao usuário qual o gênero de filme que vão assistir e outra pergunta sobre o preço do ingresso, 
//  então verifique se seu amigo ou amiga vai topar assistir o filme. Caso positivo, imprima no console a mensagem:
//  "Bom filme!", caso contrário, imprima "Escolha outro filme :("

    // const ingresso = Number(prompt('Qual o valor do ingresso?'))
    // const genero = prompt("Qual o gênero do filme que voce vai assistir?")

    //     if( ingresso <= 15 && genero === "fantasia"){
    //         console.log('Bom filme!')

    //     }else{
    //         console.log('Escolha outro filme!')
    //     }
    

///////////////////////////////////////// 
//DESAFIO 01
// 1. Modifique o código do exercício 4 de escrita de código para, antes de imprimir a mensagem `"Bom filme!"`, 
// pergunte ao usuário, pelo `prompt` qual lanchinho ele vai comprar (pipoca, chocolate, doces, etc)
//  e imprima no console as mensagens `"Bom filme!"` e `"Aproveite o seu [LANCHINHO]"`, 
//  trocando [LANCHINHO] pelo que o usuário colocou no input.
 
    // const ingresso = Number(prompt('Qual o valor do ingresso?'))
    // const genero = prompt("Qual o gênero do filme que voce vai assistir?")
    // const lanche = prompt('qual lanchinho ele vai comprar (pipoca, chocolate, doces, etc')

    //     if( ingresso <= 15 && genero === 'fantasia'){
    //         console.log('Bom filme!')

    //     }else {
    //         console.log('Escolha outro filme!')
    //     }
    // switch(lanche){
    //     case 'pipoca':
    //         console.log('Aproveite sua Pipoca')
    //         break
    //     case 'chocolate':
    //         console.log('Aproveite seu chocolate')
    //         break
    //     case 'doces':
    //         console.log('Aproveite seus docinhos')
    //         break
    // }


    //DESAFIO 02
    // Você foi contratado para criar um sistema de vendas de ingressos de jogos de um estádio de futebol. 
    // Para esta compra, o usuário deve fornecer algumas informações:
// - Nome completo;
// - Tipo de jogo: IN indica internacional; e DO indica doméstico;
// - Etapa do jogo: SF indica semi-final; DT indica decisão de terceiro lugar; e FI indica final
// - Categoria: pode ser as opções 1, 2, 3 ou 4;
// - Quantidade de ingressos

// O seu sistema deve solicitar estas informações ao usuário, através do `prompt` . Além disso, ele deve imprimir tudo isso, 
// junto com o valor de cada ingresso e o valor total que o usuário tem que pagar 
// (ou seja, o valor unitário do ingresso multiplicado pela quantidade).
//  Abaixo, há a tabela com os valores de cada ingresso e exemplos de execução do programa.
//   Lembrando que o valor de jogos internacionais é o mesmo de jogos domésticos, mas seus preços devem ser 
//   multiplicados pelo valor do dólar 
// (considerar o dólar = R$4,10)

// let nomeCompleto = prompt(`Qual seu nome completo?`);
// let tipoDeJogo = prompt(`Qual o tipo de jogo? Digite IN para jogos internacionais ou DO para jogos domésticos`).toUpperCase();
// let etapaDoJogo = prompt(`Qual a etapa do jogo? Digite SF para Semi-final, DT para decisão de terceiro lugar ou FI para final`).toUpperCase();
// let tipoDoIngresso = Number(prompt(`Qual o tipo de ingresso? Opções disponíveis: 1, 2, 3 e 4`));
// let quantidadeDeIngresso = Number(prompt('Quantos ingressos você pretende vender?'));
    
//     if (etapaDoJogo === "SF" && tipoDoIngresso === 1) {
//         valorDoIngresso = 1320;
//     } else if (etapaDoJogo === "SF" && tipoDoIngresso === 2){
//         valorDoIngresso = 880;
//     } else if (etapaDoJogo === "SF" && tipoDoIngresso === 3){
//         valorDoIngresso = 550;
//     } else if (etapaDoJogo === "SF" && tipoDoIngresso === 4){
//         valorDoIngresso = 220;
//     } else if (etapaDoJogo === "FI" && tipoDoIngresso === 1){
//         valorDoIngresso = 1980;
//     } else if (etapaDoJogo === "FI" && tipoDoIngresso === 2){
//         valorDoIngresso = 1320;
//     } else if (etapaDoJogo === "FI" && tipoDoIngresso === 3){
//         valorDoIngresso = 880;
//     } else if (etapaDoJogo === "FI" && tipoDoIngresso === 4){
//         valorDoIngresso = 330;
//     } else if (etapaDoJogo === "DT" && tipoDoIngresso === 1){
//         valorDoIngresso = 1980;
//     } else if (etapaDoJogo === "DT" && tipoDoIngresso === 2){
//         valorDoIngresso = 1320;
//     } else if (etapaDoJogo === "DT" && tipoDoIngresso === 3){
//         valorDoIngresso = 880;
//     } else if (etapaDoJogo === "DT" && tipoDoIngresso === 4){
//         valorDoIngresso = 330;
//     }

//     if (tipoDeJogo === "DO") {
//         valorDoIngresso = valorDoIngresso;
//     } else if (tipoDeJogo === "IN") {
//         valorDoIngresso = valorDoIngresso / 4.10;
//     } else {
//         console.log ("Escolha o tipo de jogo entre IN para jogos internacionais ou DO para jogos domésticos")
//     }

// let valorTotalDosIngressos = valorDoIngresso * quantidadeDeIngresso;

//     if (tipoDeJogo === "DO") {
//         tipoDeJogo = "Nacional"
//     }
//     if (tipoDeJogo === "IN") {
//         tipoDeJogo = "Internacional"
//     }
//     if (etapaDoJogo === "SF") {
//         etapaDoJogo = "Semi-final"
//     } else if (etapaDoJogo === "DT") {
//         etapaDoJogo = "Disputa de 3º Lugar"
//     } else if (etapaDoJogo === "FI") {
//         etapaDoJogo = "Final"
//     }

//     if (tipoDeJogo === "Nacional") {
//     console.log(
//     `--- Dados da compra ---
//     Nome do cliente:  ${nomeCompleto} 
//     Tipo do jogo:  ${tipoDeJogo} 
//     Etapa do jogo:  ${etapaDoJogo} 
//     Categoria:  ${tipoDoIngresso} 
//     Quantidade de Ingressos:  ${quantidadeDeIngresso} ingressos 
//     ---Valores--- 
//     Valor do ingresso:  R$ ${valorDoIngresso}
//     Valor total:  R$ ${valorTotalDosIngressos}`)
//     } else {
//     console.log(
//     `--- Dados da compra ---
//     Nome do cliente:  ${nomeCompleto} 
//     Tipo do jogo:  ${tipoDeJogo} 
//     Etapa do jogo:  ${etapaDoJogo} 
//     Categoria:  ${tipoDoIngresso} 
//     Quantidade de Ingressos:  ${quantidadeDeIngresso} ingressos 
//     ---Valores--- 
//     Valor do ingresso:  U$ ${valorDoIngresso}
//     Valor total:  U$ ${valorTotalDosIngressos}`)   
//     }


function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
    const salarioFixo = 2000
    
     calcularSalario = (qtdeCarrosVendidos * 100) + (valorTotalVendas * 0.05) + salarioFixo
   
  return calcularSalario
   }     