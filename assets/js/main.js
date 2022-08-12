$(document).ready(function () {
   // Get height header
   var height_nav = ($(".navbar").outerHeight())
   // alert(height_nav);
   $(".wp-content").css("margin-top", height_nav);

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
            nav: true
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

   $(".back-top").click(function () { 
      $('html, body').scrollTop({scrollTop: 0})
   });

   // My Account toggle
   $(".dropdown .nav-link").click(function (e) { 
      e.preventDefault();
      $(this).next(".dropdown-menu").slideToggle('fast');
   });

   // Mini_cart toggle
   $(".cart-box").click(function () { 
      $(".mini_cart").stop().slideToggle("fast");
      return false;
   });
});