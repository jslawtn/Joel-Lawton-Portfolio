(function(e){function t(t){for(var a,i,s=t[0],l=t[1],c=t[2],f=0,d=[];f<s.length;f++)i=s[f],r[i]&&d.push(r[i][0]),r[i]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);u&&u(t);while(d.length)d.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,s=1;s<n.length;s++){var l=n[s];0!==r[l]&&(a=!1)}a&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var a={},r={app:0},o=[];function i(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var u=l;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},2611:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[e._m(0),n("div",{staticClass:"background"}),n("div",{staticClass:"mountainBackground",on:{mousemove:e.parallax}},[n("img",{attrs:{id:"layer-1",src:"images/stars.png"}}),n("img",{attrs:{id:"layer-2",src:"images/mountainLayer01.png"}})]),e._m(1)])},o=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"page-header"},[n("img",{staticClass:"page-logo",attrs:{src:"images/joelLogo.png",alt:"Joel Lawton"}}),n("a",{attrs:{href:"https://twitter.com/JoelLawton3",target:"_blank"}},[n("i",{staticClass:"fa fa-twitter"})]),n("a",{attrs:{href:"https://www.linkedin.com/in/joel-lawton-6a6b37154/",target:"_blank"}},[n("i",{staticClass:"fa fa-linkedin"})]),n("ul",{staticClass:"page-nav"},[n("li",[e._v("WHO")]),n("li",[e._v("WHAT")]),n("li",[e._v("WHERE")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"page-body"},[n("p",{staticClass:"bottom-ease"},[e._v("Im Joel, a games and web developer from Greater Manchester, UK.")])])}],i=n("dff4"),s={name:"app",components:{},data:function(){return{storyIndex:0,cardItems:{}}},created:function(){this.cardItems=i},methods:{parallax:function(){var e=event.clientX,t=event.clientY,n=document.getElementById("layer-1"),a=document.getElementById("layer-2");n.style.transform="translateX("+e/500+"%) translateY("+t/500+"%)",a.style.transform="translateX("+e/100+"%) translateY("+t/100+"%)"}}},l=s,c=(n("b044"),n("2877")),u=Object(c["a"])(l,r,o,!1,null,null,null);u.options.__file="Main.vue";var f=u.exports,d=n("f6b0");a["a"].use(d["default"]),a["a"].config.productionTip=!1,new a["a"]({render:function(e){return e(f)}}).$mount("#app")},b044:function(e,t,n){"use strict";var a=n("2611"),r=n.n(a);r.a},dff4:function(e){e.exports={cards:[{id:0,name:"Rei",cardImg:"",date:"2018",body:"Rei is an action adventure game developed in 2018. Developed by a group of 5 Rei was created for my final Univeristy project ..."}]}}});
//# sourceMappingURL=app.31dede31.js.map