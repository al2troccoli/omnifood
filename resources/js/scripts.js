$(document).ready(function(){
    
    
    // STICKY menu settings
   $(".js--section-features").waypoint(function(direction){
       
       if(direction === "down"){
           $("nav").addClass("sticky");
       }
       else{
           $("nav").removeClass("sticky");
       }
   },{
       offset: '60px;'
   }) 
   
   // Animated scroll
   $(function() {
      $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
    });
    
    // Animations on scroll
    $('.js--wp-1').waypoint(function(direction){
        $('.js--wp-1').addClass('animated fadeIn');
    },{
        offset: '50%;'
    })
    $('.js--wp-2').waypoint(function(direction){
        $('.js--wp-2').addClass('animated fadeInUp');
    },{
        offset: '50%;'
    })
    $('.js--wp-3').waypoint(function(direction){
        $('.js--wp-3').addClass('animated fadeIn');
    },{
        offset: '50%;'
    })
    $('.js--wp-4').waypoint(function(direction){
        $('.js--wp-4').addClass('animated pulse');
    },{
        offset: '50%;'
    })
    
    //Mobile menu
     var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');
        $('.js--nav-icon, .js--main-nav a, .logo-black').click(function(element){
            //Gets the class name of the element that triggered the event
            var clicked = element.target.className;
            //Exits the function if the menu is closed AND the logo-black element (logo image) was clicked
            if (icon.hasClass('ion-navicon-round') && clicked == 'logo-black')
                return;
            //Opens and closes the menu
            if ($(window).width() < 768){
                nav.slideToggle(100);
            }
            //Changes icon states of the menu button
            if (icon.hasClass('ion-navicon-round')) {
                icon.addClass('ion-close-round');
                icon.removeClass('ion-navicon-round');
            } else {
                icon.addClass('ion-navicon-round');
                icon.removeClass('ion-close-round');
            }
        });
        $(window).resize(function(){
            if ($(window).width() > 767){
                nav.css("display", "block");
                icon.addClass('ion-close-round');
                icon.removeClass('ion-navicon-round');
            } else {
                nav.css("display", "none");
                icon.addClass('ion-navicon-round');
                icon.removeClass('ion-close-round');
            }
        });
    
    // MAPS
    var map = new GMaps({
      div: '.map',
      lat: -12.043333,
      lng: -77.028333
    });
    
    map.addMarker({
      lat: -12.043333,
      lng: -77.028333,
      title: 'Lima',
      infoWindow: {
          content: '<p>HTML Content</p>'
        }
    });
});




       