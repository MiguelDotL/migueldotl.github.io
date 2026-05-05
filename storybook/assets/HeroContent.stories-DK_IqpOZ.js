import{n as e}from"./chunk-DnJy8xQt.js";import{t}from"./jsx-runtime-BuQTzuGm.js";import{o as n,r,s as i,t as a}from"./esm-CVWkqyVS.js";import{r as o}from"./TaglineBadge-CJtCHk01.js";import{a as s,i as c,n as l,o as u,r as d,t as f}from"./bitmoji-space-planet-2-BMjIa91L.js";var p,m,h,g,_,v,y;e((()=>{a(),u(),c(),l(),o(),p=t(),{userEvent:m,within:h}=__STORYBOOK_MODULE_TEST__,g={title:`Components/Composites/HeroContent`,component:s,decorators:[e=>(0,p.jsx)(`section`,{className:`hero about-me`,style:{backgroundImage:`none`,background:`#1a0033`,minHeight:`500px`},children:(0,p.jsx)(n,{children:(0,p.jsxs)(r,{className:`align-items-center`,children:[(0,p.jsx)(i,{xs:12,md:7,xl:7,children:(0,p.jsx)(e,{})}),(0,p.jsx)(i,{className:`image-col`,xs:12,md:5,xl:5,children:(0,p.jsxs)(`picture`,{children:[(0,p.jsx)(`source`,{srcSet:f,type:`image/webp`}),(0,p.jsx)(`img`,{className:`floating-image`,src:d,alt:`Floating Caricature`})]})})]})})})],parameters:{layout:`fullscreen`,docs:{description:{component:`The text + CTA block inside Hero. Drives the typing-effect headline cycle.`}},a11y:{config:{rules:[{id:`color-contrast`,enabled:!1}]}}}},_={},v={play:async({canvasElement:e})=>{let t=h(e).getByRole(`button`,{name:/Let's Chat/});await m.click(t)}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const button = within(canvasElement).getByRole('button', {
      name: /Let's Chat/
    });
    await userEvent.click(button);
  }
}`,...v.parameters?.docs?.source}}},y=[`Default`,`ChatCtaClicked`]}))();export{v as ChatCtaClicked,_ as Default,y as __namedExportsOrder,g as default};