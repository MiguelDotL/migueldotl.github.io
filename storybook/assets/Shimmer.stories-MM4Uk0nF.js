import{n as e,r as t}from"./chunk-DnJy8xQt.js";import{t as n}from"./jsx-runtime-Cn-WOgQW.js";var r=e((()=>{})),i=t({SkeletonCard:()=>l,SpeedKnob:()=>u,__namedExportsOrder:()=>d,default:()=>c}),a,o,s,c,l,u,d,f=e((()=>{r(),a=n(),o=({width:e=`100%`,height:t=16,style:n})=>(0,a.jsx)(`div`,{className:`shimmer`,style:{width:e,height:t,marginBottom:12,...n}}),s=({children:e})=>(0,a.jsx)(`div`,{style:{background:`#1f1f1f`,padding:`4em 3em`,minHeight:`60vh`},children:e}),c={title:`Foundations/Motion/Shimmer`,parameters:{layout:`fullscreen`,docs:{description:{component:"Skeleton-loading sweep. `.shimmer` on any block element with a fixed size."}}}},l={render:()=>(0,a.jsx)(s,{children:(0,a.jsxs)(`div`,{style:{maxWidth:480},children:[(0,a.jsx)(o,{height:24,width:`60%`,style:{marginBottom:24}}),(0,a.jsx)(o,{height:140,style:{marginBottom:24,borderRadius:8}}),(0,a.jsx)(o,{height:14}),(0,a.jsx)(o,{height:14}),(0,a.jsx)(o,{height:14,width:`80%`})]})})},u={render:()=>(0,a.jsxs)(s,{children:[(0,a.jsx)(`p`,{style:{color:`#fff`,marginBottom:12},children:`fast (0.6s)`}),(0,a.jsx)(o,{height:20,style:{"--shimmer-duration":`0.6s`}}),(0,a.jsx)(`p`,{style:{color:`#fff`,margin:`20px 0 12px`},children:`default (1.6s)`}),(0,a.jsx)(o,{height:20}),(0,a.jsx)(`p`,{style:{color:`#fff`,margin:`20px 0 12px`},children:`slow (3s)`}),(0,a.jsx)(o,{height:20,style:{"--shimmer-duration":`3s`}})]})},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <Stage>
            <div style={{
      maxWidth: 480
    }}>
                <Bar height={24} width="60%" style={{
        marginBottom: 24
      }} />
                <Bar height={140} style={{
        marginBottom: 24,
        borderRadius: 8
      }} />
                <Bar height={14} />
                <Bar height={14} />
                <Bar height={14} width="80%" />
            </div>
        </Stage>
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <Stage>
            <p style={{
      color: '#fff',
      marginBottom: 12
    }}>fast (0.6s)</p>
            <Bar height={20} style={{
      ['--shimmer-duration' as string]: '0.6s'
    } as React.CSSProperties} />
            <p style={{
      color: '#fff',
      margin: '20px 0 12px'
    }}>default (1.6s)</p>
            <Bar height={20} />
            <p style={{
      color: '#fff',
      margin: '20px 0 12px'
    }}>slow (3s)</p>
            <Bar height={20} style={{
      ['--shimmer-duration' as string]: '3s'
    } as React.CSSProperties} />
        </Stage>
}`,...u.parameters?.docs?.source}}},d=[`SkeletonCard`,`SpeedKnob`]}));f();export{l as SkeletonCard,u as SpeedKnob,d as __namedExportsOrder,c as default,f as n,i as t};