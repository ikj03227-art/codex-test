const STORAGE_KEY = "codex-cloud-tap-count";
const countDisplay = document.querySelector("#count");
const countButton = document.querySelector("#count-button");

function loadCount() {
  const savedCount = Number.parseInt(localStorage.getItem(STORAGE_KEY) ?? "0", 10);
  return Number.isSafeInteger(savedCount) && savedCount >= 0 ? savedCount : 0;
}

let count = loadCount();
countDisplay.textContent = String(count);

countButton.addEventListener("click", () => {
  count += 1;
  countDisplay.textContent = String(count);
  localStorage.setItem(STORAGE_KEY, String(count));
});
