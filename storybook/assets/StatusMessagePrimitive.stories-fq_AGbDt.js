import{n as e}from"./chunk-DnJy8xQt.js";import{t}from"./jsx-runtime-Cg-Z1Aio.js";import{t as n}from"./Contact-D1CfNgAm.js";import{n as r,t as i}from"./FormStatusMessage-B4XYhyn4.js";var a,o,s,c,l;e((()=>{r(),n(),a=t(),o={title:`Components/Primitives/ContactFormStatus`,component:i,parameters:{layout:`fullscreen`,docs:{description:{component:`Inline status banner shown after a **contact-form** submit attempt. Styling is contact-form-specific, not a generic status badge.`}}},decorators:[e=>(0,a.jsx)(`section`,{className:`contact`,style:{background:`linear-gradient(90deg, #5b2a86 0%, #4a6fc7 100%)`,padding:`3rem`,minHeight:`300px`},children:(0,a.jsx)(`form`,{onSubmit:e=>e.preventDefault(),style:{maxWidth:600,margin:`0 auto`},children:(0,a.jsx)(`div`,{className:`submit-container`,children:(0,a.jsx)(e,{})})})})]},s={args:{variant:`success`,message:`Thanks for reaching out — I'll get back to you shortly.`}},c={args:{variant:`danger`,message:`Oops! Request failed — please try again.`}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'success',
    message: "Thanks for reaching out — I'll get back to you shortly."
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'danger',
    message: 'Oops! Request failed — please try again.'
  }
}`,...c.parameters?.docs?.source}}},l=[`Success`,`Error`]}))();export{c as Error,s as Success,l as __namedExportsOrder,o as default};