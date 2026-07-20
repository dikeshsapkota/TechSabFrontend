# Techsab

A responsive company website built with React, Vite, and Tailwind CSS.

## Pages

- `/` — Landing page (Hero, About, Services, Contact)
- `/login` — Login form
- `/register` — Registration form

## Tech Stack

- React 18
- Vite
- Tailwind CSS v3
- React Router v6
- Font Awesome 6

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Project Structure

```
src/
├── components/     # Navbar, Footer, Button, InputField, ServiceCard
├── sections/       # Hero, About, Services, Contact
├── pages/          # Home, Login, Register
├── data/           # services.js
└── assets/
```

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |

## Notes

- Forms are frontend-only (no backend connected)
- All validation is client-side
