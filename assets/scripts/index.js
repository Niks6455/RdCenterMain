//функция плавного скрола -------------------------------------------------------------------
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const href = this.getAttribute('href');
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const offset = targetElement.offsetTop;
      window.scrollTo({
        top: offset,
        behavior: 'smooth'
      });
    }
  });
});
//функция добавлении названия файла -------------------------------------------------------------------
var FileName = document.querySelector(".input__file__label");
FileName.style.color = "#b0b0b0"
function showFileName(input) {
  var file = input.files[0];
  var fileName = file.name;
  var targetBlock = document.getElementById("input__file__label");
  targetBlock.textContent = fileName;
  targetBlock.style.color = "#000"
}

// подчеркивание элементов меню -------------------------------------------------------------------
var menu1 = document.getElementById("menu1");
var menu2 = document.getElementById("menu2");
var menu3 = document.getElementById("menu3");
var menu4 = document.getElementById("menu4");
// Определяем функцию для отслеживания позиции прокрутки страницы
function trackScroll() {
  var scrollPosition = window.scrollY || document.documentElement.scrollTop;
  var headerHeight = 150;
  if (window.innerWidth < 990) {
    var aboutModuleHeight = document.getElementById('about').offsetHeight;
    var servicesModuleHeight = document.getElementById('servicesmob').offsetHeight;
    var projectsModuleHeight = document.getElementById('projectsmob').offsetHeight;
  }
  else {
    var aboutModuleHeight = document.getElementById('about').offsetHeight;
    var servicesModuleHeight = document.getElementById('services').offsetHeight+600;
    var projectsModuleHeight = document.getElementById('projects').offsetHeight;
  }

  var contactModuleHeight = document.getElementById('contact').offsetHeight;
  var pageHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
  
  if (window.innerWidth > 990) {
    if (scrollPosition < aboutModuleHeight + pageHeight - headerHeight) {
      menu1.style.borderBottom = "1px solid #31D8B0";
      menu2.style.borderBottom = "none";
      menu3.style.borderBottom = "none";
      menu4.style.borderBottom = "none";
    } else if (scrollPosition < aboutModuleHeight + servicesModuleHeight - headerHeight) {
      menu2.style.borderBottom = "1px solid #31D8B0";
      menu1.style.borderBottom = "none";
      menu3.style.borderBottom = "none";
      menu4.style.borderBottom = "none";
    } else if (scrollPosition < aboutModuleHeight + servicesModuleHeight + projectsModuleHeight) {
      menu3.style.borderBottom = "1px solid #31D8B0";
      menu1.style.borderBottom = "none";
      menu2.style.borderBottom = "none";
      menu4.style.borderBottom = "none";
    }
    else if (scrollPosition > 3600) {
      menu1.style.borderBottom = "none";
      menu2.style.borderBottom = "none";
      menu3.style.borderBottom = "none";
      menu4.style.borderBottom = "1px solid #31D8B0";
    }
    if (scrollPosition <= headerHeight) {
      menu1.style.borderBottom = "none";
      menu2.style.borderBottom = "none";
      menu3.style.borderBottom = "none";
      menu4.style.borderBottom = "none";
    }
  } else {
    if (scrollPosition < aboutModuleHeight + 600) {
      menu1.style.borderBottom = "1px solid #31D8B0";
      menu2.style.borderBottom = "none";
      menu3.style.borderBottom = "none";
      menu4.style.borderBottom = "none";
    } else if (scrollPosition < aboutModuleHeight + servicesModuleHeight + 600) {
      menu2.style.borderBottom = "1px solid #31D8B0";
      menu1.style.borderBottom = "none";
      menu3.style.borderBottom = "none";
      menu4.style.borderBottom = "none";
    } else if (scrollPosition < aboutModuleHeight + servicesModuleHeight + projectsModuleHeight + 600) {
      menu3.style.borderBottom = "1px solid #31D8B0";
      menu1.style.borderBottom = "none";
      menu2.style.borderBottom = "none";
      menu4.style.borderBottom = "none";
    } else {
      menu1.style.borderBottom = "none";
      menu2.style.borderBottom = "none";
      menu3.style.borderBottom = "none";
      menu4.style.borderBottom = "1px solid #31D8B0";
    }
    if (scrollPosition <= headerHeight) {
      menu1.style.borderBottom = "none";
      menu2.style.borderBottom = "none";
      menu3.style.borderBottom = "none";
      menu4.style.borderBottom = "none";
    }
  }

}
window.addEventListener('scroll', trackScroll);


