import{n as e}from"./chunk-DnJy8xQt.js";import{t}from"./jsx-runtime-Cn-WOgQW.js";import{o as n,r,t as i}from"./esm-BNBMBRbd.js";import{n as a,t as o}from"./FeaturedProjectCard-DcoSKHsX.js";import{n as s,t as c}from"./HoverZoomPan-cVq_bvRv.js";import{t as l}from"./Projects-BNVUPik5.js";import{n as u,t as d}from"./branch-beacon-DgThNgQm.js";var f,p,m,h,g,_,v;e((()=>{i(),a(),s(),l(),u(),f=t(),p={title:`Design Iterations/BranchBeaconImage`,decorators:[e=>(0,f.jsx)(`section`,{className:`projects`,style:{background:`var(--almost-black)`,padding:`3rem 1rem`},children:(0,f.jsx)(n,{children:(0,f.jsx)(r,{children:(0,f.jsx)(e,{})})})})],parameters:{layout:`fullscreen`,docs:{description:{component:`Tuning the HoverZoomPan zoom multiplier and transition duration on the Branch Beacon card image.`}}},argTypes:{zoomPercent:{control:{type:`range`,min:100,max:200,step:1},description:`Total scale on hover, as a %. 100 = no change.`},transitionMs:{control:{type:`number`,min:100,max:1200,step:1},description:`Transition duration for zoom in/out`}},args:{zoomPercent:163,transitionMs:693},render:e=>(0,f.jsx)(o,{title:`Branch Beacon`,subtitle:`npm package`,description:`Open-source library for surfacing git branch state inside browser-based dev workflows. Built inline in Pattern Archive, re-implemented in Voicepool, then extracted as a reusable npm package — born from a duplication signal.`,techStack:[`TypeScript`,`React`,`Vite`,`npm`],imageSlot:(0,f.jsx)(c,{src:d,alt:`Branch Beacon`,zoomScale:e.zoomPercent/100,transitionMs:e.transitionMs}),actions:[{label:`React`,url:`https://www.npmjs.com/package/branch-beacon`},{label:`Web Component`,url:`https://www.npmjs.com/package/branch-beacon-element`},{label:`Repo`,url:`https://github.com/MiguelDotL/branch-beacon`}]})},m={},h={args:{zoomPercent:103,transitionMs:693}},g={args:{zoomPercent:200,transitionMs:693}},_={args:{zoomPercent:163,transitionMs:1100}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    zoomPercent: 103,
    transitionMs: 693
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    zoomPercent: 200,
    transitionMs: 693
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    zoomPercent: 163,
    transitionMs: 1100
  }
}`,..._.parameters?.docs?.source}}},v=[`Playground`,`SubtleZoom`,`StrongerZoom`,`SlowTransition`]}))();export{m as Playground,_ as SlowTransition,g as StrongerZoom,h as SubtleZoom,v as __namedExportsOrder,p as default};