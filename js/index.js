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
    let num = Math.ceil(Math.random() * 4);
    let path = "../audio/" + sounds[num];
    let sound = new Audio(path);
    sound.play();
    const soundImg = document.querySelector(".fixed__img");
    soundBtn.style.pointerEvents =  "none";
    soundImg.style.border = "none"
    setTimeout(()=>{
        soundBtn.style.pointerEvents =  "auto";
        soundImg.style.border = "1px solid red"
    },3900)
}
