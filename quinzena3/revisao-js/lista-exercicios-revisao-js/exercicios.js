
// EXERCÍCIO 01
function inverteArray(array) {
  let arrayInvertido = []
  for(let i = array.length-1; i >=0; i--){
    arrayInvertido.push(array[i])
  }
  console.log(arrayInvertido)
  return arrayInvertido
}

// EXERCÍCIO 02
function retornaNumerosParesElevadosADois(array) {
  let arrayNumerosPares = [];
  for (let i=0; i< array.length; i++){
    if (array[i] %2 === 0){
      arrayNumerosPares.push(array[i]**2)
    }
  }
  console.log(arrayNumerosPares)
  return arrayNumerosPares
}
// EXERCÍCIO 03
function retornaNumerosPares(array) {
  let arrayNumerosPares = [];
  for (let i=0; i< array.length; i++){
    if (array[i] %2 === 0){
      arrayNumerosPares.push(array[i])
    }
  }
  console.log(arrayNumerosPares)
  return arrayNumerosPares
}
// EXERCÍCIO 04
function retornaMaiorNumero(array) {
  let numeros = -Infinity, i = 0, n = array.length;

  for (; i != n; ++i) {
      if (array[i] > numeros) {
          numeros = array[i];
      }
  }

  return numeros;
}

// EXERCÍCIO 05
function retornaQuantidadeElementos(array) {
  
  const quantidadeElementos = []
  for (let i=0; i< array.length; i++){
    if (array[i] > quantidadeElementos){
      quantidadeElementos === array[i];
    }
  }
  return array.length
}


// EXERCÍCIO 06
function retornaExpressoesBooleanas() {
  const booleano1 = true
  const booleano2 = false
  const booleano3 = !booleano2 
  const booleano4 = !booleano3


  let array = [
    (booleano1 && booleano2 && !booleano4),
    (booleano1 && booleano2 || !booleano3),
    (booleano2 || booleano3 && booleano4 || booleano1),
    !(booleano2 && booleano3) || !(booleano1 && booleano3),
    !(booleano1) && !(booleano3) || (!booleano4 && booleano3 && booleano3)
  ]
  return array
}
  

// EXERCÍCIO 07
function retornaNNumerosPares(n) {
  const numerosPares = []
  let par = 0
  let i = 0
  while(i < n){
     i++
     numerosPares.push(par)
     par = par + 2
  }
  return numerosPares
}
// EXERCÍCIO 08
function checaTriangulo(a, b, c) {
  if(a === b && a === c ){
    return "Equilátero"
 }else if((a === b && b !== c) || (a !== b && b === c) ){
    return "Isósceles"
 }else if(a !== b && a !== c && b !== c){
    return "Escaleno"
 }
}

// EXERCÍCIO 09
function comparaDoisNumeros(num1, num2) { 
  let maior
  let menor

  let divisivel1 = {maiorNumero: 0, maiorDivisivelPorMenor: false, diferenca: 0}

  if(num1 > num2){
    maior = num1
    menor = num2
  }else{
    maior = num2
    menor = num1
  }
    divisivel1.maiorNumero = maior;
    divisivel1.maiorDivisivelPorMenor = maior % menor === 0;
    divisivel1.diferenca = maior - menor;
    
  return divisivel1
}

// EXERCÍCIO 10
function segundoMaiorEMenor(array) {
  let numero = array.length;
  for (let maior = 0; maior < numero; maior++){;
    for (let menor = 0; menor < numero; menor++){;
      if(array[menor] > array[menor + 1]){
        let conta = array[menor];
        array[menor] = array[menor + 1];
        array[menor + 1] = conta;
      }
   }
  }  
      return[array[array.length - 2], array[1]];
}
// EXERCÍCIO 11

function ordenaArray(array) {
  let tamanho = array.length;
  for (let i = 0; i < tamanho; i++) {
      for (let compara = 0; compara < tamanho; compara++) {
          if (array[compara] > array[compara + 1]) {
              let novoCompara = array[compara];
              array[compara] = array[compara + 1];
              array[compara + 1] = novoCompara;
          }
      }
  }
  return array
}

// EXERCÍCIO 12
function filmeFavorito() {

}

// EXERCÍCIO 13
function imprimeChamada() {
  // "Venha assistir ao filme NOME_DO_FILME, de ANO, dirigido por DIRECAO e estrelado por ELENCO."
}

// EXERCÍCIO 14
function criaRetangulo(lado1, lado2) {

}

// EXERCÍCIO 15
function anonimizaPessoa(pessoa) {
  return {...pessoa, nome: "ANÔNIMO"}
}



// EXERCÍCIO 16A
function maioresDe18(arrayDePessoas) {

}

// EXERCÍCIO 16B
function menoresDe18(arrayDePessoas) {

}

// EXERCÍCIO 17A
function multiplicaArrayPor2(array) {

}

// EXERCÍCIO 17B
function multiplicaArrayPor2S(array) {

}

// EXERCÍCIO 17C
function verificaParidade(array) {

}

// EXERCÍCIO 18A
function retornaPessoasAutorizadas(pessoas) {

}

// EXERCÍCIO 18B
function retornaPessoasNaoAutorizadas(pessoas) {

}

// EXERCÍCIO 19A
function ordenaPorNome(consultasNome) {

}

// EXERCÍCIO 19B
function ordenaPorData(consultasData) {

}

// EXERCÍCIO 20
function calculaSaldo(contas) {

}
