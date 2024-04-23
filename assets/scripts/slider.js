document.addEventListener("DOMContentLoaded", function() {
  var slides = document.querySelectorAll(".slide");
  var dotsContainer = document.querySelector(".dots");
  var dots = [];

  for (var i = 0; i < slides.length; i++) {
    var dot = document.createElement("div");
    dot.className = "dot";
    dot.dataset.index = i;
    dotsContainer.appendChild(dot);
    dots.push(dot);
  }

  var currentIndex = 0;
  showSlide(currentIndex);


const btn_prev = document.querySelector(".btn_prev");
const btn_next = document.querySelector(".btn_next")

  btn_prev.addEventListener("click", function() {
    if(currentIndex === 0){
      currentIndex = 5
      showSlide(currentIndex);
    }else{
      currentIndex--;
      console.log(currentIndex)
      showSlide(currentIndex);
    }
  })
  
  btn_next.addEventListener("click", function() {
    if(currentIndex === 5){
      currentIndex = 0
      showSlide(currentIndex);
    }else{
      currentIndex++;
      console.log(currentIndex)
      showSlide(currentIndex);
    }
  })


  function showSlide(index) {
    for (var i = 0; i < slides.length; i++) {
      slides[i].classList.remove("active");
      dots[i].classList.remove("active");
    }
    slides[index].classList.add("active");
    dots[index].classList.add("active");
  }
});
 
