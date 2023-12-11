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

  function showFileName(input) {
    var file = input.files[0];
    var fileName = file.name;
    var targetBlock = document.getElementById("input__file__label");
    targetBlock.textContent = fileName;
  }
  