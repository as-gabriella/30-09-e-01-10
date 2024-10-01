//Retângulo 1
let altura = 10
let base = 20
let area = base * altura
console.log(area)

//Retângulo 2
let altura2 = 5
let base2 = 6
let area2 = base2 * altura2
console.log(area2)

// Retângulo 3
let altura3 = 9 
let Base3 = 7
let area3 = altura3 * Base3 
console.log (area3)



function calculaRetangulo (base,altura) { 
let area = base * altura    
console.log (`A área do retângulo é ${area}.`)
} 
calculaRetangulo (5,10)

//Função sem parâmetros
function imprimeAlgo () {
console.log (`Olá galera`)
}
imprimeAlgo() //Aqui eu chamo a função que eu criei

//Função com parâmetros 
function imprimeFraseComNome (nome) {
console.log(`O meu nome é ${nome}.`)
}

imprimeFraseComNome ("Gabriella") //Aqui eu chamo a função que eu criei, mas com parâmetros.