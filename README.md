# Variant Badge : Shopify Console Snippet

A lightweight JavaScript snippet that detects the selected color variant on a Shopify product page and displays it as a badge over the main product image. No frameworks, no dependencies : just plain JS you can paste straight into the browser console.

---

## What it does

- Reads whichever color variant is currently selected
- Drops a small badge on the top-left corner of the product image showing the variant name (e.g. "Red", "Green", "Pink")
- Updates the badge automatically whenever you switch to a different variant
- Fades in smoothly on each update so it doesn't feel jarring

---

## How to use it

1. Open any product page on the store : for example:  
   `https://technical-assessment-store.myshopify.com/products/mesmerizing-beagle-dog-can-sleeve`

2. Open DevTools (`F12` or right-click > Inspect)

3. Go to the **Console** tab

4. Paste the entire snippet and hit **Enter**

You should see `[VariantBadge] ✅ Ready` in the console and the badge will appear on the image right away.

---

## How it works

**Badge creation** : a `<div>` is created with `position: absolute` so it sits on top of the product image without affecting the layout.

**Variant detection** : it looks for the currently checked radio input (`input[type="radio"]:checked`) and reads its `.value`. Using `.value` directly is important : reading the label's text would accidentally pull in hidden "Sold out" or "Unavailable" spans that Shopify injects into the DOM.

**Change detection** : a single delegated `change` listener sits on `document` and watches for any radio input change. When one fires, it grabs the new value and updates the badge.

**Animation** : on every update the badge fades out, swaps the text, then fades back in using a CSS `transition` and a small `setTimeout`.

---

## Store tested on

`https://technical-assessment-store.myshopify.com/collections/all`

---

## Constraints

- Plain JavaScript only : no jQuery, no libraries
- Runs directly from the browser console
- Designed for Shopify product pages with radio-style variant selectors