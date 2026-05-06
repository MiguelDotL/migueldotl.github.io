import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-041DJ1EV.js";import{t as n}from"./jsx-runtime-HMuSy4bC.js";import{n as r,o as i,s as a}from"./blocks-DIQz-tLl.js";import{t as o}from"./mdx-react-shim-B0N9Jvte.js";import{AllSizes as s,CustomShadow as c,n as l,t as u}from"./Lift.stories-Ba74Kj4P.js";function d(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...t(),...e.components};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(i,{of:u}),`
`,(0,p.jsx)(n.h1,{id:`lift`,children:`Lift`}),`
`,(0,p.jsxs)(n.p,{children:[`Translate-up + shadow-boost on hover. The portfolio's standard "this surface is interactive" feedback. Mirrors what's currently duplicated on `,(0,p.jsx)(n.code,{children:`.cta-btn`}),`, `,(0,p.jsx)(n.code,{children:`.sb-frame`}),`, and `,(0,p.jsx)(n.code,{children:`.featured-project-card`}),`.`]}),`
`,(0,p.jsx)(n.h2,{id:`when-to-use`,children:`When to use`}),`
`,(0,p.jsxs)(n.ul,{children:[`
`,(0,p.jsx)(n.li,{children:`Buttons, cards, and other clickable surfaces that should respond to pointer hover.`}),`
`,(0,p.jsx)(n.li,{children:`Drop-in replacement for hand-rolled hover translates inside individual component CSS.`}),`
`]}),`
`,(0,p.jsx)(n.h2,{id:`variants`,children:`Variants`}),`
`,(0,p.jsx)(n.p,{children:`Three sizes, picked by composition with a modifier class:`}),`
`,(0,p.jsxs)(n.p,{children:[`| Class | translateY | Shadow |
|---|---|---|
| `,(0,p.jsx)(n.code,{children:`.lift`}),` | `,(0,p.jsx)(n.code,{children:`-2px`}),` | small drop |
| `,(0,p.jsx)(n.code,{children:`.lift.lift--md`}),` | `,(0,p.jsx)(n.code,{children:`-4px`}),` | medium drop |
| `,(0,p.jsx)(n.code,{children:`.lift.lift--lg`}),` | `,(0,p.jsx)(n.code,{children:`-6px`}),` | large drop |`]}),`
`,(0,p.jsx)(n.p,{children:`All variants animate over 0.2s ease.`}),`
`,(0,p.jsx)(n.h2,{id:`api`,children:`API`}),`
`,(0,p.jsxs)(n.p,{children:[`| Variable | Default | Effect |
|---|---|---|
| `,(0,p.jsx)(n.code,{children:`--lift-shadow`}),` | size-dependent neutral dark drop | Override the box-shadow per instance |`]}),`
`,(0,p.jsx)(n.h2,{id:`usage`,children:`Usage`}),`
`,(0,p.jsx)(n.pre,{children:(0,p.jsx)(n.code,{className:`language-jsx`,children:`<button className="lift">Default lift</button>
<a className="lift lift--md">Medium lift</a>

{/* Pink-glow variant via CSS var */}
<div
  className="lift lift--md"
  style={{ '--lift-shadow': '0 12px 32px rgba(170, 54, 124, 0.45)' }}
>
  Custom shadow
</div>
`})}),`
`,(0,p.jsx)(n.h2,{id:`examples`,children:`Examples`}),`
`,(0,p.jsx)(r,{of:s}),`
`,(0,p.jsx)(r,{of:c}),`
`,(0,p.jsx)(n.h2,{id:`caveat--transform-stacking`,children:`Caveat — transform stacking`}),`
`,(0,p.jsxs)(n.p,{children:[(0,p.jsx)(n.code,{children:`.lift:hover`}),` sets `,(0,p.jsx)(n.code,{children:`transform: translateY(...)`}),`. If the element already has another transform (rotate, scale), they collide. Either drop the existing transform or write a custom hover that composes both into one transform shorthand.`]})]})}function f(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,p.jsx)(n,{...e,children:(0,p.jsx)(d,{...e})}):d(e)}var p;e((()=>{p=n(),o(),a(),l()}))();export{f as default};