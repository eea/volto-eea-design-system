"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5822],{5680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>y});var r=n(6540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(n),m=o,y=p["".concat(s,".").concat(m)]||p[m]||d[m]||a;return n?r.createElement(y,l(l({ref:t},c),{},{components:n})):r.createElement(y,l({ref:t},c))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:o,l[1]=i;for(var u=2;u<a;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},434:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>y,default:()=>h,frontMatter:()=>m,metadata:()=>v,toc:()=>f});var r=n(8168),o=(n(6540),n(5680)),a=n(3966);const l={toc:[]},i="wrapper";function s(e){let{components:t,...n}=e;return(0,o.yg)(i,(0,r.A)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"The timeline displays a list of events in chronological order."))}s.isMDXComponent=!0;var u=n(3089);const c={toc:[{value:"Default",id:"default",children:[],level:2},{value:"Default reversed",id:"default-reversed",children:[],level:2},{value:"Multiple",id:"multiple",children:[],level:2},{value:"Multiple reversed",id:"multiple-reversed",children:[],level:2}]},p="wrapper";function d(e){let{components:t,...n}=e;return(0,o.yg)(p,(0,r.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"default"},"Default"),(0,o.yg)(u.Ay,{id:"components-timeline--default",height:"150",mdxType:"Iframe"}," "),(0,o.yg)("h2",{id:"default-reversed"},"Default reversed"),(0,o.yg)(u.Ay,{id:"components-timeline--default-reversed",height:"150",mdxType:"Iframe"}," "),(0,o.yg)("h2",{id:"multiple"},"Multiple"),(0,o.yg)(u.Ay,{id:"components-timeline--multiple",height:"450",mdxType:"Iframe"}," "),(0,o.yg)("h2",{id:"multiple-reversed"},"Multiple reversed"),(0,o.yg)(u.Ay,{id:"components-timeline--multiple-reversed",height:"450",mdxType:"Iframe"}," "))}d.isMDXComponent=!0;const m={title:"Timeline",description:"",hide_table_of_contents:!0},y=void 0,v={unversionedId:"webdev/Components/Timeline",id:"webdev/Components/Timeline",title:"Timeline",description:"",source:"@site/docs/webdev/5-Components/28-Timeline.mdx",sourceDirName:"webdev/5-Components",slug:"/webdev/Components/Timeline",permalink:"/volto-eea-design-system/docs/webdev/Components/Timeline",editUrl:"https://github.com/eea/volto-eea-design-system/edit/contribute-documentation/website/docs/webdev/md_components/timeline_components/usage_markdown.md",tags:[],version:"current",sidebarPosition:28,frontMatter:{title:"Timeline",description:"",hide_table_of_contents:!0},sidebar:"sidebar",previous:{title:"Tags",permalink:"/volto-eea-design-system/docs/webdev/Components/Tags"},next:{title:"Video",permalink:"/volto-eea-design-system/docs/webdev/Components/Video"}},f=[],b={toc:f},g="wrapper";function h(e){let{components:t,...n}=e;return(0,o.yg)(g,(0,r.A)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)(a.Ay,{usage:(0,o.yg)(s,{mdxType:"Usage"}),showcase:(0,o.yg)(d,{mdxType:"Showcase"}),mdxType:"EEATabs"}))}h.isMDXComponent=!0},3089:(e,t,n)=>{n.d(t,{Ay:()=>u});var r=n(8168),o=(n(6540),n(5680)),a=n(4586);function l(){const{siteConfig:e}=(0,a.A)(),{customFields:t}=e;return t.storyBookUrl}const i={toc:[],getUrl:l},s="wrapper";function u(e){let{components:t,...n}=e;return(0,o.yg)(s,(0,r.A)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("div",{className:"frameWrapper"},(0,o.yg)("iframe",{style:{height:(n.height?n.height:300)+"px"},src:l()+"/iframe.html?id="+n.id,title:"description"})))}u.isMDXComponent=!0},3966:(e,t,n)=>{n.d(t,{Ay:()=>g});var r=n(8168),o=n(6540),a=n(5680),l=n(2303),i=n(8555);const s=function(){const e=(0,o.useContext)(i.A);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e};var u=n(1211),c=n(53);const p={tabItem:"tabItem_vU9c"};function d(e){const{lazy:t,block:n,defaultValue:r,values:a,groupId:l,className:i}=e,d=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),m=a??d.map((e=>{let{props:{value:t,label:n}}=e;return{value:t,label:n}})),y=(0,u.XI)(m,((e,t)=>e.value===t.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===r?r:r??d.find((e=>e.props.default))?.props.value??d[0]?.props.value;if(null!==v&&!m.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${m.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:f,setTabGroupChoices:b}=s(),[g,h]=(0,o.useState)(v),w=[],{blockElementScrollPositionUntilNextRender:T}=(0,u.a_)();if(null!=l){const e=f[l];null!=e&&e!==g&&m.some((t=>t.value===e))&&h(e)}const x=e=>{const t=e.currentTarget,n=w.indexOf(t),r=m[n].value;r!==g&&(T(t),h(r),null!=l&&b(l,r))},O=e=>{let t=null;switch(e.key){case"ArrowRight":{const n=w.indexOf(e.currentTarget)+1;t=w[n]||w[0];break}case"ArrowLeft":{const n=w.indexOf(e.currentTarget)-1;t=w[n]||w[w.length-1];break}}t?.focus()};return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.A)("tabs",{"tabs--block":n},i)},m.map((e=>{let{value:t,label:n}=e;return o.createElement("li",{role:"tab",tabIndex:g===t?0:-1,"aria-selected":g===t,className:(0,c.A)("tabs__item",p.tabItem,{"tabs__item--active":g===t}),key:t,ref:e=>w.push(e),onKeyDown:O,onFocus:x,onClick:x},n??t)}))),t?(0,o.cloneElement)(d.filter((e=>e.props.value===g))[0],{className:"margin-vert--md"}):o.createElement("div",{className:"margin-vert--md"},d.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==g})))))}function m(e){const t=(0,l.A)();return o.createElement(d,(0,r.A)({key:String(t)},e))}const y=function(e){let{children:t,hidden:n,className:r}=e;return o.createElement("div",{role:"tabpanel",hidden:n,className:r},t)};function v(e){let t=[{label:"Usage",value:"usage"},{label:"Showcase",value:"showcase"}];return e.api&&t.push({label:"API",value:"api"}),e.playground&&t.push({label:"Playground",value:"playground"}),t}const f={toc:[],getValues:v},b="wrapper";function g(e){let{components:t,...n}=e;return(0,a.yg)(b,(0,r.A)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)(m,{defaultValue:"usage",values:v(n),mdxType:"Tabs"},(0,a.yg)(y,{value:"usage",mdxType:"TabItem"},n.usage),(0,a.yg)(y,{value:"showcase",mdxType:"TabItem"},n.showcase),(0,a.yg)(y,{value:"api",mdxType:"TabItem"},n.api)))}g.isMDXComponent=!0}}]);