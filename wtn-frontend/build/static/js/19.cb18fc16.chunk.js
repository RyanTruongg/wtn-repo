(this["webpackJsonpdevias-material-kit-pro"]=this["webpackJsonpdevias-material-kit-pro"]||[]).push([[19],{1031:function(e,a,t){"use strict";var r=t(17),i=t(18);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=i(t(0)),l=(0,r(t(19)).default)(n.createElement("path",{d:"M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm0 8c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4zm-6 4c.22-.72 3.31-2 6-2 2.7 0 5.8 1.29 6 2H9zm-3-3v-3h3v-2H6V7H4v3H1v2h3v3z"}),"PersonAddOutlined");a.default=l},1052:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return T}));var r=t(5),i=t(0),n=t.n(i),l=t(25),s=t(263),o=t(821),c=t(822),d=t(76),m=t(824),u=t(826),p=t(1031),g=t.n(p),f=t(133),v=t(40),b=t(15),h=t(3),w=t(841),y=t(827),x=t(927),E=t(215),N=t(928),j=["className"],O=Object(s.a)((function(e){return{root:{},fields:{margin:e.spacing(-1),display:"flex",flexWrap:"wrap","& > *":{flexGrow:1,margin:e.spacing(1)}},policy:{display:"flex",alignItems:"center"},policyCheckbox:{marginLeft:"-14px"},submitButton:{marginTop:e.spacing(2),width:"100%"}}})),k=x.a({fullName:x.b().required("Please enter your name"),email:x.b().email("Email must be a valid email").required("Please enter your email"),password:x.b().required("Please enter your password")}).required(),R=function(e){var a,t,r,i=e.className,l=Object(b.a)(e,j),s=O(),o=Object(E.e)({mode:"onBlur",resolver:Object(N.a)(k)}),c=o.register,d=o.handleSubmit,m=o.formState.errors;return n.a.createElement("form",Object.assign({},l,{className:Object(h.a)(s.root,i),onSubmit:d,autoComplete:"off"}),n.a.createElement("div",{className:s.fields},n.a.createElement(w.a,Object.assign({error:!!m.fullName,helperText:null===(a=m.fullName)||void 0===a?void 0:a.message,label:"Full Name"},c("fullName"),{variant:"outlined"})),n.a.createElement(w.a,Object.assign({error:!!m.email,fullWidth:!0,helperText:null===(t=m.email)||void 0===t?void 0:t.message,label:"Email address"},c("email"),{variant:"outlined"})),n.a.createElement(w.a,Object.assign({error:!!m.password,fullWidth:!0,helperText:null===(r=m.password)||void 0===r?void 0:r.message,label:"Password",name:"password"},c("password"),{variant:"outlined"}))),n.a.createElement(y.a,{className:s.submitButton,color:"secondary",size:"large",type:"submit",variant:"contained"},"Create account"))},z=Object(s.a)((function(e){return{root:{height:"100%",display:"flex",alignItems:"center",justifyContent:"center",padding:e.spacing(6,2)},card:{width:e.breakpoints.values.md,maxWidth:"100%",overflow:"unset",display:"flex",position:"relative","& > *":{flexGrow:1,flexBasis:"50%",width:"50%"}},content:{padding:e.spacing(8,4,3,4)},media:Object(r.a)({borderTopRightRadius:4,borderBottomRightRadius:4,padding:e.spacing(3),color:e.palette.white,display:"flex",flexDirection:"column",justifyContent:"flex-end"},e.breakpoints.down("md"),{display:"none"}),icon:{backgroundImage:f.a.orange,color:e.palette.white,borderRadius:e.shape.borderRadius,padding:e.spacing(1),position:"absolute",top:-32,left:e.spacing(3),height:64,width:64,fontSize:32},registerForm:{marginTop:e.spacing(3)},divider:{margin:e.spacing(2,0)},person:{marginTop:e.spacing(2),display:"flex"},avatar:{marginRight:e.spacing(2)}}})),T=function(){var e=z();return n.a.createElement(v.i,{className:e.root,title:"Register"},n.a.createElement(o.a,{className:e.card},n.a.createElement(c.a,{className:e.content},n.a.createElement(g.a,{className:e.icon}),n.a.createElement(d.a,{gutterBottom:!0,variant:"h3"},"Sign up"),n.a.createElement(d.a,{variant:"subtitle2"},"Sign up on the internal platform"),n.a.createElement(R,{className:e.registerForm}),n.a.createElement(m.a,{className:e.divider}),n.a.createElement(u.a,{align:"center",color:"secondary",component:l.a,to:"/auth/login",underline:"always",variant:"subtitle2"},"Have an account?"))))}}}]);
//# sourceMappingURL=19.cb18fc16.chunk.js.map