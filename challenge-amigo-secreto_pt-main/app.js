document.querySelector('h1').textContent = 'Amigo Secreto do Lehi';
document.querySelector('h2').textContent = 'Digite o nome dos seus amigos um  de cada vez.';
let nomeAmigo = [];

function adicionarAmigo(){
    nomeAmigo = botao = document.querySelector('input').value;
    console.log(nomeAmigo);
}