/*scroll up show hide on scroll down*/
var lastScrollTop = 0;
navbar = document.getElementById('upScroll');
window.addEventListener("scroll", function(){
  var scrollTop = window.pageYOffset || document
  .documentElement.scrollTop;
  if (scrollTop > lastScrollTop){
    navbar.style.top ="-90px";
  }else{
    navbar.style.top = "0";
  }
  lastScrollTop = scrollTop;
});
var scrollDown = 0;
hideClass = document.getElementById('upScroll');
window.addEventListener("scroll", function(){
    var upper = window.pageYOffset || document.documentElement.scrollDown;
    if(upper > scrollDown){
      hideClass.classList.remove("hide");
      hideClass.classList.add('bg-white');
      hideClass.classList.remove('bg-transparent');
      hideClass.classList.add("shadow-sm");
    }else{
      hideClass.classList.remove("shadow-sm");
      hideClass.classList.add("hide");
      hideClass.classList.add('bg-transparent');
      hideClass.classList.remove('bg-white');
    }
});


let loader = document.querySelector(".bg");
window.addEventListener("load", function(){
  loader.style.opacity = "0"; 
  loader.style.zIndex = "-1";
});

$('.sub-menu ul').hide();
$(".sub-menu a").click(function () {
	$(this).parent(".sub-menu").children("ul").slideToggle("100");
	$(this).find(".right").toggleClass("fa-chevron-up fa-chevron-down");
});
/*Form not redirect to next page */

{
   let msg = document.getElementById('message');
   let submitBtn = document.getElementById('submition');
   submitBtn.disabled = true;
   msg.addEventListener("change", stateHandle);
   function stateHandle() {
     if (document.getElementById("message").value === "") {
       submitBtn.disabled = true;
     } else {
       submitBtn.disabled = false;
     }
   }
}

{
  let hiddenFrame = document.getElementById('hiddenFrame');
  let contactForm = document.getElementById('contactForm');
  function submitionss() {
    hiddenFrame.style.display = "block";
    contactForm.style.display = "none";
  }
}
///one time covid-19 alert///
//(function() {
//  var visited = localStorage.getItem('visited');
//  if (!visited) {
//      document.getElementById("covid-alert").style.visibility = "visible";
//      document.getElementById("alert-cookie").style.visibility = "visible";
//      localStorage.setItem('visited', true);
//  }
//})();
function cookie() {

  var cookieAcceptButton = $('.cookie__accept'),
      cookieAlert = $('.cookie');

  cookieAcceptButton.on('click', function() {
    cookieAlert.fadeOut('slow');
  });
  
}
$(function() {
  cookie();
});

///show cookie alert messgae on all pages if accept button not clicked else remove from all the pages///
$(function() {
  // When accept clicked, use localStorage to remember to hide//
  // the cookieAlert div by using localStorage.setItem()///
  $('#accept').click(function() {
    localStorage.setItem('cookieAlert', 'hide');  
  });  

  // When the page is loaded and this script is run, check if ///
  // "cookieAlert" has "hide" in localStorage //
  if(localStorage.getItem('cookieAlert') === 'hide') {

    // If "hide" is in local storage, then hide() any element with //
    // id of cookieAlert that exists on the page //
    $('#cookieAlert').hide();
  }

});
///covid one time///
$(function() {
  // When covid__btn clicked, use localStorage to remember to hide//
  // the covidAlert div by using localStorage.setItem()//
  $('#covid__btn').click(function() {
    localStorage.setItem('covidAlert', 'hide');  
  });  

  // When the page is loaded and this script is run, check if //
  // "covidAlert" has "hide" in localStorage//
  if(localStorage.getItem('covidAlert') === 'hide') {

    // If "hide" is in local storage, then hide() any element with//
    // id of covidAlert that exists on the page//
    $('#covidAlert').hide();
  }

});