
$(document).ready(function () {
    $(window).bind('scroll', function () {
        var gap = 50;
        if ($(window).scrollTop() > gap) {
            $('.navbar').addClass("active");
        } else {
            $('.navbar').removeClass("active")
        }
        if (this.scrollY > 400) {
            $('.scroll-up-btn ').addClass("show");
        } else {
            $('.scroll-up-btn ').removeClass("show");
        }
    });

    // slide-up script 
    $('.scroll-up-btn ').click(function () {
        $('html,body').animate({ scrollTop: 0 });
    });



    // toggle menu/navbar script 
    $(' .menu-btn ').click(function () {
        $(' .navbar .menu').toggleClass("showing");
        $(' .menu-btn i').toggleClass("showing");
    })
});


//  typing animation script 
var typed = new Typed(".typing-text-1", {
    strings: ["Web Developer.", "Open-Source.", "Web Designer.", "Front-End Developer.",],
    loop: true,
    typeSpeed: 50,
    backSpeed: 35,
    backDelay: 500,
});

var typed = new Typed(".typing-text-2", {
    strings: ["Web Developer.", "Web Designer.", "Front-End Developer.",],
    loop: true,
    typeSpeed: 50,
    backSpeed: 35,
    backDelay: 500,
});




