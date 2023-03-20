import { useSSRContext, mergeProps, unref, defineAsyncComponent, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, toDisplayString, createTextVNode, ref, resolveComponent } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrRenderList, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
import { d as defineStore, _ as _export_sfc } from "../server.mjs";
import { u as useArticlesStore, _ as __nuxt_component_2$1 } from "./articlesStore.1759b912.js";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
/* empty css                         */import { u as useUsefulStore } from "./usefulStore.2899b889.js";
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
const usePopupStore = defineStore("popupStore", {
  state: () => ({
    isOpen: false
  }),
  getters: {
    getIsOpen() {
      return this.isOpen;
    }
  },
  actions: {
    setIsOpen() {
      this.isOpen = !this.isOpen;
    }
  }
});
const ElementsPopup_vue_vue_type_style_index_0_scoped_d13d0cc0_lang = "";
const __nuxt_component_0_lazy = /* @__PURE__ */ defineAsyncComponent(() => import("./SvgClosePopup.35fc2330.js").then((m) => m.default || m));
const _sfc_main$8 = {
  __name: "ElementsPopup",
  __ssrInlineRender: true,
  setup(__props) {
    const dataPopup = usePopupStore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_lazy_svg_close_popup = __nuxt_component_0_lazy;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["overlay-popup", { active: unref(dataPopup).getIsOpen }]
      }, _attrs))} data-v-d13d0cc0><div class="popup" data-v-d13d0cc0>`);
      _push(ssrRenderComponent(_component_lazy_svg_close_popup, {
        class: "close-popup",
        onClick: unref(dataPopup).setIsOpen
      }, null, _parent));
      _push(`<div data-v-d13d0cc0>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/elements/ElementsPopup.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__scopeId", "data-v-d13d0cc0"]]);
