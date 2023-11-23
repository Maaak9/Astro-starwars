import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_fb0fd00d.mjs';

const _page0  = () => import('./chunks/generic_a4ee1c77.mjs');
const _page1  = () => import('./chunks/index_21259419.mjs');
const _page2  = () => import('./chunks/index_aae5b5ac.mjs');
const _page3  = () => import('./chunks/_movieId__3a2811a6.mjs');
const _page4  = () => import('./chunks/index_2c275864.mjs');
const _page5  = () => import('./chunks/_movieId__72bb61de.mjs');
const _page6  = () => import('./chunks/index_21ca58fd.mjs');
const _page7  = () => import('./chunks/index_47a23ea2.mjs');const pageMap = new Map([["node_modules/astro/dist/assets/endpoint/generic.js", _page0],["src/pages/index.astro", _page1],["src/pages/ssr-movies/index.astro", _page2],["src/pages/ssr-movies/[movieId].astro", _page3],["src/pages/movies/index.astro", _page4],["src/pages/movies/[movieId].astro", _page5],["src/pages/404/index.astro", _page6],["src/pages/mix/index.astro", _page7]]);
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
