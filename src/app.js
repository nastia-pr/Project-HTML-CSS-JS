let toggleBtn = document.querySelector(".toggle-btn");
let toggleBtnIcon = document.querySelector(".toggle-btn i");
let dropDownMenu = document.querySelector(".dropdown-menu");

toggleBtn.onclick = function () {
    dropDownMenu.classList.toggle("open");
    let isOpen = dropDownMenu.classList.contains("open");

    toggleBtnIcon.classList = isOpen
        ? "fa-solid fa-xmark"
        : "fa-solid fa-bars";
};


const containerImg = document.querySelector('.container-img-clip');
let animationPaused = false;

containerImg.addEventListener('click', function() {
  if (animationPaused) {
    containerImg.style.animationPlayState = 'running';
    animationPaused = false;
  } else {
    containerImg.style.animationPlayState = 'paused';
    animationPaused = true;
  }
});
