"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2571],{77732:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>d,metadata:()=>r,toc:()=>o});const r=JSON.parse('{"id":"interfaces/SecretStorage","title":"Interface: SecretStorage","description":"Defined in4875","source":"@site/api/interfaces/SecretStorage.md","sourceDirName":"interfaces","slug":"/interfaces/SecretStorage","permalink":"/api/interfaces/SecretStorage","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"typedocSidebar","previous":{"title":"SaveDialogOptions","permalink":"/api/interfaces/SaveDialogOptions"},"next":{"title":"SecretStorageChangeEvent","permalink":"/api/interfaces/SecretStorageChangeEvent"}}');var t=s(62540),i=s(43023);const d={},c="Interface: SecretStorage",a={},o=[{value:"Properties",id:"properties",level:2},{value:"onDidChange",id:"ondidchange",level:3},{value:"Methods",id:"methods",level:2},{value:"delete()",id:"delete",level:3},{value:"Parameters",id:"parameters",level:4},{value:"key",id:"key",level:5},{value:"Returns",id:"returns",level:4},{value:"get()",id:"get",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"key",id:"key-1",level:5},{value:"Returns",id:"returns-1",level:4},{value:"store()",id:"store",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"key",id:"key-2",level:5},{value:"value",id:"value",level:5},{value:"Returns",id:"returns-2",level:4}];function l(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",header:"header",hr:"hr",p:"p",strong:"strong",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"interface-secretstorage",children:"Interface: SecretStorage"})}),"\n",(0,t.jsxs)(n.p,{children:["Defined in: ",(0,t.jsx)(n.a,{href:"https://github.com/podman-desktop/podman-desktop/blob/b6736353347e29dc6a1a47b0ee064e263307f4a7/packages/extension-api/src/extension-api.d.ts#L4875",children:"packages/extension-api/src/extension-api.d.ts:4875"})]}),"\n",(0,t.jsx)(n.p,{children:"Represents a storage utility for secrets, information that is\nsensitive."}),"\n",(0,t.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,t.jsx)(n.h3,{id:"ondidchange",children:"onDidChange"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"onDidChange"}),": ",(0,t.jsx)(n.a,{href:"/api/interfaces/Event",children:(0,t.jsx)(n.code,{children:"Event"})}),"<",(0,t.jsx)(n.a,{href:"/api/interfaces/SecretStorageChangeEvent",children:(0,t.jsx)(n.code,{children:"SecretStorageChangeEvent"})}),">"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Defined in: ",(0,t.jsx)(n.a,{href:"https://github.com/podman-desktop/podman-desktop/blob/b6736353347e29dc6a1a47b0ee064e263307f4a7/packages/extension-api/src/extension-api.d.ts#L4900",children:"packages/extension-api/src/extension-api.d.ts:4900"})]}),"\n",(0,t.jsx)(n.p,{children:"Fires when a secret is stored or deleted."}),"\n",(0,t.jsx)(n.h2,{id:"methods",children:"Methods"}),"\n",(0,t.jsx)(n.h3,{id:"delete",children:"delete()"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"delete"}),"(",(0,t.jsx)(n.code,{children:"key"}),"): ",(0,t.jsx)(n.code,{children:"Promise"}),"<",(0,t.jsx)(n.code,{children:"void"}),">"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Defined in: ",(0,t.jsx)(n.a,{href:"https://github.com/podman-desktop/podman-desktop/blob/b6736353347e29dc6a1a47b0ee064e263307f4a7/packages/extension-api/src/extension-api.d.ts#L4895",children:"packages/extension-api/src/extension-api.d.ts:4895"})]}),"\n",(0,t.jsx)(n.p,{children:"Remove a secret from storage."}),"\n",(0,t.jsx)(n.h4,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsx)(n.h5,{id:"key",children:"key"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"string"})}),"\n",(0,t.jsx)(n.p,{children:"The key the secret was stored under."}),"\n",(0,t.jsx)(n.h4,{id:"returns",children:"Returns"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Promise"}),"<",(0,t.jsx)(n.code,{children:"void"}),">"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"get",children:"get()"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"get"}),"(",(0,t.jsx)(n.code,{children:"key"}),"): ",(0,t.jsx)(n.code,{children:"Promise"}),"<",(0,t.jsx)(n.code,{children:"undefined"})," | ",(0,t.jsx)(n.code,{children:"string"}),">"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Defined in: ",(0,t.jsx)(n.a,{href:"https://github.com/podman-desktop/podman-desktop/blob/b6736353347e29dc6a1a47b0ee064e263307f4a7/packages/extension-api/src/extension-api.d.ts#L4882",children:"packages/extension-api/src/extension-api.d.ts:4882"})]}),"\n",(0,t.jsx)(n.p,{children:"Retrieve a secret that was stored with key. Returns undefined if there\nis no secret matching that key."}),"\n",(0,t.jsx)(n.h4,{id:"parameters-1",children:"Parameters"}),"\n",(0,t.jsx)(n.h5,{id:"key-1",children:"key"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"string"})}),"\n",(0,t.jsx)(n.p,{children:"The key the secret was stored under."}),"\n",(0,t.jsx)(n.h4,{id:"returns-1",children:"Returns"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Promise"}),"<",(0,t.jsx)(n.code,{children:"undefined"})," | ",(0,t.jsx)(n.code,{children:"string"}),">"]}),"\n",(0,t.jsxs)(n.p,{children:["The stored value or ",(0,t.jsx)(n.code,{children:"undefined"}),"."]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"store",children:"store()"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"store"}),"(",(0,t.jsx)(n.code,{children:"key"}),", ",(0,t.jsx)(n.code,{children:"value"}),"): ",(0,t.jsx)(n.code,{children:"Promise"}),"<",(0,t.jsx)(n.code,{children:"void"}),">"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Defined in: ",(0,t.jsx)(n.a,{href:"https://github.com/podman-desktop/podman-desktop/blob/b6736353347e29dc6a1a47b0ee064e263307f4a7/packages/extension-api/src/extension-api.d.ts#L4889",children:"packages/extension-api/src/extension-api.d.ts:4889"})]}),"\n",(0,t.jsx)(n.p,{children:"Store a secret under a given key."}),"\n",(0,t.jsx)(n.h4,{id:"parameters-2",children:"Parameters"}),"\n",(0,t.jsx)(n.h5,{id:"key-2",children:"key"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"string"})}),"\n",(0,t.jsx)(n.p,{children:"The key to store the secret under."}),"\n",(0,t.jsx)(n.h5,{id:"value",children:"value"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"string"})}),"\n",(0,t.jsx)(n.p,{children:"The secret."}),"\n",(0,t.jsx)(n.h4,{id:"returns-2",children:"Returns"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Promise"}),"<",(0,t.jsx)(n.code,{children:"void"}),">"]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},43023:(e,n,s)=>{s.d(n,{R:()=>d,x:()=>c});var r=s(63696);const t={},i=r.createContext(t);function d(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);