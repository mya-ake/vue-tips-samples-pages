webpackJsonp([1],{0:function(e,t,n){e.exports=n("NHnr")},"D/cJ":function(e,t){e.exports={baseUrl:"/vue-tips-sample-demos/i18n/"}},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});n("SldL");var a=n("7hDC"),r=n.n(a),o=n("/5sW"),c={computed:{changeLanguageTo:function(){switch(this.$i18n.locale){case"en":return"/ja";default:return"/en"}}}},u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{directives:[{name:"t",rawName:"v-t",value:"nav.home",expression:"'nav.home'"}],attrs:{to:"/"}}),e._v(" |\n    "),n("router-link",{directives:[{name:"t",rawName:"v-t",value:"nav.about",expression:"'nav.about'"}],attrs:{to:"/about"}}),e._v(" | \n    "),n("router-link",{directives:[{name:"t",rawName:"v-t",value:"nav.change-language",expression:"'nav.change-language'"}],attrs:{to:e.changeLanguageTo}})],1),n("router-view")],1)},i=[],s=n("XyMi"),l=!1,m=null,p=null,f=null,v=Object(s["a"])(c,u,i,l,m,p,f),h=v.exports,d=n("rzQm"),g=n.n(d),b=(n("EuXz"),n("/ocq")),x={beforeRouteUpdate:function(e,t,n){this.$forceUpdate(),n()}},w=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",[e._v(e._s(e.$t("home.title")))]),n("div",[n("dl",[n("dt",[e._v("$t")]),n("dd",[e._v(e._s(e.$t("home.text")))]),n("dt",[e._v("v-t")]),n("dd",{directives:[{name:"t",rawName:"v-t",value:"home.text",expression:"'home.text'"}]})])])])},_=[],k=!1,y=null,$=null,j=null,R=Object(s["a"])(x,w,_,k,y,$,j),L=R.exports,N=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",{directives:[{name:"t",rawName:"v-t",value:"about.title",expression:"'about.title'"}]})])},E=[],O=null,J=!1,M=null,T=null,U=null,q=Object(s["a"])(O,N,E,J,M,T,U),D=q.exports,S=n("Biqn"),X=n.n(S),z=(n("VjuZ"),n("mJx5"),n("gbyG"),n("TXmL")),A=n("mtWM"),H=n.n(A),P=n("D/cJ");o["a"].use(z["a"]);var W="ja",B=["ja","en"],C=["common","home","about"],G=C.reduce(function(e,t){return e[t]=B.reduce(function(e,t){return e[t]=!1,e},{}),e},{}),Q=function(e){return B.includes(e)},V=function(){if("undefined"===typeof window)return W;var e=window.location.pathname.replace(/^\/|\/$/g,"").split("/").shift();return!1===Q(e)?W:e},Y=new z["a"]({locale:W,fallbackLocale:W,messages:{}}),Z=function(){var e=r()(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(!1!==Q(t)){e.next=2;break}return e.abrupt("return");case 2:if(t!==Y.locale){e.next=4;break}return e.abrupt("return");case 4:return e.next=6,I(t,"common");case 6:Y.locale=t,H.a.defaults.headers.common["Accept-Language"]=t,document.querySelector("html").setAttribute("lang",t);case 9:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),F=function(e,t){return!1!==Q(e)&&("string"===typeof t&&(t in G!==!1&&!0!==G[t][e]))},I=function(){var e=r()(regeneratorRuntime.mark(function e(t,n){var a,r,o,c;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(a=F(t,n),!1!==a){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,H.a.get("".concat(P["baseUrl"],"locales/").concat(n,"/").concat(t,".json")).catch(function(e){return e.response});case 5:if(r=e.sent,200===r.status){e.next=8;break}return e.abrupt("return");case 8:o=r.data,c=X()({},Y.messages[t],o),Y.setLocaleMessage(t,c),G[n][t]=!0;case 12:case"end":return e.stop()}},e,this)}));return function(t,n){return e.apply(this,arguments)}}();o["a"].use(b["a"]);var K=[{path:"/",name:"home",component:L,meta:{locale:{category:"home"}}},{path:"/about",name:"about",component:D,meta:{locale:{category:"about"}}}],ee=K.map(function(e){return{path:"/:lang".concat(e.path),name:"lang-".concat(e.name),component:e.component,meta:e.meta}});K.forEach(function(e){delete e.component,e.redirect=function(e){return"/".concat(Y.locale).concat(e.fullPath)}});var te=K.concat(ee),ne=new b["a"]({mode:"history",routes:g()(te).concat([{path:"*",redirect:"/".concat(Y.fallbackLocale)}])}),ae=n("NYxO");o["a"].use(ae["a"]);var re=new ae["a"].Store({state:{},mutations:{},actions:{}});o["a"].config.productionTip=!1,ne.beforeEach(function(){var e=r()(regeneratorRuntime.mark(function e(t,n,a){var r,o;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(r=t.params.lang,!1!==Q(r)){e.next=4;break}return a("/".concat(Y.locale)),e.abrupt("return");case 4:return o=t.meta.locale,e.next=7,Z(r);case 7:return e.next=9,I(r,o.category);case 9:a();case 10:case"end":return e.stop()}},e,this)}));return function(t,n,a){return e.apply(this,arguments)}}()),r()(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=V(),e.next=3,Z(t);case 3:return e.next=5,I(t,"common");case 5:new o["a"]({router:ne,store:re,i18n:Y,render:function(e){return e(h)}}).$mount("#app");case 6:case"end":return e.stop()}},e,this)}))()}},[0]);
//# sourceMappingURL=app.58c245b8.js.map