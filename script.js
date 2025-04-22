const text = "¡Hola! Soy Sheila 👋";
let i = 0;

function typeWriter() {
  const target = document.getElementById("typing-text");
  if (i < text.length) {
    target.innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 80);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  typeWriter();
});