window.onload = function () {
    const burger = document.querySelector('.burger');
    const burger_component = document.querySelector('.burger__component');
    const menu_mobile = document.querySelector('.menu-mobile');
    let isOpen = false;
    const form = document.querySelector('.form');
    const email = document.querySelector('.email');
    const emailPatten = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;


    burger.addEventListener('click', navigationOpen);
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        subscribe(email, 'please inter a valid email', 'Thank you so much');
    })

    function navigationOpen() {
        if (!isOpen) {
            burger_component.classList.add('open')
            menu_mobile.classList.add('open')
            isOpen = true
        } else {
            burger_component.classList.remove('open')
            menu_mobile.classList.remove('open')
            isOpen = false
        }
    };

    function subscribe(giveInput, massage, success) {

        if (!emailPatten.test(giveInput.value)) {
            let get = giveInput.parentElement;
            let error = get.querySelector('.error')
            error.innerText = massage;
            error.style.display = 'block'
        } else {
            let get = giveInput.parentElement;
            let error = get.querySelector('.error')
            error.innerText = success;
            error.style.display = 'block'
            error.style.color = "green"
            giveInput.value = ''
        }
        
    }
}



$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $('#header').addClass('scrollWindow')
        } else {
            $('#header').removeClass('scrollWindow')
        }
    });

    // click to add active style
    $('.menu-mobile li').click(function () {
        $('.menu-mobile li').removeClass('active');
        $(this).addClass('active')
    })

    // carousel slider
    var owl = $('.owl-carousel__one');
    owl.owlCarousel({
        items: 10,
        nav: true,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 1000,
        autoplayHoverPause: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    })
    var owl = $('.carousel__wrapper');
    owl.owlCarousel({
    items: 2,
    nav: true,
    loop: true,
    autoplay: true,
    autoplayTimeOut: 1000,
    autoplayHoverPause: false,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        1000: {
            items: 2
        }
    }
    })

    var owl = $('.slide__card');
    owl.owlCarousel({
    items: 3,
    nav: true,
    loop: true,
    autoplay: true,
    autoplayTimeOut: 1000,
    autoplayHoverPause: false,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
    })
    // Smooth scroll
    
    var scrolltoOffset = $('#header').outerHeight() - 25;
    if (window.matchMedia("(max-width: 991px)").matches) {
      scrolltoOffset += 25;
    }
    $(document).on('click', '.menu-mobile a, #scrollToTop', function(e) {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        e.preventDefault();
        var target = $(this.hash);
        if (target.length) {
  
          var scrollto = target.offset().top - scrolltoOffset;
  
          if ($(this).attr("href") == '#header') {
            scrollto = 0;
          }
  
          $('html, body').animate({
            scrollTop: scrollto
          }, 1500, 'easeInOutExpo');
          return false;
        }
      }
    });
    // maintaining smooth effect in all browsers

    $(document).ready(function() {
        if (window.location.hash) {
          var initial_nav = window.location.hash;
          if ($(initial_nav).length) {
            var scrollto = $(initial_nav).offset().top - scrolltoOffset;
            $('html, body').animate({
              scrollTop: scrollto
            }, 1500, 'easeInOutExpo');
          }
        }
    });
    
    // add active class while scrolling

    var nav_sections = $('section');
    var main_nav = $('.menu-mobile');
  
    $(window).on('scroll', function() {
      var cur_pos = $(this).scrollTop() + 100;
  
      nav_sections.each(function() {
        var top = $(this).offset().top,
          bottom = top + $(this).outerHeight();
  
        if (cur_pos >= top && cur_pos <= bottom) {
          if (cur_pos <= bottom) {
            main_nav.find('li').removeClass('active');
          }
          main_nav.find('a[href="#' + $(this).attr('id') + '"]').parent('li').addClass('active');
        }
        if (cur_pos < 300) {
          $(".navbar ul:first li:first").addClass('active');
        }
      });
    });

    //Wow js
    new WOW().init();
  
    // Inactive all default feature

    $(document).bind("contextmenu", (e) => {
        e.preventDefault()
        alert('You can\'t inspect and see the codes 😎😎😎')
    })

    $(document).keydown(e => {
        if (e.which === 123) {
            alert('You can\'t inspect and see the codes 😎😎😎')
            return false
        }
    })

    $(document).bind('keydown', function (e) {
        if (e.ctrlKey && (e.which == 83)) {
            e.preventDefault()
            alert('Trying to download. Hey, remember that you can\'t 😎😎😎')
            return false
        }
    })

    window.oncontextmenu = function () {
        return false;
    }
    $(document).keydown(function (event) {
        if (event.keyCode == 123) {
            alert('You can\'t inspect and see the codes 😎😎😎')
            return false;
        }
        else if ((event.ctrlKey && event.shiftKey && event.keyCode == 73) || (event.ctrlKey && event.shiftKey && event.keyCode == 74)) {
            alert('Trying to download. Hey, remember that you can\'t 😎😎😎')
            return false;
        }
    });

})



