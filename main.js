/*Message Orçamento */
let orcamento = 'Olá Ítalo Azevedo, Tenho interesse nos seguintes serviços:\n\n'
let services = []
let areas = []
const inputsCheckbox = document.querySelectorAll(
  '.modal input[type="checkbox"]'
)
const inputsText = document.querySelectorAll('.modal input[type="text"]')

inputsCheckbox.forEach(function (checkbox) {
  checkbox.addEventListener('change', function () {
    services = enabledSettings = Array.from(inputsCheckbox) // Convert checkboxes to an array to use filter and map.
      .filter(i => i.checked) // Use Array.filter to remove unchecked checkboxes.
      .map(i => i.value) // Use Array.map to extract only the checkbox values from the array of objects.
  })
})
inputsText.forEach(function (input) {
  input.addEventListener('change', function () {
    areas = enabledSettings = Array.from(inputsText) // Convert checkboxes to an array to use filter and map.
  })
})

function BuildMessage() {
  services.forEach(element => {
    orcamento += `${element}\n`
  })
  orcamento += '\nTenho um imóvel com \n'
  areas.forEach(area => {
    orcamento += `${area.value} metros de ${area.name} `
  })
  texto = window.encodeURIComponent(orcamento)
  window.open(
    `https://api.whatsapp.com/send?phone=+55087981053280&text=${texto}`
  )
}
document
  .querySelector('#form-message .button-send')
  .addEventListener('click', BuildMessage)
// document.querySelector('#form-message').addEventListener('change', BuildMessage)

/* abre e fehca menu quando clicar*/
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')
const message = ''

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

/*abrir modal */
const modal = document.querySelector('.modal-wrapper')
const buttonModal = document.querySelector('#home #orcamento')
buttonModal.addEventListener('click', function () {
  modal.classList.add('show')
})
/*fechar modal */
const closeButton = document.querySelector(
  '.modal-wrapper .modal .close-button'
)
closeButton.addEventListener('click', function () {
  modal.classList.remove('show')
})
/* quando clicar em um item do menu, esconder menu*/

const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

/*mudar header quando der scroll */
const header = document.querySelector('.content #header')
const navHeight = header.offsetHeight

function changeHeaderWhenScroll() {
  if (window.screenY >= navHeight) {
    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll')
  }
}

/** TESTIMONIALS CARROSEL SWIPER */
const swiper1 = new Swiper('.swiper-about', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 1,
      setWrapperSize: true
    }
  }
})

const swiper2 = new Swiper('.swiper-testimonials', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
})
const swiper3 = new Swiper('.swiper-msg', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  navigation: {
    nextEl: '.button-next',
    prevEl: '.button-prev'
  }
})

/** SCROLLREVEAL MOSTRAR ELEMENTOS NO SCROL */
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '10px',
  duration: 800,
  reset: true
})

scrollReveal.reveal(
  `#home .image,
  #home .text,
  #about .image,
  #about .text,
  #service header,
  #services .card,
  #testimonials header,
  #testimonials .testimonials,
  #contact .text,
  #contact .links,
  footer .brand, footer .social`,
  { interval: 150 }
)

/**Voltar para o topo */
// const backToTopButton = document.querySelector('.back-to-top ')
// function backToTop() {
//   if (this.window.scrollY >= 560) {
//     backToTopButton.classList.add('show')
//   } else {
//     backToTopButton.classList.remove('show')
//   }
// }

/**Menu Ativo Conforme Section no View */
const sections = document.querySelectorAll('main section[id]')

function activateMenuAtCurrentSection() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.id

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active')
    } else {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.remove('active')
    }
  }
}

/**When Scroll */
window.addEventListener('scroll', function () {
  changeHeaderWhenScroll()
  //backToTop()
  activateMenuAtCurrentSection()
})
