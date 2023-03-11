---

# Eugene Web Devs

This is a Progressive Web App (PWA)  for Eugene Web Devs

Project based on this template using [degit](https://github.com/Rich-Harris/degit):


## Development

Install the dependencies...

```bash
cd my-svelte-pwa
npm install
```

...then start [Rollup](https://rollupjs.org):

```bash
npm run dev
```

Navigate to [localhost:5000](http://localhost:5000). You should see your app running. Edit a component file in `src`, save it, and reload the page to see your changes.

By default, the server will only respond to requests from localhost. To allow connections from other computers, edit the `sirv` commands in package.json to include the option `--host 0.0.0.0`.

## PWA Configuration

- The `service-worker.js` and `manifest.json` files are in the `public` folder.
- For an offline experience edit the `/public/offline.html` file.
- This PWA is installable. For more information on how to use check [this repo](https://github.com/pwa-builder/pwa-install).
  Note: If you don't want to make the app installable you can remove the script from the `index.html` file in the `public` folder.

For more info, this template was made following this [tutorial](https://codelabs.developers.google.com/codelabs/your-first-pwapp)

## Building and running in production mode

To create an optimised version of the app:

```bash
npm run build
```
