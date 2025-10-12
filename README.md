![LOGO](/public/TODO.png)
# 📝 Todo List Modern App

Todo List Modern App is a React + Vite Single Page Application for managing your tasks with a clean, mobile-first, and modern UI. It uses SASS with partials and variables for easy custom theming. The app features glassmorphism, deep shadows, and a color palette of black, orange, and white.

## 🚀 Features

- ✏️ Add tasks with title and description
- ✅ Check/uncheck tasks (mark as done/pending)
- 🗑️ Delete individual tasks
- 🔄 Clear all tasks or reset to initial demo list
- 🛠️ Edit tasks inline
- 🟢 Live feedback on adding tasks (validation, success/error messages)
- 📱 Mobile-first, responsive UI with modern design
- 🌙 Dark theme by default (black, orange, white, deep shadows)
- 🧩 Reusable, scalable React components

## 🎯 Purpose

Provide a stylish, fast, and maintainable todo app with a scalable SASS structure, ready for static hosting and further extensions (like user accounts, cloud sync, etc).

## 🧠 Main Features

- Add, edit, delete, check/uncheck tasks
- Validation and feedback for task form
- Task list resets to demo data
- Modern UI: glassmorphism, deep shadows, big border-radius
- SPA (Single Page Application)
- Static hosting ready (Vercel, Netlify, Render)
- Responsive: mobile-first, progressive media queries

## 🛠️ Tech Stack

| Layer      | Technology                                |
|------------|-------------------------------------------|
| Frontend   | ⚛️ React (Vite, SPA, mobile‑first) + 🎨 SASS (SCSS partials) |
| Build/Dev  | ⚡ Vite, 🧹 ESLint                        |
| Assets     | 🖼️ SVG icons and app logo in `public/`    |

## 📂 Project Structure

```
todo-list-modern/
├── public/
│   ├── logo.svg
│   └── favicon.png
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   ├── data/
│   │   └── tasks.json
│   ├── components/
│   │   ├── Footer/
│   │   │   ├── Footer.jsx
│   │   │   └── index.js
│   │   ├── Header/
│   │   │   ├── Header.jsx
│   │   │   ├── Form/
│   │   │   │   └── Form.jsx
│   │   │   └── index.js
│   │   ├── Main/
│   │   │   ├── Main.jsx
│   │   │   ├── List/
│   │   │   │   └── List.jsx
│   │   │   ├── Card/
│   │   │   │   └── Card.jsx
│   │   │   └── index.js
│   └── styles/
│       ├── styles.scss
│       ├── utils/
│       │   └── _variables.scss
│       └── components/
│           ├── _Header.scss
│           ├── _Form.scss
│           ├── _Main.scss
│           ├── _List.scss
│           ├── _Card.scss
│           └── _Footer.scss
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🎨 Styles

- SASS with partials under `src/styles`
- All design tokens in `utils/_variables.scss`
- Glassmorphism, big border-radius, deep shadows, gradients
- Mobile‑first layout, progressive media queries
- BEM‑style class naming (optional)

## Screenshots

![Desktop](/public/TODOdesktop1.png)
![Mobile](/public/TODOmobile.png)

## ⚙️ Installation & Local Usage

1️⃣ Clone the repository

```bash
git clone https://github.com/fernanbga/todo-list-modern.git
cd todo-list-modern
```

2️⃣ Install dependencies

```bash
npm install
```

3️⃣ Start dev server

```bash
npm run dev
```

4️⃣ Open the app: [http://localhost:5173](http://localhost:5173)

## 📜 Scripts

- `npm run dev` – Vite dev server
- `npm run build` – Production build
- `npm run preview` – Preview built app locally

## 🧩 Components Overview

- 🏷️ Header: app title and add-task form (`Form`)
- 🗂️ Main: list of tasks (`List`) and task cards (`Card`)
- 📄 Footer: app credits

## 🐳 Deployment

This is a static SPA. Deploy to [Vercel](https://vercel.com/), [Netlify](https://netlify.com/), or [Render](https://render.com/) (Static Site):

- Build with `npm run build` and serve the `dist/` folder

## 🟢 Live Demo

Visit the live app:  
[https://lambent-daffodil-2ec290.netlify.app/](https://lambent-daffodil-2ec290.netlify.app/)

## 📊 Roadmap

- 🌓 Theme switcher (light/dark)
- 👤 User auth and cloud sync
- 📱 PWA support
- ♿ Accessibility improvements (a11y)
- 🔔 Notifications/reminders

## 🤝 Credits

Developed by [@fernanbga](https://github.com/fernanbga)