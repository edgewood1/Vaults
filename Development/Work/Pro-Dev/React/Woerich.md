# Woerich


Navigate website
* enter URL
* Request made to remote server
* If match, an HTML or JSON file returned using HTTP.

Web server returns HTML
App server returns HTML or JSON and can work with HTTP or some other protocol.  It can do server-side work. 


Traditional website
* A URL change > a HTTP/path request. 
* Server responds to request: this is server-side routing.  Server decides which resource is sent

Other files 
* HTML can have css request.
* When one resource elicits other requests: waterfall requests - one request has t wait for another to finish. Browser doesn’t know it needs css until the html arrives. CSS might request a jpg file. 
* If several requests are in one file, they will be requested and resolved in parallel. 

Server-side rendering
* if a page has dynamic data, and this data is stored on a database, and the server interpolates HTML and dynamic data before its sent to the client.  This user generated content can be served.  This is beyond static content since it contains dynamic content. 
Prior to single-page apps
* browser requests HTML file, which elicits waterfall requests
* If user navigates to a new page within same domain, there are new requests to server for each
SPA (client-side rendering)
* browser requests only one HTML file with one Linked JS file for a domain
* The js file runs and programmatically creates DOM elements on the HTML page. 
* To move between  paths (pages), client-side routing is used.  
* Does moving from path to path requiring calling the server? 

Code splitting (also called lazy loading? In React/rouat router?)
* Serve only a fraction of the applicate that is needed for the current page.  
* When navigating to the next page, another request is made to request the fraction for this page.  
* thus a code splitting spa, every navigation leads to a new requested JS file. 
* Code splitting doesn’t need to happen on route level. 
Caching
* When it does,and a user revisits an old page, the same js is downloaded - redundant requests. 
* Thus browser must cache.  
* If we add a new feature to the revisited page, we won’t see it if we’re using the cache.  To respond, each new build of an app checks whether teh bundled code has changed.  If it has, the file name gets a new appended timestamp hash.  
* Browser has certain files cached, it gets a new build, this new build will assume a new file name, and request this, which won’t be in the cache.  

Tree shaking
* this eliminates dead /unused code so that it is not packaged in the final bundle.  Bundles include: webpack, roll up, esbuild, (older: gulp/grunt).

full stack apps.
