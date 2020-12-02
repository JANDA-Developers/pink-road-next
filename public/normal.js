

$(window).scroll(function (e) {
    var scrollHeight = $(this).scrollTop();
    console.log(scrollHeight);
    if (scrollHeight < 670) {
        console.log("670 ����");
        $("#gotop").addClass("animationHide");
    } else {
        $("#gotop").removeClass("animationHide");
    }
})