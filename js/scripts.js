$(document).ready(function() {

    var images = new Array();

    images[0] = "https://res.cloudinary.com/sehnsucht/image/upload/v1583899960/cityscape/70626502_265952317694323_5779666266969453201_n.jpg_exr15e.jpg";
    images[1] = "https://res.cloudinary.com/sehnsucht/image/upload/v1583899956/cityscape/74414833_960479074285898_8271661162441003288_n.jpg_hmi1kv.jpg";
    images[2] = "https://res.cloudinary.com/sehnsucht/image/upload/v1583899951/cityscape/89063738_1198422477172330_2046864221111067542_n.jpg_ldikr9.jpg";
    images[3] = "https://res.cloudinary.com/sehnsucht/image/upload/v1583899950/cityscape/89611335_963137180749321_6289639846904665014_n.jpg_qqlzaj.jpg";
    images[4] = "https://res.cloudinary.com/sehnsucht/image/upload/v1583899784/cityscape/IMG_20200308_134036_694_4_q78tgj.jpg";
    images[5] = "https://res.cloudinary.com/sehnsucht/image/upload/v1583899760/cityscape/IMG_20200308_134033_217_1_scagwb.jpg";
    images[6] = "https://res.cloudinary.com/sehnsucht/image/upload/v1596598197/03-20/20200307-DSCF7448-Edit_rywc1f.jpg";
    images[7] = "https://res.cloudinary.com/sehnsucht/image/upload/v1596598196/03-20/20200307-DSCF7462_windowHeightxpwv.jpg";
    images[8] = "https://res.cloudinary.com/sehnsucht/image/upload/v1596598193/03-20/20200322-DSCF7541_fggvft.jpg";
    images[9] = "https://res.cloudinary.com/sehnsucht/image/upload/v1596598192/03-20/20200307-DSCF7470_azdbwx.jpg";
    images[10] = "https://res.cloudinary.com/sehnsucht/image/upload/v1596598192/03-20/20200307-DSCF7464_dheobk.jpg";
    images[11] = "https://res.cloudinary.com/sehnsucht/image/upload/v1596598191/03-20/20200317-DSCF7535_itewik.jpg";
    images[12] = "https://res.cloudinary.com/sehnsucht/image/upload/v1596598188/03-20/20200307-DSCF7442_j3ovjq.jpg";
    images[13] = "https://res.cloudinary.com/sehnsucht/image/upload/v1596598187/03-20/20200307-DSCF7443_l2ikou.jpg";
    images[14] = "https://res.cloudinary.com/sehnsucht/image/upload/v1596598185/03-20/20200315-DSCF7518_pu8our.jpg";
    images[15] = "https://res.cloudinary.com/sehnsucht/image/upload/v1596598183/03-20/20200315-DSCF7478_akqlq0.jpg";
    images[16] = "https://res.cloudinary.com/sehnsucht/image/upload/v1596599159/4-20/20200411-DSCF0032_fkrvm0.jpg";
    images[17] = "https://res.cloudinary.com/sehnsucht/image/upload/v1596599158/4-20/20200225-DSCF7352_xotlxv.jpg";
    images[18] = "https://res.cloudinary.com/sehnsucht/image/upload/v1596599156/4-20/20200225-DSCF7358_avkryv.jpg";
    images[19] = "https://res.cloudinary.com/sehnsucht/image/upload/v1596599153/4-20/20200225-DSCF7274_r0mnul.jpg";
    images[20] = "https://res.cloudinary.com/sehnsucht/image/upload/v1596599152/4-20/20200225-DSCF7341_hn69qu.jpg";
    images[21] = "https://res.cloudinary.com/sehnsucht/image/upload/v1596599151/4-20/20200225-DSCF7291_lrlgcg.jpg";
    images[22] = "https://res.cloudinary.com/sehnsucht/image/upload/v1596598835/4-20/20200225-DSCF7274_z5vd3m.jpg";

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
        ],
        afterShow: function() {
            this.height = $(window).height();
            this.width = 'auto'
        }

    });

    $(".zoom").hover(function() {
        $(this).addClass('transition');
    }, function() {
        $(this).removeClass('transition');
    });

});