# Starting an app

npx create-next-app@latest

# Edit dev script / run server
"scripts": {
    "dev": "next dev -p 4000",
}

`yarn dev`

# building the server

"scripts": {
  "build": "next build",
}

`yarn build`


## Express.js Routing

- **URL:** `http://osmosis.org/dashboard/about`
  - **Domain:** `osmosis.org`
  - **Path:** `dashboard/about`
  - **Path Segments:** `about`, `index`

- **Express.js Parsing:**
  - `www.osmosis.org/dashboard/about`
    - `req.params.section`: `'about'`
  - `www.osmosis.org/dashboard/about?val=value`
    - `req.query.Val`: `'value'`
  - `www.osmosis.org/dashboard/about?someQueryParam=value`
    - `req.url`: `/dashboard/about?someQueryParam=value`
    - `req.path`: `/dashboard/about`

## Next Routing

### 1. Static Routes

| File Name            | Route  |
| -------------------- | ------ |
| pages/index.js       | /      |
| pages/about.js       | /about |
| pages/about/index.js | /about |

### 2. Nested / Dynamic Routes

| File Name                  | Route                   |
| -------------------------- | ----------------------- |
| pages/about/[portfolio].js | /about/4 , /about/list5 |
| pages/about/list.js        | /about/list             |
| clients/[id]/[proj].js     | /clients/5/art          |

### accessing dynamic route:

```jsx
import { useRouter } from 'next/router';
const router = useRouter();
router.query >  {ver: '4'}  // evaluated path
router.query.ver > 4
// nested
router.query >  ['5', 'hi']
router.query.pid[0] > 5
```

What is the difference between withRouter an duseRouter

### 3. Catch-All Routes

| File Name          | URL             |
| ------------------ | --------------- |
| /blog/[...date].js | /blog/2022/12/2 |

### catch-all query value
```tsx
const router = useRouter();
router.query >  {pid: ['5', 'art']}
router.query.ver > 4
```

# 3 ways of Navigating

### 1. Links
- `import Link from 'next/link'`.
- Replaces the anchor tag.
- `href` prop specifies the link (`client/path`).
- `replace` prop replaces the current page without pushing to history.
- Prefetches data for the page when hovering over the link.

# static route

`<Link href=''/clinets/max>Max</Link>`

# dynamic routes
mapping through a clients array to create a series of links

```tsx
client = {
  id: 'x', name: 'mel'
}

clients.map(client => (
  <li key={client.id}>
    <Link href={`/clients/${client.id}`}>{client.name}</Link>
))
```
# alternatively

```tsx
<Link href={{
  pathname: '/clients/[id]',
  query: {
    id: client.id
  }
}}>{client.name}</Link>
```


# 2. Programmatic Navigation

- Use `router` object for programmatic navigation.
- Example:

```jsx
function loadHandler() {
  router.push('/clients/max/projectA');
  router.replace('/');
  router.push({ pathname: '/clients/[id]/[clientid]', query: { id: 'max', clientid: 'hi' } });
}
```

# Custom 404
Create a file `pages/404.js` for a custom 404 page.

# Data Fetching

## Traditional Fetching (Client-Side Rendering (CSR))

- Load data using import statements or HTTP requests.
- we wait for all the parts, and then assembled/rendered in browser
- extra data runs via client-side HTTP requests
- Drawbacks: Users wait for data, affecting initial screen rendering and SEO.


## Pre-rendering

- here, parts assembeld / rendered on server, then downloaded

## Forms of Pre-rendering

* the difference: the quality of hte initial page sent (SEO);

1. **Static Generation (SSG):**
   - Page pre-rendered w/initial data DURING THE BUILD PROCESS
   - content remains static until NEXT BUILD
   - sends this to every client; good for blog posts, etc.
   - however, client-side fetching can keep page updated.
   - can serve faster since already built & reduce server load.
   - crawlers will not see the updated version.
   - fallbacks: page gnerated on first request as SSR, then cached for subsequent requests (like SSG).

2. **Server-Side Rendering (SSR):**
   - Page pre-rendered w/fresh data on the server FOR EACH REQUEST.
   - thus dynamic content updated dynamically on each request
   - good for pages that display user-specific data, such as user profile.
   - can still fetch client-side for changs that depend on user interactions and reduce server load.
   - does not inherently cache pages, must be added.
   - crawlers see the most up to date verion


# When to use client-side rendering?
- real-time interactivity to enhance the user experience.
- user specific data in case of static.
- imporve speed of initial load; lazy loading images or non-critical content.
- won't be indexed for SEO, so use for non-indexed content.

# Page Functions

**SSG**

# getStaticProps

- fetches data / returns as props
- pre-generates static pages in the `.next` folder on `npm run build`
- can use params from paths to fetch data about params
- Specify `revalidate` to control how often pages are regenerated after build.


# getStaticPaths (for dynamic routes)
- defines the dynamic paths for which you want to pre-render pages @ build time
- Returns an object with an array of params objects: the dynamic parameters for a specific route.
- passes this to getStaticProps



getStaticProps Alone:
- lack dynamic path or know it beforehand.
-
```jsx
export async function getStaticProps() {
  const res = await fetch('https://api.example.com/posts');
  const data = await res.json();
  return {
    props: {
      posts: data,
    },
  };
}
```

getStaticPaths Alone:
- no need to fetch data for paths.

// pages/[slug].js
```jsx
export async function getStaticPaths() {
  // Predefined list of dynamic paths
  const paths = [
    { params: { slug: 'path1' } },
    { params: { slug: 'path2' } },
    // ...
  ];

  return {
    paths,
    fallback: false,
  };
}

// Component rendering logic without data
function DynamicPage() {
  return (
    <div>
      <h1>Static Dynamic Page</h1>
      {/* Content without data */}
    </div>
  );
}

export default DynamicPage;
```
both satic paths and static props

// pages/posts/[slug].js

```js

export async function getStaticPaths() {
  // Fetch the list of available post slugs at build time
  const res = await fetch('https://api.example.com/posts');
  const posts = await res.json();

  // Create an array of objects with the params needed by the dynamic route
  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));

  // Return the array of paths
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  // Fetch data for the specific post using the slug (params.slug)
  const res = await fetch(`https://api.example.com/posts/${params.slug}`);
  const postData = await res.json();

  // Return the fetched data as props
  return {
    props: {
      postData,
    },
  };
}

// Component rendering logic using postData
function Post({ postData }) {
  return (
    <div>
      <h1>{postData.title}</h1>
      <p>{postData.content}</p>
    </div>
  );
}

export default Post;
```

**SSR**

# `getServerSideProps`
- Runs on the server after deployment.
- Executes on each incoming request.
- Access to `params`, `request`, and `response`.


# UseSWR
- `useSWR` is a hook for client-side data fetching.
- Define a default "fetcher" function.
- Supports features like "stale-while-revalidate."

