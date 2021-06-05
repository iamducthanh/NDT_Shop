function scrollWin() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
function sub() {
    document.getElementById('submit').click();
}
document.getElementById("btShow").onclick = function () {
    document.getElementById("searchGlobal").style.display = "unset";
    document.getElementById("btS").style.display = "unset";
}
var slideGocs = 1;
showSlidess(slideGocs);

function slideN(n) {
  showSlidess(slideGocs = n);
}

function preOrNexts(n) {
  showSlidess(slideGocs += n);
  setTimeout(preOrNexts.bind(this, 1),3000)
}
setTimeout(preOrNexts.bind(this, 1),3000)

// var slider = document.getElementsByClassName('dotin');
// slider[0].onclick = "slideN(1)";
// slider[1].onclick = "slideN(2)";
// slider[2].onclick = "slideN(3)";
// slider[3].onclick = "slideN(4)";
// slider[4].onclick = "slideN(5)";
// slider[5].onclick = "slideN(6)";
// slider[6].onclick = "slideN(7)";
function scrv(contentScroll) {
  document.getElementById(contentScroll).scrollIntoView({
    block: 'center',
    behavior: 'smooth'
  });
}

AOS.init();

var slideGoc = 1;
showSlides(slideGoc);

function preOrNext(n) {
  showSlides(slideGoc += n);
  setTimeout(preOrNext.bind(this, 1),5000)
}
setTimeout(preOrNext.bind(this, 1),5000)
function scrollWin() {
  // window.scrollTo(0, 0);
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}
function burger() {
  if (document.getElementById('account').style.display != 'none') {
    document.getElementById('menu').style.display = 'flex';
    document.getElementById('account').style.display = 'none';
    document.getElementById('burger').style.top = '100px';
    document.getElementById('burgericon').style.fontSize = '8vw';
  } else {
    document.getElementById('menu').style.display = 'none';
    document.getElementById('account').style.display = 'unset';
    document.getElementById('burger').style.top = 'unset';
    document.getElementById('burgericon').style.fontSize = 'unset';
  }
}
window.fbAsyncInit = function () {
  FB.init({
    xfbml: true,
    version: 'v9.0'
  });
};

// (function (d, s, id) {
//   var js, fjs = d.getElementsByTagName(s)[0];
//   if (d.getElementById(id)) return;
//   js = d.createElement(s);
//   js.id = id;
//   js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
//   fjs.parentNode.insertBefore(js, fjs);
// }(document, 'script', 'facebook-jssdk'));

window.onscroll = function () {
  scrollFunction_ct()
};

function scrollFunction_ct() {
  if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
    document.getElementById("contact1").style.left = "32px";
    document.getElementById("backgr").style.top = "0";
    document.getElementById("sct").style.left = "20px";
  } else {
    document.getElementById("contact1").style.left = "-100px";
    document.getElementById("backgr").style.top = "-100px";
    document.getElementById("sct").style.left = "-100px";
  }
}
function showSlidess(n) {
  var i;
  var slideHead = document.getElementsByClassName("sliderr");
  if (n > slideHead.length) {
    slideGocs = 1
  }
  if (n < 1) {
    slideGocs = slideHead.length
  }
  for (i = 0; i < slideHead.length; i++) {
    slideHead[i].style.display = "none";
    document.getElementsByClassName('dotin')[i].style.backgroundColor = '';
  }
  // slideHead[slideGocs].style.display = "none";
  slideHead[slideGocs - 1].style.display = "unset";
  document.getElementsByClassName('dotin')[slideGocs - 1].style.backgroundColor = '#555251';
}

function showSlides(n) {
  var i;
  var slideWear = document.getElementsByClassName("slide_wear");
  if (n > slideWear.length) {
    slideGoc = 1
  }
  if (n < 1) {
    slideGoc = slideWear.length
  }
  for (i = 0; i < slideWear.length; i++) {
    slideWear[i].style.display = "none";
  }
  // slideWear[slideGoc].style.display = "none";
  slideWear[slideGoc - 1].style.display = "flex";
}
document.getElementsByClassName('prev')[0].onclick = preOrNexts.bind(this,-1)
document.getElementsByClassName('next')[0].onclick = preOrNexts.bind(this,1)
document.getElementsByClassName('prev')[1].onclick = preOrNext.bind(this,-1)
document.getElementsByClassName('next')[1].onclick = preOrNext.bind(this,1)
document.getElementsByClassName('scrolltop')[0].onclick = scrollWin
document.getElementsByClassName('fa fa-angle-double-up')[0].onclick = scrollWin
document.getElementsByClassName('btS')[0].onclick = sub
document.getElementsByClassName('fa fa-bars')[0].onclick = burger
var out = document.getElementsByClassName('paddingct');
out[1].onclick = scrv.bind(this, 'bestSeller')
out[2].onclick = scrv.bind(this, 'bottom')
out[3].onclick = scrv.bind(this, 'menuPr')
out[4].onclick = scrv.bind(this, 'full-fes')


