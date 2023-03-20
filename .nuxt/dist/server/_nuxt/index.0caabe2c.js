import { _ as _export_sfc, b as __nuxt_component_0$1 } from "../server.mjs";
import { useSSRContext, mergeProps, withCtx, createTextVNode, createVNode } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr } from "vue/server-renderer";
import { d as __nuxt_component_0$2, c as __nuxt_component_0$3, b as __nuxt_component_1$3, e as __nuxt_component_3$2 } from "./ElementsIconedItem.628d1170.js";
import { f as __nuxt_component_1$1, c as __nuxt_component_4$1, a as __nuxt_component_1$2, _ as __nuxt_component_3$1, b as __nuxt_component_0$5, e as __nuxt_component_2$1 } from "./SvgOvalIcon.01ba50c0.js";
import { _ as __nuxt_component_0$4 } from "./ElementsCollapse.1285a049.js";
import { _ as _imports_0$1 } from "./ConsultationsPageDescPhoto.990b39de.js";
import { _ as __nuxt_component_1$4 } from "./SvgInfoIcon.19ca1b9f.js";
import { _ as __nuxt_component_0$6 } from "./SvgPlusIcon.4cbd6291.js";
import __nuxt_component_3$3 from "./halfCircle.b4eeaff9.js";
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
import "./SvgStarNine.d7b4f96b.js";
import "./SvgGex.7e81bb68.js";
const BlocksProjectsIntro_vue_vue_type_style_index_0_scoped_b005e3a3_lang = "";
const _sfc_main$5 = {};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs) {
  const _component_nuxt_link = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "projects-page" }, _attrs))} data-v-b005e3a3><div class="projects-page__page-navigation-block" data-v-b005e3a3><h2 class="projects-page__title" data-v-b005e3a3> \u041F\u0440\u043E\u0435\u043A\u0442\u044B </h2><div class="projects-page__page-navigations-list" data-v-b005e3a3>`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: "/projects#repo",
    class: "projects-page__navigation-item"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` \u0420\u0435\u043F\u0440\u043E \u2014 \u043E\u0436\u0438\u0432\u0438 \u044F\u0447\u043D\u0438\u043A\u0438 `);
      } else {
        return [
          createTextVNode(" \u0420\u0435\u043F\u0440\u043E \u2014 \u043E\u0436\u0438\u0432\u0438 \u044F\u0447\u043D\u0438\u043A\u0438 ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: "/projects#meno",
    class: "projects-page__navigation-item"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` \u041C\u0435\u043D\u043E \u2014 \u043E\u0436\u0438\u0432\u0438 \u044F\u0438\u0447\u043D\u0438\u043A\u0438 `);
      } else {
        return [
          createTextVNode(" \u041C\u0435\u043D\u043E \u2014 \u043E\u0436\u0438\u0432\u0438 \u044F\u0438\u0447\u043D\u0438\u043A\u0438 ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: "/projects#academy",
    class: "projects-page__navigation-item"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` \u0410\u043A\u0430\u0434\u0435\u043C\u0438\u044F \u0437\u0434\u043E\u0440\u043E\u0432\u043E\u0439 \u0436\u0438\u0437\u043D\u0438 `);
      } else {
        return [
          createTextVNode(" \u0410\u043A\u0430\u0434\u0435\u043C\u0438\u044F \u0437\u0434\u043E\u0440\u043E\u0432\u043E\u0439 \u0436\u0438\u0437\u043D\u0438 ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: "/projects#control",
    class: "projects-page__navigation-item"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` \u041A\u043E\u043D\u0442\u0440\u043E\u043B\u044C \u044D\u0441\u0442\u0440\u043E\u0433\u0435\u043D\u043E\u0432 `);
      } else {
        return [
          createTextVNode(" \u041A\u043E\u043D\u0442\u0440\u043E\u043B\u044C \u044D\u0441\u0442\u0440\u043E\u0433\u0435\u043D\u043E\u0432 ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/blocks/projects/BlocksProjectsIntro.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$5], ["__scopeId", "data-v-b005e3a3"]]);
const BlocksProjectsRepro_vue_vue_type_style_index_0_scoped_ac2ab15c_lang = "";
const tabsList$1 = [
  {
    icon: "heartIcon",
    color: "#78353E",
    text: "\u0412\u044B \u043F\u043B\u0430\u043D\u0438\u0440\u0443\u0435\u0442\u0435 \u0431\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u043E\u0441\u0442\u044C \u0432\u043E\u043E\u0431\u0449\u0435 \u0438\u043B\u0438 \u0432 \u0431\u043B\u0438\u0436\u0430\u0439\u0448\u0435\u0435 \u0432\u0440\u0435\u043C\u044F"
  },
  {
    icon: "SvgDiamondIcon",
    color: "#C99D7A",
    text: "\u0423 \u0432\u0430\u0441 \u0441\u043D\u0438\u0436\u0435\u043D\u0438\u0435 \u043E\u0432\u0430\u0440\u0438\u0430\u043B\u044C\u043D\u043E\u0433\u043E \u0440\u0435\u0437\u0435\u0440\u0432\u0430 (\u043F\u0440\u0438\u0447\u0438\u043D\u0430 \u043D\u0435 \u0438\u043C\u0435\u0435\u0442 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F) \u0438/\u0438\u043B\u0438 \u043F\u0440\u0438\u0437\u043D\u0430\u043A\u0438 \u0440\u0430\u043D\u043D\u0435\u0439 \u0438\u043B\u0438 \u043F\u0440\u0435\u0436\u0434\u0435\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u043E\u0439 \u043C\u0435\u043D\u043E\u043F\u0430\u0443\u0437\u044B (\u0434\u043E 45-\u0442\u0438 \u043B\u0435\u0442)"
  },
  {
    icon: "almostCircle",
    color: "#78353E",
    text: "\u0412\u0430\u043C \u043D\u0435 \u0431\u043E\u043B\u0435\u0435 43 \u043B\u0435\u0442. \u0423\u0447\u0430\u0441\u0442\u0438\u0435 \u0432 \u043F\u0440\u043E\u0435\u043A\u0442\u0435 \u0436\u0435\u043D\u0449\u0438\u043D 44-45 \u043B\u0435\u0442 \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E \u043F\u0440\u0438 \u0443\u0441\u043B\u043E\u0432\u0438\u0438, \u0447\u0442\u043E \u0432\u044B \u043F\u043E\u043D\u0438\u043C\u0430\u0435\u0442\u0435 \u0432\u044B\u0441\u043E\u043A\u0443\u044E \u0432\u0435\u0440\u043E\u044F\u0442\u043D\u043E\u0441\u0442\u044C \u043D\u0438\u0437\u043A\u043E\u0439 \u044D\u0444\u0444\u0435\u043A\u0442\u0438\u0432\u043D\u043E\u0441\u0442\u0438 \u043F\u0440\u043E\u0442\u043E\u043A\u043E\u043B\u0430"
  },
  {
    icon: "SvgGex",
    color: "#644C5C",
    text: "\u0412\u044B \u0441\u0442\u0430\u0440\u0448\u0435 45-\u0442\u0438 \u043B\u0435\u0442, \u043D\u043E \u043F\u043E\u043D\u0438\u043C\u0430\u0435\u0442\u0435, \u0447\u0442\u043E \u0441\u0432\u043E\u0438\u0445 \u044F\u0439\u0446\u0435\u043A\u043B\u0435\u0442\u043E\u043A \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u043F\u0440\u0430\u043A\u0442\u0438\u0447\u0435\u0441\u043A\u0438 \u043D\u0435\u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E"
  },
  {
    icon: "SvgSoftIcon",
    color: "#064848",
    text: "\u0412\u044B \u0440\u0430\u0441\u0441\u043C\u0430\u0442\u0440\u0438\u0432\u0430\u0435\u0442\u0435 \u0432\u0435\u0440\u043E\u044F\u0442\u043D\u043E\u0441\u0442\u044C \u043F\u0440\u0438\u043C\u0435\u043D\u0435\u043D\u0438\u044F \u043C\u0435\u0442\u043E\u0434\u0430 \u042D\u041A\u041E \u0438 \u0433\u043E\u0442\u043E\u0432\u044B \u043A \u043A\u0440\u0438\u043E\u043A\u043E\u043D\u0441\u0435\u0440\u0432\u0430\u0446\u0438\u0438 \u044F\u0439\u0446\u0435\u043A\u043B\u0435\u0442\u043E\u043A, \u0435\u0441\u043B\u0438 \u0432 \u043D\u0430\u0441\u0442\u043E\u044F\u0449\u0438\u0439 \u043C\u043E\u043C\u0435\u043D\u0442 \u043D\u0435\u0442 \u043F\u043E\u0442\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0433\u043E \u043E\u0442\u0446\u0430 \u0440\u0435\u0431\u0435\u043D\u043A\u0430"
  }
];
const _sfc_main$4 = {
  setup() {
    return {
      tabsList: tabsList$1
    };
  }
};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_svg_soft_icon = __nuxt_component_0$2;
  const _component_svg_heart_icon = __nuxt_component_1$1;
  const _component_svg_pine_icon = __nuxt_component_4$1;
  const _component_elements_iconed_item = __nuxt_component_0$3;
  const _component_svg_union = __nuxt_component_1$2;
  const _component_elements_collapse = __nuxt_component_0$4;
  const _component_elements_buttons_secondary = __nuxt_component_3$1;
  const _component_svg_almost_circle = __nuxt_component_1$3;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "project-block" }, _attrs))} data-v-ac2ab15c><div class="project-block__about" data-v-ac2ab15c><h2 class="project-block__about-title" data-v-ac2ab15c> \u041F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u0438\u0437\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0439 \u043F\u0440\u043E\u0435\u043A\u0442 \xAB\u0420\u0435\u043F\u0440\u043E \u2014 \u043E\u0436\u0438\u0432\u0438 \u044F\u0447\u043D\u0438\u043A\u0438\xBB </h2><div class="project-block__about-text" data-v-ac2ab15c> \u0414\u043B\u044F \u0442\u0435\u0445, \u043A\u0442\u043E \u0441\u0442\u043E\u043B\u043A\u043D\u0443\u043B\u0441\u044F \u0441\u043E \u0441\u043D\u0438\u0436\u0435\u043D\u0438\u0435\u043C \u043E\u0432\u0430\u0440\u0438\u0430\u043B\u044C\u043D\u043E\u0433\u043E \u0440\u0435\u0437\u0435\u0440\u0432\u0430 \u0438/\u0438\u043B\u0438 \u0441\u0438\u043C\u043F\u0442\u043E\u043C\u0430\u043C\u0438 \u043F\u0440\u0435\u043C\u0435\u043D\u043E\u043F\u0430\u0443\u0437\u044B \u0432 \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u0435 \u043F\u043B\u0430\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F \u0431\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u043E\u0441\u0442\u0438 </div><div class="project-block__about-additional" data-v-ac2ab15c>`);
  _push(ssrRenderComponent(_component_svg_soft_icon, { class: "project-block__about-additional-background" }, null, _parent));
  _push(`<div class="project-block__about-additional-text" data-v-ac2ab15c> \u041C\u0435\u0441\u0442\u043E \u043F\u0440\u043E\u0436\u0438\u0432\u0430\u043D\u0438\u044F \u043D\u0435 \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u043E\u0433\u0440\u0430\u043D\u0438\u0447\u0435\u043D\u0438\u0435\u043C \u0434\u043B\u044F \u0443\u0447\u0430\u0441\u0442\u0438\u044F </div></div>`);
  _push(ssrRenderComponent(_component_svg_heart_icon, { class: "project-block__about-heart-icon" }, null, _parent));
  _push(ssrRenderComponent(_component_svg_pine_icon, { class: "project-block__about-pine-icon" }, null, _parent));
  _push(`</div><div class="project-block__when-needed-block" data-v-ac2ab15c><h2 class="project-block__block-title" data-v-ac2ab15c> \u041A\u043E\u0433\u0434\u0430 \u0441\u0442\u043E\u0438\u0442 \u0438\u0434\u0442\u0438 </h2><div class="project-block__when-needed-list" data-v-ac2ab15c><!--[-->`);
  ssrRenderList($setup.tabsList, (item) => {
    _push(ssrRenderComponent(_component_elements_iconed_item, {
      "icon-name": item.icon,
      "icon-color": item.color,
      text: item.text
    }, null, _parent));
  });
  _push(`<!--]--></div></div><div class="project-block__what-inside-block" data-v-ac2ab15c><h2 class="project-block__block-title" data-v-ac2ab15c> \u0427\u0442\u043E \u0432\u043D\u0443\u0442\u0440\u0438? </h2><div class="project-block__what-inside-list" data-v-ac2ab15c><div class="project-block__what-inside-item" data-v-ac2ab15c><div class="project-block__what-inside-title" data-v-ac2ab15c> \u041E\u0442\u0434\u0435\u043B\u044C\u043D\u044B\u0439 Telegram-\u0447\u0430\u0442 </div><div class="project-block__what-inside-text" data-v-ac2ab15c> \u0412 \u0442\u0435\u0447\u0435\u043D\u0438\u0435 4-\u0445 \u043D\u0435\u0434\u0435\u043B\u044C \u0432 \u0437\u0430\u043A\u0440\u044B\u0442\u043E\u043C Telegram-\u043A\u0430\u043D\u0430\u043B\u0435 \u0431\u0443\u0434\u0443\u0442 \u0432\u044B\u0445\u043E\u0434\u0438\u0442\u044C \u0430\u043A\u0442\u0443\u0430\u043B\u044C\u043D\u044B\u0435 \u0441\u0442\u0440\u0430\u0442\u0435\u0433\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u043F\u043E\u0441\u0442\u044B, \u043E\u0431\u044A\u044F\u0441\u043D\u044F\u044E\u0449\u0438\u0435 \u0432\u0441\u044E \u0442\u0430\u043A\u0442\u0438\u043A\u0443 \u0438 \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u0438 \u0430\u043A\u0442\u0438\u0432\u0430\u0446\u0438\u0438 \u044F\u0438\u0447\u043D\u0438\u043A\u043E\u0432 </div>`);
  _push(ssrRenderComponent(_component_svg_union, { class: "project-block__what-inside-item-union" }, null, _parent));
  _push(`</div><div class="project-block__what-inside-item" data-v-ac2ab15c><div class="project-block__what-inside-title" data-v-ac2ab15c> \u041F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044F </div><div class="project-block__what-inside-text" data-v-ac2ab15c> \u0417\u0430 \u0432\u0440\u0435\u043C\u044F \u043F\u0440\u043E\u0435\u043A\u0442\u0430 \u0432\u0430\u043C \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u0431\u0443\u0434\u0435\u0442 \u0441\u0434\u0430\u0442\u044C \u0430\u043D\u0430\u043B\u0438\u0437\u044B \u0438 \u0437\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u044C \u0430\u043D\u043A\u0435\u0442\u0443. \u0412 \u0442\u0435\u0447\u0435\u043D\u0438\u0435 2-\u0445 \u043D\u0435\u0434\u0435\u043B\u044C \u043F\u043E\u0441\u043B\u0435 \u043E\u043A\u043E\u043D\u0447\u0430\u043D\u0438\u044F \u043F\u0440\u043E\u0435\u043A\u0442\u0430 \u043A\u0430\u0436\u0434\u0430\u044F \u0443\u0447\u0430\u0441\u0442\u043D\u0438\u0446\u0430 \u043F\u043E\u043B\u0443\u0447\u0438\u0442 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0439 \u043F\u0440\u043E\u0442\u043E\u043A\u043E\u043B \u043E\u0442 \u0434\u043E\u043A\u0442\u043E\u0440\u0430 \u043C\u0435\u0434\u0438\u0446\u0438\u043D\u0441\u043A\u0438\u0445 \u043D\u0430\u0443\u043A \u043F\u0440\u043E\u0444\u0435\u0441\u0441\u043E\u0440\u0430 \u0430\u043A\u0443\u0448\u0435\u0440\u0430-\u0433\u0438\u043D\u0435\u043A\u043E\u043B\u043E\u0433\u0430 \u0414\u0436\u043E\u0431\u0430\u0432\u0430 \u042D\u043B\u0438\u0441\u043E \u041C\u0443\u0440\u043C\u0430\u043D\u043E\u0432\u043D\u044B. \u041F\u043E\u0441\u043B\u0435 \u0435\u0433\u043E \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u044F \u0432\u044B \u0441\u043C\u043E\u0436\u0435\u0442\u0435 1 \u0440\u0430\u0437 \u0437\u0430\u0434\u0430\u0442\u044C \u0432\u0441\u0435 \u0438\u043D\u0442\u0435\u0440\u0435\u0441\u0443\u044E\u0449\u0438\u0435 \u0432\u0430\u0441 \u0432\u043E\u043F\u0440\u043E\u0441\u044B \u043F\u043E \u043F\u0440\u043E\u0442\u043E\u043A\u043E\u043B\u0443 \u0432 \u043E\u0442\u0432\u0435\u0442\u043D\u043E\u043C \u043F\u0438\u0441\u044C\u043C\u0435 </div></div></div></div><div class="project-block__required-block" data-v-ac2ab15c><h2 class="project-block__block-title" data-v-ac2ab15c> \u041A\u0430\u043A\u0438\u0435 \u0430\u043D\u0430\u043B\u0438\u0437\u044B \u0438 \u043E\u0431\u0441\u043B\u0435\u0434\u043E\u0432\u0430\u043D\u0438\u044F \u043F\u043E\u043D\u0430\u0434\u043E\u0431\u044F\u0442\u0441\u044F? </h2><div class="project-block__required-collapse-wrapper" data-v-ac2ab15c>`);
  _push(ssrRenderComponent(_component_elements_collapse, {
    class: "project-block__required-collapse",
    title: "\u041C\u0438\u043D\u0438\u043C\u0443\u043C"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<ul class="project-block__required-list two-columns" data-v-ac2ab15c${_scopeId}><li data-v-ac2ab15c${_scopeId}>\u2014 \u0410\u041C\u0413 \u2014 \u0430\u043D\u0442\u0438\u043C\u044E\u043B\u043B\u0435\u0440\u043E\u0432 \u0433\u043E\u0440\u043C\u043E\u043D</li><li data-v-ac2ab15c${_scopeId}>\u2014 \u0424\u0421\u0413 \u2014 \u0444\u043E\u043B\u043B\u0438\u043A\u0443\u043B\u043E\u0441\u0442\u0438\u043C\u0443\u043B\u0438\u0440\u0443\u044E\u0449\u0438\u0439 \u0433\u043E\u0440\u043C\u043E\u043D</li><li data-v-ac2ab15c${_scopeId}>\u2014 \u041B\u0413 \u2014 \u043B\u044E\u0442\u0435\u0438\u043D\u0438\u0437\u0438\u0440\u0443\u044E\u0449\u0438\u0439 \u0433\u043E\u0440\u043C\u043E\u043D \u043D\u0430 3\u22125 \u0434\u0435\u043D\u044C \u0446\u0438\u043A\u043B\u0430</li><li data-v-ac2ab15c${_scopeId}>\u2014 \u0423\u0417\u0418 \u043C\u0430\u043B\u043E\u0433\u043E \u0442\u0430\u0437\u0430 \u0441 \u043F\u043E\u0434\u0441\u0447\u0435\u0442\u043E\u043C \u0447\u0438\u0441\u043B\u0430 \u0430\u043D\u0442\u0440\u0430\u043B\u044C\u043D\u044B\u0445 \u0444\u043E\u043B\u043B\u0438\u043A\u0443\u043B\u043E\u0432 \u0432 \u043A\u0430\u0436\u0434\u043E\u043C \u044F\u0438\u0447\u043D\u0438\u043A\u0435 \u043D\u0430 5\u22127 \u0434\u0435\u043D\u044C \u0446\u0438\u043A\u043B\u0430</li><li data-v-ac2ab15c${_scopeId}>\u2014 \u041A\u043B\u0438\u043D\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0430\u043D\u0430\u043B\u0438\u0437 \u043A\u0440\u043E\u0432\u0438</li><li data-v-ac2ab15c${_scopeId}>\u2014 \u041E\u0431\u0449\u0438\u0439 \u0430\u043D\u0430\u043B\u0438\u0437 \u043C\u043E\u0447\u0438</li><li data-v-ac2ab15c${_scopeId}>\u2014 \u0422\u0422\u0413 \u2014 \u0442\u0438\u0440\u0435\u043E\u0442\u0440\u043E\u043F\u043D\u044B\u0439 \u0433\u043E\u0440\u043C\u043E\u043D</li><li data-v-ac2ab15c${_scopeId}>\u2014 \u041F\u0440\u043E\u043B\u0430\u043A\u0442\u0438\u043D</li><li data-v-ac2ab15c${_scopeId}>\u2014 \u0424\u0435\u0440\u0440\u0438\u0442\u0438\u043D</li><li data-v-ac2ab15c${_scopeId}>\u2014 \u0422\u0440\u0430\u043D\u0441\u0444\u0435\u0440\u0438\u043D</li><li data-v-ac2ab15c${_scopeId}>\u2014 \u0421\u044B\u0432\u043E\u0440\u043E\u0442\u043E\u0447\u043D\u043E\u0435 \u0436\u0435\u043B\u0435\u0437\u043E</li><li data-v-ac2ab15c${_scopeId}>\u2014 \u0412\u0438\u0442\u0430\u043C\u0438\u043D \u041425\u043E\u043D</li><li data-v-ac2ab15c${_scopeId}>\u2014 \u0413\u043E\u043C\u043E\u0446\u0438\u0441\u0442\u0435\u0438\u043D</li><li data-v-ac2ab15c${_scopeId}>\u2014 \u041B\u0430\u043A\u0442\u0430\u0442</li><li data-v-ac2ab15c${_scopeId}>\u2014 \u0413\u0413\u0422 \u2014 \u0433\u0430\u043C\u043C\u0430-\u0433\u043B\u0443\u0442\u0430\u043C\u0438\u043D-\u0442\u0440\u0430\u043D\u0441\u043F\u0435\u043F\u0442\u0438\u0434\u0430\u0437\u0430</li><li data-v-ac2ab15c${_scopeId}>\u2014 \u041E\u0431\u0449\u0438\u0439 \u0431\u0435\u043B\u043E\u043A</li><li data-v-ac2ab15c${_scopeId}>\u2014 \u0413\u043B\u0438\u043A\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0439 \u0433\u0435\u043C\u043E\u0433\u043B\u043E\u0431\u0438\u043D</li><li data-v-ac2ab15c${_scopeId}>\u2014 \u041C\u043E\u0447\u0435\u0432\u0430\u044F \u043A\u0438\u0441\u043B\u043E\u0442\u0430</li><li data-v-ac2ab15c${_scopeId}>\u2014 \u042D\u043E\u0437\u0438\u043D\u043E\u0444\u0438\u043B\u044C\u043D\u044B\u0439 \u043A\u0430\u0442\u0438\u043E\u043D\u043D\u044B\u0439 \u0431\u0435\u043B\u043E\u043A</li><li data-v-ac2ab15c${_scopeId}>\u2014 \u0418\u043C\u043C\u0443\u043D\u043E\u0433\u043B\u043E\u0431\u0443\u043B\u0438\u043D \u0415</li><li data-v-ac2ab15c${_scopeId}>\u2014 \u041E\u0431\u0449\u0438\u0439 \u0445\u043E\u043B\u0435\u0441\u0442\u0435\u0440\u0438\u043D</li><li data-v-ac2ab15c${_scopeId}>\u2014 \u041B\u041F\u041D\u041F-\u043B\u0438\u043F\u0440\u043E\u043F\u0440\u043E\u0442\u0435\u0438\u0434\u044B \u043D\u0438\u0437\u043A\u043E\u0439 \u043F\u043B\u043E\u0442\u043D\u043E\u0441\u0442\u0438</li><li data-v-ac2ab15c${_scopeId}>\u2014 \u0421 \u0440\u0435\u0430\u043A\u0442\u0438\u0432\u043D\u044B\u0439 \u0431\u0435\u043B\u043E\u043A</li><li data-v-ac2ab15c${_scopeId}>\u2014 \u0414-\u0434\u0438\u043C\u0435\u0440</li></ul>`);
      } else {
        return [
          createVNode("ul", { class: "project-block__required-list two-columns" }, [
            createVNode("li", null, "\u2014 \u0410\u041C\u0413 \u2014 \u0430\u043D\u0442\u0438\u043C\u044E\u043B\u043B\u0435\u0440\u043E\u0432 \u0433\u043E\u0440\u043C\u043E\u043D"),
            createVNode("li", null, "\u2014 \u0424\u0421\u0413 \u2014 \u0444\u043E\u043B\u043B\u0438\u043A\u0443\u043B\u043E\u0441\u0442\u0438\u043C\u0443\u043B\u0438\u0440\u0443\u044E\u0449\u0438\u0439 \u0433\u043E\u0440\u043C\u043E\u043D"),
            createVNode("li", null, "\u2014 \u041B\u0413 \u2014 \u043B\u044E\u0442\u0435\u0438\u043D\u0438\u0437\u0438\u0440\u0443\u044E\u0449\u0438\u0439 \u0433\u043E\u0440\u043C\u043E\u043D \u043D\u0430 3\u22125 \u0434\u0435\u043D\u044C \u0446\u0438\u043A\u043B\u0430"),
            createVNode("li", null, "\u2014 \u0423\u0417\u0418 \u043C\u0430\u043B\u043E\u0433\u043E \u0442\u0430\u0437\u0430 \u0441 \u043F\u043E\u0434\u0441\u0447\u0435\u0442\u043E\u043C \u0447\u0438\u0441\u043B\u0430 \u0430\u043D\u0442\u0440\u0430\u043B\u044C\u043D\u044B\u0445 \u0444\u043E\u043B\u043B\u0438\u043A\u0443\u043B\u043E\u0432 \u0432 \u043A\u0430\u0436\u0434\u043E\u043C \u044F\u0438\u0447\u043D\u0438\u043A\u0435 \u043D\u0430 5\u22127 \u0434\u0435\u043D\u044C \u0446\u0438\u043A\u043B\u0430"),
            createVNode("li", null, "\u2014 \u041A\u043B\u0438\u043D\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0430\u043D\u0430\u043B\u0438\u0437 \u043A\u0440\u043E\u0432\u0438"),
            createVNode("li", null, "\u2014 \u041E\u0431\u0449\u0438\u0439 \u0430\u043D\u0430\u043B\u0438\u0437 \u043C\u043E\u0447\u0438"),
            createVNode("li", null, "\u2014 \u0422\u0422\u0413 \u2014 \u0442\u0438\u0440\u0435\u043E\u0442\u0440\u043E\u043F\u043D\u044B\u0439 \u0433\u043E\u0440\u043C\u043E\u043D"),
            createVNode("li", null, "\u2014 \u041F\u0440\u043E\u043B\u0430\u043A\u0442\u0438\u043D"),
            createVNode("li", null, "\u2014 \u0424\u0435\u0440\u0440\u0438\u0442\u0438\u043D"),
            createVNode("li", null, "\u2014 \u0422\u0440\u0430\u043D\u0441\u0444\u0435\u0440\u0438\u043D"),
            createVNode("li", null, "\u2014 \u0421\u044B\u0432\u043E\u0440\u043E\u0442\u043E\u0447\u043D\u043E\u0435 \u0436\u0435\u043B\u0435\u0437\u043E"),
            createVNode("li", null, "\u2014 \u0412\u0438\u0442\u0430\u043C\u0438\u043D \u041425\u043E\u043D"),
            createVNode("li", null, "\u2014 \u0413\u043E\u043C\u043E\u0446\u0438\u0441\u0442\u0435\u0438\u043D"),
            createVNode("li", null, "\u2014 \u041B\u0430\u043A\u0442\u0430\u0442"),
            createVNode("li", null, "\u2014 \u0413\u0413\u0422 \u2014 \u0433\u0430\u043C\u043C\u0430-\u0433\u043B\u0443\u0442\u0430\u043C\u0438\u043D-\u0442\u0440\u0430\u043D\u0441\u043F\u0435\u043F\u0442\u0438\u0434\u0430\u0437\u0430"),
            createVNode("li", null, "\u2014 \u041E\u0431\u0449\u0438\u0439 \u0431\u0435\u043B\u043E\u043A"),
            createVNode("li", null, "\u2014 \u0413\u043B\u0438\u043A\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0439 \u0433\u0435\u043C\u043E\u0433\u043B\u043E\u0431\u0438\u043D"),
            createVNode("li", null, "\u2014 \u041C\u043E\u0447\u0435\u0432\u0430\u044F \u043A\u0438\u0441\u043B\u043E\u0442\u0430"),
            createVNode("li", null, "\u2014 \u042D\u043E\u0437\u0438\u043D\u043E\u0444\u0438\u043B\u044C\u043D\u044B\u0439 \u043A\u0430\u0442\u0438\u043E\u043D\u043D\u044B\u0439 \u0431\u0435\u043B\u043E\u043A"),
            createVNode("li", null, "\u2014 \u0418\u043C\u043C\u0443\u043D\u043E\u0433\u043B\u043E\u0431\u0443\u043B\u0438\u043D \u0415"),
            createVNode("li", null, "\u2014 \u041E\u0431\u0449\u0438\u0439 \u0445\u043E\u043B\u0435\u0441\u0442\u0435\u0440\u0438\u043D"),
            createVNode("li", null, "\u2014 \u041B\u041F\u041D\u041F-\u043B\u0438\u043F\u0440\u043E\u043F\u0440\u043E\u0442\u0435\u0438\u0434\u044B \u043D\u0438\u0437\u043A\u043E\u0439 \u043F\u043B\u043E\u0442\u043D\u043E\u0441\u0442\u0438"),
            createVNode("li", null, "\u2014 \u0421 \u0440\u0435\u0430\u043A\u0442\u0438\u0432\u043D\u044B\u0439 \u0431\u0435\u043B\u043E\u043A"),
            createVNode("li", null, "\u2014 \u0414-\u0434\u0438\u043C\u0435\u0440")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_elements_collapse, {
    class: "project-block__required-collapse",
    title: "\u041E\u043F\u0442\u0438\u043C\u0443\u043C"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="project-block__required-collapse_subtitle" data-v-ac2ab15c${_scopeId}> \u0412\u0441\u0435 \u0430\u043D\u0430\u043B\u0438\u0437\u044B \u041C\u0438\u043D\u0438\u043C\u0443\u043C\u0430, \u043F\u043B\u044E\u0441: </div><ul class="project-block__required-list two-columns" data-v-ac2ab15c${_scopeId}><li data-v-ac2ab15c${_scopeId}>\u2014 \u04223 \u0441\u0432\u043E\u0431\u043E\u0434\u043D\u044B\u0439</li><li data-v-ac2ab15c${_scopeId}>\u2014 \u04224 \u0441\u0432\u043E\u0431\u043E\u0434\u043D\u044B\u0439</li><li data-v-ac2ab15c${_scopeId}>\u2014 \u0410\u0422-\u0422\u041F\u041E \u2014 \u0430\u043D\u0442\u0438\u0442\u0435\u043B\u0430 \u043A \u0442\u0438\u0440\u0435\u043E\u043F\u0435\u0440\u043E\u043A\u0441\u0438\u0434\u0430\u0437\u0435</li><li data-v-ac2ab15c${_scopeId}>\u2014 \u0410\u0422-\u0422\u0413 \u2014 \u0430\u043D\u0442\u0438\u0442\u0435\u043B\u0430 \u043A \u0442\u0438\u0440\u0435\u043E\u0433\u043B\u043E\u0431\u0443\u043B\u0438\u043D\u0443</li><li data-v-ac2ab15c${_scopeId}>\u2014 \u0413\u043B\u044E\u043A\u043E\u0437\u0430 \u043A\u0440\u043E\u0432\u0438</li><li data-v-ac2ab15c${_scopeId}>\u2014 \u041E\u043D\u043A\u043E\u043C\u0430\u0440\u043A\u0435\u0440 \u0421\u0410-125</li><li data-v-ac2ab15c${_scopeId}>\u2014 \u041E\u043A\u043D\u043E\u043C\u0430\u0440\u043A\u0435\u0440 \u041D\u0415-4</li><li data-v-ac2ab15c${_scopeId}>\u2014 \u0410\u041B\u0422 \u2014 \u0430\u043B\u0430\u043D\u0438\u043D\u0430\u043C\u0438\u043D\u043E\u0442\u0440\u0430\u043D\u0441\u0444\u0435\u0440\u0430\u0437\u0430</li><li data-v-ac2ab15c${_scopeId}>\u2014 \u0410\u0421\u0422 \u2014 \u0430\u0441\u043F\u0430\u0440\u0442\u0430\u0442\u0430\u043C\u0438\u043D\u043E\u0442\u0440\u0430\u043D\u0441\u0444\u0435\u0440\u0430\u0437\u0430</li><li data-v-ac2ab15c${_scopeId}>\u2014 \u0429\u0424 \u2014 \u0449\u0435\u043B\u043E\u0447\u043D\u0430\u044F \u0444\u043E\u0441\u0444\u0430\u0442\u0430\u0437\u0430</li><li data-v-ac2ab15c${_scopeId}>\u2014 \u041B\u041F\u0412\u041F \u2014 \u043B\u0438\u043F\u043E\u043F\u0440\u043E\u0442\u0435\u0438\u0434\u044B \u0432\u044B\u0441\u043E\u043A\u043E\u0439 \u043F\u043B\u043E\u0442\u043D\u043E\u0441\u0442\u0438</li><li data-v-ac2ab15c${_scopeId}>\u2014 \u041C\u043E\u0447\u0435\u0432\u0438\u043D\u0430</li><li data-v-ac2ab15c${_scopeId}>\u2014 \u041A\u0440\u0435\u0430\u0442\u0438\u043D\u0438\u043D</li><li data-v-ac2ab15c${_scopeId}>\u2014 \u0410\u0427\u0422\u0412 \u2014 \u0430\u043A\u0442\u0438\u0432\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u043E\u0435 \u0447\u0430\u0441\u0442\u0438\u0447\u043D\u043E\u0435 \u0442\u0440\u043E\u043C\u0431\u043E\u043F\u043B\u0430\u0441\u0442\u0438\u043D\u043E\u0432\u043E\u0435 \u0432\u0440\u0435\u043C\u044F</li><li data-v-ac2ab15c${_scopeId}>\u2014 \u0424\u0438\u0431\u0440\u0438\u043D\u043E\u0433\u0435\u043D</li><li data-v-ac2ab15c${_scopeId}>\u2014 \u0410\u0421\u041B\u041E \u2014 \u0430\u043D\u0442\u0438\u0441\u0442\u0440\u0435\u043F\u0442\u043E\u043B\u0438\u0437\u0438\u043D-\u041E</li><li data-v-ac2ab15c${_scopeId}> \u2014 \u0420\u0424 \u2014 \u0440\u0435\u0432\u043C\u0430\u0442\u043E\u0438\u0434\u043D\u044B\u0439 \u0444\u0430\u043A\u0442\u043E\u0440</li><li data-v-ac2ab15c${_scopeId}>\u2014 \u041A\u0430\u043B\u044C\u043F\u0440\u043E\u0442\u0435\u043A\u0442\u0438\u043D</li><li data-v-ac2ab15c${_scopeId}> \u2014 \u041A\u043E\u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0430</li></ul>`);
      } else {
        return [
          createVNode("div", { class: "project-block__required-collapse_subtitle" }, " \u0412\u0441\u0435 \u0430\u043D\u0430\u043B\u0438\u0437\u044B \u041C\u0438\u043D\u0438\u043C\u0443\u043C\u0430, \u043F\u043B\u044E\u0441: "),
          createVNode("ul", { class: "project-block__required-list two-columns" }, [
            createVNode("li", null, "\u2014 \u04223 \u0441\u0432\u043E\u0431\u043E\u0434\u043D\u044B\u0439"),
            createVNode("li", null, "\u2014 \u04224 \u0441\u0432\u043E\u0431\u043E\u0434\u043D\u044B\u0439"),
            createVNode("li", null, "\u2014 \u0410\u0422-\u0422\u041F\u041E \u2014 \u0430\u043D\u0442\u0438\u0442\u0435\u043B\u0430 \u043A \u0442\u0438\u0440\u0435\u043E\u043F\u0435\u0440\u043E\u043A\u0441\u0438\u0434\u0430\u0437\u0435"),
            createVNode("li", null, "\u2014 \u0410\u0422-\u0422\u0413 \u2014 \u0430\u043D\u0442\u0438\u0442\u0435\u043B\u0430 \u043A \u0442\u0438\u0440\u0435\u043E\u0433\u043B\u043E\u0431\u0443\u043B\u0438\u043D\u0443"),
            createVNode("li", null, "\u2014 \u0413\u043B\u044E\u043A\u043E\u0437\u0430 \u043A\u0440\u043E\u0432\u0438"),
            createVNode("li", null, "\u2014 \u041E\u043D\u043A\u043E\u043C\u0430\u0440\u043A\u0435\u0440 \u0421\u0410-125"),
            createVNode("li", null, "\u2014 \u041E\u043A\u043D\u043E\u043C\u0430\u0440\u043A\u0435\u0440 \u041D\u0415-4"),
            createVNode("li", null, "\u2014 \u0410\u041B\u0422 \u2014 \u0430\u043B\u0430\u043D\u0438\u043D\u0430\u043C\u0438\u043D\u043E\u0442\u0440\u0430\u043D\u0441\u0444\u0435\u0440\u0430\u0437\u0430"),
            createVNode("li", null, "\u2014 \u0410\u0421\u0422 \u2014 \u0430\u0441\u043F\u0430\u0440\u0442\u0430\u0442\u0430\u043C\u0438\u043D\u043E\u0442\u0440\u0430\u043D\u0441\u0444\u0435\u0440\u0430\u0437\u0430"),
            createVNode("li", null, "\u2014 \u0429\u0424 \u2014 \u0449\u0435\u043B\u043E\u0447\u043D\u0430\u044F \u0444\u043E\u0441\u0444\u0430\u0442\u0430\u0437\u0430"),
            createVNode("li", null, "\u2014 \u041B\u041F\u0412\u041F \u2014 \u043B\u0438\u043F\u043E\u043F\u0440\u043E\u0442\u0435\u0438\u0434\u044B \u0432\u044B\u0441\u043E\u043A\u043E\u0439 \u043F\u043B\u043E\u0442\u043D\u043E\u0441\u0442\u0438"),
            createVNode("li", null, "\u2014 \u041C\u043E\u0447\u0435\u0432\u0438\u043D\u0430"),
            createVNode("li", null, "\u2014 \u041A\u0440\u0435\u0430\u0442\u0438\u043D\u0438\u043D"),
            createVNode("li", null, "\u2014 \u0410\u0427\u0422\u0412 \u2014 \u0430\u043A\u0442\u0438\u0432\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u043E\u0435 \u0447\u0430\u0441\u0442\u0438\u0447\u043D\u043E\u0435 \u0442\u0440\u043E\u043C\u0431\u043E\u043F\u043B\u0430\u0441\u0442\u0438\u043D\u043E\u0432\u043E\u0435 \u0432\u0440\u0435\u043C\u044F"),
            createVNode("li", null, "\u2014 \u0424\u0438\u0431\u0440\u0438\u043D\u043E\u0433\u0435\u043D"),
            createVNode("li", null, "\u2014 \u0410\u0421\u041B\u041E \u2014 \u0430\u043D\u0442\u0438\u0441\u0442\u0440\u0435\u043F\u0442\u043E\u043B\u0438\u0437\u0438\u043D-\u041E"),
            createVNode("li", null, " \u2014 \u0420\u0424 \u2014 \u0440\u0435\u0432\u043C\u0430\u0442\u043E\u0438\u0434\u043D\u044B\u0439 \u0444\u0430\u043A\u0442\u043E\u0440"),
            createVNode("li", null, "\u2014 \u041A\u0430\u043B\u044C\u043F\u0440\u043E\u0442\u0435\u043A\u0442\u0438\u043D"),
            createVNode("li", null, " \u2014 \u041A\u043E\u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0430")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_elements_collapse, {
    class: "project-block__required-collapse",
    title: "\u041C\u0430\u043A\u0441\u0438\u043C\u0443\u043C"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<ul class="project-block__required-list two-columns" data-v-ac2ab15c${_scopeId}><div class="project-block__required-collapse_subtitle" data-v-ac2ab15c${_scopeId}> \u0412\u0441\u0435 \u0430\u043D\u0430\u043B\u0438\u0437\u044B \u041E\u043F\u0442\u0438\u043C\u0443\u043C\u0430 \u043F\u043B\u044E\u0441: </div><li data-v-ac2ab15c${_scopeId}>\u2014 \u0422\u0435\u0441\u0442 \u044D\u043B\u0438\u0432\u0438\u0441\u0446\u0435\u0440\u043E-24</li></ul>`);
      } else {
        return [
          createVNode("ul", { class: "project-block__required-list two-columns" }, [
            createVNode("div", { class: "project-block__required-collapse_subtitle" }, " \u0412\u0441\u0435 \u0430\u043D\u0430\u043B\u0438\u0437\u044B \u041E\u043F\u0442\u0438\u043C\u0443\u043C\u0430 \u043F\u043B\u044E\u0441: "),
            createVNode("li", null, "\u2014 \u0422\u0435\u0441\u0442 \u044D\u043B\u0438\u0432\u0438\u0441\u0446\u0435\u0440\u043E-24")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div><div class="project-block__additional-block" data-v-ac2ab15c><div class="project-block__additional-left-column" data-v-ac2ab15c><img class="project-block__additional-avatar"${ssrRenderAttr("src", _imports_0$1)} data-v-ac2ab15c><h3 class="project-block__additional-left-text" data-v-ac2ab15c> \u0415\u0441\u043B\u0438 \u0432\u044B \u0443\u0436\u0435 \u043F\u0440\u0438\u043D\u044F\u043B\u0438 \u0440\u0435\u0448\u0435\u043D\u0438\u0435 \u043E\u0431\xA0\u042D\u041A\u041E\xA0\u2014\xA0\u043D\u0430\u0438\u0431\u043E\u043B\u0435\u0435 \u044D\u0444\u0444\u0435\u043A\u0442\u0438\u0432\u043D\u043E \u0431\u0443\u0434\u0435\u0442 \u0432\u043E\u0439\u0442\u0438 \u0432 \u043F\u0440\u043E\u0442\u043E\u043A\u043E\u043B \u0432 \u0442\u0435\u0447\u0435\u043D\u0438\u0435 2-6 \u043C\u0435\u0441\u044F\u0446\u0435\u0432 \u043F\u043E\u0441\u043B\u0435 \u043F\u0440\u043E\u0435\u043A\u0442\u0430 </h3></div><div class="project-block__additional-right-column" data-v-ac2ab15c><h3 class="project-block__additional-right-title" data-v-ac2ab15c> \u0421\u0442\u0430\u0440\u0442 \u0442\u0440\u0435\u0442\u044C\u0435\u0433\u043E \u043F\u043E\u0442\u043E\u043A\u0430 \u2014 \u044F\u043D\u0432\u0430\u0440\u044C 2023 </h3><a href="https://docs.google.com/forms/d/e/1FAIpQLSemeWdP_plcFlkOOFZ2NL5hMcyMMN9bWW2pc4OZkgZcLow8pA/viewform?usp=sharing" class="project-block__additional-button-container" data-v-ac2ab15c>`);
  _push(ssrRenderComponent(_component_elements_buttons_secondary, { title: "\u0417\u0430\u043F\u0438\u0441\u0430\u0442\u044C\u0441\u044F \u0432 \u043B\u0438\u0441\u0442 \u043E\u0436\u0438\u0434\u0430\u043D\u0438\u044F" }, null, _parent));
  _push(`</a>`);
  _push(ssrRenderComponent(_component_svg_almost_circle, { class: "project-block__additional-almost-circle" }, null, _parent));
  _push(`</div></div></div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/blocks/projects/BlocksProjectsRepro.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$4], ["__scopeId", "data-v-ac2ab15c"]]);
const BlocksProjectsMeno_vue_vue_type_style_index_0_scoped_a22b7d63_lang = "";
const tabsList = [
  {
    icon: "heartIcon",
    color: "#78353E",
    text: "\u0412\u0430\u043C \u0431\u043E\u043B\u0435\u0435 35-\u0442\u0438 \u043B\u0435\u0442 \u0438 \u0432\u044B \u043D\u0435 \u043F\u043B\u0430\u043D\u0438\u0440\u0443\u0435\u0442\u0435 \u0431\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u043E\u0441\u0442\u044C \u0432 \u043F\u0440\u0438\u043D\u0446\u0438\u043F\u0435 \u0438/\u0438\u043B\u0438 \u0443 \u0432\u0430\u0441 \u0443\u0436\u0435 \u0435\u0441\u0442\u044C \u0434\u0435\u0442\u0438"
  },
  {
    icon: "SvgDiamondIcon",
    color: "#C99D7A",
    text: "\u0412\u044B \u0445\u043E\u0442\u0438\u0442\u0435 \u0431\u043E\u043B\u0435\u0435 \u043C\u044F\u0433\u043A\u043E\u0435 \u0442\u0435\u0447\u0435\u043D\u0438\u0435 \u0444\u0438\u0437\u0438\u043E\u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u043E\u0439 \u043C\u0435\u043D\u043E\u043F\u0430\u0443\u0437\u044B"
  },
  {
    icon: "almostCircle",
    color: "#78353E",
    text: "\u0412\u044B \u0445\u043E\u0442\u0438\u0442\u0435 \u043E\u0442\u0441\u0440\u043E\u0447\u0438\u0442\u044C \u043D\u0430\u0441\u0442\u0443\u043F\u043B\u0435\u043D\u0438\u0435 \u043C\u0435\u043D\u043E\u043F\u0430\u0443\u0437\u044B"
  },
  {
    icon: "SvgGex",
    color: "#644C5C",
    text: "\u0423 \u0432\u0430\u0441 \u0435\u0441\u0442\u044C \u0440\u0430\u043D\u043D\u0438\u0435 \u0438 \u0441\u0430\u043C\u044B\u0435 \u0440\u0430\u043D\u043D\u0438\u0435 \u043F\u0440\u0438\u0437\u043D\u0430\u043A\u0438 \u043F\u0440\u0435\u043C\u0435\u043D\u043E\u043F\u0430\u0443\u0437\u044B"
  },
  {
    icon: "SvgSoftIcon",
    color: "#064848",
    text: "\u0423 \u0432\u0430\u0441 \u0443\u0436\u0435 \u043D\u0430\u0441\u0442\u0443\u043F\u0438\u043B\u0430 \u043C\u0435\u043D\u043E\u043F\u0430\u0443\u0437\u0430"
  },
  {
    icon: "SvgPineLeft",
    color: "#C5B1B2",
    text: "\u0414\u043B\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C \u0432\u0430\u0448\u0435\u0439 \u043C\u0435\u043D\u043E\u043F\u0430\u0443\u0437\u044B \u043D\u0435 \u0431\u043E\u043B\u0435\u0435 3-5 \u043B\u0435\u0442"
  }
];
const _sfc_main$3 = {
  components: { SvgInfoIcon: __nuxt_component_1$4 },
  setup() {
    return {
      tabsList
    };
  }
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_svg_soft_icon = __nuxt_component_0$2;
  const _component_svg_arrow = __nuxt_component_0$5;
  const _component_svg_oval_icon = __nuxt_component_2$1;
  const _component_svg_info_icon = __nuxt_component_1$4;
  const _component_elements_iconed_item = __nuxt_component_0$3;
  const _component_elements_collapse = __nuxt_component_0$4;
  const _component_elements_buttons_secondary = __nuxt_component_3$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "project-block" }, _attrs))} data-v-a22b7d63><div class="project-block__about" data-v-a22b7d63><h2 class="project-block__about-title" data-v-a22b7d63> \u041F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u0438\u0437\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0439 \u043F\u0440\u043E\u0435\u043A\u0442 \xAB\u041C\u0435\u043D\u043E \u2014 \u043E\u0436\u0438\u0432\u0438 \u044F\u0438\u0447\u043D\u0438\u043A\u0438\xBB </h2><div class="project-block__about-text" data-v-a22b7d63> \u0414\u043B\u044F \u0442\u0435\u0445, \u043A\u0442\u043E \u0445\u043E\u0447\u0435\u0442 \u043E\u0441\u0442\u0430\u0442\u044C\u0441\u044F \u043C\u043E\u043B\u043E\u0434\u043E\u0439 \u0438 \u043A\u0440\u0430\u0441\u0438\u0432\u043E\u0439 \u043D\u0430\u0434\u043E\u043B\u0433\u043E, \u043F\u0440\u043E\u0434\u043B\u0438\u0442\u044C \u0433\u043E\u0440\u043C\u043E\u043D\u0430\u043B\u044C\u043D\u043E\u0435 \u0436\u0435\u043D\u0441\u043A\u043E\u0435 \u0437\u0434\u043E\u0440\u043E\u0432\u044C\u0435 \u0438 \u043D\u0435 \u0438\u043C\u0435\u0435\u0442 \u043F\u043B\u0430\u043D\u043E\u0432 \u043D\u0430 \u0434\u0435\u0442\u0435\u0439 </div>`);
  _push(ssrRenderComponent(_component_svg_soft_icon, { class: "project-block__about-soft" }, null, _parent));
  _push(ssrRenderComponent(_component_svg_arrow, { class: "project-block__about-arrow" }, null, _parent));
  _push(ssrRenderComponent(_component_svg_oval_icon, { class: "project-block__about-oval" }, null, _parent));
  _push(`</div><div class="project-block__about-additional" data-v-a22b7d63><div class="project-block__about-additional-info-icon" data-v-a22b7d63>`);
  _push(ssrRenderComponent(_component_svg_info_icon, null, null, _parent));
  _push(`</div><div class="project-block__about-additional-info-text" data-v-a22b7d63> \u041C\u0435\u0441\u0442\u043E \u043F\u0440\u043E\u0436\u0438\u0432\u0430\u043D\u0438\u044F \u0438 \u043F\u0440\u0438\u0451\u043C \u043F\u0440\u0435\u043F\u0430\u0440\u0430\u0442\u043E\u0432 \u043C\u0435\u043D\u043E\u043F\u0430\u0443\u0437\u0430\u043B\u044C\u043D\u043E\u0439 (\u0437\u0430\u043C\u0435\u0441\u0442\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0439) \u0433\u043E\u0440\u043C\u043E\u043D\u0430\u043B\u044C\u043D\u043E\u0439 \u0442\u0435\u0440\u0430\u043F\u0438\u0438 \u043D\u0435 \u044F\u0432\u043B\u044F\u044E\u0442\u0441\u044F \u043E\u0433\u0440\u0430\u043D\u0438\u0447\u0435\u043D\u0438\u0435\u043C \u0434\u043B\u044F \u0443\u0447\u0430\u0441\u0442\u0438\u044F </div></div><div class="project-block__when-needed-block" data-v-a22b7d63><h2 class="project-block__block-title" data-v-a22b7d63> \u041A\u043E\u0433\u0434\u0430 \u0441\u0442\u043E\u0438\u0442 \u0438\u0434\u0442\u0438 </h2><div class="project-block__when-needed-list" data-v-a22b7d63><!--[-->`);
  ssrRenderList($setup.tabsList, (item) => {
    _push(ssrRenderComponent(_component_elements_iconed_item, {
      "icon-name": item.icon,
      "icon-color": item.color,
      text: item.text
    }, null, _parent));
  });
  _push(`<!--]--></div></div><div class="project-block__what-inside-block" data-v-a22b7d63><h2 class="project-block__block-title" data-v-a22b7d63> \u0427\u0442\u043E \u0432\u043D\u0443\u0442\u0440\u0438? </h2><div class="project-block__what-inside-list" data-v-a22b7d63><div class="project-block__what-inside-item" data-v-a22b7d63><div class="project-block__what-inside-title" data-v-a22b7d63> \u041E\u0442\u0434\u0435\u043B\u044C\u043D\u044B\u0439 Telegram-\u0447\u0430\u0442 </div><div class="project-block__what-inside-text" data-v-a22b7d63> \u0412 \u0442\u0435\u0447\u0435\u043D\u0438\u0435 4-\u0445 \u043D\u0435\u0434\u0435\u043B\u044C \u0432 \u0437\u0430\u043A\u0440\u044B\u0442\u043E\u043C Telegram-\u043A\u0430\u043D\u0430\u043B\u0435 \u0431\u0443\u0434\u0443\u0442 \u0432\u044B\u0445\u043E\u0434\u0438\u0442\u044C \u0430\u043A\u0442\u0443\u0430\u043B\u044C\u043D\u044B\u0435 \u0441\u0442\u0440\u0430\u0442\u0435\u0433\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u043F\u043E\u0441\u0442\u044B, \u043E\u0431\u044A\u044F\u0441\u043D\u044F\u044E\u0449\u0438\u0435 \u0432\u0441\u044E \u0442\u0430\u043A\u0442\u0438\u043A\u0443 \u0438 \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u0438 \u0430\u043A\u0442\u0438\u0432\u0430\u0446\u0438\u0438 \u044F\u0438\u0447\u043D\u0438\u043A\u043E\u0432 </div>`);
  _push(ssrRenderComponent(_component_svg_soft_icon, { class: "project-block__what-inside-item-union" }, null, _parent));
  _push(`</div><div class="project-block__what-inside-item" data-v-a22b7d63><div class="project-block__what-inside-title" data-v-a22b7d63> \u041F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044F </div><div class="project-block__what-inside-text" data-v-a22b7d63> \u0417\u0430 \u0432\u0440\u0435\u043C\u044F \u043F\u0440\u043E\u0435\u043A\u0442\u0430 \u0432\u0430\u043C \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u0431\u0443\u0434\u0435\u0442 \u0441\u0434\u0430\u0442\u044C \u0430\u043D\u0430\u043B\u0438\u0437\u044B \u0438 \u0437\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u044C \u0430\u043D\u043A\u0435\u0442\u0443. \u0412 \u0442\u0435\u0447\u0435\u043D\u0438\u0435 2-\u0445 \u043D\u0435\u0434\u0435\u043B\u044C \u043F\u043E\u0441\u043B\u0435 \u043E\u043A\u043E\u043D\u0447\u0430\u043D\u0438\u044F \u043F\u0440\u043E\u0435\u043A\u0442\u0430 \u043A\u0430\u0436\u0434\u0430\u044F \u0443\u0447\u0430\u0441\u0442\u043D\u0438\u0446\u0430 \u043F\u043E\u043B\u0443\u0447\u0438\u0442 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0439 \u043F\u0440\u043E\u0442\u043E\u043A\u043E\u043B \u043E\u0442 \u0434\u043E\u043A\u0442\u043E\u0440\u0430 \u043C\u0435\u0434\u0438\u0446\u0438\u043D\u0441\u043A\u0438\u0445 \u043D\u0430\u0443\u043A \u043F\u0440\u043E\u0444\u0435\u0441\u0441\u043E\u0440\u0430 \u0430\u043A\u0443\u0448\u0435\u0440\u0430-\u0433\u0438\u043D\u0435\u043A\u043E\u043B\u043E\u0433\u0430 \u0414\u0436\u043E\u0431\u0430\u0432\u0430 \u042D\u043B\u0438\u0441\u043E \u041C\u0443\u0440\u043C\u0430\u043D\u043E\u0432\u043D\u044B. \u041F\u043E\u0441\u043B\u0435 \u0435\u0433\u043E \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u044F \u0432\u044B \u0441\u043C\u043E\u0436\u0435\u0442\u0435 1 \u0440\u0430\u0437 \u0437\u0430\u0434\u0430\u0442\u044C \u0432\u0441\u0435 \u0438\u043D\u0442\u0435\u0440\u0435\u0441\u0443\u044E\u0449\u0438\u0435 \u0432\u0430\u0441 \u0432\u043E\u043F\u0440\u043E\u0441\u044B \u043F\u043E \u043F\u0440\u043E\u0442\u043E\u043A\u043E\u043B\u0443 \u0432 \u043E\u0442\u0432\u0435\u0442\u043D\u043E\u043C \u043F\u0438\u0441\u044C\u043C\u0435 </div></div></div></div><div class="project-block__required-block" data-v-a22b7d63><h2 class="project-block__block-title" data-v-a22b7d63> \u041A\u0430\u043A\u0438\u0435 \u0430\u043D\u0430\u043B\u0438\u0437\u044B \u0438 \u043E\u0431\u0441\u043B\u0435\u0434\u043E\u0432\u0430\u043D\u0438\u044F \u043F\u043E\u043D\u0430\u0434\u043E\u0431\u044F\u0442\u0441\u044F? </h2><div class="project-block__required-collapse-wrapper" data-v-a22b7d63>`);
  _push(ssrRenderComponent(_component_elements_collapse, {
    class: "project-block__required-collapse",
    title: "\u041C\u0438\u043D\u0438\u043C\u0443\u043C"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<ul class="project-block__required-list two-columns" data-v-a22b7d63${_scopeId}><li data-v-a22b7d63${_scopeId}>\u2014 \u0410\u041C\u0413 \u2014 \u0430\u043D\u0442\u0438\u043C\u044E\u043B\u043B\u0435\u0440\u043E\u0432 \u0433\u043E\u0440\u043C\u043E\u043D</li><li data-v-a22b7d63${_scopeId}>\u2014 \u0424\u0421\u0413 \u2014 \u0444\u043E\u043B\u043B\u0438\u043A\u0443\u043B\u043E\u0441\u0442\u0438\u043C\u0443\u043B\u0438\u0440\u0443\u044E\u0449\u0438\u0439 \u0433\u043E\u0440\u043C\u043E\u043D</li><li data-v-a22b7d63${_scopeId}>\u2014 \u041B\u0413 \u2014 \u043B\u044E\u0442\u0435\u0438\u043D\u0438\u0437\u0438\u0440\u0443\u044E\u0449\u0438\u0439 \u0433\u043E\u0440\u043C\u043E\u043D \u043D\u0430 3\u22125 \u0434\u0435\u043D\u044C \u0446\u0438\u043A\u043B\u0430</li><li data-v-a22b7d63${_scopeId}>\u2014 \u0423\u0417\u0418 \u043C\u0430\u043B\u043E\u0433\u043E \u0442\u0430\u0437\u0430 \u0441 \u043F\u043E\u0434\u0441\u0447\u0435\u0442\u043E\u043C \u0447\u0438\u0441\u043B\u0430 \u0430\u043D\u0442\u0440\u0430\u043B\u044C\u043D\u044B\u0445 \u0444\u043E\u043B\u043B\u0438\u043A\u0443\u043B\u043E\u0432 \u0432 \u043A\u0430\u0436\u0434\u043E\u043C \u044F\u0438\u0447\u043D\u0438\u043A\u0435 \u043D\u0430 5\u22127 \u0434\u0435\u043D\u044C \u0446\u0438\u043A\u043B\u0430</li><li data-v-a22b7d63${_scopeId}>\u2014 \u041A\u043B\u0438\u043D\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0430\u043D\u0430\u043B\u0438\u0437 \u043A\u0440\u043E\u0432\u0438</li><li data-v-a22b7d63${_scopeId}>\u2014 \u041E\u0431\u0449\u0438\u0439 \u0430\u043D\u0430\u043B\u0438\u0437 \u043C\u043E\u0447\u0438</li><li data-v-a22b7d63${_scopeId}>\u2014 \u0422\u0422\u0413 \u2014 \u0442\u0438\u0440\u0435\u043E\u0442\u0440\u043E\u043F\u043D\u044B\u0439 \u0433\u043E\u0440\u043C\u043E\u043D</li><li data-v-a22b7d63${_scopeId}>\u2014 \u041F\u0440\u043E\u043B\u0430\u043A\u0442\u0438\u043D</li><li data-v-a22b7d63${_scopeId}>\u2014 \u0424\u0435\u0440\u0440\u0438\u0442\u0438\u043D</li><li data-v-a22b7d63${_scopeId}>\u2014 \u0422\u0440\u0430\u043D\u0441\u0444\u0435\u0440\u0438\u043D</li><li data-v-a22b7d63${_scopeId}>\u2014 \u0421\u044B\u0432\u043E\u0440\u043E\u0442\u043E\u0447\u043D\u043E\u0435 \u0436\u0435\u043B\u0435\u0437\u043E</li><li data-v-a22b7d63${_scopeId}>\u2014 \u0412\u0438\u0442\u0430\u043C\u0438\u043D \u041425\u043E\u043D</li><li data-v-a22b7d63${_scopeId}>\u2014 \u0413\u043E\u043C\u043E\u0446\u0438\u0441\u0442\u0435\u0438\u043D</li><li data-v-a22b7d63${_scopeId}>\u2014 \u041B\u0430\u043A\u0442\u0430\u0442</li><li data-v-a22b7d63${_scopeId}>\u2014 \u0413\u0413\u0422 \u2014 \u0433\u0430\u043C\u043C\u0430-\u0433\u043B\u0443\u0442\u0430\u043C\u0438\u043D-\u0442\u0440\u0430\u043D\u0441\u043F\u0435\u043F\u0442\u0438\u0434\u0430\u0437\u0430</li><li data-v-a22b7d63${_scopeId}>\u2014 \u041E\u0431\u0449\u0438\u0439 \u0431\u0435\u043B\u043E\u043A</li><li data-v-a22b7d63${_scopeId}>\u2014 \u0413\u043B\u0438\u043A\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0439 \u0433\u0435\u043C\u043E\u0433\u043B\u043E\u0431\u0438\u043D</li><li data-v-a22b7d63${_scopeId}>\u2014 \u041C\u043E\u0447\u0435\u0432\u0430\u044F \u043A\u0438\u0441\u043B\u043E\u0442\u0430</li><li data-v-a22b7d63${_scopeId}>\u2014 \u042D\u043E\u0437\u0438\u043D\u043E\u0444\u0438\u043B\u044C\u043D\u044B\u0439 \u043A\u0430\u0442\u0438\u043E\u043D\u043D\u044B\u0439 \u0431\u0435\u043B\u043E\u043A</li><li data-v-a22b7d63${_scopeId}>\u2014 \u0418\u043C\u043C\u0443\u043D\u043E\u0433\u043B\u043E\u0431\u0443\u043B\u0438\u043D \u0415</li><li data-v-a22b7d63${_scopeId}>\u2014 \u041E\u0431\u0449\u0438\u0439 \u0445\u043E\u043B\u0435\u0441\u0442\u0435\u0440\u0438\u043D</li><li data-v-a22b7d63${_scopeId}>\u2014 \u041B\u041F\u041D\u041F-\u043B\u0438\u043F\u0440\u043E\u043F\u0440\u043E\u0442\u0435\u0438\u0434\u044B \u043D\u0438\u0437\u043A\u043E\u0439 \u043F\u043B\u043E\u0442\u043D\u043E\u0441\u0442\u0438</li><li data-v-a22b7d63${_scopeId}>\u2014 \u0421 \u0440\u0435\u0430\u043A\u0442\u0438\u0432\u043D\u044B\u0439 \u0431\u0435\u043B\u043E\u043A</li><li data-v-a22b7d63${_scopeId}>\u2014 \u0414-\u0434\u0438\u043C\u0435\u0440</li></ul>`);
      } else {
        return [
          createVNode("ul", { class: "project-block__required-list two-columns" }, [
            createVNode("li", null, "\u2014 \u0410\u041C\u0413 \u2014 \u0430\u043D\u0442\u0438\u043C\u044E\u043B\u043B\u0435\u0440\u043E\u0432 \u0433\u043E\u0440\u043C\u043E\u043D"),
            createVNode("li", null, "\u2014 \u0424\u0421\u0413 \u2014 \u0444\u043E\u043B\u043B\u0438\u043A\u0443\u043B\u043E\u0441\u0442\u0438\u043C\u0443\u043B\u0438\u0440\u0443\u044E\u0449\u0438\u0439 \u0433\u043E\u0440\u043C\u043E\u043D"),
            createVNode("li", null, "\u2014 \u041B\u0413 \u2014 \u043B\u044E\u0442\u0435\u0438\u043D\u0438\u0437\u0438\u0440\u0443\u044E\u0449\u0438\u0439 \u0433\u043E\u0440\u043C\u043E\u043D \u043D\u0430 3\u22125 \u0434\u0435\u043D\u044C \u0446\u0438\u043A\u043B\u0430"),
            createVNode("li", null, "\u2014 \u0423\u0417\u0418 \u043C\u0430\u043B\u043E\u0433\u043E \u0442\u0430\u0437\u0430 \u0441 \u043F\u043E\u0434\u0441\u0447\u0435\u0442\u043E\u043C \u0447\u0438\u0441\u043B\u0430 \u0430\u043D\u0442\u0440\u0430\u043B\u044C\u043D\u044B\u0445 \u0444\u043E\u043B\u043B\u0438\u043A\u0443\u043B\u043E\u0432 \u0432 \u043A\u0430\u0436\u0434\u043E\u043C \u044F\u0438\u0447\u043D\u0438\u043A\u0435 \u043D\u0430 5\u22127 \u0434\u0435\u043D\u044C \u0446\u0438\u043A\u043B\u0430"),
            createVNode("li", null, "\u2014 \u041A\u043B\u0438\u043D\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0430\u043D\u0430\u043B\u0438\u0437 \u043A\u0440\u043E\u0432\u0438"),
            createVNode("li", null, "\u2014 \u041E\u0431\u0449\u0438\u0439 \u0430\u043D\u0430\u043B\u0438\u0437 \u043C\u043E\u0447\u0438"),
            createVNode("li", null, "\u2014 \u0422\u0422\u0413 \u2014 \u0442\u0438\u0440\u0435\u043E\u0442\u0440\u043E\u043F\u043D\u044B\u0439 \u0433\u043E\u0440\u043C\u043E\u043D"),
            createVNode("li", null, "\u2014 \u041F\u0440\u043E\u043B\u0430\u043A\u0442\u0438\u043D"),
            createVNode("li", null, "\u2014 \u0424\u0435\u0440\u0440\u0438\u0442\u0438\u043D"),
            createVNode("li", null, "\u2014 \u0422\u0440\u0430\u043D\u0441\u0444\u0435\u0440\u0438\u043D"),
            createVNode("li", null, "\u2014 \u0421\u044B\u0432\u043E\u0440\u043E\u0442\u043E\u0447\u043D\u043E\u0435 \u0436\u0435\u043B\u0435\u0437\u043E"),
            createVNode("li", null, "\u2014 \u0412\u0438\u0442\u0430\u043C\u0438\u043D \u041425\u043E\u043D"),
            createVNode("li", null, "\u2014 \u0413\u043E\u043C\u043E\u0446\u0438\u0441\u0442\u0435\u0438\u043D"),
            createVNode("li", null, "\u2014 \u041B\u0430\u043A\u0442\u0430\u0442"),
            createVNode("li", null, "\u2014 \u0413\u0413\u0422 \u2014 \u0433\u0430\u043C\u043C\u0430-\u0433\u043B\u0443\u0442\u0430\u043C\u0438\u043D-\u0442\u0440\u0430\u043D\u0441\u043F\u0435\u043F\u0442\u0438\u0434\u0430\u0437\u0430"),
            createVNode("li", null, "\u2014 \u041E\u0431\u0449\u0438\u0439 \u0431\u0435\u043B\u043E\u043A"),
            createVNode("li", null, "\u2014 \u0413\u043B\u0438\u043A\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0439 \u0433\u0435\u043C\u043E\u0433\u043B\u043E\u0431\u0438\u043D"),
            createVNode("li", null, "\u2014 \u041C\u043E\u0447\u0435\u0432\u0430\u044F \u043A\u0438\u0441\u043B\u043E\u0442\u0430"),
            createVNode("li", null, "\u2014 \u042D\u043E\u0437\u0438\u043D\u043E\u0444\u0438\u043B\u044C\u043D\u044B\u0439 \u043A\u0430\u0442\u0438\u043E\u043D\u043D\u044B\u0439 \u0431\u0435\u043B\u043E\u043A"),
            createVNode("li", null, "\u2014 \u0418\u043C\u043C\u0443\u043D\u043E\u0433\u043B\u043E\u0431\u0443\u043B\u0438\u043D \u0415"),
            createVNode("li", null, "\u2014 \u041E\u0431\u0449\u0438\u0439 \u0445\u043E\u043B\u0435\u0441\u0442\u0435\u0440\u0438\u043D"),
            createVNode("li", null, "\u2014 \u041B\u041F\u041D\u041F-\u043B\u0438\u043F\u0440\u043E\u043F\u0440\u043E\u0442\u0435\u0438\u0434\u044B \u043D\u0438\u0437\u043A\u043E\u0439 \u043F\u043B\u043E\u0442\u043D\u043E\u0441\u0442\u0438"),
            createVNode("li", null, "\u2014 \u0421 \u0440\u0435\u0430\u043A\u0442\u0438\u0432\u043D\u044B\u0439 \u0431\u0435\u043B\u043E\u043A"),
            createVNode("li", null, "\u2014 \u0414-\u0434\u0438\u043C\u0435\u0440")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_elements_collapse, {
    class: "project-block__required-collapse",
    title: "\u041E\u043F\u0442\u0438\u043C\u0443\u043C"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="project-block__required-collapse_subtitle" data-v-a22b7d63${_scopeId}> \u0412\u0441\u0435 \u0430\u043D\u0430\u043B\u0438\u0437\u044B \u041C\u0438\u043D\u0438\u043C\u0443\u043C\u0430, \u043F\u043B\u044E\u0441: </div><ul class="project-block__required-list two-columns" data-v-a22b7d63${_scopeId}><li data-v-a22b7d63${_scopeId}>\u2014 \u04223 \u0441\u0432\u043E\u0431\u043E\u0434\u043D\u044B\u0439</li><li data-v-a22b7d63${_scopeId}>\u2014 \u04224 \u0441\u0432\u043E\u0431\u043E\u0434\u043D\u044B\u0439</li><li data-v-a22b7d63${_scopeId}>\u2014 \u0410\u0422-\u0422\u041F\u041E \u2014 \u0430\u043D\u0442\u0438\u0442\u0435\u043B\u0430 \u043A \u0442\u0438\u0440\u0435\u043E\u043F\u0435\u0440\u043E\u043A\u0441\u0438\u0434\u0430\u0437\u0435</li><li data-v-a22b7d63${_scopeId}>\u2014 \u0410\u0422-\u0422\u0413 \u2014 \u0430\u043D\u0442\u0438\u0442\u0435\u043B\u0430 \u043A \u0442\u0438\u0440\u0435\u043E\u0433\u043B\u043E\u0431\u0443\u043B\u0438\u043D\u0443</li><li data-v-a22b7d63${_scopeId}>\u2014 \u0413\u043B\u044E\u043A\u043E\u0437\u0430 \u043A\u0440\u043E\u0432\u0438</li><li data-v-a22b7d63${_scopeId}>\u2014 \u041E\u043D\u043A\u043E\u043C\u0430\u0440\u043A\u0435\u0440 \u0421\u0410-125</li><li data-v-a22b7d63${_scopeId}>\u2014 \u041E\u043A\u043D\u043E\u043C\u0430\u0440\u043A\u0435\u0440 \u041D\u0415-4</li><li data-v-a22b7d63${_scopeId}>\u2014 \u0410\u041B\u0422 \u2014 \u0430\u043B\u0430\u043D\u0438\u043D\u0430\u043C\u0438\u043D\u043E\u0442\u0440\u0430\u043D\u0441\u0444\u0435\u0440\u0430\u0437\u0430</li><li data-v-a22b7d63${_scopeId}>\u2014 \u0410\u0421\u0422 \u2014 \u0430\u0441\u043F\u0430\u0440\u0442\u0430\u0442\u0430\u043C\u0438\u043D\u043E\u0442\u0440\u0430\u043D\u0441\u0444\u0435\u0440\u0430\u0437\u0430</li><li data-v-a22b7d63${_scopeId}>\u2014 \u0429\u0424 \u2014 \u0449\u0435\u043B\u043E\u0447\u043D\u0430\u044F \u0444\u043E\u0441\u0444\u0430\u0442\u0430\u0437\u0430</li><li data-v-a22b7d63${_scopeId}>\u2014 \u041B\u041F\u0412\u041F \u2014 \u043B\u0438\u043F\u043E\u043F\u0440\u043E\u0442\u0435\u0438\u0434\u044B \u0432\u044B\u0441\u043E\u043A\u043E\u0439 \u043F\u043B\u043E\u0442\u043D\u043E\u0441\u0442\u0438</li><li data-v-a22b7d63${_scopeId}>\u2014 \u041C\u043E\u0447\u0435\u0432\u0438\u043D\u0430</li><li data-v-a22b7d63${_scopeId}>\u2014 \u041A\u0440\u0435\u0430\u0442\u0438\u043D\u0438\u043D</li><li data-v-a22b7d63${_scopeId}>\u2014 \u0410\u0427\u0422\u0412 \u2014 \u0430\u043A\u0442\u0438\u0432\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u043E\u0435 \u0447\u0430\u0441\u0442\u0438\u0447\u043D\u043E\u0435 \u0442\u0440\u043E\u043C\u0431\u043E\u043F\u043B\u0430\u0441\u0442\u0438\u043D\u043E\u0432\u043E\u0435 \u0432\u0440\u0435\u043C\u044F</li><li data-v-a22b7d63${_scopeId}>\u2014 \u0424\u0438\u0431\u0440\u0438\u043D\u043E\u0433\u0435\u043D</li><li data-v-a22b7d63${_scopeId}>\u2014 \u0410\u0421\u041B\u041E \u2014 \u0430\u043D\u0442\u0438\u0441\u0442\u0440\u0435\u043F\u0442\u043E\u043B\u0438\u0437\u0438\u043D-\u041E</li><li data-v-a22b7d63${_scopeId}> \u2014 \u0420\u0424 \u2014 \u0440\u0435\u0432\u043C\u0430\u0442\u043E\u0438\u0434\u043D\u044B\u0439 \u0444\u0430\u043A\u0442\u043E\u0440</li><li data-v-a22b7d63${_scopeId}>\u2014 \u041A\u0430\u043B\u044C\u043F\u0440\u043E\u0442\u0435\u043A\u0442\u0438\u043D</li><li data-v-a22b7d63${_scopeId}> \u2014 \u041A\u043E\u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0430</li></ul>`);
      } else {
        return [
          createVNode("div", { class: "project-block__required-collapse_subtitle" }, " \u0412\u0441\u0435 \u0430\u043D\u0430\u043B\u0438\u0437\u044B \u041C\u0438\u043D\u0438\u043C\u0443\u043C\u0430, \u043F\u043B\u044E\u0441: "),
          createVNode("ul", { class: "project-block__required-list two-columns" }, [
            createVNode("li", null, "\u2014 \u04223 \u0441\u0432\u043E\u0431\u043E\u0434\u043D\u044B\u0439"),
            createVNode("li", null, "\u2014 \u04224 \u0441\u0432\u043E\u0431\u043E\u0434\u043D\u044B\u0439"),
            createVNode("li", null, "\u2014 \u0410\u0422-\u0422\u041F\u041E \u2014 \u0430\u043D\u0442\u0438\u0442\u0435\u043B\u0430 \u043A \u0442\u0438\u0440\u0435\u043E\u043F\u0435\u0440\u043E\u043A\u0441\u0438\u0434\u0430\u0437\u0435"),
            createVNode("li", null, "\u2014 \u0410\u0422-\u0422\u0413 \u2014 \u0430\u043D\u0442\u0438\u0442\u0435\u043B\u0430 \u043A \u0442\u0438\u0440\u0435\u043E\u0433\u043B\u043E\u0431\u0443\u043B\u0438\u043D\u0443"),
            createVNode("li", null, "\u2014 \u0413\u043B\u044E\u043A\u043E\u0437\u0430 \u043A\u0440\u043E\u0432\u0438"),
            createVNode("li", null, "\u2014 \u041E\u043D\u043A\u043E\u043C\u0430\u0440\u043A\u0435\u0440 \u0421\u0410-125"),
            createVNode("li", null, "\u2014 \u041E\u043A\u043D\u043E\u043C\u0430\u0440\u043A\u0435\u0440 \u041D\u0415-4"),
            createVNode("li", null, "\u2014 \u0410\u041B\u0422 \u2014 \u0430\u043B\u0430\u043D\u0438\u043D\u0430\u043C\u0438\u043D\u043E\u0442\u0440\u0430\u043D\u0441\u0444\u0435\u0440\u0430\u0437\u0430"),
            createVNode("li", null, "\u2014 \u0410\u0421\u0422 \u2014 \u0430\u0441\u043F\u0430\u0440\u0442\u0430\u0442\u0430\u043C\u0438\u043D\u043E\u0442\u0440\u0430\u043D\u0441\u0444\u0435\u0440\u0430\u0437\u0430"),
            createVNode("li", null, "\u2014 \u0429\u0424 \u2014 \u0449\u0435\u043B\u043E\u0447\u043D\u0430\u044F \u0444\u043E\u0441\u0444\u0430\u0442\u0430\u0437\u0430"),
            createVNode("li", null, "\u2014 \u041B\u041F\u0412\u041F \u2014 \u043B\u0438\u043F\u043E\u043F\u0440\u043E\u0442\u0435\u0438\u0434\u044B \u0432\u044B\u0441\u043E\u043A\u043E\u0439 \u043F\u043B\u043E\u0442\u043D\u043E\u0441\u0442\u0438"),
            createVNode("li", null, "\u2014 \u041C\u043E\u0447\u0435\u0432\u0438\u043D\u0430"),
            createVNode("li", null, "\u2014 \u041A\u0440\u0435\u0430\u0442\u0438\u043D\u0438\u043D"),
            createVNode("li", null, "\u2014 \u0410\u0427\u0422\u0412 \u2014 \u0430\u043A\u0442\u0438\u0432\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u043E\u0435 \u0447\u0430\u0441\u0442\u0438\u0447\u043D\u043E\u0435 \u0442\u0440\u043E\u043C\u0431\u043E\u043F\u043B\u0430\u0441\u0442\u0438\u043D\u043E\u0432\u043E\u0435 \u0432\u0440\u0435\u043C\u044F"),
            createVNode("li", null, "\u2014 \u0424\u0438\u0431\u0440\u0438\u043D\u043E\u0433\u0435\u043D"),
            createVNode("li", null, "\u2014 \u0410\u0421\u041B\u041E \u2014 \u0430\u043D\u0442\u0438\u0441\u0442\u0440\u0435\u043F\u0442\u043E\u043B\u0438\u0437\u0438\u043D-\u041E"),
            createVNode("li", null, " \u2014 \u0420\u0424 \u2014 \u0440\u0435\u0432\u043C\u0430\u0442\u043E\u0438\u0434\u043D\u044B\u0439 \u0444\u0430\u043A\u0442\u043E\u0440"),
            createVNode("li", null, "\u2014 \u041A\u0430\u043B\u044C\u043F\u0440\u043E\u0442\u0435\u043A\u0442\u0438\u043D"),
            createVNode("li", null, " \u2014 \u041A\u043E\u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0430")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_elements_collapse, {
    class: "project-block__required-collapse",
    title: "\u041C\u0430\u043A\u0441\u0438\u043C\u0443\u043C"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<ul class="project-block__required-list two-columns" data-v-a22b7d63${_scopeId}><div class="project-block__required-collapse_subtitle" data-v-a22b7d63${_scopeId}> \u0412\u0441\u0435 \u0430\u043D\u0430\u043B\u0438\u0437\u044B \u041E\u043F\u0442\u0438\u043C\u0443\u043C\u0430 \u043F\u043B\u044E\u0441: </div><li data-v-a22b7d63${_scopeId}>\u2014 \u0422\u0435\u0441\u0442 \u044D\u043B\u0438\u0432\u0438\u0441\u0446\u0435\u0440\u043E-24</li></ul>`);
      } else {
        return [
          createVNode("ul", { class: "project-block__required-list two-columns" }, [
            createVNode("div", { class: "project-block__required-collapse_subtitle" }, " \u0412\u0441\u0435 \u0430\u043D\u0430\u043B\u0438\u0437\u044B \u041E\u043F\u0442\u0438\u043C\u0443\u043C\u0430 \u043F\u043B\u044E\u0441: "),
            createVNode("li", null, "\u2014 \u0422\u0435\u0441\u0442 \u044D\u043B\u0438\u0432\u0438\u0441\u0446\u0435\u0440\u043E-24")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div><div class="project-block__additional-block" data-v-a22b7d63><h3 class="project-block__additional-right-title" data-v-a22b7d63> \u0421\u0442\u0430\u0440\u0442 \u0442\u0440\u0435\u0442\u044C\u0435\u0433\u043E \u043F\u043E\u0442\u043E\u043A\u0430 \u2014 \u044F\u043D\u0432\u0430\u0440\u044C 2023 </h3><a href="https://docs.google.com/forms/d/e/1FAIpQLSemeWdP_plcFlkOOFZ2NL5hMcyMMN9bWW2pc4OZkgZcLow8pA/viewform?usp=sharing" class="project-block__additional-button-container" data-v-a22b7d63>`);
  _push(ssrRenderComponent(_component_elements_buttons_secondary, { title: "\u0417\u0430\u043F\u0438\u0441\u0430\u0442\u044C\u0441\u044F \u0432 \u043B\u0438\u0441\u0442 \u043E\u0436\u0438\u0434\u0430\u043D\u0438\u044F" }, null, _parent));
  _push(`</a></div></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/blocks/projects/BlocksProjectsMeno.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3], ["__scopeId", "data-v-a22b7d63"]]);
const BlocksProjectsControl_vue_vue_type_style_index_0_scoped_37eb970b_lang = "";
const _sfc_main$2 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  const _component_svg_plus_icon = __nuxt_component_0$6;
  const _component_svg_almost_circle = __nuxt_component_1$3;
  const _component_svg_heart_icon = __nuxt_component_1$1;
  const _component_svg_pine_left = __nuxt_component_3$2;
  const _component_elements_buttons_secondary = __nuxt_component_3$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "project-block" }, _attrs))} data-v-37eb970b><div class="project-block__about" data-v-37eb970b><h2 class="project-block__about-title" data-v-37eb970b> \u041F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u0438\u0437\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0439 \u043F\u0440\u043E\u0435\u043A\u0442 \xAB\u041A\u043E\u043D\u0442\u0440\u043E\u043B\u044C \u044D\u0441\u0442\u0440\u043E\u0433\u0435\u043D\u043E\u0432\xBB </h2><div class="project-block__about-text" data-v-37eb970b> \u0414\u043B\u044F \u0442\u0435\u0445, \u043A\u0442\u043E \u0441\u0442\u043E\u043B\u043A\u043D\u0443\u043B\u0441\u044F \u0441 \u043D\u0435\u043F\u0440\u043E\u0441\u0442\u044B\u043C \u0433\u0438\u043D\u0435\u043A\u043E\u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u0438\u043C \u0434\u0438\u0430\u0433\u043D\u043E\u0437\u043E\u043C \u0438 \u0445\u043E\u0447\u0435\u0442 \u0434\u0435\u0440\u0436\u0430\u0442\u044C \u0435\u0433\u043E \u043F\u043E\u0434 \u043A\u043E\u043D\u0442\u0440\u043E\u043B\u0435\u043C </div>`);
  _push(ssrRenderComponent(_component_svg_plus_icon, { class: "project-block__plus-one-icon" }, null, _parent));
  _push(ssrRenderComponent(_component_svg_plus_icon, { class: "project-block__plus-two-icon" }, null, _parent));
  _push(`</div><div class="project-block__additional-block" data-v-37eb970b><div class="project-block__additional-left-column" data-v-37eb970b><div class="project-block__additional-icons-line" data-v-37eb970b>`);
  _push(ssrRenderComponent(_component_svg_almost_circle, { class: "project-block__additional-icon-circle" }, null, _parent));
  _push(ssrRenderComponent(_component_svg_heart_icon, { class: "project-block__additional-icon-heart" }, null, _parent));
  _push(ssrRenderComponent(_component_svg_pine_left, { class: "project-block__additional-icon-pine" }, null, _parent));
  _push(`</div><h3 class="project-block__additional-left-text" data-v-37eb970b> \u041D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0440\u0430\u0437 \u0432 \u0433\u043E\u0434 \u043C\u044B \u043F\u0440\u043E\u0432\u043E\u0434\u0438\u043C \u0442\u0435\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u043F\u0440\u043E\u0435\u043A\u0442\u044B, \u043F\u043E\u0441\u0432\u044F\u0449\u0435\u043D\u043D\u044B\u0435 \u0442\u043E\u0439 \u0438\u043B\u0438 \u0438\u043D\u043E\u0439 \u0433\u0440\u0443\u043F\u043F\u0435 \u0437\u0430\u0431\u043E\u043B\u0435\u0432\u0430\u043D\u0438\u0439 </h3></div><div class="project-block__additional-right-column white" data-v-37eb970b><img class="project-block__additional-avatar"${ssrRenderAttr("src", _imports_0$1)} data-v-37eb970b><div class="project-block__what-inside-text" data-v-37eb970b> \u0412 \u043D\u0438\u0445 \u043C\u044B \u043F\u043E\u0434\u0440\u043E\u0431\u043D\u043E \u043E\u0441\u0432\u0435\u0449\u0430\u0435\u043C \u0442\u0435\u043E\u0440\u0438\u044E \u0432\u043E\u0437\u043D\u0438\u043A\u043D\u043E\u0432\u0435\u043D\u0438\u044F \u0441\u0430\u043C\u043E\u0439 \u0431\u043E\u043B\u0435\u0437\u043D\u0438, \u0440\u0430\u0437\u0431\u0438\u0440\u0430\u0435\u043C \u0442\u0435\u0447\u0435\u043D\u0438\u0435 \u0438 \u0444\u0430\u043A\u0442\u043E\u0440\u044B, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043D\u0430 \u043D\u0435\u0433\u043E \u0432\u043B\u0438\u044F\u044E\u0442, \u0430 \u0442\u0430\u043A\u0436\u0435 \u0433\u043E\u0432\u043E\u0440\u0438\u043C \u043E \u043B\u0435\u0447\u0435\u043D\u0438\u0438. </div></div></div><div class="project-block__what-inside-block" data-v-37eb970b><h2 class="project-block__block-title" data-v-37eb970b> \u0427\u0442\u043E \u0432\u043D\u0443\u0442\u0440\u0438? </h2><div class="project-block__what-inside-list" data-v-37eb970b><div class="project-block__what-inside-item" data-v-37eb970b><div class="project-block__what-inside-title" data-v-37eb970b> \u041E\u0442\u0434\u0435\u043B\u044C\u043D\u044B\u0439 Telegram-\u0447\u0430\u0442 </div><div class="project-block__what-inside-text" data-v-37eb970b> \u0412 \u0442\u0435\u0447\u0435\u043D\u0438\u0435 4-\u0445 \u043D\u0435\u0434\u0435\u043B\u044C \u0432 \u0437\u0430\u043A\u0440\u044B\u0442\u043E\u043C Telegram-\u043A\u0430\u043D\u0430\u043B\u0435 \u0431\u0443\u0434\u0443\u0442 \u0432\u044B\u0445\u043E\u0434\u0438\u0442\u044C \u0430\u043A\u0442\u0443\u0430\u043B\u044C\u043D\u044B\u0435 \u0441\u0442\u0440\u0430\u0442\u0435\u0433\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u043F\u043E\u0441\u0442\u044B, \u043E\u0431\u044A\u044F\u0441\u043D\u044F\u044E\u0449\u0438\u0435 \u0432\u0441\u044E \u0442\u0430\u043A\u0442\u0438\u043A\u0443 \u0438 \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u0438 \u0430\u043A\u0442\u0438\u0432\u0430\u0446\u0438\u0438 \u044F\u0438\u0447\u043D\u0438\u043A\u043E\u0432 </div></div><div class="project-block__what-inside-item" data-v-37eb970b><div class="project-block__what-inside-title" data-v-37eb970b> \u0423\u0434\u043E\u0431\u043D\u044B\u0439 \u0444\u043E\u0440\u043C\u0430\u0442 </div><div class="project-block__what-inside-text" data-v-37eb970b> \u041D\u0430 \u043F\u0435\u0440\u0432\u043E\u0439 \u043D\u0435\u0434\u0435\u043B\u0435 \u043F\u0440\u043E\u0435\u043A\u0442\u0430 \u0432\u044B \u0437\u0430\u043F\u043E\u043B\u043D\u044F\u0435\u0442\u0435 \u0430\u043D\u043A\u0435\u0442\u0443, \u0441\u043E\u0431\u0438\u0440\u0430\u0435\u0442\u0435 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u044B \u0441\u0432\u043E\u0438\u0445 \u0430\u043D\u0430\u043B\u0438\u0437\u043E\u0432, \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u044F\u0435\u0442\u0435 \u0438\u0445 \u0434\u043E\u043A\u0442\u043E\u0440\u0443 \u042D\u043B\u0435 </div></div><div class="project-block__what-inside-item" data-v-37eb970b><div class="project-block__what-inside-title" data-v-37eb970b> \u041F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044F </div><div class="project-block__what-inside-text" data-v-37eb970b> \u0412 \u0442\u0435\u0447\u0435\u043D\u0438\u0435 2-\u0445 \u043D\u0435\u0434\u0435\u043B\u044C \u043F\u043E\u0441\u043B\u0435 \u043E\u043A\u043E\u043D\u0447\u0430\u043D\u0438\u044F \u043F\u0440\u043E\u0435\u043A\u0442\u0430 \u043A\u0430\u0436\u0434\u0430\u044F \u0443\u0447\u0430\u0441\u0442\u043D\u0438\u0446\u0430 \u043F\u043E\u043B\u0443\u0447\u0438\u0442 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0439 \u043F\u0440\u043E\u0442\u043E\u043A\u043E\u043B \u043E\u0442 \u0434\u043E\u043A\u0442\u043E\u0440\u0430 \u043C\u0435\u0434\u0438\u0446\u0438\u043D\u0441\u043A\u0438\u0445 \u043D\u0430\u0443\u043A \u043F\u0440\u043E\u0444\u0435\u0441\u0441\u043E\u0440\u0430 \u0430\u043A\u0443\u0448\u0435\u0440\u0430-\u0433\u0438\u043D\u0435\u043A\u043E\u043B\u043E\u0433\u0430 \u0414\u0436\u043E\u0431\u0430\u0432\u0430 \u042D\u043B\u0438\u0441\u043E \u041C\u0443\u0440\u043C\u0430\u043D\u043E\u0432\u043D\u044B </div></div></div></div><div class="project-block__additional-block" data-v-37eb970b><div class="project-block__additional-left-column" data-v-37eb970b><div class="project-block__what-inside-title" data-v-37eb970b> \u041F\u0440\u043E\u0448\u0435\u0434\u0448\u0438\u0435 \u043F\u043E\u0442\u043E\u043A\u0438 2022 \u0433\u043E\u0434\u0430 </div><div class="project-block__tags-list" data-v-37eb970b><div class="project-block__tag disabled" data-v-37eb970b> \u042D\u043D\u0434\u043E\u043C\u0435\u0442\u0440\u0438\u043E\u0437 </div><div class="project-block__tag disabled" data-v-37eb970b> \u041F\u043E\u043B\u0438\u043F\u044B \u043C\u0430\u0442\u043A\u0438, \u0433\u0438\u043F\u0435\u0440\u043F\u043B\u0430\u0437\u0438\u044F \u044D\u043D\u0434\u043E\u043C\u0435\u0442\u0440\u0438\u044F </div></div><div class="project-block__what-inside-title" data-v-37eb970b> \u041F\u043B\u0430\u043D\u0438\u0440\u0443\u044E\u0442\u0441\u044F \u0432 2023 \u0433\u043E\u0434\u0443 </div><div class="project-block__tags-list" data-v-37eb970b><div class="project-block__tag" data-v-37eb970b> \u041D\u0430\u0440\u0443\u0448\u0435\u043D\u0438\u044F \u0446\u0438\u043A\u043B\u0430 </div><div class="project-block__tag" data-v-37eb970b> \u041D\u0430\u0440\u0443\u0448\u0435\u043D\u0438\u044F \u0444\u043B\u043E\u0440\u044B </div><div class="project-block__tag" data-v-37eb970b> \u0421\u0438\u043D\u0434\u0440\u043E\u043C \u043F\u043E\u043B\u0438\u043A\u0438\u0441\u0442\u043E\u0437\u043D\u044B\u0445 \u044F\u0438\u0447\u043D\u0438\u043A\u043E\u0432 </div><div class="project-block__tag" data-v-37eb970b> \u041C\u0438\u043E\u043C\u0430 \u043C\u0430\u0442\u043A\u0438 </div><div class="project-block__tag" data-v-37eb970b> \u041C\u0443\u043B\u044C\u0442\u0438\u0444\u043E\u043B\u043B\u0438\u043A\u0443\u043B\u044F\u0440\u043D\u044B\u0435 \u044F\u0438\u0447\u043D\u0438\u043A\u0438 </div></div></div><div class="project-block__additional-right-column" data-v-37eb970b><h3 class="project-block__additional-right-title" data-v-37eb970b> \u041E\u0441\u0442\u0430\u0432\u044C\u0442\u0435 \u0437\u0430\u044F\u0432\u043A\u0443, \u0447\u0442\u043E\u0431\u044B \u043F\u0435\u0440\u0432\u044B\u043C\u0438 \u0443\u0437\u043D\u0430\u0442\u044C \u043E \u0441\u0442\u0430\u0440\u0442\u0435 \u043F\u043E\u0442\u043E\u043A\u0430 \u0432 \u043D\u043E\u0432\u043E\u043C \u0433\u043E\u0434\u0443 </h3><a href="https://docs.google.com/forms/d/e/1FAIpQLSemeWdP_plcFlkOOFZ2NL5hMcyMMN9bWW2pc4OZkgZcLow8pA/viewform?usp=sharing" class="project-block__additional-button-container" data-v-37eb970b>`);
  _push(ssrRenderComponent(_component_elements_buttons_secondary, { title: "\u0417\u0430\u043F\u0438\u0441\u0430\u0442\u044C\u0441\u044F \u0432 \u043B\u0438\u0441\u0442 \u043E\u0436\u0438\u0434\u0430\u043D\u0438\u044F" }, null, _parent));
  _push(`</a>`);
  _push(ssrRenderComponent(_component_svg_plus_icon, { class: "project-block__additional-plus-icon" }, null, _parent));
  _push(`</div></div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/blocks/projects/BlocksProjectsControl.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-37eb970b"]]);
const _imports_0 = "" + globalThis.__buildAssetsURL("projectsAcademyDesc.77d378c6.png");
const BlocksProjectsAcademy_vue_vue_type_style_index_0_scoped_f2b153a1_lang = "";
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_svg_soft_icon = __nuxt_component_0$2;
  const _component_svg_union = __nuxt_component_1$2;
  const _component_svg_half_circle = __nuxt_component_3$3;
  const _component_elements_buttons_secondary = __nuxt_component_3$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "project-block" }, _attrs))} data-v-f2b153a1><div class="project-block__about" data-v-f2b153a1><h2 class="project-block__about-title" data-v-f2b153a1> \u041F\u0440\u043E\u0435\u043A\u0442 \xAB\u0410\u043A\u0430\u0434\u0435\u043C\u0438\u044F \u0437\u0434\u043E\u0440\u043E\u0432\u043E\u0439 \u0436\u0438\u0437\u043D\u0438\xBB </h2><div class="project-block__about-text" data-v-f2b153a1> \u0420\u0435\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F \u043F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u043E\u0433\u043E \u043F\u0440\u043E\u0435\u043A\u0442\u0430 \u201C\u0420\u043E\u0436\u0434\u0435\u043D\u0438\u0435 \u0432\u0435\u043D\u0435\u0440\u044B\u201D. \u0414\u043B\u044F \u0442\u0435\u0445, \u043A\u0442\u043E \u0433\u043E\u0442\u043E\u0432 \u0440\u0430\u0431\u043E\u0442\u0430\u0442\u044C \u0441\u043E \u0441\u0432\u043E\u0438\u043C \u0437\u0434\u043E\u0440\u043E\u0432\u044C\u0435\u043C \u0441\u0438\u0441\u0442\u0435\u043C\u043D\u043E \u0432\u043C\u0435\u0441\u0442\u0435 \u0441 \u043F\u0440\u043E\u0444\u0435\u0441\u0441\u043E\u0440\u043E\u043C \u0414\u0436\u043E\u0431\u0430\u0432\u0430 \u042D\u043B\u0438\u0441\u043E </div>`);
  _push(ssrRenderComponent(_component_svg_soft_icon, { class: "project-block__about-soft-icon" }, null, _parent));
  _push(ssrRenderComponent(_component_svg_union, { class: "project-block__about-union-icon" }, null, _parent));
  _push(ssrRenderComponent(_component_svg_half_circle, { class: "project-block__about-half-circle-icon" }, null, _parent));
  _push(`</div><div class="project-block__description-block" data-v-f2b153a1><img class="project-block__description-image"${ssrRenderAttr("src", _imports_0)} data-v-f2b153a1><h2 class="project-block__block-title" data-v-f2b153a1> \u041F\u0440\u043E\u0435\u043A\u0442 \u2014 \u044D\u0442\u043E \u0435\u0434\u0438\u043D\u0430\u044F \u043F\u043E\u0448\u0430\u0433\u043E\u0432\u0430\u044F \u0441\u0435\u0440\u0438\u044F \u0442\u0435\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u043F\u043E\u0442\u043E\u043A\u043E\u0432, \u043F\u043E\u0441\u0432\u044F\u0449\u0435\u043D\u043D\u0430\u044F \u0432\u0441\u0435\u043C \u0441\u0442\u043E\u0440\u043E\u043D\u0430\u043C \u0436\u0435\u043D\u0441\u043A\u043E\u0433\u043E \u0437\u0434\u043E\u0440\u043E\u0432\u044C\u044F, \u043A\u043E\u0442\u043E\u0440\u0430\u044F \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442 \u043A\u0430\u043A \u0438\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0438\u044F \u043A \u0441\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u043C\u0443 \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u043C\u0443 </h2></div><div class="project-block__what-inside-block" data-v-f2b153a1><h2 class="project-block__block-title" data-v-f2b153a1> \u0427\u0442\u043E \u0432\u043D\u0443\u0442\u0440\u0438? </h2><div class="project-block__what-inside-list" data-v-f2b153a1><div class="project-block__what-inside-item" data-v-f2b153a1><div class="project-block__what-inside-title" data-v-f2b153a1> \u041E\u0442\u0434\u0435\u043B\u044C\u043D\u044B\u0439 Telegram-\u0447\u0430\u0442 </div><div class="project-block__what-inside-text" data-v-f2b153a1> \u0412 \u0442\u0435\u0447\u0435\u043D\u0438\u0435 2-\u0445 \u043D\u0435\u0434\u0435\u043B\u044C \u0432 \u0437\u0430\u043A\u0440\u044B\u0442\u043E\u043C Telegram-\u043A\u0430\u043D\u0430\u043B\u0435 \u0431\u0443\u0434\u0443\u0442 \u0432\u044B\u0445\u043E\u0434\u0438\u0442\u044C \u0430\u043A\u0442\u0443\u0430\u043B\u044C\u043D\u044B\u0435 \u0441\u0442\u0440\u0430\u0442\u0435\u0433\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u043F\u043E\u0441\u0442\u044B, \u043F\u043E\u0441\u0432\u044F\u0449\u0435\u043D\u043D\u044B\u0435 \u043A\u043E\u043D\u043A\u0440\u0435\u0442\u043D\u043E\u043C\u0443 \u0430\u0441\u043F\u0435\u043A\u0442\u0443 \u0437\u0434\u043E\u0440\u043E\u0432\u044C\u044F </div></div><div class="project-block__what-inside-item" data-v-f2b153a1><div class="project-block__what-inside-title" data-v-f2b153a1> \u0423\u0434\u043E\u0431\u043D\u044B\u0439 \u0444\u043E\u0440\u043C\u0430\u0442 </div><div class="project-block__what-inside-text" data-v-f2b153a1> \u0412\u0441\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F \u0432 \u043E\u0434\u043D\u043E\u043C \u043C\u0435\u0441\u0442\u0435. \u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F \u043E\u0431 \u043E\u0431\u0441\u043B\u0435\u0434\u043E\u0432\u0430\u043D\u0438\u0438 \u043F\u0435\u0440\u0435\u0434 \u043A\u0430\u0436\u0434\u044B\u043C \u043F\u043E\u0442\u043E\u043A\u043E\u043C \u2014 \u0434\u043B\u044F \u043C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u043E\u0439 \u0431\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E\u0441\u0442\u0438 \u043A\u0430\u0436\u0434\u043E\u0439 \u0443\u0447\u0430\u0441\u0442\u043D\u0438\u0446\u044B. \u0423\u043D\u0438\u0432\u0435\u0440\u0441\u0430\u043B\u044C\u043D\u044B\u0435 \u0441\u0445\u0435\u043C\u044B \u0438 \u0434\u043E\u0431\u0430\u0432\u043A\u0438 \u2014 \u0430\u043D\u0430\u043B\u043E\u0433\u0438 \u043C\u043E\u0436\u043D\u043E \u043F\u043E\u0434\u043E\u0431\u0440\u0430\u0442\u044C \u0432 \u043B\u044E\u0431\u043E\u0439 \u0441\u0442\u0440\u0430\u043D\u0435 \u043C\u0438\u0440\u0430 </div></div><div class="project-block__what-inside-item" data-v-f2b153a1><div class="project-block__what-inside-title" data-v-f2b153a1> \u041F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044F </div><div class="project-block__what-inside-text" data-v-f2b153a1> \u041D\u0430 \u043A\u0430\u0436\u0434\u043E\u043C \u043F\u043E\u0442\u043E\u043A\u0435 \u0431\u0443\u0434\u0435\u0442 \u0434\u0435\u043D\u044C \u043E\u0442\u0432\u0435\u0442\u043E\u0432 \u043D\u0430 \u0432\u043E\u043F\u0440\u043E\u0441\u044B, \u043A\u043E\u0433\u0434\u0430 \u043C\u043E\u0436\u043D\u043E \u0431\u0443\u0434\u0435\u0442 \u043E\u0431\u0440\u0430\u0442\u0438\u0442\u044C\u0441\u044F \u043B\u0438\u0447\u043D\u043E \u043A \u0434\u043E\u043A\u0442\u043E\u0440\u0443 \u043C\u0435\u0434\u0438\u0446\u0438\u043D\u0441\u043A\u0438\u0445 \u043D\u0430\u0443\u043A \u043F\u0440\u043E\u0444\u0435\u0441\u0441\u043E\u0440\u0443 \u0430\u043A\u0443\u0448\u0435\u0440\u0443-\u0433\u0438\u043D\u0435\u043A\u043E\u043B\u043E\u0433\u0443 \u0414\u0436\u043E\u0431\u0430\u0432\u0430 \u042D\u043B\u0438\u0441\u043E \u041C\u0443\u0440\u043C\u0430\u043D\u043E\u0432\u043D\u0435 </div></div></div></div><div class="project-block__additional-block" data-v-f2b153a1><div class="project-block__additional-left-column" data-v-f2b153a1><div class="project-block__what-inside-title" data-v-f2b153a1> \u0412 2023 \u0433\u043E\u0434\u0443<br data-v-f2b153a1> \u043F\u043B\u0430\u043D\u0438\u0440\u0443\u0435\u0442\u0441\u044F 4 \u043F\u043E\u0442\u043E\u043A\u0430 </div><div class="project-block__tags-list" data-v-f2b153a1><div class="project-block__tag" data-v-f2b153a1> \u0421\u0442\u0440\u0435\u0441\u0441 \u0438 \u044D\u043C\u043E\u0446\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u043E\u0435 \u0437\u0434\u043E\u0440\u043E\u0432\u044C\u0435 </div><div class="project-block__tag" data-v-f2b153a1> \u0417\u0434\u043E\u0440\u043E\u0432\u044C\u0435 \u0416\u041A\u0422 </div><div class="project-block__tag" data-v-f2b153a1> \u041F\u0435\u0447\u0435\u043D\u044C \u0438 \u0441\u0438\u0441\u0442\u0435\u043C\u044B \u0434\u0435\u0442\u043E\u043A\u0441\u0438\u043A\u0430\u0446\u0438\u0438 </div><div class="project-block__tag" data-v-f2b153a1> \u041D\u0443\u0442\u0440\u0438\u0442\u0438\u0432\u043D\u044B\u0435 \u0434\u0435\u0444\u0438\u0446\u0438\u0442\u044B </div></div></div><div class="project-block__additional-right-column" data-v-f2b153a1><h3 class="project-block__additional-right-title" data-v-f2b153a1> \u041E\u0441\u0442\u0430\u0432\u044C\u0442\u0435 \u0437\u0430\u044F\u0432\u043A\u0443, \u0447\u0442\u043E\u0431\u044B \u043F\u0435\u0440\u0432\u044B\u043C\u0438 \u0443\u0437\u043D\u0430\u0442\u044C \u043E \u0441\u0442\u0430\u0440\u0442\u0435 \u043F\u043E\u0442\u043E\u043A\u0430 \u0432 \u043D\u043E\u0432\u043E\u043C \u0433\u043E\u0434\u0443 </h3><a href="https://docs.google.com/forms/d/e/1FAIpQLSemeWdP_plcFlkOOFZ2NL5hMcyMMN9bWW2pc4OZkgZcLow8pA/viewform?usp=sharing" class="project-block__additional-button-container" data-v-f2b153a1>`);
  _push(ssrRenderComponent(_component_elements_buttons_secondary, { title: "\u0417\u0430\u043F\u0438\u0441\u0430\u0442\u044C\u0441\u044F \u0432 \u043B\u0438\u0441\u0442 \u043E\u0436\u0438\u0434\u0430\u043D\u0438\u044F" }, null, _parent));
  _push(`</a></div></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/blocks/projects/BlocksProjectsAcademy.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-f2b153a1"]]);
const index_vue_vue_type_style_index_0_scoped_d767e671_lang = "";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_blocks_projects_intro = __nuxt_component_0;
  const _component_blocks_projects_repro = __nuxt_component_1;
  const _component_blocks_projects_meno = __nuxt_component_2;
  const _component_blocks_projects_control = __nuxt_component_3;
  const _component_blocks_projects_academy = __nuxt_component_4;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "projects-page__container section-container" }, _attrs))} data-v-d767e671>`);
  _push(ssrRenderComponent(_component_blocks_projects_intro, null, null, _parent));
  _push(ssrRenderComponent(_component_blocks_projects_repro, {
    id: "repo",
    class: "projects-page__project"
  }, null, _parent));
  _push(ssrRenderComponent(_component_blocks_projects_meno, {
    id: "meno",
    class: "projects-page__project"
  }, null, _parent));
  _push(ssrRenderComponent(_component_blocks_projects_control, {
    id: "control",
    class: "projects-page__project"
  }, null, _parent));
  _push(ssrRenderComponent(_component_blocks_projects_academy, { id: "academy" }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/projects/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-d767e671"]]);
export {
  index as default
};
//# sourceMappingURL=index.0caabe2c.js.map
