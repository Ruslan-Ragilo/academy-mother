import { b as __nuxt_component_0$1, f as __nuxt_component_1$1, c as __nuxt_component_4 } from "./SvgOvalIcon.01ba50c0.js";
import { _ as __nuxt_component_2 } from "./SvgStarNine.d7b4f96b.js";
import __nuxt_component_3 from "./halfCircle.b4eeaff9.js";
import { _ as __nuxt_component_5 } from "./BlocksTest.19d833f3.js";
import { useSSRContext, ref, mergeProps, unref, defineAsyncComponent } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrRenderList, ssrRenderStyle, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
import { _ as _export_sfc, d as defineStore } from "../server.mjs";
import { _ as __nuxt_component_2$1 } from "./BlocksMessageUs.b5d35185.js";
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
import "./ElementsModalsKeeper.257a82fa.js";
const BlocksWebinarsIntro_vue_vue_type_style_index_0_scoped_164de8f7_lang = "";
const _sfc_main$2 = {
  setup() {
    const isOpened = ref(false);
    return {
      isOpened
    };
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_svg_arrow = __nuxt_component_0$1;
  const _component_svg_heart_icon = __nuxt_component_1$1;
  const _component_svg_star_nine = __nuxt_component_2;
  const _component_svg_half_circle = __nuxt_component_3;
  const _component_svg_pine_icon = __nuxt_component_4;
  const _component_blocks_test = __nuxt_component_5;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "webinars-intro" }, _attrs))} data-v-164de8f7><h2 class="webinars-intro__title" data-v-164de8f7> \u0412\u0435\u0431\u0438\u043D\u0430\u0440\u044B \u0434\u043B\u044F \u0434\u0435\u0432\u0443\u0448\u0435\u043A \u0438 \u0436\u0435\u043D\u0449\u0438\u043D </h2><div class="webinars-intro__text" data-v-164de8f7> \u0421\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0435 \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u044B, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0434\u0430\u0434\u0443\u0442 \u043C\u0430\u043A\u0441\u0438\u043C\u0443\u043C \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0438 \u043F\u043E \u0432\u0430\u0436\u043D\u044B\u043C \u0432\u043E\u043F\u0440\u043E\u0441\u0430\u043C </div><div class="webinars-intro__button-container" data-v-164de8f7><div class="webinars-intro__button" data-v-164de8f7> \u0412\u044B\u0431\u0440\u0430\u0442\u044C \u0432\u0435\u0431\u0438\u043D\u0430\u0440 </div></div>`);
  _push(ssrRenderComponent(_component_svg_arrow, { class: "webinars-intro__figures-arrow" }, null, _parent));
  _push(ssrRenderComponent(_component_svg_heart_icon, { class: "webinars-intro__heart" }, null, _parent));
  _push(ssrRenderComponent(_component_svg_star_nine, { class: "webinars-intro__star-nine" }, null, _parent));
  _push(ssrRenderComponent(_component_svg_half_circle, { class: "webinars-intro__half-circle" }, null, _parent));
  _push(ssrRenderComponent(_component_svg_pine_icon, { class: "webinars-intro__pine-icon" }, null, _parent));
  _push(ssrRenderComponent(_component_blocks_test, {
    "is-opened": $setup.isOpened,
    onClose: ($event) => $setup.isOpened = false
  }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/blocks/webinars/BlocksWebinarsIntro.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-164de8f7"]]);
const useWebinarsStore = defineStore("webinarsStore", {
  state: () => ({
    dataWebinars: []
  }),
  actions: {
    async fetchDataWebinars() {
      const data = await fetch("http://95.163.236.196:1337/api/webinars?populate=*");
      const res = await data.json();
      this.dataWebinars = res.data;
    }
  },
  getters: {
    getDataWebinars(state) {
      console.log(state.dataWebinars);
      return state.dataWebinars;
    }
  }
});
const BlocksWebinarsList_vue_vue_type_style_index_0_scoped_cc354f1e_lang = "";
const __nuxt_component_0_lazy = /* @__PURE__ */ defineAsyncComponent(() => import("./SvgClosePopup.35fc2330.js").then((m) => m.default || m));
const __default__ = {
  data() {
    return {
      width: window.innerWidth,
      str: "",
      isOpenPopup: false,
      indexPopup: null
    };
  },
  methods: {
    setIsOpen(index2) {
      this.isOpenPopup = true;
      this.indexPopup = index2;
    }
  }
};
const _sfc_main$1 = /* @__PURE__ */ Object.assign(__default__, {
  __name: "BlocksWebinarsList",
  __ssrInlineRender: true,
  setup(__props) {
    const webinars = useWebinarsStore();
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m;
      const _component_lazy_svg_close_popup = __nuxt_component_0_lazy;
      _push(`<!--[--><div class="${ssrRenderClass([{ active: _ctx.isOpenPopup }, "overlay__popup-webinars"])}" data-v-cc354f1e><div class="popup" data-v-cc354f1e>`);
      _push(ssrRenderComponent(_component_lazy_svg_close_popup, {
        class: "close-popup",
        onClick: ($event) => _ctx.isOpenPopup = false
      }, null, _parent));
      _push(`<!--[-->`);
      ssrRenderList((_c = (_b = (_a = unref(webinars)) == null ? void 0 : _a.getDataWebinars[_ctx.indexPopup]) == null ? void 0 : _b.attributes) == null ? void 0 : _c.popupInfo, (item) => {
        var _a2, _b2;
        _push(`<div style="${ssrRenderStyle({ "margin-bottom": "80px" })}" data-v-cc354f1e><h2 data-v-cc354f1e>${ssrInterpolate(item == null ? void 0 : item.title)}</h2><p class="for-who" data-v-cc354f1e>${ssrInterpolate(item == null ? void 0 : item.subTitle)}</p>`);
        if ((_a2 = item == null ? void 0 : item.About) == null ? void 0 : _a2.length) {
          _push(`<h2 style="${ssrRenderStyle({ "margin-bottom": "20px" })}" data-v-cc354f1e>\u041E \u0447\u0435\u043C \u043F\u043E\u0433\u043E\u0432\u043E\u0440\u0438\u043C?</h2>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<ul class="list-about" data-v-cc354f1e><!--[-->`);
        ssrRenderList((_b2 = item == null ? void 0 : item.About) == null ? void 0 : _b2.split("\u2014").slice(1, -1), (item2) => {
          _push(`<li class="about-webinars" data-v-cc354f1e>${ssrInterpolate(item2)}</li>`);
        });
        _push(`<!--]--></ul></div>`);
      });
      _push(`<!--]--><div class="block-author" data-v-cc354f1e><img${ssrRenderAttr("src", "http://95.163.236.196:1337" + ((_h = (_g = (_f = (_e = (_d = unref(webinars)) == null ? void 0 : _d.getDataWebinars[_ctx.indexPopup]) == null ? void 0 : _e.attributes) == null ? void 0 : _f.imageAuthor) == null ? void 0 : _g.data[0].attributes) == null ? void 0 : _h.url))} alt="" data-v-cc354f1e><div data-v-cc354f1e><p data-v-cc354f1e>\u0410\u0432\u0442\u043E\u0440 \u0432\u0435\u0431\u0438\u043D\u0430\u0440\u0430</p><p data-v-cc354f1e>${ssrInterpolate((_k = (_j = (_i = unref(webinars)) == null ? void 0 : _i.getDataWebinars[_ctx.indexPopup]) == null ? void 0 : _j.attributes) == null ? void 0 : _k.author)}</p></div></div></div></div>`);
      if ((_m = (_l = unref(webinars)) == null ? void 0 : _l.getDataWebinars) == null ? void 0 : _m.length) {
        _push(`<div class="webinars-list" data-v-cc354f1e><!--[-->`);
        ssrRenderList(unref(webinars).getDataWebinars, (item, index2) => {
          var _a2, _b2, _c2, _d2;
          _push(`<div class="webinars-list__card" data-v-cc354f1e><div class="webinars-list__card-wrapper-img" data-v-cc354f1e>`);
          if (item.attributes.discount) {
            _push(`<div class="discount" data-v-cc354f1e><span data-v-cc354f1e>\u041D\u0430 ${ssrInterpolate(item.attributes.discount)}% \u0432\u044B\u0433\u043E\u0434\u043D\u0435\u0435</span></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<img${ssrRenderAttr("src", "http://95.163.236.196:1337" + ((_d2 = (_c2 = (_b2 = (_a2 = item == null ? void 0 : item.attributes) == null ? void 0 : _a2.image) == null ? void 0 : _b2.data) == null ? void 0 : _c2.attributes) == null ? void 0 : _d2.url))} alt="\u0412\u0435\u0431\u0438\u043D\u0430\u0440" data-v-cc354f1e></div><div class="webinars-list__card-wrapper-text" data-v-cc354f1e><p class="who-be" data-v-cc354f1e>${ssrInterpolate(item.attributes.whoBe)}</p><h2 data-v-cc354f1e>${ssrInterpolate(item.attributes.heading)}</h2><p class="how-can-help" data-v-cc354f1e>${item.attributes.description}</p><button class="details" data-v-cc354f1e><span data-v-cc354f1e>\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435</span><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none" data-v-cc354f1e><line x1="1" y1="12.1582" x2="24" y2="12.1582" stroke="#064848" stroke-width="2" stroke-linecap="round" data-v-cc354f1e></line><line x1="12.8418" y1="1" x2="12.8418" y2="24" stroke="#064848" stroke-width="2" stroke-linecap="round" data-v-cc354f1e></line></svg></button><div class="wraper-price" data-v-cc354f1e><div data-v-cc354f1e><p data-v-cc354f1e>\u0421\u0422\u041E\u0418\u041C\u041E\u0421\u0422\u042C \u041F\u0420\u041E\u0413\u0420\u0410\u041C\u041C\u042B</p><p data-v-cc354f1e>${ssrInterpolate(item.attributes.price)} \u0440\u0443\u0431.</p></div><button data-v-cc354f1e>\u041A\u0443\u043F\u0438\u0442\u044C \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0443</button></div></div><section data-v-cc354f1e></section></div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/blocks/webinars/BlocksWebinarsList.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-cc354f1e"]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Blocks_webinars_intro = __nuxt_component_0;
  const _component_blocks_webinars_list = __nuxt_component_1;
  const _component_blocks_message_us = __nuxt_component_2$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "section-container" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_Blocks_webinars_intro, null, null, _parent));
  _push(ssrRenderComponent(_component_blocks_webinars_list, null, null, _parent));
  _push(ssrRenderComponent(_component_blocks_message_us, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/webinars/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  index as default
};
//# sourceMappingURL=index.3ad2598e.js.map
