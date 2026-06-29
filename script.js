const typingText=[
"Developer",
"Gamer",
"Welcome to my profile",
"zidwii"
];

let textIndex=0;
let charIndex=0;

const typing=document.getElementById("typing");

function typeEffect(){

if(charIndex<typingText[textIndex].length){

typing.innerHTML+=typingText[textIndex].charAt(charIndex);

charIndex++;

setTimeout(typeEffect,80);

}else{

setTimeout(()=>{

typing.innerHTML="";

charIndex=0;

textIndex++;

if(textIndex>=typingText.length){

textIndex=0;

}

typeEffect();

},1800);

}

}

window.onload=()=>{

setTimeout(()=>{

document.getElementById("loading").style.display="none";

},1800);

typeEffect();

};

const audio=document.getElementById("audio");

document.getElementById("play").onclick=()=>{

if(audio.paused){

audio.play();

document.getElementById("play").innerHTML="⏸";

}else{

audio.pause();

document.getElementById("play").innerHTML="▶";

}

};

document.getElementById("volume").oninput=(e)=>{

audio.volume=e.target.value/100;

};