const BlocksImgCard_vue_vue_type_style_index_0_scoped_ae904c20_lang = "";
const _sfc_main$7 = {
  props: {
    link: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      width: window.innerWidth
    };
  }
};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<img${ssrRenderAttrs(mergeProps({
    src: "http://95.163.236.196:1337" + $props.link,
    alt: "\u041F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0430"
  }, _attrs))} data-v-ae904c20>`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/blocks/card/BlocksImgCard.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __nuxt_component_1$2 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$4], ["__scopeId", "data-v-ae904c20"]]);
const ElementsButtonGreen_vue_vue_type_style_index_0_scoped_ceb1bbe8_lang = "";
const _sfc_main$6 = {
  props: {
    link: {
      type: String,
      default: "#"
    },
    isLink: {
      type: Boolean,
      default: "true"
    }
  }
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  if ($props.isLink) {
    _push(`<a${ssrRenderAttrs(mergeProps({
      href: $props.link,
      class: "button-primary"
    }, _attrs))} data-v-ceb1bbe8>`);
    ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
    _push(`</a>`);
  } else {
    _push(`<div${ssrRenderAttrs(mergeProps({
      href: $props.link,
      class: "button-primary"
    }, _attrs))} data-v-ceb1bbe8>`);
    ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
    _push(`</div>`);
  }
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/elements/ElementsButtonGreen.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_1$1 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$3], ["__scopeId", "data-v-ceb1bbe8"]]);
const BlocksCard_vue_vue_type_style_index_0_scoped_a8ecd6cf_lang = "";
const __default__ = {
  props: {
    data: {
      type: Array,
      default: null
    }
  },
  data() {
    return {
      isActive: false,
      indexForPopup: 0
    };
  }
};
const _sfc_main$5 = /* @__PURE__ */ Object.assign(__default__, {
  __name: "BlocksCard",
  __ssrInlineRender: true,
  setup(__props) {
    usePopupStore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_elements_popup = __nuxt_component_0$1;
      const _component_blocks_img_card = __nuxt_component_1$2;
      const _component_elements_button_green = __nuxt_component_1$1;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_elements_popup, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b, _c, _d, _e, _f;
          if (_push2) {
            _push2(`<div class="popup-content" data-v-a8ecd6cf${_scopeId}><h3 data-v-a8ecd6cf${_scopeId}>\u0412\u044B \u0443\u0437\u043D\u0430\u0435\u0442\u0435:</h3><ul data-v-a8ecd6cf${_scopeId}><!--[-->`);
            ssrRenderList((_c = (_b = (_a = __props.data[_ctx.indexForPopup]) == null ? void 0 : _a.popupProgram) == null ? void 0 : _b.About) == null ? void 0 : _c.split("\u2014").slice(1, -1), (itemList) => {
              _push2(`<li data-v-a8ecd6cf${_scopeId}><p data-v-a8ecd6cf${_scopeId}>${ssrInterpolate(itemList)}</p></li>`);
            });
            _push2(`<!--]--></ul></div>`);
          } else {
            return [
              createVNode("div", { class: "popup-content" }, [
                createVNode("h3", null, "\u0412\u044B \u0443\u0437\u043D\u0430\u0435\u0442\u0435:"),
                createVNode("ul", null, [
                  (openBlock(true), createBlock(Fragment, null, renderList((_f = (_e = (_d = __props.data[_ctx.indexForPopup]) == null ? void 0 : _d.popupProgram) == null ? void 0 : _e.About) == null ? void 0 : _f.split("\u2014").slice(1, -1), (itemList) => {
                    return openBlock(), createBlock("li", null, [
                      createVNode("p", null, toDisplayString(itemList), 1)
                    ]);
                  }), 256))
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--[-->`);
      ssrRenderList(__props.data, (item, index2) => {
        _push(`<div class="wrapper-card" data-v-a8ecd6cf><section class="border" data-v-a8ecd6cf></section><div class="img-card-wrapper" data-v-a8ecd6cf>`);
        _push(ssrRenderComponent(_component_blocks_img_card, {
          link: item.image.data.attributes.url
        }, null, _parent));
        _push(`</div><div class="content" data-v-a8ecd6cf><h2 data-v-a8ecd6cf>${ssrInterpolate(item.heading)}</h2><p class="title-card" data-v-a8ecd6cf>${ssrInterpolate(item == null ? void 0 : item.text)}</p><button class="details" data-v-a8ecd6cf>\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435</button>`);
        _push(ssrRenderComponent(_component_elements_button_green, { isLink: true }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`\u0421\u043A\u0430\u0447\u0430\u0442\u044C \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u043E`);
            } else {
              return [
                createTextVNode("\u0421\u043A\u0430\u0447\u0430\u0442\u044C \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u043E")
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div></div>`);
      });
      _push(`<!--]--><!--]-->`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/blocks/card/BlocksCard.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-a8ecd6cf"]]);
const _sfc_main$4 = {
  __name: "BlocksArticlesCards",
  __ssrInlineRender: true,
  props: {
    data: Array
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_blocks_card = __nuxt_component_0;
      _push(ssrRenderComponent(_component_blocks_card, mergeProps({ data: __props.data }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/blocks/articles/BlocksArticlesCards.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const BlocksMediaArticles_vue_vue_type_style_index_0_scoped_cbf7d898_lang = "";
const _sfc_main$3 = {
  data() {
    return {
      scrollSava: null
    };
  },
  methods: {
    saveScroll() {
      console.log(window);
    }
  },
  setup() {
    const store = useArticlesStore();
    store.fetchDataCardMedia();
    console.log(store.fetchDataCardMedia());
    return {
      store
    };
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_elements_read_articles = __nuxt_component_2$1;
  const _component_elements_button_green = __nuxt_component_1$1;
  _push(`<!--[--><h2 id="mediaArticles" data-v-cbf7d898>\u0421\u0442\u0430\u0442\u044C\u0438 \u0432 \u0421\u041C\u0418</h2><div class="wrapper-card" data-v-cbf7d898><!--[-->`);
  ssrRenderList($setup.store.geDataCardMedia, (item) => {
    var _a, _b, _c;
    _push(`<div class="card" data-v-cbf7d898><img${ssrRenderAttr("src", "http://95.163.236.196:1337" + ((_c = (_b = (_a = item == null ? void 0 : item.image) == null ? void 0 : _a.data[0]) == null ? void 0 : _b.attributes) == null ? void 0 : _c.url))} data-v-cbf7d898><h3 class="heading-card" data-v-cbf7d898>${ssrInterpolate(item.heading)}</h3><p class="title-card" data-v-cbf7d898>${ssrInterpolate(item.title)}</p>`);
    _push(ssrRenderComponent(_component_elements_read_articles, {
      href: item.link,
      class: "btnRead"
    }, null, _parent));
    _push(`</div>`);
  });
  _push(`<!--]--></div>`);
  _push(ssrRenderComponent(_component_elements_button_green, {
    class: "btnFull",
    isLink: false,
    onClick: $setup.store.setIsFullShow
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        if ($setup.store.isFullShow) {
          _push2(`<!--[-->\u0421\u043A\u0440\u044B\u0442\u044C<!--]-->`);
        } else {
          _push2(`<!--[-->\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u0432\u0441\u0435<!--]-->`);
        }
      } else {
        return [
          $setup.store.isFullShow ? (openBlock(), createBlock(Fragment, { key: 0 }, [
            createTextVNode("\u0421\u043A\u0440\u044B\u0442\u044C")
          ], 64)) : (openBlock(), createBlock(Fragment, { key: 1 }, [
            createTextVNode("\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u0432\u0441\u0435")
          ], 64))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/blocks/articles/BlocksMediaArticles.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-cbf7d898"]]);
const useSwiperArticlesStore = defineStore("swiperArticlesStore ", {
  state: () => ({
    dataSwiper: []
  }),
  getters: {
    getIsOpen() {
      return this.isOpen;
    },
    getDataSlider() {
      return this.dataSwiper;
    }
  },
  actions: {
    setIsOpen() {
      this.isOpen = !this.isOpen;
    },
    async fetchSliderData() {
      const res = await fetch("http://95.163.236.196:1337/api/slider-articles?populate=*");
      const data = await res.json();
      this.dataSwiper = data.data.map((el) => el.attributes);
    }
  }
});
const pagination_min = "";
const scrollbar_min = "";
const BlocksSliderArticles_vue_vue_type_style_index_0_scoped_62f39f30_lang = "";
const _sfc_main$2 = {
  components: {
    Swiper,
    SwiperSlide
  },
  setup() {
    const store = useSwiperArticlesStore();
    store.fetchSliderData();
    const prev = ref(null);
    const next = ref(null);
    return {
      prev,
      next,
      store,
      modules: [Navigation]
    };
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_swiper = resolveComponent("swiper");
  const _component_swiper_slide = resolveComponent("swiper-slide");
  const _component_elements_read_articles = __nuxt_component_2$1;
  _push(`<!--[--><h2 class="heading" data-v-62f39f30>\u041D\u0430\u0443\u0447\u043D\u044B\u0435 \u0441\u0442\u0430\u0442\u044C\u0438</h2><div class="swiper-container" data-v-62f39f30>`);
  _push(ssrRenderComponent(_component_swiper, {
    class: "swiper",
    modules: $setup.modules,
    "slides-per-view": 3,
    "space-between": 40,
    navigation: {
      prevEl: $setup.prev,
      nextEl: $setup.next
    },
    breakpoints: {
      1281: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      500: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      0: {
        slidesPerView: 1,
        spaceBetween: 20
      }
    }
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<!--[-->`);
        ssrRenderList($setup.store.dataSwiper, (item) => {
          _push2(ssrRenderComponent(_component_swiper_slide, { class: "slide" }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`<div class="slide-card" data-v-62f39f30${_scopeId2}><p class="year" data-v-62f39f30${_scopeId2}>${ssrInterpolate(item.year)}</p><h2 data-v-62f39f30${_scopeId2}>${ssrInterpolate(item.heading)}</h2><p class="title" data-v-62f39f30${_scopeId2}>${ssrInterpolate(item.author)}</p>`);
                _push3(ssrRenderComponent(_component_elements_read_articles, {
                  href: item.link,
                  class: "btnRead"
                }, null, _parent3, _scopeId2));
                _push3(`</div>`);
              } else {
                return [
                  createVNode("div", { class: "slide-card" }, [
                    createVNode("p", { class: "year" }, toDisplayString(item.year), 1),
                    createVNode("h2", null, toDisplayString(item.heading), 1),
                    createVNode("p", { class: "title" }, toDisplayString(item.author), 1),
                    createVNode(_component_elements_read_articles, {
                      href: item.link,
                      class: "btnRead"
                    }, null, 8, ["href"])
                  ])
                ];
              }
            }),
            _: 2
          }, _parent2, _scopeId));
        });
        _push2(`<!--]-->`);
      } else {
        return [
          (openBlock(true), createBlock(Fragment, null, renderList($setup.store.dataSwiper, (item) => {
            return openBlock(), createBlock(_component_swiper_slide, { class: "slide" }, {
              default: withCtx(() => [
                createVNode("div", { class: "slide-card" }, [
                  createVNode("p", { class: "year" }, toDisplayString(item.year), 1),
                  createVNode("h2", null, toDisplayString(item.heading), 1),
                  createVNode("p", { class: "title" }, toDisplayString(item.author), 1),
                  createVNode(_component_elements_read_articles, {
                    href: item.link,
                    class: "btnRead"
                  }, null, 8, ["href"])
                ])
              ]),
              _: 2
            }, 1024);
          }), 256))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="swiper-button-prev nav-btn" data-v-62f39f30><svg xmlns="http://www.w3.org/2000/svg" width="25" height="13" viewBox="0 0 25 13" fill="yellow" data-v-62f39f30><path d="M25 6.5L-5.68248e-07 13L9.7619 6.5L0 -1.09278e-06L25 6.5Z" fill="#fff" data-v-62f39f30></path></svg></div><div class="swiper-button-next nav-btn" data-v-62f39f30><svg xmlns="http://www.w3.org/2000/svg" width="25" height="13" viewBox="0 0 25 13" fill="red" data-v-62f39f30><path d="M25 6.5L-5.68248e-07 13L9.7619 6.5L0 -1.09278e-06L25 6.5Z" fill="#fff" data-v-62f39f30></path></svg></div></div><!--]-->`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/blocks/articles/BlocksSliderArticles.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-62f39f30"]]);
const BlocksUsefulArticles_vue_vue_type_style_index_0_scoped_ee064fe6_lang = "";
const _sfc_main$1 = {
  data() {
    return {
      scrollTo: null
    };
  },
  setup() {
    const store = useUsefulStore();
    store.fetchUsefulData();
    return {
      store
    };
  },
  beforeMount() {
    if (sessionStorage.getItem("setSroll")) {
      this.scrollTo = Number(sessionStorage.getItem("setSroll"));
      sessionStorage.clear();
    }
  },
  mounted() {
    if (this.scrollTo) {
      setTimeout(() => {
        window.scrollTo(0, this.scrollTo);
      });
    }
  },
  methods: {
    goTo(str, index2) {
      sessionStorage.setItem("setSroll", window.scrollY);
      this.store.setIndex(index2);
      this.$router.push("/articles/" + str);
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<!--[--><h2 class="heading usefulMedia" data-v-ee064fe6>\u041F\u043E\u043B\u0435\u0437\u043D\u044B\u0435 \u0441\u0442\u0430\u0442\u044C\u0438</h2><div class="wrapper" data-v-ee064fe6><!--[-->`);
  ssrRenderList($setup.store.getUsefulData, (item, index2) => {
    var _a, _b;
    _push(`<div class="cardArticles" data-v-ee064fe6><img${ssrRenderAttr("src", `http://95.163.236.196:1337${(_b = (_a = item.image) == null ? void 0 : _a.data[0].attributes) == null ? void 0 : _b.url}`)} data-v-ee064fe6><h2 data-v-ee064fe6>${ssrInterpolate(item.heading)}</h2><p data-v-ee064fe6>${ssrInterpolate(item.title)}</p><a${ssrRenderAttr("href", item.href)} data-v-ee064fe6>\u0427\u0438\u0442\u0430\u0442\u044C \u0441\u0442\u0430\u0442\u044C\u044E</a></div>`);
  });
  _push(`<!--]--></div><!--]-->`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/blocks/articles/BlocksUsefulArticles.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-ee064fe6"]]);
const index_vue_vue_type_style_index_0_scoped_68939f3c_lang = "";
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const storeUseful = useUsefulStore();
    const storeUsefulCard = useArticlesStore();
    storeUsefulCard.fetchDataCard();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_blocks_articles_cards = _sfc_main$4;
      const _component_blocks_media_articles = __nuxt_component_1;
      const _component_blocks_slider_articles = __nuxt_component_2;
      const _component_blocks_useful_articles = __nuxt_component_3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "articles-page section-container" }, _attrs))} data-v-68939f3c><h1 class="articles-page__title" data-v-68939f3c>\u041F\u043E\u043B\u0435\u0437\u043D\u044B\u0435 \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u044B \u0438 \u0441\u0442\u0430\u0442\u044C\u0438</h1>`);
      _push(ssrRenderComponent(_component_blocks_articles_cards, {
        data: unref(storeUsefulCard).getDataCard
      }, null, _parent));
      _push(ssrRenderComponent(_component_blocks_media_articles, null, null, _parent));
      _push(ssrRenderComponent(_component_blocks_slider_articles, null, null, _parent));
      _push(ssrRenderComponent(_component_blocks_useful_articles, null, null, _parent));
      _push(` ${ssrInterpolate(unref(storeUseful).point)}</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/articles/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-68939f3c"]]);
export {
  index as default
};
//# sourceMappingURL=index.ae09ab98.js.map
