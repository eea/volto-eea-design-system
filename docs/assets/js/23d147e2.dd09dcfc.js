"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6570],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=o,f=p["".concat(i,".").concat(m)]||p[m]||d[m]||a;return n?r.createElement(f,s(s({ref:t},u),{},{components:n})):r.createElement(f,s({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[p]="string"==typeof e?e:o,s[1]=l;for(var c=2;c<a;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3109:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>b,default:()=>w,frontMatter:()=>f,metadata:()=>v,toc:()=>y});var r=n(7462),o=(n(7294),n(3905)),a=n(4037);const s={toc:[]},l="wrapper";function i(e){let{components:t,...n}=e;return(0,o.kt)(l,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No specific UX guidelines."))}i.isMDXComponent=!0;var c=n(7521);const u={toc:[{value:"Default",id:"default",children:[],level:2},{value:"Group",id:"group",children:[],level:2}]},p="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"default"},"Default"),(0,o.kt)(c.ZP,{id:"components-statistic--default",height:"200",mdxType:"Iframe"}," "),(0,o.kt)("h2",{id:"group"},"Group"),(0,o.kt)(c.ZP,{id:"components-statistic--group",height:"200",mdxType:"Iframe"}," "))}d.isMDXComponent=!0;m="MenuJSDoc";var m;const f={title:"Statistic",description:"",hide_table_of_contents:!0},b=void 0,v={unversionedId:"webdev/Components/Statistic",id:"webdev/Components/Statistic",title:"Statistic",description:"",source:"@site/docs/webdev/5-Components/23-Statistic.mdx",sourceDirName:"webdev/5-Components",slug:"/webdev/Components/Statistic",permalink:"/volto-eea-design-system/docs/webdev/Components/Statistic",editUrl:"https://github.com/eea/volto-eea-design-system/edit/contribute-documentation/website/docs/webdev/md_components/statistic_components/usage_markdown.md",tags:[],version:"current",sidebarPosition:23,frontMatter:{title:"Statistic",description:"",hide_table_of_contents:!0},sidebar:"sidebar",previous:{title:"Segment",permalink:"/volto-eea-design-system/docs/webdev/Components/Segment"},next:{title:"Tab",permalink:"/volto-eea-design-system/docs/webdev/Components/Tab"}},y=[],h={toc:y},g="wrapper";function w(e){let{components:t,...n}=e;return(0,o.kt)(g,(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(a.ZP,{usage:(0,o.kt)(i,{mdxType:"Usage"}),showcase:(0,o.kt)(d,{mdxType:"Showcase"}),mdxType:"EEATabs"}))}w.isMDXComponent=!0},7521:(e,t,n)=>{n.d(t,{ZP:()=>c});var r=n(7462),o=(n(7294),n(3905)),a=n(2263);function s(){const{siteConfig:e}=(0,a.Z)(),{customFields:t}=e;return t.storyBookUrl}const l={toc:[],getUrl:s},i="wrapper";function c(e){let{components:t,...n}=e;return(0,o.kt)(i,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("div",{className:"frameWrapper"},(0,o.kt)("iframe",{style:{height:(n.height?n.height:300)+"px"},src:s()+"/iframe.html?id="+n.id,title:"description"})))}c.isMDXComponent=!0},4037:(e,t,n)=>{n.d(t,{ZP:()=>h});var r=n(7462),o=n(7294),a=n(3905),s=n(2389),l=n(9443);const i=function(){const e=(0,o.useContext)(l.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e};var c=n(3810),u=n(6010);const p={tabItem:"tabItem_vU9c"};function d(e){const{lazy:t,block:n,defaultValue:r,values:a,groupId:s,className:l}=e,d=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),m=a??d.map((e=>{let{props:{value:t,label:n}}=e;return{value:t,label:n}})),f=(0,c.lx)(m,((e,t)=>e.value===t.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const b=null===r?r:r??d.find((e=>e.props.default))?.props.value??d[0]?.props.value;if(null!==b&&!m.some((e=>e.value===b)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${b}" but none of its children has the corresponding value. Available values are: ${m.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:y}=i(),[h,g]=(0,o.useState)(b),w=[],{blockElementScrollPositionUntilNextRender:k}=(0,c.o5)();if(null!=s){const e=v[s];null!=e&&e!==h&&m.some((t=>t.value===e))&&g(e)}const T=e=>{const t=e.currentTarget,n=w.indexOf(t),r=m[n].value;r!==h&&(k(t),g(r),null!=s&&y(s,r))},x=e=>{let t=null;switch(e.key){case"ArrowRight":{const n=w.indexOf(e.currentTarget)+1;t=w[n]||w[0];break}case"ArrowLeft":{const n=w.indexOf(e.currentTarget)-1;t=w[n]||w[w.length-1];break}}t?.focus()};return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":n},l)},m.map((e=>{let{value:t,label:n}=e;return o.createElement("li",{role:"tab",tabIndex:h===t?0:-1,"aria-selected":h===t,className:(0,u.Z)("tabs__item",p.tabItem,{"tabs__item--active":h===t}),key:t,ref:e=>w.push(e),onKeyDown:x,onFocus:T,onClick:T},n??t)}))),t?(0,o.cloneElement)(d.filter((e=>e.props.value===h))[0],{className:"margin-vert--md"}):o.createElement("div",{className:"margin-vert--md"},d.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==h})))))}function m(e){const t=(0,s.Z)();return o.createElement(d,(0,r.Z)({key:String(t)},e))}const f=function(e){let{children:t,hidden:n,className:r}=e;return o.createElement("div",{role:"tabpanel",hidden:n,className:r},t)};function b(e){let t=[{label:"Usage",value:"usage"},{label:"Showcase",value:"showcase"}];return e.api&&t.push({label:"API",value:"api"}),e.playground&&t.push({label:"Playground",value:"playground"}),t}const v={toc:[],getValues:b},y="wrapper";function h(e){let{components:t,...n}=e;return(0,a.kt)(y,(0,r.Z)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(m,{defaultValue:"usage",values:b(n),mdxType:"Tabs"},(0,a.kt)(f,{value:"usage",mdxType:"TabItem"},n.usage),(0,a.kt)(f,{value:"showcase",mdxType:"TabItem"},n.showcase),(0,a.kt)(f,{value:"api",mdxType:"TabItem"},n.api)))}h.isMDXComponent=!0}}]);