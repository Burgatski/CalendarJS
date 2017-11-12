$(".cube, .cube2").click(function () {
  var element = $(this);
  $("#box").show();
  $("#box").offset({left:element.innerWidth() + element.offset().left, top: element.innerHeight()/2 + element.offset().top});


});

    /*x=e.pageX;
    y=e.pageY;
    left=div.offsetLeft;
    top=div.offsetTop;
    left=x-left;
    top=y-top;*/
