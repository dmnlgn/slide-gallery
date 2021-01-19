let timer = 0;
let indexSlide = 0;
let slides = document.getElementsByClassName("gallery-item-light");
let elementAuto = document.getElementById("checkAuto");

//open lightbox
function openLightbox(){
    document.getElementById("lightbox").style.display = "grid";
}
//close lightbox
function closeLightbox(){
    document.getElementById("lightbox").style.display = "none";
    elementAuto.checked = false;
}

function autoPlay(){
    timer = setTimeout(showSlides, 1000);
}

function showSlides(){
    let i;
    for(i=0; i < slides.length; i++){
        slides[i].style.display = "none";
    }
    indexSlide++;

    if(indexSlide > slides.length) {
        indexSlide = 1;
    }

    slides[indexSlide-1].style.display = "block";

    clearTimeout(timer);
    if(elementAuto.checked === true){
        autoPlay();
    }
}

function currentSlide(n){
    let i;
    indexSlide = n;

    for(i=0; i< slides.length; i++){
        slides[i].style.display = "none";
    }

    if(indexSlide < 1){
        indexSlide = slides.length;
        n = indexSlide;
    }

    slides[n-1].style.display = "block";
    console.log("slider nr " + n);
}

function nextSlide(n){
    let newSlide = indexSlide + n;
    if(newSlide < slides.length+1){
        currentSlide(newSlide);
        elementAuto.checked = false;
    }else{
        currentSlide(1);
        elementAuto.checked = false;
    }
}