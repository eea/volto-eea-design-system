"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6966],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=u(n),d=o,f=m["".concat(i,".").concat(d)]||m[d]||p[d]||a;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,l[1]=s;for(var u=2;u<a;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7330:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>d,default:()=>y,frontMatter:()=>m,metadata:()=>f,toc:()=>v});var r=n(7462),o=(n(7294),n(3905)),a=n(4037);const l={toc:[]};function s(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No specific UX guidelines"))}s.isMDXComponent=!0;var i=n(7521);const u={toc:[]};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(i.ZP,{height:"600",id:"components-comment--default",mdxType:"Iframe"}," "))}c.isMDXComponent=!0;p="AccordionJSDoc";var p;const m={title:"Comment",description:"",hide_table_of_contents:!0},d=void 0,f={unversionedId:"webdev/Components/Comment",id:"webdev/Components/Comment",title:"Comment",description:"",source:"@site/docs/webdev/5-Components/5-Comment.mdx",sourceDirName:"webdev/5-Components",slug:"/webdev/Components/Comment",permalink:"/volto-eea-design-system/docs/webdev/Components/Comment",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Comment",description:"",hide_table_of_contents:!0},sidebar:"sidebar",previous:{title:"Card",permalink:"/volto-eea-design-system/docs/webdev/Components/Cards"},next:{title:"Confirm",permalink:"/volto-eea-design-system/docs/webdev/Components/Confirm"}},v=[],b={toc:v};function y(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(a.ZP,{usage:(0,o.kt)(s,{mdxType:"Usage"}),showcase:(0,o.kt)(c,{mdxType:"Showcase"}),mdxType:"EEATabs"}))}y.isMDXComponent=!0},7521:(e,t,n)=>{n.d(t,{ZP:()=>i});var r=n(7462),o=(n(7294),n(3905)),a=n(2263);function l(){const{siteConfig:e}=(0,a.Z)(),{customFields:t}=e;return t.storyBookUrl}const s={toc:[],getUrl:l};function i(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("div",{className:"frameWrapper"},(0,o.kt)("iframe",{style:{height:(n.height?n.height:300)+"px"},src:l()+"/iframe.html?id="+n.id,title:"description"})))}i.isMDXComponent=!0},4037:(e,t,n)=>{n.d(t,{ZP:()=>y});var r=n(7462),o=n(7294),a=n(3905),l=n(2389),s=n(9443);const i=function(){const e=(0,o.useContext)(s.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e};var u=n(3810),c=n(6010);const p="tabItem_vU9c";function m(e){var t,n,r;const{lazy:a,block:l,defaultValue:s,values:m,groupId:d,className:f}=e,v=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=m?m:v.map((e=>{let{props:{value:t,label:n}}=e;return{value:t,label:n}})),y=(0,u.lx)(b,((e,t)=>e.value===t.value));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const h=null===s?s:null!=(t=null!=s?s:null==(n=v.find((e=>e.props.default)))?void 0:n.props.value)?t:null==(r=v[0])?void 0:r.props.value;if(null!==h&&!b.some((e=>e.value===h)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+h+'" but none of its children has the corresponding value. Available values are: '+b.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:g,setTabGroupChoices:w}=i(),[C,k]=(0,o.useState)(h),T=[],{blockElementScrollPositionUntilNextRender:x}=(0,u.o5)();if(null!=d){const e=g[d];null!=e&&e!==C&&b.some((t=>t.value===e))&&k(e)}const O=e=>{const t=e.currentTarget,n=T.indexOf(t),r=b[n].value;r!==C&&(x(t),k(r),null!=d&&w(d,r))},E=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=T.indexOf(e.currentTarget)+1;n=T[t]||T[0];break}case"ArrowLeft":{const t=T.indexOf(e.currentTarget)-1;n=T[t]||T[T.length-1];break}}null==(t=n)||t.focus()};return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":l},f)},b.map((e=>{let{value:t,label:n}=e;return o.createElement("li",{role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,className:(0,c.Z)("tabs__item",p,{"tabs__item--active":C===t}),key:t,ref:e=>T.push(e),onKeyDown:E,onFocus:O,onClick:O},null!=n?n:t)}))),a?(0,o.cloneElement)(v.filter((e=>e.props.value===C))[0],{className:"margin-vert--md"}):o.createElement("div",{className:"margin-vert--md"},v.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==C})))))}function d(e){const t=(0,l.Z)();return o.createElement(m,(0,r.Z)({key:String(t)},e))}const f=function(e){let{children:t,hidden:n,className:r}=e;return o.createElement("div",{role:"tabpanel",hidden:n,className:r},t)};function v(e){let t=[{label:"Usage",value:"usage"},{label:"Showcase",value:"showcase"}];return e.api&&t.push({label:"API",value:"api"}),e.playground&&t.push({label:"Playground",value:"playground"}),t}const b={toc:[],getValues:v};function y(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(d,{defaultValue:"usage",values:v(n),mdxType:"Tabs"},(0,a.kt)(f,{value:"usage",mdxType:"TabItem"},n.usage),(0,a.kt)(f,{value:"showcase",mdxType:"TabItem"},n.showcase),(0,a.kt)(f,{value:"api",mdxType:"TabItem"},n.api)))}y.isMDXComponent=!0}}]);