/* =========================================================
   Nidhalo Styles — Category filtering (no page reload)
   Works on any [data-chips-for="<galleryId>"] chip bar.
   ========================================================= */
(function () {
  "use strict";
  const NS = window.NS;
  const OUT_MS = 380;

  function applyFilter(gallery, key, emptyEl) {
    const items = Array.from(gallery.children);
    const match = (el) => key === "all" || el.dataset.tags.split(" ").includes(key);
    const toHide = items.filter((el) => !match(el) && !el.classList.contains("is-hidden"));
    const toShow = items.filter((el) => match(el));

    // 1. animate out
    toHide.forEach((el) => el.classList.add("is-hiding"));

    window.setTimeout(() => {
      toHide.forEach((el) => { el.classList.add("is-hidden"); el.classList.remove("is-hiding"); });

      // 2. animate in (staggered)
      toShow.forEach((el, i) => {
        const wasHidden = el.classList.contains("is-hidden");
        el.classList.remove("is-hidden");
        if (wasHidden) {
          el.classList.add("is-entering");
          el.style.transitionDelay = i * 60 + "ms";
          requestAnimationFrame(() => requestAnimationFrame(() => el.classList.remove("is-entering")));
          window.setTimeout(() => (el.style.transitionDelay = ""), 900 + i * 60);
        }
      });

      // 3. empty state
      if (emptyEl) {
        const label = (NS.FILTERS.find((f) => f.key === key) || {}).label || "this collection";
        emptyEl.classList.toggle("show", toShow.length === 0);
        gallery.hidden = toShow.length === 0;
        if (!toShow.length) {
          emptyEl.querySelector("[data-empty-name]").textContent = label;
          const btn = emptyEl.querySelector("[data-enquire]");
          btn.dataset.enquire = label;
          btn.href = NS.waLink(label, "collection");
        }
      }
      const live = document.getElementById(gallery.id + "-status");
      if (live) live.textContent = `${toShow.length} item${toShow.length === 1 ? "" : "s"} shown`;
    }, toHide.length ? OUT_MS : 0);
  }

  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("[data-chips-for]").forEach((bar) => {
      const gallery = document.getElementById(bar.dataset.chipsFor);
      if (!gallery) return;
      const emptyEl = document.querySelector(`[data-empty-for="${gallery.id}"]`);
      bar.addEventListener("click", (e) => {
        const chip = e.target.closest(".chip");
        if (!chip || chip.getAttribute("aria-pressed") === "true") return;
        bar.querySelectorAll(".chip").forEach((c) => c.setAttribute("aria-pressed", String(c === chip)));
        applyFilter(gallery, chip.dataset.filter, emptyEl);
      });
      // Deep link support: page.html?filter=kurtis
      const q = new URLSearchParams(location.search).get("filter");
      const pre = q && bar.querySelector(`[data-filter="${q}"]`);
      if (pre) pre.click();
    });
  });
})();
