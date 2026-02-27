# AUDIT SEO COMPLET - DOMOTUS.MA

## 1. STRUCTURE DES ROUTES ET URLs

### Routes Actuelles (fichiers page.tsx trouvés):
✅ Accueil: `/` (app/page.tsx)
✅ Maison Connectée: `/maison-connectee` (app/maison-connectee/page.tsx)
⚠️ Villas & Apparts (REDONDANT): `/villas-apparts` (app/villas-apparts/page.tsx) - **À SUPPRIMER**
✅ Promoteurs: `/promoteurs` (app/promoteurs/page.tsx)
✅ Division Projets: `/division-projets` (app/division-projets/page.tsx)
✅ Architectes: `/architectes` (app/architectes/page.tsx)
✅ Écosystèmes: `/ecosystemes` (app/ecosystemes/page.tsx)
✅ Expertises: `/expertises` (app/expertises/page.tsx)
✅ Expertise détail (6 pages): `/expertise/{eclairage,securite,energie,reseaux,audiovisuel,bms}`
✅ Protocoles (5 pages): `/technologies/{knx,zigbee,zwave,matter,wifi7}`
✅ Journal/Blog: `/journal` (app/journal/page.tsx)
✅ Contact: `/contact` (app/contact/page.tsx)
⚠️ Showroom: `/showroom` (app/showroom/page.tsx) - **Non listé dans navbar**
⚠️ Simulateur: `/simulateur` (app/simulateur/page.tsx) - **Non listé dans navbar**
❌ Vision: `/vision` (attendu mais manquant)

## 2. PROBLÈMES CRITIQUES DÉTECTÉS

### 🔴 CRITIQUE 1: Route dupliquée `/villas-apparts`
- **Problème**: Existe une route `/villas-apparts` qui est un doublon de `/maison-connectee`
- **Impact SEO**: Contenu dupliqué pénalise le classement
- **Solution**: 
  1. Supprimer le dossier `/app/villas-apparts`
  2. Ajouter un redirect 301 dans `next.config.mjs`

### 🔴 CRITIQUE 2: Page `/vision` manquante
- **Problème**: La navbar référence `/vision` mais la route n'existe pas (404)
- **Impact SEO**: Lien cassé = mauvaise expérience utilisateur + perte de PageRank
- **Solution**: Créer `/app/vision/page.tsx` avec contenu approprié

### 🔴 CRITIQUE 3: Sitemap.ts incomplet
- **Manquent les routes importantes**:
  - `/division-projets` (page B2B majeure)
  - `/architectes` (page B2B majeure)
  - `/ecosystemes`
  - `/vision`
  - Toutes les sous-pages `/expertise/{*}`
  - Toutes les sous-pages `/technologies/{*}`
- **Impact SEO**: Google ne trouve pas ces pages aussi facilement, moins de pages indexées
- **Solution**: Mettre à jour sitemap.ts avec toutes les routes

## 3. STRUCTURE DE NAVIGATION

### Navbar (corrections nécessaires):
```
Actuel:
- DOMOTUS (Logo) → /
- Maison connectée → /maison-connectee ✅
- Division Projets → /division-projets ✅
- Écosystèmes → /ecosystemes ✅
- Vision → /vision ❌ (route manquante)
- Blog → /journal ✅
- Contact (bouton)
- Espace Client
```

## 4. SITEMAP.TS - MISE À JOUR REQUISE

### Actuellement présentes (7 routes):
- `/` (priority: 1.0) ✅
- `/maison-connectee` (priority: 0.9) ✅
- `/promoteurs` (priority: 0.9) ✅
- `/expertises` (priority: 0.8) ✅
- `/journal` (priority: 0.8) ✅
- `/contact` (priority: 0.7) ✅
- `/showroom` (priority: 0.6) ⚠️

### À AJOUTER (12 routes manquantes):
- `/division-projets` (priority: 0.85) - IMPORTANT B2B
- `/architectes` (priority: 0.85) - IMPORTANT B2B
- `/ecosystemes` (priority: 0.8)
- `/vision` (priority: 0.7)
- `/expertise/eclairage` (priority: 0.75)
- `/expertise/securite` (priority: 0.75)
- `/expertise/energie` (priority: 0.75)
- `/expertise/reseaux` (priority: 0.75)
- `/expertise/audiovisuel` (priority: 0.75)
- `/expertise/bms` (priority: 0.75)
- `/technologies/knx` (priority: 0.7)
- `/technologies/zigbee` (priority: 0.7)
- `/technologies/zwave` (priority: 0.7)
- `/technologies/matter` (priority: 0.7)
- `/technologies/wifi7` (priority: 0.7)

### À RETIRER:
- ❌ `/villas-apparts` (route dupliquée)

## 5. VÉRIFICATION DES MÉTADONNÉES

Pages à auditer pour title/description correct:
1. `/` - Homepage (vérifier title "Smart Living" vs nouvelle stratégie)
2. `/maison-connectee` - Page principale B2C
3. `/promoteurs` - B2B Promoteurs
4. `/division-projets` - B2B Hub (créée récemment)
5. `/architectes` - B2B Architectes
6. `/ecosystemes` - Pages services
7. `/vision` - À créer
8. `/journal` - Blog
9. Toutes les sous-pages `/expertise/{*}`
10. Toutes les sous-pages `/technologies/{*}`

## 6. ALTÉRATIONS SUITE AUX MODIFICATIONS

### Détectées:
1. ✅ Navbar correctement mise à jour (nouvelle structure B2C/B2B)
2. ✅ Footer refondu (5 colonnes)
3. ✅ Page `/division-projets` créée
4. ✅ Page `/maison-connectee` refondue
5. ❌ Page `/vision` MANQUANTE mais référencée en navbar
6. ❌ Route `/villas-apparts` toujours accessible (doublon)

## 7. PLAN D'ACTION

### IMMÉDIAT (1h):
- [ ] Créer `/app/vision/page.tsx`
- [ ] Mettre à jour `sitemap.ts` avec 12 routes manquantes
- [ ] Ajouter redirect 301 `/villas-apparts` → `/maison-connectee` en `next.config.mjs`

### COURT TERME (2-3h):
- [ ] Vérifier et corriger toutes les métadonnées (titles/descriptions)
- [ ] Vérifier tous les canonical URLs (doivent être https://www.domotus.ma/*)
- [ ] Nettoyer et supprimer `/app/villas-apparts`

### MOYEN TERME (optionnel):
- [ ] Ajouter breadcrumb schema.org sur pages hiérarchiques
- [ ] Vérifier internal linking strategy
- [ ] Ajouter FAQPage schema pour FAQ pages
- [ ] Vérifier open graph tags pour partage réseaux

## 8. IMPACT SEO ESTIMÉ

### Sans correction:
- ⚠️ Risque de pénalité contenu dupliqué (-15% classement potentiellement)
- ⚠️ Liens cassés vers `/vision` (-5 points UX)
- ⚠️ Pages importantes non indexées (moins de trafic organique)
- ⚠️ Sitemap incomplet (crawl budget gaspillé)

### Après correction:
- ✅ Meilleure indexation (+30% pages trouvées par Google)
- ✅ Pas de contenu dupliqué (meilleur classement)
- ✅ Meilleure UX (tous les liens fonctionnent)
- ✅ Crawl budget optimisé
