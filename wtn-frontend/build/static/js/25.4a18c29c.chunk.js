(this["webpackJsonpdevias-material-kit-pro"]=this["webpackJsonpdevias-material-kit-pro"]||[]).push([[25],{1051:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return I}));var n=t(0),r=t.n(n),i=t(263),s=t(76),l=t(821),c=t(822),o=t(824),u=t(880),d=t.n(u),m=t(40),p=t(133),g=t(1),b=t.n(g),v=t(4),h=t(5),f=t(24),j=t(16),w=t(15),O=t(891),E=t.n(O),y=t(3),x=(t(180),t(841)),N=t(827),k=t(42),B=t(57),C=["className"],S={email:{presence:{allowEmpty:!1,message:"is required"},email:!0},password:{presence:{allowEmpty:!1,message:"is required"}}},W=Object(i.a)((function(e){return{root:{},fields:{margin:e.spacing(-1),display:"flex",flexWrap:"wrap","& > *":{flexGrow:1,margin:e.spacing(1)}},submitButton:{margin:e.spacing(2,0),width:"100%"},divider:{margin:e.spacing(2,0)}}})),T=function(e){var a=e.className,t=Object(w.a)(e,C),i=W(),l=(Object(k.a)(),Object(B.b)()),c=Object(n.useState)({isValid:!1,values:{},touched:{},errors:{}}),o=Object(j.a)(c,2),u=o[0],d=o[1];Object(n.useEffect)((function(){var e=E()(u.values,S);d((function(a){return Object(f.a)(Object(f.a)({},a),{},{isValid:!e,errors:e||{}})}))}),[u.values]);var m=function(e){e.persist(),d((function(a){return Object(f.a)(Object(f.a)({},a),{},{values:Object(f.a)(Object(f.a)({},a.values),{},Object(h.a)({},e.target.name,"checkbox"===e.target.type?e.target.checked:e.target.value)),touched:Object(f.a)(Object(f.a)({},a.touched),{},Object(h.a)({},e.target.name,!0))})}))},p=function(){var e=Object(v.a)(b.a.mark((function e(a){var t,n,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a.preventDefault(),t=u.values,n=t.email,r=t.password,l.signin(n,r);case 3:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),g=function(e){return!(!u.touched[e]||!u.errors[e])};return r.a.createElement("form",Object.assign({},t,{autoComplete:"off",className:Object(y.a)(i.root,a),onSubmit:p}),r.a.createElement("div",{className:i.fields},r.a.createElement(x.a,{error:g("email"),fullWidth:!0,helperText:g("email")?u.errors.email[0]:null,label:"Email address",name:"email",onChange:m,value:u.values.email||"",variant:"outlined"}),r.a.createElement(x.a,{error:g("password"),fullWidth:!0,helperText:g("password")?u.errors.password[0]:null,label:"M\u1eadt kh\u1ea9u",name:"password",onChange:m,type:"password",value:u.values.password||"",variant:"outlined"})),r.a.createElement(N.a,{className:i.submitButton,color:"secondary",disabled:!u.isValid,size:"large",type:"submit",variant:"contained"},"\u0110\u0103ng nh\u1eadp"),r.a.createElement(s.a,{align:"center",variant:"body2"},"ho\u1eb7c"),r.a.createElement(N.a,{className:i.submitButton,color:"secondary",onClick:l.signInWithPopup,size:"large",variant:"outlined"},"\u0110\u0103ng nh\u1eadp v\u1edbi Google"))},z=t(27),G=Object(i.a)((function(e){return{root:{height:"100%",display:"flex",alignItems:"center",justifyContent:"center",padding:e.spacing(6,2)},card:{width:e.breakpoints.values.md,maxWidth:"100%",overflow:"unset",display:"flex",position:"relative","& > *":{flexGrow:1,flexBasis:"50%",width:"50%"}},content:{padding:e.spacing(8,4,3,4)},icon:{backgroundImage:p.a.green,color:e.palette.white,borderRadius:e.shape.borderRadius,padding:e.spacing(1),position:"absolute",top:-32,left:e.spacing(3),height:64,width:64,fontSize:32},loginForm:{marginTop:e.spacing(3)},divider:{margin:e.spacing(2,0)}}})),I=function(){var e,a,t=G(),n=Object(B.b)();return"success"===n.authState?r.a.createElement(z.a,{to:(null===(e=n.user)||void 0===e?void 0:e.role)?"/"+(null===(a=n.user)||void 0===a?void 0:a.role):"/student"}):"pending"===n.authState?r.a.createElement(s.a,{align:"center",variant:"body2"},"Authenticating"):r.a.createElement(m.i,{className:t.root,title:"\u0110\u0103ng nh\u1eadp"},r.a.createElement(l.a,{className:t.card},r.a.createElement(c.a,{className:t.content},r.a.createElement(d.a,{className:t.icon}),r.a.createElement(s.a,{gutterBottom:!0,variant:"h3"},"\u0110\u0103ng nh\u1eadp"),r.a.createElement(s.a,{variant:"subtitle2"},"Truy c\u1eadp v\xe0o h\u1ec7 th\u1ed1ng"),r.a.createElement(T,{className:t.loginForm}),r.a.createElement(o.a,{className:t.divider}))))}}}]);
//# sourceMappingURL=25.4a18c29c.chunk.js.map