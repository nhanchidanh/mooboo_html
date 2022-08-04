$(document).ready(function () {
   $('.owl-carousel').owlCarousel({
      loop: true,
      margin: 30,
      nav: true,
      navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
      dots: false,
      autoplay: false,
      autoplayTimeout: 1000,
      responsive: {
         0: {
            items: 1,
            nav: false
         },
         767: {
            items: 3
         },
         1169: {
            items: 5,
            merge: true
         },
      }
   })


   // Back-top
   var showBackTop = 300;
   $(window).scroll(function () { 
      if ($(this).scrollTop() >= showBackTop) {
         $(".back-top").fadeIn();
      }else {
         $(".back-top").fadeOut();
      }
   });

   // $(".back-top").click(function (e) { 
   //    e.preventDefault();
   //    $('html, body').animate({scrollTop: 0})
   // });

   //My Account toggle
   $(".nav-link").click(function (e) { 
      e.preventDefault();
      $(this).next(".dropdown-menu").slideToggle();
   });
});