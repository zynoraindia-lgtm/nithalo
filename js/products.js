/* =========================================================
   Nidhalo Styles — Catalogue data
   Edit this file to add products / photos. No prices are stored
   here on purpose: the site is catalogue + enquiry only.
   ========================================================= */

window.NS = window.NS || {};

/* ---- Shop contact (only details supplied by the client) ---- */
NS.CONTACT = {
  phoneDisplay: "+91 63855 50456",
  phone2Display: "+91 81244 14441",
  phone2: "+918124414441",
  whatsappDisplay: "+91 63855 50456",
  phone: "+916385550456",       // tel: link
  whatsapp: "916385550456",     // wa.me number (country code, no +)
  email: "",                    // add when available — Email button appears automatically
  address: "Othakadai, Madurai – Melur Main Road, Narasingam Road Junction, Opposite Kothandaraman Koil, Madurai",
  mapsUrl: "https://www.google.com/maps/dir/?api=1&destination=Kothandaramar%20Temple%2C%20Othakadai%2C%20Narasingam%20Road%20Junction%2C%20Madurai%20-%20Melur%20Main%20Road%2C%20Madurai",
  social: {
    instagram: { handle: "@nidhalo_styles", url: "https://www.instagram.com/nidhalo_styles/" },
    facebook:  { handle: "@nidhalo_styles", url: "https://www.facebook.com/share/19wPVF8RFp/" }
  }
};

/* ---- Visual palettes for category tiles without client photos ---- */
NS.PALETTES = {
  wine:    ["#5a1630", "#1a0b11", "#d4af37"],
  rose:    ["#8a2550", "#1d0c14", "#f3c6d3"],
  indigo:  ["#1f2a5c", "#0d0f1f", "#d4af37"],
  emerald: ["#0f4a3c", "#081712", "#e2c46d"],
  rust:    ["#7a2e12", "#1d0e08", "#f0b860"],
  ochre:   ["#7a5512", "#1b1308", "#f6dc8f"],
  plum:    ["#4b1a4f", "#140a16", "#e8b4d8"],
  teal:    ["#0d4b52", "#071618", "#cfe7d9"],
  ivory:   ["#6b5a3e", "#1a140c", "#fff1cf"],
  ruby:    ["#7d0f2a", "#1c060c", "#ffd27a"],
  peacock: ["#0b3d5c", "#06131c", "#5fd3c4"],
  saffron: ["#8f3f0c", "#1f0d04", "#ffc46b"]
};

/* ---- Client product photos (all from the client folder) ---- */
NS.PRODUCTS = [
  {
    id: "printed-kurtis-styled",
    title: "Printed Button-Front Kurtis",
    desc: "Seven prints styled with leggings — ikat, geometric, floral, butti, checks and more.",
    img: "assets/ready-to-wear/printed-kurtis-styled",
    w: 1536, h: 1404,
    cat: "ready-to-wear", sub: "Kurtis",
    tags: ["ready-to-wear", "kurtis", "printed", "new"],
    size: "big", isNew: true
  },
  {
    id: "embroidered-kurti-set-dupatta",
    title: "Embroidered Kurti Set with Dupatta",
    desc: "Orange embroidered yoke kurti, rani pink pant and scalloped embroidered dupatta with tassels.",
    img: "assets/ready-to-wear/embroidered-kurti-set-dupatta",
    w: 1536, h: 1404,
    cat: "ready-to-wear", sub: "Salwar Sets",
    tags: ["ready-to-wear", "salwar-sets", "embroidery", "dupattas", "festival", "new"],
    size: "tall", isNew: true
  },
  {
    id: "printed-co-ord-sets",
    title: "Printed Co-ord Sets",
    desc: "Collared shirt-style tops with matching wide pants, in seven printed colourways.",
    img: "assets/ready-to-wear/printed-co-ord-sets",
    w: 1536, h: 1139,
    cat: "ready-to-wear", sub: "Co-ord Sets",
    tags: ["ready-to-wear", "co-ord", "printed", "new"],
    size: "wide", isNew: true
  },
  {
    id: "plain-colour-dupattas",
    title: "Solid Colour Dupattas",
    desc: "Cream, dark green, mustard, white, orange, rani pink, black, teal green and rust orange.",
    img: "assets/dupattas/plain-colour-dupattas",
    w: 1536, h: 1404,
    cat: "dupattas", sub: "Dupattas",
    tags: ["dupattas", "new"],
    size: "tall", isNew: true
  },
  {
    id: "embroidered-kurti-pant-sets",
    title: "Embroidered Kurti & Pant Sets",
    desc: "Floral embroidered placket panel on textured fabric with matching pants — four colours.",
    img: "assets/ready-to-wear/embroidered-kurti-pant-sets",
    w: 1536, h: 1393,
    cat: "ready-to-wear", sub: "Salwar Sets",
    tags: ["ready-to-wear", "salwar-sets", "embroidery", "new"],
    size: "", isNew: true
  },
  {
    id: "printed-kurtis-folded",
    title: "Printed Kurtis — Full Range",
    desc: "The complete printed kurti range, folded and tagged.",
    img: "assets/ready-to-wear/printed-kurtis-folded",
    w: 1536, h: 1404,
    cat: "ready-to-wear", sub: "Kurtis",
    tags: ["ready-to-wear", "kurtis", "printed", "new"],
    size: "", isNew: true
  },
  {
    id: "printed-cotton-daily-wear",
    title: "Printed Daily Wear",
    desc: "Comfortable printed everyday wear in nine colours and prints, packed and ready.",
    img: "assets/ready-to-wear/printed-cotton-daily-wear",
    w: 1139, h: 1536,
    cat: "ready-to-wear", sub: "Daily Wear",
    tags: ["ready-to-wear", "daily-wear", "printed", "new"],
    size: "xtall", isNew: true
  },
  {
    id: "printed-kurtis-lineup",
    title: "Printed Kurtis — Lookbook",
    desc: "Each printed kurti styled alongside its folded piece.",
    img: "assets/ready-to-wear/printed-kurtis-lineup",
    w: 1536, h: 1404,
    cat: "ready-to-wear", sub: "Kurtis",
    tags: ["ready-to-wear", "kurtis", "printed", "new"],
    size: "wide", isNew: true
  },
  {
    id: "embroidered-kurti-pant-sets-actual",
    title: "Embroidered Sets — Actual Photo",
    desc: "Real photo of the four embroidered kurti & pant sets: violet, lime, rust and wine.",
    img: "assets/ready-to-wear/embroidered-kurti-pant-sets-actual",
    w: 1536, h: 1393,
    cat: "ready-to-wear", sub: "Salwar Sets",
    tags: ["ready-to-wear", "salwar-sets", "embroidery", "new"],
    size: "wide", isNew: true
  },
  {
    id: "printed-kurtis-actual",
    title: "Printed Kurtis — Actual Photo",
    desc: "Real, unedited photo of the seven printed kurtis.",
    img: "assets/ready-to-wear/printed-kurtis-actual",
    w: 1139, h: 1536,
    cat: "ready-to-wear", sub: "Kurtis",
    tags: ["ready-to-wear", "kurtis", "printed", "new"],
    size: "xtall", isNew: true
  }
];

