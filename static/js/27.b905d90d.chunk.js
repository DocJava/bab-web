(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{816:function(t,o,n){"use strict";n.r(o),n.d(o,"ion_app",function(){return s}),n.d(o,"ion_buttons",function(){return l}),n.d(o,"ion_content",function(){return c}),n.d(o,"ion_footer",function(){return d}),n.d(o,"ion_header",function(){return u}),n.d(o,"ion_title",function(){return p}),n.d(o,"ion_toolbar",function(){return f});var r=n(6),e=n(10),i=n(890),a=n(891),s=function(){function t(t){Object(e.r)(this,t),this.win=Object(e.h)(this,"window"),this.config=Object(e.h)(this,"config")}return t.prototype.componentDidLoad=function(){var t=this;Object(a.a)(function(){var o=t,r=o.win,i=o.config;i.getBoolean("_testing")||function(t,o){n.e(8).then(n.bind(null,902)).then(function(n){return n.startTapClick(t.document,o)})}(r,i),function(t,o){o.getBoolean("inputShims",function(t){return Object(e.k)(t,"ios")&&Object(e.k)(t,"mobile")}(t))&&n.e(5).then(n.bind(null,903)).then(function(n){return n.startInputShims(t.document,o)})}(r,i),function(t,o){o.getBoolean("statusTap",Object(e.k)(t,"hybrid"))&&n.e(6).then(n.bind(null,900)).then(function(o){return o.startStatusTap(t)})}(r,i),function(t,o){o.getBoolean("hardwareBackButton",Object(e.k)(t,"hybrid"))&&n.e(4).then(n.bind(null,899)).then(function(o){return o.startHardwareBackButton(t)})}(r,i),function(t){n.e(3).then(n.bind(null,901)).then(function(o){return o.startFocusVisible(t.document)})}(r)})},t.prototype.hostData=function(){var t;return{class:(t={},t[""+Object(e.f)(this)]=!0,t["ion-page"]=!0,t["force-statusbar-padding"]=this.config.getBoolean("_forceStatusbarPadding"),t)}},Object.defineProperty(t.prototype,"el",{get:function(){return Object(e.l)(this)},enumerable:!0,configurable:!0}),t.prototype.render=function(){return Object(e.j)(e.a,this.hostData())},Object.defineProperty(t,"style",{get:function(){return"html.plt-mobile ion-app{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}ion-app.force-statusbar-padding{--ion-safe-area-top:20px}"},enumerable:!0,configurable:!0}),t}();var l=function(){function t(t){Object(e.r)(this,t)}return t.prototype.hostData=function(){var t;return{class:(t={},t[""+Object(e.f)(this)]=!0,t)}},t.prototype.render=function(){return Object(e.j)(e.a,this.hostData())},Object.defineProperty(t,"style",{get:function(){return".sc-ion-buttons-md-h{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-webkit-transform:translateZ(0);transform:translateZ(0);z-index:99}.sc-ion-buttons-md-s  ion-button {margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;--padding-top:0;--padding-bottom:0;--padding-start:8px;--padding-end:8px;--box-shadow:none;margin-left:2px;margin-right:2px;height:32px;font-size:14px;font-weight:500}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.sc-ion-buttons-md-s  ion-button {margin-left:unset;margin-right:unset;-webkit-margin-start:2px;margin-inline-start:2px;-webkit-margin-end:2px;margin-inline-end:2px}}.sc-ion-buttons-md-s  ion-button:not(.button-round) {--border-radius:2px}.sc-ion-buttons-md-h.ion-color.sc-ion-buttons-md-s  .button , .ion-color .sc-ion-buttons-md-h.sc-ion-buttons-md-s  .button {--color:initial;--color-activated:initial;--color-focused:initial;--background-hover:rgba(var(--ion-color-contrast-rgb),0.08);--background-focused:rgba(var(--ion-color-contrast-rgb),0.24)}.sc-ion-buttons-md-h.ion-color.sc-ion-buttons-md-s  .button-solid , .ion-color .sc-ion-buttons-md-h.sc-ion-buttons-md-s  .button-solid {--background:var(--ion-color-contrast);--background-activated:var(--ion-color-contrast);--background-focused:rgba(var(--ion-color-contrast-rgb),0.9);--color:var(--ion-color-base);--color-focused:var(--ion-color-base)}.sc-ion-buttons-md-h.ion-color.sc-ion-buttons-md-s  .button-outline , .ion-color .sc-ion-buttons-md-h.sc-ion-buttons-md-s  .button-outline {--border-color:var(--ion-color-contrast)}.sc-ion-buttons-md-s  .button {--color-focused:var(--ion-toolbar-color,var(--ion-text-color,#424242));--background-focused:rgba(66,66,66,0.1)}.sc-ion-buttons-md-s  .button-has-icon-only.button-clear {--padding-top:12px;--padding-end:12px;--padding-bottom:12px;--padding-start:12px;--border-radius:50%;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;width:48px;height:48px}.sc-ion-buttons-md-s  .button-solid {--color:var(--ion-toolbar-background,var(--ion-background-color,#fff));--color-activated:var(--ion-toolbar-background,var(--ion-background-color,#fff));--color-focused:var(--ion-toolbar-background,var(--ion-background-color,#fff));--background:var(--ion-toolbar-color,var(--ion-text-color,#424242));--background-activated:var(--ion-toolbar-color,var(--ion-text-color,#424242));--background-focused:var(--ion-toolbar-color-activated,#4a4a4a)}.sc-ion-buttons-md-s  .button-outline {--color:initial;--color-activated:currentColor;--color-focused:var(--ion-toolbar-color,var(--ion-text-color,#424242));--background:transparent;--background-activated:transparent;--border-color:var(--ion-toolbar-color,var(--ion-text-color,#424242));--background-focused:rgba(66,66,66,0.1)}.sc-ion-buttons-md-s  .button-clear {--color:initial;--color-activated:currentColor;--background:transparent}.sc-ion-buttons-md-s  ion-icon[slot=start] {margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;margin-right:.3em;font-size:1.4em}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.sc-ion-buttons-md-s  ion-icon[slot=start] {margin-right:unset;-webkit-margin-end:.3em;margin-inline-end:.3em}}.sc-ion-buttons-md-s  ion-icon[slot=end] {margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;margin-left:.4em;font-size:1.4em}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.sc-ion-buttons-md-s  ion-icon[slot=end] {margin-left:unset;-webkit-margin-start:.4em;margin-inline-start:.4em}}.sc-ion-buttons-md-s  ion-icon[slot=icon-only] {padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;font-size:1.8em}"},enumerable:!0,configurable:!0}),t}(),c=function(){function t(t){Object(e.r)(this,t),this.isScrolling=!1,this.lastScroll=0,this.queued=!1,this.cTop=-1,this.cBottom=-1,this.detail={scrollTop:0,scrollLeft:0,type:"scroll",event:void 0,startX:0,startY:0,startTimeStamp:0,currentX:0,currentY:0,velocityX:0,velocityY:0,deltaX:0,deltaY:0,timeStamp:0,data:void 0,isScrolling:!0},this.fullscreen=!1,this.scrollX=!1,this.scrollY=!0,this.scrollEvents=!1,this.ionScrollStart=Object(e.g)(this,"ionScrollStart",7),this.ionScroll=Object(e.g)(this,"ionScroll",7),this.ionScrollEnd=Object(e.g)(this,"ionScrollEnd",7),this.config=Object(e.h)(this,"config"),this.queue=Object(e.h)(this,"queue"),this.win=Object(e.h)(this,"window")}return t.prototype.componentWillLoad=function(){if(void 0===this.forceOverscroll){var t=Object(e.f)(this);this.forceOverscroll="ios"===t&&Object(e.k)(this.win,"mobile")}},t.prototype.componentDidLoad=function(){this.resize()},t.prototype.componentDidUnload=function(){this.onScrollEnd()},t.prototype.onClick=function(t){this.isScrolling&&(t.preventDefault(),t.stopPropagation())},t.prototype.resize=function(){this.fullscreen?this.queue.read(this.readDimensions.bind(this)):0===this.cTop&&0===this.cBottom||(this.cTop=this.cBottom=0,this.el.forceUpdate())},t.prototype.readDimensions=function(){var t=function(t){var o=t.closest("ion-tabs");if(o)return o;var n=t.closest("ion-app,ion-page,.ion-page,page-inner");if(n)return n;return function(t){if(t.parentElement)return t.parentElement;if(t.parentNode&&t.parentNode.host)return t.parentNode.host;return null}(t)}(this.el),o=Math.max(this.el.offsetTop,0),n=Math.max(t.offsetHeight-o-this.el.offsetHeight,0);(o!==this.cTop||n!==this.cBottom)&&(this.cTop=o,this.cBottom=n,this.el.forceUpdate())},t.prototype.onScroll=function(t){var o=this,n=Date.now(),r=!this.isScrolling;this.lastScroll=n,r&&this.onScrollStart(),!this.queued&&this.scrollEvents&&(this.queued=!0,this.queue.read(function(n){o.queued=!1,o.detail.event=t,function(t,o,n,r){var e=t.currentX,i=t.currentY,a=t.timeStamp,s=o.scrollLeft,l=o.scrollTop;r&&(t.startTimeStamp=n,t.startX=s,t.startY=l,t.velocityX=t.velocityY=0);t.timeStamp=n,t.currentX=t.scrollLeft=s,t.currentY=t.scrollTop=l,t.deltaX=s-t.startX,t.deltaY=l-t.startY;var c=n-a;if(c>0&&c<100){var d=(s-e)/c,u=(l-i)/c;t.velocityX=.7*d+.3*t.velocityX,t.velocityY=.7*u+.3*t.velocityY}}(o.detail,o.scrollEl,n,r),o.ionScroll.emit(o.detail)}))},t.prototype.getScrollElement=function(){return Promise.resolve(this.scrollEl)},t.prototype.scrollToTop=function(t){return void 0===t&&(t=0),this.scrollToPoint(void 0,0,t)},t.prototype.scrollToBottom=function(t){void 0===t&&(t=0);var o=this.scrollEl.scrollHeight-this.scrollEl.clientHeight;return this.scrollToPoint(void 0,o,t)},t.prototype.scrollByPoint=function(t,o,n){return this.scrollToPoint(t+this.scrollEl.scrollLeft,o+this.scrollEl.scrollTop,n)},t.prototype.scrollToPoint=function(t,o,n){return void 0===n&&(n=0),r.__awaiter(this,void 0,void 0,function(){var e,i,a,s,l,c,d,u,p;return r.__generator(this,function(r){return e=this.scrollEl,n<32?(null!=o&&(e.scrollTop=o),null!=t&&(e.scrollLeft=t),[2]):(a=0,s=new Promise(function(t){return i=t}),l=e.scrollTop,c=e.scrollLeft,d=null!=o?o-l:0,u=null!=t?t-c:0,p=function(t){var o=Math.min(1,(t-a)/n)-1,r=Math.pow(o,3)+1;0!==d&&(e.scrollTop=Math.floor(r*d+l)),0!==u&&(e.scrollLeft=Math.floor(r*u+c)),r<1?requestAnimationFrame(p):i()},requestAnimationFrame(function(t){a=t,p(t)}),[2,s])})})},t.prototype.onScrollStart=function(){var t=this;this.isScrolling=!0,this.ionScrollStart.emit({isScrolling:!0}),this.watchDog&&clearInterval(this.watchDog),this.watchDog=setInterval(function(){t.lastScroll<Date.now()-120&&t.onScrollEnd()},100)},t.prototype.onScrollEnd=function(){clearInterval(this.watchDog),this.watchDog=null,this.isScrolling&&(this.isScrolling=!1,this.ionScrollEnd.emit({isScrolling:!1}))},t.prototype.hostData=function(){var t,o=Object(e.f)(this);return{class:Object.assign({},Object(i.a)(this.color),(t={},t[""+o]=!0,t["content-sizing"]=Object(i.c)("ion-popover",this.el),t.overscroll=!!this.forceOverscroll,t)),style:{"--offset-top":this.cTop+"px","--offset-bottom":this.cBottom+"px"}}},t.prototype.__stencil_render=function(){var t=this,o=this.scrollX,n=this.scrollY,r=this.forceOverscroll;return this.resize(),[Object(e.j)("div",{class:{"inner-scroll":!0,"scroll-x":o,"scroll-y":n,overscroll:(o||n)&&!!r},ref:function(o){return t.scrollEl=o},onScroll:function(o){return t.onScroll(o)}},Object(e.j)("slot",null)),Object(e.j)("slot",{name:"fixed"})]},Object.defineProperty(t.prototype,"el",{get:function(){return Object(e.l)(this)},enumerable:!0,configurable:!0}),t.prototype.render=function(){return Object(e.j)(e.a,this.hostData(),this.__stencil_render())},Object.defineProperty(t,"style",{get:function(){return':host{--background:var(--ion-background-color,#fff);--color:var(--ion-text-color,#000);--padding-top:0px;--padding-bottom:0px;--padding-start:0px;--padding-end:0px;--keyboard-offset:0px;--offset-top:0px;--offset-bottom:0px;--overflow:auto;display:block;position:relative;-ms-flex:1;flex:1;width:100%;height:100%;margin:0!important;padding:0!important;font-family:var(--ion-font-family,inherit);contain:size style}:host(.ion-color) .inner-scroll{background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(.outer-content){--background:var(--ion-color-step-50,#f2f2f2)}.inner-scroll{left:0;right:0;top:calc(var(--offset-top) * -1);bottom:calc(var(--offset-bottom) * -1);padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:calc(var(--padding-top) + var(--offset-top));padding-bottom:calc(var(--padding-bottom) + var(--keyboard-offset) + var(--offset-bottom));position:absolute;background:var(--background);color:var(--color);-webkit-box-sizing:border-box;box-sizing:border-box;overflow:hidden}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.inner-scroll{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.scroll-x,.scroll-y{-webkit-overflow-scrolling:touch;will-change:scroll-position;-ms-scroll-chaining:none;overscroll-behavior:contain}.scroll-y{-ms-touch-action:pan-y;touch-action:pan-y;overflow-y:var(--overflow)}.scroll-x{-ms-touch-action:pan-x;touch-action:pan-x;overflow-x:var(--overflow)}.scroll-x.scroll-y{-ms-touch-action:auto;touch-action:auto}.overscroll:after,.overscroll:before{position:absolute;width:1px;height:1px;content:""}.overscroll:before{bottom:-1px}.overscroll:after{top:-1px}:host(.content-sizing){contain:none}:host(.content-sizing) .inner-scroll{position:relative}'},enumerable:!0,configurable:!0}),t}();var d=function(){function t(t){Object(e.r)(this,t),this.translucent=!1}return t.prototype.hostData=function(){var t,o=Object(e.f)(this);return{class:(t={},t[""+o]=!0,t["footer-"+o]=!0,t["footer-translucent"]=this.translucent,t["footer-translucent-"+o]=this.translucent,t)}},t.prototype.render=function(){return Object(e.j)(e.a,this.hostData())},Object.defineProperty(t,"style",{get:function(){return'ion-footer{display:block;position:relative;-ms-flex-order:1;order:1;width:100%;z-index:10}ion-footer ion-toolbar:last-child{padding-bottom:var(--ion-safe-area-bottom,0)}.footer-md:before{left:0;top:-2px;bottom:auto;background-position:left 0 top 0;position:absolute;width:100%;height:2px;background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAHBAMAAADzDtBxAAAAD1BMVEUAAAAAAAAAAAAAAAAAAABPDueNAAAABXRSTlMUCS0gBIh/TXEAAAAaSURBVAjXYxCEAgY4UIICBmMogMsgFLtAAQCNSwXZKOdPxgAAAABJRU5ErkJggg==");background-repeat:repeat-x;content:""}:host-context([dir=rtl]) .footer-md:before,[dir=rtl] .footer-md:before{left:unset;right:unset;right:0;background-position:right 0 top 0}.footer-md[no-border]:before{display:none}'},enumerable:!0,configurable:!0}),t}(),u=function(){function t(t){Object(e.r)(this,t),this.translucent=!1}return t.prototype.hostData=function(){var t,o=Object(e.f)(this);return{class:(t={},t[""+o]=!0,t["header-"+o]=!0,t["header-translucent"]=this.translucent,t["header-translucent-"+o]=this.translucent,t)}},t.prototype.render=function(){return Object(e.j)(e.a,this.hostData())},Object.defineProperty(t,"style",{get:function(){return'ion-header{display:block;position:relative;-ms-flex-order:-1;order:-1;width:100%;z-index:10}ion-header ion-toolbar:first-child{padding-top:var(--ion-safe-area-top,0)}.header-md:after{left:0;bottom:-5px;background-position:left 0 top -2px;position:absolute;width:100%;height:5px;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAHBAMAAADzDtBxAAAAD1BMVEUAAAAAAAAAAAAAAAAAAABPDueNAAAABXRSTlMUCS0gBIh/TXEAAAAaSURBVAjXYxCEAgY4UIICBmMogMsgFLtAAQCNSwXZKOdPxgAAAABJRU5ErkJggg==);background-repeat:repeat-x;content:""}:host-context([dir=rtl]) .header-md:after,[dir=rtl] .header-md:after{left:unset;right:unset;right:0;background-position:right 0 top -2px}.header-md[no-border]:after{display:none}'},enumerable:!0,configurable:!0}),t}(),p=function(){function t(t){Object(e.r)(this,t)}return t.prototype.getMode=function(){var t=Object(e.f)(this),o=this.el.closest("ion-toolbar");return o&&o.mode||t},t.prototype.hostData=function(){var t,o=this.getMode();return{class:Object.assign((t={},t[""+o]=!0,t["title-"+o]=!0,t),Object(i.a)(this.color))}},t.prototype.__stencil_render=function(){return[Object(e.j)("div",{class:"toolbar-title"},Object(e.j)("slot",null))]},Object.defineProperty(t.prototype,"el",{get:function(){return Object(e.l)(this)},enumerable:!0,configurable:!0}),t.prototype.render=function(){return Object(e.j)(e.a,this.hostData(),this.__stencil_render())},Object.defineProperty(t,"style",{get:function(){return":host{--color:initial;display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-align:center;align-items:center;color:var(--color)}:host,:host(.title-ios){-webkit-transform:translateZ(0);transform:translateZ(0)}:host(.title-ios){left:0;top:0;padding-left:90px;padding-right:90px;padding-top:0;padding-bottom:0;position:absolute;width:100%;height:100%;font-size:17px;font-weight:600;letter-spacing:-.03em;text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box;pointer-events:none}:host-context([dir=rtl]).title-ios,:host-context([dir=rtl]):host(.title-ios){left:unset;right:unset;right:0}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.title-ios){padding-left:unset;padding-right:unset;-webkit-padding-start:90px;padding-inline-start:90px;-webkit-padding-end:90px;padding-inline-end:90px}}:host(.title-md){padding-left:20px;padding-right:20px;padding-top:0;padding-bottom:0;font-size:20px;font-weight:500;letter-spacing:.0125em}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.title-md){padding-left:unset;padding-right:unset;-webkit-padding-start:20px;padding-inline-start:20px;-webkit-padding-end:20px;padding-inline-end:20px}}:host(.ion-color){color:var(--ion-color-base)}.toolbar-title{display:block;width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;pointer-events:auto}"},enumerable:!0,configurable:!0}),t}(),f=function(){function t(t){Object(e.r)(this,t),this.childrenStyles=new Map,this.config=Object(e.h)(this,"config")}return t.prototype.componentWillLoad=function(){var t=Array.from(this.el.querySelectorAll("ion-buttons")),o=t.find(function(t){return"start"===t.slot});o&&o.classList.add("buttons-first-slot");var n=t.reverse(),r=n.find(function(t){return"end"===t.slot})||n.find(function(t){return"primary"===t.slot})||n.find(function(t){return"secondary"===t.slot});r&&r.classList.add("buttons-last-slot")},t.prototype.childrenStyle=function(t){t.stopPropagation();var o=t.target.tagName,n=t.detail,r={},e=this.childrenStyles.get(o)||{},i=!1;Object.keys(n).forEach(function(t){var o="toolbar-"+t,a=n[t];a!==e[o]&&(i=!0),a&&(r[o]=!0)}),i&&(this.childrenStyles.set(o,r),this.el.forceUpdate())},t.prototype.hostData=function(){var t,o=Object(e.f)(this),n={};return this.childrenStyles.forEach(function(t){Object.assign(n,t)}),{class:Object.assign((t={},t[""+o]=!0,t),n,Object(i.a)(this.color))}},t.prototype.__stencil_render=function(){return[Object(e.j)("div",{class:"toolbar-background"}),Object(e.j)("div",{class:"toolbar-container"},Object(e.j)("slot",{name:"start"}),Object(e.j)("slot",{name:"secondary"}),Object(e.j)("div",{class:"toolbar-content"},Object(e.j)("slot",null)),Object(e.j)("slot",{name:"primary"}),Object(e.j)("slot",{name:"end"}))]},Object.defineProperty(t.prototype,"el",{get:function(){return Object(e.l)(this)},enumerable:!0,configurable:!0}),t.prototype.render=function(){return Object(e.j)(e.a,this.hostData(),this.__stencil_render())},Object.defineProperty(t,"style",{get:function(){return":host{--border-width:0;--border-style:solid;--opacity:1;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;padding-left:var(--ion-safe-area-left);padding-right:var(--ion-safe-area-right);display:block;position:relative;width:100%;color:var(--color);font-family:var(--ion-font-family,inherit);contain:content;z-index:10;-webkit-box-sizing:border-box;box-sizing:border-box}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--ion-safe-area-left);padding-inline-start:var(--ion-safe-area-left);-webkit-padding-end:var(--ion-safe-area-right);padding-inline-end:var(--ion-safe-area-right)}}:host(.ion-color){color:var(--ion-color-contrast)}:host(.ion-color) .toolbar-background{background:var(--ion-color-base)}.toolbar-container{padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:-ms-flexbox;display:flex;position:relative;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;width:100%;min-height:var(--min-height);contain:content;overflow:hidden;z-index:10;-webkit-box-sizing:border-box;box-sizing:border-box}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.toolbar-container{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.toolbar-background{top:0;-webkit-transform:translateZ(0);transform:translateZ(0);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);contain:strict;opacity:var(--opacity);z-index:-1;pointer-events:none}.toolbar-background,::slotted(ion-progress-bar){left:0;right:0;bottom:0;position:absolute}:host{--background:var(--ion-toolbar-background,var(--ion-background-color,#fff));--color:var(--ion-toolbar-color,var(--ion-text-color,#424242));--border-color:var(--ion-toolbar-border-color,var(--ion-border-color,var(--ion-color-step-150,#c1c4cd)));--padding-top:0;--padding-bottom:0;--padding-start:0;--padding-end:0;--min-height:56px}.toolbar-content{-ms-flex:1;flex:1;-ms-flex-order:3;order:3;min-width:0;max-width:100%}::slotted(ion-segment){min-height:var(--min-height)}::slotted(.buttons-first-slot){margin-left:4px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){::slotted(.buttons-first-slot){margin-left:unset;-webkit-margin-start:4px;margin-inline-start:4px}}::slotted(.buttons-last-slot){margin-right:4px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){::slotted(.buttons-last-slot){margin-right:unset;-webkit-margin-end:4px;margin-inline-end:4px}}::slotted([slot=start]){-ms-flex-order:2;order:2}::slotted([slot=secondary]){-ms-flex-order:4;order:4}::slotted([slot=primary]){-ms-flex-order:5;order:5;text-align:end}::slotted([slot=end]){-ms-flex-order:6;order:6;text-align:end}"},enumerable:!0,configurable:!0}),t}()},890:function(t,o,n){"use strict";n.d(o,"a",function(){return i}),n.d(o,"b",function(){return a}),n.d(o,"c",function(){return e}),n.d(o,"d",function(){return l});var r=n(6);function e(t,o){return null!==o.closest(t)}function i(t){var o;return"string"===typeof t&&t.length>0?((o={"ion-color":!0})["ion-color-"+t]=!0,o):void 0}function a(t){var o={};return function(t){return void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter(function(t){return null!=t}).map(function(t){return t.trim()}).filter(function(t){return""!==t}):[]}(t).forEach(function(t){return o[t]=!0}),o}var s=/^[a-z][a-z0-9+\-.]*:/;function l(t,o,n,e){return r.__awaiter(this,void 0,void 0,function(){var i;return r.__generator(this,function(r){switch(r.label){case 0:return null==o||"#"===o[0]||s.test(o)?[3,2]:(i=t.document.querySelector("ion-router"))?(null!=n&&n.preventDefault(),[4,i.componentOnReady()]):[3,2];case 1:return r.sent(),[2,i.push(o,e)];case 2:return[2,!1]}})})}},891:function(t,o,n){"use strict";function r(t){"requestIdleCallback"in window?window.requestIdleCallback(t):setTimeout(t,32)}function e(t){return!!t.shadowRoot&&!!t.attachShadow}function i(t){var o=t.closest("ion-item");return o?o.querySelector("ion-label"):null}function a(t,o,n,r,i){if(t||e(o)){var a=o.querySelector("input.aux-input");a||((a=o.ownerDocument.createElement("input")).type="hidden",a.classList.add("aux-input"),o.appendChild(a)),a.disabled=i,a.name=n,a.value=r||""}}function s(t,o,n){return Math.max(t,Math.min(o,n))}function l(t,o){if(!t){var n="ASSERT: "+o;throw console.error(n),new Error(n)}}function c(t){return t.timeStamp||Date.now()}function d(t){if(t){var o=t.changedTouches;if(o&&o.length>0){var n=o[0];return{x:n.clientX,y:n.clientY}}if(void 0!==t.pageX)return{x:t.pageX,y:t.pageY}}return{x:0,y:0}}function u(t,o){var n="rtl"===t.document.dir;switch(o){case"start":return n;case"end":return!n;default:throw new Error('"'+o+'" is not a valid value for [side]. Use "start" or "end" instead.')}}function p(t,o){var n=t._original||t;return{_original:t,emit:f(n.emit.bind(n),o)}}function f(t,o){var n;return void 0===o&&(o=0),function(){for(var r=[],e=0;e<arguments.length;e++)r[e]=arguments[e];clearTimeout(n),n=setTimeout.apply(void 0,[t,o].concat(r))}}n.d(o,"a",function(){return r}),n.d(o,"b",function(){return l}),n.d(o,"c",function(){return s}),n.d(o,"d",function(){return p}),n.d(o,"e",function(){return f}),n.d(o,"f",function(){return i}),n.d(o,"g",function(){return e}),n.d(o,"h",function(){return u}),n.d(o,"i",function(){return c}),n.d(o,"j",function(){return d}),n.d(o,"k",function(){return a})}}]);
//# sourceMappingURL=27.b905d90d.chunk.js.map