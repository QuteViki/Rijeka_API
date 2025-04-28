const ekran = document.getElementById("ekran");
let timer = null;
let vrijemeKreni = 0;
let protekloVrijeme = 0;
let tece = false;

function kreni() {
  if (!tece) {
    vrijemeKreni = Date.now() - protekloVrijeme;
    timer = setInterval(azuriraj, 10); // ispravljeno (update -> azuriraj)
    tece = true;
  }
}

function stani() {
  if (tece) {
    clearInterval(timer);
    protekloVrijeme = Date.now() - vrijemeKreni;
    tece = false;
  }
}

function reset() {
  clearInterval(timer);
  vrijemeKreni = 0;
  protekloVrijeme = 0;
  tece = false;
  ekran.textContent = "00:00:00:00";
}

function azuriraj() {
  const trenutnoVrijeme = Date.now();
  protekloVrijeme = trenutnoVrijeme - vrijemeKreni;

  let sati = Math.floor(protekloVrijeme / (1000 * 60 * 60));
  let minute = Math.floor((protekloVrijeme / (1000 * 60)) % 60);
  let sekunde = Math.floor((protekloVrijeme / 1000) % 60);
  let millisekunde = Math.floor((protekloVrijeme % 1000) / 10);

  sati = String(sati).padStart(2, "0");
  minute = String(minute).padStart(2, "0");
  sekunde = String(sekunde).padStart(2, "0");
  millisekunde = String(millisekunde).padStart(2, "0");

  ekran.textContent = `${sati}:${minute}:${sekunde}:${millisekunde}`;
}
