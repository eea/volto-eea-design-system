"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5435],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),u=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||r;return n?o.createElement(h,l(l({ref:t},c),{},{components:n})):o.createElement(h,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var u=2;u<r;u++)l[u]=n[u];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},89:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>p,default:()=>b,frontMatter:()=>d,metadata:()=>m,toc:()=>h});var o=n(7462),a=(n(7294),n(3905)),r=n(4037);const l={toc:[{value:"Primary Button",id:"primary-button",children:[{value:"Do&#39;s",id:"dos",children:[],level:3},{value:"Don&#39;ts",id:"donts",children:[],level:3},{value:"When not to use",id:"when-not-to-use",children:[],level:3}],level:2},{value:"Secondary Button",id:"secondary-button",children:[{value:"Do&#39;s",id:"dos-1",children:[],level:3},{value:"Don&#39;ts",id:"donts-1",children:[],level:3}],level:2},{value:"Text link Button",id:"text-link-button",children:[{value:"When to use",id:"when-to-use",children:[],level:3},{value:"When not to use",id:"when-not-to-use-1",children:[],level:3}],level:2}]};function i(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Buttons trigger an action in a web page. There are 4 variants of the button component with different levels of importance and usages."),(0,a.kt)("h2",{id:"primary-button"},"Primary Button"),(0,a.kt)("p",null,"Use for basic and successful actions. They direct the user\u2019s attention to the primary action the application is suggesting that the user take."),(0,a.kt)("h3",{id:"dos"},"Do's"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"make sure the button\u2018s microcopy represents the action such as \u201cSubmit\u201c or \u201cRegister\u201c"),(0,a.kt)("li",{parentName:"ul"},"use an icon only when it is necessary"),(0,a.kt)("li",{parentName:"ul"},"use to perform a new action, task, move to next step")),(0,a.kt)("h3",{id:"donts"},"Don'ts"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"don't assign an action that should be assigned for a CTA (Call To Action) or other variations of buttons"),(0,a.kt)("li",{parentName:"ul"},"don't use an icon when it is not relevant or necessary to the action")),(0,a.kt)("h3",{id:"when-not-to-use"},"When not to use"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"don't use for navigation"),(0,a.kt)("li",{parentName:"ul"},"don't use for downloads"),(0,a.kt)("li",{parentName:"ul"},"don't use when the primary action is negative - use secondary button"),(0,a.kt)("li",{parentName:"ul"},"don't use when the action can't be undone, such as delete")),(0,a.kt)("h2",{id:"secondary-button"},"Secondary Button"),(0,a.kt)("p",null,"Use for medium-emphasis actions. They contain actions that are important but aren\u2019t the primary action. They are used to indicate a secondary action that compliments a primary action or to reduce visual noise when there are many actions of equal importance on the page."),(0,a.kt)("h3",{id:"dos-1"},"Do's"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'ensure the button performs an action, such as "Cancel", "Delete," "Remove" or "Replace" as the secondary action next to the primary button'),(0,a.kt)("li",{parentName:"ul"},"use an icon only when it is necessary")),(0,a.kt)("h3",{id:"donts-1"},"Don'ts"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"don't use for primary positive actions \u2013 such as Submit, Send, Accept, Apply or navigation"),(0,a.kt)("li",{parentName:"ul"},"don't use on its own"),(0,a.kt)("li",{parentName:"ul"},"don't use for navigation"),(0,a.kt)("li",{parentName:"ul"},"don't use an icon when it is not relevant or necessary to the action")),(0,a.kt)("h2",{id:"text-link-button"},"Text link Button"),(0,a.kt)("p",null,"Use for low-emphasis actions or for buttons that could have a long length text. It can be grouped with other buttons or placed independently."),(0,a.kt)("h3",{id:"when-to-use"},"When to use"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"use with low emphasis in a button group"),(0,a.kt)("li",{parentName:"ul"},"use on pages/cards when the main focus should be the content and not the button"),(0,a.kt)("li",{parentName:"ul"},"when there is a single action intended")),(0,a.kt)("h3",{id:"when-not-to-use-1"},"When not to use"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"do not use for navigation purpose")))}i.isMDXComponent=!0;var s=n(7521);const u={toc:[{value:"Default Button",id:"default-button",children:[],level:2},{value:"Primary Button",id:"primary-button",children:[],level:2},{value:"Secondary Button",id:"secondary-button",children:[],level:2},{value:"Inverted Buttons",id:"inverted-buttons",children:[],level:2},{value:"Labeled Button",id:"labeled-button",children:[],level:2},{value:"Link",id:"link",children:[],level:2}]};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"default-button"},"Default Button"),(0,a.kt)(s.ZP,{id:"components-call-to-action--default&args=",height:"150",mdxType:"Iframe"}," "),(0,a.kt)("h2",{id:"primary-button"},"Primary Button"),(0,a.kt)(s.ZP,{id:"components-call-to-action--primary&args=",height:"150",mdxType:"Iframe"}," "),(0,a.kt)("h2",{id:"secondary-button"},"Secondary Button"),(0,a.kt)(s.ZP,{id:"components-call-to-action--secondary&args=",height:"150",mdxType:"Iframe"}," "),(0,a.kt)("h2",{id:"inverted-buttons"},"Inverted Buttons"),(0,a.kt)(s.ZP,{id:"components-call-to-action--inverted&args=",height:"400",mdxType:"Iframe"}," "),(0,a.kt)("h2",{id:"labeled-button"},"Labeled Button"),(0,a.kt)(s.ZP,{id:"components-call-to-action--labeled&args=",height:"150",mdxType:"Iframe"}," "),(0,a.kt)("h2",{id:"link"},"Link"),(0,a.kt)(s.ZP,{id:"components-call-to-action--link&args=",height:"150",mdxType:"Iframe"}," "))}c.isMDXComponent=!0;const d={title:"Buttons",description:"",hide_table_of_contents:!0},p=void 0,m={unversionedId:"webdev/Components/Buttons",id:"webdev/Components/Buttons",title:"Buttons",description:"",source:"@site/docs/webdev/5-Components/3-Buttons.mdx",sourceDirName:"webdev/5-Components",slug:"/webdev/Components/Buttons",permalink:"/volto-eea-design-system/docs/webdev/Components/Buttons",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Buttons",description:"",hide_table_of_contents:!0},sidebar:"sidebar",previous:{title:"Breadcrumb",permalink:"/volto-eea-design-system/docs/webdev/Components/Breadcrumb"},next:{title:"Card",permalink:"/volto-eea-design-system/docs/webdev/Components/Cards"}},h=[],v={toc:h};function b(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(r.ZP,{usage:(0,a.kt)(i,{mdxType:"ButtonUsage"}),showcase:(0,a.kt)(c,{mdxType:"ButtonShowcase"}),mdxType:"Tabs"}))}b.isMDXComponent=!0},7521:(e,t,n)=>{n.d(t,{ZP:()=>s});var o=n(7462),a=(n(7294),n(3905)),r=n(2263);function l(){const{siteConfig:e}=(0,r.Z)(),{customFields:t}=e;return t.storyBookUrl}const i={toc:[],getUrl:l};function s(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("div",{className:"frameWrapper"},(0,a.kt)("iframe",{style:{height:(n.height?n.height:300)+"px"},src:l()+"/iframe.html?id="+n.id,title:"description"})))}s.isMDXComponent=!0},4037:(e,t,n)=>{n.d(t,{ZP:()=>f});var o=n(7462),a=n(7294),r=n(3905),l=n(2389),i=n(9443);const s=function(){const e=(0,a.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e};var u=n(3810),c=n(6010);const d="tabItem_vU9c";function p(e){var t,n,o;const{lazy:r,block:l,defaultValue:i,values:p,groupId:m,className:h}=e,v=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=p?p:v.map((e=>{let{props:{value:t,label:n}}=e;return{value:t,label:n}})),f=(0,u.lx)(b,((e,t)=>e.value===t.value));if(f.length>0)throw new Error('Docusaurus error: Duplicate values "'+f.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const y=null===i?i:null!=(t=null!=i?i:null==(n=v.find((e=>e.props.default)))?void 0:n.props.value)?t:null==(o=v[0])?void 0:o.props.value;if(null!==y&&!b.some((e=>e.value===y)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+b.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:k,setTabGroupChoices:g}=s(),[w,T]=(0,a.useState)(y),x=[],{blockElementScrollPositionUntilNextRender:N}=(0,u.o5)();if(null!=m){const e=k[m];null!=e&&e!==w&&b.some((t=>t.value===e))&&T(e)}const D=e=>{const t=e.currentTarget,n=x.indexOf(t),o=b[n].value;o!==w&&(N(t),T(o),null!=m&&g(m,o))},B=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=x.indexOf(e.currentTarget)+1;n=x[t]||x[0];break}case"ArrowLeft":{const t=x.indexOf(e.currentTarget)-1;n=x[t]||x[x.length-1];break}}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":l},h)},b.map((e=>{let{value:t,label:n}=e;return a.createElement("li",{role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,className:(0,c.Z)("tabs__item",d,{"tabs__item--active":w===t}),key:t,ref:e=>x.push(e),onKeyDown:B,onFocus:D,onClick:D},null!=n?n:t)}))),r?(0,a.cloneElement)(v.filter((e=>e.props.value===w))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},v.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function m(e){const t=(0,l.Z)();return a.createElement(p,(0,o.Z)({key:String(t)},e))}const h=function(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",hidden:n,className:o},t)};function v(e){let t=[{label:"Usage",value:"usage"},{label:"Showcase",value:"showcase"}];return e.api&&t.push({label:"API",value:"api"}),e.playground&&t.push({label:"Playground",value:"playground"}),t}const b={toc:[],getValues:v};function f(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(m,{defaultValue:"usage",values:v(n),mdxType:"Tabs"},(0,r.kt)(h,{value:"usage",mdxType:"TabItem"},n.usage),(0,r.kt)(h,{value:"showcase",mdxType:"TabItem"},n.showcase),(0,r.kt)(h,{value:"api",mdxType:"TabItem"},n.api)))}f.isMDXComponent=!0}}]);