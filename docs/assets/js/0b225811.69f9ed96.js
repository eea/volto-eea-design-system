"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8362],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),u=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||a;return n?o.createElement(h,l(l({ref:t},c),{},{components:n})):o.createElement(h,l({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:r,l[1]=i;for(var u=2;u<a;u++)l[u]=n[u];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5089:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>h,default:()=>y,frontMatter:()=>m,metadata:()=>f,toc:()=>b});var o=n(7462),r=(n(7294),n(3905)),a=n(4037);const l={toc:[{value:"Dos",id:"dos",children:[],level:3},{value:"Don&#39;ts",id:"donts",children:[],level:3},{value:"When to use",id:"when-to-use",children:[],level:3},{value:"When not to use",id:"when-not-to-use",children:[],level:3}]},i="wrapper";function s(e){let{components:t,...n}=e;return(0,r.kt)(i,(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The checkbox is a form input for users to choose one or more options from the list of selections."),(0,r.kt)("h3",{id:"dos"},"Dos"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"always make sure each checkbox has a short, distinct and indicative checkbox label"),(0,r.kt)("li",{parentName:"ul"},"use checkbox labels as click targets (clicking the label will select that option)"),(0,r.kt)("li",{parentName:"ul"},"arrange them vertically, in a single column layout"),(0,r.kt)("li",{parentName:"ul"},"group related fields"),(0,r.kt)("li",{parentName:"ul"},"order logically"),(0,r.kt)("li",{parentName:"ul"},"indicate whether the input group is optional or mandatory"),(0,r.kt)("li",{parentName:"ul"},"make use of helper text if there are further directions or hints the users may need in completing their goal"),(0,r.kt)("li",{parentName:"ul"},"write specific and clear error messages, so users understand how to properly address and recover from the error")),(0,r.kt)("h3",{id:"donts"},"Don'ts"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"don't add them without grouping first, in a logical order"),(0,r.kt)("li",{parentName:"ul"},"don't restrict the number of checkboxes that can be ticked at any time"),(0,r.kt)("li",{parentName:"ul"},"don't nest elements under the checkbox - keep all the options on the same level")),(0,r.kt)("h3",{id:"when-to-use"},"When to use"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"use in any situation where the input information is known to the organisation"),(0,r.kt)("li",{parentName:"ul"},"when users need to select options or toggle settings"),(0,r.kt)("li",{parentName:"ul"},"in forms with multiple non-exclusive options"),(0,r.kt)("li",{parentName:"ul"},"in search filters"),(0,r.kt)("li",{parentName:"ul"},"to turn a setting option on or off")),(0,r.kt)("h3",{id:"when-not-to-use"},"When not to use"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"do not use it when you have mutually exclusive items"),(0,r.kt)("li",{parentName:"ul"},"do not use it if the checkbox selection will perform an action")))}s.isMDXComponent=!0;var u=n(7521);const c={toc:[{value:"Default",id:"default",children:[],level:2},{value:"Invalid",id:"invalid",children:[],level:2},{value:"Optional",id:"optional",children:[],level:2},{value:"Single",id:"single",children:[],level:2}]},p="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"default"},"Default"),(0,r.kt)(u.ZP,{id:"components-forms-checkbox--default",mdxType:"Iframe"}," "),(0,r.kt)("h2",{id:"invalid"},"Invalid"),(0,r.kt)(u.ZP,{id:"components-forms-checkbox--invalid",height:"400",mdxType:"Iframe"}," "),(0,r.kt)("h2",{id:"optional"},"Optional"),(0,r.kt)(u.ZP,{id:"components-forms-checkbox--optional",mdxType:"Iframe"}," "),(0,r.kt)("h2",{id:"single"},"Single"),(0,r.kt)(u.ZP,{id:"components-forms-checkbox--single",mdxType:"Iframe"}," "))}d.isMDXComponent=!0;const m={title:"Checkbox",description:"",hide_table_of_contents:!0},h=void 0,f={unversionedId:"webdev/Components/Forms/Checkbox",id:"webdev/Components/Forms/Checkbox",title:"Checkbox",description:"",source:"@site/docs/webdev/5-Components/7-Forms/0-Checkbox.mdx",sourceDirName:"webdev/5-Components/7-Forms",slug:"/webdev/Components/Forms/Checkbox",permalink:"/volto-eea-design-system/docs/webdev/Components/Forms/Checkbox",editUrl:"https://github.com/eea/volto-eea-design-system/edit/contribute-documentation/website/docs/webdev/md_components/checkbox_components/usage_markdown.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"Checkbox",description:"",hide_table_of_contents:!0},sidebar:"sidebar",previous:{title:"Forms",permalink:"/volto-eea-design-system/docs/category/forms"},next:{title:"Dropdown",permalink:"/volto-eea-design-system/docs/webdev/Components/Forms/Dropdown"}},b=[],v={toc:b},k="wrapper";function y(e){let{components:t,...n}=e;return(0,r.kt)(k,(0,o.Z)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(a.ZP,{usage:(0,r.kt)(s,{mdxType:"Usage"}),showcase:(0,r.kt)(d,{mdxType:"Showcase"}),mdxType:"EEATabs"}))}y.isMDXComponent=!0},7521:(e,t,n)=>{n.d(t,{ZP:()=>u});var o=n(7462),r=(n(7294),n(3905)),a=n(2263);function l(){const{siteConfig:e}=(0,a.Z)(),{customFields:t}=e;return t.storyBookUrl}const i={toc:[],getUrl:l},s="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(s,(0,o.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"frameWrapper"},(0,r.kt)("iframe",{style:{height:(n.height?n.height:300)+"px"},src:l()+"/iframe.html?id="+n.id,title:"description"})))}u.isMDXComponent=!0},4037:(e,t,n)=>{n.d(t,{ZP:()=>k});var o=n(7462),r=n(7294),a=n(3905),l=n(2389),i=n(9443);const s=function(){const e=(0,r.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e};var u=n(3810),c=n(6010);const p={tabItem:"tabItem_vU9c"};function d(e){const{lazy:t,block:n,defaultValue:o,values:a,groupId:l,className:i}=e,d=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),m=a??d.map((e=>{let{props:{value:t,label:n}}=e;return{value:t,label:n}})),h=(0,u.lx)(m,((e,t)=>e.value===t.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const f=null===o?o:o??d.find((e=>e.props.default))?.props.value??d[0]?.props.value;if(null!==f&&!m.some((e=>e.value===f)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${f}" but none of its children has the corresponding value. Available values are: ${m.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:b,setTabGroupChoices:v}=s(),[k,y]=(0,r.useState)(f),g=[],{blockElementScrollPositionUntilNextRender:w}=(0,u.o5)();if(null!=l){const e=b[l];null!=e&&e!==k&&m.some((t=>t.value===e))&&y(e)}const x=e=>{const t=e.currentTarget,n=g.indexOf(t),o=m[n].value;o!==k&&(w(t),y(o),null!=l&&v(l,o))},T=e=>{let t=null;switch(e.key){case"ArrowRight":{const n=g.indexOf(e.currentTarget)+1;t=g[n]||g[0];break}case"ArrowLeft":{const n=g.indexOf(e.currentTarget)-1;t=g[n]||g[g.length-1];break}}t?.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":n},i)},m.map((e=>{let{value:t,label:n}=e;return r.createElement("li",{role:"tab",tabIndex:k===t?0:-1,"aria-selected":k===t,className:(0,c.Z)("tabs__item",p.tabItem,{"tabs__item--active":k===t}),key:t,ref:e=>g.push(e),onKeyDown:T,onFocus:x,onClick:x},n??t)}))),t?(0,r.cloneElement)(d.filter((e=>e.props.value===k))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},d.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==k})))))}function m(e){const t=(0,l.Z)();return r.createElement(d,(0,o.Z)({key:String(t)},e))}const h=function(e){let{children:t,hidden:n,className:o}=e;return r.createElement("div",{role:"tabpanel",hidden:n,className:o},t)};function f(e){let t=[{label:"Usage",value:"usage"},{label:"Showcase",value:"showcase"}];return e.api&&t.push({label:"API",value:"api"}),e.playground&&t.push({label:"Playground",value:"playground"}),t}const b={toc:[],getValues:f},v="wrapper";function k(e){let{components:t,...n}=e;return(0,a.kt)(v,(0,o.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(m,{defaultValue:"usage",values:f(n),mdxType:"Tabs"},(0,a.kt)(h,{value:"usage",mdxType:"TabItem"},n.usage),(0,a.kt)(h,{value:"showcase",mdxType:"TabItem"},n.showcase),(0,a.kt)(h,{value:"api",mdxType:"TabItem"},n.api)))}k.isMDXComponent=!0}}]);