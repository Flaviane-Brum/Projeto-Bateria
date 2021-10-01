document.body.addEventListener("keyup", (event) => {
  playSound(event.code.toLowerCase());
});

document.querySelector(".composer button").addEventListener("click", () => {
  let song = document.querySelector("#input").value;
  if (song !== "") {
    let songArray = song.split("");
    playComposition(songArray);
  }
});
function playSound(sound) {
  let audioElement = document.querySelector(`#s_${sound}`);
  let keyElement = document.querySelector(`div[data-key="${sound}"]`);
  if (audioElement) {
    audioElement.currentTime = 0;
    audioElement.play();
  }
  let prato = document.querySelector(".prato");
  if (keyElement && keyElement.className === "chimbau-top") {
    keyElement.classList.add("tremer");
    setTimeout(() => {
      keyElement.classList.remove("active");
      keyElement.classList.remove("tremer");
    }, 200);
  }
  if (keyElement && keyElement.className === "prato") {
    keyElement.classList.add("tremer");
    setTimeout(() => {
      keyElement.classList.remove("active");
      prato.classList.remove("tremer");
    }, 200);
  }
  if (keyElement) {
    keyElement.classList.add("active");
    setTimeout(() => {
      keyElement.classList.remove("active");
      prato.classList.remove("tremer");
    }, 200);
  }
}

function playComposition(songArray) {
  let wait = 0;
  for (const songItem of songArray) {
    setTimeout(() => {
      playSound(`key${songItem}`);
    }, wait);
    wait += 250;
  }
}
