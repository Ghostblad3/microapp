# Proof of Concept for lazy loading repositories in a microfrontend architecture using rsbuild

## Table of Contents
- [Overview](#overview)
- [Load something non lazily](#load-something-non-lazily)
- [Caveats](#caveats)
    - [FOUC](#fouc)
    - [FOUC in local dev server](#fouc-in-local-dev-server)
    - [Solution for FOUC](#solution-for-fouc)

## Overview
Everything is lazy loaded. Each microfrontend repository exports
1. its router
2. its redux reducer
3. a variable that holds the name of the microfrontend

The router and the redux are lazy loaded. The variable is intentionally not lazy loaded because we might not want everything to be lazy loaded.

We need to first inject the reducer before we can render the microfrontend. This is done in the `then` callback of the `import` statement. We check if the microfrontend exports a reducer and if it does, we inject it using the `injectReducer` function.
```ts
const MicrofrontendA = lazy(() =>
    import('microfrontendA').then((mod) => {
        if (mod.microfrontendAReducer) {
            injectReducer('microfrontendA', mod.microfrontendAReducer);
        }

        return {
            default: mod.app ?? mod.default,
        };
    })
);
```

## Load something non lazily
To load something on website load, we can simply import it without lazy loading.

```ts
import { config as configA } from 'microfrontendA';
```

## Caveats
### FOUC
Flash of Unstyled Content (FOUC) is a common problem in web development where the user sees a brief flash of unstyled content before the CSS is fully loaded and applied to the page. This can happen when the browser starts rendering the HTML before the CSS has been downloaded and processed. The result is that users may see a momentary flash of unstyled or partially styled content, which can be jarring and negatively impact the user experience.
https://en.wikipedia.org/wiki/Flash_of_unstyled_content

Example taken from wikipedia:
![FOUC example](./recording/fouc.gif)

### FOUC in local dev server
**In local dev server** when we load a microfrontend lazily it will break the styles of the website. In the specific repository someone can easily not realize this but if someone throttles the network speed to let's say 3G, it will be evident. There is a video that shows this issue in the local dev server in [./recording](./recording/styles-problem-in-local-dev-server.mp4) folder.

### Solution for FOUC
The only solution I found for this problem until now is to use:  
`"build:watch": "pnpm rsbuild build --watch",`  
`"live": "npx live-server dist --port=3001 --entry-file=index.html",`

instead of `rsbuild dev --open`

This comes with its own caveats. It will not work well with CSS `Hot Module Reload`. For example, someone might change some styles in a component, and it will not reflect to the browser unless they add something inside the component that will cause it to be re-rendered by the HMR. Typically, a `console.log(...)` will trigger the HMR and you will be able to see the changes in the styles.

These problems with the styles appear to be only in the local dev server. In production builds there seems to be no problem with the styles. However, it should be tested more thoroughly to make sure that there are no edge cases where the styles might break in production as well.