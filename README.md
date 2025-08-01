# 🛒 E-Commerce Web Application

This is a responsive and optimized E-Commerce Web App built using **Next.js (App Router + Javascript)**, **Redux Toolkit**, **Tailwind CSS**, and modern state management. The application offers a smooth shopping experience with cart features, session caching, dynamic product filtering, and a modular design system.

---

## 🚀 Features

- 🛍️ **Dynamic Product Listing** with filtering and sorting
- 🧺 **Cart Management** with persistent sessionStorage and Redux Toolkit
- 🎯 **Dynamic Product Pages** with `useParams` and fetch on render
- 💡 **Smart Layout**: Modular structure using Next.js App Router and layouts
- ⚡ **Performance Optimized** using sessionStorage cart hydration on layout mount
- 🧱 **Reusable Components**: `Card`, `Filter`, `ProductComp`, `DashboardComp`
- 🖼️ **Image Optimization** using `next/image` and custom loaders
- 🧑‍💻 **Developer Friendly**: Well-structured Redux slices, constants, and utils
- ♿ **Accessibility Compliant** via Tailwind best practices

---

## 📁 Project Structure

```bash
src/
├── app/
│   ├── layout.tsx            # Root layout with Redux provider and cart hydrator
│   └── page.tsx              # Main entry point for the dashboard
├── components/
│   ├── DashboardComp.tsx     # Filter + products grid component
│   ├── ProductComp.tsx       # Single product view and logic
│   ├── Filter.tsx            # Real-time product filter UI
│   ├── Card.tsx              # Product display card
│   └── CartIcon.tsx          # Header icon showing cart quantity
├── lib/
│   └── features/
│       └── cartSlice.ts      # Redux Toolkit slice for cart logic
├── constant/
│   └── data.ts               # Sample or mock data, constants for filters
├── utils/
│   └── storage.ts            # sessionStorage helper functions
├── public/
│   └── screenshots/
│       └── ecommerce.png     # Project screenshot
├── styles/
│   └── globals.css           # Tailwind and custom styles
└── store/
    └── store.ts              # Redux store config
```

## 🧰 Tech Stack

- Next.js (App Router + TypeScript) – Hybrid rendering, dynamic routing, layouts
- Redux Toolkit – Clean, scalable global state for cart logic
- Tailwind CSS – Utility-first CSS framework for responsive styling
- React Icons / Lucide Icons – Iconography for actions and navigation
- sessionStorage – Client-side persistence without backend calls
- React Hook Form (optional) – For future-ready forms
- ESLint + Prettier – Code quality and formatting
- Custom API Calls (Mock or Real) – Dynamic product data support

## 🔍 Component Highlights

🧾 ProductComp

- Fetches product data using useParams
- Displays full product detail (title, price, image)
- Handles edge cases like missing data or broken images

🧩 DashboardComp

- Fetches full product list
- Implements live filtering with useState
- Renders all product cards using the reusable Card component

📦 Cart Logic

- Redux-powered global cart
- Hydrated from sessionStorage in layout to survive refreshes
- Add/Remove/Update quantities handled in cartSlice.ts

🧠 How It Works

- Product data is dynamically fetched using REST APIs or mock data
- Cart logic lives in Redux with side hydration via useEffect
- Layout mounts on app load and initializes cart from sessionStorage
- Tailwind handles responsive styles; MUI manages form inputs and icons
- Each component is modular and reusable across different views

[Screenshot1]("./public/screenshot/image.png")
