import{n as e,r as t}from"./chunk-DnJy8xQt.js";import{t as n}from"./jsx-runtime-DI1hhrx8.js";var r=e((()=>{})),i=t({AllSizes:()=>l,CustomShadow:()=>u,__namedExportsOrder:()=>d,default:()=>c}),a,o,s,c,l,u,d,f=e((()=>{r(),a=n(),o=({label:e,extraClass:t=``})=>(0,a.jsx)(`div`,{className:`lift ${t}`.trim(),style:{background:`#2a2a2a`,color:`#fff`,padding:`2em 3em`,borderRadius:12,fontWeight:600,cursor:`pointer`,userSelect:`none`},children:e}),s=({children:e})=>(0,a.jsx)(`div`,{style:{background:`#1f1f1f`,padding:`4em 2em`,display:`flex`,gap:`2em`,justifyContent:`center`,flexWrap:`wrap`},children:e}),c={title:`Foundations/Hover/Lift`,parameters:{layout:`fullscreen`,docs:{description:{component:"Hover lift utility — `.lift`, `.lift--md`, `.lift--lg`. Translates -2/-4/-6px and boosts box-shadow. 0.2s ease. Override shadow with `--lift-shadow`."}}}},l={render:()=>(0,a.jsxs)(s,{children:[(0,a.jsx)(o,{label:`default (-2px)`}),(0,a.jsx)(o,{label:`lift--md (-4px)`,extraClass:`lift--md`}),(0,a.jsx)(o,{label:`lift--lg (-6px)`,extraClass:`lift--lg`})]})},u={render:()=>(0,a.jsx)(s,{children:(0,a.jsx)(`div`,{className:`lift lift--md`,style:{background:`#2a2a2a`,color:`#fff`,padding:`2em 3em`,borderRadius:12,fontWeight:600,cursor:`pointer`,"--lift-shadow":`0 12px 32px rgba(170, 54, 124, 0.45)`},children:`pink-glow lift`})})},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <Stage>
            <Sample label="default (-2px)" />
            <Sample label="lift--md (-4px)" extraClass="lift--md" />
            <Sample label="lift--lg (-6px)" extraClass="lift--lg" />
        </Stage>
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <Stage>
            <div className="lift lift--md" style={{
      background: '#2a2a2a',
      color: '#fff',
      padding: '2em 3em',
      borderRadius: 12,
      fontWeight: 600,
      cursor: 'pointer',
      ['--lift-shadow' as string]: '0 12px 32px rgba(170, 54, 124, 0.45)'
    } as React.CSSProperties}>
                pink-glow lift
            </div>
        </Stage>
}`,...u.parameters?.docs?.source}}},d=[`AllSizes`,`CustomShadow`]}));f();export{l as AllSizes,u as CustomShadow,d as __namedExportsOrder,c as default,f as n,i as t};