import { useSSRContext, mergeProps, unref, withCtx, openBlock, createBlock, Fragment, renderList, ref, computed, watch, onUpdated, resolveComponent, createVNode } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr, ssrRenderComponent, ssrRenderList, ssrRenderClass } from "vue/server-renderer";
import { _ as _export_sfc, d as defineStore } from "../server.mjs";
import { f as __nuxt_component_1 } from "./SvgOvalIcon.01ba50c0.js";
import { _ as __nuxt_component_1$1 } from "./ElementsIconedItem.628d1170.js";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
/* empty css                         */const ElementsButtonsPrimary_vue_vue_type_style_index_0_scoped_46aab454_lang = "";
const _sfc_main$5 = {
  props: {
    title: {
      type: String,
      default: "title"
    }
  }
};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "button-primary" }, _attrs))} data-v-46aab454>${ssrInterpolate($props.title)}</div>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/elements/buttons/ElementsButtonsPrimary.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_2$1 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$4], ["__scopeId", "data-v-46aab454"]]);
const ElementsMainSwiperItem_vue_vue_type_style_index_0_scoped_b04cb6ea_lang = "";
const _sfc_main$4 = {
  props: {
    title: {
      type: String,
      default: ""
    },
    text: {
      type: String,
      default: ""
    },
    photo: {
      type: String,
      default: ""
    },
    modalHeading: {
      type: String,
      default: ""
    },
    modalTitle: {
      type: String,
      default: ""
    }
  }
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "swiper-item" }, _attrs))} data-v-b04cb6ea><div data-v-b04cb6ea><div class="swiper-item__image-box" data-v-b04cb6ea><img class="swiper-item__image"${ssrRenderAttr("src", $props.photo)} data-v-b04cb6ea></div><div class="swiper-item__title" data-v-b04cb6ea>${ssrInterpolate($props.title)}</div><div class="swiper-item__text" data-v-b04cb6ea>${ssrInterpolate($props.text)}</div></div><div class="swiper-item__link" data-v-b04cb6ea> \u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435 </div></div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/elements/ElementsMainSwiperItem.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$3], ["__scopeId", "data-v-b04cb6ea"]]);
const useSliderComand = defineStore("popupStore", {
  state: () => ({
    dataSliderComand: []
  }),
  getters: {
    getSliderComand() {
      return this.dataSliderComand;
    }
  },
  actions: {
    async fetchDataSliderComand() {
      const res = await fetch("http://95.163.236.196:1337/api/slider-comands?populate=*");
      const data = await res.json();
      this.dataSliderComand = data.data.map((el2) => el2.attributes);
    }
  }
});
const BlocksMainSwiper_vue_vue_type_style_index_0_scoped_69561f7f_lang = "";
const __default__ = {
  components: {
    Swiper,
    SwiperSlide
  },
  props: {
    headingSlider: {
      type: String,
      default: ""
    },
    titleSlider: {
      type: String,
      default: ""
    }
  },
  setup() {
    const onSwiper2 = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange2 = () => {
      console.log("slide change");
    };
    const prevCom2 = ref(null);
    const nextCom2 = ref(null);
    return {
      onSwiper: onSwiper2,
      onSlideChange: onSlideChange2,
      prevCom: prevCom2,
      nextCom: nextCom2,
      modules: [Navigation]
    };
  },
  data() {
    return {
      modalInfo: {},
      isModalOpened: false
    };
  },
  methods: {
    openModal(params) {
      console.log(params);
      this.modalInfo = { ...params };
      this.switchModal();
    },
    switchModal() {
      this.isModalOpened = !this.isModalOpened;
    }
  }
};
const _sfc_main$3 = /* @__PURE__ */ Object.assign(__default__, {
  __name: "BlocksMainSwiper",
  __ssrInlineRender: true,
  setup(__props) {
    const sliderComand = useSliderComand();
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      const _component_svg_heart_icon = __nuxt_component_1;
      const _component_svg_star = __nuxt_component_1$1;
      const _component_elements_main_swiper_item = __nuxt_component_2;
      _push(`<!--[--><div class="main-swiper" data-v-69561f7f>`);
      _push(ssrRenderComponent(_component_svg_heart_icon, { class: "main-swiper__heart" }, null, _parent));
      _push(ssrRenderComponent(_component_svg_star, { class: "main-swiper__star" }, null, _parent));
      _push(`<h1 class="main-swiper__title" data-v-69561f7f>${ssrInterpolate(__props.headingSlider)}</h1><div class="main-swiper__text" data-v-69561f7f>${ssrInterpolate(__props.titleSlider)}</div><div class="main-swiper__swiper-block" data-v-69561f7f>`);
      _push(ssrRenderComponent(unref(Swiper), {
        modules: unref(modules),
        navigation: {
          prevEl: unref(prevCom),
          nextEl: unref(nextCom)
        },
        "space-between": 40,
        breakpoints: { 1200: { slidesPerView: 4 }, 610: { slidesPerView: 2 }, 0: { slidesPerView: 1 } },
        class: "swiper",
        onSwiper: unref(onSwiper),
        onSlideChange: unref(onSlideChange)
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(sliderComand).getSliderComand, (item, index) => {
              _push2(ssrRenderComponent(unref(SwiperSlide), null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_elements_main_swiper_item, {
                      key: index,
                      title: item.fullName,
                      text: item.title,
                      photo: "http://95.163.236.196:1337" + item.avatar.data.attributes.url,
                      modalHeading: item.popupComand.title,
                      modalTitle: item.popupComand.About,
                      onOpenModal: _ctx.openModal
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      (openBlock(), createBlock(_component_elements_main_swiper_item, {
                        key: index,
                        title: item.fullName,
                        text: item.title,
                        photo: "http://95.163.236.196:1337" + item.avatar.data.attributes.url,
                        modalHeading: item.popupComand.title,
                        modalTitle: item.popupComand.About,
                        onOpenModal: _ctx.openModal
                      }, null, 8, ["title", "text", "photo", "modalHeading", "modalTitle", "onOpenModal"]))
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(unref(sliderComand).getSliderComand, (item, index) => {
                return openBlock(), createBlock(unref(SwiperSlide), null, {
                  default: withCtx(() => [
                    (openBlock(), createBlock(_component_elements_main_swiper_item, {
                      key: index,
                      title: item.fullName,
                      text: item.title,
                      photo: "http://95.163.236.196:1337" + item.avatar.data.attributes.url,
                      modalHeading: item.popupComand.title,
                      modalTitle: item.popupComand.About,
                      onOpenModal: _ctx.openModal
                    }, null, 8, ["title", "text", "photo", "modalHeading", "modalTitle", "onOpenModal"]))
                  ]),
                  _: 2
                }, 1024);
              }), 256))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
      if (_ctx.isModalOpened) {
        _push(`<div class="main-swiper__modal" data-v-69561f7f><div class="main-swiper__modal-window" data-v-69561f7f><div class="main-swiper__close-cross-button" data-v-69561f7f></div><h3 class="main-swiper__modal-title" data-v-69561f7f>${ssrInterpolate(_ctx.modalInfo.modalHeading)}</h3><ul class="main-swiper__modal-list" data-v-69561f7f><!--[-->`);
        ssrRenderList((_b = (_a = _ctx.modalInfo) == null ? void 0 : _a.modalTitle) == null ? void 0 : _b.split("\u2014").slice(1, -1), (item) => {
          _push(`<li class="main-swiper__modal-item" data-v-69561f7f>${ssrInterpolate(item)}</li>`);
        });
        _push(`<!--]--></ul></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/blocks/BlocksMainSwiper.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_6 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-69561f7f"]]);
const _sfc_main$2 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "13",
    height: "10",
    viewBox: "0 0 13 10",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path d="M6.5 10L-7.94466e-08 -1.82822e-07L6.5 3.90476L13 9.53674e-07L6.5 10Z" fill="#FEF8F2"></path></svg>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/svg/SvgArrowDownInput.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const ElementsCustomSelect_vue_vue_type_style_index_0_scoped_14fa4bc1_lang = "";
const _sfc_main$1 = {
  components: { SvgArrowDownInput: __nuxt_component_0$1 },
  props: {
    modelValue: {
      type: Object,
      default: () => {
      }
    },
    items: {
      type: Array,
      default: () => []
    },
    label: {
      type: String,
      default: "\u0421\u0442\u0430\u0442\u0443\u0441"
    },
    showChoicesAmount: {
      type: Boolean,
      default: true
    }
  },
  emits: ["updateFilters"],
  setup(props, { emit }) {
    const isOpened = ref(false);
    const inputValue = ref({});
    function switchSelect() {
      isOpened.value = !isOpened.value;
    }
    function selectItem(item) {
      inputValue.value = item;
      isOpened.value = false;
    }
    const getValue = computed(() => {
      return inputValue.value;
    });
    watch(getValue, () => {
      emit("updateFilters", inputValue.value);
    });
    return {
      isOpened,
      switchSelect,
      inputValue,
      selectItem
    };
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_svg_arrow_down_input = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "custom-select" }, _attrs))} data-v-14fa4bc1><div class="${ssrRenderClass({
    "custom-select__button": true,
    "custom-select__button_opened": $setup.isOpened
  })}" data-v-14fa4bc1><div data-v-14fa4bc1><span class="custom-select__inner-text bold" data-v-14fa4bc1>${ssrInterpolate($setup.inputValue.label)}</span></div>`);
  _push(ssrRenderComponent(_component_svg_arrow_down_input, {
    class: {
      "custom-select__arrow-icon": true,
      "custom-select__arrow-icon_opened": $setup.isOpened
    }
  }, null, _parent));
  _push(`</div>`);
  if ($setup.isOpened) {
    _push(`<div class="${ssrRenderClass({
      "custom-select__list": true
    })}" data-v-14fa4bc1><div data-v-14fa4bc1><!--[-->`);
    ssrRenderList($props.items, (item) => {
      _push(`<div class="custom-select__list-item" data-v-14fa4bc1>${ssrInterpolate(item == null ? void 0 : item.label)}</div>`);
    });
    _push(`<!--]--></div></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/elements/ElementsCustomSelect.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-14fa4bc1"]]);
const useReviewsSlider = defineStore("reviewsSlider", {
  state: () => ({
    dataReviewsSlider: [],
    typeReviews: ""
  }),
  getters: {
    getReviewsSlider() {
      if (!this.typeReviews) {
        return this.dataReviewsSlider;
      } else {
        console.log(this.dataReviewsSlider.filter((el2) => el2.typeReviews === this.typeReviews));
        return this.dataReviewsSlider.filter((el2) => el2.typeReviews === this.typeReviews);
      }
    }
  },
  actions: {
    async fetchDataReviewsSlider() {
      const res = await fetch("http://95.163.236.196:1337/api/reviews-sliders");
      const data = await res.json();
      this.dataReviewsSlider = data.data.map((el2) => el2.attributes);
    },
    filterReviews(type = "") {
      this.typeReviews = type;
    }
  }
});
const BlocksReviewsBlock_vue_vue_type_style_index_0_scoped_560306e2_lang = "";
const optionsArray = [
  {
    key: "",
    label: "\u041E\u0442\u0437\u044B\u0432\u044B \u0428\u043A\u043E\u043B\u0430 \u0431\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0445"
  },
  {
    key: "repro",
    label: "\u041F\u0440\u043E\u0435\u043A\u0442 \xAB\u0420\u0435\u043F\u0440\u043E\xBB"
  },
  {
    key: "meno",
    label: "\u041F\u0440\u043E\u0435\u043A\u0442 \xAB\u041C\u0435\u043D\u043E\xBB"
  },
  {
    key: "consumptionGuide",
    label: "\u0413\u0430\u0439\u0434 \u043F\u043E \u043F\u0438\u0442\u0430\u043D\u0438\u044E"
  },
  {
    key: "webinars",
    label: "\u0412\u0435\u0431\u0438\u043D\u0430\u0440\u044B \u043F\u043E \u043F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u043A\u0435"
  },
  {
    key: "webinarsAnalise",
    label: "\u0412\u0435\u0431\u0438\u043D\u0430\u0440 \xAB\u0410\u043D\u0430\u043B\u0438\u0437\u044B \u0438 \u043E\u0431\u0441\u043B\u0435\u0434\u043E\u0432\u0430\u043D\u0438\u044F \u0432\u043E \u0432\u0440\u0435\u043C\u044F \u0431\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u043E\u0441\u0442\u0438\xBB"
  },
  {
    key: "authorsProgram",
    label: "\u0410\u0432\u0442\u043E\u0440\u0441\u043A\u0430\u044F \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0430 \u0432\u043E\u0441\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u044F \u043F\u043E\u0441\u043B\u0435 \u0431\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u043E\u0441\u0442\u0438"
  },
  {
    key: "venera",
    label: "\u041F\u0440\u043E\u0435\u043A\u0442 \xAB\u0420\u043E\u0436\u0434\u0435\u043D\u0438\u0435 \u0412\u0435\u043D\u0435\u0440\u044B\xBB"
  }
];
let el = ref(null);
const _sfc_main = {
  components: {
    Swiper,
    SwiperSlide
  },
  props: {
    reviewsIsShow: {
      type: Boolean,
      default: false
    },
    heading: {
      type: String,
      default: ""
    }
  },
  methods: {
    showDetails(e) {
      if (e.currentTarget.parentNode.classList.contains("active")) {
        window.scrollTo(0, this.posScroll);
        e.currentTarget.parentNode.classList.remove("active");
        return;
      }
      if (el.value) {
        el.value.classList.remove("active");
      }
      el.value = e.currentTarget.parentNode;
      e.currentTarget.parentNode.classList.add("active");
      this.posScroll = window.scrollY;
    }
  },
  setup() {
    const store = useReviewsSlider();
    const currSelected = ref(optionsArray[0]);
    const heightDetails = ref(null);
    const wrapperSlider = ref(null);
    store.fetchDataReviewsSlider();
    let posScroll = 0;
    heightDetails.value = [...store.getReviewsSlider];
    watch(() => heightDetails.value.length, () => {
      heightDetails.value.forEach((element) => {
        element.nextSibling.classList.remove("_active");
        if (element.offsetHeight > 254) {
          element.nextSibling.classList.add("_active");
        }
      });
    });
    onUpdated(() => {
      wrapperSlider.value.childNodes[0].children[0].style.transform = "";
      if (heightDetails == null ? void 0 : heightDetails.value) {
        heightDetails == null ? void 0 : heightDetails.value.forEach((element, i) => {
          element.nextSibling.classList.remove("_active");
          if (element.offsetHeight > 254) {
            element.nextSibling.classList.add("_active");
          }
        });
      }
    });
    function update(value) {
      store.filterReviews(value == null ? void 0 : value.key);
      currSelected.value = value;
    }
    const prevRev = ref(null);
    const nextRev = ref(null);
    return {
      heightDetails,
      optionsArray,
      update,
      posScroll,
      store,
      currSelected,
      wrapperSlider,
      modules: [Navigation],
      prevRev,
      nextRev
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_elements_custom_select = __nuxt_component_0;
  const _component_swiper = resolveComponent("swiper");
  const _component_swiper_slide = resolveComponent("swiper-slide");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "reviews-block" }, _attrs))} data-v-560306e2><h3 class="reviews-block__title" data-v-560306e2>${ssrInterpolate($props.heading)}</h3><div class="wrappernavSel" data-v-560306e2>`);
  if ($props.reviewsIsShow) {
    _push(ssrRenderComponent(_component_elements_custom_select, {
      class: "reviews-block__select",
      label: $setup.currSelected,
      items: $setup.optionsArray,
      onUpdateFilters: $setup.update
    }, null, _parent));
  } else {
    _push(`<!---->`);
  }
  _push(`<div class="wrapperNav" data-v-560306e2><div class="swiper-button-prev nav-btn" data-v-560306e2><svg xmlns="http://www.w3.org/2000/svg" width="25" height="13" viewBox="0 0 25 13" fill="yellow" data-v-560306e2><path d="M25 6.5L-5.68248e-07 13L9.7619 6.5L0 -1.09278e-06L25 6.5Z" fill="#fff" data-v-560306e2></path></svg></div><div class="swiper-button-next nav-btn" data-v-560306e2><svg xmlns="http://www.w3.org/2000/svg" width="25" height="13" viewBox="0 0 25 13" fill="red" data-v-560306e2><path d="M25 6.5L-5.68248e-07 13L9.7619 6.5L0 -1.09278e-06L25 6.5Z" fill="#fff" data-v-560306e2></path></svg></div></div></div><div class="swiper" data-v-560306e2>`);
  _push(ssrRenderComponent(_component_swiper, {
    modules: $setup.modules,
    navigation: {
      prevEl: $setup.prevRev,
      nextEl: $setup.nextRev
    },
    breakpoints: {
      1281: {
        slidesPerView: 2,
        spaceBetween: 40
      },
      500: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      0: {
        slidesPerView: 2,
        spaceBetween: 20
      }
    },
    class: "slider"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<!--[-->`);
        ssrRenderList($setup.store.getReviewsSlider, (item, index) => {
          _push2(ssrRenderComponent(_component_swiper_slide, {
            key: index,
            class: { itemSlider: true, active: item.isShow }
          }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`<p data-v-560306e2${_scopeId2}>${item.content}</p><div class="details" data-v-560306e2${_scopeId2}><div data-v-560306e2${_scopeId2}></div><div data-v-560306e2${_scopeId2}></div><div data-v-560306e2${_scopeId2}></div></div>`);
              } else {
                return [
                  createVNode("p", {
                    innerHTML: item.content,
                    ref_for: true,
                    ref: "heightDetails"
                  }, null, 8, ["innerHTML"]),
                  createVNode("div", {
                    onClick: ($event) => $options.showDetails($event, _ctx.window),
                    class: "details"
                  }, [
                    createVNode("div"),
                    createVNode("div"),
                    createVNode("div")
                  ], 8, ["onClick"])
                ];
              }
            }),
            _: 2
          }, _parent2, _scopeId));
        });
        _push2(`<!--]-->`);
      } else {
        return [
          (openBlock(true), createBlock(Fragment, null, renderList($setup.store.getReviewsSlider, (item, index) => {
            return openBlock(), createBlock(_component_swiper_slide, {
              key: index,
              class: { itemSlider: true, active: item.isShow }
            }, {
              default: withCtx(() => [
                createVNode("p", {
                  innerHTML: item.content,
                  ref_for: true,
                  ref: "heightDetails"
                }, null, 8, ["innerHTML"]),
                createVNode("div", {
                  onClick: ($event) => $options.showDetails($event, _ctx.window),
                  class: "details"
                }, [
                  createVNode("div"),
                  createVNode("div"),
                  createVNode("div")
                ], 8, ["onClick"])
              ]),
              _: 2
            }, 1032, ["class"]);
          }), 128))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/blocks/BlocksReviewsBlock.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_8 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-560306e2"]]);
export {
  __nuxt_component_2$1 as _,
  __nuxt_component_6 as a,
  __nuxt_component_8 as b
};
//# sourceMappingURL=BlocksReviewsBlock.46ffbc47.js.map
