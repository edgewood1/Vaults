# Static generation


Pre-generate page during build time. 
- data prepped on the server side

Pages are prepared ahead of time and then cached by the server / CDN serving the app. 

How to tell next.js to do this? 

Export async function GetStaticProps(context) {}
- run server-side code
- Code not sent back to the client
- Db credentials - fine here. 

next.js prerenders all pages that don’t have data (by default)!

Get static props tells next to pre-render, but it calls this first.  With react, we use useEffect to load data. 

Don’t want to load json via the client, but pre-load it - so it is pre-render it with page.  Load it in getStaticProps, which prepares the props for your component function, which runs as a second step. 

Import fs from ‘fs’ // a node js module.
Import path from ‘path’
Fails on client side. 

Export async function getStaticProps() {
// can use node, like fs, here. 
Const filePath = ‘
Await Fs.readFile(
Return { props: {
	Products: [{id: 1}]
}}

Function Homepage({products}) {
Return(<div>  products.map(prod=>
.. this will be part 


Npm run build 

Creates production build

Generates x static pages

Lambda (Server)- server side renders at runtime (getInitialProps or getServerSideProps)
Empty dot (Static)- auto rendered as static html using no initial props (404) 
Filled dot (SSG)- auto generated as static html / json using getStaticProp
Nothing (ISR) - incremental static regeneration (uses revalidare in getStaticProps)

.next folder shows the output 
Server/pages shows the pre-regenerated html files
404.html
Index.html

Npm start - starts the production ready made

GetStaticProps - use to prep data on server side for pre-rendering the page.  On teh server side is note the actual server, it runs on our page during the build stage.  When you run npm run build  then code is executed.  But downside.  What if you have data that changes frequently? Previous is great for a blog, where blog doesn’t change often. If we add a fourth product after the page is deployed, then we have to rebuild and redeploy the page for each change.  To handle that case, see number 2


GetStaticProps - prebuilt, but then use useEffect() for fetching updated stuff from server.  Serve with pre-rendered data, so you fetch the latest data and update the loaded page after it arrives.  This function executes on build time, but there’s another that does this plus updated after deployment: incremental static generation - if request made for page, and its more than 60 sec than last regenerated, then page pre-generated on the server.  This would be the new page vs the old.  The new page will replace the old, and new page cached. To do this, you return a reválida te key: 

Revalidate: time in seconds it should wait
Revalidate: 10

2 - 
Buildtime
Runtime

GetStaticProps(context) - this function receives an object that contains extra info about this page. 
- Dynamic Paramus . Path segments
- Const { Params} = context // keys are identifiers 
- Const productID = params.pid 
- We could do this via useRouter hook, but that’s done in the component, we are only working in the browser.  If we use GetStaticProps, it occurs on the server, before the component runs.  

Other return keys besides Revalidate - 
- notFound: true // returns a 404.  We old return {notFound: true} if there is no data instead of { props: etc}
- Redirect: if xyz return {redirect: { destination: ‘/no-data’}} - thus instead of files html, it returns another page.

We don’t use useEffect, because that is a client request, which search engines would not see. 

GetStaticProps is an alternative to useEffect.

Here, we can grab data, run through it, and return props for the page’s component.

Next js pregenerates pages. 
But if you have a dynamic page, then this doesn’t occur.
It doesn’t know what PID will be.  
Thus dynamic pages will break if you put getStaticProps. 
It needs more info. 
We need to tell it which paths should be pregenerated.  Which id values should be available. 
We use: export async getStaticPaths. 

Export async function getStaticPaths() {
- goal: tell next which instances of the dynamic page should be generated.  Below, only /p1 and /p2 are allowed. 
- Return {
- Paths: [{ params:  {pid: ‘p1’ }}, {params: {pid: ‘p2’}}] 
- Fallback: false // if you have a hundreds of pages requiring pre-generation, which would take a long time.  True means even pages not listed in paths can be valid, they are just not pre generated, but generated on request.  This requires that we return a fallback state, like: 
- { loadedProduct } = props
- If (!loadedProduct} { return <p> Loading </p>}.
- Fallback: ‘blocking’ > it will wait for loaded page to render… may take a moment. 

Npm run build

It will pregenerate 2 pages
[pid]
/p1.html
/p1.json
/p2.html
/p2.json

- P1.html will request p1.json 
- See network tab

GetStaticProps & getStaticPaths are used in the same file.  One gets props, the other gets paths.  

We can also create async function getData() {
And move the data-getter in GetStaticProps there.  Then we call the data-getter in staticpaths.  We could use that data to map a params objects. 
We call this data-getter in staticprops as well. 

Fallback: true - we don’t have to pre-define all possible paths.  But if you switch ego true, then loadedProduct.title doesn’t exist.  Create if no props then render misc.  If data id product not found in staticPaths, then we should return { notFound: true }

If props/paths not found… 
We use notFoudn: true in staticprops and fallback: true in paths. 

Dynamic pages you need both.

Statically pre-generated pages - static generation
- here we don’t have access to actual request
- The actual request reaching the server. 
Vs
GetxServerSideProps…
- every incoming request we pre-render and we need acces to request to extract cookies, this si “real” server side rendering.  
- Not only during buildtime only.  
- Runs at a different point of time than sg. 
- Has same keys as staticprops, except for revalidate. 
- This runs on the server after deployment - its not statically pregenerated
- This has implications: 
- In the context, where we have access to params but also full request object, and the respond we send back. 
- Params
- Request - see headers and cookies attached. 
- Response
- For timing: 

Using it with a dynamic page. 
- don’t need to identify pid / path 
- Because there is no pregeneration
- We run the code for every request. 
- Lambda is not pregenerated, but will be pre-rendered on server only.  

Client-side data fetching 
- opposite of server-side
- Data that can’t or 
- Data that changes constantly (stock data) every couple seconds… prefetching doesn’t make sense because it will always be outdated.   Spinner then 
- Highly user specific data - last order in online shop -
- Partial data - data that only used on a part of a page. 
- Here, prefetching / generating won’t work
- Instead, useEffect / fetch . 
- Data used by this page will not appear on the source code.  It will pre-render the first basic render - “no data yet”.  

UseSWR

- must add a default “fetcher”
UseSWR(<request-url>, (url) => fetch(url).then(res => res.json())

Clientside fetching

But you can create a third party hook to do this. 

Sends http request - but gives you a nice feature. 
You can use 
Stale-while-revalidate 

Yarn add swr 

Import UseSWR from ‘swr’;
Arg: identifier - url of request 
-bundles a request.
Const { data, error } = UseSWR(http://xyz.com);
Returns an object - data, error

UseEffect(() => {
If (data) transform it & setSales(transform)
}, [data]}

If (!data) we’re loading
If (err) we failed to load. 
If (data & !err) 

Will UseSWR fetch each time? No
If data 

Combine pre-fetching with client-side fetching. 

- fetch data on client 
- Pre-fetch as well. 

Export async function getStaticProps() {
- fetch same data as client
- Can’t use UseSWR or any hook
- Return { props: { sales: transformsSales}, revalidate: 10 } - deploys every 10 sec after deployment?

In the component - what do we do with the props? 
Use as initial sate 
Then useEffect makes the UseSWR call.
They are overwritten by the client side UseSWR call. 

If !data && ! Sales loading (we will have sales because pre-rendered. 






