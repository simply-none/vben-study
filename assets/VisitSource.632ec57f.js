import{a as o,v as r,a7 as n,o as u,j as l,z as s,i as m,bm as d,k as f}from"./index.05b57da0.js";import{C as p}from"./index.877d76b1.js";import"./index.fbede925.js";/* empty css              */import{u as c}from"./useECharts.5a680028.js";import"./index.0853a919.js";import"./index.e4d5d044.js";import"./Col.988a4215.js";import"./useFlexGapSupport.3bd37d6d.js";import"./index.f2a4647f.js";import"./useRefs.458c4996.js";import"./PlusOutlined.d8778101.js";const A=o({__name:"VisitSource",props:{loading:Boolean,width:{type:String,default:"100%"},height:{type:String,default:"300px"}},setup(e){const t=e,a=r(null),{setOptions:i}=c(a);return n(()=>t.loading,()=>{t.loading||i({tooltip:{trigger:"item"},legend:{bottom:"1%",left:"center"},series:[{color:["#5ab1ef","#b6a2de","#67e0e3","#2ec7c9"],name:"\u8BBF\u95EE\u6765\u6E90",type:"pie",radius:["40%","70%"],avoidLabelOverlap:!1,itemStyle:{borderRadius:10,borderColor:"#fff",borderWidth:2},label:{show:!1,position:"center"},emphasis:{label:{show:!0,fontSize:"12",fontWeight:"bold"}},labelLine:{show:!1},data:[{value:1048,name:"\u641C\u7D22\u5F15\u64CE"},{value:735,name:"\u76F4\u63A5\u8BBF\u95EE"},{value:580,name:"\u90AE\u4EF6\u8425\u9500"},{value:484,name:"\u8054\u76DF\u5E7F\u544A"}],animationType:"scale",animationEasing:"exponentialInOut",animationDelay:function(){return Math.random()*100}}]})},{immediate:!0}),(h,g)=>(u(),l(f(p),{title:"\u8BBF\u95EE\u6765\u6E90",loading:e.loading},{default:s(()=>[m("div",{ref_key:"chartRef",ref:a,style:d({width:e.width,height:e.height})},null,4)]),_:1},8,["loading"]))}});export{A as default};
