const bootText = [
  "INITIALIZING SECURE ARCHIVE...",
  "CHECKING SYSTEM INTEGRITY...",
  "LOADING CLEARANCE PROTOCOLS...",
  "READY."
];

let line = 0;
let char = 0;

const bootEl = document.getElementById("boot");
const loginEl = document.getElementById("login");

function typeBoot() {
  if (line < bootText.length) {
    if (char < bootText[line].length) {
      bootEl.textContent += bootText[line][char];
      char++;
      setTimeout(typeBoot, 30);
    } else {
      bootEl.textContent += "\n";
      line++;
      char = 0;
      setTimeout(typeBoot, 400);
    }
  } else {
    loginEl.style.display = "block";
  }
}

typeBoot();

function checkPassword() {
  const input = document.getElementById("password");
  const message = document.getElementById("message");

  message.textContent = "VERIFYING...";

  setTimeout(() => {
    if (input.value === "LILYSCARLET") {
      message.textContent = "ACCESS GRANTED";
      setTimeout(() => {
        window.location.href = "database.html";
      }, 1000);
    } else {
      message.textContent = "ACCESS DENIED";
      message.className = "denied";
    }
  }, 1200);
}