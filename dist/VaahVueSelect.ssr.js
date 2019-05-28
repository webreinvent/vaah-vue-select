'use strict';Object.defineProperty(exports,'__esModule',{value:true});var script = {
    name: 'VaahVueSelect',
    props:{
        options:{
            type: Array,
            default: function default$1() {
                return []
            },
        },
        value:{
            default: ""
        },
        option_value:{
            type: String,
            default: null
        },
        option_text:{
            type: String,
            default: null
        },
        default_text:{
            type: String,
            default: "Select Option"
        },
        select_class:{
            type: String,
            default: "form-control"
        }
    },
    data: function data () {

        var obj = {

            vh_options: this.options,
            vh_selected: this.value,
            vh_option_value: this.option_value,
            vh_option_text: this.option_text,
            vh_default_text: this.default_text,
            vh_class: this.select_class,

        };

        return obj
    },
    methods: {
        sendSelectedValue: function () {
            this.$emit('on-select', this.vh_selected);
        },
    }

};function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier
/* server only */
, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  if (typeof shadowMode !== 'boolean') {
    createInjectorSSR = createInjector;
    createInjector = shadowMode;
    shadowMode = false;
  } // Vue.extend constructor export interop.


  var options = typeof script === 'function' ? script.options : script; // render functions

  if (template && template.render) {
    options.render = template.render;
    options.staticRenderFns = template.staticRenderFns;
    options._compiled = true; // functional template

    if (isFunctionalTemplate) {
      options.functional = true;
    }
  } // scopedId


  if (scopeId) {
    options._scopeId = scopeId;
  }

  var hook;

  if (moduleIdentifier) {
    // server build
    hook = function hook(context) {
      // 2.3 injection
      context = context || // cached call
      this.$vnode && this.$vnode.ssrContext || // stateful
      this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext; // functional
      // 2.2 with runInNewContext: true

      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__;
      } // inject component styles


      if (style) {
        style.call(this, createInjectorSSR(context));
      } // register component module identifier for async chunk inference


      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier);
      }
    }; // used by ssr in case component is cached and beforeCreate
    // never gets called


    options._ssrRegister = hook;
  } else if (style) {
    hook = shadowMode ? function () {
      style.call(this, createInjectorShadow(this.$root.$options.shadowRoot));
    } : function (context) {
      style.call(this, createInjector(context));
    };
  }

  if (hook) {
    if (options.functional) {
      // register for functional component in vue file
      var originalRender = options.render;

      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context);
        return originalRender(h, context);
      };
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate;
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
    }
  }

  return script;
}

var normalizeComponent_1 = normalizeComponent;/* script */
var __vue_script__ = script;

/* template */
var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.vh_options)?_c('div',{staticClass:"vaah-vue-select"},[_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.vh_selected),expression:"vh_selected"}],class:_vm.vh_class,attrs:{"input":_vm.sendSelectedValue()},domProps:{"value":_vm.vh_selected},on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.vh_selected=$event.target.multiple ? $$selectedVal : $$selectedVal[0];}}},[_c('option',{attrs:{"value":""}},[_vm._v(_vm._s(_vm.vh_default_text))]),_vm._v(" "),_vm._l((_vm.vh_options),function(option){return (_vm.vh_option_value)?_c('option',{domProps:{"value":option[_vm.vh_option_value]}},[_vm._v(_vm._s(option[_vm.vh_option_text]))]):_vm._l((_vm.vh_options),function(option){return _c('option',[_vm._v(_vm._s(option))])})})],2)]):_vm._e()};
var __vue_staticRenderFns__ = [];

  /* style */
  var __vue_inject_styles__ = undefined;
  /* scoped */
  var __vue_scope_id__ = undefined;
  /* module identifier */
  var __vue_module_identifier__ = "data-v-368f6d18";
  /* functional template */
  var __vue_is_functional_template__ = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var component = normalizeComponent_1(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    undefined,
    undefined
  );// Import vue component

// install function executed by Vue.use()
function install(Vue) {
  if (install.installed) { return; }
  install.installed = true;
  Vue.component('vaah-vue-select', component);
}

// Create module definition for Vue.use()
var plugin = {
  install: install,
};

// To auto-install when vue is found
/* global window global */
var GlobalVue = null;
if (typeof window !== 'undefined') {
  GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue;
}
if (GlobalVue) {
  GlobalVue.use(plugin);
}

// Inject install function into component - allows component
// to be registered via Vue.use() as well as Vue.component()
component.install = install;

// It's possible to expose named exports when writing components that can
// also be used as directives, etc. - eg. import { RollupDemoDirective } from 'rollup-demo';
// export const RollupDemoDirective = component;
exports.default=component;