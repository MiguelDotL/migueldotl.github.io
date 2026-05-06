import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-97Fyapm_.js";import{t as n}from"./jsx-runtime-Cn-WOgQW.js";import{o as r,s as i}from"./blocks-0hDKsNTC.js";import{t as a}from"./mdx-react-shim-BNY5XuX1.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`Foundations/Overview`}),`
`,(0,c.jsx)(n.h1,{id:`foundations`,children:`Foundations`}),`
`,(0,c.jsx)(n.p,{children:`Pure CSS utility classes. No JSX, no React. You drop them on whatever markup you already have.`}),`
`,(0,c.jsx)(n.h2,{id:`foundations-vs-components--the-bright-line`,children:`Foundations vs Components — the bright line`}),`
`,(0,c.jsxs)(n.p,{children:[`| | Foundation | Component |
|---|---|---|
| What it is | A CSS class | A React component |
| How you use it | `,(0,c.jsx)(n.code,{children:`<div class="lift">`}),` | `,(0,c.jsx)(n.code,{children:`import Button; <Button />`}),` |
| Owns markup? | No — decorates yours | Yes — provides JSX |
| Owns state? | Only what `,(0,c.jsx)(n.code,{children:`:hover`}),` / `,(0,c.jsx)(n.code,{children:`.is-open`}),` toggles give | Can have hooks, refs, effects |
| Composes by | Combining classes (`,(0,c.jsx)(n.code,{children:`<div class="lift frosted">`}),`) | Nesting JSX |
| Could a non-React project use it? | Yes | No |`]}),`
`,(0,c.jsx)(n.p,{children:`If you can drop the class on existing markup without restructuring, it's a Foundation.
If you have to import and render it as JSX, it's a Component.`}),`
`,(0,c.jsx)(n.h2,{id:`sub-categories`,children:`Sub-categories`}),`
`,(0,c.jsx)(n.p,{children:`Effects fall into three discoverable buckets:`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Motion`}),` — animations or state-driven transitions. Self-running keyframes (`,(0,c.jsx)(n.code,{children:`Float`}),`, `,(0,c.jsx)(n.code,{children:`Shimmer`}),`) or class-toggle transitions (`,(0,c.jsx)(n.code,{children:`FanOut`}),`, `,(0,c.jsx)(n.code,{children:`FadeScaleIn`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Hover`}),` — driven by `,(0,c.jsx)(n.code,{children:`:hover`}),`. `,(0,c.jsx)(n.code,{children:`Lift`}),`, `,(0,c.jsx)(n.code,{children:`GradientPair`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Material`}),` — static visual treatments. `,(0,c.jsx)(n.code,{children:`Frosted`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`css-variable-conventions`,children:`CSS-variable conventions`}),`
`,(0,c.jsx)(n.p,{children:`Every foundation exposes its tunables as CSS custom properties with sensible defaults:`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-css`,children:`.lift:hover {
    box-shadow: var(--lift-shadow, 0 8px 18px rgba(20, 20, 40, 0.25));
}
`})}),`
`,(0,c.jsx)(n.p,{children:`This lets you keep one class but customize per-context without writing new CSS:`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-jsx`,children:`<div
    className="lift"
    style={{ '--lift-shadow': '0 12px 32px rgba(170, 54, 124, 0.45)' }}
>
    pink-glow lift
</div>
`})}),`
`,(0,c.jsx)(n.h2,{id:`how-to-add-a-new-foundation`,children:`How to add a new foundation`}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[`Drop a new CSS file in `,(0,c.jsx)(n.code,{children:`src/effects/`}),`, e.g. `,(0,c.jsx)(n.code,{children:`glow.css`}),`. Top of the file gets a JSDoc-style comment block: what it does, where it came from, what CSS variables it exposes.`]}),`
`,(0,c.jsxs)(n.li,{children:[`Add `,(0,c.jsx)(n.code,{children:`@import './glow.css';`}),` to `,(0,c.jsx)(n.code,{children:`src/effects/index.css`}),` (the barrel imported once globally in `,(0,c.jsx)(n.code,{children:`src/index.tsx`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[`Add a matching `,(0,c.jsx)(n.code,{children:`Glow.stories.tsx`}),` in the same folder. Title prefix is one of `,(0,c.jsx)(n.code,{children:`Foundations/Motion/...`}),`, `,(0,c.jsx)(n.code,{children:`Foundations/Hover/...`}),`, or `,(0,c.jsx)(n.code,{children:`Foundations/Material/...`}),` depending on what kind of effect it is.`]}),`
`,(0,c.jsxs)(n.li,{children:[`Story imports its own per-effect CSS file directly (`,(0,c.jsx)(n.code,{children:`import './glow.css'`}),`), not the barrel — keeps stories isolated.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`origin`,children:`Origin`}),`
`,(0,c.jsxs)(n.p,{children:[`Most foundations were extracted from patterns that emerged organically across the live components — duplicated hover lifts, repeated `,(0,c.jsx)(n.code,{children:`backdrop-filter`}),` recipes, the navbar mobile-menu happy accident. Capturing them here is documentation as much as reuse: future refactors won't lose the pattern silently.`]}),`
`,(0,c.jsx)(n.p,{children:`The live components keep their original CSS for now. Adoption of the foundations is opportunistic — drop them on new code; refactor the old gradually if it pays for itself.`}),`
`,(0,c.jsx)(n.h2,{id:`specificity-gotcha`,children:`Specificity gotcha`}),`
`,(0,c.jsxs)(n.p,{children:[`Class selectors targeting children (`,(0,c.jsx)(n.code,{children:`.fan-out > *`}),`) can lose to component-internal rules with stacked selectors (`,(0,c.jsx)(n.code,{children:`.social-icons a.social-icon`}),`). If a foundation isn't taking effect, check the children's existing CSS — combining a foundation with a wrapper class whose own rules touch the same property on the same children will silently override the foundation. The `,(0,c.jsx)(n.code,{children:`FanOut`}),` story has a worked example.`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};