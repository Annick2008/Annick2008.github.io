import{z as d,o as r,b as o,i as l,e as a,x as f,B as m,g as i,f as n}from"./modules/vue-hAQxPKLI.js";import{u as p}from"./slidev/context-D-8oQ6yZ.js";import{_ as g}from"./props-DpX8Wr2m.js";const v={class:"customTitleRow"},$={key:1},z={__name:"default",props:{...g,class:String,cols:String},setup(s){const{$slidev:c,$nav:h,$clicksContext:k,$clicks:C,$page:S,$renderContext:w,$frontmatter:y}=p(),t=s,u=d(()=>{if(!t.cols)return null;switch(t.cols){case"1-1":return"grid-cols-2";case"1-2":return"grid-cols-[1fr,2fr]";case"2-1":return"grid-cols-[2fr,1fr]";default:return t.cols}});return(e,_)=>(r(),o("div",{class:l(["slidev-layout grid gap-y-3 gap-x-5 default",[e.titleRow?"grid-rows-[60px,1fr]":null,u.value]])},[e.titleRow?(r(),o("div",{key:0,class:l(s.cols?"col-span-2":null)},[a("h1",v,f(m(c).nav.currentRoute.meta.title),1)],2)):i("v-if",!0),a("div",null,[n(e.$slots,"default")]),s.cols?(r(),o("div",$,[n(e.$slots,"right")])):i("v-if",!0)],2))}};export{z as _};
