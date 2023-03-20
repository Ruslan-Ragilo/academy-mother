import { b as __nuxt_component_0 } from "../server.mjs";
import { mergeProps, unref, withCtx, createTextVNode, openBlock, createBlock, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrRenderComponent } from "vue/server-renderer";
import { u as useUsefulStore } from "./usefulStore.2899b889.js";
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
const _id__vue_vue_type_style_index_0_lang = "";
const _sfc_main = {
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useUsefulStore();
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e, _f;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "containerArticlesDetails" }, _attrs))}><div class="contentArticlesUseful"><h2>${ssrInterpolate((_a = unref(store).getUsefulData[unref(store).index]) == null ? void 0 : _a.heading)}</h2><!--[-->`);
      ssrRenderList((_b = unref(store).getUsefulData[unref(store).index]) == null ? void 0 : _b.PageUsefulArticles, (item) => {
        _push(`<div><h3>${ssrInterpolate(item == null ? void 0 : item.heading)}</h3><p>${ssrInterpolate(item == null ? void 0 : item.title)}</p></div>`);
      });
      _push(`<!--]--></div><div class="block-author"><img${ssrRenderAttr("src", "http://95.163.236.196:1337" + ((_e = (_d = (_c = unref(store).getUsefulData[unref(store).index]) == null ? void 0 : _c.imageAuthor) == null ? void 0 : _d.data[0].attributes) == null ? void 0 : _e.url))} alt=""><div><p>\u0410\u0432\u0442\u043E\u0440 \u0421\u0442\u0430\u0442\u044C\u0438</p><p>${ssrInterpolate((_f = unref(store).getUsefulData[unref(store).index]) == null ? void 0 : _f.author)}</p></div></div>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "linkToBack",
        to: "/articles"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u0412\u0435\u0440\u043D\u0443\u0442\u044C\u0441\u044F \u0432 \u0440\u0430\u0437\u0434\u0435\u043B \xAB\u041F\u043E\u043B\u0435\u0437\u043D\u044B\u0435 \u0441\u0442\u0430\u0442\u044C\u0438\xBB <svg xmlns="http://www.w3.org/2000/svg" width="25" height="13" viewBox="0 0 25 13" fill="none"${_scopeId}><path d="M25 6.5L-5.68248e-07 13L9.7619 6.5L0 -1.09278e-06L25 6.5Z" fill="#064848"${_scopeId}></path></svg>`);
          } else {
            return [
              createTextVNode(" \u0412\u0435\u0440\u043D\u0443\u0442\u044C\u0441\u044F \u0432 \u0440\u0430\u0437\u0434\u0435\u043B \xAB\u041F\u043E\u043B\u0435\u0437\u043D\u044B\u0435 \u0441\u0442\u0430\u0442\u044C\u0438\xBB "),
              (openBlock(), createBlock("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "25",
                height: "13",
                viewBox: "0 0 25 13",
                fill: "none"
              }, [
                createVNode("path", {
                  d: "M25 6.5L-5.68248e-07 13L9.7619 6.5L0 -1.09278e-06L25 6.5Z",
                  fill: "#064848"
                })
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/articles/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=_id_.fe94ca2a.js.map
