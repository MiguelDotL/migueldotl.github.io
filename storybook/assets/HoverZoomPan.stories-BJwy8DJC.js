import{n as e}from"./chunk-DnJy8xQt.js";import{t}from"./jsx-runtime-H5zXk7e9.js";import{o as n,r,t as i}from"./esm-BC9TBGA9.js";import{n as a,t as o}from"./HoverZoomPan-Dgw_V_a7.js";import{t as s}from"./Projects-SBCY6n6L.js";import{n as c,t as l}from"./branch-beacon-DJLms5hD.js";var u,d,f,p,m,h,g,_,v,y,b;e((()=>{i(),a(),s(),c(),u=t(),{fireEvent:d,userEvent:f,within:p}=__STORYBOOK_MODULE_TEST__,m={title:`Components/Composites/HoverZoomPan`,decorators:[e=>(0,u.jsx)(`section`,{className:`projects`,style:{background:`var(--almost-black)`,padding:`3rem 1rem`},children:(0,u.jsx)(n,{children:(0,u.jsx)(r,{children:(0,u.jsx)(`div`,{className:`featured-project-image`,style:{aspectRatio:`16 / 9`,maxWidth:`720px`},children:(0,u.jsx)(e,{})})})})})],parameters:{layout:`fullscreen`,docs:{description:{component:`Image with mouse-driven zoom-and-pan on hover. Cursor position drives the transform-origin so the image pans toward the area under the cursor.`}}},argTypes:{src:{table:{disable:!0}},alt:{control:{type:`text`}},zoomScale:{control:{type:`range`,min:1,max:2.5,step:.05},description:`Hover zoom multiplier. 1 = no zoom; 2.5 = 250% scale.`},transitionMs:{control:{type:`range`,min:100,max:1500,step:10},description:`Zoom-in / zoom-out transition duration in ms`}},args:{src:l,alt:`Branch Beacon screenshot`,zoomScale:1.63,transitionMs:963},render:e=>(0,u.jsx)(o,{src:e.src,alt:e.alt,zoomScale:e.zoomScale,transitionMs:e.transitionMs})},h={},g={},_={args:{zoomScale:1.06}},v={args:{zoomScale:2.25}},y={play:async({canvasElement:e})=>{let t=p(e).getByRole(`img`).parentElement?.parentElement;t&&(await f.hover(t),d.mouseMove(t,{clientX:200,clientY:100}),d.mouseMove(t,{clientX:50,clientY:250}),await f.unhover(t))}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    zoomScale: 1.06
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    zoomScale: 2.25
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const img = within(canvasElement).getByRole('img');
    const container = img.parentElement?.parentElement;
    if (!container) return;
    await userEvent.hover(container);
    // userEvent.hover doesn't carry coords; fire a couple of moves
    // directly so the transform-origin assignment runs.
    fireEvent.mouseMove(container, {
      clientX: 200,
      clientY: 100
    });
    fireEvent.mouseMove(container, {
      clientX: 50,
      clientY: 250
    });
    await userEvent.unhover(container);
  }
}`,...y.parameters?.docs?.source}}},b=[`Default`,`Playground`,`SubtleZoom`,`StrongerZoom`,`Hovered`]}))();export{h as Default,y as Hovered,g as Playground,v as StrongerZoom,_ as SubtleZoom,b as __namedExportsOrder,m as default};