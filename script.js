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