function inserirNome (){
    let nomeUsuario= prompt("Qual o seu nome");
    let elementos = document.querySelector("#nome-usuario");
    console.log(elementos);
    elementos.textContent = nomeUsuario;
}

const lista = document.querySelector('#lista');

lista.textContent = linguagens[0];
lista.textContent = linguagens[1];
lista.textContent = linguagem[2];

let aluno1 = {
    nome: 'Raquely'
    Idade: 17,
    anoLetivo: 'Cursando o ensino médio',
    materiasFavoritas:['Matematica II','biologia','educação física']
}
console.log(alunos1.nome);
console.log(aluno1.Idade);
console.log(aluno1.materiasFavoritas);
console.log(aluno1.materiasFavoritas[1]);