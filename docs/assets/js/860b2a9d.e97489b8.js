"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3436],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=o.createContext({}),c=function(e){var t=o.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(i.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,f=p["".concat(i,".").concat(m)]||p[m]||d[m]||a;return n?o.createElement(f,s(s({ref:t},u),{},{components:n})):o.createElement(f,s({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[p]="string"==typeof e?e:r,s[1]=l;for(var c=2;c<a;c++)s[c]=n[c];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7068:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>m,default:()=>g,frontMatter:()=>d,metadata:()=>f,toc:()=>b});var o=n(7462),r=(n(7294),n(3905)),a=n(4037);const s={toc:[]};function l(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,o.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,'An invisible clear space around the logo should be left clear. No other graphic elements should be placed within this area. It is defined using the width of the"M" or 20px from the logotype applied all round.'),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(4732).Z})))}l.isMDXComponent=!0;var i=n(7521);const c={toc:[]};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(i.ZP,{id:"components-logo--logo",mdxType:"Iframe"}," "))}u.isMDXComponent=!0;p="AccordionJSDoc";var p;const d={title:"Logo",description:"",hide_table_of_contents:!0},m=void 0,f={unversionedId:"webdev/Components/Logo",id:"webdev/Components/Logo",title:"Logo",description:"",source:"@site/docs/webdev/5-Components/14-Logo.mdx",sourceDirName:"webdev/5-Components",slug:"/webdev/Components/Logo",permalink:"/volto-eea-design-system/docs/webdev/Components/Logo",editUrl:"https://github.com/eea/volto-eea-design-system/edit/contribute-documentation/website/docs/webdev/md_components/logo_components/usage_markdown.md",tags:[],version:"current",sidebarPosition:14,frontMatter:{title:"Logo",description:"",hide_table_of_contents:!0},sidebar:"sidebar",previous:{title:"List",permalink:"/volto-eea-design-system/docs/webdev/Components/Lists"},next:{title:"Image",permalink:"/volto-eea-design-system/docs/webdev/Components/Image"}},b=[],v={toc:b};function g(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(a.ZP,{usage:(0,r.kt)(l,{mdxType:"Usage"}),showcase:(0,r.kt)(u,{mdxType:"Showcase"}),mdxType:"EEATabs"}))}g.isMDXComponent=!0},7521:(e,t,n)=>{n.d(t,{ZP:()=>i});var o=n(7462),r=(n(7294),n(3905)),a=n(2263);function s(){const{siteConfig:e}=(0,a.Z)(),{customFields:t}=e;return t.storyBookUrl}const l={toc:[],getUrl:s};function i(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"frameWrapper"},(0,r.kt)("iframe",{style:{height:(n.height?n.height:300)+"px"},src:s()+"/iframe.html?id="+n.id,title:"description"})))}i.isMDXComponent=!0},4037:(e,t,n)=>{n.d(t,{ZP:()=>g});var o=n(7462),r=n(7294),a=n(3905),s=n(2389),l=n(9443);const i=function(){const e=(0,r.useContext)(l.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e};var c=n(3810),u=n(6010);const p="tabItem_vU9c";function d(e){const{lazy:t,block:n,defaultValue:o,values:a,groupId:s,className:l}=e,d=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),m=a??d.map((e=>{let{props:{value:t,label:n}}=e;return{value:t,label:n}})),f=(0,c.lx)(m,((e,t)=>e.value===t.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const b=null===o?o:o??d.find((e=>e.props.default))?.props.value??d[0]?.props.value;if(null!==b&&!m.some((e=>e.value===b)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${b}" but none of its children has the corresponding value. Available values are: ${m.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:g}=i(),[y,h]=(0,r.useState)(b),w=[],{blockElementScrollPositionUntilNextRender:k}=(0,c.o5)();if(null!=s){const e=v[s];null!=e&&e!==y&&m.some((t=>t.value===e))&&h(e)}const T=e=>{const t=e.currentTarget,n=w.indexOf(t),o=m[n].value;o!==y&&(k(t),h(o),null!=s&&g(s,o))},x=e=>{let t=null;switch(e.key){case"ArrowRight":{const n=w.indexOf(e.currentTarget)+1;t=w[n]||w[0];break}case"ArrowLeft":{const n=w.indexOf(e.currentTarget)-1;t=w[n]||w[w.length-1];break}}t?.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":n},l)},m.map((e=>{let{value:t,label:n}=e;return r.createElement("li",{role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,className:(0,u.Z)("tabs__item",p,{"tabs__item--active":y===t}),key:t,ref:e=>w.push(e),onKeyDown:x,onFocus:T,onClick:T},n??t)}))),t?(0,r.cloneElement)(d.filter((e=>e.props.value===y))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},d.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==y})))))}function m(e){const t=(0,s.Z)();return r.createElement(d,(0,o.Z)({key:String(t)},e))}const f=function(e){let{children:t,hidden:n,className:o}=e;return r.createElement("div",{role:"tabpanel",hidden:n,className:o},t)};function b(e){let t=[{label:"Usage",value:"usage"},{label:"Showcase",value:"showcase"}];return e.api&&t.push({label:"API",value:"api"}),e.playground&&t.push({label:"Playground",value:"playground"}),t}const v={toc:[],getValues:b};function g(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(m,{defaultValue:"usage",values:b(n),mdxType:"Tabs"},(0,a.kt)(f,{value:"usage",mdxType:"TabItem"},n.usage),(0,a.kt)(f,{value:"showcase",mdxType:"TabItem"},n.showcase),(0,a.kt)(f,{value:"api",mdxType:"TabItem"},n.api)))}g.isMDXComponent=!0},4732:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/EEA_logo-4aa062e87dc9f24f62879c3da5604305.png"}}]);