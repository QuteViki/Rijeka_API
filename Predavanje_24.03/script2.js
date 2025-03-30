const tekst = document.getElementById("tekst");
const glavni = document.getElementById("body");
const gumbV = document.getElementById("plus");
const gumbM = document.getElementById("minus");
const gumb_classic = document.getElementById("classic");
const gumb_plava = document.getElementById("plava");
const gumb_crvena = document.getElementById("crvena");
const verdana = document.getElementById("verdana");
const impact = document.getElementById("impact");
const courier = document.getElementById("courier");

let velicina = 16;
gumbV.addEventListener("click", function () {
  velicina = velicina * 1.2;
  tekst.style.fontSize = velicina + "px";
});

gumbM.addEventListener("click", function () {
  velicina = velicina / 1.2;
  tekst.style.fontSize = velicina + "px";
});

gumb_classic.addEventListener("click", function () {
  boja = "black";
  tekst.style.color = boja;
  glavni.style.backgroundColor = "white";
});

gumb_plava.addEventListener("click", function () {
  boja = "blue";
  tekst.style.color = boja;
  glavni.style.backgroundColor = "cyan";
});

gumb_crvena.addEventListener("click", function () {
  boja = "red";
  tekst.style.color = boja;
  glavni.style.backgroundColor = "pink";
});

verdana.addEventListener("click", function () {
  tekst.style.fontFamily = "Verdana";
});
impact.addEventListener("click", function () {
  tekst.style.fontFamily = "Impact";
});
courier.addEventListener("click", function () {
  tekst.style.fontFamily = "Courier New";
});
