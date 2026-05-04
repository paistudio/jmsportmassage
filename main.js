const HEADER_HEIGHT_FALLBACK = 68;

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getHeaderHeight() {
  const header = document.querySelector(".site-header");
  if (!header) return HEADER_HEIGHT_FALLBACK;
  return Math.round(header.getBoundingClientRect().height);
}

function setActiveNavLink() {
  const links = Array.from(document.querySelectorAll('.nav__menu a[href^="#"]'));
  if (links.length === 0) return;

  const ids = links
    .map((a) => {
      const href = a.getAttribute("href");
      if (!href) return null;
      const id = href.replace("#", "");
      return id ? id : null;
    })
    .filter(Boolean);

  const headerOffset = getHeaderHeight() + 24;
  const sections = ids
    .map((id) => document.getElementById(id))
    .filter(Boolean)
    .map((el) => ({ el, id: el.id }));

  const y = window.scrollY + headerOffset + 1;
  let currentId = "";

  for (const { el, id } of sections) {
    if (el.offsetTop <= y) currentId = id;
  }

  for (const link of links) {
    const href = link.getAttribute("href") || "";
    const isActive = href === `#${currentId}` && currentId !== "";
    link.classList.toggle("is-active", isActive);
  }
}

function initMobileNav() {
  const toggle = document.querySelector("[data-nav-toggle]");
  const menu = document.querySelector("[data-nav-menu]");
  if (!(toggle instanceof HTMLButtonElement) || !(menu instanceof HTMLElement)) return;

  function open() {
    menu.classList.add("is-open");
    toggle.setAttribute("aria-expanded", "true");
    const firstLink = menu.querySelector("a, button");
    if (firstLink instanceof HTMLElement) firstLink.focus({ preventScroll: true });
  }

  function close({ focusToggle } = { focusToggle: false }) {
    menu.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
    if (focusToggle) toggle.focus({ preventScroll: true });
  }

  toggle.addEventListener("click", () => {
    const isOpen = menu.classList.contains("is-open");
    if (isOpen) close({ focusToggle: true });
    else open();
  });

  menu.addEventListener("click", (e) => {
    const target = e.target;
    if (!(target instanceof Element)) return;
    const link = target.closest('a[href^="#"]');
    if (link) close();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") close({ focusToggle: true });
  });

  window.addEventListener("resize", () => {
    const mq = window.matchMedia("(min-width: 769px)");
    if (mq.matches) close();
  });
}

function initSmoothScroll() {
  document.addEventListener("click", (e) => {
    const target = e.target;
    if (!(target instanceof Element)) return;
    const link = target.closest('a[href^="#"]');
    if (!(link instanceof HTMLAnchorElement)) return;

    const href = link.getAttribute("href");
    if (!href || href === "#") return;

    const id = href.slice(1);
    const el = document.getElementById(id);
    if (!el) return;

    e.preventDefault();

    const headerOffset = getHeaderHeight() + 24;
    const y = el.getBoundingClientRect().top + window.scrollY - headerOffset;

    window.history.pushState(null, "", href);
    window.scrollTo({ top: y, behavior: "smooth" });
  });
}

function initTracking() {
  document.addEventListener("click", (e) => {
    const target = e.target;
    if (!(target instanceof Element)) return;
    const el = target.closest("[data-track]");
    if (!(el instanceof HTMLElement)) return;

    const detail = {
      type: el.getAttribute("data-track") || "",
      location: el.getAttribute("data-track-location") || "",
      href: el instanceof HTMLAnchorElement ? el.href : ""
    };

    window.dispatchEvent(new CustomEvent("jm:track", { detail }));

    const gtag = window.gtag;
    if (typeof gtag === "function" && detail.type === "whatsapp") {
      gtag("event", "whatsapp_click", {
        event_category: "engagement",
        event_label: detail.location,
        value: 1
      });
    }
  });
}

