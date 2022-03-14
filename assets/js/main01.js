$('.content-slider').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    });


    AOS.init();


    var swiper = new Swiper(".mySwiper", {
        navigation: {
          nextEl: ".swiper-next-button",
          prevEl: ".swiper-prev-button" },
      
        effect: "fade",
        loop: "infinite",
        pagination: {
          el: ".swiper-pagination",
          type: "fraction" } });
      
    
        
      
      swiper.on('slideChange', function (sld) {
        document.body.setAttribute('data-sld', sld.realIndex);
      });

      

      var snippet = [].slice.call(document.querySelectorAll('.hover'));
      if (snippet.length) {
        snippet.forEach(function (snippet) {
          snippet.addEventListener('mouseout', function (event) {
            if (event.target.parentNode.tagName === 'figure') {
              event.target.parentNode.classList.remove('hover')
            } else {
              event.target.parentNode.classList.remove('hover')
            }
          });
        });
      }






