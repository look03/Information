var slider_main = function() {
    $('.single-slide').slick({
        autoplay: true,
        asNavFor: '.single-slide-text',
        infinite: true,
        arrows: true,
        autoplaySpeed:5000,
        speed: 1000,
    });
    $('.single-slide-text').slick({
        autoplay: true,
        dots: true,
        asNavFor: '.single-slide',
        fade: true,
        arrows: false,
        infinite: true,
        autoplaySpeed: 5000,
        speed: 1000,
    });
    $('.multiple-items').slick({
        slidesToShow: 3,  
        slidesToScroll: 3, 
        autoplay: true,
        asNavFor: '.multiple-items-text',
        infinite: true,
        centerMode: true,
        arrows: true,
        autoplaySpeed:5000,
        speed: 1000, 
    });
      $('.multiple-items-text').slick({
        autoplay: true,
        dots: true,
        asNavFor: '.multiple-items',
        fade: true,
        arrows: false,
        infinite: true,
        autoplaySpeed: 5000,
        speed: 1000,
    });
}
var toTop = function() {
    $('#ui-to-top').click(function() {
        $('body,html').animate({scrollTop:0},800);
     });
}
$(document).ready(function() {
    toTop();
    slider_main();
    window.onscroll = function() { 
        if ($(window).scrollTop() > 90) {
            $(".header_main").css("background","rgba(21, 21, 21, 0.9)");
            $("#ui-to-top").css("display","inline-block");
        } else {
            $(".header_main").css("background","rgba(21, 21, 21, 0.2)");
            $("#ui-to-top").css("display","none");
        }
     }
});