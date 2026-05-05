import{a as e,n as t}from"./chunk-DnJy8xQt.js";import{O as n}from"./iframe-CcoQdvlX.js";import{t as r}from"./jsx-runtime-H5zXk7e9.js";import{t as i}from"./Contact-D1CfNgAm.js";import{i as a,n as o,r as s,t as c}from"./ContactForm-FE5wRd_6.js";var l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D;t((()=>{l=e(n(),1),s(),o(),i(),u=r(),{expect:d,userEvent:f,within:p}=__STORYBOOK_MODULE_TEST__,m={title:`Components/Composites/ContactForm`,component:c,decorators:[e=>(0,u.jsx)(`section`,{className:`contact`,style:{background:`linear-gradient(90deg, #5b2a86 0%, #4a6fc7 100%)`,padding:`3rem`,minHeight:`600px`},children:(0,u.jsx)(`div`,{style:{maxWidth:`600px`,margin:`0 auto`},children:(0,u.jsx)(e,{})})})],parameters:{layout:`fullscreen`,docs:{description:{component:"The contact form proper — five fields, honeypot spam protection, staged success / error animations, and a `VITE_MOCK_FORM` dev mock."}}}},h={},g=async e=>{await f.type(e.getByPlaceholderText(/First Name/i),`Alex`),await f.type(e.getByPlaceholderText(/Last Name/i),`Smith`),await f.type(e.getByPlaceholderText(/Email Address/i),`alex.smith@example.com`),await f.type(e.getByPlaceholderText(/Phone Number/i),`5555550100`),await f.type(e.getByPlaceholderText(/Message/i),`Loved your portfolio — would like to chat about a senior frontend role.`)},_={play:async({canvasElement:e})=>{let t=p(e);await g(t),await d(t.getByPlaceholderText(/First Name/i)).toHaveValue(`Alex`)}},v=(e,t=800)=>{(0,l.useEffect)(()=>{let n=a.post;return a.post=()=>new Promise((n,r)=>{e.kind!==`never-resolves`&&setTimeout(()=>{e.kind===`success`?n({status:200,data:{success:!0,message:`[MOCK] Email sent`}}):e.kind===`spam-rejected`?n({status:200,data:{success:!1,message:`[MOCK] Spam detected`}}):e.kind===`network-error`&&r(new globalThis.Error(`[MOCK] Network request failed`))},t)}),()=>{a.post=n}},[e,t])},y=({response:e,delayMs:t})=>(v(e,t),(0,u.jsx)(c,{})),b={render:()=>(0,u.jsx)(y,{response:{kind:`never-resolves`}}),play:async({canvasElement:e})=>{let t=p(e);await g(t),await f.click(t.getByRole(`button`,{name:/send/i})),await d(t.getByRole(`button`,{name:/sending/i})).toBeDisabled()}},x={render:()=>(0,u.jsx)(y,{response:{kind:`success`},delayMs:50}),play:async({canvasElement:e})=>{let t=p(e);await g(t),await f.click(t.getByRole(`button`,{name:/send/i})),await d(await t.findByText(/Thanks for reaching out/i)).toBeInTheDocument()}},S={render:()=>(0,u.jsx)(y,{response:{kind:`network-error`},delayMs:50}),play:async({canvasElement:e})=>{let t=p(e);await g(t),await f.click(t.getByRole(`button`,{name:/send/i})),await d(await t.findByText(/Oops! Request Failed/i)).toBeInTheDocument()}},C={play:async({canvasElement:e})=>{let t=p(e);await f.type(t.getByPlaceholderText(/First Name/i),`Alex`),await f.type(t.getByPlaceholderText(/Email Address/i),`alex.smith@example.com`),await f.type(t.getByPlaceholderText(/Phone Number/i),`5555550100`),await f.type(t.getByPlaceholderText(/Message/i),`Loved your portfolio — would like to chat about a senior frontend role.`),await f.click(t.getByRole(`button`,{name:/send/i}))}},w={play:async({canvasElement:e})=>{let t=p(e);await f.type(t.getByPlaceholderText(/First Name/i),`Alex`),await f.type(t.getByPlaceholderText(/Last Name/i),`Smith`),await f.type(t.getByPlaceholderText(/Email Address/i),`not-an-email`),await f.type(t.getByPlaceholderText(/Message/i),`Loved your portfolio — would like to chat about a senior frontend role.`),await f.click(t.getByRole(`button`,{name:/send/i}))}},T={play:async({canvasElement:e})=>{let t=p(e);await f.type(t.getByPlaceholderText(/Last Name/i),`Smith`),await f.type(t.getByPlaceholderText(/Message/i),`Loved your portfolio — would like to chat about a senior frontend role.`),await f.click(t.getByRole(`button`,{name:/send/i})),await d(t.getByPlaceholderText(/First Name/i)).toHaveFocus()}},E={play:async({canvasElement:e})=>{let t=p(e);await f.type(t.getByPlaceholderText(/First Name/i),`Alex`),await f.type(t.getByPlaceholderText(/Last Name/i),`Smith`),await f.type(t.getByPlaceholderText(/Email Address/i),`alex.smith@example.com`),await f.type(t.getByPlaceholderText(/Message/i),`Hi.`),await f.click(t.getByRole(`button`,{name:/send/i}))}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{}`,...h.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await fillFields(canvas);
    await expect(canvas.getByPlaceholderText(/First Name/i)).toHaveValue('Alex');
  }
}`,..._.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <MockedContactForm response={{
    kind: 'never-resolves'
  }} />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await fillFields(canvas);
    await userEvent.click(canvas.getByRole('button', {
      name: /send/i
    }));
    await expect(canvas.getByRole('button', {
      name: /sending/i
    })).toBeDisabled();
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <MockedContactForm response={{
    kind: 'success'
  }} delayMs={50} />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await fillFields(canvas);
    await userEvent.click(canvas.getByRole('button', {
      name: /send/i
    }));
    await expect(await canvas.findByText(/Thanks for reaching out/i)).toBeInTheDocument();
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <MockedContactForm response={{
    kind: 'network-error'
  }} delayMs={50} />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await fillFields(canvas);
    await userEvent.click(canvas.getByRole('button', {
      name: /send/i
    }));
    await expect(await canvas.findByText(/Oops! Request Failed/i)).toBeInTheDocument();
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.type(canvas.getByPlaceholderText(/First Name/i), 'Alex');
    await userEvent.type(canvas.getByPlaceholderText(/Email Address/i), 'alex.smith@example.com');
    await userEvent.type(canvas.getByPlaceholderText(/Phone Number/i), '5555550100');
    await userEvent.type(canvas.getByPlaceholderText(/Message/i), "Loved your portfolio — would like to chat about a senior frontend role.");
    await userEvent.click(canvas.getByRole('button', {
      name: /send/i
    }));
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.type(canvas.getByPlaceholderText(/First Name/i), 'Alex');
    await userEvent.type(canvas.getByPlaceholderText(/Last Name/i), 'Smith');
    await userEvent.type(canvas.getByPlaceholderText(/Email Address/i), 'not-an-email');
    await userEvent.type(canvas.getByPlaceholderText(/Message/i), "Loved your portfolio — would like to chat about a senior frontend role.");
    await userEvent.click(canvas.getByRole('button', {
      name: /send/i
    }));
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.type(canvas.getByPlaceholderText(/Last Name/i), 'Smith');
    await userEvent.type(canvas.getByPlaceholderText(/Message/i), "Loved your portfolio — would like to chat about a senior frontend role.");
    await userEvent.click(canvas.getByRole('button', {
      name: /send/i
    }));
    await expect(canvas.getByPlaceholderText(/First Name/i)).toHaveFocus();
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.type(canvas.getByPlaceholderText(/First Name/i), 'Alex');
    await userEvent.type(canvas.getByPlaceholderText(/Last Name/i), 'Smith');
    await userEvent.type(canvas.getByPlaceholderText(/Email Address/i), 'alex.smith@example.com');
    await userEvent.type(canvas.getByPlaceholderText(/Message/i), 'Hi.');
    await userEvent.click(canvas.getByRole('button', {
      name: /send/i
    }));
  }
}`,...E.parameters?.docs?.source}}},D=[`Empty`,`Filled`,`Submitting`,`Success`,`Failed`,`Error`,`MalformedEmail`,`SubmittedInvalid`,`MessageTooShort`]}))();export{h as Empty,C as Error,S as Failed,_ as Filled,w as MalformedEmail,E as MessageTooShort,T as SubmittedInvalid,b as Submitting,x as Success,D as __namedExportsOrder,m as default};