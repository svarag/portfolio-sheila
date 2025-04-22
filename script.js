const text = "¡Hola! Soy Sheila";
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

  // Efecto divertido al hacer clic en el texto
  const typingText = document.getElementById("typing-text");
  typingText.addEventListener("click", () => {
    for (let j = 0; j < 30; j++) {
      const emoji = document.createElement("span");
      emoji.textContent = "✨";
      emoji.style.position = "absolute";
      emoji.style.left = Math.random() * window.innerWidth + "px";
      emoji.style.top = Math.random() * window.innerHeight + "px";
      emoji.style.fontSize = "2rem";
      emoji.style.animation = "fall 2s linear forwards";
      document.body.appendChild(emoji);

      setTimeout(() => {
        emoji.remove();
      }, 2000);
    }
  });
});