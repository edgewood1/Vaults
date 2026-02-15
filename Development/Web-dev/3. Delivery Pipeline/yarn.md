
Use the following command :

```
yarn add [package_name]
```

## Comparing npm and Yarn Commands

**Install dependencies**

```
npm install => yarn 
```

**Install a package**

```
npm install [package_name] => yarn add [package_name]
```

**Install a package globally**

```
npm install -g [package_name] => yarn global add [package_name]
```

**Install a package as a development dependency**

```
npm install --save-dev [package_name] => yarn add --dev [package_name]
```

**Uninstall a package**

```
npm uninstall [package_name] => yarn remove [package_name]
```

**Uninstall a package globally**

```
npm uninstall -g [package_name] => yarn global remove [package_name]
```

**Uninstall a development dependency package**

```
npm uninstall --save-dev [package_name] => yarn remove [package_name]
```

**Update the dependencies**

```
npm update => yarn upgrade 
```

**Update a package**

```
npm update [package_name] => yarn upgrade [package_name]
```

**Create a new package**

```
npm init => yarn init
```

**Run a script defined in the package.json**

```
npm run => yarn run
```

**Test a package**

```
npm test => yarn test
```

**Publish a package**

```
npm publish => yarn publish
```

**Remove all data from the cache**

```
npm cache clean => yarn cache clean
```



[Share](https://stackoverflow.com/a/70588930/6556994)

Edit

Follow

Flag

[edited Jan 10 at 18:18](https://stackoverflow.com/posts/70588930/revisions)

answered Jan 5 at 7:02

[![AbolfazlR's user avatar](https://i.stack.imgur.com/5oFTO.jpg?s=64&g=1)](https://stackoverflow.com/users/9606851/abolfazlr)

[AbolfazlR](https://stackoverflow.com/users/9606851/abolfazlr)

**10k**44 gold badges5454 silver badges6767 bronze badges

[Add a comment](https://stackoverflow.com/questions/40134390/what-is-the-equivalent-of-npm-install-package-name-save-in-yarn#)





44



Using --dev or -D will install one or more packages in your devDependencies.

```
yarn add <package...> [--dev/-D]
```

[Yarn add documentation](https://yarnpkg.com/en/docs/cli/add)







The yarn equivalent to`npm install <name> --save` is:

```
yarn add <name>
```

[Here's the link to the docs](https://yarnpkg.com/en/docs/migrating-from-npm#toc-cli-commands-comparison) for the full list of commands in comparison to `npm`.