console.log("DevelopersHub Loaded 🚀");

/* =========================
   1. SMOOTH SCROLL NAV
========================= */
document.querySelectorAll("a[href^='#']").forEach(link => {
  link.addEventListener("click", function(e){
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    if(target){
      target.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});


/* =========================
   2. SCROLL REVEAL ANIMATION
========================= */
const revealElements = document.querySelectorAll(".card, .hero-text, .hero-img");

function revealOnScroll(){
  let windowHeight = window.innerHeight;

  revealElements.forEach(el => {
    let elementTop = el.getBoundingClientRect().top;

    if(elementTop < windowHeight - 100){
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
      el.style.transition = "0.8s ease";
    }
  });
}

window.addEventListener("scroll", revealOnScroll);


/* =========================
   3. CUSTOM CURSOR EFFECT
========================= */
const cursor = document.createElement("div");
cursor.classList.add("cursor");
document.body.appendChild(cursor);

document.addEventListener("mousemove", e => {
  cursor.style.left = e.pageX + "px";
  cursor.style.top = e.pageY + "px";
});


/* =========================
   4. BUTTON HOVER EFFECT
========================= */
document.querySelectorAll(".btn").forEach(btn => {
  btn.addEventListener("mouseenter", () => {
    btn.style.transform = "scale(1.07)";
    btn.style.transition = "0.3s";
  });

  btn.addEventListener("mouseleave", () => {
    btn.style.transform = "scale(1)";
  });
});


/* =========================
   5. INITIAL ANIMATION STATE
========================= */
window.addEventListener("load", () => {
  revealElements.forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(40px)";
  });

  revealOnScroll();
});