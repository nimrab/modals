(function(){"use strict";var e={824:function(e,t,o){var a=o(144),n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"wrapper"},[o("div",{staticClass:"wrapper-content"},[o("section",[o("div",{staticClass:"container"},[o("button",{staticClass:"btn btnPrimary",on:{click:function(t){e.showModal=!e.showModal}}},[e._v("Show modal")]),o("modal",{directives:[{name:"show",rawName:"v-show",value:e.showModal,expression:"showModal"}],attrs:{title:"New modal"},on:{close:function(t){e.showModal=!1}}},[o("div",{attrs:{slot:"body"},slot:"body"},[o("p",[e._v("Some modal text")]),o("button",{staticClass:"btn btnPrimary",on:{click:function(t){e.showModal=!e.showModal}}},[e._v("Accept")])])]),o("button",{staticClass:"btn btnPrimary",on:{click:function(t){e.modalSecond.show=!e.modalSecond.show}}},[e._v("Show form")]),o("modal",{directives:[{name:"show",rawName:"v-show",value:e.modalSecond.show,expression:"modalSecond.show"}],attrs:{title:"Form modal"},on:{close:function(t){e.modalSecond.show=!1}}},[o("div",{attrs:{slot:"body"},slot:"body"},[o("form",{on:{submit:function(t){return t.preventDefault(),e.submitSecondForm.apply(null,arguments)}}},[o("label",[e._v("Name")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.modalSecond.name,expression:"modalSecond.name"}],attrs:{type:"text",required:""},domProps:{value:e.modalSecond.name},on:{input:function(t){t.target.composing||e.$set(e.modalSecond,"name",t.target.value)}}}),o("label",[e._v("Email")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.modalSecond.email,expression:"modalSecond.email"}],attrs:{type:"email",required:""},domProps:{value:e.modalSecond.email},on:{input:function(t){t.target.composing||e.$set(e.modalSecond,"email",t.target.value)}}}),o("button",{staticClass:"btn btnPrimary"},[e._v("Send")])])])]),o("button",{staticClass:"btn btnPrimary",on:{click:function(t){e.modalValidate=!e.modalValidate}}},[e._v("Show form with validate")]),o("modalValidate",{directives:[{name:"show",rawName:"v-show",value:e.modalValidate,expression:"modalValidate"}],on:{close:function(t){e.modalValidate=!1}}})],1)])])])},i=[],l=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("transition",{attrs:{name:"modal"}},[o("div",{staticClass:"modal__wrapper",on:{click:function(t){return e.$emit("close")}}},[o("div",{staticClass:"modal-content",on:{click:function(e){e.stopPropagation()}}},[o("div",{staticClass:"modal-header"},[o("span",{staticClass:"modal-title"},[e._v(" "+e._s(e.title)+" ")]),o("span",{staticClass:"button-close",on:{click:function(t){return e.$emit("close")}}},[e._v("×")])]),o("div",{staticClass:"modal-body"},[e._t("body",(function(){return[e._v("Default text")]}))],2)])])])},r=[],s={props:{title:{type:String,required:!0}},computed:{},mounted(){document.body.addEventListener("keyup",(e=>{"Escape"===e.key&&this.$emit("close")}))},methods:{}},m=s,c=o(1),d=(0,c.Z)(m,l,r,!1,null,"be57c2cc",null),u=d.exports,v=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("modal",{attrs:{title:"Form modal with validate"},on:{close:function(t){return e.$emit("close")}}},[o("div",{attrs:{slot:"body"},slot:"body"},[o("form",{on:{submit:function(t){return t.preventDefault(),e.onSubmit.apply(null,arguments)}}},[o("div",{staticClass:"form-item",class:{errorInput:e.$v.name.$error}},[o("label",[e._v("Name")]),e.$v.name.required?e._e():o("p",{staticClass:"errorText"},[e._v("Field is required")]),e.$v.name.minLength?e._e():o("p",{staticClass:"errorText"},[e._v("Name is "+e._s(e.$v.name.$params.minLength.min)+" symbols required")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],class:{error:e.$v.name.$error},domProps:{value:e.name},on:{change:function(t){return e.$v.name.$touch()},input:function(t){t.target.composing||(e.name=t.target.value)}}})]),o("div",{staticClass:"form-item",class:{errorInput:e.$v.email.$error}},[o("label",[e._v("Email")]),e.$v.email.required?e._e():o("p",{staticClass:"errorText"},[e._v("Field is required")]),e.$v.email.email?e._e():o("p",{staticClass:"errorText"},[e._v("Email is not valid")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],class:{error:e.$v.email.$error},domProps:{value:e.email},on:{change:function(t){return e.$v.email.$touch()},input:function(t){t.target.composing||(e.email=t.target.value)}}})]),o("button",{staticClass:"btn btnPrimary"},[e._v("Send")])])])])},p=[],f=o(379),h={components:{modal:u},data(){return{name:"",email:""}},validations:{name:{required:f.C1,minLength:(0,f.Ei)(4)},email:{required:f.C1,email:f.Do}},methods:{onSubmit(){if(this.$v.$touch(),!this.$v.$invalid){const e={name:this.name,email:this.email};console.log(e),this.name="",this.email="",this.$v.$reset(),this.$emit("close")}}}},b=h,w=(0,c.Z)(b,v,p,!1,null,null,null),$=w.exports,_={components:{modal:u,modalValidate:$},data(){return{showModal:!1,modalSecond:{show:!1,name:"",email:""},modalValidate:!1}},computed:{},methods:{submitSecondForm(){console.log({name:this.modalSecond.name,email:this.modalSecond.email}),this.modalSecond.name="",this.modalSecond.email="",this.modalSecond.show=!1}}},y=_,g=(0,c.Z)(y,n,i,!1,null,null,null),S=g.exports,C=o(620);a.Z.use(C.ZP),a.Z.config.productionTip=!1,new a.Z({render:e=>e(S)}).$mount("#app")}},t={};function o(a){var n=t[a];if(void 0!==n)return n.exports;var i=t[a]={exports:{}};return e[a](i,i.exports,o),i.exports}o.m=e,function(){var e=[];o.O=function(t,a,n,i){if(!a){var l=1/0;for(c=0;c<e.length;c++){a=e[c][0],n=e[c][1],i=e[c][2];for(var r=!0,s=0;s<a.length;s++)(!1&i||l>=i)&&Object.keys(o.O).every((function(e){return o.O[e](a[s])}))?a.splice(s--,1):(r=!1,i<l&&(l=i));if(r){e.splice(c--,1);var m=n();void 0!==m&&(t=m)}}return t}i=i||0;for(var c=e.length;c>0&&e[c-1][2]>i;c--)e[c]=e[c-1];e[c]=[a,n,i]}}(),function(){o.d=function(e,t){for(var a in t)o.o(t,a)&&!o.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};o.O.j=function(t){return 0===e[t]};var t=function(t,a){var n,i,l=a[0],r=a[1],s=a[2],m=0;if(l.some((function(t){return 0!==e[t]}))){for(n in r)o.o(r,n)&&(o.m[n]=r[n]);if(s)var c=s(o)}for(t&&t(a);m<l.length;m++)i=l[m],o.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return o.O(c)},a=self["webpackChunkmodals"]=self["webpackChunkmodals"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=o.O(void 0,[998],(function(){return o(824)}));a=o.O(a)})();