import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-97Fyapm_.js";import{t as n}from"./jsx-runtime-Cn-WOgQW.js";import{n as r,o as i,s as a}from"./blocks-0hDKsNTC.js";import{t as o}from"./mdx-react-shim-BNY5XuX1.js";import{Default as s,FlatRectangle as c,TealOrange as l,n as u,t as d}from"./GradientPair.stories-CdOSNR0O.js";function f(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(i,{of:d}),`
`,(0,m.jsx)(n.h1,{id:`gradientpair`,children:`GradientPair`}),`
`,(0,m.jsx)(n.p,{children:`Two adjacent buttons that share a continuous gradient. Hover the secondary: it fills L→R with the gradient, and the primary's gradient angle rotates 180° so the visual gradient appears to flow continuously across both buttons.`}),`
`,(0,m.jsx)(n.p,{children:`Origin: PreFooter "The Repo" + "Storybook" CTAs.`}),`
`,(0,m.jsx)(n.h2,{id:`when-to-use`,children:`When to use`}),`
`,(0,m.jsxs)(n.ul,{children:[`
`,(0,m.jsx)(n.li,{children:`Paired actions where one is a primary CTA and the other is a secondary (e.g. "View" + "Learn more").`}),`
`,(0,m.jsx)(n.li,{children:`When you want the pair to feel coordinated — a hover on one is reflected in the other.`}),`
`]}),`
`,(0,m.jsx)(n.h2,{id:`how-it-works`,children:`How it works`}),`
`,(0,m.jsx)(n.p,{children:`Two cooperating mechanisms:`}),`
`,(0,m.jsxs)(n.ol,{children:[`
`,(0,m.jsxs)(n.li,{children:[(0,m.jsx)(n.strong,{children:`Secondary fill`}),`: a `,(0,m.jsx)(n.code,{children:`::before`}),` pseudo-element on `,(0,m.jsx)(n.code,{children:`.gradient-pair__secondary`}),` starts at `,(0,m.jsx)(n.code,{children:`width: 0`}),` and animates to `,(0,m.jsx)(n.code,{children:`100%`}),` on hover, painted with the same gradient as the primary.`]}),`
`,(0,m.jsxs)(n.li,{children:[(0,m.jsx)(n.strong,{children:`Primary rotation`}),`: when the secondary is hovered, `,(0,m.jsx)(n.code,{children:`:has(.gradient-pair__secondary:hover)`}),` on the parent flips a custom property `,(0,m.jsx)(n.code,{children:`--gp-angle`}),` from the base angle (131°) to the flipped angle (311°). The primary's `,(0,m.jsx)(n.code,{children:`linear-gradient(var(--gp-angle), ...)`}),` re-renders with the new angle. To make this animate (rather than snap), `,(0,m.jsx)(n.code,{children:`--gp-angle`}),` is registered with `,(0,m.jsx)(n.code,{children:`@property`}),` so the browser knows it's an `,(0,m.jsx)(n.code,{children:`<angle>`}),` and can interpolate between values.`]}),`
`]}),`
`,(0,m.jsx)(n.h2,{id:`api`,children:`API`}),`
`,(0,m.jsxs)(n.p,{children:[`| Variable | Default | Effect |
|---|---|---|
| `,(0,m.jsx)(n.code,{children:`--gp-color-1`}),` | `,(0,m.jsx)(n.code,{children:`#aa367c`}),` | Gradient stop 1 |
| `,(0,m.jsx)(n.code,{children:`--gp-color-2`}),` | `,(0,m.jsx)(n.code,{children:`#4a2fbd`}),` | Gradient stop 2 |
| `,(0,m.jsx)(n.code,{children:`--gp-angle-base`}),` | `,(0,m.jsx)(n.code,{children:`131deg`}),` | Primary's resting angle |
| `,(0,m.jsx)(n.code,{children:`--gp-angle-flipped`}),` | `,(0,m.jsx)(n.code,{children:`311deg`}),` | Primary's hovered-state angle (180° from base) |`]}),`
`,(0,m.jsx)(n.h2,{id:`usage`,children:`Usage`}),`
`,(0,m.jsx)(n.pre,{children:(0,m.jsx)(n.code,{className:`language-jsx`,children:`<div className="gradient-pair">
  <a className="gradient-pair__primary" href="...">Primary</a>
  <a className="gradient-pair__secondary" href="...">Secondary</a>
</div>

{/* Custom gradient colors */}
<div
  className="gradient-pair"
  style={{
    '--gp-color-1': '#0d9488',
    '--gp-color-2': '#ea580c'
  }}
>
  ...
</div>
`})}),`
`,(0,m.jsx)(n.h2,{id:`examples`,children:`Examples`}),`
`,(0,m.jsx)(r,{of:s}),`
`,(0,m.jsx)(r,{of:l}),`
`,(0,m.jsx)(r,{of:c}),`
`,(0,m.jsx)(n.h2,{id:`caveats`,children:`Caveats`}),`
`,(0,m.jsxs)(n.ul,{children:[`
`,(0,m.jsxs)(n.li,{children:[(0,m.jsxs)(n.strong,{children:[`Browser support — `,(0,m.jsx)(n.code,{children:`@property`}),`.`]}),` Safari 16.4+, Chrome 85+, Firefox 128+. Without it, the gradient angle snaps instead of animating; the rest still works.`]}),`
`,(0,m.jsxs)(n.li,{children:[(0,m.jsxs)(n.strong,{children:[`Browser support — `,(0,m.jsx)(n.code,{children:`:has()`}),`.`]}),` Safari 15.4+, Chrome 105+, Firefox 121+. Without it, the cross-button coordination doesn't fire — the secondary still fills on its own hover, but the primary stays at its base angle.`]}),`
`,(0,m.jsxs)(n.li,{children:[(0,m.jsx)(n.strong,{children:`Two-button assumption.`}),` The `,(0,m.jsx)(n.code,{children:`:has()`}),` selector is hardcoded for one primary + one secondary. Adding a third button or a different child structure breaks the coordination. For richer compositions, treat this as a starting point and fork.`]}),`
`,(0,m.jsxs)(n.li,{children:[(0,m.jsx)(n.strong,{children:`The flipped angle should be 180° from base.`}),` That's what makes the "continuous gradient" illusion work — the pink-end of one button visually meets the pink-start of the other. Picking other angle deltas creates a different visual that may or may not look intentional.`]}),`
`]})]})}function p(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,m.jsx)(n,{...e,children:(0,m.jsx)(f,{...e})}):f(e)}var m;e((()=>{m=n(),o(),a(),u()}))();export{p as default};