$('.sponsor-slider').slick({
    dots: false,
    infinite: true,
    arrows: false,
    autoplay: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,

    responsive: [
        {
            breakpoint: 1025,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});

jQuery(function() {
jQuery(".step-carousel").slick({
    lazyLoad: 'ondemand',
    dots: false,
    arrows: false,
    infinite: true,
    speed: 300,
    autoplay: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
        {
        breakpoint: 1300,
        settings: {
            slidesToShow: 3,
        },
        },
        {
        breakpoint: 1000,
        settings: {
            slidesToShow: 2,
        },
        },
        {
        breakpoint: 768,
        settings: {
            slidesToShow: 1,
        },
        },
    ],
})
})

$('.step-carousel__item').click(function(){
$('.step-carousel').slick('slickNext'); // avança para o próximo item do Slick
});

window.addEventListener('load',function(){var minhaDiv=document.querySelector('.step');minhaDiv.classList.add('mostrar');});