
🥈 Support Systems Notes
This layer is the "backend" infrastructure that supports your app.

Note 3: Project Root (Config & Middleware)
This note consolidates all the top-level files that configure your project's environment, dependencies, and request pipeline.
 * Middleware:
   * middleware.ts (or .js): A single file at the root (or inside src/) used to run code before a request is completed (e.g., for auth, redirects). This is part of the "Request Pipeline."
 * 