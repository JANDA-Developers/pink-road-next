

$(window).scroll(function (e) {
    var scrollHeight = $(this).scrollTop();
    console.log(scrollHeight);
    if (scrollHeight < 500) {
        console.log("500 이하");
        $("#gotop").addClass("animationHide");

    } else {
        $("#gotop").removeClass("animationHide");
    }
});


// $(document).ready(function () {
//     btn = $('.qna_box .dt');
//     layer = $('.qna_box .dd');
//     icon = $('.qna_box i.jandaicon-arr4-bottom')

//     btn.click(function () {
//         layer.toggle(function () {
//             $(this).find('.description').stop().animate({
//                 height: "toggle",
//                 opacity: "toggle"
//             }, 300);
//         });
//     });
//     // btn.click(function () {
//     //     layer.toggleClass(
//     //         function () {
//     //             layer.addClass('show'),
//     //                 icon.addClass('rotate180')
//     //         },
//     //         function () {
//     //             layer.addClass('hide'),
//     //                 icon.addClass('rotate0')
//     //         }
//     //     );
//     //    $(this).toggle(function () {
//     //             layer.css('display', 'block');
//     //         }, function () {
//     //             layer.css('display', 'none');
//     //         });
//     // });
//     // btn.click(function () {
//     //     icon.toggle(
//     //         function () {
//     //             icon.css({ transform: 'rotate(-180deg)' }),
//     //                 function () { icon.css({ transform: 'rotate( 0deg)' })
//     //     )

//     // });

//     return false;

// });