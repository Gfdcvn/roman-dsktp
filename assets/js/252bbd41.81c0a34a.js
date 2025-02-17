"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[83363],{6850:e=>{e.exports=JSON.parse('{"permalink":"/blog/extensions-introduction","source":"@site/blog/2024-10-29-creating-an-extension.md","title":"Introduction to Podman Desktop extensions","description":"Learn how to create and customize your own extension for Podman Desktop","date":"2024-10-29T00:00:00.000Z","tags":[{"inline":true,"label":"podman-desktop","permalink":"/blog/tags/podman-desktop"},{"inline":true,"label":"release","permalink":"/blog/tags/release"},{"inline":true,"label":"podman","permalink":"/blog/tags/podman"},{"inline":true,"label":"extension","permalink":"/blog/tags/extension"},{"inline":true,"label":"plugin","permalink":"/blog/tags/plugin"}],"readingTime":3.405,"hasTruncateMarker":false,"authors":[{"name":"Charlie Drage","title":"Software Engineer","url":"https://github.com/cdrage","imageURL":"https://github.com/cdrage.png","key":"cdrage","page":null}],"frontMatter":{"title":"Introduction to Podman Desktop extensions","description":"Learn how to create and customize your own extension for Podman Desktop","slug":"extensions-introduction","authors":["cdrage"],"tags":["podman-desktop","release","podman","extension","plugin"],"hide_table_of_contents":false},"unlisted":false,"prevItem":{"title":"Podman Desktop 1.14 Release","permalink":"/blog/podman-desktop-release-1.14"},"nextItem":{"title":"Podman Desktop 1.13 Release","permalink":"/blog/podman-desktop-release-1.13"}}')},7423:(e,n,o)=>{o.d(n,{A:()=>t});const t=o.p+"assets/images/layers_explorer-77d579b2b326abd827d0a4b387c81eaf.png"},15144:(e,n,o)=>{o.d(n,{A:()=>t});const t=o.p+"assets/images/programming-1923c2fcee3941601e7ed222868ca6e2.png"},41235:(e,n,o)=>{o.d(n,{A:()=>t});const t=o.p+"assets/images/compose-cdb352311ae2e5b0a11abed0c453cad0.png"},43023:(e,n,o)=>{o.d(n,{R:()=>a,x:()=>r});var t=o(63696);const s={},i=t.createContext(s);function a(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(i.Provider,{value:n},e.children)}},48094:(e,n,o)=>{o.d(n,{A:()=>t});const t=o.p+"assets/images/extension-catalog-8deddd045f1962b11c4940adb67075a8.png"},67123:(e,n,o)=>{o.d(n,{A:()=>t});const t=o.p+"assets/images/menus-5ad42625f5a4db388f5132fa7f80191d.png"},93214:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>t,toc:()=>c});var t=o(6850),s=o(62540),i=o(43023);const a={title:"Introduction to Podman Desktop extensions",description:"Learn how to create and customize your own extension for Podman Desktop",slug:"extensions-introduction",authors:["cdrage"],tags:["podman-desktop","release","podman","extension","plugin"],hide_table_of_contents:!1},r="How to create your first extension",d={authorsImageUrls:[void 0]},c=[{value:"Introduction to extensions",id:"introduction-to-extensions",level:2},{value:"Getting started with your project",id:"getting-started-with-your-project",level:2},{value:"Adding UI components",id:"adding-ui-components",level:2},{value:"Working with icons",id:"working-with-icons",level:3},{value:"Menus and navigation",id:"menus-and-navigation",level:3},{value:"Adding and configuring commands",id:"adding-and-configuring-commands",level:2},{value:"Setting up onboarding workflows",id:"setting-up-onboarding-workflows",level:2},{value:"Configuration settings",id:"configuration-settings",level:2},{value:"Publishing your extension",id:"publishing-your-extension",level:2},{value:"Conclusion",id:"conclusion",level:2}];function l(e){const n={a:"a",h2:"h2",h3:"h3",img:"img",p:"p",strong:"strong",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"programming",src:o(15144).A+"",width:"1216",height:"832"})}),"\n",(0,s.jsx)(n.p,{children:"Extensions are a powerful tool to customize and extend the functionality of Podman Desktop. Whether you want to add new container management features, streamline current workflows, or create custom UI elements specific to your tech stack, building extensions allows you to tailor the Podman Desktop experience to your specific needs."}),"\n",(0,s.jsx)(n.p,{children:"In this guide, we'll introduce how you can build your own Podman Desktop extension, with links to detailed documentation that covers each part of the process."}),"\n",(0,s.jsx)(n.h2,{id:"introduction-to-extensions",children:"Introduction to extensions"}),"\n",(0,s.jsxs)(n.p,{children:["Extensions are abundant in Podman Desktop and can be found in the ",(0,s.jsx)(n.strong,{children:"Extensions -> Catalog"})," section."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"extension catalog",src:o(48094).A+"",width:"1162",height:"812"})}),"\n",(0,s.jsxs)(n.p,{children:["Each extension expands on Podman Desktop, such as providing ",(0,s.jsx)(n.a,{href:"https://github.com/containers/podman-desktop-extension-minikube",children:"Kubernetes development clusters with Minikube"})," or even ",(0,s.jsx)(n.a,{href:"https://github.com/containers/podman-desktop-extension-layers-explorer",children:"analyzing your image layers"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Below is an example of the ",(0,s.jsx)(n.a,{href:"https://github.com/containers/podman-desktop-extension-layers-explorer",children:"layers explorer extension"})," and how it integrates into Podman Desktop:"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"layers_explorer",src:o(7423).A+"",width:"1101",height:"746"})}),"\n",(0,s.jsx)(n.h2,{id:"getting-started-with-your-project",children:"Getting started with your project"}),"\n",(0,s.jsxs)(n.p,{children:["The first step in creating your extension is setting up the project environment. To learn how to configure the project and add basic components, check out the ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.a,{href:"/docs/extensions/templates",children:"Templates for creating an extension"})})," guide, which walks you through initializing your project from an official template."]}),"\n",(0,s.jsx)(n.h2,{id:"adding-ui-components",children:"Adding UI components"}),"\n",(0,s.jsxs)(n.p,{children:["One of the most common tasks when creating an extension is adding a user interface. Whether it\u2019s adding buttons, panels, or icons, UI components help make your extension more interactive and accessible. Adding a UI component is totally optional and an extension can be ran without UI components. Learn more about this in the ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.a,{href:"/docs/extensions/developing/adding-ui-components",children:"Adding UI components"})})," documentation, where you\u2019ll find instructions on creating and integrating components into the application\u2019s UI."]}),"\n",(0,s.jsx)(n.h3,{id:"working-with-icons",children:"Working with icons"}),"\n",(0,s.jsxs)(n.p,{children:["Icons are a great way to make your extension more visually unique. You can learn how to add and style custom icons by following the ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.a,{href:"/docs/extensions/developing/adding-icons",children:"Adding icons"})})," documentation."]}),"\n",(0,s.jsxs)(n.p,{children:["Below is an example of how the ",(0,s.jsx)(n.a,{href:"https://github.com/containers/podman-desktop-extension-bootc",children:"bootc extension"})," added icons to the image list within Podman Desktop:"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"icons",src:o(99701).A+"",width:"650",height:"303"})}),"\n",(0,s.jsx)(n.h3,{id:"menus-and-navigation",children:"Menus and navigation"}),"\n",(0,s.jsxs)(n.p,{children:["Extensions often integrate with existing menus and navigation to offer users easy access to new commands and features. If you want to add items to the context menu, explore the ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.a,{href:"/docs/extensions/developing/menu",children:"Menu configuration"})})," documentation, which explains how to add commands to menus and control when they are displayed using When Clauses."]}),"\n",(0,s.jsxs)(n.p,{children:["Below is an example of how the ",(0,s.jsx)(n.a,{href:"https://github.com/containers/podman-desktop-extension-bootc",children:"bootc extension"})," added a new menu command to image list:"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"menus",src:o(67123).A+"",width:"338",height:"335"})}),"\n",(0,s.jsx)(n.h2,{id:"adding-and-configuring-commands",children:"Adding and configuring commands"}),"\n",(0,s.jsx)(n.p,{children:"Commands are the backbone of most extensions, allowing users to interact with the application and trigger specific actions."}),"\n",(0,s.jsxs)(n.p,{children:["If you need to define and register custom commands, the ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.a,{href:"/docs/extensions/developing/commands",children:"Commands"})})," guide will show you how to create commands that respond to user actions or input, and tie them into your extension\u2019s workflow."]}),"\n",(0,s.jsxs)(n.p,{children:["You can also configure these commands to appear in different contexts. Check out the ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.a,{href:"/docs/extensions/developing/when-clause-context",children:"When clause Contexts"})})," documentation to learn more about restricting commands to specific scenarios."]}),"\n",(0,s.jsxs)(n.p,{children:["Commands are heavily influenced by ",(0,s.jsx)(n.a,{href:"https://code.visualstudio.com/api/extension-guides/command",children:"VS Code commands"})," and can be configured similarly. See our ",(0,s.jsx)(n.a,{href:"/docs/extensions/developing/commands",children:"commands guide"})," for more information."]}),"\n",(0,s.jsx)(n.h2,{id:"setting-up-onboarding-workflows",children:"Setting up onboarding workflows"}),"\n",(0,s.jsx)(n.p,{children:"Creating a smooth onboarding experience is essential to help users get started with your extension. This includes steps for CLI binary installations or other initial setup values."}),"\n",(0,s.jsxs)(n.p,{children:["You can provide guidance, tutorials, or initial setup steps using the ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.a,{href:"/docs/extensions/developing/onboarding-workflow",children:"Onboarding workflow"})})," guide."]}),"\n",(0,s.jsxs)(n.p,{children:["Below is an example of how the ",(0,s.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/tree/main/extensions/compose",children:"built-in compose extension"})," adds onboarding for the compose CLI binary installation:"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"compose",src:o(41235).A+"",width:"1089",height:"732"})}),"\n",(0,s.jsx)(n.h2,{id:"configuration-settings",children:"Configuration settings"}),"\n",(0,s.jsx)(n.p,{children:"Once you\u2019ve built your components and commands, you may want to setup configuration settings for advanced usage of your extension."}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.a,{href:"/docs/extensions/developing/config",children:"Configuration"})})," documentation outlines the configuration file structure and how to link everything together to use user-specific values."]}),"\n",(0,s.jsx)(n.h2,{id:"publishing-your-extension",children:"Publishing your extension"}),"\n",(0,s.jsxs)(n.p,{children:["Publishing enables users to install your extension, you can compile your extension into a container image for users to easily consume. Follow the ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.a,{href:"/docs/extensions/publish",children:"Publishing"})})," guide to learn how to distribute your extension."]}),"\n",(0,s.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,s.jsx)(n.p,{children:"Creating an extension opens up endless possibilities to customize Podman Desktop to your specific needs."}),"\n",(0,s.jsx)(n.p,{children:"It is also easy to package and publish your extension for others to use."}),"\n",(0,s.jsx)(n.p,{children:"Have fun exploring our documentation on how to create an extension and happy coding!"})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},99701:(e,n,o)=>{o.d(n,{A:()=>t});const t=o.p+"assets/images/icons-028efaf19e6ee9bd9d80663291e769d2.png"}}]);