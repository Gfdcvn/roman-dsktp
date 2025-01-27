"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[28697],{71736:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>a,toc:()=>c});const a=JSON.parse('{"id":"namespaces/navigation/functions/register","title":"Function: register()","description":"register(routeId, commandId): Disposable","source":"@site/api/namespaces/navigation/functions/register.md","sourceDirName":"namespaces/navigation/functions","slug":"/namespaces/navigation/functions/register","permalink":"/api/namespaces/navigation/functions/register","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"typedocSidebar","previous":{"title":"navigateToWebview","permalink":"/api/namespaces/navigation/functions/navigateToWebview"},"next":{"title":"process","permalink":"/api/namespaces/process/"}}');var i=s(62540),t=s(43023);const r={},o="Function: register()",d={},c=[{value:"Parameters",id:"parameters",level:2},{value:"routeId",id:"routeid",level:3},{value:"commandId",id:"commandid",level:3},{value:"Returns",id:"returns",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Example",id:"example",level:2}];function l(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"function-register",children:"Function: register()"})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"register"}),"(",(0,i.jsx)(n.code,{children:"routeId"}),", ",(0,i.jsx)(n.code,{children:"commandId"}),"): ",(0,i.jsx)(n.a,{href:"/api/classes/Disposable",children:(0,i.jsx)(n.code,{children:"Disposable"})})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Defined in: ",(0,i.jsx)(n.a,{href:"https://github.com/podman-desktop/podman-desktop/blob/2a03e7ae363e8e9e23220ea71a7071c56ceeaaaf/packages/extension-api/src/extension-api.d.ts#L4834",children:"packages/extension-api/src/extension-api.d.ts:4834"})]}),"\n",(0,i.jsx)(n.p,{children:"Allow to define custom route for an extension."}),"\n",(0,i.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsx)(n.h3,{id:"routeid",children:"routeId"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"string"})}),"\n",(0,i.jsxs)(n.p,{children:["a unique string value that could be used in ",(0,i.jsx)(n.a,{href:"/api/namespaces/navigation/functions/navigate",children:"navigation.navigate"})]}),"\n",(0,i.jsx)(n.h3,{id:"commandid",children:"commandId"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"string"})}),"\n",(0,i.jsx)(n.p,{children:"the command that will be executed on navigate"}),"\n",(0,i.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"/api/classes/Disposable",children:(0,i.jsx)(n.code,{children:"Disposable"})})}),"\n",(0,i.jsx)(n.h2,{id:"remarks",children:"Remarks"}),"\n",(0,i.jsxs)(n.p,{children:["The commandId used must have been registered through ",(0,i.jsx)(n.a,{href:"/api/namespaces/commands/functions/registerCommand",children:"commands.registerCommand"})]}),"\n",(0,i.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"import { navigation, commands } from '@podman-desktop/api';\n\ncommands.registerCommand('redirect-download-command', (trackingId: string) => {\n  // todo: do something with the trackingId\n});\n\n// register the route\nnavigation.register('download-page', 'redirect-download-command');\n\n// when needed call the navigate with the route id registered to\n// trigger the command\nnavigation.navigate('download-page', 'dummy-tracking-id');\n"})})]})}function m(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},43023:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>o});var a=s(63696);const i={},t=a.createContext(i);function r(e){const n=a.useContext(t);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),a.createElement(t.Provider,{value:n},e.children)}}}]);