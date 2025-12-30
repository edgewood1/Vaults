
# React Server Components (RSC) Quick Guide

**Core Concept:** Render components exclusively on the server. The code is never sent to the client, resulting in zero bundle size for those components. Think of your app as a **Server-first tree**; you only "opt-in" to Client Components when you need interactivity.

---

## The Three Golden Rules

1.  **Server by Default:** In frameworks like Next.js (App Router), all components are Server Components unless marked otherwise.
2.  **No Browser APIs:** You cannot use `useState`, `useEffect`, `window`, or DOM events in a Server Component.
3.  **Serialization Boundary:** Data passed from Server -> Client components must be serializable (strings, numbers, objects, arrays). You **cannot** pass functions, classes, or Date objects directly.

---

## 1. The Server Component (Data Fetching)
**Use for:** Fetching data, database access, keeping API keys private.

```tsx
// app/dashboard/page.tsx
import db from '@/lib/db'; // Direct DB access is allowed here

// 1. Component is async
export default async function Dashboard() {
  // 2. Await data directly (no useEffect needed)
  const data = await db.query('SELECT * FROM revenue');

  return (
    <div className="p-4">
      <h1>Revenue: {data.total}</h1>
      {/* 3. No JS for this HTML is sent to the browser */}
    </div>
  );
}

```
```


2. The Client Component (Interactivity)
Use for: onClick, onChange, useState, useEffect, or browser APIs (window, localStorage).
How: Add 'use client' at the very top.
// components/LikeButton.tsx
'use client'; // <--- The Magic Switch

import { useState } from 'react';

export default function LikeButton() {
  const [likes, setLikes] = useState(0); // Hooks work here

  return (
    <button onClick={() => setLikes(likes + 1)}>
      Likes: {likes}
    </button>
  );
}

3. Composition (Mixing Server & Client)
The Constraint: You cannot import a Server Component into a Client Component file directly.
The Solution: Pass the Server Component as a child (prop).
❌ Wrong
'use client';
import ServerComp from './ServerComp'; // Will fail or degrade performance

export default function ClientWrapper() {
  return <div><ServerComp /></div>;
}

✅ Correct (The "Slot" Pattern)
// page.tsx (Server Component)
import ClientWrapper from './ClientWrapper';
import ServerComp from './ServerComp';

export default function Page() {
  return (
    <ClientWrapper>
      {/* ServerComp is rendered on server, passed as HTML to ClientWrapper */}
      <ServerComp /> 
    </ClientWrapper>
  );
}

Decision Matrix (Cheat Sheet)
| Feature | Server Component | Client Component |
|---|---|---|
| Fetch Data | ✅ (Directly via async/await) | ⚠️ (Via API routes + useEffect) |
| Access Backend Resources | ✅ (Directly) | ❌ (Must use API) |
| Keep Sensitive Info (Tokens) | ✅ | ❌ |
| Add Interactivity (onClick) | ❌ | ✅ |
| Use React Hooks (useState) | ❌ | ✅ |
| Use Browser APIs (localStorage) | ❌ | ✅ |
Key Benefits
 * Zero Bundle Size: Large dependencies (markdown parsers, date libraries) used in Server Components are not downloaded by the user.
 * Backend Access: Query your DB directly inside your component.
 * Reduced Waterfalls: Moves sequential data fetching to the server, closer to the data source.
<!-- end list -->

Would you like me to create a similar markdown cheat sheet for **Next.js Routing** or **Data Mutation (Server Actions)** next?

