/* Nidhalo Styles — Festive offers page: falling petals & gold sparkles */
(function () {
  "use strict";
  document.querySelectorAll(".dw-toran i").forEach((el, k) => el.style.setProperty("--k", k));
  const cv = document.querySelector(".dw-fireworks");
  if (!cv || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const ctx = cv.getContext("2d");
  const cols = ["#ffb703", "#fb8500", "#f3dc93", "#e2648a", "#ff8fab", "#ffd166", "#ffffff"];
  let W, H, dpr, parts = [], visible = true;
  const resize = () => { dpr = Math.min(devicePixelRatio || 1, 2); const r = cv.getBoundingClientRect(); W = cv.width = r.width * dpr; H = cv.height = r.height * dpr; };
  resize(); addEventListener("resize", resize);
  new IntersectionObserver((e) => (visible = e[0].isIntersecting)).observe(cv);
  const spawn = (y) => ({
    x: Math.random() * W, y: (y === undefined || y === null) ? -20 * dpr : y,
    r: (Math.random() < 0.55 ? 5 + Math.random() * 5 : 1.4 + Math.random() * 1.8) * dpr,
    vy: (0.4 + Math.random() * 0.9) * dpr, sway: Math.random() * 6.28, sw: 0.6 + Math.random() * 1.2,
    rot: Math.random() * 6.28, vr: (Math.random() - 0.5) * 0.04, c: cols[(Math.random() * cols.length) | 0]
  });
  for (let i = 0; i < 46; i++) parts.push(spawn(Math.random() * H));
  const draw = (p) => {
    ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.rot); ctx.fillStyle = p.c;
    if (p.r > 4 * dpr) { ctx.globalAlpha = 0.75; ctx.beginPath(); ctx.ellipse(0, 0, p.r, p.r * 0.5, 0, 0, 6.28); ctx.fill(); }
    else { ctx.globalAlpha = 0.6 + 0.4 * Math.sin(p.sway * 3); ctx.shadowColor = p.c; ctx.shadowBlur = 8 * dpr; ctx.beginPath(); ctx.arc(0, 0, p.r, 0, 6.28); ctx.fill(); }
    ctx.restore();
  };
  const loop = () => {
    requestAnimationFrame(loop);
    if (!visible) return;
    ctx.clearRect(0, 0, W, H);
    parts.forEach((p, i) => {
      p.sway += 0.02; p.y += p.vy; p.x += Math.sin(p.sway) * p.sw * dpr * 0.5; p.rot += p.vr;
      if (p.y > H + 20 * dpr) parts[i] = spawn();
      draw(p);
    });
  };
  requestAnimationFrame(loop);
})();
