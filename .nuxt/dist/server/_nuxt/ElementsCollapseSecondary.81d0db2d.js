import { useSSRContext, ref, mergeProps } from "vue";
import { ssrRenderAttrs, ssrRenderClass, ssrInterpolate, ssrRenderSlot } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
const ElementsCollapseSecondary_vue_vue_type_style_index_0_scoped_312775eb_lang = "";
const _sfc_main = {
  props: {
    title: {
      type: String,
      default: "Title"
    }
  },
  setup() {
    const isCollapsed = ref(false);
    function switchState() {
      isCollapsed.value = !isCollapsed.value;
    }
    return {
      isCollapsed,
      switchState
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "collapse-block" }, _attrs))} data-v-312775eb><div class="${ssrRenderClass({
    "collapse-block__header": true,
    "collapse-block__header_opened": $setup.isCollapsed
  })}" data-v-312775eb><h4 class="collapse-block__title" data-v-312775eb>${ssrInterpolate($props.title)}</h4><div class="${ssrRenderClass({
    "collapse-block__close-cross-button": true,
    "collapse-block__close-cross-button_opened": $setup.isCollapsed
  })}" data-v-312775eb></div></div>`);
  if ($setup.isCollapsed) {
    _push(`<div class="collapse-block__content" data-v-312775eb>`);
    ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/elements/ElementsCollapseSecondary.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-312775eb"]]);
export {
  __nuxt_component_0 as _
};
//# sourceMappingURL=ElementsCollapseSecondary.81d0db2d.js.map
