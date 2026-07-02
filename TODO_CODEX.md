# Tâches de finition — Site personnel CV / Portfolio

Contexte : le site Astro est fonctionnel (`npm run build` passe sans erreur ni warning).
Une revue de code a identifié les corrections ci-dessous. Traite-les dans l'ordre.

## Règles générales (à respecter pour toutes les tâches)

- N'invente AUCUNE donnée personnelle. Tout champ inconnu reste à `[INFORMATION À FOURNIR]` (constante `PLACEHOLDER` dans `src/data/cv.ts`).
- Tout le contenu du CV reste dans `src/data/cv.ts` — jamais en dur dans les composants.
- Ne casse pas les acquis : accessibilité (skip-link, aria, focus visible, `prefers-reduced-motion`, lisibilité sans JavaScript), SEO (canonical, Open Graph, JSON-LD), performance (page < 500 Ko).
- Après chaque tâche : `npm run build` doit passer avec 0 erreur et 0 warning.

---

## Tâche 1 — Charger réellement la police Inter

**Problème :** `src/styles/global.css` déclare `Inter` dans `--font-sans`, mais la police n'est jamais chargée. Les visiteurs sans Inter installée voient la police système.

**À faire :**
- Installer `@fontsource-variable/inter` et l'importer (dans `src/layouts/BaseLayout.astro` ou `global.css`).
- Vérifier que `font-display: swap` est actif (comportement par défaut de Fontsource).
- Garder la pile de fallback système existante dans `--font-sans`.

**Validation :** la police Inter est servie localement (pas de requête vers Google Fonts), le build passe, le poids ajouté reste raisonnable (variable font unique, latin uniquement si possible).

## Tâche 2 — Remplacer og-image.svg par un PNG 1200×630

**Problème :** LinkedIn et la plupart des scrapers de réseaux sociaux ne supportent pas le SVG en image de partage.

**À faire :**
- Générer `public/og-image.png` (1200×630) : fond `#FAFAFA`, texte sobre reprenant le titre professionnel « Coordinateur Technicien Informatique - HelpDesk | Spécialisation IA », accent `#2563EB`. Pas de nom propre (inconnu à ce stade).
- Mettre à jour `cv.meta.ogImage` en `/og-image.png` dans `src/data/cv.ts`.
- Supprimer `public/og-image.svg`.
- Les meta `og:image` et `twitter:image` doivent produire une URL absolue (utiliser `cv.meta.siteUrl`), pas un chemin relatif.

**Validation :** `dist/index.html` contient une URL absolue vers le PNG ; le fichier existe dans `dist/`.

## Tâche 3 — Supprimer les textes « méta » visibles par les visiteurs

**Problème :** certains textes sont des instructions internes, pas du contenu public.

**À faire :**
- Dans `src/data/cv.ts`, réécrire les `intro` de sections qui parlent du site au lieu du profil. En particulier `sections.experience.intro` (« Une timeline antéchronologique à compléter avec les réalisations mesurables. ») → remplacer par une phrase neutre orientée visiteur, ex. « Mon parcours professionnel, du support utilisateur à la coordination d'équipe. » Relire toutes les autres intros avec le même œil.
- Dans `src/components/Contact.astro`, supprimer la ligne « Formulaire : Activé / Non activé en v1 » de la carte latérale (information interne sans intérêt pour un recruteur). Supprimer aussi le champ du rendu, mais garder `formEnabled` dans le modèle de données.

**Validation :** aucun texte affiché ne fait référence au site lui-même, à une « v1 » ou à des choses « à compléter ».

## Tâche 4 — Préparer le dépôt git

**Problème :** le dossier n'est pas un dépôt git et `dist/` est présent à la racine.

**À faire :**
- Créer un `.gitignore` : `node_modules/`, `dist/`, `.astro/`.
- `git init` + commit initial avec un message clair.
- Ne PAS pousser vers un remote (sera décidé plus tard).

**Validation :** `git status` propre après le commit initial ; `dist/` et `node_modules/` non suivis.

## Tâche 5 — Centraliser l'URL du site

**Problème :** `https://example.com` est dupliqué dans 3 fichiers (`astro.config.mjs`, `src/data/cv.ts`, `public/robots.txt`), risque d'oubli au moment du vrai déploiement.

**À faire :**
- Faire de `astro.config.mjs` la source unique : dans `cv.ts` et pour le robots/sitemap, dériver l'URL depuis la config Astro (`import.meta.env.SITE` côté composants ; pour robots.txt, le générer via un endpoint `src/pages/robots.txt.ts` qui utilise `import.meta.env.SITE`, et supprimer `public/robots.txt`).
- Documenter dans le README : « pour changer de domaine, modifier uniquement `site` dans astro.config.mjs ».

**Validation :** changer `site` dans `astro.config.mjs` puis rebuilder met à jour canonical, og:url, JSON-LD, sitemap et robots.txt sans autre modification.

## Tâche 6 — Petites finitions

- Le logo du header (« IT / Portfolio ») : dériver dynamiquement les initiales et le nom depuis `cv.profile` quand ils seront renseignés ; tant que ce sont des placeholders, garder le rendu actuel comme fallback.
- Ajouter dans le README une section « Checklist avant mise en ligne » : remplacer `public/cv.pdf` (le fichier actuel est un factice de 615 octets), renseigner `src/data/cv.ts`, définir le domaine dans `astro.config.mjs`, vérifier Lighthouse ≥ 95 en mobile.

## Vérification finale (après toutes les tâches)

1. `npm run build` : 0 erreur, 0 warning.
2. `npm run preview` : navigation clavier complète (skip-link, burger, ancres, boutons).
3. Page lisible JavaScript désactivé.
4. Aucun scroll horizontal à 360 px et 1440 px.
5. Lister en fin de réponse tous les champs encore à `[INFORMATION À FOURNIR]`.
