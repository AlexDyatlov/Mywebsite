$(function(){

  $('.works__slider').slick({
    arrows: false,
    vertical: true,
    dots: true,
    dotsClass: 'header-dots',
    autoplay: 3000,
  });

  $('input').styler();

  var checker = document.getElementById('checkbox');
  var sendbtn = document.getElementById('send-sms');

    checker.onchange = function(){

    if(this.checked){
      sendbtn.disabled = false;
    } 

    else{
      sendbtn.disabled = true;
    }
    
  }

  $('.menu__btn').on('click', function(){
    this.classList.toggle('active')
    $('.menu__list').slideToggle({
    });
  });

  $('#btn-order').click(function() {
    $('html, body').animate({
        scrollTop: $('.footer').offset().top
    }, 700);
  });

  let ul = document.querySelector('ul');
  let li = document.querySelectorAll('li');

  li.forEach(el => {
    el.addEventListener('click', function(){
      ul.querySelector('.active').classList.
          remove('active');

          el.classList.add('active');
    });
  });

  AOS.init({
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
        
          document
            .querySelectorAll('.skills__col')
            .forEach((child) => child.classList.remove('skills__col--active'))
              
          parent.classList.add('skills__col--active');
          
        }
    
    })
  )

}

function scrollTo(element) {
  window.scroll({
    left: 0,
    top: element.offsetTop,
    behavior: 'smooth'
  })
}

var home = document.querySelector('.home');
var header = document.querySelector('.header');

var about = document.querySelector('.about');
var presentation = document.querySelector('.about-me');

var services = document.querySelector('.attendance');
var offers = document.querySelector('.services');

var attainments = document.querySelector('.attainments');
var skills = document.querySelector('.skills');

var portfolio = document.querySelector('.portfolio');
var works = document.querySelector('.works');

var contacts = document.querySelector('.contacts');
var footer = document.querySelector('.footer');

home.addEventListener('click', () => {
  scrollTo(header);
});

about.addEventListener('click', () => {
  scrollTo(presentation);
});

services.addEventListener('click', () => {
  scrollTo(offers);
});

attainments.addEventListener('click', () => {
  scrollTo(skills);
});

portfolio.addEventListener('click', () => {
  scrollTo(works);
});

contacts.addEventListener('click', () => {
  scrollTo(footer);
});