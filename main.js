/* Typing Effect */
const typingText = document.getElementById("typing");

const words = ["Adli", "UI/UX Designer", "Front-End Developer"];
let wordIndex = 0;
let letterIndex = 0;

function typeEffect() {
  if (letterIndex < words[wordIndex].length) {
    typingText.innerHTML += words[wordIndex].charAt(letterIndex);
    letterIndex++;
    setTimeout(typeEffect, 120);
  } else {
    setTimeout(deleteEffect, 1500);
  }
}

function deleteEffect() {
  if (letterIndex > 0) {
    typingText.innerHTML = words[wordIndex].substring(0, letterIndex - 1);
    letterIndex--;
    setTimeout(deleteEffect, 80);
  } else {
    wordIndex = (wordIndex + 1) % words.length;
    setTimeout(typeEffect, 200);
  }
}

typeEffect();

/* Scroll Animation */
const scrollElements = document.querySelectorAll("section");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  },
  { threshold: 0.2 }
);

scrollElements.forEach((el) => {
  el.classList.add("scroll-animate");
  observer.observe(el);
});

/* Contact Form Submit */
const form = document.querySelector(".contact-form");
const statusText = document.getElementById("form-status");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = new FormData(form);

  const response = await fetch(form.action, {
    method: form.method,
    body: data,
    headers: { Accept: "application/json" },
  });

  if (response.ok) {
    statusText.innerHTML = "✅ Message Sent Successfully!";
    statusText.style.color = "lime";
    form.reset();
  } else {
    statusText.innerHTML = "❌ Failed to Send Message!";
    statusText.style.color = "red";
  }
});