

$(window).scroll(function (e) {
    var scrollHeight = $(this).scrollTop();
    if (scrollHeight < 670) {
        $("#gotop")
            .addClass("animationHide");
    } else {
        $("#gotop").removeClass("animationHide");
    }
})