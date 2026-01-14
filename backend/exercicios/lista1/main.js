// ============================================
// NÍVEL 1: FUNÇÕES E OPERAÇÕES MATEMÁTICAS BÁSICAS
// ============================================

// Questão 01: Conversor Climático
// Converte temperatura de Celsius para Fahrenheit
// Fórmula: F = C × 1.8 + 32
function converterCelsiusParaFahrenheit(celsius) {
    return celsius * 1.8 + 32
}

console.log(`Questão 01 - Conversor Climático (30°C): ${converterCelsiusParaFahrenheit(30)}°F`)

// Questão 02: Geometria Simples
// Calcula a área de um retângulo (base × altura)
function calcularAreaRetangulo(base, altura) {
    return base * altura
}

console.log(`Questão 02 - Área do Retângulo (base: 5, altura: 10): ${calcularAreaRetangulo(5, 10)}`)

// ============================================
// NÍVEL 2: ESTRUTURAS CONDICIONAIS (IF / ELSE)
// ============================================

// Questão 03: Verificador de Paridade
// Verifica se um número é par ou ímpar
function verificarParOuImpar(numero) {
    if (typeof numero !== 'number' || isNaN(numero)) {
        throw new Error('O valor informado não é um número válido.')
    }
    return numero % 2 === 0 ? 'Par' : 'Ímpar'
}

console.log(`Questão 03 - Verificador de Paridade (7): ${verificarParOuImpar(7)}`)
console.log(`Questão 03 - Verificador de Paridade (8): ${verificarParOuImpar(8)}`)

// Questão 04: Comparador de Números
// Compara dois números e retorna o maior, ou indica se são iguais
function compararNumeros(numA, numB) {
    if (numA > numB) {
        return numA
    } else if (numB > numA) {
        return numB
    } else {
        return 'Os números são iguais'
    }
}

console.log(`Questão 04 - Comparador de Números (5, 5): ${compararNumeros(5, 5)}`)
console.log(`Questão 04 - Comparador de Números (10, 5): ${compararNumeros(10, 5)}`)
console.log(`Questão 04 - Comparador de Números (3, 8): ${compararNumeros(3, 8)}`)

// Questão 05: Verificação de Idade (Detran)
// Verifica se a pessoa tem permissão para dirigir (idade >= 18)
function verificarPermissao(idade) {
    if (idade >= 18) {
        return 'Pode dirigir'
    } else {
        return 'Não pode dirigir'
    }
}

console.log(`Questão 05 - Verificação de Idade (16 anos): ${verificarPermissao(16)}`)
console.log(`Questão 05 - Verificação de Idade (18 anos): ${verificarPermissao(18)}`)

// ============================================
// NÍVEL 3: LÓGICA COMPOSTA (AND / OR)
// ============================================

// Questão 06: Sistema de Notas Escolares
// Calcula a média de 3 notas e retorna a situação do aluno
// Aprovado: média >= 7 | Recuperação: 5 <= média < 7 | Reprovado: média < 5
function calcularSituacaoEscolar(nota1, nota2, nota3) {
    const media = (nota1 + nota2 + nota3) / 3
    
    if (media >= 7) {
        return `Aprovado (média: ${media.toFixed(2)})`
    } else if (media >= 5) {
        return `Recuperação (média: ${media.toFixed(2)})`
    } else {
        return `Reprovado (média: ${media.toFixed(2)})`
    }
}

console.log(`Questão 06 - Sistema de Notas (8, 7, 9): ${calcularSituacaoEscolar(8, 7, 9)}`)
console.log(`Questão 06 - Sistema de Notas (6, 5, 6): ${calcularSituacaoEscolar(6, 5, 6)}`)
console.log(`Questão 06 - Sistema de Notas (3, 4, 2): ${calcularSituacaoEscolar(3, 4, 2)}`)

// Questão 07: Validação de Triângulo
// Verifica se três lados podem formar um triângulo válido
// Regra: a soma de dois lados deve ser sempre maior que o terceiro lado
function validarTriangulo(ladoA, ladoB, ladoC) {
    if (ladoA + ladoB > ladoC && ladoA + ladoC > ladoB && ladoB + ladoC > ladoA) {
        return true
    } else {
        return false
    }
}

console.log(`Questão 07 - Validação de Triângulo (3, 4, 5): ${validarTriangulo(3, 4, 5)}`)
console.log(`Questão 07 - Validação de Triângulo (1, 2, 5): ${validarTriangulo(1, 2, 5)}`)

// Questão 08: Calculadora de Descontos
// Aplica desconto de 10% para compras acima de R$ 100,00
function calcularDesconto(valorTotal) {
    if (valorTotal > 100) {
        return `R$ ${(valorTotal * 0.9).toFixed(2)} (desconto aplicado)`
    } else {
        return `R$ ${valorTotal.toFixed(2)} (sem desconto)`
    }
}

console.log(`Questão 08 - Calculadora de Descontos (R$ 80,00): ${calcularDesconto(80)}`)
console.log(`Questão 08 - Calculadora de Descontos (R$ 150,00): ${calcularDesconto(150)}`)

// ============================================
// NÍVEL 4: MINI-CENÁRIOS (DESAFIOS)
// ============================================

// Questão 09: Calculadora de IMC
// Calcula o Índice de Massa Corporal e classifica conforme tabela padrão
// IMC = peso / (altura × altura)
function calcularIMC(peso, altura) {
    const imc = peso / (altura * altura)
    
    if (imc < 18.5) {
        return `Abaixo do peso (IMC: ${imc.toFixed(2)})`
    } else if (imc >= 18.5 && imc <= 24.9) {
        return `Peso normal (IMC: ${imc.toFixed(2)})`
    } else if (imc >= 25.0 && imc <= 29.9) {
        return `Sobrepeso (IMC: ${imc.toFixed(2)})`
    } else {
        return `Obesidade (IMC: ${imc.toFixed(2)})`
    }
}

console.log(`Questão 09 - Calculadora de IMC (90kg, 1.70m): ${calcularIMC(90, 1.70)}`)
console.log(`Questão 09 - Calculadora de IMC (70kg, 1.75m): ${calcularIMC(70, 1.75)}`)
console.log(`Questão 09 - Calculadora de IMC (55kg, 1.65m): ${calcularIMC(55, 1.65)}`)

// Questão 10: Política de Aumento Salarial
// Calcula novo salário com aumento baseado em tempo de serviço e salário atual
// Aumento de 10%: mais de 5 anos OU salário < R$ 2000,00
// Aumento de 5%: demais casos
function calcularNovoSalario(salarioAtual, anosDeCasa) {
    let aumento
    let novoSalario
    
    if (anosDeCasa > 5 || salarioAtual < 2000) {
        novoSalario = salarioAtual * 1.1
        aumento = 10
    } else {
        novoSalario = salarioAtual * 1.05
        aumento = 5
    }
    
    return `R$ ${novoSalario.toFixed(2)} (aumento de ${aumento}%)`
}

console.log(`Questão 10 - Aumento Salarial (R$ 3000, 4 anos): ${calcularNovoSalario(3000, 4)}`)
console.log(`Questão 10 - Aumento Salarial (R$ 1800, 3 anos): ${calcularNovoSalario(1800, 3)}`)
console.log(`Questão 10 - Aumento Salarial (R$ 3000, 6 anos): ${calcularNovoSalario(3000, 6)}`)
