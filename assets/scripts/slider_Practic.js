const btnNext = document.querySelector(".btn__next");
const btnprev = document.querySelector(".btn__prev");
let NumberSlide = 1;

function NextSlide() {
    if(NumberSlide === 4){
        NumberSlide = 1
    }else{
        NumberSlide++;
    }
    CheckActiveSlide(NumberSlide);
    SwipeSlide(NumberSlide);
}
function PrevSlide() {
    if(NumberSlide === 1){
        NumberSlide = 4;
    }else{
        NumberSlide--;
    }
    CheckActiveSlide(NumberSlide);
    SwipeSlide(NumberSlide);
}

function CheckActiveSlide(NumberSlide){
    const slideText = document.querySelectorAll("#slide__text");
    const slideName = document.querySelectorAll("#slide__name");
    const slider__nav__line = document.querySelectorAll(".slider__nav__line");
    for (let i = 0; i < slideText.length; i++) {
        if (NumberSlide === i + 1 && !slideText[i].classList.contains("active")) {
            for (let j = 0; j < slideText.length; j++) {
                slideText[j].style.opacity = 0;
                slideText[j].classList.remove("active");
                slideName[j].style.opacity = 0;
                slideName[j].classList.remove("active");
                slider__nav__line[j].style.width = "10px"; 

            }
            slideText[i].classList.add("active");
            slideName[i].classList.add("active");

            let opacity = 0;
            const interval = setInterval(() => {
                if (opacity >= 1) {
                    clearInterval(interval);
                } else {
                    opacity += 0.01;
                    slideText[i].style.opacity = opacity;
                    slideName[i].style.opacity = opacity;

                }
            }, 15);
            slider__nav__line[i].style.width = "50px";
            slider__nav__line[i].style.borderRadius = "5px";
        }
    }
}

function SwipeSlide(NumberSlide){
    const slideIMGS = document.querySelectorAll("#slide__img");
    slideIMGS.forEach(img => {
        img.style.transition = "all 1s linear"; 
        img.style.zIndex = 0; 
    });

    slideIMGS[NumberSlide - 1].style.zIndex = 10;
    if(NumberSlide === 1){
        slideIMGS[0].style.top = '0';
        slideIMGS[0].style.left = '0';
        slideIMGS[0].style = 'z-index: 10';
        slideIMGS[1].style.top = '30px';
        slideIMGS[1].style.left = '40px';
        slideIMGS[2].style.bottom = '40px';
        slideIMGS[2].style.right = '-60px';
        slideIMGS[3].style.top = '50px';
        slideIMGS[3].style.left = '-40px';
    }
    if(NumberSlide === 2){
        slideIMGS[0].style.top = '15px';
        slideIMGS[0].style.left = '30px';
        slideIMGS[1].style = 'z-index: 10';
        slideIMGS[1].style.top = '0px';
        slideIMGS[1].style.left = '0px';
        slideIMGS[2].style.bottom = '50px';
        slideIMGS[2].style.right = '-40px';
        slideIMGS[3].style.top = '35px';
        slideIMGS[3].style.left = '-35px';
    }
    if(NumberSlide === 3){
        slideIMGS[0].style.top = '30px';
        slideIMGS[0].style.left = '30px';
        slideIMGS[1].style.top = '-40px';
        slideIMGS[1].style.left = '50px';
        slideIMGS[2].style = 'z-index: 10';
        slideIMGS[2].style.bottom = '0px';
        slideIMGS[2].style.right = '0px';
        slideIMGS[3].style.top = '50px';
        slideIMGS[3].style.left = '-30px';
    }
    if(NumberSlide === 4){
        slideIMGS[0].style.top = '10px';
        slideIMGS[0].style.left = '10px';
        slideIMGS[1].style.top = '-10px';
        slideIMGS[1].style.left = '30px';
        slideIMGS[2].style.bottom = '-20px';
        slideIMGS[2].style.right = '15px';
        slideIMGS[3].style = 'z-index: 10';
        slideIMGS[3].style.top = '0px';
        slideIMGS[3].style.left = '0px';
    }
    console.log("NumberSlide", NumberSlide)
}

CheckActiveSlide(NumberSlide);
SwipeSlide(NumberSlide);