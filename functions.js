$(document).ready(function() {
  //Variables
  var totalWidth = 0,
      positions = [0],
      speed = 800;

  //Make first menu item active
  $("#menu ul li.product:first").addClass("active");

  //Get slide positions
  $("#slider .slide").each(function(i) {
    totalWidth += $(this).width();
    positions[i+1] = totalWidth;
    console.log(positions);
  });

  //Toggle active class on menu items and slide to corresponding pic in slider
  $(".product").on("click", function(e, keepScroll) {
    $("li.product").removeClass("active").addClass("inactive");
    $(this).addClass("active");

    //Get the position of menu element
    var pos = $(this).prevAll(".product").length;

    //Prevent default
    e.preventDefault();

    //Stop autoScroll
    if ( !autoScroll ) clearIntercal(itvl);

    //Animate slide change
    $('#slider').stop().animate({marginLeft: -positions[pos]}, speed);

  });

    //Autoscroll
    var current = 0,
        right = true;

    function autoScroll() {
      if ( current === -1 ) return false;

      $("#menu ul li.product").eq(current).trigger("click", [true]);

      if ( right ) {
        current++;
        if ( current === 4) {
          right = false;
        }
      } else {
        current--;
        if ( current === 0 ) {
          right = true;
        }
      }

    }

    //Autoscroll duration
    var duration = 5,
        itvl = setInterval(function() {autoScroll()}, duration*1000);


});
