console.log('Hello!');
//saudacao()
maiorNumero()

 function saudacao() {
let nome = prompt ("qual seu nome?")

if (nome !="") {
    window.alert ("seja bem vindo " + nome + " ! ! ")
}else{
    window.alert ("poxa, queria saber seu nome :-(")
}

 }

 function maiorNumero() {
    //entrada valor
    let n1 = prompt ("qual o 1°numero?")
    let n2 = prompt ("qual o 2°numero?")
    let n3 = prompt ("qual o 3°numero?")
    let maiorNumero=0 

    //processamento do programa (exibir maior numero)
    if (n1>maiorNumero) {
    maiorNumero=n1
    }

    if (n2>maiorNumero) {
        maiorNumero=n2
        }

        if (n3>maiorNumero) {
        maiorNumero=n3
    }

    //saida
window.alert ("O maior numero é:" + maiorNumero)

 }

 
