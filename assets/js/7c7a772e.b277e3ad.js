"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[38788],{78455:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>t,contentTitle:()=>a,default:()=>o,frontMatter:()=>c,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"interfaces/WebviewPanel","title":"Interface: WebviewPanel","description":"Defined in2008","source":"@site/api/interfaces/WebviewPanel.md","sourceDirName":"interfaces","slug":"/interfaces/WebviewPanel","permalink":"/api/interfaces/WebviewPanel","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"typedocSidebar","previous":{"title":"WebviewOptions","permalink":"/api/interfaces/WebviewOptions"},"next":{"title":"WebviewPanelOnDidChangeViewStateEvent","permalink":"/api/interfaces/WebviewPanelOnDidChangeViewStateEvent"}}');var d=i(62540),r=i(43023);const c={},a="Interface: WebviewPanel",t={},l=[{value:"Properties",id:"properties",level:2},{value:"active",id:"active",level:3},{value:"iconPath?",id:"iconpath",level:3},{value:"Type declaration",id:"type-declaration",level:4},{value:"dark",id:"dark",level:4},{value:"light",id:"light",level:4},{value:"onDidChangeViewState",id:"ondidchangeviewstate",level:3},{value:"onDidDispose",id:"ondiddispose",level:3},{value:"title",id:"title",level:3},{value:"viewType",id:"viewtype",level:3},{value:"visible",id:"visible",level:3},{value:"webview",id:"webview",level:3},{value:"Methods",id:"methods",level:2},{value:"dispose()",id:"dispose",level:3},{value:"Returns",id:"returns",level:4},{value:"reveal()",id:"reveal",level:3},{value:"Parameters",id:"parameters",level:4},{value:"preserveFocus?",id:"preservefocus",level:5},{value:"Returns",id:"returns-1",level:4}];function h(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",header:"header",hr:"hr",p:"p",strong:"strong",...(0,r.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.header,{children:(0,d.jsx)(n.h1,{id:"interface-webviewpanel",children:"Interface: WebviewPanel"})}),"\n",(0,d.jsxs)(n.p,{children:["Defined in: ",(0,d.jsx)(n.a,{href:"https://github.com/Gfdcvn/roman-dsktp/blob/6dba2e3ba863ff9f990f618be689fd9651a6c5e1/packages/extension-api/src/extension-api.d.ts#L2008",children:"packages/extension-api/src/extension-api.d.ts:2008"})]}),"\n",(0,d.jsx)(n.p,{children:"A panel that contains a webview."}),"\n",(0,d.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,d.jsx)(n.h3,{id:"active",children:"active"}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"readonly"})," ",(0,d.jsx)(n.strong,{children:"active"}),": ",(0,d.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:["Defined in: ",(0,d.jsx)(n.a,{href:"https://github.com/Gfdcvn/roman-dsktp/blob/6dba2e3ba863ff9f990f618be689fd9651a6c5e1/packages/extension-api/src/extension-api.d.ts#L2043",children:"packages/extension-api/src/extension-api.d.ts:2043"})]}),"\n",(0,d.jsx)(n.p,{children:"Whether the panel is active (focused by the user)."}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsx)(n.h3,{id:"iconpath",children:"iconPath?"}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"optional"})," ",(0,d.jsx)(n.strong,{children:"iconPath"}),": ",(0,d.jsx)(n.a,{href:"/api/classes/Uri",children:(0,d.jsx)(n.code,{children:"Uri"})})," | { ",(0,d.jsx)(n.code,{children:"dark"}),": ",(0,d.jsx)(n.a,{href:"/api/classes/Uri",children:(0,d.jsx)(n.code,{children:"Uri"})}),"; ",(0,d.jsx)(n.code,{children:"light"}),": ",(0,d.jsx)(n.a,{href:"/api/classes/Uri",children:(0,d.jsx)(n.code,{children:"Uri"})}),"; }"]}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:["Defined in: ",(0,d.jsx)(n.a,{href:"https://github.com/Gfdcvn/roman-dsktp/blob/6dba2e3ba863ff9f990f618be689fd9651a6c5e1/packages/extension-api/src/extension-api.d.ts#L2022",children:"packages/extension-api/src/extension-api.d.ts:2022"})]}),"\n",(0,d.jsx)(n.p,{children:"Icon for the panel shown in UI."}),"\n",(0,d.jsx)(n.h4,{id:"type-declaration",children:"Type declaration"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.a,{href:"/api/classes/Uri",children:(0,d.jsx)(n.code,{children:"Uri"})})}),"\n",(0,d.jsxs)(n.p,{children:["{ ",(0,d.jsx)(n.code,{children:"dark"}),": ",(0,d.jsx)(n.a,{href:"/api/classes/Uri",children:(0,d.jsx)(n.code,{children:"Uri"})}),"; ",(0,d.jsx)(n.code,{children:"light"}),": ",(0,d.jsx)(n.a,{href:"/api/classes/Uri",children:(0,d.jsx)(n.code,{children:"Uri"})}),"; }"]}),"\n",(0,d.jsx)(n.h4,{id:"dark",children:"dark"}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"readonly"})," ",(0,d.jsx)(n.strong,{children:"dark"}),": ",(0,d.jsx)(n.a,{href:"/api/classes/Uri",children:(0,d.jsx)(n.code,{children:"Uri"})})]}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:"The icon path for the dark theme."}),"\n",(0,d.jsx)(n.h4,{id:"light",children:"light"}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"readonly"})," ",(0,d.jsx)(n.strong,{children:"light"}),": ",(0,d.jsx)(n.a,{href:"/api/classes/Uri",children:(0,d.jsx)(n.code,{children:"Uri"})})]}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:"The icon path for the light theme."}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsx)(n.h3,{id:"ondidchangeviewstate",children:"onDidChangeViewState"}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"readonly"})," ",(0,d.jsx)(n.strong,{children:"onDidChangeViewState"}),": ",(0,d.jsx)(n.a,{href:"/api/interfaces/Event",children:(0,d.jsx)(n.code,{children:"Event"})}),"<",(0,d.jsx)(n.a,{href:"/api/interfaces/WebviewPanelOnDidChangeViewStateEvent",children:(0,d.jsx)(n.code,{children:"WebviewPanelOnDidChangeViewStateEvent"})}),">"]}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:["Defined in: ",(0,d.jsx)(n.a,{href:"https://github.com/Gfdcvn/roman-dsktp/blob/6dba2e3ba863ff9f990f618be689fd9651a6c5e1/packages/extension-api/src/extension-api.d.ts#L2053",children:"packages/extension-api/src/extension-api.d.ts:2053"})]}),"\n",(0,d.jsx)(n.p,{children:"Fired when the panel's view state changes."}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsx)(n.h3,{id:"ondiddispose",children:"onDidDispose"}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"readonly"})," ",(0,d.jsx)(n.strong,{children:"onDidDispose"}),": ",(0,d.jsx)(n.a,{href:"/api/interfaces/Event",children:(0,d.jsx)(n.code,{children:"Event"})}),"<",(0,d.jsx)(n.code,{children:"void"}),">"]}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:["Defined in: ",(0,d.jsx)(n.a,{href:"https://github.com/Gfdcvn/roman-dsktp/blob/6dba2e3ba863ff9f990f618be689fd9651a6c5e1/packages/extension-api/src/extension-api.d.ts#L2063",children:"packages/extension-api/src/extension-api.d.ts:2063"})]}),"\n",(0,d.jsx)(n.p,{children:"Fired when the panel is disposed."}),"\n",(0,d.jsxs)(n.p,{children:["This may be because the user closed the panel or because ",(0,d.jsx)(n.code,{children:".dispose()"})," was\ncalled on it."]}),"\n",(0,d.jsx)(n.p,{children:"Trying to use the panel after it has been disposed throws an exception."}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsx)(n.h3,{id:"title",children:"title"}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"title"}),": ",(0,d.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:["Defined in: ",(0,d.jsx)(n.a,{href:"https://github.com/Gfdcvn/roman-dsktp/blob/6dba2e3ba863ff9f990f618be689fd9651a6c5e1/packages/extension-api/src/extension-api.d.ts#L2017",children:"packages/extension-api/src/extension-api.d.ts:2017"})]}),"\n",(0,d.jsx)(n.p,{children:"Title of the panel shown in UI."}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsx)(n.h3,{id:"viewtype",children:"viewType"}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"readonly"})," ",(0,d.jsx)(n.strong,{children:"viewType"}),": ",(0,d.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:["Defined in: ",(0,d.jsx)(n.a,{href:"https://github.com/Gfdcvn/roman-dsktp/blob/6dba2e3ba863ff9f990f618be689fd9651a6c5e1/packages/extension-api/src/extension-api.d.ts#L2012",children:"packages/extension-api/src/extension-api.d.ts:2012"})]}),"\n",(0,d.jsx)(n.p,{children:"Identifies the type of the webview panel."}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsx)(n.h3,{id:"visible",children:"visible"}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"readonly"})," ",(0,d.jsx)(n.strong,{children:"visible"}),": ",(0,d.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:["Defined in: ",(0,d.jsx)(n.a,{href:"https://github.com/Gfdcvn/roman-dsktp/blob/6dba2e3ba863ff9f990f618be689fd9651a6c5e1/packages/extension-api/src/extension-api.d.ts#L2048",children:"packages/extension-api/src/extension-api.d.ts:2048"})]}),"\n",(0,d.jsx)(n.p,{children:"Whether the panel is visible."}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsx)(n.h3,{id:"webview",children:"webview"}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"readonly"})," ",(0,d.jsx)(n.strong,{children:"webview"}),": ",(0,d.jsx)(n.a,{href:"/api/interfaces/Webview",children:(0,d.jsx)(n.code,{children:"Webview"})})]}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:["Defined in: ",(0,d.jsx)(n.a,{href:"https://github.com/Gfdcvn/roman-dsktp/blob/6dba2e3ba863ff9f990f618be689fd9651a6c5e1/packages/extension-api/src/extension-api.d.ts#L2038",children:"packages/extension-api/src/extension-api.d.ts:2038"})]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.a,{href:"/api/interfaces/Webview",children:(0,d.jsx)(n.code,{children:"Webview"})})," belonging to the panel."]}),"\n",(0,d.jsx)(n.h2,{id:"methods",children:"Methods"}),"\n",(0,d.jsx)(n.h3,{id:"dispose",children:"dispose()"}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"dispose"}),"(): ",(0,d.jsx)(n.code,{children:"void"})]}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:["Defined in: ",(0,d.jsx)(n.a,{href:"https://github.com/Gfdcvn/roman-dsktp/blob/6dba2e3ba863ff9f990f618be689fd9651a6c5e1/packages/extension-api/src/extension-api.d.ts#L2078",children:"packages/extension-api/src/extension-api.d.ts:2078"})]}),"\n",(0,d.jsx)(n.p,{children:"Dispose of the webview panel."}),"\n",(0,d.jsxs)(n.p,{children:["This closes the panel if it showing and disposes of the resources owned by the webview.\nWebview panels are also disposed when the user closes the webview panel. Both cases\nfire the ",(0,d.jsx)(n.code,{children:"onDispose"})," event."]}),"\n",(0,d.jsx)(n.h4,{id:"returns",children:"Returns"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:"void"})}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsx)(n.h3,{id:"reveal",children:"reveal()"}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"reveal"}),"(",(0,d.jsx)(n.code,{children:"preserveFocus?"}),"): ",(0,d.jsx)(n.code,{children:"void"})]}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:["Defined in: ",(0,d.jsx)(n.a,{href:"https://github.com/Gfdcvn/roman-dsktp/blob/6dba2e3ba863ff9f990f618be689fd9651a6c5e1/packages/extension-api/src/extension-api.d.ts#L2069",children:"packages/extension-api/src/extension-api.d.ts:2069"})]}),"\n",(0,d.jsx)(n.p,{children:"Show the webview panel."}),"\n",(0,d.jsx)(n.h4,{id:"parameters",children:"Parameters"}),"\n",(0,d.jsx)(n.h5,{id:"preservefocus",children:"preserveFocus?"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:"boolean"})}),"\n",(0,d.jsxs)(n.p,{children:["When ",(0,d.jsx)(n.code,{children:"true"}),", the webview will not take focus."]}),"\n",(0,d.jsx)(n.h4,{id:"returns-1",children:"Returns"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:"void"})})]})}function o(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(h,{...e})}):h(e)}},43023:(e,n,i)=>{i.d(n,{R:()=>c,x:()=>a});var s=i(63696);const d={},r=s.createContext(d);function c(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:c(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);