$(document).ready(function () {
    var scroll_pos = 0;
    $(document).scroll(function () {
      scroll_pos = $(this).scrollTop();
      if (scroll_pos > 100) {
        $("#navbar").addClass("md:h-[100px]");
        $("#navbar").addClass("md:drop-shadow-2xl");
        $("#navbar").addClass("md:bg-darkgreen");
        $("#navbar").removeClass("md:bg-transparentr");
        $("#navbar").removeClass("md:h-[150px]");
      } else {
        $("#navbar").removeClass("md:bg-darkgreen");
        $("#navbar").addClass("md:bg-transparentr");
        $("#navbar").addClass("md:h-[150px]");
        $("#navbar").removeClass("md:h-[100px]");
        $("#navbar").removeClass("md:drop-shadow-2xl");
      }
    });
  });
  $(window)
    .scroll(function () {
      var windscroll = $(window).scrollTop();
      if (windscroll >= 100) {
        $(".section").each(function (i) {
          // The number at the end of the next line is how pany pixels you from the top you want it to activate.
          if ($(this).position().top <= windscroll - 0) {
            $("nav li.active").removeClass("active");
            $("nav li").eq(i).addClass("active");
          }
        });
      } else {
        $("nav li.active").removeClass("active");
        $("nav li:first").addClass("active");
      }
    })
    .scroll();
  
