var d=(r,u,o)=>new Promise((s,e)=>{var m=t=>{try{i(o.next(t))}catch(a){e(a)}},p=t=>{try{i(o.throw(t))}catch(a){e(a)}},i=t=>t.done?s(t.value):Promise.resolve(t.value).then(m,p);i((o=o.apply(r,u)).next())});import{P as F}from"./index.49be2f55.js";import{B as w}from"./BasicForm.8f457256.js";import"./componentMap.c731dcb5.js";import{u as _}from"./useForm.67f4533b.js";import"./RadioButtonGroup.a9985ecd.js";import{au as C,a as h,aw as n,o as E,j as g,z as c,i as f,n as l,B}from"./index.05b57da0.js";import"./index.216b3613.js";import"./index.e4356f9b.js";import"./useSize.65e56973.js";import"./eagerComputed.3f7e1e7b.js";import"./useWindowSizeFn.25593dbd.js";import"./useContentViewHeight.bdd6cb20.js";import"./ArrowLeftOutlined.fa3f3282.js";import"./index.a0d1b1de.js";import"./transButton.044159ba.js";/* empty css              *//* empty css              */import"./FormItem.vue_vue_type_script_lang.9eb58eb7.js";import"./index.225699da.js";import"./index.d3c0d16e.js";import"./_baseIteratee.fe8085c6.js";import"./get.904eddf9.js";import"./DeleteOutlined.4dec3161.js";import"./index.336b60e1.js";import"./useRefs.458c4996.js";import"./Form.5be812f1.js";import"./Col.988a4215.js";import"./useFlexGapSupport.3bd37d6d.js";import"./index.f2a4647f.js";import"./uniqBy.a5a2b368.js";import"./index.afce2b0d.js";import"./FullscreenOutlined.0d5a0144.js";import"./index.e4d5d044.js";import"./index.c67dd176.js";import"./Checkbox.b0153c41.js";import"./index.f06db047.js";import"./index.a80743a7.js";import"./index.fc496ef4.js";import"./index.c32d5371.js";import"./index.15e55bff.js";import"./index.1431da92.js";import"./useFormItem.07735a29.js";import"./index.c5b23727.js";import"./index.30717f1d.js";import"./index.9a434f49.js";import"./index.f31dd8b3.js";import"./isNumber.3d04aba4.js";import"./uuid.2b29000c.js";import"./download.2d112486.js";import"./base64Conver.08b9f4ec.js";import"./index.ae3c1a2c.js";import"./index.c1c067cd.js";const P=[{field:"passwordOld",label:"\u5F53\u524D\u5BC6\u7801",component:"InputPassword",required:!0},{field:"passwordNew",label:"\u65B0\u5BC6\u7801",component:"StrengthMeter",componentProps:{placeholder:"\u65B0\u5BC6\u7801"},rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u65B0\u5BC6\u7801"}]},{field:"confirmPassword",label:"\u786E\u8BA4\u5BC6\u7801",component:"InputPassword",dynamicRules:({values:r})=>[{required:!0,validator:(u,o)=>o?o!==r.passwordNew?Promise.reject("\u4E24\u6B21\u8F93\u5165\u7684\u5BC6\u7801\u4E0D\u4E00\u81F4!"):Promise.resolve():Promise.reject("\u5BC6\u7801\u4E0D\u80FD\u4E3A\u7A7A")}]}],b=h({name:"ChangePassword",components:{BasicForm:w,PageWrapper:F},setup(){const[r,{validate:u,resetFields:o}]=_({size:"large",baseColProps:{span:24},labelWidth:100,showActionButtonGroup:!1,schemas:P});function s(){return d(this,null,function*(){try{const e=yield u(),{passwordOld:m,passwordNew:p}=e}catch(e){}})}return{register:r,resetFields:o,handleSubmit:s}}}),A={class:"py-8 bg-white flex flex-col justify-center items-center"},y={class:"flex justify-center"};function v(r,u,o,s,e,m){const p=n("BasicForm"),i=n("a-button"),t=n("PageWrapper");return E(),g(t,{title:"\u4FEE\u6539\u5F53\u524D\u7528\u6237\u5BC6\u7801",content:"\u4FEE\u6539\u6210\u529F\u540E\u4F1A\u81EA\u52A8\u9000\u51FA\u5F53\u524D\u767B\u5F55\uFF01"},{default:c(()=>[f("div",A,[l(p,{onRegister:r.register},null,8,["onRegister"]),f("div",y,[l(i,{onClick:r.resetFields},{default:c(()=>[B(" \u91CD\u7F6E ")]),_:1},8,["onClick"]),l(i,{class:"!ml-4",type:"primary",onClick:r.handleSubmit},{default:c(()=>[B(" \u786E\u8BA4 ")]),_:1},8,["onClick"])])])]),_:1})}var Do=C(b,[["render",v]]);export{Do as default};
