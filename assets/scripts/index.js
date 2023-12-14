//функция плавного скрола -------------------------------------------------------------------
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const href = this.getAttribute('href');
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const offset = targetElement.offsetTop;
      console.log(offset);
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
    var servicesModuleHeight = document.getElementById('services').offsetHeight;
    var projectsModuleHeight = document.getElementById('projects').offsetHeight;
  }

  var contactModuleHeight = document.getElementById('contact').offsetHeight;
  var pageHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
  console.log(aboutModuleHeight);
  console.log(servicesModuleHeight);
  console.log(projectsModuleHeight);
  console.log(contactModuleHeight);
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
    } else if (scrollPosition < aboutModuleHeight + servicesModuleHeight + projectsModuleHeight - headerHeight) {
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

function CheckErrorForm() {
  // Проверяем, заполнены ли все поля формы
  var name = document.querySelector('.contact__form input[type="text"][placeholder="Имя*"]').value;
  var email = document.querySelector('.contact__form input[type="text"][placeholder="E-mail*"]').value;
  var message = document.querySelector('.contact__form textarea').value;
  var FileName = document.querySelector(".input__file__label").textContent;
  var re = /\S+@\S+\.\S+/;
  if (name && email && message && FileName != "Прикрепите файл" && re.test(email)) {
    ErrorForm = false;
  } else {
    ErrorForm = true;
  }
}

function SubmitForm() {
  CheckErrorForm(); // Вызываем функцию для проверки формы перед проверкой значения ErrorForm
  console.log(ErrorForm);
  if (!ErrorForm) {
    console.log("Отправил");
  } else {
    console.log("неа");
  }
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