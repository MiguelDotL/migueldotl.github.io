import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-DJQhSVNb.js";import{t as n}from"./jsx-runtime-DI1hhrx8.js";import{n as r,o as i,s as a}from"./blocks-CVtOp2Zl.js";import{t as o}from"./mdx-react-shim-Bve0gygW.js";import{Default as s,Subtle as c,WiderSpread as l,n as u,t as d}from"./FanOut.stories-BwCGh5I6.js";function f(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(i,{of:d}),`
`,(0,m.jsx)(n.h1,{id:`fanout`,children:`FanOut`}),`
`,(0,m.jsxs)(n.p,{children:[`Items go from a stacked cluster (each child overlapping its left neighbor) to a spread row when the container — or any ancestor — gains `,(0,m.jsx)(n.code,{children:`.is-open`}),`. Originally a happy accident in the navbar mobile-menu social icons; captured here so the effect is reusable on any horizontal cluster.`]}),`
`,(0,m.jsx)(n.h2,{id:`when-to-use`,children:`When to use`}),`
`,(0,m.jsxs)(n.ul,{children:[`
`,(0,m.jsx)(n.li,{children:`A row of items (icons, badges, chips) that should reveal-and-spread when a section opens.`}),`
`,(0,m.jsx)(n.li,{children:`Anywhere you want a small "fan out from the corner" reveal that's CSS-only — no JS animation library.`}),`
`]}),`
`,(0,m.jsx)(n.h2,{id:`how-it-works`,children:`How it works`}),`
`,(0,m.jsxs)(n.p,{children:[`Each direct child of `,(0,m.jsx)(n.code,{children:`.fan-out`}),` has `,(0,m.jsx)(n.code,{children:`margin-right: var(--fan-out-stacked, -2.6em)`}),` while closed (negative pulls each onto its left neighbor) and `,(0,m.jsx)(n.code,{children:`var(--fan-out-spread, 1.5em)`}),` when open. Opacity transitions in lockstep, sequenced via `,(0,m.jsx)(n.code,{children:`transition-delay`}),` so the two phases land one after the other:`]}),`
`,(0,m.jsxs)(n.ul,{children:[`
`,(0,m.jsxs)(n.li,{children:[(0,m.jsx)(n.strong,{children:`Enter`}),` (`,(0,m.jsx)(n.code,{children:`.is-open`}),` added): opacity 0 → 1 first, then margin spreads.`]}),`
`,(0,m.jsxs)(n.li,{children:[(0,m.jsx)(n.strong,{children:`Exit`}),` (`,(0,m.jsx)(n.code,{children:`.is-open`}),` removed): margin re-stacks first, then opacity fades.`]}),`
`]}),`
`,(0,m.jsxs)(n.p,{children:[`The last child stays at `,(0,m.jsx)(n.code,{children:`margin-right: 0`}),` so the cluster grows from the right.`]}),`
`,(0,m.jsx)(n.h2,{id:`api`,children:`API`}),`
`,(0,m.jsxs)(n.p,{children:[`| Variable | Default | Effect |
|---|---|---|
| `,(0,m.jsx)(n.code,{children:`--fan-out-stacked`}),` | `,(0,m.jsx)(n.code,{children:`-2.6em`}),` | Closed-state right margin per child |
| `,(0,m.jsx)(n.code,{children:`--fan-out-spread`}),` | `,(0,m.jsx)(n.code,{children:`1.5em`}),` | Open-state right margin per child |
| `,(0,m.jsx)(n.code,{children:`--fan-out-stacked-opacity`}),` | `,(0,m.jsx)(n.code,{children:`0`}),` | Closed-state opacity per child |
| `,(0,m.jsx)(n.code,{children:`--fan-out-spread-opacity`}),` | `,(0,m.jsx)(n.code,{children:`1`}),` | Open-state opacity per child |
| `,(0,m.jsx)(n.code,{children:`--fan-out-step-duration`}),` | `,(0,m.jsx)(n.code,{children:`0.3s`}),` | Duration of each phase (total per direction = 2×) |`]}),`
`,(0,m.jsx)(n.h2,{id:`usage`,children:`Usage`}),`
`,(0,m.jsx)(n.pre,{children:(0,m.jsx)(n.code,{className:`language-jsx`,children:`<div className={\`fan-out \${menuOpen ? 'is-open' : ''}\`}>
  <Icon a /> <Icon b /> <Icon c />
</div>
`})}),`
`,(0,m.jsx)(n.h2,{id:`examples`,children:`Examples`}),`
`,(0,m.jsx)(r,{of:s}),`
`,(0,m.jsx)(r,{of:l}),`
`,(0,m.jsx)(r,{of:c}),`
`,(0,m.jsx)(n.h2,{id:`caveat--specificity`,children:`Caveat — specificity`}),`
`,(0,m.jsxs)(n.p,{children:[(0,m.jsx)(n.code,{children:`.fan-out > *`}),` targets direct children with one class selector. If those children inherit a `,(0,m.jsx)(n.code,{children:`margin-right`}),` from a more specific selector (e.g. `,(0,m.jsx)(n.code,{children:`.social-icons a.social-icon`}),` — two classes plus an element), the foundation silently loses. Either rename the wrapper, drop the conflicting class on the children, or apply `,(0,m.jsx)(n.code,{children:`.fan-out`}),` directly to the wrapper that owns those rules.`]})]})}function p(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,m.jsx)(n,{...e,children:(0,m.jsx)(f,{...e})}):f(e)}var m;e((()=>{m=n(),o(),a(),u()}))();export{p as default};