function initReveal() {
  if (prefersReducedMotion()) {
    const items = document.querySelectorAll("[data-reveal]");
    for (const el of items) {
      if (el instanceof HTMLElement) el.classList.add("is-visible");
    }
    return;
  }

  const items = Array.from(document.querySelectorAll("[data-reveal]")).filter(
    (el) => el instanceof HTMLElement
  );
  if (items.length === 0) return;

  for (const el of items) {
    const delay = Number(el.getAttribute("data-reveal-delay") || "0");
    if (Number.isFinite(delay)) el.style.setProperty("--reveal-delay", `${delay}ms`);
  }

  const io = new IntersectionObserver(
    (entries, observer) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const el = entry.target;
        if (el instanceof HTMLElement) el.classList.add("is-visible");
        observer.unobserve(el);
      }
    },
    { root: null, threshold: 0.18, rootMargin: "0px 0px -10% 0px" }
  );

  for (const el of items) io.observe(el);
}

function initHeroMotion() {
  if (prefersReducedMotion()) return;
  const hero = document.querySelector(".hero");
  if (!(hero instanceof HTMLElement)) return;

  let raf = 0;
  const strength = 28;

  function set(x, y) {
    hero.style.setProperty("--mx", `${x}px`);
    hero.style.setProperty("--my", `${y}px`);
  }

  function onMove(e) {
    const rect = hero.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) / rect.width;
    const dy = (e.clientY - cy) / rect.height;

    cancelAnimationFrame(raf);
    raf = requestAnimationFrame(() => set(dx * strength, dy * strength));
  }

  function onLeave() {
    cancelAnimationFrame(raf);
    raf = requestAnimationFrame(() => set(0, 0));
  }

  hero.addEventListener("mousemove", onMove, { passive: true });
  hero.addEventListener("mouseleave", onLeave, { passive: true });
}

