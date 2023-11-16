import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import 'string-width';
import 'mime';
import 'html-escaper';
import 'clsx';
import './chunks/astro_a9bcd579.mjs';
import { compile } from 'path-to-regexp';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

new TextEncoder();

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return toPath;
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    ...serializedManifest,
    assets,
    componentMetadata,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/netlify/functions","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/ssr-movies","type":"page","pattern":"^\\/ssr-movies\\/?$","segments":[[{"content":"ssr-movies","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/ssr-movies/index.astro","pathname":"/ssr-movies","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/movies","type":"page","pattern":"^\\/movies\\/?$","segments":[[{"content":"movies","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/movies/index.astro","pathname":"/movies","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/movies/[movieid]","type":"page","pattern":"^\\/movies\\/([^/]+?)\\/?$","segments":[[{"content":"movies","dynamic":false,"spread":false}],[{"content":"movieId","dynamic":true,"spread":false}]],"params":["movieId"],"component":"src/pages/movies/[movieId].astro","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/404","type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404/index.astro","pathname":"/404","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":"button.svelte-hl4khn{padding:12px 25px;background:rgb(10,83,83);color:#fff}button[data-v-df4d803a]{font-weight:700}\nbutton.svelte-hl4khn{padding:12px 25px;background:rgb(10,83,83);color:#fff}button[data-v-df4d803a]{font-weight:700}\n"}],"routeData":{"route":"/mix","type":"page","pattern":"^\\/mix\\/?$","segments":[[{"content":"mix","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/mix/index.astro","pathname":"/mix","prerender":false,"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/marcus.karrman/projects/astro-demo/astro-starwars/src/pages/404/index.astro",{"propagation":"none","containsHead":true}],["/Users/marcus.karrman/projects/astro-demo/astro-starwars/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/Users/marcus.karrman/projects/astro-demo/astro-starwars/src/pages/mix/index.astro",{"propagation":"none","containsHead":true}],["/Users/marcus.karrman/projects/astro-demo/astro-starwars/src/pages/movies/[movieId].astro",{"propagation":"none","containsHead":true}],["/Users/marcus.karrman/projects/astro-demo/astro-starwars/src/pages/movies/index.astro",{"propagation":"none","containsHead":true}],["/Users/marcus.karrman/projects/astro-demo/astro-starwars/src/pages/ssr-movies/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var r=(i,c,s)=>{let n=async()=>{await(await i())()},t=new IntersectionObserver(e=>{for(let o of e)if(o.isIntersecting){t.disconnect(),n();break}});for(let e of s.children)t.observe(e)};(self.Astro||(self.Astro={})).visible=r;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000empty-middleware":"_empty-middleware.mjs","/node_modules/astro/dist/assets/endpoint/generic.js":"chunks/pages/generic_0a448a25.mjs","\u0000@astrojs-manifest":"manifest_114c28a1.mjs","/Users/marcus.karrman/projects/astro-demo/astro-starwars/node_modules/@astrojs/react/vnode-children.js":"chunks/vnode-children_fe124244.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_a4ee1c77.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_70ecc74f.mjs","\u0000@astro-page:src/pages/ssr-movies/index@_@astro":"chunks/index_d5aeabe9.mjs","\u0000@astro-page:src/pages/movies/index@_@astro":"chunks/index_08fa64cb.mjs","\u0000@astro-page:src/pages/movies/[movieId]@_@astro":"chunks/_movieId__e40ade26.mjs","\u0000@astro-page:src/pages/404/index@_@astro":"chunks/index_265441c7.mjs","\u0000@astro-page:src/pages/mix/index@_@astro":"chunks/index_691913bf.mjs","/Users/marcus.karrman/projects/astro-demo/astro-starwars/src/components/content/split-image/index":"_astro/index.3b3db16f.js","/Users/marcus.karrman/projects/astro-demo/astro-starwars/src/components/content/expensive-component/index":"_astro/index.0f8fd595.js","/Users/marcus.karrman/projects/astro-demo/astro-starwars/src/react/button/index":"_astro/index.65cc104c.js","/Users/marcus.karrman/projects/astro-demo/astro-starwars/src/vue/button/index.vue":"_astro/index.e57faee9.js","/Users/marcus.karrman/projects/astro-demo/astro-starwars/src/svelte/button/index.svelte":"_astro/index.d460cb3b.js","@astrojs/svelte/client.js":"_astro/client.ef651e53.js","/Users/marcus.karrman/projects/astro-demo/astro-starwars/src/components/header/index":"_astro/index.75db1c5c.js","@astrojs/vue/client.js":"_astro/client.aa2c8c69.js","@astrojs/react/client.js":"_astro/client.9931136a.js","astro:scripts/before-hydration.js":""},"assets":["/favicon.svg","/_astro/Box.898e3887.js","/_astro/Button.87ff715f.js","/_astro/ButtonBase.756fd693.js","/_astro/client.9931136a.js","/_astro/client.aa2c8c69.js","/_astro/client.ef651e53.js","/_astro/index.0f8fd595.js","/_astro/index.14bc46a9.js","/_astro/index.3b3db16f.js","/_astro/index.65cc104c.js","/_astro/index.75db1c5c.js","/_astro/index.d460cb3b.js","/_astro/index.e57faee9.js","/_astro/runtime-core.esm-bundler.05bbb762.js","/_astro/useThemeProps.3b2ed966.js","/images/img1.jpeg","/images/avatars/luke.jpeg","/images/avatars/yoda.jpeg"]});

export { manifest };
