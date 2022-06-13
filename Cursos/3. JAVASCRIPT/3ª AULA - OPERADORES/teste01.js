const alunos = [
    {
        nome: 'Jorge',
        nota: 10,
        turma: '1B',
    },
    {
        nome: 'Henrique',
        nota: 8,
        turma: '1B',
    },
    {
        nome: 'H. silva',
        nota: 3,
        turma: '2C',
    },
];

function alunosAprovados( arr, media){
    let aprovados = [];

    for ( let i = 0; i < arr.lenght; i++){
        const {nome, nota} = arr[i];

        if (nota >= media){
            aprovados.push(nome);
        }
    }
    return aprovados;
 }
console.log(alunosAprovados(alunos, 5));