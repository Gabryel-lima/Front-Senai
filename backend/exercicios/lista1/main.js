function converterCelsiusParaFahrenheit(celsius) {
    return celsius * 1.8 + 32
}

console.log(`Questão 1: ${converterCelsiusParaFahrenheit(30)}`)

function calcularAreaRetangulo(base, altura) {
    return base * altura
}

console.log(`Questão 2: ${calcularAreaRetangulo(5, 10)}`)

function verificarParOuImpar(numero) {
    if (typeof numero !== 'number' || isNaN(numero)) {
        throw new Error('O valor informado não é um número válido.');
    }
    return numero % 2 === 0 ? 'par' : 'ímpar';
}

console.log(`Questão 3: ${verificarParOuImpar(7)}`)

function compararNumeros(numA, numB) {
    if (numA > numB) {
        return numA
    } else if (numB > numA) {
        return numB
    } else {
        return 'Os números são iguais'
    }
}

console.log(`Questão 4: ${compararNumeros(5, 5)}`)

function verificarPermissao(idade) {
    if (idade >= 18) {
        return 'Pode dirigir'
    } else {
        return 'Não pode dirigir'
    }
}

console.log(`Questão 5: ${verificarPermissao(16)}`)

function calcularSituacaoEscolar(nota1, nota2, nota3) {
    const media = (nota1 + nota2 + nota3) / 3
    
    if (media >= 7) {
        return 'Aprovado'
    } else if (media >= 5) {
        return 'Recuperação'
    } else {
        return 'Reprovado'
    }
}

console.log(`Questão 6: ${calcularSituacaoEscolar(3, 4, 2)}`)

function validarTriangulo(ladoA, ladoB, ladoC) {
    if (ladoA + ladoB > ladoC && ladoA + ladoC > ladoB && ladoB + ladoC > ladoA) {
        return true
    } else {
        return false
    }
}

console.log(`Questão 7: ${validarTriangulo(1, 2, 5)}`)

function calcularDesconto(valorTotal) {
    if (valorTotal > 100) {
        return valorTotal * 0.9
    } else {
        return valorTotal
    }
}

console.log(`Questão 8: ${calcularDesconto(80)}`)

function calcularIMC(peso, altura) {
    const imc = peso / (altura * altura)
    
    if (imc < 18.5) {
        return 'Abaixo do peso'
    } else if (imc >= 18.5 && imc <= 24.9) {
        return 'Peso normal'
    } else if (imc >= 25.0 && imc <= 29.9) {
        return 'Sobrepeso'
    } else {
        return 'Obesidade'
    }
}

console.log(`Questão 9: ${calcularIMC(90, 1.70)}`)

function calcularNovoSalario(salarioAtual, anosDeCasa) {
    if (anosDeCasa > 5 || salarioAtual < 2000) {
        return salarioAtual * 1.1
    } else {
        return salarioAtual * 1.05
    }
}

console.log(`Questão 10: ${calcularNovoSalario(3000, 4)}`)
