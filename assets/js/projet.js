/* =====================================================================
   FRAMEON AGENCY — Page projet (rendu dynamique via projet.html?p=<slug>
   ou enrichissement des pages statiques projet-<slug>.html)
   ===================================================================== */
(function () {
  "use strict";

  const { ICONS, escapeHTML: e, projectHref, observeReveals, observeCounters, projets } = window.FrameOn;
  const main = document.querySelector("[data-project-page]");
  if (!main) return;

  const querySlug = new URLSearchParams(window.location.search).get("p");
  // Si la page statique est déjà pré-rendue et qu'aucun paramètre ?p= n'est forcé, on conserve le DOM statique
  if (main.dataset.renderedSlug && !querySlug) {
    return;
  }

  const slug = querySlug || main.dataset.renderedSlug;
  if (!slug) return;

  const index = projets.findIndex((p) => p.slug === slug);
  const p = projets[index];

  if (!p) {
    document.title = "Projet introuvable | FrameOn Agency";
    main.innerHTML = `
      <section class="container not-found">
        <div class="project-back-bar">
          <div class="project-back-actions">
            <a class="btn btn--back btn--small" href="realisations.html">${ICONS.arrowLeft} Retour aux réalisations</a>
            <a class="btn btn--ghost btn--small" href="index.html">Retour à l'accueil</a>
          </div>
        </div>
        <p class="eyebrow"><span class="rec-dot"></span>Erreur 404</p>
        <h1 class="display mt-s">Ce projet est <em>hors cadre.</em></h1>
        <p class="lead mt-m">Le projet demandé n'existe pas ou a été déplacé.</p>
        <div class="btn-row mt-m">
          <a class="btn" href="realisations.html">Voir toutes nos réalisations ${ICONS.arrow}</a>
          <a class="btn btn--ghost" href="index.html">Retour à l'accueil</a>
        </div>
      </section>`;
    return;
  }

  document.title = `${p.client} — ${p.titre} (${p.categorie}) | FrameOn Agency`;
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute("content", `${p.client} (${p.secteur}) : ${p.accroche}`);

  const next = projets[(index + 1) % projets.length];
  const letters = "ABCDEFGH";

  const list = (items) => (items || []).map((i) => `<li>${e(i)}</li>`).join("");

  function singleVideoPlayer(v) {
    if (!v) return "";
    if (v.type === "youtube") {
      return `<iframe src="https://www.youtube-nocookie.com/embed/${e(v.id)}?rel=0" title="Vidéo du projet ${e(p.client)}" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;
    }
    if (v.type === "vimeo") {
      return `<iframe src="https://player.vimeo.com/video/${e(v.id)}?dnt=1" title="Vidéo du projet ${e(p.client)}" loading="lazy" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>`;
    }
    const w = v.vertical ? "1080" : "1280";
    const h = v.vertical ? "1920" : "720";
    return `<video controls loading="lazy" playsinline preload="none" width="${w}" height="${h}" poster="${e(v.poster || p.cover)}"><source src="${e(v.src)}" type="video/mp4">Votre navigateur ne lit pas cette vidéo.</video>`;
  }

  function videosBlockHTML() {
    if (Array.isArray(p.videos) && p.videos.length > 0) {
      return `<div class="result-videos-grid">${p.videos.map((v) => `
        <div class="result-video-card">
          ${v.label ? `<p class="result-video-label">${e(v.label)}</p>` : ""}
          <div class="result-video${v.vertical ? " result-video--vertical" : ""}">${singleVideoPlayer(v)}</div>
        </div>`).join("")}</div>`;
    }
    const v = p.video;
    if (!v) return "";
    return `<div class="result-video${v.vertical ? " result-video--vertical" : ""}">${singleVideoPlayer(v)}</div>`;
  }

  let n = 0;
  const num = () => String(++n).padStart(2, "0");

  main.innerHTML = `
    <section class="project-hero">
      <img class="project-hero-img" src="${e(p.cover)}" alt="${e(`${p.client} — ${p.titre}`)}" width="1800" height="1004" fetchpriority="high">
      <div class="container">
        <div class="project-back-bar">
          <div class="project-back-actions">
            <a class="btn btn--back btn--small" href="realisations.html">${ICONS.arrowLeft} Retour aux réalisations</a>
            <a class="btn btn--ghost btn--small" href="index.html">Retour à l'accueil</a>
          </div>
          <ol class="breadcrumb" aria-label="Fil d'Ariane">
            <li><a href="index.html">Accueil</a></li>
            <li><a href="realisations.html">Réalisations</a></li>
            <li aria-current="page">${e(p.client)}</li>
          </ol>
        </div>
        <p class="eyebrow"><span class="rec-dot"></span>${e(p.categorie)} · ${e(p.client)}</p>
        <h1>${e(p.titre)}</h1>
        <p class="lead">${e(p.accroche)}</p>
        <dl class="project-facts">
          <div><dt>Client</dt><dd>${e(p.client)}</dd></div>
          <div><dt>Secteur</dt><dd>${e(p.secteur)}</dd></div>
          <div><dt>Livrables</dt><dd>${e(p.livrables)}</dd></div>
          <div><dt>Année · Durée</dt><dd>${e(p.annee)} · ${e(p.duree)}</dd></div>
        </dl>
      </div>
    </section>

    <section aria-labelledby="kpi-title">
      <h2 id="kpi-title" class="visually-hidden">Résultats obtenus</h2>
      <ul class="kpis" style="--kpi-count:${Math.min((p.resultats || []).length, 4)}">
        ${(p.resultats || []).map((r) => `<li class="reveal"><strong data-count>${e(r.valeur)}</strong><span>${e(r.label)}</span></li>`).join("")}
      </ul>
    </section>

    <div class="section--light">
      <div class="container">
        <section class="case-section">
          <div class="case-section-head reveal">
            <p class="eyebrow">${num()} — Contexte</p>
            <h2>Le contexte & les enjeux</h2>
          </div>
          <div class="case-section-body reveal"><p>${e(p.contexte)}</p></div>
        </section>

        <section class="case-section">
          <div class="case-section-head reveal">
            <p class="eyebrow">${num()} — Attentes</p>
            <h2>Ce que le client attendait</h2>
          </div>
          <div class="case-section-body reveal">
            <div class="box"><ul class="check-list">${list(p.attentes)}</ul></div>
          </div>
        </section>

        <section class="case-section">
          <div class="case-section-head reveal">
            <p class="eyebrow">${num()} — Contraintes</p>
            <h2>Les contraintes du projet</h2>
          </div>
          <div class="case-section-body reveal"><ul class="constraints">${list(p.contraintes)}</ul></div>
        </section>

        <section class="case-section">
          <div class="case-section-head reveal">
            <p class="eyebrow">${num()} — Propositions</p>
            <h2>Les pistes que nous avons proposées</h2>
          </div>
          <div class="case-section-body reveal">
            <ol class="tracks">
              ${(p.pistes || []).map((t, i) => `
                <li class="track${t.retenue ? " track--chosen" : ""}">
                  <span class="track-letter" aria-hidden="true">${letters[i] || i + 1}</span>
                  <h3>${e(t.nom)}${t.retenue ? ' <span class="chosen-badge">Piste retenue</span>' : ""}</h3>
                  <p>${e(t.idee)}</p>
                </li>`).join("")}
            </ol>
          </div>
        </section>

        <section class="case-section" style="border-bottom:0">
          <div class="case-section-head reveal">
            <p class="eyebrow">${num()} — Solution</p>
            <h2>La solution retenue</h2>
          </div>
          <div class="case-section-body reveal"><p>${e(p.solution)}</p></div>
        </section>
      </div>
    </div>

    <div class="section--alt">
      <div class="container">
        ${p.production ? `
        <section class="case-section">
          <div class="case-section-head reveal">
            <p class="eyebrow">${num()} — Production</p>
            <h2>Tournage & montage</h2>
          </div>
          <div class="case-section-body reveal">
            <div class="prod-grid">
              <div class="box"><h3>Tournage</h3><p>${e(p.production.tournage)}</p></div>
              <div class="box"><h3>Montage</h3><p>${e(p.production.montage)}</p></div>
              <div class="box"><h3>Équipe</h3><p>${e(p.production.equipe)}</p></div>
            </div>
          </div>
        </section>` : ""}

        <section class="case-section" style="border-bottom:0">
          <div class="case-section-head reveal">
            <p class="eyebrow">${num()} — Résultat</p>
            <h2>Le résultat</h2>
          </div>
          <div class="case-section-body reveal">
            ${videosBlockHTML()}
            <div class="gallery">
              ${(p.galerie || []).map((src, i) => `<figure><img src="${e(src)}" alt="Photo du projet ${e(p.client)} — ${e(p.titre)} (${i + 1})" width="1800" height="1004" loading="lazy" decoding="async"></figure>`).join("")}
            </div>
          </div>
        </section>
      </div>
    </div>

    ${p.temoignage ? `
    <section class="section section--light">
      <div class="container">
        <figure class="big-quote reveal">
          <blockquote><p>${e(p.temoignage.citation)}</p></blockquote>
          <figcaption><strong>${e(p.temoignage.auteur)}</strong> — ${e(p.temoignage.poste)}</figcaption>
        </figure>
      </div>
    </section>` : ""}

    <section class="section--tight">
      <div class="container">
        <a class="next-project reveal" href="${e(projectHref(next))}">
          <img src="${e(next.cover)}" alt="${e(`${next.client} — ${next.titre}`)}" width="1800" height="1004" loading="lazy">
          <div>
            <p class="eyebrow">Projet suivant · ${e(next.categorie)}</p>
            <h2>${e(next.titre)}</h2>
          </div>
          <span class="btn btn--ghost">Découvrir ${ICONS.arrow}</span>
        </a>
        <div class="project-back-actions mt-m reveal">
          <a class="btn btn--back btn--small" href="realisations.html">${ICONS.arrowLeft} Toutes les réalisations</a>
          <a class="btn btn--ghost btn--small" href="index.html">Retour à l'accueil</a>
        </div>
      </div>
    </section>

    <section class="section" style="padding-top:0">
      <div class="container">
        <div class="cta-band reveal">
          <h2 class="h2">Et si le prochain cas client, <em>c'était le vôtre ?</em></h2>
          <p>Parlez-nous de vos enjeux. Nous revenons vers vous avec des idées concrètes, pas avec un devis générique.</p>
          <div class="btn-row">
            <a class="btn" href="contact.html#rendez-vous">Prendre rendez-vous ${ICONS.arrow}</a>
            <a class="btn btn--ghost" href="tel:+33630424248">06 30 42 42 48</a>
          </div>
        </div>
      </div>
    </section>`;

  observeReveals(main);
  observeCounters(main);
})();
