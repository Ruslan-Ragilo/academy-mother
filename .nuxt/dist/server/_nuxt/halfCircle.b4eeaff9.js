import { useSSRContext, mergeProps } from "vue";
import { ssrRenderAttrs } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import "ofetch";
import "#internal/nitro";
import "hookable";
import "unctx";
import "destr";
import "ufo";
import "h3";
import "@vue/devtools-api";
import "@unhead/vue";
import "@unhead/dom";
import "vue-router";
import "defu";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "46",
    height: "32",
    viewBox: "0 0 46 32",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path fill-rule="evenodd" clip-rule="evenodd" d="M21.318 0.0825458C17.916 0.528572 14.3293 1.74927 11.5999 3.38968C9.53326 4.63174 6.23229 7.58128 4.8756 9.39816C0.687132 15.0069 -0.848535 21.5372 0.446517 28.2335C0.700465 29.5473 1.28128 31.5491 1.53917 31.9994C1.55348 32.0243 3.72806 31.2115 6.3716 30.1928C9.60964 28.9452 11.1602 28.2703 11.1236 28.125C11.0938 28.0063 10.9158 27.3178 10.728 26.595C10.4307 25.4503 10.4017 24.979 10.5029 22.9371C10.6394 20.1843 10.8947 19.2578 12.1106 17.1048C13.5825 14.4982 15.8098 12.5258 18.6087 11.3505C20.7439 10.4537 22.2123 10.2054 24.683 10.3231C26.9499 10.4309 28.2754 10.7652 30.1223 11.6946C32.3403 12.8109 34.5903 15.0431 35.7338 17.262C36.1137 17.999 36.4718 18.6045 36.5298 18.6075C36.7925 18.621 45.9385 15.0416 45.9929 14.9039C46.0761 14.6936 45.4187 13.2344 44.6002 11.8121C41.5022 6.4288 36.3955 2.53463 30.0894 0.746455C28.1509 0.196757 23.2666 -0.172831 21.318 0.0825458Z"></path></svg>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/svg/halfCircle.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __nuxt_component_3 as default
};
//# sourceMappingURL=halfCircle.b4eeaff9.js.map
