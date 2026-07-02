# Site personnel CV / Portfolio

Site statique one-page construit avec Astro, TypeScript strict et CSS vanilla.

## Lancer le projet

```bash
npm install
npm run dev
```

## Builder

```bash
npm run build
npm run preview
```

## Mettre à jour le contenu

Tout le contenu personnel se trouve dans `src/data/cv.ts`.

Pour ajouter une expérience :

1. Ouvrir `src/data/cv.ts`.
2. Ajouter un objet dans le tableau `experiences`.
3. Renseigner `role`, `company`, `location`, `startDate`, `endDate` et `highlights`.

Les composants ne doivent pas contenir de données de CV en dur. Tout champ encore inconnu doit rester à `[INFORMATION À FOURNIR]`.

## Fichiers à remplacer

- `public/cv.pdf` : remplacer par le CV PDF final.
- `public/og-image.svg` : personnaliser ou remplacer par une image de partage au format 1200x630.
- `public/images/` : ajouter la photo professionnelle ou les visuels projets si nécessaire.

## Déploiement

Le site est statique et peut être déployé sur Vercel, Netlify ou GitHub Pages. Après avoir choisi le domaine final, mettre à jour :

- `site` dans `astro.config.mjs`
- `cv.meta.siteUrl` dans `src/data/cv.ts`
- l'URL du sitemap dans `public/robots.txt`