// функционал валидации -------------------------------------------------------------------
var ErrorForm = true;
var submit__button = document.querySelector(".submit__button");
var re = /\S+@\S+\.\S+/;
const form = document.querySelector('.contact__form');

form.addEventListener("input", () => {
  var name = document.querySelector('.contact__form input[type="text"][placeholder="Имя*"]');
  var email = document.querySelector('.contact__form input[type="text"][placeholder="E-mail*"]');
  var message = document.querySelector('.contact__form textarea');

  if (name.value != "") {
    name.style = "box-shadow: none";
  }
  if (message.value != "") {
    message.style = "box-shadow: none";
  }
  if (re.test(email.value)) {
    email.style = "box-shadow: none";
  }

})
document.querySelector('input[type="file"]').addEventListener('change', function (event) {
  var FileName = document.querySelector(".input__file__label").textContent;
  if (FileName != "Прикрепите файл") {
    document.querySelector(".input__file").style = "box-shadow: none";
  }
});
submit__button.addEventListener("click", () => {
  var name = document.querySelector('.contact__form input[type="text"][placeholder="Имя*"]');
  var email = document.querySelector('.contact__form input[type="text"][placeholder="E-mail*"]');
  var message = document.querySelector('.contact__form textarea');
  var FileName = document.querySelector(".input__file__label");

  if (name.value === "") {
    name.style = "box-shadow: 0 0 10px 3px red";
  }
  if (message.value === "") {
    message.style = "box-shadow: 0 0 10px 3px red";
  }
  if (!re.test(email.value)) {
    email.style = "box-shadow: 0 0 10px 3px red";
  }
  if (FileName.textContent === "Прикрепите файл") {
    document.querySelector(".input__file").style = "box-shadow: 0 0 10px 3px red";
  }
  {
    let captcha = grecaptcha.getResponse();
    if(!captcha.length){

    }else{
      
    }
    console.log("Отправил");
    //SubmitForm();
    FileName.textContent = "Прикрепите файл"
    FileName.style.color = "#EFEFEF"
  } 
})

// Отправка формы -------------------------------------------------


// Получаем элементы формы
function SubmitForm() {
  const form = document.querySelector('.contact__form');
  const nameInput = form.querySelector('input[placeholder="Имя*"]');
  const emailInput = form.querySelector('input[placeholder="E-mail*"]');
  const messageInput = form.querySelector('textarea');
  const fileInput = form.querySelector('input[type="file"]');

  // Обработчик события отправки формы
  // Создаем объект FormData для сбора данных формы
  const formData = new FormData();
  formData.append('name', nameInput.value);
  formData.append('email', emailInput.value);
  formData.append('message', messageInput.value);
  formData.append('file', fileInput.files[0]);

  // Отправляем данные на сервер
  fetch('http://localhost:8888/assets/scripts/SubmitForm.php', {
    method: 'POST',
    body: formData
  })
    .then(response => {
      if (response.ok) {
        // Письмо успешно отправлено
        alert('Письмо успешно отправлено!');
        form.reset(); 
      } else {
        // Возникла ошибка при отправке письма
        alert('Ошибка при отправке письма.');
      }
    })
    .catch(error => {
      console.error('Произошла ошибка:', error);
      alert('Произошла ошибка при отправке письма.');
    });
}




// удаление блоков при -------------------------------------------------
window.addEventListener('resize', function () {
  if (window.innerWidth < 990) {
    var block = document.querySelector('.Services');
    var block2 = document.querySelector('.Project');
    if (block && block2) {
      block.remove();
      block2.remove();
    }
  }
});

// развертывание меню на стрелочку -----------------------------------
btnabout = document.querySelector(".btnabout")
var aboutText = document.querySelector(".block_slide")
var aboutTxet = document.querySelector(".aboutTxet")
btnabout.addEventListener("click", function () {
  if (aboutText.style.display === "none") {
    aboutText.style.display = "block"
    aboutTxet.classList.add("active")
  } else {
    aboutText.style.display = "none"
    aboutTxet.classList.remove("active")
  }
})

//при навидении скрепка становится зеленая -----------------------------------
var inputElement = document.querySelector(".input__file");
var imageElement = document.querySelector(".screp");
var hoverImageUrl = "./assets/images/ui/screpGreen.svg";
inputElement.addEventListener("mouseover", function() {
    imageElement.src = hoverImageUrl;
});

inputElement.addEventListener("mouseout", function() {
  imageElement.src = "./assets/images/ui/screp.svg";
});
