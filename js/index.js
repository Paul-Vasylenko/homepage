document.addEventListener('DOMContentLoaded', function(){
    setTimeout(()=>{
        const jacksonImg = document.querySelector(".header__img");
        jacksonImg.style.opacity = 1;
    }, 200)
})

const sounds = ["auuuu.mp3", "he-heee.mp3", "he-heee2.mp3", "nananana.mp3", "shamone.mp3"]
const soundBtn = document.querySelector(".fixed");
soundBtn.addEventListener('click', soundWork)

function soundWork(){
    let num = Math.round(Math.random() * 4);
    let timeout;
    switch(num){
        case 0:
            timeout=1000;
            break;
        case 1:
            timeout=1200;
            break;
        case 2:
            timeout=1000;
            break;
        case 3:
            timeout=4000;
            break;
        case 4:
            timeout=1000;
            break;
    }
    let path = "../audio/" + sounds[num];
    let sound = new Audio(path);
    sound.play();
    const soundImg = document.querySelector(".fixed__img");
    soundBtn.style.pointerEvents =  "none";
    soundImg.style.border = "none"
    setTimeout(()=>{
        soundBtn.style.pointerEvents =  "auto";
        soundImg.style.border = "1px solid red"
    },timeout)
}


let slideIndex = 1;
showSlides(slideIndex);
function showSlides(n) {
    let slides = document.getElementsByClassName("slide"); // all slides
    let dots = document.getElementsByClassName("dot"); // all dots
    if(n>slides.length) slideIndex = 1;
    if(n<1) slideIndex = slides.length;
    for (slide of slides) {//using for of for collection
        slide.style.display = "none";  
    }    
    for (dot of dots) {
        dot.className = dot.className.replace(" active", "");
    }//deleting active dots
    slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

function plusSlides(n){
    showSlides(slideIndex += n);
}
function currentSlide(n){
    showSlides(slideIndex = n);
}


function hideText(){
    const hidebtn = document.querySelector(".hide__text");
    const hidetext = document.querySelector(".fixed__text");
    hidetext.style.display = "none";
    hidebtn.style.display="none";
    const showbtn = document.querySelector(".show__text");
    showbtn.style.display="block";
}


function showText(){
    const hidebtn = document.querySelector(".hide__text");
    const hidetext = document.querySelector(".fixed__text");
    hidetext.style.display = "block";
    hidebtn.style.display="block";
    const showbtn = document.querySelector(".show__text");
    showbtn.style.display="none";
}
