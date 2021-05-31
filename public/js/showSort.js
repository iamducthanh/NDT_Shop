function colorArrow() {
    if (document.getElementById("sortColor").style.height == "107px") {
      document.getElementById("sortColor").style.height = "0px";
      document.getElementById("ColorArrow").style.transform = "rotate(0)";
      document.getElementById("sortColor").style.paddingBottom = "0px";
    } else {
      document.getElementById("sortColor").style.height = "107px";
      document.getElementById("ColorArrow").style.transform = "rotate(-180deg)";
      document.getElementById("sortColor").style.paddingBottom = "10px";
    }
  }
  function khoangGiaArrow() {
    if (document.getElementById("khoangGia").style.height == "155px") {
      document.getElementById("khoangGia").style.height = "0px";
      document.getElementById("kGiaAr").style.transform = "rotate(0)";
      document.getElementById("khoangGia").style.paddingBottom = "0px";
    } else {
      document.getElementById("khoangGia").style.height = "155px";
      document.getElementById("kGiaAr").style.transform = "rotate(-180deg)";
      document.getElementById("khoangGia").style.paddingBottom = "10px";
    }
  }
  function sizeArrow() {
    if (document.getElementById("sortSize").style.height == "50px") {
      document.getElementById("sortSize").style.height = "0px";
      document.getElementById("sortSizeArrow").style.transform = "rotate(0)";
      document.getElementById("sortSize").style.paddingBottom = "0px";
    } else {
      document.getElementById("sortSize").style.height = "50px";
      document.getElementById("sortSizeArrow").style.transform = "rotate(-180deg)";
      document.getElementById("sortSize").style.paddingBottom = "20px";
    }
  }

  document.getElementsByClassName('title')[0].onclick = colorArrow;
  document.getElementsByClassName('title')[1].onclick = sizeArrow;
  document.getElementsByClassName('title')[2].onclick = khoangGiaArrow;


  