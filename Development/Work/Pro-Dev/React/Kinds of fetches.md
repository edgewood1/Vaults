# Kinds of fetches

1. Server fetch (what does that look like)  fetch(/etc) = data
2. Server action fetch: server > client calls getData which calls api
3. Hybrid: server > initial fetch to api; client does subsequent fetches.   (Difference with react query = larger bundle size to browser)
4. Hydrate clientside data fetching library like react query with data initially fetch server. 

=====

IDE = vscode
Coding assistants = copilot (GitHub) and Gemini (code assist) - these integrate LLM to IDE
LLM = power the assistants; GPT is the LLM from company openAI, Claude is from Anthropic; Gemini is from google
Chatbot = conversational app that connects user to LLM
Google One = subscription server that lacks api access
GeminiAPI = ? 
AIStudio=? 
AI agents= autonomous task performer.  Server always listening or, decides to take actions like send emails.  Cyclical.  Goal > plan steps, act via tool > repeat.  Goal>plan>act>observe results > reason > output.  It’s possible to use RAG, tools, together.  Also DB to hold convohistory.  
RAG - retrieval-augmented generation.  Answers questions by grounding it in specific data.  Linear process.  Get quesry, get data, get answer. Query input > retriever (special knowledge base) > augmented prompt = query + relevant text from by retriever > gneneration LLM recieved both and answers

VectorDB?

======

Plugin =? 
CSS = ? 
POSTCSS = ? 
TailwindCSS is a PostCSS plugin which transforms CSS with JS plugins. 
Autoprefixer = ? 
Tailwind.config.ts = way we configure tailwind
Postcss.config.js = applies plugins.  

CSS > postCSS > compiled CSS

Compiled CSS =? 

Add tailwind directives in sec/index.css 

Tailwind components = ? 

Vite is a build tool that compiles CSS
Vite.config.ts - processes tailwind.  

How is building / compiling related to CSS? 
Is the build process where postCSS comes into play? 

===
Command / flags / commit

Reset —soft Head~1

A B C — deletes C so you are back to b
Does reset essentially delete a commit? 

—hard deletes C
— soft keeps staged / working
Default: keeps working

Revert
A B C

Revert C (removes b?)

Restore? 


========
Seperate

In our code base: 
* migration
* Sync
* Cache

=========

Authentication

O-auth
B-crypt
Next auto
Auth/prisma-adater
Prisma.client

======

React

Suspense tag - auto-detects / tracks what states? Creates a boundary around async context

======

=====

Composition

C - client component 
S - server component


C 
* C
* S as (child) prop > server <myLayout> is child or providers are always child components but they wrap server components

S
* S 
* C 


======

Server request / refresh

Server action
* serever function with fetch
* Can be imported by client
* This calls always cached.  


How does fetch works on server via client

=======

Has this been added: 

This material is a comparative overview of the two different routing systems in Next.js: the new App Router and the classic Pages Router.
It outlines the specific file and folder conventions each system uses to define:
 * UI pages (both static and dynamic)
 * API routes
 * Layouts and special app-wide files
It also includes notes on the common files at the project's root and a draft outline for a larger document on Next.js.
Here is a revised and clarified version of your notes, organized for an Obsidian vault.
Next.js Routing: App Router vs. Pages Router
This note compares the two file-based routing systems in Next.js: the modern App Router (folder-based) and the classic Pages Router (file-based).
📂 Common Project Files
These files and folders are found in the root of most Next.js projects, regardless of which router you use.
 * next.config.js: Main configuration file for Next.js.
 * package.json: Manages project dependencies and scripts.
 * public/: A special folder for static assets (images, fonts) that are served from the root URL (/).
 * components/: (Convention) A common folder for storing reusable React components.
 * styles/: (Convention) A common folder for storing global stylesheets.
📁 The App Router (New)
The App Router is the modern standard, introduced in Next.js 13. It operates from the app/ directory and uses folder-based routing.
Key Concepts
 * Core Directory: app/
 * Folder-Based: Folders are used to define route segments in the URL.
 * Key Files:
   * page.js: Creates a UI page for a route segment.
   * layout.js: Defines a shared UI (including <html> and <body>) for a route and its children. This file is required at the root.
   * route.js: Creates an API endpoint (a "Route Handler") for a route segment.
   * loading.js, error.js: Optional files for streaming UI and error handling.
Examples
 * Root Route (/)
   * app/layout.js (Required root layout)
   * app/page.js (Required root page)
 * Static Route (/blog)
   * app/blog/page.js
 * Dynamic Route (/blog/:slug)
   * app/blog/[slug]/page.js
 * API Route (/api/users)
   * app/api/users/route.js
