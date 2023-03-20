import { useSSRContext, watch, mergeProps } from "vue";
import { ssrRenderAttrs, ssrRenderSlot } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
const ElementsModalsKeeper_vue_vue_type_style_index_0_scoped_c35ef6a1_lang = "";
const _sfc_main = {
  props: {
    isModalOpened: {
      type: Boolean,
      default: false
    }
  },
  emits: ["close"],
  setup(props, { emit }) {
    function closeModal() {
      emit("close");
    }
    watch(props, () => {
      if (props.isModalOpened === true) {
        console.log(document.getElementsByTagName("BODY")[0].overflow);
        document.getElementsByTagName("BODY")[0].style.overflowY = "hidden";
      } else {
        document.getElementsByTagName("BODY")[0].style.overflowY = "scroll";
      }
    });
    return {
      closeModal
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  if ($props.isModalOpened) {
    _push(`<div${ssrRenderAttrs(mergeProps({ class: "modal__modal" }, _attrs))} data-v-c35ef6a1><div class="modal__modal-window" data-v-c35ef6a1><div class="modal__close-cross-button" data-v-c35ef6a1></div>`);
    ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
    _push(`</div></div>`);
  } else {
    _push(`<!---->`);
  }
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/elements/modals/ElementsModalsKeeper.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-c35ef6a1"]]);
export {
  __nuxt_component_0 as _
};
//# sourceMappingURL=ElementsModalsKeeper.257a82fa.js.map
