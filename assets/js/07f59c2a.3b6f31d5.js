"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[34428],{19259:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var s=t(49844),i=t(62540),o=t(43023);const a={title:"Release Notes - Podman Desktop 0.10",description:"Podman Desktop 0.10 has been released! New Create Container Wizard, improved Kubernetes workflows, revamped registries configuration, and more!",slug:"podman-desktop-release-0.10",authors:["deekay2310"],tags:["podman-desktop","release","kubernetes"],hide_table_of_contents:!1},r=void 0,l={authorsImageUrls:[void 0]},d=[{value:"Release Details",id:"release-details",level:2},{value:"New configuration wizzard to create containers (#773)",id:"new-configuration-wizzard-to-create-containers-773",level:3},{value:"Kubernetes Capabilities Improvements",id:"kubernetes-capabilities-improvements",level:3},{value:"Revamped Container Registries UI (#446)",id:"revamped-container-registries-ui-446",level:3},{value:"Update to Podman 4.3.1 (#913)",id:"update-to-podman-431-913",level:3},{value:"UI/UX Improvements",id:"uiux-improvements",level:3},{value:"Other Notable Enhancements",id:"other-notable-enhancements",level:2},{value:"Notable bug fixes",id:"notable-bug-fixes",level:2},{value:"Community Thank You",id:"community-thank-you",level:2},{value:"Final Notes",id:"final-notes",level:2}];function h(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components},{Icon:s}=n;return s||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Icon",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"This release note covers Podman Desktop 0.10 release changes."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Containers Configuration"}),": Container creation wizzard allowing to define environment variables, networking and more configuration options."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Kubernetes Improvements"}),": Play Kubernetes YAML, custom Kubeconfig path support, reload of kube context."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Registries Configuration"}),": Revamped registries configuration UI."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Podman Version"}),": Podman 4.3.1 now included in Windows and Mac installers."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"UX/UI Improvements"}),": Improved lists, better contrast, and more."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Podman Desktop 0.10 is now available. ",(0,i.jsx)(n.a,{href:"/downloads",children:"Click here to download it"}),"!"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"release-details",children:"Release Details"}),"\n",(0,i.jsxs)(n.h3,{id:"new-configuration-wizzard-to-create-containers-773",children:["New configuration wizzard to create containers (",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/773",children:"#773"}),")"]}),"\n",(0,i.jsx)(n.p,{children:"Until now, we could only specify port binding when building images to start containers. The create container wizzard now includes several options enabling configuring volumes, environment variables, restart policy and settings on networking and security. It is also possible to reuse an existing (and already configured) a network when creating containers."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"new container creation wizard",src:t(81881).A+"",width:"800",height:"465"})}),"\n",(0,i.jsx)(n.h3,{id:"kubernetes-capabilities-improvements",children:"Kubernetes Capabilities Improvements"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsxs)(n.strong,{children:["Custom Kubeconfig file path (",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/780",children:"#780"}),")"]})}),"\n",(0,i.jsxs)(n.p,{children:["Kubeconfig path location is now configurable from ",(0,i.jsxs)(n.strong,{children:[(0,i.jsx)(s,{icon:"fa-solid fa-cog",size:"lg"})," Settings > Preferences > Kubernetes: Kubeconfig"]})," and can be set to a custom path. By default, Podman Desktop use the path ",(0,i.jsx)(n.code,{children:"$HOME/.kube/config"})," for the Kubeconfig file."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"custom kubeconfig file path",src:t(7597).A+"",width:"2324",height:"1424"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsxs)(n.strong,{children:["Play Kubernetes YAML from the Pods list (",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/739",children:"#739"}),")"]})}),"\n",(0,i.jsxs)(n.p,{children:["Podman Desktop enables to play existing Kubernetes YAML files. This is now available from ",(0,i.jsx)(n.code,{children:"Play Kubernetes YAML"})," button added to the Pods list, in addition to the Containers list."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"play k8s yaml",src:t(93130).A+"",width:"800",height:"500"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsxs)(n.strong,{children:["Kube context automatically reloaded when updated (",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/813",children:"#813"}),")"]})}),"\n",(0,i.jsx)(n.p,{children:"Any change to the kube context will now be detected by Podman Desktop in its running state. The system tray, allowing to select which Kubernetes environment to work with, will now reload the kube context without restarting Podman Desktop."}),"\n",(0,i.jsxs)(n.h3,{id:"revamped-container-registries-ui-446",children:["Revamped Container Registries UI (",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/issues/446",children:"#446"}),")"]}),"\n",(0,i.jsx)(n.p,{children:"The registries configuration UI has been revamped. Instead of using tiles for displaying the registries, now it uses a list where each registry can be added or edited directly in the list. The kebab menu provides options to edit or remove a registry from the list."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"registries",src:t(29673).A+"",width:"2428",height:"1494"})}),"\n",(0,i.jsxs)(n.h3,{id:"update-to-podman-431-913",children:["Update to Podman 4.3.1 (",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/issues/913",children:"#913"}),")"]}),"\n",(0,i.jsxs)(n.p,{children:["Podman Desktop 0.10 is now embedding ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman/releases/tag/v4.3.1",children:"Podman 4.3.1"})," in Windows and macOS installers."]}),"\n",(0,i.jsx)(n.h3,{id:"uiux-improvements",children:"UI/UX Improvements"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsxs)(n.strong,{children:["Improved lists UX (",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/877",children:"#877"}),")"]})}),"\n",(0,i.jsx)(n.p,{children:"To reduce the width used in the lists when displaying all the icons, main actions icons are now always displayed (before it was on hover) and the secondary actions are displayed in a kebab menu. For example Start/Stop and delete are primary actions while open the browser, inspect, generate kube yaml, etc. are secondary options."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"kebab menu",src:t(3813).A+"",width:"2324",height:"1424"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsxs)(n.strong,{children:["Delay appearance of text in navbar (",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/767",children:"#767"}),")"]})}),"\n",(0,i.jsx)(n.p,{children:"When minimizing or expanding the navbar, the text was overlapping for a few second the page. Now it's displayed with a fading animation."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsxs)(n.strong,{children:["Selected state: better text color contrast (",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/802",children:"#802"}),")"]})}),"\n",(0,i.jsxs)(n.p,{children:["In the ",(0,i.jsx)(n.code,{children:"Images"})," page, on hover for both the image and the name column, the text contrast has been increased for better visibility: violet indicates that you have selected it."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"text color when hover",src:t(95564).A+"",width:"800",height:"451"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsxs)(n.strong,{children:["On Linux and Windows, the menu bar is now hidden by default (",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/668",children:"#668"}),")"]})}),"\n",(0,i.jsxs)(n.p,{children:["With this change, the menu bar looks more integrated to the Operating System. The menu can appear if you hit the ",(0,i.jsx)(n.code,{children:"Alt"})," key. Thanks to ",(0,i.jsx)(n.a,{href:"https://github.com/dylanmtaylor",children:"Dylan M. Taylor"})," for contributing to fix this."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsxs)(n.strong,{children:["Exit when clicking on the close icon of the dashboard on Linux (",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/671",children:"#671"}),")"]})}),"\n",(0,i.jsxs)(n.p,{children:["For most users on Linux, there is no tray icon support. In this situation, when closed, Podman Desktop continues to run in background. ",(0,i.jsx)(n.a,{href:"https://github.com/dylanmtaylor",children:"Dylan M. Taylor"})," added a property to exit the app by default when clicking on the close icon. For people having tray icon support or with the desire of a different behavior, it is possible to disable it from the Settings."]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"other-notable-enhancements",children:"Other Notable Enhancements"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Rename ",(0,i.jsx)(n.code,{children:"Started"})," into ",(0,i.jsx)(n.code,{children:"Age"})," in Containers list.(",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/878",children:"#878"}),")"]}),"\n",(0,i.jsxs)(n.li,{children:["Added domain validation when adding a registry. (",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/838",children:"#838"}),")"]}),"\n",(0,i.jsxs)(n.li,{children:["Provided a consistent behavior with Podman CLI, ",(0,i.jsx)(n.code,{children:"podman-machine-default"})," is now the default name when creating a Podman machine from Podman Desktop. (",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/775",children:"#775"}),")"]}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"notable-bug-fixes",children:"Notable bug fixes"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Fixed error handling when pulling images of Desktop Extensions. (",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/782",children:"#782"}),")"]}),"\n",(0,i.jsxs)(n.li,{children:["Fixed use of the full height of the screen when displaying log in the details of a container. (",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/discussions/946",children:"#946"}),")"]}),"\n",(0,i.jsxs)(n.li,{children:["Fixed First start of Podman Desktop on flatpak was not seeing the podman engine (",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/860",children:"#860"}),")"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"community-thank-you",children:"Community Thank You"}),"\n",(0,i.jsx)(n.p,{children:"\ud83c\udf89 We\u2019d like to say a big thank you to everyone who helped to make Podman Desktop 0.10 even better:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://github.com/dylanmtaylor",children:"Dylan M. Taylor"})," in ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/671",children:"#671"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://github.com/osslate",children:"Fionn Kelleher"})," in ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/713",children:"#713"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://github.com/rsvoboda",children:"Rostislav Svoboda"})," in ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/737",children:"#737"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://github.com/shemanaev",children:"Denis Shemanaev"})," in ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/783",children:"#783"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://github.com/themr0c",children:"Fabrice Flore-Th\xe9bault"})," in ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/856",children:"#856"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://github.com/KevinAtSesam",children:"Kevin"})," in ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/864",children:"#864"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://github.com/sfrunza13",children:"@sfrunza13"})," in ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/872",children:"#872"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://github.com/anjannath",children:"Anjan Nath"})," in ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/918",children:"#918"})]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"final-notes",children:"Final Notes"}),"\n",(0,i.jsxs)(n.p,{children:["The complete list of issues fixed in this release is available ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/issues?q=is%3Aclosed+milestone%3A0.10.0",children:"here"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Get the latest release from the ",(0,i.jsx)(n.a,{href:"/downloads",children:"Downloads"})," section of the website and boost your development journey with Podman Desktop. Additionally, visit the ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop",children:"GitHub repository"})," and see how you can help us make Podman Desktop better."]})]})}function c(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},7597:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/custom-kubeconfig-a1b21477c3bc825c93f8a789292de160.png"},3813:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/kebab-menu-caf501d63e7e0c8a8e957c55093b0f7b.png"},81881:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/new_container_creation_wizard-530d6cccba3d06b5c8db1b9e387a31c7.gif"},93130:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/play_k8s_yaml-3f66f50aa7135e66a436b02c1b278dfc.gif"},29673:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/registries-1194f05e7d35fe4544c74a513d1dc0ed.png"},95564:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/text-color-14e899e089464c8f18a597217045a317.gif"},43023:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>r});var s=t(63696);const i={},o=s.createContext(i);function a(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(o.Provider,{value:n},e.children)}},49844:e=>{e.exports=JSON.parse('{"permalink":"/blog/podman-desktop-release-0.10","source":"@site/blog/2022-12-01-release-0.10-blog.md","title":"Release Notes - Podman Desktop 0.10","description":"Podman Desktop 0.10 has been released! New Create Container Wizard, improved Kubernetes workflows, revamped registries configuration, and more!","date":"2022-12-01T00:00:00.000Z","tags":[{"inline":true,"label":"podman-desktop","permalink":"/blog/tags/podman-desktop"},{"inline":true,"label":"release","permalink":"/blog/tags/release"},{"inline":true,"label":"kubernetes","permalink":"/blog/tags/kubernetes"}],"readingTime":4.115,"hasTruncateMarker":true,"authors":[{"name":"Dev Kumar","title":"Technical PMM Intern","url":"https://github.com/deekay2310","imageURL":"https://github.com/deekay2310.png","key":"deekay2310","page":null}],"frontMatter":{"title":"Release Notes - Podman Desktop 0.10","description":"Podman Desktop 0.10 has been released! New Create Container Wizard, improved Kubernetes workflows, revamped registries configuration, and more!","slug":"podman-desktop-release-0.10","authors":["deekay2310"],"tags":["podman-desktop","release","kubernetes"],"hide_table_of_contents":false},"unlisted":false,"prevItem":{"title":"Release Notes - Podman Desktop 0.11","permalink":"/blog/podman-desktop-release-0.11"},"nextItem":{"title":"Build & run Podman Desktop in a DevContainer","permalink":"/blog/develop-using-devcontainer"}}')}}]);