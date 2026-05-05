import{a as e,n as t}from"./chunk-DnJy8xQt.js";import{O as n}from"./iframe-Cd2lX4gK.js";import{t as r}from"./jsx-runtime-DmLhN3zr.js";import{a as i,i as a,o,t as s}from"./esm-DmT2BZvi.js";import{r as c,t as l}from"./dist-CDcoeH6f.js";import{t as u}from"./NavBar-C218oIrj.js";import{_ as d,v as f}from"./duolingo-icon-BX_4Y08g.js";import{a as p,i as m,n as h,r as g}from"./socials-dQIX6hPN.js";import{a as _,i as v,r as y}from"./site-w4f68CIA.js";var b,x,S=t((()=>{s(),b=r(),x=({name:e,text:t,isActive:n,onClick:r})=>(0,b.jsx)(i.Link,{href:`#${e}`,className:`${n?`active`:``} navbar-link`,onClick:r,children:t}),x.__docgenInfo={description:``,methods:[],displayName:`NavLink`,props:{name:{required:!0,tsType:{name:`string`},description:`Section id this link points to (also used as the URL hash).`},text:{required:!0,tsType:{name:`string`},description:``},isActive:{required:!0,tsType:{name:`boolean`},description:``},onClick:{required:!0,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``}}}})),C,w,T=t((()=>{l(),C=r(),w=({resumePath:e})=>(0,C.jsxs)(`button`,{className:`resume-button`,onClick:()=>window.open(`/storybook/${e.replace(/^\//,``)}`),children:[(0,C.jsx)(c,{size:20,className:`me-2`}),(0,C.jsx)(`span`,{children:`My Resume`})]}),w.__docgenInfo={description:``,methods:[],displayName:`ResumeButton`,props:{resumePath:{required:!0,tsType:{name:`string`},description:`Resume URL relative to the site root (e.g. "/resources/resume.pdf").`}}}})),E,D,O,k=t((()=>{u(),E=e(n(),1),s(),f(),S(),T(),m(),_(),g(),D=r(),O=()=>{let[e,t]=(0,E.useState)(!1),[n,r]=(0,E.useState)(`home`),[s,c]=(0,E.useState)(!1),[l,u]=(0,E.useState)(!1);(0,E.useEffect)(()=>{let e=()=>{window.scrollY>50?c(!0):c(!1)};return window.addEventListener(`scroll`,e),()=>window.removeEventListener(`scroll`,e)},[]),(0,E.useEffect)(()=>{let e=y.map(({name:e})=>e),t=()=>{let t=e.map(e=>document.getElementById(e)).filter(e=>e!==null),n=e[0]??``;for(let e of t)e.getBoundingClientRect().top<=100&&(n=e.id);r(n)};t();let n=window.requestIdleCallback,i=window.cancelIdleCallback,a,o,s=()=>{window.addEventListener(`scroll`,t,{passive:!0})};return n?a=n(s,{timeout:2e3}):o=window.setTimeout(s,1),()=>{a!==void 0&&i&&i(a),o!==void 0&&window.clearTimeout(o),window.removeEventListener(`scroll`,t)}},[]);let f=()=>{t(!e),u(!l)},m=e=>{r(e),u(!1),t(!1)};return(0,D.jsx)(a,{className:`${l&&`has-bg`} ${s&&`has-scrolled`} `,expand:`lg`,expanded:e,children:(0,D.jsxs)(o,{children:[(0,D.jsxs)(a.Brand,{href:`#home`,children:[(0,D.jsx)(`div`,{className:`logo-bg`,children:(0,D.jsx)(`img`,{src:p,className:`logo`,alt:`logo`})}),(0,D.jsxs)(`div`,{className:`brand-text`,children:[(0,D.jsx)(`strong`,{children:`MIGUEL`}),` LOZANO`]})]}),(0,D.jsx)(a.Toggle,{"aria-controls":`basic-navbar-nav`,onClick:f,children:(0,D.jsx)(`span`,{className:`navbar-toggler-icon`})}),(0,D.jsxs)(a.Collapse,{id:`basic-navbar-nav`,children:[(0,D.jsx)(i,{className:`me-auto`,children:y.map(({name:e,text:t})=>(0,D.jsx)(x,{name:e,text:t,isActive:n===e,onClick:()=>m(e)},e))}),(0,D.jsxs)(`span`,{className:`navbar-text`,children:[(0,D.jsx)(d,{config:h}),(0,D.jsx)(w,{resumePath:v})]})]})]})})},O.__docgenInfo={description:``,methods:[],displayName:`NavBar`}})),A,j,M,N,P,F,I,L,R;t((()=>{k(),A=r(),{userEvent:j,within:M}=__STORYBOOK_MODULE_TEST__,N={title:`Showcase/Sections/NavBar`,component:O,decorators:[e=>(0,A.jsx)(`div`,{style:{minHeight:`120px`},children:(0,A.jsx)(e,{})})],parameters:{layout:`fullscreen`,docs:{description:{component:`Fixed navigation bar that scroll-spies the active section. Collapses to a hamburger on smaller viewports.`}}}},P={},F={play:async()=>{Object.defineProperty(window,`scrollY`,{value:200,configurable:!0}),window.dispatchEvent(new Event(`scroll`)),Object.defineProperty(window,`scrollY`,{value:0,configurable:!0}),window.dispatchEvent(new Event(`scroll`))}},I={parameters:{viewport:{defaultViewport:`mobile1`}},play:async({canvasElement:e})=>{let t=e.querySelector(`button.navbar-toggler`);t&&(await j.click(t),await j.click(t))}},L={play:async({canvasElement:e,step:t})=>{await t(`stub window.open`,()=>{window.open=(()=>null)});let n=M(e).getByRole(`button`,{name:/My Resume/i});await j.click(n)}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  play: async () => {
    Object.defineProperty(window, 'scrollY', {
      value: 200,
      configurable: true
    });
    window.dispatchEvent(new Event('scroll'));
    Object.defineProperty(window, 'scrollY', {
      value: 0,
      configurable: true
    });
    window.dispatchEvent(new Event('scroll'));
  }
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    }
  },
  play: async ({
    canvasElement
  }) => {
    const toggle = canvasElement.querySelector('button.navbar-toggler') as HTMLElement | null;
    if (!toggle) return;
    await userEvent.click(toggle);
    await userEvent.click(toggle);
  }
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement,
    step
  }) => {
    await step('stub window.open', () => {
      // Replace window.open with a no-op so the click doesn't try to
      // navigate the test browser to an external URL.
      window.open = (() => null) as unknown as typeof window.open;
    });
    const canvas = within(canvasElement);
    const resumeBtn = canvas.getByRole('button', {
      name: /My Resume/i
    });
    await userEvent.click(resumeBtn);
  }
}`,...L.parameters?.docs?.source}}},R=[`Default`,`Scrolled`,`ToggleCollapsed`,`ResumeButtonClicked`]}))();export{P as Default,L as ResumeButtonClicked,F as Scrolled,I as ToggleCollapsed,R as __namedExportsOrder,N as default};