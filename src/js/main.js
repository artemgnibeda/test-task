$(document).ready(function () {
    $('.js-main-slider').slick({
        dots: true,
        arrows:false,
        infinite: true,
        speed: 500,
        slidesToShow: 1
    });

    $('.js-accordion-trigger').on('click',function (e) {
        e.preventDefault();
        $(this).toggleClass('active')
            .closest('.js-accordion-item').find('.js-accordion-body').slideToggle();
    })
})