# My Portfolio

A full-stack developer portfolio built with Next.js, TypeScript, Tailwind CSS, Prisma, and NextAuth.

It includes:
- Home sections for projects, work experience, skills, education, blogs, and contact
- Blog management with image upload support (Cloudinary)
- Admin login with credentials-based authentication (NextAuth + Prisma Adapter)
- Contact form email delivery with Resend

## Tech Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Prisma + PostgreSQL
- NextAuth
- Cloudinary
- Resend
- Radix UI + Framer Motion

## Project Structure

```text
src/
	app/
		(home)/
		blogs/
		api/
			auth/[...nextauth]/
			blogs/
			create-blog/
			send-mail/
	components/
		Experience.tsx
		Education.tsx
		Skills.tsx
		Contact.tsx
	lib/
		prisma.ts
		resend.ts
prisma/
	schema.prisma
```

## Environment Variables

Create a `.env` file in the project root:

```env
DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DB_NAME"

NEXTAUTH_SECRET="your_nextauth_secret"

NEXT_PUBLIC_BASE_URL="http://localhost:3000"

NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME="your_cloudinary_cloud_name"
CLOUDINARY_API_KEY="your_cloudinary_api_key"
CLOUDINARY_API_SECRET="your_cloudinary_api_secret"

RESEND_API_KEY="your_resend_api_key"
```

## Local Setup

1. Install dependencies:

```bash
npm install
```

2. Generate Prisma client:

```bash
npx prisma generate
```

3. Apply migrations:

```bash
npx prisma migrate dev
```

4. Run development server:

```bash
npm run dev
```

5. Open:

```text
http://localhost:3000
```

## Available Scripts

- `npm run dev` - start local dev server (Turbopack)
- `npm run build` - generate Prisma client and build app
- `npm run start` - run production server
- `npm run lint` - run ESLint

## Portfolio Content Updates

- Work experience cards: update data inside `src/components/Experience.tsx`
- Education cards: update `educationData` in `src/components/Education.tsx`
- Projects: update project data in `src/app/Projects/components/ProjectCardList.tsx`

## Notes

- Prisma client output is generated to `src/generated/prisma`.
- If blog fetching fails locally, confirm `NEXT_PUBLIC_BASE_URL` matches your local server URL.
