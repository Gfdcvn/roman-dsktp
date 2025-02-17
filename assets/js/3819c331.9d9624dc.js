"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[68026],{2039:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/podman-save-2-9c18fbea6e42323091fd6339a977793b.png"},2597:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/podman-require-onboarding-2-3e5a951f6515771d8eabf33bf1ce20cc.png"},2655:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/podman-import-2-c9f14a998823dbbe994da461924aa908.png"},3679:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/podman-load-1-eeab5a43b18871d51d6fe6e1d5362f87.png"},12752:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var s=t(75662),i=t(62540),o=t(43023);const a={title:"Podman Desktop 1.9 Release",description:"Podman Desktop 1.9 has been released!",slug:"podman-desktop-release-1.9",authors:"benoitf",tags:["podman-desktop","release","podman"],hide_table_of_contents:!1,image:"/img/blog/podman-desktop-release-1.9/juggling.png"},r=void 0,l={authorsImageUrls:[void 0]},d=[{value:"Release Details",id:"release-details",level:2},{value:"Podman v5 (5.0.1)",id:"podman-v5-501",level:3},{value:"Important steps before updating",id:"important-steps-before-updating",level:4},{value:"Enabling experimental flag",id:"enabling-experimental-flag",level:4},{value:"Onboarding notification for Podman version 5",id:"onboarding-notification-for-podman-version-5",level:4},{value:"Podman 4.9.4",id:"podman-494",level:3},{value:"Save/Load Images or Export/Import Containers",id:"saveload-images-or-exportimport-containers",level:3},{value:"Save/Load Images",id:"saveload-images",level:4},{value:"Save/Load Containers",id:"saveload-containers",level:4},{value:"Terminal in Kubernetes Pods",id:"terminal-in-kubernetes-pods",level:3},{value:"Extension API Improvements",id:"extension-api-improvements",level:3},{value:"Other Notable Enhancements",id:"other-notable-enhancements",level:2},{value:"Notable Bug Fixes",id:"notable-bug-fixes",level:2},{value:"Documentation",id:"documentation",level:2},{value:"Community Thank You",id:"community-thank-you",level:2},{value:"Final notes",id:"final-notes",level:2},{value:"Fixed Issues",id:"fixed-issues",level:3},{value:"Where to Download",id:"where-to-download",level:3}];function h(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",hr:"hr",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"Podman Desktop 1.9 Release! \ud83c\udf89"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Podman-desktop-1-9-hero",src:t(31408).A+"",width:"1920",height:"1080"})}),"\n",(0,i.jsx)(n.p,{children:"This release introduces: \ud83e\uddad a splash of innovation, a wave of excitement, and an ocean of possibilities!"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Podman 5!"})," ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman/releases/tag/v5.0.1",children:"Podman 5.0.1"})," for new users (and as an experimental upgrade for 4.x users)."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Podman 4.9.4"}),": ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman/releases/tag/v4.9.4",children:"Podman 4.9.4"})," is now included in both Windows and macOS installers."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Backup/Restore Images"}),": Save images or containers to tar archives and restore them."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Kubernetes Pods Terminal"}),": Connect to a terminal within Kubernetes pods."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Extension API Improvements"}),": Additional updates to the extension API used by \ud83e\uddad Podman Desktop's extensions."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Podman Desktop 1.9 is now available. ",(0,i.jsx)(n.a,{href:"/downloads",children:"Click here to download it"}),"!"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"release-details",children:"Release Details"}),"\n",(0,i.jsx)(n.h3,{id:"podman-v5-501",children:"Podman v5 (5.0.1)"}),"\n",(0,i.jsxs)(n.p,{children:["Podman version 5 is out! ",(0,i.jsx)(n.a,{href:"https://blog.podman.io/2024/03/podman-5-0-has-been-released/",children:"see blog post introducing Podman v5"})]}),"\n",(0,i.jsx)(n.p,{children:"On macOS there are performance enhancements as Apple Hypervisor is used instead of QEMU for the Podman machine. Also expect better performance on the file sharing."}),"\n",(0,i.jsx)(n.p,{children:"That said, Podman machine version 5 is introducing changes that are not compliant with podman machine version 4."}),"\n",(0,i.jsx)(n.p,{children:"This is why we're rolling out Podman version 5 by default only to new users to improve the migration from Podman Desktop side."}),"\n",(0,i.jsxs)(n.p,{children:["For Podman version 4 users, Podman version 5 is accessible using an ",(0,i.jsx)(n.a,{href:"#enabling-experimental-flag",children:"experimental flag"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"Moving to Podman v5 implies to optionally save images and then delete previous machines and create a new one."}),"\n",(0,i.jsx)(n.h4,{id:"important-steps-before-updating",children:"Important steps before updating"}),"\n",(0,i.jsxs)(n.p,{children:["Prioritize data backup by using the save feature in the ",(0,i.jsx)(n.code,{children:"Image Lists"})," section. This feature allows you to back up your images and restore them once you have a new Podman machine."]}),"\n",(0,i.jsx)(n.p,{children:"When prompted to update, confirm to remove all existing data from your machines."}),"\n",(0,i.jsxs)(n.p,{children:["For more details on the save/load feature, refer to ",(0,i.jsx)(n.a,{href:"#saveload-images-or-exportimport-containers",children:"the save/load images section of the release notes"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"v5 update",src:t(32030).A+"",width:"1162",height:"812"})}),"\n",(0,i.jsx)(n.h4,{id:"enabling-experimental-flag",children:"Enabling experimental flag"}),"\n",(0,i.jsxs)(n.p,{children:["Are you using Podman 4.x but eager to migrate? Enable the Podman ",(0,i.jsx)(n.code,{children:"v5"})," experimental flag in ",(0,i.jsx)(n.code,{children:"Settings > Preferences > Extension: Podman"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"This will make the Upgrade option available on the Dashboard."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"v5 experimental flag",src:t(58447).A+"",width:"1162",height:"812"})}),"\n",(0,i.jsx)(n.h4,{id:"onboarding-notification-for-podman-version-5",children:"Onboarding notification for Podman version 5"}),"\n",(0,i.jsx)(n.p,{children:"If you have previously installed Podman version 5 and Podman Desktop detects some invalid Podman machines, you'll see a notification on the dashboard to clean up old machines."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Onboarding Notification",src:t(30798).A+"",width:"1162",height:"812"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Remove previous Podman machines",src:t(2597).A+"",width:"1162",height:"812"})}),"\n",(0,i.jsx)(n.h3,{id:"podman-494",children:"Podman 4.9.4"}),"\n",(0,i.jsx)(n.p,{children:"If you want to stay on Podman v4.x, there is a new update for some bugs including a CVE/security issue."}),"\n",(0,i.jsx)(n.h3,{id:"saveload-images-or-exportimport-containers",children:"Save/Load Images or Export/Import Containers"}),"\n",(0,i.jsx)(n.p,{children:"Podman 5 is not able to read 4.x machines, so before updating you'll need to backup images that you need to keep. You don't need to backup images that are available on remote registries or transient."}),"\n",(0,i.jsx)(n.h4,{id:"saveload-images",children:"Save/Load Images"}),"\n",(0,i.jsx)(n.p,{children:"\ud83e\uddad Use Podman Desktop to save images and load them again."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Select images to save",src:t(78108).A+"",width:"1162",height:"812"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Save images",src:t(2039).A+"",width:"1162",height:"812"})}),"\n",(0,i.jsx)(n.p,{children:"Load images using the Load button from the image list."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Select images to load",src:t(3679).A+"",width:"1162",height:"812"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Load images",src:t(66820).A+"",width:"1162",height:"812"})}),"\n",(0,i.jsx)(n.h4,{id:"saveload-containers",children:"Save/Load Containers"}),"\n",(0,i.jsx)(n.p,{children:"\ud83e\uddad Export filesystem of containers and import them."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Select containers to export",src:t(81453).A+"",width:"1162",height:"812"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Export containers",src:t(49686).A+"",width:"1162",height:"812"})}),"\n",(0,i.jsx)(n.p,{children:"Import containers using the Load button from the image list."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Select files to import",src:t(64356).A+"",width:"1162",height:"812"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Import images",src:t(2655).A+"",width:"1162",height:"812"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.em,{children:"NOTE:"})})," Exporting the filesystem of containers only exports the content of the filesystem. Importing will result in a container without any commands, so this might not be what you expect.\nPlease prioritize the usage of image saving/loading over container export/import."]}),"\n",(0,i.jsx)(n.h3,{id:"terminal-in-kubernetes-pods",children:"Terminal in Kubernetes Pods"}),"\n",(0,i.jsx)(n.p,{children:"In the previous release we introduced several new features in Kubernetes, but one notable addition was missing. With the 1.9 release, we're excited to announce that you can now connect to the terminal of a pod."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Terminal Connectivity: Users can now establish a direct connection to the terminal of a pod, enhancing the management and troubleshooting capabilities within Kubernetes environments."}),"\n",(0,i.jsx)(n.li,{children:"Container Toggle: When a pod contains multiple containers, you can easily toggle between them to access the terminal of the desired container."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"How to access to the Terminal:"}),"\n",(0,i.jsx)(n.p,{children:'Navigate to the pod details in Podman Desktop and select the "Terminal" Tab..'}),"\n",(0,i.jsx)(n.p,{children:"If the pod contains multiple containers, utilize the toggle feature to select the container whose terminal you wish to connect to."}),"\n",(0,i.jsx)(n.p,{children:"Once connected, you can interact with the terminal to perform various tasks such as debugging, log monitoring, or executing commands within the container environment."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Connect Terminal to a Pod",src:t(51923).A+"",width:"1162",height:"812"})}),"\n",(0,i.jsx)(n.h3,{id:"extension-api-improvements",children:"Extension API Improvements"}),"\n",(0,i.jsx)(n.p,{children:"We continued spent a lot of time adding new extension API to give upcoming extensions\nmore capabilites and even better integration into \ud83e\uddad Podman Desktop:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["feat: add navigateToAuthentication method to navigation API ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/6603",children:"6603"})]}),"\n",(0,i.jsxs)(n.li,{children:["feat: add secrets handling to extensionContext in extension api ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/6423",children:"6423"})]}),"\n",(0,i.jsxs)(n.li,{children:["feat: add sign in button for auth providers w/ the only auth session request ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/6446",children:"6446"})]}),"\n",(0,i.jsxs)(n.li,{children:["feat: support for webview reveal ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/6546",children:"6546"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Also we published a test framework to test extensions in separate repositories"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["feat: publish ui components and test component as part of the release ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/6580",children:"6580"})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["More info on ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/blob/main/tests/playwright/README.md",children:"https://github.com/containers/podman-desktop/blob/main/tests/playwright/README.md"})]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"other-notable-enhancements",children:"Other Notable Enhancements"}),"\n",(0,i.jsx)(n.p,{children:"We've added over 20 features this release, here are some other highlights:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["feat: terminate wsl machines before removing conf files when fixing update ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/6596",children:"#6596"})]}),"\n",(0,i.jsxs)(n.li,{children:["feat: update experimental v5 of podman to v5.0.1 ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/6589",children:"#6589"})]}),"\n",(0,i.jsxs)(n.li,{children:["feat: detect podman v4 machines not compliant with the new format of v5 ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/6570",children:"#6570"})]}),"\n",(0,i.jsxs)(n.li,{children:["feat: detect podman v4 qemu machines after update and delete them ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/6565",children:"#6565"})]}),"\n",(0,i.jsxs)(n.li,{children:["feat: update to podman v4.9.4 ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/6564",children:"#6564"})]}),"\n",(0,i.jsxs)(n.li,{children:["feat: default to podman v5 for new users ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/6548",children:"#6548"})]}),"\n",(0,i.jsxs)(n.li,{children:["feat: import containers images ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/6492",children:"#6492"})]}),"\n",(0,i.jsxs)(n.li,{children:["feat: open terminal in the running container ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/5975",children:"#5975"})]}),"\n",(0,i.jsxs)(n.li,{children:["feat: add experimental flag to install podman v5 ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/6476",children:"#6476"})]}),"\n",(0,i.jsxs)(n.li,{children:["feat: add export container ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/6468",children:"#6468"})]}),"\n",(0,i.jsxs)(n.li,{children:["feat: allow to revive a Uri object when passing it frontend - backend ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/6462",children:"#6462"})]}),"\n",(0,i.jsxs)(n.li,{children:["feat: add generic action to task ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/6453",children:"#6453"})]}),"\n",(0,i.jsxs)(n.li,{children:["feat: add export container logic ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/6452",children:"#6452"})]}),"\n",(0,i.jsxs)(n.li,{children:["feat: add bottomLeft and bottomRight options for Tooltip component ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/6445",children:"#6445"})]}),"\n",(0,i.jsxs)(n.li,{children:["feat: add a safe storage registry ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/6422",children:"#6422"})]}),"\n",(0,i.jsxs)(n.li,{children:["feat: allow to load images ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/6540",children:"#6540"})]}),"\n",(0,i.jsxs)(n.li,{children:["feat: ask to wipe all data when migrating from podman v4 to v5 ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/6539",children:"#6539"})]}),"\n",(0,i.jsxs)(n.li,{children:["feat: add loadImages logic ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/6538",children:"#6538"})]}),"\n",(0,i.jsxs)(n.li,{children:["feat: prompt user to stop any running podman machine before updating ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/6533",children:"#6533"})]}),"\n",(0,i.jsxs)(n.li,{children:["feat: allow to save images ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/6530",children:"#6530"})]}),"\n",(0,i.jsxs)(n.li,{children:["feat: add saveImages logic ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/6520",children:"#6520"})]}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"notable-bug-fixes",children:"Notable Bug Fixes"}),"\n",(0,i.jsx)(n.p,{children:"We squashed a lot of bugs this release, including the following:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["fix: handle external installation of Podman when checking for updates ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/6601",children:"#6601"})]}),"\n",(0,i.jsxs)(n.li,{children:["fix: invalid if clause for !isLinux ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/6597",children:"#6597"})]}),"\n",(0,i.jsxs)(n.li,{children:["fix: allow to select files when wanting to import container tar images ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/6591",children:"#6591"})]}),"\n",(0,i.jsxs)(n.li,{children:["fix: provides the tag names rather than id when saving images ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/6588",children:"#6588"})]}),"\n",(0,i.jsxs)(n.li,{children:["fix: allow to select files when importing tar files ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/6584",children:"#6584"})]}),"\n",(0,i.jsxs)(n.li,{children:["fix: inconsistent tab filtering behavior ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/6572",children:"#6572"})]}),"\n",(0,i.jsxs)(n.li,{children:["fix: check if updates are available after a new podman machine is added/removed ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/6558",children:"#6558"})]}),"\n",(0,i.jsxs)(n.li,{children:["fix: making CancellationTokenSource a class instead of an interface ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/6557",children:"#6557"})]}),"\n",(0,i.jsxs)(n.li,{children:["fix: ensure machine list is up-to-date when running onboarding ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/6512",children:"#6512"})]}),"\n",(0,i.jsxs)(n.li,{children:["fix: onboarding should be available after reloading an extension ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/6510",children:"#6510"})]}),"\n",(0,i.jsxs)(n.li,{children:["fix: support more fa icons ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/6499",children:"#6499"})]}),"\n",(0,i.jsxs)(n.li,{children:["fix: update e2e tests to fix CI failures ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/6491",children:"#6491"})]}),"\n",(0,i.jsxs)(n.li,{children:["fix: update yarn.lock ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/6474",children:"#6474"})]}),"\n",(0,i.jsxs)(n.li,{children:["fix: use expected component in the tests ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/6424",children:"#6424"})]}),"\n",(0,i.jsxs)(n.li,{children:["fix: correct layout for openshift routes ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/6398",children:"#6398"})]}),"\n",(0,i.jsxs)(n.li,{children:["fix: add playsinline to avoid full screen ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/6395",children:"#6395"})]}),"\n",(0,i.jsxs)(n.li,{children:["fix: try to listen on all ipv4 interfaces AND 0.0.0.0 before to declare a port free ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/6354",children:"#6354"})]}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"documentation",children:"Documentation"}),"\n",(0,i.jsx)(n.p,{children:"Along with this new version of \ud83e\uddad Podman Desktop the documentation has had the following improvements:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["docs: single page for ",(0,i.jsx)(n.em,{children:"In a restricted environment"})," ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/5756",children:"#5756"})]}),"\n",(0,i.jsxs)(n.li,{children:["docs: updated ",(0,i.jsx)(n.em,{children:"Installing Podman Desktop and Podman on Windows"})," (compact version) ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/5751",children:"#5751"})]}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"community-thank-you",children:"Community Thank You"}),"\n",(0,i.jsx)(n.p,{children:"\ud83c\udf89 We\u2019d like to say a big thank you to everyone who helped make \ud83e\uddad Podman Desktop even better. In this release we received pull requests from the following people:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://github.com/GLEF1X",children:"Hlib Haranin"})," in ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/6572",children:"fix: inconsistent tab filtering behavior"}),", ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/6574",children:"chore(palette): make command titles capitalization consistent"}),", ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/6575",children:"chore(no-engine-screen): add guidance for engine configuration"}),", ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/6586",children:"chore(image-list): improve button tooltips"})]}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"final-notes",children:"Final notes"}),"\n",(0,i.jsx)(n.h3,{id:"fixed-issues",children:"Fixed Issues"}),"\n",(0,i.jsxs)(n.p,{children:["The complete list of issues fixed in this release is available ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/issues?q=is%3Aclosed+milestone%3A1.9.0",children:"here"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"where-to-download",children:"Where to Download"}),"\n",(0,i.jsxs)(n.p,{children:["Get the latest release from the ",(0,i.jsx)(n.a,{href:"/downloads",children:"Downloads"})," section of the website and boost your development journey with Podman Desktop. Additionally, visit the ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop",children:"GitHub repository"})," and see how you can help us make Podman Desktop better."]})]})}function c(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},30798:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/podman-require-onboarding-1-7ed39cd39558bd7712fad0e81ea9f3f4.png"},31408:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/juggling-bfd34fcfc3b63b29752c5f16a53e36ad.png"},32030:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/podman-update-to-v5-548970ff48d59050db20e1175545ec7e.png"},43023:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>r});var s=t(63696);const i={},o=s.createContext(i);function a(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(o.Provider,{value:n},e.children)}},49686:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/podman-export-2-81ba8d0d9a6637e866eb51b4cd40f221.png"},51923:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/terminal-pod-4f9b2aff1b3352d0cdfbb5e8db4d0195.png"},58447:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/experimental-podman-5-81162b712a077c2982545eff3d8322ed.png"},64356:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/podman-import-1-184cbdda642b97ff9d07034fe90adaf9.png"},66820:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/podman-load-2-3f9251fd056a30f32148ac4ea598091c.png"},75662:e=>{e.exports=JSON.parse('{"permalink":"/blog/podman-desktop-release-1.9","source":"@site/blog/2024-04-05-release-1.9.md","title":"Podman Desktop 1.9 Release","description":"Podman Desktop 1.9 has been released!","date":"2024-04-05T00:00:00.000Z","tags":[{"inline":true,"label":"podman-desktop","permalink":"/blog/tags/podman-desktop"},{"inline":true,"label":"release","permalink":"/blog/tags/release"},{"inline":true,"label":"podman","permalink":"/blog/tags/podman"}],"readingTime":6.925,"hasTruncateMarker":true,"authors":[{"name":"Florent Benoit","title":"Principal Software Engineer","url":"https://github.com/benoitf","imageURL":"https://github.com/benoitf.png","key":"benoitf","page":null}],"frontMatter":{"title":"Podman Desktop 1.9 Release","description":"Podman Desktop 1.9 has been released!","slug":"podman-desktop-release-1.9","authors":"benoitf","tags":["podman-desktop","release","podman"],"hide_table_of_contents":false,"image":"/img/blog/podman-desktop-release-1.9/juggling.png"},"unlisted":false,"prevItem":{"title":"Podman Desktop 1.10 Release","permalink":"/blog/podman-desktop-release-1.10"},"nextItem":{"title":"Podman Desktop 1.8 Release","permalink":"/blog/podman-desktop-release-1.8"}}')},78108:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/podman-save-1-f7e71a75d3662120071f0dcd3039a9e6.png"},81453:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/podman-export-1-5e785ba41585359a51a77638b9f9add0.png"}}]);