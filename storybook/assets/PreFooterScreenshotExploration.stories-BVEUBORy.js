import{n as e}from"./chunk-DnJy8xQt.js";import{t}from"./jsx-runtime-DI1hhrx8.js";import{r as n}from"./github-CBaV5ZaC.js";import{ComparisonLabel as r,HEADLINES as i,PICKED_HEADING as a,ScreenshotFeatureBody as o,n as s,t as c}from"./PreFooterExploration.stories-ClBnitv3.js";var l,u,d,f,p,m,h,g,_,v;e((()=>{n(),s(),c(),l=t(),u={title:`Design Iterations/PreFooter/Screenshot Feature`,decorators:[e=>(0,l.jsx)(`footer`,{className:`footer`,style:{background:`linear-gradient(90deg, #5b2a86 0%, #4a6fc7 100%)`,padding:`180px 0 2rem`},children:(0,l.jsx)(e,{})})],parameters:{layout:`fullscreen`,docs:{description:{component:`Iterations on top of the Screenshot Feature variant — the layout that shipped. Each story stacks variants of one decision (headline copy, tech-badge count, SB button background, button shape) so they can be eyeballed against each other.`}},a11y:{config:{rules:[{id:`color-contrast`,enabled:!1}]}}}},d=()=>(0,l.jsx)(l.Fragment,{children:i.map(({label:e,heading:t})=>(0,l.jsxs)(`div`,{children:[(0,l.jsx)(r,{children:e}),(0,l.jsx)(o,{heading:t,compact:!0})]},e))}),f=[{label:`8 — full story (default)`,items:[`React`,`TypeScript`,`Vite`,`React Bootstrap`,`Storybook`,`Vitest`,`Testing Library`,`Chromatic`]},{label:`6 — lean`,items:[`React`,`TypeScript`,`Vite`,`React Bootstrap`,`Storybook`,`Vitest`]},{label:`5 — most curated`,items:[`React`,`TypeScript`,`Vite`,`Storybook`,`Vitest`]},{label:`10 — verbose`,items:[`React`,`TypeScript`,`Vite`,`React Bootstrap`,`Storybook`,`Vitest`,`Testing Library`,`Chromatic`,`ESLint`,`PurgeCSS`]}],p=()=>(0,l.jsx)(l.Fragment,{children:f.map(({label:e,items:t})=>(0,l.jsxs)(`div`,{children:[(0,l.jsx)(r,{children:e}),(0,l.jsx)(o,{heading:a,tech:t,compact:!0})]},e))}),m=[{label:`Current — transparent`,className:`cta-btn cta-btn--alt`},{label:`Chip-tinted purple`,className:`cta-btn cta-btn--alt cta-btn--alt-tint-purple`},{label:`Pink tint`,className:`cta-btn cta-btn--alt cta-btn--alt-tint-pink`},{label:`White card with shadow`,className:`cta-btn cta-btn--alt cta-btn--alt-card`}],h=()=>(0,l.jsx)(l.Fragment,{children:m.map(({label:e,className:t})=>(0,l.jsxs)(`div`,{children:[(0,l.jsx)(r,{children:e}),(0,l.jsx)(o,{heading:a,sbButtonClass:t,compact:!0})]},e))}),g=[{label:`Pill — current (999px)`,className:`cta-row cta-row--start`},{label:`Sharp rectangle — matches Contact form (0)`,className:`cta-row cta-row--start cta-row--rect`},{label:`Soft rectangle (4px)`,className:`cta-row cta-row--start cta-row--rect-soft`}],_=()=>(0,l.jsx)(l.Fragment,{children:g.map(({label:e,className:t})=>(0,l.jsxs)(`div`,{children:[(0,l.jsx)(r,{children:e}),(0,l.jsx)(o,{heading:a,ctaRowClass:t,compact:!0})]},e))}),d.__docgenInfo={description:``,methods:[],displayName:`Headlines`},p.__docgenInfo={description:``,methods:[],displayName:`TechStacks`},h.__docgenInfo={description:``,methods:[],displayName:`SbButtonBg`},_.__docgenInfo={description:``,methods:[],displayName:`BtnShape`},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => <>
        {HEADLINES.map(({
    label,
    heading
  }) => <div key={label}>
                <ComparisonLabel>{label}</ComparisonLabel>
                <ScreenshotFeatureBody heading={heading} compact />
            </div>)}
    </>`,...d.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => <>
        {TECH_STACKS.map(({
    label,
    items
  }) => <div key={label}>
                <ComparisonLabel>{label}</ComparisonLabel>
                <ScreenshotFeatureBody heading={PICKED_HEADING} tech={items} compact />
            </div>)}
    </>`,...p.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`() => <>
        {SB_BUTTON_BG_VARIANTS.map(({
    label,
    className
  }) => <div key={label}>
                <ComparisonLabel>{label}</ComparisonLabel>
                <ScreenshotFeatureBody heading={PICKED_HEADING} sbButtonClass={className} compact />
            </div>)}
    </>`,...h.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`() => <>
        {BTN_SHAPES.map(({
    label,
    className
  }) => <div key={label}>
                <ComparisonLabel>{label}</ComparisonLabel>
                <ScreenshotFeatureBody heading={PICKED_HEADING} ctaRowClass={className} compact />
            </div>)}
    </>`,..._.parameters?.docs?.source}}},v=[`Headlines`,`TechStacks`,`SbButtonBg`,`BtnShape`]}))();export{_ as BtnShape,d as Headlines,h as SbButtonBg,p as TechStacks,v as __namedExportsOrder,u as default};