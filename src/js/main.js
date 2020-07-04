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
    $('.menu__list').slideToggle();
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


