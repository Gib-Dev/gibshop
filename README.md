# Gibshop

A modern ecommerce platform built with Next.js 15, React 19, TypeScript, Tailwind CSS, ShadCN UI, PostgreSQL and Prisma.

## Features

- **E-commerce Core:**
  - Dynamic product listing with search and filtering
  - Product detail pages with image galleries
  - Shopping cart with localStorage persistence
  - Responsive design for all devices

- **Authentication:**
  - NextAuth.js integration (Google, Email providers)
  - User session management
  - Protected routes and API endpoints

- **Modern UI/UX:**
  - Tailwind CSS with ShadCN UI components
  - Dark/Light theme support
  - Fully responsive design
  - Modern animations and transitions

- **Database & Backend:**
  - PostgreSQL with Prisma ORM
  - Type-safe database operations
  - Server actions for data mutations
  - Database seeding with sample data

- **Performance:**
  - Next.js 15 App Router
  - Server-side rendering (SSR)
  - Static site generation (SSG)
  - Optimized images and assets

## Tech Stack

- **Frontend:** Next.js 15, React 19, TypeScript
- **Styling:** Tailwind CSS, ShadCN UI
- **Database:** PostgreSQL with Prisma ORM
- **Authentication:** NextAuth.js
- **Deployment:** Vercel ready
- **Database Hosting:** Neon PostgreSQL (recommended)

## Installation

```bash
git clone https://github.com/Gib-Dev/gibshop.git
cd gibshop
npm install
```

## Environment Setup

Create a `.env` file in the root directory with the following variables:

```env
# Database - Neon PostgreSQL (recommended)
DATABASE_URL="postgres://username:password@your-neon-host/your-database?sslmode=require"

# Next.js Authentication
NEXTAUTH_SECRET="your-secret-key-here"
NEXTAUTH_URL="http://localhost:3000"

# App Configuration
NEXT_PUBLIC_APP_NAME="Gibshop"
NEXT_PUBLIC_APP_DESCRIPTION="A modern ecommerce platform"
NEXT_PUBLIC_SERVER_URL="http://localhost:3000"
```

**Note:** For production, use a secure random string for `NEXTAUTH_SECRET`. You can generate one with:
```bash
openssl rand -base64 32
```

## Database Setup

### Option 1: Neon PostgreSQL (Recommended)
1. Create a free account at [Neon](https://neon.tech)
2. Create a new project and copy the connection string
3. Update the `DATABASE_URL` in your `.env` file
4. Run the database migrations:
   ```bash
   npx prisma db push
   ```
5. Seed the database with sample data:
   ```bash
   npm run db:seed
   ```

### Option 2: Local PostgreSQL
1. Install PostgreSQL locally
2. Create a database named `gibshop`
3. Update the `DATABASE_URL` in your `.env` file
4. Follow steps 4-5 above

## Development

```bash
npm run dev
```

The application will be available at `http://localhost:3000`

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Add your environment variables in Vercel dashboard
4. Deploy automatically on every push

### Environment Variables for Production

Make sure to set these environment variables in your production environment:

- `DATABASE_URL` - Your production database URL
- `NEXTAUTH_SECRET` - A secure random string
- `NEXTAUTH_URL` - Your production domain
- `GOOGLE_CLIENT_ID` - Google OAuth client ID (if using Google auth)
- `GOOGLE_CLIENT_SECRET` - Google OAuth client secret

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run db:seed` - Seed database with sample data
- `npx prisma generate` - Generate Prisma client
- `npx prisma db push` - Push schema to database
- `npx prisma studio` - Open Prisma Studio

## Project Structure

```
gibshop/
├── app/                    # Next.js App Router
│   ├── (root)/            # Main layout and pages
│   │   ├── page.tsx       # Homepage
│   │   ├── products/      # Products listing
│   │   ├── product/[slug]/ # Product details
│   │   └── cart/          # Shopping cart
│   ├── api/               # API routes
│   │   └── auth/          # NextAuth API routes
│   └── layout.tsx         # Root layout
├── components/            # React components
│   ├── shared/           # Shared components
│   │   ├── header/       # Navigation header
│   │   └── product/      # Product components
│   ├── providers/        # Context providers
│   └── ui/               # ShadCN UI components
├── lib/                  # Utility functions
│   ├── actions/          # Server actions
│   ├── auth/             # Authentication config
│   ├── context/          # React contexts
│   └── utils.ts          # Helper functions
├── db/                   # Database related
│   ├── prisma.ts         # Prisma client
│   ├── seed.ts           # Database seeding
│   └── sample-data.ts    # Sample product data
├── prisma/               # Prisma schema and migrations
├── types/                # TypeScript type definitions
└── public/               # Static assets
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.
