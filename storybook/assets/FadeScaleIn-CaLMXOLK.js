import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-97Fyapm_.js";import{t as n}from"./jsx-runtime-Cn-WOgQW.js";import{n as r,o as i,s as a}from"./blocks-0hDKsNTC.js";import{t as o}from"./mdx-react-shim-BNY5XuX1.js";import{Default as s,SlowAndStrong as c,n as l,t as u}from"./FadeScaleIn.stories-CyMHzW5_.js";function d(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(i,{of:u}),`
`,(0,p.jsx)(n.h1,{id:`fadescalein`,children:`FadeScaleIn`}),`
`,(0,p.jsxs)(n.p,{children:[`Modal/lightbox/dialog open transition. Element fades in while scaling up from a slightly smaller size. Run-once via `,(0,p.jsx)(n.code,{children:`animation`}),`, not a state toggle.`]}),`
`,(0,p.jsx)(n.p,{children:`Originally on the FeaturedImageSlider lightbox overlay.`}),`
`,(0,p.jsx)(n.h2,{id:`when-to-use`,children:`When to use`}),`
`,(0,p.jsxs)(n.ul,{children:[`
`,(0,p.jsx)(n.li,{children:`Modals, dialogs, lightboxes, popovers — any UI that snaps in on open.`}),`
`,(0,p.jsxs)(n.li,{children:[`One-shot transitions where you don't need bidirectional state. (For state-driven open/close, reach for `,(0,p.jsx)(n.code,{children:`.fan-out`}),` or roll your own transition.)`]}),`
`]}),`
`,(0,p.jsx)(n.h2,{id:`how-it-works`,children:`How it works`}),`
`,(0,p.jsxs)(n.p,{children:[`Single `,(0,p.jsx)(n.code,{children:`@keyframes`}),` animation:`]}),`
`,(0,p.jsxs)(n.ul,{children:[`
`,(0,p.jsxs)(n.li,{children:[(0,p.jsx)(n.code,{children:`from`}),`: `,(0,p.jsx)(n.code,{children:`opacity: 0; transform: scale(var(--fade-scale-from, 0.96))`})]}),`
`,(0,p.jsxs)(n.li,{children:[(0,p.jsx)(n.code,{children:`to`}),`: `,(0,p.jsx)(n.code,{children:`opacity: 1; transform: scale(1)`})]}),`
`]}),`
`,(0,p.jsxs)(n.p,{children:[`Plays once on mount with `,(0,p.jsx)(n.code,{children:`animation`}),`. Element stays at its end state once finished — no infinite loop, no reverse on exit.`]}),`
`,(0,p.jsx)(n.h2,{id:`api`,children:`API`}),`
`,(0,p.jsxs)(n.p,{children:[`| Variable | Default | Effect |
|---|---|---|
| `,(0,p.jsx)(n.code,{children:`--fade-scale-from`}),` | `,(0,p.jsx)(n.code,{children:`0.96`}),` | Starting scale (1 = no scale, just fade) |
| `,(0,p.jsx)(n.code,{children:`--fade-scale-duration`}),` | `,(0,p.jsx)(n.code,{children:`180ms`}),` | Animation duration |`]}),`
`,(0,p.jsx)(n.h2,{id:`usage`,children:`Usage`}),`
`,(0,p.jsx)(n.pre,{children:(0,p.jsx)(n.code,{className:`language-jsx`,children:`{isOpen && (
  <div className="fade-scale-in modal">
    <h2>Modal content</h2>
  </div>
)}

{/* Slower, more dramatic scale */}
<div
  className="fade-scale-in"
  style={{
    '--fade-scale-from': '0.8',
    '--fade-scale-duration': '500ms'
  }}
>
  Slow open
</div>
`})}),`
`,(0,p.jsxs)(n.p,{children:[`The `,(0,p.jsx)(n.code,{children:`Replay`}),` button in the stories re-mounts the element by changing its key — that's how you'd verify the animation in dev too.`]}),`
`,(0,p.jsx)(n.h2,{id:`examples`,children:`Examples`}),`
`,(0,p.jsx)(r,{of:s}),`
`,(0,p.jsx)(r,{of:c}),`
`,(0,p.jsx)(n.h2,{id:`caveats`,children:`Caveats`}),`
`,(0,p.jsxs)(n.ul,{children:[`
`,(0,p.jsxs)(n.li,{children:[(0,p.jsx)(n.strong,{children:`Mount/unmount only.`}),` Animation runs once when the element mounts. If you want a corresponding fade-out on unmount, you need React Transition Group, Framer Motion, or a CSS transition driven by an `,(0,p.jsx)(n.code,{children:`.is-leaving`}),` class — `,(0,p.jsx)(n.code,{children:`.fade-scale-in`}),` won't do it.`]}),`
`,(0,p.jsxs)(n.li,{children:[(0,p.jsx)(n.strong,{children:`Initial render gotcha.`}),` If the element is in the DOM at page load, the animation runs immediately and may compete with LCP. For dialogs that open on user action, this is fine. For above-the-fold content, prefer a class-toggle transition.`]}),`
`]})]})}function f(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,p.jsx)(n,{...e,children:(0,p.jsx)(d,{...e})}):d(e)}var p;e((()=>{p=n(),o(),a(),l()}))();export{f as default};