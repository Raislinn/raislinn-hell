(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,22016,(e,t,r)=>{"use strict";e.i(47167),Object.defineProperty(r,"__esModule",{value:!0});var n={default:function(){return v},useLinkStatus:function(){return x}};for(var o in n)Object.defineProperty(r,o,{enumerable:!0,get:n[o]});let a=e.r(90809),i=e.r(43476),s=a._(e.r(71645)),l=e.r(95057),c=e.r(8372),u=e.r(18581),f=e.r(18967),d=e.r(5550),h=e.r(88540),m=e.r(91949),p=e.r(73668),g=e.r(9396);function v(t){var r;let n,o,a,[v,x]=(0,s.useOptimistic)(m.IDLE_LINK_STATUS),b=(0,s.useRef)(null),{href:w,as:E,children:S,prefetch:j=null,passHref:N,replace:P,shallow:R,scroll:A,onClick:T,onMouseEnter:_,onTouchStart:C,legacyBehavior:L=!1,onNavigate:k,transitionTypes:O,ref:M,unstable_dynamicOnHover:I,...F}=t;n=S,L&&("string"==typeof n||"number"==typeof n)&&(n=(0,i.jsx)("a",{children:n}));let U=s.default.useContext(c.AppRouterContext),$=!1!==j,z=!1===j?"none":!0===j?"full":"auto",D="none"!==z?"auto"===z?g.FetchStrategy.PPR:g.FetchStrategy.Full:g.FetchStrategy.PPR,B="string"==typeof(r=E||w)?r:(0,l.formatUrl)(r);if(L){if(n?.$$typeof===Symbol.for("react.lazy"))throw Object.defineProperty(Error("`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag."),"__NEXT_ERROR_CODE",{value:"E863",enumerable:!1,configurable:!0});o=s.default.Children.only(n)}let K=L?o&&"object"==typeof o&&o.ref:M,H,W=s.default.useCallback(e=>(null!==U&&(b.current=(0,m.mountLinkInstance)(e,B,U,D,$,x,H)),()=>{b.current&&((0,m.unmountLinkForCurrentNavigation)(b.current),b.current=null),(0,m.unmountPrefetchableInstance)(e)}),[$,B,U,D,x,H]),X={ref:(0,u.useMergedRef)(W,K),onClick(t){L||"function"!=typeof T||T(t),L&&o.props&&"function"==typeof o.props.onClick&&o.props.onClick(t),!U||t.defaultPrevented||function(t,r,n,o,a,i,l,c="none"){if("u">typeof window){let u,{nodeName:f}=t.currentTarget;if("A"===f.toUpperCase()&&((u=t.currentTarget.getAttribute("target"))&&"_self"!==u||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.nativeEvent&&2===t.nativeEvent.which)||t.currentTarget.hasAttribute("download"))return;if(!(0,p.isLocalURL)(r)){o&&(t.preventDefault(),location.replace(r));return}if(t.preventDefault(),i){let e=!1;if(i({preventDefault:()=>{e=!0}}),e)return}let{dispatchNavigateAction:d}=e.r(99781);s.default.startTransition(()=>{d(r,o?"replace":"push",!1===a?h.ScrollBehavior.NoScroll:h.ScrollBehavior.Default,n.current,l,c)})}}(t,B,b,P,A,k,O,z)},onMouseEnter(e){L||"function"!=typeof _||_(e),L&&o.props&&"function"==typeof o.props.onMouseEnter&&o.props.onMouseEnter(e),U&&$&&(0,m.onNavigationIntent)(e.currentTarget,!0===I)},onTouchStart:function(e){L||"function"!=typeof C||C(e),L&&o.props&&"function"==typeof o.props.onTouchStart&&o.props.onTouchStart(e),U&&$&&(0,m.onNavigationIntent)(e.currentTarget,!0===I)}};return(0,f.isAbsoluteUrl)(B)?X.href=B:L&&!N&&("a"!==o.type||"href"in o.props)||(X.href=(0,d.addBasePath)(B)),a=L?s.default.cloneElement(o,X):(0,i.jsx)("a",{...F,...X,children:n}),(0,i.jsx)(y.Provider,{value:v,children:a})}let y=(0,s.createContext)(m.IDLE_LINK_STATUS),x=()=>(0,s.useContext)(y);("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},18581,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"useMergedRef",{enumerable:!0,get:function(){return o}});let n=e.r(71645);function o(e,t){let r=(0,n.useRef)(null),o=(0,n.useRef)(null);return(0,n.useCallback)(n=>{if(null===n){let e=r.current;e&&(r.current=null,e());let t=o.current;t&&(o.current=null,t())}else e&&(r.current=a(e,n)),t&&(o.current=a(t,n))},[e,t])}function a(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let r=e(t);return"function"==typeof r?r:()=>e(null)}}("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},18967,(e,t,r)=>{"use strict";e.i(47167),Object.defineProperty(r,"__esModule",{value:!0});var n={DecodeError:function(){return v},MiddlewareNotFoundError:function(){return w},MissingStaticPage:function(){return b},NormalizeError:function(){return y},PageNotFoundError:function(){return x},SP:function(){return p},ST:function(){return g},WEB_VITALS:function(){return a},execOnce:function(){return i},getDisplayName:function(){return f},getLocationOrigin:function(){return c},getURL:function(){return u},isAbsoluteUrl:function(){return l},isResSent:function(){return d},loadGetInitialProps:function(){return m},normalizeRepeatedSlashes:function(){return h},stringifyError:function(){return E}};for(var o in n)Object.defineProperty(r,o,{enumerable:!0,get:n[o]});let a=["CLS","FCP","FID","INP","LCP","TTFB"];function i(e){let t,r=!1;return(...n)=>(r||(r=!0,t=e(...n)),t)}let s=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,l=e=>{let t=e.charCodeAt(0);return!!(t>=65&&t<=90||t>=97&&t<=122)&&s.test(e)};function c(){let{protocol:e,hostname:t,port:r}=window.location;return`${e}//${t}${r?":"+r:""}`}function u(){let{href:e}=window.location,t=c();return e.substring(t.length)}function f(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function d(e){return e.finished||e.headersSent}function h(e){let t=e.split("?");return t[0].replace(/\\/g,"/").replace(/\/\/+/g,"/")+(t[1]?`?${t.slice(1).join("?")}`:"")}async function m(e,t){let r=t.res||t.ctx&&t.ctx.res;if(!e.getInitialProps)return t.ctx&&t.Component?{pageProps:await m(t.Component,t.ctx)}:{};let n=await e.getInitialProps(t);if(r&&d(r))return n;if(!n)throw Object.defineProperty(Error(`"${f(e)}.getInitialProps()" should resolve to an object. But found "${n}" instead.`),"__NEXT_ERROR_CODE",{value:"E1025",enumerable:!1,configurable:!0});return n}let p="u">typeof performance,g=p&&["mark","measure","getEntriesByName"].every(e=>"function"==typeof performance[e]);class v extends Error{}class y extends Error{}class x extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message=`Cannot find module for page: ${e}`}}class b extends Error{constructor(e,t){super(),this.message=`Failed to load static file for page: ${e} ${t}`}}class w extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}function E(e){return JSON.stringify({message:e.message,stack:e.stack})}},73668,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"isLocalURL",{enumerable:!0,get:function(){return a}});let n=e.r(18967),o=e.r(52817);function a(e){if(!(0,n.isAbsoluteUrl)(e))return!0;try{let t=(0,n.getLocationOrigin)(),r=new URL(e,t);return r.origin===t&&(0,o.hasBasePath)(r.pathname)}catch(e){return!1}}},98183,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n={assign:function(){return l},searchParamsToUrlQuery:function(){return a},urlQueryToSearchParams:function(){return s}};for(var o in n)Object.defineProperty(r,o,{enumerable:!0,get:n[o]});function a(e){let t={};for(let[r,n]of e.entries()){let e=t[r];void 0===e?t[r]=n:Array.isArray(e)?e.push(n):t[r]=[e,n]}return t}function i(e){return"string"==typeof e?e:("number"!=typeof e||isNaN(e))&&"boolean"!=typeof e?"":String(e)}function s(e){let t=new URLSearchParams;for(let[r,n]of Object.entries(e))if(Array.isArray(n))for(let e of n)t.append(r,i(e));else t.set(r,i(n));return t}function l(e,...t){for(let r of t){for(let t of r.keys())e.delete(t);for(let[t,n]of r.entries())e.append(t,n)}return e}},95057,(e,t,r)=>{"use strict";e.i(47167),Object.defineProperty(r,"__esModule",{value:!0});var n={formatUrl:function(){return s},formatWithValidation:function(){return c},urlObjectKeys:function(){return l}};for(var o in n)Object.defineProperty(r,o,{enumerable:!0,get:n[o]});let a=e.r(90809)._(e.r(98183)),i=/https?|ftp|gopher|file/;function s(e){let{auth:t,hostname:r}=e,n=e.protocol||"",o=e.pathname||"",s=e.hash||"",l=e.query||"",c=!1;t=t?encodeURIComponent(t).replace(/%3A/i,":")+"@":"",e.host?c=t+e.host:r&&(c=t+(~r.indexOf(":")?`[${r}]`:r),e.port&&(c+=":"+e.port)),l&&"object"==typeof l&&(l=String(a.urlQueryToSearchParams(l)));let u=e.search||l&&`?${l}`||"";return n&&!n.endsWith(":")&&(n+=":"),e.slashes||(!n||i.test(n))&&!1!==c?(c="//"+(c||""),o&&"/"!==o[0]&&(o="/"+o)):c||(c=""),s&&"#"!==s[0]&&(s="#"+s),u&&"?"!==u[0]&&(u="?"+u),o=o.replace(/[?#]/g,encodeURIComponent),u=u.replace("#","%23"),`${n}${c}${o}${u}${s}`}let l=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function c(e){return s(e)}},18566,(e,t,r)=>{t.exports=e.r(76562)},50912,e=>{"use strict";var t=e.i(43476),r=e.i(22016),n=e.i(71645);let o="rh-entered",a={x:35.55,y:64.85};function i(){let e=document.documentElement;["--crt-left","--crt-top","--crt-w","--crt-h","--crt-fit","--crt-zoom","--crt-ox","--crt-oy"].forEach(t=>e.style.removeProperty(t)),e.classList.remove("rh-crt-ready","rh-reduced-zoom","rh-settling")}function s({phase:e,onStartZoom:r,onDone:l}){let c=(0,n.useMemo)(()=>window.matchMedia("(prefers-reduced-motion: reduce)").matches,[]),[u,f]=(0,n.useState)({}),d=(0,n.useRef)(!1),h=(0,n.useCallback)(()=>{var e,t;let r,n,o,i,s,l,c,u=(r=Math.max(e=window.innerWidth,16*(t=window.innerHeight)/9),n=Math.max(t,9*e/16),s=Math.max((o=14.3/100*r)/Math.max(e,1),(i=.191*n)/Math.max(t,1)),l=Math.max(e/Math.max(o,1),t/Math.max(i,1)),{left:(e-r)/2+.284*r,top:(t-n)/2+55.3/100*n,width:o,height:i,fit:s,zoom:l});return(c=document.documentElement).style.setProperty("--crt-left",`${u.left}px`),c.style.setProperty("--crt-top",`${u.top}px`),c.style.setProperty("--crt-w",`${u.width}px`),c.style.setProperty("--crt-h",`${u.height}px`),c.style.setProperty("--crt-fit",String(u.fit)),c.style.setProperty("--crt-zoom",String(u.zoom)),c.style.setProperty("--crt-ox",`${a.x}%`),c.style.setProperty("--crt-oy",`${a.y}%`),c.classList.add("rh-crt-ready"),u},[]);(0,n.useEffect)(()=>{document.documentElement.classList.add("rh-booting"),h();let t=()=>{"idle"===e&&h()};return window.addEventListener("resize",t),()=>{window.removeEventListener("resize",t),document.documentElement.classList.remove("rh-booting","rh-settling"),i()}},[h,e]);let m=(0,n.useCallback)(()=>{if(!d.current){d.current=!0;try{sessionStorage.setItem(o,"1")}catch{}document.documentElement.classList.remove("rh-booting","rh-settling"),i(),l()}},[l]),p=(0,n.useCallback)(()=>{let e=document.documentElement;e.classList.add("rh-settling"),e.classList.remove("rh-booting")},[]),g=(0,n.useCallback)(()=>{if("idle"!==e)return;let t=h();if(c){document.documentElement.classList.add("rh-reduced-zoom"),r();return}f({transformOrigin:`${a.x}% ${a.y}%`,"--desk-scale":String(t.zoom)}),r()},[e,c,h,r]);return((0,n.useEffect)(()=>{if("zooming"!==e)return;let t=c?280:1600,r=c?100:180,n=window.setTimeout(()=>p(),t),o=window.setTimeout(()=>m(),t+r);return()=>{window.clearTimeout(n),window.clearTimeout(o)}},[e,m,p,c]),(0,n.useEffect)(()=>{let e=e=>{("Enter"===e.key||" "===e.key)&&(e.preventDefault(),g())};return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)},[g]),"done"===e)?null:(0,t.jsxs)("div",{className:`security-desk ${"zooming"===e?"is-zooming":""} ${c?"is-reduced":""}`,role:"dialog","aria-label":"Night shift security desk",children:[(0,t.jsx)("div",{className:"desk-scene",children:(0,t.jsxs)("div",{className:"desk-cover",style:u,children:[(0,t.jsx)("img",{className:"desk-photo",src:"/security-desk.png",alt:"Photoreal security office desk with CRT monitors",draggable:!1}),(0,t.jsx)("div",{className:"crt-glass-rim",style:{left:"28.4%",top:"55.3%",width:"14.3%",height:"19.1%"},"aria-hidden":!0})]})}),(0,t.jsx)("button",{type:"button",className:"crt-hotspot crt-hotspot--vp",onClick:g,disabled:"idle"!==e,"aria-label":"Enter archive",children:(0,t.jsxs)("span",{className:"crt-hotspot__label",children:[(0,t.jsx)("span",{className:"crt-hotspot__key",children:"ENTER"}),(0,t.jsx)("span",{className:"crt-hotspot__hint",children:"click · ↵ · space"})]})}),(0,t.jsx)("div",{className:"desk-grain","aria-hidden":!0}),(0,t.jsxs)("div",{className:"desk-hud",children:[(0,t.jsx)("span",{children:"SHIFT 03 · 04:00"}),(0,t.jsx)("span",{className:"desk-hud__pulse",children:"● LIVE"}),(0,t.jsx)("span",{children:"NO EXTERNAL UPLINK"})]})]})}function l(){try{return"1"===sessionStorage.getItem(o)}catch{return!1}}function c(){return(0,t.jsxs)("h1",{className:"wordmark",children:[(0,t.jsx)("span",{className:"line","data-text":"RAISLINN",children:"RAISLINN"}),(0,t.jsx)("span",{className:"line hell","data-text":"HELL",children:"HELL"})]})}let u=`
attribute vec2 aPos;
void main() {
  gl_Position = vec4(aPos, 0.0, 1.0);
}
`,f=`
precision highp float;
uniform float uTime;
uniform vec2 uRes;
uniform vec2 uMouse;
uniform float uReduce;

float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  float a = hash(i);
  float b = hash(i + vec2(1.0, 0.0));
  float c = hash(i + vec2(0.0, 1.0));
  float d = hash(i + vec2(1.0, 1.0));
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
}

float fbm(vec2 p) {
  float v = 0.0;
  float a = 0.5;
  for (int i = 0; i < 5; i++) {
    v += a * noise(p);
    p *= 2.07;
    a *= 0.5;
  }
  return v;
}

mat2 rot(float a) {
  float c = cos(a), s = sin(a);
  return mat2(c, -s, s, c);
}

void main() {
  vec2 uv = gl_FragCoord.xy / uRes.xy;
  vec2 p = (gl_FragCoord.xy - 0.5 * uRes.xy) / uRes.y;
  vec2 m = (uMouse - 0.5) * 0.25;
  p -= m * 0.35;

  float t = uTime * (0.22 + 0.55 * (1.0 - uReduce));

  // fog
  vec2 fp = p * 1.6 + vec2(0.0, t * 0.12);
  float fog = fbm(fp);
  fog = pow(fog, 1.35);

  vec3 col = vec3(0.02, 0.03, 0.02);
  col += vec3(0.02, 0.07, 0.035) * fog;
  col += vec3(0.08, 0.01, 0.01) * pow(1.0 - uv.y, 2.4) * 0.45;

  // neon vertical streaks
  float streaks = 0.0;
  float bloodStreaks = 0.0;
  for (int i = 0; i < 7; i++) {
    float fi = float(i);
    float x = -0.95 + fi * 0.31 + 0.06 * sin(t * 0.7 + fi * 1.7);
    float d = abs(p.x - x);
    float n = noise(vec2(p.y * 14.0 + t * 1.4, fi));
    float w = 0.0018 + 0.007 * n;
    float s = smoothstep(w, 0.0, d) * (0.25 + 0.75 * n);
    s *= 0.35 + 0.65 * smoothstep(-0.9, 0.2, p.y);
    if (mod(fi, 2.0) < 0.5) bloodStreaks += s;
    else streaks += s;
  }
  col += vec3(0.12, 0.95, 0.32) * streaks * 0.55;
  col += vec3(0.72, 0.08, 0.08) * bloodStreaks * 0.5;

  // wireframe sphere
  vec2 sp = p - vec2(0.02, 0.04);
  float rad = 0.42;
  float r = length(sp);
  if (r < rad) {
    float z = sqrt(max(rad * rad - r * r, 0.0));
    vec3 nrm = vec3(sp, z) / rad;
    float ang = t * 0.55;
    nrm.xz = rot(ang) * nrm.xz;
    nrm.xy = rot(0.35) * nrm.xy;
    float lat = acos(clamp(nrm.y, -1.0, 1.0));
    float lon = atan(nrm.x, nrm.z);
    float lineA = abs(sin(lat * 10.0));
    float lineB = abs(sin(lon * 10.0));
    float lines = 1.0 - smoothstep(0.0, 0.08, min(lineA, lineB));
    float rim = pow(1.0 - abs(nrm.z), 2.2);
    vec3 sph = mix(vec3(0.05, 0.18, 0.08), vec3(0.22, 1.0, 0.45), lines);
    sph += vec3(0.7, 0.08, 0.08) * rim * 0.55;
    float alpha = smoothstep(rad, rad - 0.01, r);
    col = mix(col, col + sph * 0.85, alpha * 0.72);
    col += vec3(0.15, 0.6, 0.28) * rim * 0.25;
  } else {
    float halo = smoothstep(0.62, rad, r);
    col += vec3(0.05, 0.18, 0.08) * halo * 0.25;
  }

  // chromatic fringe at edges
  float edge = pow(length((uv - 0.5) * 1.4), 2.2);
  col.r += edge * 0.05;
  col.g += fog * 0.02;
  col.b += edge * 0.02;

  // grain
  float g = hash(gl_FragCoord.xy + fract(uTime) * 17.0) * 0.07;
  col += g;

  // vignette
  col *= 1.0 - edge * 0.55;

  col = clamp(col, 0.0, 1.0);
  gl_FragColor = vec4(col, 1.0);
}
`;function d(e,t,r){let n=e.createShader(t);return n?(e.shaderSource(n,r),e.compileShader(n),e.getShaderParameter(n,e.COMPILE_STATUS))?n:(console.warn(e.getShaderInfoLog(n)),e.deleteShader(n),null):null}function h(){let e=(0,n.useRef)(null);return(0,n.useEffect)(()=>{let t=e.current;if(!t)return;let r=window.matchMedia("(prefers-reduced-motion: reduce)").matches,n=window.matchMedia("(max-width: 720px)").matches,o=t.getContext("webgl",{alpha:!1,antialias:!1,powerPreference:"low-power"});if(!o)return;let a=d(o,o.VERTEX_SHADER,u),i=d(o,o.FRAGMENT_SHADER,f);if(!a||!i)return;let s=o.createProgram();if(!s||(o.attachShader(s,a),o.attachShader(s,i),o.bindAttribLocation(s,0,"aPos"),o.linkProgram(s),!o.getProgramParameter(s,o.LINK_STATUS)))return;o.useProgram(s);let l=o.createBuffer();o.bindBuffer(o.ARRAY_BUFFER,l),o.bufferData(o.ARRAY_BUFFER,new Float32Array([-1,-1,3,-1,-1,3]),o.STATIC_DRAW),o.enableVertexAttribArray(0),o.vertexAttribPointer(0,2,o.FLOAT,!1,0,0);let c=o.getUniformLocation(s,"uTime"),h=o.getUniformLocation(s,"uRes"),m=o.getUniformLocation(s,"uMouse"),p=o.getUniformLocation(s,"uReduce"),g={x:.5,y:.5},v=e=>{g.x=e.clientX/window.innerWidth,g.y=1-e.clientY/window.innerHeight};window.addEventListener("pointermove",v,{passive:!0});let y=0,x=!0,b=performance.now(),w=()=>{let e=Math.min(window.devicePixelRatio||1,n?1:1.5),r=n?.55:.85,a=Math.max(1,Math.floor(t.clientWidth*e*r)),i=Math.max(1,Math.floor(t.clientHeight*e*r));(t.width!==a||t.height!==i)&&(t.width=a,t.height=i),o.viewport(0,0,t.width,t.height)},E=e=>{x&&(w(),o.uniform1f(c,(e-b)/1e3),o.uniform2f(h,t.width,t.height),o.uniform2f(m,g.x,g.y),o.uniform1f(p,+!!r),o.drawArrays(o.TRIANGLES,0,3),r||(y=requestAnimationFrame(E)))},S=()=>{document.hidden?(x=!1,cancelAnimationFrame(y)):(x=!0,y=requestAnimationFrame(E))};return document.addEventListener("visibilitychange",S),w(),y=requestAnimationFrame(E),()=>{x=!1,cancelAnimationFrame(y),window.removeEventListener("pointermove",v),document.removeEventListener("visibilitychange",S),o.deleteProgram(s),o.deleteShader(a),o.deleteShader(i),o.deleteBuffer(l)}},[]),(0,t.jsxs)("div",{className:"shader-wrap","aria-hidden":!0,children:[(0,t.jsx)("div",{className:"shader-fallback"}),(0,t.jsx)("canvas",{ref:e,className:"relative z-[1] h-full w-full"})]})}let m=()=>()=>{};e.s(["default",0,function(){let e=(0,n.useSyncExternalStore)(m,l,()=>!1),[o,a]=(0,n.useState)("idle"),i=e||"done"===o,u=i?"done":o,f=!i,d=(0,n.useCallback)(()=>a("zooming"),[]),p=(0,n.useCallback)(()=>a("done"),[]);return(0,t.jsxs)(t.Fragment,{children:[f?(0,t.jsx)(s,{phase:u,onStartZoom:d,onDone:p}):null,(0,t.jsx)("section",{className:i?"hero-stage hero-stage--live":"zooming"===u?"hero-stage hero-stage--crt hero-stage--crt-zoom":"hero-stage hero-stage--crt",children:(0,t.jsxs)("div",{className:"hero-stage__portal",children:[(0,t.jsxs)("div",{className:"hero-stage__screen",children:[(0,t.jsx)(h,{}),(0,t.jsxs)("div",{className:"hero-copy",children:[(0,t.jsx)("p",{className:"kicker phosphor",children:"Horror FX studio · Security node"}),(0,t.jsx)(c,{}),(0,t.jsx)("p",{className:"tagline",children:"Practical nightmares for camera."}),(0,t.jsx)("p",{className:"subline",children:"Horror FX · Prosthetics · Creature · On-set bloodwork"}),(0,t.jsxs)("div",{className:"hero-ctas",children:[(0,t.jsx)(r.default,{href:"/work",className:"btn",children:"[ WORK ]"}),(0,t.jsx)(r.default,{href:"/contact",className:"btn btn-blood",children:"[ CONTACT ]"})]})]}),(0,t.jsxs)("div",{className:"hero-meta",children:[(0,t.jsx)("span",{children:"Pointer tracks · Shader live"}),(0,t.jsx)("span",{children:"Cam 00 · Archive interior"})]})]}),f?(0,t.jsx)("div",{className:"hero-stage__crt-fx","aria-hidden":!0}):null]})})]})}],50912)},43133,e=>{"use strict";var t=e.i(43476),r=e.i(22016),n=e.i(71645);e.s(["default",0,function(){let[e,o]=(0,n.useState)("--:--:--");return(0,n.useEffect)(()=>{let e=()=>{o(new Date().toLocaleTimeString("en-GB",{hour12:!1,hour:"2-digit",minute:"2-digit",second:"2-digit"}))};e();let t=window.setInterval(e,1e3);return()=>window.clearInterval(t)},[]),(0,t.jsxs)("footer",{className:"statusbar",children:[(0,t.jsxs)("span",{children:["CAM ",(0,t.jsx)("b",{children:"00"})," · REC · SIGNAL ",(0,t.jsx)("b",{children:"STABLE"})]}),(0,t.jsxs)("span",{className:"flex flex-wrap items-center gap-x-4 gap-y-1",children:[(0,t.jsx)(r.default,{href:"/academy",className:"hover:text-[var(--phosphor)]",children:"ACADEMY.OFF"}),(0,t.jsxs)("span",{children:["SEC-OS v1.1 · ",e," · ",(0,t.jsx)("b",{children:"DESK LOCKED"})]})]})]})}])},35736,e=>{"use strict";var t=e.i(43476),r=e.i(22016),n=e.i(18566),o=e.i(72310);e.s(["default",0,function(){let e=(0,n.usePathname)();return(0,t.jsxs)("div",{className:"nav-row",children:[(0,t.jsx)("nav",{className:"nav-links","aria-label":"Archive",children:o.NAV.map(n=>{let o="/"===n.href?"/"===e:e===n.href||e.startsWith(`${n.href}/`);return(0,t.jsx)(r.default,{href:n.href,className:`nav-link ${o?"active":""}`,children:n.label},n.href)})}),(0,t.jsxs)("div",{className:"nav-path",children:[(0,t.jsx)("span",{className:"prompt",children:o.BRAND.path})," > ",(0,t.jsx)("span",{className:"cursor"})]})]})}])},72310,e=>{"use strict";e.s(["BRAND",0,{name:"Raislinn Hell",tagline:"Practical nightmares for camera.",sub:"Horror FX · Prosthetics · Creature · On-set bloodwork",email:"studio@raislinnhell.com",domain:"raislinnhell.com",path:"SEC:\\ARCHIVE\\FX"},"NAV",0,[{href:"/",label:"ROOT",file:"CAM00.SYS"},{href:"/work",label:"WORK",file:"WORK.DIR"},{href:"/services",label:"SERVICES",file:"SVC.DIR"},{href:"/about",label:"ABOUT",file:"MYTHOS.TXT"},{href:"/contact",label:"CONTACT",file:"UPLINK.CMD"}]])}]);