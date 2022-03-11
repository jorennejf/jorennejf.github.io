//BACK TO TOP - When the user scrolls down 200px from the top of the document, show the button
$(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 200) {
        $('#backtop').fadeIn();
    } else {
        $('#backtop').fadeOut();
    }
});

$(document).ready(function() {
    $(document.body).css('opacity', 1); //Fade in animation on load

    //BACK TO TOP - When the user clicks on the button, scroll to the top of the document
    $("#backtop").click(function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });

});
