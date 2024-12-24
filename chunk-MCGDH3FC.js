import{a as te,b as v,c as ne,g as D,h as ie,i as oe,j as I,l as se,n as re,q as ae,r as le,s as de,t as p,u as y,v as l,z as ce}from"./chunk-YPBYQO5Z.js";import{j as ee}from"./chunk-4ZLKG6NB.js";import{$ as F,Da as P,Fb as J,Ia as C,Ib as Y,Ka as R,L as m,M as L,Mb as K,Pa as V,Qb as U,R as o,T as h,U as O,V as b,Va as r,Vb as X,Wa as a,Xa as $,_b as Z,ab as M,ac as q,bc as Q,ca as T,cb as z,da as E,db as G,ea as d,ga as _,ja as N,jb as c,ma as B,pb as u,qa as A,qb as f,sb as W,va as j,xa as H}from"./chunk-SIIGMNMD.js";import{a as s}from"./chunk-GAL4ENT6.js";var ue=(n,he)=>({hidden:n,block:he,absolute:!0,"bg-blue-600":!0,"w-full":!0,"top-16":!0,"left-0":!0,"p-5":!0,"lg:static":!0,"lg:flex":!0,"lg:w-auto":!0,"lg:top-0":!0,"lg:left-0":!0}),ke=(()=>{class n{constructor(){this.menuOpen=!1}toggleMenu(){this.menuOpen=!this.menuOpen}onScroll(){this.menuOpen&&(this.menuOpen=!1)}static{this.\u0275fac=function(t){return new(t||n)}}static{this.\u0275cmp=h({type:n,selectors:[["app-header"]],hostBindings:function(t,i){t&1&&M("scroll",function(w){return i.onScroll(w)},!1,j)},standalone:!0,features:[f],decls:18,vars:4,consts:[[1,"bg-blue-600","text-white","p-5"],[1,"container","mx-auto","flex","justify-between","items-center","relative"],[1,"text-3xl","font-bold"],[1,"lg:hidden","block","text-white",3,"click"],["xmlns","http://www.w3.org/2000/svg","fill","none","viewBox","0 0 24 24","stroke","currentColor",1,"w-6","h-6"],["stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","M4 6h16M4 12h16M4 18h16"],[1,"menu-android",3,"ngClass"],[1,"flex","flex-col","lg:flex-row","space-y-4","lg:space-y-0","lg:space-x-6"],["routerLink","/index",1,"hover:text-blue-300"],["routerLink","/portafolio",1,"hover:text-blue-300"],["routerLink","/portafolio/contacto",1,"hover:text-blue-300"]],template:function(t,i){t&1&&(r(0,"header",0)(1,"div",1)(2,"h1",2),c(3,"Mi Portafolio"),a(),r(4,"button",3),M("click",function(){return i.toggleMenu()}),T(),r(5,"svg",4),$(6,"path",5),a()(),E(),r(7,"nav",6)(8,"ul",7)(9,"li")(10,"a",8),c(11,"Sobre m\xED"),a()(),r(12,"li")(13,"a",9),c(14,"Portafolio"),a()(),r(15,"li")(16,"a",10),c(17,"Contacto"),a()()()()()()),t&2&&(H(7),V("ngClass",W(1,ue,!i.menuOpen,i.menuOpen)))},dependencies:[ee,Z,X],styles:[".menu-android{font-size:15pt}@media (max-width: 1100px){.menu-android[_ngcontent-%COMP%]{width:100%;z-index:999;position:fixed}}@media (max-width: 768px){.menu-android[_ngcontent-%COMP%]{width:100%;z-index:999;position:fixed}}"]})}}return n})();var Me=(()=>{class n{static{this.\u0275fac=function(t){return new(t||n)}}static{this.\u0275cmp=h({type:n,selectors:[["app-footer"]],standalone:!0,features:[f],decls:3,vars:0,consts:[[1,"bg-blue-600","text-white","py-4","text-center"]],template:function(t,i){t&1&&(r(0,"footer",0)(1,"p"),c(2,"\xA9 2024 Yilson Alexis Malambo Madrigal, chatGPT. Todos los derechos reservados."),a()())}})}}return n})();var pe=(()=>{class n extends l{name="common";static \u0275fac=(()=>{let e;return function(i){return(e||(e=d(n)))(i||n)}})();static \u0275prov=m({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),k=(()=>{class n{document=o(U);platformId=o(A);el=o(B);injector=o(_);cd=o(J);renderer=o(P);config=o(ce);baseComponentStyle=o(pe);baseStyle=o(l);scopedStyleEl;rootEl;dt;get styleOptions(){return{nonce:this.config?.csp().nonce}}get _name(){return this.constructor.name.replace(/^_/,"").toLowerCase()}get componentStyle(){return this._componentStyle}attrSelector=le("pc");_getHostInstance(e){if(e)return e?this.hostName?e.name===this.hostName?e:this._getHostInstance(e.parentInstance):e.parentInstance:void 0}_getOptionValue(e,t="",i={}){return ae(e,t,i)}ngOnInit(){this.document&&this._loadStyles()}ngAfterViewInit(){this.rootEl=this.el?.nativeElement,this.rootEl&&this.rootEl?.setAttribute(this.attrSelector,"")}ngOnChanges(e){if(this.document&&!Q(this.platformId)){let{dt:t}=e;t&&t.currentValue&&(this._loadScopedThemeStyles(t.currentValue),this._themeChangeListener(()=>this._loadScopedThemeStyles(t.currentValue)))}}ngOnDestroy(){this._unloadScopedThemeStyles()}_loadStyles(){let e=()=>{y.isStyleNameLoaded("base")||(this.baseStyle.loadCSS(this.styleOptions),y.setLoadedStyleName("base")),this._loadThemeStyles()};e(),this._themeChangeListener(()=>e())}_loadCoreStyles(){!y.isStyleNameLoaded("base")&&this._name&&(this.baseComponentStyle.loadCSS(this.styleOptions),this.componentStyle&&this.componentStyle?.loadCSS(this.styleOptions),y.setLoadedStyleName(this.componentStyle?.name))}_loadThemeStyles(){if(!p.isStyleNameLoaded("common")){let{primitive:e,semantic:t,global:i,style:g}=this.componentStyle?.getCommonTheme?.()||{};this.baseStyle.load(e?.css,s({name:"primitive-variables"},this.styleOptions)),this.baseStyle.load(t?.css,s({name:"semantic-variables"},this.styleOptions)),this.baseStyle.load(i?.css,s({name:"global-variables"},this.styleOptions)),this.baseStyle.loadTheme(s({name:"global-style"},this.styleOptions),g),p.setLoadedStyleName("common")}if(!p.isStyleNameLoaded(this.componentStyle?.name)&&this.componentStyle?.name){let{css:e,style:t}=this.componentStyle?.getComponentTheme?.()||{};this.componentStyle?.load(e,s({name:`${this.componentStyle?.name}-variables`},this.styleOptions)),this.componentStyle?.loadTheme(s({name:`${this.componentStyle?.name}-style`},this.styleOptions),t),p.setLoadedStyleName(this.componentStyle?.name)}if(!p.isStyleNameLoaded("layer-order")){let e=this.componentStyle?.getLayerOrderThemeCSS?.();this.baseStyle.load(e,s({name:"layer-order",first:!0},this.styleOptions)),p.setLoadedStyleName("layer-order")}this.dt&&(this._loadScopedThemeStyles(this.dt),this._themeChangeListener(()=>this._loadScopedThemeStyles(this.dt)))}_loadScopedThemeStyles(e){let{css:t}=this.componentStyle?.getPresetTheme?.(e,`[${this.attrSelector}]`)||{},i=this.componentStyle?.load(t,s({name:`${this.attrSelector}-${this.componentStyle?.name}`},this.styleOptions));this.scopedStyleEl=i?.el}_unloadScopedThemeStyles(){this.scopedStyleEl?.remove()}_themeChangeListener(e=()=>{}){y.clearLoadedStyleNames(),de.on("theme:change",e)}cx(e,t){let i=this.parent?this.parent.componentStyle?.classes?.[e]:this.componentStyle?.classes?.[e];return typeof i=="function"?i({instance:this}):typeof i=="string"?i:e}sx(e){let t=this.componentStyle?.inlineStyles?.[e];return typeof t=="function"?t({instance:this}):typeof t=="string"?t:s({},t)}get parent(){return this.parentInstance}static \u0275fac=function(t){return new(t||n)};static \u0275dir=b({type:n,inputs:{dt:"dt"},standalone:!0,features:[u([pe,l]),F]})}return n})();var fe=({dt:n})=>`
/* For PrimeNG */
.p-ripple {
    overflow: hidden;
    position: relative;
}

.p-ink {
    display: block;
    position: absolute;
    background: ${n("ripple.background")};
    border-radius: 100%;
    transform: scale(0);
}

.p-ink-active {
    animation: ripple 0.4s linear;
}

.p-ripple-disabled .p-ink {
    display: none !important;
}

@keyframes ripple {
    100% {
        opacity: 0;
        transform: scale(2.5);
    }
}
`,ye={root:"p-ink"},me=(()=>{class n extends l{name="ripple";theme=fe;classes=ye;static \u0275fac=(()=>{let e;return function(i){return(e||(e=d(n)))(i||n)}})();static \u0275prov=m({token:n,factory:n.\u0275fac})}return n})();var Ye=(()=>{class n extends k{zone=o(N);_componentStyle=o(me);animationListener;mouseDownListener;timeout;constructor(){super(),K(()=>{q(this.platformId)&&(this.config.ripple()?this.zone.runOutsideAngular(()=>{this.create(),this.mouseDownListener=this.renderer.listen(this.el.nativeElement,"mousedown",this.onMouseDown.bind(this))}):this.remove())})}ngAfterViewInit(){super.ngAfterViewInit()}onMouseDown(e){let t=this.getInk();if(!t||this.document.defaultView?.getComputedStyle(t,null).display==="none")return;if(v(t,"p-ink-active"),!D(t)&&!I(t)){let S=Math.max(ne(this.el.nativeElement),oe(this.el.nativeElement));t.style.height=S+"px",t.style.width=S+"px"}let i=ie(this.el.nativeElement),g=e.pageX-i.left+this.document.body.scrollTop-I(t)/2,w=e.pageY-i.top+this.document.body.scrollLeft-D(t)/2;this.renderer.setStyle(t,"top",w+"px"),this.renderer.setStyle(t,"left",g+"px"),te(t,"p-ink-active"),this.timeout=setTimeout(()=>{let S=this.getInk();S&&v(S,"p-ink-active")},401)}getInk(){let e=this.el.nativeElement.children;for(let t=0;t<e.length;t++)if(typeof e[t].className=="string"&&e[t].className.indexOf("p-ink")!==-1)return e[t];return null}resetInk(){let e=this.getInk();e&&v(e,"p-ink-active")}onAnimationEnd(e){this.timeout&&clearTimeout(this.timeout),v(e.currentTarget,"p-ink-active")}create(){let e=this.renderer.createElement("span");this.renderer.addClass(e,"p-ink"),this.renderer.appendChild(this.el.nativeElement,e),this.renderer.setAttribute(e,"aria-hidden","true"),this.renderer.setAttribute(e,"role","presentation"),this.animationListener||(this.animationListener=this.renderer.listen(e,"animationend",this.onAnimationEnd.bind(this)))}remove(){let e=this.getInk();e&&(this.mouseDownListener&&this.mouseDownListener(),this.animationListener&&this.animationListener(),this.mouseDownListener=null,this.animationListener=null,se(e))}ngOnDestroy(){this.config&&this.config.ripple()&&this.remove(),super.ngOnDestroy()}static \u0275fac=function(t){return new(t||n)};static \u0275dir=b({type:n,selectors:[["","pRipple",""]],hostAttrs:[1,"p-ripple"],standalone:!0,features:[u([me]),C]})}return n})(),Ke=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=O({type:n});static \u0275inj=L({})}return n})();var ge=`
.p-icon {
    display: inline-block;
    vertical-align: baseline;
}

.p-icon-spin {
    -webkit-animation: p-icon-spin 2s infinite linear;
    animation: p-icon-spin 2s infinite linear;
}

@-webkit-keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}

@keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}
`,Se=(()=>{class n extends l{name="baseicon";inlineStyles=ge;static \u0275fac=(()=>{let e;return function(i){return(e||(e=d(n)))(i||n)}})();static \u0275prov=m({token:n,factory:n.\u0275fac})}return n})();var ve=["*"],st=(()=>{class n extends k{label;spin=!1;styleClass;role;ariaLabel;ariaHidden;ngOnInit(){super.ngOnInit(),this.getAttributes()}getAttributes(){let e=re(this.label);this.role=e?void 0:"img",this.ariaLabel=e?void 0:this.label,this.ariaHidden=e}getClassNames(){return`p-icon ${this.styleClass?this.styleClass+" ":""}${this.spin?"p-icon-spin":""}`}static \u0275fac=(()=>{let e;return function(i){return(e||(e=d(n)))(i||n)}})();static \u0275cmp=h({type:n,selectors:[["ng-component"]],hostAttrs:[1,"p-component","p-iconwrapper"],inputs:{label:"label",spin:[2,"spin","spin",Y],styleClass:"styleClass"},standalone:!0,features:[u([Se]),R,C,f],ngContentSelectors:ve,decls:1,vars:0,template:function(t,i){t&1&&(z(),G(0))},encapsulation:2,changeDetection:0})}return n})();export{ke as a,Me as b,k as c,Ye as d,Ke as e,st as f};
