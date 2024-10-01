let nome = "Gabriella";
let idade = "15";
let souEstudande = true;

console.log (`Meu nome é ${nome}, minha idade é ${idade},sou estudande? ${souEstudande}.`)

console.log (4)
console.log (3)

let soma = 4 + 3
let subtração = 4 - 3
let multiplicação = 4 * 3
let divisão = 4 / 3
let módulo = 4%3

console.log (soma)
console.log (subtração)
console.log (multiplicação)
console.log (divisão)
console.log (módulo)

//Exercícios com Operadores lógicos

//Armazena a idade e vê se a pessoa tem carteira 
let Idade = 15;
let temCareira = false 

//Veificar se o usuário tem mais de 18 anos E também se tem cateira. Se os dois forem true, retorna true, se não, retorna false.
let podeDirigir = 18;
console.log (podeDirigir)

console.log (15 < 18)
console.log (true&&false)

let IIdade = 15
let temCCarteira = false;
console.log ((temCCarteira) && (IIdade >= 18))

/*Exercícios com funções*/ 

//Crie uma função que recebe dois números como parâmetros e faz a soma entre eles.
let numero = 4
let numero2 = 7
let Soma = numero + numero2
console.log (Soma)

function SomandoParametros (numero,numero2) {
let Soma = numero + numero2
console.log (`A soma entre os dois numeros é ${Soma}`)
}
SomandoParametros (4,7)


//Crie uma função que recebe seu nome e sua idade como parâmetros e imprime uma frase com eles.
function Noome (nome){
    console.log (`Eu tenho 15 anos e meu nome é ${nome}`)
}
Noome (`Gabriella`)

//Crie uma função que recebe o seu filme favorito como parâmetro e imprime uma frase com isso.
function filme (filme){
console.log (`Meu filme preferido é ${filme}`)
}
filme (`Hotel Transilvania.`)
