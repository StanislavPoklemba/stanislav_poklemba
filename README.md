# Stanislav Poklemba — Portfolio

Personal portfolio site built with **React + Vite**, **Tailwind CSS**, and **Framer Motion**.

## Quick start

```bash
npm install
npm run dev      # local dev server (http://localhost:5173)
npm run build    # production build → ./dist
npm run preview  # preview production build locally
```

## Deploy on Vercel

1. Push this folder to a GitHub repo.
2. Import the repo on [vercel.com](https://vercel.com).
3. Framework preset: **Vite** (auto-detected). No env vars needed. Done.

## TODOs before going live

Search the codebase for `TODO:` — quick checklist:

- [ ] Replace `Hero.jsx` **Download CV** `href="#"` with your real CV PDF link.
- [ ] Replace placeholder cards in `Projects.jsx` with real projects (and their Live Demo / GitHub URLs).
- [ ] Add your real **LinkedIn** and **GitHub** URLs in `Contact.jsx`.

## Project structure

```
src/
  components/      # Navbar, Hero, About, Skills, Projects, Hobbies, Contact, Footer
  assets/photos/   # All images — imported via Vite, never hardcoded paths
  App.jsx
  main.jsx
  index.css
```
