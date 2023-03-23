import { useSSRContext, mergeProps } from "vue";
import { ssrRenderAttrs } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><circle cx="7.5" cy="7.5" r="7.5" fill="#644C5C"></circle><path d="M7.90502 5.39818V10H7.07502V5.39818H7.90502ZM7.5 3.9999C7.63667 3.9999 7.75333 4.03769 7.85 4.11327C7.95 4.18605 8 4.30082 8 4.45757C8 4.61152 7.95 4.72629 7.85 4.80187C7.75333 4.87745 7.63667 4.91524 7.5 4.91524C7.35667 4.91524 7.23667 4.87745 7.14 4.80187C7.04667 4.72629 7 4.61152 7 4.45757C7 4.30082 7.04667 4.18605 7.14 4.11327C7.23667 4.03769 7.35667 3.9999 7.5 3.9999Z" fill="#FEF8F2"></path></svg>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/svg/SvgInfoIcon.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __nuxt_component_1 as _
};
//# sourceMappingURL=SvgInfoIcon.19ca1b9f.js.map