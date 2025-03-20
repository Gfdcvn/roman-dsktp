"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[81510],{53449:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>t,contentTitle:()=>o,default:()=>h,frontMatter:()=>c,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"@podman-desktop/namespaces/window/functions/showQuickPick","title":"Function: showQuickPick()","description":"Call Signature","source":"@site/api/@podman-desktop/namespaces/window/functions/showQuickPick.md","sourceDirName":"@podman-desktop/namespaces/window/functions","slug":"/@podman-desktop/namespaces/window/functions/showQuickPick","permalink":"/api/@podman-desktop/namespaces/window/functions/showQuickPick","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"typedocSidebar","previous":{"title":"showOpenDialog","permalink":"/api/@podman-desktop/namespaces/window/functions/showOpenDialog"},"next":{"title":"showSaveDialog","permalink":"/api/@podman-desktop/namespaces/window/functions/showSaveDialog"}}');var d=i(62540),r=i(43023);const c={},o="Function: showQuickPick()",t={},l=[{value:"Call Signature",id:"call-signature",level:2},{value:"Parameters",id:"parameters",level:3},{value:"items",id:"items",level:4},{value:"options",id:"options",level:4},{value:"token?",id:"token",level:4},{value:"Returns",id:"returns",level:3},{value:"Call Signature",id:"call-signature-1",level:2},{value:"Parameters",id:"parameters-1",level:3},{value:"items",id:"items-1",level:4},{value:"options?",id:"options-1",level:4},{value:"token?",id:"token-1",level:4},{value:"Returns",id:"returns-1",level:3},{value:"Call Signature",id:"call-signature-2",level:2},{value:"Type Parameters",id:"type-parameters",level:3},{value:"T",id:"t",level:4},{value:"Parameters",id:"parameters-2",level:3},{value:"items",id:"items-2",level:4},{value:"options",id:"options-2",level:4},{value:"token?",id:"token-2",level:4},{value:"Returns",id:"returns-2",level:3},{value:"Call Signature",id:"call-signature-3",level:2},{value:"Type Parameters",id:"type-parameters-1",level:3},{value:"T",id:"t-1",level:4},{value:"Parameters",id:"parameters-3",level:3},{value:"items",id:"items-3",level:4},{value:"options?",id:"options-3",level:4},{value:"token?",id:"token-3",level:4},{value:"Returns",id:"returns-3",level:3}];function a(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",p:"p",strong:"strong",...(0,r.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.header,{children:(0,d.jsx)(n.h1,{id:"function-showquickpick",children:"Function: showQuickPick()"})}),"\n",(0,d.jsx)(n.h2,{id:"call-signature",children:"Call Signature"}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"showQuickPick"}),"(",(0,d.jsx)(n.code,{children:"items"}),", ",(0,d.jsx)(n.code,{children:"options"}),", ",(0,d.jsx)(n.code,{children:"token"}),"?): ",(0,d.jsx)(n.code,{children:"Promise"}),"<",(0,d.jsx)(n.code,{children:"undefined"})," | ",(0,d.jsx)(n.code,{children:"string"}),"[]>"]}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:["Defined in: ",(0,d.jsx)(n.a,{href:"https://github.com/podman-desktop/podman-desktop/blob/aee56aa5111d8110dfa44d517d0be73be3599623/packages/extension-api/src/extension-api.d.ts#L2289",children:"packages/extension-api/src/extension-api.d.ts:2289"})]}),"\n",(0,d.jsx)(n.p,{children:"Shows a selection list allowing multiple selections."}),"\n",(0,d.jsx)(n.h3,{id:"parameters",children:"Parameters"}),"\n",(0,d.jsx)(n.h4,{id:"items",children:"items"}),"\n",(0,d.jsx)(n.p,{children:"An array of strings, or a promise that resolves to an array of strings."}),"\n",(0,d.jsxs)(n.p,{children:["readonly ",(0,d.jsx)(n.code,{children:"string"}),"[] | ",(0,d.jsx)(n.code,{children:"Promise"}),"<readonly ",(0,d.jsx)(n.code,{children:"string"}),"[]>"]}),"\n",(0,d.jsx)(n.h4,{id:"options",children:"options"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.a,{href:"/api/interfaces/QuickPickOptions",children:(0,d.jsx)(n.code,{children:"QuickPickOptions"})})," & ",(0,d.jsx)(n.code,{children:"object"})]}),"\n",(0,d.jsx)(n.p,{children:"Configures the behavior of the selection list."}),"\n",(0,d.jsx)(n.h4,{id:"token",children:"token?"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.a,{href:"/api/interfaces/CancellationToken",children:(0,d.jsx)(n.code,{children:"CancellationToken"})})}),"\n",(0,d.jsx)(n.p,{children:"A token that can be used to signal cancellation."}),"\n",(0,d.jsx)(n.h3,{id:"returns",children:"Returns"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"Promise"}),"<",(0,d.jsx)(n.code,{children:"undefined"})," | ",(0,d.jsx)(n.code,{children:"string"}),"[]>"]}),"\n",(0,d.jsxs)(n.p,{children:["A promise that resolves to the selected items or ",(0,d.jsx)(n.code,{children:"undefined"}),"."]}),"\n",(0,d.jsx)(n.h2,{id:"call-signature-1",children:"Call Signature"}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"showQuickPick"}),"(",(0,d.jsx)(n.code,{children:"items"}),", ",(0,d.jsx)(n.code,{children:"options"}),"?, ",(0,d.jsx)(n.code,{children:"token"}),"?): ",(0,d.jsx)(n.code,{children:"Promise"}),"<",(0,d.jsx)(n.code,{children:"undefined"})," | ",(0,d.jsx)(n.code,{children:"string"}),">"]}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:["Defined in: ",(0,d.jsx)(n.a,{href:"https://github.com/podman-desktop/podman-desktop/blob/aee56aa5111d8110dfa44d517d0be73be3599623/packages/extension-api/src/extension-api.d.ts#L2303",children:"packages/extension-api/src/extension-api.d.ts:2303"})]}),"\n",(0,d.jsx)(n.p,{children:"Shows a selection list."}),"\n",(0,d.jsx)(n.h3,{id:"parameters-1",children:"Parameters"}),"\n",(0,d.jsx)(n.h4,{id:"items-1",children:"items"}),"\n",(0,d.jsx)(n.p,{children:"An array of strings, or a promise that resolves to an array of strings."}),"\n",(0,d.jsxs)(n.p,{children:["readonly ",(0,d.jsx)(n.code,{children:"string"}),"[] | ",(0,d.jsx)(n.code,{children:"Promise"}),"<readonly ",(0,d.jsx)(n.code,{children:"string"}),"[]>"]}),"\n",(0,d.jsx)(n.h4,{id:"options-1",children:"options?"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.a,{href:"/api/interfaces/QuickPickOptions",children:(0,d.jsx)(n.code,{children:"QuickPickOptions"})})}),"\n",(0,d.jsx)(n.p,{children:"Configures the behavior of the selection list."}),"\n",(0,d.jsx)(n.h4,{id:"token-1",children:"token?"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.a,{href:"/api/interfaces/CancellationToken",children:(0,d.jsx)(n.code,{children:"CancellationToken"})})}),"\n",(0,d.jsx)(n.p,{children:"A token that can be used to signal cancellation."}),"\n",(0,d.jsx)(n.h3,{id:"returns-1",children:"Returns"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"Promise"}),"<",(0,d.jsx)(n.code,{children:"undefined"})," | ",(0,d.jsx)(n.code,{children:"string"}),">"]}),"\n",(0,d.jsxs)(n.p,{children:["A promise that resolves to the selection or ",(0,d.jsx)(n.code,{children:"undefined"}),"."]}),"\n",(0,d.jsx)(n.h2,{id:"call-signature-2",children:"Call Signature"}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"showQuickPick"}),"<",(0,d.jsx)(n.code,{children:"T"}),">(",(0,d.jsx)(n.code,{children:"items"}),", ",(0,d.jsx)(n.code,{children:"options"}),", ",(0,d.jsx)(n.code,{children:"token"}),"?): ",(0,d.jsx)(n.code,{children:"Promise"}),"<",(0,d.jsx)(n.code,{children:"undefined"})," | ",(0,d.jsx)(n.code,{children:"T"}),"[]>"]}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:["Defined in: ",(0,d.jsx)(n.a,{href:"https://github.com/podman-desktop/podman-desktop/blob/aee56aa5111d8110dfa44d517d0be73be3599623/packages/extension-api/src/extension-api.d.ts#L2317",children:"packages/extension-api/src/extension-api.d.ts:2317"})]}),"\n",(0,d.jsx)(n.p,{children:"Shows a selection list allowing multiple selections."}),"\n",(0,d.jsx)(n.h3,{id:"type-parameters",children:"Type Parameters"}),"\n",(0,d.jsx)(n.h4,{id:"t",children:"T"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"T"})," ",(0,d.jsx)(n.em,{children:"extends"})," ",(0,d.jsx)(n.a,{href:"/api/interfaces/QuickPickItem",children:(0,d.jsx)(n.code,{children:"QuickPickItem"})})]}),"\n",(0,d.jsx)(n.h3,{id:"parameters-2",children:"Parameters"}),"\n",(0,d.jsx)(n.h4,{id:"items-2",children:"items"}),"\n",(0,d.jsx)(n.p,{children:"An array of items, or a promise that resolves to an array of items."}),"\n",(0,d.jsxs)(n.p,{children:["readonly ",(0,d.jsx)(n.code,{children:"T"}),"[] | ",(0,d.jsx)(n.code,{children:"Promise"}),"<readonly ",(0,d.jsx)(n.code,{children:"T"}),"[]>"]}),"\n",(0,d.jsx)(n.h4,{id:"options-2",children:"options"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.a,{href:"/api/interfaces/QuickPickOptions",children:(0,d.jsx)(n.code,{children:"QuickPickOptions"})})," & ",(0,d.jsx)(n.code,{children:"object"})]}),"\n",(0,d.jsx)(n.p,{children:"Configures the behavior of the selection list."}),"\n",(0,d.jsx)(n.h4,{id:"token-2",children:"token?"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.a,{href:"/api/interfaces/CancellationToken",children:(0,d.jsx)(n.code,{children:"CancellationToken"})})}),"\n",(0,d.jsx)(n.p,{children:"A token that can be used to signal cancellation."}),"\n",(0,d.jsx)(n.h3,{id:"returns-2",children:"Returns"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"Promise"}),"<",(0,d.jsx)(n.code,{children:"undefined"})," | ",(0,d.jsx)(n.code,{children:"T"}),"[]>"]}),"\n",(0,d.jsxs)(n.p,{children:["A promise that resolves to the selected items or ",(0,d.jsx)(n.code,{children:"undefined"}),"."]}),"\n",(0,d.jsx)(n.h2,{id:"call-signature-3",children:"Call Signature"}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"showQuickPick"}),"<",(0,d.jsx)(n.code,{children:"T"}),">(",(0,d.jsx)(n.code,{children:"items"}),", ",(0,d.jsx)(n.code,{children:"options"}),"?, ",(0,d.jsx)(n.code,{children:"token"}),"?): ",(0,d.jsx)(n.code,{children:"Promise"}),"<",(0,d.jsx)(n.code,{children:"undefined"})," | ",(0,d.jsx)(n.code,{children:"T"}),">"]}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:["Defined in: ",(0,d.jsx)(n.a,{href:"https://github.com/podman-desktop/podman-desktop/blob/aee56aa5111d8110dfa44d517d0be73be3599623/packages/extension-api/src/extension-api.d.ts#L2331",children:"packages/extension-api/src/extension-api.d.ts:2331"})]}),"\n",(0,d.jsx)(n.p,{children:"Shows a selection list."}),"\n",(0,d.jsx)(n.h3,{id:"type-parameters-1",children:"Type Parameters"}),"\n",(0,d.jsx)(n.h4,{id:"t-1",children:"T"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"T"})," ",(0,d.jsx)(n.em,{children:"extends"})," ",(0,d.jsx)(n.a,{href:"/api/interfaces/QuickPickItem",children:(0,d.jsx)(n.code,{children:"QuickPickItem"})})]}),"\n",(0,d.jsx)(n.h3,{id:"parameters-3",children:"Parameters"}),"\n",(0,d.jsx)(n.h4,{id:"items-3",children:"items"}),"\n",(0,d.jsx)(n.p,{children:"An array of items, or a promise that resolves to an array of items."}),"\n",(0,d.jsxs)(n.p,{children:["readonly ",(0,d.jsx)(n.code,{children:"T"}),"[] | ",(0,d.jsx)(n.code,{children:"Promise"}),"<readonly ",(0,d.jsx)(n.code,{children:"T"}),"[]>"]}),"\n",(0,d.jsx)(n.h4,{id:"options-3",children:"options?"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.a,{href:"/api/interfaces/QuickPickOptions",children:(0,d.jsx)(n.code,{children:"QuickPickOptions"})})}),"\n",(0,d.jsx)(n.p,{children:"Configures the behavior of the selection list."}),"\n",(0,d.jsx)(n.h4,{id:"token-3",children:"token?"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.a,{href:"/api/interfaces/CancellationToken",children:(0,d.jsx)(n.code,{children:"CancellationToken"})})}),"\n",(0,d.jsx)(n.p,{children:"A token that can be used to signal cancellation."}),"\n",(0,d.jsx)(n.h3,{id:"returns-3",children:"Returns"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"Promise"}),"<",(0,d.jsx)(n.code,{children:"undefined"})," | ",(0,d.jsx)(n.code,{children:"T"}),">"]}),"\n",(0,d.jsxs)(n.p,{children:["A promise that resolves to the selected item or ",(0,d.jsx)(n.code,{children:"undefined"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(a,{...e})}):a(e)}},43023:(e,n,i)=>{i.d(n,{R:()=>c,x:()=>o});var s=i(63696);const d={},r=s.createContext(d);function c(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:c(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);