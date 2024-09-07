function pertenceFibonacci(num) {
    let fib1 = 0;
    let fib2 = 1;
    let proximoFib = fib1 + fib2;

    // Verifica se o número informado é 0 ou 1, pois pertencem à sequência
    if (num === 0 || num === 1) {
        console.log(`${num} pertence à sequência de Fibonacci.`);
        return;
    }

    // Gera a sequência de Fibonacci até que o próximo valor seja maior ou igual ao número informado
    while (proximoFib <= num) {
        if (proximoFib === num) {
            console.log(`${num} pertence à sequência de Fibonacci.`);
            return;
        }
        // Atualiza os valores para continuar a sequência
        fib1 = fib2;
        fib2 = proximoFib;
        proximoFib = fib1 + fib2;
    }

    // Se o loop terminar e não encontrar o número, ele não pertence à sequência
    console.log(`${num} não pertence à sequência de Fibonacci.`);
}

// Exemplo de uso
let numero = 21; // Informe aqui o número que você quer verificar
pertenceFibonacci(numero);