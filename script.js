function inserirNome (){
    let nomeUsuario= prompt("Qual o seu nome");
    let elementos = document.querySelector("#nome-usuario");
    console.log(elementos);
    elementos.textContent = nomeUsuario;
}