"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3305],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=u(n),d=o,v=m["".concat(i,".").concat(d)]||m[d]||p[d]||a;return n?r.createElement(v,l(l({ref:t},c),{},{components:n})):r.createElement(v,l({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,l[1]=s;for(var u=2;u<a;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4959:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>d,default:()=>y,frontMatter:()=>m,metadata:()=>v,toc:()=>f});var r=n(7462),o=(n(7294),n(3905)),a=n(4037);const l={toc:[]};function s(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No specific UX guidelines"))}s.isMDXComponent=!0;var i=n(7521);const u={toc:[{value:"Featured Item",id:"featured-item",children:[],level:2},{value:"Item Group",id:"item-group",children:[],level:2}]};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"featured-item"},"Featured Item"),(0,o.kt)(i.ZP,{id:"components-item--default-item",mdxType:"Iframe"}," "),(0,o.kt)("h2",{id:"item-group"},"Item Group"),(0,o.kt)(i.ZP,{id:"components-item--default-group",mdxType:"Iframe"}," "))}c.isMDXComponent=!0;p="AccordionJSDoc";var p;const m={title:"Item",description:"",hide_table_of_contents:!0},d=void 0,v={unversionedId:"webdev/Components/Item",id:"webdev/Components/Item",title:"Item",description:"",source:"@site/docs/webdev/5-Components/10-Item.mdx",sourceDirName:"webdev/5-Components",slug:"/webdev/Components/Item",permalink:"/volto-eea-design-system/docs/webdev/Components/Item",editUrl:"https://github.com/eea/volto-eea-design-system/edit/contribute-documentation/website/docs/webdev/md_components/item_components/usage_markdown.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{title:"Item",description:"",hide_table_of_contents:!0},sidebar:"sidebar",previous:{title:"Inpage Navigation",permalink:"/volto-eea-design-system/docs/webdev/Components/Inpage-Navigation"},next:{title:"Labeled icons",permalink:"/volto-eea-design-system/docs/webdev/Components/Labeled-icons"}},f=[],b={toc:f};function y(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(a.ZP,{usage:(0,o.kt)(s,{mdxType:"Usage"}),showcase:(0,o.kt)(c,{mdxType:"Showcase"}),mdxType:"EEATabs"}))}y.isMDXComponent=!0},7521:(e,t,n)=>{n.d(t,{ZP:()=>i});var r=n(7462),o=(n(7294),n(3905)),a=n(2263);function l(){const{siteConfig:e}=(0,a.Z)(),{customFields:t}=e;return t.storyBookUrl}const s={toc:[],getUrl:l};function i(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("div",{className:"frameWrapper"},(0,o.kt)("iframe",{style:{height:(n.height?n.height:300)+"px"},src:l()+"/iframe.html?id="+n.id,title:"description"})))}i.isMDXComponent=!0},4037:(e,t,n)=>{n.d(t,{ZP:()=>y});var r=n(7462),o=n(7294),a=n(3905),l=n(2389),s=n(9443);const i=function(){const e=(0,o.useContext)(s.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e};var u=n(3810),c=n(6010);const p="tabItem_vU9c";function m(e){var t,n;const{lazy:r,block:a,defaultValue:l,values:s,groupId:m,className:d}=e,v=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=s??v.map((e=>{let{props:{value:t,label:n}}=e;return{value:t,label:n}})),b=(0,u.lx)(f,((e,t)=>e.value===t.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===l?l:l??(null==(t=v.find((e=>e.props.default)))?void 0:t.props.value)??(null==(n=v[0])?void 0:n.props.value);if(null!==y&&!f.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:h,setTabGroupChoices:g}=i(),[w,k]=(0,o.useState)(y),T=[],{blockElementScrollPositionUntilNextRender:x}=(0,u.o5)();if(null!=m){const e=h[m];null!=e&&e!==w&&f.some((t=>t.value===e))&&k(e)}const O=e=>{const t=e.currentTarget,n=T.indexOf(t),r=f[n].value;r!==w&&(x(t),k(r),null!=m&&g(m,r))},I=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=T.indexOf(e.currentTarget)+1;n=T[t]||T[0];break}case"ArrowLeft":{const t=T.indexOf(e.currentTarget)-1;n=T[t]||T[T.length-1];break}}null==(t=n)||t.focus()};return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":a},d)},f.map((e=>{let{value:t,label:n}=e;return o.createElement("li",{role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,className:(0,c.Z)("tabs__item",p,{"tabs__item--active":w===t}),key:t,ref:e=>T.push(e),onKeyDown:I,onFocus:O,onClick:O},n??t)}))),r?(0,o.cloneElement)(v.filter((e=>e.props.value===w))[0],{className:"margin-vert--md"}):o.createElement("div",{className:"margin-vert--md"},v.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function d(e){const t=(0,l.Z)();return o.createElement(m,(0,r.Z)({key:String(t)},e))}const v=function(e){let{children:t,hidden:n,className:r}=e;return o.createElement("div",{role:"tabpanel",hidden:n,className:r},t)};function f(e){let t=[{label:"Usage",value:"usage"},{label:"Showcase",value:"showcase"}];return e.api&&t.push({label:"API",value:"api"}),e.playground&&t.push({label:"Playground",value:"playground"}),t}const b={toc:[],getValues:f};function y(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(d,{defaultValue:"usage",values:f(n),mdxType:"Tabs"},(0,a.kt)(v,{value:"usage",mdxType:"TabItem"},n.usage),(0,a.kt)(v,{value:"showcase",mdxType:"TabItem"},n.showcase),(0,a.kt)(v,{value:"api",mdxType:"TabItem"},n.api)))}y.isMDXComponent=!0}}]);