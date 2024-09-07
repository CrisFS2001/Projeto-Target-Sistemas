// Definição de estados iniciais das lâmpadas
const lampadas = [
    { id: 1, estado: 'desligada', temperatura: 'fria' },
    { id: 2, estado: 'desligada', temperatura: 'fria' },
    { id: 3, estado: 'desligada', temperatura: 'fria' }
];

// Função para simular a ação dos interruptores
function acionarInterruptores() {
    // Ligar o primeiro interruptor e aguardar
    console.log("Ligar o primeiro interruptor e aguardar 10 minutos...");
    lampadas[0].estado = 'ligada';
    lampadas[0].temperatura = 'quente';

    // Desligar o primeiro interruptor e ligar o segundo interruptor
    console.log("Desligar o primeiro interruptor e ligar o segundo interruptor...");
    lampadas[1].estado = 'ligada';

    // Simular a visita às lâmpadas
    console.log("Visitando as lâmpadas...");
    return lampadas;
}

// Função para identificar as lâmpadas
function identificarLampadas(lampadas) {
    console.log("Identificação das lâmpadas:");
    lampadas.forEach(lampada => {
        if (lampada.estado === 'ligada' && lampada.temperatura === 'quente') {
            console.log(`Lâmpada ${lampada.id} é controlada pelo primeiro interruptor.`);
        } else if (lampada.estado === 'ligada') {
            console.log(`Lâmpada ${lampada.id} é controlada pelo segundo interruptor.`);
        } else {
            console.log(`Lâmpada ${lampada.id} é controlada pelo terceiro interruptor.`);
        }
    });
}

// Executar a simulação
const lampadasAtualizadas = acionarInterruptores();
identificarLampadas(lampadasAtualizadas);