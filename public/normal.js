

$(window).scroll(function (e) {
    var scrollHeight = $(this).scrollTop();
    if (scrollHeight < 500) {
<<<<<<< HEAD
        $("#gotop")
            .addClass("animationHide");
=======
        console.log("500 이하");
        $("#gotop").addClass("animationHide");

>>>>>>> origin/design
    } else {
        $("#gotop").removeClass("animationHide");
    }
});


// $(document).ready(function () {
//     closebtn = $('#Popup01 .close_icon');
//     popup = $('#Popup01');

//     closebtn.click(function () {
//         icon.toggle(
//             function () {
//                 icon.css({ transform: 'rotate(-180deg)' }),
//                     function () {
//                         icon.css({ transform: 'rotate( 0deg)' })

//                     })
// });
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


// return false;

// });