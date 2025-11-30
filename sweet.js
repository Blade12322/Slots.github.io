function getRandomSpins() {
  return Math.floor(Math.random() * 100) + 1;
}

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("signalButton");
  const loaderBox = document.getElementById("loaderBox");
  const resultBox = document.getElementById("resultBox");
  const spinsValue = document.getElementById("spinsValue");
  const closeBtn = document.getElementById("closeResult");

  let analyzing = false;

  btn.addEventListener("click", () => {
    if (analyzing) return;

    analyzing = true;
    loaderBox.classList.remove("hidden");
    resultBox.classList.add("hidden");

    setTimeout(() => {
      const spins = getRandomSpins();
      spinsValue.textContent = String(spins);

      loaderBox.classList.add("hidden");
      resultBox.classList.remove("hidden");

      analyzing = false;
    }, 5000);
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
