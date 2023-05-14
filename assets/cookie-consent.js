var cookieBanner = document.querySelector(".cookie-consent");

document
  .querySelector("#cookie-consent-agree")
  .addEventListener("click", function () {
    setCookie("cookie-consent", "true", 365);
    cookieBanner.style.display = "none";
  });

function setCookie(name, value, days) {
  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}
