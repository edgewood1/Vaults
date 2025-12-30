
* Core Directory: pages/



3. The Page (pages/index.js):
* The specific content for that URL.
* Runs: Server and Client
* index.js: Creates the root page for a directory (e.g., pages/index.js is /, pages/blog/index.js is /blog).
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


File names map to URLs (e.g., pages/about.js -> /about). Understand the role of special files like _app.js and _document.js.

- **Route Types**
    
    - **Static**: File names map directly to routes (e.g., `pages/about.js` creates the `/about` route).
        
    - **Nested**: Nesting folders within the `pages` directory creates nested routes.
        
    - **Dynamic**: Use `[slug].js` syntax for dynamic segments.
        
    - **Catch-all**: Use `[...slug].js` syntax to match all subsequent path segments.
        
        

### **General Routing Concepts**

- **Navigation**: Use the `next/link` component for performant, client-side navigation between pages in both routers. Standard `<a>` tags should be avoided for internal links.


**Next.js Pages Router: Rendering Approaches (Study Notes)**

These strategies define how your pages are rendered and data is fetched.
**Client-Side Rendering (CSR)**
 * Process: Browser receives minimal HTML, then its JavaScript fetches data and builds the UI dynamically after page load.
 * Data Fetch: Via client-side fetch (e.g., in useEffect, SWR, React Query).
 * Use Case: Highly interactive dashboards, personalized content; when SEO isn't critical for initial load.
**Static Site Generation (SSG)**
 * Process: Pages are fully pre-rendered to HTML, CSS, and JS at build time. These static files are saved to disk and served directly.
 * Data Fetch:
   * getStaticProps: Fetches data once, at build time. Used for content that doesn't change frequently.
   * getStaticPaths (with Dynamic Routes): Specifies which dynamic paths (e.g., blog posts) should be pre-rendered at build time.
 * Use Case: Blogs, marketing sites, documentation – offers best performance and SEO.
**Server-Side Rendering (SSR)**
 * Process: For each request, the server fetches data and builds the full HTML, CSS, and JavaScript bundles. This pre-rendered HTML is sent to the client, then hydrated by the JS for interactivity.
 * Data Fetch: getServerSideProps: Fetches data on each request on the server.
 * Client Receive: Full HTML + Full JavaScript bundles (for hydration).
 * Note: The "React Server Component Payload" (RSC Payload) is NOT used here; it's an App Router concept.
 * Use Case: Dynamic content requiring up-to-the-minute data or authentication (e.g., e-commerce product pages with real-time stock).
**Incremental Static Regeneration (ISR)**
 * Process: Pages are initially built like SSG. After a revalidate time (set in getStaticProps), the next request triggers a background re-generation on the server, fetching fresh data. Stale content is served until the new version is ready.
 * Data Fetch: getStaticProps (with revalidate option).
 * Use Case: Blends SSG performance with SSR-like freshness for content that updates periodically (e.g., news articles, product listings with changing prices).



>    * _error.js: (Optional) Customizes the 500 error page.
>    * pages/index.js: Creates the root page (/).
>    * pages/blog/[slug].js: Creates a dynamic route.
>    * pages/api/hello.js: Creates an API route.
> 



1. The Document (_document.js)
 * Pages Router: Uses pages/_document.js to modify the initial <html> and <body> tags.
 * App Router: Does not exist.
   * Replacement: You must use the Root Layout (app/layout.js).
   * How it works: The Root Layout is required to contain the <html> and <body> tags.
2. The 404 Page (404.js)
 * Pages Router: Uses pages/404.js.
 * App Router: Uses not-found.js.
   * Upgrade: Unlike the old 404.js which was global, you can place a not-found.js file inside any folder to handle "Not Found" errors specific to that section of your site.
3. The Error Pages (_error.js, 500.js)
 * Pages Router: Uses pages/_error.js or pages/500.js.
 * App Router: Uses error.js and global-error.js.
   * error.js: Handles errors for a specific route segment (allows the rest of the app to keep working).
   * global-error.js: Handles critical errors in the root layout (replaces the whole screen).
Summary Table for your Notes
I recommend adding this comparison table to your Special Files.md note so you never confuse them again:
| Feature | Pages Router (Old) | App Router (New) |
|---|---|---|
| HTML/Body Structure | _document.js | Root layout.js |
| Global Wrapper | _app.js | Root layout.js |
| Page Not Found | 404.js | not-found.js |
| General Errors | _error.js / 500.js | error.js |
| Critical Root Errors | N/A | global-error.js |
Next Step:
Would you like me to write the full content for the Special Files.md note now, incorporating this comparison and the definitions for page.js and loading.js?
