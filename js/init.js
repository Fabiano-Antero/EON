//Animação fade

AOS.init(
  {
    useClassNames: false,
    debounceDelay: 50,
    throttleDelay: 99,
    once: true
  }
);

// rolagem suave

$(document).ready(function () {

  $("a").on('click', function (event) {


    if (this.hash !== "") {

      event.preventDefault();

      var hash = this.hash;


      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1500, function () {


        window.location.hash = hash;
      });
    }
  });
});


// navbar

var $w = $(window);

$w.on("scroll", function () {
  var banner = $('#barra');
  
  setInterval(function () {
    if ($w.scrollTop() > 400) {
      banner.removeClass('hide');
    }
    if ($w.scrollTop() > 2800 || $w.scrollTop() < 400  ) {
      banner.addClass('hide');
      
    }
  }, 1000);
});

// Verifica qual sistema acessa o site

function getMoib() {

  let userAgent = navigator.userAgent || navigator.vendor || window.opera;

  if (userAgent.match(/iPad/i) || userAgent.match(/iPhone/i) || userAgent.match(/iPod/i)) {
    document.getElementById("g-store").style.display = "none";
    document.getElementById("2g-store").style.display = "none";
    document.getElementById("3g-store").style.display = "none";
  }
  else if (userAgent.match(/Android/i)) {
    document.getElementById("i-store").style.display = "none";
    document.getElementById("2i-store").style.display = "none";
    document.getElementById("3i-store").style.display = "none";
  }
  else {
    null;
  }

}




getMoib()