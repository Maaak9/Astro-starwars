import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_c4d991dc.mjs';

const _page0  = () => import('./chunks/generic_812f15d9.mjs');
const _page1  = () => import('./chunks/index_0abb1d09.mjs');
const _page2  = () => import('./chunks/index_3a3ed88e.mjs');
const _page3  = () => import('./chunks/index_6f27b42c.mjs');
const _page4  = () => import('./chunks/_movieId__a54effe2.mjs');
const _page5  = () => import('./chunks/index_043e3044.mjs');
const _page6  = () => import('./chunks/index_a1d8e05e.mjs');const pageMap = new Map([["node_modules/astro/dist/assets/endpoint/generic.js", _page0],["src/pages/index.astro", _page1],["src/pages/ssr-movies/index.astro", _page2],["src/pages/movies/index.astro", _page3],["src/pages/movies/[movieId].astro", _page4],["src/pages/404/index.astro", _page5],["src/pages/mix/index.astro", _page6]]);
const _manifest = Object.assign(manifest, {
	pageMap,
	renderers,
});
const _args = {"builders":true};

const _exports = adapter.createExports(_manifest, _args);
const handler = _exports['handler'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { handler, pageMap };
