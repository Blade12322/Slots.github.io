function getRandomSpins() {
  return Math.floor(Math.random() * 100) + 1;
}

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("signalButton");
  const resultBox = document.getElementById("resultBox");
  const spinsValue = document.getElementById("spinsValue");
  const closeBtn = document.getElementById("closeResult");

  btn.addEventListener("click", () => {
    const spins = getRandomSpins();
    spinsValue.textContent = String(spins);
    resultBox.classList.remove("hidden");
  });

  closeBtn.addEventListener("click", () => {
    resultBox.classList.add("hidden");
  });

  resultBox.addEventListener("click", (e) => {
    if (e.target === resultBox) {
      resultBox.classList.add("hidden");
    }
  });
});
