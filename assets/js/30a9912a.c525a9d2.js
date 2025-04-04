"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[16425],{89077:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>t,contentTitle:()=>l,default:()=>o,frontMatter:()=>a,metadata:()=>d,toc:()=>c});const d=JSON.parse('{"id":"interfaces/ImageFilesProvider","title":"Interface: ImageFilesProvider","description":"Defined in948","source":"@site/api/interfaces/ImageFilesProvider.md","sourceDirName":"interfaces","slug":"/interfaces/ImageFilesProvider","permalink":"/api/interfaces/ImageFilesProvider","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"typedocSidebar","previous":{"title":"ImageFilesCallbacks","permalink":"/api/interfaces/ImageFilesCallbacks"},"next":{"title":"ImageFilesProviderMetadata","permalink":"/api/interfaces/ImageFilesProviderMetadata"}}');var n=i(62540),r=i(43023);const a={},l="Interface: ImageFilesProvider",t={},c=[{value:"Extends",id:"extends",level:2},{value:"Methods",id:"methods",level:2},{value:"addDirectory()",id:"adddirectory",level:3},{value:"Parameters",id:"parameters",level:4},{value:"layer",id:"layer",level:5},{value:"opts",id:"opts",level:5},{value:"mode",id:"mode",level:6},{value:"path",id:"path",level:6},{value:"Returns",id:"returns",level:4},{value:"addFile()",id:"addfile",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"layer",id:"layer-1",level:5},{value:"opts",id:"opts-1",level:5},{value:"mode",id:"mode-1",level:6},{value:"path",id:"path-1",level:6},{value:"size",id:"size",level:6},{value:"Returns",id:"returns-1",level:4},{value:"addOpaqueWhiteout()",id:"addopaquewhiteout",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"layer",id:"layer-2",level:5},{value:"path",id:"path-2",level:5},{value:"Returns",id:"returns-2",level:4},{value:"addSymlink()",id:"addsymlink",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"layer",id:"layer-3",level:5},{value:"opts",id:"opts-2",level:5},{value:"linkPath",id:"linkpath",level:6},{value:"mode",id:"mode-2",level:6},{value:"path",id:"path-3",level:6},{value:"Returns",id:"returns-3",level:4},{value:"addWhiteout()",id:"addwhiteout",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"layer",id:"layer-4",level:5},{value:"path",id:"path-4",level:5},{value:"Returns",id:"returns-4",level:4},{value:"dispose()",id:"dispose",level:3},{value:"Returns",id:"returns-5",level:4},{value:"Inherited from",id:"inherited-from",level:4}];function h(e){const s={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",header:"header",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.header,{children:(0,n.jsx)(s.h1,{id:"interface-imagefilesprovider",children:"Interface: ImageFilesProvider"})}),"\n",(0,n.jsxs)(s.p,{children:["Defined in: ",(0,n.jsx)(s.a,{href:"https://github.com/podman-desktop/podman-desktop/blob/5ed9ee15a14a14a7aa4a73d5a9765ce20f2937fc/packages/extension-api/src/extension-api.d.ts#L948",children:"packages/extension-api/src/extension-api.d.ts:948"})]}),"\n",(0,n.jsxs)(s.p,{children:["Provider returned to the extension when calling createImageFilesProvider\nProvides helper functions for building the response of the ",(0,n.jsx)(s.code,{children:"createImageFilesProvider"})," callback"]}),"\n",(0,n.jsx)(s.h2,{id:"extends",children:"Extends"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"/api/classes/Disposable",children:(0,n.jsx)(s.code,{children:"Disposable"})})}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"methods",children:"Methods"}),"\n",(0,n.jsx)(s.h3,{id:"adddirectory",children:"addDirectory()"}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"addDirectory"}),"(",(0,n.jsx)(s.code,{children:"layer"}),", ",(0,n.jsx)(s.code,{children:"opts"}),"): ",(0,n.jsx)(s.code,{children:"ImageFilesProvider"})]}),"\n"]}),"\n",(0,n.jsxs)(s.p,{children:["Defined in: ",(0,n.jsx)(s.a,{href:"https://github.com/podman-desktop/podman-desktop/blob/5ed9ee15a14a14a7aa4a73d5a9765ce20f2937fc/packages/extension-api/src/extension-api.d.ts#L956",children:"packages/extension-api/src/extension-api.d.ts:956"})]}),"\n",(0,n.jsx)(s.p,{children:"add a directory to the layer"}),"\n",(0,n.jsx)(s.h4,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsx)(s.h5,{id:"layer",children:"layer"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"/api/interfaces/ImageFilesystemLayer",children:(0,n.jsx)(s.code,{children:"ImageFilesystemLayer"})})}),"\n",(0,n.jsx)(s.h5,{id:"opts",children:"opts"}),"\n",(0,n.jsx)(s.h6,{id:"mode",children:"mode"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.code,{children:"number"})}),"\n",(0,n.jsx)(s.h6,{id:"path",children:"path"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.code,{children:"string"})}),"\n",(0,n.jsx)(s.h4,{id:"returns",children:"Returns"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.code,{children:"ImageFilesProvider"})}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h3,{id:"addfile",children:"addFile()"}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"addFile"}),"(",(0,n.jsx)(s.code,{children:"layer"}),", ",(0,n.jsx)(s.code,{children:"opts"}),"): ",(0,n.jsx)(s.code,{children:"ImageFilesProvider"})]}),"\n"]}),"\n",(0,n.jsxs)(s.p,{children:["Defined in: ",(0,n.jsx)(s.a,{href:"https://github.com/podman-desktop/podman-desktop/blob/5ed9ee15a14a14a7aa4a73d5a9765ce20f2937fc/packages/extension-api/src/extension-api.d.ts#L952",children:"packages/extension-api/src/extension-api.d.ts:952"})]}),"\n",(0,n.jsx)(s.p,{children:"add a file to the layer"}),"\n",(0,n.jsx)(s.h4,{id:"parameters-1",children:"Parameters"}),"\n",(0,n.jsx)(s.h5,{id:"layer-1",children:"layer"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"/api/interfaces/ImageFilesystemLayer",children:(0,n.jsx)(s.code,{children:"ImageFilesystemLayer"})})}),"\n",(0,n.jsx)(s.h5,{id:"opts-1",children:"opts"}),"\n",(0,n.jsx)(s.h6,{id:"mode-1",children:"mode"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.code,{children:"number"})}),"\n",(0,n.jsx)(s.h6,{id:"path-1",children:"path"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.code,{children:"string"})}),"\n",(0,n.jsx)(s.h6,{id:"size",children:"size"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.code,{children:"number"})}),"\n",(0,n.jsx)(s.h4,{id:"returns-1",children:"Returns"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.code,{children:"ImageFilesProvider"})}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h3,{id:"addopaquewhiteout",children:"addOpaqueWhiteout()"}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"addOpaqueWhiteout"}),"(",(0,n.jsx)(s.code,{children:"layer"}),", ",(0,n.jsx)(s.code,{children:"path"}),"): ",(0,n.jsx)(s.code,{children:"ImageFilesProvider"})]}),"\n"]}),"\n",(0,n.jsxs)(s.p,{children:["Defined in: ",(0,n.jsx)(s.a,{href:"https://github.com/podman-desktop/podman-desktop/blob/5ed9ee15a14a14a7aa4a73d5a9765ce20f2937fc/packages/extension-api/src/extension-api.d.ts#L970",children:"packages/extension-api/src/extension-api.d.ts:970"})]}),"\n",(0,n.jsx)(s.p,{children:"add a complete directory to remove from previous layers"}),"\n",(0,n.jsx)(s.h4,{id:"parameters-2",children:"Parameters"}),"\n",(0,n.jsx)(s.h5,{id:"layer-2",children:"layer"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"/api/interfaces/ImageFilesystemLayer",children:(0,n.jsx)(s.code,{children:"ImageFilesystemLayer"})})}),"\n",(0,n.jsx)(s.h5,{id:"path-2",children:"path"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.code,{children:"string"})}),"\n",(0,n.jsx)(s.h4,{id:"returns-2",children:"Returns"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.code,{children:"ImageFilesProvider"})}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h3,{id:"addsymlink",children:"addSymlink()"}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"addSymlink"}),"(",(0,n.jsx)(s.code,{children:"layer"}),", ",(0,n.jsx)(s.code,{children:"opts"}),"): ",(0,n.jsx)(s.code,{children:"ImageFilesProvider"})]}),"\n"]}),"\n",(0,n.jsxs)(s.p,{children:["Defined in: ",(0,n.jsx)(s.a,{href:"https://github.com/podman-desktop/podman-desktop/blob/5ed9ee15a14a14a7aa4a73d5a9765ce20f2937fc/packages/extension-api/src/extension-api.d.ts#L960",children:"packages/extension-api/src/extension-api.d.ts:960"})]}),"\n",(0,n.jsx)(s.p,{children:"add a symbolic link to the layer"}),"\n",(0,n.jsx)(s.h4,{id:"parameters-3",children:"Parameters"}),"\n",(0,n.jsx)(s.h5,{id:"layer-3",children:"layer"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"/api/interfaces/ImageFilesystemLayer",children:(0,n.jsx)(s.code,{children:"ImageFilesystemLayer"})})}),"\n",(0,n.jsx)(s.h5,{id:"opts-2",children:"opts"}),"\n",(0,n.jsx)(s.h6,{id:"linkpath",children:"linkPath"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.code,{children:"string"})}),"\n",(0,n.jsx)(s.h6,{id:"mode-2",children:"mode"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.code,{children:"number"})}),"\n",(0,n.jsx)(s.h6,{id:"path-3",children:"path"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.code,{children:"string"})}),"\n",(0,n.jsx)(s.h4,{id:"returns-3",children:"Returns"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.code,{children:"ImageFilesProvider"})}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h3,{id:"addwhiteout",children:"addWhiteout()"}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"addWhiteout"}),"(",(0,n.jsx)(s.code,{children:"layer"}),", ",(0,n.jsx)(s.code,{children:"path"}),"): ",(0,n.jsx)(s.code,{children:"ImageFilesProvider"})]}),"\n"]}),"\n",(0,n.jsxs)(s.p,{children:["Defined in: ",(0,n.jsx)(s.a,{href:"https://github.com/podman-desktop/podman-desktop/blob/5ed9ee15a14a14a7aa4a73d5a9765ce20f2937fc/packages/extension-api/src/extension-api.d.ts#L965",children:"packages/extension-api/src/extension-api.d.ts:965"})]}),"\n",(0,n.jsx)(s.p,{children:"add a file or directory to remove from previous layers"}),"\n",(0,n.jsx)(s.h4,{id:"parameters-4",children:"Parameters"}),"\n",(0,n.jsx)(s.h5,{id:"layer-4",children:"layer"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"/api/interfaces/ImageFilesystemLayer",children:(0,n.jsx)(s.code,{children:"ImageFilesystemLayer"})})}),"\n",(0,n.jsx)(s.h5,{id:"path-4",children:"path"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.code,{children:"string"})}),"\n",(0,n.jsx)(s.h4,{id:"returns-4",children:"Returns"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.code,{children:"ImageFilesProvider"})}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h3,{id:"dispose",children:"dispose()"}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"dispose"}),"(): ",(0,n.jsx)(s.code,{children:"void"})]}),"\n"]}),"\n",(0,n.jsxs)(s.p,{children:["Defined in: ",(0,n.jsx)(s.a,{href:"https://github.com/podman-desktop/podman-desktop/blob/5ed9ee15a14a14a7aa4a73d5a9765ce20f2937fc/packages/extension-api/src/extension-api.d.ts#L103",children:"packages/extension-api/src/extension-api.d.ts:103"})]}),"\n",(0,n.jsx)(s.p,{children:"Dispose this object."}),"\n",(0,n.jsx)(s.h4,{id:"returns-5",children:"Returns"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.code,{children:"void"})}),"\n",(0,n.jsx)(s.h4,{id:"inherited-from",children:"Inherited from"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.a,{href:"/api/classes/Disposable",children:(0,n.jsx)(s.code,{children:"Disposable"})}),".",(0,n.jsx)(s.a,{href:"/api/classes/Disposable#dispose",children:(0,n.jsx)(s.code,{children:"dispose"})})]})]})}function o(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},43023:(e,s,i)=>{i.d(s,{R:()=>a,x:()=>l});var d=i(63696);const n={},r=d.createContext(n);function a(e){const s=d.useContext(r);return d.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),d.createElement(r.Provider,{value:s},e.children)}}}]);