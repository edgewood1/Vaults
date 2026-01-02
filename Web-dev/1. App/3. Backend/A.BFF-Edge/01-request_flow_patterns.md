
 This article describes 3 workflows
 * classic
 * nextjs app router
 * NextJS page router
 
 **classic "Client-Server" architecture flow.** 

In a typical modern web application (like a React/Node or Angular/Python stack), the flow separates concerns into specific layers:
1. UI / Browser
2. Internet / HTTP request
3. Data layer

**The UI layer runs in the browser: the ui + client api: **
 * 1. Presentation (UI)
   * This is a file like components/UserBadge.jsx that will display a button that when clicked, the onClick handler fires and calls the helper function imported from the Network layer.
 * 2. Network (Client API)
   * The API wrapper, such as api/badgeClient.js, contains the `claimBadge()` function which sends the HTTP POST request across the internet to the server.

**--- The Internet (HTTP Request) ---**
Backend (Server) Runs on your infrastructure.
 * 3. Controller (Router/Gatekeeper)
   * File: controllers/badgeController.js (or routes/badgeRoutes.js)
   * Action: Catches the incoming URL (/api/badges/claim). It unpacks the request, checks security (is the user logged in?), validates inputs, and delegates the actual work to the Service layer.
 * 4. Service (Business Logic)
   * File: services/badgeLogicService.js
   * Action: The "Brain." It executes core business rules (e.g., Is the user eligible? Is the badge expired?). It may call utilities like gamificationLib.js to calculate points. It does not write SQL; it just processes logic.
 * 5. Data Access Layer (DAL)
   * File: data/userRepository.js
   * Action: The "Translator." The Service asks this file to save the data. This file knows how to speak to the database (SQL or ORM methods). It builds and executes the query.

**Data Definitions & Storage**
 * 6. The Model / Schema (Part of the Backend Code)
   * File: models/UserSchema.sql (or .js)
   * Action: The Blueprint. This defines the required shape of the data (types, fields).
   * Answer to your question: Yes, this is part of the Data Layer. It is the definition that the DAL (Repository) uses to validate data before sending it to the database.
 * 7. Persistence (Infrastructure)
   * System: The Database Engine (Postgres, MySQL, MongoDB).
   * Action: The physical software that writes the bytes to the hard drive.

Why split it up like this?

You might wonder why we don't just put the database code right inside the button click handler.
 * Security: You never want your database credentials or logic in the browser (Step 1).
 * Reusability: By putting the logic in the Service (Step 5), you can trigger the "Badge Claim" logic from a button click, but also from a background cron job or a different part of the app without rewriting code.
 * Maintainability: If you change your database from SQL to MongoDB, you only have to rewrite the Repository (Step 6), not the UI or the Controller.


![[Pasted image 20251128091445.png]]


**Part two: App router**

In Next.js with the App Router, the flow changes significantly. 

The main difference is that you don't need to manually write an API route (api/filename.js) or use fetch.

Instead, you use Server Actions. This allows your UI component to call a backend function directly, as if it were a local JavaScript function. Next.js handles the network communication automatically behind the scenes.

Here is the imagined file sequence for the App Router:
The App Router Execution Chain

UI Layer
 * app/ui/BadgeComponent.tsx (Client Component)
   * Role: The Interactive UI.
   * Directive: Must have 'use client' at the top because it uses onClick.
   * Action: When the user clicks, it calls the function imported from Step 2.

Server Action Layer
 * app/actions/badgeActions.ts (The Server Action)
   * Role: The Secure Bridge.
   * Directive: Must have 'use server' at the top.
   * Action: This looks like a regular TS function, but when called by Step 1, Next.js automatically creates a POST request. It validates the user's session (using Clerk, Auth.js, etc.) and calls the business logic.
   * Note: It usually ends with revalidatePath('/dashboard') to instantly update the UI without a page reload.

Business Layer
 * lib/services/badgeService.ts
   * Role: The Business Logic (Pure TypeScript).
   * Action: Just like the previous example, this isolates the rules. It calculates if the badge can be awarded. It doesn't know it's being run by Next.js; it's just logic.

Data layer
 * lib/db/schema.ts (e.g., Drizzle/Prisma)
   * Role: Database Definition.
   * Action: Defines the structure of the "UserBadges" table.
 * lib/db/index.ts
   * Role: The Connection.
   * Action: Opens the connection to your Postgres/MySQL database and executes the INSERT.
The Key Difference: "The Blur"
In the previous architecture, Step 1 and Step 2 were separated by a hard network wall (the fetch call).
In Next.js App Router, Step 1 imports Step 2 directly.
Even though they run on different computers (Client vs. Server), you write them as if they are in the same file.
Example of the connection:
app/actions/badgeActions.ts
'use server' // <--- This runs on the server
import { db } from '@/lib/db';

