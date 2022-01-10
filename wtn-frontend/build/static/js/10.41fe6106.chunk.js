(this["webpackJsonpdevias-material-kit-pro"]=this["webpackJsonpdevias-material-kit-pro"]||[]).push([[10],{1049:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return ee}));var n=t(0),r=t.n(n),c=t(263),o=t(40),l=t(1),i=t.n(l),s=t(4),u=t(15),m=t(3),d=t(839),p=t(76),g=t(827),h=t(264),f=t(821),v=t(834),E=t(822),b=t(806),P=t(808),O=t(841),j=t(813),w=t(831),x=t(874),C=t(215),N=t(16),y=t(53),k=r.a.createContext(),R=function(){var e=r.a.useContext(k);if(void 0===e)throw new Error("useAccountContext must be used within a AccountProvider");return e},I=function(e){var a=r.a.useState([]),t=Object(N.a)(a,2),n=t[0],c=t[1],o=r.a.useState(!0),l=Object(N.a)(o,2),u=l[0],m=l[1],d=r.a.useState(null),p=Object(N.a)(d,2),g=p[0],h=p[1],f=function(){var e=Object(s.a)(i.a.mark((function e(){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y.a.get("/users");case 3:return e.next=5,e.sent.data;case 5:a=e.sent,c(a.data),m(!1),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(0),h(e.t0),m(!1);case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();r.a.useEffect((function(){f()}),[]);var v=r.a.useMemo((function(){return{accounts:n,loading:u,error:g,addAccount:function(){var e=Object(s.a)(i.a.mark((function e(a){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y.a.post("/users",a);case 3:return e.next=5,e.sent.data;case 5:return t=e.sent,f(),e.abrupt("return",t);case 10:e.prev=10,e.t0=e.catch(0),h(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(a){return e.apply(this,arguments)}}()}}),[n,u,g]);return r.a.createElement(k.Provider,{value:v},e.children)},S=["className","openAddSomeoneModal"],B=Object(c.a)((function(){return{root:{},modal:{display:"flex",alignItems:"center",justifyContent:"center"},form:{width:"100%",maxWidth:"600px"}}})),T=function(e){var a=e.className,t=(e.openAddSomeoneModal,Object(u.a)(e,S)),n=Object(x.a)(!1),c=Object(C.e)(),o=R().addAccount,l=function(){var e=Object(s.a)(i.a.mark((function e(a){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o(a);case 2:c.reset(),n.handleClose();case 4:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),N=B();return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",Object.assign({},t,{className:Object(m.a)(N.root,a)}),r.a.createElement(d.a,{alignItems:"flex-end",container:!0,justify:"space-between",spacing:3},r.a.createElement(d.a,{item:!0},r.a.createElement(p.a,{component:"h2",gutterBottom:!0,variant:"overline"},"Qu\u1ea3n l\xfd"),r.a.createElement(p.a,{component:"h1",variant:"h3"},"T\xe0i kho\u1ea3n")),r.a.createElement(d.a,{item:!0},r.a.createElement(g.a,{onClick:n.handleOpen,color:"primary",variant:"contained"},"Th\xeam t\xe0i kho\u1ea3n")))),r.a.createElement(h.a,{className:N.modal,open:n.is_open,onClose:n.handleClose},r.a.createElement(f.a,null,r.a.createElement(v.a,{title:r.a.createElement(p.a,{variant:"h2"},"Th\xeam t\xe0i kho\u1ea3n")}),r.a.createElement(E.a,null,r.a.createElement("form",{className:N.form,onSubmit:c.handleSubmit(l),autoComplete:"off"},r.a.createElement(d.a,{container:!0,spacing:3},r.a.createElement(d.a,{item:!0,xs:12},r.a.createElement(b.a,{fullWidth:!0,variant:"outlined",className:N.formControl},r.a.createElement(P.a,{component:"legend"},"H\u1ecd t\xean"),r.a.createElement(O.a,Object.assign({},c.register("displayName"),{fullWidth:!0,variant:"outlined"})))),r.a.createElement(d.a,{item:!0,xs:12},r.a.createElement(b.a,{fullWidth:!0,variant:"outlined",className:N.formControl},r.a.createElement(P.a,{component:"legend"},"Email"),r.a.createElement(O.a,Object.assign({},c.register("email"),{fullWidth:!0,variant:"outlined"})))),r.a.createElement(d.a,{item:!0,xs:12},r.a.createElement(d.a,{item:!0,xs:12},r.a.createElement(b.a,{fullWidth:!0,variant:"outlined",className:N.formControl},r.a.createElement(P.a,{component:"legend"},"M\u1eadt kh\u1ea9u"),r.a.createElement(O.a,Object.assign({type:"password"},c.register("password"),{fullWidth:!0,variant:"outlined"}))))),r.a.createElement(d.a,{item:!0,xs:12},r.a.createElement(b.a,{fullWidth:!0,variant:"outlined",className:N.formControl},r.a.createElement(P.a,{component:"legend"},"Lo\u1ea1i t\xe0i kho\u1ea3n"),r.a.createElement(j.a,c.register("role"),r.a.createElement(w.a,{value:"admin"},"Admin"),r.a.createElement(w.a,{value:"instructor"},"Gi\u1ea3ng vi\xean")))),r.a.createElement(d.a,{item:!0,xs:12},r.a.createElement(g.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",disabled:c.formState.isSubmitting},"Th\xeam"))))))))},A=t(114),M=t.n(A),W=t(824),L=t(854),z=t(900),H=t(856),D=t(850),_=t(855),Q=t(866),G=t(820),J=t(835),K=t(903),F=t(875),U=t.n(F),V=t(871),q=t(25),X=["className","handleDeleteOne"],Y=Object(c.a)((function(e){return{root:{},content:{padding:0},inner:{minWidth:700},nameCell:{display:"flex",alignItems:"center"},avatar:{height:42,width:42,marginRight:e.spacing(1)},actions:{padding:e.spacing(1),justifyContent:"flex-end"}}})),Z=function(e){var a=e.className,t=(e.handleDeleteOne,Object(u.a)(e,X)),n=R().accounts,c=Y(),l={instructor:"Gi\u1ea3ng vi\xean",admin:"Qu\u1ea3n tr\u1ecb vi\xean"},i=Object(V.a)(),s=i.page,d=i.rowsPerPage,h=i.handleChangePage,b=i.handleChangeRowsPerPage;return r.a.createElement("div",Object.assign({},t,{className:Object(m.a)(c.root,a)}),r.a.createElement(p.a,{color:"textSecondary",gutterBottom:!0,variant:"body2"},"T\u1ed5ng ",n.length," t\xe0i kho\u1ea3n.",Math.ceil(n.length/d)),r.a.createElement(f.a,null,r.a.createElement(v.a,{action:r.a.createElement(o.e,null),title:"T\u1ea5t c\u1ea3 t\xe0i kho\u1ea3n"}),r.a.createElement(W.a,null),r.a.createElement(E.a,{className:c.content},r.a.createElement(M.a,null,r.a.createElement("div",{className:c.inner},r.a.createElement(L.a,null,r.a.createElement(z.a,null,r.a.createElement(H.a,null,r.a.createElement(D.a,null,"H\u1ecd t\xean ","&"," Email"),r.a.createElement(D.a,null,"Vai tr\xf2"),r.a.createElement(D.a,{align:"right"},"T\xe1c v\u1ee5"))),r.a.createElement(_.a,null,n.length>0?n.slice(0,d).map((function(e){var a;return r.a.createElement(H.a,{hover:!0,key:e.uid},r.a.createElement(D.a,null,r.a.createElement("div",{className:c.nameCell},r.a.createElement(Q.a,{src:e.photoURL,className:c.avatar},r.a.createElement(U.a,null)),r.a.createElement("div",null,r.a.createElement(p.a,{variant:"h6"},e.displayName),r.a.createElement("div",null,e.email)))),r.a.createElement(D.a,null,l[null===(a=e.customClaims)||void 0===a?void 0:a.role]||"H\u1ecdc vi\xean"),r.a.createElement(D.a,{align:"right"},r.a.createElement(g.a,{component:q.a,color:"primary",variant:"outlined",size:"small",to:"/admin/accounts/".concat(e.uid)},"Chi ti\u1ebft")))})):r.a.createElement(H.a,{colspan:"4"},r.a.createElement("td",{colSpan:"100"},r.a.createElement(G.a,null)))))))),r.a.createElement(J.a,{className:c.actions},r.a.createElement(K.a,{component:"div",count:n.length,onChangePage:h,onChangeRowsPerPage:b,page:s,rowsPerPage:d,rowsPerPageOptions:[5,10,25]}))))},$=Object(c.a)((function(e){return{root:{padding:e.spacing(3)},results:{marginTop:e.spacing(3)},modal:{display:"flex",justifyContent:"center",alignItems:"center"}}})),ee=function(){var e=$();return r.a.createElement(I,null,r.a.createElement(o.i,{className:e.root,title:"Qu\u1ea3n l\xfd t\xe0i kho\u1ea3n"},r.a.createElement(T,null),r.a.createElement(Z,{className:e.results})))}},871:function(e,a,t){"use strict";var n=t(16),r=t(0).useState;a.a=function(){var e=r(0),a=Object(n.a)(e,2),t=a[0],c=a[1],o=r(10),l=Object(n.a)(o,2),i=l[0],s=l[1];return{page:t,rowsPerPage:i,handleChangePage:function(e,a){c(a)},handleChangeRowsPerPage:function(e){s(e.target.value)}}}},874:function(e,a,t){"use strict";var n=t(16),r=t(0);a.a=function(e){var a=Object(r.useState)(e),t=Object(n.a)(a,2),c=t[0],o=t[1];return{is_open:c,handleClose:function(){o(!1)},handleOpen:function(){o(!0)}}}},875:function(e,a,t){"use strict";var n=t(17),r=t(18);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var c=r(t(0)),o=(0,n(t(19)).default)(c.createElement("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");a.default=o},877:function(e,a,t){"use strict";var n=t(0),r=t(45);a.a=Object(r.a)(n.createElement("path",{d:"M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"}),"KeyboardArrowRight")},878:function(e,a,t){"use strict";var n=t(0),r=t(45);a.a=Object(r.a)(n.createElement("path",{d:"M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"}),"KeyboardArrowLeft")},900:function(e,a,t){"use strict";var n=t(2),r=t(6),c=t(0),o=(t(7),t(3)),l=t(9),i=t(116),s={variant:"head"},u=c.forwardRef((function(e,a){var t=e.classes,l=e.className,u=e.component,m=void 0===u?"thead":u,d=Object(r.a)(e,["classes","className","component"]);return c.createElement(i.a.Provider,{value:s},c.createElement(m,Object(n.a)({className:Object(o.a)(t.root,l),ref:a,role:"thead"===m?null:"rowgroup"},d)))}));a.a=Object(l.a)({root:{display:"table-header-group"}},{name:"MuiTableHead"})(u)},903:function(e,a,t){"use strict";var n=t(2),r=t(6),c=t(0),o=(t(7),t(3)),l=t(9),i=t(509),s=t(831),u=t(813),m=t(850),d=t(819),p=t(76),g=t(878),h=t(877),f=t(37),v=t(799),E=c.createElement(h.a,null),b=c.createElement(g.a,null),P=c.createElement(g.a,null),O=c.createElement(h.a,null),j=c.forwardRef((function(e,a){var t=e.backIconButtonProps,o=e.count,l=e.nextIconButtonProps,i=e.onChangePage,s=void 0===i?function(){}:i,u=e.onPageChange,m=void 0===u?function(){}:u,d=e.page,p=e.rowsPerPage,g=Object(r.a)(e,["backIconButtonProps","count","nextIconButtonProps","onChangePage","onPageChange","page","rowsPerPage"]),h=Object(f.a)();return c.createElement("div",Object(n.a)({ref:a},g),c.createElement(v.a,Object(n.a)({onClick:function(e){s(e,d-1),m(e,d-1)},disabled:0===d,color:"inherit"},t),"rtl"===h.direction?E:b),c.createElement(v.a,Object(n.a)({onClick:function(e){s(e,d+1),m(e,d+1)},disabled:-1!==o&&d>=Math.ceil(o/p)-1,color:"inherit"},l),"rtl"===h.direction?P:O))})),w=t(115),x=function(e){var a=e.from,t=e.to,n=e.count;return"".concat(a,"-").concat(t," of ").concat(-1!==n?n:"more than ".concat(t))},C=[10,25,50,100],N=c.forwardRef((function(e,a){var t,l=e.ActionsComponent,g=void 0===l?j:l,h=e.backIconButtonProps,f=e.backIconButtonText,v=void 0===f?"Previous page":f,E=e.classes,b=e.className,P=e.colSpan,O=e.component,N=void 0===O?m.a:O,y=e.count,k=e.labelDisplayedRows,R=void 0===k?x:k,I=e.labelRowsPerPage,S=void 0===I?"Rows per page:":I,B=e.nextIconButtonProps,T=e.nextIconButtonText,A=void 0===T?"Next page":T,M=e.onChangePage,W=e.onPageChange,L=e.onChangeRowsPerPage,z=e.onRowsPerPageChange,H=e.page,D=e.rowsPerPage,_=e.rowsPerPageOptions,Q=void 0===_?C:_,G=e.SelectProps,J=void 0===G?{}:G,K=Object(r.a)(e,["ActionsComponent","backIconButtonProps","backIconButtonText","classes","className","colSpan","component","count","labelDisplayedRows","labelRowsPerPage","nextIconButtonProps","nextIconButtonText","onChangePage","onPageChange","onChangeRowsPerPage","onRowsPerPageChange","page","rowsPerPage","rowsPerPageOptions","SelectProps"]),F=L||z;N!==m.a&&"td"!==N||(t=P||1e3);var U=Object(w.a)(),V=Object(w.a)(),q=J.native?"option":s.a;return c.createElement(N,Object(n.a)({className:Object(o.a)(E.root,b),colSpan:t,ref:a},K),c.createElement(d.a,{className:E.toolbar},c.createElement("div",{className:E.spacer}),Q.length>1&&c.createElement(p.a,{color:"inherit",variant:"body2",className:E.caption,id:V},S),Q.length>1&&c.createElement(u.a,Object(n.a)({classes:{select:E.select,icon:E.selectIcon},input:c.createElement(i.a,{className:Object(o.a)(E.input,E.selectRoot)}),value:D,onChange:F,id:U,labelId:V},J),Q.map((function(e){return c.createElement(q,{className:E.menuItem,key:e.value?e.value:e,value:e.value?e.value:e},e.label?e.label:e)}))),c.createElement(p.a,{color:"inherit",variant:"body2",className:E.caption},R({from:0===y?0:H*D+1,to:-1!==y?Math.min(y,(H+1)*D):(H+1)*D,count:-1===y?-1:y,page:H})),c.createElement(g,{className:E.actions,backIconButtonProps:Object(n.a)({title:v,"aria-label":v},h),count:y,nextIconButtonProps:Object(n.a)({title:A,"aria-label":A},B),onChangePage:M,onPageChange:W,page:H,rowsPerPage:D})))}));a.a=Object(l.a)((function(e){return{root:{color:e.palette.text.primary,fontSize:e.typography.pxToRem(14),overflow:"auto","&:last-child":{padding:0}},toolbar:{minHeight:52,paddingRight:2},spacer:{flex:"1 1 100%"},caption:{flexShrink:0},selectRoot:{marginRight:32,marginLeft:8},select:{paddingLeft:8,paddingRight:24,textAlign:"right",textAlignLast:"right"},selectIcon:{},input:{color:"inherit",fontSize:"inherit",flexShrink:0},menuItem:{},actions:{flexShrink:0,marginLeft:20}}}),{name:"MuiTablePagination"})(N)}}]);
//# sourceMappingURL=10.41fe6106.chunk.js.map