Funções JS

**Funções em JavaScript**
Funções são blocos de construção fundamentais em JavaScript. Uma função é um procedimento de JavaScript - um conjunto de instruções que executa uma tarefa ou calcula um valor. Para usar uma função, você deve defini-la em algum lugar no escopo.

Nome da Função.
Lista de argumentos para a função, entre parênteses e separados por vírgulas.
Declarações JavaScript que definem a função, entre chaves { }. 
 

function square(numero) {
  return numero * numero;
}

**Objeto em JavaScript ⇒ Sintaxe, o que é e como usar**
 Um objeto em JavaScript tem propriedades associadas a ele. Uma propriedade de um objeto pode ser explicada como uma variável que é ligada ao objeto. Propriedades de objetos são basicamente as mesmas que variáveis normais em JavaScript, exceto pelo fato de estarem ligadas a objetos. As propriedades de um objeto definem as características do objeto. Você acessa as propriedades de um objeto com uma simples notação

//nomeDoObjeto.nomeDaPropriedade

var meuCarro = new Object();
meuCarro.fabricacao = "Ford";
meuCarro.modelo = "Mustang";
meuCarro.ano = 1969;

**Array  ⇒ Sintaxe, o que é e como usar**
Os elementos de um array são indexados a
partir da posição 0 (zero).
Pode-se acessar individualmente os valores de
seus elementos
Sintaxe:
    Vetor: nome[<índice>]
    Matriz: nome[<linha>][<coluna>]
Exemplos:
    Vetor: v1[2]
    Matriz: m1[1][1]    

Usar a propriedade length
Sintaxe: nomeArray.length
Exemplos:
    int[ ]vet = new int[10];
    int tam = vet.length;
    int[ ][ ] matriz = new int[2][3];
    int linhas = matriz.length;
    int colunas = matriz[0].length;

    let class ExemploVetor {
    let static void main(String args[ ]) {
    int[ ] vetor = new int [5];
        for (int i = 0; i < vetor.length; i++) {
        vetor[i]=Integer.parseInt(JOptionPane.showInputDialog(“Digite:”));
    }
    for (int i = 0; i < vetor.length; i++) {
         System.out.println(vetor[i]);
        }
     }
    }

**Map  ⇒ Sintaxe, o que é e como usar**
 O método map() pertence ao conjunto de funções disponíveis no objeto array para facilitar a sua manipulação. Basicamente, ele faz a leitura de todos os elementos do array, executa uma função callback para cada um e devolve como retorno um novo array.

    let arrayNomes =[
        {nome: 'Maria', sobrenome: 'Souza'},
        {nome: 'João', sobrenome: 'Gonçalves'},
        {nome: 'PEdro', sobrenome: 'Silva'}]
    let objNomeCompleto = arrayNomes.map(concatenarNomes);
    console.log(objNomeCompleto);
    function concatenarNomes(elemento){
        let nome = {};
        nome['nomeCompleto'] = elemento.nome + '' + elemento.sobrenome;
        return nome
    }

**Filter  ⇒ Sintaxe, o que é e como usar**
 O método filter() é um recurso que permite fazer a filtragem de elementos com apenas poucas linhas de comandos. Vale ressaltar que a array original não sofre nenhum tipo de alteração pelo método filter()

    var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    function buscarNumerosPares (value) {
        if (value % 2 == 0) 
        return value;
    }
    var numerosPares = numeros.filter(buscarNumerosPares);
    console.log(numerosPares);

**Filter  ⇒ Sintaxe, o que é e como usar**
Filter faz um filtro nos elementos que queremos utilizar, map percorre todos itens do array, executa a transformação nos itens e retorna
um novo array sem modificar o atual

**Diferença entre os métodos push e pop e como usá-los**
Pop() -> remove o último elemento de um array e retorna este elemento
Push() -> adiciona um ou mais elementos ao final de um array e retorna o tamanho deste array

    const letras = ['a', 'b', 'c', 'd', 'e'];

    console.log(letras.pop()); // e
    console.log(letras); // ["a", "b", "c", "d"]

    console.log(letras.push('f')); // 5
    letras.push('g','h','i'); 
    console.log(letras); //

** Método splice do array  ⇒ Sintaxe, o que é e como usar **
    slice() retorna uma cópia de parte de um array a partir de um sub-array criado entre as posições início e fim (fim não é necessário) de um array original. O Array original não é modificado. arr.slice([início[,fim]])

    // Usando slice para criar novoCarro a partir de meuCarro.
        var meuHonda = { cor: 'vermelho', rodas: 4, motor: { cilindros: 4, tamanho: 2.2 } };
        var meuCarro = [meuHonda, 2, 'perfeitas condições', 'comprado em 1997'];
        var novoCarro = meuCarro.slice(0, 2);

// Exibe os valores de meuCarro, novoCarro, e a cor de meuHonda
//  referenciado de ambos arrays.
        console.log('meuCarro = ' + meuCarro.toSource());
        console.log('novoCarro = ' + novoCarro.toSource());
        console.log('meuCarro[0].cor = ' + meuCarro[0].cor);
        console.log('novoCarro[0].cor = ' + novoCarro[0].cor);

// Altera a cor de meuHonda.
    meuHonda.cor= 'roxo';
    console.log('A nova cor do meu Honda é ' + meuHonda.cor);

// Exibe a cor de meuHonda referenciado de ambos arrays.
    console.log('meuCarro[0].cor = ' + meuCarro[0].cor);
    console.log('novoCarro[0].cor = ' + novoCarro[0].cor);


    ** Método slice do array  ⇒ Sintaxe, o que é e como usar **
    O método splice() altera o conteúdo de uma lista, adicionando novos elementos enquanto remove elementos antigos.
    
    var myFish = ["angel", "clown", "mandarin", "surgeon"];

    remove 0 elementos a partir do índice 2, e insere "drum"
    var removed = myFish.splice(2, 0, "drum");
    myFish é ["angel", "clown", "drum", "mandarin", "surgeon"]
    removed é [], //nenhum elemento removido

    remove 1 elemento do índice 3
    removed = myFish.splice(3, 1);
    myFish é ["angel", "clown", "drum", "surgeon"]
    removed é ["mandarim"] // Mandarim removido




exercicio JS

function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
   const quantidade = arrayDeNumeros.filter((numero) => numero === numeroEscolhido)
  let resposta  = quantidade.length;

  if(resposta !== 0){
    resposta = `O número ${numeroEscolhido} aparece ${resposta}x`
    }else{
    resposta = "Número não encontrado"
  } return resposta
}