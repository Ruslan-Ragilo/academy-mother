import{a as d,q as i,o as l,b as a,e as t,t as r,k as c,s as p,v as u}from"./entry.538b082e.js";const f={props:{title:{type:String,default:"Title"}},setup(){const e=i(!1);function o(){e.value=!e.value}return{isCollapsed:e,switchState:o}}},k={class:"collapse-block"},b={class:"collapse-block__title"},v={key:0,class:"collapse-block__content"};function m(e,o,_,s,h,C){return l(),a("div",k,[t("div",{class:c({"collapse-block__header":!0,"collapse-block__header_opened":s.isCollapsed}),onClick:o[0]||(o[0]=(...n)=>s.switchState&&s.switchState(...n))},[t("h4",b,r(_.title),1),t("div",{class:c({"collapse-block__close-cross-button":!0,"collapse-block__close-cross-button_opened":s.isCollapsed})},null,2)],2),s.isCollapsed?(l(),a("div",v,[p(e.$slots,"default",{},void 0,!0)])):u("",!0)])}const y=d(f,[["render",m],["__scopeId","data-v-9d09928f"]]);export{y as _};
