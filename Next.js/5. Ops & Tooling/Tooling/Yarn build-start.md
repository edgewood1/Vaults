
Here is the breakdown of the production flow. The core philosophy changes from "Just-in-Time" (Lazy) to "Ahead-of-Time" (Eager).
In production, the process is split into two distinct commands: yarn build (preparation) and yarn start (execution).
1. yarn build: The "Heavy Lifting"
This command must be run before you can start the production server. It performs all the expensive work so the server doesn't have to do it when a user visits.
 * Tree Shaking & Minification: The compiler (Webpack/Turbopack) scans your code, removes unused exports (tree shaking), and compresses the JavaScript (minification).
 * Route Map Generation: Next.js scans your file structure once and generates a Manifest (a JSON file). This map tells the server exactly which files correspond to which URLs.
 * Static Generation (SSG): For any page not marked as "dynamic" (using specific headers or database calls), Next.js renders the HTML immediately and saves it as a .html file in the .next folder.
2. yarn start: The Production Server
When you enter this command, Next.js starts a Node.js server, but it behaves very differently from dev:
 * Read-Only Mode: The server does not watch your file system for changes. HMR (Hot Module Replacement) is disabled.
 * Manifest Lookup: Remember "Code X" (The Request Handler)?
   * In Dev: It scanned your hard drive folder-by-folder to find a match.
   * In Prod: It looks at the Build Manifest (the JSON map created during build). This is effectively an O(1) lookup rather than a file system traversal, which makes routing incredibly fast.
3. The Request Resolution (How it differs)
When the user requests /about, the behavior depends on how the page was built:
Scenario A: Static Page (Default)
 * Lookup: The server checks the Manifest.
 * Match: It sees /about corresponds to about.html in the .next/server folder.
 * Action: It serves the pre-computed HTML file instantly (like an Apache/Nginx static server). No JavaScript code is executed on the server.
Scenario B: Server-Side Rendered (SSR) / Dynamic
 * Lookup: The server checks the Manifest.
 * Match: It sees /dashboard is marked as a "Dynamic Function."
 * Action: It executes the JavaScript bundle for that page, fetches data, renders HTML, and sends it back. This is similar to dev, but optimized.
Summary: Dev vs. Prod
| Feature | yarn dev | yarn start (Production) |
|---|---|---|
| Compilation | Lazy: Compiles a page only when you visit it. | Eager: Compiles everything before the server starts. |
| Routing | File System: Scans folders on every request. | Manifest: Checks a pre-built JSON map. |
| Performance | Slow (Source maps, unminified code). | Fast (Minified, pre-compressed). |
| Static Pages | Generated on every request. | Generated once at build time; served as static files. |
| Environment | NODE_ENV=development | NODE_ENV=production |
Would you like to know how "Incremental Static Regeneration" (ISR) fits into this, allowing you to update static pages without rebuilding the whole site?
