```
//01

function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
    const salarioFixo = 2000
    
     calcularSalario = (qtdeCarrosVendidos * 100) + (valorTotalVendas * 0.05) + salarioFixo
   
  return calcularSalario
   }     

//02 

function calculaPrecoTotal(quantidade) {
   
    if (quantidade < 12){
    maca = 1.30
    return quantidade * maca
    
    }else{
    maca = 1.00
    return quantidade * maca
    
    }
}    

//03

// 04

//05

function criarArrayNomesAnimais() {
    const animais = [
      { nome: "Cachorro", classificacao: "mamífero" },
      { nome: "Papagaio", classificacao: "ave" },
      { nome: "Gato", classificacao: "mamífero" },
      { nome: "Carpa", classificacao: "peixe" },
      { nome: "Pomba", classificacao: "ave" }
    ]

const nomesBichinhos = animais
.filter(nomes => nomes.nome)
.map(nome => nome.nome)
   return nomesBichinhos
}

//06

function filtraTarefas() {
  const tarefas = [
    { titulo: "Fazer Remember", status: "done", tempo: 30 },
    { titulo: "Fazer Challange", status: "todo", tempo: 30 },
    { titulo: "Assistir Aula", status: "done", tempo: 120 },
    { titulo: "Fazer almoço nutritivo", status: "done", tempo: 60 },
    { titulo: "Ler atentamente exercícios do dia", status: "doing", tempo: 20 },
    { titulo: "Fazer exercício do dia", status: "doing", tempo: 180 },
    { titulo: "Fazer desafio", status: "doing", tempo: 60 },
    { titulo: "Ir para o Stand Up", status: "todo", tempo: 30 },
    { titulo: "Enviar Feedback", status: "todo", tempo: 15 },
    { titulo: "Enviar Exercício", status: "todo", tempo: 15 },
    { titulo: "Jogar Videogame", status: "todo", tempo: 120 },
    { titulo: "Assistir Novela", status: "todo", tempo: 90 }
 ]
const terminadas = tarefas
.filter(nome => nome.status === "done")
.map(nome => nome.titulo)
return terminadas
}

```