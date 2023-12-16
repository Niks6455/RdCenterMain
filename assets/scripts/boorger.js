var buurgerBtn = document.querySelector(".header__burger__inner")
var navBoorger = document.querySelector(".nav__header_mobl")
buurgerBtn.addEventListener("click", () =>{
    if(!navBoorger.classList.contains("active") ){
        navBoorger.classList.add("active")
        buurgerBtn.classList.add("active")
    }else{
        navBoorger.classList.remove("active")
        buurgerBtn.classList.remove("active")
    }
})

var nav__items = document.querySelectorAll(".nav__item");

    nav__items.forEach(nav__item => {
       nav__item.addEventListener("click", () =>{
        if(navBoorger.classList.contains("active")){
            navBoorger.classList.remove("active")
            buurgerBtn.classList.remove("active")
      }
    })
  })
