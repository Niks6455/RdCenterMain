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


// функционал валидации -------------------------------------------------------------------
var submit__button = document.querySelector(".submit__button");
var re = /\S+@\S+\.\S+/;
const form = document.querySelector('.contact__form');

form.addEventListener("input", () => {
    var name = document.querySelector('#namePole');
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

// document.querySelector('input[type="file"]').addEventListener('change', function (event) {
//   var FileName = document.querySelector(".input__file__label");
//   if (FileName.textContent != "Прикрепите файл") {
//     document.querySelector(".input__file").style = "box-shadow: none";
//   }
// });

submit__button.addEventListener("click", () => {
    var name = document.querySelector('#namePole');
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
 
//   if (FileName.textContent === "Прикрепите файл") {
//     document.querySelector(".input__file").style = "box-shadow: 0 0 10px 3px red";
//   }
  if(name.value != "" && message.value != "" && re.test(email.value)) {
    let captcha = grecaptcha.getResponse();
    if(!captcha.length){
        document.querySelector("#recaptchaError").textContent = "Вы не прошли проверку капчей"
    }else{
        SubmitForm();
    }
  
  } 
})

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
  fetch('https://rdcenter.ru/assets/scripts/SubmitForm.php', {
    method: 'POST',
    body: formData
  })
    .then(response => {
      if (response.ok) {
        // Письмо успешно отправлено
        alert('Письмо успешно отправлено!');
        form.reset(); 
        grecaptcha.reset();
        document.querySelector("#recaptchaError").textContent = ""
        document.querySelector(".input__file__label").textContent = "Прикрепите файл"
        document.querySelector(".input__file__label").style.color = "#b0b0b0"
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

// Отправка формы -------------------------------------------------





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
var hoverImageUrl = "./assets/images/R&dMain/ui/screpGreen.svg";
inputElement.addEventListener("mouseover", function() {
    imageElement.src = hoverImageUrl;
});

inputElement.addEventListener("mouseout", function() {
  imageElement.src = "./assets/images/R&dMain/ui/screp.svg";
});
