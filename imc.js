// Importa o módulo prompt-sync
const teclado = require('prompt-sync')({sigint: true});

// Função para calcular o IMC
function calcularIMC(peso, altura) {
    return peso / (altura * altura);
}

// Função para classificar o IMC
function classificarIMC(imc) {
    if (imc < 18.5) {
        return 'Abaixo do peso';
    } else if (imc >= 18.5 && imc < 24.9) {
        return 'Peso normal';
    } else if (imc >= 25 && imc < 29.9) {
        return 'Sobrepeso';
    } else if (imc >= 30 && imc < 34.9) {
        return 'Obesidade grau I';
    } else if (imc >= 35 && imc < 39.9) {
        return 'Obesidade grau II';
    } else {
        return 'Obesidade grau III ou Mórbida';
    }
}

// Solicita ao usuário para inserir seu peso e altura
const peso = parseFloat(teclado('Digite seu peso em kg: '));
const altura = parseFloat(teclado('Digite sua altura em metros: '));

// Verifica se os valores são válidos
if (isNaN(peso) || isNaN(altura)) {
    console.log('Por favor, insira valores válidos.');
} else {
    // Calcula o IMC
    const imc = calcularIMC(peso, altura);
    const classificacao = classificarIMC(imc);
    console.log("Seu IMC é: "+ imc.toFixed(2) + " - " + classificacao);
}
