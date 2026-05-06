import{n as e,r as t}from"./chunk-DnJy8xQt.js";import{t as n}from"./jsx-runtime-DI1hhrx8.js";var r=e((()=>{})),i=t({CyanMagenta:()=>u,Default:()=>l,FlatRectangle:()=>d,__namedExportsOrder:()=>f,default:()=>c}),a,o,s,c,l,u,d,f,p=e((()=>{r(),a=n(),o=({primaryLabel:e=`Primary`,secondaryLabel:t=`Secondary`,style:n})=>(0,a.jsxs)(`div`,{className:`gradient-pair`,style:{display:`inline-flex`,gap:`0.6em`,...n},children:[(0,a.jsx)(`a`,{className:`gradient-pair__primary`,href:`#`,onClick:e=>e.preventDefault(),style:{display:`inline-flex`,alignItems:`center`,padding:`0.7em 1.4em`,borderRadius:999,fontWeight:600,textDecoration:`none`,lineHeight:1.2},children:e}),(0,a.jsx)(`a`,{className:`gradient-pair__secondary`,href:`#`,onClick:e=>e.preventDefault(),style:{display:`inline-flex`,alignItems:`center`,padding:`calc(0.7em - 2px) calc(1.4em - 2px)`,borderRadius:999,fontWeight:600,textDecoration:`none`,lineHeight:1.2},children:t})]}),s=({children:e})=>(0,a.jsx)(`div`,{style:{background:`#fff`,padding:`6em 3em`,display:`flex`,justifyContent:`center`,alignItems:`center`,minHeight:`60vh`},children:e}),c={title:`Foundations/Hover/GradientPair`,parameters:{layout:`fullscreen`,docs:{description:{component:`Coordinated hover on a button pair. Hover the secondary to see the primary rotate its gradient 180° while the secondary fills.`}}}},l={render:()=>(0,a.jsx)(s,{children:(0,a.jsx)(o,{primaryLabel:`The Repo`,secondaryLabel:`Storybook`})})},u={render:()=>(0,a.jsx)(s,{children:(0,a.jsx)(o,{primaryLabel:`Primary`,secondaryLabel:`Secondary`,style:{"--gp-color-1":`#06b6d4`,"--gp-color-2":`#ec4899`}})})},d={render:()=>(0,a.jsx)(s,{children:(0,a.jsxs)(`div`,{className:`gradient-pair`,style:{display:`inline-flex`},children:[(0,a.jsx)(`a`,{className:`gradient-pair__primary`,href:`#`,onClick:e=>e.preventDefault(),style:{display:`inline-flex`,alignItems:`center`,padding:`0.9em 2em`,fontWeight:600,textDecoration:`none`},children:`Primary`}),(0,a.jsx)(`a`,{className:`gradient-pair__secondary`,href:`#`,onClick:e=>e.preventDefault(),style:{display:`inline-flex`,alignItems:`center`,padding:`calc(0.9em - 2px) calc(2em - 2px)`,fontWeight:600,textDecoration:`none`},children:`Secondary`})]})})},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <Stage>
            <Pair primaryLabel="The Repo" secondaryLabel="Storybook" />
        </Stage>
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <Stage>
            <Pair primaryLabel="Primary" secondaryLabel="Secondary" style={{
      ['--gp-color-1' as string]: '#06b6d4',
      ['--gp-color-2' as string]: '#ec4899'
    } as React.CSSProperties} />
        </Stage>
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <Stage>
            <div className="gradient-pair" style={{
      display: 'inline-flex'
    }}>
                <a className="gradient-pair__primary" href="#" onClick={e => e.preventDefault()} style={{
        display: 'inline-flex',
        alignItems: 'center',
        padding: '0.9em 2em',
        fontWeight: 600,
        textDecoration: 'none'
      }}>
                    Primary
                </a>
                <a className="gradient-pair__secondary" href="#" onClick={e => e.preventDefault()} style={{
        display: 'inline-flex',
        alignItems: 'center',
        padding: 'calc(0.9em - 2px) calc(2em - 2px)',
        fontWeight: 600,
        textDecoration: 'none'
      }}>
                    Secondary
                </a>
            </div>
        </Stage>
}`,...d.parameters?.docs?.source}}},f=[`Default`,`CyanMagenta`,`FlatRectangle`]}));p();export{u as CyanMagenta,l as Default,d as FlatRectangle,f as __namedExportsOrder,c as default,p as n,i as t};