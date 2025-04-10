"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[31774],{85518:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>r});var s=t(39742),o=t(62540),i=t(43023);const a={title:"Podman Desktop 1.10 Release",description:"Podman Desktop 1.10 has been released!",slug:"podman-desktop-release-1.10",authors:"deboer",tags:["podman-desktop","release","podman"],hide_table_of_contents:!1,image:"/img/blog/podman-desktop-release-1.10/1000000-downloads.png"},l=void 0,d={authorsImageUrls:[void 0]},r=[{value:"Release Details",id:"release-details",level:2},{value:"1 Million Downloads! \ud83c\udf89",id:"1-million-downloads-",level:3},{value:"Extension Catalog",id:"extension-catalog",level:3},{value:"Podman v5 (5.0.2)",id:"podman-v5-502",level:3},{value:"Multi-platform Builds",id:"multi-platform-builds",level:3},{value:"Extension API Improvements",id:"extension-api-improvements",level:3},{value:"Other Notable Enhancements",id:"other-notable-enhancements",level:2},{value:"Notable Bug Fixes",id:"notable-bug-fixes",level:2},{value:"Documentation",id:"documentation",level:2},{value:"Community Thank You",id:"community-thank-you",level:2},{value:"Final Notes",id:"final-notes",level:2},{value:"Fixed Issues",id:"fixed-issues",level:3},{value:"Where to Download",id:"where-to-download",level:3}];function h(e){const n={a:"a",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"Podman Desktop 1.10 Release! \ud83c\udf89"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Podman-desktop-1-10-hero",src:t(90688).A+"",width:"1920",height:"1080"})}),"\n",(0,o.jsx)(n.p,{children:"This release introduces:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"1 Million Downloads!"}),": Wow, we made it!"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Extension Catalog"}),": Redesigned extensions page and catalog to get the most out of Podman Desktop."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Podman 5"}),": ",(0,o.jsx)(n.a,{href:"https://github.com/containers/podman/releases/tag/v5.0.2",children:"Podman 5.0.2"})," now recommended for all users."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Multi-platform Builds"}),": Build for multiple platforms at once."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Extension API Improvements"}),": Additional updates to the extension API used by \ud83e\uddad Podman Desktop's extensions."]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["Podman Desktop 1.10 is now available. ",(0,o.jsx)(n.a,{href:"/downloads",children:"Click here to download it"}),"!"]}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h2,{id:"release-details",children:"Release Details"}),"\n",(0,o.jsx)(n.h3,{id:"1-million-downloads-",children:"1 Million Downloads! \ud83c\udf89"}),"\n",(0,o.jsx)(n.p,{children:"We've hit over 1 million downloads of Podman Desktop since we started! A big thank you \ud83d\ude4f to everyone\nwho has helped get us to this number - especially those who have opened issues or PRs and contributed\nto this success!"}),"\n",(0,o.jsx)(n.p,{children:"Looking forward to the next million! \ud83d\ude80"}),"\n",(0,o.jsx)(n.h3,{id:"extension-catalog",children:"Extension Catalog"}),"\n",(0,o.jsx)(n.p,{children:"To make it easier to access extensions we added an item to the main navigation and completely revamped\nthe Extensions page. You can now see and control all your Podman Desktop and Docker Desktop extensions\nin a single place. If you want to view more details, click on an extension to see the expanded readme."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"extensions",src:t(4919).A+"",width:"1162",height:"812"})}),"\n",(0,o.jsx)(n.p,{children:"With the growing number of extensions available we've also introduced a catalog to make it easy to find\nand install them. Check the catalog regularly as we hear there are some exciting new extensions sailing in!"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"extension catalog",src:t(37436).A+"",width:"1162",height:"812"})}),"\n",(0,o.jsx)(n.h3,{id:"podman-v5-502",children:"Podman v5 (5.0.2)"}),"\n",(0,o.jsx)(n.p,{children:"Now that we've had some experience and time to test our migration tools, we're glad to make Podman v5 a\nrecommended upgrade for all users. Podman Desktop will help ensure you don't lose any data during the\nmigration. In particular macOS users will see a performance boost as we've switched to the native\nApple Hypervisor."}),"\n",(0,o.jsxs)(n.p,{children:["Find out more details in the blog announcement for \ud83e\uddad Podman version 5 ",(0,o.jsx)(n.a,{href:"https://blog.podman.io/2024/03/podman-5-0-has-been-released/",children:"here"}),"."]}),"\n",(0,o.jsx)(n.h3,{id:"multi-platform-builds",children:"Multi-platform Builds"}),"\n",(0,o.jsx)(n.p,{children:"Sticking to one platform keeping you down? Building on the work we did in a recent release to allow building\nimages for other platforms, you can now select multiple platforms at once. When you do this we will\nautomatically switch to building an image for each selected platform and then creating a multi-platform\nmanifest to package them all together."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"multi-platform builds",src:t(75144).A+"",width:"999",height:"816"})}),"\n",(0,o.jsx)(n.p,{children:"We still have work to do to allow seamlessly working with images or manifests, so stay tuned for more."}),"\n",(0,o.jsx)(n.h3,{id:"extension-api-improvements",children:"Extension API Improvements"}),"\n",(0,o.jsx)(n.p,{children:"We've added support for manifests (multi-arch images) to the extension API to give upcoming extensions\nmore capabilites and even better integration into \ud83e\uddad Podman Desktop:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["feat: add inspectManifest API endpoint ",(0,o.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/6812",children:"#6812"})]}),"\n",(0,o.jsxs)(n.li,{children:["feat: add createManifest API ",(0,o.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/6630",children:"#6630"})]}),"\n"]}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h2,{id:"other-notable-enhancements",children:"Other Notable Enhancements"}),"\n",(0,o.jsx)(n.p,{children:"We've added lots of features this release, here are some other highlights:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["feat: add quick install of extensions providing authentication ",(0,o.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/6936",children:"#6936"})]}),"\n",(0,o.jsxs)(n.li,{children:["feat: add alias for registry entries ",(0,o.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/6839",children:"#6839"})]}),"\n",(0,o.jsxs)(n.li,{children:["feat: make recommendation have publishDate property ",(0,o.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/6912",children:"#6912"})]}),"\n",(0,o.jsxs)(n.li,{children:["feat: suggest extensions if building or pulling from some registries report errors ",(0,o.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/6891",children:"#6891"})]}),"\n",(0,o.jsxs)(n.li,{children:["feat: switch to using libpodapi for listImages ",(0,o.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/6736",children:"#6736"})]}),"\n",(0,o.jsxs)(n.li,{children:["feat: add navigateTo resources and edit container connection ",(0,o.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/6733",children:"#6733"})]}),"\n",(0,o.jsxs)(n.li,{children:["feat: adding dashboard extension banner ",(0,o.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/6708",children:"#6708"})]}),"\n",(0,o.jsxs)(n.li,{children:["feat: adding internal logic to manage recommended extensions based on featured extensions ",(0,o.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/6681",children:"#6681"})]}),"\n"]}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h2,{id:"notable-bug-fixes",children:"Notable Bug Fixes"}),"\n",(0,o.jsx)(n.p,{children:"We squashed a lot of bugs this release, including the following:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["fix: default to rootful mode if unspecified ",(0,o.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/6968",children:"#6968"})]}),"\n",(0,o.jsxs)(n.li,{children:["fix: boolean values should be true and not 'on' using forms ",(0,o.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/6967",children:"#6967"})]}),"\n",(0,o.jsxs)(n.li,{children:["fix: handle deletion of all Docker Desktop extensions ",(0,o.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/6964",children:"#6964"})]}),"\n",(0,o.jsxs)(n.li,{children:["fix: skip existing installed extensions when installing a pack ",(0,o.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/6914",children:"#6914"})]}),"\n",(0,o.jsxs)(n.li,{children:["fix: hide cpu, memory, size sliders on WSL ",(0,o.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/6878",children:"#6878"})]}),"\n",(0,o.jsxs)(n.li,{children:["fix: container details image link ",(0,o.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/6805",children:"#6805"})]}),"\n",(0,o.jsxs)(n.li,{children:["fix: provider card layout ",(0,o.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/6797",children:"#6797"})]}),"\n",(0,o.jsxs)(n.li,{children:["fix: kubectl-cli update error ",(0,o.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/6759",children:"#6759"})]}),"\n",(0,o.jsxs)(n.li,{children:["fix: make flatpak metadata compliant with flathub ",(0,o.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/6635",children:"#6635"})]}),"\n",(0,o.jsxs)(n.li,{children:["fix: airgap mode and default for podman v5 ",(0,o.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/6633",children:"#6633"})]}),"\n",(0,o.jsxs)(n.li,{children:["fix: hide restart action for kubernetes pods ",(0,o.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/6620",children:"#6620"})]}),"\n",(0,o.jsxs)(n.li,{children:["fix: increase default timeout for extension activation ",(0,o.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/7053",children:"#7053"})]}),"\n",(0,o.jsxs)(n.li,{children:["fix: use podman machine inspect to know if machine is rootful ",(0,o.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/7024",children:"#7024"})]}),"\n",(0,o.jsxs)(n.li,{children:["fix: edit button should be visible during started and stopped ",(0,o.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/7045",children:"#7045"})]}),"\n",(0,o.jsxs)(n.li,{children:["fix: fix dashboard UI ",(0,o.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/7006",children:"#7006"})]}),"\n",(0,o.jsxs)(n.li,{children:["fix: handle ids with spaces for extensions ",(0,o.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/6965",children:"#6965"})]}),"\n",(0,o.jsxs)(n.li,{children:["fix: remove request for login after getting session programmatically ",(0,o.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/6665",children:"#6665"})]}),"\n",(0,o.jsxs)(n.li,{children:["fix: LoadingIconButton consider failed state ",(0,o.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/6997",children:"#6997"})]}),"\n"]}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h2,{id:"documentation",children:"Documentation"}),"\n",(0,o.jsx)(n.p,{children:"Along with this new version of \ud83e\uddad Podman Desktop the documentation has had the following improvement:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["docs: add compose troubleshooting doc related to authentication ",(0,o.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/6928",children:"#6928"})]}),"\n"]}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h2,{id:"community-thank-you",children:"Community Thank You"}),"\n",(0,o.jsx)(n.p,{children:"\ud83c\udf89 We\u2019d like to say a big thank you to everyone who helped make \ud83e\uddad Podman Desktop even better. In this release we received pull requests from the following people:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"https://github.com/totkeks",children:"Norman Dankert"})," in ",(0,o.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/6750",children:"feat: open dashboard with left click on tray icon on Windows"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"https://github.com/timheuer",children:"Tim Heuer"})," in ",(0,o.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/6715",children:"docs: changes to writing an extension"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"https://github.com/GLEF1X",children:"Hlib Haranin"})," in ",(0,o.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/6692",children:"feat(webview-telemetry): make telemetry for webviews more detailed"})," and ",(0,o.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/6628",children:"feat(container-detail): make image name a link that redirects to image detail page"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"https://github.com/tmancill",children:"tmancill"})," in ",(0,o.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/6666",children:"docs: Update pushing-an-image-to-kind.md - add info re: crictl"})]}),"\n"]}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h2,{id:"final-notes",children:"Final Notes"}),"\n",(0,o.jsx)(n.h3,{id:"fixed-issues",children:"Fixed Issues"}),"\n",(0,o.jsxs)(n.p,{children:["The complete list of issues fixed in this release is available ",(0,o.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/issues?q=is%3Aclosed+milestone%3A1.10.0",children:"here"}),"."]}),"\n",(0,o.jsx)(n.h3,{id:"where-to-download",children:"Where to Download"}),"\n",(0,o.jsxs)(n.p,{children:["Get the latest release from the ",(0,o.jsx)(n.a,{href:"/downloads",children:"Downloads"})," section of the website and boost your development journey with Podman Desktop. Additionally, visit the ",(0,o.jsx)(n.a,{href:"https://github.com/containers/podman-desktop",children:"GitHub repository"})," and see how you can help us make Podman Desktop better."]})]})}function c(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},90688:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/1000000-downloads-51dcd874cddbe42be414180e344da0df.png"},37436:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/extension-catalog-8deddd045f1962b11c4940adb67075a8.png"},4919:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/extensions-73dbe1039a57a5adca986203d76ed594.png"},75144:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/multi-platform-builds-b8a9c6859840dce44e1469b588662431.png"},43023:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>l});var s=t(63696);const o={},i=s.createContext(o);function a(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),s.createElement(i.Provider,{value:n},e.children)}},39742:e=>{e.exports=JSON.parse('{"permalink":"/blog/podman-desktop-release-1.10","source":"@site/blog/2024-04-30-release-1.10.md","title":"Podman Desktop 1.10 Release","description":"Podman Desktop 1.10 has been released!","date":"2024-04-30T00:00:00.000Z","tags":[{"inline":true,"label":"podman-desktop","permalink":"/blog/tags/podman-desktop"},{"inline":true,"label":"release","permalink":"/blog/tags/release"},{"inline":true,"label":"podman","permalink":"/blog/tags/podman"}],"readingTime":4.49,"hasTruncateMarker":true,"authors":[{"name":"Tim deBoer","title":"Architect","url":"https://github.com/deboer-tim","imageURL":"https://github.com/deboer-tim.png","key":"deboer","page":null}],"frontMatter":{"title":"Podman Desktop 1.10 Release","description":"Podman Desktop 1.10 has been released!","slug":"podman-desktop-release-1.10","authors":"deboer","tags":["podman-desktop","release","podman"],"hide_table_of_contents":false,"image":"/img/blog/podman-desktop-release-1.10/1000000-downloads.png"},"unlisted":false,"prevItem":{"title":"Podman Desktop 1.11 Release","permalink":"/blog/podman-desktop-release-1.11"},"nextItem":{"title":"Podman Desktop 1.9 Release","permalink":"/blog/podman-desktop-release-1.9"}}')}}]);