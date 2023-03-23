import{a as w,o as l,b as r,t as m,e as s,y as B,H as T,f as h,w as S,F as f,r as y,u as v,c as b,v as $,q as u,K as H,E as V,k as x,C as F,A as M,p as A,h as P}from"./entry.538b082e.js";import{f as D}from"./SvgOvalIcon.d4d8e5d2.js";import{_ as j}from"./ElementsIconedItem.a964a4ae.js";import{a as R,S as L,N as E}from"./navigation.min.ae30c230.js";const U={props:{title:{type:String,default:"title"}}},Z={class:"button-primary"};function q(t,n,e,o,c,_){return l(),r("div",Z,m(e.title),1)}const Ge=w(U,[["render",q],["__scopeId","data-v-46aab454"]]);const z={props:{title:{type:String,default:""},text:{type:String,default:""},photo:{type:String,default:""},modalHeading:{type:String,default:""},modalTitle:{type:String,default:""}}},G={class:"swiper-item"},K={class:"swiper-item__image-box"},Y=["src"],J={class:"swiper-item__title"},Q={class:"swiper-item__text"};function W(t,n,e,o,c,_){return l(),r("div",G,[s("div",null,[s("div",K,[s("img",{class:"swiper-item__image",src:e.photo},null,8,Y)]),s("div",J,m(e.title),1),s("div",Q,m(e.text),1)]),s("div",{class:"swiper-item__link",onClick:n[0]||(n[0]=p=>t.$emit("openModal",{modalHeading:e.modalHeading,modalTitle:e.modalTitle}))}," \u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435 ")])}const X=w(z,[["render",W],["__scopeId","data-v-b04cb6ea"]]),ee=B("popupStore",{state:()=>({dataSliderComand:[]}),getters:{getSliderComand(){return this.dataSliderComand}},actions:{async fetchDataSliderComand(){const n=await(await fetch("http://95.163.236.196:1337/api/slider-comands?populate=*")).json();this.dataSliderComand=n.data.map(e=>e.attributes)}}});const te={class:"main-swiper"},se={class:"main-swiper__title"},oe={class:"main-swiper__text"},ne={class:"main-swiper__swiper-block"},ie={key:0,class:"main-swiper__modal"},le={class:"main-swiper__modal-window"},ae={class:"main-swiper__modal-title"},re={class:"main-swiper__modal-list"},de={class:"main-swiper__modal-item"},ce={components:{Swiper:L,SwiperSlide:R},props:{headingSlider:{type:String,default:""},titleSlider:{type:String,default:""}},setup(){const t=c=>{console.log(c)},n=()=>{console.log("slide change")},e=u(null),o=u(null);return{onSwiper:t,onSlideChange:n,prevCom:e,nextCom:o,modules:[E]}},data(){return{modalInfo:{},isModalOpened:!1}},methods:{openModal(t){console.log(t),this.modalInfo={...t},this.switchModal()},switchModal(){this.isModalOpened=!this.isModalOpened}}},_e=Object.assign(ce,{__name:"BlocksMainSwiper",setup(t){const n=ee();return T(()=>{console.log("mounted"),n.fetchDataSliderComand()}),(e,o)=>{var a,i;const c=D,_=j,p=X;return l(),r(f,null,[s("div",te,[h(c,{class:"main-swiper__heart"}),h(_,{class:"main-swiper__star"}),s("h1",se,m(t.headingSlider),1),s("div",oe,m(t.titleSlider),1),s("div",ne,[h(v(L),{modules:v(modules),navigation:{prevEl:v(prevCom),nextEl:v(nextCom)},"space-between":40,breakpoints:{1200:{slidesPerView:4},610:{slidesPerView:2},0:{slidesPerView:1}},class:"swiper",onSwiper:v(onSwiper),onSlideChange:v(onSlideChange)},{default:S(()=>[(l(!0),r(f,null,y(v(n).getSliderComand,(d,k)=>(l(),b(v(R),null,{default:S(()=>[(l(),b(p,{key:k,title:d.fullName,text:d.title,photo:"http://95.163.236.196:1337"+d.avatar.data.attributes.url,modalHeading:d.popupComand.title,modalTitle:d.popupComand.About,onOpenModal:e.openModal},null,8,["title","text","photo","modalHeading","modalTitle","onOpenModal"]))]),_:2},1024))),256))]),_:1},8,["modules","navigation","onSwiper","onSlideChange"])])]),e.isModalOpened?(l(),r("div",ie,[s("div",le,[s("div",{class:"main-swiper__close-cross-button",onClick:o[0]||(o[0]=(...d)=>e.switchModal&&e.switchModal(...d))}),s("h3",ae,m(e.modalInfo.modalHeading),1),s("ul",re,[(l(!0),r(f,null,y((i=(a=e.modalInfo)==null?void 0:a.modalTitle)==null?void 0:i.split("\u2014").slice(1,-1),d=>(l(),r("li",de,m(d),1))),256))])])])):$("",!0)],64)}}}),Ke=w(_e,[["__scopeId","data-v-69561f7f"]]),pe={},ue={width:"13",height:"10",viewBox:"0 0 13 10",fill:"none",xmlns:"http://www.w3.org/2000/svg"},me=s("path",{d:"M6.5 10L-7.94466e-08 -1.82822e-07L6.5 3.90476L13 9.53674e-07L6.5 10Z",fill:"#FEF8F2"},null,-1),ve=[me];function we(t,n){return l(),r("svg",ue,ve)}const N=w(pe,[["render",we]]);const he={components:{SvgArrowDownInput:N},props:{modelValue:{type:Object,default:()=>{}},items:{type:Array,default:()=>[]},label:{type:String,default:"\u0421\u0442\u0430\u0442\u0443\u0441"},showChoicesAmount:{type:Boolean,default:!0}},emits:["updateFilters"],setup(t,{emit:n}){const e=u(!1),o=u({});function c(){e.value=!e.value}function _(a){o.value=a,e.value=!1}const p=H(()=>o.value);return V(p,()=>{n("updateFilters",o.value)}),T(()=>{o.value=t.label}),{isOpened:e,switchSelect:c,inputValue:o,selectItem:_}}},fe={class:"custom-select"},ge={class:"custom-select__inner-text bold"},Se={key:0,class:x({"custom-select__list":!0})},ye=["onClick"];function be(t,n,e,o,c,_){const p=N;return l(),r("div",fe,[s("div",{class:x({"custom-select__button":!0,"custom-select__button_opened":o.isOpened}),onClick:n[0]||(n[0]=a=>o.switchSelect())},[s("div",null,[s("span",ge,m(o.inputValue.label),1)]),h(p,{class:x({"custom-select__arrow-icon":!0,"custom-select__arrow-icon_opened":o.isOpened})},null,8,["class"])],2),o.isOpened?(l(),r("div",Se,[s("div",null,[(l(!0),r(f,null,y(e.items,a=>(l(),r("div",{class:"custom-select__list-item",onClick:i=>o.selectItem(a)},m(a==null?void 0:a.label),9,ye))),256))])])):$("",!0)])}const xe=w(he,[["render",be],["__scopeId","data-v-14fa4bc1"]]),ke=B("reviewsSlider",{state:()=>({dataReviewsSlider:[],typeReviews:""}),getters:{getReviewsSlider(){return this.typeReviews?(console.log(this.dataReviewsSlider.filter(t=>t.typeReviews===this.typeReviews)),this.dataReviewsSlider.filter(t=>t.typeReviews===this.typeReviews)):this.dataReviewsSlider}},actions:{async fetchDataReviewsSlider(){const n=await(await fetch("http://95.163.236.196:1337/api/reviews-sliders")).json();this.dataReviewsSlider=n.data.map(e=>e.attributes)},filterReviews(t=""){this.typeReviews=t}}});const I=[{key:"",label:"\u041E\u0442\u0437\u044B\u0432\u044B \u0428\u043A\u043E\u043B\u0430 \u0431\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0445"},{key:"repro",label:"\u041F\u0440\u043E\u0435\u043A\u0442 \xAB\u0420\u0435\u043F\u0440\u043E\xBB"},{key:"meno",label:"\u041F\u0440\u043E\u0435\u043A\u0442 \xAB\u041C\u0435\u043D\u043E\xBB"},{key:"consumptionGuide",label:"\u0413\u0430\u0439\u0434 \u043F\u043E \u043F\u0438\u0442\u0430\u043D\u0438\u044E"},{key:"webinars",label:"\u0412\u0435\u0431\u0438\u043D\u0430\u0440\u044B \u043F\u043E \u043F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u043A\u0435"},{key:"webinarsAnalise",label:"\u0412\u0435\u0431\u0438\u043D\u0430\u0440 \xAB\u0410\u043D\u0430\u043B\u0438\u0437\u044B \u0438 \u043E\u0431\u0441\u043B\u0435\u0434\u043E\u0432\u0430\u043D\u0438\u044F \u0432\u043E \u0432\u0440\u0435\u043C\u044F \u0431\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u043E\u0441\u0442\u0438\xBB"},{key:"authorsProgram",label:"\u0410\u0432\u0442\u043E\u0440\u0441\u043A\u0430\u044F \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0430 \u0432\u043E\u0441\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u044F \u043F\u043E\u0441\u043B\u0435 \u0431\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u043E\u0441\u0442\u0438"},{key:"venera",label:"\u041F\u0440\u043E\u0435\u043A\u0442 \xAB\u0420\u043E\u0436\u0434\u0435\u043D\u0438\u0435 \u0412\u0435\u043D\u0435\u0440\u044B\xBB"}];let C=u(null);const Ce={components:{Swiper:L,SwiperSlide:R},props:{reviewsIsShow:{type:Boolean,default:!1},heading:{type:String,default:""}},methods:{showDetails(t){if(t.currentTarget.parentNode.classList.contains("active")){window.scrollTo(0,this.posScroll),t.currentTarget.parentNode.classList.remove("active");return}C.value&&C.value.classList.remove("active"),C.value=t.currentTarget.parentNode,t.currentTarget.parentNode.classList.add("active"),this.posScroll=window.scrollY}},setup(){const t=ke(),n=u(I[0]),e=u(null),o=u(null);t.fetchDataReviewsSlider();let c=0;e.value=[...t.getReviewsSlider],V(()=>e.value.length,()=>{e.value.forEach(i=>{i.nextSibling.classList.remove("_active"),i.offsetHeight>254&&i.nextSibling.classList.add("_active")})}),F(()=>{o.value.childNodes[0].children[0].style.transform="",e!=null&&e.value&&(e==null||e.value.forEach((i,d)=>{i.nextSibling.classList.remove("_active"),i.offsetHeight>254&&i.nextSibling.classList.add("_active")}))});function _(i){t.filterReviews(i==null?void 0:i.key),n.value=i}const p=u(null),a=u(null);return{heightDetails:e,optionsArray:I,update:_,posScroll:c,store:t,currSelected:n,wrapperSlider:o,modules:[E],prevRev:p,nextRev:a}}},g=t=>(A("data-v-560306e2"),t=t(),P(),t),$e={class:"reviews-block"},Re={class:"reviews-block__title"},Le={class:"wrappernavSel"},Me={class:"wrapperNav"},Ie={ref:"prevRev",class:"swiper-button-prev nav-btn"},Be=g(()=>s("svg",{xmlns:"http://www.w3.org/2000/svg",width:"25",height:"13",viewBox:"0 0 25 13",fill:"yellow"},[s("path",{d:"M25 6.5L-5.68248e-07 13L9.7619 6.5L0 -1.09278e-06L25 6.5Z",fill:"#fff"})],-1)),Te=[Be],Ve={ref:"nextRev",class:"swiper-button-next nav-btn"},Ee=g(()=>s("svg",{xmlns:"http://www.w3.org/2000/svg",width:"25",height:"13",viewBox:"0 0 25 13",fill:"red"},[s("path",{d:"M25 6.5L-5.68248e-07 13L9.7619 6.5L0 -1.09278e-06L25 6.5Z",fill:"#fff"})],-1)),Ne=[Ee],Oe={ref:"wrapperSlider",class:"swiper"},He=["innerHTML"],Fe=g(()=>s("div",null,null,-1)),Ae=g(()=>s("div",null,null,-1)),Pe=g(()=>s("div",null,null,-1)),De=[Fe,Ae,Pe];function je(t,n,e,o,c,_){const p=xe,a=M("swiper-slide"),i=M("swiper");return l(),r("div",$e,[s("h3",Re,m(e.heading),1),s("div",Le,[e.reviewsIsShow?(l(),b(p,{key:0,class:"reviews-block__select",label:o.currSelected,items:o.optionsArray,onUpdateFilters:o.update},null,8,["label","items","onUpdateFilters"])):$("",!0),s("div",Me,[s("div",Ie,Te,512),s("div",Ve,Ne,512)])]),s("div",Oe,[h(i,{modules:o.modules,navigation:{prevEl:o.prevRev,nextEl:o.nextRev},breakpoints:{1281:{slidesPerView:2,spaceBetween:40},500:{slidesPerView:1,spaceBetween:20},0:{slidesPerView:2,spaceBetween:20}},class:"slider"},{default:S(()=>[(l(!0),r(f,null,y(o.store.getReviewsSlider,(d,k)=>(l(),b(a,{key:k,class:x({itemSlider:!0,active:d.isShow})},{default:S(()=>[s("p",{innerHTML:d.content,ref_for:!0,ref:"heightDetails"},null,8,He),s("div",{onClick:n[0]||(n[0]=O=>_.showDetails(O,t.window)),class:"details"},De)]),_:2},1032,["class"]))),128))]),_:1},8,["modules","navigation"])],512)])}const Ye=w(Ce,[["render",je],["__scopeId","data-v-560306e2"]]);export{Ge as _,Ke as a,Ye as b};