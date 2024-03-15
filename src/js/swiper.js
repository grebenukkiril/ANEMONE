const swiper = new Swiper('.swiper', {
    // безкінечне переміщення слайдів
    loop: true,
  
    // навігація
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
  
    // контроль за допомогою клавіатури та миші
    keyboard: {
        enabled: true,
        onlyInVieawport: true,
        pageUpDown: true,
    },
    mousewheel: {
        sensutivity: 1,
        eventsTarget: ".blog__slider-wrapper"
    },

    // кількість слайдів для показу
    slidesPerView: 3,

    // відступ між слайдами
    spaceBetween: 32,

    // кількість слайдів, які пролистує користувач
    slidesPerGroup: 1,

    // автопрокрутка слайдів
    // autoplay: {
    //   delay: 3000,
    //   dsableOnInteraction: false,
    // },

    // швидкість прокручування слайдів
    // speed: 400,

    // ефект прокручування слайдів
    effect:'coverflow',
    coverflowEffect: {
        rotate: 0,
        stretch: -40,
        slideShadows: false,
    },
    // адаптив слайдеру
    // breakpoints: {}, 
  });