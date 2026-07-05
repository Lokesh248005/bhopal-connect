# 🌐 Bhopal BizLink

**A hyper-local digital networking platform connecting Bhopal's student talent with local business opportunities.**

> An Engineering Project in Community Service (EPICS) — VIT Bhopal University
> Phase II | Reg No: 23BCE10304
> Built and developed by **Lokesh**

[![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-ES2024-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![Supabase](https://img.shields.io/badge/Supabase-PostgreSQL-3ECF8E?logo=supabase)](https://supabase.com/)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](#license)

---

## 📖 About The Project

**Bhopal BizLink** (formerly *Bhopal Connect*) is a localized, high-performance web platform built to close the gap between technically skilled students/graduates in Bhopal and the local businesses and startups that need their services.

Global platforms like LinkedIn, Fiverr, and Upwork suffer from **hyper-saturation** — students competing against established global agencies, or losing visibility to industry veterans. Bhopal BizLink instead focuses exclusively on the **hyper-local ecosystem**, combining:

- 🎯 A student freelancer marketplace
- 💼 Professional portfolios
- 🧊 Interactive 3D visual storytelling
- 💬 Localized problem-solving forums

...into a single, secure, high-performance Single Page Application (SPA).

### ✨ Why Bhopal BizLink?

| Feature | Bhopal BizLink | LinkedIn | Fiverr/Upwork | Local WhatsApp Groups |
|---|---|---|---|---|
| Primary Focus | Hyper-Local Networking | Global Professional | Global Freelancing | Informal Local Chat |
| Local Talent Discovery | Excellent | Poor | Average | Average |
| Cost to Users | Free | Freemium | 20% Service Fee | Free |
| Real-Time Database | Supabase PostgreSQL | Proprietary Graph DB | Proprietary MySQL | None |
| 3D/Immersive Experience | WebGL + R3F | None | None | None |
| Data Security | JWT + RLS + Bcrypt | Enterprise OAuth | OAuth + Escrow | E2E Encryption |

---

## 🏗️ Architecture Overview

Bhopal BizLink is built on a **Jamstack + Edge-computing** architecture, decoupling the frontend presentation layer from the Supabase backend for speed, security, and horizontal scalability.

```
┌──────────────────┐        ┌────────────────────────┐        ┌───────────────────────┐
│   User Layer     │        │  Frontend (Next.js 15) │        │   Backend (Supabase)  │
│                   │        │                        │        │                       │
│  Web Browser ─────┼───────►│  Server Components     │        │  Object Storage       │
│  Mobile Device    │  HTTPS │  (RSC, Layouts, SSR)    │        │  (Avatars, Assets)    │
└──────────────────┘        │         │               │        │           ▲           │
                             │         ▼               │        │           │           │
                             │  Client Components      │        │  PostgREST API ───────┼──┐
                             │  (Hooks, R3F, UI State)  │        │  (ORM Interface)      │  │
                             └───────────┬─────────────┘        │           │           │  │
                                         │ Client-safe Reqs      │           ▼           │  │
                                         └──────────────────────►│  PostgreSQL (RLS)     │  │
                                                                  │  Supabase Auth (JWT) │  │
                                                                  └───────────┬───────────┘  │
                                                                              │              │
                                                                    SMTP/Resend (External) ◄─┘
```

### Key Architectural Principles

1. **React Server Components (RSC)** — Layouts, data fetching, and SEO-critical content render server-side, keeping API keys off the client and JS payload near zero for static modules.
2. **Client Components** — Reserved for interactivity: the WebGL canvas (React Three Fiber), Framer Motion animations, and stateful hooks (`"use client"`).
3. **Resilient Client Instantiation** — `src/lib/supabaseClient.ts` gracefully returns `null`/a mock interface instead of throwing when environment variables are missing at build time, preventing SSG crashes.
4. **Edge Row Level Security (RLS)** — Every table enforces PostgreSQL security policies so the database — not the frontend — is the final authority on data access.

---

## 🧰 Tech Stack

| Layer | Technology | Purpose |
|---|---|---|
| Framework | **Next.js 15** (App Router) | SSR, RSC, routing, edge caching |
| UI Library | **React 19** | Component model |
| Language | **TypeScript (ES2024)** | Strict static typing |
| Styling | **Tailwind CSS v4** | Utility-first styling, design tokens |
| State Management | **Zustand** | Lightweight global state (modals, theme, toasts) |
| 3D Rendering | **React Three Fiber** + **Drei** + **three.js** | Immersive WebGL scenes (Hero "Boxing Robot") |
| Animation | **Framer Motion** | Scroll-linked, physics-based animation |
| Backend / BaaS | **Supabase** | PostgreSQL, Auth, Storage, PostgREST API |
| Auth | **Supabase Auth (JWT)** | Session management, Bcrypt password hashing |
| Deployment | **Vercel** | CI/CD, Edge Network |

### Why Next.js 15?

Evaluated against six other frameworks/paradigms during Phase II, Next.js 15 scored highest for this project's needs:

| Framework | Rendering | SEO | Bundle Size | Suitability (1–10) |
|---|---|---|---|---|
| **Next.js 15 (App Router)** | SSR + SSG + RSC | Excellent | ~85 KB | **9.5** |
| Vue.js (Nuxt 3) | SSR + SSG | Excellent | ~78 KB | 8.0 |
| Svelte (SvelteKit) | SSR + SSG | Good | ~45 KB | 7.5 |
| Gatsby.js | SSG | Good | ~95 KB | 6.5 |
| Angular Universal | SSR + CSR | Good | ~150 KB | 6.0 |
| Create React App | CSR only | Poor | ~120 KB | 5.0 |
| Vanilla HTML/JS | Static | Excellent | ~10 KB | 3.0 |

---

## 🗄️ Database Schema

Bhopal BizLink uses a normalized relational schema on Supabase PostgreSQL:

```sql
-- auth.users (managed by Supabase)
-- Handles encrypted passwords, JWT metadata, email verification

-- public.profiles
CREATE TABLE public.profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  full_name TEXT,
  avatar_url TEXT,
  bio TEXT,
  role TEXT CHECK (role IN ('student', 'business')),
  university_id TEXT,
  created_at TIMESTAMP DEFAULT now()
);

-- public.skills (lookup table)
CREATE TABLE public.skills (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  skill_name TEXT NOT NULL,
  category TEXT
);

-- public.profile_skills (many-to-many junction)
CREATE TABLE public.profile_skills (
  profile_id UUID REFERENCES public.profiles(id),
  skill_id UUID REFERENCES public.skills(id),
  proficiency_level INTEGER,
  PRIMARY KEY (profile_id, skill_id)
);

-- public.marketplace_listings
CREATE TABLE public.marketplace_listings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  creator_id UUID REFERENCES public.profiles(id),
  title TEXT NOT NULL,
  description TEXT,
  budget_inr INTEGER,
  deadline TIMESTAMP,
  is_active BOOLEAN DEFAULT true
);
```

### Row Level Security (RLS) Example

```sql
-- Ensures users can only mutate their own profile row
CREATE POLICY "Users can only update their own profiles"
ON public.profiles
FOR UPDATE
USING (auth.uid() = id);
```

This guarantees that regardless of client-side manipulation, the database itself rejects any `UPDATE`/`DELETE` command whose JWT does not match the row's owner.

---

## 🚀 Getting Started

### Prerequisites

- Node.js ≥ 18.x
- npm / yarn / pnpm
- A [Supabase](https://supabase.com/) project (URL + anon key)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/<your-username>/bhopal-bizlink.git
cd bhopal-bizlink

# 2. Install dependencies
npm install

# 3. Configure environment variables
cp .env.example .env.local
```

Add the following to `.env.local`:

```env
NEXT_PUBLIC_SUPABASE_URL=your-supabase-project-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
```

```bash
# 4. Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

### Build for Production

```bash
npm run build
npm run start
```

---

## 📂 Project Structure

```
bhopal-bizlink/
├── src/
│   ├── app/                  # Next.js App Router pages & layouts
│   │   ├── layout.tsx
│   │   ├── page.tsx          # Landing page (Hero, Problem, Solution sections)
│   │   ├── students/         # Student marketplace directory
│   │   ├── login/            # Auth: login
│   │   └── signup/           # Auth: signup
│   ├── components/
│   │   ├── ui/               # Atomic components (Button, Card, Modal, Input)
│   │   ├── three/            # React Three Fiber scenes (Hero robot, etc.)
│   │   └── sections/         # StatsTicker, ProblemSection, SolutionSection
│   ├── lib/
│   │   └── supabaseClient.ts # Resilient Supabase client instantiation
│   ├── store/                 # Zustand global state
│   └── types/                 # TypeScript interfaces (StudentProfile, etc.)
├── public/                    # Static assets, .GLTF models
├── .env.example
└── package.json
```

---

## 🔐 Authentication Flow

1. User submits credentials via `LoginForm`.
2. Client-side regex validation checks email format & password constraints.
3. Credentials are sent to `supabase.auth.signInWithPassword()`.
4. Supabase validates the Bcrypt hash against `auth.users`; returns a JWT stored in HTTP-only cookies.
5. Zustand updates `session.active = true` and routes the user to their dashboard — no full page reload.

---

## ⚡ Performance

Benchmarked with Google Lighthouse Engine v12 (Fast 3G, 4x CPU throttling):

| Metric | Phase I | Phase II | Improvement |
|---|---|---|---|
| First Contentful Paint (FCP) | 1.8s | 0.8s | +55% |
| Largest Contentful Paint (LCP) | 3.2s | 1.4s | +56% |
| Total Blocking Time (TBT) | 250ms | 45ms | +82% |
| Cumulative Layout Shift (CLS) | 0.15 | 0.001 | Near-perfect |

| Lighthouse Category | Phase I | Phase II (Desktop) | Phase II (Mobile) |
|---|---|---|---|
| Performance | 72 | **97** | 91 |
| Accessibility | 85 | **98** | 96 |
| Best Practices | 78 | **100** | 95 |
| SEO | 80 | **100** | 100 |

Key optimizations: `next/image` compression, Draco-compressed `.GLTF` 3D assets (75% size reduction), and migrating data-fetching to pre-rendered Server Components.

---

## 👤 Author

| Name | Reg No. | Branch |
|---|---|---|
| **Lokesh** | 23BCE10304 | Computer Science and Engineering Core |

This project — including the architecture, frontend development, database integration, authentication system, and 3D/interactive UI — was independently designed and built by **Lokesh** as part of the EPICS coursework at VIT Bhopal University.

### Key Contributions

- Set up the **Next.js 15** project with a strict TypeScript configuration
- Designed the **App Router** structure, layouts, and dynamic routes
- Integrated **Supabase** for authentication, real-time PostgreSQL database access, and Row Level Security
- Built the **Login and Signup** modules with client-side form validation (email format checks, password strength indicators, real-time error feedback)
- Implemented the **Student Marketplace** data fetching and filtering logic
- Developed the **About Us** page and core UI components
- Integrated **React Three Fiber** and **Framer Motion** for the immersive Hero section and scrollytelling animations
- Optimized performance using `next/image`, Draco mesh compression, and Server Components to hit Lighthouse scores of 97+ (Desktop)
- Managed testing, Lighthouse audits, and deployment to Vercel

---

## 📚 References

Built with reference to official documentation for Next.js, React, Tailwind CSS, Supabase, Framer Motion, React Three Fiber, and the WCAG 2.1 accessibility guidelines. Full citation list available in the [Phase II Report](./EPICS23_500_23BCE10304_Phase2_Final_Report.pdf).

---

## 📄 License

This project was developed as part of the **EPICS** (Engineering Project in Community Service) curriculum at **VIT Bhopal University**. Released under the [MIT License](LICENSE) unless otherwise specified.

---

## 🙏 Acknowledgements

Special thanks to my project supervisor and the faculty of the Department of Computer Science and Engineering, VIT Bhopal University, for their continuous guidance throughout this project.
