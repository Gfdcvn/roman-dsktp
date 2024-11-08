"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[14036],{13326:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>a});var s=i(62540),t=i(43023);const r={},o="Interface: ProgressOptions",d={id:"interfaces/ProgressOptions",title:"Interface: ProgressOptions",description:"Value-object describing where and how progress should show.",source:"@site/api/interfaces/ProgressOptions.md",sourceDirName:"interfaces",slug:"/interfaces/ProgressOptions",permalink:"/api/interfaces/ProgressOptions",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"typedocSidebar",previous:{title:"Progress",permalink:"/api/interfaces/Progress"},next:{title:"Provider",permalink:"/api/interfaces/Provider"}},c={},a=[{value:"Properties",id:"properties",level:2},{value:"cancellable?",id:"cancellable",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"details?",id:"details",level:3},{value:"routeArgs",id:"routeargs",level:4},{value:"routeId",id:"routeid",level:4},{value:"Example",id:"example",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"location",id:"location",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"title?",id:"title",level:3},{value:"Defined in",id:"defined-in-3",level:4}];function l(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",hr:"hr",p:"p",pre:"pre",strong:"strong",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"interface-progressoptions",children:"Interface: ProgressOptions"})}),"\n",(0,s.jsx)(n.p,{children:"Value-object describing where and how progress should show."}),"\n",(0,s.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,s.jsx)(n.h3,{id:"cancellable",children:"cancellable?"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"optional"})," ",(0,s.jsx)(n.strong,{children:"cancellable"}),": ",(0,s.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Controls if a cancel button should show to allow the user to\ncancel the long running operation.  Note that currently only\n",(0,s.jsx)(n.code,{children:"ProgressLocation.Notification"})," is supporting to show a cancel\nbutton."]}),"\n",(0,s.jsx)(n.h4,{id:"defined-in",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/podman-desktop/podman-desktop/blob/ce232789af25d45c5caebb6dee862a16ddaca9c5/packages/extension-api/src/extension-api.d.ts#L1265",children:"packages/extension-api/src/extension-api.d.ts:1265"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"details",children:"details?"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"optional"})," ",(0,s.jsx)(n.strong,{children:"details"}),": ",(0,s.jsx)(n.code,{children:"object"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"You may specify a navigation object, making the task having a\nnavigate action that the user can trigger."}),"\n",(0,s.jsx)(n.h4,{id:"routeargs",children:"routeArgs"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"routeArgs"}),": ",(0,s.jsx)(n.code,{children:"string"}),"[]"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"The arguments to provide the route"}),"\n",(0,s.jsx)(n.h4,{id:"routeid",children:"routeId"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"routeId"}),": ",(0,s.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["The routeId used in ",(0,s.jsx)(n.a,{href:"/api/namespaces/navigation/functions/register",children:"navigation.register"})]}),"\n",(0,s.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"import { window, type ProgressLocation } from '@podman-desktop/api';\n\nawait window.withProgress<string>(\n    {\n      location: ProgressLocation.TASK_WIDGET,\n      title: 'My task',\n      details: {\n        routeId: 'dummy-route-id',\n        routeArgs: ['hello', 'world'],\n      }\n    },\n    async () => {\n      return 'dummy result';\n    },\n  );\n"})}),"\n",(0,s.jsx)(n.h4,{id:"defined-in-1",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/podman-desktop/podman-desktop/blob/ce232789af25d45c5caebb6dee862a16ddaca9c5/packages/extension-api/src/extension-api.d.ts#L1289",children:"packages/extension-api/src/extension-api.d.ts:1289"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"location",children:"location"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"location"}),": ",(0,s.jsx)(n.a,{href:"/api/enumerations/ProgressLocation",children:(0,s.jsx)(n.code,{children:"ProgressLocation"})})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"The location at which progress should show."}),"\n",(0,s.jsx)(n.h4,{id:"defined-in-2",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/podman-desktop/podman-desktop/blob/ce232789af25d45c5caebb6dee862a16ddaca9c5/packages/extension-api/src/extension-api.d.ts#L1251",children:"packages/extension-api/src/extension-api.d.ts:1251"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"title",children:"title?"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"optional"})," ",(0,s.jsx)(n.strong,{children:"title"}),": ",(0,s.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"A human-readable string which will be used to describe the\noperation."}),"\n",(0,s.jsx)(n.h4,{id:"defined-in-3",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/podman-desktop/podman-desktop/blob/ce232789af25d45c5caebb6dee862a16ddaca9c5/packages/extension-api/src/extension-api.d.ts#L1257",children:"packages/extension-api/src/extension-api.d.ts:1257"})})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},43023:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>d});var s=i(63696);const t={},r=s.createContext(t);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);