**What is a page?**.  

Each page is associated with a route based on its file name.

**Example**: If you create `pages/about.js` that exports a React component like below, it will be accessible at `/about`.

```jsx
export default function About() {
  return <div>About</div>
}
```

**What if the route is dynamic?** 

if you create a file called `pages/posts/[id].js`, then it will be accessible at `posts/1`, `posts/2`, etc.

- see Dynamic Routing
- id refers to external data

**What is pre-rendering?** 

- Next generates HTML for each page in advance
- When the page is loaded in the browser, itsJS code runs then runs, makign page interactive - this is called **hydration**.

__**Fetching externaal data for Static Site Generatio**n__ 

- HTML created at build time and reused on each request
- built when running next build
- cached by a CDN
- This should be your default.  Use in marketing pages, portfolios, posts, product listings, help, and docs. 

**getStaticProps**- page content depends on external data

- fetch data and save as posts
- return { props: { posts }}
- the page component will consume and render these 

```jsx
export async function getStaticProps() {
  // Call an external API endpoint to get posts
  const res = await fetch('https://.../posts')
  const posts = await res.json()

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
    },
  }
}
```

**getStaticPaths**- page paths depend on external data

- calls endpoint
- maps through the result in order to get paths
- Return all the paths

```jsx
// This function gets called at build time
export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const res = await fetch('https://.../posts')
  const posts = await res.json()

  // Get the paths we want to pre-render based on posts
  const paths = posts.map((post) => ({
    params: { id: post.id },
  }))

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}
```

- you'll also need to call getStaticProps to get the poses associated with this id

```jsx
export default function Post({ post }) {
  // Render post...
}

export async function getStaticPaths() {
  // ...
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const res = await fetch(`https://.../posts/${params.id}`)
  const post = await res.json()

  // Pass post data to the page via props
  return { props: { post } }
}
```

**getServerSideProps - fetch on every request**

- fetch data + return as { props: { data }}

- consume / render in Page

  

```jsx
export default function Page({ data }) {
  // Render data...
}

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://.../data`)
  const data = await res.json()

  // Pass data to the page via props
  return { props: { data } }
}
```

 **What is the context parameter?** 

An object containing various keys

- params - if using a dyanamic route, params contains the route parameters.  if page name is [id].js, then prams will look like { id: ... }
- Req = http incoming object + cookies prop
- res = http response object

What is returned? An object that contains: 

- props - a serialized object as a value received by page
- notFound - boolean value ~ show a 404? 
- Redirect - 
  - destination: '/'
  - Permanent: false