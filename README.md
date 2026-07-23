# Techsab

A responsive company website built with React, Vite, and Tailwind CSS.

## Pages

- `/` — Landing page (Hero, About, Services, Contact)
- `/login` — Login form
- `/register` — Registration form
- `/services/:slug` — Individual service details
- `/website-packages` — Website development plans
- `/checkout?plan=1` — Package checkout and promo code
- `/place-order?plan=1` — Final booking form

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
├── components/         # Shared UI components
├── data/               # Site-wide content
├── features/
│   └── booking/        # Packages, checkout rules, and booking UI
├── layouts/            # Shared page layouts
├── pages/              # Route-level components
└── sections/           # Landing-page sections
```

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |

## Notes

- Contact and package booking forms submit through Formspree form `mvzewoej`
- The website package promo code is `TEEJ10`
- All validation is client-side
