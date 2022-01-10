(this["webpackJsonpdevias-material-kit-pro"]=this["webpackJsonpdevias-material-kit-pro"]||[]).push([[11],{1050:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return X}));var n=a(16),r=a(0),c=a.n(r),o=a(263),l=a(40),i=a(1),s=a.n(i),u=a(4),m=a(15),d=a(3),p=a(839),g=a(76),h=a(827),b=a(264),f=a(821),v=a(834),E=a(822),P=a(806),j=a(808),O=a(841),x=a(874),w=a(215),C=a(29),N=a(53),k=c.a.createContext(),y=function(){var e=c.a.useContext(k);if(void 0===e)throw new Error("useSubjectContext must be used within a SubjectProvider");return e},S=function(e){var t=c.a.useState([]),a=Object(n.a)(t,2),o=a[0],l=a[1],i=c.a.useState(!0),m=Object(n.a)(i,2),d=m[0],p=m[1],g=c.a.useState(null),h=Object(n.a)(g,2),b=h[0],f=h[1],v=Object(r.useCallback)(Object(u.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N.a.get("/subjects");case 3:return e.next=5,e.sent.data;case 5:t=e.sent,l(t.data),p(!1),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(0),f(e.t0),p(!1);case 14:case"end":return e.stop()}}),e,null,[[0,10]])}))),[]);c.a.useEffect((function(){v()}),[v]);var E=c.a.useMemo((function(){var e=function(){var e=Object(u.a)(s.a.mark((function e(t){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N.a.post("/subjects",t);case 3:return e.next=5,e.sent.data;case 5:return a=e.sent,l([].concat(Object(C.a)(o),[a.data])),e.abrupt("return",a);case 10:e.prev=10,e.t0=e.catch(0);case 12:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}();return{subjects:o,loading:d,error:b,deleteSubject:function(){var e=Object(u.a)(s.a.mark((function e(t){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N.a.delete("/subjects/".concat(t.id));case 3:return e.next=5,e.sent.data;case 5:return a=e.sent,e.abrupt("return",a);case 9:e.prev=9,e.t0=e.catch(0),f(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),updateSubject:function(){var e=Object(u.a)(s.a.mark((function e(t){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N.a.put("/subjects/".concat(t.id),t);case 3:return e.next=5,e.sent.data;case 5:return a=e.sent,v(),e.abrupt("return",a);case 10:e.prev=10,e.t0=e.catch(0),f(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}(),addSubject:e}}),[b,v,d,o]);return c.a.createElement(k.Provider,{value:E},e.children)},I=["className"],R=Object(o.a)((function(){return{root:{},modal:{display:"flex",alignItems:"center",justifyContent:"center"},form:{width:"100%",maxWidth:"600px"}}})),B=function(e){var t=e.className,a=Object(m.a)(e,I),n=Object(x.a)(!1),r=Object(w.e)(),o=R(),l=y().addSubject,i=function(){var e=Object(u.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l(t);case 2:r.reset();case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",Object.assign({},a,{className:Object(d.a)(o.root,t)}),c.a.createElement(p.a,{alignItems:"flex-end",container:!0,justify:"space-between",spacing:3},c.a.createElement(p.a,{item:!0},c.a.createElement(g.a,{component:"h2",gutterBottom:!0,variant:"overline"},"Qu\u1ea3n l\xfd"),c.a.createElement(g.a,{component:"h1",variant:"h3"},"M\xf4n h\u1ecdc")),c.a.createElement(p.a,{item:!0},c.a.createElement(h.a,{onClick:n.handleOpen,color:"primary",variant:"contained"},"Th\xeam m\xf4n h\u1ecdc")))),c.a.createElement(b.a,{className:o.modal,open:n.is_open,onClose:n.handleClose},c.a.createElement(f.a,null,c.a.createElement(v.a,{title:c.a.createElement(g.a,{variant:"h2"},"Th\xeam m\xf4n h\u1ecdc")}),c.a.createElement(E.a,null,c.a.createElement("form",{className:o.form,onSubmit:r.handleSubmit(i),autoComplete:"off"},c.a.createElement(p.a,{container:!0,spacing:3},c.a.createElement(p.a,{item:!0,xs:12},c.a.createElement(P.a,{fullWidth:!0,variant:"outlined",className:o.formControl},c.a.createElement(j.a,{component:"legend"},"T\xean m\xf4n h\u1ecdc"),c.a.createElement(O.a,Object.assign({},r.register("name"),{fullWidth:!0,variant:"outlined"})))),c.a.createElement(p.a,{item:!0,xs:12},c.a.createElement(P.a,{fullWidth:!0,variant:"outlined",className:o.formControl},c.a.createElement(j.a,{component:"legend"},"M\xf4 t\u1ea3 ng\u1eafn"),c.a.createElement(O.a,Object.assign({},r.register("brief"),{fullWidth:!0,variant:"outlined"})))),c.a.createElement(p.a,{item:!0,xs:12},c.a.createElement(p.a,{item:!0,xs:12},c.a.createElement(P.a,{fullWidth:!0,variant:"outlined",className:o.formControl},c.a.createElement(j.a,{component:"legend"},"\u0110\u1ec1 c\u01b0\u01a1ng"),c.a.createElement(O.a,Object.assign({},r.register("description"),{fullWidth:!0,multiline:!0,rows:4,variant:"outlined"}))))),c.a.createElement(p.a,{item:!0,xs:12},c.a.createElement(h.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",disabled:r.formState.isSubmitting},"Th\xeam m\xf4n h\u1ecdc"))))))))},T=a(114),M=a.n(T),W=a(824),L=a(854),A=a(900),z=a(856),D=a(850),H=a(855),J=a(835),K=a(903),Q=a(25),_=a(871),F=["className","handleDeleteOne"],q=Object(o.a)((function(e){return{root:{},content:{padding:0},inner:{minWidth:700},nameCell:{display:"flex",alignItems:"center"},avatar:{height:42,width:42,marginRight:e.spacing(1)},actions:{padding:e.spacing(1),justifyContent:"flex-end"}}})),G=function(e){var t=e.className,a=(e.handleDeleteOne,Object(m.a)(e,F)),n=q(),r=y().subjects,o=Object(_.a)(),i=o.page,s=o.rowsPerPage,u=o.handleChangePage,p=o.handleChangeRowsPerPage;return c.a.createElement("div",Object.assign({},a,{className:Object(d.a)(n.root,t)}),c.a.createElement(g.a,{color:"textSecondary",gutterBottom:!0,variant:"body2"},"C\xf3 ",r.length," m\xf4n h\u1ecdc."),c.a.createElement(f.a,null,c.a.createElement(v.a,{action:c.a.createElement(l.e,null),title:"T\u1ea5t c\u1ea3 m\xf4n h\u1ecdc"}),c.a.createElement(W.a,null),c.a.createElement(E.a,{className:n.content},c.a.createElement(M.a,null,c.a.createElement("div",{className:n.inner},c.a.createElement(L.a,null,c.a.createElement(A.a,null,c.a.createElement(z.a,null,c.a.createElement(D.a,{padding:"checkbox"}),c.a.createElement(D.a,null,"T\xean m\xf4n h\u1ecdc"),c.a.createElement(D.a,null,"M\xf4 t\u1ea3 ng\u1eafn"),c.a.createElement(D.a,{align:"right"},"T\xe1c v\u1ee5"))),c.a.createElement(H.a,null,r.slice(0,s).map((function(e){return c.a.createElement(z.a,{hover:!0,key:e.id},c.a.createElement(D.a,{padding:"checkbox"}),c.a.createElement(D.a,null,c.a.createElement(g.a,{variant:"h6"},e.name)),c.a.createElement(D.a,null,e.brief),c.a.createElement(D.a,{align:"right"},c.a.createElement(h.a,{component:Q.a,to:"/admin/subjects/"+e.id,color:"primary",size:"small",variant:"outlined"},"Chi ti\u1ebft")))}))))))),c.a.createElement(J.a,{className:n.actions},c.a.createElement(K.a,{component:"div",count:r.length,onChangePage:u,onChangeRowsPerPage:p,page:i,rowsPerPage:s,rowsPerPageOptions:[5,10,25]}))))};G.defaultProps={subjects:[]};var U=G,V=Object(o.a)((function(e){return{root:{padding:e.spacing(3)},results:{marginTop:e.spacing(3)},modal:{display:"grid",placeItems:"center"}}})),X=function(){var e=V(),t=Object(r.useState)([]),a=Object(n.a)(t,2),o=a[0];a[1];return c.a.createElement(S,null,c.a.createElement(l.i,{className:e.root,title:"Qu\u1ea3n l\xfd m\xf4n h\u1ecdc"},c.a.createElement(B,null),o&&c.a.createElement(U,{className:e.results,subjects:o})))}},871:function(e,t,a){"use strict";var n=a(16),r=a(0).useState;t.a=function(){var e=r(0),t=Object(n.a)(e,2),a=t[0],c=t[1],o=r(10),l=Object(n.a)(o,2),i=l[0],s=l[1];return{page:a,rowsPerPage:i,handleChangePage:function(e,t){c(t)},handleChangeRowsPerPage:function(e){s(e.target.value)}}}},874:function(e,t,a){"use strict";var n=a(16),r=a(0);t.a=function(e){var t=Object(r.useState)(e),a=Object(n.a)(t,2),c=a[0],o=a[1];return{is_open:c,handleClose:function(){o(!1)},handleOpen:function(){o(!0)}}}},877:function(e,t,a){"use strict";var n=a(0),r=a(45);t.a=Object(r.a)(n.createElement("path",{d:"M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"}),"KeyboardArrowRight")},878:function(e,t,a){"use strict";var n=a(0),r=a(45);t.a=Object(r.a)(n.createElement("path",{d:"M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"}),"KeyboardArrowLeft")},900:function(e,t,a){"use strict";var n=a(2),r=a(6),c=a(0),o=(a(7),a(3)),l=a(9),i=a(116),s={variant:"head"},u=c.forwardRef((function(e,t){var a=e.classes,l=e.className,u=e.component,m=void 0===u?"thead":u,d=Object(r.a)(e,["classes","className","component"]);return c.createElement(i.a.Provider,{value:s},c.createElement(m,Object(n.a)({className:Object(o.a)(a.root,l),ref:t,role:"thead"===m?null:"rowgroup"},d)))}));t.a=Object(l.a)({root:{display:"table-header-group"}},{name:"MuiTableHead"})(u)},903:function(e,t,a){"use strict";var n=a(2),r=a(6),c=a(0),o=(a(7),a(3)),l=a(9),i=a(509),s=a(831),u=a(813),m=a(850),d=a(819),p=a(76),g=a(878),h=a(877),b=a(37),f=a(799),v=c.createElement(h.a,null),E=c.createElement(g.a,null),P=c.createElement(g.a,null),j=c.createElement(h.a,null),O=c.forwardRef((function(e,t){var a=e.backIconButtonProps,o=e.count,l=e.nextIconButtonProps,i=e.onChangePage,s=void 0===i?function(){}:i,u=e.onPageChange,m=void 0===u?function(){}:u,d=e.page,p=e.rowsPerPage,g=Object(r.a)(e,["backIconButtonProps","count","nextIconButtonProps","onChangePage","onPageChange","page","rowsPerPage"]),h=Object(b.a)();return c.createElement("div",Object(n.a)({ref:t},g),c.createElement(f.a,Object(n.a)({onClick:function(e){s(e,d-1),m(e,d-1)},disabled:0===d,color:"inherit"},a),"rtl"===h.direction?v:E),c.createElement(f.a,Object(n.a)({onClick:function(e){s(e,d+1),m(e,d+1)},disabled:-1!==o&&d>=Math.ceil(o/p)-1,color:"inherit"},l),"rtl"===h.direction?P:j))})),x=a(115),w=function(e){var t=e.from,a=e.to,n=e.count;return"".concat(t,"-").concat(a," of ").concat(-1!==n?n:"more than ".concat(a))},C=[10,25,50,100],N=c.forwardRef((function(e,t){var a,l=e.ActionsComponent,g=void 0===l?O:l,h=e.backIconButtonProps,b=e.backIconButtonText,f=void 0===b?"Previous page":b,v=e.classes,E=e.className,P=e.colSpan,j=e.component,N=void 0===j?m.a:j,k=e.count,y=e.labelDisplayedRows,S=void 0===y?w:y,I=e.labelRowsPerPage,R=void 0===I?"Rows per page:":I,B=e.nextIconButtonProps,T=e.nextIconButtonText,M=void 0===T?"Next page":T,W=e.onChangePage,L=e.onPageChange,A=e.onChangeRowsPerPage,z=e.onRowsPerPageChange,D=e.page,H=e.rowsPerPage,J=e.rowsPerPageOptions,K=void 0===J?C:J,Q=e.SelectProps,_=void 0===Q?{}:Q,F=Object(r.a)(e,["ActionsComponent","backIconButtonProps","backIconButtonText","classes","className","colSpan","component","count","labelDisplayedRows","labelRowsPerPage","nextIconButtonProps","nextIconButtonText","onChangePage","onPageChange","onChangeRowsPerPage","onRowsPerPageChange","page","rowsPerPage","rowsPerPageOptions","SelectProps"]),q=A||z;N!==m.a&&"td"!==N||(a=P||1e3);var G=Object(x.a)(),U=Object(x.a)(),V=_.native?"option":s.a;return c.createElement(N,Object(n.a)({className:Object(o.a)(v.root,E),colSpan:a,ref:t},F),c.createElement(d.a,{className:v.toolbar},c.createElement("div",{className:v.spacer}),K.length>1&&c.createElement(p.a,{color:"inherit",variant:"body2",className:v.caption,id:U},R),K.length>1&&c.createElement(u.a,Object(n.a)({classes:{select:v.select,icon:v.selectIcon},input:c.createElement(i.a,{className:Object(o.a)(v.input,v.selectRoot)}),value:H,onChange:q,id:G,labelId:U},_),K.map((function(e){return c.createElement(V,{className:v.menuItem,key:e.value?e.value:e,value:e.value?e.value:e},e.label?e.label:e)}))),c.createElement(p.a,{color:"inherit",variant:"body2",className:v.caption},S({from:0===k?0:D*H+1,to:-1!==k?Math.min(k,(D+1)*H):(D+1)*H,count:-1===k?-1:k,page:D})),c.createElement(g,{className:v.actions,backIconButtonProps:Object(n.a)({title:f,"aria-label":f},h),count:k,nextIconButtonProps:Object(n.a)({title:M,"aria-label":M},B),onChangePage:W,onPageChange:L,page:D,rowsPerPage:H})))}));t.a=Object(l.a)((function(e){return{root:{color:e.palette.text.primary,fontSize:e.typography.pxToRem(14),overflow:"auto","&:last-child":{padding:0}},toolbar:{minHeight:52,paddingRight:2},spacer:{flex:"1 1 100%"},caption:{flexShrink:0},selectRoot:{marginRight:32,marginLeft:8},select:{paddingLeft:8,paddingRight:24,textAlign:"right",textAlignLast:"right"},selectIcon:{},input:{color:"inherit",fontSize:"inherit",flexShrink:0},menuItem:{},actions:{flexShrink:0,marginLeft:20}}}),{name:"MuiTablePagination"})(N)}}]);
//# sourceMappingURL=11.b1142df6.chunk.js.map