/* =========================================================
   Nidhalo Styles — Scroll animations & parallax
   ========================================================= */
(function () {
  "use strict";
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;

  function initHeroSlider() {
    const root = document.querySelector(".hero-slider");
    if (!root) return;
    const slides = Array.from(root.querySelectorAll(".hs-slide"));
    const dots = Array.from(document.querySelectorAll(".hs-dot"));
    const badge = document.querySelector(".hero-badge .hb-text");
    let i = 0, timer;
    const go = (n) => {
      if (n === i) return;
      const prev = slides[i];
      prev.classList.remove("active"); prev.classList.add("leaving");
      setTimeout(() => prev.classList.remove("leaving"), 1400);
      i = (n + slides.length) % slides.length;
      slides[i].classList.add("active");
      dots.forEach((d, k) => d.classList.toggle("active", k === i));
      if (badge) { badge.classList.add("swap"); setTimeout(() => { badge.textContent = slides[i].dataset.badge; badge.classList.remove("swap"); }, 350); }
    };
    const start = () => { if (!reduce) timer = setInterval(() => go(i + 1), 5200); };
    dots.forEach((d, k) => d.addEventListener("click", () => { clearInterval(timer); go(k); start(); }));
    root.addEventListener("mouseenter", () => clearInterval(timer));
    root.addEventListener("mouseleave", () => { clearInterval(timer); start(); });
    start();
  }

  function initRotator() {
    const r = document.querySelector(".hero-title .rotator");
    if (!r) return;
    const words = r.dataset.words.split("|");
    let k = 0;
    const paint = (w) => {
      const el = document.createElement("span");
      el.className = "rw italic gold-text";
      el.innerHTML = [...w].map((c, i) => `<span class="ch" style="--i:${i}">${c}</span>`).join("");
      r.replaceChildren(el);
      return el;
    };
    let cur = paint(words[0]);
    if (reduce) return;
    setInterval(() => {
      cur.classList.add("out");
      setTimeout(() => { k = (k + 1) % words.length; cur = paint(words[k]); }, 520);
    }, 3200);
  }

  document.addEventListener("DOMContentLoaded", () => {
    initHeroSlider();
    initRotator();
    // Auto-tag rendered grids for staggered reveal
    document.querySelectorAll(".card-grid, .gallery, .offers-grid, .special-grid, .na-grid, .collections-grid, .journey").forEach((g) => {
      if (!g.hasAttribute("data-stagger")) g.setAttribute("data-stagger", "");
    });

    const targets = document.querySelectorAll("[data-reveal], [data-stagger]");
    if (!("IntersectionObserver" in window) || reduce) {
      targets.forEach((t) => t.classList.add("revealed"));
    } else {
      // threshold 0: very tall blocks (e.g. 16 saree cards stacked on a phone) can never reach a % threshold
      const io = new IntersectionObserver((entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) { en.target.classList.add("revealed"); io.unobserve(en.target); }
        });
      }, { rootMargin: "0px 0px -40px 0px", threshold: 0 });
      targets.forEach((t) => io.observe(t));
      // Safety net: anything already scrolled into (or past) view is always shown
      const sweep = () => {
        const vh = window.innerHeight || document.documentElement.clientHeight;
        document.querySelectorAll("[data-reveal]:not(.revealed), [data-stagger]:not(.revealed)").forEach((t) => {
          if (t.getBoundingClientRect().top < vh) t.classList.add("revealed");
        });
      };
      let st = 0;
      window.addEventListener("scroll", () => { if (!st) st = setTimeout(() => { st = 0; sweep(); }, 150); }, { passive: true });
      window.addEventListener("hashchange", () => setTimeout(sweep, 400));
      window.addEventListener("load", () => setTimeout(sweep, 300));
      setTimeout(sweep, 1500);
    }

    // Animate gradient borders only while visible (saves GPU on mobile)
    const borders = document.querySelectorAll(".gb");
    if ("IntersectionObserver" in window && !reduce) {
      const bo = new IntersectionObserver((entries) => {
        entries.forEach((en) => en.target.classList.toggle("in-view", en.isIntersecting));
      }, { threshold: 0 });
      borders.forEach((b) => bo.observe(b));
    }

    // Subtle parallax (pointer + scroll) — desktop only
    const layers = document.querySelectorAll("[data-parallax]");
    if (!layers.length || reduce || matchMedia("(hover: none)").matches) return;
    let mx = 0, my = 0, sy = window.scrollY, ticking = false;
    const update = () => {
      layers.forEach((el) => {
        const d = parseFloat(el.dataset.parallax) || 0.05;
        el.style.transform = `translate3d(${mx * d * 40}px, ${my * d * 40 - sy * d}px, 0)`;
      });
      ticking = false;
    };
    const req = () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } };
    window.addEventListener("pointermove", (e) => { mx = e.clientX / innerWidth - 0.5; my = e.clientY / innerHeight - 0.5; req(); }, { passive: true });
    window.addEventListener("scroll", () => { sy = window.scrollY; if (sy < innerHeight * 1.5) req(); }, { passive: true });
  });
})();
