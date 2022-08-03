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
          items: 1
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