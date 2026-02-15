# __terms__




**URL, Domain, and Path:**
* URL: The complete web address (e.g., <u>[http://osmosis.org/dashboard/about](http://osmosis.org/dashboard/about)</u>)
* Domain: The main part of the address (e.g., osmosis.org)
* Path: The location of a specific resource on the server (e.g., dashboard/about)
* Path Segments: Parts of the path separated by slashes (e.g., 'about', 'index')
**Express.js URL Parsing:**
* req.url: Accesses the full path of the URL. Example: If we use a static route in our api (dashboard/about) then we would req.url.split(‘/‘), which would give us an array of all the path segments.
* req.params: Extracts <u>dynamic segments</u> from the path using route parameters.  Example if our api uses app.get(‘/:category/:section’, (req, res) .. we could check req.params.category
* req.query: Parses query parameters from the URL (key-value pairs after the '?' sign).
**Dynamic parameters**

app.get('/dashboard/:section', (req, res) => {
 const section = req.params.section; // Access the dynamic part of the path
 res.send(`You are in the ${section} section.`);
});


Query Parameters:

"/dashboard/about?param1=value1&param2=value2"

app.get('/dashboard', (req, res) => {
 const { param1, param2 } = req.query; // Access query parameters
 res.send(`Query parameters: param1=${param1}, param2=${param2}`);
});

In this example, if the URL is "/dashboard?param1=value1&param2=value2," req.query would be { param1: 'value1', param2: 'value2' }.


**__Routing__**

**Routing in Next.js:**
* **Static Routes:** Map files in the pages directory to URLs (e.g., pages/about.js -> /about)
* **Dynamic Routes:** Use [] in filenames to create dynamic segments (e.g., pages/about/[portfolio].js -> /about/4)
* **Nested Dynamic Routes:** Allow multiple dynamic segments in a URL (e.g., /clients/[id]/[proj].js -> /clients/5/art)
* **Catch-all Routes:** Use [...slug] to capture all remaining segments of a URL (e.g., /blog/[...date].js -> /blog/2022/12/2)
**Navigation:**
* **Link Component:** Use the Link component from next/link for client-side navigation, prefetching, and better performance.
* **router.push:** Programmatically navigate to different pages using the useRouter hook.
**Custom 404 Page:**
* Create a pages/404.js file to customize the 404 error page.
withRouter - classbased wrapper
import { useRouter } from 'next/router';
const router = useRouter();
router.pathname > about[ver] // encoded path
router.query >  {ver: '4'}  // evaluated path
router.query.ver > 4



button: programatic navigation

function loadHandler() {
 // go to another page
 router.push('/clients/max/projectA
 router.replace(')) // we can't go bakc
 router.push({
   pathname: '/clients/[id]/[clientid],
   query: {id: 'max', clientid: 'hi'}
 })

}

<button onClick={loadHandler}>

custom 404


