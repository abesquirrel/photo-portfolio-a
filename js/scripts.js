$(document).ready(function() {

    var images = new Array();
    images[0] = "https://res.cloudinary.com/sehnsucht/image/upload/v1584429877/cityscape/midtown_cloudy.jpg";
    images[1] = "https://res.cloudinary.com/sehnsucht/image/upload/v1584340140/cityscape/DSC_3879_c5avcs.jpg";
    images[2] = "https://res.cloudinary.com/sehnsucht/image/upload/v1584340356/cityscape/munich_bg.jpg";
    images[3] = "https://res.cloudinary.com/sehnsucht/image/upload/v1584340140/cityscape/DSC_3879_c5avcs.jpg";

    //load image from array
    for (let i = 0; i < images.length; i++) {
        $('#mosaic').prepend(
            $('<div/>')
            .addClass("col-lg-3 col-md-4 col-xs-6 thumb")
            .prepend(
                $('<a/>')
                .attr('href', images[i])
                .addClass("fancybox")
                .prepend($('<img/>')
                    .attr('src', images[i])
                    .attr('alt', "")
                    .addClass("zoom img-fluid")
                ))
        );
    }

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