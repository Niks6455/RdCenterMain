


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




//валидация полей формы
const numPhone = document.getElementById("LabBoardPhone");
numPhone.addEventListener('input', function() {
    var phoneMaskmobile = IMask(numPhone, {
      mask: '+7 (000) 000-00-00'
    });
    StyleButtonSubmit(!phoneMaskmobile.masked.isComplete);

  });

  var btn__header__form = document.querySelector("#LabBoardBtnSubmit");
  const form__header = document.querySelector('.formLabBoard');
  form__header.addEventListener("input", () => {
      var name = document.getElementById('name');
      var email = document.getElementById('email');
      var re = /\S+@\S+\.\S+/;
      if (re.test(email.value)) {
          email.style = "box-shadow: none";
      }
     if (name.value != "") {
      name.style =  "box-shadow: none";
    }
  })
  
  function StyleButtonSubmit(Error){
    console.log(Error)
    var phone = document.getElementById("LabBoardPhone");
    if (!Error) {
         phone.style =  "box-shadow: none";
    } else {
       phone.style = "box-shadow: 0 0 10px 3px red";
    }
}

function SubmitData(){
    var name = document.getElementById('name');
    var email = document.getElementById('email');
    var numPhone = document.getElementById('LabBoardPhone');
    var re = /\S+@\S+\.\S+/;

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
          formData.append('name', document.getElementById("name").value);
          formData.append('phone', document.getElementById("LabBoardPhone").value);
          formData.append('email', document.getElementById("email").value)
          SubmitForm(formData)
    }
};


function SubmitForm(formData){
    console.log(formData)
    const form = document.querySelector('.form');
    form.reset(); 
    // fetch('https://rdcenter.ru/assets/scripts/SubmitFormBirja.php', {
    //   method: 'POST',
    //   body: formData
    // })
    // .then(response => {
    //   if (response.ok) {
        alert('Письмо успешно отправлено! В течении нескольких рабочих дней с вами свяжутся.');
        // form2.reset(); 
        // // После успешной отправки формы
        // window.location.href = 'https://rdcenter.ru/Practice';
    //   } else {
    //     // Возникла ошибка при отправке письма
    //     alert('Ошибка при отправке письма.');
    //   }
    // })
  
}




//функция плавного скрола -------------------------------------------------------------------
document.querySelectorAll('.jscorLink').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const href = this.getAttribute('href');
      console.log('href', href)
      const targetElement = document.querySelector(href);
      console.log(targetElement)
      if ('targetElement', targetElement) {
        const offset = targetElement.offsetTop - 150;
        console.log('offset', offset)
        window.scrollTo({
          top: offset,
          behavior: 'smooth'
        });
      }
      if(href==="#document"){
        const targetElement = document.querySelector("#opportunities");
        const offset = targetElement.offsetTop + 650; 
        window.scrollTo({
            top: offset,
            behavior: 'smooth'
          });
      }
    });
  });