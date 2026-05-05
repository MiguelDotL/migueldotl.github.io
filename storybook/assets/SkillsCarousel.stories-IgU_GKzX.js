import{n as e}from"./chunk-DnJy8xQt.js";import{t}from"./jsx-runtime-CNKcVvOR.js";import{i as n,n as r,r as i,t as a}from"./SkillsCarousel-DNyPNswc.js";var o,s,c,l,u,d;e((()=>{r(),n(),i(),o=t(),{userEvent:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/Composites/SkillsCarousel`,component:a,decorators:[e=>(0,o.jsx)(`section`,{id:`skills`,style:{background:`#0c0c0c`,padding:`6rem 1rem 3rem`},children:(0,o.jsx)(`div`,{className:`skills-content`,children:(0,o.jsx)(e,{})})})],parameters:{layout:`fullscreen`,docs:{description:{component:`Skills horizontal carousel. Custom-handles the TypeScript icon's white-square pseudo-element backdrop and pauses autoplay when off-screen.`}}}},l={},u={play:async({canvasElement:e})=>{await new Promise(e=>setTimeout(e,250)),await s.keyboard(`{ArrowRight}`),await new Promise(e=>setTimeout(e,200)),await s.keyboard(`{ArrowRight}`),await new Promise(e=>setTimeout(e,200)),await s.keyboard(`{ArrowLeft}`),await new Promise(e=>setTimeout(e,200));let t=e.querySelector(`.react-multiple-carousel__arrow--right`);if(t)for(let e=0;e<3;e++)await s.click(t),await new Promise(e=>setTimeout(e,200))}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    // Wait for IntersectionObserver to flip isInView=true (threshold 0.5)
    // and for centeredIndex to initialize (the 100ms setTimeout in the
    // mount effect).
    await new Promise(r => setTimeout(r, 250));
    await userEvent.keyboard('{ArrowRight}');
    await new Promise(r => setTimeout(r, 200));
    await userEvent.keyboard('{ArrowRight}');
    await new Promise(r => setTimeout(r, 200));
    await userEvent.keyboard('{ArrowLeft}');
    await new Promise(r => setTimeout(r, 200));

    // Direct clicks on react-multi-carousel's chevron buttons exercise
    // afterChange's snap detection branch — keep going forward enough to
    // potentially hit the end-clone region.
    const next = canvasElement.querySelector('.react-multiple-carousel__arrow--right') as HTMLElement | null;
    if (next) {
      for (let i = 0; i < 3; i++) {
        await userEvent.click(next);
        await new Promise(r => setTimeout(r, 200));
      }
    }
  }
}`,...u.parameters?.docs?.source}}},d=[`Default`,`KeyboardAndArrowNav`]}))();export{l as Default,u as KeyboardAndArrowNav,d as __namedExportsOrder,c as default};