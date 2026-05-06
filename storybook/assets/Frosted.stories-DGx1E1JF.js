import{n as e,r as t}from"./chunk-DnJy8xQt.js";import{t as n}from"./jsx-runtime-HMuSy4bC.js";var r=e((()=>{})),i=t({Default:()=>u,TuneBlur:()=>d,TuneTint:()=>f,__namedExportsOrder:()=>p,default:()=>l}),a,o,s,c,l,u,d,f,p,m=e((()=>{r(),a=n(),o=Array.from({length:200},()=>`frosted • backdrop-filter • blur • saturate `).join(``),s=({children:e})=>(0,a.jsxs)(`div`,{style:{position:`relative`,background:`linear-gradient(131deg, #AA367C 0%, #4A2FBD 50%, #1d1d3f 100%)`,padding:`4em 2em`,display:`flex`,gap:`2em`,justifyContent:`center`,alignItems:`center`,flexWrap:`wrap`,minHeight:`60vh`,overflow:`hidden`},children:[(0,a.jsx)(`div`,{"aria-hidden":!0,style:{position:`absolute`,inset:0,padding:`1em`,fontFamily:`monospace`,fontSize:10,lineHeight:1.4,color:`rgba(255,255,255,0.35)`,wordBreak:`break-all`,userSelect:`none`,pointerEvents:`none`},children:o}),(0,a.jsx)(`div`,{style:{position:`relative`,display:`flex`,gap:`2em`,flexWrap:`wrap`,justifyContent:`center`},children:e})]}),c=({label:e,style:t})=>(0,a.jsx)(`div`,{className:`frosted`,style:{color:`#fff`,padding:`2em 3em`,borderRadius:12,border:`1px solid rgba(255,255,255,0.15)`,fontWeight:600,...t},children:e}),l={title:`Foundations/Material/Frosted`,parameters:{layout:`fullscreen`,docs:{description:{component:"Glass material — `.frosted`. Tune `--frosted-bg`, `--frosted-blur`, `--frosted-saturate`."}}}},u={render:()=>(0,a.jsx)(s,{children:(0,a.jsx)(c,{label:`default (10px blur, 1.3 saturate)`})})},d={render:()=>(0,a.jsxs)(s,{children:[(0,a.jsx)(c,{label:`4px blur`,style:{"--frosted-blur":`4px`}}),(0,a.jsx)(c,{label:`10px blur`,style:{"--frosted-blur":`10px`}}),(0,a.jsx)(c,{label:`20px blur`,style:{"--frosted-blur":`20px`}})]})},f={render:()=>(0,a.jsxs)(s,{children:[(0,a.jsx)(c,{label:`cool tint`,style:{"--frosted-bg":`rgba(140, 180, 255, 0.08)`}}),(0,a.jsx)(c,{label:`warm tint`,style:{"--frosted-bg":`rgba(255, 200, 140, 0.08)`}}),(0,a.jsx)(c,{label:`dark tint`,style:{"--frosted-bg":`rgba(0, 0, 0, 0.25)`}})]})},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <Stage>
            <Tile label="default (10px blur, 1.3 saturate)" />
        </Stage>
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <Stage>
            <Tile label="4px blur" style={{
      ['--frosted-blur' as string]: '4px'
    } as React.CSSProperties} />
            <Tile label="10px blur" style={{
      ['--frosted-blur' as string]: '10px'
    } as React.CSSProperties} />
            <Tile label="20px blur" style={{
      ['--frosted-blur' as string]: '20px'
    } as React.CSSProperties} />
        </Stage>
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <Stage>
            <Tile label="cool tint" style={{
      ['--frosted-bg' as string]: 'rgba(140, 180, 255, 0.08)'
    } as React.CSSProperties} />
            <Tile label="warm tint" style={{
      ['--frosted-bg' as string]: 'rgba(255, 200, 140, 0.08)'
    } as React.CSSProperties} />
            <Tile label="dark tint" style={{
      ['--frosted-bg' as string]: 'rgba(0, 0, 0, 0.25)'
    } as React.CSSProperties} />
        </Stage>
}`,...f.parameters?.docs?.source}}},p=[`Default`,`TuneBlur`,`TuneTint`]}));m();export{u as Default,d as TuneBlur,f as TuneTint,p as __namedExportsOrder,l as default,m as n,i as t};