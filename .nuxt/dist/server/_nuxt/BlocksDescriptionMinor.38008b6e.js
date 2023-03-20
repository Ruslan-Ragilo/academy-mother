import __nuxt_component_3 from "./halfCircle.b4eeaff9.js";
import { f as __nuxt_component_1, b as __nuxt_component_0 } from "./SvgOvalIcon.01ba50c0.js";
import { _ as __nuxt_component_3$1 } from "./SvgGex.7e81bb68.js";
import { useSSRContext, resolveComponent, mergeProps, withCtx, createTextVNode } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderComponent, ssrRenderAttr } from "vue/server-renderer";
import { _ as _imports_0 } from "./MainPageDescriptionImageMinor.ef670b4e.js";
import { _ as _export_sfc } from "../server.mjs";
const BlocksDescriptionMinor_vue_vue_type_style_index_0_scoped_c25903f2_lang = "";
const _sfc_main = {
  props: {
    label: {
      type: String,
      default: "\u041E\u0421\u041D\u041E\u0412\u0410\u0422\u0415\u041B\u042C\u041D\u0418\u0426\u0410 \u0410\u041A\u0410\u0414\u0415\u041C\u0418\u0418"
    },
    title: {
      type: String,
      default: "\u042D\u043B\u0438\u0441\u043E \u0414\u0436\u043E\u0431\u0430\u0432\u0430 \u2014 \u0432\u0440\u0430\u0447-\u0430\u043A\u0443\u0448\u0435\u0440 \u0432\u044B\u0441\u0448\u0435\u0439 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438, \u043F\u0440\u043E\u0444\u0435\u0441\u0441\u043E\u0440, \u0434\u043E\u043A\u0442\u043E\u0440 \u043C\u0435\u0434\u0438\u0446\u0438\u043D\u0441\u043A\u0438\u0445 \u043D\u0430\u0443\u043A"
    },
    listItems: {
      type: Array,
      default: () => [
        "\u041C\u0435\u0436\u0434\u0443\u043D\u0430\u0440\u043E\u0434\u043D\u044B\u0439 \u044D\u043A\u0441\u043F\u0435\u0440\u0442 \u043F\u043E \u0432\u0435\u0434\u0435\u043D\u0438\u044E \u043E\u0441\u043B\u043E\u0436\u043D\u0451\u043D\u043D\u043E\u0439 \u0431\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u043E\u0441\u0442\u0438",
        "\u0421\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0441\u0442 \u043F\u043E \u043D\u0435\u0432\u044B\u043D\u0430\u0448\u0438\u0432\u0430\u043D\u0438\u044E \u0431\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u043E\u0441\u0442\u0438, \u043F\u0430\u0442\u043E\u043B\u043E\u0433\u0438\u0438 \u0441\u0438\u0441\u0442\u0435\u043C\u044B \u0433\u0435\u043C\u043E\u0441\u0442\u0430\u0437\u0430 \u0438 \u0442\u0440\u043E\u043C\u0431\u043E\u0444\u0438\u043B\u0438\u044F\u043C",
        "\u0421\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0441\u0442 \u043F\u043E \u043F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u043A\u0435 \u0438 \u0432\u0435\u0434\u0435\u043D\u0438\u044E \xAB\u0437\u0440\u0435\u043B\u043E\u0439\xBB \u0431\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u043E\u0441\u0442\u0438 (35+)"
      ]
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_router_link = resolveComponent("router-link");
  const _component_svg_half_circle = __nuxt_component_3;
  const _component_svg_heart_icon = __nuxt_component_1;
  const _component_svg_arrow = __nuxt_component_0;
  const _component_svg_gex = __nuxt_component_3$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "minor-description" }, _attrs))} data-v-c25903f2><div class="minor-description__main-block" data-v-c25903f2><div class="minor-description__left-column" data-v-c25903f2><div class="minor-description__position" data-v-c25903f2>${ssrInterpolate($props.label)}</div><h2 class="minor-description__title" data-v-c25903f2>${ssrInterpolate($props.title)}</h2><ul class="minor-description__list" data-v-c25903f2><!--[-->`);
  ssrRenderList($props.listItems, (item) => {
    _push(`<li class="minor-description__list-item" data-v-c25903f2>${ssrInterpolate(item)}</li>`);
  });
  _push(`<!--]--></ul><div class="minor-description__button-container" data-v-c25903f2>`);
  _push(ssrRenderComponent(_component_router_link, {
    class: "minor-description__button",
    to: "/about"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` \u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435 \u043E\u0431 \u042D\u043B\u0438\u0441\u043E `);
      } else {
        return [
          createTextVNode(" \u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435 \u043E\u0431 \u042D\u043B\u0438\u0441\u043E ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div><div class="minor-description__right-column" data-v-c25903f2><img class="minor-description__image"${ssrRenderAttr("src", _imports_0)} alt="" data-v-c25903f2>`);
  _push(ssrRenderComponent(_component_svg_half_circle, { class: "minor-description__image-circle-figure" }, null, _parent));
  _push(ssrRenderComponent(_component_svg_heart_icon, { class: "minor-description__image-heart-figure" }, null, _parent));
  _push(ssrRenderComponent(_component_svg_arrow, { class: "minor-description__image-arrow-figure" }, null, _parent));
  _push(ssrRenderComponent(_component_svg_gex, { class: "minor-description__image-gex-figure" }, null, _parent));
  _push(`</div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/blocks/BlocksDescriptionMinor.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_7 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-c25903f2"]]);
export {
  __nuxt_component_7 as _
};
//# sourceMappingURL=BlocksDescriptionMinor.38008b6e.js.map
