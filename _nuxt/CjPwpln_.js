import{d as on,j as B,U as sn,h as ln}from"./CJzLMGCF.js";/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */function cn(t,e,n){return(e=un(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Xt(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Xt(Object(n),!0).forEach(function(a){cn(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Xt(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}function fn(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var a=n.call(t,e);if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function un(t){var e=fn(t,"string");return typeof e=="symbol"?e:e+""}const $t=()=>{};let zt={},Ae={},Se=null,ke={mark:$t,measure:$t};try{typeof window<"u"&&(zt=window),typeof document<"u"&&(Ae=document),typeof MutationObserver<"u"&&(Se=MutationObserver),typeof performance<"u"&&(ke=performance)}catch{}const{userAgent:Kt=""}=zt.navigator||{},F=zt,b=Ae,qt=Se,et=ke;F.document;const L=!!b.documentElement&&!!b.head&&typeof b.addEventListener=="function"&&typeof b.createElement=="function",Oe=~Kt.indexOf("MSIE")||~Kt.indexOf("Trident/");var dn=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,mn=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,Pe={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},pn={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},Ce=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],w="classic",lt="duotone",gn="sharp",hn="sharp-duotone",Ie=[w,lt,gn,hn],bn={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},yn={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},vn=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),xn={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},wn=["fak","fa-kit","fakd","fa-kit-duotone"],Qt={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},An=["kit"],Sn={kit:{"fa-kit":"fak"}},kn=["fak","fakd"],On={kit:{fak:"fa-kit"}},Jt={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},nt={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Pn=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],Cn=["fak","fa-kit","fakd","fa-kit-duotone"],In={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},En={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},Nn={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},vt={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},Tn=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],xt=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...Pn,...Tn],Mn=["solid","regular","light","thin","duotone","brands"],Ee=[1,2,3,4,5,6,7,8,9,10],Ln=Ee.concat([11,12,13,14,15,16,17,18,19,20]),_n=[...Object.keys(Nn),...Mn,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",nt.GROUP,nt.SWAP_OPACITY,nt.PRIMARY,nt.SECONDARY].concat(Ee.map(t=>"".concat(t,"x"))).concat(Ln.map(t=>"w-".concat(t))),Fn={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}};const T="___FONT_AWESOME___",wt=16,Ne="fa",Te="svg-inline--fa",U="data-fa-i2svg",At="data-fa-pseudo-element",zn="data-fa-pseudo-element-pending",Dt="data-prefix",Rt="data-icon",Zt="fontawesome-i2svg",Dn="async",Rn=["HTML","HEAD","STYLE","SCRIPT"],Me=(()=>{try{return!0}catch{return!1}})();function J(t){return new Proxy(t,{get(e,n){return n in e?e[n]:e[w]}})}const Le=l({},Pe);Le[w]=l(l(l(l({},{"fa-duotone":"duotone"}),Pe[w]),Qt.kit),Qt["kit-duotone"]);const jn=J(Le),St=l({},xn);St[w]=l(l(l(l({},{duotone:"fad"}),St[w]),Jt.kit),Jt["kit-duotone"]);const te=J(St),kt=l({},vt);kt[w]=l(l({},kt[w]),On.kit);const jt=J(kt),Ot=l({},En);Ot[w]=l(l({},Ot[w]),Sn.kit);J(Ot);const Un=dn,_e="fa-layers-text",Yn=mn,Bn=l({},bn);J(Bn);const Wn=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],mt=pn,Hn=[...An,..._n],$=F.FontAwesomeConfig||{};function Gn(t){var e=b.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function Vn(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}b&&typeof b.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[n,a]=e;const r=Vn(Gn(n));r!=null&&($[a]=r)});const Fe={styleDefault:"solid",familyDefault:w,cssPrefix:Ne,replacementClass:Te,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};$.familyPrefix&&($.cssPrefix=$.familyPrefix);const G=l(l({},Fe),$);G.autoReplaceSvg||(G.observeMutations=!1);const f={};Object.keys(Fe).forEach(t=>{Object.defineProperty(f,t,{enumerable:!0,set:function(e){G[t]=e,K.forEach(n=>n(f))},get:function(){return G[t]}})});Object.defineProperty(f,"familyPrefix",{enumerable:!0,set:function(t){G.cssPrefix=t,K.forEach(e=>e(f))},get:function(){return G.cssPrefix}});F.FontAwesomeConfig=f;const K=[];function Xn(t){return K.push(t),()=>{K.splice(K.indexOf(t),1)}}const _=wt,I={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function $n(t){if(!t||!L)return;const e=b.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;const n=b.head.childNodes;let a=null;for(let r=n.length-1;r>-1;r--){const i=n[r],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(a=i)}return b.head.insertBefore(e,a),t}const Kn="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function q(){let t=12,e="";for(;t-- >0;)e+=Kn[Math.random()*62|0];return e}function V(t){const e=[];for(let n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function Ut(t){return t.classList?V(t.classList):(t.getAttribute("class")||"").split(" ").filter(e=>e)}function ze(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function qn(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,'="').concat(ze(t[n]),'" '),"").trim()}function ct(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,": ").concat(t[n].trim(),";"),"")}function Yt(t){return t.size!==I.size||t.x!==I.x||t.y!==I.y||t.rotate!==I.rotate||t.flipX||t.flipY}function Qn(t){let{transform:e,containerWidth:n,iconWidth:a}=t;const r={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),s="rotate(".concat(e.rotate," 0 0)"),u={transform:"".concat(i," ").concat(o," ").concat(s)},c={transform:"translate(".concat(a/2*-1," -256)")};return{outer:r,inner:u,path:c}}function Jn(t){let{transform:e,width:n=wt,height:a=wt,startCentered:r=!1}=t,i="";return r&&Oe?i+="translate(".concat(e.x/_-n/2,"em, ").concat(e.y/_-a/2,"em) "):r?i+="translate(calc(-50% + ".concat(e.x/_,"em), calc(-50% + ").concat(e.y/_,"em)) "):i+="translate(".concat(e.x/_,"em, ").concat(e.y/_,"em) "),i+="scale(".concat(e.size/_*(e.flipX?-1:1),", ").concat(e.size/_*(e.flipY?-1:1),") "),i+="rotate(".concat(e.rotate,"deg) "),i}var Zn=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}`;function De(){const t=Ne,e=Te,n=f.cssPrefix,a=f.replacementClass;let r=Zn;if(n!==t||a!==e){const i=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),s=new RegExp("\\.".concat(e),"g");r=r.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(a))}return r}let ee=!1;function pt(){f.autoAddCss&&!ee&&($n(De()),ee=!0)}var ta={mixout(){return{dom:{css:De,insertCss:pt}}},hooks(){return{beforeDOMElementCreation(){pt()},beforeI2svg(){pt()}}}};const M=F||{};M[T]||(M[T]={});M[T].styles||(M[T].styles={});M[T].hooks||(M[T].hooks={});M[T].shims||(M[T].shims=[]);var E=M[T];const Re=[],je=function(){b.removeEventListener("DOMContentLoaded",je),it=1,Re.map(t=>t())};let it=!1;L&&(it=(b.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(b.readyState),it||b.addEventListener("DOMContentLoaded",je));function ea(t){L&&(it?setTimeout(t,0):Re.push(t))}function Z(t){const{tag:e,attributes:n={},children:a=[]}=t;return typeof t=="string"?ze(t):"<".concat(e," ").concat(qn(n),">").concat(a.map(Z).join(""),"</").concat(e,">")}function ne(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var gt=function(e,n,a,r){var i=Object.keys(e),o=i.length,s=n,u,c,m;for(a===void 0?(u=1,m=e[i[0]]):(u=0,m=a);u<o;u++)c=i[u],m=s(m,e[c],c,e);return m};function na(t){const e=[];let n=0;const a=t.length;for(;n<a;){const r=t.charCodeAt(n++);if(r>=55296&&r<=56319&&n<a){const i=t.charCodeAt(n++);(i&64512)==56320?e.push(((r&1023)<<10)+(i&1023)+65536):(e.push(r),n--)}else e.push(r)}return e}function Pt(t){const e=na(t);return e.length===1?e[0].toString(16):null}function aa(t,e){const n=t.length;let a=t.charCodeAt(e),r;return a>=55296&&a<=56319&&n>e+1&&(r=t.charCodeAt(e+1),r>=56320&&r<=57343)?(a-55296)*1024+r-56320+65536:a}function ae(t){return Object.keys(t).reduce((e,n)=>{const a=t[n];return!!a.icon?e[a.iconName]=a.icon:e[n]=a,e},{})}function Ct(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:a=!1}=n,r=ae(e);typeof E.hooks.addPack=="function"&&!a?E.hooks.addPack(t,ae(e)):E.styles[t]=l(l({},E.styles[t]||{}),r),t==="fas"&&Ct("fa",e)}const{styles:Q,shims:ra}=E,Ue=Object.keys(jt),ia=Ue.reduce((t,e)=>(t[e]=Object.keys(jt[e]),t),{});let Bt=null,Ye={},Be={},We={},He={},Ge={};function oa(t){return~Hn.indexOf(t)}function sa(t,e){const n=e.split("-"),a=n[0],r=n.slice(1).join("-");return a===t&&r!==""&&!oa(r)?r:null}const Ve=()=>{const t=a=>gt(Q,(r,i,o)=>(r[o]=gt(i,a,{}),r),{});Ye=t((a,r,i)=>(r[3]&&(a[r[3]]=i),r[2]&&r[2].filter(s=>typeof s=="number").forEach(s=>{a[s.toString(16)]=i}),a)),Be=t((a,r,i)=>(a[i]=i,r[2]&&r[2].filter(s=>typeof s=="string").forEach(s=>{a[s]=i}),a)),Ge=t((a,r,i)=>{const o=r[2];return a[i]=i,o.forEach(s=>{a[s]=i}),a});const e="far"in Q||f.autoFetchSvg,n=gt(ra,(a,r)=>{const i=r[0];let o=r[1];const s=r[2];return o==="far"&&!e&&(o="fas"),typeof i=="string"&&(a.names[i]={prefix:o,iconName:s}),typeof i=="number"&&(a.unicodes[i.toString(16)]={prefix:o,iconName:s}),a},{names:{},unicodes:{}});We=n.names,He=n.unicodes,Bt=ft(f.styleDefault,{family:f.familyDefault})};Xn(t=>{Bt=ft(t.styleDefault,{family:f.familyDefault})});Ve();function Wt(t,e){return(Ye[t]||{})[e]}function la(t,e){return(Be[t]||{})[e]}function j(t,e){return(Ge[t]||{})[e]}function Xe(t){return We[t]||{prefix:null,iconName:null}}function ca(t){const e=He[t],n=Wt("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function z(){return Bt}const $e=()=>({prefix:null,iconName:null,rest:[]});function fa(t){let e=w;const n=Ue.reduce((a,r)=>(a[r]="".concat(f.cssPrefix,"-").concat(r),a),{});return Ie.forEach(a=>{(t.includes(n[a])||t.some(r=>ia[a].includes(r)))&&(e=a)}),e}function ft(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=w}=e,a=jn[n][t];if(n===lt&&!t)return"fad";const r=te[n][t]||te[n][a],i=t in E.styles?t:null;return r||i||null}function ua(t){let e=[],n=null;return t.forEach(a=>{const r=sa(f.cssPrefix,a);r?n=r:a&&e.push(a)}),{iconName:n,rest:e}}function re(t){return t.sort().filter((e,n,a)=>a.indexOf(e)===n)}function ut(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=e;let a=null;const r=xt.concat(Cn),i=re(t.filter(h=>r.includes(h))),o=re(t.filter(h=>!xt.includes(h))),s=i.filter(h=>(a=h,!Ce.includes(h))),[u=null]=s,c=fa(i),m=l(l({},ua(o)),{},{prefix:ft(u,{family:c})});return l(l(l({},m),ga({values:t,family:c,styles:Q,config:f,canonical:m,givenPrefix:a})),da(n,a,m))}function da(t,e,n){let{prefix:a,iconName:r}=n;if(t||!a||!r)return{prefix:a,iconName:r};const i=e==="fa"?Xe(r):{},o=j(a,r);return r=i.iconName||o||r,a=i.prefix||a,a==="far"&&!Q.far&&Q.fas&&!f.autoFetchSvg&&(a="fas"),{prefix:a,iconName:r}}const ma=Ie.filter(t=>t!==w||t!==lt),pa=Object.keys(vt).filter(t=>t!==w).map(t=>Object.keys(vt[t])).flat();function ga(t){const{values:e,family:n,canonical:a,givenPrefix:r="",styles:i={},config:o={}}=t,s=n===lt,u=e.includes("fa-duotone")||e.includes("fad"),c=o.familyDefault==="duotone",m=a.prefix==="fad"||a.prefix==="fa-duotone";if(!s&&(u||c||m)&&(a.prefix="fad"),(e.includes("fa-brands")||e.includes("fab"))&&(a.prefix="fab"),!a.prefix&&ma.includes(n)&&(Object.keys(i).find(g=>pa.includes(g))||o.autoFetchSvg)){const g=vn.get(n).defaultShortPrefixId;a.prefix=g,a.iconName=j(a.prefix,a.iconName)||a.iconName}return(a.prefix==="fa"||r==="fa")&&(a.prefix=z()||"fas"),a}class ha{constructor(){this.definitions={}}add(){for(var e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];const r=n.reduce(this._pullDefinitions,{});Object.keys(r).forEach(i=>{this.definitions[i]=l(l({},this.definitions[i]||{}),r[i]),Ct(i,r[i]);const o=jt[w][i];o&&Ct(o,r[i]),Ve()})}reset(){this.definitions={}}_pullDefinitions(e,n){const a=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(a).map(r=>{const{prefix:i,iconName:o,icon:s}=a[r],u=s[2];e[i]||(e[i]={}),u.length>0&&u.forEach(c=>{typeof c=="string"&&(e[i][c]=s)}),e[i][o]=s}),e}}let ie=[],W={};const H={},ba=Object.keys(H);function ya(t,e){let{mixoutsTo:n}=e;return ie=t,W={},Object.keys(H).forEach(a=>{ba.indexOf(a)===-1&&delete H[a]}),ie.forEach(a=>{const r=a.mixout?a.mixout():{};if(Object.keys(r).forEach(i=>{typeof r[i]=="function"&&(n[i]=r[i]),typeof r[i]=="object"&&Object.keys(r[i]).forEach(o=>{n[i]||(n[i]={}),n[i][o]=r[i][o]})}),a.hooks){const i=a.hooks();Object.keys(i).forEach(o=>{W[o]||(W[o]=[]),W[o].push(i[o])})}a.provides&&a.provides(H)}),n}function It(t,e){for(var n=arguments.length,a=new Array(n>2?n-2:0),r=2;r<n;r++)a[r-2]=arguments[r];return(W[t]||[]).forEach(o=>{e=o.apply(null,[e,...a])}),e}function Y(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),a=1;a<e;a++)n[a-1]=arguments[a];(W[t]||[]).forEach(i=>{i.apply(null,n)})}function D(){const t=arguments[0],e=Array.prototype.slice.call(arguments,1);return H[t]?H[t].apply(null,e):void 0}function Et(t){t.prefix==="fa"&&(t.prefix="fas");let{iconName:e}=t;const n=t.prefix||z();if(e)return e=j(n,e)||e,ne(Ke.definitions,n,e)||ne(E.styles,n,e)}const Ke=new ha,va=()=>{f.autoReplaceSvg=!1,f.observeMutations=!1,Y("noAuto")},xa={i2svg:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return L?(Y("beforeI2svg",t),D("pseudoElements2svg",t),D("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=t;f.autoReplaceSvg===!1&&(f.autoReplaceSvg=!0),f.observeMutations=!0,ea(()=>{Aa({autoReplaceSvgRoot:e}),Y("watch",t)})}},wa={icon:t=>{if(t===null)return null;if(typeof t=="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:j(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){const e=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=ft(t[0]);return{prefix:n,iconName:j(n,e)||e}}if(typeof t=="string"&&(t.indexOf("".concat(f.cssPrefix,"-"))>-1||t.match(Un))){const e=ut(t.split(" "),{skipLookups:!0});return{prefix:e.prefix||z(),iconName:j(e.prefix,e.iconName)||e.iconName}}if(typeof t=="string"){const e=z();return{prefix:e,iconName:j(e,t)||t}}}},k={noAuto:va,config:f,dom:xa,parse:wa,library:Ke,findIconDefinition:Et,toHtml:Z},Aa=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e=b}=t;(Object.keys(E.styles).length>0||f.autoFetchSvg)&&L&&f.autoReplaceSvg&&k.dom.i2svg({node:e})};function dt(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(n=>Z(n))}}),Object.defineProperty(t,"node",{get:function(){if(!L)return;const n=b.createElement("div");return n.innerHTML=t.html,n.children}}),t}function Sa(t){let{children:e,main:n,mask:a,attributes:r,styles:i,transform:o}=t;if(Yt(o)&&n.found&&!a.found){const{width:s,height:u}=n,c={x:s/u/2,y:.5};r.style=ct(l(l({},i),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:r,children:e}]}function ka(t){let{prefix:e,iconName:n,children:a,attributes:r,symbol:i}=t;const o=i===!0?"".concat(e,"-").concat(f.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:l(l({},r),{},{id:o}),children:a}]}]}function Ht(t){const{icons:{main:e,mask:n},prefix:a,iconName:r,transform:i,symbol:o,title:s,maskId:u,titleId:c,extra:m,watchable:h=!1}=t,{width:g,height:v}=n.found?n:e,C=kn.includes(a),P=[f.replacementClass,r?"".concat(f.cssPrefix,"-").concat(r):""].filter(O=>m.classes.indexOf(O)===-1).filter(O=>O!==""||!!O).concat(m.classes).join(" ");let A={children:[],attributes:l(l({},m.attributes),{},{"data-prefix":a,"data-icon":r,class:P,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(g," ").concat(v)})};const d=C&&!~m.classes.indexOf("fa-fw")?{width:"".concat(g/v*16*.0625,"em")}:{};h&&(A.attributes[U]=""),s&&(A.children.push({tag:"title",attributes:{id:A.attributes["aria-labelledby"]||"title-".concat(c||q())},children:[s]}),delete A.attributes.title);const p=l(l({},A),{},{prefix:a,iconName:r,main:e,mask:n,maskId:u,transform:i,symbol:o,styles:l(l({},d),m.styles)}),{children:y,attributes:x}=n.found&&e.found?D("generateAbstractMask",p)||{children:[],attributes:{}}:D("generateAbstractIcon",p)||{children:[],attributes:{}};return p.children=y,p.attributes=x,o?ka(p):Sa(p)}function oe(t){const{content:e,width:n,height:a,transform:r,title:i,extra:o,watchable:s=!1}=t,u=l(l(l({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});s&&(u[U]="");const c=l({},o.styles);Yt(r)&&(c.transform=Jn({transform:r,startCentered:!0,width:n,height:a}),c["-webkit-transform"]=c.transform);const m=ct(c);m.length>0&&(u.style=m);const h=[];return h.push({tag:"span",attributes:u,children:[e]}),i&&h.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),h}function Oa(t){const{content:e,title:n,extra:a}=t,r=l(l(l({},a.attributes),n?{title:n}:{}),{},{class:a.classes.join(" ")}),i=ct(a.styles);i.length>0&&(r.style=i);const o=[];return o.push({tag:"span",attributes:r,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}const{styles:ht}=E;function Nt(t){const e=t[0],n=t[1],[a]=t.slice(4);let r=null;return Array.isArray(a)?r={tag:"g",attributes:{class:"".concat(f.cssPrefix,"-").concat(mt.GROUP)},children:[{tag:"path",attributes:{class:"".concat(f.cssPrefix,"-").concat(mt.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(f.cssPrefix,"-").concat(mt.PRIMARY),fill:"currentColor",d:a[1]}}]}:r={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:e,height:n,icon:r}}const Pa={found:!1,width:512,height:512};function Ca(t,e){!Me&&!f.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Tt(t,e){let n=e;return e==="fa"&&f.styleDefault!==null&&(e=z()),new Promise((a,r)=>{if(n==="fa"){const i=Xe(t)||{};t=i.iconName||t,e=i.prefix||e}if(t&&e&&ht[e]&&ht[e][t]){const i=ht[e][t];return a(Nt(i))}Ca(t,e),a(l(l({},Pa),{},{icon:f.showMissingIcons&&t?D("missingIconAbstract")||{}:{}}))})}const se=()=>{},Mt=f.measurePerformance&&et&&et.mark&&et.measure?et:{mark:se,measure:se},X='FA "6.7.2"',Ia=t=>(Mt.mark("".concat(X," ").concat(t," begins")),()=>qe(t)),qe=t=>{Mt.mark("".concat(X," ").concat(t," ends")),Mt.measure("".concat(X," ").concat(t),"".concat(X," ").concat(t," begins"),"".concat(X," ").concat(t," ends"))};var Gt={begin:Ia,end:qe};const at=()=>{};function le(t){return typeof(t.getAttribute?t.getAttribute(U):null)=="string"}function Ea(t){const e=t.getAttribute?t.getAttribute(Dt):null,n=t.getAttribute?t.getAttribute(Rt):null;return e&&n}function Na(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(f.replacementClass)}function Ta(){return f.autoReplaceSvg===!0?rt.replace:rt[f.autoReplaceSvg]||rt.replace}function Ma(t){return b.createElementNS("http://www.w3.org/2000/svg",t)}function La(t){return b.createElement(t)}function Qe(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=t.tag==="svg"?Ma:La}=e;if(typeof t=="string")return b.createTextNode(t);const a=n(t.tag);return Object.keys(t.attributes||[]).forEach(function(i){a.setAttribute(i,t.attributes[i])}),(t.children||[]).forEach(function(i){a.appendChild(Qe(i,{ceFn:n}))}),a}function _a(t){let e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}const rt={replace:function(t){const e=t[0];if(e.parentNode)if(t[1].forEach(n=>{e.parentNode.insertBefore(Qe(n),e)}),e.getAttribute(U)===null&&f.keepOriginalSource){let n=b.createComment(_a(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(t){const e=t[0],n=t[1];if(~Ut(e).indexOf(f.replacementClass))return rt.replace(t);const a=new RegExp("".concat(f.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const i=n[0].attributes.class.split(" ").reduce((o,s)=>(s===f.replacementClass||s.match(a)?o.toSvg.push(s):o.toNode.push(s),o),{toNode:[],toSvg:[]});n[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",i.toNode.join(" "))}const r=n.map(i=>Z(i)).join(`
`);e.setAttribute(U,""),e.innerHTML=r}};function ce(t){t()}function Je(t,e){const n=typeof e=="function"?e:at;if(t.length===0)n();else{let a=ce;f.mutateApproach===Dn&&(a=F.requestAnimationFrame||ce),a(()=>{const r=Ta(),i=Gt.begin("mutate");t.map(r),i(),n()})}}let Vt=!1;function Ze(){Vt=!0}function Lt(){Vt=!1}let ot=null;function fe(t){if(!qt||!f.observeMutations)return;const{treeCallback:e=at,nodeCallback:n=at,pseudoElementsCallback:a=at,observeMutationsRoot:r=b}=t;ot=new qt(i=>{if(Vt)return;const o=z();V(i).forEach(s=>{if(s.type==="childList"&&s.addedNodes.length>0&&!le(s.addedNodes[0])&&(f.searchPseudoElements&&a(s.target),e(s.target)),s.type==="attributes"&&s.target.parentNode&&f.searchPseudoElements&&a(s.target.parentNode),s.type==="attributes"&&le(s.target)&&~Wn.indexOf(s.attributeName))if(s.attributeName==="class"&&Ea(s.target)){const{prefix:u,iconName:c}=ut(Ut(s.target));s.target.setAttribute(Dt,u||o),c&&s.target.setAttribute(Rt,c)}else Na(s.target)&&n(s.target)})}),L&&ot.observe(r,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function Fa(){ot&&ot.disconnect()}function za(t){const e=t.getAttribute("style");let n=[];return e&&(n=e.split(";").reduce((a,r)=>{const i=r.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(a[o]=s.join(":").trim()),a},{})),n}function Da(t){const e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),a=t.innerText!==void 0?t.innerText.trim():"";let r=ut(Ut(t));return r.prefix||(r.prefix=z()),e&&n&&(r.prefix=e,r.iconName=n),r.iconName&&r.prefix||(r.prefix&&a.length>0&&(r.iconName=la(r.prefix,t.innerText)||Wt(r.prefix,Pt(t.innerText))),!r.iconName&&f.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=t.firstChild.data)),r}function Ra(t){const e=V(t.attributes).reduce((r,i)=>(r.name!=="class"&&r.name!=="style"&&(r[i.name]=i.value),r),{}),n=t.getAttribute("title"),a=t.getAttribute("data-fa-title-id");return f.autoA11y&&(n?e["aria-labelledby"]="".concat(f.replacementClass,"-title-").concat(a||q()):(e["aria-hidden"]="true",e.focusable="false")),e}function ja(){return{iconName:null,title:null,titleId:null,prefix:null,transform:I,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function ue(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:a,rest:r}=Da(t),i=Ra(t),o=It("parseNodeAttributes",{},t);let s=e.styleParser?za(t):[];return l({iconName:n,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:a,transform:I,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:r,styles:s,attributes:i}},o)}const{styles:Ua}=E;function tn(t){const e=f.autoReplaceSvg==="nest"?ue(t,{styleParser:!1}):ue(t);return~e.extra.classes.indexOf(_e)?D("generateLayersText",t,e):D("generateSvgReplacementMutation",t,e)}function Ya(){return[...wn,...xt]}function de(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!L)return Promise.resolve();const n=b.documentElement.classList,a=m=>n.add("".concat(Zt,"-").concat(m)),r=m=>n.remove("".concat(Zt,"-").concat(m)),i=f.autoFetchSvg?Ya():Ce.concat(Object.keys(Ua));i.includes("fa")||i.push("fa");const o=[".".concat(_e,":not([").concat(U,"])")].concat(i.map(m=>".".concat(m,":not([").concat(U,"])"))).join(", ");if(o.length===0)return Promise.resolve();let s=[];try{s=V(t.querySelectorAll(o))}catch{}if(s.length>0)a("pending"),r("complete");else return Promise.resolve();const u=Gt.begin("onTree"),c=s.reduce((m,h)=>{try{const g=tn(h);g&&m.push(g)}catch(g){Me||g.name==="MissingIcon"&&console.error(g)}return m},[]);return new Promise((m,h)=>{Promise.all(c).then(g=>{Je(g,()=>{a("active"),a("complete"),r("pending"),typeof e=="function"&&e(),u(),m()})}).catch(g=>{u(),h(g)})})}function Ba(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;tn(t).then(n=>{n&&Je([n],e)})}function Wa(t){return function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const a=(e||{}).icon?e:Et(e||{});let{mask:r}=n;return r&&(r=(r||{}).icon?r:Et(r||{})),t(a,l(l({},n),{},{mask:r}))}}const Ha=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=I,symbol:a=!1,mask:r=null,maskId:i=null,title:o=null,titleId:s=null,classes:u=[],attributes:c={},styles:m={}}=e;if(!t)return;const{prefix:h,iconName:g,icon:v}=t;return dt(l({type:"icon"},t),()=>(Y("beforeDOMElementCreation",{iconDefinition:t,params:e}),f.autoA11y&&(o?c["aria-labelledby"]="".concat(f.replacementClass,"-title-").concat(s||q()):(c["aria-hidden"]="true",c.focusable="false")),Ht({icons:{main:Nt(v),mask:r?Nt(r.icon):{found:!1,width:null,height:null,icon:{}}},prefix:h,iconName:g,transform:l(l({},I),n),symbol:a,title:o,maskId:i,titleId:s,extra:{attributes:c,styles:m,classes:u}})))};var Ga={mixout(){return{icon:Wa(Ha)}},hooks(){return{mutationObserverCallbacks(t){return t.treeCallback=de,t.nodeCallback=Ba,t}}},provides(t){t.i2svg=function(e){const{node:n=b,callback:a=()=>{}}=e;return de(n,a)},t.generateSvgReplacementMutation=function(e,n){const{iconName:a,title:r,titleId:i,prefix:o,transform:s,symbol:u,mask:c,maskId:m,extra:h}=n;return new Promise((g,v)=>{Promise.all([Tt(a,o),c.iconName?Tt(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(C=>{let[P,A]=C;g([e,Ht({icons:{main:P,mask:A},prefix:o,iconName:a,transform:s,symbol:u,maskId:m,title:r,titleId:i,extra:h,watchable:!0})])}).catch(v)})},t.generateAbstractIcon=function(e){let{children:n,attributes:a,main:r,transform:i,styles:o}=e;const s=ct(o);s.length>0&&(a.style=s);let u;return Yt(i)&&(u=D("generateAbstractTransformGrouping",{main:r,transform:i,containerWidth:r.width,iconWidth:r.width})),n.push(u||r.icon),{children:n,attributes:a}}}},Va={mixout(){return{layer(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=e;return dt({type:"layer"},()=>{Y("beforeDOMElementCreation",{assembler:t,params:e});let a=[];return t(r=>{Array.isArray(r)?r.map(i=>{a=a.concat(i.abstract)}):a=a.concat(r.abstract)}),[{tag:"span",attributes:{class:["".concat(f.cssPrefix,"-layers"),...n].join(" ")},children:a}]})}}}},Xa={mixout(){return{counter(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:a=[],attributes:r={},styles:i={}}=e;return dt({type:"counter",content:t},()=>(Y("beforeDOMElementCreation",{content:t,params:e}),Oa({content:t.toString(),title:n,extra:{attributes:r,styles:i,classes:["".concat(f.cssPrefix,"-layers-counter"),...a]}})))}}}},$a={mixout(){return{text(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=I,title:a=null,classes:r=[],attributes:i={},styles:o={}}=e;return dt({type:"text",content:t},()=>(Y("beforeDOMElementCreation",{content:t,params:e}),oe({content:t,transform:l(l({},I),n),title:a,extra:{attributes:i,styles:o,classes:["".concat(f.cssPrefix,"-layers-text"),...r]}})))}}},provides(t){t.generateLayersText=function(e,n){const{title:a,transform:r,extra:i}=n;let o=null,s=null;if(Oe){const u=parseInt(getComputedStyle(e).fontSize,10),c=e.getBoundingClientRect();o=c.width/u,s=c.height/u}return f.autoA11y&&!a&&(i.attributes["aria-hidden"]="true"),Promise.resolve([e,oe({content:e.innerHTML,width:o,height:s,transform:r,title:a,extra:i,watchable:!0})])}}};const Ka=new RegExp('"',"ug"),me=[1105920,1112319],pe=l(l(l(l({},{FontAwesome:{normal:"fas",400:"fas"}}),yn),Fn),In),_t=Object.keys(pe).reduce((t,e)=>(t[e.toLowerCase()]=pe[e],t),{}),qa=Object.keys(_t).reduce((t,e)=>{const n=_t[e];return t[e]=n[900]||[...Object.entries(n)][0][1],t},{});function Qa(t){const e=t.replace(Ka,""),n=aa(e,0),a=n>=me[0]&&n<=me[1],r=e.length===2?e[0]===e[1]:!1;return{value:Pt(r?e[0]:e),isSecondary:a||r}}function Ja(t,e){const n=t.replace(/^['"]|['"]$/g,"").toLowerCase(),a=parseInt(e),r=isNaN(a)?"normal":a;return(_t[n]||{})[r]||qa[n]}function ge(t,e){const n="".concat(zn).concat(e.replace(":","-"));return new Promise((a,r)=>{if(t.getAttribute(n)!==null)return a();const o=V(t.children).filter(g=>g.getAttribute(At)===e)[0],s=F.getComputedStyle(t,e),u=s.getPropertyValue("font-family"),c=u.match(Yn),m=s.getPropertyValue("font-weight"),h=s.getPropertyValue("content");if(o&&!c)return t.removeChild(o),a();if(c&&h!=="none"&&h!==""){const g=s.getPropertyValue("content");let v=Ja(u,m);const{value:C,isSecondary:P}=Qa(g),A=c[0].startsWith("FontAwesome");let d=Wt(v,C),p=d;if(A){const y=ca(C);y.iconName&&y.prefix&&(d=y.iconName,v=y.prefix)}if(d&&!P&&(!o||o.getAttribute(Dt)!==v||o.getAttribute(Rt)!==p)){t.setAttribute(n,p),o&&t.removeChild(o);const y=ja(),{extra:x}=y;x.attributes[At]=e,Tt(d,v).then(O=>{const tt=Ht(l(l({},y),{},{icons:{main:O,mask:$e()},prefix:v,iconName:p,extra:x,watchable:!0})),R=b.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(R,t.firstChild):t.appendChild(R),R.outerHTML=tt.map(rn=>Z(rn)).join(`
`),t.removeAttribute(n),a()}).catch(r)}else a()}else a()})}function Za(t){return Promise.all([ge(t,"::before"),ge(t,"::after")])}function tr(t){return t.parentNode!==document.head&&!~Rn.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(At)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function he(t){if(L)return new Promise((e,n)=>{const a=V(t.querySelectorAll("*")).filter(tr).map(Za),r=Gt.begin("searchPseudoElements");Ze(),Promise.all(a).then(()=>{r(),Lt(),e()}).catch(()=>{r(),Lt(),n()})})}var er={hooks(){return{mutationObserverCallbacks(t){return t.pseudoElementsCallback=he,t}}},provides(t){t.pseudoElements2svg=function(e){const{node:n=b}=e;f.searchPseudoElements&&he(n)}}};let be=!1;var nr={mixout(){return{dom:{unwatch(){Ze(),be=!0}}}},hooks(){return{bootstrap(){fe(It("mutationObserverCallbacks",{}))},noAuto(){Fa()},watch(t){const{observeMutationsRoot:e}=t;be?Lt():fe(It("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}};const ye=t=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce((n,a)=>{const r=a.toLowerCase().split("-"),i=r[0];let o=r.slice(1).join("-");if(i&&o==="h")return n.flipX=!0,n;if(i&&o==="v")return n.flipY=!0,n;if(o=parseFloat(o),isNaN(o))return n;switch(i){case"grow":n.size=n.size+o;break;case"shrink":n.size=n.size-o;break;case"left":n.x=n.x-o;break;case"right":n.x=n.x+o;break;case"up":n.y=n.y-o;break;case"down":n.y=n.y+o;break;case"rotate":n.rotate=n.rotate+o;break}return n},e)};var ar={mixout(){return{parse:{transform:t=>ye(t)}}},hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-transform");return n&&(t.transform=ye(n)),t}}},provides(t){t.generateAbstractTransformGrouping=function(e){let{main:n,transform:a,containerWidth:r,iconWidth:i}=e;const o={transform:"translate(".concat(r/2," 256)")},s="translate(".concat(a.x*32,", ").concat(a.y*32,") "),u="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),c="rotate(".concat(a.rotate," 0 0)"),m={transform:"".concat(s," ").concat(u," ").concat(c)},h={transform:"translate(".concat(i/2*-1," -256)")},g={outer:o,inner:m,path:h};return{tag:"g",attributes:l({},g.outer),children:[{tag:"g",attributes:l({},g.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:l(l({},n.icon.attributes),g.path)}]}]}}}};const bt={x:0,y:0,width:"100%",height:"100%"};function ve(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function rr(t){return t.tag==="g"?t.children:[t]}var ir={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-mask"),a=n?ut(n.split(" ").map(r=>r.trim())):$e();return a.prefix||(a.prefix=z()),t.mask=a,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides(t){t.generateAbstractMask=function(e){let{children:n,attributes:a,main:r,mask:i,maskId:o,transform:s}=e;const{width:u,icon:c}=r,{width:m,icon:h}=i,g=Qn({transform:s,containerWidth:m,iconWidth:u}),v={tag:"rect",attributes:l(l({},bt),{},{fill:"white"})},C=c.children?{children:c.children.map(ve)}:{},P={tag:"g",attributes:l({},g.inner),children:[ve(l({tag:c.tag,attributes:l(l({},c.attributes),g.path)},C))]},A={tag:"g",attributes:l({},g.outer),children:[P]},d="mask-".concat(o||q()),p="clip-".concat(o||q()),y={tag:"mask",attributes:l(l({},bt),{},{id:d,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[v,A]},x={tag:"defs",children:[{tag:"clipPath",attributes:{id:p},children:rr(h)},y]};return n.push(x,{tag:"rect",attributes:l({fill:"currentColor","clip-path":"url(#".concat(p,")"),mask:"url(#".concat(d,")")},bt)}),{children:n,attributes:a}}}},or={provides(t){let e=!1;F.matchMedia&&(e=F.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){const n=[],a={fill:"currentColor"},r={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:l(l({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});const i=l(l({},r),{},{attributeName:"opacity"}),o={tag:"circle",attributes:l(l({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||o.children.push({tag:"animate",attributes:l(l({},r),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:l(l({},i),{},{values:"1;0;1;1;0;1;"})}),n.push(o),n.push({tag:"path",attributes:l(l({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:l(l({},i),{},{values:"1;0;0;0;0;1;"})}]}),e||n.push({tag:"path",attributes:l(l({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:l(l({},i),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},sr={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-symbol"),a=n===null?!1:n===""?!0:n;return t.symbol=a,t}}}},lr=[ta,Ga,Va,Xa,$a,er,nr,ar,ir,or,sr];ya(lr,{mixoutsTo:k});k.noAuto;k.config;k.library;k.dom;const Ft=k.parse;k.findIconDefinition;k.toHtml;const cr=k.icon;k.layer;k.text;k.counter;function xe(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,a)}return n}function N(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?xe(Object(n),!0).forEach(function(a){S(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):xe(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}function fr(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var a=n.call(t,e);if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function ur(t){var e=fr(t,"string");return typeof e=="symbol"?e:e+""}function st(t){"@babel/helpers - typeof";return st=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},st(t)}function S(t,e,n){return e=ur(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function dr(t,e){if(t==null)return{};var n={};for(var a in t)if(Object.prototype.hasOwnProperty.call(t,a)){if(e.indexOf(a)>=0)continue;n[a]=t[a]}return n}function mr(t,e){if(t==null)return{};var n=dr(t,e),a,r;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)a=i[r],!(e.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var pr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},en={exports:{}};(function(t){(function(e){var n=function(d,p,y){if(!c(p)||h(p)||g(p)||v(p)||u(p))return p;var x,O=0,tt=0;if(m(p))for(x=[],tt=p.length;O<tt;O++)x.push(n(d,p[O],y));else{x={};for(var R in p)Object.prototype.hasOwnProperty.call(p,R)&&(x[d(R,y)]=n(d,p[R],y))}return x},a=function(d,p){p=p||{};var y=p.separator||"_",x=p.split||/(?=[A-Z])/;return d.split(x).join(y)},r=function(d){return C(d)?d:(d=d.replace(/[\-_\s]+(.)?/g,function(p,y){return y?y.toUpperCase():""}),d.substr(0,1).toLowerCase()+d.substr(1))},i=function(d){var p=r(d);return p.substr(0,1).toUpperCase()+p.substr(1)},o=function(d,p){return a(d,p).toLowerCase()},s=Object.prototype.toString,u=function(d){return typeof d=="function"},c=function(d){return d===Object(d)},m=function(d){return s.call(d)=="[object Array]"},h=function(d){return s.call(d)=="[object Date]"},g=function(d){return s.call(d)=="[object RegExp]"},v=function(d){return s.call(d)=="[object Boolean]"},C=function(d){return d=d-0,d===d},P=function(d,p){var y=p&&"process"in p?p.process:p;return typeof y!="function"?d:function(x,O){return y(x,d,O)}},A={camelize:r,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(d,p){return n(P(r,p),d)},decamelizeKeys:function(d,p){return n(P(o,p),d,p)},pascalizeKeys:function(d,p){return n(P(i,p),d)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};t.exports?t.exports=A:e.humps=A})(pr)})(en);var gr=en.exports,hr=["class","style"];function br(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var a=n.indexOf(":"),r=gr.camelize(n.slice(0,a)),i=n.slice(a+1).trim();return e[r]=i,e},{})}function yr(t){return t.split(/\s+/).reduce(function(e,n){return e[n]=!0,e},{})}function nn(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var a=(t.children||[]).map(function(u){return nn(u)}),r=Object.keys(t.attributes||{}).reduce(function(u,c){var m=t.attributes[c];switch(c){case"class":u.class=yr(m);break;case"style":u.style=br(m);break;default:u.attrs[c]=m}return u},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,s=mr(n,hr);return ln(t.tag,N(N(N({},e),{},{class:r.class,style:N(N({},r.style),o)},r.attrs),s),a)}var an=!1;try{an=!0}catch{}function vr(){if(!an&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function yt(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?S({},t,e):{}}function xr(t){var e,n=(e={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-li":t.listItem,"fa-inverse":t.inverse,"fa-flip":t.flip===!0,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both"},S(S(S(S(S(S(S(S(S(S(e,"fa-".concat(t.size),t.size!==null),"fa-rotate-".concat(t.rotation),t.rotation!==null),"fa-pull-".concat(t.pull),t.pull!==null),"fa-swap-opacity",t.swapOpacity),"fa-bounce",t.bounce),"fa-shake",t.shake),"fa-beat",t.beat),"fa-fade",t.fade),"fa-beat-fade",t.beatFade),"fa-flash",t.flash),S(S(e,"fa-spin-pulse",t.spinPulse),"fa-spin-reverse",t.spinReverse));return Object.keys(n).map(function(a){return n[a]?a:null}).filter(function(a){return a})}function we(t){if(t&&st(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Ft.icon)return Ft.icon(t);if(t===null)return null;if(st(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}var Hr=on({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(e){return[!0,!1,"horizontal","vertical","both"].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return["right","left"].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(e,n){var a=n.attrs,r=B(function(){return we(e.icon)}),i=B(function(){return yt("classes",xr(e))}),o=B(function(){return yt("transform",typeof e.transform=="string"?Ft.transform(e.transform):e.transform)}),s=B(function(){return yt("mask",we(e.mask))}),u=B(function(){return cr(r.value,N(N(N(N({},i.value),o.value),s.value),{},{symbol:e.symbol,title:e.title,titleId:e.titleId,maskId:e.maskId}))});sn(u,function(m){if(!m)return vr("Could not find one or more icon(s)",r.value,s.value)},{immediate:!0});var c=B(function(){return u.value?nn(u.value.abstract[0],{},a):null});return function(){return c.value}}});/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const wr={prefix:"fas",iconName:"cloud",icon:[640,512,[9729],"f0c2","M0 336c0 79.5 64.5 144 144 144l368 0c70.7 0 128-57.3 128-128c0-61.9-44-113.6-102.4-125.4c4.1-10.7 6.4-22.4 6.4-34.6c0-53-43-96-96-96c-19.7 0-38.1 6-53.3 16.2C367 64.2 315.3 32 256 32C167.6 32 96 103.6 96 192c0 2.7 .1 5.4 .2 8.1C40.2 219.8 0 273.2 0 336z"]},Ar={prefix:"fas",iconName:"palette",icon:[512,512,[127912],"f53f","M512 256c0 .9 0 1.8 0 2.7c-.4 36.5-33.6 61.3-70.1 61.3L344 320c-26.5 0-48 21.5-48 48c0 3.4 .4 6.7 1 9.9c2.1 10.2 6.5 20 10.8 29.9c6.1 13.8 12.1 27.5 12.1 42c0 31.8-21.6 60.7-53.4 62c-3.5 .1-7 .2-10.6 .2C114.6 512 0 397.4 0 256S114.6 0 256 0S512 114.6 512 256zM128 288a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm0-96a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM288 96a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm96 96a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"]},Sr={prefix:"fas",iconName:"puzzle-piece",icon:[512,512,[129513],"f12e","M192 104.8c0-9.2-5.8-17.3-13.2-22.8C167.2 73.3 160 61.3 160 48c0-26.5 28.7-48 64-48s64 21.5 64 48c0 13.3-7.2 25.3-18.8 34c-7.4 5.5-13.2 13.6-13.2 22.8c0 12.8 10.4 23.2 23.2 23.2l56.8 0c26.5 0 48 21.5 48 48l0 56.8c0 12.8 10.4 23.2 23.2 23.2c9.2 0 17.3-5.8 22.8-13.2c8.7-11.6 20.7-18.8 34-18.8c26.5 0 48 28.7 48 64s-21.5 64-48 64c-13.3 0-25.3-7.2-34-18.8c-5.5-7.4-13.6-13.2-22.8-13.2c-12.8 0-23.2 10.4-23.2 23.2L384 464c0 26.5-21.5 48-48 48l-56.8 0c-12.8 0-23.2-10.4-23.2-23.2c0-9.2 5.8-17.3 13.2-22.8c11.6-8.7 18.8-20.7 18.8-34c0-26.5-28.7-48-64-48s-64 21.5-64 48c0 13.3 7.2 25.3 18.8 34c7.4 5.5 13.2 13.6 13.2 22.8c0 12.8-10.4 23.2-23.2 23.2L48 512c-26.5 0-48-21.5-48-48L0 343.2C0 330.4 10.4 320 23.2 320c9.2 0 17.3 5.8 22.8 13.2C54.7 344.8 66.7 352 80 352c26.5 0 48-28.7 48-64s-21.5-64-48-64c-13.3 0-25.3 7.2-34 18.8C40.5 250.2 32.4 256 23.2 256C10.4 256 0 245.6 0 232.8L0 176c0-26.5 21.5-48 48-48l120.8 0c12.8 0 23.2-10.4 23.2-23.2z"]},kr={prefix:"fas",iconName:"code",icon:[640,512,[],"f121","M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z"]},Or={prefix:"fas",iconName:"terminal",icon:[576,512,[],"f120","M9.4 86.6C-3.1 74.1-3.1 53.9 9.4 41.4s32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L178.7 256 9.4 86.6zM256 416l288 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-288 0c-17.7 0-32-14.3-32-32s14.3-32 32-32z"]},Pr={prefix:"fas",iconName:"file-code",icon:[384,512,[],"f1c9","M64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-288-128 0c-17.7 0-32-14.3-32-32L224 0 64 0zM256 0l0 128 128 0L256 0zM153 289l-31 31 31 31c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L71 337c-9.4-9.4-9.4-24.6 0-33.9l48-48c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9zM265 255l48 48c9.4 9.4 9.4 24.6 0 33.9l-48 48c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l31-31-31-31c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0z"]},Cr={prefix:"fas",iconName:"rotate",icon:[512,512,[128260,"sync-alt"],"f2f1","M142.9 142.9c-17.5 17.5-30.1 38-37.8 59.8c-5.9 16.7-24.2 25.4-40.8 19.5s-25.4-24.2-19.5-40.8C55.6 150.7 73.2 122 97.6 97.6c87.2-87.2 228.3-87.5 315.8-1L455 55c6.9-6.9 17.2-8.9 26.2-5.2s14.8 12.5 14.8 22.2l0 128c0 13.3-10.7 24-24 24l-8.4 0c0 0 0 0 0 0L344 224c-9.7 0-18.5-5.8-22.2-14.8s-1.7-19.3 5.2-26.2l41.1-41.1c-62.6-61.5-163.1-61.2-225.3 1zM16 312c0-13.3 10.7-24 24-24l7.6 0 .7 0L168 288c9.7 0 18.5 5.8 22.2 14.8s1.7 19.3-5.2 26.2l-41.1 41.1c62.6 61.5 163.1 61.2 225.3-1c17.5-17.5 30.1-38 37.8-59.8c5.9-16.7 24.2-25.4 40.8-19.5s25.4 24.2 19.5 40.8c-10.8 30.6-28.4 59.3-52.9 83.8c-87.2 87.2-228.3 87.5-315.8 1L57 457c-6.9 6.9-17.2 8.9-26.2 5.2S16 449.7 16 440l0-119.6 0-.7 0-7.6z"]},Ir=Cr,Er={prefix:"fas",iconName:"database",icon:[448,512,[],"f1c0","M448 80l0 48c0 44.2-100.3 80-224 80S0 172.2 0 128L0 80C0 35.8 100.3 0 224 0S448 35.8 448 80zM393.2 214.7c20.8-7.4 39.9-16.9 54.8-28.6L448 288c0 44.2-100.3 80-224 80S0 332.2 0 288L0 186.1c14.9 11.8 34 21.2 54.8 28.6C99.7 230.7 159.5 240 224 240s124.3-9.3 169.2-25.3zM0 346.1c14.9 11.8 34 21.2 54.8 28.6C99.7 390.7 159.5 400 224 400s124.3-9.3 169.2-25.3c20.8-7.4 39.9-16.9 54.8-28.6l0 85.9c0 44.2-100.3 80-224 80S0 476.2 0 432l0-85.9z"]};/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const Nr={prefix:"fab",iconName:"linkedin",icon:[448,512,[],"f08c","M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"]},Tr={prefix:"fab",iconName:"github",icon:[496,512,[],"f09b","M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]},Mr=""+new URL("bubble-brawl-title.BqidvYLM.webp",import.meta.url).href,Lr=""+new URL("characters.COECTbA4.webp",import.meta.url).href,_r=""+new URL("in-game.uU2NdXEy.webp",import.meta.url).href,Fr=""+new URL("evaluation-form.DfLIHxfo.webp",import.meta.url).href,zr=""+new URL("graph.DUvc_zpK.webp",import.meta.url).href,Dr=""+new URL("login.D-TP1Uik.webp",import.meta.url).href,Rr=""+new URL("patient-list.DdDT4TtQ.webp",import.meta.url).href,jr=""+new URL("portfolio-about.DRE84Kft.webp",import.meta.url).href,Ur=""+new URL("portfolio-skills.BkVsjTgK.webp",import.meta.url).href,Yr="denalitherrien@gmail.com",Br="+1 (306)-212-8881",Gr={name:"Denali Therrien",email:Yr,phone:Br,about:[{text:"Hello! Denali Therrien, a passionate developer and designer with over 2 years of experience creating intuitive and impactful digital experiences. I believe in combining creative thinking with technical expertise to build solutions that not only work flawlessly but also delight users."},{text:"My fascination with technology began in the computer labs at school, where I developed my skills through creative exploration and pushing  system boundaries — discovering how things worked by occasionally finding their limits. Since then, I've cultivated my skills across various domains of software development, from frontend frameworks to backend architectures. I'm particularly interested in user experience design and accessibility, ensuring that everything I create can be enjoyed by everyone."},{text:"When I'm not coding, you can find me reading my latest fantasy fixation, playing competitive video games, or calculating the odds of surviving that next encounter in my D&D campaign. I believe in continuous learning and am currently enjoying web development"}],headline:"Creative Developer & UI/UX Designer",introduction:"I build exceptional digital experiences that are fast, accessible, visually appealing, and responsive. I specialize in creating applications with Vue.js and crafting beautiful user interfaces.",heroImage:"",footerTagline:"Building digital products, brands, and experiences",skills:[{name:"Vue.js",description:"Front-end framework",icon:kr},{name:"Database Management",description:"Administration",icon:Er},{name:"Cloud Infrastructure",description:"AWS and Azure",icon:wr},{name:"UI/UX Design",description:"User-centered design",icon:Ar},{name:"Node.js",description:"Backend development",icon:Or},{name:"Git",description:"Version control",icon:Ir},{name:"Tailwind CSS",description:"Utility-first CSS",icon:Pr},{name:"API Integration",description:"REST",icon:Sr}],projects:[{title:"Bubble Brawl",description:"A local multiplayer platformer created during the Saskatoon Global Game Jam 2025",images:[Mr,Lr,_r],tags:["godot"],link:"https://ltngkarbn.itch.io/bubble-brawl",currentImageIndex:0},{title:"Hippotherapy Research",description:"A session tracker application that took 8 months and 4 agile releases to develop",images:[Dr,Rr,Fr,zr],tags:["Flutter","Firebase","ASP.NET"],link:"https://hippotherapy.ca",currentImageIndex:0},{title:"Portfolio Website",description:"A custom portfolio website template with smooth animations and a responsive design.",images:[jr,Ur],tags:["Vue.js","Tailwind CSS"],link:"https://github.com/denalitherrien/denalitherrien.github.io",currentImageIndex:0}],socialLinks:[{name:"GitHub",url:"https://github.com/denalitherrien",icon:Tr},{name:"LinkedIn",url:"https://www.linkedin.com/in/denali-therrien-987144246/",icon:Nr}]};export{Hr as F,Gr as p};
