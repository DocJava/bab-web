(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{883:function(t,e,n){"use strict";n.r(e),n.d(e,"ion_textarea",function(){return l});var i=n(6),o=n(10),r=n(890),a=n(891),l=function(){function t(t){var e=this;Object(o.r)(this,t),this.inputId="ion-input-"+s++,this.didBlurAfterEdit=!1,this.hasFocus=!1,this.autocapitalize="none",this.autofocus=!1,this.clearOnEdit=!1,this.debounce=0,this.disabled=!1,this.name=this.inputId,this.readonly=!1,this.required=!1,this.spellcheck=!1,this.autoGrow=!1,this.value="",this.onInput=function(t){e.nativeInput&&(e.value=e.nativeInput.value),e.emitStyle(),e.ionInput.emit(t)},this.onFocus=function(){e.hasFocus=!0,e.focusChange(),e.ionFocus.emit()},this.onBlur=function(){e.hasFocus=!1,e.focusChange(),e.ionBlur.emit()},this.onKeyDown=function(){e.checkClearOnEdit()},this.ionChange=Object(o.g)(this,"ionChange",7),this.ionInput=Object(o.g)(this,"ionInput",7),this.ionStyle=Object(o.g)(this,"ionStyle",7),this.ionBlur=Object(o.g)(this,"ionBlur",7),this.ionFocus=Object(o.g)(this,"ionFocus",7),this.ionInputDidLoad=Object(o.g)(this,"ionInputDidLoad",7),this.ionInputDidUnload=Object(o.g)(this,"ionInputDidUnload",7)}return t.prototype.debounceChanged=function(){this.ionChange=Object(a.d)(this.ionChange,this.debounce)},t.prototype.disabledChanged=function(){this.emitStyle()},t.prototype.valueChanged=function(){var t=this.nativeInput,e=this.getValue();t&&t.value!==e&&(t.value=e),this.runAutoGrow(),this.emitStyle(),this.ionChange.emit({value:e})},t.prototype.componentWillLoad=function(){this.emitStyle()},t.prototype.componentDidLoad=function(){this.debounceChanged(),this.runAutoGrow(),this.ionInputDidLoad.emit()},t.prototype.runAutoGrow=function(){this.nativeInput&&this.autoGrow&&(this.nativeInput.style.height="inherit",this.nativeInput.style.height=this.nativeInput.scrollHeight+"px")},t.prototype.componentDidUnload=function(){this.ionInputDidUnload.emit()},t.prototype.setFocus=function(){return i.__awaiter(this,void 0,void 0,function(){return i.__generator(this,function(t){return this.nativeInput&&this.nativeInput.focus(),[2]})})},t.prototype.getInputElement=function(){return Promise.resolve(this.nativeInput)},t.prototype.emitStyle=function(){this.ionStyle.emit({interactive:!0,textarea:!0,input:!0,"interactive-disabled":this.disabled,"has-placeholder":null!=this.placeholder,"has-value":this.hasValue(),"has-focus":this.hasFocus})},t.prototype.checkClearOnEdit=function(){this.clearOnEdit&&(this.didBlurAfterEdit&&this.hasValue()&&(this.value=""),this.didBlurAfterEdit=!1)},t.prototype.focusChange=function(){this.clearOnEdit&&!this.hasFocus&&this.hasValue()&&(this.didBlurAfterEdit=!0),this.emitStyle()},t.prototype.hasValue=function(){return""!==this.getValue()},t.prototype.getValue=function(){return this.value||""},t.prototype.hostData=function(){var t,e=Object(o.f)(this);return{"aria-disabled":this.disabled?"true":null,class:Object.assign({},Object(r.a)(this.color),(t={},t[""+e]=!0,t))}},t.prototype.__stencil_render=function(){var t=this,e=this.getValue(),n=this.inputId+"-lbl",i=Object(a.f)(this.el);return i&&(i.id=n),Object(o.j)("textarea",{class:"native-textarea",ref:function(e){return t.nativeInput=e},autoCapitalize:this.autocapitalize,autoFocus:this.autofocus,disabled:this.disabled,maxLength:this.maxlength,minLength:this.minlength,name:this.name,placeholder:this.placeholder||"",readOnly:this.readonly,required:this.required,spellCheck:this.spellcheck,cols:this.cols,rows:this.rows,wrap:this.wrap,onInput:this.onInput,onBlur:this.onBlur,onFocus:this.onFocus,onKeyDown:this.onKeyDown},e)},Object.defineProperty(t.prototype,"el",{get:function(){return Object(o.l)(this)},enumerable:!0,configurable:!0}),Object.defineProperty(t,"watchers",{get:function(){return{debounce:["debounceChanged"],disabled:["disabledChanged"],value:["valueChanged"]}},enumerable:!0,configurable:!0}),t.prototype.render=function(){return Object(o.j)(o.a,this.hostData(),this.__stencil_render())},Object.defineProperty(t,"style",{get:function(){return".sc-ion-textarea-md-h{--background:initial;--color:initial;--placeholder-color:initial;--placeholder-font-style:initial;--placeholder-font-weight:initial;--placeholder-opacity:.5;--padding-top:0;--padding-bottom:0;--padding-start:0;--border-radius:0;display:block;position:relative;-ms-flex:1;flex:1;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box;background:var(--background);color:var(--color);font-family:var(--ion-font-family,inherit);z-index:2}.ion-color.sc-ion-textarea-md-h{background:initial;color:var(--ion-color-base)}ion-item.sc-ion-textarea-md-h, ion-item .sc-ion-textarea-md-h{-ms-flex-item-align:baseline;align-self:baseline}ion-item.sc-ion-textarea-md-h:not(.item-label), ion-item:not(.item-label) .sc-ion-textarea-md-h{--padding-start:0}.native-textarea.sc-ion-textarea-md{border-radius:var(--border-radius);margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:block;width:100%;max-width:100%;max-height:100%;border:0;outline:none;background:transparent;-webkit-box-sizing:border-box;box-sizing:border-box;resize:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;white-space:pre-wrap}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.native-textarea.sc-ion-textarea-md{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.native-textarea.sc-ion-textarea-md::-webkit-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-textarea.sc-ion-textarea-md::-moz-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-textarea.sc-ion-textarea-md:-ms-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-textarea.sc-ion-textarea-md::-ms-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-textarea.sc-ion-textarea-md::placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-textarea[disabled].sc-ion-textarea-md{opacity:.4}.cloned-input.sc-ion-textarea-md{left:0;top:0;position:absolute;pointer-events:none}[dir=rtl].sc-ion-textarea-md-h .cloned-input.sc-ion-textarea-md, [dir=rtl] .sc-ion-textarea-md-h .cloned-input.sc-ion-textarea-md, [dir=rtl].sc-ion-textarea-md .cloned-input.sc-ion-textarea-md{left:unset;right:unset;right:0}.sc-ion-textarea-md-h{--padding-top:10px;--padding-end:0;--padding-bottom:11px;--padding-start:8px;margin-left:0;margin-right:0;margin-top:8px;margin-bottom:0;font-size:inherit}.item-label-floating.sc-ion-textarea-md-h, .item-label-floating .sc-ion-textarea-md-h, .item-label-stacked.sc-ion-textarea-md-h, .item-label-stacked .sc-ion-textarea-md-h{--padding-top:8px;--padding-bottom:8px;--padding-start:0}"},enumerable:!0,configurable:!0}),t}(),s=0},890:function(t,e,n){"use strict";n.d(e,"a",function(){return r}),n.d(e,"b",function(){return a}),n.d(e,"c",function(){return o}),n.d(e,"d",function(){return s});var i=n(6);function o(t,e){return null!==e.closest(t)}function r(t){var e;return"string"===typeof t&&t.length>0?((e={"ion-color":!0})["ion-color-"+t]=!0,e):void 0}function a(t){var e={};return function(t){return void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter(function(t){return null!=t}).map(function(t){return t.trim()}).filter(function(t){return""!==t}):[]}(t).forEach(function(t){return e[t]=!0}),e}var l=/^[a-z][a-z0-9+\-.]*:/;function s(t,e,n,o){return i.__awaiter(this,void 0,void 0,function(){var r;return i.__generator(this,function(i){switch(i.label){case 0:return null==e||"#"===e[0]||l.test(e)?[3,2]:(r=t.document.querySelector("ion-router"))?(null!=n&&n.preventDefault(),[4,r.componentOnReady()]):[3,2];case 1:return i.sent(),[2,r.push(e,o)];case 2:return[2,!1]}})})}},891:function(t,e,n){"use strict";function i(t){"requestIdleCallback"in window?window.requestIdleCallback(t):setTimeout(t,32)}function o(t){return!!t.shadowRoot&&!!t.attachShadow}function r(t){var e=t.closest("ion-item");return e?e.querySelector("ion-label"):null}function a(t,e,n,i,r){if(t||o(e)){var a=e.querySelector("input.aux-input");a||((a=e.ownerDocument.createElement("input")).type="hidden",a.classList.add("aux-input"),e.appendChild(a)),a.disabled=r,a.name=n,a.value=i||""}}function l(t,e,n){return Math.max(t,Math.min(e,n))}function s(t,e){if(!t){var n="ASSERT: "+e;throw console.error(n),new Error(n)}}function d(t){return t.timeStamp||Date.now()}function c(t){if(t){var e=t.changedTouches;if(e&&e.length>0){var n=e[0];return{x:n.clientX,y:n.clientY}}if(void 0!==t.pageX)return{x:t.pageX,y:t.pageY}}return{x:0,y:0}}function u(t,e){var n="rtl"===t.document.dir;switch(e){case"start":return n;case"end":return!n;default:throw new Error('"'+e+'" is not a valid value for [side]. Use "start" or "end" instead.')}}function h(t,e){var n=t._original||t;return{_original:t,emit:p(n.emit.bind(n),e)}}function p(t,e){var n;return void 0===e&&(e=0),function(){for(var i=[],o=0;o<arguments.length;o++)i[o]=arguments[o];clearTimeout(n),n=setTimeout.apply(void 0,[t,e].concat(i))}}n.d(e,"a",function(){return i}),n.d(e,"b",function(){return s}),n.d(e,"c",function(){return l}),n.d(e,"d",function(){return h}),n.d(e,"e",function(){return p}),n.d(e,"f",function(){return r}),n.d(e,"g",function(){return o}),n.d(e,"h",function(){return u}),n.d(e,"i",function(){return d}),n.d(e,"j",function(){return c}),n.d(e,"k",function(){return a})}}]);
//# sourceMappingURL=45.3d8c9f6f.chunk.js.map