"use strict";(self.webpackChunkcornerstone=self.webpackChunkcornerstone||[]).push([[920],{191:function(e,t,n){n.r(t),n.d(t,{default:function(){return J}});var o=n(2791),a=n.p+"static/media/contactus.d6d4543686584dae9ff6.png",r=n(9439),s={_origin:"https://api.emailjs.com"},i=function(e,t,n){if(!e)throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!t)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!n)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0},c=n(3144),l=n(5671),u=(0,c.Z)((function e(t){(0,l.Z)(this,e),this.status=t?t.status:0,this.text=t?t.responseText:"Network Error"})),d=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return new Promise((function(o,a){var r=new XMLHttpRequest;r.addEventListener("load",(function(e){var t=e.target,n=new u(t);200===n.status||"OK"===n.text?o(n):a(n)})),r.addEventListener("error",(function(e){var t=e.target;a(new u(t))})),r.open("POST",s._origin+e,!0),Object.keys(n).forEach((function(e){r.setRequestHeader(e,n[e])})),r.send(t)}))},f=function(e,t,n,o){var a=o||s._userID,r=function(e){var t;if(!(t="string"===typeof e?document.querySelector(e):e)||"FORM"!==t.nodeName)throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return t}(n);i(a,e,t);var c=new FormData(r);return c.append("lib_version","3.10.0"),c.append("service_id",e),c.append("template_id",t),c.append("user_id",a),d("/api/v1.0/email/send-form",c)},m=n(4942),p=n(1413),h=n(5987),v=n(3433),g=n(8182),y=["theme","type"],T=["delay","staleId"],E=function(e){return"number"==typeof e&&!isNaN(e)},b=function(e){return"string"==typeof e},x=function(e){return"function"==typeof e},C=function(e){return b(e)||x(e)?e:null},Z=function(e){return(0,o.isValidElement)(e)||b(e)||x(e)||E(e)};function I(e){var t=e.enter,n=e.exit,a=e.appendPosition,r=void 0!==a&&a,s=e.collapse,i=void 0===s||s,c=e.collapseDuration,l=void 0===c?300:c;return function(e){var a=e.children,s=e.position,c=e.preventExitTransition,u=e.done,d=e.nodeRef,f=e.isIn,m=r?"".concat(t,"--").concat(s):t,p=r?"".concat(n,"--").concat(s):n,h=(0,o.useRef)(0);return(0,o.useLayoutEffect)((function(){var e,t=d.current,n=m.split(" "),o=function e(o){var a;o.target===d.current&&(t.dispatchEvent(new Event("d")),t.removeEventListener("animationend",e),t.removeEventListener("animationcancel",e),0===h.current&&"animationcancel"!==o.type&&(a=t.classList).remove.apply(a,(0,v.Z)(n)))};(e=t.classList).add.apply(e,(0,v.Z)(n)),t.addEventListener("animationend",o),t.addEventListener("animationcancel",o)}),[]),(0,o.useEffect)((function(){var e=d.current,t=function t(){e.removeEventListener("animationend",t),i?function(e,t,n){void 0===n&&(n=300);var o=e.scrollHeight,a=e.style;requestAnimationFrame((function(){a.minHeight="initial",a.height=o+"px",a.transition="all ".concat(n,"ms"),requestAnimationFrame((function(){a.height="0",a.padding="0",a.margin="0",setTimeout(t,n)}))}))}(e,u,l):u()};f||(c?t():(h.current=1,e.className+=" ".concat(p),e.addEventListener("animationend",t)))}),[f]),o.createElement(o.Fragment,null,a)}}function _(e,t){return{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:t}}var N={list:new Map,emitQueue:new Map,on:function(e,t){return this.list.has(e)||this.list.set(e,[]),this.list.get(e).push(t),this},off:function(e,t){if(t){var n=this.list.get(e).filter((function(e){return e!==t}));return this.list.set(e,n),this}return this.list.delete(e),this},cancelEmit:function(e){var t=this.emitQueue.get(e);return t&&(t.forEach(clearTimeout),this.emitQueue.delete(e)),this},emit:function(e){var t=arguments,n=this;this.list.has(e)&&this.list.get(e).forEach((function(o){var a=setTimeout((function(){o.apply(void 0,(0,v.Z)([].slice.call(t,1)))}),0);n.emitQueue.has(e)||n.emitQueue.set(e,[]),n.emitQueue.get(e).push(a)}))}},j=function(e){var t=e.theme,n=e.type,a=(0,h.Z)(e,y);return o.createElement("svg",(0,p.Z)({viewBox:"0 0 24 24",width:"100%",height:"100%",fill:"colored"===t?"currentColor":"var(--toastify-icon-color-".concat(n,")")},a))},L={info:function(e){return o.createElement(j,(0,p.Z)({},e),o.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return o.createElement(j,(0,p.Z)({},e),o.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return o.createElement(j,(0,p.Z)({},e),o.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return o.createElement(j,(0,p.Z)({},e),o.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return o.createElement("div",{className:"Toastify__spinner"})}};function O(e){var t=(0,o.useReducer)((function(e){return e+1}),0),n=(0,r.Z)(t,2)[1],a=(0,o.useState)([]),s=(0,r.Z)(a,2),i=s[0],c=s[1],l=(0,o.useRef)(null),u=(0,o.useRef)(new Map).current,d=function(e){return-1!==i.indexOf(e)},f=(0,o.useRef)({toastKey:1,displayedToast:0,count:0,queue:[],props:e,containerId:null,isToastActive:d,getToast:function(e){return u.get(e)}}).current;function m(e){var t=e.containerId;!f.props.limit||t&&f.containerId!==t||(f.count-=f.queue.length,f.queue=[])}function g(e){c((function(t){return null==e?[]:t.filter((function(t){return t!==e}))}))}function y(){var e=f.queue.shift();j(e.toastContent,e.toastProps,e.staleId)}function I(e,t){var a=t.delay,r=t.staleId,s=(0,h.Z)(t,T);if(Z(e)&&!function(e){return!l.current||f.props.enableMultiContainer&&e.containerId!==f.props.containerId||u.has(e.toastId)&&null==e.updateId}(s)){var i=s.toastId,c=s.updateId,d=s.data,m=f.props,v=function(){return g(i)},I=null==c;I&&f.count++;var O,w,k=(0,p.Z)((0,p.Z)((0,p.Z)({},m),{},{style:m.toastStyle,key:f.toastKey++},s),{},{toastId:i,updateId:c,data:d,closeToast:v,isIn:!1,className:C(s.className||m.toastClassName),bodyClassName:C(s.bodyClassName||m.bodyClassName),progressClassName:C(s.progressClassName||m.progressClassName),autoClose:!s.isLoading&&(O=s.autoClose,w=m.autoClose,!1===O||E(O)&&O>0?O:w),deleteToast:function(){var e=_(u.get(i),"removed");u.delete(i),N.emit(4,e);var t=f.queue.length;if(f.count=null==i?f.count-f.displayedToast:f.count-1,f.count<0&&(f.count=0),t>0){var o=null==i?f.props.limit:1;if(1===t||1===o)f.displayedToast++,y();else{var a=o>t?t:o;f.displayedToast=a;for(var r=0;r<a;r++)y()}}else n()}});k.iconOut=function(e){var t=e.theme,n=e.type,a=e.isLoading,r=e.icon,s=null,i={theme:t,type:n};return!1===r||(x(r)?s=r(i):(0,o.isValidElement)(r)?s=(0,o.cloneElement)(r,i):b(r)||E(r)?s=r:a?s=L.spinner():function(e){return e in L}(n)&&(s=L[n](i))),s}(k),x(s.onOpen)&&(k.onOpen=s.onOpen),x(s.onClose)&&(k.onClose=s.onClose),k.closeButton=m.closeButton,!1===s.closeButton||Z(s.closeButton)?k.closeButton=s.closeButton:!0===s.closeButton&&(k.closeButton=!Z(m.closeButton)||m.closeButton);var R=e;(0,o.isValidElement)(e)&&!b(e.type)?R=(0,o.cloneElement)(e,{closeToast:v,toastProps:k,data:d}):x(e)&&(R=e({closeToast:v,toastProps:k,data:d})),m.limit&&m.limit>0&&f.count>m.limit&&I?f.queue.push({toastContent:R,toastProps:k,staleId:r}):E(a)?setTimeout((function(){j(R,k,r)}),a):j(R,k,r)}}function j(e,t,n){var o=t.toastId;n&&u.delete(n);var a={content:e,props:t};u.set(o,a),c((function(e){return[].concat((0,v.Z)(e),[o]).filter((function(e){return e!==n}))})),N.emit(4,_(a,null==a.props.updateId?"added":"updated"))}return(0,o.useEffect)((function(){return f.containerId=e.containerId,N.cancelEmit(3).on(0,I).on(1,(function(e){return l.current&&g(e)})).on(5,m).emit(2,f),function(){u.clear(),N.emit(3,f)}}),[]),(0,o.useEffect)((function(){f.props=e,f.isToastActive=d,f.displayedToast=i.length})),{getToastToRender:function(t){var n=new Map,o=Array.from(u.values());return e.newestOnTop&&o.reverse(),o.forEach((function(e){var t=e.props.position;n.has(t)||n.set(t,[]),n.get(t).push(e)})),Array.from(n,(function(e){return t(e[0],e[1])}))},containerRef:l,isToastActive:d}}function w(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientX:e.clientX}function k(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientY:e.clientY}function R(e){var t=(0,o.useState)(!1),n=(0,r.Z)(t,2),a=n[0],s=n[1],i=(0,o.useState)(!1),c=(0,r.Z)(i,2),l=c[0],u=c[1],d=(0,o.useRef)(null),f=(0,o.useRef)({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,m=(0,o.useRef)(e),p=e.autoClose,h=e.pauseOnHover,v=e.closeToast,g=e.onClick,y=e.closeOnClick;function T(t){if(e.draggable){"touchstart"===t.nativeEvent.type&&t.nativeEvent.preventDefault(),f.didMove=!1,document.addEventListener("mousemove",Z),document.addEventListener("mouseup",I),document.addEventListener("touchmove",Z),document.addEventListener("touchend",I);var n=d.current;f.canCloseOnClick=!0,f.canDrag=!0,f.boundingRect=n.getBoundingClientRect(),n.style.transition="",f.x=w(t.nativeEvent),f.y=k(t.nativeEvent),"x"===e.draggableDirection?(f.start=f.x,f.removalDistance=n.offsetWidth*(e.draggablePercent/100)):(f.start=f.y,f.removalDistance=n.offsetHeight*(80===e.draggablePercent?1.5*e.draggablePercent:e.draggablePercent/100))}}function E(t){if(f.boundingRect){var n=f.boundingRect,o=n.top,a=n.bottom,r=n.left,s=n.right;"touchend"!==t.nativeEvent.type&&e.pauseOnHover&&f.x>=r&&f.x<=s&&f.y>=o&&f.y<=a?C():b()}}function b(){s(!0)}function C(){s(!1)}function Z(t){var n=d.current;f.canDrag&&n&&(f.didMove=!0,a&&C(),f.x=w(t),f.y=k(t),f.delta="x"===e.draggableDirection?f.x-f.start:f.y-f.start,f.start!==f.x&&(f.canCloseOnClick=!1),n.style.transform="translate".concat(e.draggableDirection,"(").concat(f.delta,"px)"),n.style.opacity=""+(1-Math.abs(f.delta/f.removalDistance)))}function I(){document.removeEventListener("mousemove",Z),document.removeEventListener("mouseup",I),document.removeEventListener("touchmove",Z),document.removeEventListener("touchend",I);var t=d.current;if(f.canDrag&&f.didMove&&t){if(f.canDrag=!1,Math.abs(f.delta)>f.removalDistance)return u(!0),void e.closeToast();t.style.transition="transform 0.2s, opacity 0.2s",t.style.transform="translate".concat(e.draggableDirection,"(0)"),t.style.opacity="1"}}(0,o.useEffect)((function(){m.current=e})),(0,o.useEffect)((function(){return d.current&&d.current.addEventListener("d",b,{once:!0}),x(e.onOpen)&&e.onOpen((0,o.isValidElement)(e.children)&&e.children.props),function(){var e=m.current;x(e.onClose)&&e.onClose((0,o.isValidElement)(e.children)&&e.children.props)}}),[]),(0,o.useEffect)((function(){return e.pauseOnFocusLoss&&(document.hasFocus()||C(),window.addEventListener("focus",b),window.addEventListener("blur",C)),function(){e.pauseOnFocusLoss&&(window.removeEventListener("focus",b),window.removeEventListener("blur",C))}}),[e.pauseOnFocusLoss]);var _={onMouseDown:T,onTouchStart:T,onMouseUp:E,onTouchEnd:E};return p&&h&&(_.onMouseEnter=C,_.onMouseLeave=b),y&&(_.onClick=function(e){g&&g(e),f.canCloseOnClick&&v()}),{playToast:b,pauseToast:C,isRunning:a,preventExitTransition:l,toastRef:d,eventHandlers:_}}function M(e){var t=e.closeToast,n=e.theme,a=e.ariaLabel,r=void 0===a?"close":a;return o.createElement("button",{className:"Toastify__close-button Toastify__close-button--".concat(n),type:"button",onClick:function(e){e.stopPropagation(),t(e)},"aria-label":r},o.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},o.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function S(e){var t=e.delay,n=e.isRunning,a=e.closeToast,r=e.type,s=void 0===r?"default":r,i=e.hide,c=e.className,l=e.style,u=e.controlledProgress,d=e.progress,f=e.rtl,h=e.isIn,v=e.theme,y=i||u&&0===d,T=(0,p.Z)((0,p.Z)({},l),{},{animationDuration:"".concat(t,"ms"),animationPlayState:n?"running":"paused",opacity:y?0:1});u&&(T.transform="scaleX(".concat(d,")"));var E=(0,g.Z)("Toastify__progress-bar",u?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated","Toastify__progress-bar-theme--".concat(v),"Toastify__progress-bar--".concat(s),{"Toastify__progress-bar--rtl":f}),b=x(c)?c({rtl:f,type:s,defaultClassName:E}):(0,g.Z)(E,c);return o.createElement("div",(0,m.Z)({role:"progressbar","aria-hidden":y?"true":"false","aria-label":"notification timer",className:b,style:T},u&&d>=1?"onTransitionEnd":"onAnimationEnd",u&&d<1?null:function(){h&&a()}))}var P=function(e){var t=R(e),n=t.isRunning,a=t.preventExitTransition,r=t.toastRef,s=t.eventHandlers,i=e.closeButton,c=e.children,l=e.autoClose,u=e.onClick,d=e.type,f=e.hideProgressBar,m=e.closeToast,h=e.transition,v=e.position,y=e.className,T=e.style,E=e.bodyClassName,b=e.bodyStyle,C=e.progressClassName,Z=e.progressStyle,I=e.updateId,_=e.role,N=e.progress,j=e.rtl,L=e.toastId,O=e.deleteToast,w=e.isIn,k=e.isLoading,P=e.iconOut,A=e.closeOnClick,D=e.theme,B=(0,g.Z)("Toastify__toast","Toastify__toast-theme--".concat(D),"Toastify__toast--".concat(d),{"Toastify__toast--rtl":j},{"Toastify__toast--close-on-click":A}),H=x(y)?y({rtl:j,position:v,type:d,defaultClassName:B}):(0,g.Z)(B,y),z=!!N||!l,F={closeToast:m,type:d,theme:D},q=null;return!1===i||(q=x(i)?i(F):(0,o.isValidElement)(i)?(0,o.cloneElement)(i,F):M(F)),o.createElement(h,{isIn:w,done:O,position:v,preventExitTransition:a,nodeRef:r},o.createElement("div",(0,p.Z)((0,p.Z)({id:L,onClick:u,className:H},s),{},{style:T,ref:r}),o.createElement("div",(0,p.Z)((0,p.Z)({},w&&{role:_}),{},{className:x(E)?E({type:d}):(0,g.Z)("Toastify__toast-body",E),style:b}),null!=P&&o.createElement("div",{className:(0,g.Z)("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!k})},P),o.createElement("div",null,c)),q,o.createElement(S,(0,p.Z)((0,p.Z)({},I&&!z?{key:"pb-".concat(I)}:{}),{},{rtl:j,theme:D,delay:l,isRunning:n,isIn:w,closeToast:m,hide:f,type:d,style:Z,className:C,controlledProgress:z,progress:N||0}))))},A=function(e,t){return void 0===t&&(t=!1),{enter:"Toastify--animate Toastify__".concat(e,"-enter"),exit:"Toastify--animate Toastify__".concat(e,"-exit"),appendPosition:t}},D=I(A("bounce",!0)),B=(I(A("slide",!0)),I(A("zoom")),I(A("flip")),(0,o.forwardRef)((function(e,t){var n=O(e),a=n.getToastToRender,r=n.containerRef,s=n.isToastActive,i=e.className,c=e.style,l=e.rtl,u=e.containerId;function d(e){var t=(0,g.Z)("Toastify__toast-container","Toastify__toast-container--".concat(e),{"Toastify__toast-container--rtl":l});return x(i)?i({position:e,rtl:l,defaultClassName:t}):(0,g.Z)(t,C(i))}return(0,o.useEffect)((function(){t&&(t.current=r.current)}),[]),o.createElement("div",{ref:r,className:"Toastify",id:u},a((function(e,t){var n=t.length?(0,p.Z)({},c):(0,p.Z)((0,p.Z)({},c),{},{pointerEvents:"none"});return o.createElement("div",{className:d(e),style:n,key:"container-".concat(e)},t.map((function(e,n){var a=e.content,r=e.props;return o.createElement(P,(0,p.Z)((0,p.Z)({},r),{},{isIn:s(r.toastId),style:(0,p.Z)((0,p.Z)({},r.style),{},{"--nth":n+1,"--len":t.length}),key:"toast-".concat(r.key)}),a)})))})))})));B.displayName="ToastContainer",B.defaultProps={position:"top-right",transition:D,autoClose:5e3,closeButton:M,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};var H,z=new Map,F=[],q=1;function U(){return""+q++}function V(e){return e&&(b(e.toastId)||E(e.toastId))?e.toastId:U()}function Q(e,t){return z.size>0?N.emit(0,e,t):F.push({content:e,options:t}),t.toastId}function G(e,t){return(0,p.Z)((0,p.Z)({},t),{},{type:t&&t.type||e,toastId:V(t)})}function W(e){return function(t,n){return Q(t,G(e,n))}}function X(e,t){return Q(e,G("default",t))}X.loading=function(e,t){return Q(e,G("default",(0,p.Z)({isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1},t)))},X.promise=function(e,t,n){var o,a=t.pending,r=t.error,s=t.success;a&&(o=b(a)?X.loading(a,n):X.loading(a.render,(0,p.Z)((0,p.Z)({},n),a)));var i={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null,delay:100},c=function(e,t,a){if(null!=t){var r=(0,p.Z)((0,p.Z)((0,p.Z)({type:e},i),n),{},{data:a}),s=b(t)?{render:t}:t;return o?X.update(o,(0,p.Z)((0,p.Z)({},r),s)):X(s.render,(0,p.Z)((0,p.Z)({},r),s)),a}X.dismiss(o)},l=x(e)?e():e;return l.then((function(e){return c("success",s,e)})).catch((function(e){return c("error",r,e)})),l},X.success=W("success"),X.info=W("info"),X.error=W("error"),X.warning=W("warning"),X.warn=X.warning,X.dark=function(e,t){return Q(e,G("default",(0,p.Z)({theme:"dark"},t)))},X.dismiss=function(e){z.size>0?N.emit(1,e):F=F.filter((function(t){return null!=e&&t.options.toastId!==e}))},X.clearWaitingQueue=function(e){return void 0===e&&(e={}),N.emit(5,e)},X.isActive=function(e){var t=!1;return z.forEach((function(n){n.isToastActive&&n.isToastActive(e)&&(t=!0)})),t},X.update=function(e,t){void 0===t&&(t={}),setTimeout((function(){var n=function(e,t){var n=t.containerId,o=z.get(n||H);return o&&o.getToast(e)}(e,t);if(n){var o=n.props,a=n.content,r=(0,p.Z)((0,p.Z)((0,p.Z)({},o),t),{},{toastId:t.toastId||e,updateId:U()});r.toastId!==e&&(r.staleId=e);var s=r.render||a;delete r.render,Q(s,r)}}),0)},X.done=function(e){X.update(e,{progress:1})},X.onChange=function(e){return N.on(4,e),function(){N.off(4,e)}},X.POSITION={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},X.TYPE={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},N.on(2,(function(e){H=e.containerId||e,z.set(H,e),F.forEach((function(e){N.emit(0,e.content,e.options)})),F=[]})).on(3,(function(e){z.delete(e.containerId||e),0===z.size&&N.off(0).off(1).off(5)}));var K=n(184);var Y=function(){var e=(0,o.useState)(""),t=(0,r.Z)(e,2),n=t[0],a=t[1],s=(0,o.useState)(""),i=(0,r.Z)(s,2),c=i[0],l=i[1],u=(0,o.useState)(""),d=(0,r.Z)(u,2),m=d[0],p=d[1],h=(0,o.useState)(""),v=(0,r.Z)(h,2),g=v[0],y=v[1],T=(0,o.useRef)(),E=function(e){return X(e)};function b(){return/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(m)}function x(){return c.length>=11&&c.length<=15}return(0,K.jsx)(K.Fragment,{children:(0,K.jsxs)("form",{ref:T,onSubmit:function(e){e.preventDefault(),""!==n&&""!==g&&b()&&x()?(console.log("contact successfull!"),f("service_kknvur6","template_5gt9grr",T.current,"MH1nUO-6ASSTrUrJP").then((function(t){console.log(t),E("Message Sent Successfully"),e.target.reset()}),(function(e){console.log(e),E("Failed! please try again.")}))):(n&&g||E("please fill the empty boxes!"),b||E("Invalid Email!"),x||E("Invalid Phone no!"))},children:[(0,K.jsx)("label",{className:"formLabel",children:"Name"}),(0,K.jsx)("input",{className:"inputArea",type:"text",name:"user_name",value:n,onChange:function(e){a(e.target.value)}}),(0,K.jsx)("label",{className:"formLabel",children:"Email"}),(0,K.jsx)("input",{className:"inputArea",type:"email",name:"user_email",value:m,onChange:function(e){p(e.target.value)}}),(0,K.jsx)("label",{className:"formLabel",children:"Phone Number"}),(0,K.jsx)("input",{className:"inputArea",type:"number",name:"user_phoneNumber",value:c,onChange:function(e){l(e.target.value)}}),(0,K.jsx)("label",{className:"formLabel",children:"Message"}),(0,K.jsx)("textarea",{name:"user_message",className:"inputArea",id:"messageArea",value:g,onChange:function(e){y(e.target.value)}}),(0,K.jsx)("input",{type:"submit",value:"Send Message",className:"formButton"}),(0,K.jsx)(B,{})]})})};var J=function(){return(0,K.jsxs)("div",{className:"contactUs",children:[(0,K.jsxs)("section",{className:"upperSection",children:[(0,K.jsx)("img",{className:"contactUsImage",src:a,alt:""}),(0,K.jsxs)("div",{id:"contactUsHeading",children:[(0,K.jsx)("h3",{children:"Contact Us"}),(0,K.jsx)("p",{children:"If you have any questions about our products or services, please call one of our numbers or send us an email. We welcome your suggestions to and feedback."})]})]}),(0,K.jsxs)("section",{className:"container lowerSection",children:[(0,K.jsxs)("div",{className:"textSection",children:[(0,K.jsx)("div",{className:"contactInformationHeading",children:"Contact Informtion"}),(0,K.jsxs)("div",{className:"infoSection",children:[(0,K.jsx)("h1",{children:"Contact Numbers:"}),(0,K.jsxs)("p",{children:[(0,K.jsx)("b",{children:"Head Office:"})," 042-37212719"]}),(0,K.jsxs)("p",{children:[(0,K.jsx)("b",{children:"Others:"})," +92-331-4258348"]}),(0,K.jsx)("p",{children:" +92-300-4039968"})]}),(0,K.jsxs)("div",{className:"infoSection",children:[(0,K.jsx)("h1",{children:"Email ID's:"}),(0,K.jsxs)("p",{children:[(0,K.jsx)("b",{children:"For Hirings:"})," ",(0,K.jsx)("a",{href:"mailto:hirings@cornerstone.pk?",children:"hirings@cornerstone.pk"})]}),(0,K.jsxs)("p",{children:[(0,K.jsx)("b",{children:"For Informtion:"})," ",(0,K.jsx)("a",{href:"mailto:info@cornerstone.pk?",children:"info@cornerstone.pk"})]}),(0,K.jsxs)("p",{children:[(0,K.jsx)("b",{children:"Help center:"})," ",(0,K.jsx)("a",{href:"mailto:help@cornerstone.pk?",children:"help@cornerstone.pk"})]})]}),(0,K.jsxs)("div",{className:"infoSection",children:[(0,K.jsx)("h1",{children:"Office Address:"}),(0,K.jsxs)("p",{children:[(0,K.jsx)("b",{children:"Head Office 1:"})," 57-PGECHS near bahria Town Lahore"]}),(0,K.jsxs)("p",{children:[(0,K.jsx)("b",{children:"Head Office 2:"})," Mian Market, Ghazni Street Urdu Bazar Lahore Lahore, 54000"]})]})]}),(0,K.jsxs)("div",{className:"formSection",children:[(0,K.jsx)("h3",{className:"formHeading",children:"Send Us Message"}),(0,K.jsx)(Y,{})]})]})]})}},8182:function(e,t,n){function o(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=o(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.Z=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=o(e))&&(a&&(a+=" "),a+=t);return a}}}]);
//# sourceMappingURL=920.eb659fff.chunk.js.map