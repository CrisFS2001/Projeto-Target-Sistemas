function contarA(string) {
    let contador = 0;

    // Conta as ocorrências de 'a' ou 'A'
    for (let i = 0; i < string.length; i++) {
        if (string[i].toLowerCase() === 'a') {
            contador++;
        }
    }

    // Exibe o resultado
    if (contador > 0) {
        console.log(`A letra 'a' ocorre ${contador} vezes.`);
    } else {
        console.log("A letra 'a' não foi encontrada.");
    }
}

// Exemplo de string predefinida
let stringTeste = "Abracadabra";
contarA(stringTeste);