import{n as e}from"./chunk-DnJy8xQt.js";import{t}from"./jsx-runtime-9GWKKs4P.js";import{t as n}from"./FeaturedImageSlider-BPMv6f7G.js";var r,i,a,o,s,c,l,u,d;e((()=>{n(),r=t(),i={title:`Components/Primitives/SliderControls`,parameters:{layout:`centered`,docs:{description:{component:`Controls used by FeaturedImageSlider: previous/next arrows and the three dot-indicator variants (frosted, outlined, segmented progress).`}}},decorators:[e=>(0,r.jsx)(`div`,{style:{background:`var(--almost-black)`,padding:`3rem`},children:(0,r.jsx)(e,{})})]},a=({children:e})=>(0,r.jsx)(`div`,{className:`featured-image-slider`,style:{position:`relative`,width:360,height:202,background:`linear-gradient(131deg, #AA367C 28%, #4A2FBD 71%)`,borderRadius:`0.6em`,overflow:`hidden`},children:e}),o={render:()=>(0,r.jsxs)(a,{children:[(0,r.jsx)(`button`,{type:`button`,"aria-label":`Previous image`,className:`featured-image-slider__arrow featured-image-slider__arrow--prev`,style:{opacity:1},onClick:e=>e.preventDefault(),children:(0,r.jsx)(`span`,{"aria-hidden":!0,children:`‹`})}),(0,r.jsx)(`button`,{type:`button`,"aria-label":`Next image`,className:`featured-image-slider__arrow featured-image-slider__arrow--next`,style:{opacity:1},onClick:e=>e.preventDefault(),children:(0,r.jsx)(`span`,{"aria-hidden":!0,children:`›`})})]}),parameters:{docs:{description:{story:"Prev / next arrow buttons. Live behavior fades them in on `:hover` of the slider; this story forces `opacity: 1` so they render standalone."}}}},s=({variant:e,activeIndex:t=1,count:n=3})=>(0,r.jsx)(a,{children:(0,r.jsx)(`div`,{className:`featured-image-slider__dots featured-image-slider__dots--${e}`,role:`tablist`,children:Array.from({length:n}).map((e,n)=>(0,r.jsx)(`button`,{type:`button`,role:`tab`,"aria-label":`Show image ${n+1}`,"aria-selected":n===t,className:`featured-image-slider__dot ${n===t?`is-active`:``}`,onClick:e=>e.preventDefault()},n))})}),c={render:()=>(0,r.jsx)(s,{variant:`frosted`}),parameters:{docs:{description:{story:`Default indicator. Semi-transparent white circles with a backdrop-blur; active dot is fully opaque.`}}}},l={render:()=>(0,r.jsx)(s,{variant:`outlined`}),parameters:{docs:{description:{story:`Outlined variant. White-bg dots with a dark ring; active dot gets a colored fill.`}}}},u={render:()=>(0,r.jsx)(a,{children:(0,r.jsx)(`div`,{className:`featured-image-slider__segments`,role:`tablist`,children:[1,.6,0].map((e,t)=>(0,r.jsx)(`button`,{type:`button`,role:`tab`,"aria-label":`Show image ${t+1}`,"aria-selected":t===1,className:`featured-image-slider__segment`,onClick:e=>e.preventDefault(),children:(0,r.jsx)(`span`,{className:`featured-image-slider__segment-fill`,style:{width:`${e*100}%`}})},t))})}),parameters:{docs:{description:{story:`Horizontal segmented bars that fill left-to-right as autoplay progresses. Frozen here at: completed, mid-fill, empty.`}}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <SliderShell>
            {/* Force opacity: 1 — live arrows hide until the slider is
                hovered, but the story should always show them. */}
            <button type="button" aria-label="Previous image" className="featured-image-slider__arrow featured-image-slider__arrow--prev" style={{
      opacity: 1
    }} onClick={e => e.preventDefault()}>
                <span aria-hidden>‹</span>
            </button>
            <button type="button" aria-label="Next image" className="featured-image-slider__arrow featured-image-slider__arrow--next" style={{
      opacity: 1
    }} onClick={e => e.preventDefault()}>
                <span aria-hidden>›</span>
            </button>
        </SliderShell>,
  parameters: {
    docs: {
      description: {
        story: "Prev / next arrow buttons. Live behavior fades them in on \`:hover\` of the slider; this story forces \`opacity: 1\` so they render standalone."
      }
    }
  }
}`,...o.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <Dots variant="frosted" />,
  parameters: {
    docs: {
      description: {
        story: "Default indicator. Semi-transparent white circles with a backdrop-blur; active dot is fully opaque."
      }
    }
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <Dots variant="outlined" />,
  parameters: {
    docs: {
      description: {
        story: "Outlined variant. White-bg dots with a dark ring; active dot gets a colored fill."
      }
    }
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <SliderShell>
            <div className="featured-image-slider__segments" role="tablist">
                {[1, 0.6, 0].map((fill, i) => <button key={i} type="button" role="tab" aria-label={\`Show image \${i + 1}\`} aria-selected={i === 1} className="featured-image-slider__segment" onClick={e => e.preventDefault()}>
                        <span className="featured-image-slider__segment-fill" style={{
          width: \`\${fill * 100}%\`
        }} />
                    </button>)}
            </div>
        </SliderShell>,
  parameters: {
    docs: {
      description: {
        story: "Horizontal segmented bars that fill left-to-right as autoplay progresses. Frozen here at: completed, mid-fill, empty."
      }
    }
  }
}`,...u.parameters?.docs?.source}}},d=[`Arrows`,`FrostedDots`,`OutlinedDots`,`SegmentedProgress`]}))();export{o as Arrows,c as FrostedDots,l as OutlinedDots,u as SegmentedProgress,d as __namedExportsOrder,i as default};