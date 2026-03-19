# Shopify Detection Extension : Chrome Extension

Automatically detects whether a website is built with Shopify and displays a banner at the top of the page.

---

## Installation

1. Download or unzip this folder to your computer
2. Open Chrome and go to `chrome://extensions/`
3. Enable **Developer Mode**
4. Click **"Load unpacked"** and select the `shopify-detection-extension` folder
5. Done, the extension is now active

---

## Usage

Just browse normally. The extension runs automatically on every page load.

- 🟢 **Shopify site** : a dark banner slides in at the top:
  `● DETECTED | Built with Shopify`

- 🔴 **Non-Shopify site** : the banner shows:
  `● NOT DETECTED | Not a Shopify storefront`

Click the **✕** button on the right to dismiss the banner.

---

## Test Sites

Try these known Shopify stores to verify the extension works:

🟢 **Shopify sites**

- https://row.gymshark.com/
- https://plumgoodness.com/
- https://www.westside.com/

🔴 **Non-Shopify site**

- https://www.google.com/
- https://www.amazon.com/

---

## File Structure

```
shopify-detector/
 - manifest.json   <- tells Chrome about the extension
 - content.js      <- detects Shopify and injects the banner
 - popup.html      <- initial HTML document
```

---

## How Detection Works

The extension checks for these Shopify signals on every page:

| Signal                       | Description                            |
| ---------------------------- | -------------------------------------- |
| `window.Shopify`             | Global JS object on all Shopify stores |
| `shopify-checkout-api-token` | Meta tag injected by Shopify           |
| `cdn.shopify.com` links      | Stylesheet links from Shopify's CDN    |
| `cdn.shopify.com` scripts    | JS files loaded from Shopify's CDN     |
