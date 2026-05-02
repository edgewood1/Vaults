# App touting


SWR? 

What is revalidation? 

No, the Next.js App Router (introduced in Next.js 13) does **not** directly use getStaticProps, getStaticPaths, or getServerSideProps. These data fetching methods are specifically designed for the Pages Router, which is the older routing system in Next.js.
**App Router Data Fetching**
The App Router uses a different approach for data fetching and rendering:
1. **Server Components:**	* By default, components in the app directory are Server Components.
	* Server Components can directly fetch data from the backend using techniques like fetch, database queries, or interacting with APIs.
	* This data fetching happens on the server during the initial page load, and the rendered HTML is sent to the client.
2. **Client Components**	* Components marked with 'use client' are Client Components.
	* They are rendered and hydrated on the client-side (in the browser) after the initial page load.
	* Client Components can also fetch data, but this fetching happens on the client-side after the initial render, typically using useEffect or data fetching libraries like SWR or React Query.
3. **loading.js** **for Suspense**	* The App Router introduces a new concept called Suspense for handling asynchronous data fetching and loading states.   
	* You can create a loading.js file within a route segment to display a loading UI while data is being fetched for that segment.
**Key Differences**
| Feature                                                            | Pages Router                                                       | App Router                                                         |
|--------------------------------------------------------------------|--------------------------------------------------------------------|--------------------------------------------------------------------|
| Data Fetching Methods                                              | getStaticProps, getStaticPaths, getServerSideProps                 | Server Components (default), Client Components ('use client')      |
| Data Fetching Location                                             | Server-side (at build time or on each request)                     | Server-side (Server Components) or Client-side (Client Components) |
| Loading States                                                     | Manual handling with loading indicators, etc.                      | Built-in Suspense with loading.js                                  |

**Choosing the Right Approach**
The choice between the Pages Router and the App Router depends on your project's requirements and preferences:
* **New Projects:** The App Router is generally recommended for new Next.js projects, as it leverages React's latest features and provides a more streamlined development experience.   
* **Existing Projects:** If you have an existing project built with the Pages Router, you can continue using it, but consider migrating to the App Router if you want to take advantage of its new features and performance benefits.
Remember, both routers have their strengths and weaknesses, and the best choice depends on your specific use case and development goals.
