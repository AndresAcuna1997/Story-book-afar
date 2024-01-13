import{j as z}from"./jsx-runtime-ffb262ed.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";const s=({label:l,size:g="normal",allCaps:h,color:x,fontColor:v})=>z.jsx("span",{style:{color:v},className:`${g} ${x} label`,children:h?l.toLocaleUpperCase():l});try{s.displayName="MyLabel",s.__docgenInfo={description:"",displayName:"MyLabel",props:{label:{defaultValue:null,description:"The label to display",name:"label",required:!0,type:{name:"string"}},size:{defaultValue:{value:"normal"},description:"The size of the label",name:"size",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'}]}},allCaps:{defaultValue:null,description:"The text is all caps",name:"allCaps",required:!1,type:{name:"boolean"}},color:{defaultValue:null,description:"The color of the label",name:"color",required:!1,type:{name:"enum",value:[{value:'"text-primary"'},{value:'"text-secondary"'},{value:'"text-tertiary"'}]}},fontColor:{defaultValue:null,description:"The custom font color of the label",name:"fontColor",required:!1,type:{name:"string"}}}}}catch{}const T={title:"Labels/MyLabel",tags:["autodocs"],component:s,parameters:{layout:"centered"},argTypes:{size:{control:"inline-radio"},color:{control:"select"},fontColor:{control:"color"}}},e={args:{label:"Basic Label"}},a={args:{label:"AllCaps",size:"normal",allCaps:!0}},r={args:{label:"Secodary",size:"normal",color:"text-secondary"}},o={args:{label:"CustomColor",size:"normal",fontColor:"#ff0000"}};var t,n,c;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    label: 'Basic Label'
  }
}`,...(c=(n=e.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};var i,p,u;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    label: 'AllCaps',
    size: 'normal',
    allCaps: true
  }
}`,...(u=(p=a.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var m,d,y;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    label: 'Secodary',
    size: 'normal',
    color: 'text-secondary'
  }
}`,...(y=(d=r.parameters)==null?void 0:d.docs)==null?void 0:y.source}}};var f,b,C;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    label: 'CustomColor',
    size: 'normal',
    fontColor: '#ff0000'
  }
}`,...(C=(b=o.parameters)==null?void 0:b.docs)==null?void 0:C.source}}};const q=["Basic","AllCaps","Secodary","CustomColor"];export{a as AllCaps,e as Basic,o as CustomColor,r as Secodary,q as __namedExportsOrder,T as default};
