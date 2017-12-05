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

function homePageSmoothScrolling() {
    $('.carousel-container a[href="#"]').click(function(e) {
        e.preventDefault();
        var target = $('#about-us');
        $('html, body').animate({
            'scrollTop' : $(target).offset().top-60
        }, 600);
    });
}

function showEventModal() {
    $(".event .img-container").click(function() {
        var modalId = $(this).parent().siblings($('.modal')).attr('id');
        console.log(modalId);
        $('#' + modalId).modal('show');
    });
}

function assignEventIds() {
    $('.event-page .event h2').each(function() {
        var id = $(this).html().toLowerCase().replace(/\ /g, '-');
        $(this).parent().attr('id', id);
    });
    $('.event-page #sidebar a[href="#"]').each (function() {
        var id = $(this).html().toLowerCase().replace(/\ /g, '-');
        $(this).attr('href', '#'+id);
    });
    $('.event-page #sidebar a[href^="#"]').click(function(e) {
        var target = $(this).attr('href');
        $('html, body').animate({
            'scrollTop' : $(target).offset().top-60
        }, 600);
    });
}

function eventPageSmoothScrolling() {
    $('.navbar .dropdown-menu a[href="#"]').each(function() {
        var id = $(this).html().toLowerCase().replace(/\ /g, '-');
        $(this).attr('href', '#'+id);
    });
    $('.navbar .dropdown-menu a[href^="#"]').click(function(e) {
        var target = $(this).attr('href');
        $('.navbar-toggle').trigger("click");
        $('html, body').animate({
            'scrollTop' : $(target).offset().top-60
        }, 600);
    });
}

function handleShowEventDesc() {
    $('.show-event-desc').click(function(e) {
        if ($(this).html() == "Show more") {
            $(this).siblings($('.event-desc')).addClass('show-text');
            $(this).html("Show less");
        }
        else {
            $(this).siblings($('.event-desc')).removeClass('show-text');
            $(this).html("Show more");
        }
    });
}

$(document).ready(function() {
    // Stop browser from appending # when clicking empty links
    $('a[href="#"]').click(function(e) {
        e.preventDefault();
    });
    applyStickyNavbar();
    showEventDescription();
    homePageSmoothScrolling();
    showEventModal();
    assignEventIds();
    eventPageSmoothScrolling();
    handleShowEventDesc();
});
