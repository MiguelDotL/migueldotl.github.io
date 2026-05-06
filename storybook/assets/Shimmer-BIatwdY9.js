import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-97Fyapm_.js";import{t as n}from"./jsx-runtime-Cn-WOgQW.js";import{n as r,o as i,s as a}from"./blocks-0hDKsNTC.js";import{t as o}from"./mdx-react-shim-BNY5XuX1.js";import{SkeletonCard as s,SpeedKnob as c,n as l,t as u}from"./Shimmer.stories-MM4Uk0nF.js";function d(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(i,{of:u}),`
`,(0,p.jsx)(n.h1,{id:`shimmer`,children:`Shimmer`}),`
`,(0,p.jsxs)(n.p,{children:[`Animated linear-gradient sweep for skeleton placeholders. Originally on Projects.css `,(0,p.jsx)(n.code,{children:`.skeleton-shimmer`}),`. Drop on any element that should look like it's loading.`]}),`
`,(0,p.jsx)(n.h2,{id:`when-to-use`,children:`When to use`}),`
`,(0,p.jsxs)(n.ul,{children:[`
`,(0,p.jsx)(n.li,{children:`Skeleton states for cards, avatars, text blocks, image placeholders.`}),`
`,(0,p.jsx)(n.li,{children:`Anywhere the alternative would be a static gray box that doesn't communicate "data en route."`}),`
`]}),`
`,(0,p.jsx)(n.h2,{id:`how-it-works`,children:`How it works`}),`
`,(0,p.jsxs)(n.p,{children:[`A 200%-wide linear-gradient (base → highlight → base) is applied as the background, and the background-position scrolls from `,(0,p.jsx)(n.code,{children:`200% 0`}),` to `,(0,p.jsx)(n.code,{children:`-200% 0`}),` over the duration. The element itself stays the same size; only the gradient sweeps across.`]}),`
`,(0,p.jsx)(n.h2,{id:`api`,children:`API`}),`
`,(0,p.jsxs)(n.p,{children:[`| Variable | Default | Effect |
|---|---|---|
| `,(0,p.jsx)(n.code,{children:`--shimmer-base`}),` | `,(0,p.jsx)(n.code,{children:`rgba(255, 255, 255, 0.04)`}),` | Base tint |
| `,(0,p.jsx)(n.code,{children:`--shimmer-highlight`}),` | `,(0,p.jsx)(n.code,{children:`rgba(255, 255, 255, 0.09)`}),` | Sweep tint |
| `,(0,p.jsx)(n.code,{children:`--shimmer-duration`}),` | `,(0,p.jsx)(n.code,{children:`1.6s`}),` | Full sweep duration |`]}),`
`,(0,p.jsxs)(n.p,{children:[(0,p.jsx)(n.code,{children:`border-radius: 4px`}),` is applied by default — override with your own border-radius if needed.`]}),`
`,(0,p.jsx)(n.h2,{id:`usage`,children:`Usage`}),`
`,(0,p.jsx)(n.pre,{children:(0,p.jsx)(n.code,{className:`language-jsx`,children:`<div className="shimmer" style={{ width: 200, height: 16 }} />

{/* Card skeleton */}
<div>
  <div className="shimmer" style={{ height: 24, width: '60%', marginBottom: 16 }} />
  <div className="shimmer" style={{ height: 140, marginBottom: 16, borderRadius: 8 }} />
  <div className="shimmer" style={{ height: 14 }} />
</div>
`})}),`
`,(0,p.jsx)(n.h2,{id:`examples`,children:`Examples`}),`
`,(0,p.jsx)(r,{of:s}),`
`,(0,p.jsx)(r,{of:c}),`
`,(0,p.jsx)(n.h2,{id:`caveats`,children:`Caveats`}),`
`,(0,p.jsxs)(n.ul,{children:[`
`,(0,p.jsxs)(n.li,{children:[(0,p.jsx)(n.strong,{children:`Tints assume a dark background.`}),` The default `,(0,p.jsx)(n.code,{children:`rgba(255,255,255,0.04)`}),` and `,(0,p.jsx)(n.code,{children:`0.09`}),` are tuned for the portfolio's dark surfaces. On light backgrounds, override with `,(0,p.jsx)(n.code,{children:`rgba(0,0,0,0.04)`}),` / `,(0,p.jsx)(n.code,{children:`rgba(0,0,0,0.09)`}),`.`]}),`
`,(0,p.jsxs)(n.li,{children:[(0,p.jsx)(n.strong,{children:`Don't shimmer forever.`}),` Pair with real loading state. If the element keeps shimmering past expected load time, the user reads it as broken, not loading.`]}),`
`]})]})}function f(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,p.jsx)(n,{...e,children:(0,p.jsx)(d,{...e})}):d(e)}var p;e((()=>{p=n(),o(),a(),l()}))();export{f as default};