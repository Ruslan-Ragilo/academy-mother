import{a as r,q as d,o as l,b as a,e as t,t as i,k as c,s as p,v as u}from"./entry.538b082e.js";const b={props:{title:{type:String,default:"Title"}},setup(){const e=d(!1);function o(){e.value=!e.value}return{isCollapsed:e,switchState:o}}},k={class:"collapse-block"},f={class:"collapse-block__title"},v={key:0,class:"collapse-block__content"};function m(e,o,n,s,h,C){return l(),a("div",k,[t("div",{class:c({"collapse-block__header":!0,"collapse-block__header_opened":s.isCollapsed}),onClick:o[0]||(o[0]=(..._)=>s.switchState&&s.switchState(..._))},[t("h4",f,i(n.title),1),t("div",{class:c({"collapse-block__close-cross-button":!0,"collapse-block__close-cross-button_opened":s.isCollapsed})},null,2)],2),s.isCollapsed?(l(),a("div",v,[p(e.$slots,"default",{},void 0,!0)])):u("",!0)])}const y=r(b,[["render",m],["__scopeId","data-v-312775eb"]]);export{y as _};
