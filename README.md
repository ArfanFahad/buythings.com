### 🛒 buythings.com

A full-stack e-commerce application

### Scalable e-commerce app with:

- React frontend (with Admin & User sections) ✅ (complete)
- Node.js and Express for backend ✅ (complete)
- Prisma + PostgreSQL for DB ✅ (complete)
- Caching Product Data (Redis) - Pending
- Caching Search Result - Pending
- Rate Limiting API Requests - Pending
- Temporary Cart Data - Pending
- Proxy - Nginx - (Planned)

### Authentication

- For Admin: JWT
- For API: JWT
- For User: JWT

#### - REST API (or GraphQL later) - Later

#### - Deployment-ready architecture

🟢 PHASE 1: Plan & Setup
Goal: Setup repo and toolchain

- Create GitHub repo - ✅ (complete)
- Setup folders: client, server - ✅ (complete)
- Initialize both with npm init - ✅ (complete)
- Setup Vite + React + Tailwind in client - ✅ (complete)
- Setup Express + Prisma + PostgreSQL in server - ✅ (complete)

🟡 PHASE 2: Database Schema Design
Goal: Setup initial schema with Prisma

- Design models: User, Product, Order, OrderItem, Category, Cart, Review - ✅ (complete)
- Add relations (1:M, M:N) - ✅ (complete)
- Use prisma migrate dev to generate tables - ✅ (complete)

#### - Seed some test data

🟠 PHASE 3: Backend API
Goal: Build API for Admin dashboard - ✅ (complete)

- Auth routes (/register, /login) - (Pending)
- Product CRUD: GET, POST, PUT, DELETE - ✅ (complete)
- Categories CRUD - (Pending)
- Order Management - (Pending)
- Cart Management (advanced) - (Pending)
- Add middleware (auth, admin check) (Pending)

🔵 PHASE 4: Admin Panel (React)
Goal: Build dashboard to manage data

- Auth pages: Admin Login
- Sidebar layout: Products, Categories, Orders
- Product Create/Edit/Delete forms - ✅ (complete)
- Show data tables (with pagination) - (Pending)
- Use axios or fetch to call backend - ✅ (complete)

🟣 PHASE 5: User-Facing Site (React)
Goal: Customer frontend

- Home page with featured products - (Pending)
- Product listing & filters - (Pending)
- Product details page - ✅ (complete)
- Cart page (add, remove, quantity) - (Pending)
- Checkout page (order submission) - (Pending)
- User login/register - (Pending)
- Order history page - (Pending)

⚪ PHASE 6: Extras for Scalability
Goal: Make it scalable & real-world ready

- Use dotenv for env vars - ✅ (complete)
- Use Redis for caching product data - (Pending)
- Add image upload (Cloudinary or local) - ✅ (complete - Local)
- Implement Pagination, Search, Sorting - (Pending)
- Add Admin role check middleware - (Pending)
- Use loading states, error boundaries - ✅ (complete)

🟤 PHASE 7: Deployment - (Pending)
