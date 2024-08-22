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


/*alterando imagens sala #1 */

document.getElementById('foto-sala 1.0').addEventListener('mouseover', function() {
    var img = document.getElementById('foto-sala1-grande');
    img.src = './assets/imagens/sala1/img1.jpg';
});

document.getElementById('foto-sala 1.1').addEventListener('mouseover', function() {
    var img = document.getElementById('foto-sala1-grande');
    img.src = './assets/imagens/sala1/img2.jpg';
});

document.getElementById('foto-sala 1.2').addEventListener('mouseover', function() {
    var img = document.getElementById('foto-sala1-grande');
    img.src = './assets/imagens/sala1/img3.jpg';
});

document.getElementById('foto-sala 1.3').addEventListener('mouseover', function() {
    var img = document.getElementById('foto-sala1-grande');
    img.src = './assets/imagens/sala1/img4.jpg';
});

document.getElementById('foto-sala 1.4').addEventListener('mouseover', function() {
    var img = document.getElementById('foto-sala1-grande');
    img.src = './assets/imagens/sala1/img5.jpg';
});

/*alterando imagens sala #2 */

document.getElementById('foto-sala 2.0').addEventListener('mouseover', function() {
    var img = document.getElementById('foto-sala2-grande');
    img.src = './assets/imagens/sala2/img1.jpg';
});

document.getElementById('foto-sala 2.1').addEventListener('mouseover', function() {
    var img = document.getElementById('foto-sala2-grande');
    img.src = './assets/imagens/sala2/img2.jpg';
});

document.getElementById('foto-sala 2.2').addEventListener('mouseover', function() {
    var img = document.getElementById('foto-sala2-grande');
    img.src = './assets/imagens/sala2/img3.jpg';
});

document.getElementById('foto-sala 2.3').addEventListener('mouseover', function() {
    var img = document.getElementById('foto-sala2-grande');
    img.src = './assets/imagens/sala2/img4.jpg';
});

document.getElementById('foto-sala 2.4').addEventListener('mouseover', function() {
    var img = document.getElementById('foto-sala2-grande');
    img.src = './assets/imagens/sala2/img5.jpg';
});