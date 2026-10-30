/* =========================================================
   Nidhalo Styles — Main (UI, enquiry, rendering, lightbox)
   ========================================================= */
(function () {
  "use strict";
  const NS = window.NS;
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => Array.from(c.querySelectorAll(s));

  /* ---------------- Icons ---------------- */
  const I = {
    ig: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4.2"/><circle cx="17.4" cy="6.6" r="1" fill="currentColor" stroke="none"/></svg>',
    fb: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M13.5 21.9v-7.4h2.5l.4-2.9h-2.9V9.8c0-.8.3-1.4 1.4-1.4h1.6V5.8c-.3 0-1.2-.1-2.3-.1-2.3 0-3.8 1.4-3.8 3.9v2.1H7.9v2.9h2.5v7.4a10 10 0 1 1 3.1 0Z"/></svg>',
    arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
    wa: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2.2A9.7 9.7 0 0 0 3.7 16.9L2.3 21.8l5-1.3A9.7 9.7 0 1 0 12 2.2Zm0 17.7a8 8 0 0 1-4.1-1.1l-.3-.2-3 .8.8-2.9-.2-.3A8 8 0 1 1 12 19.9Zm4.4-6c-.2-.1-1.4-.7-1.7-.8-.2-.1-.4-.1-.5.1l-.8 1c-.1.2-.3.2-.5.1a6.6 6.6 0 0 1-3.3-2.9c-.2-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.5-.4h-.5a.9.9 0 0 0-.6.3 2.7 2.7 0 0 0-.9 2c0 1.2.9 2.3 1 2.5.1.2 1.7 2.6 4.1 3.6 1.5.7 2.1.7 2.9.6.5-.1 1.4-.6 1.6-1.1.2-.6.2-1 .1-1.1l-.3-.4Z"/></svg>',
    phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2Z"/></svg>',
    zoom: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" aria-hidden="true"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg>',
    close: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18"/></svg>',
    prev: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 6l-6 6 6 6"/></svg>',
    next: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 6l6 6-6 6"/></svg>',
    tag: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" aria-hidden="true"><path d="M20.6 13.4 13.4 20.6a2 2 0 0 1-2.8 0L3 13V3h10l7.6 7.6a2 2 0 0 1 0 2.8Z"/><circle cx="7.5" cy="7.5" r="1.5"/></svg>',
    coin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M8.5 8h7M8.5 11h7M10 8c3 0 3 6 0 6l4 3"/></svg>',
    combo: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" aria-hidden="true"><path d="M3 8h18v4H3zM5 12v9h14v-9M12 8v13M12 8S10 3 7.5 4 9 8 12 8Zm0 0s2-5 4.5-4S15 8 12 8Z"/></svg>',
    clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
    mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>',
    pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21Z"/><circle cx="12" cy="9.5" r="2.5"/></svg>',
    up: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 15l6-6 6 6"/></svg>',
    spark: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2l1.8 6.2L20 10l-6.2 1.8L12 18l-1.8-6.2L4 10l6.2-1.8z"/></svg>'
  };
  NS.ICONS = I;

  /* ---------------- Mandala (decorative SVG, generated) ---------------- */
  NS.mandala = function (petals = 16) {
    let s = '<svg viewBox="-100 -100 200 200" fill="none" stroke="currentColor" stroke-width=".6" aria-hidden="true">';
    s += '<circle r="96"/><circle r="90" stroke-dasharray="1 3"/><circle r="62"/><circle r="30"/><circle r="12"/>';
    for (let i = 0; i < petals; i++) {
      const a = (360 / petals) * i;
      s += `<g transform="rotate(${a})"><path d="M0-30C10-45 10-58 0-62C-10-58-10-45 0-30Z"/><path d="M0-62C16-72 14-86 0-90C-14-86-16-72 0-62Z"/><circle cy="-76" r="2"/></g>`;
      s += `<g transform="rotate(${a + 360 / petals / 2})"><path d="M0-12C5-18 5-24 0-30C-5-24-5-18 0-12Z"/><circle cy="-94" r="1.2" fill="currentColor"/></g>`;
    }
    return s + "</svg>";
  };

  /* Small buti motif as tiling background for art tiles */
  const motif = (color) => {
    const c = encodeURIComponent(color);
    return `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='90' height='90' viewBox='0 0 90 90'%3E%3Cg fill='none' stroke='${c}' stroke-width='1'%3E%3Cpath d='M45 18c9 6 9 18 0 26-9-8-9-20 0-26Z'/%3E%3Cpath d='M45 44v10M38 50h14'/%3E%3Ccircle cx='0' cy='0' r='3'/%3E%3Ccircle cx='90' cy='0' r='3'/%3E%3Ccircle cx='0' cy='90' r='3'/%3E%3Ccircle cx='90' cy='90' r='3'/%3E%3Cpath d='M0 45h8M82 45h8M45 82v8'/%3E%3C/g%3E%3C/svg%3E")`;
  };

  NS.artTile = function (paletteKey) {
    const p = NS.PALETTES[paletteKey] || NS.PALETTES.wine;
    return `<div class="art" style="--c1:${p[0]};--c2:${p[1]};--c3:${p[2]};--motif:${motif(p[2])}" aria-hidden="true"><div class="art-motif">${NS.mandala(12)}</div></div>`;
  };

  /* ---------------- Enquiry ---------------- */
  const waBase = () => "https://wa.me/" + NS.CONTACT.whatsapp;
  NS.waLink = function (name, kind) {
    let msg;
    if (!name) msg = "Hi, I would like to know more about the latest collections at Nidhalo Styles. Please share more details.";
    else if (kind === "product") msg = `Hi, I am interested in the "${name}" from Nidhalo Styles. Please share more details.`;
    else msg = `Hi, I am interested in the ${name} collection from Nidhalo Styles. Please share more details.`;
    return waBase() + "?text=" + encodeURIComponent(msg);
  };
  NS.enquireBtn = function (name, kind = "collection", label = "Enquire Now", cls = "btn btn-sm") {
    return `<a class="${cls}" href="${NS.waLink(name, kind)}" target="_blank" rel="noopener" data-enquire="${esc(name)}" data-kind="${kind}" aria-label="${label} on WhatsApp about ${esc(name)}">${I.wa}<span>${label}</span></a>`;
  };
  function esc(s) { return String(s || "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c])); }
  NS.esc = esc;

  // Keep any static [data-enquire] link in sync (adds message dynamically)
  function wireStaticEnquiry() {
    $$("[data-enquire]").forEach((a) => {
      a.href = NS.waLink(a.dataset.enquire, a.dataset.kind);
      a.target = "_blank"; a.rel = "noopener";
    });
    $$("[data-tel]").forEach((a) => (a.href = "tel:" + NS.CONTACT.phone));
  }

  /* ---------------- Image markup ---------------- */
  NS.img = function (base, alt, opts = {}) {
    const { w = 1536, h = 1404, pos = "", eager = false, sizes = "(max-width: 720px) 100vw, 50vw" } = opts;
    if (/^https?:/.test(base)) { // external (Unsplash / Pexels) photo
      const u = /pexels\.com/.test(base) ? (n) => `${base}?auto=compress&cs=tinysrgb&w=${n}` : (n) => `${base}?w=${n}&q=80&auto=format&fit=crop`;
      return `<img src="${u(900)}" srcset="${u(600)} 600w, ${u(1000)} 1000w, ${u(1400)} 1400w" sizes="${sizes}" width="${opts.w || 1000}" height="${opts.h || 1500}" alt="${esc(alt)}" loading="lazy" class="lazy" decoding="async"${pos ? ` style="object-position:${pos}"` : ""}>`;
    }
    return `<img src="${base}-800.jpg" srcset="${base}-800.jpg 800w, ${base}.jpg 1600w" sizes="${sizes}" width="${w}" height="${h}" alt="${esc(alt)}" ${eager ? 'fetchpriority="high"' : 'loading="lazy" class="lazy"'} decoding="async"${pos ? ` style="object-position:${pos}"` : ""}>`;
  };

  /* ---------------- Renderers ---------------- */
  // Category/sub-category cards
  NS.renderCategoryCards = function (el, catKey, filterFn) {
    const cat = NS.CATEGORIES[catKey];
    if (!el || !cat) return;
    const subs = cat.subs.filter(filterFn || (() => true));
    el.innerHTML = subs.map((s, i) => {
      if (s.img) {
        const ext = /^https?:/.test(s.img);
        const full = ext ? (/pexels\.com/.test(s.img) ? s.img + "?auto=compress&cs=tinysrgb&w=1600" : s.img + "?w=1600&q=85&auto=format") : s.img + ".jpg";
        return `<article class="gb cat-card photo" id="${slug(s.name)}">
        <div class="gb-inner">
          <div class="media" data-lightbox data-group="${catKey}" data-full="${full}" data-title="${esc(s.name)}" data-desc="${esc(s.desc)}" role="button" tabindex="0" aria-label="View ${esc(s.name)} photo">
            ${NS.img(s.img, s.alt || `${s.name} — Nidhalo Styles`, { pos: s.pos || "50% 20%", w: s.w || 1000, h: s.h || 1500, sizes: "(max-width: 720px) 50vw, 25vw" })}
            ${s.isNew ? '<div class="tags"><span class="tag new">New</span></div>' : ""}
            <span class="zoom-btn" aria-hidden="true">${I.zoom}</span>
          </div>
          <div class="card-body">
            <h3>${esc(s.name)}</h3>
            <p>${esc(s.desc)}</p>
            <div class="card-actions">${NS.enquireBtn(s.name, "collection", "Enquire Now")}</div>
          </div>
        </div>
      </article>`;
      }
      return `<article class="gb cat-card" id="${slug(s.name)}">
        <div class="gb-inner"><div class="media">${NS.artTile(s.palette || cat.palette)}<div class="shade"></div>
          ${s.isNew ? '<div class="tags"><span class="tag new">New</span></div>' : ""}
          <div class="card-body">
            <span class="note">Enquire for latest designs</span>
            <h3>${esc(s.name)}</h3>
            <p>${esc(s.desc)}</p>
            <div class="card-actions">${NS.enquireBtn(s.name, "collection", "Enquire Now")}</div>
          </div></div></div>
      </article>`;
    }).join("");
  };
  const slug = (s) => s.toLowerCase().replace(/₹/g, "").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
  NS.slug = slug;

  // Product gallery tiles
  NS.renderGallery = function (el, list, group = "gallery") {
    if (!el) return;
    el.innerHTML = list.map((p) => `
      <article class="gb g-item ${p.size || ""}" data-tags="${p.tags.join(" ")}">
        <div class="gb-inner">
          <div class="media" data-lightbox data-group="${group}" data-full="${p.img}.jpg" data-title="${esc(p.title)}" data-desc="${esc(p.desc)}" tabindex="0" role="button" aria-label="Open ${esc(p.title)} image">
            ${NS.img(p.img, p.title + " — " + p.desc, { w: p.w, h: p.h, sizes: "(max-width: 720px) 100vw, 40vw" })}
            <div class="shade"></div>
            <div class="tags"><span class="tag">${esc(p.sub)}</span>${p.isNew ? '<span class="tag new">New</span>' : ""}</div>
            <span class="zoom-btn" aria-hidden="true">${I.zoom}</span>
          </div>
          <div class="g-body">
            <h3>${esc(p.title)}</h3>
            <p>${esc(p.desc)}</p>
            ${NS.enquireBtn(p.title, "product", "WhatsApp Enquiry", "btn btn-sm btn-wa")}
          </div>
        </div>
      </article>`).join("");
  };

  // Filter chips
  NS.renderChips = function (el, list, keys) {
    if (!el) return;
    const filters = keys ? NS.FILTERS.filter((f) => keys.includes(f.key)) : NS.FILTERS;
    el.innerHTML = filters.map((f, i) => {
      const n = f.key === "all" ? list.length : list.filter((p) => p.tags.includes(f.key)).length;
      return `<button type="button" class="chip" data-filter="${f.key}" aria-pressed="${i === 0}">${f.label}<span class="n">${n}</span></button>`;
    }).join("");
  };

  // Special collections
  NS.renderSpecial = function (el, limit) {
    if (!el) return;
    const subs = NS.CATEGORIES.special.subs.slice(0, limit || 99);
    el.classList.add("sp-justified");
    el.innerHTML = subs.map((s, i) => {
      const ext = s.img && /^https?:/.test(s.img);
      const full = s.img ? (ext ? (/pexels\.com/.test(s.img) ? s.img + "?auto=compress&cs=tinysrgb&w=1600" : s.img + "?w=1600&q=85&auto=format") : s.img + ".jpg") : "";
      const ar = s.ar || 0.8;
      const media = s.img
        ? `<div class="media sp-media" style="aspect-ratio:${ar}" data-lightbox data-group="special" data-full="${full}" data-title="${esc(s.name)}" data-desc="${esc(s.desc)}" role="button" tabindex="0" aria-label="View ${esc(s.name)} photo">
             ${NS.img(s.img, s.alt || s.name + " — Nidhalo Styles", { w: Math.round(1000 * ar), h: 1000, sizes: "(max-width: 720px) 100vw, 40vw" })}
           </div>`
        : `<div class="media sp-media" style="aspect-ratio:${ar}">${NS.artTile(s.palette)}</div>`;
      return `
      <article class="gb sp-card" id="${slug(s.name)}" data-ar="${ar}">
        <div class="gb-inner">
          ${media}
          <div class="sp-body">
            <span class="num">No. ${String(i + 1).padStart(2, "0")}</span>
            <h3>${esc(s.name)}</h3>
            <p>${esc(s.desc)}</p>
            ${NS.enquireBtn(s.name, "collection", "Enquire Now")}
          </div>
        </div>
      </article>`;
    }).join("");
    NS.layoutSpecial(el);
  };

  /* Justified rows: every photo keeps its own shape (no cropping, no empty bands),
     and photos in the same row share one height. */
  NS.layoutSpecial = function (el) {
    const cards = Array.from(el.children);
    const W = el.clientWidth;
    const gap = parseFloat(getComputedStyle(el).columnGap) || 24;
    if (!W) return;
    if (W < 640) { cards.forEach((c) => (c.style.width = "100%")); return; }
    const TARGET = Math.min(600, window.innerHeight * 0.72), MIN_W = 300;
    let row = [];
    const flush = (last) => {
      if (!row.length) return;
      const sum = row.reduce((t, c) => t + +c.dataset.ar, 0);
      let h = (W - gap * (row.length - 1)) / sum;
      if (last && h > TARGET) h = TARGET;
      row.forEach((c) => (c.style.width = Math.floor(h * +c.dataset.ar) + "px"));
      row = [];
    };
    cards.forEach((c) => {
      const next = row.concat(c);
      const sum = next.reduce((t, x) => t + +x.dataset.ar, 0);
      const h = (W - gap * (next.length - 1)) / sum;
      const narrowest = Math.min(...next.map((x) => h * +x.dataset.ar));
      if (row.length && narrowest < MIN_W) { flush(); row = [c]; }
      else row = next;
      const s2 = row.reduce((t, x) => t + +x.dataset.ar, 0);
      if ((W - gap * (row.length - 1)) / s2 <= TARGET) flush();
    });
    flush(true);
  };
  let spT;
  window.addEventListener("resize", () => { clearTimeout(spT); spT = setTimeout(() => document.querySelectorAll(".sp-justified").forEach(NS.layoutSpecial), 120); });

  // Offers
  NS.renderOffers = function (el) {
    if (!el) return;
    el.innerHTML = NS.CATEGORIES.offers.subs.map((o) => `
      <article class="gb offer-card" id="${slug(o.name)}">
        <div class="gb-inner">
          ${o.name === "Last Chance" ? '<span class="offer-ribbon">Limited</span>' : ""}
          <div>
            <div class="o-icon">${I[o.icon] || I.tag}</div>
          </div>
          <div>
            <h3>${o.big ? `<small class="eyebrow">Under</small><span class="big gold-text">${o.big}</span>` : `<span class="gold-text">${esc(o.name)}</span>`}</h3>
            <p>${esc(o.desc)}</p>
          </div>
          ${NS.enquireBtn(o.name, "collection", "Ask on WhatsApp")}
        </div>
      </article>`).join("");
  };

  // New arrivals
  NS.renderNewArrivals = function (gridEl, stripEl) {
    const list = NS.PRODUCTS.filter((p) => p.isNew);
    const card = (p) => `
      <article class="gb na-item">
        <div class="gb-inner">
          <div class="media" data-lightbox data-group="new" data-full="${p.img}.jpg" data-title="${esc(p.title)}" data-desc="${esc(p.desc)}" tabindex="0" role="button" aria-label="Open ${esc(p.title)} image">
            ${NS.img(p.img, p.title + " — " + p.desc, { w: p.w, h: p.h, sizes: "(max-width: 720px) 100vw, 45vw" })}
            <div class="shade"></div>
            <div class="tags"><span class="tag new">${I.spark.replace('aria-hidden="true"', 'aria-hidden="true" width="10" height="10"')} New</span><span class="tag">${esc(p.sub)}</span></div>
          </div>
          <div class="na-body">
            <div><h3>${esc(p.title)}</h3><p>${esc(p.desc)}</p></div>
            ${NS.enquireBtn(p.title, "product", "Enquire", "btn btn-sm btn-wa")}
          </div>
        </div>
      </article>`;
    if (gridEl) gridEl.innerHTML = list.slice(0, 5).map(card).join("");
    if (stripEl) stripEl.innerHTML = list.slice(5).map(card).join("");
  };

  /* ---------------- Header / navigation ---------------- */
  function initHeader() {
    const header = $(".site-header");
    const toggle = $(".menu-toggle");
    const nav = $(".main-nav");
    const toTop = $(".to-top");

    const onScroll = () => {
      const y = window.scrollY;
      header && header.classList.toggle("scrolled", y > 20);
      toTop && toTop.classList.toggle("show", y > 700);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    if (toggle && nav) {
      const setOpen = (open) => {
        toggle.setAttribute("aria-expanded", String(open));
        toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
        nav.classList.toggle("open", open);
        header.classList.toggle("menu-open", open);
        document.body.classList.toggle("lock", open);
        if (open) setTimeout(() => { const f = nav.querySelector("a"); f && f.focus(); }, 300);
      };
      toggle.addEventListener("click", () => setOpen(toggle.getAttribute("aria-expanded") !== "true"));
      nav.addEventListener("click", (e) => { if (e.target.closest("a")) setOpen(false); });
      document.addEventListener("keydown", (e) => { if (e.key === "Escape" && nav.classList.contains("open")) { setOpen(false); toggle.focus(); } });
      window.addEventListener("resize", () => { if (window.innerWidth > 1140 && nav.classList.contains("open")) setOpen(false); });
    }

    toTop && toTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

    // Active nav state
    const page = document.body.dataset.page;
    $$(".main-nav a").forEach((a) => {
      if (a.dataset.nav === page) a.setAttribute("aria-current", "page");
    });

    // Sliding pill indicator (desktop)
    const list = nav && nav.querySelector("ul");
    const pill = list && list.querySelector(".nav-pill");
    if (list && pill) {
      const active = list.querySelector('a[aria-current="page"]');
      const moveTo = (a, hover) => {
        if (!a) { pill.style.opacity = "0"; return; }
        const lr = list.getBoundingClientRect(), r = a.getBoundingClientRect();
        pill.style.width = r.width + "px";
        pill.style.transform = `translateX(${r.left - lr.left}px)`;
        pill.style.opacity = "1";
        pill.classList.toggle("hover", !!hover && a !== active);
        list.classList.toggle("pill-away", a !== active);
      };
      const reset = () => moveTo(active, false);
      list.querySelectorAll("a").forEach((a) => {
        a.addEventListener("mouseenter", () => moveTo(a, true));
        a.addEventListener("focus", () => moveTo(a, true));
      });
      list.addEventListener("mouseleave", reset);
      list.addEventListener("focusout", (e) => { if (!list.contains(e.relatedTarget)) reset(); });
      window.addEventListener("resize", reset);
      document.fonts && document.fonts.ready.then(reset);
      setTimeout(reset, 900);
      reset();
    }
  }


  /* ---------------- Category deep links: page.html?show=id1,id2&label=X ---------------- */
  function applyShowParam() {
    const q = new URLSearchParams(location.search);
    const show = (q.get("show") || "").split(",").map((x) => x.trim()).filter(Boolean);
    if (!show.length) return;
    const label = q.get("label") || "Selected collection";
    const filter = q.get("filter");
    let first = null;
    $$("[data-render-cats]").forEach((grid) => {
      let visible = 0;
      Array.from(grid.children).forEach((card) => {
        const keep = show.includes(card.id);
        card.hidden = !keep;
        if (keep) visible++;
      });
      const sec = grid.closest("section");
      if (!visible) { if (sec) sec.hidden = true; return; }
      grid.classList.add("filtered");
      if (!first) first = grid;
    });
    // Product galleries: keep only when the filtered category has photos
    $$("[data-render-gallery]").forEach((g) => {
      const n = filter ? Array.from(g.children).filter((el) => (el.dataset.tags || "").split(" ").includes(filter)).length : 0;
      const sec = g.closest("section");
      if (!n && sec) sec.hidden = true;
    });
    // Hide in-page sub-navigation (it lists every category)
    $$(".page-hero .subnav").forEach((n) => (n.hidden = true));
    if (first) {
      const page = location.pathname.split("/").pop() || "index.html";
      const note = document.createElement("div");
      note.className = "show-note";
      note.innerHTML = `<span>Showing</span><strong>${esc(label)}</strong><a href="${page}">View all &rarr;</a>`;
      first.parentNode.insertBefore(note, first);
      setTimeout(() => note.scrollIntoView({ behavior: "smooth", block: "start" }), 450);
    }
  }

  /* ---------------- Smooth anchor scrolling ---------------- */
  function initSmoothScroll() {
    document.addEventListener("click", (e) => {
      const a = e.target.closest('a[href^="#"]');
      if (!a) return;
      const id = a.getAttribute("href");
      if (id.length < 2) return;
      const t = document.querySelector(id);
      if (!t) return;
      e.preventDefault();
      t.scrollIntoView({ behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth", block: "start" });
      history.replaceState(null, "", id);
    });
  }

  /* ---------------- Lazy image fade-in ---------------- */
  NS.initLazy = function (root = document) {
    $$("img.lazy", root).forEach((img) => {
      if (img.complete) img.classList.add("loaded");
      else {
        img.addEventListener("load", () => img.classList.add("loaded"), { once: true });
        img.addEventListener("error", () => img.classList.add("loaded"), { once: true });
      }
    });
  };
  // Images rendered later (filters, lightbox, layouts) — catch every load, and never leave a photo hidden
  document.addEventListener("load", (e) => { const t = e.target; if (t && t.tagName === "IMG") t.classList.add("loaded"); }, true);
  window.addEventListener("load", () => setTimeout(() => $$("img.lazy:not(.loaded)").forEach((i) => i.classList.add("loaded")), 1200));
  setTimeout(() => $$("img.lazy:not(.loaded)").forEach((i) => i.classList.add("loaded")), 4000);

  /* ---------------- Lightbox ---------------- */
  function initLightbox() {
    const lb = document.createElement("div");
    lb.className = "lightbox";
    lb.setAttribute("role", "dialog");
    lb.setAttribute("aria-modal", "true");
    lb.setAttribute("aria-label", "Image viewer");
    lb.innerHTML = `
      <div class="lb-stage">
        <figure class="lb-figure"><img alt=""></figure>
        <div class="lb-caption">
          <div><span class="lb-count"></span><h3></h3><p></p></div>
          <a class="btn btn-sm btn-wa lb-enquire" target="_blank" rel="noopener">${I.wa}<span>WhatsApp Enquiry</span></a>
        </div>
        <button class="lb-btn lb-close" type="button" aria-label="Close viewer">${I.close}</button>
        <button class="lb-btn lb-prev" type="button" aria-label="Previous image">${I.prev}</button>
        <button class="lb-btn lb-next" type="button" aria-label="Next image">${I.next}</button>
      </div>`;
    document.body.appendChild(lb);
    const img = $("img", lb), h3 = $("h3", lb), p = $(".lb-caption p", lb), count = $(".lb-count", lb), enq = $(".lb-enquire", lb);
    const prevB = $(".lb-prev", lb), nextB = $(".lb-next", lb);
    let items = [], idx = 0, lastFocus = null;

    const show = (i) => {
      idx = (i + items.length) % items.length;
      const it = items[idx].dataset;
      img.classList.remove("ready");
      const pre = new Image();
      pre.onload = () => { img.src = it.full; img.alt = it.title || ""; requestAnimationFrame(() => img.classList.add("ready")); };
      pre.src = it.full;
      h3.textContent = it.title || "";
      p.textContent = it.desc || "";
      count.textContent = items.length > 1 ? `${idx + 1} / ${items.length}` : "";
      enq.href = NS.waLink(it.title, "product");
      const multi = items.length > 1;
      prevB.hidden = nextB.hidden = !multi;
    };
    const open = (el) => {
      const g = el.dataset.group;
      items = $$(`[data-lightbox][data-group="${g}"]`).filter((x) => x.offsetParent !== null && !x.closest(".is-hidden"));
      if (!items.includes(el)) items = [el];
      lastFocus = document.activeElement;
      show(items.indexOf(el));
      lb.classList.add("open");
      document.body.classList.add("lock");
      setTimeout(() => $(".lb-close", lb).focus(), 50);
    };
    const close = () => {
      lb.classList.remove("open");
      document.body.classList.remove("lock");
      lastFocus && lastFocus.focus();
    };

    document.addEventListener("click", (e) => {
      if (e.target.closest("[data-enquire], .btn")) return; // let enquiry buttons work
      const t = e.target.closest("[data-lightbox]");
      if (t) { e.preventDefault(); open(t); }
    });
    document.addEventListener("keydown", (e) => {
      const t = e.target.closest && e.target.closest('[data-lightbox][role="button"]');
      if (t && (e.key === "Enter" || e.key === " ")) { e.preventDefault(); open(t); return; }
      if (!lb.classList.contains("open")) return;
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") show(idx + 1);
      if (e.key === "ArrowLeft") show(idx - 1);
      if (e.key === "Tab") { // focus trap
        const f = $$("button:not([hidden]), a", lb);
        const first = f[0], last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    });
    $(".lb-close", lb).addEventListener("click", close);
    prevB.addEventListener("click", () => show(idx - 1));
    nextB.addEventListener("click", () => show(idx + 1));
    lb.addEventListener("click", (e) => { if (e.target === lb || e.target.classList.contains("lb-figure")) close(); });
    // swipe
    let sx = 0;
    lb.addEventListener("touchstart", (e) => (sx = e.touches[0].clientX), { passive: true });
    lb.addEventListener("touchend", (e) => {
      const dx = e.changedTouches[0].clientX - sx;
      if (Math.abs(dx) > 50 && items.length > 1) show(idx + (dx < 0 ? 1 : -1));
    });
  }

  /* ---------------- Contact rendering (only provided details) ---------------- */
  function renderContact() {
    const C = NS.CONTACT;
    $$("[data-contact-tiles]").forEach((el) => {
      const tiles = [
        `<a class="contact-tile" href="tel:${C.phone}"><span class="ic">${I.phone}</span><small>Call Now</small><strong>${C.phoneDisplay}</strong><span>Tap to call the shop</span></a>`,
        ...(C.phone2 ? [`<a class="contact-tile" href="tel:${C.phone2}"><span class="ic">${I.phone}</span><small>Call Now</small><strong>${C.phone2Display}</strong><span>Second shop number</span></a>`] : []),
        `<a class="contact-tile wa" href="${NS.waLink()}" target="_blank" rel="noopener"><span class="ic">${I.wa}</span><small>WhatsApp</small><strong>${C.whatsappDisplay || C.phoneDisplay}</strong><span>Chat with us for designs & availability</span></a>`
      ];
      if (C.email) tiles.push(`<a class="contact-tile" href="mailto:${C.email}"><span class="ic">${I.mail}</span><small>Email</small><strong>${esc(C.email)}</strong><span>Write to us</span></a>`);
      if (C.address) tiles.push(`<a class="contact-tile" href="${C.mapsUrl || "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(C.address)}" target="_blank" rel="noopener"><span class="ic">${I.pin}</span><small>Get Directions</small><strong>Visit the shop</strong><span>${esc(C.address)}</span></a>`);
      const so = C.social || {};
      if (so.instagram) tiles.push(`<a class="contact-tile ig" href="${so.instagram.url}" target="_blank" rel="noopener"><span class="ic">${I.ig}</span><small>Instagram</small><strong>${esc(so.instagram.handle)}</strong><span>See our latest designs</span></a>`);
      if (so.facebook) tiles.push(`<a class="contact-tile fb" href="${so.facebook.url}" target="_blank" rel="noopener"><span class="ic">${I.fb}</span><small>Facebook</small><strong>${esc(so.facebook.handle)}</strong><span>Follow us for updates</span></a>`);
      el.innerHTML = tiles.join("");
    });
    $$("[data-footer-contact]").forEach((el) => {
      let h = `<li>${I.phone}<div><small>Mobile</small><a href="tel:${C.phone}">${C.phoneDisplay}</a>${C.phone2 ? `<br><a href="tel:${C.phone2}">${C.phone2Display}</a>` : ""}</div></li>
               <li>${I.wa}<div><small>WhatsApp</small><a href="${NS.waLink()}" target="_blank" rel="noopener">${C.whatsappDisplay || C.phoneDisplay}</a></div></li>`;
      if (C.email) h += `<li>${I.mail}<div><small>Email</small><a href="mailto:${C.email}">${esc(C.email)}</a></div></li>`;
      if (C.address) h += `<li>${I.pin}<div><small>Address</small>${esc(C.address)}</div></li>`;
      el.innerHTML = h;
    });
  }

  /* ---------------- Enquiry form → WhatsApp ---------------- */
  function initForm() {
    const f = $("#enquiry-form");
    if (!f) return;
    const sel = $("#enq-interest", f);
    if (sel) {
      const opts = Object.values(NS.CATEGORIES).filter((c) => c.page !== "offers.html").map((c) => `<optgroup label="${esc(c.title)}">${c.subs.map((s) => `<option>${esc(s.name)}</option>`).join("")}</optgroup>`).join("");
      sel.insertAdjacentHTML("beforeend", opts);
      const q = new URLSearchParams(location.search).get("interest");
      if (q) sel.value = q;
    }
    f.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = $("#enq-name", f).value.trim();
      const interest = sel.value;
      const note = $("#enq-msg", f).value.trim();
      const phoneEl = $("#enq-phone", f), visitEl = $("#enq-visit", f);
      const phone = phoneEl ? phoneEl.value.trim() : "";
      if (phoneEl && phone.replace(/\D/g, "").length < 10) { phoneEl.setCustomValidity("Please enter a valid mobile number"); phoneEl.reportValidity(); phoneEl.setCustomValidity(""); return; }
      let msg = `Hi, I am${name ? " " + name + "," : ""} interested in ${interest ? "the " + interest + " collection" : "your collections"} from Nidhalo Styles. Please share more details.`;
      if (phone) msg += `\nMobile: ${phone}`;
      if (visitEl && visitEl.value) msg += `\nStore visit: ${visitEl.value}`;
      if (note) msg += `\n\n${note}`;
      window.open(`https://wa.me/${NS.CONTACT.whatsapp}?text=${encodeURIComponent(msg)}`, "_blank", "noopener");
    });
  }

  /* ---------------- Page bootstrap ---------------- */
  document.addEventListener("DOMContentLoaded", () => {
    $$("[data-mandala]").forEach((el) => (el.innerHTML = NS.mandala(+el.dataset.mandala || 16)));
    $$("[data-art]").forEach((el) => (el.outerHTML = NS.artTile(el.dataset.art)));
    // Sub-category jump links in page heroes
    $$("[data-subnav]").forEach((el) => {
      const cat = NS.CATEGORIES[el.dataset.subnav];
      if (!cat) return;
      el.innerHTML = cat.subs.map((s) => `<a class="chip" href="#${slug(s.name)}">${esc(s.name)}</a>`).join("");
    });

    // Declarative render hooks
    $$("[data-render-cats]").forEach((el) => {
      const [key, group] = el.dataset.renderCats.split(":");
      NS.renderCategoryCards(el, key, group ? (s) => (s.group || "jewellery") === group : null);
    });
    $$("[data-render-gallery]").forEach((el) => {
      const scope = el.dataset.renderGallery; // "all" | category key
      const list = scope === "all" ? NS.PRODUCTS : NS.PRODUCTS.filter((p) => p.cat === scope || p.tags.includes(scope));
      NS.renderGallery(el, list, "gallery-" + scope);
      const chips = document.querySelector(`[data-chips-for="${el.id}"]`);
      if (chips) NS.renderChips(chips, list, chips.dataset.keys ? chips.dataset.keys.split(",") : null);
    });
    $$("[data-render-special]").forEach((el) => NS.renderSpecial(el, +el.dataset.renderSpecial || 0));
    $$("[data-render-offers]").forEach((el) => NS.renderOffers(el));
    $$("[data-render-new]").forEach((el) => NS.renderNewArrivals(el, el.dataset.renderNew ? document.querySelector(el.dataset.renderNew) : null));

    applyShowParam();
    wireStaticEnquiry();
    renderContact();
    initHeader();
    initSmoothScroll();
    initLightbox();
    initForm();
    NS.initLazy();
    const yr = $("[data-year]"); if (yr) yr.textContent = new Date().getFullYear();
    // Scroll to hash targets that were rendered by JS
    if (location.hash.length > 1) {
      const t = document.getElementById(decodeURIComponent(location.hash.slice(1)));
      if (t) setTimeout(() => t.scrollIntoView({ block: "start" }), 120);
    }
  });
})();
