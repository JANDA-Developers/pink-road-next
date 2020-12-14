

$(window).scroll(function (e) {
    var scrollHeight = $(this).scrollTop();
    if (scrollHeight < 500) {
        $("#gotop")
            .addClass("animationHide");
    } else {
        $("#gotop").removeClass("animationHide");
    }
})