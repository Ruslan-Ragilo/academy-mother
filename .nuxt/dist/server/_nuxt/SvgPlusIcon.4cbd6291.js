import { useSSRContext, mergeProps } from "vue";
import { ssrRenderAttrs } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "62",
    height: "62",
    viewBox: "0 0 62 62",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path fill-rule="evenodd" clip-rule="evenodd" d="M27.3359 0.449737C27.2452 0.766936 26.3313 5.05974 25.3051 9.98952C24.2095 15.2529 23.2754 19.0159 23.042 19.105C22.8231 19.1886 18.402 18.3734 13.2169 17.2935C8.03137 16.2135 3.7649 15.369 3.73488 15.4163C3.40885 15.9378 -0.193291 34.5175 0.00813692 34.6397C0.158562 34.7308 4.44892 35.666 9.54208 36.7182C15.2237 37.8921 18.8636 38.79 18.9608 39.0422C19.0476 39.2681 18.2303 43.676 17.1444 48.8378C16.0585 53.9998 15.2092 58.2473 15.257 58.2772C15.7786 58.6024 34.4236 62.1926 34.5463 61.9919C34.6376 61.842 35.576 57.5662 36.6319 52.4904C37.7766 46.9867 38.714 43.1993 38.9535 43.1076C39.1746 43.023 43.598 43.8375 48.7831 44.9175C53.9686 45.9974 58.2351 46.8419 58.2651 46.7946C58.5911 46.2731 62.1933 27.6935 61.9919 27.5713C61.8414 27.4802 57.5511 26.545 52.4579 25.4927C46.7763 24.3188 43.1364 23.421 43.0392 23.1687C42.9524 22.9429 43.7697 18.5349 44.8556 13.3732C45.9415 8.21115 46.7908 3.9637 46.743 3.93411C46.6949 3.90451 42.5886 3.04749 37.6174 2.02898C32.6463 1.01079 28.3366 0.109374 28.0402 0.0257316C27.7106 -0.0675624 27.4369 0.09715 27.3359 0.449737Z"></path></svg>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/svg/SvgPlusIcon.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __nuxt_component_0 as _
};
//# sourceMappingURL=SvgPlusIcon.4cbd6291.js.map