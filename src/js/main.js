$(function(){
  
  $('.works__slider').slick({
    arrows: false,
    vertical: true,
    dots: true,
    dotsClass: 'header-dots',
    autoplay: 3000,
  });

  $('.menu__btn').on('click', function(){
    this.classList.toggle('active')
    $('.menu__list').slideToggle({
    });
  });

  AOS.init({
    once: true,
    delay: 300,
    duration: 1000
  });

});

if(window.matchMedia('(max-width: 1000px)').matches){

  document.querySelectorAll('.skills__col-title').forEach((item) =>
  item.addEventListener('click', () => {

    const parent = item.parentNode;
    
        if (parent.classList.contains('skills__col--active')) {
            parent.classList.remove('skills__col--active');
        } 
        else {
          document.querySelectorAll('.skills__col').forEach((child) => 
          child.classList.remove('skills__col--active'))
  
          parent.classList.add('skills__col--active');
        }
    })
  )
}

const menuList = document.querySelector('.menu__list'),
      menuLink = document.querySelectorAll('.menu__link');

menuLink.forEach(el => {
  el.addEventListener('click', function(){
    menuList.querySelector('.menu__link--active').classList.
      remove('menu__link--active');

    el.classList.add('menu__link--active');
  });
});

const scroll = new SmoothScroll('a[href*="#"]',{
  speed: 700,
  speedAsDuration: true
});

window.onload = function () {
    let preloader = document.getElementById('preloader');
    setTimeout(function(){
    preloader.style.display = 'none';
  },500);
}