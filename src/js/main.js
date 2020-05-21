// document.addEventListener("DOMContentLoaded", function(event) {
//   const modal = document.querySelector('.modal');
//   const modalBtn = document.querySelectorAll('[data-toggle=modal]');
//   const closeBtn = document.querySelector('.modal__close');
//   const switchModal = () => {
//     modal.classList.toggle('modal--visible');
//   }
//   modalBtn.forEach(element => {
//     element.addEventListener('click', switchModal);   
//   });

//   closeBtn.addEventListener('click', switchModal);

//   document.addEventListener('keydown', function (e) {
//     if(e.keyCode === 27)  {
//       modal.classList.remove('modal--visible');}
//   }); 
    
//   document.addEventListener('click', function (e) {
//     if(e.target == modal)  {
//       modal.classList.remove('modal--visible');}
//   }); 
    
// });

$(document).ready(function () {
  var modal = $('.modal'),
      modalBtn = $('[data-toggle=modal]'),
      closeBtn = $('.modal__close');

  modalBtn.on('click', function () {
    modal.toggleClass('modal--visible');
  });
  closeBtn.on('click', function () {
    modal.toggleClass('modal--visible');
  });
  $(document).keydown(function(e) { 
    if (event.keyCode == 27) { 
      modal.removeClass('modal--visible');
    }
  });
  $(document).click(function(e) { 
    if ($(e.target).is(modal)) {
        $(modal).removeClass('modal--visible');
  }
    
  });

  var btn = $('#btn-up');

  $(window).scroll(function() {
    if ($(window).scrollTop() > 500) {
      btn.addClass('show');
    } else {
      btn.removeClass('show');
    }
  });

  btn.on('click', function(e) {    
    $('html, body').animate({scrollTop:0}, '500');
  });

  
  var mySwiper = new Swiper ('.swiper-container', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

  });

  var next = $('.swiper-button-next');
  var prev = $('.swiper-button-prev');
  var bullets = $('.swiper-pagination');

  next.css('left', prev.width() + 25 + bullets.width() + 27)
  bullets.css('left', prev.width() + 25)
  
  

  new WOW().init();

  // валидация

  $('.modal__form').validate({
    errorElement: "div",
    errorClass: "invalid",
    rules: {      
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },      
      userPhone: {
        required: true,
        minlength: 18        
      },      
      userEmail: {
        required: true,
        email: true
      },
      policyCheckbox: 'required'
    },
    messages: {
      userName: {
        required: "Заполните поле",
        minlength: "Имя должно быть не короче 2 букв",
        maxlength: "Имя должно быть не больше 15 букв"

      }, 
      userPhone: {
        required: "Заполните поле",
        minlength: "Введите корректный телефон"      
      },
      userEmail: {
        required: "Заполните поле",
        email: "Введите корректный email"
      },
      policyCheckbox: "Необходимо подтвердить согласие"
    }
  
  });
  $('.footer__form').validate({
    errorElement: "div",
    errorClass: "invalid",
    rules: {      
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },      
      userPhone: {
        required: true,
        minlength: 18        
      },
      policyCheckbox: 'required',  
      userQuestion: 'required'   
    },
    messages: {
      userName: {
        required: "Заполните поле",
        minlength: "Имя должно быть не короче 2 букв",
        maxlength: "Имя должно быть не больше 15 букв"

      }, 
      userPhone: {
        required: "Заполните поле",
        minlength: "Введите корректный телефон"      
      },
      policyCheckbox: "Необходимо подтвердить согласие",
      userQuestion: "Задайте свой вопрос"
    }
  
  });
  $('.control__form').validate({
    errorElement: "div",
    errorClass: "invalid",
    rules: {      
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },      
      userPhone: {
        required: true,
        minlength: 18        
      },
      policyCheckbox: 'required'
    },
    messages: {
      userName: {
        required: "Заполните поле",
        minlength: "Имя должно быть не короче 2 букв",
        maxlength: "Имя должно быть не больше 15 букв"

      }, 
      userPhone: {
        required: "Заполните поле",
        minlength: "Введите корректный телефон"      
      },
      policyCheckbox: "Необходимо подтвердить согласие"
    }
  
  });

  // маска для телефона

  $('[type=tel]').mask('+7 (000) 00-00-000');

  $(".menu__nav").on("click","a", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();
		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),
		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;		
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 1500);
	});
  
});

