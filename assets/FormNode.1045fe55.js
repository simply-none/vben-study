var I=Object.defineProperty,g=Object.defineProperties;var C=Object.getOwnPropertyDescriptors;var p=Object.getOwnPropertySymbols;var F=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable;var s=(o,e,t)=>e in o?I(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t,a=(o,e)=>{for(var t in e||(e={}))F.call(e,t)&&s(o,t,e[t]);if(p)for(var t of p(e))v.call(e,t)&&s(o,t,e[t]);return o},n=(o,e)=>g(o,C(e));import{a as b,w as N,bc as S,au as k,aw as c,o as y,h as V,i as l,n as f,t as w,q as O,bl as $}from"./index.05b57da0.js";import B from"./FormNodeOperate.779d4810.js";import{u as D}from"./useFormDesignState.e7a813d3.js";import _ from"./index.913d1e5e.js";import"./index.e82fbe3b.js";import"./isNumber.3d04aba4.js";import"./formItemConfig.67d1755a.js";import"./componentMap.c731dcb5.js";import"./index.c67dd176.js";import"./Checkbox.b0153c41.js";import"./index.f06db047.js";import"./index.a80743a7.js";import"./index.fc496ef4.js";import"./index.c32d5371.js";import"./index.15e55bff.js";import"./index.1431da92.js";import"./index.225699da.js";import"./useFormItem.07735a29.js";import"./RadioButtonGroup.a9985ecd.js";import"./get.904eddf9.js";import"./index.c5b23727.js";import"./eagerComputed.3f7e1e7b.js";import"./index.d3c0d16e.js";import"./_baseIteratee.fe8085c6.js";import"./DeleteOutlined.4dec3161.js";import"./index.336b60e1.js";import"./useRefs.458c4996.js";import"./Form.5be812f1.js";import"./Col.988a4215.js";import"./useFlexGapSupport.3bd37d6d.js";import"./useSize.65e56973.js";import"./transButton.044159ba.js";import"./index.30717f1d.js";import"./index.afce2b0d.js";import"./useWindowSizeFn.25593dbd.js";import"./FullscreenOutlined.0d5a0144.js";import"./index.9a434f49.js";import"./index.f31dd8b3.js";import"./uuid.2b29000c.js";import"./download.2d112486.js";import"./base64Conver.08b9f4ec.js";import"./index.ae3c1a2c.js";import"./index.c1c067cd.js";/* empty css              */import"./index.f2a4647f.js";const q=b({name:"FormNode",components:{VFormItem:_,FormNodeOperate:B},props:{schema:{type:Object,required:!0}},setup(o){const{formConfig:e,formDesignMethods:t}=D(),r=N({}),m=()=>{t.handleSetSelectItem(o.schema)};return n(a({},S(r)),{handleSelectItem:m,formConfig:e})}}),M={class:"form-item-box"},j={class:"show-key-box"};function z(o,e,t,r,m,E){var i;const d=c("VFormItem"),h=c("FormNodeOperate");return y(),V("div",{class:O(["drag-move-box",{active:o.schema.key===((i=o.formConfig.currentItem)==null?void 0:i.key)}]),onClick:e[0]||(e[0]=$((...u)=>o.handleSelectItem&&o.handleSelectItem(...u),["stop"]))},[l("div",M,[f(d,{formConfig:o.formConfig,schema:o.schema},null,8,["formConfig","schema"])]),l("div",j,w(o.schema.label+(o.schema.field?"/"+o.schema.field:"")),1),f(h,{schema:o.schema,currentItem:o.formConfig.currentItem},null,8,["schema","currentItem"])],2)}var Do=k(q,[["render",z]]);export{Do as default};
