import{n as e}from"./chunk-DnJy8xQt.js";import{t}from"./jsx-runtime-Dnh4WvLG.js";import{r as n,s as r,t as i}from"./esm-Dihvd0h-.js";import{t as a}from"./Projects-SBCY6n6L.js";import{i as o,r as s,t as c}from"./dist-kKSeIrs2.js";import{t as l}from"./Contact-D1CfNgAm.js";import{t as u}from"./NavBar-C218oIrj.js";var d,f,p,m,h,g,_,v,y;e((()=>{i(),c(),a(),l(),u(),d=t(),f={title:`Components/Primitives/Button`,parameters:{layout:`centered`,docs:{description:{component:"Catalogue of every button-shaped primitive used in the live portfolio. Variants live under different parent selectors (`.contact form button`, `.btn-outline-secondary`, `.navbar-text .resume-button`), so each story wraps in the appropriate ancestor."}}}},p=({children:e})=>(0,d.jsx)(`div`,{style:{background:`var(--almost-black)`,padding:`3rem`},children:e}),m={render:()=>(0,d.jsx)(p,{children:(0,d.jsx)(`section`,{className:`projects`,style:{padding:0,background:`transparent`},children:(0,d.jsx)(n,{children:(0,d.jsx)(r,{xs:`auto`,children:(0,d.jsx)(`div`,{className:`project-card`,children:(0,d.jsx)(`a`,{href:`#`,onClick:e=>e.preventDefault(),className:`btn btn-outline-secondary`,children:`View Site`})})})})})}),parameters:{docs:{description:{story:'ProjectCard / FeaturedProjectCard action link. Markup is `<a className="btn btn-outline-secondary">`, scoped under `.project-card`.'}}}},h={render:()=>(0,d.jsx)(p,{children:(0,d.jsx)(`section`,{className:`projects`,style:{padding:0,background:`transparent`},children:(0,d.jsx)(n,{children:(0,d.jsx)(r,{xs:`auto`,children:(0,d.jsx)(`div`,{className:`project-card`,children:(0,d.jsxs)(`span`,{className:`btn btn-outline-secondary featured-project-action--disabled`,title:`Private repository`,"aria-disabled":`true`,children:[`Source Code`,(0,d.jsx)(`span`,{className:`featured-project-action-lock`,"aria-hidden":!0,children:`🔒`})]})})})})})}),parameters:{docs:{description:{story:"Disabled variant rendered as a `<span aria-disabled>`. Used when a featured project's repo is private."}}}},g={render:()=>(0,d.jsx)(p,{children:(0,d.jsxs)(`button`,{onClick:e=>e.preventDefault(),style:{background:`none`,border:`none`,color:`var(--font-color)`,fontWeight:700,fontSize:20,letterSpacing:`0.8px`,display:`flex`,alignItems:`center`,transition:`all 0.3s ease-in-out`,cursor:`pointer`},children:[`Let's Chat`,(0,d.jsx)(o,{size:25,style:{marginLeft:10}})]})}),parameters:{docs:{description:{story:"Hero section call-to-action. Transparent button, bold white text, ArrowRightCircle icon. The arrow rotates 90° on hover in the live `.hero button:hover svg` rule."}}}},_={render:()=>(0,d.jsx)(`section`,{className:`contact`,style:{background:`linear-gradient(90deg, #5b2a86 0%, #4a6fc7 100%)`,padding:`3rem`},children:(0,d.jsx)(`form`,{onSubmit:e=>e.preventDefault(),children:(0,d.jsx)(`div`,{className:`submit-container`,children:(0,d.jsx)(`button`,{type:`submit`,children:(0,d.jsx)(`span`,{children:`Send`})})})})}),parameters:{docs:{description:{story:"Contact-form submit button. Hover swaps to a dark fill via a `::before` pseudo-element."}}}},v={render:()=>(0,d.jsx)(p,{children:(0,d.jsx)(`span`,{className:`navbar-text`,style:{position:`relative`,zIndex:0},children:(0,d.jsxs)(`button`,{className:`resume-button`,onClick:e=>e.preventDefault(),children:[(0,d.jsx)(s,{size:20,className:`me-2`}),(0,d.jsx)(`span`,{children:`My Resume`})]})})}),parameters:{docs:{description:{story:"Resume-download button on the right side of the nav bar. White outline, gradient fill animates in from the left on hover via a `::before` pseudo-element."}}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <DarkBg>
            <section className="projects" style={{
      padding: 0,
      background: 'transparent'
    }}>
                <Row>
                    <Col xs="auto">
                        <div className="project-card">
                            <a href="#" onClick={e => e.preventDefault()} className="btn btn-outline-secondary">
                                View Site
                            </a>
                        </div>
                    </Col>
                </Row>
            </section>
        </DarkBg>,
  parameters: {
    docs: {
      description: {
        story: "ProjectCard / FeaturedProjectCard action link. Markup is \`<a className=\\"btn btn-outline-secondary\\">\`, scoped under \`.project-card\`."
      }
    }
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <DarkBg>
            <section className="projects" style={{
      padding: 0,
      background: 'transparent'
    }}>
                <Row>
                    <Col xs="auto">
                        <div className="project-card">
                            <span className="btn btn-outline-secondary featured-project-action--disabled" title="Private repository" aria-disabled="true">
                                Source Code
                                <span className="featured-project-action-lock" aria-hidden>
                                    🔒
                                </span>
                            </span>
                        </div>
                    </Col>
                </Row>
            </section>
        </DarkBg>,
  parameters: {
    docs: {
      description: {
        story: "Disabled variant rendered as a \`<span aria-disabled>\`. Used when a featured project's repo is private."
      }
    }
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <DarkBg>
            <button onClick={e => e.preventDefault()} style={{
      background: 'none',
      border: 'none',
      color: 'var(--font-color)',
      fontWeight: 700,
      fontSize: 20,
      letterSpacing: '0.8px',
      display: 'flex',
      alignItems: 'center',
      transition: 'all 0.3s ease-in-out',
      cursor: 'pointer'
    }}>
                Let&apos;s Chat
                <ArrowRightCircle size={25} style={{
        marginLeft: 10
      }} />
            </button>
        </DarkBg>,
  parameters: {
    docs: {
      description: {
        story: "Hero section call-to-action. Transparent button, bold white text, ArrowRightCircle icon. The arrow rotates 90° on hover in the live \`.hero button:hover svg\` rule."
      }
    }
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <section className="contact" style={{
    background: 'linear-gradient(90deg, #5b2a86 0%, #4a6fc7 100%)',
    padding: '3rem'
  }}>
            <form onSubmit={e => e.preventDefault()}>
                <div className="submit-container">
                    <button type="submit">
                        <span>Send</span>
                    </button>
                </div>
            </form>
        </section>,
  parameters: {
    docs: {
      description: {
        story: "Contact-form submit button. Hover swaps to a dark fill via a \`::before\` pseudo-element."
      }
    }
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <DarkBg>
            <span className="navbar-text" style={{
      position: 'relative',
      zIndex: 0
    }}>
                <button className="resume-button" onClick={e => e.preventDefault()}>
                    <FileEarmarkText size={20} className="me-2" />
                    <span>My Resume</span>
                </button>
            </span>
        </DarkBg>,
  parameters: {
    docs: {
      description: {
        story: "Resume-download button on the right side of the nav bar. White outline, gradient fill animates in from the left on hover via a \`::before\` pseudo-element."
      }
    }
  }
}`,...v.parameters?.docs?.source}}},y=[`OutlineSecondary`,`OutlineSecondaryDisabled`,`HeroCTA`,`ContactSubmit`,`ResumeNavButton`]}))();export{_ as ContactSubmit,g as HeroCTA,m as OutlineSecondary,h as OutlineSecondaryDisabled,v as ResumeNavButton,y as __namedExportsOrder,f as default};