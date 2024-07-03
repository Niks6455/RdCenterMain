
//При наведении кнопки черные 
const btn__prev__img = document.getElementById("btn__prev__img");
if (document.getElementById("btn__prev")) {
    const btn__prev = document.getElementById("btn__prev");
    var originalSrc1 = btn__prev__img.src;
    function changeImageSrc1() {
        btn__prev__img.src = 'https://rdcenter.ru/assets/images/practiceExchange/icon/btnHover.png';
    }
    function restoreImageSrc1() {
        btn__prev__img.src = originalSrc1;
    }
    if(window.innerWidth >= 990){
        btn__prev.addEventListener('mouseover', changeImageSrc1);
        btn__prev.addEventListener('mouseout', restoreImageSrc1);
    }
}





const btn__next__img = document.getElementById("btn__next__img");
if (document.getElementById("btn__next")) {
    const btn__next = document.getElementById("btn__next");
    var originalSrc2 = btn__next__img.src;
    function changeImageSrc2() {
        btn__next__img.src = 'https://rdcenter.ru/assets/images/practiceExchange/icon/btnHover.png';
    }
    function restoreImageSrc2() {
        btn__next__img.src = originalSrc2;
    }
    if(window.innerWidth >= 990){
        btn__next.addEventListener('mouseover', changeImageSrc2);
        btn__next.addEventListener('mouseout', restoreImageSrc2);
    }
}




// бургер стили
document.querySelector(".burder__header").style = "display:none";
const header__logo = document.getElementById("header__logo");
var originalSrc = header__logo.src;
const limp__header = document.getElementById("limp__header");

function open__close_burger() {
    const burder__header = document.querySelector(".burder__header");
    const header = document.querySelector(".header");
    const head__eventNoneBgs = document.querySelector(".head__eventNoneBgs")
    if (burder__header.style.display == "block") {
        burder__header.style.display = "none";
        header.classList.remove("active__boorger");
        head__eventNoneBgs.style.display = "none"
    } else {
        burder__header.style.display = "block"
        head__eventNoneBgs.style.display = "block"
        header.classList.add("active__boorger");
        let pos = 0;
        const duration = 1000; // Измените это значение по вашему усмотрению
        const start = performance.now();
        const animate = (timestamp) => {
            const elapsed = timestamp - start;
                if (elapsed < duration / 2) {
                    pos = (elapsed - (duration / 4)) / (duration / 4) * 300; // Опускание на 200px
                } else if (elapsed < (duration * 3) / 4) {
                    pos = 300 - ((elapsed - (duration / 2)) / (duration / 4)) * 200; // Поднятие на 100px
                }  else {
                    pos = 100 - ((elapsed - (duration * 3 / 4)) / (duration / 4)) * -150 ; // Опускание на 50px
                } 

          
            limp__header.style.top = pos + 'px';
     
            if (elapsed < duration) {
                requestAnimationFrame(animate);
            }
        };
        requestAnimationFrame(animate);
    }
}

//функция плавного скрола -------------------------------------------------------------------
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const href = this.getAttribute('href');
      const targetElement = document.querySelector(href);
      var h1 = document.querySelector("#about").offsetTop;
      var h2 = document.querySelector("#reviews").offsetTop;
      var h3 = document.querySelector("#mainBlockBg").offsetTop;
      
      if ((window.innerWidth < 990) && (targetElement)){
        if (targetElement) {
          var offset = targetElement.offsetTop;
          if(href == "#about"){
              offset =  offset;
          }
          if(href == "#reviews"){
              offset = offset -75;
          }
          if(href == "#connect"){
              offset = h1 + h2 + h3 + 25;
          }
          if(href == "#doc"){
              offset = offset - 500;
          }
          window.scrollTo({
            top: offset,
            behavior: 'smooth'
          });
        }
      }else {
          var offset = targetElement.offsetTop;
          if(href == "#about"){
              offset =  offset - 325;
          }
          if(href == "#reviews"){
              offset = offset - 125;
          }
          if(href == "#connect"){
              offset = h1 + h2 + h3 - 455;
          }
          if(href == "#doc"){
              offset = offset - 750;
          }
          window.scrollTo({
           
            top: offset,
            behavior: 'smooth'
          });
        }
    });
  });


