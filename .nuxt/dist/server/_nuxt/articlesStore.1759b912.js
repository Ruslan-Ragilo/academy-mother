import { useSSRContext, mergeProps } from "vue";
import { ssrRenderAttrs } from "vue/server-renderer";
import { _ as _export_sfc, d as defineStore } from "../server.mjs";
const ElementsReadArticles_vue_vue_type_style_index_0_scoped_2107b9e5_lang = "";
const _sfc_main = {
  props: {
    href: {
      type: String,
      default: "#"
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<a${ssrRenderAttrs(mergeProps({
    target: "_blank",
    href: $props.href
  }, _attrs))} data-v-2107b9e5> \u0427\u0438\u0442\u0430\u0442\u044C \u0441\u0442\u0430\u0442\u044C\u044E <svg xmlns="http://www.w3.org/2000/svg" width="25" height="13" viewBox="0 0 25 13" fill="none" data-v-2107b9e5><path d="M25 6.5L-5.68248e-07 13L9.7619 6.5L0 -1.09278e-06L25 6.5Z" fill="#064848" data-v-2107b9e5></path></svg></a>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/elements/ElementsReadArticles.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-2107b9e5"]]);
const useArticlesStore = defineStore("articlesStore", {
  state: () => ({
    scroll: null,
    isFullShow: false,
    dataCard: [],
    dataCardMedia: []
  }),
  getters: {
    geDataCardMedia() {
      if (!this.isFullShow) {
        window.scrollTo(0, this.scroll);
        return this.dataCardMedia.filter((_, i) => i < 4);
      } else {
        this.scroll = window.scrollY;
        return this.dataCardMedia;
      }
    },
    getDataCard() {
      return this.dataCard;
    }
  },
  actions: {
    setIsFullShow() {
      this.isFullShow = !this.isFullShow;
    },
    async fetchDataCardMedia() {
      const data = await fetch("http://95.163.236.196:1337/api/articles-medias?populate=*");
      const res = await data.json();
      this.dataCardMedia = res.data.map((el) => el.attributes);
    },
    async fetchDataCard() {
      const data = await fetch("http://95.163.236.196:1337/api/programs?populate=*");
      const res = await data.json();
      this.dataCard = res.data.map((el) => el.attributes);
    }
  }
});
export {
  __nuxt_component_2 as _,
  useArticlesStore as u
};
//# sourceMappingURL=articlesStore.1759b912.js.map
