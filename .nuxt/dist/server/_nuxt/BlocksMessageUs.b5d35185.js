import { a as __nuxt_component_1, b as __nuxt_component_0, c as __nuxt_component_4, d as __nuxt_component_2$1, e as __nuxt_component_2$2, _ as __nuxt_component_3 } from "./SvgOvalIcon.01ba50c0.js";
import { useSSRContext, mergeProps } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
const BlocksMessageUs_vue_vue_type_style_index_0_scoped_f772712a_lang = "";
const _sfc_main = {
  props: {
    label: {
      type: String,
      default: `\u041E\u0441\u0442\u0430\u043B\u0438\u0441\u044C \u0432\u043E\u043F\u0440\u043E\u0441\u044B?<br> \u041D\u0430\u043F\u0438\u0448\u0438\u0442\u0435 \u043D\u0430\u043C \u2014 \u043C\u044B \u043F\u043E\u043C\u043E\u0436\u0435\u043C`
    },
    clazz: {
      type: String,
      default: "__message-us-block"
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_svg_union = __nuxt_component_1;
  const _component_svg_arrow = __nuxt_component_0;
  const _component_svg_pine_icon = __nuxt_component_4;
  const _component_svg_cheese_icon = __nuxt_component_2$1;
  const _component_svg_oval_icon = __nuxt_component_2$2;
  const _component_elements_buttons_secondary = __nuxt_component_3;
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "message-us" + $props.clazz
  }, _attrs))} data-v-f772712a>`);
  _push(ssrRenderComponent(_component_svg_union, { class: "message-us__union" }, null, _parent));
  _push(ssrRenderComponent(_component_svg_arrow, { class: "message-us__arrow" }, null, _parent));
  _push(ssrRenderComponent(_component_svg_pine_icon, { class: "message-us__pine" }, null, _parent));
  _push(ssrRenderComponent(_component_svg_cheese_icon, { class: "message-us__cheese" }, null, _parent));
  _push(ssrRenderComponent(_component_svg_oval_icon, { class: "message-us__oval" }, null, _parent));
  _push(`<div class="message-us__message-us-title" data-v-f772712a><h3 class="message-us__message-us-title" data-v-f772712a>${$props.label}</h3><div class="message-us__message-us-button-container" data-v-f772712a>`);
  _push(ssrRenderComponent(_component_elements_buttons_secondary, {
    link: "https://t.me/academ_mom_bot",
    title: "\u041D\u0430\u043F\u0438\u0441\u0430\u0442\u044C \u0432 Telegram"
  }, null, _parent));
  _push(`</div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/blocks/BlocksMessageUs.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-f772712a"]]);
export {
  __nuxt_component_2 as _
};
//# sourceMappingURL=BlocksMessageUs.b5d35185.js.map
