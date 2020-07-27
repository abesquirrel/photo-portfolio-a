$(document).ready(function() {

    $(".fancybox").fancybox({
        openEffect: "none",
        closeEffect: "none",
        buttons: [
            'share',
            'fullScreen',
            'close'
        ]
    });

    $(".zoom").hover(function() {
        $(this).addClass('transition');
    }, function() {
        $(this).removeClass('transition');
    });

});