import{y as B,a as g,o as s,b as c,e as t,f as d,u as m,s as y,k as V,z as A,d as N,_ as U,w as $,F as u,r as k,t as h,i as b,p as x,h as S,c as L,q as C,A as O}from"./entry.538b082e.js";import{u as P,_ as D}from"./articlesStore.2db7a8fe.js";import{S as z,a as R,N as j}from"./navigation.min.ae30c230.js";import{u as T}from"./usefulStore.d73d9bdc.js";const M=B("popupStore",{state:()=>({isOpen:!1}),getters:{getIsOpen(){return this.isOpen}},actions:{setIsOpen(){this.isOpen=!this.isOpen}}});const Z=N(()=>U(()=>import("./SvgClosePopup.7a1433c2.js"),["./SvgClosePopup.7a1433c2.js","./entry.538b082e.js","./entry.c4a2fce1.css"],import.meta.url).then(e=>e.default||e)),q={class:"popup"},G={__name:"ElementsPopup",setup(e){const n=M();return(o,a)=>{const f=Z;return s(),c("div",{class:V(["overlay-popup",{active:m(n).getIsOpen}]),onClick:a[0]||(a[0]=A((...p)=>m(n).setIsOpen&&m(n).setIsOpen(...p),["self"]))},[t("div",q,[d(f,{class:"close-popup",onClick:m(n).setIsOpen},null,8,["onClick"]),t("div",null,[y(o.$slots,"default",{},void 0,!0)])])],2)}}},W=g(G,[["__scopeId","data-v-d13d0cc0"]]);const Y={props:{link:{type:String,default:""}},data(){return{width:window.innerWidth}}},H=["src"];function J(e,n,o,a,f,p){return s(),c("img",{src:"http://95.163.236.196:1337"+o.link,alt:"\u041F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0430"},null,8,H)}const K=g(Y,[["render",J],["__scopeId","data-v-ae904c20"]]);const Q={props:{link:{type:String,default:"#"},isLink:{type:Boolean,default:"true"}}},X=["href"],ee=["href"];function te(e,n,o,a,f,p){return o.isLink?(s(),c("a",{key:0,href:o.link,class:"button-primary"},[y(e.$slots,"default",{},void 0,!0)],8,X)):(s(),c("div",{key:1,href:o.link,class:"button-primary"},[y(e.$slots,"default",{},void 0,!0)],8,ee))}const E=g(Q,[["render",te],["__scopeId","data-v-ceb1bbe8"]]);const F=e=>(x("data-v-a8ecd6cf"),e=e(),S(),e),se={class:"popup-content"},ne=F(()=>t("h3",null,"\u0412\u044B \u0443\u0437\u043D\u0430\u0435\u0442\u0435:",-1)),oe={class:"wrapper-card"},ae=F(()=>t("section",{class:"border"},null,-1)),ce={class:"img-card-wrapper"},_e={class:"content"},re={class:"title-card"},le=["onClick"],ie={props:{data:{type:Array,default:null}},data(){return{isActive:!1,indexForPopup:0}}},de=Object.assign(ie,{__name:"BlocksCard",setup(e){const n=M();return(o,a)=>{const f=W,p=K,i=E;return s(),c(u,null,[d(f,null,{default:$(()=>{var r,_,l;return[t("div",se,[ne,t("ul",null,[(s(!0),c(u,null,k((l=(_=(r=e.data[o.indexForPopup])==null?void 0:r.popupProgram)==null?void 0:_.About)==null?void 0:l.split("\u2014").slice(1,-1),v=>(s(),c("li",null,[t("p",null,h(v),1)]))),256))])])]}),_:1}),(s(!0),c(u,null,k(e.data,(r,_)=>(s(),c("div",oe,[ae,t("div",ce,[d(p,{link:r.image.data.attributes.url},null,8,["link"])]),t("div",_e,[t("h2",null,h(r.heading),1),t("p",re,h(r==null?void 0:r.text),1),t("button",{onClick:[a[0]||(a[0]=(...l)=>{var v,w;return((v=m(n))==null?void 0:v.setIsOpen)&&((w=m(n))==null?void 0:w.setIsOpen(...l))}),l=>o.indexForPopup=_],class:"details"},"\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435",8,le),d(i,{isLink:!0},{default:$(()=>[b("\u0421\u043A\u0430\u0447\u0430\u0442\u044C \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u043E")]),_:1})])]))),256))],64)}}}),pe=g(de,[["__scopeId","data-v-a8ecd6cf"]]),ue={__name:"BlocksArticlesCards",props:{data:Array},setup(e){return(n,o)=>{const a=pe;return s(),L(a,{data:e.data},null,8,["data"])}}};const he={data(){return{scrollSava:null}},methods:{saveScroll(){console.log(window)}},setup(){const e=P();return e.fetchDataCardMedia(),console.log(e.fetchDataCardMedia()),{store:e}}},fe=e=>(x("data-v-cbf7d898"),e=e(),S(),e),ve=fe(()=>t("h2",{id:"mediaArticles"},"\u0421\u0442\u0430\u0442\u044C\u0438 \u0432 \u0421\u041C\u0418",-1)),me={class:"wrapper-card"},ge={class:"card"},we=["src"],$e={class:"heading-card"},ke={class:"title-card"};function xe(e,n,o,a,f,p){const i=D,r=E;return s(),c(u,null,[ve,t("div",me,[(s(!0),c(u,null,k(a.store.geDataCardMedia,_=>{var l,v,w;return s(),c("div",ge,[t("img",{src:"http://95.163.236.196:1337"+((w=(v=(l=_==null?void 0:_.image)==null?void 0:l.data[0])==null?void 0:v.attributes)==null?void 0:w.url)},null,8,we),t("h3",$e,h(_.heading),1),t("p",ke,h(_.title),1),d(i,{href:_.link,class:"btnRead"},null,8,["href"])])}),256))]),d(r,{class:"btnFull",isLink:!1,onClick:a.store.setIsFullShow},{default:$(()=>[a.store.isFullShow?(s(),c(u,{key:0},[b("\u0421\u043A\u0440\u044B\u0442\u044C")],64)):(s(),c(u,{key:1},[b("\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u0432\u0441\u0435")],64))]),_:1},8,["onClick"])],64)}const Se=g(he,[["render",xe],["__scopeId","data-v-cbf7d898"]]),be=B("swiperArticlesStore ",{state:()=>({dataSwiper:[]}),getters:{getIsOpen(){return this.isOpen},getDataSlider(){return this.dataSwiper}},actions:{setIsOpen(){this.isOpen=!this.isOpen},async fetchSliderData(){const n=await(await fetch("http://95.163.236.196:1337/api/slider-articles?populate=*")).json();this.dataSwiper=n.data.map(o=>o.attributes)}}});const ye={components:{Swiper:z,SwiperSlide:R},setup(){const e=be();e.fetchSliderData();const n=C(null),o=C(null);return{prev:n,next:o,store:e,modules:[j]}}},I=e=>(x("data-v-62f39f30"),e=e(),S(),e),Ie=I(()=>t("h2",{class:"heading"},"\u041D\u0430\u0443\u0447\u043D\u044B\u0435 \u0441\u0442\u0430\u0442\u044C\u0438",-1)),Ce={class:"swiper-container"},Oe={class:"slide-card"},Be={class:"year"},Ae={class:"title"},Le={ref:"prev",class:"swiper-button-prev nav-btn"},Pe=I(()=>t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"25",height:"13",viewBox:"0 0 25 13",fill:"yellow"},[t("path",{d:"M25 6.5L-5.68248e-07 13L9.7619 6.5L0 -1.09278e-06L25 6.5Z",fill:"#fff"})],-1)),De=[Pe],Te={ref:"next",class:"swiper-button-next nav-btn"},Me=I(()=>t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"25",height:"13",viewBox:"0 0 25 13",fill:"red"},[t("path",{d:"M25 6.5L-5.68248e-07 13L9.7619 6.5L0 -1.09278e-06L25 6.5Z",fill:"#fff"})],-1)),Ee=[Me];function Fe(e,n,o,a,f,p){const i=D,r=O("swiper-slide"),_=O("swiper");return s(),c(u,null,[Ie,t("div",Ce,[d(_,{class:"swiper",modules:a.modules,"slides-per-view":3,"space-between":40,navigation:{prevEl:a.prev,nextEl:a.next},breakpoints:{1281:{slidesPerView:3,spaceBetween:30},500:{slidesPerView:2,spaceBetween:20},0:{slidesPerView:1,spaceBetween:20}}},{default:$(()=>[(s(!0),c(u,null,k(a.store.dataSwiper,l=>(s(),L(r,{class:"slide"},{default:$(()=>[t("div",Oe,[t("p",Be,h(l.year),1),t("h2",null,h(l.heading),1),t("p",Ae,h(l.author),1),d(i,{href:l.link,class:"btnRead"},null,8,["href"])])]),_:2},1024))),256))]),_:1},8,["modules","navigation"]),t("div",Le,De,512),t("div",Te,Ee,512)])],64)}const Ve=g(ye,[["render",Fe],["__scopeId","data-v-62f39f30"]]);const Ne={data(){return{scrollTo:null}},setup(){const e=T();return e.fetchUsefulData(),{store:e}},beforeMount(){sessionStorage.getItem("setSroll")&&(this.scrollTo=Number(sessionStorage.getItem("setSroll")),sessionStorage.clear())},mounted(){this.scrollTo&&setTimeout(()=>{window.scrollTo(0,this.scrollTo)})},methods:{goTo(e,n){sessionStorage.setItem("setSroll",window.scrollY),this.store.setIndex(n),this.$router.push("/articles/"+e)}}},Ue=e=>(x("data-v-ee064fe6"),e=e(),S(),e),ze=Ue(()=>t("h2",{class:"heading usefulMedia"},"\u041F\u043E\u043B\u0435\u0437\u043D\u044B\u0435 \u0441\u0442\u0430\u0442\u044C\u0438",-1)),Re={class:"wrapper"},je={class:"cardArticles"},Ze=["src"],qe=["onClick","href"];function Ge(e,n,o,a,f,p){return s(),c(u,null,[ze,t("div",Re,[(s(!0),c(u,null,k(a.store.getUsefulData,(i,r)=>{var _,l;return s(),c("div",je,[t("img",{src:`http://95.163.236.196:1337${(l=(_=i.image)==null?void 0:_.data[0].attributes)==null?void 0:l.url}`},null,8,Ze),t("h2",null,h(i.heading),1),t("p",null,h(i.title),1),t("a",{onClick:A(v=>p.goTo(i.heading,r),["prevent"]),href:i.href},"\u0427\u0438\u0442\u0430\u0442\u044C \u0441\u0442\u0430\u0442\u044C\u044E",8,qe)])}),256))])],64)}const We=g(Ne,[["render",Ge],["__scopeId","data-v-ee064fe6"]]);const Ye=e=>(x("data-v-68939f3c"),e=e(),S(),e),He={class:"articles-page section-container"},Je=Ye(()=>t("h1",{class:"articles-page__title"},"\u041F\u043E\u043B\u0435\u0437\u043D\u044B\u0435 \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u044B \u0438 \u0441\u0442\u0430\u0442\u044C\u0438",-1)),Ke={__name:"index",setup(e){const n=T(),o=P();return o.fetchDataCard(),(a,f)=>{const p=ue,i=Se,r=Ve,_=We;return s(),c("div",He,[Je,d(p,{data:m(o).getDataCard},null,8,["data"]),d(i),d(r),d(_),b(" "+h(m(n).point),1)])}}},st=g(Ke,[["__scopeId","data-v-68939f3c"]]);export{st as default};