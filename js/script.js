//sp-header
$(function(){
    $('.sp-nav__hamburger').click(function(){
        $('.sp-header__nav').fadeToggle();
        $('.sp-nav__hamburger').toggleClass('open');
    });
});

$(function(){
    var flg = "off";
    $('.sp-nav__hamburger').on('click',function(){
        if(flg == "off"){
            $('#hamburger__text').text('CLOSE');
            $(this).css("background-color","#452e13");
            flg = "on";
        }else{
            $('#hamburger__text').text('MENU');
            $(this).css("background-color","#d8bf77");
            flg = "off";
        }
    });
});

//mv
$(function () {
    $(".slider").slick({
        arrows: true,
        autoplay: true,
        adaptiveHeight: true,
        centerMode: true,
        centerPadding: "33%",
        slidesToShow: 1,
        appendArrows: $('.mainvisual__btn'),
        prevArrow: '<button class="mainvisual__btn--prev"><div class="btn-prev__inner mainvisual__btn--innner"><div class="btn btn__rotate"><span class="btn__prev-text--default">PREV</span><span class="btn__prev-text--fterRotate">PREV</span></div><div class="arrow-left"><img class="arrow-left__before" src="./img/btn_left.svg" alt="左矢印"><img class="arrow-left__after" src="./img/btn_left.svg" alt="左矢印"></div></div><div class="line-left"><div class="line-left__inner"></div></div></button>',
        nextArrow: '<button class="mainvisual__btn--next"><div class="btn-next__inner mainvisual__btn--innner"><div class="btn btn__rotate"><span class="btn__next-text--default">NEXT</span><span class="btn__next-text--fterRotate">NEXT</span></div><div class="arrow-right"><img class="arrow-right__before" src="./img/btn_right.svg" alt="右矢印"><img class="arrow-right__after" src="./img/btn_right.svg" alt="右矢印"></div></div><div class="line-right"><div class="line-right__inner"></div></div></button>',
        responsive: [
            {
            breakpoint: 768,
            settings: {
                arrows: true,
                dots: true,
                dotsClass: 'dots-wrap',
                appendDots: $('.dots-box'),
                autoplay: true,
                adaptiveHeight: true,
                centerMode: true,
                centerPadding: "15%",
                slidesToShow: 1,
                appendArrows: $('.mainvisual__btn'),
                prevArrow: '<button class="mainvisual__btn--prev"><div class="btn-prev__inner mainvisual__btn--innner"><div class="btn btn__rotate"><span class="btn__prev-text--default">PREV</span><span class="btn__prev-text--fterRotate">PREV</span></div><div class="arrow-left"><img class="arrow-left__before" src="./img/btn_left.svg" alt="左矢印"><img class="arrow-left__after" src="./img/btn_left.svg" alt="左矢印"></div></div><div class="line-left"><div class="line-left__inner"></div></div></button>',
                nextArrow: '<button class="mainvisual__btn--next"><div class="btn-next__inner mainvisual__btn--innner"><div class="btn btn__rotate"><span class="btn__next-text--default">NEXT</span><span class="btn__next-text--fterRotate">NEXT</span></div><div class="arrow-right"><img class="arrow-right__before" src="./img/btn_right.svg" alt="右矢印"><img class="arrow-right__after" src="./img/btn_right.svg" alt="右矢印"></div></div><div class="line-right"><div class="line-right__inner"></div></div></button>',        
            }
            }
        ]
    });
});

//work-page
$(function () {
    var $filter = $(".work-page__filter [data-filter]"),
    $item = $(".work-page__list [data-category]");

    $filter.click(function (e) {
        e.preventDefault();
        var $this = $(this);

        $filter.removeClass("work-page__active");
        $this.addClass("work-page__active");

        var $filterItem = $this.attr("data-filter");
        if ($filterItem == "all") {
            $item.stop(true, true).fadeOut(200, function () {
            $item.addClass("work-page__active").fadeIn(200);
        });
        } else {
        $item.stop(true, true).fadeOut(200, function () {
            $item
            .filter('[data-category*="' + $filterItem + '"]')
            .addClass("work-page__active")
            .fadeIn(200);
        });
        }
    });
});

//scroll
$(document).ready(function() {
    AOS.init();
});

//graph
$(document).ready(function () {
    $(window).on("load scroll", function () {
        requestAnimationFrame(() => {
            SetScrollTiming(".ani"); 
        });
        });
    });
    function SetScrollTiming(target) {
        var elements = $(target);
        var scrollPos = $(window).scrollTop();
        var windowHeight = $(window).height();
    
        elements.each(function () {
        var offsetTop = $(this).offset().top;
    
        if (scrollPos > offsetTop - windowHeight + 100) {
            $(this).addClass("move"); 
        }
    });
}