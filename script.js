// Placeholder for future interactivity
console.log("ZeroBug Landing Page Loaded");

// ============================
// Smooth Scroll — Lenis
// ============================
const lenis = new Lenis({
  duration: 1.1,
  smooth: true,
  direction: "vertical",
  smoothTouch: false,
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// ============================
// Animate On Scroll — AOS
// ============================
AOS.init({
  duration: 900,
  once: true,
  easing: "ease-out-cubic",
});

// ============================
// Optional: Subtle CTA Attention
// ============================
const ctaBtn = document.querySelector(".cta .btn-primary");

if (ctaBtn) {
  setTimeout(() => {
    ctaBtn.classList.add("cta-pulse");
  }, 1200);
}
