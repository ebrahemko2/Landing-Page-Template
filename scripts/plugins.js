$(document).ready(function() {

    //Change Page Color
    $('.gear-check').click(function() {
        $('.color-option').toggle(300);
    });

    let colorList = $('.color-option ul li');
    colorList.eq(0).css('backgroundColor', '#d72323').end()
    .eq(1).css('backgroundColor', '#00adb5').end()
    .eq(2).css('backgroundColor', '#009044').end()
    .eq(3).css('backgroundColor', '#fd0054').end()
    .eq(4).css('backgroundColor', '#9818d6');

    colorList.click(function () {
        $("link[href*='theme']").attr('href', $(this).attr('data-value'));
    });
});


// Loading Screen Section
$(window).load(function () {
    $('.sk-folding-cube').fadeOut(500, function () {
        $(this).parent().fadeOut(500, function () {
            $('body').css('overflow', 'auto');
            $(this).remove();
        });
    });
});


// Scroll Top Section
let scrollBtn = $('.scroll-top');
$(window).scroll(function () {
    if ($(this).scrollTop() >= 1000) {
        scrollBtn.show();
    } else {
        scrollBtn.hide();
    }
});

scrollBtn.click(function () {
    $('html,body').animate({scrollTop: 0}, 500);
});
