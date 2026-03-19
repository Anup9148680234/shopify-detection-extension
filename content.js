// Check if the site is built with Shopify
function isShopify() {
  if (window.Shopify) return true;
  if (document.querySelector('meta[name="shopify-checkout-api-token"]')) return true;
  if (document.querySelector('link[href*="cdn.shopify.com"]')) return true;
  if (Array.from(document.scripts).some(s => s.src.includes("cdn.shopify.com"))) return true;
  return false;
}

const shopifyDetected = isShopify();

const style = document.createElement("style");
style.textContent = `
  #shopify-detector-banner {
    all: initial;
    display: flex !important;
    align-items: center;
    justify-content: center;
    gap: 10px;
    width: 100%;
    padding: 10px 20px;
    box-sizing: border-box;
    background: linear-gradient(90deg, #0a0a0a, #1a1a1a, #0a0a0a);
    border-bottom: 1px solid #2a2a2a;
    position: relative;
    z-index: 2147483647;
    font-family: sans-serif;
    animation: sd-slide-down 0.5s ease both;
  }

  @keyframes sd-slide-down {
    from { transform: translateY(-100%); opacity: 0; }
    to   { transform: translateY(0);    opacity: 1; }
  }

  #shopify-detector-banner .sd-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    flex-shrink: 0;
  }

  #shopify-detector-banner .sd-dot.green {
    background: #96ff64;
    box-shadow: 0 0 8px #96ff64;
  }

  #shopify-detector-banner .sd-dot.red {
    background: #ff4d4d;
    box-shadow: 0 0 8px #ff4d4d;
  }

  #shopify-detector-banner .sd-label {
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.15em;
    text-transform: uppercase;
  }

  #shopify-detector-banner .sd-label.green { color: #96ff64; }
  #shopify-detector-banner .sd-label.red   { color: #ff4d4d; }

  #shopify-detector-banner .sd-divider {
    width: 1px;
    height: 14px;
    background: #333;
    flex-shrink: 0;
  }

  #shopify-detector-banner .sd-text {
    font-size: 12px;
    color: #888;
  }

  #shopify-detector-banner .sd-shopify-logo {
    display: flex;
    align-items: center;
    gap: 4px;
  }

  #shopify-detector-banner .sd-shopify-logo svg {
    width: 14px;
    height: 14px;
    fill: #96bf48;
    flex-shrink: 0;
  }

  #shopify-detector-banner .sd-shopify-name {
    font-size: 12px;
    font-weight: 700;
    color: #96bf48;
    letter-spacing: 0.04em;
  }

  #shopify-detector-banner .sd-close {
    position: absolute;
    right: 14px;
    background: #222;
    border: none;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    cursor: pointer;
    color: #888;
    font-size: 12px;
    line-height: 20px;
    text-align: center;
    padding: 0;
  }

  #shopify-detector-banner .sd-close:hover { background: #333; color: #fff; }
`;
document.head.appendChild(style);

const shopifyLogoSVG = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 109.5 124.5">
    <path d="M74.7 14.8s-1.4.4-3.7 1.1c-.4-1.3-1-2.8-1.8-4.4-2.6-5-6.5-7.7-11.1-7.7-.3 0-.6 0-1 .1-.1-.2-.3-.3-.4-.5-2-2.2-4.6-3.2-7.8-3.1-6 .2-12 4.5-16.9 12.2-3.4 5.4-6 12.2-6.8 17.5l-11.6 3.6c-3.4 1.1-3.5 1.2-4 4.4C9.2 40.5 0 109.2 0 109.2l75.6 13.1V14.5c-.3 0-.6.2-.9.3zm-14.6 4.5c-4 1.2-8.4 2.6-12.7 3.9 1.2-4.7 3.6-9.4 6.4-12.5 1.1-1.1 2.6-2.4 4.3-3.2 1.7 3.5 2.1 8.2 2 11.8zm-8-15.9c1.4 0 2.6.3 3.6.9-1.6.8-3.2 2.1-4.7 3.6-3.8 4.1-6.7 10.5-7.9 16.6l-10.6 3.3c1.9-9 9.4-24.1 19.6-24.4zm4 55.5c-.4-6.8-4.6-9.8-7.9-11.6-2.9-1.5-4.9-2.6-5.1-5.8-.1-2.1 1-4.5 5-4.7 1.4 0 2.6.1 3.6.3L54 27.7c-1.4-.3-3.1-.4-5-.4-11.1 0-16.7 6.9-16.7 14.1 0 7.7 5.3 10.9 9.5 13.2 3.3 1.8 4.9 3.1 5.1 5.9.3 3.3-2.3 4.9-5.2 5-4.4.1-7.7-1.3-7.7-1.3l-2 8.7s2.6 1.5 8.4 1.5c7.4 0 16.1-3.7 16.7-13.6zm5.8-40.7c0-3.3-.4-7.9-1.8-11.5 4.5.9 6.7 6 7.6 9.1l-5.8 1.7v.7z"/>
    <path d="M76.5 122.2l33-8.2S97.2 26.6 97.1 25.9c-.1-.7-.7-1.1-1.2-1.1s-9.5-.2-9.5-.2-5.3-5.1-7.3-7.1v104.7h-2.6z"/>
  </svg>`;

const banner = document.createElement("div");
banner.id = "shopify-detector-banner";

if (shopifyDetected) {
  banner.innerHTML = `
    <div class="sd-dot green"></div>
    <span class="sd-label green">Shopify Detected</span>
    <div class="sd-divider"></div>
    <span class="sd-text">Built with</span>
    <div class="sd-shopify-logo">
      ${shopifyLogoSVG}
      <span class="sd-shopify-name">Shopify</span>
    </div>
    <button class="sd-close" title="Dismiss">✕</button>
  `;
} else {
  banner.innerHTML = `
    <div class="sd-dot red"></div>
    <span class="sd-label red">Shopify Not Detected</span>
    <div class="sd-divider"></div>
    <span class="sd-text">Not a Shopify storefront</span>
    <button class="sd-close" title="Dismiss">✕</button>
  `;
}

document.body.insertBefore(banner, document.body.firstChild);

banner.querySelector(".sd-close").addEventListener("click", () => banner.remove());