const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
const yearEl = document.getElementById("year");

yearEl.textContent = new Date().getFullYear();

// Mobile menu toggle (matches .nav-links.show in CSS)
menuBtn.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("show");
  menuBtn.setAttribute("aria-expanded", String(isOpen));
});

// Close menu when clicking a link (mobile)
document.querySelectorAll(".nav-link").forEach((a) => {
  a.addEventListener("click", () => {
    navLinks.classList.remove("show");
    menuBtn.setAttribute("aria-expanded", "false");
  });
});

// Simple "fake submit" handler (so forms don't reload page)
function handleForm(formId, msgId) {
  const form = document.getElementById(formId);
  const msg = document.getElementById(msgId);
  if (!form || !msg) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    msg.textContent = "Thanks! Your message has been recorded. (Connect this to backend/email later.)";
    form.reset();
    setTimeout(() => (msg.textContent = ""), 6000);
  });
}

handleForm("miniForm", "miniMsg");
handleForm("contactForm", "contactMsg");