export async function claimBadge(badgeId: string) {
  // Database logic happens here
  await db.insert(...);
}

app/ui/BadgeComponent.tsx
'use client'
import { claimBadge } from '@/app/actions/badgeActions'; // <--- Imported directly!

export default function Badge({ id }) {
  return <button onClick={() => claimBadge(id)}>Claim!</button>
}

Would you like me to mock up the code for the actions.ts file to show how you might handle errors or validation there?

**Part three: Page Router**

The Page Router sits halfway between the "Classic" example and the "App Router" example.
In the Page Router, you don't have Server Actions. Instead, you utilize API Routes. Next.js essentially spins up a mini-serverless function for every file you put inside the pages/api folder.
Here is the file flow for a click event in the Page Router:

The Page Router Execution Chain

UI layer
 * components/BadgeButton.tsx features the button, which when triggered calls fetch('/api/badges/claim', { method: 'POST' }) -  a specific internal URL.

API layer
 * pages/api/badges/claim.ts is the API Route/handler.  It exports a default function handler(req, res). It parses the req.body, checks the cookies on req to see if the user is logged in, and then initiates the work.

Middleware 
 * lib/middleware/authCheck.ts (Optional but common)
   * Role: Helper Utility.
   * Action: The API route calls this to verify the JWT or session token before proceeding. "Is this user allowed to hit this API endpoint?"

Business Layer
 * services/badgeService.ts
   * Role: Business Logic.
   * Action: The API route imports this function. This file determines if the user has met the criteria for the badge. It is decoupled from req and res objects so it can be tested easily.

Data Layer
 * prisma/schema.prisma (or db/models)
   * Role: Data Definition.
   * Action: Defines the shape of the data.
 * lib/db.ts
   * Role: Singleton Connection.
   * Action: Performs the actual await db.badge.create(...) call.

The Critical Difference (vs. App Router)
In the App Router (Server Actions), the server code feels like it is "inside" the component.
In the Page Router, there is a strict wall.
 * File 1 (BadgeButton.tsx) runs only in the browser.
 * File 2 (pages/api/claim.ts) runs only on the server.
You cannot import code from File 2 into File 1. If you try to import your database logic directly into your component in the Page Router, Webpack will crash because it can't run Node.js code (like fs or database drivers) in the browser.
Sample Code: The API Route (pages/api/...)
This is the file that doesn't exist in the App Router/Server Action model but is required here:
// pages/api/badges/claim.ts
import type { NextApiRequest, NextApiResponse } from 'next'
import { awardBadge } from '../../../services/badgeService'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    // 1. Get User ID from session (e.g. NextAuth)
    const userId = getSession(req).id;

    // 2. Call the service layer
    const result = await awardBadge(userId, req.body.badgeId);

    // 3. Send HTTP response back to the UI
    res.status(200).json(result);

  } catch (error) {
    res.status(500).json({ error: 'Failed to award badge' });
  }
}

Would you like me to explain how "Revalidation" (updating the UI after the database change) differs between these two routers?

Best practice template

// app/actions/badgeActions.ts
'use server'

import { db } from '@/lib/db';
import { revalidatePath } from 'next/cache';
import { z } from 'zod'; // Assuming you use Zod for validation

// 1. Define the Schema (Input Validation)
const BadgeSchema = z.object({
  userId: z.string(),
  badgeId: z.string().min(5)
});

export type ActionState = {
  message: string;
  success?: boolean;
}

export async function claimBadge(prevState: ActionState, formData: FormData): Promise<ActionState> {
  // 2. Parse & Validate Inputs
  const rawData = {
    userId: formData.get('userId'),
    badgeId: formData.get('badgeId'),
  };

  const validatedFields = BadgeSchema.safeParse(rawData);

  if (!validatedFields.success) {
    return { 
      success: false, 
      message: 'Invalid input: ' + validatedFields.error.message 
    };
  }

  // 3. Security Check (The "Gatekeeper")
  // In App Router, we check auth right here in the action
  const { userId, badgeId } = validatedFields.data;
  // const session = await auth(); 
  // if (!session || session.user.id !== userId) return { message: 'Unauthorized' };

  try {
    // 4. Call Service Layer (Business Logic)
    // await badgeService.awardBadge(userId, badgeId);
    
    // OR Direct DB Call (if simple)
    await db.insertInto('badges').values({ userId, badgeId });

    // 5. Revalidate (The "UI Update")
    revalidatePath('/dashboard');
    return { success: true, message: 'Badge Claimed!' };

  } catch (e) {
    return { success: false, message: 'Database Error: Failed to claim badge.' };
  }
}
