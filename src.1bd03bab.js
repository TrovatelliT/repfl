parcelRequire=function(e){var r="function"==typeof parcelRequire&&parcelRequire,n="function"==typeof require&&require,i={};function u(e,u){if(e in i)return i[e];var t="function"==typeof parcelRequire&&parcelRequire;if(!u&&t)return t(e,!0);if(r)return r(e,!0);if(n&&"string"==typeof e)return n(e);var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}return u.register=function(e,r){i[e]=r},i=e(u),u.modules=i,u}(function (require) {function $(a){return a&&a.__esModule?{d:a.default}:{d:a}}var e=this;var Ca,b,g,aa,s,Da,w={},h=[],ba=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|^--/i;function j(e,o){for(var t in o)e[t]=o[t];return e}function y(e){var o=e.parentNode;o&&o.removeChild(e)}function a(e,o,t){var r,$,n,a,l=arguments;if(o=j({},o),arguments.length>3)for(t=[t],r=3;r<arguments.length;r++)t.push(l[r]);if(null!=t&&(o.children=t),null!=e&&null!=e.defaultProps)for($ in e.defaultProps)void 0===o[$]&&(o[$]=e.defaultProps[$]);return(n=o.ref)&&delete o.ref,(a=o.key)&&delete o.key,i(e,o,null,a,n)}function i(e,o,t,r,$){var n={type:e,props:o,text:t,key:r,ref:$,__k:null,__e:null,l:null,__c:null};return n._=n,b.vnode&&b.vnode(n),n}function q(){}function C(e){if(null==e||"boolean"==typeof e)return null;if("string"==typeof e||"number"==typeof e)return i(null,null,e,null,null);if(Array.isArray(e))return a(q,null,e);if(null!=e.__e||null!=e.__c){var o=i(e.type,e.props,e.text,e.key,null);return o.__e=e.__e,o}return e}function z(e,o){this.props=e,this.context=o}function r(e){!e.__d&&(e.__d=!0)&&1===g.push(e)&&(b.debounceRendering||aa)(ca)}function ca(){var e;for(g.sort(function(e,o){return o.__b-e.__b});e=g.pop();)e.__d&&e.forceUpdate(!1)}function D(e,o,t,r,$,n,a,l,p){var i,u,s,_,S,c,f,v=o.__k||G(o.props.children,o.__k=[],C,!0),d=null!=t&&t.__k||h,x=d.length;if(p==w)if(p=null,null!=n)for(u=0;null==p&&u<n.length;u++)p=n[u];else for(u=0;null==p&&u<x;u++)p=d[u]&&d[u].__e,f=d[u];for(u=0;u<v.length;u++)if(null!=(i=v[u]=C(v[u]))){if(null===(_=d[u])||null!=_&&(null==i.key&&null==_.key?i.type===_.type:i.key===_.key))d[u]=void 0;else for(s=0;s<x;s++){if(null!=(_=d[s])&&(null==i.key&&null==_.key?i.type===_.type:i.key===_.key)){d[s]=void 0,x!==v.length&&_.type!==(f&&f.type)&&(p=_.__e);break}_=null}if(null!=(S=E(e,i,_,r,$,n,a,l,null,p))){if(null!=i.l)S=i.l;else if(n==_||S!=p||null==S.parentNode)e:if(null==p||p.parentNode!==e)e.appendChild(S);else{for(c=p,s=0;(c=c.nextSibling)&&s++<x/2;)if(c===S)break e;e.insertBefore(S,p)}p=S.nextSibling}}if(null!=n&&o.type!==q)for(u=n.length;u--;)null!=n[u]&&y(n[u]);for(u=x;u--;)null!=d[u]&&A(d[u],l)}function G(e,o,t,r){if(null==o&&(o=[]),null==e||"boolean"==typeof e)r&&o.push(null);else if(Array.isArray(e))for(var $=0;$<e.length;$++)G(e[$],o,t,r);else o.push(t?t(e):e);return o}function da(e,o,t,r){var $,n,a=Object.keys(o).sort();for($=0;$<a.length;$++)"children"===a[$]||"key"===a[$]||t&&("value"===a[$]||"checked"===a[$]?e:t)[a[$]]===o[a[$]]||u(e,a[$],o[a[$]],t[a[$]],r);for(n in t)"children"===n||"key"===n||o&&n in o||u(e,n,null,t[n],r)}function u(e,o,t,r,$){var n,a,l,p,i,u;if("class"!==o&&"className"!==o||(o=$?"class":"className"),"style"===o){if(a=e.style,"string"==typeof t)a.cssText=t;else{if("string"==typeof r)a.cssText="";else for(l in r)null!=t&&l in t||a.setProperty(l.replace(s,"-"),"");for(p in t)n=t[p],null!=r&&n===r[p]||a.setProperty(p.replace(s,"-"),"number"==typeof n&&!1===ba.test(p)?n+"px":n)}}else{if("dangerouslySetInnerHTML"===o)return;"o"===o[0]&&"n"===o[1]?(i=o!==(o=o.replace(/Capture$/,"")),u=o.toLowerCase(),o=(u in self?u:o).substring(2),t?r||e.addEventListener(o,v,i):e.removeEventListener(o,v,i),(e.u||(e.u={}))[o]=t):"list"!==o&&"tagName"!==o&&!$&&o in e?e[o]=null==t?"":t:null==t||!1===t?o!==(o=o.replace(/^xlink:?/,""))?e.removeAttributeNS("http://www.w3.org/1999/xlink",o.toLowerCase()):e.removeAttribute(o):"function"!=typeof t&&(o!==(o=o.replace(/^xlink:?/,""))?e.setAttributeNS("http://www.w3.org/1999/xlink",o.toLowerCase(),t):e.setAttribute(o,t))}}function v(e){return this.u[e.type](b.event?b.event(e):e)}function E(e,o,t,r,$,n,a,l,p,i){var u,s,_,S,c,f,v,d,x,m,h,y,g,k;if(null==t||null==o||t.type!==o.type||t.key!==o.key){if(null!=t&&A(t,l),null==o)return null;t=w}if(o._!==o)return null;b.diff&&b.diff(o),_=!1,v=o.type;try{e:if(t.type===q||v===q){if(D(e,o,t,r,$,n,a,u,i),o.__k.length&&null!=o.__k[0])for(o.__e=o.__k[0].__e,x=o.__k.length;x--&&(o.l=(s=o.__k[x])&&(s.l||s.__e),!o.l););}else if("function"==typeof v){if(h=(m=v.contextType)&&r[m.__c],y=null!=m?h?h.props.value:m.__p:r,t.__c?(d=(u=o.__c=t.__c).__p=u.__E,o.__e=t.__e):(v.prototype&&v.prototype.render?o.__c=u=new v(o.props,y):(o.__c=u=new z(o.props,y),u.constructor=v,u.render=fa),u.__a=l,h&&h.sub(u),u.props=o.props,u.state||(u.state={}),u.context=y,u.__n=r,_=u.__d=!0,u.__h=[]),u.__v=o,null==u.__s&&(u.__s=u.state),null!=v.getDerivedStateFromProps&&j(u.__s==u.state?u.__s=j({},u.__s):u.__s,v.getDerivedStateFromProps(o.props,u.__s)),_)null==v.getDerivedStateFromProps&&null!=u.componentWillMount&&u.componentWillMount(),null!=u.componentDidMount&&a.push(u);else{if(null==v.getDerivedStateFromProps&&null==p&&null!=u.componentWillReceiveProps&&u.componentWillReceiveProps(o.props,y),!p&&null!=u.shouldComponentUpdate&&!1===u.shouldComponentUpdate(o.props,u.__s,y)){u.props=o.props,u.state=u.__s,u.__d=!1,o.l=t.l;break e}null!=u.componentWillUpdate&&u.componentWillUpdate(o.props,u.__s,y)}for(S=u.props,c=u.state,u.context=y,u.props=o.props,u.state=u.__s,b.render&&b.render(o),g=u.__t||null,u.__d=!1,k=u.__t=C(u.render(u.props,u.state,u.context)),null!=u.getChildContext&&(r=j(j({},r),u.getChildContext())),_||null==u.getSnapshotBeforeUpdate||(f=u.getSnapshotBeforeUpdate(S,c)),u.__b=l?(l.__b||0)+1:0,u.base=o.__e=E(e,k,g,r,$,n,a,u,null,i),null!=k&&(o.l=k.l),u.__P=e,o.ref&&F(o.ref,u,l);s=u.__h.pop();)s.call(u);_||null==S||null==u.componentDidUpdate||u.componentDidUpdate(S,c,f)}else o.__e=ea(t.__e,o,t,r,$,n,a,l),o.ref&&t.ref!==o.ref&&F(o.ref,o.__e,l);d&&(u.__E=u.__p=null),b.diffed&&b.diffed(o)}catch(C){B(C,l)}return o.__e}function x(e,o){for(var t;t=e.pop();)try{t.componentDidMount()}catch(r){B(r,t.__a)}b.commit&&b.commit(o)}function ea(e,o,t,r,$,n,a,l){var p,i,u,s,_,S,c,f,v=e;if($="svg"===o.type||$,null==e&&null!=n)for(p=0;p<n.length;p++)if(null!=(i=n[p])&&(null===o.type?3===i.nodeType:i.localName===o.type)){e=i,n[p]=null;break}if(null==e&&(e=null===o.type?document.createTextNode(o.text):$?document.createElementNS("http://www.w3.org/2000/svg",o.type):document.createElement(o.type),n=null),null===o.type)null!=v&&e!==v||o.text===t.text||(e.data=o.text);else if(null!=n&&null!=e.childNodes&&(n=h.slice.call(e.childNodes)),o!==t){if(s=o.props,null==(u=t.props)&&(u={},null!=n))for(S=0;S<e.attributes.length;S++)u["class"==(_=e.attributes[S].name)&&s.className?"className":_]=e.attributes[S].value;c=u.dangerouslySetInnerHTML,((f=s.dangerouslySetInnerHTML)||c)&&(f&&c&&f.__html==c.__html||(e.innerHTML=f&&f.__html||"")),s.multiple&&(e.multiple=s.multiple),D(e,o,t,r,"foreignObject"!==o.type&&$,n,a,l,w),da(e,s,u,$)}return e}function F(e,o,t){try{"function"==typeof e?e(o):e.current=o}catch(e){B(e,t)}}function A(e,o,t){var r,$,n;if(b.unmount&&b.unmount(e),(r=e.ref)&&F(r,null,o),t||null!=e.l||(t=null!=($=e.__e)),e.__e=e.l=null,null!=(r=e.__c)){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(a){B(a,o)}r.base=r.__P=null,(r=r.__t)&&A(r,o,t)}else if(r=e.__k)for(n=0;n<r.length;n++)r[n]&&A(r[n],o,t);null!=$&&y($)}function fa(e,o,t){return this.constructor(e,t)}function B(e,o){for(;o;o=o.__a)if(!o.__p)try{if(null!=o.constructor.getDerivedStateFromError)o.setState(o.constructor.getDerivedStateFromError(e));else{if(null==o.componentDidCatch)continue;o.componentDidCatch(e)}return r(o.__E=o)}catch(o){e=o}throw e}function ga(e,o,t){var r,$;b.root&&b.root(e,o),r=o.__t,e=a(q,null,[e]),$=[],D(o,t?e:o.__t=e,t?void 0:r,w,void 0!==o.ownerSVGElement,t?[t]:r?null:h.slice.call(o.childNodes),$,e,t||w),x($,e)}Ca=b={},z.prototype.setState=function(e,o){var t=this.__s!==this.state&&this.__s||(this.__s=j({},this.state));("function"!=typeof e||(e=e(t,this.props)))&&j(t,e),null!=e&&this.__v&&(o&&this.__h.push(o),r(this))},z.prototype.forceUpdate=function(e){var o,t=this.__v,r=this.__v.__e,$=this.__P;$&&(null!=(r=E($,t,t,this.__n,void 0!==$.ownerSVGElement,null,o=[],this.__a,!1!==e,r))&&r.parentNode!==$&&$.appendChild(r),x(o,t)),e&&e()},z.prototype.render=q,g=[],aa="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,s=/-?(?=[A-Z])/g,Da=0;var o,c,t=[],H=b.render;b.render=function($){H&&H($),o=0,(c=$.__c).__H&&(c.__H.t=k(c.__H.t))};var I=b.diffed;b.diffed=function($){I&&I($);var r=$.__c;if(r){var e=r.__H;e&&(e.u=k(e.u))}};var J=b.unmount;function K($){b.hook&&b.hook(c);var r=c.__H||(c.__H={i:[],t:[],u:[]});return $>=r.i.length&&r.i.push({}),r.i[$]}function L($){return ha(N,$)}function ha($,r,e){var t=K(o++);return null==t.__c&&(t.__c=c,t.o=[null==e?N(null,r):e(r),function(r){var e=$(t.o[0],r);t.o[0]!==e&&(t.o[0]=e,t.__c.setState({}))}]),t.o}function ia($,r){var e=K(o++);na(e.v,r)&&(e.o=$,e.v=r,c.__H.t.push(e),ja(c))}b.unmount=function($){J&&J($);var r=$.__c;if(r){var e=r.__H;e&&e.i.forEach(function($){return $.p&&$.p()})}};var ja=function(){};function M(){t.forEach(function($){$.m=!1,$.__P&&($.__H.t=k($.__H.t))}),t=[]}function ka(){setTimeout(M,0)}function k($){return $.forEach(la),$.forEach(ma),[]}function la($){$.p&&$.p()}function ma($){var r=$.o();"function"==typeof r&&($.p=r)}function na($,r){return null==$||r.some(function(r,e){return r!==$[e]})}function N($,r){return"function"==typeof r?r($):r}"undefined"!=typeof window&&(ja=function($){!$.m&&($.m=!0)&&1===t.push($)&&(b.requestAnimationFrame?b.requestAnimationFrame(M):requestAnimationFrame(ka))});const d=t=>"undefined"!=typeof self&&self&&t in self?self[t]:"undefined"!=typeof window&&window&&t in window?window[t]:"undefined"!=typeof e&&e&&t in e?e[t]:"undefined"!=typeof globalThis&&globalThis?globalThis[t]:void 0,O=d("document"),oa=d("Headers"),P=d("Response"),Q=d("ReadableStream"),R=d("fetch"),S=d("AbortController"),T=d("FormData"),l=t=>null!==t&&"object"==typeof t,U="function"==typeof S,pa="function"==typeof Q,qa="function"==typeof T,m=(...t)=>{let e={};for(const r of t)if(Array.isArray(r))Array.isArray(e)||(e=[]),e=[...e,...r];else if(l(r))for(let[t,o]of Object.entries(r))l(o)&&Reflect.has(e,t)&&(o=m(e[t],o)),e={...e,[t]:o};return e},V=["get","post","put","patch","head","delete"],ra={json:"application/json",text:"text/*",formData:"multipart/form-data",arrayBuffer:"*/*",blob:"*/*"},sa=new Set(["get","put","head","delete","options","trace"]),ta=new Set([408,413,429,500,502,503,504]),ua=new Set([413,429,503]);class W extends Error{constructor(t){super(t.statusText),this.name="HTTPError",this.response=t}}class X extends Error{constructor(){super("Request timed out"),this.name="TimeoutError"}}const p=t=>new Promise((e,r)=>{t>2147483647?r(new RangeError("The `timeout` option cannot be greater than 2147483647")):setTimeout(e,t)}),va=(t,e,r)=>new Promise((o,s)=>{t.then(o).catch(s),p(e).then(()=>{U&&r.abort(),s(new X)}).catch(s)}),wa=t=>V.includes(t)?t.toUpperCase():t;class Y{constructor(t,{timeout:e=1e4,hooks:r,throwHttpErrors:o=!0,searchParams:s,json:a,...n}){if(this._retryCount=0,this._options={method:"get",credentials:"same-origin",retry:2,...n},U&&(this.abortController=new S,this._options.signal&&this._options.signal.addEventListener("abort",()=>{this.abortController.abort()}),this._options.signal=this.abortController.signal),this._options.method=wa(this._options.method),this._options.prefixUrl=String(this._options.prefixUrl||""),this._input=String(t||""),this._options.prefixUrl&&this._input.startsWith("/"))throw new Error("`input` must not begin with a slash when using `prefixUrl`");if(this._options.prefixUrl&&!this._options.prefixUrl.endsWith("/")&&(this._options.prefixUrl+="/"),this._input=this._options.prefixUrl+this._input,s){const t=new URL(this._input,O&&O.baseURI);if("string"==typeof s||URLSearchParams&&s instanceof URLSearchParams)t.search=s;else{if(!Object.values(s).every(t=>"number"==typeof t||"string"==typeof t))throw new Error("The `searchParams` option must be either a string, `URLSearchParams` instance or an object with string and number values");t.search=new URLSearchParams(s).toString()}this._input=t.toString()}this._timeout=e,this._hooks=m({beforeRequest:[],afterResponse:[]},r),this._throwHttpErrors=o;const $=new oa(this._options.headers||{});if((qa&&this._options.body instanceof T||this._options.body instanceof URLSearchParams)&&$.has("content-type"))throw new Error(`The \`content-type\` header cannot be used with a ${this._options.body.constructor.name} body. It will be set automatically.`);if(a){if(this._options.body)throw new Error("The `json` option cannot be used with the `body` option");$.set("content-type","application/json"),this._options.body=JSON.stringify(a)}this._options.headers=$;const v=async()=>{await p(1);let t=await this._fetch();for(const e of this._hooks.afterResponse){const r=await e(t.clone());r instanceof P&&(t=r)}if(!t.ok&&this._throwHttpErrors)throw new W(t);if(this._options.onDownloadProgress){if("function"!=typeof this._options.onDownloadProgress)throw new TypeError("The `onDownloadProgress` option must be a function");if(!pa)throw new Error("Streams are not supported in your environment. `ReadableStream` is missing.");return this._stream(t.clone(),this._options.onDownloadProgress)}return t},i=sa.has(this._options.method.toLowerCase())?this._retry(v):v();for(const[h,p]of Object.entries(ra))i[h]=async()=>($.set("accept",p),(await i).clone()[h]());return i}_calculateRetryDelay(t){if(this._retryCount++,this._retryCount<this._options.retry&&!(t instanceof X)){if(t instanceof W){if(!ta.has(t.response.status))return 0;const e=t.response.headers.get("Retry-After");if(e&&ua.has(t.response.status)){let t=Number(e);return Number.isNaN(t)?t=Date.parse(e)-Date.now():t*=1e3,t}if(413===t.response.status)return 0}return .3*2**(this._retryCount-1)*1e3}return 0}async _retry(t){try{return await t()}catch(e){const r=this._calculateRetryDelay(e);if(0!==r&&this._retryCount>0)return await p(r),this._retry(t);if(this._throwHttpErrors)throw e}}async _fetch(){for(const t of this._hooks.beforeRequest)await t(this._options);return!1===this._timeout?R(this._input,this._options):va(R(this._input,this._options),this._timeout,this.abortController)}_stream(t,e){const r=Number(t.headers.get("content-length"))||0;let o=0;return new P(new Q({start(s){const a=t.body.getReader();e&&e({percent:0,transferredBytes:0,totalBytes:r},new Uint8Array),async function t(){const{done:n,value:$}=await a.read();n?s.close():(e&&(o+=$.byteLength,e({percent:0===r?0:o/r,transferredBytes:o,totalBytes:r},$)),s.enqueue($),t())}()}}))}}const f=(...t)=>{for(const e of t)if((!l(e)||Array.isArray(e))&&void 0!==e)throw new TypeError("The `options` argument must be an object");return m({},...t)},n=t=>{const e=(e,r)=>new Y(e,f(t,r));for(const r of V)e[r]=(e,o)=>new Y(e,f(t,o,{method:r}));return e.create=t=>n(f(t)),e.extend=e=>n(f(t,e)),e};var xa=n();const ya="https://cors.louismerl.in";function za({name:e}){const[t,r]=L("loading");ia(()=>{!async function(){const t=(await xa.get(`${ya}/https://ewa.epfl.ch/room/Default.aspx?room=${e}`).text()).split("\n").find(e=>e.includes("v.events")).replace("v.events = ","").replace(/;/g,"").replace(/\\"/g,"").replace(/<br>/g,"").replace(/ISA - /g,"").replace(/\\/g,""),$=JSON.parse(t),n=$.find(({Start:e,End:t})=>{const r=new Date,$=new Date(e),n=new Date(t);return r>$&&r<n}),a=$.find(({Start:e,End:t})=>{const r=new Date(Date.now()+27e5),$=new Date(Date.now()+36e5),n=new Date(e),a=new Date(t);return r>n&&$<a||$>n&&$<a});r(n?n.Text:a&&"occupied soon")}()},[]);let $="\uD83D\uDC4D ";return"loading"===t?$="\uD83D\uDD04":"occupied soon"===t?$="\u23F3":t&&($="\u26D4"),a("tr",null,a("td",null,$),a("td",null,a("strong",null," ",e.toUpperCase())),a("td",{class:"text-right fullwidth"},t))}var Aa={};Aa={in:["inm10","inm11","inm200","inm201","inm202","inm203","inr113","inr219","inf119","inf211","inf213","inf1","inf2","inf3","inj218"],bc:["bc01","bc02","bc03","bc04","bc05","bc06","bc010","bc129","bc229","bc329","bc410","bc420"],co:["co020","co021","co023"]};var Z=$(Aa);const _=Object.keys(Z.d);function Ba(){const[o,$]=L("all");return a("main",{class:"container"},a("header",{class:"header"},a("h1",{class:"less-margin title"},"rEPFL"),a("h3",{class:"less-margin"},"find a free room @ EPFL")),a("p",{class:"button-list"},["all"].concat(_).map(r=>a(q,null,a("button",{onClick:()=>$(r),class:o===r?"filled":""},r.toUpperCase())," "))),_.map($=>a("div",{class:"all"!==o&&o!==$&&"hidden"},a("h2",{class:"text-center table-h2"},$.toUpperCase()),a("hr",{class:"table-hr"}),a("table",null,a("tbody",null,Z.d[$].map(o=>a(za,{key:o,name:o})))))),a("footer",{class:"footer"},a("hr",null),a("h5",{class:"less-margin"},"made with \u2764\uFE0F by ",a("a",{href:"https://louismerl.in"},"Louis Merlin")),a("h5",{class:"less-margin"},"using ",a("a",{href:"https://preactjs.com"},"preact")," and ",a("a",{href:"https://concrete.style"},"concrete.css")),a("h5",{class:"less-margin"},"need more rooms ? ",a("a",{href:"https://github.com/louismerlin/repfl/blob/master/src/rooms.json"},"add them")," or ",a("a",{href:"mailto:louis.merlin@epfl.ch"},"email me")),a("h5",{class:"less-margin"},"don't hesitate to ",a("a",{href:"https://github.com/louismerlin/repfl"},"star and/or contribute"))))}ga(a(Ba,null),document.body);return{"Focm":{}};});