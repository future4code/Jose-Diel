// Exemplos

// Exercício 0A
function soma() {
  // escreva seu código aqui
  const num1 = prompt('Digite o primeiro número')
  const num2 = prompt('Digite o segundo número')

  console.log(Number(num1) + Number(num2))
}

// Exercício 0B
function imprimeMensagem() {
  // escreva seu código aqui
  const mensagem = prompt('Digite sua mensagem')

  console.log(mensagem)
}

// ---------------------------------------------------
// Exercícios

// Exercício 1
function calculaAreaRetangulo() {
  const altura = prompt(2)
  const largura = prompt(6)
  const area = altura * largura
  console.log(area)
}

// Exercício 2
function imprimeIdade() {
  const anoAtual = prompt(2021)
  const anoNascimento = prompt('em que ano voce nasceu?' )
  console.log(Number(anoAtual) - (anoNascimento))
}

// Exercício 3
function calculaIMC() {
  const peso = prompt('Qual o seu peso atual? ')
  const altura = prompt('Qual a sua altura? ')
  const imc = peso / (altura * altura)
  console.log(imc)
}

// Exercício 4
function imprimeInformacoesUsuario() {
  const nomeUsuario = prompt('Digite seu nome')
  const idadeUsuario = Number(prompt('Digite sua idade'))
  const emailUsuario = prompt('Digite seu email')
  console.log(`Meu nome é ${nomeUsuario}, tenho ${idadeUsuario} anos, e o meu email é ${emailUsuario}.`)
}

// Exercício 5
function imprimeTresCoresFavoritas() {
const cor1 = prompt("Qual sua cor preferida?")
const cor2 = prompt("Digite outra cor de sua preferencia")
const cor3 = prompt("Digite mais uma vez outra cor de sua preferencia")
const tresCores = [cor1, cor2, cor3]
console.log(tresCores)

}

// Exercício 6
function retornaStringEmMaiuscula() {
  const frase = prompt('Digite uma mensagem')
  const fraseMaius = frase.toUpperCase()
  console.log(fraseMaius)

}

// Exercício 7
function calculaIngressosEspetaculo() {
const ingresso = Number(100)
const custo = Number(3000)
const pessoas = Number(30)
const calculo = (ingresso * pessoas) % custo
console.log(calculo)
}

// Exercício 8
function checaStringsMesmoTamanho() {
let string1 = prompt('Digite uma palavra:')
let string2 = prompt('Digite uma outra palavra:')

console.log(string1.length===string2.length)

}

// Exercício 9
function checaIgualdadeDesconsiderandoCase() {
  let palavra1 = prompt("Digite uma palavra:")
  let palavra2 = prompt("Digite outra palavra:")

  let palavras = palavra1.toLocaleUpperCase() === palavra2.toLocaleUpperCase()


  console.log(palavras)
}

// Exercício 10
function checaRenovacaoRG() {
  let anoAtual = Number(prompt('Digite o ano atual: '))
  let anoNasc = Number(prompt('Digite seu ano de nascimento: '))
  let anoIdentidade = Number(prompt("Digite o ano de emissão da sua carteira de identidade: "))

  let idade = anoAtual - anoNasc
  let validadeIdentidade = anoAtual - anoIdentidade

  let faixaEtaria1 = idade <= 20 && validadeIdentidade >= 5
  let faixaEtaria2 = idade >= 20 && idade <= 50 &&  validadeIdentidade >= 10
  let faixaEtaria3 = idade > 50 && validadeIdentidade >= 15

console.log(faixaEtaria1 || faixaEtaria2 || faixaEtaria3)
  
}
    


// Exercício 11
function checaAnoBissexto() {
const ano = Number(prompt('Qual ano quer Analisar?'))
const ano4 = ano%4 === 0
const ano100 = ano%100 === 0
const ano400 = ano%400 === 0

console.log(ano400 === ano4 === ano100)
}

// Exercício 12
function checaValidadeInscricaoLabenu() {
  let idade = Number(prompt('Qual a sua idade? '))
  let ensino = ['Você possui ensino médio completo?']
  let horario = ['Você possui disponibilidade exclusiva durante os horários do curso?']

  let faixaEtaria1 = idade === ['sim']
  let faixaEtaria2 = ensino === ['sim']
  let faixaEtaria3 = horario === ['sim']

console.log(faixaEtaria1 || faixaEtaria2 || faixaEtaria3)}

