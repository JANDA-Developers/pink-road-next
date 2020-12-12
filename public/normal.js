

$(window).scroll(function (e) {
    var scrollHeight = $(this).scrollTop();
    console.log(scrollHeight);
    if (scrollHeight < 500) {
        console.log("500 이하");
        $("#gotop")
            .addClass("animationHide");
    } else {
        $("#gotop").removeClass("animationHide");
    }
})