var b=Object.defineProperty,_=Object.defineProperties;var w=Object.getOwnPropertyDescriptors;var m=Object.getOwnPropertySymbols;var A=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable;var f=(s,t,a)=>t in s?b(s,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):s[t]=a,v=(s,t)=>{for(var a in t||(t={}))A.call(t,a)&&f(s,a,t[a]);if(m)for(var a of m(t))C.call(t,a)&&f(s,a,t[a]);return s},d=(s,t)=>_(s,w(t));import{b as P,n as B,g as I,d as N,u as j,i as D,o as L,E as T,c as q,w as F}from"./el-button.b4e4f184.js";import{d as G,j as U,x as i,v as $,k as H,o,c as y,n as S,u as c,D as h,w as J,E as K,A as M,G as O}from"./index.b34c9a81.js";const Q=P({size:{type:[Number,String],values:B,default:"",validator:s=>typeof s=="number"},shape:{type:String,values:["circle","square"],default:"circle"},icon:{type:I},src:{type:String,default:""},alt:String,srcSet:String,fit:{type:N(String),default:"cover"}}),R={error:s=>s instanceof Event},V=["src","alt","srcset"],W={name:"ElAvatar"},X=G(d(v({},W),{props:Q,emits:R,setup(s,{emit:t}){const a=s,r=j("avatar"),l=U(!1),E=i(()=>{const{size:e,icon:p,shape:u}=a,n=[r.b()];return $(e)&&n.push(r.m(e)),p&&n.push(r.m("icon")),u&&n.push(r.m(u)),n}),g=i(()=>{const{size:e}=a;return D(e)?{"--el-avatar-size":L(e)}:void 0}),k=i(()=>({objectFit:a.fit}));H(()=>a.src,()=>l.value=!1);function z(e){l.value=!0,t("error",e)}return(e,p)=>(o(),y("span",{class:O(c(E)),style:S(c(g))},[(e.src||e.srcSet)&&!l.value?(o(),y("img",{key:0,src:e.src,alt:e.alt,srcset:e.srcSet,style:S(c(k)),onError:z},null,44,V)):e.icon?(o(),h(c(T),{key:1},{default:J(()=>[(o(),h(K(e.icon)))]),_:1})):M(e.$slots,"default",{key:2})],6))}}));var Y=q(X,[["__file","/home/runner/work/element-plus/element-plus/packages/components/avatar/src/avatar.vue"]]);const se=F(Y);export{se as E};