Special Feature: Route Groups
 * What they are: Folders wrapped in parentheses, like app/(marketing)/....
 * Purpose: These folders are purely for organization and do not affect the URL.
 * Example: app/(marketing)/about/page.js creates the /about page. This is useful for applying a specific layout (app/(marketing)/layout.js) to a group of routes without adding (marketing) to their URLs.
📄 The Pages Router (Classic)
The Pages Router is the classic system used before Next.js 13. It operates from the pages/ directory and uses file-based routing.
Key Concepts
 * Core Directory: pages/
 * File-Based: .js, .jsx, or .tsx files are used to define routes.
 * Key Files:
   * index.js: Creates the root page for a directory (e.g., pages/index.js is /, pages/blog/index.js is /blog).
   * _app.js: A required file to wrap your entire application. Used for global state, styles, and layouts.
   * _document.js: An optional file to customize the server's <html> and <body> tags.
   * [param].js: Creates a dynamic route.
Examples
 * Root Route (/)
   * pages/index.js
 * Static Route (/about)
   * pages/about.js
 * Dynamic Route (/blog/:slug)
   * pages/blog/[slug].js
 * API Route (/api/hello)
   * pages/api/hello.js
 * Dynamic API Route (/api/users/:id)
   * pages/api/users/[id].js
🗺️ Suggested Overall Note Structure
The last fragments of your notes look like a plan for a larger mind map or document. Here is a clean version of that structural plan:
 * File Structure
   * app/ Directory (App Router)
   * pages/ Directory (Pages Router)
   * public/ Directory
   * src/ Directory (Optional)
   * Config Files (next.config.js)
   * Middleware (middleware.js)
 * Core Concepts
   * Rendering Strategies (SSR, SSG, ISR)
   * Data Fetching Strategies
   * Styling Approaches
   * Core Components (<Link>, <Image>, etc.)

========

Thinking about big picture in frameworks: 

Yes, your intuition is 100% correct.
You should always start with the Router. It is the central nervous system of any web framework.
Your logic is perfect:
 * A user sends a request to a URL (e.g., GET /blog/my-post).
 * The first job of the framework is to figure out what code to run for that specific request.
 * That is the router. It's a map that connects the URL to a specific file or function in your project (e.g., app/blog/[slug]/page.js or an API's route.js).
Everything else is just a detail that supports this core loop. You're right that a basic app doesn't need complex config or middleware to run.
Here is the logical order of importance, from most essential to least.
🥇 The Core Loop (The 3 Essentials)
This is the non-negotiable foundation. You cannot have an app without these.
 * The Router: The "post office" or "receptionist." It receives every request and knows exactly which "office" (handler) to send it to. It's the most fundamental piece.
 * Route Handlers (Pages & API Routes): These are the "offices" the router sends requests to. This is your actual code. In Next.js, this is your page.js (for HTML) or route.js (for JSON). This code is responsible for doing the work (like fetching data).
 * The Rendering Engine / Response: This is the "product" that the handler creates. After your page.js runs, the rendering engine takes it and builds the final HTML. After your route.js runs, it sends the final JSON.
🥈 The Support Systems (Vital for Real Apps)
You can build a "hello world" app with only the core loop. You need these to build a real app.
 * Configuration (config): This is the app's "DNA." It's more vital than middleware. The config tells the router how to run. Does it run on localhost:3000? What is the DATABASE_URL? It's the foundational set of instructions for the framework itself.
 * Data Fetching & State: Your handlers need to get data from somewhere. This layer includes the tools you use to talk to your database (like an [[ORM (Object-Relational Mapper)]]) or manage client-side state (like [[Caching Strategies: React Query, Next.js, and API Caching]]).
 * Middleware: This is the app's "plumbing" or "security." It's code that runs before the handler to check for cross-cutting concerns.
   * "Is this user logged in?" (Authentication)
   * "Where did this request come from?" (Logging)
   * "Should this user be redirected?" (Redirects)
     It's not essential for a basic page to load, but it's essential for a secure, functional app.
🥉 The UI Layer (For Frontend Frameworks)
This part applies specifically to UI-focused frameworks like Next.js, not backend-only ones like Express.
 * Reusable Components: Your "View" (page.js) is built from smaller, reusable pieces like <Button />, <Header />, and <Layout />.
 * Styling: The rules that define how your app looks (e.g., CSS files, Tailwind, etc.).
