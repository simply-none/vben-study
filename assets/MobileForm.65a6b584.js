var g=(p,l,a)=>new Promise((c,i)=>{var d=o=>{try{n(a.next(o))}catch(r){i(r)}},m=o=>{try{n(a.throw(o))}catch(r){i(r)}},n=o=>o.done?c(o.value):Promise.resolve(o.value).then(d,m);n((a=a.apply(p,l)).next())});import{a as I,c as B,v as _,w as L,f as h,k as e,o as S,h as w,n as s,z as t,I as z,C as k,B as x,t as b,F as R,l as V}from"./index.05b57da0.js";/* empty css              *//* empty css              */import{C as E}from"./index.c1c067cd.js";import{u as N,a as D,b as M,L as U,_ as O}from"./LoginFormTitle.e679a27b.js";import{F as v}from"./Form.5be812f1.js";import"./useFormItem.07735a29.js";import"./Col.988a4215.js";import"./useFlexGapSupport.3bd37d6d.js";import"./_baseIteratee.fe8085c6.js";import"./get.904eddf9.js";import"./useSize.65e56973.js";const Y=I({__name:"MobileForm",setup(p){const l=v.Item,{t:a}=B(),{handleBackLogin:c,getLoginState:i}=N(),{getFormRules:d}=D(),m=_(),n=_(!1),o=L({mobile:"",sms:""}),{validForm:r}=M(m),y=h(()=>e(i)===U.MOBILE);function C(){return g(this,null,function*(){yield r()})}return(F,u)=>e(y)?(S(),w(R,{key:0},[s(O,{class:"enter-x"}),s(e(v),{class:"p-4 enter-x",model:o,rules:e(d),ref_key:"formRef",ref:m},{default:t(()=>[s(e(l),{name:"mobile",class:"enter-x"},{default:t(()=>[s(e(z),{size:"large",value:o.mobile,"onUpdate:value":u[0]||(u[0]=f=>o.mobile=f),placeholder:e(a)("sys.login.mobile"),class:"fix-auto-fill"},null,8,["value","placeholder"])]),_:1}),s(e(l),{name:"sms",class:"enter-x"},{default:t(()=>[s(e(E),{size:"large",class:"fix-auto-fill",value:o.sms,"onUpdate:value":u[1]||(u[1]=f=>o.sms=f),placeholder:e(a)("sys.login.smsCode")},null,8,["value","placeholder"])]),_:1}),s(e(l),{class:"enter-x"},{default:t(()=>[s(e(k),{type:"primary",size:"large",block:"",onClick:C,loading:n.value},{default:t(()=>[x(b(e(a)("sys.login.loginButton")),1)]),_:1},8,["loading"]),s(e(k),{size:"large",block:"",class:"mt-4",onClick:e(c)},{default:t(()=>[x(b(e(a)("sys.login.backSignIn")),1)]),_:1},8,["onClick"])]),_:1})]),_:1},8,["model","rules"])],64)):V("",!0)}});export{Y as default};
