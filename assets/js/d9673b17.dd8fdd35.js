"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[32428],{43023:(e,n,i)=>{i.d(n,{R:()=>d,x:()=>c});var t=i(63696);const s={},o=t.createContext(s);function d(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),t.createElement(o.Provider,{value:n},e.children)}},98133:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>p,frontMatter:()=>d,metadata:()=>t,toc:()=>r});const t=JSON.parse('{"id":"interfaces/NotificationOptions","title":"Interface: NotificationOptions","description":"Defined in1691","source":"@site/api/interfaces/NotificationOptions.md","sourceDirName":"interfaces","slug":"/interfaces/NotificationOptions","permalink":"/api/interfaces/NotificationOptions","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"typedocSidebar","previous":{"title":"NetworkStats","permalink":"/api/interfaces/NetworkStats"},"next":{"title":"OpenDialogOptions","permalink":"/api/interfaces/OpenDialogOptions"}}');var s=i(62540),o=i(43023);const d={},c="Interface: NotificationOptions",a={},r=[{value:"Properties",id:"properties",level:2},{value:"body?",id:"body",level:3},{value:"highlight?",id:"highlight",level:3},{value:"markdownActions?",id:"markdownactions",level:3},{value:"silent?",id:"silent",level:3},{value:"title?",id:"title",level:3},{value:"type?",id:"type",level:3}];function l(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",p:"p",strong:"strong",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"interface-notificationoptions",children:"Interface: NotificationOptions"})}),"\n",(0,s.jsxs)(n.p,{children:["Defined in: ",(0,s.jsx)(n.a,{href:"https://github.com/podman-desktop/podman-desktop/blob/f60dfeaf59fef30c3dda6e8cc4964d050f71497d/packages/extension-api/src/extension-api.d.ts#L1691",children:"packages/extension-api/src/extension-api.d.ts:1691"})]}),"\n",(0,s.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,s.jsx)(n.h3,{id:"body",children:"body?"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"optional"})," ",(0,s.jsx)(n.strong,{children:"body"}),": ",(0,s.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Defined in: ",(0,s.jsx)(n.a,{href:"https://github.com/podman-desktop/podman-desktop/blob/f60dfeaf59fef30c3dda6e8cc4964d050f71497d/packages/extension-api/src/extension-api.d.ts#L1699",children:"packages/extension-api/src/extension-api.d.ts:1699"})]}),"\n",(0,s.jsx)(n.p,{children:"The body text of the notification, which will be displayed below the title."}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"highlight",children:"highlight?"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"optional"})," ",(0,s.jsx)(n.strong,{children:"highlight"}),": ",(0,s.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Defined in: ",(0,s.jsx)(n.a,{href:"https://github.com/podman-desktop/podman-desktop/blob/f60dfeaf59fef30c3dda6e8cc4964d050f71497d/packages/extension-api/src/extension-api.d.ts#L1715",children:"packages/extension-api/src/extension-api.d.ts:1715"})]}),"\n",(0,s.jsx)(n.p,{children:"this notification will be highlighted to the user so it draws attention"}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"markdownactions",children:"markdownActions?"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"optional"})," ",(0,s.jsx)(n.strong,{children:"markdownActions"}),": ",(0,s.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Defined in: ",(0,s.jsx)(n.a,{href:"https://github.com/podman-desktop/podman-desktop/blob/f60dfeaf59fef30c3dda6e8cc4964d050f71497d/packages/extension-api/src/extension-api.d.ts#L1711",children:"packages/extension-api/src/extension-api.d.ts:1711"})]}),"\n",(0,s.jsx)(n.p,{children:"displayed below the description. It contains actions (like markdown commands/buttons and links)"}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"silent",children:"silent?"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"optional"})," ",(0,s.jsx)(n.strong,{children:"silent"}),": ",(0,s.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Defined in: ",(0,s.jsx)(n.a,{href:"https://github.com/podman-desktop/podman-desktop/blob/f60dfeaf59fef30c3dda6e8cc4964d050f71497d/packages/extension-api/src/extension-api.d.ts#L1703",children:"packages/extension-api/src/extension-api.d.ts:1703"})]}),"\n",(0,s.jsx)(n.p,{children:"Whether or not to emit an OS notification noise when showing the notification."}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"title",children:"title?"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"optional"})," ",(0,s.jsx)(n.strong,{children:"title"}),": ",(0,s.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Defined in: ",(0,s.jsx)(n.a,{href:"https://github.com/podman-desktop/podman-desktop/blob/f60dfeaf59fef30c3dda6e8cc4964d050f71497d/packages/extension-api/src/extension-api.d.ts#L1695",children:"packages/extension-api/src/extension-api.d.ts:1695"})]}),"\n",(0,s.jsx)(n.p,{children:"A title for the notification, which will be shown at the top of the notification window when it is shown."}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"type",children:"type?"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"optional"})," ",(0,s.jsx)(n.strong,{children:"type"}),": ",(0,s.jsx)(n.a,{href:"/api/type-aliases/NotificationType",children:(0,s.jsx)(n.code,{children:"NotificationType"})})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Defined in: ",(0,s.jsx)(n.a,{href:"https://github.com/podman-desktop/podman-desktop/blob/f60dfeaf59fef30c3dda6e8cc4964d050f71497d/packages/extension-api/src/extension-api.d.ts#L1707",children:"packages/extension-api/src/extension-api.d.ts:1707"})]}),"\n",(0,s.jsx)(n.p,{children:"The type of the notification. Default value: info"})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}}}]);