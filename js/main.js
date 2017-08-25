function applyStickyNavbar() {
    $('.site-navbar').affix ({
        offset: {
            top : parseInt($('.carousel').css('height')) - 150
        }
    });
}

function showEventDescription() {
    $('.events > .row > div > div > p > a').click(function(e) {
        var button = $(this);
        var desc = ($(this).parent()).children('span');
        $(desc).slideToggle(950, function() {
            if ($(button).html() == "Know more »") {
                $(button).html("Read less «");
                $(desc).css({
                    'display' : 'block'
                });
            }
            else if ($(button).html() == "Read less «") {
                $(button).html("Know more »");
            }
        });
    });
}

function smoothScrolling() {
    $('.navbar .nav li a[href^="#"]').click (function(e) {
        e.preventDefault();
        var target = $(this).attr('href');
        $('html, body').animate({
            'scrollTop' : $(target).offset().top
        }, 600);
    });
}

$(document).ready(function(){
    applyStickyNavbar();
    showEventDescription();
    smoothScrolling();
});
