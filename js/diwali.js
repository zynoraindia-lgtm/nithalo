/* Nidhalo Styles — Diwali offers page: countdown + light fireworks */
(function () {
  "use strict";
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Countdown
  const cd = document.querySelector(".dw-count");
  if (cd) {
    const target = new Date(cd.dataset.diwali).getTime();
    const u = (k) => cd.querySelector(`[data-u="${k}"]`);
    const pad = (n) => String(n).padStart(2, "0");
    const tick = () => {
      let t = Math.max(0, target - Date.now());
      if (t === 0) { cd.classList.add("done"); return; }
      const d = Math.floor(t / 864e5); t -= d * 864e5;
      const h = Math.floor(t / 36e5); t -= h * 36e5;
      const m = Math.floor(t / 6e4); t -= m * 6e4;
      u("d").textContent = pad(d); u("h").textContent = pad(h); u("m").textContent = pad(m); u("s").textContent = pad(Math.floor(t / 1e3));
    };
    tick(); setInterval(tick, 1000);
  }

  // Toran stagger
  document.querySelectorAll(".dw-toran i").forEach((el, k) => el.style.setProperty("--k", k));

  // Fireworks (canvas, lightweight, pauses when off-screen)
  const cv = document.querySelector(".dw-fireworks");
  if (!cv || reduce) return;
  const ctx = cv.getContext("2d");
  const colors = ["#ffd166", "#ffb703", "#f3dc93", "#e2648a", "#ff8fab", "#ffffff", "#fb8500"];
  let W, H, parts = [], visible = true, last = 0;
  const resize = () => { const r = cv.getBoundingClientRect(); W = cv.width = r.width * devicePixelRatio; H = cv.height = r.height * devicePixelRatio; };
  resize(); addEventListener("resize", resize);
  new IntersectionObserver((e) => (visible = e[0].isIntersecting)).observe(cv);
  const burst = () => {
    const x = W * (0.12 + Math.random() * 0.76), y = H * (0.12 + Math.random() * 0.38);
    const c = colors[(Math.random() * colors.length) | 0], n = 46 + ((Math.random() * 30) | 0);
    for (let i = 0; i < n; i++) {
      const a = (Math.PI * 2 * i) / n, sp = (1.2 + Math.random() * 2.6) * devicePixelRatio;
      parts.push({ x, y, vx: Math.cos(a) * sp, vy: Math.sin(a) * sp, life: 1, c });
    }
  };
  const loop = (t) => {
    requestAnimationFrame(loop);
    if (!visible) return;
    if (t - last > 1100) { burst(); last = t; }
    ctx.globalCompositeOperation = "destination-out";
    ctx.fillStyle = "rgba(0,0,0,.18)"; ctx.fillRect(0, 0, W, H);
    ctx.globalCompositeOperation = "lighter";
    parts = parts.filter((p) => p.life > 0);
    for (const p of parts) {
      p.x += p.vx; p.y += p.vy; p.vy += 0.03 * devicePixelRatio; p.vx *= 0.985; p.vy *= 0.985; p.life -= 0.012;
      ctx.globalAlpha = Math.max(p.life, 0); ctx.fillStyle = p.c;
      ctx.beginPath(); ctx.arc(p.x, p.y, 1.6 * devicePixelRatio, 0, 7); ctx.fill();
    }
    ctx.globalAlpha = 1;
  };
  requestAnimationFrame(loop);
})();
