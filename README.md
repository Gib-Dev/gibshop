# Gibshop

A modern ecommerce platform built with Next.js 15, React 19, TypeScript, Tailwind CSS, ShadCN UI, PostgreSQL and Prisma.

## Features

- ✅ Fully responsive design
- ✅ Tailwind CSS and ShadCN UI
- ✅ Next.js App Router and Metadata
- ✅ Dynamic Product Listing
- ✅ Product Cart System (with localStorage persistence)
- ✅ Product Detail Pages
- ✅ Shopping Cart Management
- ✅ PostgreSQL and Prisma ORM
- ✅ Clean folder structure and modular components

## Tech Stack

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- ShadCN UI
- Prisma ORM
- PostgreSQL
- NextAuth.js (ready for implementation)

## Installation

```bash
git clone https://github.com/Gib-Dev/gibshop.git
cd gibshop
npm install
```

## Environment Setup

Create a `.env` file in the root directory with the following variables:

```env
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/gibshop"

# Next.js
NEXTAUTH_SECRET="your-secret-key-here"
NEXTAUTH_URL="http://localhost:3000"

# App Configuration
NEXT_PUBLIC_APP_NAME="Gibshop"
NEXT_PUBLIC_APP_DESCRIPTION="A modern ecommerce platform"
NEXT_PUBLIC_SERVER_URL="http://localhost:3000"
```

## Database Setup

1. Set up your PostgreSQL database
2. Update the `DATABASE_URL` in your `.env` file
3. Run the database migrations:
   ```bash
   npx prisma db push
   ```
4. Seed the database with sample data:
   ```bash
   npm run db:seed
   ```

## Development

```bash
npm run dev
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run db:seed` - Seed database with sample data

## Project Structure

```
gibshop/
├── app/                    # Next.js App Router
│   ├── (root)/            # Main layout and pages
│   │   ├── page.tsx       # Homepage
│   │   ├── products/      # Products listing
│   │   ├── product/[slug]/ # Product details
│   │   └── cart/          # Shopping cart
│   └── layout.tsx         # Root layout
├── components/            # React components
│   ├── shared/           # Shared components
│   │   ├── header/       # Navigation header
│   │   └── product/      # Product components
│   └── ui/               # ShadCN UI components
├── lib/                  # Utility functions
│   ├── actions/          # Server actions
│   ├── context/          # React contexts
│   └── utils.ts          # Helper functions
├── db/                   # Database related
│   ├── prisma.ts         # Prisma client
│   ├── seed.ts           # Database seeding
│   └── sample-data.ts    # Sample product data
├── prisma/               # Prisma schema and migrations
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
