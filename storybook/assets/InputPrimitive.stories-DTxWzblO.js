import{n as e}from"./chunk-DnJy8xQt.js";import{t}from"./jsx-runtime-Br0FyOpz.js";import{r as n,s as r,t as i}from"./esm-BCMH-Vsc.js";import{t as a}from"./Contact-D1CfNgAm.js";var o,s,c,l,u,d,f,p,m,h;e((()=>{i(),a(),o=t(),{within:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/Primitives/Input`,parameters:{layout:`fullscreen`,docs:{description:{component:"Frosted-glass form fields used in the contact section. Inputs and textarea share the same styling — white-on-blur focus state, semi-transparent background, salmon-tinted invalid border (`:user-invalid`)."}}},decorators:[e=>(0,o.jsx)(`section`,{className:`contact`,style:{background:`linear-gradient(90deg, #5b2a86 0%, #4a6fc7 100%)`,padding:`3rem`,minHeight:`300px`},children:(0,o.jsx)(`form`,{onSubmit:e=>e.preventDefault(),style:{maxWidth:600,margin:`0 auto`},noValidate:!1,children:(0,o.jsx)(e,{})})})]},l={render:()=>(0,o.jsx)(n,{children:(0,o.jsx)(r,{className:`px-1`,sm:12,children:(0,o.jsx)(`input`,{type:`text`,name:`firstName`,placeholder:`First Name *`,"aria-label":`First Name (required)`,autoComplete:`given-name`,required:!0})})}),parameters:{docs:{description:{story:`Idle input. Placeholder doubles as the visible label; semi-transparent white background; pale border.`}}}},u={render:()=>(0,o.jsxs)(n,{children:[(0,o.jsx)(r,{className:`px-1`,sm:6,children:(0,o.jsx)(`input`,{type:`text`,name:`firstName`,defaultValue:`Alex`,placeholder:`First Name *`,"aria-label":`First Name (required)`,required:!0})}),(0,o.jsx)(r,{className:`px-1`,sm:6,children:(0,o.jsx)(`input`,{type:`email`,name:`email`,defaultValue:`alex.smith@example.com`,placeholder:`Email Address *`,"aria-label":`Email Address (required)`,required:!0})}),(0,o.jsx)(r,{className:`px-1`,sm:12,children:(0,o.jsx)(`textarea`,{name:`message`,rows:4,defaultValue:`Loved your portfolio — let's chat about a senior frontend role.`,placeholder:`Message *`,"aria-label":`Message (required)`,required:!0})})]}),parameters:{docs:{description:{story:`Inputs with values. Side-by-side text + email + textarea so the typography and value rendering can be reviewed at a glance.`}}}},d={render:()=>(0,o.jsx)(n,{children:(0,o.jsx)(r,{className:`px-1`,sm:12,children:(0,o.jsx)(`input`,{type:`text`,name:`firstName`,placeholder:`First Name *`,"aria-label":`First Name (required)`,required:!0})})}),play:async({canvasElement:e})=>{s(e).getByPlaceholderText(/First Name/i).focus()},parameters:{docs:{description:{story:`Focus state. Background flips to solid white, dark text, inset shadow rim; placeholder dims.`}}}},f={render:()=>(0,o.jsx)(n,{children:(0,o.jsx)(r,{className:`px-1`,sm:12,children:(0,o.jsx)(`input`,{type:`email`,name:`email`,defaultValue:`not-an-email`,placeholder:`Email Address *`,"aria-label":`Email Address (required)`,"aria-invalid":`true`,required:!0})})}),parameters:{docs:{description:{story:'Invalid state. Red border, faint red background fill, outer red ring. Driven by `aria-invalid="true"` here; in production the same styling fires on `:user-invalid` after the user enters a bad value and blurs.'}}}},p={render:()=>(0,o.jsx)(n,{children:(0,o.jsx)(r,{className:`px-1`,sm:12,children:(0,o.jsx)(`input`,{type:`email`,name:`email`,defaultValue:`not-an-email`,placeholder:`Email Address *`,"aria-label":`Email Address (required)`,"aria-invalid":`true`,required:!0})})}),play:async({canvasElement:e})=>{s(e).getByPlaceholderText(/Email Address/i).focus()},parameters:{docs:{description:{story:`Invalid + focused. Background flips to solid white and text turns dark (focus styling), but the red border remains so the error stays visible while the user edits.`}}}},m={render:()=>(0,o.jsx)(n,{children:(0,o.jsx)(r,{className:`px-1`,sm:12,children:(0,o.jsx)(`textarea`,{name:`message`,rows:6,placeholder:`Message *`,"aria-label":`Message (required)`,autoComplete:`off`,required:!0})})}),parameters:{docs:{description:{story:"Multiline message textarea. Inherits the same `.contact form input, .contact form textarea` ruleset — including focus and invalid states."}}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <Row>
            <Col className="px-1" sm={12}>
                <input type="text" name="firstName" placeholder="First Name *" aria-label="First Name (required)" autoComplete="given-name" required />
            </Col>
        </Row>,
  parameters: {
    docs: {
      description: {
        story: "Idle input. Placeholder doubles as the visible label; semi-transparent white background; pale border."
      }
    }
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <Row>
            <Col className="px-1" sm={6}>
                <input type="text" name="firstName" defaultValue="Alex" placeholder="First Name *" aria-label="First Name (required)" required />
            </Col>
            <Col className="px-1" sm={6}>
                <input type="email" name="email" defaultValue="alex.smith@example.com" placeholder="Email Address *" aria-label="Email Address (required)" required />
            </Col>
            <Col className="px-1" sm={12}>
                <textarea name="message" rows={4} defaultValue="Loved your portfolio — let's chat about a senior frontend role." placeholder="Message *" aria-label="Message (required)" required />
            </Col>
        </Row>,
  parameters: {
    docs: {
      description: {
        story: "Inputs with values. Side-by-side text + email + textarea so the typography and value rendering can be reviewed at a glance."
      }
    }
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <Row>
            <Col className="px-1" sm={12}>
                <input type="text" name="firstName" placeholder="First Name *" aria-label="First Name (required)" required />
            </Col>
        </Row>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    canvas.getByPlaceholderText(/First Name/i).focus();
  },
  parameters: {
    docs: {
      description: {
        story: "Focus state. Background flips to solid white, dark text, inset shadow rim; placeholder dims."
      }
    }
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <Row>
            <Col className="px-1" sm={12}>
                <input type="email" name="email" defaultValue="not-an-email" placeholder="Email Address *" aria-label="Email Address (required)" aria-invalid="true" required />
            </Col>
        </Row>,
  parameters: {
    docs: {
      description: {
        story: "Invalid state. Red border, faint red background fill, outer red ring. Driven by \`aria-invalid=\\"true\\"\` here; in production the same styling fires on \`:user-invalid\` after the user enters a bad value and blurs."
      }
    }
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <Row>
            <Col className="px-1" sm={12}>
                <input type="email" name="email" defaultValue="not-an-email" placeholder="Email Address *" aria-label="Email Address (required)" aria-invalid="true" required />
            </Col>
        </Row>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    canvas.getByPlaceholderText(/Email Address/i).focus();
  },
  parameters: {
    docs: {
      description: {
        story: "Invalid + focused. Background flips to solid white and text turns dark (focus styling), but the red border remains so the error stays visible while the user edits."
      }
    }
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <Row>
            <Col className="px-1" sm={12}>
                <textarea name="message" rows={6} placeholder="Message *" aria-label="Message (required)" autoComplete="off" required />
            </Col>
        </Row>,
  parameters: {
    docs: {
      description: {
        story: "Multiline message textarea. Inherits the same \`.contact form input, .contact form textarea\` ruleset — including focus and invalid states."
      }
    }
  }
}`,...m.parameters?.docs?.source}}},h=[`Default`,`Filled`,`Focused`,`Invalid`,`InvalidFocused`,`Textarea`]}))();export{l as Default,u as Filled,d as Focused,f as Invalid,p as InvalidFocused,m as Textarea,h as __namedExportsOrder,c as default};