//валидация номера телефона
if (document.getElementById("numPhone")) {
    const numPhone = document.getElementById("numPhone");
    numPhone.addEventListener('input', function() {
        var phoneMaskmobile1 = IMask(numPhone, {
            mask: '+7 (000) 000-00-00'
        });
        StyleButtonSubmitHeader(!phoneMaskmobile1.masked.isComplete);

    });

    const numPhone2 = document.getElementById("numPhone2");
    numPhone2.addEventListener('input', function() {
        var phoneMaskmobile2 = IMask(numPhone2, {
            mask: '+7 (000) 000-00-00'
        });
        StyleButtonSubmitFooter(!phoneMaskmobile2.masked.isComplete);

    });

    function StyleButtonSubmitHeader(Error){
        var btn__header__form = document.querySelector("#btn__header__form");
        var numPhone = document.querySelector('#numPhone');
        if (!Error) {
            numPhone.style =  "box-shadow: none";
        } else {
            numPhone.style = "box-shadow: 0 0 10px 3px red";
        }
    }
    function StyleButtonSubmitFooter(Error){
        var phone2 = document.querySelector(".phone2");
        var btn__footer__form = document.querySelector("btn__footer__form");
        if (!Error) {
            phone2.style =  "box-shadow: none";
        } else {
            phone2.style = "box-shadow: 0 0 10px 3px red";
        }
    }
// функционал валидации -------------------------------------------------------------------
    var btn__header__form = document.querySelector("#btn__header__form");
    const form__header = document.querySelector('.form__header');
    form__header.addEventListener("input", () => {
        var name = document.querySelector('#name1');
        var email = document.querySelector('#email1');
        var numPhone = document.querySelector('#numPhone');
        var re = /\S+@\S+\.\S+/;
        if (re.test(email.value)) {
            email.style = "box-shadow: none";
        }
        if (name.value != "") {
            name.style =  "box-shadow: none";
        }
    })

}


    
  function SubmitData1(){
         var name = document.querySelector('#name1');
        var email = document.querySelector('#email1');
        var numPhone = document.querySelector('#numPhone');
    
      if (name.value === "") {
        name.style = "box-shadow: 0 0 10px 3px red";
      }
      if (numPhone.value === "") {
        numPhone.style = "box-shadow: 0 0 10px 3px red";
      }
      if (!re.test(email.value)) {
        email.style = "box-shadow: 0 0 10px 3px red";
      }else{
          const formData = new FormData();
            formData.append('name', document.getElementById("name1").value);
            formData.append('phone', document.querySelector(".phone1").value);
            formData.append('email', document.getElementById("email1").value)
            SubmitForm1(formData)
      }
  };
  if (document.querySelector('.form__connect'))  {
      var btn__footer__form = document.querySelector("btn__footer__form");
      const form__connect = document.querySelector('.form__connect');

      form__connect.addEventListener("input", () => {
          var name2 = document.querySelector('#name2');
          var email2 = document.querySelector('#email2');
          var phone2 = document.querySelector(".phone2");
          var re = /\S+@\S+\.\S+/;
          if (re.test(email2.value)) {
              email2.style = "box-shadow: none";
          }
          if (name2.value != "") {
              name2.style =  "box-shadow: none";
          }
      })

      function SubmitData2(){
          var name2 = document.querySelector('#name2');
          var email2 = document.querySelector('#email2');
          var phone2 = document.querySelector(".phone2");
          if (name2.value === "") {
              name2.style = "box-shadow: 0 0 10px 3px red";
          }
          if (phone2.value === "") {
              phone2.style = "box-shadow: 0 0 10px 3px red";
          }
          if (!re.test(email2.value)) {
              email2.style = "box-shadow: 0 0 10px 3px red";
          }else{
              const formData = new FormData();
              formData.append('name', document.getElementById("name2").value);
              formData.append('phone', document.querySelector(".phone2").value);
              formData.append('email', document.getElementById("email2").value)
              SubmitForm1(formData);
          }

      };
  }


 // Отправляем данные на сервер
 function SubmitForm1(formData){
      const form1 = document.querySelector('.form__header');
      const form2 = document.querySelector('.form__connect');

      fetch('https://rdcenter.ru/assets/scripts/SubmitFormBirja.php', {
        method: 'POST',
        body: formData
      })
      .then(response => {
        if (response.ok) {
          // Письмо успешно отправлено
          alert('Письмо успешно отправлено! В течении нескольких рабочих дней с вами свяжутся.');
          form1.reset(); 
          form2.reset(); 
          // После успешной отправки формы
          window.location.href = 'https://rdcenter.ru/Practice';
        } else {
          // Возникла ошибка при отправке письма
          alert('Ошибка при отправке письма.');
        }
      })
    
}


  //при навидении скрепка становится зеленая -----------------------------------
var inputElement = document.querySelector(".input__file");
var imageElement = document.querySelector(".screp");
var hoverImageUrl = "https://rdcenter.ru/assets/images/R&dMain/ui/screpGreen.svg";
inputElement.addEventListener("mouseover", function() {
    imageElement.src = hoverImageUrl;
});

inputElement.addEventListener("mouseout", function() {
  imageElement.src = "https://rdcenter.ru/assets/images/R&dMain/ui/screp.svg";
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
//размытие на айфоне 

