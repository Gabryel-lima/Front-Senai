// ============================================
// 1. ESTRUTURAS DE DECISÃO (if, else, switch)
// ============================================

// Exercício 1: Par ou Ímpar
function parOuImpar(numero) {
    if (numero % 2 === 0) {
        return 'par'
    } else {
        return 'ímpar'
    }
}

console.log(`Exercício 1 - Par ou Ímpar (7): ${parOuImpar(7)}`)
console.log(`Exercício 1 - Par ou Ímpar (8): ${parOuImpar(8)}`)

// Exercício 2: Maior de Idade
function maiorDeIdade(anoNascimento) {
    const anoAtual = new Date().getFullYear()
    const idade = anoAtual - anoNascimento
    
    if (idade >= 18) {
        return `Já atingiu a maioridade (${idade} anos)`
    } else {
        return `Não atingiu a maioridade (${idade} anos)`
    }
}

console.log(`Exercício 2 - Maior de Idade (2005): ${maiorDeIdade(2005)}`)
console.log(`Exercício 2 - Maior de Idade (2010): ${maiorDeIdade(2010)}`)

// Exercício 3: Aprovação Escolar
function aprovacaoEscolar(nota1, nota2, nota3) {
    const media = (nota1 + nota2 + nota3) / 3
    
    if (media >= 7) {
        return `Aprovado (média: ${media.toFixed(2)})`
    } else if (media >= 5 && media < 7) {
        return `Recuperação (média: ${media.toFixed(2)})`
    } else {
        return `Reprovado (média: ${media.toFixed(2)})`
    }
}

console.log(`Exercício 3 - Aprovação Escolar (8, 7, 9): ${aprovacaoEscolar(8, 7, 9)}`)
console.log(`Exercício 3 - Aprovação Escolar (6, 5, 6): ${aprovacaoEscolar(6, 5, 6)}`)
console.log(`Exercício 3 - Aprovação Escolar (4, 3, 5): ${aprovacaoEscolar(4, 3, 5)}`)

// Exercício 4: Calculadora Básica
function calculadoraBasica(num1, num2, operador) {
    switch (operador) {
        case '+':
            return num1 + num2
        case '-':
            return num1 - num2
        case '*':
            return num1 * num2
        case '/':
            if (num2 === 0) {
                return 'Erro: Divisão por zero!'
            }
            return num1 / num2
        default:
            return 'Erro: Operador inválido!'
    }
}

console.log(`Exercício 4 - Calculadora (10 + 5): ${calculadoraBasica(10, 5, '+')}`)
console.log(`Exercício 4 - Calculadora (10 - 5): ${calculadoraBasica(10, 5, '-')}`)
console.log(`Exercício 4 - Calculadora (10 * 5): ${calculadoraBasica(10, 5, '*')}`)
console.log(`Exercício 4 - Calculadora (10 / 5): ${calculadoraBasica(10, 5, '/')}`)

// Exercício 5: Classificação de Triângulos
function classificarTriangulo(a, b, c) {
    // Verificar se pode formar triângulo
    if (a + b > c && a + c > b && b + c > a) {
        // Classificar o triângulo
        if (a === b && b === c) {
            return 'Equilátero (todos os lados iguais)'
        } else if (a === b || a === c || b === c) {
            return 'Isósceles (dois lados iguais)'
        } else {
            return 'Escaleno (todos os lados diferentes)'
        }
    } else {
        return 'Não forma um triângulo'
    }
}

console.log(`Exercício 5 - Triângulo (5, 5, 5): ${classificarTriangulo(5, 5, 5)}`)
console.log(`Exercício 5 - Triângulo (5, 5, 6): ${classificarTriangulo(5, 5, 6)}`)
console.log(`Exercício 5 - Triângulo (3, 4, 5): ${classificarTriangulo(3, 4, 5)}`)
console.log(`Exercício 5 - Triângulo (1, 2, 5): ${classificarTriangulo(1, 2, 5)}`)

// ============================================
// 2. LAÇOS DE REPETIÇÃO (for, while)
// ============================================

// Exercício 1: Contagem Regressiva
function contagemRegressiva() {
    console.log('Exercício 1 - Contagem Regressiva:')
    for (let i = 10; i >= 0; i--) {
        console.log(`  ${i}`)
        // Nota: Para pausa de 1 segundo, seria necessário usar setTimeout ou outras APIs assíncronas
        // Em Node.js, pode-se usar: await new Promise(resolve => setTimeout(resolve, 1000))
    }
}
contagemRegressiva()

// Exercício 2: Tabuada Dinâmica
function tabuadaDinamica(numero) {
    console.log(`Exercício 2 - Tabuada do ${numero}:`)
    for (let i = 1; i <= 10; i++) {
        console.log(`  ${numero} x ${i} = ${numero * i}`)
    }
}
tabuadaDinamica(7)

// Exercício 3: Soma de Intervalo
function somaIntervalo(inicio, fim) {
    let soma = 0
    for (let i = inicio; i <= fim; i++) {
        soma += i
    }
    return soma
}

