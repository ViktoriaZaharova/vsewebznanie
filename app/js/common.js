$(document).ready(function () {
    $('.main-slider').slick({
        slidesToShow: 3,
        centerMode: true,
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>'
    });

    $('.video-course__slider').slick({
        slidesToShow: 3,
        prevArrow: '<button type="button" class="slick-prev"><img src="../img/arrow-left2.svg" alt=""></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../img/arrow-right2.svg" alt=""></button>'
    });

    $('.author-slider').slick({
        slidesToShow: 4,
        prevArrow: '<button type="button" class="slick-prev"><img src="../img/arrow-left2.svg" alt=""></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../img/arrow-right2.svg" alt=""></button>'
    });

    $('[data-fancybox="video"]').fancybox({
        youtube: {
            controls: 0,
            showinfo: 0
        },
        vimeo: {
            color: 'f00'
        }
    });

    $('.btn-all').click(function (e) {
        e.preventDefault();
        $(this).siblings('.checkbox').css('display', 'flex');
        $(this).hide();
    })
});
