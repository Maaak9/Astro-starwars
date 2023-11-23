import { e as createAstro, f as createComponent, r as renderTemplate, i as renderComponent, m as maybeRenderHead } from '../astro_a9bcd579.mjs';
import 'html-escaper';
import 'clsx';
import { B as Box, T as Typography, $ as $$Layout } from './_movieId__c0907cb4.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';

const Movies = ({
  moviesData,
  url
}) => {
  const { films } = moviesData.data.allFilms;
  return /* @__PURE__ */ jsx(Box, { display: "grid", gap: 4, mt: 5, gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", children: films.map((film, index) => /* @__PURE__ */ jsx("a", { href: `${url}${film.id}`, style: { color: "inherit" }, children: /* @__PURE__ */ jsxs(Box, { p: 2, borderRadius: 4, sx: { backgroundColor: "#f5f5f5" }, children: [
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

const $$Astro = createAstro();
const prerender = false;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
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
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Welcome to Astro." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> ${renderComponent($$result2, "Typography", Typography, { "variant": "h4", "my": 4 }, { "default": ($$result3) => renderTemplate`SSR` })} ${renderComponent($$result2, "Typography", Typography, { "variant": "body2", "my": 4 }, { "default": ($$result3) => renderTemplate`${`Build was done: ${ new Date()}`}` })} ${renderComponent($$result2, "Movies", Movies, { "moviesData": movies, "url": "/ssr-movies/" })} </main> ` })}`;
}, "/Users/marcus.karrman/projects/astro-demo/astro-starwars/src/pages/ssr-movies/index.astro", void 0);

const $$file = "/Users/marcus.karrman/projects/astro-demo/astro-starwars/src/pages/ssr-movies/index.astro";
const $$url = "/ssr-movies";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { Movies as M, index as i };