/* ---- Filter chips used by product galleries ---- */
NS.FILTERS = [
  { key: "all", label: "All" },
  { key: "sarees", label: "Sarees" },
  { key: "cotton", label: "Cotton" },
  { key: "silk", label: "Silk" },
  { key: "designer", label: "Designer" },
  { key: "bridal", label: "Bridal" },
  { key: "party-wear", label: "Party Wear" },
  { key: "dress-materials", label: "Dress Materials" },
  { key: "kurtis", label: "Kurtis" },
  { key: "salwar-sets", label: "Salwar Sets" },
  { key: "co-ord", label: "Co-ord Sets" },
  { key: "gowns", label: "Gowns" },
  { key: "dupattas", label: "Dupattas" },
  { key: "jewellery", label: "Jewellery" },
  { key: "new", label: "New Arrivals" },
  { key: "offers", label: "Offers" }
];

/* ---- Category structure (exactly as supplied) ----
   img: a client photo for that sub-category, when one genuinely matches.
   Otherwise the card shows a textile-pattern tile + enquiry button. */
NS.CATEGORIES = {
  "sarees": {
    title: "Sarees", page: "sarees.html", palette: "wine",
    subs: [
      { name: "Banarasi Silk Sarees" },
      { name: "Silk Sarees" },
      { name: "Silk Cotton Sarees" },
      { name: "Kanchi Cotton Sarees" },
      { name: "Chettinad Cotton Sarees" },
      { name: "Kora Cotton Sarees" },
      { name: "Linen Cotton Sarees" },
      { name: "Mulmul Cotton Sarees" },
      { name: "Khadi Sarees" },
      { name: "Kalamkari Sarees" },
      { name: "Bandhani Sarees" },
      { name: "Poonam Sarees" },
      { name: "Stone Work Sarees" },
      { name: "Embroidery & Designer Sarees" }
    ]
  },
  "chudidhar": {
    title: "Chudidhar Sets", page: "chudidhar-sets.html", palette: "wine",
    subs: [
      { name: "Chudidhar Sets" }
    ]
  },
  "salwar": {
    title: "Salwar Materials", page: "salwar-materials.html", palette: "wine",
    subs: [
      { name: "Salwar Materials" }
    ]
  },
  "ready-to-wear": {
    title: "Kurtis & Sets", page: "ready-to-wear.html", palette: "wine",
    subs: [
      { name: "Printed Kurtis" },
      { name: "Embroidered Kurti Sets" },
      { name: "Co-ord Sets" },
      { name: "Daily Wear" },
      { name: "Dupattas" }
    ]
  },
  "nighties": {
    title: "Nighties & Leggings", page: "nighties-leggings.html", palette: "wine",
    subs: [
      { name: "Nighties" },
      { name: "Shimmer Leggings" }
    ]
  },
  "jewellery": {
    title: "Jewellery", page: "jewellery.html", palette: "wine",
    subs: [
      { name: "Necklaces & Pendant Chains" },
      { name: "Earrings" },
      { name: "Bangles" },
      { name: "Bracelets & Cuffs" },
      { name: "Rings" }
    ]
  },
  offers: {
    title: "Offers", page: "offers.html",
    blurb: "Special pricing collections — enquire for what's available today.",
    palette: "rose",
    subs: [
      { name: "Sale", desc: "Ask us what's currently on sale.", icon: "tag" },
      { name: "Under ₹999", desc: "Collections priced under ₹999.", icon: "coin", big: "₹999" },
      { name: "Under ₹1499", desc: "Collections priced under ₹1499.", icon: "coin", big: "₹1499" },
      { name: "Combo Offers", desc: "Ask about combo offers.", icon: "combo" },
      { name: "Last Chance", desc: "Final pieces — enquire before they're gone.", icon: "clock" }
    ]
  }
};
