(window.webpackJsonp=window.webpackJsonp||[]).push([[25,0],{847:function(t,e,n){"use strict";n.r(e),n.d(e,"ion_menu",function(){return u}),n.d(e,"ion_menu_button",function(){return p}),n.d(e,"ion_menu_controller",function(){return y}),n.d(e,"ion_menu_toggle",function(){return w});var i=n(6),r=n(10),o=n(890),s=n(892),a=n(891),u=function(){function t(t){Object(r.r)(this,t),this.lastOnEnd=0,this.blocker=s.GESTURE_CONTROLLER.createBlocker({disableScroll:!0}),this.mode=Object(r.f)(this),this.isAnimating=!1,this._isOpen=!1,this.isPaneVisible=!1,this.isEndSide=!1,this.disabled=!1,this.side="start",this.swipeGesture=!0,this.maxEdgeStart=50,this.ionWillOpen=Object(r.g)(this,"ionWillOpen",7),this.ionWillClose=Object(r.g)(this,"ionWillClose",7),this.ionDidOpen=Object(r.g)(this,"ionDidOpen",7),this.ionDidClose=Object(r.g)(this,"ionDidClose",7),this.ionMenuChange=Object(r.g)(this,"ionMenuChange",7),this.lazyMenuCtrl=Object(r.p)(this,"ion-menu-controller")}return t.prototype.typeChanged=function(t,e){var n=this.contentEl;n&&(void 0!==e&&n.classList.remove("menu-content-"+e),n.classList.add("menu-content-"+t),n.removeAttribute("style")),this.menuInnerEl&&this.menuInnerEl.removeAttribute("style"),this.animation=void 0},t.prototype.disabledChanged=function(){this.updateState(),this.ionMenuChange.emit({disabled:this.disabled,open:this._isOpen})},t.prototype.sideChanged=function(){this.isEndSide=Object(a.h)(window,this.side)},t.prototype.swipeGestureChanged=function(){this.updateState()},t.prototype.componentWillLoad=function(){return i.__awaiter(this,void 0,void 0,function(){var t,e,o,s,a,u,c=this;return i.__generator(this,function(i){switch(i.label){case 0:return void 0===this.type&&(this.type=r.q.get("menuType","ios"===this.mode?"reveal":"overlay")),e=this,[4,this.lazyMenuCtrl.componentOnReady().then(function(t){return t._getInstance()})];case 1:return t=e.menuCtrl=i.sent(),o=this.el,s=o.parentNode,(a=void 0!==this.contentId?document.getElementById(this.contentId):s&&s.querySelector&&s.querySelector("[main]"))&&a.tagName?(this.contentEl=a,a.classList.add("menu-content"),this.typeChanged(this.type,void 0),this.sideChanged(),t._register(this),u=this,[4,Promise.resolve().then(n.bind(null,892))]):(console.error('Menu: must have a "content" element to listen for drag events on.'),[2]);case 2:return u.gesture=i.sent().createGesture({el:document,gestureName:"menu-swipe",gesturePriority:30,threshold:10,canStart:function(t){return c.canStart(t)},onWillStart:function(){return c.onWillStart()},onStart:function(){return c.onStart()},onMove:function(t){return c.onMove(t)},onEnd:function(t){return c.onEnd(t)}}),this.updateState(),[2]}})})},t.prototype.componentDidLoad=function(){this.ionMenuChange.emit({disabled:this.disabled,open:this._isOpen})},t.prototype.componentDidUnload=function(){this.blocker.destroy(),this.menuCtrl._unregister(this),this.animation&&this.animation.destroy(),this.gesture&&(this.gesture.destroy(),this.gesture=void 0),this.animation=void 0,this.contentEl=this.backdropEl=this.menuInnerEl=void 0},t.prototype.onSplitPaneChanged=function(t){this.isPaneVisible=t.detail.isPane(this.el),this.updateState()},t.prototype.onBackdropClick=function(t){this._isOpen&&this.lastOnEnd<t.timeStamp-100&&(!!t.composedPath&&!t.composedPath().includes(this.menuInnerEl)&&(t.preventDefault(),t.stopPropagation(),this.close()))},t.prototype.isOpen=function(){return Promise.resolve(this._isOpen)},t.prototype.isActive=function(){return Promise.resolve(this._isActive())},t.prototype.open=function(t){return void 0===t&&(t=!0),this.setOpen(!0,t)},t.prototype.close=function(t){return void 0===t&&(t=!0),this.setOpen(!1,t)},t.prototype.toggle=function(t){return void 0===t&&(t=!0),this.setOpen(!this._isOpen,t)},t.prototype.setOpen=function(t,e){return void 0===e&&(e=!0),this.menuCtrl._setOpen(this,t,e)},t.prototype._setOpen=function(t,e){return void 0===e&&(e=!0),i.__awaiter(this,void 0,void 0,function(){return i.__generator(this,function(n){switch(n.label){case 0:return!this._isActive()||this.isAnimating||t===this._isOpen?[2,!1]:(this.beforeAnimation(t),[4,this.loadAnimation()]);case 1:return n.sent(),[4,this.startAnimation(t,e)];case 2:return n.sent(),this.afterAnimation(t),[2,!0]}})})},t.prototype.loadAnimation=function(){return i.__awaiter(this,void 0,void 0,function(){var t,e;return i.__generator(this,function(n){switch(n.label){case 0:return(t=this.menuInnerEl.offsetWidth)===this.width&&void 0!==this.animation?[2]:(this.width=t,this.animation&&(this.animation.destroy(),this.animation=void 0),e=this,[4,this.menuCtrl._createAnimation(this.type,this)]);case 1:return e.animation=n.sent(),[2]}})})},t.prototype.startAnimation=function(t,e){return i.__awaiter(this,void 0,void 0,function(){var n;return i.__generator(this,function(i){switch(i.label){case 0:return n=this.animation.reverse(!t),e?[4,n.playAsync()]:[3,2];case 1:return i.sent(),[3,3];case 2:n.playSync(),i.label=3;case 3:return[2]}})})},t.prototype._isActive=function(){return!this.disabled&&!this.isPaneVisible},t.prototype.canSwipe=function(){return this.swipeGesture&&!this.isAnimating&&this._isActive()},t.prototype.canStart=function(t){return!!this.canSwipe()&&(!!this._isOpen||!this.menuCtrl.getOpenSync()&&(e=window,n=t.currentX,i=this.isEndSide,r=this.maxEdgeStart,i?n>=e.innerWidth-r:n<=r));var e,n,i,r},t.prototype.onWillStart=function(){return this.beforeAnimation(!this._isOpen),this.loadAnimation()},t.prototype.onStart=function(){this.isAnimating&&this.animation?this.animation.reverse(this._isOpen).progressStart():Object(a.b)(!1,"isAnimating has to be true")},t.prototype.onMove=function(t){if(this.isAnimating&&this.animation){var e=c(t.deltaX,this._isOpen,this.isEndSide)/this.width;this.animation.progressStep(e)}else Object(a.b)(!1,"isAnimating has to be true")},t.prototype.onEnd=function(t){var e=this;if(this.isAnimating&&this.animation){var n=this._isOpen,i=this.isEndSide,r=c(t.deltaX,n,i),o=this.width,s=r/o,u=t.velocityX,d=o/2,l=u>=0&&(u>.2||t.deltaX>d),h=u<=0&&(u<-.2||t.deltaX<-d),p=n?i?l:h:i?h:l,f=!n&&p;n&&!p&&(f=!0);var m=(p?1-s:s)*o,b=0;if(m>5){var v=m/Math.abs(u);b=Math.min(v,300)}this.lastOnEnd=t.timeStamp,this.animation.onFinish(function(){return e.afterAnimation(f)},{clearExistingCallbacks:!0,oneTimeCallback:!0}).progressEnd(p,s,b)}else Object(a.b)(!1,"isAnimating has to be true")},t.prototype.beforeAnimation=function(t){Object(a.b)(!this.isAnimating,"_before() should not be called while animating"),this.el.classList.add(d),this.backdropEl&&this.backdropEl.classList.add(l),this.blocker.block(),this.isAnimating=!0,t?this.ionWillOpen.emit():this.ionWillClose.emit()},t.prototype.afterAnimation=function(t){Object(a.b)(this.isAnimating,"_before() should be called while animating"),this._isOpen=t,this.isAnimating=!1,this._isOpen||this.blocker.unblock(),t?(this.contentEl&&this.contentEl.classList.add(h),this.ionDidOpen.emit()):(this.el.classList.remove(d),this.contentEl&&this.contentEl.classList.remove(h),this.backdropEl&&this.backdropEl.classList.remove(l),this.ionDidClose.emit())},t.prototype.updateState=function(){var t=this._isActive();this.gesture&&this.gesture.setDisabled(!t||!this.swipeGesture),!t&&this._isOpen&&this.forceClosing(),!this.disabled&&this.menuCtrl&&this.menuCtrl._setActiveMenu(this),Object(a.b)(!this.isAnimating,"can not be animating")},t.prototype.forceClosing=function(){Object(a.b)(this._isOpen,"menu cannot be closed"),this.isAnimating=!0,this.animation.reverse(!0).playSync(),this.afterAnimation(!1)},t.prototype.render=function(){var t,e=this,n=this.isEndSide,i=this.type,o=this.disabled,s=this.isPaneVisible;return Object(r.j)(r.a,{role:"complementary",class:(t={},t["menu-type-"+i]=!0,t["menu-enabled"]=!o,t["menu-side-end"]=n,t["menu-side-start"]=!n,t["menu-pane-visible"]=s,t)},Object(r.j)("div",{class:"menu-inner",ref:function(t){return e.menuInnerEl=t}},Object(r.j)("slot",null)),Object(r.j)("ion-backdrop",{ref:function(t){return e.backdropEl=t},class:"menu-backdrop",tappable:!1,stopPropagation:!1}))},Object.defineProperty(t.prototype,"el",{get:function(){return Object(r.l)(this)},enumerable:!0,configurable:!0}),Object.defineProperty(t,"watchers",{get:function(){return{type:["typeChanged"],disabled:["disabledChanged"],side:["sideChanged"],swipeGesture:["swipeGestureChanged"]}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return":host{--width:304px;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--background:var(--ion-background-color,#fff);left:0;right:0;top:0;bottom:0;display:none;position:absolute;contain:strict}:host(.show-menu){display:block}.menu-inner{left:0;right:auto;top:0;bottom:0;-webkit-transform:translate3d(-9999px,0,0);transform:translate3d(-9999px,0,0);display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:justify;justify-content:space-between;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);contain:strict}:host-context([dir=rtl]) .menu-inner,[dir=rtl] .menu-inner{left:unset;right:unset;left:auto;right:0;-webkit-transform:translate3d(calc(-1 * -9999px),0,0);transform:translate3d(calc(-1 * -9999px),0,0)}:host(.menu-side-start) .menu-inner{--ion-safe-area-right:0px;right:auto;left:0}:host(.menu-side-end) .menu-inner{--ion-safe-area-left:0px;right:0;left:auto}ion-backdrop{display:none;opacity:.01;z-index:-1}@media (max-width:340px){.menu-inner{--width:264px}}:host(.menu-type-reveal){z-index:0}:host(.menu-type-reveal.show-menu) .menu-inner{-webkit-transform:translateZ(0);transform:translateZ(0)}:host(.menu-type-overlay){z-index:80}:host(.menu-type-overlay) .show-backdrop{display:block;cursor:pointer}:host(.menu-pane-visible) .menu-inner{left:0;right:0;width:auto;-webkit-transform:none!important;transform:none!important;-webkit-box-shadow:none!important;box-shadow:none!important}:host(.menu-pane-visible) ion-backdrop{display:hidden!important}:host(.menu-type-overlay) .menu-inner{-webkit-box-shadow:0 2px 22px 0 rgba(0,0,0,.09),4px 0 16px 0 rgba(0,0,0,.18);box-shadow:0 2px 22px 0 rgba(0,0,0,.09),4px 0 16px 0 rgba(0,0,0,.18)}"},enumerable:!0,configurable:!0}),t}();function c(t,e,n){return Math.max(0,e!==n?-t:t)}var d="show-menu",l="show-backdrop",h="menu-content-open",p=function(){function t(t){Object(r.r)(this,t),this.autoHide=!0,this.config=Object(r.h)(this,"config")}return t.prototype.hostData=function(){var t,e=Object(r.f)(this);return{class:Object.assign({},Object(o.a)(this.color),(t={},t[""+e]=!0,t.button=!0,t["ion-activatable"]=!0,t["ion-focusable"]=!0,t))}},t.prototype.__stencil_render=function(){var t=Object(r.f)(this),e=this.config.get("menuIcon","menu");return Object(r.j)("ion-menu-toggle",{menu:this.menu,autoHide:this.autoHide},Object(r.j)("button",{type:"button",class:"button-native"},Object(r.j)("slot",null,Object(r.j)("ion-icon",{icon:e,mode:t,lazy:!1})),"md"===t&&Object(r.j)("ion-ripple-effect",{type:"unbounded"})))},t.prototype.render=function(){return Object(r.j)(r.a,this.hostData(),this.__stencil_render())},Object.defineProperty(t,"style",{get:function(){return":host{--background:transparent;--color-focused:var(--color);--border-radius:initial;--padding-top:0;--padding-bottom:0;color:var(--color);text-align:center;text-decoration:none;text-overflow:ellipsis;text-transform:none;white-space:nowrap;-webkit-font-kerning:none;font-kerning:none}.button-native{border-radius:var(--border-radius);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;border:0;outline:none;background:var(--background);line-height:1;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:0;-webkit-appearance:none;-moz-appearance:none;appearance:none}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.button-native{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}ion-icon{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;pointer-events:none}@media (any-hover:hover){:host(:hover) .button-native{background:var(--background-hover);color:var(--color-hover)}}:host(.ion-focused) .button-native{background:var(--background-focused);color:var(--color-focused)}:host(.ion-color) .button-native{color:var(--ion-color-base)}:host-context(ion-toolbar:not(.ion-color)){color:var(--ion-toolbar-color,var(--color))}:host{--background-focused:rgba(66,66,66,0.24);--background-hover:rgba(66,66,66,0.08);--border-radius:50%;--color:initial;--padding-start:8px;--padding-end:8px;width:48px;height:48px}ion-icon{font-size:24px}@media (any-hover:hover){:host(.ion-color:hover) .button-native{background:rgba(var(--ion-color-base-rgb),.08)}}:host(.ion-color.ion-focused) .button-native{background:rgba(var(--ion-color-base-rgb),.24);color:var(--ion-color-base)}"},enumerable:!0,configurable:!0}),t}();function f(t){return Promise.resolve((new t).easing("cubic-bezier(0.0, 0.0, 0.2, 1)").easingReverse("cubic-bezier(0.4, 0.0, 0.6, 1)").duration(300))}var m=8;function b(t,e,n){var i,r,o=n.width+m;n.isEndSide?(i=o+"px",r="0px"):(i=-o+"px",r="0px");var s=(new t).addElement(n.menuInnerEl).fromTo("translateX",i,r),a=(new t).addElement(n.backdropEl).fromTo("opacity",.01,.32);return f(t).then(function(t){return t.add(s).add(a)})}function v(t,e,n){var i,r,o=n.width;n.isEndSide?(i=-o+"px",r=o+"px"):(i=o+"px",r=-o+"px");var s=(new t).addElement(n.menuInnerEl).fromTo("translateX",r,"0px"),a=(new t).addElement(n.contentEl).fromTo("translateX","0px",i),u=(new t).addElement(n.backdropEl).fromTo("opacity",.01,.32);return f(t).then(function(t){return t.add(s).add(u).add(a)})}function g(t,e,n){var i=n.width*(n.isEndSide?-1:1)+"px",r=(new t).addElement(n.contentEl).fromTo("translateX","0px",i);return f(t).then(function(t){return t.add(r)})}var y=function(){function t(t){Object(r.r)(this,t),this.menus=[],this.menuAnimations=new Map,this.registerAnimation("reveal",g),this.registerAnimation("push",v),this.registerAnimation("overlay",b),this.doc=Object(r.h)(this,"document"),this.config=Object(r.h)(this,"config")}return t.prototype.open=function(t){return i.__awaiter(this,void 0,void 0,function(){var e;return i.__generator(this,function(n){switch(n.label){case 0:return[4,this.get(t)];case 1:return(e=n.sent())?[2,e.open()]:[2,!1]}})})},t.prototype.close=function(t){return i.__awaiter(this,void 0,void 0,function(){var e;return i.__generator(this,function(n){switch(n.label){case 0:return[4,void 0!==t?this.get(t):this.getOpen()];case 1:return void 0!==(e=n.sent())?[2,e.close()]:[2,!1]}})})},t.prototype.toggle=function(t){return i.__awaiter(this,void 0,void 0,function(){var e;return i.__generator(this,function(n){switch(n.label){case 0:return[4,this.get(t)];case 1:return(e=n.sent())?[2,e.toggle()]:[2,!1]}})})},t.prototype.enable=function(t,e){return i.__awaiter(this,void 0,void 0,function(){var n;return i.__generator(this,function(i){switch(i.label){case 0:return[4,this.get(e)];case 1:return(n=i.sent())&&(n.disabled=!t),[2,n]}})})},t.prototype.swipeGesture=function(t,e){return i.__awaiter(this,void 0,void 0,function(){var n;return i.__generator(this,function(i){switch(i.label){case 0:return[4,this.get(e)];case 1:return(n=i.sent())&&(n.swipeGesture=t),[2,n]}})})},t.prototype.isOpen=function(t){return i.__awaiter(this,void 0,void 0,function(){var e;return i.__generator(this,function(n){switch(n.label){case 0:return null==t?[3,2]:[4,this.get(t)];case 1:return[2,void 0!==(e=n.sent())&&e.isOpen()];case 2:return[4,this.getOpen()];case 3:return[2,void 0!==(e=n.sent())]}})})},t.prototype.isEnabled=function(t){return i.__awaiter(this,void 0,void 0,function(){var e;return i.__generator(this,function(n){switch(n.label){case 0:return[4,this.get(t)];case 1:return(e=n.sent())?[2,!e.disabled]:[2,!1]}})})},t.prototype.get=function(t){return i.__awaiter(this,void 0,void 0,function(){var e,n;return i.__generator(this,function(i){switch(i.label){case 0:return[4,this.waitUntilReady()];case 1:return i.sent(),"start"===t||"end"===t?(e=this.find(function(e){return e.side===t&&!e.disabled}))?[2,e]:[2,this.find(function(e){return e.side===t})]:null!=t?[2,this.find(function(e){return e.menuId===t})]:(n=this.find(function(t){return!t.disabled}))?[2,n]:[2,this.menus.length>0?this.menus[0].el:void 0]}})})},t.prototype.getOpen=function(){return i.__awaiter(this,void 0,void 0,function(){return i.__generator(this,function(t){switch(t.label){case 0:return[4,this.waitUntilReady()];case 1:return t.sent(),[2,this.getOpenSync()]}})})},t.prototype.getMenus=function(){return i.__awaiter(this,void 0,void 0,function(){return i.__generator(this,function(t){switch(t.label){case 0:return[4,this.waitUntilReady()];case 1:return t.sent(),[2,this.getMenusSync()]}})})},t.prototype.isAnimating=function(){return i.__awaiter(this,void 0,void 0,function(){return i.__generator(this,function(t){switch(t.label){case 0:return[4,this.waitUntilReady()];case 1:return t.sent(),[2,this.isAnimatingSync()]}})})},t.prototype.registerAnimation=function(t,e){return i.__awaiter(this,void 0,void 0,function(){return i.__generator(this,function(n){return this.menuAnimations.set(t,e),[2]})})},t.prototype._getInstance=function(){return Promise.resolve(this)},t.prototype._register=function(t){var e=this.menus;e.indexOf(t)<0&&(t.disabled||this._setActiveMenu(t),e.push(t))},t.prototype._unregister=function(t){var e=this.menus.indexOf(t);e>-1&&this.menus.splice(e,1)},t.prototype._setActiveMenu=function(t){var e=t.side;this.menus.filter(function(n){return n.side===e&&n!==t}).forEach(function(t){return t.disabled=!0})},t.prototype._setOpen=function(t,e,n){return i.__awaiter(this,void 0,void 0,function(){var r;return i.__generator(this,function(i){switch(i.label){case 0:return this.isAnimatingSync()?[2,!1]:e?[4,this.getOpen()]:[3,3];case 1:return(r=i.sent())&&t.el!==r?[4,r.setOpen(!1,!1)]:[3,3];case 2:i.sent(),i.label=3;case 3:return[2,t._setOpen(e,n)]}})})},t.prototype._createAnimation=function(t,e){return i.__awaiter(this,void 0,void 0,function(){var r,o;return i.__generator(this,function(i){switch(i.label){case 0:if(!(r=this.menuAnimations.get(t)))throw new Error("animation not registered");return[4,n.e(1).then(n.bind(null,800)).then(function(t){return t.create(r,null,e)})];case 1:return o=i.sent(),this.config.getBoolean("animated",!0)||o.duration(0),[2,o]}})})},t.prototype.getOpenSync=function(){return this.find(function(t){return t._isOpen})},t.prototype.getMenusSync=function(){return this.menus.map(function(t){return t.el})},t.prototype.isAnimatingSync=function(){return this.menus.some(function(t){return t.isAnimating})},t.prototype.find=function(t){var e=this.menus.find(t);if(void 0!==e)return e.el},t.prototype.waitUntilReady=function(){return Promise.all(Array.from(document.querySelectorAll("ion-menu")).map(function(t){return t.componentOnReady()}))},Object.defineProperty(t,"style",{get:function(){return".menu-content{-webkit-transform:translateZ(0);transform:translateZ(0)}.menu-content-open{cursor:pointer;-ms-touch-action:manipulation;touch-action:manipulation;pointer-events:none}.ios .menu-content-reveal{-webkit-box-shadow:-8px 0 42px rgba(0,0,0,.08);box-shadow:-8px 0 42px rgba(0,0,0,.08)}[dir=rtl].ios .menu-content-reveal{-webkit-box-shadow:8px 0 42px rgba(0,0,0,.08);box-shadow:8px 0 42px rgba(0,0,0,.08)}.md .menu-content-push,.md .menu-content-reveal{-webkit-box-shadow:0 2px 22px 0 rgba(0,0,0,.09),4px 0 16px 0 rgba(0,0,0,.18);box-shadow:0 2px 22px 0 rgba(0,0,0,.09),4px 0 16px 0 rgba(0,0,0,.18)}"},enumerable:!0,configurable:!0}),t}(),w=function(){function t(t){Object(r.r)(this,t),this.visible=!1,this.autoHide=!0,this.doc=Object(r.h)(this,"document")}return t.prototype.componentDidLoad=function(){return this.updateVisibility()},t.prototype.onClick=function(){return i.__awaiter(this,void 0,void 0,function(){var t;return i.__generator(this,function(e){switch(e.label){case 0:return[4,_(document)];case 1:return(t=e.sent())?[4,t.get(this.menu)]:[3,3];case 2:e.sent()&&t.toggle(this.menu),e.label=3;case 3:return[2]}})})},t.prototype.updateVisibility=function(){return i.__awaiter(this,void 0,void 0,function(){var t,e,n;return i.__generator(this,function(i){switch(i.label){case 0:return[4,_(document)];case 1:return(t=i.sent())?[4,t.get(this.menu)]:[3,5];case 2:return e=i.sent(),(n=e)?[4,e.isActive()]:[3,4];case 3:n=i.sent(),i.label=4;case 4:if(n)return this.visible=!0,[2];i.label=5;case 5:return this.visible=!1,[2]}})})},t.prototype.hostData=function(){var t,e=Object(r.f)(this),n=this.autoHide&&!this.visible;return{"aria-hidden":n?"true":null,class:(t={},t[""+e]=!0,t["menu-toggle-hidden"]=n,t)}},t.prototype.__stencil_render=function(){return Object(r.j)("slot",null)},t.prototype.render=function(){return Object(r.j)(r.a,this.hostData(),this.__stencil_render())},Object.defineProperty(t,"style",{get:function(){return":host(.menu-toggle-hidden){display:none}"},enumerable:!0,configurable:!0}),t}();function _(t){var e=t.querySelector("ion-menu-controller");return e?e.componentOnReady():Promise.resolve(void 0)}},890:function(t,e,n){"use strict";n.d(e,"a",function(){return o}),n.d(e,"b",function(){return s}),n.d(e,"c",function(){return r}),n.d(e,"d",function(){return u});var i=n(6);function r(t,e){return null!==e.closest(t)}function o(t){var e;return"string"===typeof t&&t.length>0?((e={"ion-color":!0})["ion-color-"+t]=!0,e):void 0}function s(t){var e={};return function(t){return void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter(function(t){return null!=t}).map(function(t){return t.trim()}).filter(function(t){return""!==t}):[]}(t).forEach(function(t){return e[t]=!0}),e}var a=/^[a-z][a-z0-9+\-.]*:/;function u(t,e,n,r){return i.__awaiter(this,void 0,void 0,function(){var o;return i.__generator(this,function(i){switch(i.label){case 0:return null==e||"#"===e[0]||a.test(e)?[3,2]:(o=t.document.querySelector("ion-router"))?(null!=n&&n.preventDefault(),[4,o.componentOnReady()]):[3,2];case 1:return i.sent(),[2,o.push(e,r)];case 2:return[2,!1]}})})}},891:function(t,e,n){"use strict";function i(t){"requestIdleCallback"in window?window.requestIdleCallback(t):setTimeout(t,32)}function r(t){return!!t.shadowRoot&&!!t.attachShadow}function o(t){var e=t.closest("ion-item");return e?e.querySelector("ion-label"):null}function s(t,e,n,i,o){if(t||r(e)){var s=e.querySelector("input.aux-input");s||((s=e.ownerDocument.createElement("input")).type="hidden",s.classList.add("aux-input"),e.appendChild(s)),s.disabled=o,s.name=n,s.value=i||""}}function a(t,e,n){return Math.max(t,Math.min(e,n))}function u(t,e){if(!t){var n="ASSERT: "+e;throw console.error(n),new Error(n)}}function c(t){return t.timeStamp||Date.now()}function d(t){if(t){var e=t.changedTouches;if(e&&e.length>0){var n=e[0];return{x:n.clientX,y:n.clientY}}if(void 0!==t.pageX)return{x:t.pageX,y:t.pageY}}return{x:0,y:0}}function l(t,e){var n="rtl"===t.document.dir;switch(e){case"start":return n;case"end":return!n;default:throw new Error('"'+e+'" is not a valid value for [side]. Use "start" or "end" instead.')}}function h(t,e){var n=t._original||t;return{_original:t,emit:p(n.emit.bind(n),e)}}function p(t,e){var n;return void 0===e&&(e=0),function(){for(var i=[],r=0;r<arguments.length;r++)i[r]=arguments[r];clearTimeout(n),n=setTimeout.apply(void 0,[t,e].concat(i))}}n.d(e,"a",function(){return i}),n.d(e,"b",function(){return u}),n.d(e,"c",function(){return a}),n.d(e,"d",function(){return h}),n.d(e,"e",function(){return p}),n.d(e,"f",function(){return o}),n.d(e,"g",function(){return r}),n.d(e,"h",function(){return l}),n.d(e,"i",function(){return c}),n.d(e,"j",function(){return d}),n.d(e,"k",function(){return s})},892:function(t,e,n){"use strict";n.r(e),n.d(e,"GESTURE_CONTROLLER",function(){return c}),n.d(e,"createGesture",function(){return p});var i,r=n(10),o=function(){function t(){this.gestureId=0,this.requestedStart=new Map,this.disabledGestures=new Map,this.disabledScroll=new Set}return t.prototype.createGesture=function(t){return new s(this,this.newID(),t.name,t.priority||0,!!t.disableScroll)},t.prototype.createBlocker=function(t){return void 0===t&&(t={}),new a(this,this.newID(),t.disable,!!t.disableScroll)},t.prototype.start=function(t,e,n){return this.canStart(t)?(this.requestedStart.set(e,n),!0):(this.requestedStart.delete(e),!1)},t.prototype.capture=function(t,e,n){if(!this.start(t,e,n))return!1;var i=this.requestedStart,r=-1e4;if(i.forEach(function(t){r=Math.max(r,t)}),r===n){this.capturedId=e,i.clear();var o=new CustomEvent("ionGestureCaptured",{detail:{gestureName:t}});return document.dispatchEvent(o),!0}return i.delete(e),!1},t.prototype.release=function(t){this.requestedStart.delete(t),this.capturedId===t&&(this.capturedId=void 0)},t.prototype.disableGesture=function(t,e){var n=this.disabledGestures.get(t);void 0===n&&(n=new Set,this.disabledGestures.set(t,n)),n.add(e)},t.prototype.enableGesture=function(t,e){var n=this.disabledGestures.get(t);void 0!==n&&n.delete(e)},t.prototype.disableScroll=function(t){this.disabledScroll.add(t),1===this.disabledScroll.size&&document.body.classList.add(u)},t.prototype.enableScroll=function(t){this.disabledScroll.delete(t),0===this.disabledScroll.size&&document.body.classList.remove(u)},t.prototype.canStart=function(t){return void 0===this.capturedId&&!this.isDisabled(t)},t.prototype.isCaptured=function(){return void 0!==this.capturedId},t.prototype.isScrollDisabled=function(){return this.disabledScroll.size>0},t.prototype.isDisabled=function(t){var e=this.disabledGestures.get(t);return!!(e&&e.size>0)},t.prototype.newID=function(){return this.gestureId++,this.gestureId},t}(),s=function(){function t(t,e,n,i,r){this.id=e,this.name=n,this.disableScroll=r,this.priority=1e6*i+e,this.ctrl=t}return t.prototype.canStart=function(){return!!this.ctrl&&this.ctrl.canStart(this.name)},t.prototype.start=function(){return!!this.ctrl&&this.ctrl.start(this.name,this.id,this.priority)},t.prototype.capture=function(){if(!this.ctrl)return!1;var t=this.ctrl.capture(this.name,this.id,this.priority);return t&&this.disableScroll&&this.ctrl.disableScroll(this.id),t},t.prototype.release=function(){this.ctrl&&(this.ctrl.release(this.id),this.disableScroll&&this.ctrl.enableScroll(this.id))},t.prototype.destroy=function(){this.release(),this.ctrl=void 0},t}(),a=function(){function t(t,e,n,i){this.id=e,this.disable=n,this.disableScroll=i,this.ctrl=t}return t.prototype.block=function(){if(this.ctrl){if(this.disable)for(var t=0,e=this.disable;t<e.length;t++){var n=e[t];this.ctrl.disableGesture(n,this.id)}this.disableScroll&&this.ctrl.disableScroll(this.id)}},t.prototype.unblock=function(){if(this.ctrl){if(this.disable)for(var t=0,e=this.disable;t<e.length;t++){var n=e[t];this.ctrl.enableGesture(n,this.id)}this.disableScroll&&this.ctrl.enableScroll(this.id)}},t.prototype.destroy=function(){this.unblock(),this.ctrl=void 0},t}(),u="backdrop-no-scroll",c=new o;function d(t,e,n,r){var o,s,a=function(t){if(void 0===i)try{var e=Object.defineProperty({},"passive",{get:function(){i=!0}});t.addEventListener("optsTest",function(){},e)}catch(n){i=!1}return!!i}(t)?{capture:!!r.capture,passive:!!r.passive}:!!r.capture;return t.__zone_symbol__addEventListener?(o="__zone_symbol__addEventListener",s="__zone_symbol__removeEventListener"):(o="addEventListener",s="removeEventListener"),t[o](e,n,a),function(){t[s](e,n,a)}}var l=2e3;function h(t){return t instanceof Document?t:t.ownerDocument}function p(t){var e=Object.assign({disableScroll:!1,direction:"x",gesturePriority:0,passive:!0,maxAngle:40,threshold:10},t),n=e.canStart,i=e.onWillStart,o=e.onStart,s=e.onEnd,a=e.notCaptured,u=e.onMove,p=e.threshold,v={type:"pan",startX:0,startY:0,startTimeStamp:0,currentX:0,currentY:0,velocityX:0,velocityY:0,deltaX:0,deltaY:0,timeStamp:0,event:void 0,data:void 0},g=function(t,e,n,i,r){var o,s,a,u,c,p,f,m=0;function b(i){m=Date.now()+l,e(i)&&(!s&&n&&(s=d(t,"touchmove",n,r)),a||(a=d(t,"touchend",g,r)),u||(u=d(t,"touchcancel",g,r)))}function v(i){m>Date.now()||e(i)&&(!p&&n&&(p=d(h(t),"mousemove",n,r)),f||(f=d(h(t),"mouseup",y,r)))}function g(t){w(),i&&i(t)}function y(t){_(),i&&i(t)}function w(){s&&s(),a&&a(),u&&u(),s=a=u=void 0}function _(){p&&p(),f&&f(),p=f=void 0}function x(){w(),_()}function O(e){e?(o&&o(),c&&c(),o=c=void 0,x()):(o||(o=d(t,"touchstart",b,r)),c||(c=d(t,"mousedown",v,r)))}return{setDisabled:O,stop:x,destroy:function(){O(!0),i=n=e=void 0}}}(e.el,function(t){var e=b(t);if(x||!O)return!1;if(m(t,v),v.startX=v.currentX,v.startY=v.currentY,v.startTimeStamp=v.timeStamp=e,v.velocityX=v.velocityY=v.deltaX=v.deltaY=0,v.event=t,n&&!1===n(v))return!1;if(w.release(),!w.start())return!1;if(x=!0,0===p)return E();return y.start(v.startX,v.startY),!0},function(t){if(_)return void(!S&&O&&(S=!0,f(v,t),Object(r.u)(k)));f(v,t),y.detect(v.currentX,v.currentY)&&(y.isGesture()&&E()||(A(),g.stop(),a&&a(v)))},C,{capture:!1}),y=function(t,e,n){var i=n*(Math.PI/180),r="x"===t,o=Math.cos(i),s=e*e,a=0,u=0,c=!1,d=0;return{start:function(t,e){a=t,u=e,d=0,c=!0},detect:function(t,e){if(!c)return!1;var n=t-a,i=e-u,l=n*n+i*i;if(l<s)return!1;var h=Math.sqrt(l),p=(r?n:i)/h;return d=p>o?1:p<-o?-1:0,c=!1,!0},isGesture:function(){return 0!==d},getDirection:function(){return d}}}(e.direction,e.threshold,e.maxAngle),w=c.createGesture({name:t.gestureName,priority:t.gesturePriority,disableScroll:t.disableScroll}),_=!1,x=!1,O=!0,S=!1;function k(){_&&(S=!1,u&&u(v))}function E(){return!(w&&!w.capture())&&(_=!0,O=!1,v.startX=v.currentX,v.startY=v.currentY,v.startTimeStamp=v.timeStamp,i?i(v).then(j):j(),!0)}function j(){o&&o(v),O=!0}function A(){_=!1,x=!1,S=!1,O=!0,w.release()}function C(t){var e=_,n=O;A(),n&&(f(v,t),e?s&&s(v):a&&a(v))}return{setDisabled:function(t){t&&_&&C(void 0),g.setDisabled(t)},destroy:function(){w.destroy(),g.destroy()}}}function f(t,e){if(e){var n=t.currentX,i=t.currentY,r=t.timeStamp;m(e,t);var o=t.currentX,s=t.currentY,a=(t.timeStamp=b(e))-r;if(a>0&&a<100){var u=(o-n)/a,c=(s-i)/a;t.velocityX=.7*u+.3*t.velocityX,t.velocityY=.7*c+.3*t.velocityY}t.deltaX=o-t.startX,t.deltaY=s-t.startY,t.event=e}}function m(t,e){var n=0,i=0;if(t){var r=t.changedTouches;if(r&&r.length>0){var o=r[0];n=o.clientX,i=o.clientY}else void 0!==t.pageX&&(n=t.pageX,i=t.pageY)}e.currentX=n,e.currentY=i}function b(t){return t.timeStamp||Date.now()}}}]);
//# sourceMappingURL=25.94ed4c22.chunk.js.map