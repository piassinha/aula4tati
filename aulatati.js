1
let frase = "Aula da Tati"
console.log("Comprimento da frase:",frase.lenght);
console.log("Frase em maiúsculo:",frase.toUpperCase());

2
let variavelnull= null;
let variavelundefined;

console.log(variavelnull);
console.log(variavelundefined);

3
let numero1 = 12;
let texto1 = "Bia";
let booleano = true;
const res = `texto: ${texto1}, numero: ${numero1} booleano: ${booleano}.`;
console.log(res);

4
const numero = 42; 
const texto = "123";
const numeropraString = numero.toString();
const textopraNumero = Number(texto);
console.log("Número pra string:", typeof numeropraString); 
console.log("String pra número:", typeof textopraNumero); 

5
const frase1 = "Bia Piassa";
const maiusculas = frase1.toUpperCase();
const minusculas = frase1.toLowerCase();
const parte = frase1.slice(5);

console.log("String original:", frase1);
console.log("String em maiúsculas:", maiusculas);
console.log("String em minúsculas:", minusculas);
console.log("String modificada:", parte);

6
let saldo = 10; 
const deposito = 2500; 
const saque = 1000; 

let operacao;
operacao = saldo + deposito;
console.log("O saldo depois de depositar é:", operacao);
saldo = operacao;
operacao = saldo - saque;
console.log("O saldo depois de sacar é:", operacao);

7
const valor = 2; 
const resultado = (valor % 2 === 0) ? 'O valor é par' : 'O valor é ímpar';
console.log(resultado);

8
const usuarioLogado = true; 
const temPermissaoAdmin = false; 
const podeAcessarFuncionalidade = usuarioLogado && temPermissaoAdmin;
if (podeAcessarFuncionalidade) {
    console.log("O usuário não tem permissão para acessar");
} else {
    console.log("O usuário tem permissão para acessar");
}

9
const condição1 = false;
const condição2 = true;  
const peloMenosUmaVerdadeira = condição1 || condição2;
if (peloMenosUmaVerdadeira) {
    console.log("Uma das condições é verdadeira");
} else {
    console.log("Nenhuma das condições é verdadeira");
}

10
const idadeMinima = 18; 
const idadeUsuario = 20; 
if (idadeUsuario >= idadeMinima) {
    console.log("Você pode comprar o ingresso");
} else {
    console.log("Você não tem idade suficiente para comprar o ingresso");
}

11
function saudacao(nome) {
    return `olá, ${nome}! seja bem vindo(a)`;
}
const mensagem = saudacao('Bia');
console.log(mensagem);

12
function verificaridade(idade) {
    if (idade >= 18) {
        return "maior de idade.";
    } else {
        return "menor de idade.";
    }
}
const resultado2 = verificaridade(15);
console.log(resultado2);

13
function verificaPalindromo(string) {
    const stringInvertida = string.split('').reverse().join('');
    return string.toLowerCase() === stringInvertida.toLowerCase();
}

console.log(verificaPalindromo("bia")); 
console.log(verificaPalindromo("ana")); 

14
function encontrarMaiorNumero(num1, num2, num3) {
    let maior;
    if (num1 >= num2 && num1 >= num3) {
        maior = num1;
    } 
    else if (num2 >= num1 && num2 >= num3) {
        maior = num2;
    } 
    else {
        maior = num3;
    }

    return maior;
}
const nume1 = 10;
const nume2 = 25;
const nume3 = 15;
const maiorNumero = encontrarMaiorNumero(nume1, nume2, nume3);
console.log("O maior número é:", maiorNumero);

15
function calculaPotencia(base, expoente) {
    let resultado = 1;
    
    for (let i = 0; i < expoente; i++) {
        resultado *= base;
    }
    
    return resultado;
}

const base = 2;
const expoente = 3;

const resultadoo = calculaPotencia(base, expoente);
console.log(`O resultado de ${base} elevado a ${expoente} é ${resultadoo}`);