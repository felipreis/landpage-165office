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

buttonSalaUm.addEventListener('click',function(){
    salaUm.classList.remove('invisivel');
    salaDois.classList.add('invisivel');
    salaTres.classList.add('invisivel');
    salaQuatro.classList.add('invisivel');
})

buttonSalaDois.addEventListener('click',function(){

    salaUm.classList.add('invisivel');
    salaDois.classList.remove('invisivel');
    salaTres.classList.add('invisivel');
    salaQuatro.classList.add('invisivel');
})

buttonSalaTres.addEventListener('click',function(){
    
    salaUm.classList.add('invisivel');
    salaDois.classList.add('invisivel');
    salaTres.classList.remove('invisivel');
    salaQuatro.classList.add('invisivel');
})

buttonSalaQuatro.addEventListener('click',function(){

    salaUm.classList.add('invisivel');
    salaDois.classList.add('invisivel');
    salaTres.classList.add('invisivel');
    salaQuatro.classList.remove('invisivel');
})
