import{B as b}from"./TableImg.526c7e6b.js";import{k as C}from"./componentMap.c731dcb5.js";import{u as g}from"./useTable.131042fe.js";import{d as T}from"./system.57dcbef1.js";import{u as w}from"./index.ccd738dd.js";import{M as D,c as _,s as S}from"./MenuDrawer.6dbb1382.js";import{au as k,a as B,aw as t,o as h,h as F,n as p,z as s,B as M,j as y,l as A,al as E}from"./index.05b57da0.js";import"./index.c67dd176.js";import"./Checkbox.b0153c41.js";import"./index.f06db047.js";import"./index.c5b23727.js";import"./eagerComputed.3f7e1e7b.js";import"./BasicForm.8f457256.js";/* empty css              *//* empty css              */import"./FormItem.vue_vue_type_script_lang.9eb58eb7.js";import"./index.225699da.js";import"./index.d3c0d16e.js";import"./_baseIteratee.fe8085c6.js";import"./get.904eddf9.js";import"./DeleteOutlined.4dec3161.js";import"./index.336b60e1.js";import"./useRefs.458c4996.js";import"./Form.5be812f1.js";import"./Col.988a4215.js";import"./useFlexGapSupport.3bd37d6d.js";import"./useSize.65e56973.js";import"./index.f2a4647f.js";import"./uniqBy.a5a2b368.js";import"./index.afce2b0d.js";import"./useWindowSizeFn.25593dbd.js";import"./FullscreenOutlined.0d5a0144.js";import"./index.e4d5d044.js";import"./useForm.67f4533b.js";import"./RadioButtonGroup.a9985ecd.js";import"./useFormItem.07735a29.js";import"./index.49be2f55.js";import"./index.216b3613.js";import"./index.e4356f9b.js";import"./useContentViewHeight.bdd6cb20.js";import"./ArrowLeftOutlined.fa3f3282.js";import"./index.a0d1b1de.js";import"./transButton.044159ba.js";import"./index.c32d5371.js";import"./index.15e55bff.js";import"./index.fc496ef4.js";import"./index.a80743a7.js";import"./uuid.2b29000c.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.2a959efc.js";import"./index.f31dd8b3.js";import"./isNumber.3d04aba4.js";import"./fromPairs.84aabb58.js";import"./scrollTo.a47705f6.js";import"./index.1284fcc5.js";import"./index.1431da92.js";import"./index.30717f1d.js";import"./index.9a434f49.js";import"./download.2d112486.js";import"./base64Conver.08b9f4ec.js";import"./index.ae3c1a2c.js";import"./index.c1c067cd.js";import"./index.57d1a524.js";const R=B({name:"MenuManagement",components:{BasicTable:b,MenuDrawer:D,TableAction:C},setup(){const[e,{openDrawer:r}]=w(),[c,{reload:l,expandAll:u}]=g({title:"\u83DC\u5355\u5217\u8868",api:T,columns:_,formConfig:{labelWidth:120,schemas:S},isTreeTable:!0,pagination:!1,striped:!1,useSearchForm:!0,showTableSetting:!0,bordered:!0,showIndexColumn:!1,canResize:!1,actionColumn:{width:80,title:"\u64CD\u4F5C",dataIndex:"action",fixed:void 0}});function d(){r(!0,{isUpdate:!1})}function i(o){r(!0,{record:o,isUpdate:!0})}function n(o){}function a(){l()}function m(){E(u)}return{registerTable:c,registerDrawer:e,handleCreate:d,handleEdit:i,handleDelete:n,handleSuccess:a,onFetchSuccess:m}}});function v(e,r,c,l,u,d){const i=t("a-button"),n=t("TableAction"),a=t("BasicTable"),m=t("MenuDrawer");return h(),F("div",null,[p(a,{onRegister:e.registerTable,onFetchSuccess:e.onFetchSuccess},{toolbar:s(()=>[p(i,{type:"primary",onClick:e.handleCreate},{default:s(()=>[M(" \u65B0\u589E\u83DC\u5355 ")]),_:1},8,["onClick"])]),bodyCell:s(({column:o,record:f})=>[o.key==="action"?(h(),y(n,{key:0,actions:[{icon:"clarity:note-edit-line",onClick:e.handleEdit.bind(null,f)},{icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"\u662F\u5426\u786E\u8BA4\u5220\u9664",placement:"left",confirm:e.handleDelete.bind(null,f)}}]},null,8,["actions"])):A("",!0)]),_:1},8,["onRegister","onFetchSuccess"]),p(m,{onRegister:e.registerDrawer,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])])}var We=k(R,[["render",v]]);export{We as default};
