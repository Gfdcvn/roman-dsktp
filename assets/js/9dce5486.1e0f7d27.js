"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8566],{35318:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var a=n(27378);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),c=p(n),u=o,h=c["".concat(l,".").concat(u)]||c[u]||m[u]||i;return n?a.createElement(h,s(s({ref:t},d),{},{components:n})):a.createElement(h,s({ref:t},d))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=c;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:o,s[1]=r;for(var p=2;p<i;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},28186:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>r,toc:()=>p});var a=n(25773),o=(n(27378),n(35318));const i={title:"Release Notes - Podman Desktop 0.12",description:"Podman Desktop 0.12 has been released!",slug:"podman-desktop-release-0.12",authors:["slemeur"],tags:["podman-desktop","release","kubernetes"],hide_table_of_contents:!1},s=void 0,r={permalink:"/blog/podman-desktop-release-0.12",source:"@site/blog/2023-02-15-release-0.12.md",title:"Release Notes - Podman Desktop 0.12",description:"Podman Desktop 0.12 has been released!",date:"2023-02-15T00:00:00.000Z",formattedDate:"February 15, 2023",tags:[{label:"podman-desktop",permalink:"/blog/tags/podman-desktop"},{label:"release",permalink:"/blog/tags/release"},{label:"kubernetes",permalink:"/blog/tags/kubernetes"}],readingTime:4.505,hasTruncateMarker:!0,authors:[{name:"Stevan Le Meur",title:"Product Manager",url:"https://github.com/slemeur",imageURL:"https://github.com/slemeur.png",key:"slemeur"}],frontMatter:{title:"Release Notes - Podman Desktop 0.12",description:"Podman Desktop 0.12 has been released!",slug:"podman-desktop-release-0.12",authors:["slemeur"],tags:["podman-desktop","release","kubernetes"],hide_table_of_contents:!1},prevItem:{title:"5 things to know about Podman Desktop for a Docker user",permalink:"/blog/5-things-to-know-for-a-docker-user"},nextItem:{title:"Release Notes - Podman Desktop 0.11",permalink:"/blog/podman-desktop-release-0.11"}},l={authorsImageUrls:[void 0]},p=[{value:"Release Details",id:"release-details",level:2},{value:"Update to Podman v4.4.1 #1456",id:"update-to-podman-v441-1456",level:3},{value:"Configuring port mappings when an image has no exported port #1265",id:"configuring-port-mappings-when-an-image-has-no-exported-port-1265",level:3},{value:"Installing Podman Desktop on Windows Home Edition #1268",id:"installing-podman-desktop-on-windows-home-edition-1268",level:3},{value:"Option to automatically minimize Podman Desktop on login #1374",id:"option-to-automatically-minimize-podman-desktop-on-login-1374",level:3},{value:"UI and UX Improvements",id:"ui-and-ux-improvements",level:3},{value:"Improved actions consistency #1225",id:"improved-actions-consistency-1225",level:4},{value:"Consistent status icons for Pods, Containers, Images and Volumes #1326, #1377, #1459 and #1245",id:"consistent-status-icons-for-pods-containers-images-and-volumes-1326-1377-1459-and-1245",level:4},{value:"Placeholder when logs for containers are being fetched #1353",id:"placeholder-when-logs-for-containers-are-being-fetched-1353",level:4},{value:"Fixed alignment in badges from the navigation sidebar #1357",id:"fixed-alignment-in-badges-from-the-navigation-sidebar-1357",level:4},{value:"Enable/disable open browser action based on container state #1395 and #1397",id:"enabledisable-open-browser-action-based-on-container-state-1395-and-1397",level:4},{value:"Other Notable Enhancements",id:"other-notable-enhancements",level:2},{value:"Documentation",id:"documentation",level:2},{value:"Notable bug fixes",id:"notable-bug-fixes",level:2},{value:"Community Thank You",id:"community-thank-you",level:2},{value:"Final Notes",id:"final-notes",level:2}],d=(m="Icon",function(e){return console.warn("Component "+m+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)});var m;const c={toc:p};function u(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This release note covers Podman Desktop 0.12 release changes."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Podman Version"),": Podman 4.4.1 now included in Windows and Mac installers."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Containers Configuration"),": Configure port mappings for an image without exported ports."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Windows Home Support"),": Podman Desktop now supports Windows Home Edition."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Start minimized"),": Option to start Podman Desktop minimized to system tray."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"UX and UI Improvements"),": Consistent actions, placeholder for logs, unified icons and others.")),(0,o.kt)("p",null,"Podman Desktop 0.12 is now available. ",(0,o.kt)("a",{parentName:"p",href:"/downloads"},"Click here to download it"),"!"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"podman-desktop-0-12-hero",src:n(34132).Z,width:"1015",height:"580"})),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"release-details"},"Release Details"),(0,o.kt)("h3",{id:"update-to-podman-v441-1456"},"Update to Podman v4.4.1 ",(0,o.kt)("a",{parentName:"h3",href:"https://github.com/containers/podman-desktop/pull/1456"},"#1456")),(0,o.kt)("p",null,"Podman Desktop 0.12 embeds ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/containers/podman/releases/tag/v4.4.1"},"Podman 4.4.1")," in Windows and macOS installers. Make sure to upgrade to benefit from the latest Podman features and bug fixes."),(0,o.kt)("h3",{id:"configuring-port-mappings-when-an-image-has-no-exported-port-1265"},"Configuring port mappings when an image has no exported port ",(0,o.kt)("a",{parentName:"h3",href:"https://github.com/containers/podman-desktop/pull/1265"},"#1265")),(0,o.kt)("p",null,"With the latest update, users can now add multiple local-to-remote port mappings when starting a container from an image that has no exported ports. This feature provides users with the flexibility to specify which ports on their local machine should map to which ports on the container, even if the container does not have any exported ports by default."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/49404737/215112797-86dcf3f0-121a-487e-a71f-ad41e91f93da.gif",alt:"port-mapping"})),(0,o.kt)("h3",{id:"installing-podman-desktop-on-windows-home-edition-1268"},"Installing Podman Desktop on Windows Home Edition ",(0,o.kt)("a",{parentName:"h3",href:"https://github.com/containers/podman-desktop/pull/1268"},"#1268")),(0,o.kt)("p",null,"Podman Desktop 0.12 offers the ability to be installed on Windows Home Edition. The mechanism uses Virtual Machine Platform detection, instead of hyper-v. WSL2 is still requires but can be installed along with the installation process."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/436777/215121429-7c757aaa-a838-43db-98a2-78ad368f407e.png",alt:"install-windows-home-edition-2"})),(0,o.kt)("h3",{id:"option-to-automatically-minimize-podman-desktop-on-login-1374"},"Option to automatically minimize Podman Desktop on login ",(0,o.kt)("a",{parentName:"h3",href:"https://github.com/containers/podman-desktop/pull/1374"},"#1374")),(0,o.kt)("p",null,'Podman Desktop now provides a "start minimized" option when users log in onto the laptop. This option, available from the application\'s settings, can be useful if users want to automatically launch Podman Desktop at log in, but prefer not to have the window visible on the screen. With this feature, you can ensure that Podman Desktop is up and running in the background without any interruption to your workflows.'),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Go to ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)(d,{icon:"fa-solid fa-cog",size:"lg",mdxType:"Icon"})," Settings > Preferences > Login: Minimize")," to activate the option.")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/6422176/216651424-bcf756fd-7554-4b24-a838-e3e2f798fe6e.png",alt:"minimize-on-login"})),(0,o.kt)("h3",{id:"ui-and-ux-improvements"},"UI and UX Improvements"),(0,o.kt)("h4",{id:"improved-actions-consistency-1225"},"Improved actions consistency ",(0,o.kt)("a",{parentName:"h4",href:"https://github.com/containers/podman-desktop/pull/1225"},"#1225")),(0,o.kt)("p",null,"Actions displayed in the list pages for Images and Containers have been reviewed and made consistent between other pages."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/19958075/214104678-2d4148d7-484e-41f9-9da9-aecee328ae2b.png",alt:"action-consistency-1"})),(0,o.kt)("p",null,"Actions displayed in the header of the container's details page have been improved so that the actions are always displayed in the same order."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/19958075/214104663-64fa0601-bb79-49bf-8226-6a78a88d3622.png",alt:"action-consistency-2"})),(0,o.kt)("h4",{id:"consistent-status-icons-for-pods-containers-images-and-volumes-1326-1377-1459-and-1245"},"Consistent status icons for Pods, Containers, Images and Volumes ",(0,o.kt)("a",{parentName:"h4",href:"https://github.com/containers/podman-desktop/pull/1326"},"#1326"),", ",(0,o.kt)("a",{parentName:"h4",href:"https://github.com/containers/podman-desktop/pull/1377"},"#1377"),", ",(0,o.kt)("a",{parentName:"h4",href:"https://github.com/containers/podman-desktop/pull/1459"},"#1459")," and ",(0,o.kt)("a",{parentName:"h4",href:"https://github.com/containers/podman-desktop/pull/1245"},"#1245")),(0,o.kt)("p",null,"The status icons for Pods, Containers, Images, and Volumes have been unified and use consistent states."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/19958075/216671859-bdd8dca4-56b7-40a8-961a-dcb6e01be61e.png",alt:"pods-status-icon"})),(0,o.kt)("p",null,"Icons in empty screens have been updated to use the same consistent SVG icon as the status icons."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/436777/214577726-f4cfde7b-017a-499d-a2a9-e50d455ffaf0.png",alt:"empty-screen-2"})),(0,o.kt)("h4",{id:"placeholder-when-logs-for-containers-are-being-fetched-1353"},"Placeholder when logs for containers are being fetched ",(0,o.kt)("a",{parentName:"h4",href:"https://github.com/containers/podman-desktop/pull/1353"},"#1353")),(0,o.kt)("p",null,"A placeholder is now displayed when logs are being fetched.\n",(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/49404737/216952505-899308ae-183e-487a-b6e5-28832a0b6452.gif",alt:"placeholder-loading-logs"})),(0,o.kt)("h4",{id:"fixed-alignment-in-badges-from-the-navigation-sidebar-1357"},"Fixed alignment in badges from the navigation sidebar ",(0,o.kt)("a",{parentName:"h4",href:"https://github.com/containers/podman-desktop/pull/1357"},"#1357")),(0,o.kt)("p",null,"Badges in the sidebar are now aligned with the title of the section."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/49404737/216336502-2a34dea3-fd41-4184-8cfe-9226d70da070.png",alt:"alignement-badges"})),(0,o.kt)("h4",{id:"enabledisable-open-browser-action-based-on-container-state-1395-and-1397"},"Enable/disable open browser action based on container state ",(0,o.kt)("a",{parentName:"h4",href:"https://github.com/containers/podman-desktop/pull/1395"},"#1395")," and ",(0,o.kt)("a",{parentName:"h4",href:"https://github.com/containers/podman-desktop/pull/1397"},"#1397")),(0,o.kt)("p",null,"The action to open the browser if a port is opened in a container, is now disabled when the container is stopped. It is also hidden in the kebab menu."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/49404737/217284414-1bdc820b-30a8-485e-b0f9-485229026696.gif",alt:"enable-disable-container-actions"})),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"other-notable-enhancements"},"Other Notable Enhancements"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Display extension icons ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/1058"},"#1058")),(0,o.kt)("li",{parentName:"ul"},"Solid Icons ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/1276"},"#1267")),(0,o.kt)("li",{parentName:"ul"},"Differentiate icons compared to status icons ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/1298"},"#1268")),(0,o.kt)("li",{parentName:"ul"},"Refactors window initializing ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/1309"},"#1309")),(0,o.kt)("li",{parentName:"ul"},"Change window creation background color to dark ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/1310"},"#1310")),(0,o.kt)("li",{parentName:"ul"},"Use Podman ",(0,o.kt)("inlineCode",{parentName:"li"},"machine inspect")," to read the address to connect to the Podman machine ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/1364"},"#1364")),(0,o.kt)("li",{parentName:"ul"},"Update the editor content when the pod name changes, and disable the deploy button when empty ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/1403"},"#1403")),(0,o.kt)("li",{parentName:"ul"},"Ability to manually set color of tray icon for Windows and Linux ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/1243"},"#1243")),(0,o.kt)("li",{parentName:"ul"},"Better UI feedback when starting pods ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/1242"},"#1242"))),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"documentation"},"Documentation"),(0,o.kt)("p",null,"The documentation had many editorial reviews, and new content."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/installation/windows-install"},"Link to simple WSL2 installation instructions")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/installation/windows-install"},"Refresh Windows Installation")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/installation"},"Revamped installation introduction")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/installation/linux-install"},"Reorganized Linux installation")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/podman/installing-podman-with-openshift-local-on-windows"},"Installing Podman with OpenShift Local")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/installation/windows-install/installing-podman-desktop-and-podman-in-a-restricted-environment"},"Installing Podman Desktop on Windows in a restricted environment")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/migrating-from-docker/using-podman-mac-helper"},"Fixed documentation on ",(0,o.kt)("inlineCode",{parentName:"a"},"podman-mac-helper")," setup"))),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"notable-bug-fixes"},"Notable bug fixes"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Fixed handling path with spaces on Windows when installing Podman ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/1270"},"#1270")),(0,o.kt)("li",{parentName:"ul"},"Removed padding from SVG icons ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/1253"},"#1253")),(0,o.kt)("li",{parentName:"ul"},"Website: fixed download links for Windows and macOS binaries ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/1255"},"#1255")),(0,o.kt)("li",{parentName:"ul"},"Fixed prettier commands on Windows ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/1267"},"#1266")),(0,o.kt)("li",{parentName:"ul"},"Fixed new xterm instance spawn when clicking the logs route ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/1344"},"#1344")),(0,o.kt)("li",{parentName:"ul"},"Fixed need to wait that telemetry has been initialized before proceeding ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/1373"},"#1373")),(0,o.kt)("li",{parentName:"ul"},"Fixed new xterm instance spawn when clicking the logs route in pod details",(0,o.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/1393"},"#1393")),(0,o.kt)("li",{parentName:"ul"},"Fixed stop spinner if image cannot be retrieved ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/1394"},"#1394")),(0,o.kt)("li",{parentName:"ul"},"Fixed escape command with quotes only for Windows ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/1462"},"#1462")),(0,o.kt)("li",{parentName:"ul"},"Fixed random CRC status change ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/1420"},"#1420"))),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"community-thank-you"},"Community Thank You"),(0,o.kt)("p",null,"\ud83c\udf89 We\u2019d like to say a big thank you to everyone who helped to make Podman Desktop 0.12 even better:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/imphil"},"Philipp Wagner")," in ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/1274"},"#1274 - Link to simple WSL2 installation instructions")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/arixmkii"},"Arthur S")," in ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/1364"},"#1364 - Get podman machine socketPath from podman machine inspect first")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/Mitch9378"},"Mitch West")," in ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/1428"},"#1428 - Fix old documentation for 'podman-mac-helper setup'"))),(0,o.kt)("h2",{id:"final-notes"},"Final Notes"),(0,o.kt)("p",null,"The complete list of issues fixed in this release is available ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/containers/podman-desktop/issues?q=is%3Aclosed+milestone%3A0.12.0"},"here"),"."),(0,o.kt)("p",null,"Get the latest release from the ",(0,o.kt)("a",{parentName:"p",href:"/downloads"},"Downloads")," section of the website and boost your development journey with Podman Desktop. Additionally, visit the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/containers/podman-desktop"},"GitHub repository")," and see how you can help us make Podman Desktop better."))}u.isMDXComponent=!0},34132:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/podman-desktop-release-0.12-d5d46c8986e6e893b9ad30aac05c09f7.png"}}]);