[[Databases]]
ORM (Object-Relational Mapper)
An ORM (Object-Relational Mapper) is a tool that lets you interact with your database using your preferred programming language (like JavaScript/TypeScript) instead of writing raw SQL queries.
You work with JavaScript objects and methods, and the ORM handles the translation to actual SQL commands behind the scenes.
Popular ORMs for Next.js
| ORM | Highlights | Best For |
|---|---|---|
| Prisma | Excellent type-safety, powerful migrations, works great with TypeScript. | Modern full-stack Next.js apps. |
| Drizzle ORM | Lightweight, strongly typed, "SQL-like" syntax with zero runtime cost. | Performance-focused apps with TS support. |
| TypeORM | Decorator-based, good with SQL/NoSQL databases. | Traditional Node.js/TypeScript backends. |
| Sequelize | Feature-rich, supports many SQL dialects. | Developers migrating from legacy apps. |
Example: Using Prisma in a Next.js App
Here is the typical flow for setting up and using Prisma.
1. Install & Setup
First, you install the tools and initialize Prisma.
npm install prisma @prisma/client
npx prisma init

This creates a prisma/schema.prisma file and a .env file for your DATABASE_URL.
2. Define Your Data Model
You define your tables (called "models") in the prisma/schema.prisma file.
// ./prisma/schema.prisma

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

generator client {
  provider = "prisma-client-js"
}

// Define your 'User' table
model User {
  id    Int     @id @default(autoincrement())
  name  String
  email String  @unique
}

3. Generate and Migrate
You run a command to "migrate" your database. This reads your schema, creates the necessary SQL, and updates your database to match.
npx prisma migrate dev --name "init"

This also generates the TypeScript-safe Prisma Client for you to use.
4. Use in an [[Api routes]]
You can now import and use the Prisma Client in your server-side code, like in an API Route or Server Component.
// app/api/users/route.ts
import { PrismaClient } from '@prisma/client';

// Best practice: create a singleton instance
const prisma = new PrismaClient();

export async function GET() {
  const users = await prisma.user.findMany();
  return Response.json(users);
}

export async function POST(request) {
  const { name, email } = await request.json();
  const newUser = await prisma.user.create({
    data: {
      name,
      email,
    },
  });
  return Response.json(newUser);
}

Best Practices
 * Singleton Pattern: Create a single, shared PrismaClient instance for your entire application to avoid creating too many connections to your database.
 * Server-Side Only: Never import or use your ORM in a "use client" component. It contains sensitive keys and should only run on the server.
 * Validation: Combine your ORM with a validation library like Zod to ensure data is clean before you send it to the database.
