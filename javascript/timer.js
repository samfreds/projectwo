$(document).ready(function () {

    $('.entry').delay(5000).fadeOut(400);
    $('.eyes_entry').delay(7000).fadeIn(800);
    $('.dialogue').delay(10000).fadeIn(1000);
    $('.dialogue2').delay(1000).fadeIn(1000);

    var timeLeft = 10;
    var $timer = $('.timer');
    var $submitButton = $('#submit');

    $submitButton.hide();

    var timerId = setInterval(countdown, 1000);

    function countdown() {
        if (timeLeft < 0) {
            clearTimeout(timerId);
            doSomething();
        } else {
            $timer.text(timeLeft + ' seconds');
            timeLeft--;
        }
    }

    function doSomething() {
        $submitButton.fadeIn(1000); 
    }
    $submitButton.on('click', function() {
        window.location.href = 'onemorething.html';
    });
});
