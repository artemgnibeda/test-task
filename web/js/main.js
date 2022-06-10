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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcbiAgICAkKCcuanMtbWFpbi1zbGlkZXInKS5zbGljayh7XG4gICAgICAgIGRvdHM6IHRydWUsXG4gICAgICAgIGFycm93czpmYWxzZSxcbiAgICAgICAgaW5maW5pdGU6IHRydWUsXG4gICAgICAgIHNwZWVkOiA1MDAsXG4gICAgICAgIHNsaWRlc1RvU2hvdzogMVxuICAgIH0pO1xuXG4gICAgJCgnLmpzLWFjY29yZGlvbi10cmlnZ2VyJykub24oJ2NsaWNrJyxmdW5jdGlvbiAoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICQodGhpcykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpXG4gICAgICAgICAgICAuY2xvc2VzdCgnLmpzLWFjY29yZGlvbi1pdGVtJykuZmluZCgnLmpzLWFjY29yZGlvbi1ib2R5Jykuc2xpZGVUb2dnbGUoKTtcbiAgICB9KVxufSkiXSwiZmlsZSI6Im1haW4uanMifQ==
