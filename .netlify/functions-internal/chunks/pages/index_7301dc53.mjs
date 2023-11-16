import { e as createAstro, f as createComponent, r as renderTemplate, i as renderComponent, m as maybeRenderHead, g as addAttribute } from '../astro_a9bcd579.mjs';
import 'html-escaper';
import 'clsx';
import { B as Box, T as Typography, a as Button$1, S as Skeleton, $ as $$Layout } from './_movieId__58dc6886.mjs';
import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
/* empty css                           */import { ref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate } from 'vue/server-renderer';

const SplitImage = ({
  imagePosition = "left"
}) => {
  const loremIpsum = `A long time ago in a galaxy far, far away... 
  It is a period of civil war. Rebel spaceships, striking from a hidden base, have won their first victory against the evil Galactic Empire. 
  During the battle, Rebel spies managed to steal secret plans to the Empire's ultimate weapon, the Death Star, an armored space station with enough power to destroy an entire planet. 
  Pursued by the Empire's sinister agents, Princess Leia races home aboard her starship, custodian of the stolen plans that can save her people and restore freedom to the galaxy...
  `;
  const ImageContainer = () => /* @__PURE__ */ jsx(Box, { children: /* @__PURE__ */ jsx(
    "img",
    {
      src: `https://source.unsplash.com/random/560x378/?star wars${Math.floor(Math.random() * 10)}}`,
      alt: "Your Image",
      style: {
        objectFit: "cover",
        width: "100%",
        height: "100%",
        aspectRatio: 3 / 2
      }
    }
  ) });
  return /* @__PURE__ */ jsxs(Box, { display: "grid", my: 10, gap: 4, gridTemplateColumns: "1fr 1fr", children: [
    imagePosition === "left" && /* @__PURE__ */ jsx(ImageContainer, {}),
    /* @__PURE__ */ jsxs(
      Box,
      {
        sx: { display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" },
        children: [
          /* @__PURE__ */ jsx(Typography, { variant: "body1", sx: { marginBottom: 2 }, children: loremIpsum }),
          /* @__PURE__ */ jsxs(Box, { sx: { marginTop: 2 }, children: [
            /* @__PURE__ */ jsx(Button$1, { variant: "contained", color: "primary", children: "Button 1" }),
            /* @__PURE__ */ jsx(Button$1, { variant: "contained", color: "secondary", sx: { marginLeft: 1 }, children: "Button 2" })
          ] })
        ]
      }
    ),
    imagePosition === "right" && /* @__PURE__ */ jsx(ImageContainer, {})
  ] });
};

const ExpensiveComponent = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    console.log("Started loading");
    window.setTimeout(() => {
      console.log("finished loading");
      setIsLoading(false);
    }, 2500);
  }, []);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    isLoading && /* @__PURE__ */ jsx(Skeleton, { variant: "rectangular", width: "100%", height: "500px" }),
    !isLoading && /* @__PURE__ */ jsx(
      Box,
      {
        sx: { height: "500px", backgroundColor: "aquamarine" },
        justifyContent: "center",
        display: "flex",
        alignItems: "center",
        children: /* @__PURE__ */ jsx(Typography, { variant: "h2", children: "FinishedLoading" })
      }
    )
  ] });
};

