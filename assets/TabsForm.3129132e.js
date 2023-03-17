var v=(a,n,s)=>new Promise((i,F)=>{var b=r=>{try{u(s.next(r))}catch(o){F(o)}},m=r=>{try{u(s.throw(r))}catch(o){F(o)}},u=r=>r.done?i(r.value):Promise.resolve(r.value).then(b,m);u((s=s.apply(a,n)).next())});import{au as h,a as k,cD as E,v as y,ao as $,aw as d,bQ as A,x as D,o as _,j as C,z as p,i as T,n as f,B as g,h as P,F as V,az as w,ax as K,d3 as S,E as R}from"./index.05b57da0.js";import{T as B}from"./index.fbede925.js";import{P as W}from"./index.49be2f55.js";import{B as j}from"./BasicForm.8f457256.js";import"./componentMap.c731dcb5.js";import{u as M}from"./useForm.67f4533b.js";import"./RadioButtonGroup.a9985ecd.js";import"./useRefs.458c4996.js";import"./PlusOutlined.d8778101.js";import"./index.216b3613.js";import"./index.e4356f9b.js";import"./useSize.65e56973.js";import"./eagerComputed.3f7e1e7b.js";import"./useWindowSizeFn.25593dbd.js";import"./useContentViewHeight.bdd6cb20.js";import"./ArrowLeftOutlined.fa3f3282.js";import"./index.a0d1b1de.js";import"./transButton.044159ba.js";/* empty css              *//* empty css              */import"./FormItem.vue_vue_type_script_lang.9eb58eb7.js";import"./index.225699da.js";import"./index.d3c0d16e.js";import"./_baseIteratee.fe8085c6.js";import"./get.904eddf9.js";import"./DeleteOutlined.4dec3161.js";import"./index.336b60e1.js";import"./Form.5be812f1.js";import"./Col.988a4215.js";import"./useFlexGapSupport.3bd37d6d.js";import"./index.f2a4647f.js";import"./uniqBy.a5a2b368.js";import"./index.afce2b0d.js";import"./FullscreenOutlined.0d5a0144.js";import"./index.e4d5d044.js";import"./index.c67dd176.js";import"./Checkbox.b0153c41.js";import"./index.f06db047.js";import"./index.a80743a7.js";import"./index.fc496ef4.js";import"./index.c32d5371.js";import"./index.15e55bff.js";import"./index.1431da92.js";import"./useFormItem.07735a29.js";import"./index.c5b23727.js";import"./index.30717f1d.js";import"./index.9a434f49.js";import"./index.f31dd8b3.js";import"./isNumber.3d04aba4.js";import"./uuid.2b29000c.js";import"./download.2d112486.js";import"./base64Conver.08b9f4ec.js";import"./index.ae3c1a2c.js";import"./index.c1c067cd.js";const N=k({name:"TabsFormDemo",components:{Tabs:B,TabPane:B.TabPane,PageWrapper:W,CollapseContainer:E,BasicForm:j},setup(){const{createMessage:a}=R(),n=y("tabs2"),s=y(!1),i=[],F={showActionButtonGroup:!1,labelWidth:100},b={};for(let o=1;o<=5;++o){const e=`tabs${o}`,l=[],c={};for(let t=1;t<=8;++t)l.push({field:`${e}.field${t}`,label:`${e}-field${t}`,component:"Input",colProps:{span:24}}),c[`field${t}`]=`field: ${e}.field${t}, default value`;b[e]=c,i.push({key:e,tab:e,forceRender:!0,Form:M(Object.assign({schemas:l},F))})}function m(){return v(this,null,function*(){for(const o of i){const{resetFields:e}=o.Form[1];yield e()}})}function u(){return v(this,null,function*(){let o="";s.value=!0;try{const e={};for(const l of i){o=l.key;const{validate:c,getFieldsValue:t}=l.Form[1];yield c(),S(e,t())}a.success("\u63D0\u4EA4\u6210\u529F\uFF01\u8BF7\u6253\u5F00\u63A7\u5236\u53F0\u67E5\u770B")}catch(e){n.value=o}finally{s.value=!1}})}function r(){return v(this,null,function*(){for(const o of i){const{setFieldsValue:e}=o.Form[1];yield e(b)}})}return{omit:$,loading:s,activeKey:n,tabsFormSchema:i,handleReset:m,handleSubmit:u,handleSetValues:r}}}),z={class:"mb-4"};function G(a,n,s,i,F,b){const m=d("a-button"),u=d("BasicForm"),r=d("TabPane"),o=d("Tabs"),e=d("CollapseContainer"),l=d("PageWrapper"),c=A("loading");return D((_(),C(l,{title:"\u6807\u7B7E\u9875+\u591A\u7EA7field\u8868\u5355"},{default:p(()=>[T("div",z,[f(m,{onClick:a.handleReset,class:"mr-2"},{default:p(()=>[g(" \u91CD\u7F6E\u8868\u5355 ")]),_:1},8,["onClick"]),f(m,{onClick:a.handleSetValues,class:"mr-2"},{default:p(()=>[g(" \u8BBE\u7F6E\u9ED8\u8BA4\u503C ")]),_:1},8,["onClick"]),f(m,{onClick:a.handleSubmit,class:"mr-2",type:"primary"},{default:p(()=>[g(" \u63D0\u4EA4\u8868\u5355 ")]),_:1},8,["onClick"])]),f(e,{title:"\u6807\u7B7E\u9875+\u591A\u7EA7field\u8868\u5355"},{default:p(()=>[f(o,{activeKey:a.activeKey,"onUpdate:activeKey":n[0]||(n[0]=t=>a.activeKey=t)},{default:p(()=>[(_(!0),P(V,null,w(a.tabsFormSchema,t=>(_(),C(r,K({key:t.key},a.omit(t,["Form","key"])),{default:p(()=>[f(u,{onRegister:t.Form[0]},null,8,["onRegister"])]),_:2},1040))),128))]),_:1},8,["activeKey"])]),_:1})]),_:1})),[[c,a.loading]])}var Oo=h(N,[["render",G]]);export{Oo as default};
