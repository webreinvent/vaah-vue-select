var e=function(e,t,n,o,s,i,l,a,r,d){"boolean"!=typeof l&&(r=a,a=l,l=!1);var u,_="function"==typeof n?n.options:n;if(e&&e.render&&(_.render=e.render,_.staticRenderFns=e.staticRenderFns,_._compiled=!0,s&&(_.functional=!0)),o&&(_._scopeId=o),i?(u=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),t&&t.call(this,r(e)),e&&e._registeredComponents&&e._registeredComponents.add(i)},_._ssrRegister=u):t&&(u=l?function(){t.call(this,d(this.$root.$options.shadowRoot))}:function(e){t.call(this,a(e))}),u)if(_.functional){var c=_.render;_.render=function(e,t){return u.call(t),c(e,t)}}else{var v=_.beforeCreate;_.beforeCreate=v?[].concat(v,u):[u]}return n}({render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.vh_options?n("div",{staticClass:"vaah-vue-select"},[n("select",{directives:[{name:"model",rawName:"v-model",value:e.vh_selected,expression:"vh_selected"}],class:e.vh_class,attrs:{input:e.sendSelectedValue(),change:e.sendSelectedValue()},domProps:{value:e.vh_selected},on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.vh_selected=t.target.multiple?n:n[0]}}},[n("option",{attrs:{disabled:"",value:""}},[e._v(e._s(e.vh_default_text))]),e._v(" "),e._l(e.vh_options,function(t){return e.vh_option_value?n("option",{domProps:{value:t[e.vh_option_value]}},[e._v(e._s(t[e.vh_option_text]))]):e._l(e.vh_options,function(t){return n("option",[e._v(e._s(t))])})})],2)]):e._e()},staticRenderFns:[]},void 0,{name:"VaahVueSelect",props:{options:{type:Array,default:null},value:{default:null},option_value:{type:String,default:null},option_text:{type:String,default:null},default_text:{type:String,default:"Select Option"},select_class:{type:String,default:"form-control"}},data:function(){return{vh_options:this.options,vh_selected:this.value,vh_option_value:this.option_value,vh_option_text:this.option_text,vh_default_text:this.default_text,vh_class:this.select_class}},created:function(){this.setToStrings()},methods:{setToStrings:function(){return null===this.vh_selected&&(this.vh_selected=""),this.vh_selected},sendSelectedValue:function(){this.$emit("input",this.vh_selected),this.$emit("change",this.vh_selected)}}},void 0,!1,void 0,void 0,void 0);function t(n){t.installed||(t.installed=!0,n.component("vaah-vue-select",e))}var n={install:t},o=null;"undefined"!=typeof window?o=window.Vue:"undefined"!=typeof global&&(o=global.Vue),o&&o.use(n),e.install=t;export default e;
