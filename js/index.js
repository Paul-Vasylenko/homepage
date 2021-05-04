//IMAGE APPEAR ANIMATION
document.addEventListener('DOMContentLoaded', function(){
    setTimeout(()=>{
        const jacksonImg = document.querySelector(".header__img");
        jacksonImg.style.opacity = 0.6;
    }, 200)
})

const sounds = ["auuuu.mp3", "he-heee.mp3", "he-heee2.mp3", "nananana.mp3", "shamone.mp3"]
const soundBtn = document.querySelector(".fixed");
soundBtn.addEventListener('click', soundWork)
//RIGHT BOTTOM CONER BUTTON

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
    let path = "audio/" + sounds[num];
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
//SLIDER-INTERVIEW


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

//SLIDER-TIMELINE

const slideValue = document.querySelector(".rangeValue span");
const inputSlide = document.querySelector(".field input");
const infoDate = document.querySelector(".info__date");
infoDate.innerText = inputSlide.value;
inputSlide.oninput = (()=>{
    let value = inputSlide.value;
    slideValue.textContent = value;
    if(window.screen.width>=1360){
        slideValue.style.left = 8.3 + Math.abs((1958-value)*1.32) + "%";
    }
    else if(window.screen.width>=1150){
        slideValue.style.left = 9.9 + Math.abs((1958-value)*1.27) + "%";
    }
    else if(window.screen.width>=1000){
        slideValue.style.left = 9.9 + Math.abs((1958-value)*1.27) + "%";
    }
    
    infoDate.innerText = inputSlide.value;


    const newInfo = "d"+value;
    const toDisplay = document.getElementsByClassName(newInfo);
    const dates = document.getElementsByClassName("date");
    for(date of dates){
        date.style.display = "none";
    }
    if(toDisplay.length!=0){
        for(info of toDisplay){
            info.style.display="block";
        }
    }
    
})
//MUSIC BLOCK

const classes = ["billie_jean","dangerous","remember_the_time","rock_with_you",
"slave_to_the", "smooth_criminal","the_way_you_make","thriller","who_is_it"];
const audiosStr = ["songs/billie_jean.mp3","songs/dangerous.mp3",
"songs/remember_the_time.mp3","songs/rock_with_you.mp3","songs/slave_to_the.mp3",
"songs/smooth_criminal.mp3","songs/the_way_you_make.mp3","songs/thriller.mp3",
"songs/who_is_it.mp3"]
const audios = [new Audio("songs/billie_jean.mp3"),new Audio("songs/dangerous.mp3"),
new Audio("songs/remember_the_time.mp3"),new Audio("songs/rock_with_you.mp3"),new Audio("songs/slave_to_the.mp3"),
new Audio("songs/smooth_criminal.mp3"),new Audio("songs/the_way_you_make.mp3"),new Audio("songs/thriller.mp3"),
new Audio("songs/who_is_it.mp3")]


const musics = document.querySelectorAll(".song");
for(let musicblock of musics){
   musicblock.onclick = ()=>{
       
       for(let item of classes){
        for(let i=0;i<9;i++){
        document.querySelector(".song."+item+" .song-bg").style.opacity=0.6;
        document.querySelector(".song."+item+" img").style.opacity=0.2;
        document.querySelector(".song."+item+" .song-name").style.color = "inherit";
        }
           if(musicblock.classList.contains(item)){
               let toPlay;
               for(let i=0;i<9;i++){
                   if(audiosStr[i].includes(item)){
                    document.querySelector(".song."+item+" .song-bg").style.opacity=0;
                    document.querySelector(".song."+item+" img").style.opacity=1;
                    document.querySelector(".song."+item+" .song-name").style.color = "#3988ff";
                    toPlay=audios[i];
                   }else{
                        audios[i].pause();
                   }
                }
                toPlay.play();
           }
       }
   }
   musicblock.onmouseover = (e) => {
    const div = e.srcElement;
    const divClasses = div.classList;
    const domDivImg = document.querySelector(".song."+divClasses[1]+" img");
    domDivImg.style.opacity=0.8;
    const domDivBg = document.querySelector(".song."+divClasses[1]+" .song-bg");
    domDivBg.style.opacity=0;
    const domDivP = document.querySelector(".song."+divClasses[1]+" h3");
    domDivP.style.color = "#3988ff"; 
   }
}
