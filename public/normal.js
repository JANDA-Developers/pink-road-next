

$(window).scroll(function (e) {
    var scrollHeight = $(this).scrollTop();
    console.log(scrollHeight);
    if (scrollHeight < 670) {
<<<<<<< Updated upstream
        console.log("670 юлго");
=======
>>>>>>> Stashed changes
        $("#gotop").addClass("animationHide");
    } else {
        $("#gotop").removeClass("animationHide");
    }
})