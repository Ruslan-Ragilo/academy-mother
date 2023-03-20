import { useSSRContext, mergeProps } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
const ElementsButtonsSecondary_vue_vue_type_style_index_0_scoped_70f4b5cd_lang = "";
const _sfc_main$6 = {
  props: {
    title: {
      type: String,
      default: "title"
    },
    hoverBackground: {
      type: String,
      default: "#644C5C"
    },
    link: {
      type: String,
      default: ""
    }
  },
  computed: {
    calculateStyles() {
      return {
        "--color-hover": this.hoverBackground
      };
    }
  }
};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "button-secondary",
    style: $options.calculateStyles
  }, _attrs))} data-v-70f4b5cd>`);
  if (!$props.link) {
    _push(`<div data-v-70f4b5cd>${ssrInterpolate($props.title)}</div>`);
  } else {
    _push(`<a${ssrRenderAttr("href", $props.link)} data-v-70f4b5cd>${ssrInterpolate($props.title)}</a>`);
  }
  _push(`</div>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/elements/buttons/ElementsButtonsSecondary.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$6], ["__scopeId", "data-v-70f4b5cd"]]);
const _sfc_main$5 = {};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "105",
    height: "110",
    viewBox: "0 0 105 110",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path fill-rule="evenodd" clip-rule="evenodd" d="M11.3565 37.1125C4.12575 42.3945 -0.39898 50.9829 0.0277671 58.6159C0.434421 65.8953 5.15305 72.633 12.788 76.8372C17.274 79.3074 22.7059 81.2954 36.1655 85.392C61.6197 93.1391 70.9474 96.3719 77.8205 99.8287C82.3054 102.084 87.9518 105.705 91.0036 108.281C93.6903 110.55 94.0172 110.562 93.5547 108.381C91.2234 97.3805 93.0106 81.8392 99.6569 55.3185C104.846 34.6145 105.832 26.902 104.41 18.153C103.84 14.6473 101.522 8.86581 99.832 6.73793C96.1449 2.09468 88.852 -0.506636 81.1722 0.0825239C75.6588 0.505176 72.3421 1.59321 66.9269 4.75443C55.9994 11.1342 50.531 21.3656 51.545 33.5329C51.7022 35.4212 51.7547 37.0109 51.6612 37.065C51.5676 37.1191 49.9547 36.2275 48.0769 35.0833C41.8725 31.3018 36.113 29.8083 29.5005 30.2646C23.0664 30.7087 16.9764 33.0073 11.3565 37.1125Z"></path></svg>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/svg/heartIcon.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_1$1 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$5]]);
const _sfc_main$4 = {};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "67",
    height: "67",
    viewBox: "0 0 67 67",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path d="M67 39.3172C65.8407 45.8423 62.7576 51.8796 58.1408 56.6657C53.524 61.4519 47.5808 64.7719 41.0626 66.2059C34.5445 67.64 27.7442 67.1237 21.5218 64.7223C15.2994 62.3209 9.93419 58.1423 6.10477 52.7148C2.27536 47.2874 0.153677 40.8549 0.00803567 34.2308C-0.137605 27.6067 1.69933 21.0885 5.28656 15.5005C8.87378 9.91243 14.0502 5.50554 20.1612 2.83708C26.2721 0.168612 33.0432 -0.641577 39.6182 0.508964L33.7564 33.5L67 39.3172Z"></path></svg>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/svg/SvgCheeseIcon.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_2$1 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$4]]);
const _sfc_main$3 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "69",
    height: "53",
    viewBox: "0 0 69 53",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path d="M45.9315 17.4036L51.1867 0L69 5.6541L58.3768 40.8347L40.5674 35.1818L40.401 35.7329L35.325 53L0 42.0688L5.23846 24.2491L22.7151 29.6572L28.1222 11.7507L45.9315 17.4036Z"></path></svg>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/svg/union.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$2 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "150",
    height: "85",
    viewBox: "0 0 150 85",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path d="M0 11.1337L65.6665 29.7629L25.7542 85L150 0L0 11.1337Z"></path></svg>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/svg/arrow.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "85",
    height: "85",
    viewBox: "0 0 85 85",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path d="M30.4861 73.5651C24.7334 70.2632 21.0387 63.9588 20.2146 56.0386C19.8025 52.0778 20.1252 47.8751 21.1246 43.6751L10.4461 62.0627C4.69349 58.7608 0.998734 52.4564 0.174653 44.5363C-0.649427 36.6162 1.46468 27.7292 6.05189 19.8303C10.6391 11.9315 17.3237 5.6678 24.635 2.41725C31.9464 -0.8333 39.2857 -0.804466 45.0383 2.49741L34.3599 20.8849C37.5189 17.9244 41.0185 15.5452 44.675 13.9196C51.9864 10.6691 59.3256 10.6979 65.0783 13.9998L54.6226 32.0038C57.6916 29.1898 61.0713 26.9219 64.5967 25.3546C71.9081 22.104 79.2474 22.1328 85 25.4347L50.4078 85C44.6552 81.6981 40.9604 75.3937 40.1363 67.4736C39.739 63.6546 40.0247 59.6109 40.9415 55.5616L30.4861 73.5651Z"></path></svg>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/svg/SvgPineIcon.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "41",
    height: "45",
    viewBox: "0 0 41 45",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path d="M32.151 14.1572C41.2923 25.6943 43.6656 38.7821 37.4519 43.3897C31.2383 47.9973 18.7907 42.3798 9.64941 30.8428C0.508157 19.3057 -1.86514 6.2179 4.3485 1.61032C10.5621 -2.99727 23.0098 2.62018 32.151 14.1572Z"></path></svg>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/svg/SvgOvalIcon.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __nuxt_component_3 as _,
  __nuxt_component_1 as a,
  __nuxt_component_0 as b,
  __nuxt_component_4 as c,
  __nuxt_component_2$1 as d,
  __nuxt_component_2 as e,
  __nuxt_component_1$1 as f
};
//# sourceMappingURL=SvgOvalIcon.01ba50c0.js.map
