function findNextElement() {
    // a) Sequência: 1, 3, 5, 7, ___ (Números ímpares)
    const seqA = [1, 3, 5, 7];
    const nextA = seqA[seqA.length - 1] + 2;

    // b) Sequência: 2, 4, 8, 16, 32, 64, ____ (Potências de 2 começando de 2)
    const seqB = [2, 4, 8, 16, 32, 64];
    const nextB = seqB[seqB.length - 1] * 2;

    // c) Sequência: 0, 1, 4, 9, 16, 25, 36, ____ (Quadrados dos números naturais)
    const seqC = [0, 1, 4, 9, 16, 25, 36];
    const nextC = (Math.sqrt(seqC[seqC.length - 1]) + 1) ** 2;

    // d) Sequência: 4, 16, 36, 64, ____ (Quadrados dos números pares)
    const seqD = [4, 16, 36, 64];
    const nextD = ((Math.sqrt(seqD[seqD.length - 1]) / 2) + 1) ** 2 * 4;

    // e) Sequência: 1, 1, 2, 3, 5, 8, ____ (Sequência de Fibonacci)
    const seqE = [1, 1, 2, 3, 5, 8];
    const nextE = seqE[seqE.length - 1] + seqE[seqE.length - 2];

    // f) Sequência: 2, 10, 12, 16, 17, 18, 19, ____ (Padrão irregular, parece ser uma sequência crescente com alguns saltos)
    const seqF = [2, 10, 12, 16, 17, 18, 19];
    const nextF = seqF[seqF.length - 1] + 1;

    console.log('Próximo elemento de (a):', nextA);
    console.log('Próximo elemento de (b):', nextB);
    console.log('Próximo elemento de (c):', nextC);
    console.log('Próximo elemento de (d):', nextD);
    console.log('Próximo elemento de (e):', nextE);
    console.log('Próximo elemento de (f):', nextF);
}

findNextElement();