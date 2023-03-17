import{B as S}from"./index.8bf12157.js";import{n,r as O,au as k,a as F,dj as D,v as p,aw as f,o as m,j as y,z as c,i as g,B as d,h as B,E as A}from"./index.05b57da0.js";import{P as $}from"./index.49be2f55.js";import"./index.216b3613.js";import"./index.e4356f9b.js";import"./useSize.65e56973.js";import"./eagerComputed.3f7e1e7b.js";import"./useWindowSizeFn.25593dbd.js";import"./useContentViewHeight.bdd6cb20.js";import"./ArrowLeftOutlined.fa3f3282.js";import"./index.a0d1b1de.js";import"./transButton.044159ba.js";var j={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M304 280h56c4.4 0 8-3.6 8-8 0-28.3 5.9-53.2 17.1-73.5 10.6-19.4 26-34.8 45.4-45.4C450.9 142 475.7 136 504 136h16c28.3 0 53.2 5.9 73.5 17.1 19.4 10.6 34.8 26 45.4 45.4C650 218.9 656 243.7 656 272c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8 0-40-8.8-76.7-25.9-108.1a184.31 184.31 0 00-74-74C596.7 72.8 560 64 520 64h-16c-40 0-76.7 8.8-108.1 25.9a184.31 184.31 0 00-74 74C304.8 195.3 296 232 296 272c0 4.4 3.6 8 8 8z"}},{tag:"path",attrs:{d:"M940 512H792V412c76.8 0 139-62.2 139-139 0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8a63 63 0 01-63 63H232a63 63 0 01-63-63c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8 0 76.8 62.2 139 139 139v100H84c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h148v96c0 6.5.2 13 .7 19.3C164.1 728.6 116 796.7 116 876c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8 0-44.2 23.9-82.9 59.6-103.7a273 273 0 0022.7 49c24.3 41.5 59 76.2 100.5 100.5S460.5 960 512 960s99.8-13.9 141.3-38.2a281.38 281.38 0 00123.2-149.5A120 120 0 01836 876c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8 0-79.3-48.1-147.4-116.7-176.7.4-6.4.7-12.8.7-19.3v-96h148c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM716 680c0 36.8-9.7 72-27.8 102.9-17.7 30.3-43 55.6-73.3 73.3C584 874.3 548.8 884 512 884s-72-9.7-102.9-27.8c-30.3-17.7-55.6-43-73.3-73.3A202.75 202.75 0 01308 680V412h408v268z"}}]},name:"bug",theme:"outlined"},P=j;function b(e){for(var t=1;t<arguments.length;t++){var s=arguments[t]!=null?Object(arguments[t]):{},u=Object.keys(s);typeof Object.getOwnPropertySymbols=="function"&&(u=u.concat(Object.getOwnPropertySymbols(s).filter(function(a){return Object.getOwnPropertyDescriptor(s,a).enumerable}))),u.forEach(function(a){V(e,a,s[a])})}return e}function V(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}var h=function(t,s){var u=b({},t,s.attrs);return n(O,b({},u,{icon:P}),null)};h.displayName="BugOutlined";h.inheritAttrs=!1;var w=h;const E=F({components:{BasicDragVerify:S,BugOutlined:w,RightOutlined:D,PageWrapper:$},setup(){const{createMessage:e}=A(),t=p(null),s=p(null),u=p(null),a=p(null),_=p(null);function l(i){const{time:v}=i;e.success(`\u6821\u9A8C\u6210\u529F,\u8017\u65F6${v}\u79D2`)}function o(i){!i||i.resume()}return{handleSuccess:l,el1:t,el2:s,el3:u,el4:a,el5:_,handleBtnClick:o}}}),M={class:"flex justify-center p-4 items-center bg-gray-700"},z={class:"flex justify-center p-4 items-center bg-gray-700"},N={class:"flex justify-center p-4 items-center bg-gray-700"},H={class:"flex justify-center p-4 items-center bg-gray-700"},I={class:"flex justify-center p-4 items-center bg-gray-700"},W={key:0},x={key:1};function R(e,t,s,u,a,_){const l=f("BasicDragVerify"),o=f("a-button"),i=f("BugOutlined"),v=f("RightOutlined"),C=f("PageWrapper");return m(),y(C,{title:"\u62D6\u52A8\u6821\u9A8C\u793A\u4F8B"},{default:c(()=>[g("div",M,[n(l,{ref:"el1",onSuccess:e.handleSuccess},null,8,["onSuccess"]),n(o,{type:"primary",class:"ml-2",onClick:t[0]||(t[0]=r=>e.handleBtnClick(e.el1))},{default:c(()=>[d(" \u8FD8\u539F ")]),_:1})]),g("div",z,[n(l,{ref:"el2",onSuccess:e.handleSuccess,circle:""},null,8,["onSuccess"]),n(o,{type:"primary",class:"ml-2",onClick:t[1]||(t[1]=r=>e.handleBtnClick(e.el2))},{default:c(()=>[d(" \u8FD8\u539F ")]),_:1})]),g("div",N,[n(l,{ref:"el3",onSuccess:e.handleSuccess,text:"\u62D6\u52A8\u4EE5\u8FDB\u884C\u6821\u9A8C",successText:"\u6821\u9A8C\u6210\u529F",barStyle:{backgroundColor:"#018ffb"}},null,8,["onSuccess"]),n(o,{type:"primary",class:"ml-2",onClick:t[2]||(t[2]=r=>e.handleBtnClick(e.el3))},{default:c(()=>[d(" \u8FD8\u539F ")]),_:1})]),g("div",H,[n(l,{ref:"el4",onSuccess:e.handleSuccess},{actionIcon:c(r=>[r?(m(),y(i,{key:0})):(m(),y(v,{key:1}))]),_:1},8,["onSuccess"]),n(o,{type:"primary",class:"ml-2",onClick:t[3]||(t[3]=r=>e.handleBtnClick(e.el4))},{default:c(()=>[d(" \u8FD8\u539F ")]),_:1})]),g("div",I,[n(l,{ref:"el5",onSuccess:e.handleSuccess},{text:c(r=>[r?(m(),B("div",W,[n(i),d(" \u6210\u529F ")])):(m(),B("div",x,[d(" \u62D6\u52A8 "),n(v)]))]),_:1},8,["onSuccess"]),n(o,{type:"primary",class:"ml-2",onClick:t[4]||(t[4]=r=>e.handleBtnClick(e.el5))},{default:c(()=>[d(" \u8FD8\u539F ")]),_:1})])]),_:1})}var te=k(E,[["render",R],["__scopeId","data-v-432b38d7"]]);export{te as default};
