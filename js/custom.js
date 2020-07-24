$(document).ready(function(){

    var $nav = $('#nav');
    var $navPart = $nav.children('.inner').children('ul');
    var $nav_li = $navPart.children('li');
    var $navBg = $('.navBg');
    var $header = $('header');

    var asidePo = $('#floatBox').offset().top;

    mainSlide();

    $nav.on('mouseenter', function(){
        $navPart.find('ul').show();
        $navBg.show();
    })

    $navBg.on('mouseleave', function(){
        $navPart.find('ul').hide();
        $navBg.hide();
    })

    $header.on('mouseenter', function(){
        $navPart.find('ul').hide();
        $navBg.hide();
    })

    $nav_li.on('mouseenter', function(){
        $(this).children('a').addClass('on');
    });

    $nav_li.on('mouseleave', function(){
        $(this).children('a').removeClass('on');
    });

    $('#searchBox').on('focusin', function(){
        $navPart.find('ul').hide();
        $navBg.hide();
    })

    

    $(window).on('scroll', function(){
        var scrollTop = $(window).scrollTop();
        
        if(scrollTop >= asidePo){
            $('#floatBox').css({position: 'fixed', top: '50px'});
        }
        if(scrollTop < asidePo){
            $('#floatBox').css({position: 'absolute', top: '840px'});
        }
    });



    function mainSlide(){
        var mySwiper = new Swiper('.swiper-container', {
            direction: 'horizontal',
            loop: true,
    
            navigation: {
                nextEl : '.swiper-button-next',
                prevEl : '.swiper-button-prev'
            },
    
            pagination: {
                el: '.swiper-pagination',
                clickable: true
            }
        })
    }
    

})