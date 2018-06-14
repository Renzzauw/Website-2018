/* Script for showing the right nav menu depending on the viewport width */
$(".nav-hamburger").first().click(function() { $(".overlay-nav").first().show().width("100%"); })
$(".close-button").first().click(function() { $(".overlay-nav").first()/*.hide()*/.width("0"); })
$( window ).resize(function() {
    if (window.innerWidth > 1000) {
        $(".overlay-nav").first().hide().width("0");
        $(".nav-desktop").first().show();
        $(".nav-mobile").first().hide();
    }
    else {
        $(".nav-desktop").first().hide();
        $(".nav-mobile").first().show();
    }
});
/* Script for changing the color of the nav menu logo when hovering over it */
$(".nav-logo").hover(
    function() {
        $(this).attr("src", "./images/logos/RNZO_200x200_mint.png");
    }, function() {
        $(this).attr("src", "./images/logos/RNZO_200x200_white.png");
    }
);