console.log(`Exercício 3 - Soma de Intervalo (1 a 10): ${somaIntervalo(1, 10)}`)
console.log(`Exercício 3 - Soma de Intervalo (5 a 15): ${somaIntervalo(5, 15)}`)

// Exercício 4: Apenas Pares
function apenasPares() {
    console.log('Exercício 4 - Números Pares de 1 a 100:')
    const pares = []
    for (let i = 1; i <= 100; i++) {
        if (i % 2 === 0) {
            pares.push(i)
        }
    }
    console.log(`  Total: ${pares.length} números pares`)
    console.log(`  Primeiros 10: ${pares.slice(0, 10).join(', ')}...`)
}
apenasPares()

// Exercício 5: Média de N Números
function mediaNNumeros(...numeros) {
    // Simula entrada de números até digitar 0
    // Exemplo: médiaNNumeros(5, 10, 15, 20, 0)
    let soma = 0
    let quantidade = 0
    
    for (let num of numeros) {
        if (num === 0) {
            break
        }
        soma += num
        quantidade++
    }
    
    if (quantidade === 0) {
        return 0
    }
    
    return soma / quantidade
}

console.log(`Exercício 5 - Média de N Números (5, 10, 15, 20, 0): ${mediaNNumeros(5, 10, 15, 20, 0)}`)
console.log(`Exercício 5 - Média de N Números (8, 12, 4, 0): ${mediaNNumeros(8, 12, 4, 0)}`)

// ============================================
// 3. DESAFIOS INTEGRADOS (Lógica Combinada)
// ============================================

// Exercício 1: Validação de Senha
function validacaoSenha(senhaCorreta, tentativas) {
    const maxTentativas = 3
    let tentativasRestantes = maxTentativas
    
    for (let tentativa of tentativas) {
        tentativasRestantes--
        if (tentativa === senhaCorreta) {
            return 'Acesso Permitido'
        }
        if (tentativasRestantes === 0) {
            return 'Conta Bloqueada'
        }
    }
    
    return 'Conta Bloqueada'
}

console.log(`Exercício 1 - Validação Senha (correta): ${validacaoSenha('1234', ['1111', '2222', '1234'])}`)
console.log(`Exercício 1 - Validação Senha (bloqueada): ${validacaoSenha('1234', ['1111', '2222', '3333'])}`)

// Exercício 2: Números Primos
function ehPrimo(numero) {
    if (numero < 2) {
        return false
    }
    
    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            return false
        }
    }
    
    return true
}

function verificarNumeroPrimo(numero) {
    if (ehPrimo(numero)) {
        return `${numero} é um número primo`
    } else {
        return `${numero} não é um número primo`
    }
}

console.log(`Exercício 2 - Número Primo (7): ${verificarNumeroPrimo(7)}`)
console.log(`Exercício 2 - Número Primo (10): ${verificarNumeroPrimo(10)}`)
console.log(`Exercício 2 - Número Primo (13): ${verificarNumeroPrimo(13)}`)
console.log(`Exercício 2 - Número Primo (15): ${verificarNumeroPrimo(15)}`)

// Exercício 3: Sequência de Fibonacci
function sequenciaFibonacci(n) {
    if (n <= 0) {
        return []
    }
    if (n === 1) {
        return [0]
    }
    if (n === 2) {
        return [0, 1]
    }
    
    const fib = [0, 1]
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2]
    }
    
    return fib
}

console.log(`Exercício 3 - Fibonacci (10 termos): ${sequenciaFibonacci(10).join(', ')}`)
console.log(`Exercício 3 - Fibonacci (15 termos): ${sequenciaFibonacci(15).join(', ')}`)

// Exercício 4: O Jogo da Adivinhação
function jogoAdivinhacao(numeroSecreto, palpites) {
    // Simula o jogo com uma lista de palpites
    // Em um programa real, os palpites viriam de entrada do usuário
    
    for (let palpite of palpites) {
        if (palpite === numeroSecreto) {
            return `Parabéns! Você acertou o número ${numeroSecreto}!`
        } else if (palpite < numeroSecreto) {
            console.log(`  Palpite ${palpite}: O número correto é MAIOR`)
        } else {
            console.log(`  Palpite ${palpite}: O número correto é MENOR`)
        }
    }
    
    return `Fim do jogo. O número secreto era ${numeroSecreto}`
}

console.log('Exercício 4 - Jogo da Adivinhação:')
console.log(jogoAdivinhacao(25, [10, 30, 20, 25]))

// Exercício 5: Fatorial
function fatorial(numero) {
    if (numero < 0) {
        return 'Erro: Não existe fatorial de número negativo'
    }
    if (numero === 0 || numero === 1) {
        return 1
    }
    
    let resultado = 1
    for (let i = 2; i <= numero; i++) {
        resultado *= i
    }
    
    return resultado
}

console.log(`Exercício 5 - Fatorial (5): ${fatorial(5)}`)
console.log(`Exercício 5 - Fatorial (0): ${fatorial(0)}`)
console.log(`Exercício 5 - Fatorial (7): ${fatorial(7)}`)
