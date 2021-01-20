var vid = document.getElementById("playingVideo");
var pos = 1;
var puntos = 0;
var multiplicador = 1;
var racha = 0;
var name;
var score;

function cambio(){
    name = document.getElementById("nombre_usuario").value;
    window.location.assign("/content.html")
}

function displayname(){
    document.getElementById("user-field").innerHTML = "Bienvenido "+name;
}

function update(event) {
    var video_time = vid.currentTime;
    //console.log("puntos actuales: " + puntos);
    //console.log("el nombre es " +name);
    //console.log(video_time);
    if (video_time >= vid.duration - 5) {
        show();
    } else {
        hide();
    }
}

function capt1(){
    vid.src = "/Videos/Escena1.mp4"
    vid.play();
    hide();
    pos = 1;
}

function capt2(){
    vid.src = "/Videos/escena2.mp4"
    vid.play();
    hide();
    pos = 2;
}

function capt3(){
    vid.src = "/Videos/escena3.mp4"
    vid.play();
    hide();
    pos = 3;
}

function correcto() {
    console.log("correcta");
    if (pos == 1) {
        vid.src = "/Videos/escena2.mp4"
        vid.play();
        hide();
        pos = 2;
        console.log("suma :" + puntos)
    } else if (pos == 2) {
        vid.src = "/Videos/escena3.mp4"
        vid.play();
        hide();
        pos = 3;
    } else if (pos == 3) {
        vid.src = "/Videos/escenaBuena3_1.mp4"
        vid.play();
        hide();
        pos = 4;
    }
    puntos+=100;
    racha++;
    console.log("estapa :"+pos);
    console.log("epa "+racha);
    puntaje();     
}

function incorrecto(comp) {
    let id = comp.id;
    console.log(id)
    if (pos == 1 && id == "incorrecta-1") {
        vid.src = "/Videos/Mala1_1.mp4"
        vid.play();
        hide();
    } else if (pos == 1 && id == "incorrecta-2") {
        vid.src = "/Videos/Mala1_2.mp4"
        vid.play();
        hide();
    } else if (pos == 2 && id == "incorrecta-1") {
        vid.src = "/Videos/Mala2_1.mp4"
        vid.play();
        hide();
    } else if (pos == 2 && id == "incorrecta-2") {
        vid.src = "/Videos/Mala2_2.mp4"
        vid.play();
        hide();
    } else if (pos == 3 && id == "incorrecta-1") {
        vid.src = "/Videos/escenaMala3_1.mp4"
        vid.play();
        hide();
    } else if (pos == 3 && id == "incorrecta-2") {
        vid.src = "/Videos/escena3.mp4"
        vid.play();
        hide();
    }

    if(racha<1)
    {
        racha = 0;
    }else if(racha>=1){
        racha--;
    }
    console.log("pailos "+racha);
    puntaje();
}

function hide() {
    document.getElementById("o-options-" + pos).setAttribute("class", "hide");
}

function show() {
    document.getElementById("o-options-" + pos).setAttribute("class", "show");
}

function puntaje() {
    if (racha == 1) {
        multiplicador = multiplicador * 1;
    } else if (racha == 2) {
        multiplicador = multiplicador * 2;
    } else if (racha == 3) {
        multiplicador = multiplicador * 3
    }
    
    let score = puntos * multiplicador;

    console.log("Multiplicador: "+multiplicador +" Puntos: "+puntos);

    console.log("puntaje a mostrar " + score);
    document.getElementById("puntaje").innerHTML = score;
}

$('.o-btn-bars').click(function(){
    $(this).toggleClass("click");
    $('.sidebar').toggleClass("expand");
});



/*
function create(){
var btn_1_1 = document.createElement("button");
var texto = document.createTextNode("Goblin");
btn_1_1.appendChild(texto);
btn_1_1.className ="btn btn-primary btn-lg";
btn_1_1.type="button";
document.getElementById("boton-goblin").appendChild(btn_1_1);
}*/