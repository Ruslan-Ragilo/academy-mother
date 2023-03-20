import { _ as _export_sfc, b as __nuxt_component_0 } from "../server.mjs";
import { useSSRContext, mergeProps, withCtx, createTextVNode } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrRenderAttr, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
const BlocksWorkersCardList_vue_vue_type_style_index_0_scoped_a2fe5e73_lang = "";
const _sfc_main = {
  props: {
    data: {
      type: Array,
      default: () => []
    },
    med: {
      default: false,
      type: Boolean
    }
  },
  emits: ["openModal"],
  setup(props, { emit }) {
    function openModal(item) {
      emit("openModal", item);
    }
    return {
      openModal
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "workers-list" }, _attrs))} data-v-a2fe5e73>`);
  if ($props.med) {
    _push(`<h2 class="workers-list__title" data-v-a2fe5e73> \u0421\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0441\u0442\u0430\u043C \u0438 \u043C\u0435\u0434\u0440\u0430\u0431\u043E\u0442\u043D\u0438\u043A\u0430\u043C </h2>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<!--[-->`);
  ssrRenderList($props.data, (item, index) => {
    _push(`<div class="${ssrRenderClass({
      "workers-list__card": true,
      "workers-list__card_reversed": index % 2 === 1
    })}" data-v-a2fe5e73><img class="workers-list__card-image"${ssrRenderAttr("src", "http://95.163.236.196:1337" + (item == null ? void 0 : item.image.data.attributes.url))} data-v-a2fe5e73><div class="workers-list__info-panel" data-v-a2fe5e73><div class="workers-list__product-type" data-v-a2fe5e73>${ssrInterpolate(item == null ? void 0 : item.subTitle)}</div><h2 class="workers-list__product-title" data-v-a2fe5e73>${ssrInterpolate(item == null ? void 0 : item.heading)}</h2><div class="workers-list__product-description" data-v-a2fe5e73>${item == null ? void 0 : item.title}</div>`);
    if (item.popupMed || item.popupGuide) {
      _push(`<div class="workers-list__detailed-button" data-v-a2fe5e73> \u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435 <div class="workers-list__detailed-button-cross" data-v-a2fe5e73></div></div>`);
    } else {
      _push(`<!---->`);
    }
    _push(`<div class="workers-list__cost-block" data-v-a2fe5e73><div class="workers-list__cost-wrapper" data-v-a2fe5e73><div class="workers-list__cost-label" data-v-a2fe5e73> \u0421\u0422\u041E\u0418\u041C\u041E\u0421\u0422\u042C \u041F\u0420\u041E\u0413\u0420\u0410\u041C\u041C\u042B </div><div class="workers-list__cost" data-v-a2fe5e73>${ssrInterpolate(item == null ? void 0 : item.price)} \u0440\u0443\u0431. </div></div><div class="workers-list__purchase-button" data-v-a2fe5e73> \u041A\u0443\u043F\u0438\u0442\u044C \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0443 </div></div>`);
    if (item == null ? void 0 : item.specOffer) {
      _push(`<div class="workers-list__additional" data-v-a2fe5e73>${ssrInterpolate(item == null ? void 0 : item.specOffer)} (\u043F\u0440\u0435\u043E\u0431\u0440\u0435\u0441\u0442\u0438 \u043C\u043E\u0436\u043D\u043E `);
      _push(ssrRenderComponent(_component_nuxt_link, { to: "/webinars" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u0442\u0443\u0442`);
          } else {
            return [
              createTextVNode("\u0442\u0443\u0442")
            ];
          }
        }),
        _: 2
      }, _parent));
      _push(`) </div>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</div></div>`);
  });
  _push(`<!--]--></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/blocks/workers/BlocksWorkersCardList.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-a2fe5e73"]]);
export {
  __nuxt_component_1 as _
};
//# sourceMappingURL=BlocksWorkersCardList.e0826287.js.map
