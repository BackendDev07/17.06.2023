const navbarButtons = document.querySelectorAll('.header-navbar__button')
const headerBurger = document.querySelector('.header__burger')
const headerMenu = document.querySelector('.header__menu')

function closeMenus() {
  for (let j = 0; j < navbarButtons.length; j++) {
    navbarButtons[j].classList.remove('active')
    navbarButtons[j].nextElementSibling.classList.remove('active')
  }
}

function headerMenuToggle(type) {
  if (type === 'open') {
    headerMenu.classList.add('active')
  } else {
    headerMenu.classList.remove('active')
  }
}

for (let i = 0; i < navbarButtons.length; i++) {
  navbarButtons[i].addEventListener('click', function () {
    if (navbarButtons[i].classList.contains('active')) {
      closeMenus()
    } else {
      closeMenus()
      headerMenuToggle('close')
      navbarButtons[i].classList.add('active')
      navbarButtons[i].nextElementSibling.classList.add('active')
    }
  })
}

headerBurger.addEventListener('click', function () {
  if (headerMenu.classList.contains('active')) {
    headerMenuToggle('close')
  } else {
    closeMenus()
    headerMenuToggle('open')
  }
})

window.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    closeMenus()
    headerMenuToggle('close')
  }
})



var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});