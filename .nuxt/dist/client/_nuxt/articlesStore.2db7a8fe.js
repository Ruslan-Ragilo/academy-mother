import{a as o,o as r,b as i,i as d,p as c,h as l,e as s,y as n}from"./entry.538b082e.js";const h={props:{href:{type:String,default:"#"}}},p=t=>(c("data-v-2107b9e5"),t=t(),l(),t),_=["href"],u=p(()=>s("svg",{xmlns:"http://www.w3.org/2000/svg",width:"25",height:"13",viewBox:"0 0 25 13",fill:"none"},[s("path",{d:"M25 6.5L-5.68248e-07 13L9.7619 6.5L0 -1.09278e-06L25 6.5Z",fill:"#064848"})],-1));function f(t,a,e,w,S,g){return r(),i("a",{target:"_blank",href:e.href},[d(" \u0427\u0438\u0442\u0430\u0442\u044C \u0441\u0442\u0430\u0442\u044C\u044E "),u],8,_)}const C=o(h,[["render",f],["__scopeId","data-v-2107b9e5"]]),x=n("articlesStore",{state:()=>({scroll:null,isFullShow:!1,dataCard:[],dataCardMedia:[]}),getters:{geDataCardMedia(){return this.isFullShow?(this.scroll=window.scrollY,this.dataCardMedia):(window.scrollTo(0,this.scroll),this.dataCardMedia.filter((t,a)=>a<4))},getDataCard(){return this.dataCard}},actions:{setIsFullShow(){this.isFullShow=!this.isFullShow},async fetchDataCardMedia(){const a=await(await fetch("http://95.163.236.196:1337/api/articles-medias?populate=*")).json();this.dataCardMedia=a.data.map(e=>e.attributes)},async fetchDataCard(){const a=await(await fetch("http://95.163.236.196:1337/api/programs?populate=*")).json();this.dataCard=a.data.map(e=>e.attributes)}}});export{C as _,x as u};
