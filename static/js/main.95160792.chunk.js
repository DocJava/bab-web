(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{742:function(e,t,n){e.exports=n(794)},753:function(e,t,n){},754:function(e,t,n){},784:function(e,t,n){var a={"./ion-action-sheet-controller.entry.js":[807,85],"./ion-action-sheet-ios.entry.js":[808,63],"./ion-action-sheet-md.entry.js":[809,64],"./ion-alert-controller.entry.js":[810,86],"./ion-alert-ios.entry.js":[811,48],"./ion-alert-md.entry.js":[812,49],"./ion-anchor_2-ios.entry.js":[813,65],"./ion-anchor_2-md.entry.js":[814,66],"./ion-app_7-ios.entry.js":[815,26],"./ion-app_7-md.entry.js":[816,27],"./ion-avatar_3-ios.entry.js":[817,67],"./ion-avatar_3-md.entry.js":[818,68],"./ion-backdrop-ios.entry.js":[819,46],"./ion-backdrop-md.entry.js":[820,47],"./ion-button_2-ios.entry.js":[821,28],"./ion-button_2-md.entry.js":[822,29],"./ion-card_5-ios.entry.js":[823,69],"./ion-card_5-md.entry.js":[824,70],"./ion-checkbox-ios.entry.js":[825,30],"./ion-checkbox-md.entry.js":[826,31],"./ion-chip-ios.entry.js":[827,71],"./ion-chip-md.entry.js":[828,72],"./ion-col_3.entry.js":[829,87],"./ion-datetime_4-ios.entry.js":[830,18],"./ion-datetime_4-md.entry.js":[831,19],"./ion-fab_3-ios.entry.js":[832,73],"./ion-fab_3-md.entry.js":[833,74],"./ion-img.entry.js":[834,88],"./ion-infinite-scroll_2-ios.entry.js":[835,59],"./ion-infinite-scroll_2-md.entry.js":[836,60],"./ion-input-ios.entry.js":[837,32],"./ion-input-md.entry.js":[838,33],"./ion-item-option_3-ios.entry.js":[839,34],"./ion-item-option_3-md.entry.js":[840,35],"./ion-item_8-ios.entry.js":[841,75],"./ion-item_8-md.entry.js":[842,76],"./ion-loading-controller.entry.js":[843,89],"./ion-loading-ios.entry.js":[844,50],"./ion-loading-md.entry.js":[845,51],"./ion-menu_4-ios.entry.js":[846,24],"./ion-menu_4-md.entry.js":[847,25],"./ion-modal-controller.entry.js":[848,90],"./ion-modal-ios.entry.js":[849,14],"./ion-modal-md.entry.js":[850,15],"./ion-nav_4.entry.js":[851,12],"./ion-popover-controller.entry.js":[852,91],"./ion-popover-ios.entry.js":[853,16],"./ion-popover-md.entry.js":[854,17],"./ion-progress-bar-ios.entry.js":[855,36],"./ion-progress-bar-md.entry.js":[856,37],"./ion-radio_2-ios.entry.js":[857,38],"./ion-radio_2-md.entry.js":[858,39],"./ion-range-ios.entry.js":[859,40],"./ion-range-md.entry.js":[860,41],"./ion-refresher_2-ios.entry.js":[861,61],"./ion-refresher_2-md.entry.js":[862,62],"./ion-reorder_2-ios.entry.js":[863,57],"./ion-reorder_2-md.entry.js":[864,58],"./ion-ripple-effect.entry.js":[865,92],"./ion-route_4.entry.js":[866,13],"./ion-searchbar-ios.entry.js":[867,22],"./ion-searchbar-md.entry.js":[868,23],"./ion-segment_2-ios.entry.js":[869,77],"./ion-segment_2-md.entry.js":[870,78],"./ion-select_3-ios.entry.js":[871,42],"./ion-select_3-md.entry.js":[872,43],"./ion-slide_2-ios.entry.js":[873,55],"./ion-slide_2-md.entry.js":[874,56],"./ion-spinner.entry.js":[875,79],"./ion-split-pane-ios.entry.js":[876,93],"./ion-split-pane-md.entry.js":[877,94],"./ion-tab-bar_2-ios.entry.js":[878,80],"./ion-tab-bar_2-md.entry.js":[879,81],"./ion-tab_2.entry.js":[880,54],"./ion-text.entry.js":[881,82],"./ion-textarea-ios.entry.js":[882,44],"./ion-textarea-md.entry.js":[883,45],"./ion-toast-controller.entry.js":[884,95],"./ion-toast-ios.entry.js":[885,52],"./ion-toast-md.entry.js":[886,53],"./ion-toggle-ios.entry.js":[887,20],"./ion-toggle-md.entry.js":[888,21],"./ion-virtual-scroll.entry.js":[889,96]};function r(e){if(!n.o(a,e))return Promise.resolve().then(function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t});var t=a[e],r=t[0];return n.e(t[1]).then(function(){return n(r)})}r.keys=function(){return Object.keys(a)},r.id=784,e.exports=r},794:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(21),l=n.n(o),c=n(3),s=n(16),u=n(738),i=n.n(u),m=(n(753),n(7)),d=(n(754),n(11)),p=n.n(d),y=n(23),b=n(18),E=n.n(b),f=n(739),j=n.n(f),v="https://bab.moepas.com/api/",I="members",h="players",O="courts",g="players/add",C="players/delete",_="courts/register",N="FETCH_MEMBERS",w="FETCH_PLAYERS",k="FETCH_COURTS",L="CREATE_PLAYER",A="REMOVE_PLAYER",P="UPDATE_PLAYER",R="CREATE_COURT",T="SELECT_PLAYER",S="DESELECT_PLAYERS",x="START_UPDATING_PLAYER",M="CANCEL_PLAYER_UPDATE",F="SELECT_MEMBER",B="SELECT_COURT_RANDOMS",U="FILTER_PLAYER",H="FILTER_MEMBER",D="CANCEL_MEMBER_CREATE",Y="SET_TOAST",z="CLEAR_TOAST";function G(){var e=J(h);return{type:w,payload:e}}function J(e){return E.a.get(v+e)}function W(){return{type:S}}function q(){return(q=Object(y.a)(p.a.mark(function e(t,n,a){var r;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r={type:Y,payload:"Unable to update player"},e.next=3,V(t);case 3:if(e.sent.type!==Y){e.next=6;break}return e.abrupt("return",r);case 6:return e.next=8,K({name:n,password:a});case 8:if(e.sent.type!==Y){e.next=11;break}return e.abrupt("return",r);case 11:return e.abrupt("return",{type:P,payload:{player:t,name:n,password:a}});case 12:case"end":return e.stop()}},e)}))).apply(this,arguments)}function V(e){return $.apply(this,arguments)}function $(){return($=Object(y.a)(p.a.mark(function e(t){var n,a;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=A,a=null,e.next=4,E.a.post(v+C,t).then(function(){a=t}).catch(function(e){console.log(e),n=Y,a="Unable to delete the player"});case 4:return e.abrupt("return",{type:n,payload:a});case 5:case"end":return e.stop()}},e)}))).apply(this,arguments)}function K(e){return Q.apply(this,arguments)}function Q(){return(Q=Object(y.a)(p.a.mark(function e(t){var n,a;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=L,a=null,e.next=4,E.a.post(v+g,t).then(function(){a=t}).catch(function(e){console.log(e),n=Y,a="Unable to create the player"});case 4:return e.abrupt("return",{type:n,payload:a});case 5:case"end":return e.stop()}},e)}))).apply(this,arguments)}function X(){return(X=Object(y.a)(p.a.mark(function e(t){var n,a;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=R,a=null,e.next=4,E.a.post(v+_,t).then(function(e){a=e}).catch(function(e){console.log(e),n=Y,a="Unable to create the court"});case 4:return e.abrupt("return",{type:n,payload:a});case 5:case"end":return e.stop()}},e)}))).apply(this,arguments)}E.a.interceptors.request.use(function(e){return e.headers["Content-type"]="application/x-www-form-urlencoded",e.data=j.a.stringify(e.data),e});var Z=n(1);function ee(e){var t=e.member,n=e.highlighted,a=Object(c.b)(),o=t.isNew?'Create password for: "'.concat(t.name,'"'):t.name;return r.a.createElement(Z.IonLabel,{onClick:function(){n||a(function(e){return{type:F,payload:e}}(t))},"data-toggle":"modal","data-target":"#pageModal"},o)}function te(e){var t=e.children,n=void 0===t?r.a.createElement(re,null):t,a=e.modalId,o=void 0===a?"pageModal":a;return r.a.createElement("div",{className:"modal fade",id:o,role:"dialog","data-backdrop":"false"},r.a.createElement("div",{className:"modal-dialog modal-dialog-scrollable modal-dialog-centered",role:"document"},r.a.createElement("div",{className:"modal-content"},n)))}function ne(e){var t=e.children;return r.a.createElement("div",{className:"modal-header"},t)}function ae(e){var t=e.onCancel,n=e.onSuccess,a=e.successEnabled,o=void 0===a||a;return r.a.createElement("div",{className:"modal-footer"},r.a.createElement(Z.IonItem,{className:"w-100",lines:"none"},r.a.createElement(Z.IonButton,{color:"danger",onClick:t,slot:"start",size:"medium","data-dismiss":"modal"},r.a.createElement(Z.IonIcon,{slot:"icon-only",name:"remove-circle"})),r.a.createElement(Z.IonButton,{color:"success",onClick:n,disabled:!o,slot:"end","data-dismiss":"modal",size:"medium"},r.a.createElement(Z.IonIcon,{slot:"icon-only",name:"checkmark-circle"}))))}function re(e){var t=e.children;return r.a.createElement("div",{className:"modal-body"},t)}var oe=["mouse","ox","tiger","rabbit","dragon","snake","horse","goat","monkey","rooster","dog","pig","cat"];function le(e){var t=e.selectedPassword,n=e.updatePassword,a=function(e){return e===t?"medium":"light"},o=function(e){return function(){return n(e)}};return r.a.createElement("div",{className:"d-inline-flex flex-wrap justify-content-center"},oe.map(function(e){return r.a.createElement(Z.IonButton,{color:a(e),onClick:o(e),key:e},e)}))}function ce(){var e=Object(c.b)(),t=Object(c.c)(function(e){return e.selected.memberToCreate}),n=Object(a.useState)(""),o=Object(m.a)(n,2),l=o[0],s=o[1];return r.a.createElement(te,null,r.a.createElement(re,null,r.a.createElement(Z.IonCardHeader,null,r.a.createElement(Z.IonCardTitle,null,t.name)),r.a.createElement(le,{selectedPassword:l,updatePassword:s}),r.a.createElement(ae,{onCancel:function(){return e({type:D})},onSuccess:function(){return e(K({name:t.name,password:l}))}})))}function se(e){var t=e.updateScreenInfoCallBack;return r.a.createElement(Z.IonRefresher,{slot:"fixed",onIonRefresh:function(e){t().then(function(){return e.detail.complete()})}},r.a.createElement(Z.IonRefresherContent,null))}function ue(){var e=Object(c.c)(function(e){return e.people.filteredMembers||e.people.chunkedMembers}),t=Object(c.b)();function n(){return t(function(){var e=J(I);return{type:N,payload:e}}())}Object(a.useEffect)(function(){n()},[]);return r.a.createElement(r.a.Fragment,null,r.a.createElement(se,{updateScreenInfoCallBack:n}),r.a.createElement(Z.IonGrid,{title:"Members"},e.map(function(e){return r.a.createElement(Z.IonRow,null,e.map(function(e){return r.a.createElement(Z.IonCol,null,function(e){return e?r.a.createElement(ee,{member:e,key:e._id,isNewMember:e.isNew}):r.a.createElement("span",null)}(e))}))})),r.a.createElement(ce,null))}function ie(){var e=Object(c.b)(),t=Object(c.c)(function(e){return e.selected.memberNameFilter});return r.a.createElement(Z.IonFooter,null,r.a.createElement(Z.IonToolbar,null,r.a.createElement(Z.IonSearchbar,{style:{"--placeholder-color":"blue"},placeholder:"Filter or add Member",value:t,onIonInput:function(t){return e((n=t.target.value,{type:H,payload:n}));var n}})))}function me(e){var t=e.player,n=Object(c.b)();return r.a.createElement(Z.IonItemSliding,{value:t._id},r.a.createElement(Z.IonItem,null,r.a.createElement(Z.IonLabel,null,t.name),r.a.createElement("span",{slot:"end",className:"text-muted"},t.password)),r.a.createElement(Z.IonItemOptions,{side:"end"},r.a.createElement(Z.IonItemOption,{color:"light",onClick:function(){return n(function(e){return{type:x,payload:e}}(t))},"data-toggle":"modal","data-target":"#playerEditModal"},r.a.createElement(Z.IonIcon,{slot:"icon-only",name:"create"})),r.a.createElement(Z.IonItemOption,{color:"danger",onClick:function(){return n(V(t))}},r.a.createElement(Z.IonIcon,{slot:"icon-only",name:"close"}))))}function de(){var e=Object(c.b)(),t=Object(c.c)(function(e){return e.selected.playerToUpdate}),n=Object(a.useState)(t.password),o=Object(m.a)(n,2),l=o[0],s=o[1],u=Object(a.useState)(t.name),i=Object(m.a)(u,2),d=i[0],p=i[1];return r.a.createElement(te,{modalId:"playerEditModal"},r.a.createElement(re,null,r.a.createElement(Z.IonCardHeader,{className:"mb-2"},r.a.createElement(Z.IonCardTitle,null,t.name," : ",t.password)),r.a.createElement(Z.IonItem,{lines:"none"},r.a.createElement("span",{className:"mr-2 text-muted"},"Name:"),r.a.createElement(Z.IonInput,{placeholder:"Enter Name",value:d,onIonChange:function(e){return p(e.target.value)}})),r.a.createElement(le,{selectedPassword:l,updatePassword:s}),r.a.createElement(Z.IonItemDivider,null),r.a.createElement(Z.IonItem,{lines:"full"},r.a.createElement(Z.IonLabel,null,r.a.createElement("span",{className:"text-muted"},"Is this correct?")," ",d," : ",l))),r.a.createElement(ae,{onCancel:function(){return e({type:M})},onSuccess:function(){return e(function(e,t,n){return q.apply(this,arguments)}(t,d,l))}}))}function pe(){var e=Object(c.b)(),t=Object(a.useState)(""),n=Object(m.a)(t,2),o=n[0],l=n[1],s=Object(a.useState)(""),u=Object(m.a)(s,2),i=u[0],d=u[1],p=function(){l(""),d("")},y=i&&o;return r.a.createElement(te,null,r.a.createElement(re,null,r.a.createElement(Z.IonCardHeader,{className:"mb-2"},r.a.createElement(Z.IonCardTitle,null,"Create new Player")),r.a.createElement(Z.IonItem,{lines:"none"},r.a.createElement("span",{className:"mr-2 text-muted"},"Name:"),r.a.createElement(Z.IonInput,{placeholder:"Enter Name",value:i,onIonChange:function(e){return d(e.target.value)}})),r.a.createElement(le,{selectedPassword:o,updatePassword:l}),r.a.createElement(Z.IonItemDivider,null),r.a.createElement(Z.IonItem,{lines:"full"},r.a.createElement(Z.IonLabel,null,r.a.createElement("span",{className:"text-muted"},"Is this correct?")," ",i," : ",o))),r.a.createElement(ae,{onCancel:p,onSuccess:function(){e(K({name:i,password:o})),p()},successEnabled:y}))}function ye(){var e=Object(c.b)(),t=Object(c.c)(function(e){return e.selected.playerNameFilter});return r.a.createElement(Z.IonFooter,null,r.a.createElement(Z.IonToolbar,null,r.a.createElement(Z.IonSearchbar,{style:{"--placeholder-color":"red"},placeholder:"Filter or add Player",value:t,onIonInput:function(t){return e((n=t.target.value,{type:U,payload:n}));var n}})))}function be(){var e=Object(c.c)(function(e){return e.people.filteredPlayers||e.people.partitionedPlayers}),t=Object(m.a)(e,2),n=t[0],o=t[1],l=Object(c.b)();function s(){return l(G())}return Object(a.useEffect)(function(){s()},[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(se,{updateScreenInfoCallBack:s}),r.a.createElement(Z.IonList,null,r.a.createElement(Z.IonListHeader,null,r.a.createElement(Z.IonLabel,null,"Available players")),o.map(function(e){return r.a.createElement(me,{player:e,key:e._id})}),r.a.createElement(Z.IonListHeader,null,r.a.createElement(Z.IonLabel,null,"Players in use")),n.map(function(e){return r.a.createElement(me,{player:e,key:e._id})})),r.a.createElement(de,null),r.a.createElement(pe,null))}function Ee(e){var t=e.court;return r.a.createElement(Z.IonCard,null,r.a.createElement(Z.IonItem,null,r.a.createElement(Z.IonCardSubtitle,null,"Court ",t.courtNumber)),r.a.createElement("div",{className:"card-body py-3"},t.time))}var fe=n(2),je=n.n(fe);function ve(e){var t=e.player,n=(e.ignoreEdit,Object(c.c)(function(e){return e.selected.players})),a=Object(c.b)(),o=je.a.has(n,t._id),l=o?"success":"dark";return r.a.createElement(Z.IonItem,{onClick:function(){return a(function(e){return{type:T,payload:e}}(t))}},r.a.createElement(Z.IonCheckbox,{className:"mr-1",checked:o}),r.a.createElement(Z.IonLabel,{color:l},t.name),r.a.createElement("span",{slot:"end",className:"text-muted"},t.password))}function Ie(){var e=Object(c.c)(function(e){return e.people.filteredPlayers||e.people.partitionedPlayers}),t=Object(m.a)(e,2),n=(t[0],t[1]),o=Object(c.c)(function(e){return e.selected.useCourtRandoms}),l=Object(c.b)();Object(a.useEffect)(function(){l(G())},[]);var s=o?"Randoms":r.a.createElement("strike",null,"Randoms");return r.a.createElement(Z.IonList,null,r.a.createElement(Z.IonListHeader,{lines:"none"},"Use Randoms?",r.a.createElement(Z.IonButton,{checked:o,onclick:function(){!o&&l(W()),l({type:B})},size:"small",children:s})),r.a.createElement(Z.IonListHeader,null,r.a.createElement(Z.IonLabel,null,"Available players")),n.map(function(e){return r.a.createElement(ve,{player:e,key:e._id})}))}function he(){var e=Object(c.b)(),t=Object(a.useState)(0),n=Object(m.a)(t,2),o=n[0],l=n[1],s=Object(a.useState)(0),u=Object(m.a)(s,2),i=u[0],d=u[1],p=Object(c.c)(function(e){return e.selected.playerNames}),y=Object(c.c)(function(e){return e.selected.useCourtRandoms}),b=Object(c.c)(function(e){return e.selected.courtCreatable});return r.a.createElement(te,null,r.a.createElement(ne,null,r.a.createElement(Z.IonItem,{lines:"none"},r.a.createElement("span",{className:"mr-2 text-muted"},"Court Number:"),r.a.createElement(Z.IonInput,{placeholder:"Enter Court Number",type:"number",value:o,onIonChange:function(e){return l(e.target.value)}})),r.a.createElement(Z.IonItem,{lines:"none"},r.a.createElement("span",{className:"mr-2 text-muted"},"Delay:"),r.a.createElement(Z.IonInput,{placeholder:"Enter Delay",type:"number",value:i,onIonChange:function(e){return d(e.target.value)}}))),r.a.createElement(re,null,r.a.createElement(Ie,null)),r.a.createElement(ae,{onCancel:function(){return e(W())},onSuccess:function(){e(function(e){return X.apply(this,arguments)}({courtNumber:o,names:p,delay:i,randoms:y})),e(W())},successEnabled:b}))}var Oe=12e4;function ge(){var e=Object(c.c)(function(e){return e.courts}),t=e.current,n=e.upcoming,o=Object(c.b)();function l(){return o(function(){var e=J(O);return{type:k,payload:e}}()).then(function(){return o(G())})}Object(a.useEffect)(function(){l()},[]),Object(a.useEffect)(function(){var e=setInterval(l,Oe);return function(){return clearInterval(e)}},[]);var s=function(e,t){return r.a.createElement(r.a.Fragment,null,e.map(function(e){return r.a.createElement(Ee,{court:e,isCurrentCourt:t,key:e.id})}))};return r.a.createElement(r.a.Fragment,null,r.a.createElement(se,{updateScreenInfoCallBack:l}),r.a.createElement(Z.IonList,null,r.a.createElement(Z.IonListHeader,null,r.a.createElement(Z.IonLabel,null,"Current Courts")),s(t,!0),r.a.createElement(Z.IonListHeader,null,r.a.createElement(Z.IonLabel,null,"Upcoming Courts")),s(n,!1)),r.a.createElement(he,null))}n(790),n(791);function Ce(){var e=Object(c.b)(),t=Object(c.c)(function(e){return e.messages.toast});return r.a.createElement(Z.IonToast,{isOpen:!!t,onDidDismiss:function(){return e({type:z})},message:t,duration:800})}var _e="PLAYER_PANE",Ne="COURT_PANE",we="MEMBER_PANE";var ke=n(4),Le=n(25),Ae={members:[],players:[],partitionedPlayers:[[],[]],chunkedMembers:[],filteredPlayers:null,filteredMembers:null,reservedPlayerNames:[],playerNameFilter:null},Pe=3,Re=function(e){return function(t){var n=t.name;return je.a.toLower(n).includes(je.a.toLower(e))}};function Te(e){return 0===e.length?[]:(e=je.a.chunk(e,Pe),je.a.last(e).length!==Pe&&(je.a.last(e)[Pe-1]=void 0),e)}function Se(e,t){return je.a.partition(e,function(e){return je.a.includes(t,e.name)})}function xe(e,t,n){return je.a.isEmpty(n)?null:Se(je.a.filter(e,Re(n)),t)}function Me(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e.players;return Object(ke.a)({},e,{players:t,partitionedPlayers:Se(t,e.reservedPlayerNames),filteredPlayers:xe(t,e.reservedPlayerNames,e.playerNameFilter)})}var Fe={players:{},memberToCreate:{},password:null,playerToUpdate:{},playerNameFilter:null,memberNameFilter:null,playerNames:[],useCourtRandoms:!1,courtCreatable:!1};var Be=n(19),Ue=n.n(Be),He=function(){return new Date};function De(e,t){e=je.a.reject(e,"randoms"),e=je.a.map(e,Ye);var n=function(e){return je.a.reduceRight(e,function(e,t){var n=je.a.last(e);return function(e,t){return e&&e.courtNumber===t.courtNumber&&e.randoms===t.randoms&&e.startAt.milliseconds()===t.endAt.milliseconds()}(n,t)?(n.endAt=t.startAt,n.isCurrentCourt|=t.isCurrentCourt,e):e.concat(t)},[])}(je.a.sortBy(e,["courtNumber","startAt"])),a=je.a.sortBy(n,["startAt"]),r=je.a.partition(a,"isCurrentCourt"),o=Object(m.a)(r,2),l=o[0],c=o[1],s=je.a.map(l,ze),u=je.a.map(c,Ge);return Object(ke.a)({},t,{current:s,upcoming:u,reservations:e})}function Ye(e){return{courtNumber:e.courtNumber,startAt:Ue()(e.startAt).tz("America/Los_Angeles"),endAt:Ue()(e.endAt).tz("America/Los_Angeles"),randoms:e.randoms,isCurrentCourt:He()-e.startAt>=0}}function ze(e){var t=e.courtNumber,n=e.endAt,a=Ue.a.duration(n-He());return{courtNumber:t,time:"".concat(Je(a)," remaining")}}function Ge(e){var t=e.courtNumber,n=e.startAt,a=Ue.a.duration(n-He());return{courtNumber:t,time:"".concat(Je(a)," wait")}}function Je(e){var t="mm";return e.hours&&(t="HH:mm"),Ue.a.utc(e.asMilliseconds()).format(t)}var We=Object(s.c)({selected:function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Fe,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case T:e=n.payload;var a=function(e,t){return je.a.has(e,t._id)?je.a.unset(e,t._id):je.a.values(e).length<2&&je.a.set(e,t._id,t),e}(Object(ke.a)({},t.players),e);return Object(ke.a)({},t,{players:a,playerNames:je.a.map(a,function(e){return je.a.toLower(e.name)}),useCourtRandoms:!1,courtCreatable:je.a.size(a)>=2});case S:return Object(ke.a)({},t,{players:{},playerNames:[]});case x:return e=n.payload,Object(ke.a)({},t,{playerToUpdate:e});case P:case M:return Object(ke.a)({},t,{playerToUpdate:{}});case F:var r=n.payload;return Object(ke.a)({},t,{memberToCreate:r});case B:var o=!t.useCourtRandoms;return Object(ke.a)({},t,{useCourtRandoms:o,courtCreatable:o});case D:return Object(ke.a)({},t,{memberToCreate:{}});case A:return Object(ke.a)({},t,{playerNameFilter:null});case U:var l=n.payload;return Object(ke.a)({},t,{playerNameFilter:l});case H:var c=n.payload;return Object(ke.a)({},t,{memberNameFilter:c})}return t},people:function(){var e,t,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ae,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case w:return t=(e=a.payload)&&e.data&&e.data.players?e.data.players:[],t=je.a.sortBy(t,function(e){return e.name}),t=je.a.each(t,function(e){return e.name=je.a.upperFirst(e.name)}),Me(n,Object(Le.a)(t));case L:var r=a.payload;return(t=n.players).push(r),t=je.a.sortBy(t,function(e){return e.name}),t=je.a.each(t,function(e){return e.name=je.a.upperFirst(e.name)}),Me(n,Object(Le.a)(t));case N:var o=(e=a.payload)&&e.data&&e.data.members?e.data.members:[];o=je.a.sortBy(o,function(e){return e.playerName});var l=Te(o=je.a.each(o,function(e){return e.name=je.a.upperFirst(e.playerName)}));return Object(ke.a)({},n,{members:o,chunkedMembers:l});case U:var c=a.payload;return Object(ke.a)({},n,{playerNameFilter:c,filteredPlayers:xe(n.players,n.reservedPlayerNames,c)});case H:var s=a.payload,u=null;return je.a.isEmpty(s)||(u=Te(u=je.a.filter(n.members,Re(s)))).push([{name:s,_id:"searchedMember",isNew:!0}]),Object(ke.a)({},n,{filteredMembers:u});case D:return Object(ke.a)({},n,{filteredMembers:null});case A:var i=a.payload;return Me(n,je.a.reject(n.players,i));case P:return function(e){var t=e.player,n=e.name,a=e.password;t.name=n,t.password=a}(a.payload),Me(n,Object(Le.a)(n.players));case k:var m=je.a.flatten(je.a.map(a.payload.data.reservations,"players"));return m=je.a.map(m,je.a.upperFirst),Me(Object(ke.a)({},n,{reservedPlayerNames:m}))}return n},courts:function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{current:[],upcoming:[],reservations:[]},n=arguments.length>1?arguments[1]:void 0;switch(n.type){case k:return De(e=n.payload.data.reservations);case R:var a=n.payload.data.reservation;return(e=t.reservations).push(a),De(e)}return t},messages:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{toast:null},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Y:return Object(ke.a)({},e,{toast:t.payload});case z:return Object(ke.a)({},e,{toast:null})}return e}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var qe=Object(s.a)(i.a)(s.d);l.a.render(r.a.createElement(c.a,{store:qe(We)},r.a.createElement(function(){var e=Object(a.useState)(Ne),t=Object(m.a)(e,2),n=t[0],o=t[1],l=null,c=null,s=r.a.createElement(Z.IonFab,{vertical:"bottom",horizontal:"end",slot:"fixed"},r.a.createElement(Z.IonFabButton,{"data-toggle":"modal","data-target":"#pageModal"},r.a.createElement(Z.IonIcon,{name:"add"})));switch(n){case _e:c=r.a.createElement(be,null),l=r.a.createElement(ye,null);break;case Ne:c=r.a.createElement(ge,null);break;case we:l=r.a.createElement(ie,null),c=r.a.createElement(ue,null),s=null}var u=r.a.createElement(Z.IonHeader,null,r.a.createElement(Z.IonToolbar,{class:"header"},r.a.createElement(Z.IonSegment,{onIonChange:function(e){return o(e.detail.value)},value:n},r.a.createElement(Z.IonSegmentButton,{value:Ne},r.a.createElement(Z.IonLabel,null,"Courts")),r.a.createElement(Z.IonSegmentButton,{value:_e},r.a.createElement(Z.IonLabel,null,"Players")),r.a.createElement(Z.IonSegmentButton,{value:we},r.a.createElement(Z.IonLabel,null,"Members"))))),i=r.a.createElement(Z.IonContent,{fullScreen:!0},c,s,r.a.createElement(Ce,null));return r.a.createElement(Z.IonApp,null,u,i,l)},null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[742,10,11]]]);
//# sourceMappingURL=main.95160792.chunk.js.map