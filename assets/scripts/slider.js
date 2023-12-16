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
  var intervalId;
  var touchStartX = 0;
  var touchEndX = 0;

  showSlide(currentIndex);

  // Функция для автоматического перелистывания слайдов
  function autoSlide() {
    currentIndex++;
    if (currentIndex >= slides.length) {
      currentIndex = 0;
    }
    showSlide(currentIndex);
  }

  // Запустить автоматическое перелистывание каждые 3 секунды
  intervalId = setInterval(autoSlide, 3000);

  function showSlide(index) {
    for (var i = 0; i < slides.length; i++) {
      slides[i].classList.remove("active");
      dots[i].classList.remove("active");
    }
    slides[index].classList.add("active");
    dots[index].classList.add("active");
  }

  // Обработчик события для точек слайдов
  dotsContainer.addEventListener("click", function(event) {
    if (event.target.classList.contains("dot")) {
      clearInterval(intervalId); // Остановить автоматическое перелистывание
      var index = parseInt(event.target.dataset.index);
      currentIndex = index;
      showSlide(currentIndex);
    }
  });

  // Обработчики событий для свайпов
  slides.forEach(function(slide) {
    slide.addEventListener("touchstart", function(event) {
      touchStartX = event.touches[0].clientX;
    });

    slide.addEventListener("touchmove", function(event) {
      touchEndX = event.touches[0].clientX;
    });

    slide.addEventListener("touchend", function(event) {
      var touchDiff = touchStartX - touchEndX;
      if (touchDiff > 0 && !event.target.closest("a")) {
        // Свайп влево и не нажатие на ссылку
        clearInterval(intervalId); // Остановить автоматическое перелистывание
        currentIndex++;
        if (currentIndex >= slides.length) {
          currentIndex = 0;
        }
        showSlide(currentIndex);
      } else if (touchDiff < 0 && !event.target.closest("a")) {
        // Свайп вправо и не нажатие на ссылку
        clearInterval(intervalId); // Остановить автоматическое перелистывание
        currentIndex--;
        if (currentIndex < 0) {
          currentIndex = slides.length - 1;
        }
        showSlide(currentIndex);
      }
    });
  });

  // Обработчик события для ссылок внутри слайдов
  slides.forEach(function(slide) {
    var links = slide.querySelectorAll("a");
    links.forEach(function(link) {
      link.addEventListener("click", function(event) {
        event.stopPropagation();
        window.location.href = event.target.href; // Переход по ссылке
      });
    });
  });
});
