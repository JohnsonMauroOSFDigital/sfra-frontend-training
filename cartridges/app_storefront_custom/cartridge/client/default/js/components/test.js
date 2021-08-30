console.log("test");

$(document).ready(function() {
    $(".regular").slick({
        infinite: true,
        asNavFor: '.regular-sync'
    });

    $(".regular-sync").slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
    });
});
