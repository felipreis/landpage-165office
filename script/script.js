function teste(){
    console.log("testando js");
}

teste();

const buttonSalaUm = document.getElementById("btnsala1");
const buttonSalaDois = document.getElementById("btnsala2");
const buttonSalaTres = document.getElementById("btnsala3");
const buttonSalaQuatro = document.getElementById("btnsala4");

const salaUm = document.getElementById("sala1");
const salaDois = document.getElementById("sala2");
const salaTres = document.getElementById("sala3");
const salaQuatro = document.getElementById("sala4");

buttonSalaUm.addEventListener('mouseover',function(){
    salaUm.classList.remove('invisivel');
    salaDois.classList.add('invisivel');
    salaTres.classList.add('invisivel');
    salaQuatro.classList.add('invisivel');
})

buttonSalaDois.addEventListener('mouseover',function(){

    salaUm.classList.add('invisivel');
    salaDois.classList.remove('invisivel');
    salaTres.classList.add('invisivel');
    salaQuatro.classList.add('invisivel');
})

buttonSalaTres.addEventListener('mouseover',function(){
    
    salaUm.classList.add('invisivel');
    salaDois.classList.add('invisivel');
    salaTres.classList.remove('invisivel');
    salaQuatro.classList.add('invisivel');
})

buttonSalaQuatro.addEventListener('mouseover',function(){

    salaUm.classList.add('invisivel');
    salaDois.classList.add('invisivel');
    salaTres.classList.add('invisivel');
    salaQuatro.classList.remove('invisivel');
})

const inicio = document.getElementById("btninicio");
const salas = document.getElementById("btnsalas");
const servicos = document.getElementById("btnservicos");
const contato = document.getElementById("btncontato");

inicio.addEventListener("click", function(){
    window.scrollTo({
        top:document.getElementsByTagName("nav").offsetTop,
        behavior:"smooth"
    })
})

salas.addEventListener("click", function(){
    window.scrollTo({
        top:document.getElementById('salaTop').offsetTop,
        behavior:"smooth"
    })
})

servicos.addEventListener("click", function(){
    window.scrollTo({
        top:document.getElementById('servicosTop').offsetTop,
        behavior:"smooth"
    })
})

contato.addEventListener("click", function(){
    window.scrollTo({
        top:document.getElementById('contatoTop').offsetTop,
        behavior:"smooth"
    })
})

document.getElementById('foto-sala 1.0').addEventListener('mouseover', function() {
    var img = document.getElementById('foto-sala1-grande');
    img.src = './assets/imagens/salafrentecheia.jpg';
});

document.getElementById('foto-sala 1.1').addEventListener('mouseover', function() {
    var img = document.getElementById('foto-sala1-grande');
    img.src = './assets/imagens/fotosala.jpg';
});

document.getElementById('foto-sala 1.2').addEventListener('mouseover', function() {
    var img = document.getElementById('foto-sala1-grande');
    img.src = './assets/imagens/salafrentecheia.jpg';
});

document.getElementById('foto-sala 1.3').addEventListener('mouseover', function() {
    var img = document.getElementById('foto-sala1-grande');
    img.src = './assets/imagens/fotosala.jpg';
});

document.getElementById('foto-sala 1.4').addEventListener('mouseover', function() {
    var img = document.getElementById('foto-sala1-grande');
    img.src = './assets/imagens/salafrentecheia.jpg';
});

