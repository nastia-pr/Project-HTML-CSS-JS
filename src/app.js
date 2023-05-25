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


var map = L.map('map').setView([41.8982,-8.8560], 12);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker([41.9011,-8.8746]).addTo(map);


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
