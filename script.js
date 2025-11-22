const keys = document.querySelectorAll(".key");
const keyboard = document.querySelector(".keyboard");
const themeSelector = document.getElementById("themeSelector");

// SOUND FUNCTION
function playSound(letter) {
  const audio = new Audio(`sounds/${letter.toUpperCase()}.mp3`);
  audio.currentTime = 0;
  audio.play();
}

// VISUAL KEY PRESS
function activate(key) {
  key.classList.add("active");
  setTimeout(() => key.classList.remove("active"), 150);
}

// CLICK EVENT
keys.forEach(k => {
  k.addEventListener("click", () => {
    const letter = k.dataset.key;
    playSound(letter);
    activate(k);
  });
});

// KEYBOARD INPUT
document.addEventListener("keydown", (event) => {
  const keyPressed = event.key.toLowerCase();
  const keyElement = [...keys].find(k => k.dataset.key === keyPressed);
  if (!keyElement) return;

  playSound(keyPressed);
  activate(keyElement);
});

/* 🎨 THEME SWITCHER */
themeSelector.addEventListener("change", (e) => {
  keyboard.classList.remove("razer", "corsair", "hyperx");
  keyboard.classList.add(e.target.value);
});
