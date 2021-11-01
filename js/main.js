/* abre e fecha menu */
const nav = document.querySelector('#header nav');
const toggle = document.querySelectorAll('nav .toggle');

// para cada elemento do toggle -> cria um const element
// adiciona um evento de click nos elements -> toggle classe show
for (const element of toggle) {
    element.addEventListener('click', function () {
        nav.classList.toggle('show');
    });
}

/* quando clicar em item do menu, esconder menu */
const links = document.querySelectorAll('nav ul li a');

for (const link of links) {
    link.addEventListener('click', function () {
        nav.classList.remove('show');
    });
}

/* aplicar sombra no header com scroll */
const header = document.querySelector('#header');
const navHeight = header.offsetHeight;

window.addEventListener('scroll', function () {
    if (this.window.scrollY >= navHeight) {
        header.classList.add('scroll');
    } else {
        header.classList.remove('scroll');
    }
});

/* slider para os testimonials */
const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination'
    },
    mousewheel: true,
    keyboard: true
});

/* scroll reveal, mostra elementos com scroll */
const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
    reset: true
});

scrollReveal.reveal(
    `#home .image, #home .text, 
    #about .image, #about .text, 
    #services header, #services .card,
    #testimonials header, #testimonials .testimonials,
    #contact .text, #contact .links`,
    { delay: 100 }
);
