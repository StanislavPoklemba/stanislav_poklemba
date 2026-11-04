# CLAUDE.md

Osobné portfólio Stanislava Poklembu - https://stanislavpoklemba.com
Nasadené na Vercel (projekt `stanislav-poklemba`, plán Hobby). Repo: `StanislavPoklemba/stanislav_poklemba`.

## Pravidlá pre Clauda

- Odpovedaj po slovensky a stručne.
- Používateľ je začiatočník vo frontende - vysvetľuj nové pojmy pre juniora a pri prvom použití skratky uveď jej celý názov (napr. SPA - Single Page Application).
- Nikdy nič nemaž bez súhlasu používateľa.
- Necommituj ani nepushuj bez potvrdenia používateľa.
- V texte používaj krátky spojovník "-", nie pomlčku "–".

## Technológie

- **React 18** - knižnica na tvorbu UI (User Interface) z komponentov
- **Vite 5** - nástroj na spustenie dev servera a zostavenie (build) projektu
- **Tailwind CSS 3** - štýlovanie pomocou utility tried priamo v JSX
- **Framer Motion** - animácie
- **react-icons** - ikony
- **@vercel/analytics** - Vercel Web Analytics (štatistiky návštevnosti)

Je to SPA (Single Page Application) - jedna stránka, sekcie pod sebou, bez routera.

## Spustenie a build

```bash
npm install       # nainštaluje závislosti
npm run dev       # dev server na http://localhost:5173
npm run build     # produkčný build do ./dist
npm run preview   # lokálny náhľad produkčného buildu
```

Vercel pri pushnutí na `main` sám spustí `npm run build` a nasadí obsah `dist/`.

## Štruktúra priečinkov

```
index.html            # vstupný HTML súbor (meta tagy, SEO - Search Engine Optimization)
vercel.json           # presmerovania (redirects) a prepisy URL (rewrites) na Verceli
vite.config.js        # konfigurácia Vite
tailwind.config.js    # vlastné farby a nastavenia Tailwindu
postcss.config.js     # PostCSS (spracovanie CSS pre Tailwind)
public/               # statické súbory kopírované do buildu bez zmeny (CV, obrázky, sitemap, robots.txt)
src/
  main.jsx            # vstupný bod - vykreslí <App /> do #root
  App.jsx             # hlavný layout - poskladá všetky sekcie + <Analytics />
  index.css           # globálne štýly a Tailwind direktívy
  components/         # Navbar, Hero, About, Experience, Projects, Hobbies, Contact, Footer
  assets/photos/      # obrázky importované cez Vite (nie cez pevné cesty)
```

## Poznámky

- `vercel.json` presmerúva `/szus` na https://szusodorin.sk/ a cez rewrites zobrazuje projekty `/baren` a `/streetfood` z iných Vercel deploymentov.
