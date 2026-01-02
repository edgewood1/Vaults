# Caching Fundamentals

## 1. What is Caching?
A cache is a small, fast-access temporary storage area. The goal is to store data that is frequently or recently used so you can retrieve it much faster than getting it from the original, slower source (like a database or API).

> **Analogy:** Think of it like keeping your most-used books on your desk (the cache) instead of walking all the way to the library (the database) every time you need them.

### Key Concepts
*   **Cache Hit (🎯):** The data was requested and found in the cache. Fast path.
*   **Cache Miss (🔍):** The data was not in the cache. The application must fetch it from the source.
*   **TTL (Time to Live):** A rule that says, "Delete this data after X minutes" to prevent it from becoming stale.
*   **Invalidation:** Manually deleting data from the cache because you know the source data has changed.

---

## 2. HTTP Caching (The Web Standard)

HTTP caching is defined by the protocol itself. It enables browsers and intermediaries (CDNs, Proxies) to store responses.

### Browser Caching
The browser stores files (CSS, JS, Images) locally.
*   **Mechanism:** Controlled by headers like `Cache-Control`, `Expires`, and `ETag`.
*   **Flow:**
    1.  Browser requests resource.
    2.  Checks local disk/memory.
    3.  If valid (fresh), serves immediately (0ms latency).
    4.  If stale, asks server: "Has this changed?" (Conditional Request).

### Intermediary Caching
*   **CDN Cache:** Edge servers (Cloudflare, Vercel Edge) cache content close to the user physically.
*   **Reverse Proxy Cache:** Servers like Nginx or Varnish sit in front of your app and cache responses to protect your app server from load.

---

## 3. Server-Side Caching Strategies

This refers to caching mechanisms that live within your backend infrastructure.

### A. Data Caching
Caching the *results* of database queries or API calls.
*   **Use Case:** You have a complex SQL query that takes 2 seconds. You cache the result so subsequent requests take 5ms.
*   **Tools:** Redis, Memcached, or In-Memory Maps.

### B. Full-Page Caching
Caching the entire HTML output of a page.
*   **Use Case:** A blog post that looks the same for every user.
*   **Mechanism:** The server checks if `page_about.html` exists in memory. If yes, send it. If no, render React/Template, save it, then send it.

### C. Opcode Caching
Specific to interpreted languages like PHP. It caches the compiled bytecode of scripts so they don't need to be re-parsed on every request.

---

## 4. Practical Example: In-Memory Cache

A simple implementation of a cache in TypeScript using a `Map`. This is fast but local to a single server instance.

```typescript
type CacheEntry<T> = {
  data: T;
  timestamp: number;
};

class ApiCache {
  private cache: Map<string, CacheEntry<any>>;
  private ttl: number; // Time to live in milliseconds

  constructor(ttlMinutes = 5) {
    this.cache = new Map();
    this.ttl = ttlMinutes * 60 * 1000;
  }

  /**
   * Tries to get a value from the cache.
   * Returns `null` for a "cache miss" or "cache expired".
   */
  get<T>(key: string): T | null {
    const entry = this.cache.get(key);
    const now = Date.now();

    // 1. Cache Miss
    if (!entry) {
      return null;
    }

    // 2. Cache Expired
    if (now - entry.timestamp > this.ttl) {
      this.cache.delete(key);
      return null;
    }

    // 3. Cache Hit
    return entry.data as T;
  }

  set<T>(key: string, data: T): void {
    this.cache.set(key, {
      data,
      timestamp: Date.now(),
    });
  }
}

export const apiCache = new ApiCache();
```
```

#### **2. New File: Distributed Cache.md**

```diff
# Distributed Cache (Redis)

## Definition
A distributed cache is a caching layer that sits outside of your application server's memory. It is usually a separate server instance (or cluster) that all your application nodes can access.

## Why do we need it?
1.  **Shared State:** If you have 5 servers running your app (scaling horizontally), a local `Map()` variable on Server A is not visible to Server B. A distributed cache allows them to share data (e.g., User Sessions).
2.  **Persistence:** If your application crashes or restarts, local memory is wiped. A distributed cache like Redis runs independently, so the data survives app restarts.

## Common Tools

### Redis
*   **Type:** Key-Value Store (In-memory).
*   **Usage:**
    *   `SET user:123 '{"name": "John"}'`
    *   `GET user:123`
*   **Features:** Extremely fast, supports expiration (TTL), often used for Queues (BullMQ) and Pub/Sub.

### Memcached
*   **Type:** Key-Value Store.
*   **Usage:** Purely for caching strings/objects. Simpler than Redis but less feature-rich.
```

#### **3. New File: Local Cache & State Sync.md**

```diff
# Local Cache & State Synchronization

This layer concerns how data is managed closer to the "consumer" — either the specific server instance processing a request, or the client's browser.

---

## 1. Next.js Server Caching Architecture

Next.js uses a multi-layer caching system on the server to optimize rendering speed and reduce data fetching.

