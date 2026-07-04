# Abdul Rashid Copperware

A static marketing website for Abdul Rashid Copperware — handmade copper cookware, tea sets, drinkware, serving pieces and decorative items, hand-hammered in the Walled City of Lahore since 1966.

Plain HTML, CSS and vanilla JS — no build step, no framework, no server required.

## Structure

```
.
├── index.html          Home
├── about.html          About / Our Story
├── products.html       Product catalogue
├── custom.html         Custom order request form
├── gallery.html        Workshop, process & finished-product photos
├── contact.html        Address, hours, map, social links
├── 404.html            Not-found page (noindex)
├── robots.txt          Crawler rules + sitemap pointer
├── sitemap.xml         Page list for search engines
├── server.js           Minimal Express server (process.env.PORT) for Node-based hosting
├── package.json         Declares the express dependency + start script
├── css/
│   └── style.css       All site styles
├── js/
│   └── main.js         Mobile menu toggle + custom order WhatsApp form
└── assets/
    ├── uploads/         Logo & banner images
    └── products/        Product & gallery photos
```

## Running locally

No build tools needed. Either:

- Open `index.html` directly in a browser, or
- Serve the folder with any static server, e.g. `npx serve .`, or
- Run the bundled Express server: `npm install && npm start` (respects `PORT` env var, defaults to 3000).

## Deployment

This is a plain static site with an optional thin Express wrapper (`server.js`), so it works on:

- Static hosts (GitHub Pages, Netlify, Vercel, S3) — just publish the repository root.
- Node/PaaS hosts that deploy from GitHub (GoDaddy, Heroku, Render, Railway) — they'll run `npm install` then `npm start`, and `server.js` binds to `process.env.PORT` automatically.

## SEO

- Canonical URLs, Open Graph and Twitter Card tags, and `LocalBusiness` JSON-LD are set on every page, currently pointing at `https://www.abdulrasheedcopperware.com`.
- **If the live domain changes**, find-and-replace `https://www.abdulrasheedcopperware.com` across all `.html` files, `robots.txt`, and `sitemap.xml`.
- `sitemap.xml` lists the 6 real pages; `404.html` is excluded and marked `noindex`.

## Editing content

- **Text & copy**: edit directly in the relevant `.html` page.
- **Images**: replace files in `assets/products/` or `assets/uploads/` and update the corresponding `src` attribute. Keep photos web-sized (JPEG, quality ~78-80) — see git history for the original optimization pass.
- **WhatsApp number**: the number `923004106558` appears in `wa.me` links across all pages and in `js/main.js` — update all occurrences if it changes.
- **Shared styles**: `css/style.css` uses CSS custom properties (see `:root`) for the copper/gold/cream palette.
