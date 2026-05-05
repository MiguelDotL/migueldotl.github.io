import{n as e}from"./chunk-DnJy8xQt.js";import{t}from"./jsx-runtime-DslgEbAg.js";import{o as n,r,t as i}from"./esm-b9AVZyK-.js";import{t as a}from"./Projects-SBCY6n6L.js";import{a as o,i as s,n as c,o as l,r as u,t as d}from"./bcbs-providers-CWdftco5.js";import{t as f}from"./FeaturedImageSlider-BPMv6f7G.js";import{n as p,t as m}from"./bcbs-main-Dzf2XbhA.js";import{n as h,t as g}from"./voicepool-DnxOdIym.js";var _,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F;e((()=>{i(),l(),a(),f(),p(),s(),c(),g(),_=t(),{fireEvent:v,userEvent:y,within:b}=__STORYBOOK_MODULE_TEST__,x=[{src:m,alt:`BCBS NC homepage`},{src:u,alt:`BCBS NC vision plan page`},{src:d,alt:`BCBS NC providers page`}],S=[{src:h,alt:`Voicepool fleet dashboard`}],C={title:`Components/Composites/FeaturedImageSlider`,decorators:[e=>(0,_.jsx)(`section`,{className:`projects`,style:{background:`var(--almost-black)`,padding:`3rem 1rem`},children:(0,_.jsx)(n,{children:(0,_.jsx)(r,{children:(0,_.jsx)(`div`,{className:`featured-project-image`,style:{aspectRatio:`16 / 9`,maxWidth:`720px`},children:(0,_.jsx)(e,{})})})})})],parameters:{layout:`fullscreen`,docs:{description:{component:`Auto-advancing image slider with hover-pause, optional click-to-lightbox, arrow / keyboard / swipe controls, and four indicator variants.`}}},argTypes:{images:{control:{type:`object`},description:`Slides to cycle through (src + alt)`},indicator:{control:{type:`radio`},options:[`frosted-dots`,`counter`,`segmented-progress`,`outlined-dots`],description:`Visual style for the active-slide indicator`},controls:{control:{type:`check`},options:[`arrows`,`click-image`,`keyboard`,`swipe`],description:`Enabled input methods (multiselect); autoplay + hover-pause always on`},intervalMs:{control:{type:`number`,min:1500,max:12e3,step:500},description:`Autoplay interval in milliseconds`},imagePosition:{control:{type:`text`},description:`CSS object-position applied to each slide`}},args:{images:x,indicator:`frosted-dots`,controls:[],intervalMs:3690,imagePosition:`center`},render:e=>(0,_.jsx)(o,{images:e.images,indicator:e.indicator,controls:e.controls,intervalMs:e.intervalMs,imagePosition:e.imagePosition})},w={args:{images:S}},T={args:{images:x}},E={args:{images:x,controls:[`arrows`]}},D={args:{images:x,controls:[`keyboard`,`swipe`]}},O={args:{images:x,indicator:`segmented-progress`}},k={args:{images:x,indicator:`counter`}},A={args:{images:x,indicator:`outlined-dots`}},j={args:{images:x,controls:[`click-image`]}},M={args:{images:x,controls:[`arrows`]},play:async({canvasElement:e})=>{let t=b(e);await y.click(t.getByRole(`button`,{name:/Next image/})),await y.click(t.getByRole(`button`,{name:/Next image/})),await y.click(t.getByRole(`button`,{name:/Previous image/})),await y.click(t.getByRole(`tab`,{name:/Show image 1/}))}},N={args:{images:x,controls:[`keyboard`,`swipe`]},play:async({canvasElement:e})=>{let t=e.querySelector(`.featured-image-slider`);t&&(t.focus(),await y.keyboard(`{ArrowRight}`),await y.keyboard(`{ArrowLeft}`),v.pointerDown(t,{clientX:200}),v.pointerUp(t,{clientX:100}),v.pointerDown(t,{clientX:100}),v.pointerUp(t,{clientX:250}),v.pointerDown(t,{clientX:100}),v.pointerUp(t,{clientX:110}))}},P={args:{images:x},play:async({canvasElement:e})=>{let t=e.querySelector(`.featured-image-slider__slide.is-active`);if(!t)return;await y.click(t),await y.keyboard(`{ArrowRight}`),await y.keyboard(`{ArrowLeft}`);let n=b(document.body);await y.click(n.getByRole(`button`,{name:/Next image/})),await y.click(n.getByRole(`button`,{name:/Previous image/})),await y.keyboard(`{Escape}`)}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    images: single
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    images: triptych
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    images: triptych,
    controls: ['arrows']
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    images: triptych,
    controls: ['keyboard', 'swipe']
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    images: triptych,
    indicator: 'segmented-progress'
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    images: triptych,
    indicator: 'counter'
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    images: triptych,
    indicator: 'outlined-dots'
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    images: triptych,
    controls: ['click-image']
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    images: triptych,
    controls: ['arrows']
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button', {
      name: /Next image/
    }));
    await userEvent.click(canvas.getByRole('button', {
      name: /Next image/
    }));
    await userEvent.click(canvas.getByRole('button', {
      name: /Previous image/
    }));
    await userEvent.click(canvas.getByRole('tab', {
      name: /Show image 1/
    }));
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    images: triptych,
    controls: ['keyboard', 'swipe']
  },
  play: async ({
    canvasElement
  }) => {
    const slider = canvasElement.querySelector('.featured-image-slider') as HTMLElement | null;
    if (!slider) return;
    slider.focus();
    await userEvent.keyboard('{ArrowRight}');
    await userEvent.keyboard('{ArrowLeft}');
    // Swipe left → next
    fireEvent.pointerDown(slider, {
      clientX: 200
    });
    fireEvent.pointerUp(slider, {
      clientX: 100
    });
    // Swipe right → prev
    fireEvent.pointerDown(slider, {
      clientX: 100
    });
    fireEvent.pointerUp(slider, {
      clientX: 250
    });
    // Below threshold → no-op
    fireEvent.pointerDown(slider, {
      clientX: 100
    });
    fireEvent.pointerUp(slider, {
      clientX: 110
    });
  }
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    images: triptych
  },
  play: async ({
    canvasElement
  }) => {
    const activeSlide = canvasElement.querySelector('.featured-image-slider__slide.is-active') as HTMLElement | null;
    if (!activeSlide) return;
    await userEvent.click(activeSlide);
    await userEvent.keyboard('{ArrowRight}');
    await userEvent.keyboard('{ArrowLeft}');
    // The lightbox is rendered via createPortal into document.body —
    // query from there to reach the lightbox arrow buttons.
    const body = within(document.body);
    await userEvent.click(body.getByRole('button', {
      name: /Next image/
    }));
    await userEvent.click(body.getByRole('button', {
      name: /Previous image/
    }));
    await userEvent.keyboard('{Escape}');
  }
}`,...P.parameters?.docs?.source}}},F=[`SingleImage`,`Triptych`,`WithArrows`,`WithKeyboardAndSwipe`,`SegmentedProgress`,`Counter`,`OutlinedDots`,`ClickToAdvance`,`Interacted`,`KeyboardAndSwipeInteracted`,`LightboxOpened`]}))();export{j as ClickToAdvance,k as Counter,M as Interacted,N as KeyboardAndSwipeInteracted,P as LightboxOpened,A as OutlinedDots,O as SegmentedProgress,w as SingleImage,T as Triptych,E as WithArrows,D as WithKeyboardAndSwipe,F as __namedExportsOrder,C as default};