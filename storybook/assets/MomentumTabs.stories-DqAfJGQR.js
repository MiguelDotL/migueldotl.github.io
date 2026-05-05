import{a as e,n as t}from"./chunk-DnJy8xQt.js";import{O as n}from"./iframe-ftuUU2SV.js";import{t as r}from"./jsx-runtime-pIsxQTbI.js";import{o as i,r as a,t as o}from"./esm-C6_cgtTq.js";import{t as s}from"./Projects-SBCY6n6L.js";import{a as c,n as l,t as u}from"./MomentumTabs-BttbLHtT.js";var d,f,p,m,h,g,_,v,y,b,x,S,C,w;t((()=>{d=e(n(),1),o(),l(),s(),c(),f=r(),{userEvent:p,within:m}=__STORYBOOK_MODULE_TEST__,h={title:`Components/Composites/MomentumTabs`,decorators:[(e,t)=>(0,f.jsx)(`section`,{className:`projects`,style:{background:`var(--almost-black)`,padding:`4rem 1rem`},children:(0,f.jsx)(i,{children:(0,f.jsx)(a,{children:(0,f.jsx)(e,{})})})},t.id)],parameters:{layout:`fullscreen`,docs:{description:{component:"Animated tab indicator that wraps the active tab with a perimeter trace. Initial wrap animation gates on `enabled` (parent's IntersectionObserver) so it reveals as the user scrolls into view."}}},argTypes:{tabs:{control:{type:`object`},description:"Tab labels (rendered as `<label> Projects`)"},active:{control:{type:`text`},description:"Currently active tab — must match one of `tabs`"},enabled:{control:{type:`boolean`},description:`When false, holds the initial wrap animation. The live site flips this on intersection-observer.`}},args:{tabs:[`Client`,`Featured`,`Personal`],active:`Featured`,enabled:!0},render:e=>(0,f.jsx)(g,{...e})},g=({tabs:e,active:t,enabled:n})=>{let[r,i]=(0,d.useState)(t);return(0,f.jsx)(u,{tabs:e,active:r,enabled:n,onChange:e=>i(e)})},_={},v={},y={args:{tabs:[`Enterprise Engagements`,`Open Source Contributions`,`Personal Side Projects`],active:`Open Source Contributions`}},b={args:{tabs:[`Featured`,`Archive`],active:`Featured`}},x={play:async({canvasElement:e})=>{let t=m(e);await p.click(t.getByRole(`tab`,{name:/Personal/})),await new Promise(e=>setTimeout(e,850)),await p.click(t.getByRole(`tab`,{name:/Client/})),await new Promise(e=>setTimeout(e,850)),await p.click(t.getByRole(`tab`,{name:/Featured/})),await new Promise(e=>setTimeout(e,850))}},S={play:async()=>{window.dispatchEvent(new Event(`resize`)),await new Promise(e=>setTimeout(e,600))}},C={play:async({canvasElement:e})=>{m(e).getByRole(`tab`,{name:/Featured/}).focus(),await p.keyboard(`{ArrowRight}`),await new Promise(e=>setTimeout(e,850)),await p.keyboard(`{ArrowLeft}`),await new Promise(e=>setTimeout(e,850)),await p.keyboard(`{End}`),await new Promise(e=>setTimeout(e,850)),await p.keyboard(`{Home}`),await new Promise(e=>setTimeout(e,850))}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    tabs: ['Enterprise Engagements', 'Open Source Contributions', 'Personal Side Projects'],
    active: 'Open Source Contributions'
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    tabs: ['Featured', 'Archive'],
    active: 'Featured'
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    // Featured (default) → Personal (cw) → Client (ccw) → Featured (cw)
    await userEvent.click(canvas.getByRole('tab', {
      name: /Personal/
    }));
    await new Promise(r => setTimeout(r, 850));
    await userEvent.click(canvas.getByRole('tab', {
      name: /Client/
    }));
    await new Promise(r => setTimeout(r, 850));
    await userEvent.click(canvas.getByRole('tab', {
      name: /Featured/
    }));
    await new Promise(r => setTimeout(r, 850));
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  play: async () => {
    window.dispatchEvent(new Event('resize'));
    // Allow the 450ms settle debounce to run so the full handler body
    // (including the rAF fade-back-in path) is covered.
    await new Promise(r => setTimeout(r, 600));
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const featuredTab = canvas.getByRole('tab', {
      name: /Featured/
    });
    featuredTab.focus();
    await userEvent.keyboard('{ArrowRight}');
    await new Promise(r => setTimeout(r, 850));
    await userEvent.keyboard('{ArrowLeft}');
    await new Promise(r => setTimeout(r, 850));
    await userEvent.keyboard('{End}');
    await new Promise(r => setTimeout(r, 850));
    await userEvent.keyboard('{Home}');
    await new Promise(r => setTimeout(r, 850));
  }
}`,...C.parameters?.docs?.source}}},w=[`Default`,`Playground`,`LongLabels`,`TwoTabs`,`ClickedThroughTabs`,`ResizeHandled`,`KeyboardNavigated`]}))();export{x as ClickedThroughTabs,_ as Default,C as KeyboardNavigated,y as LongLabels,v as Playground,S as ResizeHandled,b as TwoTabs,w as __namedExportsOrder,h as default};