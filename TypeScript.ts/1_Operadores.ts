// Instalando o TypeScript
// npm install -g typescript
// tsc --version
// Comando para atualizar o TypeScript
// npm update -g typescript

// Operadores em TypeScript
// Operadores Aritméticos
let a: number = 10; // são os tipos primitivos do TypeScript é igual ao do JavaScript
let b: number = 5;
let totalSoma: number = a + b; // soma
let totalSubtracao: number = a - b; // subtração
let totalMultiplicacao: number = a * b; // multiplicação
let totalDivisao: number = a / b; // divisão
let totalResto: number = a % b; // resto da divisão

console.log(`Soma: ${totalSoma} + Subtração: ${totalSubtracao} + Multiplicação: ${totalMultiplicacao} + Divisão: ${totalDivisao} + Resto: ${totalResto}`);

// Operadores de texto
let nome: string = "Lucas";
let sobrenome: string = "Silva";
let textoConcatenado: string = nome + sobrenome; // concatenação de strings
console.log(`Nome completo: ${textoConcatenado}`);
let textoRepetido: string = nome.repeat(3); // repetição de strings
console.log(`Nome repetido: ${textoRepetido}`);

// Opeeradores de comparação
let comparacao1: boolean = a == b; // comparação de igualdade
let comparacao2: boolean = a != b; // comparação de desigualdade
let comparacao3: boolean = a === b; // comparação de igualdade estrita
let comparacao4: boolean = a !== b; // comparação de desigualdade estrita   
console.log(`Comparação 1: ${comparacao1} + Comparação 2: ${comparacao2} + Comparação 3: ${comparacao3} + Comparação 4: ${comparacao4}`);

// Operadores de comparação com logica
let comparacao5: boolean = a > 0 && b > 0; // comparação de maior que
let comparacao6: boolean = a < 0 || b < 0; // comparação de menor que
let comparacao7: boolean = !(a > 0); // comparação de negação
console.log(`Comparação 5: ${comparacao5} + Comparação 6: ${comparacao6} + Comparação 7: ${comparacao7}`);

// Operadores ternarios
let resultado: string = (a > b) ? "A é maior que B" : "B é maior que A"; // operador ternário
console.log(`Resultado: ${resultado}`);

// Operador de atribuição
let valor : number = 10;
valor += 5;
valor -= 5;
valor *= 5;
valor /= 5;
valor %= 5;

console.log(`Valor: ${valor}`);

// Operador de incremento e decremento
let contador: number = 0; // contador
contador++;
contador--;
console.log(`contador: ${contador}`);

// Operador de Nulllish colescing
let valorNulo: number | null = null;
let valorDefault: number = valorNulo ?? 11;
console.log(`Valor nulo: ${valorNulo} + valor default: ${valorDefault}`);

// Operador de spread
let numeros: number[] = [1,2,3,4,5];
let novosNumoeros: number[] = [...numeros, 6,7,8];
console.log(`Números: ${numeros} + Novos números: ${novosNumoeros}`);

// operador de destructuring
let pessoa: {nome: string; idade: number} = {nome: "Lucas", idade: 25}; // objeto pessoa
let { nome: nomePessoa, idade: idadePessoa} = pessoa; // operador de destructuring
console.log(`Nome: ${nomePessoa} + Idade: ${idadePessoa}`);


// Vamos criar um objeto e como ele pode ser chamado
let objeto: {nome: string; idade: number} = {nome: "Lucas", idade: 25};
let resultados: { [key: string]: number} = {
    soma: totalSoma,
    subtracao: totalSubtracao,
    multiplicacao: totalMultiplicacao,
    divisao: totalDivisao,
    resto: totalResto
}

let resultado2:{[key: string]: any} = {
    nome: "Lucas",
    idade: 25,
    ativo: true,
    endereco: {
        rua: "Rua 1",
        numero: 123,
    },
}

console.log(resultados["soma"]);

// Comando para poder executar o codigo em TypeScript direto, sem precisar criar o arquivo .js, é ts-node
// npm install -g ts-node
// npx tsc --init
//  ts-node Operadores.ts

// Diferença de tsc e ts-node 
// tsc - compila o arquivo TypeScript para JavaScript
// ts-node - executa o arquivo TypeScript diretamente, sem precisar compilar para JavaScript