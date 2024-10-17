$(document).ready(function () {

    $('.entry').delay(5000).fadeOut(400);
    $('.eyes_entry').delay(7000).fadeIn(800);
    $('.dialogue').delay(10000).fadeIn(1000);
    $('.dialogue2').delay(1000).fadeIn(1000);
    $("#owl").hover(function() {
        $(this).css('cursor','pointer').attr('title', 'The owls are not what they seem.');
    }, function() {
        $(this).css('cursor','auto');
    });
});