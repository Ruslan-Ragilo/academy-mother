import { _ as __nuxt_component_1 } from "./BlocksWorkersCardList.e0826287.js";
import { _ as __nuxt_component_7 } from "./BlocksDescriptionMinor.38008b6e.js";
import { _ as __nuxt_component_2 } from "./BlocksMessageUs.b5d35185.js";
import { _ as __nuxt_component_0 } from "./ElementsModalsKeeper.257a82fa.js";
import __nuxt_component_4 from "./SvgClosePopup.35fc2330.js";
import { ref, mergeProps, withCtx, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, useSSRContext } from "vue";
import { d as defineStore, _ as _export_sfc } from "../server.mjs";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr } from "vue/server-renderer";
import { _ as _imports_0 } from "./MainPageDescriptionImageMinor.ef670b4e.js";
import "./halfCircle.b4eeaff9.js";
import "./SvgOvalIcon.01ba50c0.js";
import "./SvgGex.7e81bb68.js";
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
const useForMedWork = defineStore("forMedWork", {
  state: () => ({
    dataForMed: []
  }),
  getters: {
    getDataMedWor() {
      return this.dataForMed;
    }
  },
  actions: {
    async fetchDataMedWor() {
      const res = await fetch("http://95.163.236.196:1337/api/for-med-workers?populate=*");
      const data = await res.json();
      this.dataForMed = data.data.map((el) => el.attributes);
    }
  }
});
const index_vue_vue_type_style_index_0_scoped_654a4fe4_lang = "";
const descriptionTitle = "\u042D\u043B\u0438\u0441\u043E \u0414\u0436\u043E\u0431\u0430\u0432\u0430 \u2014 \u043F\u0440\u043E\u0444\u0435\u0441\u0441\u043E\u0440, \u0434\u043E\u043A\u0442\u043E\u0440 \u043C\u0435\u0434\u0438\u0446\u0438\u043D\u0441\u043A\u0438\u0445 \u043D\u0430\u0443\u043A, \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0441\u0442 \u043F\u043E \u0442\u0440\u0443\u0434\u043D\u044B\u043C \u0438 \u0441\u043B\u043E\u0436\u043D\u044B\u043C \u0431\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u043E\u0441\u0442\u044F\u043C";
const descriptionItems = [
  "\u0410\u0432\u0442\u043E\u0440 \u0431\u043E\u043B\u0435\u0435 300 \u043D\u0430\u0443\u0447\u043D\u044B\u0445 \u0441\u0442\u0430\u0442\u0435\u0439 \u0438 9 \u043C\u043E\u043D\u043E\u0433\u0440\u0430\u0444\u0438\u0439 \u0438 \u043F\u0440\u0430\u043A\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u0440\u0443\u043A\u043E\u0432\u043E\u0434\u0441\u0442\u0432",
  "\u0427\u043B\u0435\u043D \u043C\u0435\u0436\u0434\u0443\u043D\u0430\u0440\u043E\u0434\u043D\u043E\u0433\u043E \u043E\u0431\u0449\u0435\u0441\u0442\u0432\u0430 \u0433\u0438\u043D\u0435\u043A\u043E\u043B\u043E\u0433\u043E\u0432-\u044D\u043D\u0434\u043E\u043A\u0440\u0438\u043D\u043E\u043B\u043E\u0433\u043E\u0432 \u0438 \u043E\u0431\u0449\u0435\u0441\u0442\u0432\u0430 \u043F\u043E \u0438\u0437\u0443\u0447\u0435\u043D\u0438\u044E \u043F\u0440\u043E\u0431\u043B\u0435\u043C \u0433\u0435\u043C\u043E\u0441\u0442\u0430\u0437\u0430 \u0432 \u0430\u043A\u0443\u0448\u0435\u0440\u0441\u0442\u0432\u0435 \u0438 \u0433\u0438\u043D\u0435\u043A\u043E\u043B\u043E\u0433\u0438\u0438",
  "\u041C\u043D\u043E\u0433\u043E\u043A\u0440\u0430\u0442\u043D\u044B\u0439 \u0443\u0447\u0430\u0441\u0442\u043D\u0438\u043A \u043C\u0435\u0436\u0434\u0443\u043D\u0430\u0440\u043E\u0434\u043D\u044B\u0445 \u0438 \u0440\u043E\u0441\u0441\u0438\u0439\u0441\u043A\u0438\u0445 \u043C\u0435\u0434\u0438\u0446\u0438\u043D\u0441\u043A\u0438\u0445 \u043A\u043E\u043D\u0444\u0435\u0440\u0435\u043D\u0446\u0438\u0439 \u0438 \u043A\u043B\u0438\u043D\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u0438\u0441\u0441\u043B\u0435\u0434\u043E\u0432\u0430\u043D\u0438\u0439"
];
const _sfc_main = {
  setup() {
    const contentPopup = {
      text: "\u0412\u0441\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F \u0441\u0430\u0439\u0442\u0430 <a href='#'>www.---.ru</a> (\u0434\u0430\u043B\u0435\u0435 \u2014 \u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F) \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u0430 \u0438\u0441\u043A\u043B\u044E\u0447\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0434\u043B\u044F \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0441\u0442\u043E\u0432 \u0441\u0438\u0441\u0442\u0435\u043C\u044B \u0437\u0434\u0440\u0430\u0432\u043E\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u044F. \u0412 \u0441\u0432\u044F\u0437\u0438 \u0441 \u044D\u0442\u0438\u043C \u0434\u043B\u044F \u0434\u043E\u0441\u0442\u0443\u043F\u0430 \u043A \u0442\u0430\u043A\u043E\u0439 \u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0438 \u043E\u0442 \u0432\u0430\u0441 \u0442\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044F \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0438\u0435 \u0432\u0430\u0448\u0435\u0433\u043E \u0441\u0442\u0430\u0442\u0443\u0441\u0430 \u0438 \u0444\u0430\u043A\u0442\u0430 \u043D\u0430\u043B\u0438\u0447\u0438\u044F \u0443 \u0432\u0430\u0441 \u043F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u043E\u0433\u043E \u043C\u0435\u0434\u0438\u0446\u0438\u043D\u0441\u043A\u043E\u0433\u043E \u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u043D\u0438\u044F, \u0430 \u0442\u0430\u043A\u0436\u0435 \u0442\u043E\u0433\u043E, \u0447\u0442\u043E \u0432\u044B \u044F\u0432\u043B\u044F\u0435\u0442\u0435\u0441\u044C \u0434\u0435\u0439\u0441\u0442\u0432\u0443\u044E\u0449\u0438\u043C \u043C\u0435\u0434\u0438\u0446\u0438\u043D\u0441\u043A\u0438\u043C \u0440\u0430\u0431\u043E\u0442\u043D\u0438\u043A\u043E\u043C, \u043E\u0431\u043B\u0430\u0434\u0430\u044E\u0449\u0438\u043C \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044E\u0449\u0438\u043C\u0438 \u0437\u043D\u0430\u043D\u0438\u044F\u043C\u0438 \u0438 \u043D\u0430\u0432\u044B\u043A\u0430\u043C\u0438 \u0432 \u043E\u0431\u043B\u0430\u0441\u0442\u0438 \u043C\u0435\u0434\u0438\u0446\u0438\u043D\u044B, \u0434\u0438\u0430\u0433\u043D\u043E\u0441\u0442\u0438\u043A\u0438 \u0438 \u0437\u0434\u0440\u0430\u0432\u043E\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u044F \u0420\u0424. \u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F, \u0441\u043E\u0434\u0435\u0440\u0436\u0430\u0449\u0430\u044F\u0441\u044F \u043D\u0430 \u043D\u0430\u0441\u0442\u043E\u044F\u0449\u0435\u043C \u0441\u0430\u0439\u0442\u0435, \u043F\u0440\u0435\u0434\u043D\u0430\u0437\u043D\u0430\u0447\u0435\u043D\u0430 \u0438\u0441\u043A\u043B\u044E\u0447\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0434\u043B\u044F \u043E\u0437\u043D\u0430\u043A\u043E\u043C\u043B\u0435\u043D\u0438\u044F, \u043D\u043E\u0441\u0438\u0442 \u043D\u0430\u0443\u0447\u043D\u043E-\u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u0439 \u0445\u0430\u0440\u0430\u043A\u0442\u0435\u0440 \u0438 \u043D\u0435 \u0434\u043E\u043B\u0436\u043D\u0430 \u0440\u0430\u0441\u0446\u0435\u043D\u0438\u0432\u0430\u0442\u044C\u0441\u044F \u0432 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0438 \u0440\u0435\u043A\u043B\u0430\u043C\u043D\u043E\u0433\u043E \u0445\u0430\u0440\u0430\u043A\u0442\u0435\u0440\u0430 \u0434\u043B\u044F \u0448\u0438\u0440\u043E\u043A\u043E\u0433\u043E \u043A\u0440\u0443\u0433\u0430 \u043B\u0438\u0446.<br><br> \u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F \u043D\u0435 \u0434\u043E\u043B\u0436\u043D\u0430 \u0431\u044B\u0442\u044C \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0430 \u0434\u043B\u044F \u0437\u0430\u043C\u0435\u043D\u044B \u043D\u0435\u043F\u043E\u0441\u0440\u0435\u0434\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0439 \u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0438\u0438 \u0441 \u0432\u0440\u0430\u0447\u043E\u043C \u0438 \u0434\u043B\u044F \u043F\u0440\u0438\u043D\u044F\u0442\u0438\u044F \u0440\u0435\u0448\u0435\u043D\u0438\u044F \u043E \u043F\u0440\u0438\u043C\u0435\u043D\u0435\u043D\u0438\u0438 \u043B\u0435\u043A\u0430\u0440\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0445 \u043F\u0440\u0435\u043F\u0430\u0440\u0430\u0442\u043E\u0432 \u0441\u0430\u043C\u043E\u0441\u0442\u043E\u044F\u0442\u0435\u043B\u044C\u043D\u043E.<br><br> \u041D\u0430 \u043E\u0441\u043D\u043E\u0432\u0430\u043D\u0438\u0438 \u0432\u044B\u0448\u0435\u0441\u043A\u0430\u0437\u0430\u043D\u043D\u043E\u0433\u043E, \u043F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0435, \u0447\u0442\u043E \u0432\u044B \u044F\u0432\u043B\u044F\u0435\u0442\u0435\u0441\u044C \u0434\u0435\u0439\u0441\u0442\u0432\u0443\u044E\u0449\u0438\u043C \u043C\u0435\u0434\u0438\u0446\u0438\u043D\u0441\u043A\u0438\u043C \u0440\u0430\u0431\u043E\u0442\u043D\u0438\u043A\u043E\u043C, \u043B\u0438\u0431\u043E \u0438\u043D\u044B\u043C \u0440\u0430\u0431\u043E\u0442\u043D\u0438\u043A\u043E\u043C \u0441\u0438\u0441\u0442\u0435\u043C\u044B \u0437\u0434\u0440\u0430\u0432\u043E\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u044F."
    };
    const isOpemAgreement = ref(false);
    const isModalOpened = ref(false);
    const store = useForMedWork();
    store.fetchDataMedWor();
    const currentModalData = ref(null);
    function switchModal() {
      isModalOpened.value = !isModalOpened.value;
    }
    function openModal(data) {
      currentModalData.value = data;
      switchModal();
    }
    return {
      descriptionItems,
      isOpemAgreement,
      descriptionTitle,
      isModalOpened,
      currentModalData,
      switchModal,
      openModal,
      store,
      contentPopup
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  var _a;
  const _component_blocks_workers_card_list = __nuxt_component_1;
  const _component_blocks_description_minor = __nuxt_component_7;
  const _component_blocks_message_us = __nuxt_component_2;
  const _component_elements_modals_keeper = __nuxt_component_0;
  const _component_svg_close_popup = __nuxt_component_4;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "med-workers-page section-container" }, _attrs))} data-v-654a4fe4>`);
  _push(ssrRenderComponent(_component_blocks_workers_card_list, {
    med: true,
    data: $setup.store.getDataMedWor,
    onOpenModal: $setup.openModal
  }, null, _parent));
  _push(ssrRenderComponent(_component_blocks_description_minor, {
    class: "section-block",
    label: "\u041E\u0431 \u0430\u0432\u0442\u043E\u0440\u0435",
    title: $setup.descriptionTitle,
    "list-items": $setup.descriptionItems
  }, null, _parent));
  _push(ssrRenderComponent(_component_blocks_message_us, { class: "section-block" }, null, _parent));
  _push(ssrRenderComponent(_component_elements_modals_keeper, {
    "is-modal-opened": $setup.isModalOpened,
    onClose: ($event) => $setup.switchModal()
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      var _a2, _b, _c, _d, _e, _f, _g, _h;
      if (_push2) {
        _push2(`<h3 class="med-workers-page__modal-title" data-v-654a4fe4${_scopeId}>${ssrInterpolate((_a2 = $setup.currentModalData) == null ? void 0 : _a2.popupMed.title)}</h3><div class="med-workers-page__modal-label" data-v-654a4fe4${_scopeId}>${ssrInterpolate((_b = $setup.currentModalData) == null ? void 0 : _b.popupMed.subTitle)}</div><h4 class="med-workers-page__secondary-title" data-v-654a4fe4${_scopeId}> \u041E \u0447\u0435\u043C \u043F\u043E\u0433\u043E\u0432\u043E\u0440\u0438\u043C? </h4><ul class="med-workers-page__modal-list" data-v-654a4fe4${_scopeId}><!--[-->`);
        ssrRenderList((_c = $setup.currentModalData) == null ? void 0 : _c.popupMed.About.split("\u2014").slice(1, -1), (item) => {
          _push2(`<li class="med-workers-page__modal-item" data-v-654a4fe4${_scopeId}>${ssrInterpolate(item)}</li>`);
        });
        _push2(`<!--]--></ul><div class="med-workers-page__author-block" data-v-654a4fe4${_scopeId}><img class="med-workers-page__author-image"${ssrRenderAttr("src", _imports_0)} data-v-654a4fe4${_scopeId}><div class="med-workers-page__about-author" data-v-654a4fe4${_scopeId}><div class="med-workers-page__author-label" data-v-654a4fe4${_scopeId}> \u0410\u0432\u0442\u043E\u0440 \u0412\u0435\u0431\u0438\u043D\u0430\u0440\u0430 </div><div class="med-workers-page__author-title" data-v-654a4fe4${_scopeId}>${ssrInterpolate((_d = $setup.currentModalData) == null ? void 0 : _d.author.authorTitle)}</div></div></div>`);
      } else {
        return [
          createVNode("h3", { class: "med-workers-page__modal-title" }, toDisplayString((_e = $setup.currentModalData) == null ? void 0 : _e.popupMed.title), 1),
          createVNode("div", { class: "med-workers-page__modal-label" }, toDisplayString((_f = $setup.currentModalData) == null ? void 0 : _f.popupMed.subTitle), 1),
          createVNode("h4", { class: "med-workers-page__secondary-title" }, " \u041E \u0447\u0435\u043C \u043F\u043E\u0433\u043E\u0432\u043E\u0440\u0438\u043C? "),
          createVNode("ul", { class: "med-workers-page__modal-list" }, [
            (openBlock(true), createBlock(Fragment, null, renderList((_g = $setup.currentModalData) == null ? void 0 : _g.popupMed.About.split("\u2014").slice(1, -1), (item) => {
              return openBlock(), createBlock("li", { class: "med-workers-page__modal-item" }, toDisplayString(item), 1);
            }), 256))
          ]),
          createVNode("div", { class: "med-workers-page__author-block" }, [
            createVNode("img", {
              class: "med-workers-page__author-image",
              src: _imports_0
            }),
            createVNode("div", { class: "med-workers-page__about-author" }, [
              createVNode("div", { class: "med-workers-page__author-label" }, " \u0410\u0432\u0442\u043E\u0440 \u0412\u0435\u0431\u0438\u043D\u0430\u0440\u0430 "),
              createVNode("div", { class: "med-workers-page__author-title" }, toDisplayString((_h = $setup.currentModalData) == null ? void 0 : _h.author.authorTitle), 1)
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  if ($setup.isOpemAgreement) {
    _push(`<div class="overlay" data-v-654a4fe4><div class="modal-agreement" data-v-654a4fe4>`);
    _push(ssrRenderComponent(_component_svg_close_popup, {
      class: "closePopup",
      onClick: ($event) => $setup.isOpemAgreement = false
    }, null, _parent));
    _push(`<h3 class="med-workers-page__modal-title" data-v-654a4fe4>\u0414\u0430\u043D\u043D\u044B\u0439 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u0439 \u0441\u0430\u0439\u0442 \u043F\u0440\u0435\u0434\u043D\u0430\u0437\u043D\u0430\u0447\u0435\u043D \u0438\u0441\u043A\u043B\u044E\u0447\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0434\u043B\u044F \u043C\u0435\u0434\u0438\u0446\u0438\u043D\u0441\u043A\u0438\u0445 \u0440\u0430\u0431\u043E\u0442\u043D\u0438\u043A\u043E\u0432</h3><p data-v-654a4fe4>${(_a = $setup.contentPopup) == null ? void 0 : _a.text}</p><div class="wrapperBtn" data-v-654a4fe4><button data-v-654a4fe4>\u0421\u043E\u0433\u043B\u0430\u0448\u0430\u044E\u0441\u044C</button><button data-v-654a4fe4>\u041D\u0435 \u0441\u043E\u0433\u043B\u0430\u0448\u0430\u044E\u0441\u044C</button></div></div></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/forMedWorkers/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-654a4fe4"]]);
export {
  index as default
};
//# sourceMappingURL=index.51dfe246.js.map
