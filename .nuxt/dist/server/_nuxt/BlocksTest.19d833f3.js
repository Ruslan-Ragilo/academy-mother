import { _ as __nuxt_component_0 } from "./ElementsModalsKeeper.257a82fa.js";
import { _ as _export_sfc, a as __nuxt_component_0$1 } from "../server.mjs";
import { useSSRContext, ref, computed, withCtx, openBlock, createBlock, createVNode, toDisplayString, Fragment, renderList, withDirectives, vModelRadio, createTextVNode } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseEqual } from "vue/server-renderer";
const BlocksTest_vue_vue_type_style_index_0_scoped_995a8916_lang = "";
const questions = [
  {
    id: 1,
    question: "\u0412\u044B \u0432\u0440\u0430\u0447 \u0438 \u0445\u043E\u0442\u0438\u0442\u0435 \u043F\u043E\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C\n\u043F\u0440\u043E\u0435\u043A\u0442\u044B \u043D\u0430 \u043F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0435\n\u0442\u0435\u043C\u044B?",
    answers: [
      {
        id: 1,
        label: "\u0414\u0430",
        result: 1
      },
      {
        id: 2,
        label: "\u041D\u0435\u0442",
        redirectTo: 2
      }
    ]
  },
  {
    id: 2,
    question: "\u0421\u041A\u041E\u041B\u042C\u041A\u041E \u0412\u0410\u041C \u041B\u0415\u0422?",
    answers: [
      {
        id: 1,
        label: "18-30 \u043B\u0435\u0442",
        redirectTo: 3
      },
      {
        id: 2,
        label: "31-35 \u043B\u0435\u0442",
        redirectTo: 3
      },
      {
        id: 3,
        label: "36-40 \u043B\u0435\u0442",
        redirectTo: 3
      },
      {
        id: 4,
        label: "41-55 \u043B\u0435\u0442",
        redirectTo: 7
      },
      {
        id: 5,
        label: "56 \u043B\u0435\u0442 \u0438 \u0441\u0442\u0430\u0440\u0448\u0435",
        result: 9
      }
    ]
  },
  {
    id: 3,
    question: "\u0412\u044B \u0431\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u044B?",
    answers: [
      {
        id: 1,
        label: "\u0414\u0430",
        result: 2
      },
      {
        id: 2,
        label: "\u041D\u0435\u0442",
        redirectTo: 4
      }
    ]
  },
  {
    id: 4,
    question: "\u041F\u043B\u0430\u043D\u0438\u0440\u0443\u0435\u0442\u0435 \u043B\u0438 \u0432\u044B \u0431\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u043E\u0441\u0442\u044C?",
    answers: [
      {
        id: 1,
        label: "\u0414\u0430",
        redirectTo: 5
      },
      {
        id: 2,
        label: "\u041D\u0435\u0442",
        result: 3
      }
    ]
  },
  {
    id: 5,
    question: "\u0412\u044B \u043F\u044B\u0442\u0430\u0435\u0442\u0435\u0441\u044C \u0437\u0430\u0431\u0435\u0440\u0435\u043C\u0435\u043D\u0435\u0442\u044C \u0431\u043E\u043B\u0435\u0435 \u0433\u043E\u0434\u0430?",
    answers: [
      {
        id: 1,
        label: "\u0414\u0430",
        result: 4
      },
      {
        id: 2,
        label: "\u041D\u0435\u0442",
        redirectTo: 6
      }
    ]
  },
  {
    id: 6,
    question: "\u0423 \u0432\u0430\u0441 \u0431\u044B\u043B\u0438 \u043F\u043E\u0442\u0435\u0440\u0438 \u0431\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u043E\u0441\u0442\u0438 (\n\u043D\u0435\u0432\u044B\u043D\u0430\u0448\u0438\u0432\u0430\u043D\u0438\u0435) \u0438\u043B\u0438 \u0431\u0438\u043E\u0445\u0438\u043C\u0438\u0447\u0435\u0441\u043A\u0438\u0435\n\u0431\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u043E\u0441\u0442\u0438?",
    answers: [
      {
        id: 1,
        label: "\u0414\u0430",
        result: 5
      },
      {
        id: 2,
        label: "\u041D\u0435\u0442",
        result: 6
      }
    ]
  },
  {
    id: 7,
    question: "\u0412\u044B \u0431\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u044B?",
    answers: [
      {
        id: 1,
        label: "\u0414\u0430",
        result: 2
      },
      {
        id: 2,
        label: "\u041D\u0435\u0442",
        redirectTo: 8
      }
    ]
  },
  {
    id: 8,
    question: "\u041F\u043B\u0430\u043D\u0438\u0440\u0443\u0435\u0442\u0435 \u043B\u0438 \u0432\u044B \u0431\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u043E\u0441\u0442\u044C?",
    answers: [
      {
        id: 1,
        label: "\u0414\u0430",
        redirectTo: 5
      },
      {
        id: 2,
        label: "\u041D\u0435\u0442",
        redirectTo: 9
      }
    ]
  },
  {
    id: 9,
    question: "\u0415\u0441\u0442\u044C \u043B\u0438 \u0443 \u0432\u0430\u0441 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0435 \u0441\u0438\u043C\u043F\u0442\u043E\u043C\u044B:\n\u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0435 \u043C\u0435\u043D\u0441\u0442\u0440\u0443\u0430\u043B\u044C\u043D\u043E\u0433\u043E \u0446\u0438\u043A\u043B\u0430 (\n\u0443\u0434\u043B\u0438\u043D\u0435\u043D\u0438\u0435, \u0443\u043A\u043E\u0440\u043E\u0447\u0435\u043D\u0438\u0435, \u043D\u0435\u0441\u0442\u0430\u0431\u0438\u043B\u044C\u043D\u043E\u0441\u0442\u044C,\n\u0432\u044B\u043F\u0430\u0434\u0435\u043D\u0438\u0435 \u0446\u0438\u043A\u043B\u0430), \u043D\u043E\u0447\u043D\u0430\u044F \u043F\u043E\u0442\u043B\u0438\u0432\u043E\u0441\u0442\u044C,\n\u043F\u0440\u0438\u043B\u0438\u0432\u044B \u0436\u0430\u0440\u0430, \u043D\u043E\u0447\u043D\u044B\u0435 \u0432\u0441\u0442\u0430\u0432\u0430\u043D\u0438\u044F \u0432\n\u0442\u0443\u0430\u043B\u0435\u0442, \u043D\u0430\u0440\u0443\u0448\u0435\u043D\u0438\u044F \u043C\u043E\u0447\u0435\u0438\u0441\u043F\u0443\u0441\u043A\u0430\u043D\u0438\u044F (\n\u043D\u0435\u0434\u0435\u0440\u0436\u0430\u043D\u0438\u0435), \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F \u043D\u0430\u0441\u0442\u0440\u043E\u0435\u043D\u0438\u044F,\n\u0442\u0440\u0435\u0432\u043E\u0436\u043D\u043E\u0441\u0442\u044C, \u0434\u0435\u043F\u0440\u0435\u0441\u0441\u0438\u044F, \u0441\u0443\u0445\u043E\u0441\u0442\u044C\n\u0441\u043B\u0438\u0437\u0438\u0441\u0442\u044B\u0445, \u0445\u0440\u043E\u043D\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u0443\u0441\u0442\u0430\u043B\u043E\u0441\u0442\u044C?",
    answers: [
      {
        id: 1,
        label: "\u0414\u0430",
        result: 7
      },
      {
        id: 2,
        label: "\u041D\u0435\u0442",
        result: 8
      }
    ]
  }
];
const results = [
  {
    id: 1,
    options: [
      {
        label: '\u0412\u0435\u0431\u0438\u043D\u0430\u0440 <a class="item-res" href="/webinars">\xAB\u0411\u0435\u0441\u043F\u043B\u043E\u0434\u0438\u0435. \u0426\u0435\u043B\u043E\u0441\u0442\u043D\u044B\u0439 \u0432\u0437\u0433\u043B\u044F\u0434 <br> \u043D\u0430 \u043F\u0440\u043E\u0431\u043B\u0435\u043C\u0443. \u041A\u0430\u043A \u043E\u043F\u0442\u0438\u043C\u0430\u043B\u044C\u043D\u043E \u0434\u043E\u0441\u0442\u0438\u0447\u044C <br> \u0440\u043E\u0434\u043E\u0432</a>'
      },
      {
        label: '\u0412\u0435\u0431\u0438\u043D\u0430\u0440 <a class="item-res" href="/webinars">\xAB\u0410\u0432\u0442\u043E\u0440\u0441\u043A\u0438\u0435 \u043F\u0440\u043E\u0442\u043E\u043A\u043E\u043B\u044B \u0432\u0435\u0434\u0435\u043D\u0438\u044F <br> \u0431\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u043E\u0441\u0442\u0438 \u0433\u0440\u0443\u043F\u043F \u0432\u044B\u0441\u043E\u043A\u043E\u0433\u043E \u0440\u0438\u0441\u043A\u0430. <br> \u041E\u0431\u043E\u0441\u043D\u043E\u0432\u0430\u043D\u043D\u044B\u0435 \u0438\u043D\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043B\u0438\u0437\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0435 <br> \u0441\u0442\u0440\u0430\u0442\u0435\u0433\u0438\u0438 \u0437\u0430 \u0440\u0430\u043C\u043A\u0430\u043C\u0438 \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043E\u0432\xBB</a>'
      },
      {
        label: '<a class="item-res" href="formedworkers">\u041F\u0410\u041A\u0415\u0422 \u0412\u0415\u0411\u0418\u041D\u0410\u0420\u041E\u0412 \u0414\u041B\u042F \u0412\u0420\u0410\u0427\u0415\u0419</a>'
      }
    ]
  },
  {
    id: 2,
    options: [
      {
        label: '<a class="item-res" href="/school">\u0428\u043A\u043E\u043B\u0430 \u0431\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0445</a>'
      },
      {
        label: '\u0413\u0430\u0439\u0434 <a class="item-res" href="/guides">"\u041E\u0420\u0417 \u043F\u0440\u0438 \u0431\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u043E\u0441\u0442\u0438"</a>'
      },
      {
        label: '\u0412\u0435\u0431\u0438\u043D\u0430\u0440 <a class="item-res" href="/webinars">"\u0410\u043D\u0430\u043B\u0438\u0437\u044B \u0438 \u043E\u0431\u0441\u043B\u0435\u0434\u043E\u0432\u0430\u043D\u0438\u044F \u0432\u043E<br> \u0432\u0440\u0435\u043C\u044F \u0431\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u043E\u0441\u0442\u0438"</a>'
      },
      {
        label: '\u0412\u0435\u0431\u0438\u043D\u0430\u0440 <a class="item-res" href="/webinars">"\u0413\u0421\u0414"</a>'
      },
      {
        label: '<a class="item-res" href="/guides">\u0413\u0430\u0439\u0434 \u043F\u043E \u043F\u0438\u0442\u0430\u043D\u0438\u044E</a>'
      }
    ]
  },
  {
    id: 3,
    options: [
      {
        label: '\u0412\u0415\u0411\u0418\u041D\u0410\u0420 <a class="item-res" href="/webinars">"\u041A\u041E\u041D\u0422\u0420\u0410\u0426\u0415\u041F\u0426\u0418\u042F"</a>'
      }
    ]
  },
  {
    id: 4,
    options: [
      {
        label: '\u0412\u0415\u0411\u0418\u041D\u0410\u0420 <a class="item-res" href="/webinars">"\u0415\u0421\u041B\u0418 \u0414\u041E\u041B\u0413\u041E \u041D\u0415 \u041D\u0410\u0421\u0422\u0423\u041F\u0410\u0415\u0422 <br> \u0411\u0415\u0420\u0415\u041C\u0415\u041D\u041D\u041E\u0421\u0422\u042C"</a><br>'
      },
      {
        label: '\u041F\u0420\u041E\u0415\u041A\u0422 <a class="item-res" href="/projects">"\u0420\u0415\u041F\u0420\u041E \u041E\u0416\u0418\u0412\u0418 \u042F\u0418\u0427\u041D\u0418\u041A\u0418</a>'
      }
    ]
  },
  {
    id: 5,
    options: [
      {
        label: '\u0412\u0415\u0411\u0418\u041D\u0410\u0420 <a class="item-res" href="/webinars">"\u0427\u0422\u041E \u0414\u0415\u041B\u0410\u0422\u042C, \u0415\u0421\u041B\u0418 \u0411\u042B\u041B\u0418 <br> \u041F\u041E\u0422\u0415\u0420\u0418"</a><br>'
      },
      {
        label: '\u041F\u0410\u041A\u0415\u0422 \u0412\u0415\u0411\u0418\u041D\u0410\u0420\u041E\u0412 <a class="item-res" href="/webinars">"\u041F\u041E\u0414\u0413\u041E\u0422\u041E\u0412\u041A\u0410 \u041A <br> \u0411\u0415\u0420\u0415\u041C\u0415\u041D\u041D\u041E\u0421\u0422\u0418"</a><br>'
      }
    ]
  },
  {
    id: 6,
    options: [
      {
        label: '\u041F\u0410\u041A\u0415\u0422 \u0412\u0415\u0411\u0418\u041D\u0410\u0420\u041E\u0412 <a class="item-res" href="/webinars">"\u041F\u041E\u0414\u0413\u041E\u0422\u041E\u0412\u041A\u0410 \u041A \u0411\u0415\u0420\u0415\u041C\u0415\u041D\u041D\u041E\u0421\u0422\u0418"</a>'
      }
    ]
  },
  {
    id: 7,
    options: [
      {
        label: '\u0412\u0415\u0411\u0418\u041D\u0410\u0420 <a class="item-res" href="/webinars">"\u041A\u041E\u041D\u0422\u0420\u0410\u0426\u0415\u041F\u0426\u0418\u042F"</a>'
      },
      {
        label: '\u041F\u0420\u041E\u0415\u041A\u0422 <a class="item-res" href="/projects">"\u041E\u0416\u0418\u0412\u0418 \u042F\u0418\u0427\u041D\u0418\u041A\u0418 - \u041C\u0415\u041D\u041E"</a>'
      }
    ]
  },
  {
    id: 8,
    options: [
      {
        label: '\u0412\u0415\u0411\u0418\u041D\u0410\u0420 <a class="item-res" href="/webinars">"\u041A\u041E\u041D\u0422\u0420\u0410\u0426\u0415\u041F\u0426\u0418\u042F"</a>'
      }
    ]
  },
  {
    id: 9,
    options: [
      {
        label: '<a class="item-res" href="/articles">\u0421\u0422\u0410\u0422\u042C\u0418 \u0421 \u0425\u0415\u0428\u0422\u0415\u0413\u041E\u041C \u041C\u0415\u041D\u041E\u041F\u0410\u0423\u0417\u0410</a>'
      }
    ]
  }
];
const _sfc_main = {
  props: {
    isOpened: {
      type: Boolean,
      default: true
    }
  },
  setup(props, { emit }) {
    const currentQuestion = ref(1);
    const picked = ref(null);
    const showResult = ref(null);
    const getCurrentQuestion = computed(() => {
      return questions.find((item) => item.id === currentQuestion.value);
    });
    const getResult = computed(() => {
      return results.find((item) => item.id === showResult.value);
    });
    function closePopup() {
      emit("close");
      currentQuestion.value = 1;
      showResult.value = null;
    }
    function nextStep() {
      var _a, _b, _c, _d;
      if ((_a = picked.value) == null ? void 0 : _a.redirectTo) {
        currentQuestion.value = (_b = picked.value) == null ? void 0 : _b.redirectTo;
      }
      if ((_c = picked.value) == null ? void 0 : _c.result) {
        showResult.value = (_d = picked.value) == null ? void 0 : _d.result;
      }
      picked.value = null;
    }
    return {
      currentQuestion,
      questions,
      results,
      picked,
      showResult,
      getResult,
      getCurrentQuestion,
      nextStep,
      closePopup
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_elements_modals_keeper = __nuxt_component_0;
  const _component_svg_arrow_right = __nuxt_component_0$1;
  if ($props.isOpened) {
    _push(`<div${ssrRenderAttrs(_attrs)} data-v-995a8916>`);
    _push(ssrRenderComponent(_component_elements_modals_keeper, {
      "is-modal-opened": $props.isOpened,
      onClose: ($event) => $setup.closePopup()
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        var _a, _b, _c, _d, _e, _f;
        if (_push2) {
          if ($setup.showResult === null) {
            _push2(`<div data-v-995a8916${_scopeId}><h2 class="modal-test__title" data-v-995a8916${_scopeId}>${ssrInterpolate((_a = $setup.getCurrentQuestion) == null ? void 0 : _a.question)}</h2><div class="modal-test__answers" data-v-995a8916${_scopeId}><!--[-->`);
            ssrRenderList((_b = $setup.getCurrentQuestion) == null ? void 0 : _b.answers, (answer) => {
              _push2(`<div class="modal-test__answer-item" data-v-995a8916${_scopeId}><input class="modal-test__input-radio"${ssrRenderAttr("id", answer == null ? void 0 : answer.id)} type="radio"${ssrRenderAttr("value", answer)}${ssrIncludeBooleanAttr(ssrLooseEqual($setup.picked, answer)) ? " checked" : ""} data-v-995a8916${_scopeId}><label class="modal-test__label"${ssrRenderAttr("for", answer == null ? void 0 : answer.id)} data-v-995a8916${_scopeId}>`);
              _push2(ssrRenderComponent(_component_svg_arrow_right, { class: "modal-test__label-arrow" }, null, _parent2, _scopeId));
              _push2(` ${ssrInterpolate(answer == null ? void 0 : answer.label)}</label></div>`);
            });
            _push2(`<!--]--></div><div class="modal-test__button" data-v-995a8916${_scopeId}> \u0414\u0430\u043B\u0435\u0435 `);
            _push2(ssrRenderComponent(_component_svg_arrow_right, { class: "modal-test__button-arrow" }, null, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            _push2(`<div data-v-995a8916${_scopeId}><h2 class="modal-test__title" data-v-995a8916${_scopeId}> \u041F\u043E\u0434\u0445\u043E\u0434\u044F\u0449\u0438\u0435 \u0432\u0430\u043C \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u044B: </h2><ul data-v-995a8916${_scopeId}><!--[-->`);
            ssrRenderList((_c = $setup.getResult) == null ? void 0 : _c.options, (option) => {
              _push2(`<li class="modal-test__option-item" data-v-995a8916${_scopeId}>${option.label}</li>`);
            });
            _push2(`<!--]--></ul></div>`);
          }
        } else {
          return [
            $setup.showResult === null ? (openBlock(), createBlock("div", { key: 0 }, [
              createVNode("h2", { class: "modal-test__title" }, toDisplayString((_d = $setup.getCurrentQuestion) == null ? void 0 : _d.question), 1),
              createVNode("div", { class: "modal-test__answers" }, [
                (openBlock(true), createBlock(Fragment, null, renderList((_e = $setup.getCurrentQuestion) == null ? void 0 : _e.answers, (answer) => {
                  return openBlock(), createBlock("div", { class: "modal-test__answer-item" }, [
                    withDirectives(createVNode("input", {
                      class: "modal-test__input-radio",
                      id: answer == null ? void 0 : answer.id,
                      type: "radio",
                      value: answer,
                      "onUpdate:modelValue": ($event) => $setup.picked = $event
                    }, null, 8, ["id", "value", "onUpdate:modelValue"]), [
                      [vModelRadio, $setup.picked]
                    ]),
                    createVNode("label", {
                      class: "modal-test__label",
                      for: answer == null ? void 0 : answer.id
                    }, [
                      createVNode(_component_svg_arrow_right, { class: "modal-test__label-arrow" }),
                      createTextVNode(" " + toDisplayString(answer == null ? void 0 : answer.label), 1)
                    ], 8, ["for"])
                  ]);
                }), 256))
              ]),
              createVNode("div", {
                class: "modal-test__button",
                onClick: ($event) => $setup.nextStep()
              }, [
                createTextVNode(" \u0414\u0430\u043B\u0435\u0435 "),
                createVNode(_component_svg_arrow_right, { class: "modal-test__button-arrow" })
              ], 8, ["onClick"])
            ])) : (openBlock(), createBlock("div", { key: 1 }, [
              createVNode("h2", { class: "modal-test__title" }, " \u041F\u043E\u0434\u0445\u043E\u0434\u044F\u0449\u0438\u0435 \u0432\u0430\u043C \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u044B: "),
              createVNode("ul", null, [
                (openBlock(true), createBlock(Fragment, null, renderList((_f = $setup.getResult) == null ? void 0 : _f.options, (option) => {
                  return openBlock(), createBlock("li", {
                    innerHTML: option.label,
                    class: "modal-test__option-item"
                  }, null, 8, ["innerHTML"]);
                }), 256))
              ])
            ]))
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/blocks/test/BlocksTest.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-995a8916"]]);
export {
  __nuxt_component_5 as _
};
//# sourceMappingURL=BlocksTest.19d833f3.js.map
