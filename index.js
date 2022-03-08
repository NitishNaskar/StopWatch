
// DOM---

var timer=document.getElementById("timer");
var reset=document.getElementById("Reset");
var start=document.getElementById("Start");
var stopp=document.getElementById("Stop");
var img=document.getElementById("clockImg");
var myAudio=document.getElementById("myAudio"); 

//variable declare 

let h=0;
let m=0;
let s=0;
let ms=0;
var idstop;

function resetWatch(){
    h=0;
    m=0;
    s=0;
    ms=0;
    img.src="image/download (2).png";
    printTime();
    start.disabled=false;
    myAudio.pause();
    clearInterval(idstop);
}

function printTime(){
    var str="";
    if(h<10){
        str+="0"+h+" : ";
    }else{
        str+=h+" : ";
    }

    if(m<10){
        str+="0"+m+" : ";
    }else{
        str+=m+" : ";
    }

    if(s<10){
        str+="0"+s+" : ";
    }else{
        str+=s+" : ";
    }

    if(ms<10){
        str+="0"+ms;
    }else{
        str+=ms;
    }

    timer.innerText=str;
}

// this for timer function 

function timerFun(){
    printTime();
    ms++;
    if(ms==11){
        ms=0;
        s++;
        if(s==60){
            m++;
            s=0;
            if(m==60){
                m=0;
                h++;
            }
        }
    }
}

function startWatch(){
    img.src="image/icons8-alarm-clock.gif";
    start.disabled=true;
    myAudio.play();
    idstop=setInterval(timerFun, 100);
}

function stoppWatch(){
    img.src="image/download (2).png";
    start.disabled=false;
    myAudio.pause();
    clearInterval(idstop);
}

reset.addEventListener("click",resetWatch);
start.addEventListener("click",startWatch);
stopp.addEventListener("click",stoppWatch);