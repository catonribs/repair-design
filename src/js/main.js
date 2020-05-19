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
  $(document).mouseup(function(e) { 
    if (modal.has(e.target).length === 0) { 
      modal.removeClass('modal--visible');
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
    e.preventDefault();
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
      userPhone: "required",      
      userEmail: {
        required: true,
        email: true
      }
    },
    messages: {
      userName: {
        required: "Заполните поле",
        minlength: "Имя не короче двух букв",
        maxlength: "Имя не больше 15 букв"

      }, 
      userPhone: "Заполните поле",
      userEmail: {
        required: "Заполните поле",
        email: "Введите корректный email"
      }
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
      userPhone: "required",    
    },
    messages: {
      userName: {
        required: "Заполните поле",
        minlength: "Имя не короче двух букв",
        maxlength: "Имя не больше 15 букв"

      }, 
      userPhone: "Заполните поле",      
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
      userPhone: "required",   
    },
    messages: {
      userName: {
        required: "Заполните поле",
        minlength: "Имя не короче двух букв",
        maxlength: "Имя не больше 15 букв"
      }, 
      userPhone: "Заполните поле",      
    }
  
  });

  // маска для телефона

  $('[type=tel]').mask('+7 (000) 00-00-000', {placeholder: "+7 (___) __-__-___"});
  
});