function initInstagramCarousel() {
  const root = document.querySelector("[data-ig-carousel]");
  if (!(root instanceof HTMLElement)) return;

  const track = root.querySelector("[data-ig-track]");
  const slides = Array.from(root.querySelectorAll("[data-ig-slide]")).filter((el) => el instanceof HTMLElement);
  const dotsWrap = root.querySelector("[data-ig-dots]");
  const prevBtn = root.querySelector("[data-ig-prev]");
  const nextBtn = root.querySelector("[data-ig-next]");
  if (!(track instanceof HTMLElement) || !(dotsWrap instanceof HTMLElement) || slides.length === 0) return;

  const interval = Number(root.getAttribute("data-interval") || "6500");
  const hasAutoplay = Number.isFinite(interval) && interval >= 2500 && !prefersReducedMotion();
  let index = 0;
  let timer = 0;
  let raf = 0;
  let paused = false;
  let inView = true;

  function extractShortcode(url) {
    if (!url) return null;
    const match = url.match(/instagram\.com\/p\/([^/?#]+)/i);
    return match?.[1] || null;
  }

  function mountEmbed(i) {
    const slide = slides[i];
    if (!slide) return;
    if (slide.dataset.igMounted === "true") return;

    const embedHost = slide.querySelector("[data-ig-embed]");
    if (!(embedHost instanceof HTMLElement)) return;

    const url = slide.getAttribute("data-ig-url") || "";
    const shortcode = extractShortcode(url);

    function mountFallback(message) {
      const fallback = document.createElement("div");
      fallback.className = "ig-fallback";
      const title = document.createElement("div");
      title.className = "ig-fallback__title";
      title.textContent = "Instagram";
      const text = document.createElement("div");
      text.className = "ig-fallback__text";
      text.textContent = message;
      fallback.appendChild(title);
      fallback.appendChild(text);
      if (url) {
        const link = document.createElement("a");
        link.className = "btn btn--inverted";
        link.href = url;
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        link.textContent = "Buka di Instagram";
        fallback.appendChild(link);
      }
      embedHost.appendChild(fallback);
      slide.dataset.igMounted = "true";
    }

    if (!shortcode) {
      mountFallback("Isi URL post Instagram di data-ig-url (format: instagram.com/p/SHORTCODE/).");
      return;
    }

    if (/shortcode/i.test(shortcode) || /shortcode/i.test(url)) {
      mountFallback("Ganti SHORTCODE_x dengan URL post Instagram asli supaya embed bisa tampil.");
      return;
    }

    const iframe = document.createElement("iframe");
    iframe.loading = "lazy";
    iframe.title = `Instagram post ${i + 1}`;
    iframe.setAttribute("allowfullscreen", "true");
    iframe.setAttribute("scrolling", "no");
    iframe.referrerPolicy = "strict-origin-when-cross-origin";
    iframe.src = `https://www.instagram.com/p/${shortcode}/embed/`;

    embedHost.appendChild(iframe);
    slide.dataset.igMounted = "true";
  }

  function mountAround(i) {
    mountEmbed(i);
    mountEmbed((i + 1) % slides.length);
    mountEmbed((i + slides.length - 1) % slides.length);
  }

  function setActiveDot(i) {
    const dots = Array.from(dotsWrap.querySelectorAll("[data-ig-dot]")).filter((el) => el instanceof HTMLElement);
    for (const dot of dots) dot.classList.toggle("is-active", Number(dot.dataset.igDot) === i);
  }

  function goTo(i, { smooth = true } = {}) {
    index = (i + slides.length) % slides.length;
    const target = slides[index];
    if (target) target.scrollIntoView({ behavior: smooth ? "smooth" : "auto", inline: "start", block: "nearest" });
    setActiveDot(index);
    mountAround(index);
  }

  function inferIndexFromScroll() {
    const left = track.scrollLeft;
    const width = track.clientWidth || 1;
    const next = Math.round(left / width);
    if (Number.isFinite(next) && next !== index && next >= 0 && next < slides.length) {
      index = next;
      setActiveDot(index);
      mountAround(index);
    }
  }

  function start() {
    if (!hasAutoplay) return;
    if (timer) window.clearInterval(timer);
    timer = window.setInterval(() => {
      if (paused || !inView) return;
      goTo(index + 1, { smooth: true });
    }, interval);
  }

  function stop() {
    if (!timer) return;
    window.clearInterval(timer);
    timer = 0;
  }

  for (let i = 0; i < slides.length; i++) {
    const dot = document.createElement("button");
    dot.type = "button";
    dot.className = "ig-dot";
    dot.setAttribute("aria-label", `Slide ${i + 1}`);
    dot.dataset.igDot = String(i);
    dot.setAttribute("data-ig-dot", "true");
    dot.addEventListener("click", () => goTo(i));
    dotsWrap.appendChild(dot);
  }

  if (prevBtn instanceof HTMLElement) prevBtn.addEventListener("click", () => goTo(index - 1));
  if (nextBtn instanceof HTMLElement) nextBtn.addEventListener("click", () => goTo(index + 1));

  track.addEventListener(
    "scroll",
    () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(inferIndexFromScroll);
    },
    { passive: true }
  );

  root.addEventListener("mouseenter", () => (paused = true), { passive: true });
  root.addEventListener("mouseleave", () => (paused = false), { passive: true });
  root.addEventListener("focusin", () => (paused = true));
  root.addEventListener("focusout", () => (paused = false));

  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        inView = entry.isIntersecting;
        if (inView) start();
        else stop();
      }
    },
    { threshold: 0.2 }
  );
  io.observe(root);

  goTo(0, { smooth: false });
  start();
}

function init() {
  initMobileNav();
  initSmoothScroll();
  initTracking();
  initReveal();
  initHeroMotion();
  initInstagramCarousel();
  setActiveNavLink();

  let raf = 0;
  window.addEventListener(
    "scroll",
    () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(setActiveNavLink);
    },
    { passive: true }
  );
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
