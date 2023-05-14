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

// const overlay = document.querySelector("#overlay");
// const modal = document.createElement("div");
// modal.classList.add("modal");
// const body = document.querySelector("body");
// let activeImage;

// // Vyberie všetky obrázky a uloží ich do premennej "images"
// const images = document.querySelectorAll(".fotos img");

// // Pre každý obrázok nastaví funkciu, ktorá sa spustí po kliknutí na obrázok
// images.forEach((img) => {
//   img.addEventListener("click", () => {
//     // Vytvorí element "img" pre veľký obrázok a priradí mu zdrojový obrázok
//     const modalImg = document.createElement("img");
//     modalImg.src = img.src.replace("/small/", "/large/"); // Nahradí zdrojovú cestu na veľký obrázok
//     activeImage = img;

//     // Vytvorí element "div" pre tlačidlo na zatvorenie modálneho okna
//     const closeButton = document.createElement("div");
//     closeButton.classList.add("close");
//     closeButton.innerHTML = "&times;";

//     // Pridá elementy "img" a "div" do elementu "div" s triedou "modal"
//     modal.innerHTML = "";
//     modal.appendChild(modalImg);
//     modal.appendChild(closeButton);

//     // Vloží novovytvorený element "div" do tela stránky
//     body.appendChild(modal);

//     // Zobrazí overlay
//     overlay.style.display = "block";

//     // Nastaví funkciu, ktorá sa spustí po kliknutí na tlačidlo na zavretie modálneho okna
//     closeButton.addEventListener("click", () => {
//       modal.innerHTML = "";
//       overlay.style.display = "none";
//     });
//   });
// });

// // Zavrie modálne okno aj keď sa klikne na overlay
// overlay.addEventListener("click", () => {
//   modal.innerHTML = "";
//   overlay.style.display = "none";
// });

// // Funkcia na posúvanie sa šípkami
// function changeImage(next) {
//   // Získaj momentálne zobrazovaný obrázok
//   const currentImage = modal.querySelector("img");

//   // Získaj zoznam všetkých obrázkov v galérii
//   const images = document.querySelectorAll(".fotos img");
//   const numImages = images.length;

//   // Nájdi index momentálne zobrazovaného obrázka v rámci zoznamu
//   const currentIndex = Array.from(images).indexOf(activeImage);

//   // Vypočítaj index nového obrázka
//   let newIndex = currentIndex + (next ? 1 : -1);
//   if (newIndex < 0) {
//     newIndex = numImages - 1;
//   } else if (newIndex >= numImages) {
//     newIndex = 0;
//   }

//   // Získaj nový obrázok z rámca zoznamu obrázkov
//   const newImage = images[newIndex];

//   // Nastav nový zdroj obrázka
//   currentImage.src = newImage.src.replace("/small/", "/large/");

//   // Nastav aktívny obrázok na nový obrázok
//   activeImage = newImage;
// }

// // Nastaví funkciu, ktorá sa spustí po stlačení klávesy
// document.addEventListener("keydown", (event) => {
//   // Zisti, či bola stlačená klávesa šípka doľava alebo do prava
//   if (event.keyCode === 37) {
//     // Posunie sa na predchádzajúci obrázok
//     changeImage(false);
//   } else if (event.keyCode === 39) {
//     // Posunie sa na nasledujúci obrázok
//     changeImage(true);
//   }
// });
window.addEventListener("load", function () {
  var preloader = document.getElementById("preloader");
  setTimeout(function () {
    preloader.style.display = "none";
  }, 0);
});
// const fotos = document.querySelectorAll(".fotos img");
// const overlayy = document.getElementById("overlayy");

// fotos.forEach((foto) => {
//   foto.addEventListener("click", () => {
//     if (window.innerWidth < 768) {
//       overlay.style.display = "none";
//     }
//   });
// });
