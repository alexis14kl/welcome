import{A as He,B as Cn,C as En,E as ge,F as X,G as ze,H as At,I as qt,J as F,K as Tn,a as jt,b as De,c as Kt,d as gn,e as vn,f as yn,g as _n,i as at,j as Oe,k as In,l as xt,m as Rt,o as Re,p as xn,q as mt,r as Fe,s as Ae,t as wn,u as Sn,w as Ft,x as ft,z as Be}from"./chunk-WMVXD6C3.js";import{d as mn,e as fn,f as Dt,g as me,h as oe,i as z,j as N,k as bn,t as fe,u as $t,v as be,x as Ot}from"./chunk-DLYDPJRP.js";import{$a as kt,$b as Pt,Ab as ue,B as tn,Bb as tt,Ca as Le,Cb as cn,Da as ce,Db as u,E as Et,Eb as ot,F as en,Fb as rt,Gb as st,Ha as de,Hb as ne,Ia as h,Ib as Z,Jb as U,Ka as rn,Kb as Mt,Lb as dn,Ma as te,Mb as ut,N as Vt,Na as D,Nb as ie,Ob as v,Pa as sn,Pb as P,Qb as It,Rb as un,T as H,Ta as T,U as j,Ua as q,Va as it,W as nn,Wa as L,Wb as R,Xb as pn,Y as x,Ya as S,Yb as Me,Zb as pe,_a as I,ca as G,da as Q,dc as Pe,ea as K,ec as he,f as zt,gc as pt,ha as on,ia as Wt,ic as Xt,kb as E,kc as hn,ma as le,nb as an,nc as k,ob as ln,oc as et,pb as p,qa as Tt,qb as y,ra as w,rb as _,sb as C,ta as _t,tb as Yt,u as ht,ub as Nt,v as Ue,vb as lt,w as Ge,wb as ct,x as Qe,xa as gt,xb as dt,y as Je,yb as ee,zb as Lt}from"./chunk-2FSLHYE2.js";import{a as B,b as Ze}from"./chunk-GAL4ENT6.js";function Zt(...e){if(e){let o=[];for(let t=0;t<e.length;t++){let n=e[t];if(!n)continue;let i=typeof n;if(i==="string"||i==="number")o.push(n);else if(i==="object"){let r=Array.isArray(n)?[Zt(...n)]:Object.entries(n).map(([s,a])=>a?s:void 0);o=r.length?o.concat(r.filter(s=>!!s)):o}}return o.join(" ").trim()}}var ve={};function vt(e="pui_id_"){return Object.hasOwn(ve,e)||(ve[e]=0),ve[e]++,`${e}${ve[e]}`}var kn=(()=>{class e extends F{name="common";static \u0275fac=(()=>{let t;return function(i){return(t||(t=w(e)))(i||e)}})();static \u0275prov=H({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),V=(()=>{class e{document=x(Wt);platformId=x(gt);el=x(_t);injector=x(on);cd=x(Xt);renderer=x(te);config=x(Tn);baseComponentStyle=x(kn);baseStyle=x(F);scopedStyleEl;rootEl;dt;get styleOptions(){return{nonce:this.config?.csp().nonce}}get _name(){return this.constructor.name.replace(/^_/,"").toLowerCase()}get componentStyle(){return this._componentStyle}attrSelector=vt("pc");themeChangeListeners=[];_getHostInstance(t){if(t)return t?this.hostName?t.name===this.hostName?t:this._getHostInstance(t.parentInstance):t.parentInstance:void 0}_getOptionValue(t,n="",i={}){return Cn(t,n,i)}ngOnInit(){this.document&&(this._loadCoreStyles(),this._loadStyles())}ngAfterViewInit(){this.rootEl=this.el?.nativeElement,this.rootEl&&this.rootEl?.setAttribute(this.attrSelector,"")}ngOnChanges(t){if(this.document&&!bn(this.platformId)){let{dt:n}=t;n&&n.currentValue&&(this._loadScopedThemeStyles(n.currentValue),this._themeChangeListener(()=>this._loadScopedThemeStyles(n.currentValue)))}}ngOnDestroy(){this._unloadScopedThemeStyles(),this.themeChangeListeners.forEach(t=>ze.off("theme:change",t))}_loadStyles(){let t=()=>{qt.isStyleNameLoaded("base")||(this.baseStyle.loadGlobalCSS(this.styleOptions),qt.setLoadedStyleName("base")),this._loadThemeStyles()};t(),this._themeChangeListener(()=>t())}_loadCoreStyles(){!qt.isStyleNameLoaded("base")&&this.componentStyle?.name&&(this.baseComponentStyle.loadCSS(this.styleOptions),this.componentStyle&&this.componentStyle?.loadCSS(this.styleOptions),qt.setLoadedStyleName(this.componentStyle?.name))}_loadThemeStyles(){if(!At.isStyleNameLoaded("common")){let{primitive:t,semantic:n,global:i,style:r}=this.componentStyle?.getCommonTheme?.()||{};this.baseStyle.load(t?.css,B({name:"primitive-variables"},this.styleOptions)),this.baseStyle.load(n?.css,B({name:"semantic-variables"},this.styleOptions)),this.baseStyle.load(i?.css,B({name:"global-variables"},this.styleOptions)),this.baseStyle.loadGlobalTheme(B({name:"global-style"},this.styleOptions),r),At.setLoadedStyleName("common")}if(!At.isStyleNameLoaded(this.componentStyle?.name)&&this.componentStyle?.name){let{css:t,style:n}=this.componentStyle?.getComponentTheme?.()||{};this.componentStyle?.load(t,B({name:`${this.componentStyle?.name}-variables`},this.styleOptions)),this.componentStyle?.loadTheme(B({name:`${this.componentStyle?.name}-style`},this.styleOptions),n),At.setLoadedStyleName(this.componentStyle?.name)}if(!At.isStyleNameLoaded("layer-order")){let t=this.componentStyle?.getLayerOrderThemeCSS?.();this.baseStyle.load(t,B({name:"layer-order",first:!0},this.styleOptions)),At.setLoadedStyleName("layer-order")}this.dt&&(this._loadScopedThemeStyles(this.dt),this._themeChangeListener(()=>this._loadScopedThemeStyles(this.dt)))}_loadScopedThemeStyles(t){let{css:n}=this.componentStyle?.getPresetTheme?.(t,`[${this.attrSelector}]`)||{},i=this.componentStyle?.load(n,B({name:`${this.attrSelector}-${this.componentStyle?.name}`},this.styleOptions));this.scopedStyleEl=i?.el}_unloadScopedThemeStyles(){this.scopedStyleEl?.remove()}_themeChangeListener(t=()=>{}){qt.clearLoadedStyleNames(),ze.on("theme:change",t),this.themeChangeListeners.push(t)}cx(t,n={}){return Zt(this._getOptionValue(this.$style?.classes,t,B({instance:this},n)))}sx(t="",n=!0,i={}){if(n)return this._getOptionValue(this.$style?.inlineStyles,t,B({instance:this},i))}get parent(){return this.parentInstance}get $style(){return this.parent?this.parent.componentStyle:this.componentStyle}cn=Zt;static \u0275fac=function(n){return new(n||e)};static \u0275dir=it({type:e,inputs:{dt:"dt"},features:[R([kn,F]),Tt]})}return e})();var Ln=`
    .p-badge {
        display: inline-flex;
        border-radius: dt('badge.border.radius');
        align-items: center;
        justify-content: center;
        padding: dt('badge.padding');
        background: dt('badge.primary.background');
        color: dt('badge.primary.color');
        font-size: dt('badge.font.size');
        font-weight: dt('badge.font.weight');
        min-width: dt('badge.min.width');
        height: dt('badge.height');
    }

    .p-badge-dot {
        width: dt('badge.dot.size');
        min-width: dt('badge.dot.size');
        height: dt('badge.dot.size');
        border-radius: 50%;
        padding: 0;
    }

    .p-badge-circle {
        padding: 0;
        border-radius: 50%;
    }

    .p-badge-secondary {
        background: dt('badge.secondary.background');
        color: dt('badge.secondary.color');
    }

    .p-badge-success {
        background: dt('badge.success.background');
        color: dt('badge.success.color');
    }

    .p-badge-info {
        background: dt('badge.info.background');
        color: dt('badge.info.color');
    }

    .p-badge-warn {
        background: dt('badge.warn.background');
        color: dt('badge.warn.color');
    }

    .p-badge-danger {
        background: dt('badge.danger.background');
        color: dt('badge.danger.color');
    }

    .p-badge-contrast {
        background: dt('badge.contrast.background');
        color: dt('badge.contrast.color');
    }

    .p-badge-sm {
        font-size: dt('badge.sm.font.size');
        min-width: dt('badge.sm.min.width');
        height: dt('badge.sm.height');
    }

    .p-badge-lg {
        font-size: dt('badge.lg.font.size');
        min-width: dt('badge.lg.min.width');
        height: dt('badge.lg.height');
    }

    .p-badge-xl {
        font-size: dt('badge.xl.font.size');
        min-width: dt('badge.xl.min.width');
        height: dt('badge.xl.height');
    }
`;var wi=`
    ${Ln}

    /* For PrimeNG (directive)*/
    .p-overlay-badge {
        position: relative;
    }

    .p-overlay-badge > .p-badge {
        position: absolute;
        top: 0;
        inset-inline-end: 0;
        transform: translate(50%, -50%);
        transform-origin: 100% 0;
        margin: 0;
    }
`,Si={root:({instance:e})=>["p-badge p-component",{"p-badge-circle":ft(e.value())&&String(e.value()).length===1,"p-badge-dot":Ft(e.value()),"p-badge-sm":e.size()==="small"||e.badgeSize()==="small","p-badge-lg":e.size()==="large"||e.badgeSize()==="large","p-badge-xl":e.size()==="xlarge"||e.badgeSize()==="xlarge","p-badge-info":e.severity()==="info","p-badge-success":e.severity()==="success","p-badge-warn":e.severity()==="warn","p-badge-danger":e.severity()==="danger","p-badge-secondary":e.severity()==="secondary","p-badge-contrast":e.severity()==="contrast"}]},Mn=(()=>{class e extends F{name="badge";theme=wi;classes=Si;static \u0275fac=(()=>{let t;return function(i){return(t||(t=w(e)))(i||e)}})();static \u0275prov=H({token:e,factory:e.\u0275fac})}return e})();var re=(()=>{class e extends V{styleClass=pt();badgeSize=pt();size=pt();severity=pt();value=pt();badgeDisabled=pt(!1,{transform:k});_componentStyle=x(Mn);static \u0275fac=(()=>{let t;return function(i){return(t||(t=w(e)))(i||e)}})();static \u0275cmp=T({type:e,selectors:[["p-badge"]],hostVars:4,hostBindings:function(n,i){n&2&&(v(i.cn(i.cx("root"),i.styleClass())),dn("display",i.badgeDisabled()?"none":null))},inputs:{styleClass:[1,"styleClass"],badgeSize:[1,"badgeSize"],size:[1,"size"],severity:[1,"severity"],value:[1,"value"],badgeDisabled:[1,"badgeDisabled"]},features:[R([Mn]),L],decls:1,vars:1,template:function(n,i){n&1&&P(0),n&2&&It(i.value())},dependencies:[z,X],encapsulation:2,changeDetection:0})}return e})(),Bt=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=q({type:e});static \u0275inj=j({imports:[re,X,X]})}return e})();var Ci=["*"],Ei=`
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
`,Dn=(()=>{class e extends F{name="baseicon";css=Ei;static \u0275fac=(()=>{let t;return function(i){return(t||(t=w(e)))(i||e)}})();static \u0275prov=H({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var wt=(()=>{class e extends V{spin=!1;_componentStyle=x(Dn);getClassNames(){return Zt("p-icon",{"p-icon-spin":this.spin})}static \u0275fac=(()=>{let t;return function(i){return(t||(t=w(e)))(i||e)}})();static \u0275cmp=T({type:e,selectors:[["ng-component"]],hostAttrs:["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],hostVars:2,hostBindings:function(n,i){n&2&&v(i.getClassNames())},inputs:{spin:[2,"spin","spin",k]},features:[R([Dn]),L],ngContentSelectors:Ci,decls:1,vars:0,template:function(n,i){n&1&&(ot(),rt(0))},encapsulation:2,changeDetection:0})}return e})();var Ti=["data-p-icon","angle-down"],On=(()=>{class e extends wt{static \u0275fac=(()=>{let t;return function(i){return(t||(t=w(e)))(i||e)}})();static \u0275cmp=T({type:e,selectors:[["","data-p-icon","angle-down"]],features:[L],attrs:Ti,decls:1,vars:0,consts:[["d","M3.58659 4.5007C3.68513 4.50023 3.78277 4.51945 3.87379 4.55723C3.9648 4.59501 4.04735 4.65058 4.11659 4.7207L7.11659 7.7207L10.1166 4.7207C10.2619 4.65055 10.4259 4.62911 10.5843 4.65956C10.7427 4.69002 10.8871 4.77074 10.996 4.88976C11.1049 5.00877 11.1726 5.15973 11.1889 5.32022C11.2052 5.48072 11.1693 5.6422 11.0866 5.7807L7.58659 9.2807C7.44597 9.42115 7.25534 9.50004 7.05659 9.50004C6.85784 9.50004 6.66722 9.42115 6.52659 9.2807L3.02659 5.7807C2.88614 5.64007 2.80725 5.44945 2.80725 5.2507C2.80725 5.05195 2.88614 4.86132 3.02659 4.7207C3.09932 4.64685 3.18675 4.58911 3.28322 4.55121C3.37969 4.51331 3.48305 4.4961 3.58659 4.5007Z","fill","currentColor"]],template:function(n,i){n&1&&(K(),lt(0,"path",0))},encapsulation:2})}return e})();var ki=["data-p-icon","angle-right"],Rn=(()=>{class e extends wt{static \u0275fac=(()=>{let t;return function(i){return(t||(t=w(e)))(i||e)}})();static \u0275cmp=T({type:e,selectors:[["","data-p-icon","angle-right"]],features:[L],attrs:ki,decls:1,vars:0,consts:[["d","M5.25 11.1728C5.14929 11.1694 5.05033 11.1455 4.9592 11.1025C4.86806 11.0595 4.78666 10.9984 4.72 10.9228C4.57955 10.7822 4.50066 10.5916 4.50066 10.3928C4.50066 10.1941 4.57955 10.0035 4.72 9.86283L7.72 6.86283L4.72 3.86283C4.66067 3.71882 4.64765 3.55991 4.68275 3.40816C4.71785 3.25642 4.79932 3.11936 4.91585 3.01602C5.03238 2.91268 5.17819 2.84819 5.33305 2.83149C5.4879 2.81479 5.64411 2.84671 5.78 2.92283L9.28 6.42283C9.42045 6.56346 9.49934 6.75408 9.49934 6.95283C9.49934 7.15158 9.42045 7.34221 9.28 7.48283L5.78 10.9228C5.71333 10.9984 5.63193 11.0595 5.5408 11.1025C5.44966 11.1455 5.35071 11.1694 5.25 11.1728Z","fill","currentColor"]],template:function(n,i){n&1&&(K(),lt(0,"path",0))},encapsulation:2})}return e})();var Li=["data-p-icon","bars"],Fn=(()=>{class e extends wt{static \u0275fac=(()=>{let t;return function(i){return(t||(t=w(e)))(i||e)}})();static \u0275cmp=T({type:e,selectors:[["","data-p-icon","bars"]],features:[L],attrs:Li,decls:1,vars:0,consts:[["fill-rule","evenodd","clip-rule","evenodd","d","M13.3226 3.6129H0.677419C0.497757 3.6129 0.325452 3.54152 0.198411 3.41448C0.0713707 3.28744 0 3.11514 0 2.93548C0 2.75581 0.0713707 2.58351 0.198411 2.45647C0.325452 2.32943 0.497757 2.25806 0.677419 2.25806H13.3226C13.5022 2.25806 13.6745 2.32943 13.8016 2.45647C13.9286 2.58351 14 2.75581 14 2.93548C14 3.11514 13.9286 3.28744 13.8016 3.41448C13.6745 3.54152 13.5022 3.6129 13.3226 3.6129ZM13.3226 7.67741H0.677419C0.497757 7.67741 0.325452 7.60604 0.198411 7.479C0.0713707 7.35196 0 7.17965 0 6.99999C0 6.82033 0.0713707 6.64802 0.198411 6.52098C0.325452 6.39394 0.497757 6.32257 0.677419 6.32257H13.3226C13.5022 6.32257 13.6745 6.39394 13.8016 6.52098C13.9286 6.64802 14 6.82033 14 6.99999C14 7.17965 13.9286 7.35196 13.8016 7.479C13.6745 7.60604 13.5022 7.67741 13.3226 7.67741ZM0.677419 11.7419H13.3226C13.5022 11.7419 13.6745 11.6706 13.8016 11.5435C13.9286 11.4165 14 11.2442 14 11.0645C14 10.8848 13.9286 10.7125 13.8016 10.5855C13.6745 10.4585 13.5022 10.3871 13.3226 10.3871H0.677419C0.497757 10.3871 0.325452 10.4585 0.198411 10.5855C0.0713707 10.7125 0 10.8848 0 11.0645C0 11.2442 0.0713707 11.4165 0.198411 11.5435C0.325452 11.6706 0.497757 11.7419 0.677419 11.7419Z","fill","currentColor"]],template:function(n,i){n&1&&(K(),lt(0,"path",0))},encapsulation:2})}return e})();var Mi=["data-p-icon","spinner"],An=(()=>{class e extends wt{pathId;ngOnInit(){super.ngOnInit(),this.pathId="url(#"+vt()+")"}static \u0275fac=(()=>{let t;return function(i){return(t||(t=w(e)))(i||e)}})();static \u0275cmp=T({type:e,selectors:[["","data-p-icon","spinner"]],features:[L],attrs:Mi,decls:5,vars:2,consts:[["d","M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(n,i){n&1&&(K(),Yt(0,"g"),lt(1,"path",0),Nt(),Yt(2,"defs")(3,"clipPath",1),lt(4,"rect",2),Nt()()),n&2&&(E("clip-path",i.pathId),h(3),ue("id",i.pathId))},encapsulation:2})}return e})();var Bn=`
    .p-ink {
        display: block;
        position: absolute;
        background: dt('ripple.background');
        border-radius: 100%;
        transform: scale(0);
        pointer-events: none;
    }

    .p-ink-active {
        animation: ripple 0.4s linear;
    }

    @keyframes ripple {
        100% {
            opacity: 0;
            transform: scale(2.5);
        }
    }
`;var Pi=`
    ${Bn}
    /* For PrimeNG */
    .p-ripple {
        overflow: hidden;
        position: relative;
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
`,Di={root:"p-ink"},Hn=(()=>{class e extends F{name="ripple";theme=Pi;classes=Di;static \u0275fac=(()=>{let t;return function(i){return(t||(t=w(e)))(i||e)}})();static \u0275prov=H({token:e,factory:e.\u0275fac})}return e})();var ye=(()=>{class e extends V{zone=x(kt);_componentStyle=x(Hn);animationListener;mouseDownListener;timeout;constructor(){super(),he(()=>{N(this.platformId)&&(this.config.ripple()?this.zone.runOutsideAngular(()=>{this.create(),this.mouseDownListener=this.renderer.listen(this.el.nativeElement,"mousedown",this.onMouseDown.bind(this))}):this.remove())})}ngAfterViewInit(){super.ngAfterViewInit()}onMouseDown(t){let n=this.getInk();if(!n||this.document.defaultView?.getComputedStyle(n,null).display==="none")return;if(Kt(n,"p-ink-active"),!Re(n)&&!Fe(n)){let a=Math.max(at(this.el.nativeElement),mt(this.el.nativeElement));n.style.height=a+"px",n.style.width=a+"px"}let i=xn(this.el.nativeElement),r=t.pageX-i.left+this.document.body.scrollTop-Fe(n)/2,s=t.pageY-i.top+this.document.body.scrollLeft-Re(n)/2;this.renderer.setStyle(n,"top",s+"px"),this.renderer.setStyle(n,"left",r+"px"),De(n,"p-ink-active"),this.timeout=setTimeout(()=>{let a=this.getInk();a&&Kt(a,"p-ink-active")},401)}getInk(){let t=this.el.nativeElement.children;for(let n=0;n<t.length;n++)if(typeof t[n].className=="string"&&t[n].className.indexOf("p-ink")!==-1)return t[n];return null}resetInk(){let t=this.getInk();t&&Kt(t,"p-ink-active")}onAnimationEnd(t){this.timeout&&clearTimeout(this.timeout),Kt(t.currentTarget,"p-ink-active")}create(){let t=this.renderer.createElement("span");this.renderer.addClass(t,"p-ink"),this.renderer.appendChild(this.el.nativeElement,t),this.renderer.setAttribute(t,"aria-hidden","true"),this.renderer.setAttribute(t,"role","presentation"),this.animationListener||(this.animationListener=this.renderer.listen(t,"animationend",this.onAnimationEnd.bind(this)))}remove(){let t=this.getInk();t&&(this.mouseDownListener&&this.mouseDownListener(),this.animationListener&&this.animationListener(),this.mouseDownListener=null,this.animationListener=null,wn(t))}ngOnDestroy(){this.config&&this.config.ripple()&&this.remove(),super.ngOnDestroy()}static \u0275fac=function(n){return new(n||e)};static \u0275dir=it({type:e,selectors:[["","pRipple",""]],hostAttrs:[1,"p-ripple"],features:[R([Hn]),L]})}return e})(),qs=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=q({type:e});static \u0275inj=j({})}return e})();var Ve=(()=>{class e{static zindex=1e3;static calculatedScrollbarWidth=null;static calculatedScrollbarHeight=null;static browser;static addClass(t,n){t&&n&&(t.classList?t.classList.add(n):t.className+=" "+n)}static addMultipleClasses(t,n){if(t&&n)if(t.classList){let i=n.trim().split(" ");for(let r=0;r<i.length;r++)t.classList.add(i[r])}else{let i=n.split(" ");for(let r=0;r<i.length;r++)t.className+=" "+i[r]}}static removeClass(t,n){t&&n&&(t.classList?t.classList.remove(n):t.className=t.className.replace(new RegExp("(^|\\b)"+n.split(" ").join("|")+"(\\b|$)","gi")," "))}static removeMultipleClasses(t,n){t&&n&&[n].flat().filter(Boolean).forEach(i=>i.split(" ").forEach(r=>this.removeClass(t,r)))}static hasClass(t,n){return t&&n?t.classList?t.classList.contains(n):new RegExp("(^| )"+n+"( |$)","gi").test(t.className):!1}static siblings(t){return Array.prototype.filter.call(t.parentNode.children,function(n){return n!==t})}static find(t,n){return Array.from(t.querySelectorAll(n))}static findSingle(t,n){return this.isElement(t)?t.querySelector(n):null}static index(t){let n=t.parentNode.childNodes,i=0;for(var r=0;r<n.length;r++){if(n[r]==t)return i;n[r].nodeType==1&&i++}return-1}static indexWithinGroup(t,n){let i=t.parentNode?t.parentNode.childNodes:[],r=0;for(var s=0;s<i.length;s++){if(i[s]==t)return r;i[s].attributes&&i[s].attributes[n]&&i[s].nodeType==1&&r++}return-1}static appendOverlay(t,n,i="self"){i!=="self"&&t&&n&&this.appendChild(t,n)}static alignOverlay(t,n,i="self",r=!0){t&&n&&(r&&(t.style.minWidth=`${e.getOuterWidth(n)}px`),i==="self"?this.relativePosition(t,n):this.absolutePosition(t,n))}static relativePosition(t,n,i=!0){let r=Ct=>{if(Ct)return getComputedStyle(Ct).getPropertyValue("position")==="relative"?Ct:r(Ct.parentElement)},s=t.offsetParent?{width:t.offsetWidth,height:t.offsetHeight}:this.getHiddenElementDimensions(t),a=n.offsetHeight,l=n.getBoundingClientRect(),c=this.getWindowScrollTop(),m=this.getWindowScrollLeft(),d=this.getViewport(),b=r(t)?.getBoundingClientRect()||{top:-1*c,left:-1*m},g,M,W="top";l.top+a+s.height>d.height?(g=l.top-b.top-s.height,W="bottom",l.top+g<0&&(g=-1*l.top)):(g=a+l.top-b.top,W="top");let nt=l.left+s.width-d.width,Y=l.left-b.left;if(s.width>d.width?M=(l.left-b.left)*-1:nt>0?M=Y-nt:M=l.left-b.left,t.style.top=g+"px",t.style.left=M+"px",t.style.transformOrigin=W,i){let Ct=gn(/-anchor-gutter$/)?.value;t.style.marginTop=W==="bottom"?`calc(${Ct??"2px"} * -1)`:Ct??""}}static absolutePosition(t,n,i=!0){let r=t.offsetParent?{width:t.offsetWidth,height:t.offsetHeight}:this.getHiddenElementDimensions(t),s=r.height,a=r.width,l=n.offsetHeight,c=n.offsetWidth,m=n.getBoundingClientRect(),d=this.getWindowScrollTop(),f=this.getWindowScrollLeft(),b=this.getViewport(),g,M;m.top+l+s>b.height?(g=m.top+d-s,t.style.transformOrigin="bottom",g<0&&(g=d)):(g=l+m.top+d,t.style.transformOrigin="top"),m.left+a>b.width?M=Math.max(0,m.left+f+c-a):M=m.left+f,t.style.top=g+"px",t.style.left=M+"px",i&&(t.style.marginTop=origin==="bottom"?"calc(var(--p-anchor-gutter) * -1)":"calc(var(--p-anchor-gutter))")}static getParents(t,n=[]){return t.parentNode===null?n:this.getParents(t.parentNode,n.concat([t.parentNode]))}static getScrollableParents(t){let n=[];if(t){let i=this.getParents(t),r=/(auto|scroll)/,s=a=>{let l=window.getComputedStyle(a,null);return r.test(l.getPropertyValue("overflow"))||r.test(l.getPropertyValue("overflowX"))||r.test(l.getPropertyValue("overflowY"))};for(let a of i){let l=a.nodeType===1&&a.dataset.scrollselectors;if(l){let c=l.split(",");for(let m of c){let d=this.findSingle(a,m);d&&s(d)&&n.push(d)}}a.nodeType!==9&&s(a)&&n.push(a)}}return n}static getHiddenElementOuterHeight(t){t.style.visibility="hidden",t.style.display="block";let n=t.offsetHeight;return t.style.display="none",t.style.visibility="visible",n}static getHiddenElementOuterWidth(t){t.style.visibility="hidden",t.style.display="block";let n=t.offsetWidth;return t.style.display="none",t.style.visibility="visible",n}static getHiddenElementDimensions(t){let n={};return t.style.visibility="hidden",t.style.display="block",n.width=t.offsetWidth,n.height=t.offsetHeight,t.style.display="none",t.style.visibility="visible",n}static scrollInView(t,n){let i=getComputedStyle(t).getPropertyValue("borderTopWidth"),r=i?parseFloat(i):0,s=getComputedStyle(t).getPropertyValue("paddingTop"),a=s?parseFloat(s):0,l=t.getBoundingClientRect(),m=n.getBoundingClientRect().top+document.body.scrollTop-(l.top+document.body.scrollTop)-r-a,d=t.scrollTop,f=t.clientHeight,b=this.getOuterHeight(n);m<0?t.scrollTop=d+m:m+b>f&&(t.scrollTop=d+m-f+b)}static fadeIn(t,n){t.style.opacity=0;let i=+new Date,r=0,s=function(){r=+t.style.opacity.replace(",",".")+(new Date().getTime()-i)/n,t.style.opacity=r,i=+new Date,+r<1&&(window.requestAnimationFrame&&requestAnimationFrame(s)||setTimeout(s,16))};s()}static fadeOut(t,n){var i=1,r=50,s=n,a=r/s;let l=setInterval(()=>{i=i-a,i<=0&&(i=0,clearInterval(l)),t.style.opacity=i},r)}static getWindowScrollTop(){let t=document.documentElement;return(window.pageYOffset||t.scrollTop)-(t.clientTop||0)}static getWindowScrollLeft(){let t=document.documentElement;return(window.pageXOffset||t.scrollLeft)-(t.clientLeft||0)}static matches(t,n){var i=Element.prototype,r=i.matches||i.webkitMatchesSelector||i.mozMatchesSelector||i.msMatchesSelector||function(s){return[].indexOf.call(document.querySelectorAll(s),this)!==-1};return r.call(t,n)}static getOuterWidth(t,n){let i=t.offsetWidth;if(n){let r=getComputedStyle(t);i+=parseFloat(r.marginLeft)+parseFloat(r.marginRight)}return i}static getHorizontalPadding(t){let n=getComputedStyle(t);return parseFloat(n.paddingLeft)+parseFloat(n.paddingRight)}static getHorizontalMargin(t){let n=getComputedStyle(t);return parseFloat(n.marginLeft)+parseFloat(n.marginRight)}static innerWidth(t){let n=t.offsetWidth,i=getComputedStyle(t);return n+=parseFloat(i.paddingLeft)+parseFloat(i.paddingRight),n}static width(t){let n=t.offsetWidth,i=getComputedStyle(t);return n-=parseFloat(i.paddingLeft)+parseFloat(i.paddingRight),n}static getInnerHeight(t){let n=t.offsetHeight,i=getComputedStyle(t);return n+=parseFloat(i.paddingTop)+parseFloat(i.paddingBottom),n}static getOuterHeight(t,n){let i=t.offsetHeight;if(n){let r=getComputedStyle(t);i+=parseFloat(r.marginTop)+parseFloat(r.marginBottom)}return i}static getHeight(t){let n=t.offsetHeight,i=getComputedStyle(t);return n-=parseFloat(i.paddingTop)+parseFloat(i.paddingBottom)+parseFloat(i.borderTopWidth)+parseFloat(i.borderBottomWidth),n}static getWidth(t){let n=t.offsetWidth,i=getComputedStyle(t);return n-=parseFloat(i.paddingLeft)+parseFloat(i.paddingRight)+parseFloat(i.borderLeftWidth)+parseFloat(i.borderRightWidth),n}static getViewport(){let t=window,n=document,i=n.documentElement,r=n.getElementsByTagName("body")[0],s=t.innerWidth||i.clientWidth||r.clientWidth,a=t.innerHeight||i.clientHeight||r.clientHeight;return{width:s,height:a}}static getOffset(t){var n=t.getBoundingClientRect();return{top:n.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:n.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}}static replaceElementWith(t,n){let i=t.parentNode;if(!i)throw"Can't replace element";return i.replaceChild(n,t)}static getUserAgent(){if(navigator&&this.isClient())return navigator.userAgent}static isIE(){var t=window.navigator.userAgent,n=t.indexOf("MSIE ");if(n>0)return!0;var i=t.indexOf("Trident/");if(i>0){var r=t.indexOf("rv:");return!0}var s=t.indexOf("Edge/");return s>0}static isIOS(){return/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream}static isAndroid(){return/(android)/i.test(navigator.userAgent)}static isTouchDevice(){return"ontouchstart"in window||navigator.maxTouchPoints>0}static appendChild(t,n){if(this.isElement(n))n.appendChild(t);else if(n&&n.el&&n.el.nativeElement)n.el.nativeElement.appendChild(t);else throw"Cannot append "+n+" to "+t}static removeChild(t,n){if(this.isElement(n))n.removeChild(t);else if(n.el&&n.el.nativeElement)n.el.nativeElement.removeChild(t);else throw"Cannot remove "+t+" from "+n}static removeElement(t){"remove"in Element.prototype?t.remove():t.parentNode.removeChild(t)}static isElement(t){return typeof HTMLElement=="object"?t instanceof HTMLElement:t&&typeof t=="object"&&t!==null&&t.nodeType===1&&typeof t.nodeName=="string"}static calculateScrollbarWidth(t){if(t){let n=getComputedStyle(t);return t.offsetWidth-t.clientWidth-parseFloat(n.borderLeftWidth)-parseFloat(n.borderRightWidth)}else{if(this.calculatedScrollbarWidth!==null)return this.calculatedScrollbarWidth;let n=document.createElement("div");n.className="p-scrollbar-measure",document.body.appendChild(n);let i=n.offsetWidth-n.clientWidth;return document.body.removeChild(n),this.calculatedScrollbarWidth=i,i}}static calculateScrollbarHeight(){if(this.calculatedScrollbarHeight!==null)return this.calculatedScrollbarHeight;let t=document.createElement("div");t.className="p-scrollbar-measure",document.body.appendChild(t);let n=t.offsetHeight-t.clientHeight;return document.body.removeChild(t),this.calculatedScrollbarWidth=n,n}static invokeElementMethod(t,n,i){t[n].apply(t,i)}static clearSelection(){if(window.getSelection)window.getSelection().empty?window.getSelection().empty():window.getSelection().removeAllRanges&&window.getSelection().rangeCount>0&&window.getSelection().getRangeAt(0).getClientRects().length>0&&window.getSelection().removeAllRanges();else if(document.selection&&document.selection.empty)try{document.selection.empty()}catch{}}static getBrowser(){if(!this.browser){let t=this.resolveUserAgent();this.browser={},t.browser&&(this.browser[t.browser]=!0,this.browser.version=t.version),this.browser.chrome?this.browser.webkit=!0:this.browser.webkit&&(this.browser.safari=!0)}return this.browser}static resolveUserAgent(){let t=navigator.userAgent.toLowerCase(),n=/(chrome)[ \/]([\w.]+)/.exec(t)||/(webkit)[ \/]([\w.]+)/.exec(t)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(t)||/(msie) ([\w.]+)/.exec(t)||t.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(t)||[];return{browser:n[1]||"",version:n[2]||"0"}}static isInteger(t){return Number.isInteger?Number.isInteger(t):typeof t=="number"&&isFinite(t)&&Math.floor(t)===t}static isHidden(t){return!t||t.offsetParent===null}static isVisible(t){return t&&t.offsetParent!=null}static isExist(t){return t!==null&&typeof t<"u"&&t.nodeName&&t.parentNode}static focus(t,n){t&&document.activeElement!==t&&t.focus(n)}static getFocusableSelectorString(t=""){return`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        .p-inputtext:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        .p-button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t}`}static getFocusableElements(t,n=""){let i=this.find(t,this.getFocusableSelectorString(n)),r=[];for(let s of i){let a=getComputedStyle(s);this.isVisible(s)&&a.display!="none"&&a.visibility!="hidden"&&r.push(s)}return r}static getFocusableElement(t,n=""){let i=this.findSingle(t,this.getFocusableSelectorString(n));if(i){let r=getComputedStyle(i);if(this.isVisible(i)&&r.display!="none"&&r.visibility!="hidden")return i}return null}static getFirstFocusableElement(t,n=""){let i=this.getFocusableElements(t,n);return i.length>0?i[0]:null}static getLastFocusableElement(t,n){let i=this.getFocusableElements(t,n);return i.length>0?i[i.length-1]:null}static getNextFocusableElement(t,n=!1){let i=e.getFocusableElements(t),r=0;if(i&&i.length>0){let s=i.indexOf(i[0].ownerDocument.activeElement);n?s==-1||s===0?r=i.length-1:r=s-1:s!=-1&&s!==i.length-1&&(r=s+1)}return i[r]}static generateZIndex(){return this.zindex=this.zindex||999,++this.zindex}static getSelection(){return window.getSelection?window.getSelection().toString():document.getSelection?document.getSelection().toString():document.selection?document.selection.createRange().text:null}static getTargetElement(t,n){if(!t)return null;switch(t){case"document":return document;case"window":return window;case"@next":return n?.nextElementSibling;case"@prev":return n?.previousElementSibling;case"@parent":return n?.parentElement;case"@grandparent":return n?.parentElement.parentElement;default:let i=typeof t;if(i==="string")return document.querySelector(t);if(i==="object"&&t.hasOwnProperty("nativeElement"))return this.isExist(t.nativeElement)?t.nativeElement:void 0;let s=(a=>!!(a&&a.constructor&&a.call&&a.apply))(t)?t():t;return s&&s.nodeType===9||this.isExist(s)?s:null}}static isClient(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}static getAttribute(t,n){if(t){let i=t.getAttribute(n);return isNaN(i)?i==="true"||i==="false"?i==="true":i:+i}}static calculateBodyScrollbarWidth(){return window.innerWidth-document.documentElement.offsetWidth}static blockBodyScroll(t="p-overflow-hidden"){document.body.style.setProperty("--scrollbar-width",this.calculateBodyScrollbarWidth()+"px"),this.addClass(document.body,t)}static unblockBodyScroll(t="p-overflow-hidden"){document.body.style.removeProperty("--scrollbar-width"),this.removeClass(document.body,t)}static createElement(t,n={},...i){if(t){let r=document.createElement(t);return this.setAttributes(r,n),r.append(...i),r}}static setAttribute(t,n="",i){this.isElement(t)&&i!==null&&i!==void 0&&t.setAttribute(n,i)}static setAttributes(t,n={}){if(this.isElement(t)){let i=(r,s)=>{let a=t?.$attrs?.[r]?[t?.$attrs?.[r]]:[];return[s].flat().reduce((l,c)=>{if(c!=null){let m=typeof c;if(m==="string"||m==="number")l.push(c);else if(m==="object"){let d=Array.isArray(c)?i(r,c):Object.entries(c).map(([f,b])=>r==="style"&&(b||b===0)?`${f.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${b}`:b?f:void 0);l=d.length?l.concat(d.filter(f=>!!f)):l}}return l},a)};Object.entries(n).forEach(([r,s])=>{if(s!=null){let a=r.match(/^on(.+)/);a?t.addEventListener(a[1].toLowerCase(),s):r==="pBind"?this.setAttributes(t,s):(s=r==="class"?[...new Set(i("class",s))].join(" ").trim():r==="style"?i("style",s).join(";").trim():s,(t.$attrs=t.$attrs||{})&&(t.$attrs[r]=s),t.setAttribute(r,s))}})}}static isFocusableElement(t,n=""){return this.isElement(t)?t.matches(`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n}`):!1}}return e})();var _e=class{element;listener;scrollableParents;constructor(o,t=()=>{}){this.element=o,this.listener=t}bindScrollListener(){this.scrollableParents=Ve.getScrollableParents(this.element);for(let o=0;o<this.scrollableParents.length;o++)this.scrollableParents[o].addEventListener("scroll",this.listener)}unbindScrollListener(){if(this.scrollableParents)for(let o=0;o<this.scrollableParents.length;o++)this.scrollableParents[o].removeEventListener("scroll",this.listener)}destroy(){this.unbindScrollListener(),this.element=null,this.listener=null,this.scrollableParents=null}};function Oi(){let e=[],o=(r,s)=>{let a=e.length>0?e[e.length-1]:{key:r,value:s},l=a.value+(a.key===r?0:s)+2;return e.push({key:r,value:l}),l},t=r=>{e=e.filter(s=>s.value!==r)},n=()=>e.length>0?e[e.length-1].value:0,i=r=>r&&parseInt(r.style.zIndex,10)||0;return{get:i,set:(r,s,a)=>{s&&(s.style.zIndex=String(o(r,a)))},clear:r=>{r&&(t(i(r)),r.style.zIndex="")},getCurrent:()=>n(),generateZIndex:o,revertZIndex:t}}var Ht=Oi();var zn=`
    .p-tooltip {
        position: absolute;
        display: none;
        max-width: dt('tooltip.max.width');
    }

    .p-tooltip-right,
    .p-tooltip-left {
        padding: 0 dt('tooltip.gutter');
    }

    .p-tooltip-top,
    .p-tooltip-bottom {
        padding: dt('tooltip.gutter') 0;
    }

    .p-tooltip-text {
        white-space: pre-line;
        word-break: break-word;
        background: dt('tooltip.background');
        color: dt('tooltip.color');
        padding: dt('tooltip.padding');
        box-shadow: dt('tooltip.shadow');
        border-radius: dt('tooltip.border.radius');
    }

    .p-tooltip-arrow {
        position: absolute;
        width: 0;
        height: 0;
        border-color: transparent;
        border-style: solid;
    }

    .p-tooltip-right .p-tooltip-arrow {
        margin-top: calc(-1 * dt('tooltip.gutter'));
        border-width: dt('tooltip.gutter') dt('tooltip.gutter') dt('tooltip.gutter') 0;
        border-right-color: dt('tooltip.background');
    }

    .p-tooltip-left .p-tooltip-arrow {
        margin-top: calc(-1 * dt('tooltip.gutter'));
        border-width: dt('tooltip.gutter') 0 dt('tooltip.gutter') dt('tooltip.gutter');
        border-left-color: dt('tooltip.background');
    }

    .p-tooltip-top .p-tooltip-arrow {
        margin-left: calc(-1 * dt('tooltip.gutter'));
        border-width: dt('tooltip.gutter') dt('tooltip.gutter') 0 dt('tooltip.gutter');
        border-top-color: dt('tooltip.background');
        border-bottom-color: dt('tooltip.background');
    }

    .p-tooltip-bottom .p-tooltip-arrow {
        margin-left: calc(-1 * dt('tooltip.gutter'));
        border-width: 0 dt('tooltip.gutter') dt('tooltip.gutter') dt('tooltip.gutter');
        border-top-color: dt('tooltip.background');
        border-bottom-color: dt('tooltip.background');
    }
`;var Ri={root:"p-tooltip p-component",arrow:"p-tooltip-arrow",text:"p-tooltip-text"},Vn=(()=>{class e extends F{name="tooltip";theme=zn;classes=Ri;static \u0275fac=(()=>{let t;return function(i){return(t||(t=w(e)))(i||e)}})();static \u0275prov=H({token:e,factory:e.\u0275fac})}return e})();var Wn=(()=>{class e extends V{zone;viewContainer;tooltipPosition;tooltipEvent="hover";positionStyle;tooltipStyleClass;tooltipZIndex;escape=!0;showDelay;hideDelay;life;positionTop;positionLeft;autoHide=!0;fitContent=!0;hideOnEscape=!0;content;get disabled(){return this._disabled}set disabled(t){this._disabled=t,this.deactivate()}tooltipOptions;appendTo=pt(void 0);$appendTo=Pe(()=>this.appendTo()||this.config.overlayAppendTo());_tooltipOptions={tooltipLabel:null,tooltipPosition:"right",tooltipEvent:"hover",appendTo:"body",positionStyle:null,tooltipStyleClass:null,tooltipZIndex:"auto",escape:!0,disabled:null,showDelay:null,hideDelay:null,positionTop:null,positionLeft:null,life:null,autoHide:!0,hideOnEscape:!0,id:vt("pn_id_")+"_tooltip"};_disabled;container;styleClass;tooltipText;showTimeout;hideTimeout;active;mouseEnterListener;mouseLeaveListener;containerMouseleaveListener;clickListener;focusListener;blurListener;documentEscapeListener;scrollHandler;resizeListener;_componentStyle=x(Vn);interactionInProgress=!1;constructor(t,n){super(),this.zone=t,this.viewContainer=n}ngAfterViewInit(){super.ngAfterViewInit(),N(this.platformId)&&this.zone.runOutsideAngular(()=>{let t=this.getOption("tooltipEvent");if((t==="hover"||t==="both")&&(this.mouseEnterListener=this.onMouseEnter.bind(this),this.mouseLeaveListener=this.onMouseLeave.bind(this),this.clickListener=this.onInputClick.bind(this),this.el.nativeElement.addEventListener("mouseenter",this.mouseEnterListener),this.el.nativeElement.addEventListener("click",this.clickListener),this.el.nativeElement.addEventListener("mouseleave",this.mouseLeaveListener)),t==="focus"||t==="both"){this.focusListener=this.onFocus.bind(this),this.blurListener=this.onBlur.bind(this);let n=this.el.nativeElement.querySelector(".p-component");n||(n=this.getTarget(this.el.nativeElement)),n.addEventListener("focus",this.focusListener),n.addEventListener("blur",this.blurListener)}})}ngOnChanges(t){super.ngOnChanges(t),t.tooltipPosition&&this.setOption({tooltipPosition:t.tooltipPosition.currentValue}),t.tooltipEvent&&this.setOption({tooltipEvent:t.tooltipEvent.currentValue}),t.appendTo&&this.setOption({appendTo:t.appendTo.currentValue}),t.positionStyle&&this.setOption({positionStyle:t.positionStyle.currentValue}),t.tooltipStyleClass&&this.setOption({tooltipStyleClass:t.tooltipStyleClass.currentValue}),t.tooltipZIndex&&this.setOption({tooltipZIndex:t.tooltipZIndex.currentValue}),t.escape&&this.setOption({escape:t.escape.currentValue}),t.showDelay&&this.setOption({showDelay:t.showDelay.currentValue}),t.hideDelay&&this.setOption({hideDelay:t.hideDelay.currentValue}),t.life&&this.setOption({life:t.life.currentValue}),t.positionTop&&this.setOption({positionTop:t.positionTop.currentValue}),t.positionLeft&&this.setOption({positionLeft:t.positionLeft.currentValue}),t.disabled&&this.setOption({disabled:t.disabled.currentValue}),t.content&&(this.setOption({tooltipLabel:t.content.currentValue}),this.active&&(t.content.currentValue?this.container&&this.container.offsetParent?(this.updateText(),this.align()):this.show():this.hide())),t.autoHide&&this.setOption({autoHide:t.autoHide.currentValue}),t.id&&this.setOption({id:t.id.currentValue}),t.tooltipOptions&&(this._tooltipOptions=B(B({},this._tooltipOptions),t.tooltipOptions.currentValue),this.deactivate(),this.active&&(this.getOption("tooltipLabel")?this.container&&this.container.offsetParent?(this.updateText(),this.align()):this.show():this.hide()))}isAutoHide(){return this.getOption("autoHide")}onMouseEnter(t){!this.container&&!this.showTimeout&&this.activate()}onMouseLeave(t){this.isAutoHide()?this.deactivate():!(jt(t.relatedTarget,"p-tooltip")||jt(t.relatedTarget,"p-tooltip-text")||jt(t.relatedTarget,"p-tooltip-arrow"))&&this.deactivate()}onFocus(t){this.activate()}onBlur(t){this.deactivate()}onInputClick(t){this.deactivate()}activate(){if(!this.interactionInProgress){if(this.active=!0,this.clearHideTimeout(),this.getOption("showDelay")?this.showTimeout=setTimeout(()=>{this.show()},this.getOption("showDelay")):this.show(),this.getOption("life")){let t=this.getOption("showDelay")?this.getOption("life")+this.getOption("showDelay"):this.getOption("life");this.hideTimeout=setTimeout(()=>{this.hide()},t)}this.getOption("hideOnEscape")&&(this.documentEscapeListener=this.renderer.listen("document","keydown.escape",()=>{this.deactivate(),this.documentEscapeListener()})),this.interactionInProgress=!0}}deactivate(){this.interactionInProgress=!1,this.active=!1,this.clearShowTimeout(),this.getOption("hideDelay")?(this.clearHideTimeout(),this.hideTimeout=setTimeout(()=>{this.hide()},this.getOption("hideDelay"))):this.hide(),this.documentEscapeListener&&this.documentEscapeListener()}create(){this.container&&(this.clearHideTimeout(),this.remove()),this.container=document.createElement("div"),this.container.setAttribute("id",this.getOption("id")),this.container.setAttribute("role","tooltip");let t=document.createElement("div");t.className="p-tooltip-arrow",t.setAttribute("data-pc-section","arrow"),this.container.appendChild(t),this.tooltipText=document.createElement("div"),this.tooltipText.className="p-tooltip-text",this.updateText(),this.getOption("positionStyle")&&(this.container.style.position=this.getOption("positionStyle")),this.container.appendChild(this.tooltipText),this.getOption("appendTo")==="body"?document.body.appendChild(this.container):this.getOption("appendTo")==="target"?Oe(this.container,this.el.nativeElement):Oe(this.getOption("appendTo"),this.container),this.container.style.display="none",this.fitContent&&(this.container.style.width="fit-content"),this.isAutoHide()?this.container.style.pointerEvents="none":(this.container.style.pointerEvents="unset",this.bindContainerMouseleaveListener())}bindContainerMouseleaveListener(){if(!this.containerMouseleaveListener){let t=this.container??this.container.nativeElement;this.containerMouseleaveListener=this.renderer.listen(t,"mouseleave",n=>{this.deactivate()})}}unbindContainerMouseleaveListener(){this.containerMouseleaveListener&&(this.bindContainerMouseleaveListener(),this.containerMouseleaveListener=null)}show(){if(!this.getOption("tooltipLabel")||this.getOption("disabled"))return;this.create(),this.el.nativeElement.closest("p-dialog")?setTimeout(()=>{this.container&&(this.container.style.display="inline-block"),this.container&&this.align()},100):(this.container.style.display="inline-block",this.align()),In(this.container,250),this.getOption("tooltipZIndex")==="auto"?Ht.set("tooltip",this.container,this.config.zIndex.tooltip):this.container.style.zIndex=this.getOption("tooltipZIndex"),this.bindDocumentResizeListener(),this.bindScrollListener()}hide(){this.getOption("tooltipZIndex")==="auto"&&Ht.clear(this.container),this.remove()}updateText(){let t=this.getOption("tooltipLabel");if(t instanceof rn){let n=this.viewContainer.createEmbeddedView(t);n.detectChanges(),n.rootNodes.forEach(i=>this.tooltipText.appendChild(i))}else this.getOption("escape")?(this.tooltipText.innerHTML="",this.tooltipText.appendChild(document.createTextNode(t))):this.tooltipText.innerHTML=t}align(){let t=this.getOption("tooltipPosition"),n={top:[this.alignTop,this.alignBottom,this.alignRight,this.alignLeft],bottom:[this.alignBottom,this.alignTop,this.alignRight,this.alignLeft],left:[this.alignLeft,this.alignRight,this.alignTop,this.alignBottom],right:[this.alignRight,this.alignLeft,this.alignTop,this.alignBottom]};for(let[i,r]of n[t].entries())if(i===0)r.call(this);else if(this.isOutOfBounds())r.call(this);else break}getHostOffset(){if(this.getOption("appendTo")==="body"||this.getOption("appendTo")==="target"){let t=this.el.nativeElement.getBoundingClientRect(),n=t.left+yn(),i=t.top+_n();return{left:n,top:i}}else return{left:0,top:0}}get activeElement(){return this.el.nativeElement.nodeName.startsWith("P-")?xt(this.el.nativeElement,".p-component"):this.el.nativeElement}alignRight(){this.preAlign("right");let t=this.activeElement,n=at(t),i=(mt(t)-mt(this.container))/2;this.alignTooltip(n,i);let r=this.getArrowElement();r.style.top="50%",r.style.right=null,r.style.bottom=null,r.style.left="0"}alignLeft(){this.preAlign("left");let t=this.getArrowElement(),n=at(this.container),i=(mt(this.el.nativeElement)-mt(this.container))/2;this.alignTooltip(-n,i),t.style.top="50%",t.style.right="0",t.style.bottom=null,t.style.left=null}alignTop(){this.preAlign("top");let t=this.getArrowElement(),n=this.getHostOffset(),i=at(this.container),r=(at(this.el.nativeElement)-at(this.container))/2,s=mt(this.container);this.alignTooltip(r,-s);let a=n.left-this.getHostOffset().left+i/2;t.style.top=null,t.style.right=null,t.style.bottom="0",t.style.left=a+"px"}getArrowElement(){return xt(this.container,'[data-pc-section="arrow"]')}alignBottom(){this.preAlign("bottom");let t=this.getArrowElement(),n=at(this.container),i=this.getHostOffset(),r=(at(this.el.nativeElement)-at(this.container))/2,s=mt(this.el.nativeElement);this.alignTooltip(r,s);let a=i.left-this.getHostOffset().left+n/2;t.style.top="0",t.style.right=null,t.style.bottom=null,t.style.left=a+"px"}alignTooltip(t,n){let i=this.getHostOffset(),r=i.left+t,s=i.top+n;this.container.style.left=r+this.getOption("positionLeft")+"px",this.container.style.top=s+this.getOption("positionTop")+"px"}setOption(t){this._tooltipOptions=B(B({},this._tooltipOptions),t)}getOption(t){return this._tooltipOptions[t]}getTarget(t){return jt(t,"p-inputwrapper")?xt(t,"input"):t}preAlign(t){this.container.style.left="-999px",this.container.style.top="-999px";let n="p-tooltip p-component p-tooltip-"+t;this.container.className=this.getOption("tooltipStyleClass")?n+" "+this.getOption("tooltipStyleClass"):n}isOutOfBounds(){let t=this.container.getBoundingClientRect(),n=t.top,i=t.left,r=at(this.container),s=mt(this.container),a=vn();return i+r>a.width||i<0||n<0||n+s>a.height}onWindowResize(t){this.hide()}bindDocumentResizeListener(){this.zone.runOutsideAngular(()=>{this.resizeListener=this.onWindowResize.bind(this),window.addEventListener("resize",this.resizeListener)})}unbindDocumentResizeListener(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)}bindScrollListener(){this.scrollHandler||(this.scrollHandler=new _e(this.el.nativeElement,()=>{this.container&&this.hide()})),this.scrollHandler.bindScrollListener()}unbindScrollListener(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()}unbindEvents(){let t=this.getOption("tooltipEvent");if((t==="hover"||t==="both")&&(this.el.nativeElement.removeEventListener("mouseenter",this.mouseEnterListener),this.el.nativeElement.removeEventListener("mouseleave",this.mouseLeaveListener),this.el.nativeElement.removeEventListener("click",this.clickListener)),t==="focus"||t==="both"){let n=this.el.nativeElement.querySelector(".p-component");n||(n=this.getTarget(this.el.nativeElement)),n.removeEventListener("focus",this.focusListener),n.removeEventListener("blur",this.blurListener)}this.unbindDocumentResizeListener()}remove(){this.container&&this.container.parentElement&&(this.getOption("appendTo")==="body"?document.body.removeChild(this.container):this.getOption("appendTo")==="target"?this.el.nativeElement.removeChild(this.container):Sn(this.getOption("appendTo"),this.container)),this.unbindDocumentResizeListener(),this.unbindScrollListener(),this.unbindContainerMouseleaveListener(),this.clearTimeouts(),this.container=null,this.scrollHandler=null}clearShowTimeout(){this.showTimeout&&(clearTimeout(this.showTimeout),this.showTimeout=null)}clearHideTimeout(){this.hideTimeout&&(clearTimeout(this.hideTimeout),this.hideTimeout=null)}clearTimeouts(){this.clearShowTimeout(),this.clearHideTimeout()}ngOnDestroy(){this.unbindEvents(),super.ngOnDestroy(),this.container&&Ht.clear(this.container),this.remove(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.documentEscapeListener&&this.documentEscapeListener()}static \u0275fac=function(n){return new(n||e)(D(kt),D(sn))};static \u0275dir=it({type:e,selectors:[["","pTooltip",""]],inputs:{tooltipPosition:"tooltipPosition",tooltipEvent:"tooltipEvent",positionStyle:"positionStyle",tooltipStyleClass:"tooltipStyleClass",tooltipZIndex:"tooltipZIndex",escape:[2,"escape","escape",k],showDelay:[2,"showDelay","showDelay",et],hideDelay:[2,"hideDelay","hideDelay",et],life:[2,"life","life",et],positionTop:[2,"positionTop","positionTop",et],positionLeft:[2,"positionLeft","positionLeft",et],autoHide:[2,"autoHide","autoHide",k],fitContent:[2,"fitContent","fitContent",k],hideOnEscape:[2,"hideOnEscape","hideOnEscape",k],content:[0,"pTooltip","content"],disabled:[0,"tooltipDisabled","disabled"],tooltipOptions:"tooltipOptions",appendTo:[1,"appendTo"]},features:[R([Vn]),L,Tt]})}return e})(),We=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=q({type:e});static \u0275inj=j({})}return e})();var Yn=`
    .p-menubar {
        display: flex;
        align-items: center;
        background: dt('menubar.background');
        border: 1px solid dt('menubar.border.color');
        border-radius: dt('menubar.border.radius');
        color: dt('menubar.color');
        padding: dt('menubar.padding');
        gap: dt('menubar.gap');
    }

    .p-menubar-start,
    .p-megamenu-end {
        display: flex;
        align-items: center;
    }

    .p-menubar-root-list,
    .p-menubar-submenu {
        display: flex;
        margin: 0;
        padding: 0;
        list-style: none;
        outline: 0 none;
    }

    .p-menubar-root-list {
        align-items: center;
        flex-wrap: wrap;
        gap: dt('menubar.gap');
    }

    .p-menubar-root-list > .p-menubar-item > .p-menubar-item-content {
        border-radius: dt('menubar.base.item.border.radius');
    }

    .p-menubar-root-list > .p-menubar-item > .p-menubar-item-content > .p-menubar-item-link {
        padding: dt('menubar.base.item.padding');
    }

    .p-menubar-item-content {
        transition:
            background dt('menubar.transition.duration'),
            color dt('menubar.transition.duration');
        border-radius: dt('menubar.item.border.radius');
        color: dt('menubar.item.color');
    }

    .p-menubar-item-link {
        cursor: pointer;
        display: flex;
        align-items: center;
        text-decoration: none;
        overflow: hidden;
        position: relative;
        color: inherit;
        padding: dt('menubar.item.padding');
        gap: dt('menubar.item.gap');
        user-select: none;
        outline: 0 none;
    }

    .p-menubar-item-label {
        line-height: 1;
    }

    .p-menubar-item-icon {
        color: dt('menubar.item.icon.color');
    }

    .p-menubar-submenu-icon {
        color: dt('menubar.submenu.icon.color');
        margin-left: auto;
        font-size: dt('menubar.submenu.icon.size');
        width: dt('menubar.submenu.icon.size');
        height: dt('menubar.submenu.icon.size');
    }

    .p-menubar-submenu .p-menubar-submenu-icon:dir(rtl) {
        margin-left: 0;
        margin-right: auto;
    }

    .p-menubar-item.p-focus > .p-menubar-item-content {
        color: dt('menubar.item.focus.color');
        background: dt('menubar.item.focus.background');
    }

    .p-menubar-item.p-focus > .p-menubar-item-content .p-menubar-item-icon {
        color: dt('menubar.item.icon.focus.color');
    }

    .p-menubar-item.p-focus > .p-menubar-item-content .p-menubar-submenu-icon {
        color: dt('menubar.submenu.icon.focus.color');
    }

    .p-menubar-item:not(.p-disabled) > .p-menubar-item-content:hover {
        color: dt('menubar.item.focus.color');
        background: dt('menubar.item.focus.background');
    }

    .p-menubar-item:not(.p-disabled) > .p-menubar-item-content:hover .p-menubar-item-icon {
        color: dt('menubar.item.icon.focus.color');
    }

    .p-menubar-item:not(.p-disabled) > .p-menubar-item-content:hover .p-menubar-submenu-icon {
        color: dt('menubar.submenu.icon.focus.color');
    }

    .p-menubar-item-active > .p-menubar-item-content {
        color: dt('menubar.item.active.color');
        background: dt('menubar.item.active.background');
    }

    .p-menubar-item-active > .p-menubar-item-content .p-menubar-item-icon {
        color: dt('menubar.item.icon.active.color');
    }

    .p-menubar-item-active > .p-menubar-item-content .p-menubar-submenu-icon {
        color: dt('menubar.submenu.icon.active.color');
    }

    .p-menubar-submenu {
        display: none;
        position: absolute;
        min-width: 12.5rem;
        z-index: 1;
        background: dt('menubar.submenu.background');
        border: 1px solid dt('menubar.submenu.border.color');
        border-radius: dt('menubar.submenu.border.radius');
        box-shadow: dt('menubar.submenu.shadow');
        color: dt('menubar.submenu.color');
        flex-direction: column;
        padding: dt('menubar.submenu.padding');
        gap: dt('menubar.submenu.gap');
    }

    .p-menubar-submenu .p-menubar-separator {
        border-block-start: 1px solid dt('menubar.separator.border.color');
    }

    .p-menubar-submenu .p-menubar-item {
        position: relative;
    }

    .p-menubar-submenu > .p-menubar-item-active > .p-menubar-submenu {
        display: block;
        left: 100%;
        top: 0;
    }

    .p-menubar-end {
        margin-left: auto;
        align-self: center;
    }

    .p-menubar-end:dir(rtl) {
        margin-left: 0;
        margin-right: auto;
    }

    .p-menubar-button {
        display: none;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        width: dt('menubar.mobile.button.size');
        height: dt('menubar.mobile.button.size');
        position: relative;
        color: dt('menubar.mobile.button.color');
        border: 0 none;
        background: transparent;
        border-radius: dt('menubar.mobile.button.border.radius');
        transition:
            background dt('menubar.transition.duration'),
            color dt('menubar.transition.duration'),
            outline-color dt('menubar.transition.duration');
        outline-color: transparent;
    }

    .p-menubar-button:hover {
        color: dt('menubar.mobile.button.hover.color');
        background: dt('menubar.mobile.button.hover.background');
    }

    .p-menubar-button:focus-visible {
        box-shadow: dt('menubar.mobile.button.focus.ring.shadow');
        outline: dt('menubar.mobile.button.focus.ring.width') dt('menubar.mobile.button.focus.ring.style') dt('menubar.mobile.button.focus.ring.color');
        outline-offset: dt('menubar.mobile.button.focus.ring.offset');
    }

    .p-menubar-mobile {
        position: relative;
    }

    .p-menubar-mobile .p-menubar-button {
        display: flex;
    }

    .p-menubar-mobile .p-menubar-root-list {
        position: absolute;
        display: none;
        width: 100%;
        flex-direction: column;
        top: 100%;
        left: 0;
        z-index: 1;
        padding: dt('menubar.submenu.padding');
        background: dt('menubar.submenu.background');
        border: 1px solid dt('menubar.submenu.border.color');
        box-shadow: dt('menubar.submenu.shadow');
        border-radius: dt('menubar.submenu.border.radius');
        gap: dt('menubar.submenu.gap');
    }

    .p-menubar-mobile .p-menubar-root-list:dir(rtl) {
        left: auto;
        right: 0;
    }

    .p-menubar-mobile .p-menubar-root-list > .p-menubar-item > .p-menubar-item-content > .p-menubar-item-link {
        padding: dt('menubar.item.padding');
    }

    .p-menubar-mobile-active .p-menubar-root-list {
        display: flex;
    }

    .p-menubar-mobile .p-menubar-root-list .p-menubar-item {
        width: 100%;
        position: static;
    }

    .p-menubar-mobile .p-menubar-root-list .p-menubar-separator {
        border-block-start: 1px solid dt('menubar.separator.border.color');
    }

    .p-menubar-mobile .p-menubar-root-list > .p-menubar-item > .p-menubar-item-content .p-menubar-submenu-icon {
        margin-left: auto;
        transition: transform 0.2s;
    }

    .p-menubar-mobile .p-menubar-root-list > .p-menubar-item > .p-menubar-item-content .p-menubar-submenu-icon:dir(rtl),
    .p-menubar-mobile .p-menubar-submenu-icon:dir(rtl) {
        margin-left: 0;
        margin-right: auto;
    }

    .p-menubar-mobile .p-menubar-root-list > .p-menubar-item-active > .p-menubar-item-content .p-menubar-submenu-icon {
        transform: rotate(-180deg);
    }

    .p-menubar-mobile .p-menubar-submenu .p-menubar-submenu-icon {
        transition: transform 0.2s;
        transform: rotate(90deg);
    }

    .p-menubar-mobile .p-menubar-item-active > .p-menubar-item-content .p-menubar-submenu-icon {
        transform: rotate(-90deg);
    }

    .p-menubar-mobile .p-menubar-submenu {
        width: 100%;
        position: static;
        box-shadow: none;
        border: 0 none;
        padding-inline-start: dt('menubar.submenu.mobile.indent');
        padding-inline-end: 0;
    }
`;var Xn=(e,o)=>({instance:e,processedItem:o}),Ai=()=>({exact:!1}),Bi=(e,o)=>({$implicit:e,root:o});function Hi(e,o){if(e&1&&C(0,"li",6),e&2){let t=u().$implicit,n=u();ie(n.getItemProp(t,"style")),v(n.cn(n.cx("separator"),t==null?null:t.styleClass)),E("id",n.getItemId(t))("data-pc-section","separator")}}function zi(e,o){if(e&1&&C(0,"span"),e&2){let t=u(4).$implicit,n=u();ie(n.getItemProp(t,"iconStyle")),v(n.cn(n.cx("itemIcon"),n.getItemProp(t,"icon"))),E("data-pc-section","icon")("tabindex",-1)}}function Vi(e,o){if(e&1&&(y(0,"span",17),P(1),_()),e&2){let t=u(4).$implicit,n=u();v(n.cx("itemLabel")),p("id",n.getItemLabelId(t)),E("data-pc-section","label"),h(),un(" ",n.getItemLabel(t)," ")}}function Wi(e,o){if(e&1&&C(0,"span",18),e&2){let t=u(4).$implicit,n=u();v(n.cx("itemLabel")),p("innerHTML",n.getItemLabel(t),Le)("id",n.getItemLabelId(t)),E("data-pc-section","label")}}function Yi(e,o){if(e&1&&C(0,"p-badge",19),e&2){let t=u(4).$implicit,n=u();v(n.getItemProp(t,"badgeStyleClass")),p("value",n.getItemProp(t,"badge"))}}function Ni(e,o){if(e&1&&(K(),C(0,"svg",23)),e&2){let t=u(7);v(t.cx("submenuIcon")),E("data-pc-section","submenuicon")}}function Xi(e,o){if(e&1&&(K(),C(0,"svg",24)),e&2){let t=u(7);v(t.cx("submenuIcon")),E("data-pc-section","submenuicon")}}function $i(e,o){if(e&1&&(ct(0),S(1,Ni,1,3,"svg",21)(2,Xi,1,3,"svg",22),dt()),e&2){let t=u(6);h(),p("ngIf",t.root),h(),p("ngIf",!t.root)}}function ji(e,o){}function Ki(e,o){e&1&&S(0,ji,0,0,"ng-template",25),e&2&&p("data-pc-section","submenuicon")}function qi(e,o){if(e&1&&(ct(0),S(1,$i,3,2,"ng-container",9)(2,Ki,1,1,null,20),dt()),e&2){let t=u(5);h(),p("ngIf",!t.submenuiconTemplate),h(),p("ngTemplateOutlet",t.submenuiconTemplate)}}function Zi(e,o){if(e&1&&(y(0,"a",13),S(1,zi,1,6,"span",14)(2,Vi,2,5,"span",15)(3,Wi,1,5,"ng-template",null,1,Pt)(5,Yi,1,3,"p-badge",16)(6,qi,3,2,"ng-container",9),_()),e&2){let t=Mt(4),n=u(3).$implicit,i=u();v(i.cx("itemLink")),E("href",i.getItemProp(n,"url"),ce)("data-automationid",i.getItemProp(n,"automationId"))("data-pc-section","action")("target",i.getItemProp(n,"target"))("tabindex",-1),h(),p("ngIf",i.getItemProp(n,"icon")),h(),p("ngIf",i.getItemProp(n,"escape"))("ngIfElse",t),h(3),p("ngIf",i.getItemProp(n,"badge")),h(),p("ngIf",i.isItemGroup(n))}}function Ui(e,o){if(e&1&&C(0,"span",29),e&2){let t=u(4).$implicit,n=u();v(n.cn(n.cx("itemIcon"),n.getItemProp(t,"icon"))),p("ngStyle",n.getItemProp(t,"iconStyle")),E("data-pc-section","icon")("tabindex",-1)}}function Gi(e,o){if(e&1&&(y(0,"span"),P(1),_()),e&2){let t=u(4).$implicit,n=u();v(n.cx("itemLabel")),h(),It(n.getItemLabel(t))}}function Qi(e,o){if(e&1&&C(0,"span",30),e&2){let t=u(4).$implicit,n=u();v(n.cx("itemLabel")),p("innerHTML",n.getItemLabel(t),Le),E("data-pc-section","label")}}function Ji(e,o){if(e&1&&C(0,"p-badge",19),e&2){let t=u(4).$implicit,n=u();v(n.getItemProp(t,"badgeStyleClass")),p("value",n.getItemProp(t,"badge"))}}function to(e,o){if(e&1&&(K(),C(0,"svg",23)),e&2){let t=u(7);v(t.cx("submenuIcon")),E("data-pc-section","submenuicon")}}function eo(e,o){if(e&1&&(K(),C(0,"svg",24)),e&2){let t=u(7);v(t.cx("submenuIcon")),E("data-pc-section","submenuicon")}}function no(e,o){if(e&1&&(ct(0),S(1,to,1,3,"svg",21)(2,eo,1,3,"svg",22),dt()),e&2){let t=u(6);h(),p("ngIf",t.root),h(),p("ngIf",!t.root)}}function io(e,o){}function oo(e,o){e&1&&S(0,io,0,0,"ng-template",25),e&2&&p("data-pc-section","submenuicon")}function ro(e,o){if(e&1&&(ct(0),S(1,no,3,2,"ng-container",9)(2,oo,1,1,null,20),dt()),e&2){let t=u(5);h(),p("ngIf",!t.submenuiconTemplate),h(),p("ngTemplateOutlet",t.submenuiconTemplate)}}function so(e,o){if(e&1&&(y(0,"a",26),S(1,Ui,1,5,"span",27)(2,Gi,2,3,"span",28)(3,Qi,1,4,"ng-template",null,2,Pt)(5,Ji,1,3,"p-badge",16)(6,ro,3,2,"ng-container",9),_()),e&2){let t=Mt(4),n=u(3).$implicit,i=u();v(i.cx("itemLink")),p("routerLink",i.getItemProp(n,"routerLink"))("queryParams",i.getItemProp(n,"queryParams"))("routerLinkActive","p-menubar-item-link-active")("routerLinkActiveOptions",i.getItemProp(n,"routerLinkActiveOptions")||pn(21,Ai))("target",i.getItemProp(n,"target"))("fragment",i.getItemProp(n,"fragment"))("queryParamsHandling",i.getItemProp(n,"queryParamsHandling"))("preserveFragment",i.getItemProp(n,"preserveFragment"))("skipLocationChange",i.getItemProp(n,"skipLocationChange"))("replaceUrl",i.getItemProp(n,"replaceUrl"))("state",i.getItemProp(n,"state")),E("data-automationid",i.getItemProp(n,"automationId"))("tabindex",-1)("data-pc-section","action"),h(),p("ngIf",i.getItemProp(n,"icon")),h(),p("ngIf",i.getItemProp(n,"escape"))("ngIfElse",t),h(3),p("ngIf",i.getItemProp(n,"badge")),h(),p("ngIf",i.isItemGroup(n))}}function ao(e,o){if(e&1&&(ct(0),S(1,Zi,7,12,"a",11)(2,so,7,22,"a",12),dt()),e&2){let t=u(2).$implicit,n=u();h(),p("ngIf",!n.getItemProp(t,"routerLink")),h(),p("ngIf",n.getItemProp(t,"routerLink"))}}function lo(e,o){}function co(e,o){e&1&&S(0,lo,0,0,"ng-template")}function uo(e,o){if(e&1&&(ct(0),S(1,co,1,0,null,31),dt()),e&2){let t=u(2).$implicit,n=u();h(),p("ngTemplateOutlet",n.itemTemplate)("ngTemplateOutletContext",pe(2,Bi,t.item,n.root))}}function po(e,o){if(e&1){let t=Lt();y(0,"ul",32),tt("itemClick",function(i){G(t);let r=u(3);return Q(r.itemClick.emit(i))})("itemMouseEnter",function(i){G(t);let r=u(3);return Q(r.onItemMouseEnter(i))}),_()}if(e&2){let t=u(2).$implicit,n=u();p("itemTemplate",n.itemTemplate)("items",t.items)("mobileActive",n.mobileActive)("autoDisplay",n.autoDisplay)("menuId",n.menuId)("activeItemPath",n.activeItemPath)("focusedItemId",n.focusedItemId)("level",n.level+1)("inlineStyles",n.sx("submenu",!0,pe(10,Xn,n,t))),E("aria-labelledby",n.getItemLabelId(t))}}function ho(e,o){if(e&1){let t=Lt();y(0,"li",7,0)(2,"div",8),tt("click",function(i){G(t);let r=u().$implicit,s=u();return Q(s.onItemClick(i,r))})("mouseenter",function(i){G(t);let r=u().$implicit,s=u();return Q(s.onItemMouseEnter({$event:i,processedItem:r}))}),S(3,ao,3,2,"ng-container",9)(4,uo,2,5,"ng-container",9),_(),S(5,po,1,13,"ul",10),_()}if(e&2){let t=u(),n=t.$implicit,i=t.index,r=u();ie(r.getItemProp(n,"style")),v(r.cn(r.cx("item",pe(22,Xn,r,n)),r.getItemProp(n,"styleClass"))),p("tooltipOptions",r.getItemProp(n,"tooltipOptions")),E("id",r.getItemId(n))("data-pc-section","menuitem")("data-p-highlight",r.isItemActive(n))("data-p-focused",r.isItemFocused(n))("data-p-disabled",r.isItemDisabled(n))("aria-label",r.getItemLabel(n))("aria-disabled",r.isItemDisabled(n)||void 0)("aria-haspopup",r.isItemGroup(n)&&!r.getItemProp(n,"to")?"menu":void 0)("aria-expanded",r.isItemGroup(n)?r.isItemActive(n):void 0)("aria-setsize",r.getAriaSetSize())("aria-posinset",r.getAriaPosInset(i)),h(2),v(r.cx("itemContent")),E("data-pc-section","content"),h(),p("ngIf",!r.itemTemplate),h(),p("ngIf",r.itemTemplate),h(),p("ngIf",r.isItemVisible(n)&&r.isItemGroup(n))}}function mo(e,o){if(e&1&&S(0,Hi,1,6,"li",4)(1,ho,6,25,"li",5),e&2){let t=o.$implicit,n=u();p("ngIf",n.isItemVisible(t)&&n.getItemProp(t,"separator")),h(),p("ngIf",n.isItemVisible(t)&&!n.getItemProp(t,"separator"))}}var fo=["start"],bo=["end"],go=["item"],vo=["menuicon"],yo=["submenuicon"],_o=["menubutton"],Io=["rootmenu"],xo=["*"];function wo(e,o){e&1&&ee(0)}function So(e,o){if(e&1&&(y(0,"div"),S(1,wo,1,0,"ng-container",7),_()),e&2){let t=u();v(t.cx("start")),h(),p("ngTemplateOutlet",t.startTemplate||t._startTemplate)}}function Co(e,o){e&1&&(K(),C(0,"svg",10))}function Eo(e,o){}function To(e,o){e&1&&S(0,Eo,0,0,"ng-template")}function ko(e,o){if(e&1){let t=Lt();y(0,"a",8,2),tt("click",function(i){G(t);let r=u();return Q(r.menuButtonClick(i))})("keydown",function(i){G(t);let r=u();return Q(r.menuButtonKeydown(i))}),S(2,Co,1,0,"svg",9)(3,To,1,0,null,7),_()}if(e&2){let t=u();v(t.cx("button")),E("aria-haspopup",!!(t.model.length&&t.model.length>0))("aria-expanded",t.mobileActive)("aria-controls",t.id)("aria-label",t.config.translation.aria.navigation)("data-pc-section","button"),h(2),p("ngIf",!t.menuIconTemplate&&!t._menuIconTemplate),h(),p("ngTemplateOutlet",t.menuIconTemplate||t._menuIconTemplate)}}function Lo(e,o){e&1&&ee(0)}function Mo(e,o){if(e&1&&(y(0,"div"),S(1,Lo,1,0,"ng-container",7),_()),e&2){let t=u();v(t.cx("end")),h(),p("ngTemplateOutlet",t.endTemplate||t._endTemplate)}}function Po(e,o){if(e&1&&(y(0,"div"),rt(1),_()),e&2){let t=u();v(t.cx("end"))}}var Do={submenu:({instance:e,processedItem:o})=>({display:e.isItemActive(o)?"flex":"none"})},Oo={root:({instance:e})=>["p-menubar p-component",{"p-menubar-mobile":e.queryMatches,"p-menubar-mobile-active":e.mobileActive}],start:"p-menubar-start",button:"p-menubar-button",rootList:"p-menubar-root-list",item:({instance:e,processedItem:o})=>["p-menubar-item",{"p-menubar-item-active":e.isItemActive(o),"p-focus":e.isItemFocused(o),"p-disabled":e.isItemDisabled(o)}],itemContent:"p-menubar-item-content",itemLink:"p-menubar-item-link",itemIcon:"p-menubar-item-icon",itemLabel:"p-menubar-item-label",submenuIcon:"p-menubar-submenu-icon",submenu:"p-menubar-submenu",separator:"p-menubar-separator",end:"p-menubar-end"},Ye=(()=>{class e extends F{name="menubar";theme=Yn;classes=Oo;inlineStyles=Do;static \u0275fac=(()=>{let t;return function(i){return(t||(t=w(e)))(i||e)}})();static \u0275prov=H({token:e,factory:e.\u0275fac})}return e})();var Ne=(()=>{class e{autoHide;autoHideDelay;mouseLeaves=new zt;mouseLeft$=this.mouseLeaves.pipe(tn(()=>Ue(this.autoHideDelay)),Qe(t=>this.autoHide&&t));static \u0275fac=function(n){return new(n||e)};static \u0275prov=H({token:e,factory:e.\u0275fac})}return e})(),Ro=(()=>{class e extends V{items;itemTemplate;root=!1;autoZIndex=!0;baseZIndex=0;mobileActive;autoDisplay;menuId;ariaLabel;ariaLabelledBy;level=0;focusedItemId;activeItemPath;inlineStyles;submenuiconTemplate;itemClick=new I;itemMouseEnter=new I;menuFocus=new I;menuBlur=new I;menuKeydown=new I;mouseLeaveSubscriber;menubarService=x(Ne);_componentStyle=x(Ye);ngOnInit(){super.ngOnInit(),this.mouseLeaveSubscriber=this.menubarService.mouseLeft$.subscribe(()=>{this.cd.markForCheck()})}onItemClick(t,n){this.getItemProp(n,"command",{originalEvent:t,item:n.item}),this.itemClick.emit({originalEvent:t,processedItem:n,isFocus:!0})}getItemProp(t,n,i=null){return t&&t.item?He(t.item[n],i):void 0}getItemId(t){return t.item&&t.item?.id?t.item.id:`${this.menuId}_${t.key}`}getItemLabelId(t){return`${this.menuId}_${t.key}_label`}getItemLabel(t){return this.getItemProp(t,"label")}isItemVisible(t){return this.getItemProp(t,"visible")!==!1}isItemActive(t){if(this.activeItemPath)return this.activeItemPath.some(n=>n.key===t.key)}isItemDisabled(t){return this.getItemProp(t,"disabled")}isItemFocused(t){return this.focusedItemId===this.getItemId(t)}isItemGroup(t){return ft(t.items)}getAriaSetSize(){return this.items.filter(t=>this.isItemVisible(t)&&!this.getItemProp(t,"separator")).length}getAriaPosInset(t){return t-this.items.slice(0,t).filter(n=>this.isItemVisible(n)&&this.getItemProp(n,"separator")).length+1}onItemMouseEnter(t){if(this.autoDisplay){let{event:n,processedItem:i}=t;this.itemMouseEnter.emit({originalEvent:n,processedItem:i})}}ngOnDestroy(){this.mouseLeaveSubscriber?.unsubscribe(),super.ngOnDestroy()}static \u0275fac=(()=>{let t;return function(i){return(t||(t=w(e)))(i||e)}})();static \u0275cmp=T({type:e,selectors:[["p-menubarSub"],["p-menubarsub"],["","pMenubarSub",""]],hostAttrs:["data-pc-section","menu","role","menubar"],hostVars:6,hostBindings:function(n,i){n&2&&(ue("id",i.root?i.menuId:null),E("aria-activedescendant",i.focusedItemId),ie(i.inlineStyles),v(i.level===0?i.cx("rootList"):i.cx("submenu")))},inputs:{items:"items",itemTemplate:"itemTemplate",root:[2,"root","root",k],autoZIndex:[2,"autoZIndex","autoZIndex",k],baseZIndex:[2,"baseZIndex","baseZIndex",et],mobileActive:[2,"mobileActive","mobileActive",k],autoDisplay:[2,"autoDisplay","autoDisplay",k],menuId:"menuId",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy",level:[2,"level","level",et],focusedItemId:"focusedItemId",activeItemPath:"activeItemPath",inlineStyles:"inlineStyles",submenuiconTemplate:"submenuiconTemplate"},outputs:{itemClick:"itemClick",itemMouseEnter:"itemMouseEnter",menuFocus:"menuFocus",menuBlur:"menuBlur",menuKeydown:"menuKeydown"},features:[L],decls:1,vars:1,consts:[["listItem",""],["htmlLabel",""],["htmlRouteLabel",""],["ngFor","",3,"ngForOf"],["role","separator",3,"style","class",4,"ngIf"],["role","menuitem","pTooltip","",3,"style","class","tooltipOptions",4,"ngIf"],["role","separator"],["role","menuitem","pTooltip","",3,"tooltipOptions"],[3,"click","mouseenter"],[4,"ngIf"],["pMenubarSub","",3,"itemTemplate","items","mobileActive","autoDisplay","menuId","activeItemPath","focusedItemId","level","inlineStyles","itemClick","itemMouseEnter",4,"ngIf"],["pRipple","",3,"class",4,"ngIf"],["pRipple","",3,"routerLink","queryParams","routerLinkActive","routerLinkActiveOptions","target","class","fragment","queryParamsHandling","preserveFragment","skipLocationChange","replaceUrl","state",4,"ngIf"],["pRipple",""],[3,"class","style",4,"ngIf"],[3,"class","id",4,"ngIf","ngIfElse"],[3,"class","value",4,"ngIf"],[3,"id"],[3,"innerHTML","id"],[3,"value"],[4,"ngTemplateOutlet"],["data-p-icon","angle-down",3,"class",4,"ngIf"],["data-p-icon","angle-right",3,"class",4,"ngIf"],["data-p-icon","angle-down"],["data-p-icon","angle-right"],[3,"data-pc-section"],["pRipple","",3,"routerLink","queryParams","routerLinkActive","routerLinkActiveOptions","target","fragment","queryParamsHandling","preserveFragment","skipLocationChange","replaceUrl","state"],[3,"class","ngStyle",4,"ngIf"],[3,"class",4,"ngIf","ngIfElse"],[3,"ngStyle"],[3,"innerHTML"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["pMenubarSub","",3,"itemClick","itemMouseEnter","itemTemplate","items","mobileActive","autoDisplay","menuId","activeItemPath","focusedItemId","level","inlineStyles"]],template:function(n,i){n&1&&S(0,mo,2,2,"ng-template",3),n&2&&p("ngForOf",i.items)},dependencies:[e,z,fn,Dt,oe,me,Ot,$t,be,ye,We,Wn,On,Rn,Bt,re,X],encapsulation:2})}return e})(),Fo=(()=>{class e extends V{document;platformId;el;renderer;cd;menubarService;set model(t){this._model=t,this._processedItems=this.createProcessedItems(this._model||[])}get model(){return this._model}styleClass;autoZIndex=!0;baseZIndex=0;autoDisplay=!0;autoHide;breakpoint="960px";autoHideDelay=100;id;ariaLabel;ariaLabelledBy;onFocus=new I;onBlur=new I;menubutton;rootmenu;mobileActive;matchMediaListener;query;queryMatches;outsideClickListener;resizeListener;mouseLeaveSubscriber;dirty=!1;focused=!1;activeItemPath=le([]);number=le(0);focusedItemInfo=le({index:-1,level:0,parentKey:"",item:null});searchValue="";searchTimeout;_processedItems;_componentStyle=x(Ye);_model;get visibleItems(){let t=this.activeItemPath().find(n=>n.key===this.focusedItemInfo().parentKey);return t?t.items:this.processedItems}get processedItems(){return(!this._processedItems||!this._processedItems.length)&&(this._processedItems=this.createProcessedItems(this.model||[])),this._processedItems}get focusedItemId(){let t=this.focusedItemInfo();return t.item&&t.item?.id?t.item.id:t.index!==-1?`${this.id}${ft(t.parentKey)?"_"+t.parentKey:""}_${t.index}`:null}constructor(t,n,i,r,s,a){super(),this.document=t,this.platformId=n,this.el=i,this.renderer=r,this.cd=s,this.menubarService=a,he(()=>{let l=this.activeItemPath();ft(l)?(this.bindOutsideClickListener(),this.bindResizeListener()):(this.unbindOutsideClickListener(),this.unbindResizeListener())})}ngOnInit(){super.ngOnInit(),this.bindMatchMediaListener(),this.menubarService.autoHide=this.autoHide,this.menubarService.autoHideDelay=this.autoHideDelay,this.mouseLeaveSubscriber=this.menubarService.mouseLeft$.subscribe(()=>{this.hide()}),this.id=this.id||vt("pn_id_")}startTemplate;endTemplate;itemTemplate;menuIconTemplate;submenuIconTemplate;templates;_startTemplate;_endTemplate;_itemTemplate;_menuIconTemplate;_submenuIconTemplate;ngAfterContentInit(){this.templates?.forEach(t=>{switch(t.getType()){case"start":this._startTemplate=t.template;break;case"end":this._endTemplate=t.template;break;case"menuicon":this._menuIconTemplate=t.template;break;case"submenuicon":this._submenuIconTemplate=t.template;break;case"item":this._itemTemplate=t.template;break;default:this._itemTemplate=t.template;break}})}createProcessedItems(t,n=0,i={},r=""){let s=[];return t&&t.forEach((a,l)=>{let c=(r!==""?r+"_":"")+l,m={item:a,index:l,level:n,key:c,parent:i,parentKey:r};m.items=this.createProcessedItems(a.items,n+1,m,c),s.push(m)}),s}bindMatchMediaListener(){if(N(this.platformId)&&!this.matchMediaListener){let t=window.matchMedia(`(max-width: ${this.breakpoint})`);this.query=t,this.queryMatches=t.matches,this.matchMediaListener=()=>{this.queryMatches=t.matches,this.mobileActive=!1,this.cd.markForCheck()},t.addEventListener("change",this.matchMediaListener)}}unbindMatchMediaListener(){this.matchMediaListener&&(this.query.removeEventListener("change",this.matchMediaListener),this.matchMediaListener=null)}getItemProp(t,n){return t?He(t[n]):void 0}menuButtonClick(t){this.toggle(t)}menuButtonKeydown(t){(t.code==="Enter"||t.code==="Space")&&this.menuButtonClick(t)}onItemClick(t){let{originalEvent:n,processedItem:i}=t,r=this.isProcessedItemGroup(i),s=Ft(i.parent);if(this.isSelected(i)){let{index:l,key:c,level:m,parentKey:d,item:f}=i;this.activeItemPath.set(this.activeItemPath().filter(b=>c!==b.key&&c.startsWith(b.key))),this.focusedItemInfo.set({index:l,level:m,parentKey:d,item:f}),this.dirty=!s,Rt(this.rootmenu.el.nativeElement)}else if(r)this.onItemChange(t);else{let l=s?i:this.activeItemPath().find(c=>c.parentKey==="");this.hide(n),this.changeFocusedItemIndex(n,l?l.index:-1),this.mobileActive=!1,Rt(this.rootmenu.el.nativeElement)}}onItemMouseEnter(t){Ae()?this.onItemChange({event:t,processedItem:t.processedItem,focus:this.autoDisplay},"hover"):this.dirty&&this.onItemChange(t,"hover")}onMouseLeave(t){let n=this.menubarService.autoHide,i=this.menubarService.autoHideDelay;n&&setTimeout(()=>{this.menubarService.mouseLeaves.next(!0)},i)}changeFocusedItemIndex(t,n){let i=this.findVisibleItem(n);if(this.focusedItemInfo().index!==n){let r=this.focusedItemInfo();this.focusedItemInfo.set(Ze(B({},r),{item:i.item,index:n})),this.scrollInView()}}scrollInView(t=-1){let n=t!==-1?`${this.id}_${t}`:this.focusedItemId,i=xt(this.rootmenu.el.nativeElement,`li[id="${n}"]`);i&&i.scrollIntoView&&i.scrollIntoView({block:"nearest",inline:"nearest"})}onItemChange(t,n){let{processedItem:i,isFocus:r}=t;if(Ft(i))return;let{index:s,key:a,level:l,parentKey:c,items:m,item:d}=i,f=ft(m),b=this.activeItemPath().filter(g=>g.parentKey!==c&&g.parentKey!==a);f&&b.push(i),this.focusedItemInfo.set({index:s,level:l,parentKey:c,item:d}),f&&(this.dirty=!0),r&&Rt(this.rootmenu.el.nativeElement),!(n==="hover"&&this.queryMatches)&&this.activeItemPath.set(b)}toggle(t){this.mobileActive?(this.mobileActive=!1,Ht.clear(this.rootmenu.el.nativeElement),this.hide()):(this.mobileActive=!0,Ht.set("menu",this.rootmenu.el.nativeElement,this.config.zIndex.menu),setTimeout(()=>{this.show()},0)),this.bindOutsideClickListener(),t.preventDefault()}hide(t,n){this.mobileActive&&setTimeout(()=>{Rt(this.menubutton.nativeElement)},0),this.activeItemPath.set([]),this.focusedItemInfo.set({index:-1,level:0,parentKey:"",item:null}),n&&Rt(this.rootmenu?.el.nativeElement),this.dirty=!1}show(){let t=this.findVisibleItem(this.findFirstFocusedItemIndex());this.focusedItemInfo.set({index:this.findFirstFocusedItemIndex(),level:0,parentKey:"",item:t?.item}),Rt(this.rootmenu?.el.nativeElement)}onMenuFocus(t){this.focused=!0;let n=this.findVisibleItem(this.findFirstFocusedItemIndex()),i=this.focusedItemInfo().index!==-1?this.focusedItemInfo():{index:this.findFirstFocusedItemIndex(),level:0,parentKey:"",item:n?.item};this.focusedItemInfo.set(i),this.onFocus.emit(t)}onMenuBlur(t){this.focused=!1,this.focusedItemInfo.set({index:-1,level:0,parentKey:"",item:null}),this.searchValue="",this.dirty=!1,this.onBlur.emit(t)}onKeyDown(t){let n=t.metaKey||t.ctrlKey;switch(t.code){case"ArrowDown":this.onArrowDownKey(t);break;case"ArrowUp":this.onArrowUpKey(t);break;case"ArrowLeft":this.onArrowLeftKey(t);break;case"ArrowRight":this.onArrowRightKey(t);break;case"Home":this.onHomeKey(t);break;case"End":this.onEndKey(t);break;case"Space":this.onSpaceKey(t);break;case"Enter":this.onEnterKey(t);break;case"Escape":this.onEscapeKey(t);break;case"Tab":this.onTabKey(t);break;case"PageDown":case"PageUp":case"Backspace":case"ShiftLeft":case"ShiftRight":break;default:!n&&En(t.key)&&this.searchItems(t,t.key);break}}findVisibleItem(t){return ft(this.visibleItems)?this.visibleItems[t]:null}findFirstFocusedItemIndex(){let t=this.findSelectedItemIndex();return t<0?this.findFirstItemIndex():t}findFirstItemIndex(){return this.visibleItems.findIndex(t=>this.isValidItem(t))}findSelectedItemIndex(){return this.visibleItems.findIndex(t=>this.isValidSelectedItem(t))}isProcessedItemGroup(t){return t&&ft(t.items)}isSelected(t){return this.activeItemPath().some(n=>n.key===t.key)}isValidSelectedItem(t){return this.isValidItem(t)&&this.isSelected(t)}isValidItem(t){return!!t&&!this.isItemDisabled(t.item)&&!this.isItemSeparator(t.item)}isItemDisabled(t){return this.getItemProp(t,"disabled")}isItemSeparator(t){return this.getItemProp(t,"separator")}isItemMatched(t){return this.isValidItem(t)&&this.getProccessedItemLabel(t).toLocaleLowerCase().startsWith(this.searchValue.toLocaleLowerCase())}isProccessedItemGroup(t){return t&&ft(t.items)}searchItems(t,n){this.searchValue=(this.searchValue||"")+n;let i=-1,r=!1;return this.focusedItemInfo().index!==-1?(i=this.visibleItems.slice(this.focusedItemInfo().index).findIndex(s=>this.isItemMatched(s)),i=i===-1?this.visibleItems.slice(0,this.focusedItemInfo().index).findIndex(s=>this.isItemMatched(s)):i+this.focusedItemInfo().index):i=this.visibleItems.findIndex(s=>this.isItemMatched(s)),i!==-1&&(r=!0),i===-1&&this.focusedItemInfo().index===-1&&(i=this.findFirstFocusedItemIndex()),i!==-1&&this.changeFocusedItemIndex(t,i),this.searchTimeout&&clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout(()=>{this.searchValue="",this.searchTimeout=null},500),r}getProccessedItemLabel(t){return t?this.getItemLabel(t.item):void 0}getItemLabel(t){return this.getItemProp(t,"label")}onArrowDownKey(t){let n=this.visibleItems[this.focusedItemInfo().index];if(n?Ft(n.parent):null)this.isProccessedItemGroup(n)&&(this.onItemChange({originalEvent:t,processedItem:n}),this.focusedItemInfo.set({index:-1,parentKey:n.key,item:n.item}),this.onArrowRightKey(t));else{let r=this.focusedItemInfo().index!==-1?this.findNextItemIndex(this.focusedItemInfo().index):this.findFirstFocusedItemIndex();this.changeFocusedItemIndex(t,r),t.preventDefault()}}onArrowRightKey(t){let n=this.visibleItems[this.focusedItemInfo().index];if(n?this.activeItemPath().find(r=>r.key===n.parentKey):null)this.isProccessedItemGroup(n)&&(this.onItemChange({originalEvent:t,processedItem:n}),this.focusedItemInfo.set({index:-1,parentKey:n.key,item:n.item}),this.onArrowDownKey(t));else{let r=this.focusedItemInfo().index!==-1?this.findNextItemIndex(this.focusedItemInfo().index):this.findFirstFocusedItemIndex();this.changeFocusedItemIndex(t,r),t.preventDefault()}}onArrowUpKey(t){let n=this.visibleItems[this.focusedItemInfo().index];if(Ft(n.parent)){if(this.isProccessedItemGroup(n)){this.onItemChange({originalEvent:t,processedItem:n}),this.focusedItemInfo.set({index:-1,parentKey:n.key,item:n.item});let s=this.findLastItemIndex();this.changeFocusedItemIndex(t,s)}}else{let r=this.activeItemPath().find(s=>s.key===n.parentKey);if(this.focusedItemInfo().index===0){this.focusedItemInfo.set({index:-1,parentKey:r?r.parentKey:"",item:n.item}),this.searchValue="",this.onArrowLeftKey(t);let s=this.activeItemPath().filter(a=>a.parentKey!==this.focusedItemInfo().parentKey);this.activeItemPath.set(s)}else{let s=this.focusedItemInfo().index!==-1?this.findPrevItemIndex(this.focusedItemInfo().index):this.findLastFocusedItemIndex();this.changeFocusedItemIndex(t,s)}}t.preventDefault()}onArrowLeftKey(t){let n=this.visibleItems[this.focusedItemInfo().index],i=n?this.activeItemPath().find(r=>r.key===n.parentKey):null;if(i){this.onItemChange({originalEvent:t,processedItem:i});let r=this.activeItemPath().filter(s=>s.parentKey!==this.focusedItemInfo().parentKey);this.activeItemPath.set(r),t.preventDefault()}else{let r=this.focusedItemInfo().index!==-1?this.findPrevItemIndex(this.focusedItemInfo().index):this.findLastFocusedItemIndex();this.changeFocusedItemIndex(t,r),t.preventDefault()}}onHomeKey(t){this.changeFocusedItemIndex(t,this.findFirstItemIndex()),t.preventDefault()}onEndKey(t){this.changeFocusedItemIndex(t,this.findLastItemIndex()),t.preventDefault()}onSpaceKey(t){this.onEnterKey(t)}onEscapeKey(t){this.hide(t,!0),this.focusedItemInfo().index=this.findFirstFocusedItemIndex(),t.preventDefault()}onTabKey(t){if(this.focusedItemInfo().index!==-1){let n=this.visibleItems[this.focusedItemInfo().index];!this.isProccessedItemGroup(n)&&this.onItemChange({originalEvent:t,processedItem:n})}this.hide()}onEnterKey(t){if(this.focusedItemInfo().index!==-1){let n=xt(this.rootmenu.el.nativeElement,`li[id="${`${this.focusedItemId}`}"]`),i=n&&xt(n,'a[data-pc-section="action"]');i?i.click():n&&n.click()}t.preventDefault()}findLastFocusedItemIndex(){let t=this.findSelectedItemIndex();return t<0?this.findLastItemIndex():t}findLastItemIndex(){return Be(this.visibleItems,t=>this.isValidItem(t))}findPrevItemIndex(t){let n=t>0?Be(this.visibleItems.slice(0,t),i=>this.isValidItem(i)):-1;return n>-1?n:t}findNextItemIndex(t){let n=t<this.visibleItems.length-1?this.visibleItems.slice(t+1).findIndex(i=>this.isValidItem(i)):-1;return n>-1?n+t+1:t}bindResizeListener(){N(this.platformId)&&(this.resizeListener||(this.resizeListener=this.renderer.listen(this.document.defaultView,"resize",t=>{Ae()||this.hide(t,!0),this.mobileActive=!1})))}bindOutsideClickListener(){N(this.platformId)&&(this.outsideClickListener||(this.outsideClickListener=this.renderer.listen(this.document,"click",t=>{let n=this.rootmenu.el.nativeElement!==t.target&&!this.rootmenu.el.nativeElement.contains(t.target),i=this.mobileActive&&this.menubutton.nativeElement!==t.target&&!this.menubutton.nativeElement.contains(t.target);n&&(i?this.mobileActive=!1:this.hide())})))}unbindOutsideClickListener(){this.outsideClickListener&&(this.outsideClickListener(),this.outsideClickListener=null)}unbindResizeListener(){this.resizeListener&&(this.resizeListener(),this.resizeListener=null)}ngOnDestroy(){this.mouseLeaveSubscriber?.unsubscribe(),this.unbindOutsideClickListener(),this.unbindResizeListener(),this.unbindMatchMediaListener(),super.ngOnDestroy()}static \u0275fac=function(n){return new(n||e)(D(Wt),D(gt),D(_t),D(te),D(Xt),D(Ne))};static \u0275cmp=T({type:e,selectors:[["p-menubar"]],contentQueries:function(n,i,r){if(n&1&&(st(r,fo,4),st(r,bo,4),st(r,go,4),st(r,vo,4),st(r,yo,4),st(r,ge,4)),n&2){let s;Z(s=U())&&(i.startTemplate=s.first),Z(s=U())&&(i.endTemplate=s.first),Z(s=U())&&(i.itemTemplate=s.first),Z(s=U())&&(i.menuIconTemplate=s.first),Z(s=U())&&(i.submenuIconTemplate=s.first),Z(s=U())&&(i.templates=s)}},viewQuery:function(n,i){if(n&1&&(ne(_o,5),ne(Io,5)),n&2){let r;Z(r=U())&&(i.menubutton=r.first),Z(r=U())&&(i.rootmenu=r.first)}},hostAttrs:["data-pc-section","root","data-pc-name","menubar"],hostVars:2,hostBindings:function(n,i){n&2&&v(i.cn(i.cx("root"),i.styleClass))},inputs:{model:"model",styleClass:"styleClass",autoZIndex:[2,"autoZIndex","autoZIndex",k],baseZIndex:[2,"baseZIndex","baseZIndex",et],autoDisplay:[2,"autoDisplay","autoDisplay",k],autoHide:[2,"autoHide","autoHide",k],breakpoint:"breakpoint",autoHideDelay:[2,"autoHideDelay","autoHideDelay",et],id:"id",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy"},outputs:{onFocus:"onFocus",onBlur:"onBlur"},features:[R([Ne,Ye]),L],ngContentSelectors:xo,decls:7,vars:17,consts:[["rootmenu",""],["legacy",""],["menubutton",""],[3,"class",4,"ngIf"],["tabindex","0","role","button",3,"class","click","keydown",4,"ngIf"],["pMenubarSub","","tabindex","0",3,"itemClick","focus","blur","keydown","itemMouseEnter","mouseleave","items","itemTemplate","menuId","root","baseZIndex","autoZIndex","mobileActive","autoDisplay","focusedItemId","submenuiconTemplate","activeItemPath"],[3,"class",4,"ngIf","ngIfElse"],[4,"ngTemplateOutlet"],["tabindex","0","role","button",3,"click","keydown"],["data-p-icon","bars",4,"ngIf"],["data-p-icon","bars"]],template:function(n,i){if(n&1){let r=Lt();ot(),S(0,So,2,3,"div",3)(1,ko,4,9,"a",4),y(2,"ul",5,0),tt("itemClick",function(a){return G(r),Q(i.onItemClick(a))})("focus",function(a){return G(r),Q(i.onMenuFocus(a))})("blur",function(a){return G(r),Q(i.onMenuBlur(a))})("keydown",function(a){return G(r),Q(i.onKeyDown(a))})("itemMouseEnter",function(a){return G(r),Q(i.onItemMouseEnter(a))})("mouseleave",function(a){return G(r),Q(i.onMouseLeave(a))}),_(),S(4,Mo,2,3,"div",6)(5,Po,2,2,"ng-template",null,1,Pt)}if(n&2){let r=Mt(6);p("ngIf",i.startTemplate||i._startTemplate),h(),p("ngIf",i.model&&i.model.length>0),h(),p("items",i.processedItems)("itemTemplate",i.itemTemplate)("menuId",i.id)("root",!0)("baseZIndex",i.baseZIndex)("autoZIndex",i.autoZIndex)("mobileActive",i.mobileActive)("autoDisplay",i.autoDisplay)("focusedItemId",i.focused?i.focusedItemId:void 0)("submenuiconTemplate",i.submenuIconTemplate||i._submenuIconTemplate)("activeItemPath",i.activeItemPath()),E("aria-label",i.ariaLabel)("aria-labelledby",i.ariaLabelledBy),h(2),p("ngIf",i.endTemplate||i._endTemplate)("ngIfElse",r)}},dependencies:[z,Dt,oe,Ot,Ro,We,Fn,Bt,X],encapsulation:2,changeDetection:0})}return e})(),$n=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=q({type:e});static \u0275inj=j({imports:[Fo,X,X]})}return e})();var jn=`
    .p-avatar {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: dt('avatar.width');
        height: dt('avatar.height');
        font-size: dt('avatar.font.size');
        background: dt('avatar.background');
        color: dt('avatar.color');
        border-radius: dt('avatar.border.radius');
    }

    .p-avatar-image {
        background: transparent;
    }

    .p-avatar-circle {
        border-radius: 50%;
    }

    .p-avatar-circle img {
        border-radius: 50%;
    }

    .p-avatar-icon {
        font-size: dt('avatar.icon.size');
        width: dt('avatar.icon.size');
        height: dt('avatar.icon.size');
    }

    .p-avatar img {
        width: 100%;
        height: 100%;
    }

    .p-avatar-lg {
        width: dt('avatar.lg.width');
        height: dt('avatar.lg.width');
        font-size: dt('avatar.lg.font.size');
    }

    .p-avatar-lg .p-avatar-icon {
        font-size: dt('avatar.lg.icon.size');
        width: dt('avatar.lg.icon.size');
        height: dt('avatar.lg.icon.size');
    }

    .p-avatar-xl {
        width: dt('avatar.xl.width');
        height: dt('avatar.xl.width');
        font-size: dt('avatar.xl.font.size');
    }

    .p-avatar-xl .p-avatar-icon {
        font-size: dt('avatar.xl.icon.size');
        width: dt('avatar.xl.icon.size');
        height: dt('avatar.xl.icon.size');
    }

    .p-avatar-group {
        display: flex;
        align-items: center;
    }

    .p-avatar-group .p-avatar + .p-avatar {
        margin-inline-start: dt('avatar.group.offset');
    }

    .p-avatar-group .p-avatar {
        border: 2px solid dt('avatar.group.border.color');
    }

    .p-avatar-group .p-avatar-lg + .p-avatar-lg {
        margin-inline-start: dt('avatar.lg.group.offset');
    }

    .p-avatar-group .p-avatar-xl + .p-avatar-xl {
        margin-inline-start: dt('avatar.xl.group.offset');
    }
`;var Ao=["*"];function Bo(e,o){if(e&1&&(y(0,"span"),P(1),_()),e&2){let t=u();v(t.cx("label")),h(),It(t.label)}}function Ho(e,o){if(e&1&&C(0,"span",4),e&2){let t=u(2);v(t.icon),p("ngClass",t.cx("icon"))}}function zo(e,o){if(e&1&&S(0,Ho,1,3,"span",3),e&2){let t=u(),n=Mt(5);p("ngIf",t.icon)("ngIfElse",n)}}function Vo(e,o){if(e&1){let t=Lt();y(0,"img",6),tt("error",function(i){G(t);let r=u(2);return Q(r.imageError(i))}),_()}if(e&2){let t=u(2);p("src",t.image,ce),E("aria-label",t.ariaLabel)}}function Wo(e,o){if(e&1&&S(0,Vo,1,2,"img",5),e&2){let t=u();p("ngIf",t.image)}}var Yo={root:({instance:e})=>["p-avatar p-component",{"p-avatar-image":e.image!=null,"p-avatar-circle":e.shape==="circle","p-avatar-lg":e.size==="large","p-avatar-xl":e.size==="xlarge"}],label:"p-avatar-label",icon:"p-avatar-icon"},Kn=(()=>{class e extends F{name="avatar";theme=jn;classes=Yo;static \u0275fac=(()=>{let t;return function(i){return(t||(t=w(e)))(i||e)}})();static \u0275prov=H({token:e,factory:e.\u0275fac})}return e})();var No=(()=>{class e extends V{label;icon;image;size="normal";shape="square";styleClass;ariaLabel;ariaLabelledBy;onImageError=new I;_componentStyle=x(Kn);imageError(t){this.onImageError.emit(t)}static \u0275fac=(()=>{let t;return function(i){return(t||(t=w(e)))(i||e)}})();static \u0275cmp=T({type:e,selectors:[["p-avatar"]],hostVars:5,hostBindings:function(n,i){n&2&&(E("data-pc-name","avatar")("aria-label",i.ariaLabel)("aria-labelledby",i.ariaLabelledBy),v(i.cn(i.cx("root"),i.styleClass)))},inputs:{label:"label",icon:"icon",image:"image",size:"size",shape:"shape",styleClass:"styleClass",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy"},outputs:{onImageError:"onImageError"},features:[R([Kn]),L],ngContentSelectors:Ao,decls:6,vars:2,consts:[["iconTemplate",""],["imageTemplate",""],[3,"class",4,"ngIf","ngIfElse"],[3,"class","ngClass",4,"ngIf","ngIfElse"],[3,"ngClass"],[3,"src","error",4,"ngIf"],[3,"error","src"]],template:function(n,i){if(n&1&&(ot(),rt(0),S(1,Bo,2,3,"span",2)(2,zo,1,2,"ng-template",null,0,Pt)(4,Wo,1,1,"ng-template",null,1,Pt)),n&2){let r=Mt(3);h(),p("ngIf",i.label)("ngIfElse",r)}},dependencies:[z,mn,Dt,X],encapsulation:2,changeDetection:0})}return e})(),qn=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=q({type:e});static \u0275inj=j({imports:[No,X,X]})}return e})();var Zn=(()=>{class e extends V{autofocus=!1;focused=!1;platformId=x(gt);document=x(Wt);host=x(_t);ngAfterContentChecked(){this.autofocus===!1?this.host.nativeElement.removeAttribute("autofocus"):this.host.nativeElement.setAttribute("autofocus",!0),this.focused||this.autoFocus()}ngAfterViewChecked(){this.focused||this.autoFocus()}autoFocus(){N(this.platformId)&&this.autofocus&&setTimeout(()=>{let t=Ve.getFocusableElements(this.host?.nativeElement);t.length===0&&this.host.nativeElement.focus(),t.length>0&&t[0].focus(),this.focused=!0})}static \u0275fac=(()=>{let t;return function(i){return(t||(t=w(e)))(i||e)}})();static \u0275dir=it({type:e,selectors:[["","pAutoFocus",""]],inputs:{autofocus:[0,"pAutoFocus","autofocus"]},features:[L]})}return e})();var Un=`
    .p-progressbar {
        display: block;
        position: relative;
        overflow: hidden;
        height: dt('progressbar.height');
        background: dt('progressbar.background');
        border-radius: dt('progressbar.border.radius');
    }

    .p-progressbar-value {
        margin: 0;
        background: dt('progressbar.value.background');
    }

    .p-progressbar-label {
        color: dt('progressbar.label.color');
        font-size: dt('progressbar.label.font.size');
        font-weight: dt('progressbar.label.font.weight');
    }

    .p-progressbar-determinate .p-progressbar-value {
        height: 100%;
        width: 0%;
        position: absolute;
        display: none;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        transition: width 1s ease-in-out;
    }

    .p-progressbar-determinate .p-progressbar-label {
        display: inline-flex;
    }

    .p-progressbar-indeterminate .p-progressbar-value::before {
        content: '';
        position: absolute;
        background: inherit;
        inset-block-start: 0;
        inset-inline-start: 0;
        inset-block-end: 0;
        will-change: inset-inline-start, inset-inline-end;
        animation: p-progressbar-indeterminate-anim 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
    }

    .p-progressbar-indeterminate .p-progressbar-value::after {
        content: '';
        position: absolute;
        background: inherit;
        inset-block-start: 0;
        inset-inline-start: 0;
        inset-block-end: 0;
        will-change: inset-inline-start, inset-inline-end;
        animation: p-progressbar-indeterminate-anim-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
        animation-delay: 1.15s;
    }

    @keyframes p-progressbar-indeterminate-anim {
        0% {
            inset-inline-start: -35%;
            inset-inline-end: 100%;
        }
        60% {
            inset-inline-start: 100%;
            inset-inline-end: -90%;
        }
        100% {
            inset-inline-start: 100%;
            inset-inline-end: -90%;
        }
    }
    @-webkit-keyframes p-progressbar-indeterminate-anim {
        0% {
            inset-inline-start: -35%;
            inset-inline-end: 100%;
        }
        60% {
            inset-inline-start: 100%;
            inset-inline-end: -90%;
        }
        100% {
            inset-inline-start: 100%;
            inset-inline-end: -90%;
        }
    }

    @keyframes p-progressbar-indeterminate-anim-short {
        0% {
            inset-inline-start: -200%;
            inset-inline-end: 100%;
        }
        60% {
            inset-inline-start: 107%;
            inset-inline-end: -8%;
        }
        100% {
            inset-inline-start: 107%;
            inset-inline-end: -8%;
        }
    }
    @-webkit-keyframes p-progressbar-indeterminate-anim-short {
        0% {
            inset-inline-start: -200%;
            inset-inline-end: 100%;
        }
        60% {
            inset-inline-start: 107%;
            inset-inline-end: -8%;
        }
        100% {
            inset-inline-start: 107%;
            inset-inline-end: -8%;
        }
    }
`;var Xo=["*"],$o={root:"p-fluid"},Gn=(()=>{class e extends F{name="fluid";classes=$o;theme=Un;static \u0275fac=(()=>{let t;return function(i){return(t||(t=w(e)))(i||e)}})();static \u0275prov=H({token:e,factory:e.\u0275fac})}return e})();var Qn=(()=>{class e extends V{_componentStyle=x(Gn);static \u0275fac=(()=>{let t;return function(i){return(t||(t=w(e)))(i||e)}})();static \u0275cmp=T({type:e,selectors:[["p-fluid"]],hostVars:2,hostBindings:function(n,i){n&2&&v(i.cx("root"))},features:[R([Gn]),L],ngContentSelectors:Xo,decls:1,vars:0,template:function(n,i){n&1&&(ot(),rt(0))},dependencies:[z],encapsulation:2,changeDetection:0})}return e})();var Jn=`
    .p-button {
        display: inline-flex;
        cursor: pointer;
        user-select: none;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        position: relative;
        color: dt('button.primary.color');
        background: dt('button.primary.background');
        border: 1px solid dt('button.primary.border.color');
        padding: dt('button.padding.y') dt('button.padding.x');
        font-size: 1rem;
        font-family: inherit;
        font-feature-settings: inherit;
        transition:
            background dt('button.transition.duration'),
            color dt('button.transition.duration'),
            border-color dt('button.transition.duration'),
            outline-color dt('button.transition.duration'),
            box-shadow dt('button.transition.duration');
        border-radius: dt('button.border.radius');
        outline-color: transparent;
        gap: dt('button.gap');
    }

    .p-button:disabled {
        cursor: default;
    }

    .p-button-icon-right {
        order: 1;
    }

    .p-button-icon-right:dir(rtl) {
        order: -1;
    }

    .p-button:not(.p-button-vertical) .p-button-icon:not(.p-button-icon-right):dir(rtl) {
        order: 1;
    }

    .p-button-icon-bottom {
        order: 2;
    }

    .p-button-icon-only {
        width: dt('button.icon.only.width');
        padding-inline-start: 0;
        padding-inline-end: 0;
        gap: 0;
    }

    .p-button-icon-only.p-button-rounded {
        border-radius: 50%;
        height: dt('button.icon.only.width');
    }

    .p-button-icon-only .p-button-label {
        visibility: hidden;
        width: 0;
    }

    .p-button-icon-only::after {
        content: "\0A0";
        visibility: hidden;
        width: 0;
    }

    .p-button-sm {
        font-size: dt('button.sm.font.size');
        padding: dt('button.sm.padding.y') dt('button.sm.padding.x');
    }

    .p-button-sm .p-button-icon {
        font-size: dt('button.sm.font.size');
    }

    .p-button-sm.p-button-icon-only {
        width: dt('button.sm.icon.only.width');
    }

    .p-button-sm.p-button-icon-only.p-button-rounded {
        height: dt('button.sm.icon.only.width');
    }

    .p-button-lg {
        font-size: dt('button.lg.font.size');
        padding: dt('button.lg.padding.y') dt('button.lg.padding.x');
    }

    .p-button-lg .p-button-icon {
        font-size: dt('button.lg.font.size');
    }

    .p-button-lg.p-button-icon-only {
        width: dt('button.lg.icon.only.width');
    }

    .p-button-lg.p-button-icon-only.p-button-rounded {
        height: dt('button.lg.icon.only.width');
    }

    .p-button-vertical {
        flex-direction: column;
    }

    .p-button-label {
        font-weight: dt('button.label.font.weight');
    }

    .p-button-fluid {
        width: 100%;
    }

    .p-button-fluid.p-button-icon-only {
        width: dt('button.icon.only.width');
    }

    .p-button:not(:disabled):hover {
        background: dt('button.primary.hover.background');
        border: 1px solid dt('button.primary.hover.border.color');
        color: dt('button.primary.hover.color');
    }

    .p-button:not(:disabled):active {
        background: dt('button.primary.active.background');
        border: 1px solid dt('button.primary.active.border.color');
        color: dt('button.primary.active.color');
    }

    .p-button:focus-visible {
        box-shadow: dt('button.primary.focus.ring.shadow');
        outline: dt('button.focus.ring.width') dt('button.focus.ring.style') dt('button.primary.focus.ring.color');
        outline-offset: dt('button.focus.ring.offset');
    }

    .p-button .p-badge {
        min-width: dt('button.badge.size');
        height: dt('button.badge.size');
        line-height: dt('button.badge.size');
    }

    .p-button-raised {
        box-shadow: dt('button.raised.shadow');
    }

    .p-button-rounded {
        border-radius: dt('button.rounded.border.radius');
    }

    .p-button-secondary {
        background: dt('button.secondary.background');
        border: 1px solid dt('button.secondary.border.color');
        color: dt('button.secondary.color');
    }

    .p-button-secondary:not(:disabled):hover {
        background: dt('button.secondary.hover.background');
        border: 1px solid dt('button.secondary.hover.border.color');
        color: dt('button.secondary.hover.color');
    }

    .p-button-secondary:not(:disabled):active {
        background: dt('button.secondary.active.background');
        border: 1px solid dt('button.secondary.active.border.color');
        color: dt('button.secondary.active.color');
    }

    .p-button-secondary:focus-visible {
        outline-color: dt('button.secondary.focus.ring.color');
        box-shadow: dt('button.secondary.focus.ring.shadow');
    }

    .p-button-success {
        background: dt('button.success.background');
        border: 1px solid dt('button.success.border.color');
        color: dt('button.success.color');
    }

    .p-button-success:not(:disabled):hover {
        background: dt('button.success.hover.background');
        border: 1px solid dt('button.success.hover.border.color');
        color: dt('button.success.hover.color');
    }

    .p-button-success:not(:disabled):active {
        background: dt('button.success.active.background');
        border: 1px solid dt('button.success.active.border.color');
        color: dt('button.success.active.color');
    }

    .p-button-success:focus-visible {
        outline-color: dt('button.success.focus.ring.color');
        box-shadow: dt('button.success.focus.ring.shadow');
    }

    .p-button-info {
        background: dt('button.info.background');
        border: 1px solid dt('button.info.border.color');
        color: dt('button.info.color');
    }

    .p-button-info:not(:disabled):hover {
        background: dt('button.info.hover.background');
        border: 1px solid dt('button.info.hover.border.color');
        color: dt('button.info.hover.color');
    }

    .p-button-info:not(:disabled):active {
        background: dt('button.info.active.background');
        border: 1px solid dt('button.info.active.border.color');
        color: dt('button.info.active.color');
    }

    .p-button-info:focus-visible {
        outline-color: dt('button.info.focus.ring.color');
        box-shadow: dt('button.info.focus.ring.shadow');
    }

    .p-button-warn {
        background: dt('button.warn.background');
        border: 1px solid dt('button.warn.border.color');
        color: dt('button.warn.color');
    }

    .p-button-warn:not(:disabled):hover {
        background: dt('button.warn.hover.background');
        border: 1px solid dt('button.warn.hover.border.color');
        color: dt('button.warn.hover.color');
    }

    .p-button-warn:not(:disabled):active {
        background: dt('button.warn.active.background');
        border: 1px solid dt('button.warn.active.border.color');
        color: dt('button.warn.active.color');
    }

    .p-button-warn:focus-visible {
        outline-color: dt('button.warn.focus.ring.color');
        box-shadow: dt('button.warn.focus.ring.shadow');
    }

    .p-button-help {
        background: dt('button.help.background');
        border: 1px solid dt('button.help.border.color');
        color: dt('button.help.color');
    }

    .p-button-help:not(:disabled):hover {
        background: dt('button.help.hover.background');
        border: 1px solid dt('button.help.hover.border.color');
        color: dt('button.help.hover.color');
    }

    .p-button-help:not(:disabled):active {
        background: dt('button.help.active.background');
        border: 1px solid dt('button.help.active.border.color');
        color: dt('button.help.active.color');
    }

    .p-button-help:focus-visible {
        outline-color: dt('button.help.focus.ring.color');
        box-shadow: dt('button.help.focus.ring.shadow');
    }

    .p-button-danger {
        background: dt('button.danger.background');
        border: 1px solid dt('button.danger.border.color');
        color: dt('button.danger.color');
    }

    .p-button-danger:not(:disabled):hover {
        background: dt('button.danger.hover.background');
        border: 1px solid dt('button.danger.hover.border.color');
        color: dt('button.danger.hover.color');
    }

    .p-button-danger:not(:disabled):active {
        background: dt('button.danger.active.background');
        border: 1px solid dt('button.danger.active.border.color');
        color: dt('button.danger.active.color');
    }

    .p-button-danger:focus-visible {
        outline-color: dt('button.danger.focus.ring.color');
        box-shadow: dt('button.danger.focus.ring.shadow');
    }

    .p-button-contrast {
        background: dt('button.contrast.background');
        border: 1px solid dt('button.contrast.border.color');
        color: dt('button.contrast.color');
    }

    .p-button-contrast:not(:disabled):hover {
        background: dt('button.contrast.hover.background');
        border: 1px solid dt('button.contrast.hover.border.color');
        color: dt('button.contrast.hover.color');
    }

    .p-button-contrast:not(:disabled):active {
        background: dt('button.contrast.active.background');
        border: 1px solid dt('button.contrast.active.border.color');
        color: dt('button.contrast.active.color');
    }

    .p-button-contrast:focus-visible {
        outline-color: dt('button.contrast.focus.ring.color');
        box-shadow: dt('button.contrast.focus.ring.shadow');
    }

    .p-button-outlined {
        background: transparent;
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined:not(:disabled):hover {
        background: dt('button.outlined.primary.hover.background');
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined:not(:disabled):active {
        background: dt('button.outlined.primary.active.background');
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined.p-button-secondary {
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-secondary:not(:disabled):hover {
        background: dt('button.outlined.secondary.hover.background');
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-secondary:not(:disabled):active {
        background: dt('button.outlined.secondary.active.background');
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-success {
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-success:not(:disabled):hover {
        background: dt('button.outlined.success.hover.background');
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-success:not(:disabled):active {
        background: dt('button.outlined.success.active.background');
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-info {
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-info:not(:disabled):hover {
        background: dt('button.outlined.info.hover.background');
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-info:not(:disabled):active {
        background: dt('button.outlined.info.active.background');
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-warn {
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-warn:not(:disabled):hover {
        background: dt('button.outlined.warn.hover.background');
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-warn:not(:disabled):active {
        background: dt('button.outlined.warn.active.background');
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-help {
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-help:not(:disabled):hover {
        background: dt('button.outlined.help.hover.background');
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-help:not(:disabled):active {
        background: dt('button.outlined.help.active.background');
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-danger {
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-danger:not(:disabled):hover {
        background: dt('button.outlined.danger.hover.background');
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-danger:not(:disabled):active {
        background: dt('button.outlined.danger.active.background');
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-contrast {
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-contrast:not(:disabled):hover {
        background: dt('button.outlined.contrast.hover.background');
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-contrast:not(:disabled):active {
        background: dt('button.outlined.contrast.active.background');
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-plain {
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-outlined.p-button-plain:not(:disabled):hover {
        background: dt('button.outlined.plain.hover.background');
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-outlined.p-button-plain:not(:disabled):active {
        background: dt('button.outlined.plain.active.background');
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-text {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text:not(:disabled):hover {
        background: dt('button.text.primary.hover.background');
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text:not(:disabled):active {
        background: dt('button.text.primary.active.background');
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text.p-button-secondary {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-secondary:not(:disabled):hover {
        background: dt('button.text.secondary.hover.background');
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-secondary:not(:disabled):active {
        background: dt('button.text.secondary.active.background');
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-success {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-success:not(:disabled):hover {
        background: dt('button.text.success.hover.background');
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-success:not(:disabled):active {
        background: dt('button.text.success.active.background');
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-info {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-info:not(:disabled):hover {
        background: dt('button.text.info.hover.background');
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-info:not(:disabled):active {
        background: dt('button.text.info.active.background');
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-warn {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-warn:not(:disabled):hover {
        background: dt('button.text.warn.hover.background');
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-warn:not(:disabled):active {
        background: dt('button.text.warn.active.background');
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-help {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-help:not(:disabled):hover {
        background: dt('button.text.help.hover.background');
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-help:not(:disabled):active {
        background: dt('button.text.help.active.background');
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-danger {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-danger:not(:disabled):hover {
        background: dt('button.text.danger.hover.background');
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-danger:not(:disabled):active {
        background: dt('button.text.danger.active.background');
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-contrast {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-contrast:not(:disabled):hover {
        background: dt('button.text.contrast.hover.background');
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-contrast:not(:disabled):active {
        background: dt('button.text.contrast.active.background');
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-plain {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-text.p-button-plain:not(:disabled):hover {
        background: dt('button.text.plain.hover.background');
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-text.p-button-plain:not(:disabled):active {
        background: dt('button.text.plain.active.background');
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-link {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.color');
    }

    .p-button-link:not(:disabled):hover {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.hover.color');
    }

    .p-button-link:not(:disabled):hover .p-button-label {
        text-decoration: underline;
    }

    .p-button-link:not(:disabled):active {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.active.color');
    }
`;var jo=["content"],Ko=["loadingicon"],qo=["icon"],Zo=["*"],ei=e=>({class:e});function Uo(e,o){e&1&&ee(0)}function Go(e,o){if(e&1&&C(0,"span"),e&2){let t=u(3);v(t.cx("loadingIcon")),E("aria-hidden",!0)("data-pc-section","loadingicon")}}function Qo(e,o){if(e&1&&(K(),C(0,"svg",7)),e&2){let t=u(3);v(t.cn(t.cx("loadingIcon"),t.spinnerIconClass())),p("spin",!0),E("aria-hidden",!0)("data-pc-section","loadingicon")}}function Jo(e,o){if(e&1&&(ct(0),S(1,Go,1,4,"span",3)(2,Qo,1,5,"svg",6),dt()),e&2){let t=u(2);h(),p("ngIf",t.loadingIcon),h(),p("ngIf",!t.loadingIcon)}}function tr(e,o){}function er(e,o){if(e&1&&S(0,tr,0,0,"ng-template",8),e&2){let t=u(2);p("ngIf",t.loadingIconTemplate||t._loadingIconTemplate)}}function nr(e,o){if(e&1&&(ct(0),S(1,Jo,3,2,"ng-container",2)(2,er,1,1,null,5),dt()),e&2){let t=u();h(),p("ngIf",!t.loadingIconTemplate&&!t._loadingIconTemplate),h(),p("ngTemplateOutlet",t.loadingIconTemplate||t._loadingIconTemplate)("ngTemplateOutletContext",Me(3,ei,t.cx("loadingIcon")))}}function ir(e,o){if(e&1&&C(0,"span"),e&2){let t=u(2);v(t.cx("icon")),E("data-pc-section","icon")}}function or(e,o){}function rr(e,o){if(e&1&&S(0,or,0,0,"ng-template",8),e&2){let t=u(2);p("ngIf",!t.icon&&(t.iconTemplate||t._iconTemplate))}}function sr(e,o){if(e&1&&(ct(0),S(1,ir,1,3,"span",3)(2,rr,1,1,null,5),dt()),e&2){let t=u();h(),p("ngIf",t.icon&&!t.iconTemplate&&!t._iconTemplate),h(),p("ngTemplateOutlet",t.iconTemplate||t._iconTemplate)("ngTemplateOutletContext",Me(3,ei,t.cx("icon")))}}function ar(e,o){if(e&1&&(y(0,"span"),P(1),_()),e&2){let t=u();v(t.cx("label")),E("aria-hidden",t.icon&&!t.label)("data-pc-section","label"),h(),It(t.label)}}function lr(e,o){if(e&1&&C(0,"p-badge",9),e&2){let t=u();p("value",t.badge)("severity",t.badgeSeverity)}}var cr={root:({instance:e})=>["p-button p-component",{"p-button-icon-only":(e.icon||e.buttonProps?.icon||e.iconTemplate||e._iconTemplate||e.loadingIcon||e.loadingIconTemplate||e._loadingIconTemplate)&&!e.label&&!e.buttonProps?.label,"p-button-vertical":(e.iconPos==="top"||e.iconPos==="bottom")&&e.label,"p-button-loading":e.loading||e.buttonProps?.loading,"p-button-link":e.link||e.buttonProps?.link,[`p-button-${e.severity||e.buttonProps?.severity}`]:e.severity||e.buttonProps?.severity,"p-button-raised":e.raised||e.buttonProps?.raised,"p-button-rounded":e.rounded||e.buttonProps?.rounded,"p-button-text":e.text||e.variant==="text"||e.buttonProps?.text||e.buttonProps?.variant==="text","p-button-outlined":e.outlined||e.variant==="outlined"||e.buttonProps?.outlined||e.buttonProps?.variant==="outlined","p-button-sm":e.size==="small"||e.buttonProps?.size==="small","p-button-lg":e.size==="large"||e.buttonProps?.size==="large","p-button-plain":e.plain||e.buttonProps?.plain,"p-button-fluid":e.hasFluid}],loadingIcon:"p-button-loading-icon",icon:({instance:e})=>["p-button-icon",{[`p-button-icon-${e.iconPos||e.buttonProps?.iconPos}`]:e.label||e.buttonProps?.label,"p-button-icon-left":(e.iconPos==="left"||e.buttonProps?.iconPos==="left")&&e.label||e.buttonProps?.label,"p-button-icon-right":(e.iconPos==="right"||e.buttonProps?.iconPos==="right")&&e.label||e.buttonProps?.label},e.icon,e.buttonProps?.icon],spinnerIcon:({instance:e})=>Object.entries(e.iconClass()).filter(([,o])=>!!o).reduce((o,[t])=>o+` ${t}`,"p-button-loading-icon"),label:"p-button-label"},ti=(()=>{class e extends F{name="button";theme=Jn;classes=cr;static \u0275fac=(()=>{let t;return function(i){return(t||(t=w(e)))(i||e)}})();static \u0275prov=H({token:e,factory:e.\u0275fac})}return e})();var dr=(()=>{class e extends V{type="button";iconPos="left";icon;badge;label;disabled;loading=!1;loadingIcon;raised=!1;rounded=!1;text=!1;plain=!1;severity;outlined=!1;link=!1;tabindex;size;variant;style;styleClass;badgeClass;badgeSeverity="secondary";ariaLabel;buttonProps;autofocus;fluid=pt(void 0,{transform:k});onClick=new I;onFocus=new I;onBlur=new I;contentTemplate;loadingIconTemplate;iconTemplate;templates;pcFluid=x(Qn,{optional:!0,host:!0,skipSelf:!0});get hasFluid(){return this.fluid()??!!this.pcFluid}_componentStyle=x(ti);_contentTemplate;_iconTemplate;_loadingIconTemplate;ngAfterContentInit(){this.templates?.forEach(t=>{switch(t.getType()){case"content":this._contentTemplate=t.template;break;case"icon":this._iconTemplate=t.template;break;case"loadingicon":this._loadingIconTemplate=t.template;break;default:this._contentTemplate=t.template;break}})}spinnerIconClass(){return Object.entries(this.iconClass()).filter(([,t])=>!!t).reduce((t,[n])=>t+` ${n}`,"p-button-loading-icon")}iconClass(){return{[`p-button-loading-icon pi-spin ${this.loadingIcon??""}`]:this.loading,"p-button-icon":!0,"p-button-icon-left":this.iconPos==="left"&&this.label,"p-button-icon-right":this.iconPos==="right"&&this.label,"p-button-icon-top":this.iconPos==="top"&&this.label,"p-button-icon-bottom":this.iconPos==="bottom"&&this.label}}static \u0275fac=(()=>{let t;return function(i){return(t||(t=w(e)))(i||e)}})();static \u0275cmp=T({type:e,selectors:[["p-button"]],contentQueries:function(n,i,r){if(n&1&&(st(r,jo,5),st(r,Ko,5),st(r,qo,5),st(r,ge,4)),n&2){let s;Z(s=U())&&(i.contentTemplate=s.first),Z(s=U())&&(i.loadingIconTemplate=s.first),Z(s=U())&&(i.iconTemplate=s.first),Z(s=U())&&(i.templates=s)}},inputs:{type:"type",iconPos:"iconPos",icon:"icon",badge:"badge",label:"label",disabled:[2,"disabled","disabled",k],loading:[2,"loading","loading",k],loadingIcon:"loadingIcon",raised:[2,"raised","raised",k],rounded:[2,"rounded","rounded",k],text:[2,"text","text",k],plain:[2,"plain","plain",k],severity:"severity",outlined:[2,"outlined","outlined",k],link:[2,"link","link",k],tabindex:[2,"tabindex","tabindex",et],size:"size",variant:"variant",style:"style",styleClass:"styleClass",badgeClass:"badgeClass",badgeSeverity:"badgeSeverity",ariaLabel:"ariaLabel",buttonProps:"buttonProps",autofocus:[2,"autofocus","autofocus",k],fluid:[1,"fluid"]},outputs:{onClick:"onClick",onFocus:"onFocus",onBlur:"onBlur"},features:[R([ti]),L],ngContentSelectors:Zo,decls:7,vars:15,consts:[["pRipple","",3,"click","focus","blur","ngStyle","disabled","pAutoFocus"],[4,"ngTemplateOutlet"],[4,"ngIf"],[3,"class",4,"ngIf"],[3,"value","severity",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["data-p-icon","spinner",3,"class","spin",4,"ngIf"],["data-p-icon","spinner",3,"spin"],[3,"ngIf"],[3,"value","severity"]],template:function(n,i){n&1&&(ot(),y(0,"button",0),tt("click",function(s){return i.onClick.emit(s)})("focus",function(s){return i.onFocus.emit(s)})("blur",function(s){return i.onBlur.emit(s)}),rt(1),S(2,Uo,1,0,"ng-container",1)(3,nr,3,5,"ng-container",2)(4,sr,3,5,"ng-container",2)(5,ar,2,5,"span",3)(6,lr,1,2,"p-badge",4),_()),n&2&&(v(i.cn(i.cx("root"),i.styleClass,i.buttonProps==null?null:i.buttonProps.styleClass)),p("ngStyle",i.style||(i.buttonProps==null?null:i.buttonProps.style))("disabled",i.disabled||i.loading||(i.buttonProps==null?null:i.buttonProps.disabled))("pAutoFocus",i.autofocus||(i.buttonProps==null?null:i.buttonProps.autofocus)),E("type",i.type||(i.buttonProps==null?null:i.buttonProps.type))("aria-label",i.ariaLabel||(i.buttonProps==null?null:i.buttonProps.ariaLabel))("data-pc-name","button")("data-pc-section","root")("tabindex",i.tabindex||(i.buttonProps==null?null:i.buttonProps.tabindex)),h(2),p("ngTemplateOutlet",i.contentTemplate||i._contentTemplate),h(),p("ngIf",i.loading),h(),p("ngIf",!i.loading),h(),p("ngIf",!i.contentTemplate&&!i._contentTemplate&&i.label),h(),p("ngIf",!i.contentTemplate&&!i._contentTemplate&&i.badge))},dependencies:[z,Dt,oe,me,ye,Zn,An,Bt,re,X],encapsulation:2,changeDetection:0})}return e})(),ni=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=q({type:e});static \u0275inj=j({imports:[z,dr,X,X]})}return e})();var sc=(()=>{let o=class o{constructor(n){this.R=n,this.isOpen=!1,this.toggleSidebar=new I,this.imgHeaderProfile="assets/header-img-profile-fotor-20241231111158.png"}onToggleSidebar(){this.toggleSidebar.emit()}handleKeyboardEvent(n){n.shiftKey&&n.key==="A"&&this.R.navigate(["/portafolio/contacto"]),n.shiftKey&&n.key==="D"&&this.R.navigate(["/portafolio"])}ngOnInit(){this.items=[{label:"Sobre m\xED",icon:"pi pi-home",command:()=>{this.R.navigate(["/index"])}},{label:"M\xE1s Opciones",icon:"pi pi-search-plus",badge:"2",items:[{label:"Contacto",icon:"pi pi-mobile",shortcut:"Shift + A",command:()=>{this.R.navigate(["/portafolio/contacto"])}},{label:"Portafolio",icon:"pi pi-link",shortcut:"Shift + D",command:()=>{this.R.navigate(["/portafolio"])}},{separator:!0}]}]}};o.\u0275fac=function(i){return new(i||o)(D(fe))},o.\u0275cmp=T({type:o,selectors:[["app-header"]],hostBindings:function(i,r){i&1&&tt("keydown",function(a){return r.handleKeyboardEvent(a)},de)},inputs:{isOpen:"isOpen"},outputs:{toggleSidebar:"toggleSidebar"},decls:7,vars:0,consts:[[1,"logo"],[1,"hamburger",3,"click"]],template:function(i,r){i&1&&(Yt(0,"header")(1,"div",0),P(2,"Mi Portafolio"),Nt(),Yt(3,"div",1),cn("click",function(){return r.onToggleSidebar()}),lt(4,"span")(5,"span")(6,"span"),Nt()())},dependencies:[z,$n,Bt,qn,ni],styles:["@layer reset,primeng;  .p-menubar{background:none!important;border:none!important}.bg-gradient-to-r[_ngcontent-%COMP%]{background:linear-gradient(90deg,#1e3a8a,#3b82f6)}.badge-custom[_ngcontent-%COMP%]{background-color:#2563eb;color:#fff;font-weight:700;border-radius:9999px}.text-shadow-md[_ngcontent-%COMP%]{text-shadow:1px 1px 3px rgba(0,0,0,.2)}.hover\\:bg-blue-500[_ngcontent-%COMP%]:hover{background-color:(#3b82f6)}.p-avatar[_ngcontent-%COMP%]{border:2px solid white}.p-menubar-item-link[_ngcontent-%COMP%]{padding:10px 15px;display:flex;transition:background .3s ease}header[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100%;z-index:50}body[_ngcontent-%COMP%]{margin-top:80px} :root{--p-menubar-transition-duration: unset !important;--p-menubar-item-focus-background: unset !important;--p-menubar-item-active-background: unset !important;--p-menubar-item-color: unset !important;--p-menubar-item-focus-color: unset !important;--p-menubar-item-active-color: unset !important;--p-menubar-item-border-radius: unset !important;--p-menubar-item-icon-color: unset !important;--p-menubar-item-icon-focus-color: unset !important;--p-menubar-item-icon-active-color: unset !important}@media (max-width: 600px){  .p-1{display:none!important}}@media (max-width: 325px){  .text-3xl{font-size:10pt}}header[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100%;height:60px;background-color:#111;color:#fff;display:flex;align-items:center;padding:0 1rem;z-index:1001}.logo[_ngcontent-%COMP%]{font-weight:700;font-size:1.25rem}.hamburger[_ngcontent-%COMP%]{display:none;flex-direction:column;cursor:pointer;width:24px;height:18px;justify-content:space-between;margin-left:auto}.hamburger[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{height:3px;width:100%;background:#fff;border-radius:2px}@media (max-width: 768px){.hamburger[_ngcontent-%COMP%]{display:flex}}"]});let e=o;return e})();var cc=(()=>{let o=class o{};o.\u0275fac=function(i){return new(i||o)},o.\u0275cmp=T({type:o,selectors:[["app-footer"]],decls:6,vars:0,consts:[[1,"text-white","py-4","text-center",2,"background","#111"],["routerLink","/portafolio/politica",2,"text-align","right","text-decoration","revert"]],template:function(i,r){i&1&&(y(0,"footer",0)(1,"p"),P(2,"\xA9 2024 Yilson Alexis Malambo Madrigal, chatGPT. Todos los derechos reservados. "),y(3,"a",1)(4,"strong"),P(5,"Pol\xEDtica de Privacidad"),_()()()())},dependencies:[Ot,$t],encapsulation:2});let e=o;return e})();function bt(e){return getComputedStyle(e)}function J(e,o){for(var t in o){var n=o[t];typeof n=="number"&&(n=n+"px"),e.style[t]=n}return e}function Ie(e){var o=document.createElement("div");return o.className=e,o}var ii=typeof Element<"u"&&(Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector);function St(e,o){if(!ii)throw new Error("No element matching method supported");return ii.call(e,o)}function Gt(e){e.remove?e.remove():e.parentNode&&e.parentNode.removeChild(e)}function oi(e,o){return Array.prototype.filter.call(e.children,function(t){return St(t,o)})}var A={main:"ps",rtl:"ps__rtl",element:{thumb:function(e){return"ps__thumb-"+e},rail:function(e){return"ps__rail-"+e},consuming:"ps__child--consume"},state:{focus:"ps--focus",clicking:"ps--clicking",active:function(e){return"ps--active-"+e},scrolling:function(e){return"ps--scrolling-"+e}}},ai={x:null,y:null};function li(e,o){var t=e.element.classList,n=A.state.scrolling(o);t.contains(n)?clearTimeout(ai[o]):t.add(n)}function ci(e,o){ai[o]=setTimeout(function(){return e.isAlive&&e.element.classList.remove(A.state.scrolling(o))},e.settings.scrollingThreshold)}function ur(e,o){li(e,o),ci(e,o)}var se=function(o){this.element=o,this.handlers={}},di={isEmpty:{configurable:!0}};se.prototype.bind=function(o,t){typeof this.handlers[o]>"u"&&(this.handlers[o]=[]),this.handlers[o].push(t),this.element.addEventListener(o,t,!1)};se.prototype.unbind=function(o,t){var n=this;this.handlers[o]=this.handlers[o].filter(function(i){return t&&i!==t?!0:(n.element.removeEventListener(o,i,!1),!1)})};se.prototype.unbindAll=function(){for(var o in this.handlers)this.unbind(o)};di.isEmpty.get=function(){var e=this;return Object.keys(this.handlers).every(function(o){return e.handlers[o].length===0})};Object.defineProperties(se.prototype,di);var Qt=function(){this.eventElements=[]};Qt.prototype.eventElement=function(o){var t=this.eventElements.filter(function(n){return n.element===o})[0];return t||(t=new se(o),this.eventElements.push(t)),t};Qt.prototype.bind=function(o,t,n){this.eventElement(o).bind(t,n)};Qt.prototype.unbind=function(o,t,n){var i=this.eventElement(o);i.unbind(t,n),i.isEmpty&&this.eventElements.splice(this.eventElements.indexOf(i),1)};Qt.prototype.unbindAll=function(){this.eventElements.forEach(function(o){return o.unbindAll()}),this.eventElements=[]};Qt.prototype.once=function(o,t,n){var i=this.eventElement(o),r=function(s){i.unbind(t,r),n(s)};i.bind(t,r)};function xe(e){if(typeof window.CustomEvent=="function")return new CustomEvent(e);var o=document.createEvent("CustomEvent");return o.initCustomEvent(e,!1,!1,void 0),o}function Se(e,o,t,n,i){n===void 0&&(n=!0),i===void 0&&(i=!1);var r;if(o==="top")r=["contentHeight","containerHeight","scrollTop","y","up","down"];else if(o==="left")r=["contentWidth","containerWidth","scrollLeft","x","left","right"];else throw new Error("A proper axis should be provided");pr(e,t,r,n,i)}function pr(e,o,t,n,i){var r=t[0],s=t[1],a=t[2],l=t[3],c=t[4],m=t[5];n===void 0&&(n=!0),i===void 0&&(i=!1);var d=e.element;e.reach[l]=null,d[a]<1&&(e.reach[l]="start"),d[a]>e[r]-e[s]-1&&(e.reach[l]="end"),o&&(d.dispatchEvent(xe("ps-scroll-"+l)),o<0?d.dispatchEvent(xe("ps-scroll-"+c)):o>0&&d.dispatchEvent(xe("ps-scroll-"+m)),n&&ur(e,l)),e.reach[l]&&(o||i)&&d.dispatchEvent(xe("ps-"+l+"-reach-"+e.reach[l]))}function O(e){return parseInt(e,10)||0}function hr(e){return St(e,"input,[contenteditable]")||St(e,"select,[contenteditable]")||St(e,"textarea,[contenteditable]")||St(e,"button,[contenteditable]")}function mr(e){var o=bt(e);return O(o.width)+O(o.paddingLeft)+O(o.paddingRight)+O(o.borderLeftWidth)+O(o.borderRightWidth)}var Ut={isWebKit:typeof document<"u"&&"WebkitAppearance"in document.documentElement.style,supportsTouch:typeof window<"u"&&("ontouchstart"in window||"maxTouchPoints"in window.navigator&&window.navigator.maxTouchPoints>0||window.DocumentTouch&&document instanceof window.DocumentTouch),supportsIePointer:typeof navigator<"u"&&navigator.msMaxTouchPoints,isChrome:typeof navigator<"u"&&/Chrome/i.test(navigator&&navigator.userAgent)};function yt(e){var o=e.element,t=Math.floor(o.scrollTop),n=o.getBoundingClientRect();e.containerWidth=Math.floor(n.width),e.containerHeight=Math.floor(n.height),e.contentWidth=o.scrollWidth,e.contentHeight=o.scrollHeight,o.contains(e.scrollbarXRail)||(oi(o,A.element.rail("x")).forEach(function(i){return Gt(i)}),o.appendChild(e.scrollbarXRail)),o.contains(e.scrollbarYRail)||(oi(o,A.element.rail("y")).forEach(function(i){return Gt(i)}),o.appendChild(e.scrollbarYRail)),!e.settings.suppressScrollX&&e.containerWidth+e.settings.scrollXMarginOffset<e.contentWidth?(e.scrollbarXActive=!0,e.railXWidth=e.containerWidth-e.railXMarginWidth,e.railXRatio=e.containerWidth/e.railXWidth,e.scrollbarXWidth=ri(e,O(e.railXWidth*e.containerWidth/e.contentWidth)),e.scrollbarXLeft=O((e.negativeScrollAdjustment+o.scrollLeft)*(e.railXWidth-e.scrollbarXWidth)/(e.contentWidth-e.containerWidth))):e.scrollbarXActive=!1,!e.settings.suppressScrollY&&e.containerHeight+e.settings.scrollYMarginOffset<e.contentHeight?(e.scrollbarYActive=!0,e.railYHeight=e.containerHeight-e.railYMarginHeight,e.railYRatio=e.containerHeight/e.railYHeight,e.scrollbarYHeight=ri(e,O(e.railYHeight*e.containerHeight/e.contentHeight)),e.scrollbarYTop=O(t*(e.railYHeight-e.scrollbarYHeight)/(e.contentHeight-e.containerHeight))):e.scrollbarYActive=!1,e.scrollbarXLeft>=e.railXWidth-e.scrollbarXWidth&&(e.scrollbarXLeft=e.railXWidth-e.scrollbarXWidth),e.scrollbarYTop>=e.railYHeight-e.scrollbarYHeight&&(e.scrollbarYTop=e.railYHeight-e.scrollbarYHeight),fr(o,e),e.scrollbarXActive?o.classList.add(A.state.active("x")):(o.classList.remove(A.state.active("x")),e.scrollbarXWidth=0,e.scrollbarXLeft=0,o.scrollLeft=e.isRtl===!0?e.contentWidth:0),e.scrollbarYActive?o.classList.add(A.state.active("y")):(o.classList.remove(A.state.active("y")),e.scrollbarYHeight=0,e.scrollbarYTop=0,o.scrollTop=0)}function ri(e,o){return e.settings.minScrollbarLength&&(o=Math.max(o,e.settings.minScrollbarLength)),e.settings.maxScrollbarLength&&(o=Math.min(o,e.settings.maxScrollbarLength)),o}function fr(e,o){var t={width:o.railXWidth},n=Math.floor(e.scrollTop);o.isRtl?t.left=o.negativeScrollAdjustment+e.scrollLeft+o.containerWidth-o.contentWidth:t.left=e.scrollLeft,o.isScrollbarXUsingBottom?t.bottom=o.scrollbarXBottom-n:t.top=o.scrollbarXTop+n,J(o.scrollbarXRail,t);var i={top:n,height:o.railYHeight};o.isScrollbarYUsingRight?o.isRtl?i.right=o.contentWidth-(o.negativeScrollAdjustment+e.scrollLeft)-o.scrollbarYRight-o.scrollbarYOuterWidth-9:i.right=o.scrollbarYRight-e.scrollLeft:o.isRtl?i.left=o.negativeScrollAdjustment+e.scrollLeft+o.containerWidth*2-o.contentWidth-o.scrollbarYLeft-o.scrollbarYOuterWidth:i.left=o.scrollbarYLeft+e.scrollLeft,J(o.scrollbarYRail,i),J(o.scrollbarX,{left:o.scrollbarXLeft,width:o.scrollbarXWidth-o.railBorderXWidth}),J(o.scrollbarY,{top:o.scrollbarYTop,height:o.scrollbarYHeight-o.railBorderYWidth})}function br(e){e.event.bind(e.scrollbarY,"mousedown",function(o){return o.stopPropagation()}),e.event.bind(e.scrollbarYRail,"mousedown",function(o){var t=o.pageY-window.pageYOffset-e.scrollbarYRail.getBoundingClientRect().top,n=t>e.scrollbarYTop?1:-1;e.element.scrollTop+=n*e.containerHeight,yt(e),o.stopPropagation()}),e.event.bind(e.scrollbarX,"mousedown",function(o){return o.stopPropagation()}),e.event.bind(e.scrollbarXRail,"mousedown",function(o){var t=o.pageX-window.pageXOffset-e.scrollbarXRail.getBoundingClientRect().left,n=t>e.scrollbarXLeft?1:-1;e.element.scrollLeft+=n*e.containerWidth,yt(e),o.stopPropagation()})}var we=null;function gr(e){si(e,["containerHeight","contentHeight","pageY","railYHeight","scrollbarY","scrollbarYHeight","scrollTop","y","scrollbarYRail"]),si(e,["containerWidth","contentWidth","pageX","railXWidth","scrollbarX","scrollbarXWidth","scrollLeft","x","scrollbarXRail"])}function si(e,o){var t=o[0],n=o[1],i=o[2],r=o[3],s=o[4],a=o[5],l=o[6],c=o[7],m=o[8],d=e.element,f=null,b=null,g=null;function M(Y){Y.touches&&Y.touches[0]&&(Y[i]=Y.touches[0]["page"+c.toUpperCase()]),we===s&&(d[l]=f+g*(Y[i]-b),li(e,c),yt(e),Y.stopPropagation(),Y.preventDefault())}function W(){ci(e,c),e[m].classList.remove(A.state.clicking),document.removeEventListener("mousemove",M),document.removeEventListener("mouseup",W),document.removeEventListener("touchmove",M),document.removeEventListener("touchend",W),we=null}function nt(Y){we===null&&(we=s,f=d[l],Y.touches&&(Y[i]=Y.touches[0]["page"+c.toUpperCase()]),b=Y[i],g=(e[n]-e[t])/(e[r]-e[a]),Y.touches?(document.addEventListener("touchmove",M,{passive:!1}),document.addEventListener("touchend",W)):(document.addEventListener("mousemove",M),document.addEventListener("mouseup",W)),e[m].classList.add(A.state.clicking)),Y.stopPropagation(),Y.cancelable&&Y.preventDefault()}e[s].addEventListener("mousedown",nt),e[s].addEventListener("touchstart",nt)}function vr(e){var o=e.element,t=function(){return St(o,":hover")},n=function(){return St(e.scrollbarX,":focus")||St(e.scrollbarY,":focus")};function i(r,s){var a=Math.floor(o.scrollTop);if(r===0){if(!e.scrollbarYActive)return!1;if(a===0&&s>0||a>=e.contentHeight-e.containerHeight&&s<0)return!e.settings.wheelPropagation}var l=o.scrollLeft;if(s===0){if(!e.scrollbarXActive)return!1;if(l===0&&r<0||l>=e.contentWidth-e.containerWidth&&r>0)return!e.settings.wheelPropagation}return!0}e.event.bind(e.ownerDocument,"keydown",function(r){if(!(r.isDefaultPrevented&&r.isDefaultPrevented()||r.defaultPrevented)&&!(!t()&&!n())){var s=document.activeElement?document.activeElement:e.ownerDocument.activeElement;if(s){if(s.tagName==="IFRAME")s=s.contentDocument.activeElement;else for(;s.shadowRoot;)s=s.shadowRoot.activeElement;if(hr(s))return}var a=0,l=0;switch(r.which){case 37:r.metaKey?a=-e.contentWidth:r.altKey?a=-e.containerWidth:a=-30;break;case 38:r.metaKey?l=e.contentHeight:r.altKey?l=e.containerHeight:l=30;break;case 39:r.metaKey?a=e.contentWidth:r.altKey?a=e.containerWidth:a=30;break;case 40:r.metaKey?l=-e.contentHeight:r.altKey?l=-e.containerHeight:l=-30;break;case 32:r.shiftKey?l=e.containerHeight:l=-e.containerHeight;break;case 33:l=e.containerHeight;break;case 34:l=-e.containerHeight;break;case 36:l=e.contentHeight;break;case 35:l=-e.contentHeight;break;default:return}e.settings.suppressScrollX&&a!==0||e.settings.suppressScrollY&&l!==0||(o.scrollTop-=l,o.scrollLeft+=a,yt(e),i(a,l)&&r.preventDefault())}})}function yr(e){var o=e.element;function t(s,a){var l=Math.floor(o.scrollTop),c=o.scrollTop===0,m=l+o.offsetHeight===o.scrollHeight,d=o.scrollLeft===0,f=o.scrollLeft+o.offsetWidth===o.scrollWidth,b;return Math.abs(a)>Math.abs(s)?b=c||m:b=d||f,b?!e.settings.wheelPropagation:!0}function n(s){var a=s.deltaX,l=-1*s.deltaY;return(typeof a>"u"||typeof l>"u")&&(a=-1*s.wheelDeltaX/6,l=s.wheelDeltaY/6),s.deltaMode&&s.deltaMode===1&&(a*=10,l*=10),a!==a&&l!==l&&(a=0,l=s.wheelDelta),s.shiftKey?[-l,-a]:[a,l]}function i(s,a,l){if(!Ut.isWebKit&&o.querySelector("select:focus"))return!0;if(!o.contains(s))return!1;for(var c=s;c&&c!==o;){if(c.classList.contains(A.element.consuming))return!0;var m=bt(c);if(l&&m.overflowY.match(/(scroll|auto)/)){var d=c.scrollHeight-c.clientHeight;if(d>0&&(c.scrollTop>0&&l<0||c.scrollTop<d&&l>0))return!0}if(a&&m.overflowX.match(/(scroll|auto)/)){var f=c.scrollWidth-c.clientWidth;if(f>0&&(c.scrollLeft>0&&a<0||c.scrollLeft<f&&a>0))return!0}c=c.parentNode}return!1}function r(s){var a=n(s),l=a[0],c=a[1];if(!i(s.target,l,c)){var m=!1;e.settings.useBothWheelAxes?e.scrollbarYActive&&!e.scrollbarXActive?(c?o.scrollTop-=c*e.settings.wheelSpeed:o.scrollTop+=l*e.settings.wheelSpeed,m=!0):e.scrollbarXActive&&!e.scrollbarYActive&&(l?o.scrollLeft+=l*e.settings.wheelSpeed:o.scrollLeft-=c*e.settings.wheelSpeed,m=!0):(o.scrollTop-=c*e.settings.wheelSpeed,o.scrollLeft+=l*e.settings.wheelSpeed),yt(e),m=m||t(l,c),m&&!s.ctrlKey&&(s.stopPropagation(),s.preventDefault())}}typeof window.onwheel<"u"?e.event.bind(o,"wheel",r):typeof window.onmousewheel<"u"&&e.event.bind(o,"mousewheel",r)}function _r(e){if(!Ut.supportsTouch&&!Ut.supportsIePointer)return;var o=e.element,t={startOffset:{},startTime:0,speed:{},easingLoop:null};function n(d,f){var b=Math.floor(o.scrollTop),g=o.scrollLeft,M=Math.abs(d),W=Math.abs(f);if(W>M){if(f<0&&b===e.contentHeight-e.containerHeight||f>0&&b===0)return window.scrollY===0&&f>0&&Ut.isChrome}else if(M>W&&(d<0&&g===e.contentWidth-e.containerWidth||d>0&&g===0))return!0;return!0}function i(d,f){o.scrollTop-=f,o.scrollLeft-=d,yt(e)}function r(d){return d.targetTouches?d.targetTouches[0]:d}function s(d){return d.target===e.scrollbarX||d.target===e.scrollbarY||d.pointerType&&d.pointerType==="pen"&&d.buttons===0?!1:!!(d.targetTouches&&d.targetTouches.length===1||d.pointerType&&d.pointerType!=="mouse"&&d.pointerType!==d.MSPOINTER_TYPE_MOUSE)}function a(d){if(s(d)){var f=r(d);t.startOffset.pageX=f.pageX,t.startOffset.pageY=f.pageY,t.startTime=new Date().getTime(),t.easingLoop!==null&&clearInterval(t.easingLoop)}}function l(d,f,b){if(!o.contains(d))return!1;for(var g=d;g&&g!==o;){if(g.classList.contains(A.element.consuming))return!0;var M=bt(g);if(b&&M.overflowY.match(/(scroll|auto)/)){var W=g.scrollHeight-g.clientHeight;if(W>0&&(g.scrollTop>0&&b<0||g.scrollTop<W&&b>0))return!0}if(f&&M.overflowX.match(/(scroll|auto)/)){var nt=g.scrollWidth-g.clientWidth;if(nt>0&&(g.scrollLeft>0&&f<0||g.scrollLeft<nt&&f>0))return!0}g=g.parentNode}return!1}function c(d){if(s(d)){var f=r(d),b={pageX:f.pageX,pageY:f.pageY},g=b.pageX-t.startOffset.pageX,M=b.pageY-t.startOffset.pageY;if(l(d.target,g,M))return;i(g,M),t.startOffset=b;var W=new Date().getTime(),nt=W-t.startTime;nt>0&&(t.speed.x=g/nt,t.speed.y=M/nt,t.startTime=W),n(g,M)&&d.cancelable&&d.preventDefault()}}function m(){e.settings.swipeEasing&&(clearInterval(t.easingLoop),t.easingLoop=setInterval(function(){if(e.isInitialized){clearInterval(t.easingLoop);return}if(!t.speed.x&&!t.speed.y){clearInterval(t.easingLoop);return}if(Math.abs(t.speed.x)<.01&&Math.abs(t.speed.y)<.01){clearInterval(t.easingLoop);return}i(t.speed.x*30,t.speed.y*30),t.speed.x*=.8,t.speed.y*=.8},10))}Ut.supportsTouch?(e.event.bind(o,"touchstart",a),e.event.bind(o,"touchmove",c),e.event.bind(o,"touchend",m)):Ut.supportsIePointer&&(window.PointerEvent?(e.event.bind(o,"pointerdown",a),e.event.bind(o,"pointermove",c),e.event.bind(o,"pointerup",m)):window.MSPointerEvent&&(e.event.bind(o,"MSPointerDown",a),e.event.bind(o,"MSPointerMove",c),e.event.bind(o,"MSPointerUp",m)))}var Ir=function(){return{handlers:["click-rail","drag-thumb","keyboard","wheel","touch"],maxScrollbarLength:null,minScrollbarLength:null,scrollingThreshold:1e3,scrollXMarginOffset:0,scrollYMarginOffset:0,suppressScrollX:!1,suppressScrollY:!1,swipeEasing:!0,useBothWheelAxes:!1,wheelPropagation:!0,wheelSpeed:1}},xr={"click-rail":br,"drag-thumb":gr,keyboard:vr,wheel:yr,touch:_r},ae=function(o,t){var n=this;if(t===void 0&&(t={}),typeof o=="string"&&(o=document.querySelector(o)),!o||!o.nodeName)throw new Error("no element is specified to initialize PerfectScrollbar");this.element=o,o.classList.add(A.main),this.settings=Ir();for(var i in t)this.settings[i]=t[i];this.containerWidth=null,this.containerHeight=null,this.contentWidth=null,this.contentHeight=null;var r=function(){return o.classList.add(A.state.focus)},s=function(){return o.classList.remove(A.state.focus)};this.isRtl=bt(o).direction==="rtl",this.isRtl===!0&&o.classList.add(A.rtl),this.isNegativeScroll=(function(){var c=o.scrollLeft,m=null;return o.scrollLeft=-1,m=o.scrollLeft<0,o.scrollLeft=c,m})(),this.negativeScrollAdjustment=this.isNegativeScroll?o.scrollWidth-o.clientWidth:0,this.event=new Qt,this.ownerDocument=o.ownerDocument||document,this.scrollbarXRail=Ie(A.element.rail("x")),o.appendChild(this.scrollbarXRail),this.scrollbarX=Ie(A.element.thumb("x")),this.scrollbarXRail.appendChild(this.scrollbarX),this.scrollbarX.setAttribute("tabindex",0),this.event.bind(this.scrollbarX,"focus",r),this.event.bind(this.scrollbarX,"blur",s),this.scrollbarXActive=null,this.scrollbarXWidth=null,this.scrollbarXLeft=null;var a=bt(this.scrollbarXRail);this.scrollbarXBottom=parseInt(a.bottom,10),isNaN(this.scrollbarXBottom)?(this.isScrollbarXUsingBottom=!1,this.scrollbarXTop=O(a.top)):this.isScrollbarXUsingBottom=!0,this.railBorderXWidth=O(a.borderLeftWidth)+O(a.borderRightWidth),J(this.scrollbarXRail,{display:"block"}),this.railXMarginWidth=O(a.marginLeft)+O(a.marginRight),J(this.scrollbarXRail,{display:""}),this.railXWidth=null,this.railXRatio=null,this.scrollbarYRail=Ie(A.element.rail("y")),o.appendChild(this.scrollbarYRail),this.scrollbarY=Ie(A.element.thumb("y")),this.scrollbarYRail.appendChild(this.scrollbarY),this.scrollbarY.setAttribute("tabindex",0),this.event.bind(this.scrollbarY,"focus",r),this.event.bind(this.scrollbarY,"blur",s),this.scrollbarYActive=null,this.scrollbarYHeight=null,this.scrollbarYTop=null;var l=bt(this.scrollbarYRail);this.scrollbarYRight=parseInt(l.right,10),isNaN(this.scrollbarYRight)?(this.isScrollbarYUsingRight=!1,this.scrollbarYLeft=O(l.left)):this.isScrollbarYUsingRight=!0,this.scrollbarYOuterWidth=this.isRtl?mr(this.scrollbarY):null,this.railBorderYWidth=O(l.borderTopWidth)+O(l.borderBottomWidth),J(this.scrollbarYRail,{display:"block"}),this.railYMarginHeight=O(l.marginTop)+O(l.marginBottom),J(this.scrollbarYRail,{display:""}),this.railYHeight=null,this.railYRatio=null,this.reach={x:o.scrollLeft<=0?"start":o.scrollLeft>=this.contentWidth-this.containerWidth?"end":null,y:o.scrollTop<=0?"start":o.scrollTop>=this.contentHeight-this.containerHeight?"end":null},this.isAlive=!0,this.settings.handlers.forEach(function(c){return xr[c](n)}),this.lastScrollTop=Math.floor(o.scrollTop),this.lastScrollLeft=o.scrollLeft,this.event.bind(this.element,"scroll",function(c){return n.onScroll(c)}),yt(this)};ae.prototype.update=function(){this.isAlive&&(this.negativeScrollAdjustment=this.isNegativeScroll?this.element.scrollWidth-this.element.clientWidth:0,J(this.scrollbarXRail,{display:"block"}),J(this.scrollbarYRail,{display:"block"}),this.railXMarginWidth=O(bt(this.scrollbarXRail).marginLeft)+O(bt(this.scrollbarXRail).marginRight),this.railYMarginHeight=O(bt(this.scrollbarYRail).marginTop)+O(bt(this.scrollbarYRail).marginBottom),J(this.scrollbarXRail,{display:"none"}),J(this.scrollbarYRail,{display:"none"}),yt(this),Se(this,"top",0,!1,!0),Se(this,"left",0,!1,!0),J(this.scrollbarXRail,{display:""}),J(this.scrollbarYRail,{display:""}))};ae.prototype.onScroll=function(o){this.isAlive&&(yt(this),Se(this,"top",this.element.scrollTop-this.lastScrollTop),Se(this,"left",this.element.scrollLeft-this.lastScrollLeft),this.lastScrollTop=Math.floor(this.element.scrollTop),this.lastScrollLeft=this.element.scrollLeft)};ae.prototype.destroy=function(){this.isAlive&&(this.event.unbindAll(),Gt(this.scrollbarX),Gt(this.scrollbarY),Gt(this.scrollbarXRail),Gt(this.scrollbarYRail),this.removePsClasses(),this.element=null,this.scrollbarX=null,this.scrollbarY=null,this.scrollbarXRail=null,this.scrollbarYRail=null,this.isAlive=!1)};ae.prototype.removePsClasses=function(){this.element.className=this.element.className.split(" ").filter(function(o){return!o.match(/^ps([-_].+|)$/)}).join(" ")};var ui=ae;var hi=(function(){if(typeof Map<"u")return Map;function e(o,t){var n=-1;return o.some(function(i,r){return i[0]===t?(n=r,!0):!1}),n}return(function(){function o(){this.__entries__=[]}return Object.defineProperty(o.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),o.prototype.get=function(t){var n=e(this.__entries__,t),i=this.__entries__[n];return i&&i[1]},o.prototype.set=function(t,n){var i=e(this.__entries__,t);~i?this.__entries__[i][1]=n:this.__entries__.push([t,n])},o.prototype.delete=function(t){var n=this.__entries__,i=e(n,t);~i&&n.splice(i,1)},o.prototype.has=function(t){return!!~e(this.__entries__,t)},o.prototype.clear=function(){this.__entries__.splice(0)},o.prototype.forEach=function(t,n){n===void 0&&(n=null);for(var i=0,r=this.__entries__;i<r.length;i++){var s=r[i];t.call(n,s[1],s[0])}},o})()})(),$e=typeof window<"u"&&typeof document<"u"&&window.document===document,Ce=(function(){return typeof global<"u"&&global.Math===Math?global:typeof self<"u"&&self.Math===Math?self:typeof window<"u"&&window.Math===Math?window:Function("return this")()})(),wr=(function(){return typeof requestAnimationFrame=="function"?requestAnimationFrame.bind(Ce):function(e){return setTimeout(function(){return e(Date.now())},1e3/60)}})(),Sr=2;function Cr(e,o){var t=!1,n=!1,i=0;function r(){t&&(t=!1,e()),n&&a()}function s(){wr(r)}function a(){var l=Date.now();if(t){if(l-i<Sr)return;n=!0}else t=!0,n=!1,setTimeout(s,o);i=l}return a}var Er=20,Tr=["top","right","bottom","left","width","height","size","weight"],kr=typeof MutationObserver<"u",Lr=(function(){function e(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=Cr(this.refresh.bind(this),Er)}return e.prototype.addObserver=function(o){~this.observers_.indexOf(o)||this.observers_.push(o),this.connected_||this.connect_()},e.prototype.removeObserver=function(o){var t=this.observers_,n=t.indexOf(o);~n&&t.splice(n,1),!t.length&&this.connected_&&this.disconnect_()},e.prototype.refresh=function(){var o=this.updateObservers_();o&&this.refresh()},e.prototype.updateObservers_=function(){var o=this.observers_.filter(function(t){return t.gatherActive(),t.hasActive()});return o.forEach(function(t){return t.broadcastActive()}),o.length>0},e.prototype.connect_=function(){!$e||this.connected_||(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),kr?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},e.prototype.disconnect_=function(){!$e||!this.connected_||(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},e.prototype.onTransitionEnd_=function(o){var t=o.propertyName,n=t===void 0?"":t,i=Tr.some(function(r){return!!~n.indexOf(r)});i&&this.refresh()},e.getInstance=function(){return this.instance_||(this.instance_=new e),this.instance_},e.instance_=null,e})(),mi=function(e,o){for(var t=0,n=Object.keys(o);t<n.length;t++){var i=n[t];Object.defineProperty(e,i,{value:o[i],enumerable:!1,writable:!1,configurable:!0})}return e},Jt=function(e){var o=e&&e.ownerDocument&&e.ownerDocument.defaultView;return o||Ce},fi=Te(0,0,0,0);function Ee(e){return parseFloat(e)||0}function pi(e){for(var o=[],t=1;t<arguments.length;t++)o[t-1]=arguments[t];return o.reduce(function(n,i){var r=e["border-"+i+"-width"];return n+Ee(r)},0)}function Mr(e){for(var o=["top","right","bottom","left"],t={},n=0,i=o;n<i.length;n++){var r=i[n],s=e["padding-"+r];t[r]=Ee(s)}return t}function Pr(e){var o=e.getBBox();return Te(0,0,o.width,o.height)}function Dr(e){var o=e.clientWidth,t=e.clientHeight;if(!o&&!t)return fi;var n=Jt(e).getComputedStyle(e),i=Mr(n),r=i.left+i.right,s=i.top+i.bottom,a=Ee(n.width),l=Ee(n.height);if(n.boxSizing==="border-box"&&(Math.round(a+r)!==o&&(a-=pi(n,"left","right")+r),Math.round(l+s)!==t&&(l-=pi(n,"top","bottom")+s)),!Rr(e)){var c=Math.round(a+r)-o,m=Math.round(l+s)-t;Math.abs(c)!==1&&(a-=c),Math.abs(m)!==1&&(l-=m)}return Te(i.left,i.top,a,l)}var Or=(function(){return typeof SVGGraphicsElement<"u"?function(e){return e instanceof Jt(e).SVGGraphicsElement}:function(e){return e instanceof Jt(e).SVGElement&&typeof e.getBBox=="function"}})();function Rr(e){return e===Jt(e).document.documentElement}function Fr(e){return $e?Or(e)?Pr(e):Dr(e):fi}function Ar(e){var o=e.x,t=e.y,n=e.width,i=e.height,r=typeof DOMRectReadOnly<"u"?DOMRectReadOnly:Object,s=Object.create(r.prototype);return mi(s,{x:o,y:t,width:n,height:i,top:t,right:o+n,bottom:i+t,left:o}),s}function Te(e,o,t,n){return{x:e,y:o,width:t,height:n}}var Br=(function(){function e(o){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=Te(0,0,0,0),this.target=o}return e.prototype.isActive=function(){var o=Fr(this.target);return this.contentRect_=o,o.width!==this.broadcastWidth||o.height!==this.broadcastHeight},e.prototype.broadcastRect=function(){var o=this.contentRect_;return this.broadcastWidth=o.width,this.broadcastHeight=o.height,o},e})(),Hr=(function(){function e(o,t){var n=Ar(t);mi(this,{target:o,contentRect:n})}return e})(),zr=(function(){function e(o,t,n){if(this.activeObservations_=[],this.observations_=new hi,typeof o!="function")throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=o,this.controller_=t,this.callbackCtx_=n}return e.prototype.observe=function(o){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(o instanceof Jt(o).Element))throw new TypeError('parameter 1 is not of type "Element".');var t=this.observations_;t.has(o)||(t.set(o,new Br(o)),this.controller_.addObserver(this),this.controller_.refresh())}},e.prototype.unobserve=function(o){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(o instanceof Jt(o).Element))throw new TypeError('parameter 1 is not of type "Element".');var t=this.observations_;t.has(o)&&(t.delete(o),t.size||this.controller_.removeObserver(this))}},e.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},e.prototype.gatherActive=function(){var o=this;this.clearActive(),this.observations_.forEach(function(t){t.isActive()&&o.activeObservations_.push(t)})},e.prototype.broadcastActive=function(){if(this.hasActive()){var o=this.callbackCtx_,t=this.activeObservations_.map(function(n){return new Hr(n.target,n.broadcastRect())});this.callback_.call(o,t,o),this.clearActive()}},e.prototype.clearActive=function(){this.activeObservations_.splice(0)},e.prototype.hasActive=function(){return this.activeObservations_.length>0},e})(),bi=typeof WeakMap<"u"?new WeakMap:new hi,gi=(function(){function e(o){if(!(this instanceof e))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var t=Lr.getInstance(),n=new zr(o,t,this);bi.set(this,n)}return e})();["observe","unobserve","disconnect"].forEach(function(e){gi.prototype[e]=function(){var o;return(o=bi.get(this))[e].apply(o,arguments)}});var Vr=(function(){return typeof Ce.ResizeObserver<"u"?Ce.ResizeObserver:gi})(),vi=Vr;var Wr=["*"];function Yr(e,o){if(e&1&&(y(0,"div",3),C(1,"div",4)(2,"div",5)(3,"div",6)(4,"div",7),_()),e&2){let t=u();ut("ps-at-top",t.states.top)("ps-at-left",t.states.left)("ps-at-right",t.states.right)("ps-at-bottom",t.states.bottom),h(),ut("ps-indicator-show",t.indicatorY&&t.interaction),h(),ut("ps-indicator-show",t.indicatorX&&t.interaction),h(),ut("ps-indicator-show",t.indicatorX&&t.interaction),h(),ut("ps-indicator-show",t.indicatorY&&t.interaction)}}var qe=new nn("PERFECT_SCROLLBAR_CONFIG"),je=class{constructor(o,t,n,i){this.x=o,this.y=t,this.w=n,this.h=i}},ke=class{constructor(o,t){this.x=o,this.y=t}},_i=["psScrollY","psScrollX","psScrollUp","psScrollDown","psScrollLeft","psScrollRight","psYReachEnd","psYReachStart","psXReachEnd","psXReachStart"],Ke=class{constructor(o={}){this.assign(o)}assign(o={}){for(let t in o)this[t]=o[t]}},yi=(()=>{let o=class o{constructor(n,i,r,s,a){this.zone=n,this.differs=i,this.elementRef=r,this.platformId=s,this.defaults=a,this.instance=null,this.ro=null,this.timeout=null,this.animation=null,this.configDiff=null,this.ngDestroy=new zt,this.disabled=!1,this.psScrollY=new I,this.psScrollX=new I,this.psScrollUp=new I,this.psScrollDown=new I,this.psScrollLeft=new I,this.psScrollRight=new I,this.psYReachEnd=new I,this.psYReachStart=new I,this.psXReachEnd=new I,this.psXReachStart=new I}ngOnInit(){if(!this.disabled&&N(this.platformId)){let n=new Ke(this.defaults);n.assign(this.config),this.zone.runOutsideAngular(()=>{this.instance=new ui(this.elementRef.nativeElement,n)}),this.configDiff||(this.configDiff=this.differs.find(this.config||{}).create(),this.configDiff.diff(this.config||{})),this.zone.runOutsideAngular(()=>{this.ro=new vi(()=>{this.update()}),this.elementRef.nativeElement.children[0]&&this.ro.observe(this.elementRef.nativeElement.children[0]),this.ro.observe(this.elementRef.nativeElement)}),this.zone.runOutsideAngular(()=>{_i.forEach(i=>{let r=i.replace(/([A-Z])/g,s=>`-${s.toLowerCase()}`);ht(this.elementRef.nativeElement,r).pipe(Je(20),Vt(this.ngDestroy)).subscribe(s=>{this[i].emit(s)})})})}}ngOnDestroy(){N(this.platformId)&&(this.ngDestroy.next(),this.ngDestroy.complete(),this.ro&&this.ro.disconnect(),this.timeout&&typeof window<"u"&&window.clearTimeout(this.timeout),this.zone.runOutsideAngular(()=>{this.instance&&this.instance.destroy()}),this.instance=null)}ngDoCheck(){!this.disabled&&this.configDiff&&N(this.platformId)&&this.configDiff.diff(this.config||{})&&(this.ngOnDestroy(),this.ngOnInit())}ngOnChanges(n){n.disabled&&!n.disabled.isFirstChange()&&N(this.platformId)&&n.disabled.currentValue!==n.disabled.previousValue&&(n.disabled.currentValue===!0?this.ngOnDestroy():n.disabled.currentValue===!1&&this.ngOnInit())}ps(){return this.instance}update(){typeof window<"u"&&(this.timeout&&window.clearTimeout(this.timeout),this.timeout=window.setTimeout(()=>{if(!this.disabled&&this.configDiff)try{this.zone.runOutsideAngular(()=>{this.instance&&this.instance.update()})}catch{}},0))}geometry(n="scroll"){return new je(this.elementRef.nativeElement[n+"Left"],this.elementRef.nativeElement[n+"Top"],this.elementRef.nativeElement[n+"Width"],this.elementRef.nativeElement[n+"Height"])}position(n=!1){return!n&&this.instance?new ke(this.instance.reach.x||0,this.instance.reach.y||0):new ke(this.elementRef.nativeElement.scrollLeft,this.elementRef.nativeElement.scrollTop)}scrollable(n="any"){let i=this.elementRef.nativeElement;return n==="any"?i.classList.contains("ps--active-x")||i.classList.contains("ps--active-y"):n==="both"?i.classList.contains("ps--active-x")&&i.classList.contains("ps--active-y"):i.classList.contains("ps--active-"+n)}scrollTo(n,i,r){this.disabled||(i==null&&r==null?this.animateScrolling("scrollTop",n,r):(n!=null&&this.animateScrolling("scrollLeft",n,r),i!=null&&this.animateScrolling("scrollTop",i,r)))}scrollToX(n,i){this.animateScrolling("scrollLeft",n,i)}scrollToY(n,i){this.animateScrolling("scrollTop",n,i)}scrollToTop(n,i){this.animateScrolling("scrollTop",n||0,i)}scrollToLeft(n,i){this.animateScrolling("scrollLeft",n||0,i)}scrollToRight(n,i){let r=this.elementRef.nativeElement.scrollWidth-this.elementRef.nativeElement.clientWidth;this.animateScrolling("scrollLeft",r-(n||0),i)}scrollToBottom(n,i){let r=this.elementRef.nativeElement.scrollHeight-this.elementRef.nativeElement.clientHeight;this.animateScrolling("scrollTop",r-(n||0),i)}scrollToElement(n,i,r){if(typeof n=="string"&&(n=this.elementRef.nativeElement.querySelector(n)),n){let s=n.getBoundingClientRect(),a=this.elementRef.nativeElement.getBoundingClientRect();if(this.elementRef.nativeElement.classList.contains("ps--active-x")){let l=this.elementRef.nativeElement.scrollLeft,c=s.left-a.left+l;this.animateScrolling("scrollLeft",c+(i||0),r)}if(this.elementRef.nativeElement.classList.contains("ps--active-y")){let l=this.elementRef.nativeElement.scrollTop,c=s.top-a.top+l;this.animateScrolling("scrollTop",c+(i||0),r)}}}animateScrolling(n,i,r){if(this.animation&&(window.cancelAnimationFrame(this.animation),this.animation=null),!r||typeof window>"u")this.elementRef.nativeElement[n]=i;else if(i!==this.elementRef.nativeElement[n]){let s=0,a=0,l=performance.now(),c=this.elementRef.nativeElement[n],m=(c-i)/2,d=f=>{a+=Math.PI/(r/(f-l)),s=Math.round(i+m+m*Math.cos(a)),this.elementRef.nativeElement[n]===c&&(a>=Math.PI?this.animateScrolling(n,i,0):(this.elementRef.nativeElement[n]=s,c=this.elementRef.nativeElement[n],l=f,this.animation=window.requestAnimationFrame(d)))};window.requestAnimationFrame(d)}}};o.\u0275fac=function(i){return new(i||o)(D(kt),D(hn),D(_t),D(gt),D(qe,8))},o.\u0275dir=it({type:o,selectors:[["","perfectScrollbar",""]],inputs:{disabled:"disabled",config:[0,"perfectScrollbar","config"]},outputs:{psScrollY:"psScrollY",psScrollX:"psScrollX",psScrollUp:"psScrollUp",psScrollDown:"psScrollDown",psScrollLeft:"psScrollLeft",psScrollRight:"psScrollRight",psYReachEnd:"psYReachEnd",psYReachStart:"psYReachStart",psXReachEnd:"psXReachEnd",psXReachStart:"psXReachStart"},exportAs:["ngxPerfectScrollbar"],features:[Tt]});let e=o;return e})(),Ii=(()=>{let o=class o{constructor(n,i,r){this.zone=n,this.cdRef=i,this.platformId=r,this.states={},this.indicatorX=!1,this.indicatorY=!1,this.interaction=!1,this.scrollPositionX=0,this.scrollPositionY=0,this.scrollDirectionX=0,this.scrollDirectionY=0,this.usePropagationX=!1,this.usePropagationY=!1,this.allowPropagationX=!1,this.allowPropagationY=!1,this.stateTimeout=null,this.ngDestroy=new zt,this.stateUpdate=new zt,this.disabled=!1,this.usePSClass=!0,this.autoPropagation=!1,this.scrollIndicators=!1,this.psScrollY=new I,this.psScrollX=new I,this.psScrollUp=new I,this.psScrollDown=new I,this.psScrollLeft=new I,this.psScrollRight=new I,this.psYReachEnd=new I,this.psYReachStart=new I,this.psXReachEnd=new I,this.psXReachStart=new I}ngOnInit(){N(this.platformId)&&(this.stateUpdate.pipe(Vt(this.ngDestroy),en((n,i)=>n===i&&!this.stateTimeout)).subscribe(n=>{this.stateTimeout&&typeof window<"u"&&(window.clearTimeout(this.stateTimeout),this.stateTimeout=null),n==="x"||n==="y"?(this.interaction=!1,n==="x"?(this.indicatorX=!1,this.states.left=!1,this.states.right=!1,this.autoPropagation&&this.usePropagationX&&(this.allowPropagationX=!1)):n==="y"&&(this.indicatorY=!1,this.states.top=!1,this.states.bottom=!1,this.autoPropagation&&this.usePropagationY&&(this.allowPropagationY=!1))):(n==="left"||n==="right"?(this.states.left=!1,this.states.right=!1,this.states[n]=!0,this.autoPropagation&&this.usePropagationX&&(this.indicatorX=!0)):(n==="top"||n==="bottom")&&(this.states.top=!1,this.states.bottom=!1,this.states[n]=!0,this.autoPropagation&&this.usePropagationY&&(this.indicatorY=!0)),this.autoPropagation&&typeof window<"u"&&(this.stateTimeout=window.setTimeout(()=>{this.indicatorX=!1,this.indicatorY=!1,this.stateTimeout=null,this.interaction&&(this.states.left||this.states.right)&&(this.allowPropagationX=!0),this.interaction&&(this.states.top||this.states.bottom)&&(this.allowPropagationY=!0),this.cdRef.markForCheck()},500))),this.cdRef.markForCheck(),this.cdRef.detectChanges()}),this.zone.runOutsideAngular(()=>{if(this.directiveRef){let n=this.directiveRef.elementRef.nativeElement;ht(n,"wheel").pipe(Vt(this.ngDestroy)).subscribe(i=>{if(!this.disabled&&this.autoPropagation){let r=i.deltaX,s=i.deltaY;this.checkPropagation(i,r,s)}}),ht(n,"touchmove").pipe(Vt(this.ngDestroy)).subscribe(i=>{if(!this.disabled&&this.autoPropagation){let r=i.touches[0].clientX,s=i.touches[0].clientY,a=r-this.scrollPositionX,l=s-this.scrollPositionY;this.checkPropagation(i,a,l),this.scrollPositionX=r,this.scrollPositionY=s}}),Ge(ht(n,"ps-scroll-x").pipe(Et("x")),ht(n,"ps-scroll-y").pipe(Et("y")),ht(n,"ps-x-reach-end").pipe(Et("right")),ht(n,"ps-y-reach-end").pipe(Et("bottom")),ht(n,"ps-x-reach-start").pipe(Et("left")),ht(n,"ps-y-reach-start").pipe(Et("top"))).pipe(Vt(this.ngDestroy)).subscribe(i=>{!this.disabled&&(this.autoPropagation||this.scrollIndicators)&&this.stateUpdate.next(i)})}}),window.setTimeout(()=>{_i.forEach(n=>{this.directiveRef&&(this.directiveRef[n]=this[n])})},0))}ngOnDestroy(){N(this.platformId)&&(this.ngDestroy.next(),this.ngDestroy.unsubscribe(),this.stateTimeout&&typeof window<"u"&&window.clearTimeout(this.stateTimeout))}ngDoCheck(){if(N(this.platformId)&&!this.disabled&&this.autoPropagation&&this.directiveRef){let n=this.directiveRef.elementRef.nativeElement;this.usePropagationX=n.classList.contains("ps--active-x"),this.usePropagationY=n.classList.contains("ps--active-y")}}checkPropagation(n,i,r){this.interaction=!0;let s=i<0?-1:1,a=r<0?-1:1;(this.usePropagationX&&this.usePropagationY||this.usePropagationX&&(!this.allowPropagationX||this.scrollDirectionX!==s)||this.usePropagationY&&(!this.allowPropagationY||this.scrollDirectionY!==a))&&(n.preventDefault(),n.stopPropagation()),i&&(this.scrollDirectionX=s),r&&(this.scrollDirectionY=a),this.stateUpdate.next("interaction"),this.cdRef.detectChanges()}};o.\u0275fac=function(i){return new(i||o)(D(kt),D(Xt),D(gt))},o.\u0275cmp=T({type:o,selectors:[["perfect-scrollbar"]],viewQuery:function(i,r){if(i&1&&ne(yi,7),i&2){let s;Z(s=U())&&(r.directiveRef=s.first)}},hostVars:4,hostBindings:function(i,r){i&2&&ut("ps-show-limits",r.autoPropagation)("ps-show-active",r.scrollIndicators)},inputs:{disabled:"disabled",usePSClass:"usePSClass",autoPropagation:"autoPropagation",scrollIndicators:"scrollIndicators",config:"config"},outputs:{psScrollY:"psScrollY",psScrollX:"psScrollX",psScrollUp:"psScrollUp",psScrollDown:"psScrollDown",psScrollLeft:"psScrollLeft",psScrollRight:"psScrollRight",psYReachEnd:"psYReachEnd",psYReachStart:"psYReachStart",psXReachEnd:"psXReachEnd",psXReachStart:"psXReachStart"},exportAs:["ngxPerfectScrollbar"],ngContentSelectors:Wr,decls:4,vars:5,consts:[[2,"position","static",3,"perfectScrollbar","disabled"],[1,"ps-content"],[1,"ps-overlay",3,"ps-at-top","ps-at-left","ps-at-right","ps-at-bottom"],[1,"ps-overlay"],[1,"ps-indicator-top"],[1,"ps-indicator-left"],[1,"ps-indicator-right"],[1,"ps-indicator-bottom"]],template:function(i,r){i&1&&(ot(),y(0,"div",0)(1,"div",1),rt(2),_(),an(3,Yr,5,16,"div",2),_()),i&2&&(ut("ps",r.usePSClass),p("perfectScrollbar",r.config)("disabled",r.disabled),h(3),ln(r.scrollIndicators?3:-1))},dependencies:[yi],styles:[`perfect-scrollbar{position:relative;display:block;overflow:hidden;width:100%;height:100%;max-width:100%;max-height:100%}perfect-scrollbar[hidden]{display:none}perfect-scrollbar>.ps{position:static;display:block;width:100%;height:100%;max-width:100%;max-height:100%}perfect-scrollbar>.ps textarea{-ms-overflow-style:scrollbar}perfect-scrollbar>.ps>.ps-overlay{position:absolute;inset:0;display:block;overflow:hidden;pointer-events:none}perfect-scrollbar>.ps>.ps-overlay .ps-indicator-top,perfect-scrollbar>.ps>.ps-overlay .ps-indicator-left,perfect-scrollbar>.ps>.ps-overlay .ps-indicator-right,perfect-scrollbar>.ps>.ps-overlay .ps-indicator-bottom{position:absolute;opacity:0;transition:opacity .3s ease-in-out}perfect-scrollbar>.ps>.ps-overlay .ps-indicator-top,perfect-scrollbar>.ps>.ps-overlay .ps-indicator-bottom{left:0;min-width:100%;min-height:24px}perfect-scrollbar>.ps>.ps-overlay .ps-indicator-left,perfect-scrollbar>.ps>.ps-overlay .ps-indicator-right{top:0;min-width:24px;min-height:100%}perfect-scrollbar>.ps>.ps-overlay .ps-indicator-top{top:0}perfect-scrollbar>.ps>.ps-overlay .ps-indicator-left{left:0}perfect-scrollbar>.ps>.ps-overlay .ps-indicator-right{right:0}perfect-scrollbar>.ps>.ps-overlay .ps-indicator-bottom{bottom:0}perfect-scrollbar>.ps.ps--active-y>.ps__rail-y{top:0!important;right:0!important;left:auto!important;width:10px;cursor:default;transition:width .2s linear,opacity .2s linear,background-color .2s linear}perfect-scrollbar>.ps.ps--active-y>.ps__rail-y:hover,perfect-scrollbar>.ps.ps--active-y>.ps__rail-y.ps--clicking{width:15px}perfect-scrollbar>.ps.ps--active-x>.ps__rail-x{top:auto!important;bottom:0!important;left:0!important;height:10px;cursor:default;transition:height .2s linear,opacity .2s linear,background-color .2s linear}perfect-scrollbar>.ps.ps--active-x>.ps__rail-x:hover,perfect-scrollbar>.ps.ps--active-x>.ps__rail-x.ps--clicking{height:15px}perfect-scrollbar>.ps.ps--active-x.ps--active-y>.ps__rail-y{margin:0 0 10px}perfect-scrollbar>.ps.ps--active-x.ps--active-y>.ps__rail-x{margin:0 10px 0 0}perfect-scrollbar>.ps.ps--scrolling-y>.ps__rail-y,perfect-scrollbar>.ps.ps--scrolling-x>.ps__rail-x{opacity:.9;background-color:#eee}perfect-scrollbar.ps-show-always>.ps.ps--active-y>.ps__rail-y,perfect-scrollbar.ps-show-always>.ps.ps--active-x>.ps__rail-x{opacity:.6}perfect-scrollbar.ps-show-active>.ps.ps--active-y>.ps-overlay:not(.ps-at-top) .ps-indicator-top{opacity:1;background:linear-gradient(to bottom,#ffffff80,#fff0)}perfect-scrollbar.ps-show-active>.ps.ps--active-y>.ps-overlay:not(.ps-at-bottom) .ps-indicator-bottom{opacity:1;background:linear-gradient(to top,#ffffff80,#fff0)}perfect-scrollbar.ps-show-active>.ps.ps--active-x>.ps-overlay:not(.ps-at-left) .ps-indicator-left{opacity:1;background:linear-gradient(to right,#ffffff80,#fff0)}perfect-scrollbar.ps-show-active>.ps.ps--active-x>.ps-overlay:not(.ps-at-right) .ps-indicator-right{opacity:1;background:linear-gradient(to left,#ffffff80,#fff0)}perfect-scrollbar.ps-show-active.ps-show-limits>.ps.ps--active-y>.ps-overlay.ps-at-top .ps-indicator-top{background:linear-gradient(to bottom,#aaaaaa80,#aaa0)}perfect-scrollbar.ps-show-active.ps-show-limits>.ps.ps--active-y>.ps-overlay.ps-at-bottom .ps-indicator-bottom{background:linear-gradient(to top,#aaaaaa80,#aaa0)}perfect-scrollbar.ps-show-active.ps-show-limits>.ps.ps--active-x>.ps-overlay.ps-at-left .ps-indicator-left{background:linear-gradient(to right,#aaaaaa80,#aaa0)}perfect-scrollbar.ps-show-active.ps-show-limits>.ps.ps--active-x>.ps-overlay.ps-at-right .ps-indicator-right{background:linear-gradient(to left,#aaaaaa80,#aaa0)}perfect-scrollbar.ps-show-active.ps-show-limits>.ps.ps--active-y>.ps-overlay.ps-at-top .ps-indicator-top.ps-indicator-show,perfect-scrollbar.ps-show-active.ps-show-limits>.ps.ps--active-y>.ps-overlay.ps-at-bottom .ps-indicator-bottom.ps-indicator-show,perfect-scrollbar.ps-show-active.ps-show-limits>.ps.ps--active-x>.ps-overlay.ps-at-left .ps-indicator-left.ps-indicator-show,perfect-scrollbar.ps-show-active.ps-show-limits>.ps.ps--active-x>.ps-overlay.ps-at-right .ps-indicator-right.ps-indicator-show{opacity:1}
`,`.ps{overflow:hidden!important;overflow-anchor:none;-ms-overflow-style:none;touch-action:auto;-ms-touch-action:auto}.ps__rail-x{display:none;opacity:0;transition:background-color .2s linear,opacity .2s linear;-webkit-transition:background-color .2s linear,opacity .2s linear;height:15px;bottom:0;position:absolute}.ps__rail-y{display:none;opacity:0;transition:background-color .2s linear,opacity .2s linear;-webkit-transition:background-color .2s linear,opacity .2s linear;width:15px;right:0;position:absolute}.ps--active-x>.ps__rail-x,.ps--active-y>.ps__rail-y{display:block;background-color:transparent}.ps:hover>.ps__rail-x,.ps:hover>.ps__rail-y,.ps--focus>.ps__rail-x,.ps--focus>.ps__rail-y,.ps--scrolling-x>.ps__rail-x,.ps--scrolling-y>.ps__rail-y{opacity:.6}.ps .ps__rail-x:hover,.ps .ps__rail-y:hover,.ps .ps__rail-x:focus,.ps .ps__rail-y:focus,.ps .ps__rail-x.ps--clicking,.ps .ps__rail-y.ps--clicking{background-color:#eee;opacity:.9}.ps__thumb-x{background-color:#aaa;border-radius:6px;transition:background-color .2s linear,height .2s ease-in-out;-webkit-transition:background-color .2s linear,height .2s ease-in-out;height:6px;bottom:2px;position:absolute}.ps__thumb-y{background-color:#aaa;border-radius:6px;transition:background-color .2s linear,width .2s ease-in-out;-webkit-transition:background-color .2s linear,width .2s ease-in-out;width:6px;right:2px;position:absolute}.ps__rail-x:hover>.ps__thumb-x,.ps__rail-x:focus>.ps__thumb-x,.ps__rail-x.ps--clicking .ps__thumb-x{background-color:#999;height:11px}.ps__rail-y:hover>.ps__thumb-y,.ps__rail-y:focus>.ps__thumb-y,.ps__rail-y.ps--clicking .ps__thumb-y{background-color:#999;width:11px}@supports (-ms-overflow-style: none){.ps{overflow:auto!important}}@media screen and (-ms-high-contrast: active),(-ms-high-contrast: none){.ps{overflow:auto!important}}
`],encapsulation:2});let e=o;return e})(),xi=(()=>{let o=class o{};o.\u0275fac=function(i){return new(i||o)},o.\u0275mod=q({type:o}),o.\u0275inj=j({imports:[z,z]});let e=o;return e})();var Xr={suppressScrollX:!0},Oc=(()=>{let o=class o{constructor(n){this.R=n,this.isOpen=!1,this.imgHeaderProfile="assets/header-img-profile-fotor-20241231111158.png"}handleKeyboardEvent(n){n.shiftKey&&n.key==="A"&&this.R.navigate(["/portafolio/contacto"]),n.shiftKey&&n.key==="D"&&this.R.navigate(["/portafolio"])}ngOnInit(){}};o.\u0275fac=function(i){return new(i||o)(D(fe))},o.\u0275cmp=T({type:o,selectors:[["app-sidebar"]],hostBindings:function(i,r){i&1&&tt("keydown",function(a){return r.handleKeyboardEvent(a)},de)},inputs:{isOpen:"isOpen"},features:[R([{provide:qe,useValue:Xr}])],decls:37,vars:6,consts:[[1,"bg-gray-900","text-white","fixed","top-[60px]","left-0","h-[calc(100%-60px)]","w-80","flex","flex-col","shadow-lg","transition-transform","duration-300","z-50"],[2,"overflow","auto"],[1,"flex","flex-col","items-center","p-6","border-b","border-gray-700"],["src","../../../../assets/header-img-profile-fotor-20241231111158.png","alt","Perfil",1,"rounded-full","w-24","h-24","object-cover","mb-3","shadow-md"],[1,"text-lg","font-semibold","text-center"],[1,"flex","justify-center","space-x-0","text-gray-400","my-2"],["href","#",1,"hover:text-white"],[1,"pi","pi-facebook"],[1,"pi","pi-telegram"],[1,"pi","pi-linkedin"],[1,"flex","flex-col","mt-4"],["routerLink","/index","routerLinkActive","active-link",1,"nav-link"],[1,"pi","pi-home","mr-2"],["routerLink","/portafolio","routerLinkActive","active-link",1,"nav-link"],[1,"pi","pi-briefcase","mr-2"],["routerLink","/portafolio/proyectos","routerLinkActive","active-link",1,"nav-link"],[1,"pi","pi-desktop","mr-2"],["routerLink","/portafolio/tecnologia","routerLinkActive","active-link",1,"nav-link"],[1,"pi","pi-sliders-h","mr-2"],["routerLink","/portafolio/contacto","routerLinkActive","active-link",1,"nav-link"],[1,"pi","pi-envelope","mr-2"],["routerLink","/portafolio/acerca",1,"nav-link"],[1,"pi","pi-info-circle","mr-2"],[1,"mt-auto","p-4","text-xs","text-gray-500","text-center","border-t","border-gray-700"],[1,"italic"]],template:function(i,r){i&1&&(y(0,"nav",0)(1,"perfect-scrollbar",1)(2,"div",2),C(3,"img",3),y(4,"h2",4),P(5,"Yilson Alexis Malambo Madrigal"),_()(),y(6,"div",5)(7,"a",6),C(8,"i",7),_(),y(9,"a",6),C(10,"i",8),_(),y(11,"a",6),C(12,"i",9),_()(),y(13,"div",10)(14,"a",11),C(15,"i",12),P(16,"Inicio"),_(),y(17,"a",13),C(18,"i",14),P(19,"Portafolio"),_(),y(20,"a",15),C(21,"i",16),P(22,"Proyectos"),_(),y(23,"a",17),C(24,"i",18),P(25,"Tecnolog\xEDa"),_(),y(26,"a",19),C(27,"i",20),P(28,"Contacto"),_(),y(29,"a",21),C(30,"i",22),P(31,"Acerca"),_()(),y(32,"div",23)(33,"p"),P(34,"Versi\xF3n 2.0"),_(),y(35,"p",24),P(36,"\xDAltima actualizaci\xF3n: Ago 2025"),_()()()()),i&2&&ut("open",r.isOpen)("translate-x-0",r.isOpen)("-translate-x-full",!r.isOpen)},dependencies:[z,Ot,$t,be,xi,Ii],styles:["nav[_ngcontent-%COMP%]{position:fixed;top:60px;left:0;height:calc(100% - 60px);width:250px;background-color:#222;display:flex;flex-direction:column;padding-top:1rem;transition:transform .3s ease;z-index:1000}nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#fff;text-decoration:none;padding:1rem 1.5rem;font-weight:500;border-left:4px solid transparent;transition:background-color .2s ease,border-color .2s ease}nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{background-color:#444;border-left-color:#4f46e5}@media (max-width: 768px){nav[_ngcontent-%COMP%]{transform:translate(-100%);width:200px;box-shadow:2px 0 5px #00000080}nav.open[_ngcontent-%COMP%]{transform:translate(0)}}nav[_ngcontent-%COMP%]{transform:translate(0)}nav[_ngcontent-%COMP%]:not(.open){transform:translate(-100%)}@media (min-width: 769px){nav[_ngcontent-%COMP%]{transform:translate(0)!important}}"]});let e=o;return e})();export{vt as a,V as b,wt as c,ye as d,qs as e,Ht as f,sc as g,cc as h,Oc as i};
