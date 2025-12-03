# NaisUS Family Website

A professional website with meme/humor tone built with Next.js 14, TypeScript, and TailwindCSS.

**Effort 110%, Chaos 200%** 🚀

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS + Shadcn/ui
- **Database**: SQLite (can be switched to PostgreSQL)
- **ORM**: Prisma
- **Icons**: Lucide-react
- **Markdown**: react-markdown

## Features

- ✅ Home page with Hero, Featured Posts, Members Preview
- ✅ Members page with member cards
- ✅ Blog listing and detail pages with markdown support
- ✅ Tech corner with categorized tips
- ✅ Contact form with API integration
- ✅ Responsive design
- ✅ SEO optimized (sitemap, robots.txt)
- ✅ Professional + meme tone throughout

## Getting Started

1. **Install dependencies:**
```bash
npm install
```

2. **Set up the database:**
```bash
npm run db:push
```

3. **Seed the database with sample data:**
```bash
npm run db:seed
```

4. **Run the development server:**
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
src/
  app/
    api/          # API routes (contact, posts)
    blog/         # Blog pages
    members/      # Members page
    tech/         # Tech corner
    contact/      # Contact page
  components/
    ui/           # Shadcn/ui components
    header.tsx    # Header component
    footer.tsx    # Footer component
    blog-card.tsx # Blog card component
    member-card.tsx # Member card component
  lib/
    prisma.ts     # Prisma client
    utils.ts      # Utility functions
  styles/
    globals.css   # Global styles
```

## Database

The project uses Prisma with SQLite by default. To switch to PostgreSQL:

1. Update `prisma/schema.prisma` datasource to `postgresql`
2. Update `.env` with your PostgreSQL database URL:
   ```
   DATABASE_URL="postgresql://user:password@host:port/database?sslmode=require"
   ```
3. Run `npm run db:push`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run db:push` - Push Prisma schema to database
- `npm run db:studio` - Open Prisma Studio
- `npm run db:seed` - Seed database with sample data

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel
3. Add environment variables (DATABASE_URL)
4. Deploy!

### Database Options

- **SQLite**: Works out of the box for development
- **PostgreSQL (Neon)**: For production, update DATABASE_URL in Vercel environment variables

## License

Made with ❤️ & 110% effort by NaisUS Family

