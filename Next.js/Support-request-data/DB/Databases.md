
Database Concepts for Next.js
1. What is a Database?
A database is a digital filing cabinet for your application. It's a separate server (like Postgres or MySQL) whose only job is to store, protect, and retrieve data efficiently.
 * Tables are the folders in the cabinet (e.g., a "Users" folder).
 * Rows are the individual files in a folder (e.g., a file for "User 123").
 * Columns are the fields on that file (e.g., name, email).
Your Next.js app is the "office worker" that needs to read and write files in that cabinet.
2. How Your App Talks to the Database
You have two main choices for how your app will "talk" to the database.
manual️ Option 1: Database Drivers (The "Manual" Way)
A driver (like node-postgres or mysql2) is a basic library that lets you send raw SQL commands (the database's native language) from your JavaScript code. You must write the SQL yourself.
// Example in an API route
import db from '@/lib/db';
const { rows } = await db.query('SELECT * FROM users');

🤖 Option 2: ORMs (The "Translator" Way)
An ORM (Object-Relational Mapper), like Prisma, is a "translator" that sits between your app and the database. You write simple JavaScript/TypeScript, and the ORM generates the complex SQL commands for you.
// Example in an API route
import prisma from '@/lib/prisma';
const users = await prisma.user.findMany();

This is the most common, safe, and powerful method for modern apps. For a detailed guide on how to set this up, see my note on [[ORM]].
3. How to Create and Update Tables (Migrations)
You should never update your database by hand. Instead, you use a migration tool (Prisma has one built-in) to create a "construction log" for your database.
A migration is a file that contains instructions (like "create a users table" or "add an email column"). You run a command (e.g., prisma migrate dev), and the tool safely applies these changes. This process is safe, reversible, and keeps your database structure in sync with your code.
4. How to Run Your Database (Local vs. Production)
💻 Local Setup (Your Laptop)
For development, you run a database server on your machine.
 * Easiest Way: Use Docker to run a Postgres server in a "container."
 * Your App Connects to: localhost:5432
☁️ Production Setup (The Web)
In production, you use a dedicated, managed database service (like AWS RDS or Vercel Postgres).
 * Your App Connects to: A public URL provided by your host (e.g., my-prod-db.aws.com...).
Your code (prisma.user.findMany()) does not change. Only the DATABASE_URL environment variable changes to point to the correct server.
5. Related Concepts
 * Firebase: This is a Backend-as-a-Service (BaaS). It's not just a database; it is the backend (database, authentication, etc.) all in one.
 * URL Params:
   * Path Params (/users/123): Identify a specific resource.
   * Query Params (/users?page=2): Filter or modify a list.
New Note 2: ORM (Object-Relational Mapper)