if (self.CavalryLogger) { CavalryLogger.start_js(["1Ivxr"]); }

__d("CometFRXQuery$Parameters",[],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:"3015419068493988",metadata:{relayPreloadable:!0},name:"CometFRXQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("CometFileSelector.react",["React","recoverableViolation","stylex"],(function(a,b,c,d,e,f){"use strict";var g=b("React");c=b("React");var h=c.useCallback,i=c.useEffect,j=c.useRef;function k(a){return a.map(function(a){if(a.indexOf("/")!==-1||a[0]===".")return a;b("recoverableViolation")('Accept parameter "'+a+'" for CometFileSelector is being interpreted as a file extension since it has no slash (/), but file extensions must start with a period (.)',"profile_comet");return"."+a}).join(",")}function a(a){var b=a.accept,c=a.children,d=a.multiple;d=d===void 0?!1:d;var e=a.onFilesSelected,f=j(null);i(function(){var a=f.current;if(a!=null){var b=function(a){a.stopPropagation()};a.addEventListener("click",b);return function(){a.removeEventListener("click",b)}}});a=h(function(){f.current!=null&&f.current.click()},[]);var l=h(function(a){e(a.currentTarget.files),a.currentTarget.value=""},[e]);return g.jsxs(g.Fragment,{children:[g.jsx("input",{accept:b!=null?k(b):void 0,className:"mkhogb32",multiple:d,onChange:l,ref:f,type:"file"}),c(a)]})}e.exports=a}),null);
__d("CometFRX.entrypoint",["CometFRXQuery$Parameters","JSResource"],(function(a,b,c,d,e,f){"use strict";a={getPreloadProps:function(a){var c=a.entryPoint,d=a.id,e=a.location;a=a.responsible_id;return{queries:{frx:{parameters:b("CometFRXQuery$Parameters"),variables:{input:{entry_point:c,id:d,location:e,responsible_id:a}}}}}},root:b("JSResource")("CometFRX.react").__setRef("CometFRX.entrypoint")};e.exports=a}),null);
__d("BlueCompatDarkMode",["cx","BlueCompatBroker","CSS","Run"],(function(a,b,c,d,e,f,g){"use strict";var h={setDarkMode:function(){document.body?b("CSS").addClass(document.body,"_8bb_"):b("Run").onAfterLoad(function(){document.body&&b("CSS").addClass(document.body,"_8bb_")})},unsetDarkMode:function(){document.body&&b("CSS").removeClass(document.body,"_8bb_")}};b("BlueCompatBroker").init();b("BlueCompatBroker").register("dark-mode",function(a){a=b("BlueCompatBroker").getMessageEventString(a,"enabled");a==="true"?h.setDarkMode():h.unsetDarkMode()});e.exports=h}),null);
__d("MercuryThreadTimestampReact.re",["MercuryThreadTimestampReact.bs"],(function(a,b,c,d,e,f){(function(a){return null});a=b("MercuryThreadTimestampReact.bs").make;f.make=a}),null);
__d("MessengerAddIconSVGReact.bs",["React"],(function(a,b,c,d,e,f){"use strict";var g=b("React");function a(a){var b=a.label,c=a.className;a=a.customColor;return g.jsx("div",{children:g.jsxs("svg",{children:[g.jsx("title",{children:b}),g.jsx("path",{clipRule:"evenodd",d:"M16,0 V32 M0,16 H32",fill:"none",fillRule:"evenodd",stroke:a,strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2"})],viewBox:"-8 -8 48 48"}),className:c})}c=a;d=a;f.make=c;f.jsComponent=d}),null);
__d("MessengerDeliveryReceipt.bs",["bs_belt_Option","bs_belt_MapString"],(function(a,b,c,d,e,f){"use strict";function a(a,c){return b("bs_belt_Option").getWithDefault(b("bs_belt_MapString").get(a,c),0)}c=b("bs_belt_Option").getWithDefault;f.$pipe$question=c;f.getDeliveryTimeOfThread=a}),null);
__d("MercuryMessageStore",["CurrentUser","LogHistory","MercuryAPIArgsSource","MercuryThreadInformer","MercuryThreadlistConstants","MessengerState.bs","SubscriptionsHandler","mixInEventEmitter","setImmediate"],(function(a,b,c,d,e,f){"use strict";var g=b("LogHistory").getInstance("mercury_message_store");a=function(){function a(a,c,d){var e=this;this.$5=a;this.$1=d||b("CurrentUser").getID();this.$2=1;this.$3=c||b("MercuryThreadlistConstants").RECENT_MESSAGES_LIMIT;this.$6=d?b("MercuryThreadInformer").getForFBID(d):b("MercuryThreadInformer").get();this.$4=new(b("SubscriptionsHandler"))();this.$4.addSubscriptions(this.$6.subscribe("messages-received",function(a,b){return e.$7(b)}),this.$6.subscribe("messages-updated",function(a,b){return b[e.$5]&&e.$8(b[e.$5])}),this.$6.subscribe("messages-deleted",function(a,b){return b[e.$5]&&e.$9(b[e.$5])}),this.$6.subscribe("messages-reordered",function(a,b){return b[e.$5]&&e.$10()}),this.$6.subscribe("thread-invalidated",function(a,b){return b[e.$5]&&e.$11()}));a=this.$12();g.debug("constructed",JSON.stringify({threadID:this.$5,messageCount:a}));a<this.$3?this.$13():b("setImmediate")(function(){e.$10()})}var c=a.prototype;c.destroy=function(){this.$4&&this.$4.release(),g.debug("destroyed",JSON.stringify({threadID:this.$5}))};c.subscribe=function(a){return this.addRetroactiveListener("updated",a)};c.fetchMoreMessages=function(){if(this.hasFetchedAll())return!1;this.$13();return!0};c.hasFetchedAll=function(){return b("MessengerState.bs").hasLoadedAllMessages(this.$1,this.$5)||b("MessengerState.bs").isNewEmptyLocalThread(this.$1,this.$5)};c.$12=function(){return b("MessengerState.bs").getCurrentlyLoadedMessages(this.$1,this.$5).length};c.$13=function(){var a=this,c=this.$3;b("MessengerState.bs").getThreadMessagesRange(this.$1,this.$5,this.$12(),c,this.$14.bind(this),null,b("MercuryAPIArgsSource").MERCURY);this.$2<10&&(this.$2+=1);b("MessengerState.bs").hasLoadedNMessages(this.$1,this.$5,c+this.$12())&&b("setImmediate")(function(){a.$10()})};c.$14=function(b){g.debug("fetch_messages",JSON.stringify({threadID:this.$5,fetchedMessagesCount:b&&b.length||0,messageCount:this.$12()})),b&&!b.length&&!this.$12()&&this.$15(a.THREAD_IS_EMPTY)};c.$7=function(b){var c=[];b=b[this.$5];b&&b.length&&(c=c.concat(b.filter(function(a){return!!a})));c.length&&this.$15(a.MESSAGES_RECEIVED)};c.$8=function(b){this.$15(a.MESSAGES_CHANGED)};c.$9=function(b){this.$15(a.MESSAGES_DELETED,b)};c.$10=function(){this.$15(a.MESSAGES_REORDERED)};c.$11=function(){this.$2=1,this.$13()};c.$15=function(a,c){var d=b("MessengerState.bs").getCurrentlyLoadedMessages(this.$1,this.$5);this.releaseHeldEventType("updated");this.emitAndHold("updated",{messages:d,deletedMessages:c,eventType:a})};return a}();Object.assign(a,{MESSAGES_FETCHED:"fetched",MESSAGES_CHANGED:"changed",MESSAGES_RECEIVED:"received",MESSAGES_REORDERED:"reordered",MESSAGES_DELETED:"deleted",THREAD_IS_EMPTY:"thread-is-empty"});b("mixInEventEmitter")(a,{updated:!0});e.exports=a}),null);
__d("MNCommerceDialogStateActions",["MessengerDispatcher","MNCommerceActionTypes"],(function(a,b,c,d,e,f){"use strict";a={showDialog:function(a,c){b("MessengerDispatcher").dispatch({type:b("MNCommerceActionTypes").DIALOG.SHOW,dialogContainer:a,state:c})},hideDialog:function(){b("MessengerDispatcher").dispatch({type:b("MNCommerceActionTypes").DIALOG.HIDE})}};e.exports=a}),null);
__d("WIGProgressIndicator.react",["CometProgressIndicator.react","React"],(function(a,b,c,d,e,f){"use strict";var g=b("React");function a(a){return g.jsx(b("CometProgressIndicator.react"),babelHelpers["extends"]({},a))}e.exports=a}),null);
__d("WIGTooltip.react",["CometTooltip.react","React"],(function(a,b,c,d,e,f){"use strict";var g=b("React");function a(a){return g.jsx(b("CometTooltip.react"),babelHelpers["extends"]({},a))}e.exports=a}),null);