$(document).ready(function(){
    $('.slideshow').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        infinity: true,
        dots:true,
    });
    $('.slick-tieuchi').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        infinity: true,
    });
    /* Menu fixed */
    $(window).scroll(function(){
        if($(window).scrollTop() >= $(".header").height())
        {
            $(".menu").addClass("menu-fix");
            $(".menu").css({position:"fixed",left:'0px',right:'0px',top:'0px',zIndex:'9999'});
        }
        else
        {
            $(".menu").removeClass("menu-fix");
            $(".menu").css({position:"relative"});
        }
    });
});