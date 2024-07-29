const swiperTop = new Swiper('.top__swiper', {
    // Optional parameters
    effect: "fade",
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    
  

  });

  const swiperAbout = new Swiper(".about__slider", {
    slidesPerView: 4,
    loop: true,
    spaceBetween: 20,
    freeMode: true,
    navigation: {
      nextEl: '.about__arrow .swiper-button-next',
      prevEl: '.about__arrow .swiper-button-prev',
    },
  });

  document.querySelectorAll('.accordeon__item').forEach((item) => {
    item.addEventListener('click', () => {
      item.classList.toggle('accordeon__item--active');
    })
  });
  

