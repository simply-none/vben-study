var m=(t,n,r)=>new Promise((d,a)=>{var p=e=>{try{u(r.next(e))}catch(i){a(i)}},o=e=>{try{u(r.throw(e))}catch(i){a(i)}},u=e=>e.done?d(e.value):Promise.resolve(e.value).then(p,o);u((r=r.apply(t,n)).next())});import{B as s}from"./TableImg.526c7e6b.js";import"./componentMap.c731dcb5.js";import{u as c}from"./useTable.131042fe.js";import{o as l}from"./select.c93bed25.js";import{d as C}from"./table.6c96bb4a.js";import{t as F}from"./tree.5b8a4d8e.js";import{au as E,a as f,aw as b,o as h,h as B,n as D,bS as x,E as w}from"./index.05b57da0.js";import{P as A}from"./index.336b60e1.js";import"./index.c67dd176.js";import"./Checkbox.b0153c41.js";import"./index.f06db047.js";import"./index.c5b23727.js";import"./eagerComputed.3f7e1e7b.js";import"./BasicForm.8f457256.js";/* empty css              *//* empty css              */import"./FormItem.vue_vue_type_script_lang.9eb58eb7.js";import"./index.225699da.js";import"./index.d3c0d16e.js";import"./_baseIteratee.fe8085c6.js";import"./get.904eddf9.js";import"./DeleteOutlined.4dec3161.js";import"./Form.5be812f1.js";import"./Col.988a4215.js";import"./useFlexGapSupport.3bd37d6d.js";import"./useSize.65e56973.js";import"./index.f2a4647f.js";import"./uniqBy.a5a2b368.js";import"./index.afce2b0d.js";import"./useWindowSizeFn.25593dbd.js";import"./FullscreenOutlined.0d5a0144.js";import"./index.e4d5d044.js";import"./useForm.67f4533b.js";import"./RadioButtonGroup.a9985ecd.js";import"./useFormItem.07735a29.js";import"./index.49be2f55.js";import"./index.216b3613.js";import"./index.e4356f9b.js";import"./useContentViewHeight.bdd6cb20.js";import"./ArrowLeftOutlined.fa3f3282.js";import"./index.a0d1b1de.js";import"./transButton.044159ba.js";import"./index.c32d5371.js";import"./index.15e55bff.js";import"./index.fc496ef4.js";import"./index.a80743a7.js";import"./uuid.2b29000c.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.2a959efc.js";import"./index.f31dd8b3.js";import"./isNumber.3d04aba4.js";import"./fromPairs.84aabb58.js";import"./scrollTo.a47705f6.js";import"./index.1284fcc5.js";import"./index.1431da92.js";import"./index.30717f1d.js";import"./index.9a434f49.js";import"./download.2d112486.js";import"./base64Conver.08b9f4ec.js";import"./index.ae3c1a2c.js";import"./index.c1c067cd.js";import"./useRefs.458c4996.js";const v=[{title:"\u8F93\u5165\u6846",dataIndex:"name",edit:!0,editComponentProps:{prefix:"$"},width:200},{title:"\u9ED8\u8BA4\u8F93\u5165\u72B6\u6001",dataIndex:"name7",edit:!0,editable:!0,width:200},{title:"\u8F93\u5165\u6846\u6821\u9A8C",dataIndex:"name1",edit:!0,editRule:!0,width:200},{title:"\u8F93\u5165\u6846\u51FD\u6570\u6821\u9A8C",dataIndex:"name2",edit:!0,editRule:t=>m(void 0,null,function*(){return t==="2"?"\u4E0D\u80FD\u8F93\u5165\u8BE5\u503C":""}),width:200},{title:"\u6570\u5B57\u8F93\u5165\u6846",dataIndex:"id",edit:!0,editRule:!0,editComponent:"InputNumber",width:200,editComponentProps:()=>({max:100,min:0}),editRender:({text:t})=>x(A,{percent:Number(t)})},{title:"\u4E0B\u62C9\u6846",dataIndex:"name3",edit:!0,editComponent:"Select",editComponentProps:{options:[{label:"Option1",value:"1"},{label:"Option2",value:"2"}]},width:200},{title:"\u8FDC\u7A0B\u4E0B\u62C9",dataIndex:"name4",edit:!0,editComponent:"ApiSelect",editComponentProps:{api:l,resultField:"list",labelField:"name",valueField:"id"},width:200},{title:"\u8FDC\u7A0B\u4E0B\u62C9\u6811",dataIndex:"name8",edit:!0,editComponent:"ApiTreeSelect",editRule:!1,editComponentProps:{api:F,resultField:"list"},width:200},{title:"\u65E5\u671F\u9009\u62E9",dataIndex:"date",edit:!0,editComponent:"DatePicker",editComponentProps:{valueFormat:"YYYY-MM-DD",format:"YYYY-MM-DD"},width:200},{title:"\u65F6\u95F4\u9009\u62E9",dataIndex:"time",edit:!0,editComponent:"TimePicker",editComponentProps:{valueFormat:"HH:mm",format:"HH:mm"},width:200},{title:"\u52FE\u9009\u6846",dataIndex:"name5",edit:!0,editComponent:"Checkbox",editValueMap:t=>t?"\u662F":"\u5426",width:200},{title:"\u5F00\u5173",dataIndex:"name6",edit:!0,editComponent:"Switch",editValueMap:t=>t?"\u5F00":"\u5173",width:200},{title:"\u5355\u9009\u6846",dataIndex:"radio1",edit:!0,editComponent:"RadioGroup",editComponentProps:{options:[{label:"\u9009\u98791",value:"1"},{label:"\u9009\u98792",value:"2"}]},width:200},{title:"\u5355\u9009\u6309\u94AE\u6846",dataIndex:"radio2",edit:!0,editComponent:"RadioButtonGroup",editComponentProps:{options:[{label:"\u9009\u98791",value:"1"},{label:"\u9009\u98792",value:"2"}]},width:200},{title:"\u8FDC\u7A0B\u5355\u9009\u6846",dataIndex:"radio3",edit:!0,editComponent:"ApiRadioGroup",editComponentProps:{api:l,resultField:"list",labelField:"name",valueField:"id"},width:200}],I=f({components:{BasicTable:s},setup(){const[t]=c({title:"\u53EF\u7F16\u8F91\u5355\u5143\u683C\u793A\u4F8B",api:C,columns:v,showIndexColumn:!1,bordered:!0}),{createMessage:n}=w();function r({record:o,index:u,key:e,value:i}){return!1}function d({value:o,key:u,id:e}){return n.loading({content:`\u6B63\u5728\u6A21\u62DF\u4FDD\u5B58${u}`,key:"_save_fake_data",duration:0}),new Promise(i=>{setTimeout(()=>{o===""?(n.error({content:"\u4FDD\u5B58\u5931\u8D25\uFF1A\u4E0D\u80FD\u4E3A\u7A7A",key:"_save_fake_data",duration:2}),i(!1)):(n.success({content:`\u8BB0\u5F55${e}\u7684${u}\u5DF2\u4FDD\u5B58`,key:"_save_fake_data",duration:2}),i(!0))},2e3)})}function a(Lt){return m(this,arguments,function*({record:o,index:u,key:e,value:i}){return yield d({id:o.id,key:e,value:i})})}function p(){}return{registerTable:t,handleEditEnd:r,handleEditCancel:p,beforeEditSubmit:a}}}),_={class:"p-4"};function P(t,n,r,d,a,p){const o=b("BasicTable");return h(),B("div",_,[D(o,{onRegister:t.registerTable,onEditEnd:t.handleEditEnd,onEditCancel:t.handleEditCancel,beforeEditSubmit:t.beforeEditSubmit},null,8,["onRegister","onEditEnd","onEditCancel","beforeEditSubmit"])])}var Ht=E(I,[["render",P]]);export{Ht as default};
