# Nidhalo Styles — Website

Catalogue + enquiry website (no cart, no checkout, no payments). Open `index.html` in a browser, or upload the whole folder to any static host.

## Quick edits

- **Contact details** — `js/products.js` → `NS.CONTACT`. Fill in `email`, `address`, `mapsUrl` or `social` and the Email / Get Directions buttons and footer entries appear automatically. Nothing is shown until a value is added.
- **Products / photos** — `js/products.js` → `NS.PRODUCTS`. Each photo needs two WebP files: `name.webp` (1600px) and `name-800.webp` (800px).
  - `tags` controls which filter chips show the item (e.g. `sarees`, `cotton`, `silk`, `bridal`, `party-wear`, `kurtis`, `gowns`, `jewellery`, `offers`).
  - `isNew: true` puts the item in New Arrivals.
  - `size`: `""`, `tall`, `xtall`, `wide` or `big` sets the gallery tile shape.
- **Category photos** — in `NS.CATEGORIES`, add `img: "assets/<folder>/<name>"` to any sub-category to replace its pattern tile with a real photo.

## Photos

All product photos on the website are the shop's own photos (supplied by the client), stored in `assets/c/` as JPG files (`name.jpg` full size + `name-800.jpg` for phones). No stock or internet photos are used.

| Page | Photos |
|---|---|
| Sarees (sarees.html) | Banarasi silk, silk, silk cotton, Kanchi cotton, Chettinad cotton, Kora cotton, linen cotton, mulmul, khadi, Kalamkari, Bandhani, Poonam, stone work, embroidery & designer — `assets/c/<category>-N.jpg` |
| Chudidhar Sets | `assets/c/chudidhar-sets-N.jpg` |
| Salwar Materials | `assets/c/salwar-materials-N.jpg` |
| Nighties & Leggings | `assets/c/nighties-1.jpg`, `assets/c/leggings-1.jpg` |
| Jewellery | `assets/c/jw-*.jpg` (necklaces, earrings, bangles, bracelets, rings, full display) |
| Kurtis & Sets | client lookbook photos in `assets/ready-to-wear/` and `assets/dupattas/` |
| Offers | festival collection, nighties, Chettinad, salwar materials, Banarasi |

To add a photo: save it as JPG in `assets/c/`, make an 800px copy named `-800.jpg`, and add it to the category list in the build script (or ask your developer).

Old folders `assets/sarees`, `assets/dress-materials`, `assets/jewellery` and `assets/rtw-categories` (stock photos) are no longer used by any page and can be deleted.
