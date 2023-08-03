$(document).ready(function () {
  $("#menu").click(function () {
    $(this).toggleClass("fa-times");
    $(".navbar").toggleClass("nav-toggle");
  });

  $(window).on("scroll load", function () {
    $("#menu").removeClass("fa-times");
    $(".navbar").removeClass("nav-toggle");

    if ($(window).scrollTop() > 60) {
      $("header").addClass("header-active");
    } else {
      $("header").removeClass("header-active");
    }

    $("section").each(function () {
      let top = $(window).scrollTop();
      let height = $(this).height();
      let offset = $(this).offset().top - 200;
      let id = $(this).attr("id");

      if (top >= offset && top < offset + height) {
        $(".navbar ul li a").removeClass("active");
        $(".navbar").find(`[href="#${id}"]`).addClass("active");
      }
    });
  });
});
$(document).ready(function () {
  // pri každom scrollingu zobrazíme tlačidlo iba ak sme niekde v strede alebo na konci stránky
  $(window).scroll(function () {
    if ($(this).scrollTop() > $(window).height()) {
      $("#scroll-to-top").fadeIn();
    } else {
      $("#scroll-to-top").fadeOut();
    }
  });

  // po kliknutí na tlačidlo sa posunieme na vrch stránky
  $("#scroll-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 100);
    return false;
  });
});

window.addEventListener("load", function () {
  var preloader = document.getElementById("preloader");
  setTimeout(function () {
    preloader.style.display = "none";
  }, 0);
});
window.addEventListener('scroll', function () {
  let scrollValue = window.scrollY;

  const parallaxLayers = document.querySelectorAll('.parallax-layer');

  parallaxLayers.forEach(function (layer, index) {
    let speed = 0.1 * (index + 1);
    let yOffset = -(scrollValue * speed);
    layer.style.transform = `translateY(${yOffset}px)`;
  });
});