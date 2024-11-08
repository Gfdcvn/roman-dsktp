"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[22051],{63312:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>t,metadata:()=>o,toc:()=>r});var s=i(62540),d=i(43023);const t={},c="Interface: CustomPick<T>",o={id:"interfaces/CustomPick",title:"Interface: CustomPick\\<T\\>",description:"A concrete CustomPick to let the user pick an item from a list of items of type T.",source:"@site/api/interfaces/CustomPick.md",sourceDirName:"interfaces",slug:"/interfaces/CustomPick",permalink:"/api/interfaces/CustomPick",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"typedocSidebar",previous:{title:"CPUUsage",permalink:"/api/interfaces/CPUUsage"},next:{title:"CustomPickItem",permalink:"/api/interfaces/CustomPickItem"}},a={},r=[{value:"Type Parameters",id:"type-parameters",level:2},{value:"Properties",id:"properties",level:2},{value:"canSelectMany",id:"canselectmany",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"description?",id:"description",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"hideItemSections",id:"hideitemsections",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"icon?",id:"icon",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"items",id:"items",level:3},{value:"Defined in",id:"defined-in-4",level:4},{value:"minHeight?",id:"minheight",level:3},{value:"Defined in",id:"defined-in-5",level:4},{value:"onDidConfirmSelection",id:"ondidconfirmselection",level:3},{value:"Defined in",id:"defined-in-6",level:4},{value:"onDidHide",id:"ondidhide",level:3},{value:"Defined in",id:"defined-in-7",level:4},{value:"title?",id:"title",level:3},{value:"Defined in",id:"defined-in-8",level:4},{value:"Methods",id:"methods",level:2},{value:"dispose()",id:"dispose",level:3},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in-9",level:4},{value:"hide()",id:"hide",level:3},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-10",level:4},{value:"show()",id:"show",level:3},{value:"Returns",id:"returns-2",level:4},{value:"Defined in",id:"defined-in-11",level:4}];function l(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",hr:"hr",p:"p",strong:"strong",...(0,d.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"interface-custompickt",children:"Interface: CustomPick<T>"})}),"\n",(0,s.jsx)(n.p,{children:"A concrete CustomPick to let the user pick an item from a list of items of type T.\nThe items are rendered using a custom UI."}),"\n",(0,s.jsx)(n.h2,{id:"type-parameters",children:"Type Parameters"}),"\n",(0,s.jsxs)(n.p,{children:["\u2022 ",(0,s.jsx)(n.strong,{children:"T"})," ",(0,s.jsx)(n.em,{children:"extends"})," ",(0,s.jsx)(n.a,{href:"/api/interfaces/CustomPickItem",children:(0,s.jsx)(n.code,{children:"CustomPickItem"})})]}),"\n",(0,s.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,s.jsx)(n.h3,{id:"canselectmany",children:"canSelectMany"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"canSelectMany"}),": ",(0,s.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"If multiple items can be selected at the same time. Defaults to false."}),"\n",(0,s.jsx)(n.h4,{id:"defined-in",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/podman-desktop/podman-desktop/blob/ce232789af25d45c5caebb6dee862a16ddaca9c5/packages/extension-api/src/extension-api.d.ts#L1640",children:"packages/extension-api/src/extension-api.d.ts:1640"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"description",children:"description?"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"optional"})," ",(0,s.jsx)(n.strong,{children:"description"}),": ",(0,s.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"An optional human-readable string which is rendered less prominent in a separate line."}),"\n",(0,s.jsx)(n.h4,{id:"defined-in-1",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/podman-desktop/podman-desktop/blob/ce232789af25d45c5caebb6dee862a16ddaca9c5/packages/extension-api/src/extension-api.d.ts#L1628",children:"packages/extension-api/src/extension-api.d.ts:1628"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"hideitemsections",children:"hideItemSections"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"hideItemSections"}),": ",(0,s.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"If the additional sections of an item should be hidden by default when the dialog opens up.\nThe user can still open them by clicking on the 'show more' button.\nDefaults to false."}),"\n",(0,s.jsx)(n.h4,{id:"defined-in-2",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/podman-desktop/podman-desktop/blob/ce232789af25d45c5caebb6dee862a16ddaca9c5/packages/extension-api/src/extension-api.d.ts#L1646",children:"packages/extension-api/src/extension-api.d.ts:1646"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"icon",children:"icon?"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"optional"})," ",(0,s.jsx)(n.strong,{children:"icon"}),": ",(0,s.jsx)(n.code,{children:"string"})," | ",(0,s.jsx)(n.code,{children:"object"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"An optional base64 PNG image"}),"\n",(0,s.jsx)(n.h4,{id:"defined-in-3",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/podman-desktop/podman-desktop/blob/ce232789af25d45c5caebb6dee862a16ddaca9c5/packages/extension-api/src/extension-api.d.ts#L1632",children:"packages/extension-api/src/extension-api.d.ts:1632"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"items",children:"items"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"items"}),": ",(0,s.jsx)(n.code,{children:"T"}),"[]"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Items to pick from. This can be read and updated by the extension."}),"\n",(0,s.jsx)(n.h4,{id:"defined-in-4",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/podman-desktop/podman-desktop/blob/ce232789af25d45c5caebb6dee862a16ddaca9c5/packages/extension-api/src/extension-api.d.ts#L1636",children:"packages/extension-api/src/extension-api.d.ts:1636"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"minheight",children:"minHeight?"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"optional"})," ",(0,s.jsx)(n.strong,{children:"minHeight"}),": ",(0,s.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"When a custompick is closed (the sections are hidden) it is possible to set a minimum height so to force different items to have the same height.\nIt must be set using pixels or percentage (e.g 100px or 50%)\nUse it carefully as it could break the layout."}),"\n",(0,s.jsx)(n.h4,{id:"defined-in-5",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/podman-desktop/podman-desktop/blob/ce232789af25d45c5caebb6dee862a16ddaca9c5/packages/extension-api/src/extension-api.d.ts#L1652",children:"packages/extension-api/src/extension-api.d.ts:1652"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"ondidconfirmselection",children:"onDidConfirmSelection"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"readonly"})," ",(0,s.jsx)(n.strong,{children:"onDidConfirmSelection"}),": ",(0,s.jsx)(n.a,{href:"/api/interfaces/Event",children:(0,s.jsx)(n.code,{children:"Event"})}),"<",(0,s.jsx)(n.code,{children:"number"}),"[]>"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"An event signaling when the user indicated confirmation of the selected item(s) index(es)."}),"\n",(0,s.jsx)(n.h4,{id:"defined-in-6",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/podman-desktop/podman-desktop/blob/ce232789af25d45c5caebb6dee862a16ddaca9c5/packages/extension-api/src/extension-api.d.ts#L1656",children:"packages/extension-api/src/extension-api.d.ts:1656"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"ondidhide",children:"onDidHide"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"readonly"})," ",(0,s.jsx)(n.strong,{children:"onDidHide"}),": ",(0,s.jsx)(n.a,{href:"/api/interfaces/Event",children:(0,s.jsx)(n.code,{children:"Event"})}),"<",(0,s.jsx)(n.code,{children:"void"}),">"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"An event signaling when this input UI is hidden."}),"\n",(0,s.jsx)(n.h4,{id:"defined-in-7",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/podman-desktop/podman-desktop/blob/ce232789af25d45c5caebb6dee862a16ddaca9c5/packages/extension-api/src/extension-api.d.ts#L1660",children:"packages/extension-api/src/extension-api.d.ts:1660"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"title",children:"title?"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"optional"})," ",(0,s.jsx)(n.strong,{children:"title"}),": ",(0,s.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"An optional human-readable string which is rendered prominent."}),"\n",(0,s.jsx)(n.h4,{id:"defined-in-8",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/podman-desktop/podman-desktop/blob/ce232789af25d45c5caebb6dee862a16ddaca9c5/packages/extension-api/src/extension-api.d.ts#L1624",children:"packages/extension-api/src/extension-api.d.ts:1624"})}),"\n",(0,s.jsx)(n.h2,{id:"methods",children:"Methods"}),"\n",(0,s.jsx)(n.h3,{id:"dispose",children:"dispose()"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"dispose"}),"(): ",(0,s.jsx)(n.code,{children:"void"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Dispose and free associated resources. Call\n",(0,s.jsx)(n.a,{href:"/api/interfaces/CustomPick#hide",children:"CustomPick.hide"}),"."]}),"\n",(0,s.jsx)(n.h4,{id:"returns",children:"Returns"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"void"})}),"\n",(0,s.jsx)(n.h4,{id:"defined-in-9",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/podman-desktop/podman-desktop/blob/ce232789af25d45c5caebb6dee862a16ddaca9c5/packages/extension-api/src/extension-api.d.ts#L1674",children:"packages/extension-api/src/extension-api.d.ts:1674"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"hide",children:"hide()"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"hide"}),"(): ",(0,s.jsx)(n.code,{children:"void"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Hides the custom pick."}),"\n",(0,s.jsx)(n.h4,{id:"returns-1",children:"Returns"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"void"})}),"\n",(0,s.jsx)(n.h4,{id:"defined-in-10",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/podman-desktop/podman-desktop/blob/ce232789af25d45c5caebb6dee862a16ddaca9c5/packages/extension-api/src/extension-api.d.ts#L1668",children:"packages/extension-api/src/extension-api.d.ts:1668"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"show",children:"show()"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"show"}),"(): ",(0,s.jsx)(n.code,{children:"void"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Shows the custom pick."}),"\n",(0,s.jsx)(n.h4,{id:"returns-2",children:"Returns"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"void"})}),"\n",(0,s.jsx)(n.h4,{id:"defined-in-11",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/podman-desktop/podman-desktop/blob/ce232789af25d45c5caebb6dee862a16ddaca9c5/packages/extension-api/src/extension-api.d.ts#L1664",children:"packages/extension-api/src/extension-api.d.ts:1664"})})]})}function h(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},43023:(e,n,i)=>{i.d(n,{R:()=>c,x:()=>o});var s=i(63696);const d={},t=s.createContext(d);function c(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:c(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);