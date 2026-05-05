import{n as e}from"./chunk-DnJy8xQt.js";import{t}from"./jsx-runtime-BUYsPVUy.js";import{_ as n,a as r,c as i,d as a,f as o,g as s,h as c,i as l,l as u,m as d,n as f,o as p,p as m,r as h,s as g,t as _,u as v,v as y}from"./duolingo-icon-BOxn6SkD.js";var b,x,S,C,w,T,E,D,O,k,A,j;e((()=>{y(),c(),m(),o(),v(),g(),p(),l(),f(),b=t(),{action:x}=__STORYBOOK_MODULE_ACTIONS__,{fn:S,userEvent:C,within:w}=__STORYBOOK_MODULE_TEST__,T={title:`Components/Primitives/SocialIcons`,component:n,decorators:[e=>(0,b.jsx)(`div`,{style:{background:`#1a1a1a`,padding:`2rem`},children:(0,b.jsx)(e,{})})],argTypes:{config:{control:{type:`object`},description:`Icons to render (className, icon, url, label)`},onHover:{action:`iconHover`,description:`Fires on per-icon hover with the icon label`}},parameters:{docs:{description:{component:"Row of social media link icons used in NavBar (top), Footer (bottom-left), and ContactMe (side rail). Optional `onHover` callback fires the icon label."}}}},E=async({canvasElement:e})=>{let t=w(e).getAllByRole(`link`)[0];await C.hover(t),await C.unhover(t)},D={args:{config:[{className:`linked-in`,icon:s,url:`https://www.linkedin.com/in/migueldot/`,label:`LinkedIn`},{className:`twitter`,icon:d,url:`//twitter.com/MiguelDotL`,label:`X (Twitter)`},{className:`github`,icon:a,url:`//github.com/MiguelDotL`,label:`GitHub`}]},play:E},O={args:{config:[{className:`codepen`,icon:u,url:`//codepen.io/MiguelDotL`,label:`CodePen`},{className:`npm`,icon:i,url:`//www.npmjs.com/~migueldotl`,label:`npm`},{className:`codewars`,icon:r,url:`//www.codewars.com/users/MiguelDotL`,label:`Codewars`},{className:`codecademy`,icon:h,url:`//www.codecademy.com/profiles/MiguelDotL`,label:`Codecademy`},{className:`duolingo`,icon:_,url:`//www.duolingo.com/profile/MiguelDotL`,label:`Duolingo`}]},play:E},k={args:{config:[{className:`linked-in`,icon:s,url:`https://www.linkedin.com/in/migueldot/`,label:`LinkedIn`},{className:`github`,icon:a,url:`//github.com/MiguelDotL`,label:`GitHub`},{className:`codepen`,icon:u,url:`//codepen.io/MiguelDotL`,label:`CodePen`}],onHover:x(`iconHover`)},play:E},A={args:{config:[{className:`linked-in`,icon:s,url:`https://www.linkedin.com/in/migueldot/`,label:`LinkedIn`}],onHover:S()},play:async({canvasElement:e})=>{let t=w(e).getByRole(`link`,{name:/LinkedIn/});await C.hover(t),await C.unhover(t)}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    config: [{
      className: 'linked-in',
      icon: linkedInIcon,
      url: 'https://www.linkedin.com/in/migueldot/',
      label: 'LinkedIn'
    }, {
      className: 'twitter',
      icon: twitterXIcon,
      url: '//twitter.com/MiguelDotL',
      label: 'X (Twitter)'
    }, {
      className: 'github',
      icon: githubIcon,
      url: '//github.com/MiguelDotL',
      label: 'GitHub'
    }]
  },
  play: hoverFirstIcon
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    config: [{
      className: 'codepen',
      icon: codepenIcon,
      url: '//codepen.io/MiguelDotL',
      label: 'CodePen'
    }, {
      className: 'npm',
      icon: npmIcon,
      url: '//www.npmjs.com/~migueldotl',
      label: 'npm'
    }, {
      className: 'codewars',
      icon: codewarsIcon,
      url: '//www.codewars.com/users/MiguelDotL',
      label: 'Codewars'
    }, {
      className: 'codecademy',
      icon: codecademyIcon,
      url: '//www.codecademy.com/profiles/MiguelDotL',
      label: 'Codecademy'
    }, {
      className: 'duolingo',
      icon: duolingoIcon,
      url: '//www.duolingo.com/profile/MiguelDotL',
      label: 'Duolingo'
    }]
  },
  play: hoverFirstIcon
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    config: [{
      className: 'linked-in',
      icon: linkedInIcon,
      url: 'https://www.linkedin.com/in/migueldot/',
      label: 'LinkedIn'
    }, {
      className: 'github',
      icon: githubIcon,
      url: '//github.com/MiguelDotL',
      label: 'GitHub'
    }, {
      className: 'codepen',
      icon: codepenIcon,
      url: '//codepen.io/MiguelDotL',
      label: 'CodePen'
    }],
    onHover: action('iconHover')
  },
  play: hoverFirstIcon
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    config: [{
      className: 'linked-in',
      icon: linkedInIcon,
      url: 'https://www.linkedin.com/in/migueldot/',
      label: 'LinkedIn'
    }],
    onHover: fn()
  },
  play: async ({
    canvasElement
  }) => {
    const link = within(canvasElement).getByRole('link', {
      name: /LinkedIn/
    });
    await userEvent.hover(link);
    await userEvent.unhover(link);
  }
}`,...A.parameters?.docs?.source}}},j=[`NavBarSocials`,`FooterSocials`,`Playground`,`HoverInteracted`]}))();export{O as FooterSocials,A as HoverInteracted,D as NavBarSocials,k as Playground,j as __namedExportsOrder,T as default};