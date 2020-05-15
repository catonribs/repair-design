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
  $(document).on('click', function(e) { 
    if ($(e.target).closest(modal).length) { 
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

});

