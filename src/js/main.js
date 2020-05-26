
$(document).ready(function () {
  var modal = $('.modal'),
      modalThanks = $('.thanks'),
      closeThanks = $('.thanks__close'),
      modalBtn = $('[data-toggle=modal]'),
      closeBtn = $('.modal__close');
  
  closeThanks.on('click', function () {
    modalThanks.removeClass('thanks--visible');
  })
  $(document).keydown(function(e) { 
    if (event.keyCode == 27) { 
      modalThanks.removeClass('thanks--visible');
    }
  });
  $(document).click(function(e) { 
    if ($(e.target).is(modalThanks)) {
        $(modalThanks).removeClass('thanks--visible');
    }    
  });

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
  $('form').each(function() {
    $(this).validate({
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
          minlength: 16        
        },      
        userEmail: {
          required: true,
          email: true
        },
        userQuestion: {
          required: true,
          minlength: 3
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
        policyCheckbox: "Необходимо подтвердить согласие",
        userQuestion: "Задайте свой вопрос"
      },
    submitHandler: function(form) {
      $.ajax({
        type: "POST",
        url: "send.php",
        data: $(form).serialize(),        
        success: function (response) {
          console.log('Ajax сработал. Ответ сервера: ' + response);
          $(form)[0].reset();
          modal.removeClass('modal--visible');
          modalThanks.addClass('thanks--visible');          
        }
      });
    }    
  })  
  
  });
  

  // маска для телефона

  $('[type=tel]').mask('+7(000)000-00-00');

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
  
  $(".hero__scroll-down").on("click", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();
		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),
		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;		
		//анимируем переход на расстояние - top за 2000 мс
		$('body,html').animate({scrollTop: top}, 2000);
	});
  

  
  // ymaps.ready(function () {
  //   var myMap = new ymaps.Map('footer__map', {
  //           center: [47.244729, 39.723187],
  //           zoom: 18
  //       }, {
  //           searchControlProvider: 'yandex#search'
  //       }),

  //       // Создаём макет содержимого.
  //       MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
  //           '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
  //       ),

  //       myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
  //           hintContent: 'Наш офис',
  //           balloonContent: 'Вход со двора'
  //       }, {
  //           // Опции.
  //           // Необходимо указать данный тип макета.
  //           iconLayout: 'default#image',
  //           // Своё изображение иконки метки.
  //           iconImageHref: 'img/marker.png',
  //           // Размеры метки.
  //           iconImageSize: [32, 32],
  //           // Смещение левого верхнего угла иконки относительно
  //           // её "ножки" (точки привязки).
  //           iconImageOffset: [-5, -38]
  //       });

  //   myMap.geoObjects
  //       .add(myPlacemark);        
  // });
  let spinner = $('.ymap-container').children('.loader');

  let check_if_load = false;

  function init () {
    let myMap = new ymaps.Map('map-yandex', {
        center: [47.244729, 39.723187],
        zoom: 18
    }, {
        searchControlProvider: 'yandex#search'
    }),
    MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
        '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
    ),
    myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
        hintContent: 'Наш офис',
        balloonContent: 'Вход со двора'
    }, {
        iconLayout: 'default#image',
        iconImageHref: '../img/marker.png',
        iconImageSize: [32, 32],
        iconImageOffset: [-5, -38],
    });
    myMap.geoObjects.add(myPlacemark);
    let layer = myMapTemp.layers.get(0).get(0);

    waitForTilesLoad(layer).then(function() {
      spinner.removeClass('is-active');
    });
  }
  
  function waitForTilesLoad(layer) {
    return new ymaps.vow.Promise(function (resolve, reject) {
      let tc = getTileContainer(layer), readyAll = true;
      tc.tiles.each(function (tile, number) {
        if (!tile.isReady()) {
          readyAll = false;
        }
      });
      if (readyAll) {
        resolve();
      } else {
        tc.events.once("ready", function() {
          resolve();
        });
      }
    });
  }
  
  function getTileContainer(layer) {
    for (let k in layer) {
      if (layer.hasOwnProperty(k)) {
        if (
          layer[k] instanceof ymaps.layer.tileContainer.CanvasContainer
          || layer[k] instanceof ymaps.layer.tileContainer.DomContainer
        ) {
          return layer[k];
        }
      }
    }
    return null;
  }
  
  function loadScript(url, callback) {
    let script = document.createElement("script");
      script.onload = function() {
        callback();
      };
    script.src = url;
    document.getElementsByTagName("head")[0].appendChild(script);
  }

  let ymap = function() {
    $('.ymap-container').mouseenter(function() {
        if (!check_if_load) { 
          check_if_load = true; 
          spinner.addClass('is-active');
          loadScript("https://api-maps.yandex.ru/2.1/?apikey=a00f0ba8-875e-472d-9d6e-105c41b610b1&lang=ru_RU", function() {
            ymaps.load(init);
          });                
        }
      }
    );  
  }
  
  $(function() {
    ymap();
  });
});