### A. Request Memoization (Per-Request)
*   **What:** A React feature that deduplicates fetch calls within a single render pass.
*   **Scenario:** If your `Layout` and your `Page` both call `getUser()`, the actual API is only hit once.
*   **Lifetime:** Discarded immediately after the request is done.

### B. Data Cache (Persistent)
*   **What:** A persistent server-side cache for `fetch` results. This is the Next.js equivalent of a server-side HTTP cache.
*   **Control:**
    *   `fetch(url, { next: { revalidate: 3600 } })`: Cache for 1 hour.
    *   `fetch(url, { cache: 'no-store' })`: Never cache.
*   **Lifetime:** Persists across requests and deployments until revalidated.

### C. Full Route Cache
*   **What:** Caches the rendered HTML and React Server Component Payload (RSCP) of a page.
*   **Lifetime:** Persists until the next deployment or revalidation.

---

## 2. Client-Side State Sync (React Query / SWR)

On the client side (Browser), we use libraries like **React Query** (TanStack Query) or **SWR**. These are often called "caches," but they are better described as **Async State Managers**.

### Why not just `useEffect`?
*   **Stale-While-Revalidate:** Show old data instantly while fetching new data in the background.
*   **Window Focus Refetching:** Automatically update data when the user tabs back to the app.
*   **Deduplication:** Prevent multiple components from requesting the same data simultaneously.

### The "Hydration" Pattern (Advanced)
A powerful pattern is to fetch data on the server (for SEO and speed) and pass it to the client to "hydrate" the React Query cache.

**1. Server Component (`page.tsx`)**
```tsx
import { QueryClient, dehydrate, HydrationBoundary } from '@tanstack/react-query';
import { getTodos } from './actions';

export default async function Page() {
  const queryClient = new QueryClient();

  // Prefetch data on the server
  await queryClient.prefetchQuery({
    queryKey: ['todos'],
    queryFn: getTodos,
  });

  return (
    // Dehydrate: Send the cache state to the client
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ClientComponent />
    </HydrationBoundary>
  );
}
```

**2. Client Component**
```tsx
"use client";
import { useQuery } from '@tanstack/react-query';

export default function ClientComponent() {
  // This hook finds the data immediately in the cache (no loading state!)
  const { data } = useQuery({ queryKey: ['todos'], queryFn: fetchTodos });

  return <div>{data.map(t => <p>{t.title}</p>)}</div>;
}
```

---

## 3. Server-Side Local Variables (In-Memory)

Sometimes you store data in a simple variable in your Node.js server code.

*   **Scope:** Local to that specific server instance.
*   **Lifetime:** Cleared when the server restarts or the process ends (e.g., Serverless function sleep).
*   **Use Cases:** Configuration constants, database connection pools, singleton instances.
*   **Anti-Pattern:** Do not use this for user sessions in a scaled environment (use Redis instead).
```

#### **4. New File: Static Read Models.md**

```diff
# Static Read Models (ISR & SSG)

This strategy involves pre-calculating the "View" of your data so that when a user asks for it, no database queries are needed—the server simply hands over a file.

## 1. Static Site Generation (SSG)
*   **When:** Build time.
*   **Mechanism:** The server fetches data and renders HTML files when you run `npm run build`.
*   **Pros:** Fastest possible delivery (served via CDN).
*   **Cons:** Data is stale until the next deployment.

## 2. Incremental Static Regeneration (ISR)
ISR is a hybrid approach. It allows you to update static pages *after* the build has finished, without redeploying the site.

### How it works (Stale-While-Revalidate)
1.  **The Setup:** You define a revalidation time (e.g., 60 seconds).
2.  **Phase A (Fresh):** User visits. The page is less than 60s old. Server sends the cached file. (Fast).
3.  **Phase B (Stale):** User visits. The page is 61s old.
    *   Server *immediately* sends the stale (old) page so the user doesn't wait.
    *   Server triggers a background regeneration.
4.  **Phase C (Update):** Next.js re-runs the page logic, fetches new data, and overwrites the static file.
5.  **Phase D:** The next user gets the new file.

### On-Demand ISR
Instead of waiting for a timer, you can manually trigger an update via a webhook (e.g., when you click "Save" in your CMS).

```typescript
// app/api/revalidate/route.ts
import { revalidatePath } from 'next/cache';

export async function POST(request) {
  // ... verify webhook secret ...
  revalidatePath('/blog/my-post');
  return Response.json({ revalidated: true });
}
```

## 3. Derived Data (JSON Files)
Sometimes, instead of HTML, you might pre-calculate complex data and save it as a static JSON file.
*   **Example:** A "Search Index" for a blog.
*   **Process:** Take the database (Source of Truth), process the text, and bake it into a `search.json` file.
*   **Benefit:** The search bar downloads this small JSON file and searches instantly on the client, without hitting the database.
```

#### **5. Cleanup: Deleting Redundant Files**

```diff