const $$Astro$4 = createAstro();
const $$Index$4 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Index$4;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Welcome to Astro." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> <!-- This component's JS will begin importing when the page loads --> ${renderComponent($$result2, "SplitImage", SplitImage, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/marcus.karrman/projects/astro-demo/astro-starwars/src/components/content/split-image/index", "client:component-export": "default" })} <!-- This component won't render on the server, but will render on the
		client when the page loads --> ${renderComponent($$result2, "SplitImage", SplitImage, { "imagePosition": "right" })} <!-- Didnt work for some reason? --> <!-- <OnlyMobile client:media='(max-width: 760px)'/> --> <!-- This component won't render on the server, but will render on the
		client when the page loads --> ${renderComponent($$result2, "SplitImage", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "/Users/marcus.karrman/projects/astro-demo/astro-starwars/src/components/content/split-image/index", "client:component-export": "default" })} <!-- This component's JS will not be sent to the client until
		the user scrolls down and the component is visible on the page --> ${renderComponent($$result2, "ExpensiveComponent", ExpensiveComponent, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/Users/marcus.karrman/projects/astro-demo/astro-starwars/src/components/content/expensive-component/index", "client:component-export": "default" })} ${renderComponent($$result2, "SplitImage", SplitImage, {})} ${renderComponent($$result2, "ExpensiveComponent", ExpensiveComponent, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/Users/marcus.karrman/projects/astro-demo/astro-starwars/src/components/content/expensive-component/index", "client:component-export": "default" })} ${renderComponent($$result2, "SplitImage", SplitImage, {})} ${renderComponent($$result2, "ExpensiveComponent", ExpensiveComponent, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/Users/marcus.karrman/projects/astro-demo/astro-starwars/src/components/content/expensive-component/index", "client:component-export": "default" })} </main> ` })}`;
}, "/Users/marcus.karrman/projects/astro-demo/astro-starwars/src/pages/index.astro", void 0);

const $$file$4 = "/Users/marcus.karrman/projects/astro-demo/astro-starwars/src/pages/index.astro";
const $$url$4 = "";

const index$4 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$4,
  file: $$file$4,
  url: $$url$4
}, Symbol.toStringTag, { value: 'Module' }));

const Movies = ({
  moviesData
}) => {
  const { films } = moviesData.data.allFilms;
  return /* @__PURE__ */ jsx(Box, { display: "grid", gap: 4, mt: 5, gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", children: films.map((film, index) => /* @__PURE__ */ jsx("a", { href: `/movies/${film.id}`, style: { color: "inherit" }, children: /* @__PURE__ */ jsxs(Box, { p: 2, borderRadius: 4, sx: { backgroundColor: "#f5f5f5" }, children: [
    /* @__PURE__ */ jsx(
      "img",
      {
        src: `https://source.unsplash.com/random/250x250/?star wars${Math.random()}}`,
        style: {
          objectFit: "cover",
          width: "100%",
          aspectRatio: 1,
          borderRadius: "16px"
        }
      }
    ),
    /* @__PURE__ */ jsx(Typography, { mt: 2, children: film.title }),
    /* @__PURE__ */ jsx(Typography, { children: film.releaseDate })
  ] }) }, film.id)) });
};

const $$Astro$3 = createAstro();
const $$Index$3 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Index$3;
  console.log("2222", Astro2.locals);
  {
    Astro2.locals.runtime.setBuildersTtl(120);
  }
  const data = await fetch("https://swapi-graphql.netlify.app/.netlify/functions/index", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      query: `
      query Query {
        allFilms {
          films {
            id
            title
            director
            releaseDate
            speciesConnection {
              species {
                name
                classification
                homeworld {
                  name
                }
              }
            }
            producers
            episodeID
            edited
            created
          }
          totalCount
        }
      }
    `
    })
  });
  const movies = await data.json();
  if (movies.errors) {
    return Astro2.redirect("/404");
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Welcome to Astro." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> ${renderComponent($$result2, "Typography", Typography, { "variant": "h4", "my": 4 }, { "default": ($$result3) => renderTemplate`SSR` })} ${renderComponent($$result2, "Typography", Typography, { "variant": "body2", "my": 4 }, { "default": ($$result3) => renderTemplate`${`Build was done: ${ new Date()}`}` })} ${renderComponent($$result2, "Movies", Movies, { "moviesData": movies })} </main> ` })}`;
}, "/Users/marcus.karrman/projects/astro-demo/astro-starwars/src/pages/ssr-movies/index.astro", void 0);

const $$file$3 = "/Users/marcus.karrman/projects/astro-demo/astro-starwars/src/pages/ssr-movies/index.astro";
const $$url$3 = "/ssr-movies";

