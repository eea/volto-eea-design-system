"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3822],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=o.createContext({}),u=function(e){var t=o.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return o.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,h=d["".concat(i,".").concat(m)]||d[m]||p[m]||a;return n?o.createElement(h,l(l({ref:t},c),{},{components:n})):o.createElement(h,l({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var u=2;u<a;u++)l[u]=n[u];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8047:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>d,default:()=>v,frontMatter:()=>p,metadata:()=>m,toc:()=>h});var o=n(7462),r=(n(7294),n(3905)),a=n(4037);const l={toc:[{value:"Do&#39;s",id:"dos",children:[],level:3},{value:"Don&#39;ts",id:"donts",children:[],level:3},{value:"When to use",id:"when-to-use",children:[],level:3},{value:"When not to use",id:"when-not-to-use",children:[],level:3}]};function s(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Cards component is used as an entry point to more detailed information. The component can include various sets of elements to serve users' specific needs."),(0,r.kt)("h3",{id:"dos"},"Do's"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"use cards to emphasize on contents"),(0,r.kt)("li",{parentName:"ul"},"only display the most relevant information on each card\nillustration: card with a thumbnail, title, description"),(0,r.kt)("li",{parentName:"ul"},"keep the amount of links on the cards as low as possible")),(0,r.kt)("h3",{id:"donts"},"Don'ts"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"overuse cards"),(0,r.kt)("li",{parentName:"ul"},"limit the amount of cards to small groups of items"),(0,r.kt)("li",{parentName:"ul"},"limit to 3-4 cards within a row"),(0,r.kt)("li",{parentName:"ul"},"display too many links on a cards, the main and ideally only action on card should remain to navigate to the content it represent")),(0,r.kt)("h3",{id:"when-to-use"},"When to use"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"browsing for information (as opposed to searching)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"grouping heterogeneous types of content")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"allowing users to scan through content in small portions"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"to display structured content"),(0,r.kt)("li",{parentName:"ul"},"to make information discoverable"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"the user goals that the card-based web design best responds to:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"scrolling through"),(0,r.kt)("li",{parentName:"ul"},"scanning through"),(0,r.kt)("li",{parentName:"ul"},"browsing through")))),(0,r.kt)("h3",{id:"when-not-to-use"},"When not to use"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"searching for information (as opposed to browsing)"),(0,r.kt)("li",{parentName:"ul"},"on small screen display avoid using too many cards as they force users to scroll down and rely on their short-term memory. This creates a cognitive overload, a negative user experience")))}s.isMDXComponent=!0;var i=n(7521);const u={toc:[]};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(i.ZP,{height:"400",id:"components-card-default--default",mdxType:"Iframe"}," "))}c.isMDXComponent=!0;const p={title:"Card",description:"",hide_table_of_contents:!0},d=void 0,m={unversionedId:"webdev/Components/Cards",id:"webdev/Components/Cards",title:"Card",description:"",source:"@site/docs/webdev/5-Components/4-Cards.mdx",sourceDirName:"webdev/5-Components",slug:"/webdev/Components/Cards",permalink:"/volto-eea-design-system/docs/webdev/Components/Cards",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Card",description:"",hide_table_of_contents:!0},sidebar:"sidebar",previous:{title:"Buttons",permalink:"/volto-eea-design-system/docs/webdev/Components/Buttons"},next:{title:"Comment",permalink:"/volto-eea-design-system/docs/webdev/Components/Comment"}},h=[],f={toc:h};function v(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(a.ZP,{usage:(0,r.kt)(s,{mdxType:"Usage"}),showcase:(0,r.kt)(c,{mdxType:"Showcase"}),mdxType:"EEATabs"}))}v.isMDXComponent=!0},7521:(e,t,n)=>{n.d(t,{ZP:()=>i});var o=n(7462),r=(n(7294),n(3905)),a=n(2263);function l(){const{siteConfig:e}=(0,a.Z)(),{customFields:t}=e;return t.storyBookUrl}const s={toc:[],getUrl:l};function i(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"frameWrapper"},(0,r.kt)("iframe",{style:{height:(n.height?n.height:300)+"px"},src:l()+"/iframe.html?id="+n.id,title:"description"})))}i.isMDXComponent=!0},4037:(e,t,n)=>{n.d(t,{ZP:()=>b});var o=n(7462),r=n(7294),a=n(3905),l=n(2389),s=n(9443);const i=function(){const e=(0,r.useContext)(s.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e};var u=n(3810),c=n(6010);const p="tabItem_vU9c";function d(e){var t,n,o;const{lazy:a,block:l,defaultValue:s,values:d,groupId:m,className:h}=e,f=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=d?d:f.map((e=>{let{props:{value:t,label:n}}=e;return{value:t,label:n}})),b=(0,u.lx)(v,((e,t)=>e.value===t.value));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const y=null===s?s:null!=(t=null!=s?s:null==(n=f.find((e=>e.props.default)))?void 0:n.props.value)?t:null==(o=f[0])?void 0:o.props.value;if(null!==y&&!v.some((e=>e.value===y)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+v.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:g,setTabGroupChoices:k}=i(),[w,T]=(0,r.useState)(y),N=[],{blockElementScrollPositionUntilNextRender:C}=(0,u.o5)();if(null!=m){const e=g[m];null!=e&&e!==w&&v.some((t=>t.value===e))&&T(e)}const x=e=>{const t=e.currentTarget,n=N.indexOf(t),o=v[n].value;o!==w&&(C(t),T(o),null!=m&&k(m,o))},O=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=N.indexOf(e.currentTarget)+1;n=N[t]||N[0];break}case"ArrowLeft":{const t=N.indexOf(e.currentTarget)-1;n=N[t]||N[N.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":l},h)},v.map((e=>{let{value:t,label:n}=e;return r.createElement("li",{role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,className:(0,c.Z)("tabs__item",p,{"tabs__item--active":w===t}),key:t,ref:e=>N.push(e),onKeyDown:O,onFocus:x,onClick:x},null!=n?n:t)}))),a?(0,r.cloneElement)(f.filter((e=>e.props.value===w))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},f.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function m(e){const t=(0,l.Z)();return r.createElement(d,(0,o.Z)({key:String(t)},e))}const h=function(e){let{children:t,hidden:n,className:o}=e;return r.createElement("div",{role:"tabpanel",hidden:n,className:o},t)};function f(e){let t=[{label:"Usage",value:"usage"},{label:"Showcase",value:"showcase"}];return e.api&&t.push({label:"API",value:"api"}),e.playground&&t.push({label:"Playground",value:"playground"}),t}const v={toc:[],getValues:f};function b(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(m,{defaultValue:"usage",values:f(n),mdxType:"Tabs"},(0,a.kt)(h,{value:"usage",mdxType:"TabItem"},n.usage),(0,a.kt)(h,{value:"showcase",mdxType:"TabItem"},n.showcase),(0,a.kt)(h,{value:"api",mdxType:"TabItem"},n.api)))}b.isMDXComponent=!0}}]);