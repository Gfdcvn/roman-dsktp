"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[75315],{51095:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>r,contentTitle:()=>t,default:()=>l,frontMatter:()=>d,metadata:()=>s,toc:()=>a});const s=JSON.parse('{"id":"interfaces/ContainerEngineInfo","title":"Interface: ContainerEngineInfo","description":"Defined in3614","source":"@site/api/interfaces/ContainerEngineInfo.md","sourceDirName":"interfaces","slug":"/interfaces/ContainerEngineInfo","permalink":"/api/interfaces/ContainerEngineInfo","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"typedocSidebar","previous":{"title":"ContainerCreateResult","permalink":"/api/interfaces/ContainerCreateResult"},"next":{"title":"ContainerInfo","permalink":"/api/interfaces/ContainerInfo"}}');var c=i(62540),o=i(43023);const d={},t="Interface: ContainerEngineInfo",r={},a=[{value:"Properties",id:"properties",level:2},{value:"cpuIdle?",id:"cpuidle",level:3},{value:"cpus?",id:"cpus",level:3},{value:"diskSize?",id:"disksize",level:3},{value:"diskUsed?",id:"diskused",level:3},{value:"engineId",id:"engineid",level:3},{value:"engineName",id:"enginename",level:3},{value:"engineType",id:"enginetype",level:3},{value:"memory?",id:"memory",level:3},{value:"memoryUsed?",id:"memoryused",level:3}];function p(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",p:"p",strong:"strong",...(0,o.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.header,{children:(0,c.jsx)(n.h1,{id:"interface-containerengineinfo",children:"Interface: ContainerEngineInfo"})}),"\n",(0,c.jsxs)(n.p,{children:["Defined in: ",(0,c.jsx)(n.a,{href:"https://github.com/podman-desktop/podman-desktop/blob/ca972cdc322acfe80530704c58e7fe60d482eb05/packages/extension-api/src/extension-api.d.ts#L3614",children:"packages/extension-api/src/extension-api.d.ts:3614"})]}),"\n",(0,c.jsx)(n.p,{children:"Resources information about a container engine"}),"\n",(0,c.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,c.jsx)(n.h3,{id:"cpuidle",children:"cpuIdle?"}),"\n",(0,c.jsxs)(n.blockquote,{children:["\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"optional"})," ",(0,c.jsx)(n.strong,{children:"cpuIdle"}),": ",(0,c.jsx)(n.code,{children:"number"})]}),"\n"]}),"\n",(0,c.jsxs)(n.p,{children:["Defined in: ",(0,c.jsx)(n.a,{href:"https://github.com/podman-desktop/podman-desktop/blob/ca972cdc322acfe80530704c58e7fe60d482eb05/packages/extension-api/src/extension-api.d.ts#L3634",children:"packages/extension-api/src/extension-api.d.ts:3634"})]}),"\n",(0,c.jsx)(n.p,{children:"Percentage of idle CPUs (for Podman engines only)"}),"\n",(0,c.jsx)(n.hr,{}),"\n",(0,c.jsx)(n.h3,{id:"cpus",children:"cpus?"}),"\n",(0,c.jsxs)(n.blockquote,{children:["\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"optional"})," ",(0,c.jsx)(n.strong,{children:"cpus"}),": ",(0,c.jsx)(n.code,{children:"number"})]}),"\n"]}),"\n",(0,c.jsxs)(n.p,{children:["Defined in: ",(0,c.jsx)(n.a,{href:"https://github.com/podman-desktop/podman-desktop/blob/ca972cdc322acfe80530704c58e7fe60d482eb05/packages/extension-api/src/extension-api.d.ts#L3630",children:"packages/extension-api/src/extension-api.d.ts:3630"})]}),"\n",(0,c.jsx)(n.p,{children:"number of CPUs available for the container engine"}),"\n",(0,c.jsx)(n.hr,{}),"\n",(0,c.jsx)(n.h3,{id:"disksize",children:"diskSize?"}),"\n",(0,c.jsxs)(n.blockquote,{children:["\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"optional"})," ",(0,c.jsx)(n.strong,{children:"diskSize"}),": ",(0,c.jsx)(n.code,{children:"number"})]}),"\n"]}),"\n",(0,c.jsxs)(n.p,{children:["Defined in: ",(0,c.jsx)(n.a,{href:"https://github.com/podman-desktop/podman-desktop/blob/ca972cdc322acfe80530704c58e7fe60d482eb05/packages/extension-api/src/extension-api.d.ts#L3646",children:"packages/extension-api/src/extension-api.d.ts:3646"})]}),"\n",(0,c.jsx)(n.p,{children:"Quantity of disk space available for the container engine (for Podman engines only)"}),"\n",(0,c.jsx)(n.hr,{}),"\n",(0,c.jsx)(n.h3,{id:"diskused",children:"diskUsed?"}),"\n",(0,c.jsxs)(n.blockquote,{children:["\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"optional"})," ",(0,c.jsx)(n.strong,{children:"diskUsed"}),": ",(0,c.jsx)(n.code,{children:"number"})]}),"\n"]}),"\n",(0,c.jsxs)(n.p,{children:["Defined in: ",(0,c.jsx)(n.a,{href:"https://github.com/podman-desktop/podman-desktop/blob/ca972cdc322acfe80530704c58e7fe60d482eb05/packages/extension-api/src/extension-api.d.ts#L3650",children:"packages/extension-api/src/extension-api.d.ts:3650"})]}),"\n",(0,c.jsx)(n.p,{children:"Quantity of disk space used by the container engine (for Podman engines only)"}),"\n",(0,c.jsx)(n.hr,{}),"\n",(0,c.jsx)(n.h3,{id:"engineid",children:"engineId"}),"\n",(0,c.jsxs)(n.blockquote,{children:["\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"engineId"}),": ",(0,c.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,c.jsxs)(n.p,{children:["Defined in: ",(0,c.jsx)(n.a,{href:"https://github.com/podman-desktop/podman-desktop/blob/ca972cdc322acfe80530704c58e7fe60d482eb05/packages/extension-api/src/extension-api.d.ts#L3618",children:"packages/extension-api/src/extension-api.d.ts:3618"})]}),"\n",(0,c.jsx)(n.p,{children:"unique id identifying the container engine"}),"\n",(0,c.jsx)(n.hr,{}),"\n",(0,c.jsx)(n.h3,{id:"enginename",children:"engineName"}),"\n",(0,c.jsxs)(n.blockquote,{children:["\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"engineName"}),": ",(0,c.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,c.jsxs)(n.p,{children:["Defined in: ",(0,c.jsx)(n.a,{href:"https://github.com/podman-desktop/podman-desktop/blob/ca972cdc322acfe80530704c58e7fe60d482eb05/packages/extension-api/src/extension-api.d.ts#L3622",children:"packages/extension-api/src/extension-api.d.ts:3622"})]}),"\n",(0,c.jsx)(n.p,{children:"name of the container engine"}),"\n",(0,c.jsx)(n.hr,{}),"\n",(0,c.jsx)(n.h3,{id:"enginetype",children:"engineType"}),"\n",(0,c.jsxs)(n.blockquote,{children:["\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"engineType"}),": ",(0,c.jsx)(n.code,{children:'"docker"'})," | ",(0,c.jsx)(n.code,{children:'"podman"'})]}),"\n"]}),"\n",(0,c.jsxs)(n.p,{children:["Defined in: ",(0,c.jsx)(n.a,{href:"https://github.com/podman-desktop/podman-desktop/blob/ca972cdc322acfe80530704c58e7fe60d482eb05/packages/extension-api/src/extension-api.d.ts#L3626",children:"packages/extension-api/src/extension-api.d.ts:3626"})]}),"\n",(0,c.jsx)(n.p,{children:"engine type, either 'podman' or 'docker'"}),"\n",(0,c.jsx)(n.hr,{}),"\n",(0,c.jsx)(n.h3,{id:"memory",children:"memory?"}),"\n",(0,c.jsxs)(n.blockquote,{children:["\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"optional"})," ",(0,c.jsx)(n.strong,{children:"memory"}),": ",(0,c.jsx)(n.code,{children:"number"})]}),"\n"]}),"\n",(0,c.jsxs)(n.p,{children:["Defined in: ",(0,c.jsx)(n.a,{href:"https://github.com/podman-desktop/podman-desktop/blob/ca972cdc322acfe80530704c58e7fe60d482eb05/packages/extension-api/src/extension-api.d.ts#L3638",children:"packages/extension-api/src/extension-api.d.ts:3638"})]}),"\n",(0,c.jsx)(n.p,{children:"Quantity of memory available for the container engine"}),"\n",(0,c.jsx)(n.hr,{}),"\n",(0,c.jsx)(n.h3,{id:"memoryused",children:"memoryUsed?"}),"\n",(0,c.jsxs)(n.blockquote,{children:["\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"optional"})," ",(0,c.jsx)(n.strong,{children:"memoryUsed"}),": ",(0,c.jsx)(n.code,{children:"number"})]}),"\n"]}),"\n",(0,c.jsxs)(n.p,{children:["Defined in: ",(0,c.jsx)(n.a,{href:"https://github.com/podman-desktop/podman-desktop/blob/ca972cdc322acfe80530704c58e7fe60d482eb05/packages/extension-api/src/extension-api.d.ts#L3642",children:"packages/extension-api/src/extension-api.d.ts:3642"})]}),"\n",(0,c.jsx)(n.p,{children:"Quantity of memory used by the container engine (for Podman engines only)"})]})}function l(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(p,{...e})}):p(e)}},43023:(e,n,i)=>{i.d(n,{R:()=>d,x:()=>t});var s=i(63696);const c={},o=s.createContext(c);function d(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:d(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);