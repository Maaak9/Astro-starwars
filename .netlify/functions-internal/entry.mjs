import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_6577ea16.mjs';

const _page0  = () => import('./chunks/generic_812f15d9.mjs');
const _page1  = () => import('./chunks/index_90c382f6.mjs');
const _page2  = () => import('./chunks/index_e6457b26.mjs');
const _page3  = () => import('./chunks/index_bcde2b79.mjs');
const _page4  = () => import('./chunks/_movieId__20a14f6c.mjs');
const _page5  = () => import('./chunks/index_39263226.mjs');
const _page6  = () => import('./chunks/index_14a46786.mjs');const pageMap = new Map([["node_modules/astro/dist/assets/endpoint/generic.js", _page0],["src/pages/index.astro", _page1],["src/pages/ssr-movies/index.astro", _page2],["src/pages/movies/index.astro", _page3],["src/pages/movies/[movieId].astro", _page4],["src/pages/404/index.astro", _page5],["src/pages/mix/index.astro", _page6]]);
const _manifest = Object.assign(manifest, {
	pageMap,
	renderers,
});
const _args = {};

const _exports = adapter.createExports(_manifest, _args);
const handler = _exports['handler'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { handler, pageMap };
