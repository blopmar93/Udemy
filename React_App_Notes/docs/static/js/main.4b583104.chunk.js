(this.webpackJsonpjournalapp=this.webpackJsonpjournalapp||[]).push([[0],{170:function(e,t,n){},171:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(26),r=n.n(c),o=n(6),i=n(23),s=n(61),u="[Auth] login",l="[Auth] logout",d="[UI] Set Error",j="[UI] Remove Error",b="[UI] Start Loading",p="[UI] Finish Loading",O="[Notes] New note",h="[Notes] Deleted note",f="[Notes] Set active note",m="[Notes] Load note",_="[Notes] Update note",v="[Notes] Cleaning logout",x=n(41),g=n(3),y={notes:[],active:!1},N={loading:!1,msgError:null},E="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||i.c,S=Object(i.b)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:return{uid:t.payload.uid,name:t.payload.displayName};case l:return{};default:return e}},ui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d:return Object(g.a)(Object(g.a)({},e),{},{msgError:t.payload});case j:return Object(g.a)(Object(g.a)({},e),{},{msgError:null});case b:return Object(g.a)(Object(g.a)({},e),{},{loading:!0});case p:return Object(g.a)(Object(g.a)({},e),{},{loading:!1});default:return e}},note:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return Object(g.a)(Object(g.a)({},e),{},{active:Object(g.a)({},t.payload)});case O:return Object(g.a)(Object(g.a)({},e),{},{notes:[t.payload].concat(Object(x.a)(e.notes))});case m:return Object(g.a)(Object(g.a)({},e),{},{notes:Object(x.a)(t.payload)});case _:return Object(g.a)(Object(g.a)({},e),{},{notes:e.notes.map((function(e){return e.id===t.payload.id?t.payload.note:e}))});case h:return Object(g.a)(Object(g.a)({},e),{},{active:!1,notes:e.notes.filter((function(e){return e.id!==t.payload}))});case v:return Object(g.a)(Object(g.a)({},e),{},{notes:[]});default:return e}}}),w=Object(i.d)(S,E(Object(i.a)(s.a))),C=n(7),T=n.n(C),P=n(9),A=n(15),D=n(18),R=n.n(D),k=n(16),I=n(8),L=n(30),U=n.n(L),W=n(17),K=n.n(W),H=(n(83),n(87),{apiKey:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_APIKEY,authDomain:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_AUTHDOMAIN,projectId:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_PROJECTID,storageBucket:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_STORAGEBUCKET,messagingSenderId:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_MESSAGINGSENDERID,appId:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_APPID});R.a.initializeApp(H);var F=R.a.firestore(),B=new R.a.auth.GoogleAuthProvider;B.setCustomParameters({prompt:"select_account"});var V=function(e){return{type:d,payload:e}},G=function(){return{type:j}},J=function(){return{type:p}},M=function(e,t){return function(n){return n({type:b}),R.a.auth().signInWithEmailAndPassword(e,t).then((function(e){var t=e.user;n(q(t.uid,t.displayName)),n(J())})).catch((function(e){console.log(e),n(J()),K.a.fire("Error",e.message,"error")}))}},q=function(e,t){return{type:u,payload:{uid:e,displayName:t}}},z=function(){return{type:l}},X=function(){return{type:v}},Y=n(29),Q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(a.useState)(e),n=Object(A.a)(t,2),c=n[0],r=n[1],o=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e;r(t)},i=function(e){var t=e.target;r(Object(g.a)(Object(g.a)({},c),{},Object(Y.a)({},t.name,t.value)))};return[c,i,o,r]},Z=n(0),$=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.ui})),n=t.msgError,a=t.loading,c=Q({email:"",password:""}),r=Object(A.a)(c,2),i=r[0],s=r[1],u=i.email,l=i.password,d=function(){return U.a.isEmail(u)?l.length<5?(e(V("Password should be at least 6 characters and match each other")),!1):(e(G()),!0):(e(V("Email is not valid")),!1)};return Object(Z.jsxs)(Z.Fragment,{children:[Object(Z.jsx)("h3",{className:"auth__title",children:"Login"}),n&&Object(Z.jsx)("div",{className:"auth__alert-error",children:n}),Object(Z.jsxs)("form",{onSubmit:function(t){t.preventDefault(),d()&&!n&&e(M(u,l))},className:"animate__animated animate__fadeIn animate__fast",children:[Object(Z.jsx)("input",{type:"text",placeholder:"Email",name:"email",autoComplete:"off",className:"auth__input",value:u,onChange:s}),Object(Z.jsx)("input",{type:"password",placeholder:"Password",name:"password",className:"auth__input",value:l,onChange:s}),Object(Z.jsx)("button",{type:"submit",className:"btn btn-primary btn-block",disabled:a,children:"Login"}),Object(Z.jsxs)("div",{className:"auth__social-networks",onClick:function(){e((function(e){R.a.auth().signInWithPopup(B).then((function(t){var n=t.user;e(q(n.uid,n.displayName))}))}))},children:[Object(Z.jsx)("p",{children:"Login whit social networks"}),Object(Z.jsxs)("div",{className:"google-btn",children:[Object(Z.jsx)("div",{className:"google-icon-wrapper",children:Object(Z.jsx)("img",{className:"google-icon",src:"https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg",alt:"google button"})}),Object(Z.jsx)("p",{className:"btn-text",children:Object(Z.jsx)("b",{children:"Sign in with google"})})]})]}),Object(Z.jsx)(k.b,{className:"link",to:"/auth/register",children:"Create new account"})]})]})},ee=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.ui})).msgError,n=Q({name:"",email:"",password:"",password2:""}),a=Object(A.a)(n,2),c=a[0],r=a[1],i=c.name,s=c.email,u=c.password,l=c.password2,d=function(){return i.trim().length<=1?(e(V("Name is required")),!1):U.a.isEmail(s)?u!==l||u.length<5?(e(V("Password should be at least 6 characters and match each other")),!1):(e(G()),!0):(e(V("Email is not valid")),!1)};return Object(Z.jsxs)(Z.Fragment,{children:[Object(Z.jsx)("h3",{className:"auth__title",children:"Register"}),t&&Object(Z.jsx)("div",{className:"auth__alert-error",children:t}),Object(Z.jsxs)("form",{onSubmit:function(t){t.preventDefault(),d()&&e(function(e,t,n){return function(a){R.a.auth().createUserWithEmailAndPassword(e,t).then(function(){var e=Object(P.a)(T.a.mark((function e(t){var c;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=t.user,e.next=3,c.updateProfile({displayName:n});case 3:a(q(c.uid,c.displayName));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch(console.log)}}(s,u,i))},className:"animate__animated animate__fadeIn animate__fast",children:[Object(Z.jsx)("input",{type:"text",placeholder:"Name",name:"name",value:i,autoComplete:"off",className:"auth__input",onChange:r}),Object(Z.jsx)("input",{type:"text",placeholder:"Email",name:"email",value:s,autoComplete:"off",className:"auth__input",onChange:r}),Object(Z.jsx)("input",{type:"password",placeholder:"Password",name:"password",value:u,className:"auth__input",onChange:r}),Object(Z.jsx)("input",{type:"password",placeholder:"Confirm password",name:"password2",value:l,className:"auth__input",onChange:r}),Object(Z.jsx)("button",{type:"submit",className:"btn btn-primary btn-block mb-5 mt-1",children:"Register"}),Object(Z.jsx)(k.b,{className:"link",to:"/auth/login",children:"Already registered?"})]})]})},te=function(){return Object(Z.jsx)("div",{className:"auth__main",children:Object(Z.jsx)("div",{className:"auth__box-container",children:Object(Z.jsxs)(I.d,{children:[Object(Z.jsx)(I.b,{path:"/auth/login",component:$}),Object(Z.jsx)(I.b,{path:"/auth/register",component:ee}),Object(Z.jsx)(I.a,{to:"/auth/login"})]})})})},ne=function(){var e=Object(P.a)(T.a.mark((function e(t){var n,a,c;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.cloudinary.com/v1_1/harich-projects-react/upload",(n=new FormData).append("upload_preset","react-journal"),n.append("file",t),e.prev=4,e.next=7,fetch("https://api.cloudinary.com/v1_1/harich-projects-react/upload",{method:"POST",body:n});case 7:if(!(a=e.sent).ok){e.next=15;break}return e.next=11,a.json();case 11:return c=e.sent,e.abrupt("return",c.secure_url);case 15:return e.abrupt("return",null);case 16:e.next=21;break;case 18:throw e.prev=18,e.t0=e.catch(4),e.t0;case 21:case"end":return e.stop()}}),e,null,[[4,18]])})));return function(t){return e.apply(this,arguments)}}(),ae=function(){var e=Object(P.a)(T.a.mark((function e(t){var n,a;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F.collection("".concat(t,"/journal/notes")).get();case 2:return n=e.sent,a=[],n.forEach((function(e){a.push(Object(g.a)({id:e.id},e.data()))})),e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ce=function(e,t){return{type:f,payload:Object(g.a)({id:e},t)}},re=function(e,t){return{type:O,payload:Object(g.a)({id:e},t)}},oe=function(e){return function(){var t=Object(P.a)(T.a.mark((function t(n){var a;return T.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,ae(e);case 2:a=t.sent,n(ie(a));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},ie=function(e){return{type:m,payload:e}},se=function(e){return function(){var t=Object(P.a)(T.a.mark((function t(n,a){var c,r,o;return T.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=a().auth.uid,delete(r=Object(g.a)({},e)).id,t.next=5,F.doc("".concat(c,"/journal/notes/").concat(e.id)).update(r);case 5:o=t.sent,console.log(o),n(ue(e.id,e)),K.a.fire("Saved",e.title,"success");case 9:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()},ue=function(e,t){return{type:_,payload:{id:e,note:Object(g.a)({id:e},t)}}},le=function(e){return{type:h,payload:e}},de=n(31),je=n.n(de),be=function(){var e=je()().format("LL"),t=Object(o.c)((function(e){return e.note.active})),n=Object(o.b)();return Object(Z.jsxs)("div",{className:"notes__appbar",children:[Object(Z.jsx)("span",{children:e}),Object(Z.jsx)("input",{id:"fileSelector",name:"file",type:"file",style:{display:"none"},onChange:function(e){var t=e.target.files[0];t&&n(function(e){return function(){var t=Object(P.a)(T.a.mark((function t(n,a){var c,r;return T.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=a().note.active,K.a.fire({title:"Uploading...",text:"Please await...",allowOutsideClick:!1,showConfirmButton:!1,willOpen:function(){K.a.showLoading()}}),t.next=4,ne(e);case 4:r=t.sent,c.url=r,n(se(c)),K.a.close();case 8:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()}(t))}}),Object(Z.jsxs)("div",{children:[Object(Z.jsx)("button",{className:"btn",onClick:function(){document.querySelector("#fileSelector").click()},children:"Picture"}),Object(Z.jsx)("button",{className:"btn",onClick:function(){n(se(t))},children:"Save"})]})]})},pe=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.note.active})),n=Q(t),c=Object(A.a)(n,3),r=c[0],i=c[1],s=c[2],u=r.title,l=r.body,d=r.url,j=Object(a.useRef)(t.id),b=Object(a.useRef)(t.url);return Object(a.useEffect)((function(){t.id!==j.current&&(s(t),j.current=t.id),t.url!==b.current&&(s(t),b.current=t.url)}),[t,s,t.url]),Object(a.useEffect)((function(){e(ce(r.id,Object(g.a)({},r)))}),[r,e]),Object(Z.jsxs)("div",{className:"notes___main-content",children:[Object(Z.jsx)(be,{}),Object(Z.jsxs)("div",{className:"notes__content",children:[Object(Z.jsx)("input",{type:"text",name:"title",placeholder:"Some awasome title",className:"notes__title-input",value:u,autoComplete:"off",onChange:i}),Object(Z.jsx)("textarea",{placeholder:"What happened today",name:"body",className:"notes__textarea",value:l,onChange:i}),d&&Object(Z.jsx)("div",{className:"notes__image",children:Object(Z.jsx)("img",{src:d,alt:"Imagen nota"})})]}),Object(Z.jsx)("button",{className:"btn btn-delete",onClick:function(){var n;e((n=t.id,console.log(n),function(){var e=Object(P.a)(T.a.mark((function e(t,a){var c;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=a().auth.uid,e.next=3,F.doc("".concat(c,"/journal/notes/").concat(n)).delete().then((function(){return K.a.fire("Delete",n,"success")})).catch(console.log);case 3:t(le(n));case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()))},children:"Delete"})]})},Oe=function(){return Object(Z.jsxs)("div",{className:"nothing__main-content",children:[Object(Z.jsxs)("p",{children:["Selected somethig",Object(Z.jsx)("br",{}),"or create an entry!"]}),Object(Z.jsx)("i",{className:"far fa-star fa-4x mt-5"})]})},he=function(e){var t=e.id,n=e.body,a=e.date,c=e.title,r=e.url,i=Object(o.b)(),s=je()(a);return Object(Z.jsxs)("div",{className:"journal__entry pointer animate__animated animate__fadeIn",onClick:function(){i(ce(t,e))},children:[r&&Object(Z.jsx)("div",{className:"journal__entry-picture",style:{backgroundImage:"URL(".concat(r,")"),backgroundSize:"cover"}}),Object(Z.jsxs)("div",{className:"journal__entry-body",children:[Object(Z.jsx)("p",{className:"journal__entry-title",children:c}),Object(Z.jsx)("p",{className:"journal__entry-content",children:n})]}),Object(Z.jsxs)("div",{className:"journal__entry-date-box",children:[Object(Z.jsx)("span",{children:s.format("dddd")}),Object(Z.jsx)("h4",{children:s.format("Do")})]})]})},fe=function(){var e=Object(o.c)((function(e){return e.note})).notes;return Object(Z.jsx)("div",{className:"journal__entries  animate__animated animate__fadeInLeft animate__slow",children:e.map((function(e){return Object(Z.jsx)(he,Object(g.a)({},e),e.id)}))})},me=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.auth})).name;return Object(Z.jsxs)("aside",{className:"journal__sidebar",children:[Object(Z.jsxs)("div",{className:"journal__sidebar-navbar mt-3",children:[Object(Z.jsxs)("h3",{children:[Object(Z.jsx)("i",{className:"far fa-user-circle fs-2"}),Object(Z.jsxs)("span",{className:"fs-2",children:[" ",t," "]})]}),Object(Z.jsxs)("button",{className:"btn btn-logout",onClick:function(){e(function(){var e=Object(P.a)(T.a.mark((function e(t){return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R.a.auth().signOut();case 2:t(z()),t(X());case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),e({type:v})},children:["Logout ",Object(Z.jsx)("i",{className:"fas fa-sign-out-alt fs-1"})]})]}),Object(Z.jsxs)("div",{className:"journal__new-entry",children:[Object(Z.jsx)("i",{className:"far fa-calendar-plus fa-5x",onClick:function(){return[e(function(){var e=Object(P.a)(T.a.mark((function e(t,n){var a,c,r;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n().auth.uid,c={title:"",body:"",date:(new Date).getTime()},e.next=4,F.collection("".concat(a,"/journal/notes")).add(c);case 4:r=e.sent,t(ce(r.id,c)),t(re(r.id,c));case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}())]}}),Object(Z.jsx)("p",{className:"mt-5",children:"New entry"})]}),Object(Z.jsx)(fe,{})]})},_e=function(){var e=Object(o.c)((function(e){return e.note})).active;return Object(Z.jsxs)("div",{className:"journal__main-content",children:[Object(Z.jsx)(me,{}),Object(Z.jsx)("main",{children:e?Object(Z.jsx)(pe,{}):Object(Z.jsx)(Oe,{})})]})},ve=n(32),xe=["isAuthenticate","component"],ge=function(e){var t=e.isAuthenticate,n=e.component,a=Object(ve.a)(e,xe);return Object(Z.jsx)(I.b,Object(g.a)(Object(g.a)({},a),{},{component:function(e){return t?Object(Z.jsx)(n,Object(g.a)({},e)):Object(Z.jsx)(I.a,{to:"/auth/login"})}}))},ye=["isAuthenticate","component"],Ne=function(e){var t=e.isAuthenticate,n=e.component,a=Object(ve.a)(e,ye);return Object(Z.jsx)(I.b,Object(g.a)(Object(g.a)({},a),{},{component:function(e){return t?Object(Z.jsx)(I.a,{to:"/"}):Object(Z.jsx)(n,Object(g.a)({},e))}}))},Ee=function(){var e=Object(o.b)(),t=Object(a.useState)(!0),n=Object(A.a)(t,2),c=n[0],r=n[1],i=Object(a.useState)(!1),s=Object(A.a)(i,2),u=s[0],l=s[1];return Object(a.useEffect)((function(){R.a.auth().onAuthStateChanged(function(){var t=Object(P.a)(T.a.mark((function t(n){return T.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:(null===n||void 0===n?void 0:n.uid)?(e(q(n.uid,n.displayName)),l(!0),e(oe(n.uid))):l(!1),r(!1);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}),[e,r,l]),c?Object(Z.jsx)("h1",{children:"Loaging..."}):Object(Z.jsx)(k.a,{children:Object(Z.jsx)("div",{children:Object(Z.jsxs)(I.d,{children:[Object(Z.jsx)(Ne,{path:"/auth",isAuthenticate:u,component:te}),Object(Z.jsx)(ge,{exact:!0,path:"/",isAuthenticate:u,component:_e}),Object(Z.jsx)(I.a,{to:"/auth/login"})]})})})},Se=function(){return Object(Z.jsx)(o.a,{store:w,children:Object(Z.jsx)(Ee,{})})};n(170);r.a.render(Object(Z.jsx)(Se,{}),document.getElementById("root"))}},[[171,1,2]]]);
//# sourceMappingURL=main.4b583104.chunk.js.map