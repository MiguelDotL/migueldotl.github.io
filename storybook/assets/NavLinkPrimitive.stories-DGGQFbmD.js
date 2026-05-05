import{n as e}from"./chunk-DnJy8xQt.js";import{t}from"./jsx-runtime-DjCnsSHV.js";import{t as n}from"./NavBar-C218oIrj.js";var r,i,a,o,s,c;e((()=>{n(),r=t(),i={title:`Components/Primitives/NavLink`,parameters:{layout:`centered`,docs:{description:{component:`Top-level nav link rendered in the NavBar. Three meaningful states: idle (60% opacity), hover (100% opacity), active (100% opacity, identical visual to hover).`}}},decorators:[e=>(0,r.jsx)(`nav`,{className:`navbar`,style:{background:`var(--almost-black)`,padding:`1.5rem 2rem`,position:`static`},children:(0,r.jsx)(`div`,{className:`navbar-nav`,style:{flexDirection:`row`},children:(0,r.jsx)(e,{})})})]},a={render:()=>(0,r.jsx)(`a`,{href:`#`,onClick:e=>e.preventDefault(),className:`nav-link navbar-link`,children:`Home`}),parameters:{docs:{description:{story:`Inactive link. White text at 60% opacity.`}}}},o={render:()=>(0,r.jsx)(`a`,{href:`#`,onClick:e=>e.preventDefault(),className:`nav-link navbar-link active`,children:`Projects`}),parameters:{docs:{description:{story:`Active link — applied by the section-tracker on the link whose section is currently in viewport. Opacity goes to 100%.`}}}},s={render:()=>(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(`a`,{href:`#`,onClick:e=>e.preventDefault(),className:`nav-link navbar-link active`,children:`Home`}),(0,r.jsx)(`a`,{href:`#`,onClick:e=>e.preventDefault(),className:`nav-link navbar-link`,children:`Skills`}),(0,r.jsx)(`a`,{href:`#`,onClick:e=>e.preventDefault(),className:`nav-link navbar-link`,children:`Projects`}),(0,r.jsx)(`a`,{href:`#`,onClick:e=>e.preventDefault(),className:`nav-link navbar-link`,children:`Contact`})]}),parameters:{docs:{description:{story:`All four nav links side-by-side. Live navbar shows them at 18px on desktop and 3em on the mobile collapsed menu.`}}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <a href="#" onClick={e => e.preventDefault()} className="nav-link navbar-link">
            Home
        </a>,
  parameters: {
    docs: {
      description: {
        story: "Inactive link. White text at 60% opacity."
      }
    }
  }
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <a href="#" onClick={e => e.preventDefault()} className="nav-link navbar-link active">
            Projects
        </a>,
  parameters: {
    docs: {
      description: {
        story: "Active link — applied by the section-tracker on the link whose section is currently in viewport. Opacity goes to 100%."
      }
    }
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <>
            <a href="#" onClick={e => e.preventDefault()} className="nav-link navbar-link active">
                Home
            </a>
            <a href="#" onClick={e => e.preventDefault()} className="nav-link navbar-link">
                Skills
            </a>
            <a href="#" onClick={e => e.preventDefault()} className="nav-link navbar-link">
                Projects
            </a>
            <a href="#" onClick={e => e.preventDefault()} className="nav-link navbar-link">
                Contact
            </a>
        </>,
  parameters: {
    docs: {
      description: {
        story: "All four nav links side-by-side. Live navbar shows them at 18px on desktop and 3em on the mobile collapsed menu."
      }
    }
  }
}`,...s.parameters?.docs?.source}}},c=[`Idle`,`Active`,`FullRow`]}))();export{o as Active,s as FullRow,a as Idle,c as __namedExportsOrder,i as default};