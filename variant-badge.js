(function () {
  const BADGE_ID = "variant-badge";

  function createBadge() {
    const badge = document.createElement("div");
    badge.id = BADGE_ID;
    Object.assign(badge.style, {
      position: "absolute",
      top: "12px",
      left: "12px",
      background: "rgba(0,0,0,0.70)",
      color: "#fff",
      padding: "5px 14px",
      borderRadius: "20px",
      fontSize: "13px",
      fontWeight: "600",
      fontFamily: "sans-serif",
      zIndex: "9999",
      pointerEvents: "none",
      transition: "opacity 0.3s ease, transform 0.3s ease",
      opacity: "0",
      transform: "translateY(-6px)",
    });
    return badge;
  }

  function attachBadge() {
    const wrapper =
      document.querySelector(".product__media-wrapper") ||
      document.querySelector(".product-single__photo-wrapper");

    if (!wrapper) {
      console.warn("[VariantBadge] Image wrapper not found.");
      return null;
    }
    if (getComputedStyle(wrapper).position === "static")
      wrapper.style.position = "relative";

    let badge = document.getElementById(BADGE_ID);
    if (!badge) {
      badge = createBadge();
      wrapper.appendChild(badge);
    }
    return badge;
  }

  function getVariantName() {
    const checked = document.querySelector('input[type="radio"]:checked');
    if (!checked) return null;

    return checked.value.trim() || null;
  }

  function showBadge(badge, name) {
    badge.style.opacity = "0";
    badge.style.transform = "translateY(-6px)";
    setTimeout(() => {
      badge.textContent = name;
      badge.style.opacity = "1";
      badge.style.transform = "translateY(0)";
    }, 200);
  }

  function init() {
    const badge = attachBadge();
    if (!badge) return;

    const initial = getVariantName();
    if (initial) showBadge(badge, initial);

    document.addEventListener("change", (e) => {
      if (e.target.type === "radio") {
        const name = e.target.value.trim();
        if (name) showBadge(badge, name);
      }
    });

    console.log("[VariantBadge]  Ready");
  }

  init();
})();
