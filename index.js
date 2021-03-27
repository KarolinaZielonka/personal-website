/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load("root", "assets/particles.json", () =>
  console.log("everyting is ok!")
);

/* logo typing */

let logoSpan = document.getElementById("logo");
let textForLogo = "kZielonka";
let i = 0;

function logo() {
  setTimeout(function () {
    if (i < textForLogo.length) {
      logoSpan.innerHTML += textForLogo.charAt(i);
      i++;
    }
    logo();
  }, 1000);
}

//logo();
setInterval(logo, 300);
