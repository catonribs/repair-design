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
  
  // var mySwiper1 = new Swiper ('.swiper1', {
  //   loop: true,
  //   pagination: {
  //     el: '.swiper-pagination1',
  //     type: 'bullets',
  //   },
  //   navigation: {
  //     nextEl: '.swiper-button-next1',
  //     prevEl: '.swiper-button-prev1',
  //   },

  // });

  // var next1 = $('.swiper-button-next1');
  // var prev1 = $('.swiper-button-prev1');
  // var bullets1 = $('.swiper-pagination1');

  // next1.css('left', prev1.width() + 25 + bullets1.width() + 27)
  // bullets1.css('left', prev1.width() + 25)

  
});