/*! For license information please see bundle.js.LICENSE.txt */
(()=>{"use strict";var t={323:(t,e,s)=>{Object.defineProperty(e,"__esModule",{value:!0});const i=s(624);class n extends i.LitElement{albums;dropdownTimeout=null;showDropdown=!1;static styles=i.css`
        nav {
            background: #333;
            color: white;
            padding: 10px;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            position: fixed;
            top: 0;
            left: 0;
            z-index: 1000;
            padding: 13px;
        }

        .dropdown {
            position: absolute;
            top: calc(100% + 15px);
            left: 50%;
            transform: translateX(-50%) scaleY(0);
            background: rgba(0, 0, 0, 0.8);
            padding: 5px 0;
            flex-direction: column;
            min-width: 150px;
            border-radius: 23.5px;
            z-index: 0;
            visibility: hidden;
            opacity: 0;
            transition: opacity 0.3s ease, visibility 0.3s ease, transform 0.3s ease;
        }

        .dropdown.show {
            visibility: visible;
            opacity: 1;
            transform: translateX(-50%) scaleY(1);
        }

        .dropdown::before {
            content: "";
            display: block;
        }

        .dropdown a {
            display: block;
            padding: 8px;
            color: white;
            text-decoration: none;
        }

        .menu {
            list-style: none;
            display: flex;
            gap: 15px;
            padding: 0;
            margin: 0;
        }

        .menu li {
            position: relative;
            padding: 5px;
            border-radius: 20.5px;
        }

        .menu li.show > .dropdown {
            display: flex;
            visibility: visible;
        }

        .menu li a {
            position: relative;
            z-index: 1;
        }

        .menu a {
            color: white;
            text-decoration: none;
            font-size: 1.2em;
            padding: 5px 10px;
        }
    `;static properties={albums:{type:Array}};constructor(){super(),this.albums=["Weddings","Portraits"]}render(){return i.html`
            <nav>
                <ul class="menu">
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About Me</a></li>
                    <li><a href="/pricing">Pricing</a></li>
                    <li><a href="/contact">Contact</a></li>
                    <li
                        @mouseenter="${this.handleMouseEnter}"
                        @mouseleave="${this.handleMouseLeave}"
                    >
                        <a href="#">Albums</a>
                        <ul class="dropdown ${this.showDropdown?"show":""}">
                            ${this.albums.map((t=>i.html`
                                    <li>
                                        <a href="#">${t}</a>
                                    </li>
                                `))}
                        </ul>
                    </li>
                </ul>
            </nav>
        `}handleMouseEnter(){this.dropdownTimeout&&(clearTimeout(this.dropdownTimeout),this.dropdownTimeout=null),this.showDropdown=!0,this.requestUpdate()}handleMouseLeave(){this.dropdownTimeout=window.setTimeout((()=>{this.showDropdown=!1,this.requestUpdate()}),125)}}customElements.define("k-navbar",n)},373:()=>{},588:(t,e,s)=>{Object.defineProperty(e,"__esModule",{value:!0});const i=s(624);s(323);class n extends i.LitElement{static styles=i.css`
        :host {
            display: block;
            padding: 20px;
            font-family: Arial, sans-serif;
        }
    `;render(){return i.html`
            <k-navbar></k-navbar>
            <main>
                <br />
                <h1>Hai</h1>
            </main>
        `}}customElements.define("home-page",n)},624:(t,e,s)=>{s.r(e),s.d(e,{CSSResult:()=>a,LitElement:()=>_t,ReactiveElement:()=>x,_$LE:()=>ft,_$LH:()=>pt,adoptStyles:()=>c,css:()=>l,defaultConverter:()=>E,getCompatibleStyle:()=>d,html:()=>J,isServer:()=>gt,mathml:()=>Y,noChange:()=>Z,notEqual:()=>S,nothing:()=>G,render:()=>$t,supportsAdoptingStyleSheets:()=>n,svg:()=>X,unsafeCSS:()=>h});const i=globalThis,n=i.ShadowRoot&&(void 0===i.ShadyCSS||i.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,o=Symbol(),r=new WeakMap;class a{constructor(t,e,s){if(this._$cssResult$=!0,s!==o)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(n&&void 0===t){const s=void 0!==e&&1===e.length;s&&(t=r.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&r.set(e,t))}return t}toString(){return this.cssText}}const h=t=>new a("string"==typeof t?t:t+"",void 0,o),l=(t,...e)=>{const s=1===t.length?t[0]:e.reduce(((e,s,i)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[i+1]),t[0]);return new a(s,t,o)},c=(t,e)=>{if(n)t.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const s of e){const e=document.createElement("style"),n=i.litNonce;void 0!==n&&e.setAttribute("nonce",n),e.textContent=s.cssText,t.appendChild(e)}},d=n?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return h(e)})(t):t,{is:p,defineProperty:u,getOwnPropertyDescriptor:$,getOwnPropertyNames:_,getOwnPropertySymbols:m,getPrototypeOf:f}=Object,g=globalThis,y=g.trustedTypes,A=y?y.emptyScript:"",v=g.reactiveElementPolyfillSupport,b=(t,e)=>t,E={toAttribute(t,e){switch(e){case Boolean:t=t?A:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let s=t;switch(e){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch(t){s=null}}return s}},S=(t,e)=>!p(t,e),w={attribute:!0,type:String,converter:E,reflect:!1,hasChanged:S};Symbol.metadata??=Symbol("metadata"),g.litPropertyMetadata??=new WeakMap;class x extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=w){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(t,s,e);void 0!==i&&u(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){const{get:i,set:n}=$(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get(){return i?.call(this)},set(e){const o=i?.call(this);n.call(this,e),this.requestUpdate(t,o,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??w}static _$Ei(){if(this.hasOwnProperty(b("elementProperties")))return;const t=f(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(b("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(b("properties"))){const t=this.properties,e=[..._(t),...m(t)];for(const s of e)this.createProperty(s,t[s])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,s]of e)this.elementProperties.set(t,s)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const s=this._$Eu(t,e);void 0!==s&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const t of s)e.unshift(d(t))}else void 0!==t&&e.push(d(t));return e}static _$Eu(t,e){const s=e.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return c(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$EC(t,e){const s=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,s);if(void 0!==i&&!0===s.reflect){const n=(void 0!==s.converter?.toAttribute?s.converter:E).toAttribute(e,s.type);this._$Em=t,null==n?this.removeAttribute(i):this.setAttribute(i,n),this._$Em=null}}_$AK(t,e){const s=this.constructor,i=s._$Eh.get(t);if(void 0!==i&&this._$Em!==i){const t=s.getPropertyOptions(i),n="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:E;this._$Em=i,this[i]=n.fromAttribute(e,t.type),this._$Em=null}}requestUpdate(t,e,s){if(void 0!==t){if(s??=this.constructor.getPropertyOptions(t),!(s.hasChanged??S)(this[t],e))return;this.P(t,e,s)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(t,e,s){this._$AL.has(t)||this._$AL.set(t,e),!0===s.reflect&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,s]of t)!0!==s.wrapped||this._$AL.has(e)||void 0===this[e]||this.P(e,this[e],s)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach((t=>t.hostUpdate?.())),this.update(e)):this._$EU()}catch(e){throw t=!1,this._$EU(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach((t=>this._$EC(t,this[t]))),this._$EU()}updated(t){}firstUpdated(t){}}x.elementStyles=[],x.shadowRootOptions={mode:"open"},x[b("elementProperties")]=new Map,x[b("finalized")]=new Map,v?.({ReactiveElement:x}),(g.reactiveElementVersions??=[]).push("2.0.4");const C=globalThis,P=C.trustedTypes,U=P?P.createPolicy("lit-html",{createHTML:t=>t}):void 0,T="$lit$",O=`lit$${Math.random().toFixed(9).slice(2)}$`,H="?"+O,M=`<${H}>`,k=document,N=()=>k.createComment(""),R=t=>null===t||"object"!=typeof t&&"function"!=typeof t,L=Array.isArray,j=t=>L(t)||"function"==typeof t?.[Symbol.iterator],z="[ \t\n\f\r]",D=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,B=/-->/g,I=/>/g,W=RegExp(`>|${z}(?:([^\\s"'>=/]+)(${z}*=${z}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),V=/'/g,q=/"/g,K=/^(?:script|style|textarea|title)$/i,F=t=>(e,...s)=>({_$litType$:t,strings:e,values:s}),J=F(1),X=F(2),Y=F(3),Z=Symbol.for("lit-noChange"),G=Symbol.for("lit-nothing"),Q=new WeakMap,tt=k.createTreeWalker(k,129);function et(t,e){if(!L(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==U?U.createHTML(e):e}const st=(t,e)=>{const s=t.length-1,i=[];let n,o=2===e?"<svg>":3===e?"<math>":"",r=D;for(let e=0;e<s;e++){const s=t[e];let a,h,l=-1,c=0;for(;c<s.length&&(r.lastIndex=c,h=r.exec(s),null!==h);)c=r.lastIndex,r===D?"!--"===h[1]?r=B:void 0!==h[1]?r=I:void 0!==h[2]?(K.test(h[2])&&(n=RegExp("</"+h[2],"g")),r=W):void 0!==h[3]&&(r=W):r===W?">"===h[0]?(r=n??D,l=-1):void 0===h[1]?l=-2:(l=r.lastIndex-h[2].length,a=h[1],r=void 0===h[3]?W:'"'===h[3]?q:V):r===q||r===V?r=W:r===B||r===I?r=D:(r=W,n=void 0);const d=r===W&&t[e+1].startsWith("/>")?" ":"";o+=r===D?s+M:l>=0?(i.push(a),s.slice(0,l)+T+s.slice(l)+O+d):s+O+(-2===l?e:d)}return[et(t,o+(t[s]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),i]};class it{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let n=0,o=0;const r=t.length-1,a=this.parts,[h,l]=st(t,e);if(this.el=it.createElement(h,s),tt.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(i=tt.nextNode())&&a.length<r;){if(1===i.nodeType){if(i.hasAttributes())for(const t of i.getAttributeNames())if(t.endsWith(T)){const e=l[o++],s=i.getAttribute(t).split(O),r=/([.?@])?(.*)/.exec(e);a.push({type:1,index:n,name:r[2],strings:s,ctor:"."===r[1]?ht:"?"===r[1]?lt:"@"===r[1]?ct:at}),i.removeAttribute(t)}else t.startsWith(O)&&(a.push({type:6,index:n}),i.removeAttribute(t));if(K.test(i.tagName)){const t=i.textContent.split(O),e=t.length-1;if(e>0){i.textContent=P?P.emptyScript:"";for(let s=0;s<e;s++)i.append(t[s],N()),tt.nextNode(),a.push({type:2,index:++n});i.append(t[e],N())}}}else if(8===i.nodeType)if(i.data===H)a.push({type:2,index:n});else{let t=-1;for(;-1!==(t=i.data.indexOf(O,t+1));)a.push({type:7,index:n}),t+=O.length-1}n++}}static createElement(t,e){const s=k.createElement("template");return s.innerHTML=t,s}}function nt(t,e,s=t,i){if(e===Z)return e;let n=void 0!==i?s._$Co?.[i]:s._$Cl;const o=R(e)?void 0:e._$litDirective$;return n?.constructor!==o&&(n?._$AO?.(!1),void 0===o?n=void 0:(n=new o(t),n._$AT(t,s,i)),void 0!==i?(s._$Co??=[])[i]=n:s._$Cl=n),void 0!==n&&(e=nt(t,n._$AS(t,e.values),n,i)),e}class ot{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:s}=this._$AD,i=(t?.creationScope??k).importNode(e,!0);tt.currentNode=i;let n=tt.nextNode(),o=0,r=0,a=s[0];for(;void 0!==a;){if(o===a.index){let e;2===a.type?e=new rt(n,n.nextSibling,this,t):1===a.type?e=new a.ctor(n,a.name,a.strings,this,t):6===a.type&&(e=new dt(n,this,t)),this._$AV.push(e),a=s[++r]}o!==a?.index&&(n=tt.nextNode(),o++)}return tt.currentNode=k,i}p(t){let e=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class rt{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,s,i){this.type=2,this._$AH=G,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=nt(this,t,e),R(t)?t===G||null==t||""===t?(this._$AH!==G&&this._$AR(),this._$AH=G):t!==this._$AH&&t!==Z&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):j(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==G&&R(this._$AH)?this._$AA.nextSibling.data=t:this.T(k.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:s}=t,i="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=it.createElement(et(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===i)this._$AH.p(e);else{const t=new ot(i,this),s=t.u(this.options);t.p(e),this.T(s),this._$AH=t}}_$AC(t){let e=Q.get(t.strings);return void 0===e&&Q.set(t.strings,e=new it(t)),e}k(t){L(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const n of t)i===e.length?e.push(s=new rt(this.O(N()),this.O(N()),this,this.options)):s=e[i],s._$AI(n),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class at{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,n){this.type=1,this._$AH=G,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=n,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=G}_$AI(t,e=this,s,i){const n=this.strings;let o=!1;if(void 0===n)t=nt(this,t,e,0),o=!R(t)||t!==this._$AH&&t!==Z,o&&(this._$AH=t);else{const i=t;let r,a;for(t=n[0],r=0;r<n.length-1;r++)a=nt(this,i[s+r],e,r),a===Z&&(a=this._$AH[r]),o||=!R(a)||a!==this._$AH[r],a===G?t=G:t!==G&&(t+=(a??"")+n[r+1]),this._$AH[r]=a}o&&!i&&this.j(t)}j(t){t===G?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class ht extends at{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===G?void 0:t}}class lt extends at{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==G)}}class ct extends at{constructor(t,e,s,i,n){super(t,e,s,i,n),this.type=5}_$AI(t,e=this){if((t=nt(this,t,e,0)??G)===Z)return;const s=this._$AH,i=t===G&&s!==G||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,n=t!==G&&(s===G||i);i&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class dt{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){nt(this,t)}}const pt={M:T,P:O,A:H,C:1,L:st,R:ot,D:j,V:nt,I:rt,H:at,N:lt,U:ct,B:ht,F:dt},ut=C.litHtmlPolyfillSupport;ut?.(it,rt),(C.litHtmlVersions??=[]).push("3.2.1");const $t=(t,e,s)=>{const i=s?.renderBefore??e;let n=i._$litPart$;if(void 0===n){const t=s?.renderBefore??null;i._$litPart$=n=new rt(e.insertBefore(N(),t),t,void 0,s??{})}return n._$AI(t),n};class _t extends x{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=$t(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Z}}_t._$litElement$=!0,_t.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:_t});const mt=globalThis.litElementPolyfillSupport;mt?.({LitElement:_t});const ft={_$AK:(t,e,s)=>{t._$AK(e,s)},_$AL:t=>t._$AL};(globalThis.litElementVersions??=[]).push("4.1.1");const gt=!1},818:()=>{}},e={};function s(i){var n=e[i];if(void 0!==n)return n.exports;var o=e[i]={exports:{}};return t[i](o,o.exports,s),o.exports}s.d=(t,e)=>{for(var i in e)s.o(e,i)&&!s.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},s.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),s.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s(588),s(818),s(373),window.addEventListener("popstate",(()=>{(()=>{let t="";switch(window.location.pathname){case"/about":t="<about-page></about-page>";break;case"/pricing":t="<pricing-page></pricing-page>";break;case"/albums":t="<albums-page></albums-page>";break;case"/contact":t="<contact-page></contact-page>";break;default:t="<home-page></home-page>"}document.body.innerHTML=`<k-navbar></k-navbar> ${t}`})()})),document.body.innerHTML="<home-page></home-page>"})();