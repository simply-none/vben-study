import{B as h}from"./TableImg.526c7e6b.js";import{k as C}from"./componentMap.c731dcb5.js";import{u as w}from"./useTable.131042fe.js";import{a as E,au as B,aw as r,o as d,h as _,n as c,z as f,j as D,l as g,B as N}from"./index.05b57da0.js";import"./index.c67dd176.js";import"./Checkbox.b0153c41.js";import"./index.f06db047.js";import"./index.c5b23727.js";import"./eagerComputed.3f7e1e7b.js";import"./BasicForm.8f457256.js";/* empty css              *//* empty css              */import"./FormItem.vue_vue_type_script_lang.9eb58eb7.js";import"./index.225699da.js";import"./index.d3c0d16e.js";import"./_baseIteratee.fe8085c6.js";import"./get.904eddf9.js";import"./DeleteOutlined.4dec3161.js";import"./index.336b60e1.js";import"./useRefs.458c4996.js";import"./Form.5be812f1.js";import"./Col.988a4215.js";import"./useFlexGapSupport.3bd37d6d.js";import"./useSize.65e56973.js";import"./index.f2a4647f.js";import"./uniqBy.a5a2b368.js";import"./index.afce2b0d.js";import"./useWindowSizeFn.25593dbd.js";import"./FullscreenOutlined.0d5a0144.js";import"./index.e4d5d044.js";import"./useForm.67f4533b.js";import"./RadioButtonGroup.a9985ecd.js";import"./useFormItem.07735a29.js";import"./index.49be2f55.js";import"./index.216b3613.js";import"./index.e4356f9b.js";import"./useContentViewHeight.bdd6cb20.js";import"./ArrowLeftOutlined.fa3f3282.js";import"./index.a0d1b1de.js";import"./transButton.044159ba.js";import"./index.c32d5371.js";import"./index.15e55bff.js";import"./index.fc496ef4.js";import"./index.a80743a7.js";import"./uuid.2b29000c.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.2a959efc.js";import"./index.f31dd8b3.js";import"./isNumber.3d04aba4.js";import"./fromPairs.84aabb58.js";import"./scrollTo.a47705f6.js";import"./index.1284fcc5.js";import"./index.1431da92.js";import"./index.30717f1d.js";import"./index.9a434f49.js";import"./download.2d112486.js";import"./base64Conver.08b9f4ec.js";import"./index.ae3c1a2c.js";import"./index.c1c067cd.js";const T=[{title:"\u6210\u5458\u59D3\u540D",dataIndex:"name",editRow:!0},{title:"\u5DE5\u53F7",dataIndex:"no",editRow:!0},{title:"\u6240\u5C5E\u90E8\u95E8",dataIndex:"dept",editRow:!0}],x=[{name:"John Brown",no:"00001",dept:"New York No. 1 Lake Park"},{name:"John Brown2",no:"00002",dept:"New York No. 2 Lake Park"},{name:"John Brown3",no:"00003",dept:"New York No. 3Lake Park"}],y=E({components:{BasicTable:h,TableAction:C},setup(){const[e,{getDataSource:i}]=w({columns:T,showIndexColumn:!1,dataSource:x,actionColumn:{width:160,title:"\u64CD\u4F5C",dataIndex:"action"},scroll:{y:"100%"},pagination:!1});function a(t){var o;(o=t.onEdit)==null||o.call(t,!0)}function l(t){var o;if((o=t.onEdit)==null||o.call(t,!1),t.isNew){const n=i(),b=n.findIndex(k=>k.key===t.key);n.splice(b,1)}}function u(t){var o;(o=t.onEdit)==null||o.call(t,!1,!0)}function s(t){}function p(){const t=i(),o={name:"",no:"",dept:"",editable:!0,isNew:!0,key:`${Date.now()}`};t.push(o)}function m(t,o){return t.editable?[{label:"\u4FDD\u5B58",onClick:u.bind(null,t,o)},{label:"\u53D6\u6D88",popConfirm:{title:"\u662F\u5426\u53D6\u6D88\u7F16\u8F91",confirm:l.bind(null,t,o)}}]:[{label:"\u7F16\u8F91",onClick:a.bind(null,t)},{label:"\u5220\u9664"}]}return{registerTable:e,handleEdit:a,createActions:m,handleAdd:p,getDataSource:i,handleEditChange:s}}});function F(e,i,a,l,u,s){const p=r("TableAction"),m=r("BasicTable"),t=r("a-button");return d(),_("div",null,[c(m,{onRegister:e.registerTable,onEditChange:e.handleEditChange},{bodyCell:f(({column:o,record:n})=>[o.key==="action"?(d(),D(p,{key:0,actions:e.createActions(n,o)},null,8,["actions"])):g("",!0)]),_:1},8,["onRegister","onEditChange"]),c(t,{block:"",class:"mt-5",type:"dashed",onClick:e.handleAdd},{default:f(()=>[N(" \u65B0\u589E\u6210\u5458 ")]),_:1},8,["onClick"])])}var Pt=B(y,[["render",F]]);export{Pt as default};
