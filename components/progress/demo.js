webpackJsonp([18],{9:function(n,a,s){"use strict";s(14),s(13)},13:function(n,a){},14:function(n,a){},19:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0});var p=s(8),e=t(p),o=s(1),c=t(o);a["default"]=function(n){var a=n.type,s=n.className,t=void 0===s?"":s;return c["default"].createElement("i",(0,e["default"])({},n,{className:(t+" anticon anticon-"+a).trim()}))},n.exports=a["default"]},20:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=void 0;var p=s(7),e=t(p),o=s(4),c=t(o),u=s(6),l=t(u),i=s(5),k=t(i),r=s(1),d=t(r),f=s(3),m=t(f),g=function(n){function a(){return(0,c["default"])(this,a),(0,l["default"])(this,n.apply(this,arguments))}return(0,k["default"])(a,n),a.prototype.render=function(){var n,a=this.props,s=a.prefixCls,t=a.size,p=a.className,o=a.style,c=a.onClick,u=(0,m["default"])((n={},(0,e["default"])(n,""+s,!0),(0,e["default"])(n,s+"-"+t,!0),(0,e["default"])(n,p,!!p),n));return d["default"].createElement("div",{className:u,style:o,onClick:c})},a}(d["default"].Component);a["default"]=g,g.defaultProps={prefixCls:"am-whitespace",size:"md"},n.exports=a["default"]},21:function(n,a,s){"use strict";s(9),s(46)},22:function(n,a,s){"use strict";s(28)},25:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=void 0;var p=s(7),e=t(p),o=s(4),c=t(o),u=s(6),l=t(u),i=s(5),k=t(i),r=s(1),d=t(r),f=s(3),m=t(f),g=function(n){function a(){return(0,c["default"])(this,a),(0,l["default"])(this,n.apply(this,arguments))}return(0,k["default"])(a,n),a.prototype.render=function(){var n,a=this.props,s=a.prefixCls,t=a.size,p=a.className,o=a.children,c=a.style,u=(0,m["default"])((n={},(0,e["default"])(n,""+s,!0),(0,e["default"])(n,s+"-"+t,!0),(0,e["default"])(n,p,!!p),n));return d["default"].createElement("div",{className:u,style:c},o)},a}(d["default"].Component);a["default"]=g,g.defaultProps={prefixCls:"am-wingblank",size:"lg"},n.exports=a["default"]},26:function(n,a,s){"use strict";s(9),s(52)},27:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}a.__esModule=!0;var p=s(34),e=t(p),o=s(33),c=t(o);a["default"]=function(){function n(n,a){var s=[],t=!0,p=!1,e=void 0;try{for(var o,u=(0,c["default"])(n);!(t=(o=u.next()).done)&&(s.push(o.value),!a||s.length!==a);t=!0);}catch(l){p=!0,e=l}finally{try{!t&&u["return"]&&u["return"]()}finally{if(p)throw e}}return s}return function(a,s){if(Array.isArray(a))return a;if((0,e["default"])(Object(a)))return n(a,s);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}()},28:function(n,a){},30:function(n,a){"use strict";function s(n,a){var s={},t={};return Object.keys(n).forEach(function(p){a.indexOf(p)!==-1?s[p]=n[p]:t[p]=n[p]}),[s,t]}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=s,n.exports=a["default"]},33:function(n,a,s){n.exports={"default":s(35),__esModule:!0}},34:function(n,a,s){n.exports={"default":s(36),__esModule:!0}},35:function(n,a,s){s(31),s(23),n.exports=s(37)},36:function(n,a,s){s(31),s(23),n.exports=s(38)},37:function(n,a,s){var t=s(42),p=s(51);n.exports=s(17).getIterator=function(n){var a=p(n);if("function"!=typeof a)throw TypeError(n+" is not iterable!");return t(a.call(n))}},38:function(n,a,s){var t=s(61),p=s(24)("iterator"),e=s(45);n.exports=s(17).isIterable=function(n){var a=Object(n);return void 0!==a[p]||"@@iterator"in a||e.hasOwnProperty(t(a))}},46:function(n,a){},52:function(n,a){},59:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0});var p=s(71),e=t(p),o=s(72),c=t(o);e["default"].Item=c["default"],a["default"]=e["default"],n.exports=a["default"]},66:function(n,a,s){"use strict";s(9),s(91)},71:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=void 0;var p=s(7),e=t(p),o=s(4),c=t(o),u=s(6),l=t(u),i=s(5),k=t(i),r=s(1),d=t(r),f=s(3),m=t(f),g=function(n){function a(){return(0,c["default"])(this,a),(0,l["default"])(this,n.apply(this,arguments))}return(0,k["default"])(a,n),a.prototype.render=function(){var n,a=this.props,s=a.direction,t=a.wrap,p=a.justify,o=a.align,c=a.alignContent,u=a.className,l=a.children,i=a.prefixCls,k=a.style,r=a.onClick,f=(0,m["default"])((n={},(0,e["default"])(n,i,!0),(0,e["default"])(n,i+"-dir-row","row"===s),(0,e["default"])(n,i+"-dir-row-reverse","row-reverse"===s),(0,e["default"])(n,i+"-dir-column","column"===s),(0,e["default"])(n,i+"-dir-column-reverse","column-reverse"===s),(0,e["default"])(n,i+"-nowrap","nowrap"===t),(0,e["default"])(n,i+"-wrap","wrap"===t),(0,e["default"])(n,i+"-wrap-reverse","wrap-reverse"===t),(0,e["default"])(n,i+"-justify-start","start"===p),(0,e["default"])(n,i+"-justify-end","end"===p),(0,e["default"])(n,i+"-justify-center","center"===p),(0,e["default"])(n,i+"-justify-between","between"===p),(0,e["default"])(n,i+"-justify-around","around"===p),(0,e["default"])(n,i+"-align-top","top"===o||"start"===o),(0,e["default"])(n,i+"-align-middle","middle"===o||"center"===o),(0,e["default"])(n,i+"-align-bottom","bottom"===o||"end"===o),(0,e["default"])(n,i+"-align-baseline","baseline"===o),(0,e["default"])(n,i+"-align-stretch","stretch"===o),(0,e["default"])(n,i+"-align-content-start","start"===c),(0,e["default"])(n,i+"-align-content-end","end"===c),(0,e["default"])(n,i+"-align-content-center","center"===c),(0,e["default"])(n,i+"-align-content-between","between"===c),(0,e["default"])(n,i+"-align-content-around","around"===c),(0,e["default"])(n,i+"-align-content-stretch","stretch"===c),(0,e["default"])(n,u,u),n));return d["default"].createElement("div",{className:f,style:k,onClick:r},l)},a}(d["default"].Component);a["default"]=g,g.defaultProps={prefixCls:"am-flexbox",align:"center",onClick:function(){}},n.exports=a["default"]},72:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=void 0;var p=s(7),e=t(p),o=s(4),c=t(o),u=s(6),l=t(u),i=s(5),k=t(i),r=s(1),d=t(r),f=s(3),m=t(f),g=function(n){function a(){return(0,c["default"])(this,a),(0,l["default"])(this,n.apply(this,arguments))}return(0,k["default"])(a,n),a.prototype.render=function(){var n,a=this.props,s=a.children,t=a.className,p=a.prefixCls,o=a.style,c=a.onClick,u=(0,m["default"])((n={},(0,e["default"])(n,p+"-item",!0),(0,e["default"])(n,t,t),n));return d["default"].createElement("div",{className:u,style:o,onClick:c},s)},a}(d["default"].Component);a["default"]=g,g.defaultProps={prefixCls:"am-flexbox"},n.exports=a["default"]},91:function(n,a){},163:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=void 0;var p=s(8),e=t(p),o=s(7),c=t(o),u=s(27),l=t(u),i=s(4),k=t(i),r=s(6),d=t(r),f=s(5),m=t(f),g=s(1),y=t(g),v=s(3),h=t(v),w=s(19),x=t(w),N=s(30),b=t(N),C=function(n){function a(){return(0,k["default"])(this,a),(0,d["default"])(this,n.apply(this,arguments))}return(0,m["default"])(a,n),a.prototype.render=function(){var n,a=(0,b["default"])(this.props,["prefixCls","children","mode","className","iconName","leftContent","rightContent","onLeftClick"]),s=(0,l["default"])(a,2),t=s[0],p=t.prefixCls,o=t.children,u=t.mode,i=t.className,k=t.iconName,r=t.leftContent,d=t.rightContent,f=t.onLeftClick,m=s[1],g=(0,h["default"])((n={},(0,c["default"])(n,i,i),(0,c["default"])(n,p,!0),(0,c["default"])(n,p+"-"+u,!0),n));return y["default"].createElement("div",(0,e["default"])({},m,{className:g}),y["default"].createElement("div",{className:p+"-left",onClick:f},k?y["default"].createElement("span",{className:p+"-left-icon"},y["default"].createElement(x["default"],{type:k})):null,y["default"].createElement("span",{className:p+"-left-content"},r)),y["default"].createElement("div",{className:p+"-title"},o),y["default"].createElement("div",{className:p+"-right"},d))},a}(y["default"].Component);a["default"]=C,C.defaultProps={prefixCls:"am-navbar",mode:"dark",iconName:"left",onLeftClick:function(){}},n.exports=a["default"]},164:function(n,a,s){"use strict";s(9),s(22),s(209)},209:function(n,a){},755:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(s(26),s(25)),e=t(p),o=(s(66),s(59)),c=t(o),u=(s(22),s(19)),l=t(u),i=(s(21),s(20)),k=t(i),r=(s(851),s(850)),d=t(r),f=(s(164),s(163)),m=t(f),g=s(1),y=t(g),v=s(2);t(v);n.exports={content:[["p","\u57fa\u672c\u529f\u80fd\u5c55\u793a"]],meta:{order:0,title:"\u57fa\u672c",filename:"components/progress/demo/basic.md",id:"components-progress-demo-basic"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> NavBar<span class="token punctuation" >,</span> Progress<span class="token punctuation" >,</span> Icon<span class="token punctuation" >,</span> WhiteSpace<span class="token punctuation" >,</span> Flex<span class="token punctuation" >,</span> WingBlank <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd-mobile\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >const</span> MyProgress <span class="token operator" >=</span> React<span class="token punctuation" >.</span><span class="token function" >createClass</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n  <span class="token function" >getInitialState</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >return</span> <span class="token punctuation" >{</span>\n      percent<span class="token punctuation" >:</span> <span class="token number" >0</span><span class="token punctuation" >,</span>\n      autoplayPaused<span class="token punctuation" >:</span> <span class="token keyword" >null</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >componentDidMount</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >this</span><span class="token punctuation" >.</span><span class="token function" >play</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >componentWillUnmount</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >this</span><span class="token punctuation" >.</span><span class="token function" >stop</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >increase</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >let</span> percent <span class="token operator" >=</span> <span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >.</span>percent <span class="token operator" >+</span> <span class="token number" >10</span><span class="token punctuation" >;</span>\n    <span class="token keyword" >if</span> <span class="token punctuation" >(</span>percent <span class="token operator" >></span> <span class="token number" >100</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n      percent <span class="token operator" >=</span> <span class="token number" >0</span><span class="token punctuation" >;</span>\n    <span class="token punctuation" >}</span>\n    <span class="token keyword" >this</span><span class="token punctuation" >.</span><span class="token function" >setState</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span> percent <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >play</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >this</span><span class="token punctuation" >.</span>autoplayID <span class="token operator" >=</span> <span class="token function" >setInterval</span><span class="token punctuation" >(</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>increase<span class="token punctuation" >,</span> <span class="token number" >1000</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n    <span class="token keyword" >this</span><span class="token punctuation" >.</span><span class="token function" >setState</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span> autoplayPaused<span class="token punctuation" >:</span> <span class="token keyword" >null</span> <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n\n  <span class="token function" >stop</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >if</span> <span class="token punctuation" >(</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>autoplayID<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n      <span class="token function" >clearInterval</span><span class="token punctuation" >(</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>autoplayID<span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n    <span class="token punctuation" >}</span>\n    <span class="token keyword" >this</span><span class="token punctuation" >.</span><span class="token function" >setState</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span> autoplayPaused<span class="token punctuation" >:</span> <span class="token boolean" >true</span> <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n\n  <span class="token function" >reset</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >this</span><span class="token punctuation" >.</span><span class="token function" >stop</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n    <span class="token keyword" >this</span><span class="token punctuation" >.</span><span class="token function" >setState</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span> percent<span class="token punctuation" >:</span> <span class="token number" >0</span> <span class="token punctuation" >}</span><span class="token punctuation" >,</span> <span class="token keyword" >function</span> <span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n      <span class="token keyword" >this</span><span class="token punctuation" >.</span><span class="token function" >play</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n\n  <span class="token function" >render</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >return</span> <span class="token punctuation" >(</span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>progress-container<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>NavBar</span> <span class="token attr-name" >iconName</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token boolean" >false</span><span class="token punctuation" >}</span></span> <span class="token attr-name" >mode</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>light<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u672a\u586b\u5145\u65e0\u8272<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>NavBar</span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Progress</span> <span class="token attr-name" >percent</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >.</span>percent<span class="token punctuation" >}</span></span> <span class="token attr-name" >position</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>fixed<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Progress</span> <span class="token attr-name" >percent</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >.</span>percent<span class="token punctuation" >}</span></span> <span class="token attr-name" >position</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>normal<span class="token punctuation" >"</span></span> <span class="token attr-name" >unfilled</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>hide<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WhiteSpace</span> <span class="token attr-name" >size</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>lg<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WhiteSpace</span> <span class="token attr-name" >size</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>lg<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>NavBar</span> <span class="token attr-name" >iconName</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token boolean" >false</span><span class="token punctuation" >}</span></span> <span class="token attr-name" >mode</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>light<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u672a\u586b\u5145\u6709\u8272<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>NavBar</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Progress</span> <span class="token attr-name" >percent</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >.</span>percent<span class="token punctuation" >}</span></span> <span class="token attr-name" >position</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>normal<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WhiteSpace</span> <span class="token attr-name" >size</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>xl<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WingBlank</span> <span class="token attr-name" >size</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>lg<span class="token punctuation" >"</span></span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>control<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Flex</span>\n            <span class="token attr-name" >justify</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>center<span class="token punctuation" >"</span></span>\n            <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>flex-container-justify<span class="token punctuation" >"</span></span>\n          <span class="token punctuation" >></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>action<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n              <span class="token punctuation" >{</span> <span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >.</span>autoplayPaused <span class="token operator" >?</span> <span class="token punctuation" >(</span>\n                <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Icon</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>caret-right<span class="token punctuation" >"</span></span> <span class="token attr-name" >onClick</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>play<span class="token punctuation" >}</span></span> <span class="token punctuation" >/></span></span>\n              <span class="token punctuation" >)</span> <span class="token punctuation" >:</span> <span class="token punctuation" >(</span>\n                <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Icon</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>pause<span class="token punctuation" >"</span></span> <span class="token attr-name" >onClick</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>stop<span class="token punctuation" >}</span></span> <span class="token punctuation" >/></span></span>\n              <span class="token punctuation" >)</span> <span class="token punctuation" >}</span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>action<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n              <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Icon</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>reload<span class="token punctuation" >"</span></span> <span class="token attr-name" >onClick</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>reset<span class="token punctuation" >}</span></span> <span class="token punctuation" >/></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Flex</span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WhiteSpace</span> <span class="token attr-name" >size</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>lg<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Flex</span>\n            <span class="token attr-name" >justify</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>center<span class="token punctuation" >"</span></span>\n            <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>flex-container-justify</span> <span class="token attr-name" >action-info"</span>\n          <span class="token punctuation" >></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>action<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n              <span class="token punctuation" >{</span> <span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >.</span>autoplayPaused <span class="token operator" >?</span> <span class="token string" >\'\u64ad\u653e\'</span> <span class="token punctuation" >:</span> <span class="token string" >\'\u6682\u505c\'</span> <span class="token punctuation" >}</span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>action<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n              \u91cd\u7f6e\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Flex</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>WingBlank</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n    <span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>MyProgress</span> <span class="token punctuation" >/></span></span><span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){var n=y["default"].createClass({displayName:"MyProgress",getInitialState:function(){return{percent:0,autoplayPaused:null}},componentDidMount:function(){this.play()},componentWillUnmount:function(){this.stop()},increase:function(){
var n=this.state.percent+10;n>100&&(n=0),this.setState({percent:n})},play:function(){this.autoplayID=setInterval(this.increase,1e3),this.setState({autoplayPaused:null})},stop:function(){this.autoplayID&&clearInterval(this.autoplayID),this.setState({autoplayPaused:!0})},reset:function(){this.stop(),this.setState({percent:0},function(){this.play()})},render:function(){return y["default"].createElement("div",{className:"progress-container"},y["default"].createElement("div",null,y["default"].createElement(m["default"],{iconName:!1,mode:"light"},"\u672a\u586b\u5145\u65e0\u8272"),y["default"].createElement(d["default"],{percent:this.state.percent,position:"fixed"})),y["default"].createElement(d["default"],{percent:this.state.percent,position:"normal",unfilled:"hide"}),y["default"].createElement(k["default"],{size:"lg"}),y["default"].createElement(k["default"],{size:"lg"}),y["default"].createElement(m["default"],{iconName:!1,mode:"light"},"\u672a\u586b\u5145\u6709\u8272"),y["default"].createElement(d["default"],{percent:this.state.percent,position:"normal"}),y["default"].createElement(k["default"],{size:"xl"}),y["default"].createElement(e["default"],{size:"lg",className:"control"},y["default"].createElement(c["default"],{justify:"center",className:"flex-container-justify"},y["default"].createElement("div",{className:"action"},this.state.autoplayPaused?y["default"].createElement(l["default"],{type:"caret-right",onClick:this.play}):y["default"].createElement(l["default"],{type:"pause",onClick:this.stop})),y["default"].createElement("div",{className:"action"},y["default"].createElement(l["default"],{type:"reload",onClick:this.reset}))),y["default"].createElement(k["default"],{size:"lg"}),y["default"].createElement(c["default"],{justify:"center",className:"flex-container-justify action-info"},y["default"].createElement("div",{className:"action"},this.state.autoplayPaused?"\u64ad\u653e":"\u6682\u505c"),y["default"].createElement("div",{className:"action"},"\u91cd\u7f6e"))))}});return y["default"].createElement(n,null)},style:".control {\n  font-size: 0.36rem;\n\n}\n.action {\n  width: 3rem;\n  text-align: center;\n}\n.action-info {\n  color: #000;\n}",highlightedStyle:'<span class="token selector" ><span class="token class" >.control</span> </span><span class="token punctuation" >{</span>\n  <span class="token property" >font-size</span><span class="token punctuation" >:</span> <span class="token number" >0.36</span>rem<span class="token punctuation" >;</span>\n\n<span class="token punctuation" >}</span>\n<span class="token selector" ><span class="token class" >.action</span> </span><span class="token punctuation" >{</span>\n  <span class="token property" >width</span><span class="token punctuation" >:</span> <span class="token number" >3</span>rem<span class="token punctuation" >;</span>\n  <span class="token property" >text-align</span><span class="token punctuation" >:</span> center<span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>\n<span class="token selector" ><span class="token class" >.action-info</span> </span><span class="token punctuation" >{</span>\n  <span class="token property" >color</span><span class="token punctuation" >:</span> <span class="token hexcode" >#000</span><span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>'}},850:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=void 0;var p=s(7),e=t(p),o=s(4),c=t(o),u=s(6),l=t(u),i=s(5),k=t(i),r=s(1),d=t(r),f=s(3),m=t(f),g=function(n){function a(s){(0,c["default"])(this,a);var t=(0,l["default"])(this,n.call(this,s));return t.state={},t}return(0,k["default"])(a,n),a.prototype.render=function(){var n,a=this.props,s=a.prefixCls,t=a.percent,p=a.position,o=a.unfilled,c={width:t+"%",height:0},u=(0,m["default"])((n={},(0,e["default"])(n,s+"-outer",!0),(0,e["default"])(n,s+"-fixed-outer","fixed"===p),(0,e["default"])(n,s+"-hide-outer","hide"===o),n));return d["default"].createElement("div",{className:u},d["default"].createElement("div",{className:s+"-bar",style:c}))},a}(d["default"].Component);a["default"]=g,g.defaultProps={prefixCls:"am-progress",percent:0,position:"fixed",unfilled:"show"},n.exports=a["default"]},851:function(n,a,s){"use strict";s(9),s(1166)},917:function(n,a,s){n.exports={basic:s(755)}},1166:function(n,a){}});