const index$3 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$3,
  file: $$file$3,
  url: $$url$3
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$2 = createAstro();
const $$Index$2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Index$2;
  const data = await fetch("https://swapi-graphql.netlify.app/.netlify/functions/index", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      query: `
      query Query {
        allFilms {
          films {
            id
            title
            director
            releaseDate
            speciesConnection {
              species {
                name
                classification
                homeworld {
                  name
                }
              }
            }
            producers
            episodeID
            edited
            created
          }
          totalCount
        }
      }
    `
    })
  });
  console.log("data", data);
  const movies = await data.json();
  if (movies.errors) {
    return Astro2.redirect("/404");
  }
  console.log("the movies", movies);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Welcome to Astro." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> ${renderComponent($$result2, "Typography", Typography, { "variant": "h4", "my": 4 }, { "default": ($$result3) => renderTemplate`SSG` })} ${renderComponent($$result2, "Movies", Movies, { "moviesData": movies })} </main> ` })}`;
}, "/Users/marcus.karrman/projects/astro-demo/astro-starwars/src/pages/movies/index.astro", void 0);

const $$file$2 = "/Users/marcus.karrman/projects/astro-demo/astro-starwars/src/pages/movies/index.astro";
const $$url$2 = "/movies";

const index$2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$2,
  file: $$file$2,
  url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$1 = createAstro();
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Index$1;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Welcome to Astro." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> ${renderComponent($$result2, "Box", Box, { "textAlign": "center", "my": 20 }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Typography", Typography, { "variant": "h2" }, { "default": ($$result4) => renderTemplate`
404 not found
` })} ` })} </main> ` })}`;
}, "/Users/marcus.karrman/projects/astro-demo/astro-starwars/src/pages/404/index.astro", void 0);

const $$file$1 = "/Users/marcus.karrman/projects/astro-demo/astro-starwars/src/pages/404/index.astro";
const $$url$1 = "/404";

const index$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$1,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const ReactButton = () => {
  const [counter, setCounter] = useState(0);
  return /* @__PURE__ */ jsx(Button$1, { variant: "contained", onClick: () => setCounter(counter + 1), children: `React Button: ${counter}` });
};

/** @returns {void} */

function run(fn) {
	return fn();
}

function blank_object() {
	return Object.create(null);
}

/**
 * @param {Function[]} fns
 * @returns {void}
 */
function run_all(fns) {
	fns.forEach(run);
}

let current_component;

/** @returns {void} */
function set_current_component(component) {
	current_component = component;
}

const ATTR_REGEX = /[&"]/g;
const CONTENT_REGEX = /[&<]/g;

/**
 * Note: this method is performance sensitive and has been optimized
 * https://github.com/sveltejs/svelte/pull/5701
 * @param {unknown} value
 * @returns {string}
 */
function escape(value, is_attr = false) {
	const str = String(value);
	const pattern = is_attr ? ATTR_REGEX : CONTENT_REGEX;
	pattern.lastIndex = 0;
	let escaped = '';
	let last = 0;
	while (pattern.test(str)) {
		const i = pattern.lastIndex - 1;
		const ch = str[i];
		escaped += str.substring(last, i) + (ch === '&' ? '&amp;' : ch === '"' ? '&quot;' : '&lt;');
		last = i + 1;
	}
	return escaped + str.substring(last);
}

let on_destroy;

/** @returns {{ render: (props?: {}, { $$slots, context }?: { $$slots?: {}; context?: Map<any, any>; }) => { html: any; css: { code: string; map: any; }; head: string; }; $$render: (result: any, props: any, bindings: any, slots: any, context: any) => any; }} */
function create_ssr_component(fn) {
	function $$render(result, props, bindings, slots, context) {
		const parent_component = current_component;
		const $$ = {
			on_destroy,
			context: new Map(context || (parent_component ? parent_component.$$.context : [])),
			// these will be immediately discarded
			on_mount: [],
			before_update: [],
			after_update: [],
			callbacks: blank_object()
		};
		set_current_component({ $$ });
		const html = fn(result, props, bindings, slots);
		set_current_component(parent_component);
		return html;
	}
	return {
		render: (props = {}, { $$slots = {}, context = new Map() } = {}) => {
			on_destroy = [];
			const result = { title: '', head: '', css: new Set() };
			const html = $$render(result, props, {}, $$slots, context);
			run_all(on_destroy);
			return {
				html,
				css: {
					code: Array.from(result.css)
						.map((css) => css.code)
						.join('\n'),
					map: null // TODO
				},
				head: result.title + result.head
			};
		},
		$$render
	};
}

/* src/svelte/button/index.svelte generated by Svelte v4.2.3 */

const css = {
	code: "button.svelte-hl4khn{padding:12px 25px;background:rgb(10, 83, 83);color:white}",
	map: null
};

let buttonText = 'Svelte Button';

const Button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let count = 0;

	$$result.css.add(css);
	return `<button class="svelte-hl4khn">${escape(`${buttonText}: ${count}`)}</button>`;
});

const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};

const _sfc_main = {
  __name: 'index',
  setup(__props, { expose: __expose }) {
  __expose();

const count = ref(0);

const __returned__ = { count, ref };
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
return __returned__
}

};

function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<button${
    ssrRenderAttrs(_attrs)
  } data-v-df4d803a>Vue button: ${
    ssrInterpolate($setup.count)
  }</button>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("src/vue/button/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
};
const VueButton = /*#__PURE__*/_export_sfc(_sfc_main, [['ssrRender',_sfc_ssrRender],['__scopeId',"data-v-df4d803a"]]);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Welcome to Astro." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> ${renderComponent($$result2, "Box", Box, { "my": 10, "display": "flex", "justifyContent": "center" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Box", Box, { "sx": { height: "300px", width: "300px" } }, { "default": ($$result4) => renderTemplate` <img src="/images/avatars/luke.jpeg" alt="Your Image"${addAttribute({
    objectFit: "cover",
    width: "100%",
    height: "100%",
    aspectRatio: 3 / 2
  }, "style")}> ` })} ` })} ${renderComponent($$result2, "Typography", Typography, { "variant": "h2", "mt": 10 }, { "default": ($$result3) => renderTemplate`Without hydration` })} ${renderComponent($$result2, "Box", Box, { "display": "flex", "gap": 4, "my": 10 }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "ReactButton", ReactButton, {})} ${renderComponent($$result3, "SvelteButton", Button, {})} ${renderComponent($$result3, "VueButton", VueButton, {})} ` })} ${renderComponent($$result2, "Typography", Typography, { "variant": "h2" }, { "default": ($$result3) => renderTemplate`With hydration` })} ${renderComponent($$result2, "Box", Box, { "display": "flex", "gap": 4, "mt": 10 }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "ReactButton", ReactButton, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/marcus.karrman/projects/astro-demo/astro-starwars/src/react/button/index", "client:component-export": "default" })} ${renderComponent($$result3, "SvelteButton", Button, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/marcus.karrman/projects/astro-demo/astro-starwars/src/svelte/button/index.svelte", "client:component-export": "default" })} ${renderComponent($$result3, "VueButton", VueButton, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/marcus.karrman/projects/astro-demo/astro-starwars/src/vue/button/index.vue", "client:component-export": "default" })} ` })} ${renderComponent($$result2, "Typography", Typography, { "variant": "h2", "mt": 10 }, { "default": ($$result3) => renderTemplate`Client only` })} ${renderComponent($$result2, "Box", Box, { "display": "flex", "gap": 4, "mt": 10 }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "ReactButton", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "/Users/marcus.karrman/projects/astro-demo/astro-starwars/src/react/button/index", "client:component-export": "default" })} ${renderComponent($$result3, "SvelteButton", null, { "client:only": "svelte", "client:component-hydration": "only", "client:component-path": "/Users/marcus.karrman/projects/astro-demo/astro-starwars/src/svelte/button/index.svelte", "client:component-export": "default" })} ${renderComponent($$result3, "VueButton", null, { "client:only": "vue", "client:component-hydration": "only", "client:component-path": "/Users/marcus.karrman/projects/astro-demo/astro-starwars/src/vue/button/index.vue", "client:component-export": "default" })} ` })} </main> ` })}`;
}, "/Users/marcus.karrman/projects/astro-demo/astro-starwars/src/pages/mix/index.astro", void 0);

const $$file = "/Users/marcus.karrman/projects/astro-demo/astro-starwars/src/pages/mix/index.astro";
const $$url = "/mix";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { index$3 as a, index$2 as b, index$1 as c, index as d, index$4 as i };
