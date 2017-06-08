'use strict';

var labView = {};

labView.handleMainNav = function() {
  $('.main-nav').on('click', '.tab', function(e) {
    e.preventDefault();
    var section = $('#' + $(this).data('content'));
    $('html, body').stop().animate({
      scrollTop: $(section).offset().top
    }, 1500,'easeInOutExpo');
  });
}
//     $('#' + $(this).data('content')).fadeIn();
//   });
//
//   $('.main-nav .tab:first').click();
// };
