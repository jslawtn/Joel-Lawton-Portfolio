(function(e){function t(t){for(var n,r,o=t[0],l=t[1],c=t[2],p=0,f=[];p<o.length;p++)r=o[p],s[r]&&f.push(s[r][0]),s[r]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);u&&u(t);while(f.length)f.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],n=!0,o=1;o<a.length;o++){var l=a[o];0!==s[l]&&(n=!1)}n&&(i.splice(t--,1),e=r(r.s=a[0]))}return e}var n={},s={app:0},i=[];function r(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=n,r.d=function(e,t,a){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(a,n,function(t){return e[t]}.bind(null,n));return a},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var u=l;i.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"0f96":function(e,t,a){"use strict";var n=a("ae75"),s=a.n(n);s.a},2611:function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("cadf"),a("551c"),a("097d");var n=a("2b0e"),s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("div",{staticClass:"background",on:{mousemove:e.parallax}},[a("div",{staticClass:"parallax-layers"},[a("img",{staticClass:"layer-1",style:{transform:"translateX("+e.mouseX/500+"%) translateY("+e.mouseY/500+"%)"},attrs:{src:"images/stars.png"}}),a("img",{staticClass:"layer-2",style:{transform:"translateX("+e.mouseX/400+"%) translateY("+e.mouseY/400+"%)"},attrs:{src:"images/mountainLayer01.png"}}),a("img",{staticClass:"layer-3",attrs:{src:"images/FogLayer.png"}}),a("img",{staticClass:"layer-4",style:{transform:"translateX("+e.mouseX/200+"%) translateY("+e.mouseY/200+"%)"},attrs:{src:"images/TreeLayer.png"}})]),a("div",{staticClass:"page-header"},[a("img",{staticClass:"page-logo",attrs:{src:"images/joelLogo.png",alt:"Joel Lawton"}}),e._m(0),e._m(1),a("ul",{staticClass:"page-nav front"},[a("li",{class:{active:0===e.pageIndex}},[a("a",{on:{click:function(t){t.preventDefault(),e.pageIndex=0}}},[e._v(e._s(e.textConfig.who))])]),a("li",{class:{active:1===e.pageIndex}},[a("a",{on:{click:function(t){t.preventDefault(),e.pageIndex=1}}},[e._v(e._s(e.textConfig.what))])]),a("li",{class:{active:2===e.pageIndex}},[a("a",{on:{click:function(t){t.preventDefault(),e.pageIndex=2}}},[e._v(e._s(e.textConfig.where))])])])]),0===e.pageIndex?a("Who",{attrs:{textConfig:e.textConfig}}):e._e(),1===e.pageIndex?a("What",{attrs:{textConfig:e.textConfig}}):e._e(),2===e.pageIndex?a("Where",{attrs:{textConfig:e.textConfig}}):e._e()],1)])},i=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a",{staticClass:"front",attrs:{href:"https://twitter.com/JoelLawton3",target:"_blank"}},[a("i",{staticClass:"fa fa-twitter"})])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a",{staticClass:"front",attrs:{href:"https://www.linkedin.com/in/joel-lawton-6a6b37154/",target:"_blank"}},[a("i",{staticClass:"fa fa-linkedin"})])}],r=(a("7514"),a("fa9e")),o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"who-page"},[a("div",{staticClass:"container-box"},[a("h1",{staticClass:"container-title container-out"},[e._v(e._s(e.textConfig.hello))]),a("div",{staticClass:"container-body"},[a("h2",[e._v("joellawton65@gmail.com")]),a("div",{staticClass:"content-line"}),a("p",[e._v(e._s(e.textConfig.bio))])])])])},l=[],c={name:"who-page",props:{textConfig:{}}},u=c,p=(a("e8d0"),a("2877")),f=Object(p["a"])(u,o,l,!1,null,null,null);f.options.__file="Who.vue";var g=f.exports,d=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"what-page"},[a("div",{staticClass:"bottom-ease"},[a("h1",{staticClass:"container-title center"},[e._v(e._s(e.textConfig.skill))]),a("div",{staticClass:"skills"},e._l(e.textConfig.skills,function(t){return a("div",{key:t,staticClass:"circle"},[a("span",[e._v(e._s(t))])])}))])])},h=[],v={name:"what-page",props:{textConfig:{}}},m=v,b=(a("0f96"),Object(p["a"])(m,d,h,!1,null,null,null));b.options.__file="What.vue";var C=b.exports,_=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"where-page"},[a("div",{staticClass:"container-box"},[a("h1",{staticClass:"container-title container-out"},[e._v("OOPS...")]),a("div",{staticClass:"container-body"},[a("p",[e._v(e._s(e.textConfig.aliens))])])])])},x=[],w={name:"where-page",props:{textConfig:{}}},y=w,k=Object(p["a"])(y,_,x,!1,null,null,null);k.options.__file="Where.vue";var L=k.exports,S={name:"app",components:{Who:g,What:C,Where:L},data:function(){return{pageIndex:0,cardItems:{},textConfig:{},mouseX:0,mouseY:0}},created:function(){this.textConfig=r.languages.find(function(e){return e.language===navigator.language}),void 0===this.textConfig&&(this.textConfig=r.languages.find(function(e){return"en"===e.language}))},methods:{parallax:function(){this.mouseX=event.clientX,this.mouseY=event.clientY}}},O=S,j=(a("b044"),Object(p["a"])(O,s,i,!1,null,null,null));j.options.__file="Main.vue";var I=j.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(e){return e(I)}}).$mount("#app")},"87a0":function(e,t,a){},ae75:function(e,t,a){},b044:function(e,t,a){"use strict";var n=a("2611"),s=a.n(n);s.a},e8d0:function(e,t,a){"use strict";var n=a("87a0"),s=a.n(n);s.a},fa9e:function(e){e.exports={languages:[{language:"en-US",who:"WHO",what:"WHAT",where:"WHERE",skill:"SKILLS.",bio:"Hi! My name is Joel Lawton, a games designer and web developer from Greater Manchester, UK. My experience includes creating AR and VR apps, mobile games and web applications.",aliens:"It seems that page has been abducted by aliens. Please come back another time. The truth is out there...",hello:"HELLO.",skills:["CSS","HTML","JavaScript","C#","Photoshop","Unity 3D"]},{language:"en",who:"WHO",what:"WHAT",skill:"SKILLS.",bio:"Hi! My name is Joel Lawton, a games designer and web developer from Greater Manchester, UK. My experience includes creating AR and VR apps, mobile games and web applications.",aliens:"It seems that page has been abducted by aliens. Please come back another time. The truth is out there...",hello:"HELLO.",skills:["CSS","HTML","JavaScript","C#","Photoshop","Unity 3D"]},{language:"es",who:"Quien",what:"Qué",where:"Dónde",skill:"HABILIDADES.",bio:"¡Hola! Mi nombre es Joel Lawton, diseñador de juegos y desarrollador web de Greater Manchester, Reino Unido. Mi experiencia incluye la creación de aplicaciones AR y VR, juegos móviles y aplicaciones web.",aliens:"Parece que esta página ha sido secuestrada por extraterrestres. Por favor vuelve en otro momento. La verdad está ahí fuera...",hello:"HOLA.",skills:["CSS","HTML","JavaScript","C#","Photoshop","Unity 3D"]}]}}});
//# sourceMappingURL=app.280d9c24.js.map