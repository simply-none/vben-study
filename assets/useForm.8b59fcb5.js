var h=Object.defineProperty;var d=Object.getOwnPropertySymbols;var x=Object.prototype.hasOwnProperty,M=Object.prototype.propertyIsEnumerable;var v=(r,t,o)=>t in r?h(r,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):r[t]=o,C=(r,t)=>{for(var o in t||(t={}))x.call(t,o)&&v(r,o,t[o]);if(d)for(var o of d(t))M.call(t,o)&&v(r,o,t[o]);return r};var _=(r,t,o)=>new Promise((m,a)=>{var u=i=>{try{e(o.next(i))}catch(p){a(p)}},c=i=>{try{e(o.throw(i))}catch(p){a(p)}},e=i=>i.done?m(i.value):Promise.resolve(i.value).then(u,c);e((o=o.apply(r,t)).next())});import{B as b}from"./BasicForm.8f457256.js";import"./componentMap.c731dcb5.js";import{u as k}from"./useForm.67f4533b.js";import"./RadioButtonGroup.a9985ecd.js";import w from"./JsonModal.67a57fbb.js";import{a as B,v as F,w as y,f as D,o as E,j,z as G,n as g,k as l,ax as O,dG as R}from"./index.05b57da0.js";/* empty css              *//* empty css              */import"./FormItem.vue_vue_type_script_lang.9eb58eb7.js";import"./index.225699da.js";import"./index.d3c0d16e.js";import"./_baseIteratee.fe8085c6.js";import"./get.904eddf9.js";import"./DeleteOutlined.4dec3161.js";import"./index.336b60e1.js";import"./useRefs.458c4996.js";import"./Form.5be812f1.js";import"./Col.988a4215.js";import"./useFlexGapSupport.3bd37d6d.js";import"./useSize.65e56973.js";import"./index.f2a4647f.js";import"./uniqBy.a5a2b368.js";import"./index.afce2b0d.js";import"./useWindowSizeFn.25593dbd.js";import"./FullscreenOutlined.0d5a0144.js";import"./index.e4d5d044.js";import"./index.c67dd176.js";import"./Checkbox.b0153c41.js";import"./index.f06db047.js";import"./index.a80743a7.js";import"./index.fc496ef4.js";import"./index.c32d5371.js";import"./index.15e55bff.js";import"./index.1431da92.js";import"./useFormItem.07735a29.js";import"./index.c5b23727.js";import"./eagerComputed.3f7e1e7b.js";import"./transButton.044159ba.js";import"./index.30717f1d.js";import"./index.9a434f49.js";import"./index.f31dd8b3.js";import"./isNumber.3d04aba4.js";import"./uuid.2b29000c.js";import"./download.2d112486.js";import"./base64Conver.08b9f4ec.js";import"./index.ae3c1a2c.js";import"./index.c1c067cd.js";import"./PreviewCode.3f68503e.js";import"./index.a8c8fe47.js";import"./index.e82fbe3b.js";const Oo=B({__name:"useForm",setup(r,{expose:t}){const o=F(null),m=y({formModel:{},formConfig:{},visible:!1}),a=D(()=>C({},m.formConfig)),u=n=>{m.formConfig=n,m.visible=!0},[c,{validate:e}]=k(),i=()=>{m.visible=!1},p=()=>_(this,null,function*(){var s,f;let n=yield e();(f=(s=o.value)==null?void 0:s.showModal)==null||f.call(s,n)});return t({showModal:u}),(n,s)=>(E(),j(l(R),{title:"\u9884\u89C8(\u4E0D\u652F\u6301\u5E03\u5C40)",visible:m.visible,onOk:p,onCancel:i,okText:"\u83B7\u53D6\u6570\u636E",cancelText:"\u5173\u95ED",style:{top:"20px"},destroyOnClose:!0,width:900},{default:G(()=>[g(l(b),O(l(a),{onRegister:l(c)}),null,16,["onRegister"]),g(w,{ref_key:"jsonModal",ref:o},null,512)]),_:1},8,["visible"]))}});export{Oo as default};
