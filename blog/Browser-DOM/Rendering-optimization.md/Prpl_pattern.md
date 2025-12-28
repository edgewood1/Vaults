PRPL


- entrypoint: index.html > imports / instantiates the shell + load polyfills + minimal static deps for shell / use absolute paths.
- shell: app.js > app logic / router, etc / main navigation UI for app / use dynamic imports to lazy-load fragments as required.if user changes routes, it imports the associated fragments, loaded from cache /
- fragments: pages listed in router

dependenices
- static - external resources using <link> <script> tags
- dynamic - demand-loaded / nneded by the shell / passed from shell to pages

purple pattern > prevent a bundle from having repeat dependencies
3 bundles using the same dependencies
repeat closed