/* =====================================================================
   FRAMEON AGENCY — Scripts communs
   ===================================================================== */
(function () {
  "use strict";

  const root = document.documentElement;
  root.classList.add("js");

  // Fallback conditionnel Popover API pour les anciens navigateurs
  if (!Object.hasOwn(HTMLElement.prototype, "popover")) {
    import("https://unpkg.com/@oddbird/popover-polyfill@latest/dist/popover.min.js").catch(() => {});
  }

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  /* ---------- Icônes ---------- */
  const ICONS = {
    arrow:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 5l7 7-7 7"/></svg>',
    arrowLeft:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M19 12H5M11 19l-7-7 7-7"/></svg>',
    arrowUpRight:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 17 17 7M8 7h9v9"/></svg>',
    pause:
      '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><rect x="6" y="5" width="4" height="14" rx="1"/><rect x="14" y="5" width="4" height="14" rx="1"/></svg>',
    play:
      '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5.5v13a1 1 0 0 0 1.5.86l11-6.5a1 1 0 0 0 0-1.72l-11-6.5A1 1 0 0 0 8 5.5Z"/></svg>'
  };

  const escapeHTML = (str) =>
    String(str ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);

  const projectHref = (p) => p.url || `projet.html?p=${encodeURIComponent(p.slug)}`;

  /* ---------- Header : état au scroll ---------- */
  const header = document.querySelector(".site-header");
  if (header && !header.classList.contains("site-header--solid")) {
    const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* ---------- Barre de progression au scroll (fallback JS si animation-timeline absent) ---------- */
  const progressEl = document.getElementById("scroll-progress");
  if (progressEl && !CSS.supports("animation-timeline", "scroll()") && !reduceMotion.matches) {
    const updateProgress = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const ratio = scrollable > 0 ? Math.min(1, Math.max(0, window.scrollY / scrollable)) : 0;
      progressEl.style.transform = `scaleX(${ratio})`;
    };
    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
  }

  /* ---------- Effet de halo lumineux interactif sous le curseur ---------- */
  if (window.matchMedia("(hover: hover)").matches && !reduceMotion.matches) {
    document.addEventListener("pointermove", (e) => {
      const card = e.target.closest(".service-card");
      if (!card) return;
      const rect = card.getBoundingClientRect();
      card.style.setProperty("--mx", `${e.clientX - rect.left}px`);
      card.style.setProperty("--my", `${e.clientY - rect.top}px`);
    }, { passive: true });
  }

  /* ---------- Menu mobile : fermer au clic sur un lien ---------- */
  const mobileMenu = document.getElementById("mobile-menu");
  if (mobileMenu) {
    mobileMenu.addEventListener("click", (e) => {
      if (e.target.closest("a") && typeof mobileMenu.hidePopover === "function") {
        mobileMenu.hidePopover();
      }
    });
  }

  /* ---------- Vidéo d'accueil (lecture en boucle continue) ---------- */
  const heroVideo = document.querySelector("[data-hero-video]");
  if (heroVideo) {
    heroVideo.defaultMuted = true;
    heroVideo.muted = true;
    heroVideo.loop = true;
    heroVideo.playsInline = true;
    heroVideo.setAttribute("muted", "");
    heroVideo.setAttribute("playsinline", "");
    heroVideo.setAttribute("webkit-playsinline", "");

    const attemptHeroPlay = () => {
      if (reduceMotion.matches) {
        heroVideo.removeAttribute("autoplay");
        heroVideo.pause();
        return;
      }
      if (!heroVideo.paused) return;
      const p = heroVideo.play();
      if (p && typeof p.catch === "function") p.catch(() => {});
    };

    const syncHeroMotion = (prefersReduced) => {
      if (prefersReduced) {
        heroVideo.removeAttribute("autoplay");
        heroVideo.pause();
      } else {
        attemptHeroPlay();
      }
    };

    syncHeroMotion(reduceMotion.matches);
    if (typeof reduceMotion.addEventListener === "function") {
      reduceMotion.addEventListener("change", (e) => syncHeroMotion(e.matches));
    }
    ["loadedmetadata", "loadeddata", "canplay"].forEach((evt) => {
      heroVideo.addEventListener(evt, attemptHeroPlay, { passive: true });
    });
    document.addEventListener("visibilitychange", () => {
      if (document.visibilityState === "visible") attemptHeroPlay();
    });
    // Fallback pour iOS en Mode économie d'énergie : démarre au premier toucher
    ["touchstart", "pointerdown"].forEach((evt) => {
      window.addEventListener(evt, attemptHeroPlay, { once: true, passive: true });
    });
  }

  /* ---------- Apparition au scroll ---------- */
  let revealObserver = null;
  if ("IntersectionObserver" in window) {
    revealObserver = new IntersectionObserver((entries, obs) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target);
        }
      }
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
  }

  function observeReveals(scope) {
    const els = (scope || document).querySelectorAll(".reveal:not(.is-visible)");
    if (!revealObserver) {
      els.forEach((el) => el.classList.add("is-visible"));
      return;
    }
    els.forEach((el) => revealObserver.observe(el));
  }

  /* ---------- Compteurs animés (ex. « +1 300 », « -30% », « x2,4 ») ---------- */
  let counterObserver = null;
  if ("IntersectionObserver" in window && !reduceMotion.matches) {
    counterObserver = new IntersectionObserver((entries, obs) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        animateCounter(entry.target);
        obs.unobserve(entry.target);
      }
    }, { threshold: 0.6 });
  }

  function animateCounter(el) {
    const original = el.dataset.original || el.textContent.trim();
    el.dataset.original = original;
    const match = original.match(/^([^\d]*)(\d(?:[\d\s\u202f\u00a0]*\d)?(?:[.,]\d+)?)(.*)$/);
    if (!match) return;
    const [, prefix, numStr, suffix] = match;
    const decimalSep = numStr.includes(",") ? "," : numStr.includes(".") ? "." : null;
    const clean = numStr.replace(/[\s\u202f\u00a0]/g, "").replace(",", ".");
    const target = parseFloat(clean);
    if (!isFinite(target)) return;
    const decimals = decimalSep ? clean.split(".")[1].length : 0;
    const grouped = /[\s\u202f\u00a0]/.test(numStr.trim());
    const format = (v) => {
      let s = v.toFixed(decimals);
      let [int, dec] = s.split(".");
      if (grouped) int = int.replace(/\B(?=(\d{3})+(?!\d))/g, "\u202f");
      return int + (dec ? decimalSep + dec : "");
    };
    const duration = 1600;
    const start = performance.now();
    const tick = (now) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 4);
      el.textContent = prefix + format(target * eased) + suffix;
      if (t < 1) requestAnimationFrame(tick);
      else el.textContent = original;
    };
    requestAnimationFrame(tick);
  }

  function observeCounters(scope) {
    if (!counterObserver) return;
    (scope || document).querySelectorAll("[data-count]").forEach((el) => counterObserver.observe(el));
  }

  /* ---------- Rendu des cartes projet ---------- */
  const projets = Array.isArray(window.FRAMEON_PROJETS) ? window.FRAMEON_PROJETS : [];

  function cardHTML(p, index) {
    const results = (p.resultats || []).slice(0, 2)
      .map((r) => `<li><strong data-count>${escapeHTML(r.valeur)}</strong><span>${escapeHTML(r.label)}</span></li>`)
      .join("");
    const href = projectHref(p);
    return `
      <article class="reveal" style="--delay:${(index % 3) * 0.08}s">
        <a class="project-card" href="${escapeHTML(href)}">
          <div class="project-card-media">
            <img src="${escapeHTML(p.cover)}" alt="${escapeHTML(`${p.client} — ${p.titre} (${p.categorie})`)}" width="1800" height="1004" loading="lazy" decoding="async">
            <span class="project-badge">${escapeHTML(p.categorie)}</span>
            <span class="project-view" aria-hidden="true">${ICONS.arrowUpRight}</span>
          </div>
          <div class="project-card-body">
            <p class="project-meta"><span>${escapeHTML(p.client)}</span><span aria-hidden="true">·</span><span>${escapeHTML(p.annee)}</span></p>
            <h3>${escapeHTML(p.titre)}</h3>
            <ul class="project-results" aria-label="Résultats clés">${results}</ul>
          </div>
        </a>
      </article>`;
  }

  // Projets mis en avant (accueil)
  const featured = document.querySelector("[data-featured-projects]");
  if (featured && projets.length) {
    const list = projets.filter((p) => p.misEnAvant).slice(0, 3);
    featured.innerHTML = (list.length ? list : projets.slice(0, 3)).map(cardHTML).join("");
  }

  // Témoignages (accueil) — issus des projets
  const testimonials = document.querySelector("[data-testimonials]");
  if (testimonials && projets.length) {
    testimonials.innerHTML = projets
      .filter((p) => p.temoignage)
      .slice(0, 3)
      .map((p, i) => `
        <figure class="quote reveal" style="--delay:${i * 0.08}s">
          <blockquote><p>${escapeHTML(p.temoignage.citation)}</p></blockquote>
          <figcaption><strong>${escapeHTML(p.temoignage.auteur)}</strong><span>${escapeHTML(p.temoignage.poste)}</span></figcaption>
        </figure>`)
      .join("");
  }

  // Page Réalisations : grille + filtres
  const grid = document.querySelector("[data-projects-grid]");
  const filtersEl = document.querySelector("[data-filters]");
  if (grid && projets.length) {
    const render = (cat) => {
      const list = cat === "Tous" ? projets : projets.filter((p) => p.categorie === cat);
      grid.innerHTML = list.length
        ? list.map(cardHTML).join("")
        : '<p class="muted">Aucun projet dans cette catégorie pour le moment.</p>';
      observeReveals(grid);
      observeCounters(grid);
      const status = document.querySelector("[data-filter-status]");
      if (status) status.textContent = `${list.length} projet${list.length > 1 ? "s" : ""} affiché${list.length > 1 ? "s" : ""}`;
    };

    if (filtersEl) {
      const cats = ["Tous", ...new Set(projets.map((p) => p.categorie))];
      filtersEl.innerHTML = cats
        .map((c) => {
          const n = c === "Tous" ? projets.length : projets.filter((p) => p.categorie === c).length;
          return `<button type="button" class="filter-btn" aria-pressed="${c === "Tous"}" data-cat="${escapeHTML(c)}">${escapeHTML(c)}<span class="count">${n}</span></button>`;
        })
        .join("");
      filtersEl.addEventListener("click", (e) => {
        const btn = e.target.closest("[data-cat]");
        if (!btn) return;
        filtersEl.querySelectorAll("[data-cat]").forEach((b) => b.setAttribute("aria-pressed", String(b === btn)));
        render(btn.dataset.cat);
      });
    }
    render("Tous");
  }

  // Exposé pour la page projet
  window.FrameOn = { ICONS, escapeHTML, projectHref, observeReveals, observeCounters, projets };

  /* ---------- Année du footer ---------- */
  document.querySelectorAll("[data-year]").forEach((el) => (el.textContent = new Date().getFullYear()));

  /* ---------- Prise de rendez-vous (Calendly chargé au clic) ---------- */
  const bookingBtn = document.querySelector("[data-load-booking]");
  if (bookingBtn) {
    bookingBtn.addEventListener("click", () => {
      const container = document.querySelector("[data-booking-body]");
      const url = bookingBtn.dataset.url;
      container.innerHTML = '<div class="calendly-inline-widget" aria-label="Agenda de prise de rendez-vous"></div>';
      const widget = container.firstElementChild;
      const init = () =>
        window.Calendly.initInlineWidget({
          url: url + (url.includes("?") ? "&" : "?") + "hide_gdpr_banner=1&background_color=161618&text_color=f3f1ec&primary_color=ff4d2e",
          parentElement: widget
        });
      if (window.Calendly) return init();
      const s = document.createElement("script");
      s.src = "https://assets.calendly.com/assets/external/widget.js";
      s.async = true;
      s.onload = init;
      s.onerror = () => {
        container.innerHTML = `<div class="booking-placeholder"><p>Le calendrier n'a pas pu se charger.</p><a class="btn" href="${escapeHTML(url)}" target="_blank" rel="noopener">Ouvrir l'agenda dans un nouvel onglet ${ICONS.arrowUpRight}</a></div>`;
      };
      document.head.appendChild(s);
    });
  }

  // Initialisation
  observeReveals();
  observeCounters();
})();
