$(function(){
    $('.slider__inner, .news__slider-inner').slick({
        prevArrow: '<button type="button" class="slick-prev slick-btn"></button>',
        nextArrow: '<button type="button" class="slick-next slick-btn"></button>',
        infinite:false
    });

    $('select').styler()

    $('.header__btn-menu').on('click', function(){
        $('.menu ul').slideToggle();
    });
});