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

    $('.course__slider').slick({
        slidesToShow: 3,
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>',
        appendArrows: '.course__nav'
    });

    $('.slider__content').slick({
        slidesToShow: 3,
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


// модальные окна (несколько)
$(document).ready(function () {
    var overlay = $('.overlay');
    var open_modal = $('.open_modal');
    var close = $('.modal__close, .overlay');
    var modal = $('.modal__div');

    open_modal.click(function (event) {
        event.preventDefault();
        var div = $(this).attr('href');
        overlay.fadeIn(400,
            function () {
                $(div)
                    .css('display', 'flex')
                    .animate({
                        opacity: 1,
                        top: '50%'
                    }, 200);
            });
    });

    close.click(function () {
        modal
            .animate({
                    opacity: 0,
                    top: '45%'
                }, 200,
                function () {
                    $(this).css('display', 'none');
                    overlay.fadeOut(400);
                }
            );
    });
});
//end

