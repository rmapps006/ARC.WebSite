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
- Serve the folder with any static server, e.g.:

  ```
  npx serve .
  ```

## Deployment

This is a plain static site, so it can be hosted on GitHub Pages, Netlify, Vercel, or any static file host — just publish the repository root.

## Editing content

- **Text & copy**: edit directly in the relevant `.html` page.
- **Images**: replace files in `assets/products/` or `assets/uploads/` and update the corresponding `src` attribute.
- **WhatsApp number**: the number `923004106558` appears in `wa.me` links across all pages and in `js/main.js` — update all occurrences if it changes.
- **Shared styles**: `css/style.css` uses CSS custom properties (see `:root`) for the copper/gold/cream palette.
