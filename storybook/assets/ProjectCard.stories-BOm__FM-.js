import{n as e}from"./chunk-DnJy8xQt.js";import{t}from"./jsx-runtime-DPm2nqzU.js";import{r as n,t as r}from"./esm-BgEm9HSb.js";import{t as i}from"./Projects-SBCY6n6L.js";import{i as a,n as o,r as s,t as c}from"./trim-agency-512-DuqSwR0X.js";import{i as l,n as u,r as d,t as f}from"./filthy-food-512-ffS-MWtm.js";var p,m,h,g,_,v,y,b,x,S;e((()=>{r(),a(),i(),c(),l(),u(),p=t(),{userEvent:m,within:h}=__STORYBOOK_MODULE_TEST__,g={title:`Components/Primitives/ProjectCard`,component:s,decorators:[e=>(0,p.jsx)(`section`,{className:`projects`,style:{background:`var(--almost-black)`,padding:`2rem`},children:(0,p.jsx)(n,{children:(0,p.jsx)(e,{})})})],parameters:{layout:`fullscreen`,docs:{description:{component:`Single card used in the Client Projects grid. Shows an image with a hover overlay revealing title + description + view-site button.`}}},argTypes:{title:{control:{type:`text`},description:`Project name`},description:{control:{type:`text`},description:`Short tagline`},imageURL:{control:{type:`text`},description:`Image src`},url:{control:{type:`text`},description:`Click-through URL`}}},_={args:{title:`T R I M Agency`,description:`Web Development`,imageURL:o,url:`//www.trimagency.com/`}},v={args:{title:`A Project With An Unusually Long Title`,description:`Web Development`,imageURL:d,url:`#`}},y={args:{title:`Filthy Food`,description:`A multi-paragraph description that wraps to multiple lines to verify hover overlay layout`,imageURL:f,url:`#`}},b={args:{title:`Sample Project`,description:`Edit any control to preview`,imageURL:o,url:`#`}},x={args:{title:`T R I M Agency`,description:`Web Development`,imageURL:o,url:`//www.trimagency.com/`},play:async({canvasElement:e})=>{let t=h(e).getAllByRole(`img`)[0].closest(`.project-card`);t&&await m.hover(t)}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'T R I M Agency',
    description: 'Web Development',
    imageURL: trimAgency,
    url: '//www.trimagency.com/'
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'A Project With An Unusually Long Title',
    description: 'Web Development',
    imageURL: cSolutions,
    url: '#'
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Filthy Food',
    description: 'A multi-paragraph description that wraps to multiple lines to verify hover overlay layout',
    imageURL: filthyFood,
    url: '#'
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Sample Project',
    description: 'Edit any control to preview',
    imageURL: trimAgency,
    url: '#'
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'T R I M Agency',
    description: 'Web Development',
    imageURL: trimAgency,
    url: '//www.trimagency.com/'
  },
  play: async ({
    canvasElement
  }) => {
    const card = within(canvasElement).getAllByRole('img')[0]!.closest('.project-card');
    if (card) await userEvent.hover(card);
  }
}`,...x.parameters?.docs?.source}}},S=[`Default`,`LongTitle`,`LongDescription`,`Playground`,`Hovered`]}))();export{_ as Default,x as Hovered,y as LongDescription,v as LongTitle,b as Playground,S as __namedExportsOrder,g as default};