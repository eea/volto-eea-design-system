"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5386],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var i=n.createContext({}),u=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(a),m=o,h=d["".concat(i,".").concat(m)]||d[m]||c[m]||r;return a?n.createElement(h,l(l({ref:t},p),{},{components:a})):n.createElement(h,l({ref:t},p))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,l=new Array(r);l[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,l[1]=s;for(var u=2;u<r;u++)l[u]=a[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5354:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>u,default:()=>f,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var n=a(7462),o=(a(7294),a(3905)),r=a(4037);const l={toc:[{value:"Static",id:"static",children:[{value:"Styles",id:"styles",children:[],level:4},{value:"Map Objects",id:"map-objects",children:[],level:4},{value:"Colors",id:"colors",children:[],level:4},{value:"Text",id:"text",children:[],level:4}],level:3},{value:"Interactive Maps",id:"interactive-maps",children:[{value:"Pop-ups and markers",id:"pop-ups-and-markers",children:[],level:4}],level:3}]};function s(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"static"},"Static"),(0,o.kt)("p",null,"There are five main design principles in map design. "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"legibility "),(0,o.kt)("li",{parentName:"ul"},"visual contrast "),(0,o.kt)("li",{parentName:"ul"},"figure-ground organization "),(0,o.kt)("li",{parentName:"ul"},"hierarchical organization, and  "),(0,o.kt)("li",{parentName:"ul"},"balance ")),(0,o.kt)("p",null,"Together these principles form a system for seeing and understanding the relative importance of the content in the map and on the page.  "),(0,o.kt)("p",null,"What are the qualities of a good map? "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"clear idea of what the map is trying to demonstrate "),(0,o.kt)("li",{parentName:"ul"},"easy to interpret legend or key "),(0,o.kt)("li",{parentName:"ul"},"good use of symbols to demonstrate a clear point"),(0,o.kt)("li",{parentName:"ul"},"good sources/metadata "),(0,o.kt)("li",{parentName:"ul"},"clear features not overcrowded")),(0,o.kt)("h4",{id:"styles"},"Styles"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"do not use underlined text! This is difficult for low-vision users to read and indicates a possible hyperlink "),(0,o.kt)("li",{parentName:"ul"},"italics should be used as little as possible, for water labels and short labels only "),(0,o.kt)("li",{parentName:"ul"},"bolding of fonts is a good way to call out features, but avoid it for continuous, readable text"),(0,o.kt)("li",{parentName:"ul"},"although ALL CAPS labels stand out, they are harder to read and should be used sparingly")),(0,o.kt)("h4",{id:"map-objects"},"Map Objects"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"avoid overlapping points or annotations, when possible. Try to place them offset from a line "),(0,o.kt)("li",{parentName:"ul"},"there should be visible whitespace between symbols; touching symbols blend together for users with low vision "),(0,o.kt)("li",{parentName:"ul"},"there should be a 2x size difference in levels of information  ")),(0,o.kt)("h4",{id:"colors"},"Colors"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"use a limited color palette."),"\u202fLimited color palette works the best for all UIs, and map UI is not an exception. It\u2019s much easier to create visual harmony with a limited color palette. You should use between 10 to 12 colors for a full-body color palette, depending on the complexity of your map. Choose colors for individuals with visual impairments such as color-blindness (i.e. don\u2019t use red-green color schemes)  "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"try to use the same hue for similar features."),"\u202fFor example, features related to transportation (bus stops, railway stations, etc.) should share the same hue. The same hue will help users to decode visual elements without reading text, and this will help you to create a more cohesive UI. "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"always consider accessibility."),"\u202fMany people have limited color vision, so you also need to take this into account when selecting colors to ensure that you have a proper\u202fcontrast ratio")),(0,o.kt)("h4",{id:"text"},"Text"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"choose fonts that have a variety of styles, such as bold, extra bold, italic, bold italic light, etc to differentiate between different kinds of features on your map  "),(0,o.kt)("li",{parentName:"ul"},"use one version of fonts for the map body and one for the explainer text outside the map")),(0,o.kt)("h3",{id:"interactive-maps"},"Interactive Maps"),(0,o.kt)("p",null,"Interactive maps are high risk, high reward. Highly interactive maps can be too difficult for new users, yet they can also allow users to learn and explore at their own pace. It is always important to test designs on multiple people with varying degrees of technical expertise to see how they interact differently with the layout. Interactive map design should reflect what the cartographer is trying to convey (beauty vs. function) and never sacrifice visual hierarchy or great styling for interactivity. "),(0,o.kt)("p",null,"Tips for designing effective interactive maps:  "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"simplify the interface  "),(0,o.kt)("li",{parentName:"ul"},"panels should be the minimum possible size so they don\u2019t clutter the space "),(0,o.kt)("li",{parentName:"ul"},"don\u2019t innovate to the point where users don\u2019t know what to do  "),(0,o.kt)("li",{parentName:"ul"},"use panel opacity and margins to help them blend with your basemap and look cohesive  "),(0,o.kt)("li",{parentName:"ul"},"leave space for the maps to be used on mobile devices. This means avoiding permanent panels  ")),(0,o.kt)("h4",{id:"pop-ups-and-markers"},"Pop-ups and markers"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"keep pop-ups concise "),(0,o.kt)("li",{parentName:"ul"},"only one pop-up on the screen at a time (generally) "),(0,o.kt)("li",{parentName:"ul"},"cluster markers for better readability  "),(0,o.kt)("li",{parentName:"ul"},"use a legend when you have multiple types of markers  "),(0,o.kt)("li",{parentName:"ul"},"remove unnecessary padding and margins from popups "),(0,o.kt)("li",{parentName:"ul"},"use a slight shadow to \u201clift\u201d pop-ups off the map")))}s.isMDXComponent=!0;const i={title:"Maps",description:"",hide_table_of_contents:!0},u=void 0,p={unversionedId:"webdev/Components/Visuals/Maps",id:"webdev/Components/Visuals/Maps",title:"Maps",description:"",source:"@site/docs/webdev/5-Components/25-Visuals/2-Maps.mdx",sourceDirName:"webdev/5-Components/25-Visuals",slug:"/webdev/Components/Visuals/Maps",permalink:"/volto-eea-design-system/docs/webdev/Components/Visuals/Maps",editUrl:"https://github.com/eea/volto-eea-design-system/edit/contribute-documentation/website/docs/webdev/md_components/maps_components/usage_markdown.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Maps",description:"",hide_table_of_contents:!0},sidebar:"sidebar",previous:{title:"Charts",permalink:"/volto-eea-design-system/docs/webdev/Components/Visuals/Charts"},next:{title:"Content",permalink:"/volto-eea-design-system/docs/webdev/Components/Content"}},c=[],d=(m="Showcase",function(e){return console.warn("Component "+m+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)});var m;const h={toc:c};function f(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(r.ZP,{usage:(0,o.kt)(s,{mdxType:"Usage"}),showcase:(0,o.kt)(d,{mdxType:"Showcase"}),mdxType:"EEATabs"}))}f.isMDXComponent=!0},4037:(e,t,a)=>{a.d(t,{ZP:()=>b});var n=a(7462),o=a(7294),r=a(3905),l=a(2389),s=a(9443);const i=function(){const e=(0,o.useContext)(s.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e};var u=a(3810),p=a(6010);const c="tabItem_vU9c";function d(e){const{lazy:t,block:a,defaultValue:n,values:r,groupId:l,className:s}=e,d=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),m=r??d.map((e=>{let{props:{value:t,label:a}}=e;return{value:t,label:a}})),h=(0,u.lx)(m,((e,t)=>e.value===t.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const f=null===n?n:n??d.find((e=>e.props.default))?.props.value??d[0]?.props.value;if(null!==f&&!m.some((e=>e.value===f)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${f}" but none of its children has the corresponding value. Available values are: ${m.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:b}=i(),[y,k]=(0,o.useState)(f),g=[],{blockElementScrollPositionUntilNextRender:w}=(0,u.o5)();if(null!=l){const e=v[l];null!=e&&e!==y&&m.some((t=>t.value===e))&&k(e)}const N=e=>{const t=e.currentTarget,a=g.indexOf(t),n=m[a].value;n!==y&&(w(t),k(n),null!=l&&b(l,n))},x=e=>{let t=null;switch(e.key){case"ArrowRight":{const a=g.indexOf(e.currentTarget)+1;t=g[a]||g[0];break}case"ArrowLeft":{const a=g.indexOf(e.currentTarget)-1;t=g[a]||g[g.length-1];break}}t?.focus()};return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,p.Z)("tabs",{"tabs--block":a},s)},m.map((e=>{let{value:t,label:a}=e;return o.createElement("li",{role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,className:(0,p.Z)("tabs__item",c,{"tabs__item--active":y===t}),key:t,ref:e=>g.push(e),onKeyDown:x,onFocus:N,onClick:N},a??t)}))),t?(0,o.cloneElement)(d.filter((e=>e.props.value===y))[0],{className:"margin-vert--md"}):o.createElement("div",{className:"margin-vert--md"},d.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==y})))))}function m(e){const t=(0,l.Z)();return o.createElement(d,(0,n.Z)({key:String(t)},e))}const h=function(e){let{children:t,hidden:a,className:n}=e;return o.createElement("div",{role:"tabpanel",hidden:a,className:n},t)};function f(e){let t=[{label:"Usage",value:"usage"},{label:"Showcase",value:"showcase"}];return e.api&&t.push({label:"API",value:"api"}),e.playground&&t.push({label:"Playground",value:"playground"}),t}const v={toc:[],getValues:f};function b(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},v,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(m,{defaultValue:"usage",values:f(a),mdxType:"Tabs"},(0,r.kt)(h,{value:"usage",mdxType:"TabItem"},a.usage),(0,r.kt)(h,{value:"showcase",mdxType:"TabItem"},a.showcase),(0,r.kt)(h,{value:"api",mdxType:"TabItem"},a.api)))}b.isMDXComponent=!0}}]);