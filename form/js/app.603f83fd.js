webpackJsonp([1],{0:function(t,e,r){t.exports=r("NHnr")},"8J/u":function(t,e){},Bqfk:function(t,e){},"IPH/":function(t,e){},MfU3:function(t,e){},NHnr:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={};r.d(n,"FORM_GETTER_TYPES",function(){return Vt}),r.d(n,"FORM_MUTATION_TYPES",function(){return $t}),r.d(n,"namespaced",function(){return Mt}),r.d(n,"state",function(){return jt}),r.d(n,"getters",function(){return Rt}),r.d(n,"mutations",function(){return Ct});var i=r("/5sW"),o={},a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("router-view")],1)},u=[],l=r("XyMi");function s(t){r("VPf6")}var m=!1,c=s,f="data-v-bd610c68",h=null,d=Object(l["a"])(o,a,u,m,c,f,h),v=d.exports,p=r("/ocq"),y=(r("EuXz"),r("Biqn")),_=r.n(y),g=r("NM/j"),b=r.n(g),E=(r("FKfb"),r("Z60a")),x=r.n(E),A=r("C9uT"),T=r.n(A),S={},w=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";x()(this,t),this.value=e}return T()(t,[{key:"validator",value:function(){return[]}}]),t}();w.MESSAGES=S;var N=r("T/v0"),D=r.n(N),I=r("j/rp"),P=r.n(I),O=function(t){function e(){var t,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return x()(this,e),t=D()(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,r)),t.options=[],t}return P()(e,t),e}(w),k=function(t){return 0===String(t).length},L=function(t){return/^[a-zA-Z0-9.!#$%&'*+\\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(t)},V=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=e.max,n=void 0===r?1/0:r,i=e.min,o=void 0===i?0:i,a=String(t);return!(a.length>n)&&!(a.length<o)},$={EMPTY:"入力が必須の項目です",EXPECT_LENGTH:"16文字以内で入力してください"},M=function(t){function e(){var t,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return x()(this,e),t=D()(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,r)),t.maxlength=17,t}return P()(e,t),T()(e,[{key:"validator",value:function(){var t=[];return k(this.value)&&t.push($.EMPTY),!1===V(this.value,{max:this.maxlength-1})&&t.push($.EXPECT_LENGTH),t}}]),e}(w);M.MESSAGES=$;var j={EMPTY:"入力が必須の項目です",INVALID_EMAIL:"メールアドレスを入力してください",EXPECT_LENGTH:"128文字以内で入力してください"},R=function(t){function e(){var t,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return x()(this,e),t=D()(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,r)),t.maxlength=129,t}return P()(e,t),T()(e,[{key:"validator",value:function(){var t=[];return k(this.value)&&t.push(j.EMPTY),!1===L(this.value)&&t.push(j.INVALID_EMAIL),!1===V(this.value,{max:this.maxlength-1})&&t.push(j.EXPECT_LENGTH),t}}]),e}(w);R.MESSAGES=j;var C={EMPTY:"選択が必須の項目です",INVALID:"不正な操作が必要な行われました"},q=function(t){function e(){var t,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return x()(this,e),t=D()(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,r)),t.options=[{text:"サービスについて",value:"サービスについて"},{text:"採用について",value:"採用について"},{text:"その他（タイトルにご記入ください）",value:"その他（タイトルにご記入ください）"}],t}return P()(e,t),T()(e,[{key:"validator",value:function(){var t=this,e=[];return k(this.value)?(e.push(C.EMPTY),e):(!1===this.options.some(function(e){return t.value===e.value})&&e.push(C.INVALID),e)}}]),e}(O);q.MESSAGES=C;var U={EXPECT_LENGTH:"32文字以内で入力してください"},G=function(t){function e(){var t,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return x()(this,e),t=D()(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,r)),t.maxlength=33,t}return P()(e,t),T()(e,[{key:"validator",value:function(){var t=[];return!1===V(this.value,{max:this.maxlength-1})&&t.push(U.EXPECT_LENGTH),t}}]),e}(w);G.MESSAGES=U;var Y={EMPTY:"入力が必須の項目です",EXPECT_LENGTH:"500文字以内で入力してください"},H=function(t){function e(){var t,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return x()(this,e),t=D()(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,r)),t.maxlength=501,t}return P()(e,t),T()(e,[{key:"validator",value:function(){var t=[];return k(this.value)&&t.push(Y.EMPTY),!1===V(this.value,{max:this.maxlength-1})&&t.push(Y.EXPECT_LENGTH),t}}]),e}(w);H.MESSAGES=Y;var B=function(){function t(){x()(this,t)}return T()(t,[{key:"properties",value:function(){return Object.entries(this).reduce(function(t,e){var r=b()(e,2),n=r[0],i=r[1];return t[n]=i instanceof w?i.value:i,t},{})}},{key:"propertyNames",value:function(){return Object.keys(this)}},{key:"buildRequestBody",value:function(){return _()({},this.properties())}}]),t}(),z=function(t){function e(){var t,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=r.name,i=void 0===n?"":n,o=r.email,a=void 0===o?"":o,u=r.category,l=void 0===u?"":u,s=r.title,m=void 0===s?"":s,c=r.body,f=void 0===c?"":c;return x()(this,e),t=D()(this,(e.__proto__||Object.getPrototypeOf(e)).call(this)),t.name=new M(i),t.email=new R(a),t.category=new q(l),t.title=new G(m),t.body=new H(f),t}return P()(e,t),T()(e,[{key:"buildRequestBody",value:function(){return{contact:_()({},this.properties())}}}]),e}(B),X=function(t){function e(){var t,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=r.email,i=void 0===n?"":n,o=r.emailDirty,a=void 0===o?"":o,u=r.emailTouched,l=void 0===u?"":u,s=r.emailTouechAndDirty,m=void 0===s?"":s,c=r.emailTouchedAfterDirty,f=void 0===c?"":c;return x()(this,e),t=D()(this,(e.__proto__||Object.getPrototypeOf(e)).call(this)),t.email=new R(i),t.emailDirty=new R(a),t.emailTouched=new R(l),t.emailTouechAndDirty=new R(m),t.emailTouchedAfterDirty=new R(f),t}return P()(e,t),e}(B),Z={props:{id:{type:String,required:!0},formItem:{validator:function(t){return t instanceof w},required:!0},label:{type:String,required:!0},name:{type:String},placeholder:{type:String,default:""},required:{type:String},maxlength:{type:[String,Number],validator:function(t){return!1===isNaN(Number(t))}},dirty:{type:String},touched:{type:String},touchedAfterDirty:{type:String},initialValidation:{type:[String,Boolean]}},mounted:function(){this.hasAttr.initialValidation&&this.validate()},data:function(){return{messages:[],hasAttr:{dirty:"string"===typeof this.dirty,touched:"string"===typeof this.touched,touchedAfterDirty:"string"===typeof this.touchedAfterDirty,initialValidation:"boolean"===typeof this.initialValidation?this.initialValidation:"string"===typeof this.initialValidation},state:{dirty:!1,touched:!1,touchedAfterDirty:!1}}},computed:{value:function(){return this.formItem.value},validator:function(){return this.formItem.validator},nameAttr:function(){return this.name||this.id},hasError:function(){return this.messages.length>0},isDirty:function(){return this.state.dirty},isTouched:function(){return this.state.touched},isTouchedAfterDirty:function(){return this.state.touchedAfterDirty},attrShowErrorConditions:function(){return(!this.hasAttr.dirty||!1!==this.isDirty)&&((!this.hasAttr.touched||!1!==this.isTouched)&&(!this.hasAttr.touchedAfterDirty||!1!==this.isTouchedAfterDirty))},showError:function(){return this.hasError&&this.attrShowErrorConditions}},watch:{value:function(){this.validate()}},methods:{handleInput:function(t){this.$emit("input",t.target.value),this.state.dirty=!0},handleBlur:function(){this.state.touched=!0,this.isDirty&&(this.state.touchedAfterDirty=!0),this.validate()},validate:function(){this.messages=this.validator(),this.notify()},notify:function(){this.$emit("notify",{name:this.nameAttr,result:!this.hasError})}}},F={mixins:[Z],props:{type:{type:String,default:"text"}}},J=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("label",{attrs:{for:t.id}},[t._v(t._s(t.label))]),r("input",{class:{"has-error":t.showError},attrs:{type:t.type,id:t.id,name:t.nameAttr,placeholder:t.placeholder,required:t.required,maxlength:t.maxlength},domProps:{value:t.value},on:{input:t.handleInput,blur:t.handleBlur}}),r("ul",{directives:[{name:"show",rawName:"v-show",value:t.showError,expression:"showError"}]},t._l(t.messages,function(e,n){return r("li",{key:"message-"+n},[t._v(t._s(e))])}))])},K=[];function W(t){r("Bqfk")}var Q=!1,tt=W,et="data-v-e416ccaa",rt=null,nt=Object(l["a"])(F,J,K,Q,tt,et,rt),it=nt.exports,ot={mixins:[Z],props:{cols:{type:Number},rows:{type:Number}},data:function(){return{model:this.formItem.value}}},at=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("label",{attrs:{for:t.id}},[t._v(t._s(t.label))]),r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.model,expression:"model"}],class:{"has-error":t.showError},attrs:{id:t.id,name:t.nameAttr,cols:t.cols,rows:t.rows,placeholder:t.placeholder,required:t.required,maxlength:t.maxlength},domProps:{value:t.model},on:{input:[function(e){e.target.composing||(t.model=e.target.value)},t.handleInput],blur:t.handleBlur}}),r("ul",{directives:[{name:"show",rawName:"v-show",value:t.showError,expression:"showError"}]},t._l(t.messages,function(e,n){return r("li",{key:t.id+"-"+n},[t._v(t._s(e))])}))])},ut=[];function lt(t){r("Tcgy")}var st=!1,mt=lt,ct="data-v-2de0aad4",ft=null,ht=Object(l["a"])(ot,at,ut,st,mt,ct,ft),dt=ht.exports,vt={mixins:[Z],props:{formItem:{validator:function(t){return t instanceof O},required:!0}},data:function(){return{model:this.formItem.value}},computed:{options:function(){return this.formItem.options}}},pt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("label",{attrs:{for:t.id}},[t._v(t._s(t.label))]),r("select",{directives:[{name:"model",rawName:"v-model",value:t.model,expression:"model"}],class:{"has-error":t.showError},attrs:{id:t.id,name:t.nameAttr,required:t.required},on:{input:t.handleInput,blur:t.handleBlur,change:function(e){var r=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.model=e.target.multiple?r:r[0]}}},[r("option",{attrs:{value:""}},[t._v("選択してください")]),t._l(t.options,function(e,n){return r("option",{key:"option-"+n,domProps:{value:e.value}},[t._v(t._s(e.text))])})],2),r("ul",{directives:[{name:"show",rawName:"v-show",value:t.showError,expression:"showError"}]},t._l(t.messages,function(e,n){return r("li",{key:"message-"+n},[t._v(t._s(e))])}))])},yt=[];function _t(t){r("nUwa")}var gt,bt,Et=!1,xt=_t,At="data-v-38822256",Tt=null,St=Object(l["a"])(vt,pt,yt,Et,xt,At,Tt),wt=St.exports,Nt=(r("A0n/"),r("fx22"),function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];x()(this,t),this._names=e,this._results={},this.hasError=!0,this._initializeResults()}return T()(t,[{key:"setResult",value:function(t,e){return this._results[t]=e,this.hasError=!0!==e||this._hasErrorResults(),this}},{key:"_initializeResults",value:function(){var t=!0,e=!1,r=void 0;try{for(var n,i=this._names[Symbol.iterator]();!(t=(n=i.next()).done);t=!0){var o=n.value;this._results[o]=!1}}catch(t){e=!0,r=t}finally{try{t||null==i.return||i.return()}finally{if(e)throw r}}}},{key:"_hasErrorResults",value:function(){var t=this;return Object.keys(this._results).some(function(e){return!t._results[e]})}}]),t}()),Dt=r("fKPv"),It=r.n(Dt),Pt=function(t){var e=t.moduleName,r=t.types;return Object.entries(r).reduce(function(t,r){var n=b()(r,2),i=n[0],o=n[1];return t[i]="".concat(e,"/").concat(o),t},{})},Ot="form",kt={VALUES:"VALUES",IS_EMPTY:"IS_EMPTY"},Lt={SET_VALUES:"SET_VALUES",CLEAR_VALUES:"CLEAR_VALUES"},Vt=Pt({moduleName:Ot,types:kt}),$t=Pt({moduleName:Ot,types:Lt}),Mt=!0,jt={values:null},Rt=(gt={},It()(gt,kt.VALUES,function(t){return null===t.values?(new z).properties():t.values}),It()(gt,kt.IS_EMPTY,function(t){return null===t.values}),gt),Ct=(bt={},It()(bt,Lt.SET_VALUES,function(t,e){t.values=e}),It()(bt,Lt.CLEAR_VALUES,function(t){t.values=null}),bt),qt={data:function(){var t=this.$store.getters[Vt.VALUES],e=new z(t);return{form:e,formObserver:new Nt(e.propertyNames())}},methods:{handleSubmit:function(){this.$store.commit($t.SET_VALUES,this.form.properties()),this.$router.push("/confirm")},handleNotify:function(t){var e=t.name,r=t.result;this.formObserver.setResult(e,r)}},components:{FormInput:it,FormSelect:wt,FormTextarea:dt}},Ut=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h1",[t._v("お問い合わせ")]),r("form",{on:{submit:function(e){return e.preventDefault(),t.handleSubmit(e)}}},[r("form-input",{attrs:{id:"name",label:"お名前/所属（必須）",formItem:t.form.name,maxlength:t.form.name.maxlength,dirty:"",touched:"",initialValidation:""},on:{notify:t.handleNotify},model:{value:t.form.name.value,callback:function(e){t.$set(t.form.name,"value","string"===typeof e?e.trim():e)},expression:"form.name.value"}}),r("form-input",{attrs:{id:"email",label:"メールアドレス（必須）",type:"email",formItem:t.form.email,maxlength:t.form.email.maxlength,dirty:"",touched:"",initialValidation:""},on:{notify:t.handleNotify},model:{value:t.form.email.value,callback:function(e){t.$set(t.form.email,"value","string"===typeof e?e.trim():e)},expression:"form.email.value"}}),r("form-select",{attrs:{id:"category",label:"カテゴリ（必須）",formItem:t.form.category,dirty:"",touched:"",initialValidation:""},on:{notify:t.handleNotify},model:{value:t.form.category.value,callback:function(e){t.$set(t.form.category,"value",e)},expression:"form.category.value"}}),r("form-input",{attrs:{id:"title",label:"タイトル",formItem:t.form.title,maxlength:t.form.title.maxlength,dirty:"",touched:"",initialValidation:""},on:{notify:t.handleNotify},model:{value:t.form.title.value,callback:function(e){t.$set(t.form.title,"value","string"===typeof e?e.trim():e)},expression:"form.title.value"}}),r("form-textarea",{attrs:{id:"body",label:"お問い合わせ内容（必須）",formItem:t.form.body,maxlength:t.form.body.maxlength,dirty:"",touched:"",initialValidation:""},on:{notify:t.handleNotify},model:{value:t.form.body.value,callback:function(e){t.$set(t.form.body,"value","string"===typeof e?e.trim():e)},expression:"form.body.value"}}),r("button",{attrs:{type:"submit",disabled:t.formObserver.hasError}},[t._v("確認画面へ")])],1)])},Gt=[];function Yt(t){r("8J/u")}var Ht=!1,Bt=Yt,zt="data-v-1844a10a",Xt=null,Zt=Object(l["a"])(qt,Ut,Gt,Ht,Bt,zt,Xt),Ft=Zt.exports,Jt=(r("y9m4"),r("SldL"),r("7hDC")),Kt=r.n(Jt),Wt=r("NYxO");i["a"].use(Wt["a"]);var Qt=new Wt["a"].Store({modules:{form:n}}),te={beforeRouteEnter:function(t,e,r){Qt.getters[Vt.IS_EMPTY]&&r("/form"),r()},data:function(){return{values:this.$store.getters[Vt.VALUES],status:{submitting:!1}}},computed:{submittable:function(){return!1===this.status.submitting}},methods:{handleClickSubmit:function(){var t=Kt()(regeneratorRuntime.mark(function t(){var e,r;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e=new z(this.values).buildRequestBody(),t.next=3,this.submit(e);case 3:r=t.sent,console.log("result",r),this.$store.commit($t.CLEAR_VALUES),this.$router.push("/complete");case 7:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),submit:function(t){var e=this;return this.status.submitting=!0,new Promise(function(r){setTimeout(function(){console.log("request body",t),e.status.submitting=!1,r({message:"success"})},1e3)})}}},ee=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h1",[t._v("Confirm")]),r("div",[r("p",[t._v("お名前")]),r("p",[t._v(t._s(t.values.name))]),r("p",[t._v("メールアドレス")]),r("p",[t._v(t._s(t.values.email))]),r("p",[t._v("カテゴリ")]),r("p",[t._v(t._s(t.values.category))]),r("p",[t._v("タイトル")]),r("p",[t._v(t._s(t.values.title))]),r("p",[t._v("お問い合わせ内容")]),r("p",[t._v(t._s(t.values.body))])]),r("div",[r("button",{attrs:{disabled:!t.submittable},on:{click:t.handleClickSubmit}},[t._v("送信する")]),r("router-link",{attrs:{to:"/form"}},[t._v("戻る")])],1)])},re=[];function ne(t){r("MfU3")}var ie=!1,oe=ne,ae="data-v-1fa6fcb4",ue=null,le=Object(l["a"])(te,ee,re,ie,oe,ae,ue),se=le.exports,me={beforeRouteEnter:function(t,e,r){"/confirm"!==e.path&&r("/form"),r()}},ce=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h1",[t._v("Complete")]),r("router-link",{attrs:{to:"/form"}},[t._v("フォームへ")])],1)},fe=[];function he(t){r("c0ni")}var de=!1,ve=he,pe="data-v-d46aac8a",ye=null,_e=Object(l["a"])(me,ce,fe,de,ve,pe,ye),ge=_e.exports,be={data:function(){var t=new X;return{form:t,formObserver:new Nt(t.propertyNames())}},methods:{handleSubmit:function(){console.log(this.form.properties())},handleNotify:function(t){var e=t.name,r=t.result;this.formObserver.setResult(e,r)}},components:{FormInput:it}},Ee=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h1",[t._v("バリデーションのタイミングを決める属性の動作サンプル")]),r("form",{on:{submit:function(e){return e.preventDefault(),t.handleSubmit(e)}}},[r("form-input",{attrs:{id:"email",label:"メールアドレス（属性なし）",type:"email",formItem:t.form.email,maxlength:t.form.email.maxlength},on:{notify:t.handleNotify},model:{value:t.form.email.value,callback:function(e){t.$set(t.form.email,"value","string"===typeof e?e.trim():e)},expression:"form.email.value"}}),r("form-input",{attrs:{id:"emailDirty",label:"メールアドレス（dirty）",type:"email",formItem:t.form.emailDirty,maxlength:t.form.emailDirty.maxlength,dirty:""},on:{notify:t.handleNotify},model:{value:t.form.emailDirty.value,callback:function(e){t.$set(t.form.emailDirty,"value","string"===typeof e?e.trim():e)},expression:"form.emailDirty.value"}}),r("form-input",{attrs:{id:"emailTouched",label:"メールアドレス（touched）",type:"email",formItem:t.form.emailTouched,maxlength:t.form.emailTouched.maxlength,touched:""},on:{notify:t.handleNotify},model:{value:t.form.emailTouched.value,callback:function(e){t.$set(t.form.emailTouched,"value","string"===typeof e?e.trim():e)},expression:"form.emailTouched.value"}}),r("form-input",{attrs:{id:"emailTouechAndDirty",label:"メールアドレス（touched and dirty）",type:"email",formItem:t.form.emailTouechAndDirty,maxlength:t.form.emailTouechAndDirty.maxlength,dirty:"",touched:""},on:{notify:t.handleNotify},model:{value:t.form.emailTouechAndDirty.value,callback:function(e){t.$set(t.form.emailTouechAndDirty,"value","string"===typeof e?e.trim():e)},expression:"form.emailTouechAndDirty.value"}}),r("form-input",{attrs:{id:"emailTouchedAfterDirty",label:"メールアドレス（touched-after-dirty）",type:"email",formItem:t.form.emailTouchedAfterDirty,maxlength:t.form.emailTouchedAfterDirty.maxlength,"touched-after-dirty":""},on:{notify:t.handleNotify},model:{value:t.form.emailTouchedAfterDirty.value,callback:function(e){t.$set(t.form.emailTouchedAfterDirty,"value","string"===typeof e?e.trim():e)},expression:"form.emailTouchedAfterDirty.value"}}),r("button",{attrs:{type:"submit",disabled:t.formObserver.hasError}},[t._v("送信ボタン（ログ出力）")])],1)])},xe=[];function Ae(t){r("IPH/")}var Te=!1,Se=Ae,we="data-v-6d49fc59",Ne=null,De=Object(l["a"])(be,Ee,xe,Te,Se,we,Ne),Ie=De.exports;i["a"].use(p["a"]);var Pe=new p["a"]({mode:"history",routes:[{path:"/form",name:"form",component:Ft},{path:"/confirm",name:"confirm",component:se},{path:"/complete",name:"complete",component:ge},{path:"/samples/validation-attr",name:"samaples-validation-attr",component:Ie},{path:"*",redirect:"/form"}]});i["a"].config.productionTip=!1,new i["a"]({router:Pe,store:Qt,render:function(t){return t(v)}}).$mount("#app")},Tcgy:function(t,e){},VPf6:function(t,e){},c0ni:function(t,e){},nUwa:function(t,e){}},[0]);
//# sourceMappingURL=app.603f83fd.js.map