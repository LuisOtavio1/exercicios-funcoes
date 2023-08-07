function corrigirProva(prova) {
    let contador = 0;
    for(questao of prova.questoes) {
        if (questao.resposta == questao.correta) {
            contador++;
        }
    }
    return `O aluno ${prova.aluno} acertou ${contador} questões e tirou nota ${contador * 2} na prova`;
}

const prova = {
    aluno: "João",
    materia: "Português",
    valor: 10,
    questoes: [
        {
            resposta: "a",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        },
        {
            resposta: "e",
            correta: "b"
        },
        {
            resposta: "b",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        }
    ]
};

console.log(corrigirProva(prova));
