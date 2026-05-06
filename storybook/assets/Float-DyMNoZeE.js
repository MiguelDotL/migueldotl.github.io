import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-DJQhSVNb.js";import{t as n}from"./jsx-runtime-DI1hhrx8.js";import{n as r,o as i,s as a}from"./blocks-CVtOp2Zl.js";import{t as o}from"./mdx-react-shim-Bve0gygW.js";import{Default as s,Variants as c,n as l,t as u}from"./Float.stories-BQ5jPgoY.js";function d(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(i,{of:u}),`
`,(0,p.jsx)(n.h1,{id:`float`,children:`Float`}),`
`,(0,p.jsxs)(n.p,{children:[`Gentle vertical bob. Originally the Hero bitmoji's signature animation (`,(0,p.jsx)(n.code,{children:`@keyframes updown`}),` + 6s linear infinite). Generic enough for any decorative floating element.`]}),`
`,(0,p.jsx)(n.h2,{id:`when-to-use`,children:`When to use`}),`
`,(0,p.jsxs)(n.ul,{children:[`
`,(0,p.jsx)(n.li,{children:`Decorative imagery (mascots, illustrations, icon clusters) that should feel "alive" without distracting from real content.`}),`
`,(0,p.jsx)(n.li,{children:`Hero / above-the-fold focal points where a tiny bit of motion catches the eye.`}),`
`]}),`
`,(0,p.jsx)(n.h2,{id:`how-it-works`,children:`How it works`}),`
`,(0,p.jsxs)(n.p,{children:[`Infinite `,(0,p.jsx)(n.code,{children:`transform: translateY`}),` keyframe oscillating between `,(0,p.jsx)(n.code,{children:`-var(--float-distance)`}),` and `,(0,p.jsx)(n.code,{children:`+var(--float-distance)`}),`. Eased in/out so the reversal at each peak feels organic. Symmetric — no jump on mount.`]}),`
`,(0,p.jsx)(n.h2,{id:`api`,children:`API`}),`
`,(0,p.jsxs)(n.p,{children:[`| Variable | Default | Effect |
|---|---|---|
| `,(0,p.jsx)(n.code,{children:`--float-distance`}),` | `,(0,p.jsx)(n.code,{children:`1em`}),` | Peak displacement up/down |
| `,(0,p.jsx)(n.code,{children:`--float-duration`}),` | `,(0,p.jsx)(n.code,{children:`6s`}),` | Full cycle duration |`]}),`
`,(0,p.jsx)(n.h2,{id:`usage`,children:`Usage`}),`
`,(0,p.jsx)(n.pre,{children:(0,p.jsx)(n.code,{className:`language-jsx`,children:`<img className="float" src={mascot} alt="" />

{/* Subtler, slower */}
<div
  className="float"
  style={{
    '--float-distance': '0.4em',
    '--float-duration': '10s'
  }}
>
  Slow drift
</div>
`})}),`
`,(0,p.jsx)(n.h2,{id:`examples`,children:`Examples`}),`
`,(0,p.jsx)(r,{of:s}),`
`,(0,p.jsx)(r,{of:c}),`
`,(0,p.jsx)(n.h2,{id:`caveats`,children:`Caveats`}),`
`,(0,p.jsxs)(n.ul,{children:[`
`,(0,p.jsxs)(n.li,{children:[(0,p.jsxs)(n.strong,{children:[`Respect `,(0,p.jsx)(n.code,{children:`prefers-reduced-motion`}),`.`]}),` This foundation runs unconditionally. If you ship it on a high-traffic surface, wrap it in a media query that disables the animation for users who've requested reduced motion.`]}),`
`,(0,p.jsxs)(n.li,{children:[(0,p.jsx)(n.strong,{children:`Layout impact.`}),` `,(0,p.jsx)(n.code,{children:`transform: translateY`}),` doesn't reflow neighbors, but if the element has margins/padding tuned visually for its bobbing, surrounding elements may feel uneven.`]}),`
`]})]})}function f(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,p.jsx)(n,{...e,children:(0,p.jsx)(d,{...e})}):d(e)}var p;e((()=>{p=n(),o(),a(),l()}))();export{f as default};