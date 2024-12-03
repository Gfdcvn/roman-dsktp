"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[87577],{26414:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>t,metadata:()=>i,toc:()=>a});const i=JSON.parse('{"id":"interfaces/Webview","title":"Interface: Webview","description":"Displays html content, similarly to an iframe.","source":"@site/api/interfaces/Webview.md","sourceDirName":"interfaces","slug":"/interfaces/Webview","permalink":"/api/interfaces/Webview","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"typedocSidebar","previous":{"title":"VolumeListInfo","permalink":"/api/interfaces/VolumeListInfo"},"next":{"title":"WebviewInfo","permalink":"/api/interfaces/WebviewInfo"}}');var r=s(62540),d=s(43023);const t={},c="Interface: Webview",o={},a=[{value:"Properties",id:"properties",level:2},{value:"cspSource",id:"cspsource",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"html",id:"html",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"onDidReceiveMessage",id:"ondidreceivemessage",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"options",id:"options",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"Methods",id:"methods",level:2},{value:"asWebviewUri()",id:"aswebviewuri",level:3},{value:"Parameters",id:"parameters",level:4},{value:"localResource",id:"localresource",level:5},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in-4",level:4},{value:"postMessage()",id:"postmessage",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"message",id:"message",level:5},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-5",level:4}];function l(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",header:"header",hr:"hr",p:"p",strong:"strong",...(0,d.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"interface-webview",children:"Interface: Webview"})}),"\n",(0,r.jsx)(n.p,{children:"Displays html content, similarly to an iframe."}),"\n",(0,r.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,r.jsx)(n.h3,{id:"cspsource",children:"cspSource"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"readonly"})," ",(0,r.jsx)(n.strong,{children:"cspSource"}),": ",(0,r.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Content security policy source for webview resources."}),"\n",(0,r.jsx)(n.h4,{id:"defined-in",children:"Defined in"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://github.com/podman-desktop/podman-desktop/blob/858ef08a7e17e3bd86f83713a9a9271c3f549f28/packages/extension-api/src/extension-api.d.ts#L1959",children:"packages/extension-api/src/extension-api.d.ts:1959"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"html",children:"html"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"html"}),": ",(0,r.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"HTML contents of the webview."}),"\n",(0,r.jsx)(n.p,{children:"This should be a complete, valid html document. Changing this property causes the webview to be reloaded."}),"\n",(0,r.jsx)(n.h4,{id:"defined-in-1",children:"Defined in"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://github.com/podman-desktop/podman-desktop/blob/858ef08a7e17e3bd86f83713a9a9271c3f549f28/packages/extension-api/src/extension-api.d.ts#L1936",children:"packages/extension-api/src/extension-api.d.ts:1936"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"ondidreceivemessage",children:"onDidReceiveMessage"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"readonly"})," ",(0,r.jsx)(n.strong,{children:"onDidReceiveMessage"}),": ",(0,r.jsx)(n.a,{href:"/api/interfaces/Event",children:(0,r.jsx)(n.code,{children:"Event"})}),"<",(0,r.jsx)(n.code,{children:"unknown"}),">"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Fired when the webview content posts a message."}),"\n",(0,r.jsx)(n.p,{children:"Webview content can post strings or json serializable objects back to an extension."}),"\n",(0,r.jsx)(n.h4,{id:"defined-in-2",children:"Defined in"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://github.com/podman-desktop/podman-desktop/blob/858ef08a7e17e3bd86f83713a9a9271c3f549f28/packages/extension-api/src/extension-api.d.ts#L1943",children:"packages/extension-api/src/extension-api.d.ts:1943"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"options",children:"options"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"options"}),": ",(0,r.jsx)(n.a,{href:"/api/interfaces/WebviewOptions",children:(0,r.jsx)(n.code,{children:"WebviewOptions"})})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Content settings for the webview."}),"\n",(0,r.jsx)(n.h4,{id:"defined-in-3",children:"Defined in"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://github.com/podman-desktop/podman-desktop/blob/858ef08a7e17e3bd86f83713a9a9271c3f549f28/packages/extension-api/src/extension-api.d.ts#L1928",children:"packages/extension-api/src/extension-api.d.ts:1928"})}),"\n",(0,r.jsx)(n.h2,{id:"methods",children:"Methods"}),"\n",(0,r.jsx)(n.h3,{id:"aswebviewuri",children:"asWebviewUri()"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"asWebviewUri"}),"(",(0,r.jsx)(n.code,{children:"localResource"}),"): ",(0,r.jsx)(n.a,{href:"/api/classes/Uri",children:(0,r.jsx)(n.code,{children:"Uri"})})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Convert a uri for the local file system to one that can be used inside webviews."}),"\n",(0,r.jsx)(n.h4,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsx)(n.h5,{id:"localresource",children:"localResource"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/api/classes/Uri",children:(0,r.jsx)(n.code,{children:"Uri"})})}),"\n",(0,r.jsx)(n.h4,{id:"returns",children:"Returns"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/api/classes/Uri",children:(0,r.jsx)(n.code,{children:"Uri"})})}),"\n",(0,r.jsx)(n.h4,{id:"defined-in-4",children:"Defined in"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://github.com/podman-desktop/podman-desktop/blob/858ef08a7e17e3bd86f83713a9a9271c3f549f28/packages/extension-api/src/extension-api.d.ts#L1953",children:"packages/extension-api/src/extension-api.d.ts:1953"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"postmessage",children:"postMessage()"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"postMessage"}),"(",(0,r.jsx)(n.code,{children:"message"}),"): ",(0,r.jsx)(n.code,{children:"Promise"}),"<",(0,r.jsx)(n.code,{children:"boolean"}),">"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Post a message to the webview content."}),"\n",(0,r.jsx)(n.h4,{id:"parameters-1",children:"Parameters"}),"\n",(0,r.jsx)(n.h5,{id:"message",children:"message"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"unknown"})}),"\n",(0,r.jsx)(n.h4,{id:"returns-1",children:"Returns"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"Promise"}),"<",(0,r.jsx)(n.code,{children:"boolean"}),">"]}),"\n",(0,r.jsx)(n.h4,{id:"defined-in-5",children:"Defined in"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://github.com/podman-desktop/podman-desktop/blob/858ef08a7e17e3bd86f83713a9a9271c3f549f28/packages/extension-api/src/extension-api.d.ts#L1948",children:"packages/extension-api/src/extension-api.d.ts:1948"})})]})}function h(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},43023:(e,n,s)=>{s.d(n,{R:()=>t,x:()=>c});var i=s(63696);const r={},d=i.createContext(r);function t(e){const n=i.useContext(d);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),i.createElement(d.Provider,{value:n},e.children)}}}]);