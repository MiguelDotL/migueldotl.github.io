import{n as e}from"./chunk-DnJy8xQt.js";import{t}from"./jsx-runtime-DmLhN3zr.js";import{o as n,r,t as i}from"./esm-DmT2BZvi.js";import{n as a,t as o}from"./FeaturedProjectCard-DnKgnV_V.js";import{t as s}from"./Projects-SBCY6n6L.js";import{n as c,t as l}from"./branch-beacon-DJLms5hD.js";import{n as u,t as d}from"./bcbs-main-Dzf2XbhA.js";import{n as f,t as p}from"./NpmPlainIcon-CJTOhmcX.js";var m,h,g,_,v,y,b,x,S;e((()=>{i(),a(),f(),s(),c(),u(),m=t(),h=l,g=d,_={title:`Components/Composites/FeaturedProjectCard`,component:o,decorators:[e=>(0,m.jsx)(`section`,{className:`projects`,style:{background:`var(--almost-black)`,padding:`3rem 1rem`},children:(0,m.jsx)(n,{children:(0,m.jsx)(r,{children:(0,m.jsx)(e,{})})})})],parameters:{layout:`fullscreen`,docs:{description:{component:`The card layout used in the Featured + Personal Projects tabs. Renders a title, subtitle, description, tech stack chips, an image slot, and action buttons.`}}},argTypes:{title:{control:{type:`text`},description:`Project name shown as heading`},subtitle:{control:{type:`text`},description:`Optional eyebrow above title`},description:{control:{type:`text`},description:`Project body copy`},techStack:{control:{type:`object`},description:`Tech tags listed under description`},imageURL:{control:{type:`text`},description:`Image src; ignored when imageSlot is provided`},imageSlot:{control:!1,description:`Custom image node; takes precedence over imageURL`},actions:{control:{type:`object`},description:`Link/action buttons rendered below body`}}},v={args:{title:`branch-beacon`,subtitle:`First npm package`,description:`Open-source library for surfacing git branch state inside browser-based dev workflows — where Claude-driven coding happens without terminal visibility. Born from a duplication signal: built inline in Pattern Archive, re-implemented in Voicepool, then extracted as a reusable package.`,techStack:[`TypeScript`,`React`,`Vite`,`npm`],imageURL:h,actions:[{label:`React`,url:`https://www.npmjs.com/package/branch-beacon`,icon:(0,m.jsx)(p,{})},{label:`Web Component`,url:`https://www.npmjs.com/package/branch-beacon-element`,icon:(0,m.jsx)(p,{})},{label:`Repo`,url:`https://github.com/MiguelDotL/branch-beacon`,icon:(0,m.jsx)(`i`,{className:`devicon-github-original`,"aria-hidden":!0})}]}},y={name:`BCBS NC`,args:{title:`BCBS NC — LiteHouse`,subtitle:`Enterprise client`,description:`[Placeholder copy] Enterprise health insurance platform for Blue Cross Blue Shield of North Carolina. Role, scope, and contribution to be filled in once Miguel provides details.`,techStack:[`React`,`TypeScript`,`Enterprise`],imageURL:g,actions:[{label:`See Library in Use`,url:`#`}]}},b={render:()=>(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(o,{title:`branch-beacon`,subtitle:`First npm package`,description:`Open-source library for surfacing git branch state inside browser-based dev workflows — where Claude-driven coding happens without terminal visibility. Born from a duplication signal: built inline in Pattern Archive, re-implemented in Voicepool, then extracted as a reusable package.`,techStack:[`TypeScript`,`React`,`Vite`,`npm`],imageURL:h,actions:[{label:`React`,url:`https://www.npmjs.com/package/branch-beacon`,icon:(0,m.jsx)(p,{})},{label:`Web Component`,url:`https://www.npmjs.com/package/branch-beacon-element`,icon:(0,m.jsx)(p,{})},{label:`Repo`,url:`https://github.com/MiguelDotL/branch-beacon`,icon:(0,m.jsx)(`i`,{className:`devicon-github-original`,"aria-hidden":!0})}]}),(0,m.jsx)(o,{title:`BCBS NC — LiteHouse`,subtitle:`Enterprise client`,description:`[Placeholder copy] Enterprise health insurance platform for Blue Cross Blue Shield of North Carolina. Role, scope, and contribution to be filled in once Miguel provides details.`,techStack:[`React`,`TypeScript`,`Enterprise`],imageURL:g,actions:[{label:`See Library in Use`,url:`#`}]})]})},x={args:{title:`Sample Project`,subtitle:`Playground`,description:`Edit any control to preview the card layout.`,techStack:[`React`,`TypeScript`],imageURL:h,actions:[{label:`View`,url:`#`}]}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'branch-beacon',
    subtitle: 'First npm package',
    description: "Open-source library for surfacing git branch state inside browser-based dev workflows — where Claude-driven coding happens without terminal visibility. Born from a duplication signal: built inline in Pattern Archive, re-implemented in Voicepool, then extracted as a reusable package.",
    techStack: ['TypeScript', 'React', 'Vite', 'npm'],
    imageURL: placeholderBranchBeacon,
    actions: [{
      label: 'React',
      url: 'https://www.npmjs.com/package/branch-beacon',
      icon: <NpmPlainIcon />
    }, {
      label: 'Web Component',
      url: 'https://www.npmjs.com/package/branch-beacon-element',
      icon: <NpmPlainIcon />
    }, {
      label: 'Repo',
      url: 'https://github.com/MiguelDotL/branch-beacon',
      icon: <i className="devicon-github-original" aria-hidden />
    }]
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: 'BCBS NC',
  args: {
    title: 'BCBS NC — LiteHouse',
    subtitle: 'Enterprise client',
    description: '[Placeholder copy] Enterprise health insurance platform for Blue Cross Blue Shield of North Carolina. Role, scope, and contribution to be filled in once Miguel provides details.',
    techStack: ['React', 'TypeScript', 'Enterprise'],
    imageURL: placeholderBcbs,
    actions: [{
      label: 'See Library in Use',
      url: '#'
    }]
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <>
            <FeaturedProjectCard title="branch-beacon" subtitle="First npm package" description="Open-source library for surfacing git branch state inside browser-based dev workflows — where Claude-driven coding happens without terminal visibility. Born from a duplication signal: built inline in Pattern Archive, re-implemented in Voicepool, then extracted as a reusable package." techStack={['TypeScript', 'React', 'Vite', 'npm']} imageURL={placeholderBranchBeacon} actions={[{
      label: 'React',
      url: 'https://www.npmjs.com/package/branch-beacon',
      icon: <NpmPlainIcon />
    }, {
      label: 'Web Component',
      url: 'https://www.npmjs.com/package/branch-beacon-element',
      icon: <NpmPlainIcon />
    }, {
      label: 'Repo',
      url: 'https://github.com/MiguelDotL/branch-beacon',
      icon: <i className="devicon-github-original" aria-hidden />
    }]} />
            <FeaturedProjectCard title="BCBS NC — LiteHouse" subtitle="Enterprise client" description="[Placeholder copy] Enterprise health insurance platform for Blue Cross Blue Shield of North Carolina. Role, scope, and contribution to be filled in once Miguel provides details." techStack={['React', 'TypeScript', 'Enterprise']} imageURL={placeholderBcbs} actions={[{
      label: 'See Library in Use',
      url: '#'
    }]} />
        </>
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Sample Project',
    subtitle: 'Playground',
    description: 'Edit any control to preview the card layout.',
    techStack: ['React', 'TypeScript'],
    imageURL: placeholderBranchBeacon,
    actions: [{
      label: 'View',
      url: '#'
    }]
  }
}`,...x.parameters?.docs?.source}}},S=[`BranchBeacon`,`BcbsNc`,`BothFeatured`,`Playground`]}))();export{y as BcbsNc,b as BothFeatured,v as BranchBeacon,x as Playground,S as __namedExportsOrder,_ as default};