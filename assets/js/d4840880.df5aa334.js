"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6120],{5318:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>c});var i=t(7378);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=i.createContext({}),l=function(e){var n=i.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=l(e.components);return i.createElement(p.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},u=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(t),c=a,k=u["".concat(p,".").concat(c)]||u[c]||m[c]||r;return t?i.createElement(k,o(o({ref:n},d),{},{components:t})):i.createElement(k,o({ref:n},d))}));function c(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,o=new Array(r);o[0]=u;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<r;l++)o[l]=t[l];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}u.displayName="MDXCreateElement"},7056:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var i=t(5773),a=(t(7378),t(5318));const r={sidebar_position:3,title:"Publishing",description:"Publishing a Podman Desktop extension",tags:["podman-desktop","extension","publishing"],keywords:["podman desktop","extension","publishing"]},o="Packaging and publishing a Podman Desktop extension",s={unversionedId:"extensions/publish/index",id:"extensions/publish/index",title:"Publishing",description:"Publishing a Podman Desktop extension",source:"@site/docs/extensions/publish/index.md",sourceDirName:"extensions/publish",slug:"/extensions/publish/",permalink:"/docs/extensions/publish/",draft:!1,editUrl:"https://github.com/containers/podman-desktop/tree/main/website/docs/extensions/publish/index.md",tags:[{label:"podman-desktop",permalink:"/docs/tags/podman-desktop"},{label:"extension",permalink:"/docs/tags/extension"},{label:"publishing",permalink:"/docs/tags/publishing"}],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Publishing",description:"Publishing a Podman Desktop extension",tags:["podman-desktop","extension","publishing"],keywords:["podman desktop","extension","publishing"]},sidebar:"mySidebar",previous:{title:"When clause contexts",permalink:"/docs/extensions/write/when-clause-context"},next:{title:"Installing",permalink:"/docs/extensions/install/"}},p={},l=[{value:"Prerequisites",id:"prerequisites",level:4},{value:"Procedure",id:"procedure",level:4},{value:"Next steps",id:"next-steps",level:4}],d={toc:l};function m(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,i.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"packaging-and-publishing-a-podman-desktop-extension"},"Packaging and publishing a Podman Desktop extension"),(0,a.kt)("p",null,"To enable users to install your extension, consider publishing your extension to an Open Container Initiative (OCI) image registry."),(0,a.kt)("h4",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The extension builds successfully.\nSee ",(0,a.kt)("a",{parentName:"p",href:"write"},"Writing a Podman Desktop extension"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"All runtime dependencies are inside the final binary.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"An OCI image registry to publish to, such as ",(0,a.kt)("inlineCode",{parentName:"p"},"quay.io/fbenoit/my-first-extension"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"(Optional) The OCI image registry is public to enable anybody to fetch the image."))),(0,a.kt)("h4",{id:"procedure"},"Procedure"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Create and edit a ",(0,a.kt)("inlineCode",{parentName:"p"},"Containerfile")," file.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Use a scratch image.\nThe extension requires no runtime:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-dockerfile"},"FROM scratch\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Apply mandatory Podman Desktop metadata on the ",(0,a.kt)("inlineCode",{parentName:"p"},"OCI")," image:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-dockerfile"},'LABEL org.opencontainers.image.title="My first extension" \\\n      org.opencontainers.image.description="Example of extension" \\\n      org.opencontainers.image.vendor="podman-desktop" \\\n      io.podman-desktop.api.version=">= 0.12.0"\n')),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},'io.podman-desktop.api.version=">= 0.12.0"')," sets the minimal Podman Desktop version that the extension requires to run.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Copy the extension assembly, including the metadata, icon, and production binary, to the ",(0,a.kt)("inlineCode",{parentName:"p"},"/extension")," folder inside the image:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-dockerfile"},"COPY package.json /extension/\nCOPY icon.png /extension/\nCOPY dist /extension/dist\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Build an image:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-shell-session"},"$ podman build -t quay.io/fbenoit/my-first-extension .\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Push the image and manifest to the OCI image registry:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-shell-session"},"$ podman push quay.io/fbenoit/my-first-extension\n")))),(0,a.kt)("h4",{id:"next-steps"},"Next steps"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"install"},"Installing a Podman Desktop extension"))))}m.isMDXComponent=!0}}]);