

function onYouTubeIframeAPIReady() {
    player = new YT.Player('ytplayer', {
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        },
        loop: 1
    });

}

function onPlayerReady() {
    player.setVolume(3);

}

function onPlayerPause() {
    player.pauseVideo();

}

function onPlayerPlay() {
    player.playVideo();
}

function FNvodSize(_id, _ratio) {
    var screenWidth = document.documentElement.clientWidth;
    var screenHeight = document.documentElement.clientHeight;
    var screenRatio = screenWidth / screenHeight;
    var offsetY = -((1080 / screenHeight) / 2);
    var movWidth = 1920;
    var movHeight = 1080;
    var movRatio = movWidth / movHeight;

    if (movRatio <= screenRatio) {
        var Tratio = _ratio.split(":");
        var vodW = screenWidth;
        var vodH = Math.round(vodW * Number(Tratio[1] / Tratio[0]));
        $(_id).css({
            "height": vodH,
            "width": "100%",
            "margin-top": "-3.35%",
            "margin-left": -(screenWidth / 2)
        });
    } else {
        $(_id).css({
            "height": screenHeight,
            "width": movRatio * screenHeight,
            "margin-top": "0",
            "margin-left": -((movRatio * screenHeight) / 2)
        });
    }
}

$(window).load(function () {
    FNvodSize("#ytplayer", "16:9");
    $("#vodScreen").animate({
        "opacity": "0"
    });
});

$(window).resize(function () {
    FNvodSize("#ytplayer", "16:9");
});
