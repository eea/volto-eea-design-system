"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9817],{8507:(e,t,n)=>{n.r(t),n.d(t,{default:()=>k});var a=n(7294),i=n(3810),r=n(9960),l=n(6010);const s={cardContainer:"cardContainer_w8bb",cardContainerLink:"cardContainerLink_AhGd",cardTitle:"cardTitle_t-cI",cardDescription:"cardDescription_aEbl"};var c=n(3919);function o(e){let{href:t,children:n}=e;const i=(0,l.Z)("card margin-bottom--lg padding--lg",s.cardContainer,t&&s.cardContainerLink);return t?a.createElement(r.Z,{href:t,className:i},n):a.createElement("div",{className:i},n)}function d(e){let{href:t,icon:n,title:i,description:r}=e;return a.createElement(o,{href:t},a.createElement("h2",{className:(0,l.Z)("text--truncate",s.cardTitle),title:i},n," ",i),a.createElement("div",{className:(0,l.Z)("text--truncate",s.cardDescription),title:r},r))}function m(e){let{item:t}=e;const n=(0,i.Wl)(t);return a.createElement(d,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:`${t.items.length} items`})}function u(e){let{item:t}=e;const n=(0,c.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,i.xz)(t.docId??void 0);return a.createElement(d,{href:t.href,icon:n,title:t.label,description:r?.description})}function v(e){let{item:t}=e;switch(t.type){case"link":return a.createElement(u,{item:t});case"category":return a.createElement(m,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function h(e){let{items:t}=e;return a.createElement("div",{className:"row"},t.map(((e,t)=>a.createElement("article",{key:t,className:"col col--6"},a.createElement(v,{item:e})))))}var g=n(1101),E=n(1217),b=n(4474),p=n(7597),f=n(9649);const N={generatedIndexPage:"generatedIndexPage_aEAk",title:"title_2-6Y"};function k(e){let{categoryGeneratedIndex:t}=e;const n=(0,i.jA)();return a.createElement(a.Fragment,null,a.createElement(E.Z,{title:t.title,description:t.description}),a.createElement("div",{className:N.generatedIndexPage},a.createElement(b.Z,null),a.createElement(p.Z,null),a.createElement("header",null,a.createElement(f.N,{className:N.title},t.title),t.description&&a.createElement("p",null,t.description)),a.createElement("main",{className:"margin-top--lg"},a.createElement(h,{items:n.items})),a.createElement("footer",{className:"margin-top--lg"},a.createElement(g.Z,{previous:t.navigation.previous,next:t.navigation.next}))))}},1101:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(7294),i=n(9960),r=n(5999);const l=function(e){const{previous:t,next:n}=e;return a.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,r.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},a.createElement("div",{className:"pagination-nav__item"},t&&a.createElement(i.Z,{className:"pagination-nav__link",to:t.permalink},a.createElement("div",{className:"pagination-nav__sublabel"},a.createElement(r.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")),a.createElement("div",{className:"pagination-nav__label"},"\xab ",t.title))),a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},n&&a.createElement(i.Z,{className:"pagination-nav__link",to:n.permalink},a.createElement("div",{className:"pagination-nav__sublabel"},a.createElement(r.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next")),a.createElement("div",{className:"pagination-nav__label"},n.title," \xbb"))))}},7597:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(7294),i=n(3810),r=n(6010);function l(e){let{className:t}=e;const n=(0,i.E6)();return n.badge?a.createElement("span",{className:(0,r.Z)(t,i.kM.docs.docVersionBadge,"badge badge--secondary")},"Version: ",n.label):null}},4474:(e,t,n)=>{n.d(t,{Z:()=>h});var a=n(7294),i=n(2263),r=n(9960),l=n(5999),s=n(907),c=n(3810),o=n(6010);const d={unreleased:function(e){let{siteTitle:t,versionMetadata:n}=e;return a.createElement(l.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:a.createElement("b",null,n.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){let{siteTitle:t,versionMetadata:n}=e;return a.createElement(l.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:a.createElement("b",null,n.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function m(e){const t=d[e.versionMetadata.banner];return a.createElement(t,e)}function u(e){let{versionLabel:t,to:n,onClick:i}=e;return a.createElement(l.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:a.createElement("b",null,a.createElement(r.Z,{to:n,onClick:i},a.createElement(l.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function v(e){let{className:t,versionMetadata:n}=e;const{siteConfig:{title:r}}=(0,i.Z)(),{pluginId:l}=(0,s.gA)({failfast:!0}),{savePreferredVersionName:d}=(0,c.J)(l),{latestDocSuggestion:v,latestVersionSuggestion:h}=(0,s.Jo)(l),g=v??(E=h).docs.find((e=>e.id===E.mainDocId));var E;return a.createElement("div",{className:(0,o.Z)(t,c.kM.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},a.createElement("div",null,a.createElement(m,{siteTitle:r,versionMetadata:n})),a.createElement("div",{className:"margin-top--md"},a.createElement(u,{versionLabel:h.label,to:g.path,onClick:()=>d(h.name)})))}function h(e){let{className:t}=e;const n=(0,c.E6)();return n.banner?a.createElement(v,{className:t,versionMetadata:n}):null}},9649:(e,t,n)=>{n.d(t,{N:()=>d,Z:()=>m});var a=n(7462),i=n(7294),r=n(6010),l=n(5999),s=n(3810);const c="anchorWithStickyNavbar_y2LR",o="anchorWithHideOnScrollNavbar_3ly5",d=e=>{let{...t}=e;return i.createElement("header",null,i.createElement("h1",(0,a.Z)({},t,{id:void 0}),t.children))},m=e=>{return"h1"===e?d:(t=e,e=>{let{id:n,...d}=e;const{navbar:{hideOnScroll:m}}=(0,s.LU)();return n?i.createElement(t,(0,a.Z)({},d,{className:(0,r.Z)("anchor",{[o]:m,[c]:!m}),id:n}),d.children,i.createElement("a",{"aria-hidden":"true",className:"hash-link",href:`#${n}`,title:(0,l.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):i.createElement(t,d)});var t}}}]);