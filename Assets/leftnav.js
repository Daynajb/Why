var prevScrollTop = $(window).scrollTop();
var originalOffsetTop = $("#list-example").offset().top;

$(window).scroll(function() {
  var listGroup = $("#list-example");
  var offsetTop = listGroup.offset().top;
  var scrollTop = $(window).scrollTop();

  if (scrollTop >= offsetTop) {
    listGroup.css({
      "position": "fixed",
      "top": "0",
      "left": "50px"
    });
  } else {
    listGroup.css({
      "position": "relative",
      "top": "",
      "left": ""
    });
  }

  // Check for scrolling up
  if (scrollTop < prevScrollTop && scrollTop <= originalOffsetTop) {
    listGroup.css({
      "position": "relative",
      "top": "",
      "left": ""
    });
  }

  prevScrollTop = scrollTop;
});

