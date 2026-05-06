import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-DJQhSVNb.js";import{t as n}from"./jsx-runtime-DI1hhrx8.js";import{n as r,o as i,s as a}from"./blocks-CVtOp2Zl.js";import{t as o}from"./mdx-react-shim-Bve0gygW.js";import{Default as s,TuneBlur as c,TuneTint as l,n as u,t as d}from"./Frosted.stories-CHSnqPJQ.js";function f(e){let n={code:`code`,em:`em`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(i,{of:d}),`
`,(0,m.jsx)(n.h1,{id:`frosted`,children:`Frosted`}),`
`,(0,m.jsx)(n.p,{children:`The portfolio's signature glass material — translucent white tint over a backdrop blur and saturate. Used 8+ times across MomentumTabs, FeaturedImageSlider dots/arrows, and project cards.`}),`
`,(0,m.jsx)(n.h2,{id:`when-to-use`,children:`When to use`}),`
`,(0,m.jsxs)(n.ul,{children:[`
`,(0,m.jsx)(n.li,{children:`Floating UI surfaces (dropdowns, popovers, dot indicators) over rich/photographic backgrounds.`}),`
`,(0,m.jsxs)(n.li,{children:[`Anywhere you'd reach for `,(0,m.jsx)(n.code,{children:`backdrop-filter: blur(...)`}),` — this codifies the project's specific recipe.`]}),`
`]}),`
`,(0,m.jsx)(n.h2,{id:`api`,children:`API`}),`
`,(0,m.jsxs)(n.p,{children:[`| Variable | Default | Effect |
|---|---|---|
| `,(0,m.jsx)(n.code,{children:`--frosted-bg`}),` | `,(0,m.jsx)(n.code,{children:`rgba(255, 255, 255, 0.05)`}),` | Tint color and opacity |
| `,(0,m.jsx)(n.code,{children:`--frosted-blur`}),` | `,(0,m.jsx)(n.code,{children:`10px`}),` | Blur radius |
| `,(0,m.jsx)(n.code,{children:`--frosted-saturate`}),` | `,(0,m.jsx)(n.code,{children:`1.3`}),` | Saturation multiplier |`]}),`
`,(0,m.jsx)(n.h2,{id:`usage`,children:`Usage`}),`
`,(0,m.jsx)(n.pre,{children:(0,m.jsx)(n.code,{className:`language-jsx`,children:`<div className="frosted">
  Glass surface
</div>

{/* Stronger blur, warmer tint */}
<div
  className="frosted"
  style={{
    '--frosted-blur': '20px',
    '--frosted-bg': 'rgba(255, 200, 140, 0.08)'
  }}
>
  Stronger glass
</div>
`})}),`
`,(0,m.jsx)(n.h2,{id:`examples`,children:`Examples`}),`
`,(0,m.jsx)(r,{of:s}),`
`,(0,m.jsx)(r,{of:c}),`
`,(0,m.jsx)(r,{of:l}),`
`,(0,m.jsx)(n.h2,{id:`caveats`,children:`Caveats`}),`
`,(0,m.jsxs)(n.ul,{children:[`
`,(0,m.jsxs)(n.li,{children:[(0,m.jsx)(n.strong,{children:`Blur needs detail behind it.`}),` Backdrop-filter is most visible against high-frequency content (text, images). On a flat gradient the effect is barely perceptible — the stories deliberately layer text behind the tile so the blur has something to chew on.`]}),`
`,(0,m.jsxs)(n.li,{children:[(0,m.jsx)(n.strong,{children:`Browser support.`}),` `,(0,m.jsx)(n.code,{children:`backdrop-filter`}),` works everywhere modern but may need `,(0,m.jsx)(n.code,{children:`-webkit-backdrop-filter`}),` for older Safari (the foundation includes both prefixes). When unsupported, the element falls back to its `,(0,m.jsx)(n.code,{children:`--frosted-bg`}),` tint with no blur.`]}),`
`,(0,m.jsxs)(n.li,{children:[(0,m.jsx)(n.strong,{children:`Opaque backgrounds break it.`}),` The element's own `,(0,m.jsx)(n.code,{children:`background-color`}),` must be non-opaque, and there must be something visible `,(0,m.jsx)(n.em,{children:`behind`}),` it. A solid parent or `,(0,m.jsx)(n.code,{children:`background: white`}),` on the element itself defeats the filter.`]}),`
`]})]})}function p(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,m.jsx)(n,{...e,children:(0,m.jsx)(f,{...e})}):f(e)}var m;e((()=>{m=n(),o(),a(),u()}))();export{p as default};