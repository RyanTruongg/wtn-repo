(this["webpackJsonpdevias-material-kit-pro"]=this["webpackJsonpdevias-material-kit-pro"]||[]).push([[3],{1038:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return ze}));var n=a(16),r=a(0),c=a.n(r),l=a(27),s=a(263),i=a(8),o=a(1056),m=a(1037),u=a(824),d=a(40),p=a(15),g=a(3),h=a(861),f=a(114),b=a.n(f),E=a(76),v=a(821),j=a(834),O=a(822),w=a(854),x=a(900),N=a(856),C=a(850),y=a(855),k=a(835),P=a(903),T=a(275),S=a(265),B=["className"],I=Object(s.a)((function(e){return{root:{},content:{padding:0},inner:{minWidth:700},nameCell:{display:"flex",alignItems:"center"},avatar:{height:42,width:42,marginRight:e.spacing(2)},actions:{padding:e.spacing(1),justifyContent:"flex-end"}}})),_=function(e){var t=e.className,a=Object(p.a)(e,B),l=I(),s=Object(r.useState)(0),i=Object(n.a)(s,2),o=i[0],m=i[1],h=Object(r.useState)(10),f=Object(n.a)(h,2),_=f[0],W=f[1],D=Object(T.b)(),A=D.questionInTest,R=D.deleteQuestion,q=Object(S.b)().testDetails,Q=Date.now(),M=Date.parse(q.end_time)<Q,V=Date.parse(q.start_time)<Q;return c.a.createElement("div",Object.assign({},a,{className:Object(g.a)(l.root,t)}),c.a.createElement(E.a,{color:"textSecondary",gutterBottom:!0,variant:"body2"},"T\u1ed5ng ",A.length," C\xe2u h\u1ecfi"),c.a.createElement(v.a,null,c.a.createElement(j.a,{title:"T\u1ea5t c\u1ea3 c\xe2u h\u1ecfi"}),c.a.createElement(u.a,null),c.a.createElement(O.a,{className:l.content},c.a.createElement(b.a,null,c.a.createElement("div",{className:l.inner},c.a.createElement(w.a,null,c.a.createElement(x.a,null,c.a.createElement(N.a,null,c.a.createElement(C.a,null,"N\u1ed9i dung"),c.a.createElement(C.a,null,"M\xf4n h\u1ecdc"),c.a.createElement(C.a,{align:"right"},"T\xe1c v\u1ee5"))),c.a.createElement(y.a,null,A.slice(0,_).map((function(e){return c.a.createElement(N.a,{hover:!0,key:e.id},c.a.createElement(C.a,null,c.a.createElement("div",{className:l.nameCell},c.a.createElement("div",null,c.a.createElement(E.a,{color:"inherit",variant:"h6"},e.content)))),c.a.createElement(C.a,null,e.subject_name),c.a.createElement(C.a,{align:"right"},c.a.createElement(d.d,{size:"small",variant:"outlined",onClick:function(){return R(e.id)},disabled:V||M},"X\xf3a")))}))))))),c.a.createElement(k.a,{className:l.actions},c.a.createElement(P.a,{component:"div",count:A.length,onChangePage:function(e,t){m(t)},onChangeRowsPerPage:function(e){W(e.target.value)},page:o,rowsPerPage:_,rowsPerPageOptions:[5,10,25]}))))};_.defaultProps={questionInTest:[]};var W=_,D=a(839),A=a(827),R=["className","openAddStudentModal"],q=Object(s.a)((function(){return{root:{marginBottom:"1rem"}}})),Q=function(e){var t=e.className,a=e.openAddStudentModal,n=Object(p.a)(e,R),r=q(),l=Object(S.b)().testDetails,s=Date.now(),i=Date.parse(l.end_time)<s,o=Date.parse(l.start_time)<s;return c.a.createElement("div",Object.assign({},n,{className:Object(g.a)(r.root,t)}),c.a.createElement(D.a,{alignItems:"flex-end",container:!0,justify:"space-between",spacing:3},c.a.createElement(D.a,{item:!0},c.a.createElement(E.a,{component:"h1",variant:"h3"},"C\xe2u h\u1ecfi trong b\xe0i ki\u1ec3m tra")),c.a.createElement(D.a,{item:!0},c.a.createElement(A.a,{onClick:a,color:"primary",variant:"contained",disabled:o||i},"Th\xeam c\xe2u h\u1ecfi"))))},M=a(264),V=a(24),L=a(1),F=a.n(L),G=a(4),H=a(841),K=a(848),X=a(808),z=a(831),J=a(864),U=a(874),Y=a(215),Z=a(53),$=c.a.createContext(),ee=function(){var e=c.a.useContext($);if(void 0===e)throw new Error("useQuestionsContext must be used within a QuestionProvider");return e},te=function(e){var t=c.a.useState([]),a=Object(n.a)(t,2),r=a[0],l=a[1],s=c.a.useState(!0),i=Object(n.a)(s,2),o=i[0],m=i[1],u=c.a.useState(null),d=Object(n.a)(u,2),p=d[0],g=d[1],h=function(){var e=Object(G.a)(F.a.mark((function e(){var t;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Z.a.get("/questions");case 3:return e.next=5,e.sent.data;case 5:t=e.sent,l(t.data),m(!1),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(0),g(e.t0),m(!1);case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();c.a.useEffect((function(){h()}),[]);var f=c.a.useMemo((function(){return{questions:r,loading:o,error:p,addQuestion:function(){var e=Object(G.a)(F.a.mark((function e(t){var a;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Z.a.post("/questions",t);case 3:return e.next=5,e.sent.data;case 5:return a=e.sent,h(),e.abrupt("return",a);case 10:e.prev=10,e.t0=e.catch(0),g(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}(),updateQuestion:function(){var e=Object(G.a)(F.a.mark((function e(t){var a;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Z.a.put("/questions/".concat(t.id),t);case 3:return e.next=5,e.sent.data;case 5:return a=e.sent,h(),e.abrupt("return",a);case 10:e.prev=10,e.t0=e.catch(0),g(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}(),deleteQuestion:function(){var e=Object(G.a)(F.a.mark((function e(t){var a;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Z.a.delete("/questions/".concat(t));case 3:return e.next=5,e.sent.data;case 5:return a=e.sent,h(),e.abrupt("return",a);case 10:e.prev=10,e.t0=e.catch(0),g(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}()}}),[r,o,p]);return c.a.createElement($.Provider,{value:f},e.children)},ae=["adornment","className","register"],ne=["className","openAddQuestionModal"],re=Object(s.a)((function(){return{root:{},modal:{display:"flex",alignItems:"center",justifyContent:"center"},card:{maxHeight:"90vh",overflow:"auto","&::-webkit-scrollbar":{width:0}},form:{width:"100%",maxWidth:"700px",position:"relative"},submitBtn:{padding:"0.5rem 3rem"},multiAnswers:{display:"flex",marginBottom:"0.5rem",alignItems:"center"},label:{marginBottom:"0.75rem"}}})),ce={content:"",subject:"",answers:[{content:"",short_name:"A",status:!1},{content:"",short_name:"B",status:!1},{content:"",short_name:"C",status:!1},{content:"",short_name:"D",status:!1}]},le=function(e){var t=e.adornment,a=e.className,n=e.register,r=Object(p.a)(e,ae),l=re();return c.a.createElement(H.a,Object.assign({},n,r,{className:Object(g.a)(l.multiAnswers,a),fullWidth:!0,variant:"outlined",InputProps:{startAdornment:c.a.createElement(K.a,{position:"start"},t)}}))},se=function(e){var t,a=e.className,r=(e.openAddQuestionModal,Object(p.a)(e,ne)),l=c.a.useState([]),s=Object(n.a)(l,2),i=s[0],o=s[1],m=re(),u=Object(U.a)(!1),d=Object(Y.e)({defaultValues:ce}),f=ee().addQuestion,b=function(){var e=Object(G.a)(F.a.mark((function e(t){return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f(t);case 2:console.log(t),d.reset();case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return c.a.useEffect((function(){(function(){var e=Object(G.a)(F.a.mark((function e(){var t;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Z.a.get("/subjects");case 2:return e.next=4,e.sent.data;case 4:t=e.sent,o(t.data);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),c.a.createElement(c.a.Fragment,null,c.a.createElement("div",Object.assign({},r,{className:Object(g.a)(m.root,a)}),c.a.createElement(D.a,{alignItems:"flex-end",container:!0,justify:"space-between",spacing:3},c.a.createElement(D.a,{item:!0},c.a.createElement(E.a,{component:"h2",gutterBottom:!0,variant:"overline"},"Qu\u1ea3n l\xfd"),c.a.createElement(E.a,{component:"h1",variant:"h3"},"C\xe2u h\u1ecfi tr\u1eafc nghi\u1ec7m")),c.a.createElement(D.a,{item:!0},c.a.createElement(A.a,{onClick:u.handleOpen,color:"primary",variant:"contained"},"Th\xeam c\xe2u h\u1ecfi")))),c.a.createElement(M.a,{className:m.modal,open:u.is_open,onClose:u.handleClose},c.a.createElement(v.a,{className:m.card},c.a.createElement(j.a,{title:c.a.createElement(E.a,{variant:"h2"},"Th\xeam c\xe2u h\u1ecfi tr\u1eafc nghi\u1ec7m")}),c.a.createElement(O.a,null,c.a.createElement("form",{className:m.form,onSubmit:d.handleSubmit(b),autoComplete:"off"},c.a.createElement(D.a,{container:!0,spacing:4},c.a.createElement(D.a,{item:!0,xs:12},c.a.createElement(X.a,{className:m.label,component:"legend"},"N\u1ed9i dung c\xe2u h\u1ecfi"),c.a.createElement(H.a,Object.assign({},d.register("content"),{fullWidth:!0,multiline:!0,rows:4,variant:"outlined"}))),c.a.createElement(D.a,{item:!0,xs:12},c.a.createElement(X.a,{className:m.label,component:"legend"},"M\xf4n h\u1ecdc"),c.a.createElement(Y.a,{name:"subject_id",control:d.control,render:function(e){var t=e.field;return c.a.createElement(H.a,Object.assign({disabled:i.length<=0,select:!0},t,{variant:"outlined",fullWidth:!0}),i.map((function(e){return c.a.createElement(z.a,{key:e.id,value:e.id},e.name)})))}})),c.a.createElement(D.a,{item:!0,xs:12},c.a.createElement(X.a,{className:m.label,component:"legend"},"C\xe2u tr\u1ea3 l\u1eddi"),null===(t=d.getValues("answers"))||void 0===t?void 0:t.map((function(e,t){return c.a.createElement(h.a,{key:e.short_name,className:m.multiAnswers},c.a.createElement(le,{register:Object(V.a)({},d.register("answers.".concat(t,".content"))),adornment:e.short_name+"."}),c.a.createElement(J.a,Object.assign({},d.register("answers.".concat(t,".status")),{color:"primary"})))}))),c.a.createElement(D.a,{item:!0,xs:12},c.a.createElement(A.a,{className:m.submitBtn,type:"submit",variant:"contained",color:"primary",fullWidth:!0},"Th\xeam c\xe2u h\u1ecfi"))))))))},ie=a(871),oe=["adornment","className","register"],me=["className","reviewQuestion"],ue=Object(s.a)((function(e){return{root:{},content:{padding:0},inner:{minWidth:700},nameCell:{display:"flex",alignItems:"center"},avatar:{height:42,width:42,marginRight:e.spacing(1)},actions:{padding:e.spacing(1),justifyContent:"flex-end"},modal:{display:"flex",alignItems:"center",justifyContent:"center"},card:{maxHeight:"90vh",overflow:"auto","&::-webkit-scrollbar":{width:0}},form:{width:"100%",maxWidth:"700px",position:"relative"},submitBtn:{padding:"0.5rem 3rem"},multiAnswers:{display:"flex",marginBottom:"0.5rem",alignItems:"center"},label:{marginBottom:"0.75rem"}}})),de=function(e){var t=e.adornment,a=e.className,n=e.register,r=Object(p.a)(e,oe),l=ue();return c.a.createElement(H.a,Object.assign({},n,r,{className:Object(g.a)(l.multiAnswers,a),fullWidth:!0,variant:"outlined",InputProps:{startAdornment:c.a.createElement(K.a,{position:"start"},t)}}))},pe=function(e){var t,a=e.className,r=(e.reviewQuestion,Object(p.a)(e,me)),l=ue(),s=Object(U.a)(!1),i=Object(Y.e)(),o=ee(),m=o.questions,f=o.updateQuestion,T=o.deleteQuestion,S=c.a.useState([]),B=Object(n.a)(S,2),I=B[0],_=B[1];c.a.useEffect((function(){(function(){var e=Object(G.a)(F.a.mark((function e(){var t;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Z.a.get("/subjects");case 2:return e.next=4,e.sent.data;case 4:t=e.sent,_(t.data);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var W=function(){var e=Object(G.a)(F.a.mark((function e(t){return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f(t);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();console.log(I);var R=function(){var e=Object(G.a)(F.a.mark((function e(t){var a;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Z.a.get("/questions/".concat(t));case 2:return e.next=4,e.sent.data;case 4:a=e.sent,i.setValue("id",t),i.setValue("content",a.data.content),i.setValue("subject_id",a.data.subject_id),i.setValue("answers",a.data.answers),s.handleOpen();case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),q=Object(ie.a)(),Q=q.page,L=q.rowsPerPage,K=q.handleChangePage,$=q.handleChangeRowsPerPage;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",Object.assign({},r,{className:Object(g.a)(l.root,a)}),c.a.createElement(E.a,{color:"textSecondary",gutterBottom:!0,variant:"body2"},"T\u1ed5ng ",m.length," C\xe2u h\u1ecfi"),c.a.createElement(v.a,null,c.a.createElement(j.a,{action:c.a.createElement(d.e,null),title:"T\u1ea5t c\u1ea3 c\xe2u h\u1ecfi"}),c.a.createElement(u.a,null),c.a.createElement(O.a,{className:l.content},c.a.createElement(b.a,null,c.a.createElement("div",{className:l.inner},c.a.createElement(w.a,null,c.a.createElement(x.a,null,c.a.createElement(N.a,null,c.a.createElement(C.a,null,"N\u1ed9i dung"),c.a.createElement(C.a,null,"M\xf4n h\u1ecdc"),c.a.createElement(C.a,{align:"right"},"T\xe1c v\u1ee5"))),c.a.createElement(y.a,null,m.slice(0,L).map((function(e){return c.a.createElement(N.a,{hover:!0,key:e.id},c.a.createElement(C.a,null,c.a.createElement("div",{className:l.nameCell},c.a.createElement("div",null,c.a.createElement(E.a,{color:"inherit",variant:"h6"},e.content)))),c.a.createElement(C.a,null,e.subject_name),c.a.createElement(C.a,{align:"right"},c.a.createElement(A.a,{color:"primary",size:"small",variant:"outlined",onClick:function(){return R(e.id)}},"Chi ti\u1ebft")))}))))))),c.a.createElement(k.a,{className:l.actions},c.a.createElement(P.a,{component:"div",count:m.length,onChangePage:K,onChangeRowsPerPage:$,page:Q,rowsPerPage:L,rowsPerPageOptions:[5,10,25]})))),c.a.createElement(M.a,{className:l.modal,open:s.is_open,onClose:s.handleClose},c.a.createElement(v.a,{className:l.card},c.a.createElement(j.a,{title:c.a.createElement(E.a,{variant:"h2"},"Th\xeam c\xe2u h\u1ecfi tr\u1eafc nghi\u1ec7m")}),c.a.createElement(O.a,null,c.a.createElement("form",{className:l.form,onSubmit:i.handleSubmit(W),autoComplete:"off"},c.a.createElement(D.a,{container:!0,spacing:4},c.a.createElement(D.a,{item:!0,xs:12},c.a.createElement(X.a,{className:l.label,component:"legend"},"N\u1ed9i dung c\xe2u h\u1ecfi"),c.a.createElement(H.a,Object.assign({},i.register("content"),{fullWidth:!0,multiline:!0,rows:4,variant:"outlined"}))),c.a.createElement(D.a,{item:!0,xs:12},c.a.createElement(X.a,{className:l.label,component:"legend"},"M\xf4n h\u1ecdc"),c.a.createElement(Y.a,{name:"subject_id",control:i.control,render:function(e){var t=e.field;return c.a.createElement(H.a,Object.assign({disabled:(null===I||void 0===I?void 0:I.length)<=0,select:!0},t,{variant:"outlined",fullWidth:!0}),null===I||void 0===I?void 0:I.map((function(e){return c.a.createElement(z.a,{key:e.id,value:e.id},e.name)})))}})),c.a.createElement(D.a,{item:!0,xs:12},c.a.createElement(X.a,{className:l.label,component:"legend"},"C\xe2u tr\u1ea3 l\u1eddi"),null===(t=i.getValues("answers"))||void 0===t?void 0:t.map((function(e,t){return c.a.createElement(h.a,{key:t,className:l.multiAnswers},c.a.createElement(de,{register:Object(V.a)({},i.register("answers.".concat(t,".content"))),adornment:t+"."}),c.a.createElement(J.a,Object.assign({defaultChecked:e.status},i.register("answers.".concat(t,".status")),{color:"primary"})))}))),c.a.createElement(D.a,{item:!0,xs:12},c.a.createElement(A.a,{className:l.submitBtn,type:"submit",variant:"contained",color:"primary",fullWidth:!0},"C\u1eadp nh\u1eadt"),c.a.createElement(d.d,{className:l.submitBtn,variant:"contained",fullWidth:!0,style:{marginTop:"10px"},onClick:function(){T(i.getValues("id")),s.handleClose()}},"X\xf3a c\xe2u h\u1ecfi"))))))))};pe.defaultProps={questions:[]};var ge=pe,he=(a(274),a(840),a(132),a(273),Object(s.a)((function(e){return{root:{height:"100%",display:"flex",flexDirection:"column"},drawer:{width:420,maxWidth:"100%"},header:{padding:e.spacing(2,1),display:"flex",justifyContent:"space-between"},buttonIcon:{marginRight:e.spacing(1)},content:{padding:e.spacing(0,3),flexGrow:1},actions:{padding:e.spacing(3),"& > * + *":{marginTop:e.spacing(2)}}}})),a(151)),fe=(a(508),a(98),Object(s.a)((function(e){return{root:{display:"flex",alignItems:"center"},search:{flexGrow:1,height:42,padding:e.spacing(0,2),display:"flex",alignItems:"center"},searchIcon:{marginRight:e.spacing(2),color:e.palette.icon},searchInput:{flexGrow:1},searchButton:{marginLeft:e.spacing(2)}}})),Object(s.a)((function(e){return{root:{display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap"},search:{flexGrow:1,maxWidth:480,flexBasis:480},filterButton:{marginLeft:"auto"},filterIcon:{marginRight:e.spacing(1)}}})),["headless","className"]),be=Object(s.a)((function(e){return{root:{padding:e.spacing(3),minWidth:"1000px"},results:{marginTop:e.spacing(3)},modal:{display:"grid",placeItems:"center"}}})),Ee=function(e){var t=e.headless,a=e.className,n=Object(p.a)(e,fe),r=be();return c.a.createElement(te,null,c.a.createElement(d.i,Object.assign({},n,{className:Object(g.a)(r.root,a),title:"Ng\xe2n h\xe0ng c\xe2u h\u1ecfi"}),!t&&c.a.createElement(se,null),c.a.createElement(ge,{className:r.results})))},ve=Object(s.a)((function(e){return{root:{display:"grid",placeItems:"center"},box:{minWidth:"768px",backgroundColor:"white",maxHeight:"90vh",borderRadius:"0.5rem"},content:{maxHeight:"90vh ",overflowY:"scroll","&::-webkit-scrollbar":{width:0}}}})),je=function(e){var t=ve(),a=Object(r.useState)(0),l=Object(n.a)(a,2),s=l[0],i=l[1],u=e.open,p=e.handleClose;return c.a.createElement(M.a,{className:t.root,open:u,onClose:p},c.a.createElement(h.a,{className:t.box},c.a.createElement(o.a,{variant:"fullWidth",centered:!0,value:s,indicatorColor:"primary",textColor:"primary",onChange:function(e,t){i(t)}},c.a.createElement(m.a,{value:0,label:"T\u1ea1o c\xe2u h\u1ecfi m\u1edbi"}),c.a.createElement(m.a,{value:1,label:"Th\xeam t\u1eeb ng\xe2n h\xe0ng c\xe2u h\u1ecfi"})),c.a.createElement(h.a,{className:t.content},0===s&&c.a.createElement(d.a,{handleClose:p,headless:!0}),1===s&&c.a.createElement(Ee,{headless:!0}))))},Oe=a(872),we=["students","className"],xe=Object(s.a)((function(e){return{root:{},files:{marginTop:e.spacing(3)}}})),Ne=function(e){var t=e.students,a=e.className,n=Object(p.a)(e,we),r=Object(Oe.a)(),l=r.open,s=r.handleOpen,i=r.handleClose,o=xe();return c.a.createElement(T.a,null,c.a.createElement(h.a,Object.assign({},n,{className:Object(g.a)(o.root,a)}),c.a.createElement(Q,{openAddStudentModal:s}),c.a.createElement(W,{students:t}),c.a.createElement(je,{open:l,handleClose:i})))},Ce=a(795),ye=a(849),ke=["course","className"],Pe=Object(s.a)((function(e){return{root:{},label:{marginTop:e.spacing(1)},shareButton:{marginRight:e.spacing(2)},shareIcon:{marginRight:e.spacing(1)},applyButton:{color:e.palette.white,backgroundColor:i.a.green[600],"&:hover":{backgroundColor:i.a.green[900]}}}})),Te=Object(Ce.a)((function(e){return{colorPrimary:{backgroundColor:"#388e3c"},colorSecondary:{backgroundColor:"#f57c00"},badge:{padding:"0 0.5rem"}}}))(ye.a),Se=function(e){e.course;var t=e.className,a=Object(p.a)(e,ke),n=Pe(),r=Object(S.b)().testDetails,l=Date.now(),s=Date.parse(r.end_time)<l,i=Date.parse(r.start_time)<l;return c.a.createElement("div",Object.assign({},a,{className:Object(g.a)(n.root,t)}),c.a.createElement(D.a,{alignItems:"flex-end",container:!0,justify:"space-between",spacing:3},c.a.createElement(D.a,{item:!0},c.a.createElement(E.a,{component:"h2",gutterBottom:!0,variant:"overline"},"B\xe0i ki\u1ec3m tra"),c.a.createElement(h.a,{marginLeft:4,marginBottom:1},i&&!s&&c.a.createElement(Te,{badgeContent:"Started",color:"secondary"}),i&&s&&c.a.createElement(Te,{badgeContent:"Ended",color:"error"}),!i&&!s&&c.a.createElement(Te,{badgeContent:"Upcoming",color:"primary"})),c.a.createElement(E.a,{component:"h1",gutterBottom:!0,variant:"h3"},r.name))))};Se.defaultProps={};var Be=Se,Ie=["className"],_e=Object(s.a)((function(e){return{root:{maxWidth:"1000px",padding:"1rem",margin:"auto"},form:{width:"100%"},label:{color:e.palette.primary.dark,marginBottom:e.spacing(1)},textField:{marginTop:e.spacing(1)},submitBtn:{marginTop:"1rem",padding:"0.5rem 3rem"}}})),We=function(e){var t=e.className,a=Object(p.a)(e,Ie),n=Object(Y.e)(),r=Object(S.b)(),l=r.testDetails,s=r.updateTest,i=r.deleteTest,o=_e();c.a.useEffect((function(){l&&(n.setValue("name",l.name),n.setValue("start_time",String(l.start_time).slice(0,-1)),n.setValue("end_time",String(l.end_time).slice(0,-1)),n.setValue("duration",l.duration))}),[n,l]);var m=Date.now(),u=Date.parse(l.end_time)<m,h=Date.parse(l.start_time)<m,f=function(){var e=Object(G.a)(F.a.mark((function e(t){return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s(t);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return c.a.createElement(he.a,Object.assign({},a,{className:Object(g.a)(o.root,t)}),c.a.createElement("form",{onSubmit:n.handleSubmit(f),className:o.form,noValidate:!0,autoComplete:"off"},c.a.createElement(D.a,{container:!0,spacing:3},c.a.createElement(D.a,{item:!0,xs:12},c.a.createElement(X.a,{className:o.label,component:"legend"},"T\xean b\xe0i ki\u1ec3m tra"),c.a.createElement(H.a,Object.assign({variant:"outlined",className:o.textField,fullWidth:!0},n.register("name")))),c.a.createElement(D.a,{item:!0,xs:12,sm:4},c.a.createElement(X.a,{className:o.label,component:"legend"},"B\u1eaft \u0111\u1ea7u"),c.a.createElement(H.a,Object.assign({fullWidth:!0,type:"datetime-local"},n.register("start_time"),{InputLabelProps:{shrink:!0}}))),c.a.createElement(D.a,{item:!0,xs:12,sm:4},c.a.createElement(X.a,{className:o.label,component:"legend"},"K\u1ebft th\xfac"),c.a.createElement(H.a,Object.assign({fullWidth:!0,type:"datetime-local"},n.register("end_time"),{InputLabelProps:{shrink:!0}}))),c.a.createElement(D.a,{item:!0,xs:12,sm:4},c.a.createElement(X.a,{className:o.label,component:"legend"},"Th\u1eddi gian l\xe0m b\xe0i"),c.a.createElement(H.a,Object.assign({fullWidth:!0,type:"number"},n.register("duration"),{InputLabelProps:{shrink:!0}})))),c.a.createElement(A.a,{className:o.submitBtn,type:"submit",variant:"contained",color:"primary",fullWidth:!0,disabled:u||h},"L\u01b0u"),c.a.createElement(d.d,{className:o.submitBtn,variant:"contained",fullWidth:!0,onClick:function(){return i()},disabled:u||h},"X\xf3a b\xe0i ki\u1ec3m tra")))},De=a(838),Ae=a(866),Re=["className"],qe=Object(s.a)((function(e){return{root:{},content:{padding:0},inner:{minWidth:700},nameCell:{display:"flex",alignItems:"center"},avatar:{height:42,width:42,marginRight:e.spacing(2)},actions:{padding:e.spacing(1),justifyContent:"flex-end"}}})),Qe=function(e){var t,a,n,r=e.className,l=Object(p.a)(e,Re),s=qe(),i=Object(S.b)().testResult;console.log(i);var o=Object(ie.a)(),m=o.page,d=o.rowsPerPage,h=o.handleChangePage,f=o.handleChangeRowsPerPage;return c.a.createElement("div",Object.assign({},l,{className:Object(g.a)(s.root,r)}),c.a.createElement(E.a,{color:"textSecondary",gutterBottom:!0,variant:"body2"},"T\u1ed5ng ",null===i||void 0===i||null===(t=i.result)||void 0===t?void 0:t.length," h\u1ecdc sinh."),c.a.createElement(v.a,null,c.a.createElement(u.a,null),c.a.createElement(O.a,{className:s.content},c.a.createElement(b.a,null,c.a.createElement("div",{className:s.inner},c.a.createElement(w.a,null,c.a.createElement(x.a,null,c.a.createElement(N.a,null,c.a.createElement(C.a,null,"T\xean h\u1ecdc sinh & email"),c.a.createElement(C.a,{align:"right"},"\u0110i\u1ec3m s\u1ed1"))),c.a.createElement(y.a,null,null===i||void 0===i||null===(a=i.result)||void 0===a?void 0:a.map((function(e){return c.a.createElement(N.a,{hover:!0,key:e.id},c.a.createElement(C.a,null,c.a.createElement("div",{className:s.nameCell},c.a.createElement(Ae.a,{src:e.photoURL,className:s.avatar}),c.a.createElement("div",null,c.a.createElement(E.a,{variant:"h6"},e.displayName),c.a.createElement("div",null,e.email)))),c.a.createElement(C.a,{align:"right"},c.a.createElement(E.a,{variant:"h4"},e.count,"/",i.totalQuestion)))}))))))),c.a.createElement(k.a,{className:s.actions},c.a.createElement(P.a,{component:"div",count:null===i||void 0===i||null===(n=i.result)||void 0===n?void 0:n.length,onChangePage:h,onChangeRowsPerPage:f,page:m,rowsPerPage:d,rowsPerPageOptions:[5,10,25]}))))};Qe.defaultProps={studentInCourses:[]};var Me=Qe,Ve=["className","openAddStudentModal"],Le=Object(s.a)((function(){return{root:{marginBottom:"1rem"}}})),Fe=function(e){var t=e.className,a=(e.openAddStudentModal,Object(p.a)(e,Ve)),n=Le();return c.a.createElement("div",Object.assign({},a,{className:Object(g.a)(n.root,t)}),c.a.createElement(D.a,{alignItems:"flex-end",container:!0,justify:"space-between",spacing:3},c.a.createElement(D.a,{item:!0},c.a.createElement(E.a,{component:"h1",variant:"h3"},"K\u1ebft qu\u1ea3 thi"))))},Ge=["students","className"],He=Object(s.a)((function(e){return{modal:{display:"grid",placeItems:"center"},files:{marginTop:e.spacing(3)}}})),Ke=function(e){var t=e.students,a=e.className,l=Object(p.a)(e,Ge),s=Object(Oe.a)(),i=s.open,o=s.handleOpen,m=s.handleClose,u=Object(r.useState)(null),f=Object(n.a)(u,2),b=f[0],E=f[1],v=Object(Oe.a)(!1),j=v.open,O=v.handleClose,w=v.handleOpen,x=He();return c.a.createElement(h.a,Object.assign({},l,{className:Object(g.a)(x.root,a)}),c.a.createElement(Fe,{openAddStudentModal:o}),c.a.createElement(Me,{students:[],handleDeleteOne:function(e){return function(){E(t.find((function(t){return t.id===e}))),w()}}}),c.a.createElement(M.a,{className:x.modal,open:i,onClose:m}),c.a.createElement(De.a,{open:j,onClose:O},c.a.createElement(d.c,{name:b&&b.name,handleCloseDialog:O})))},Xe=Object(s.a)((function(e){return{root:{width:e.breakpoints.values.lg,maxWidth:"100%",margin:"0 auto",padding:e.spacing(3)},tabs:{marginTop:e.spacing(3)},divider:{backgroundColor:i.a.grey[400]},content:{marginTop:e.spacing(3)}}})),ze=function(e){var t=Xe(),a=Object(l.h)(),s=a.id,i=a.tab,p=Object(l.g)(),g=Object(r.useState)(null),h=Object(n.a)(g,2),f=h[0],b=h[1];Object(r.useEffect)((function(){b({})}),[]);var E=[{value:"questions",label:"C\xe2u h\u1ecfi"},{value:"result",label:"K\u1ebft qu\u1ea3"},{value:"setting",label:"Th\xf4ng tin chung"}];return i?E.find((function(e){return e.value===i}))?f?c.a.createElement(S.a,{testId:s},c.a.createElement(d.i,{className:t.root,title:"Test Details"},c.a.createElement(Be,{course:f}),c.a.createElement(o.a,{className:t.tabs,onChange:function(e,t){p.push(t)},scrollButtons:"auto",value:i,variant:"scrollable"},E.map((function(e){return c.a.createElement(m.a,{key:e.value,label:e.label,value:e.value})}))),c.a.createElement(u.a,{className:t.divider}),c.a.createElement("div",{className:t.content},"questions"===i&&c.a.createElement(Ne,null),"setting"===i&&c.a.createElement(We,null),"result"===i&&c.a.createElement(Ke,null)))):null:c.a.createElement(l.a,{to:"/errors/error-404"}):c.a.createElement(l.a,{to:"/instructor/test-details/".concat(s,"/questions")})}},871:function(e,t,a){"use strict";var n=a(16),r=a(0).useState;t.a=function(){var e=r(0),t=Object(n.a)(e,2),a=t[0],c=t[1],l=r(10),s=Object(n.a)(l,2),i=s[0],o=s[1];return{page:a,rowsPerPage:i,handleChangePage:function(e,t){c(t)},handleChangeRowsPerPage:function(e){o(e.target.value)}}}},872:function(e,t,a){"use strict";var n=a(16),r=a(0);t.a=function(e){var t=Object(r.useState)(e),a=Object(n.a)(t,2),c=a[0],l=a[1];return{open:c,handleClose:function(){l(!1)},handleOpen:function(){l(!0)}}}},874:function(e,t,a){"use strict";var n=a(16),r=a(0);t.a=function(e){var t=Object(r.useState)(e),a=Object(n.a)(t,2),c=a[0],l=a[1];return{is_open:c,handleClose:function(){l(!1)},handleOpen:function(){l(!0)}}}}}]);
//# sourceMappingURL=3.b275266e.chunk.js.map