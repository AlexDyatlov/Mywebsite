$(function(){
  
  	//E-mail Ajax Send
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Спасибо! Я свяжусь с вами в ближайшее время.");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

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

  let ul = document.querySelector('.menu__list');
  let li = document.querySelectorAll('.menu__list-item');

  li.forEach(el => {
    el.addEventListener('click', function(){
      ul.querySelector('.active-item').classList.
          remove('active-item');

          el.classList.add('active-item');
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
        
          document
            .querySelectorAll('.skills__col')
            .forEach((child) => child.classList.remove('skills__col--active'))
              
          parent.classList.add('skills__col--active');
          
        }
    
    })
  )

}

var scroll = new SmoothScroll('a[href*="#"]',{
  speed: 700,
  speedAsDuration: true
});

  window.onload = function () {
    let preloader = document.getElementById('preloader');
    setTimeout(function(){
    preloader.style.display = 'none';
  },500);
}