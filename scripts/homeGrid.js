/* Script for switching page title and description when hovering over a panel */
$(".grid-item h3").hide();
$(".grid-item").hover(
    function() {
        $("h3", this).show();
        $("h1", this).hide();
    }, function() {
        $("h3", this).hide();
        $("h1", this).show();
    }
);
