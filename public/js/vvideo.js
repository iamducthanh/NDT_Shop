function videoHover() {
    $("#vid")
      .mouseover(function () {
        $(this).get(0).play();
      })
      .mouseout(function () {
        $(this).get(0).pause();
      });
  }
  function videoHover2() {
    $("#vid2")
      .mouseover(function () {
        $(this).get(0).play();
      })
      .mouseout(function () {
        $(this).get(0).pause();
      });
  }
  function videoHover3() {
    $("#vid3")
      .mouseover(function () {
        $(this).get(0).play();
      })
      .mouseout(function () {
        $(this).get(0).pause();
      });
  }
  function videoHover4() {
    $("#vid4")
      .mouseover(function () {
        $(this).get(0).play();
      })
      .mouseout(function () {
        $(this).get(0).pause();
        $(this).get(0).load();
      });
  }
  
  
  // var figure = $(".video").hover( hoverVideo, hideVideo );
  
  // function hoverVideo(e) {
  //     $('video', this).get(0).play();
  // }
  
  // function hideVideo(e) {
  //     $('video', this).get(0).pause();
  // }
  