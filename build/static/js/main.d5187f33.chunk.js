(this.webpackJsonppokeapp=this.webpackJsonppokeapp||[]).push([[0],{124:function(e,t,n){},129:function(e,t,n){},157:function(e,t,n){"use strict";n.r(t);var a,r=n(2),c=n(0),s=n.n(c),o=n(14),i=n.n(o),u=(n(124),n(7)),l=n.n(u),j=n(10),d=n(8),p=n(23),b=n(16),m=n(43),f=n(66),h=(n(128),n(129),n(19)),O=n(213),g=n(39),x=n(201),v=n(204),k=n(206),w=n(207),y=n(44),C=n(232),N=n(208),S=n(103),I=n(210),P=n(211),F=n(212),T=n(229),E=n(54),L=Object(x.a)({regular:{color:"white"},liked:{color:"red"}}),R=function(e){var t=e.liked,n=e.onClick,a=L();return Object(r.jsx)(E.a,{icon:"heart",className:t?a.liked:a.regular,size:"lg",style:{margin:"0 5",cursor:"pointer"},onClick:n,"aria-hidden":"true"})},_=n(24),A=function e(){Object(_.a)(this,e),this.id=void 0,this.name=void 0,this.weight=void 0,this.picture=void 0,this.type=void 0};!function(e){e.Flying="flying",e.Fire="fire",e.Normal="normal",e.Fighting="fighting",e.Water="water",e.Grass="grass",e.Poison="poison",e.Electric="electric",e.Ground="ground",e.Psychic="psychic",e.Rock="rock",e.Ice="ice",e.Bug="bug",e.Dragon="dragon",e.Ghost="ghost",e.Dark="dark",e.Steel="steel",e.Fairy="fairy"}(a||(a={}));var D=n(56),W=n.n(D),B=n(94);W.a.defaults.baseURL=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_API_URL,W.a.interceptors.response.use((function(e){return e.data}),(function(e){return e.response&&e.response.status>=400&&e.response.status<500||(console.log(e),B.a.error("An unexpected error occurrred.")),Promise.reject(e)}));var U=W.a.create({baseURL:"http://localhost:10000"}),z=W.a.create({baseURL:"https://pokeapi.co/api/v2"});var K=function(){var e=Object(j.a)(l.a.mark((function e(t){var n,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,z.get("/pokemon/".concat(t));case 3:return n=e.sent,(a=new A).id=n.data.id,a.name=n.data.name,a.picture=n.data.sprites.front_default,a.weight=n.data.weight,a.type=[n.data.types[0].type.name,n.data.types[1]&&n.data.types[1].type.name],e.abrupt("return",a);case 13:throw e.prev=13,e.t0=e.catch(0),new Error;case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(t){return e.apply(this,arguments)}}(),q=function(){var e=Object(j.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,U.get("/team/".concat(t));case 3:return n=e.sent,e.abrupt("return",n.data);case 7:throw e.prev=7,e.t0=e.catch(0),new Error;case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}();var G=function(){var e=Object(j.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,U.get("/user/".concat(t));case 3:return n=e.sent,e.abrupt("return",n.data.favlist);case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),J=function(){var e=Object(j.a)(l.a.mark((function e(t,n){var a,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={favUserId:t,favPokeId:n},e.prev=1,e.next=4,U.post("/favorite",a);case 4:return r=e.sent,e.abrupt("return",r.data);case 8:e.prev=8,e.t0=e.catch(1);case 10:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,n){return e.apply(this,arguments)}}();function M(e){return U.post("/team",{teamUserId:e.userId,teamName:e.teamName})}function H(e,t){try{U.post("/team/addpoke",{teamListTeamId:e,teamPokeId:t}),console.log("Success submitted")}catch(n){console.log(n)}}function V(e){try{U.delete("/team/deletpoke/".concat(e)),console.log("delete success!")}catch(t){console.log(t)}}var Q=function e(){Object(_.a)(this,e),this.userId=void 0,this.userName=void 0,this.userPassword=void 0,this.userFirstName=void 0,this.userLastName=void 0,this.userFavorites=void 0,this.userTeams=void 0};var X=function(){var e=Object(j.a)(l.a.mark((function e(t){var n,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,U.get("/user/".concat(t));case 3:return n=e.sent,(a=new Q).userId=n.data.userId,a.userName=n.data.userName,a.userPassword=n.data.userPassword,a.userFirstName=n.data.userFirstname,a.userLastName=n.data.userLastname,a.userFavorites=n.data.favlist,a.userTeams=n.data.teams,e.abrupt("return",a);case 15:throw e.prev=15,e.t0=e.catch(0),new Error;case 18:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(t){return e.apply(this,arguments)}}(),Y={flying:{backgroundColor:"#A890F0"},fire:{backgroundColor:"#F08030"},normal:{backgroundColor:"#A8A878"},fighting:{backgroundColor:"#C03028"},water:{backgroundColor:"#6890F0"},grass:{backgroundColor:"#78C850"},poison:{backgroundColor:"#A040A0"},electric:{backgroundColor:"#F8D030"},ground:{backgroundColor:"#E0C068"},psychic:{backgroundColor:"#F85888"},rock:{backgroundColor:"#B8A038"},ice:{backgroundColor:"#98D8D8"},bug:{backgroundColor:"#A8B820"},dragon:{backgroundColor:"#7038F8"},ghost:{backgroundColor:"#705898"},dark:{backgroundColor:"#705848"},steel:{backgroundColor:"#B8B8D0"},fairy:{backgroundColor:"#EE99AC"}},Z=Object(x.a)((function(e){return Object(g.a)({root:{minWidth:200,maxWidth:300},picture:{height:225},cardContent:{backgroundColor:"#373737"},faIcon:{color:"white"},margin:{margin:e.spacing(1)},icon:{alignItems:"left"}},Y)})),$=function(e){var t=JSON.parse(localStorage.getItem("userKey")),n=t?t.userId:null,a=Object(c.useState)(!1),o=Object(d.a)(a,2),i=o[0],u=o[1],p=s.a.useState(null),b=Object(d.a)(p,2),m=b[0],f=b[1],h=s.a.useState(!1),O=Object(d.a)(h,2),g=O[0],x=O[1],L=Object(c.useState)([]),_=Object(d.a)(L,2),A=(_[0],_[1]),D=Z(),W=Object(c.useState)([]),B=Object(d.a)(W,2),z=B[0],K=B[1],q=Object(c.useState)(""),V=Object(d.a)(q,2),Q=V[0],Y=V[1],$=Object(c.useState)(!1),ee=Object(d.a)($,2),te=ee[0],ne=ee[1],ae=Object(c.useState)(""),re=Object(d.a)(ae,2),ce=re[0],se=re[1],oe=Object(c.useState)(!1),ie=Object(d.a)(oe,2),ue=(ie[0],ie[1],function(e){se(e.target.value)});Object(c.useEffect)((function(){(e.isfavorite&&u(!i),null!==n)&&(function(){var e=Object(j.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=A,e.next=3,G(n);case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()(),function(){var e=Object(j.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,X(n);case 2:t=e.sent,K(t.userTeams);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()());ne(!1)}),[te]);var le=function(){var t=Object(j.a)(l.a.mark((function t(){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:try{H(ce,e.pokemon.id)}catch(n){console.log(n)}case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),je=function(){var e=Object(j.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault();try{M({userId:n,teamName:Q})}catch(t){console.log(t)}case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(r.jsxs)(v.a,{className:D.root+" "+D.steel,children:[Object(r.jsx)(k.a,{className:D.picture,style:{backgroundColor:"black"},image:e.pokemon.picture,title:"Picture of ".concat(e.pokemon.name)}),Object(r.jsxs)(w.a,{className:D.cardContent,children:[Object(r.jsx)("div",{className:"row",children:Object(r.jsx)(y.a,{style:{color:"white",marginLeft:15},variant:"h5",component:"h3",children:e.pokemon.name})}),Object(r.jsxs)("div",{className:"row",children:[Object(r.jsx)(C.a,{className:D[e.pokemon.type[0]],style:{marginLeft:15,marginRight:5},label:e.pokemon.type[0]}),e.pokemon.type[1]&&Object(r.jsx)(C.a,{className:D[e.pokemon.type[1]],label:e.pokemon.type[1]}),Object(r.jsxs)("div",{className:"ml-auto",style:{display:"flex",alignItems:"center",marginRight:10},children:[Object(r.jsx)(N.a,{"aria-controls":"simple-menu","aria-haspopup":"true",onClick:function(e){f(e.currentTarget),x(!1)},style:{padding:0},children:Object(r.jsx)(E.a,{icon:"plus",className:D.faIcon,style:{margin:"0 5",cursor:"pointer",outline:"none"}})}),Object(r.jsxs)(S.a,{id:"simple-menu",anchorEl:m,keepMounted:!0,open:Boolean(m),onClose:function(){f(null)},children:[z.map((function(e){return Object(r.jsxs)(I.a,{disableRipple:!0,children:[Object(r.jsx)("input",{color:"primary",type:"radio",name:"tName",value:e.teamid,checked:ce===e.teamid.toString(),onChange:ue},e.teamid),e.teamName]},e.teamid)})),Object(r.jsx)(P.a,{onClick:le,children:"Add pokemon"}),Object(r.jsx)(F.a,{}),g?Object(r.jsxs)("section",{children:[Object(r.jsx)(I.a,{disableRipple:!0,children:Object(r.jsx)(T.a,{required:!0,id:"standard-required",label:"Name",placeholder:"Enter team name...",value:Q,onChange:function(e){Y(e.target.value)},style:{marginLeft:16,marginRight:16}})}),Object(r.jsx)(I.a,{disableRipple:!0,onClick:function(){return ne(!0)},children:Object(r.jsx)(P.a,{onClick:je,variant:"outlined",color:"primary",className:"ml-auto",children:"Create"})})]}):Object(r.jsxs)(I.a,{onClick:function(){return x(!0)},children:[Object(r.jsx)(E.a,{icon:"plus",style:{width:42}}),"new team"]})]}),Object(r.jsx)("div",{onClick:e.trigger,children:Object(r.jsx)(R,{liked:i,onClick:function(){if(t)if(u(!i),console.log(i),i){if(i){console.log("i am deleting"),function(){var t=Object(j.a)(l.a.mark((function t(){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a=n,r=e.pokemon.id,U.post("/favorite/deletfav/",{favUserId:a,favPokeId:r}),console.log("deleted");case 1:case"end":return t.stop()}var a,r}),t)})));return function(){return t.apply(this,arguments)}}()()}}else(function(){var t=Object(j.a)(l.a.mark((function t(){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,J(n,e.pokemon.id);case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}})})]})]})]})]})},ee=n(65),te=n.n(ee),ne=function(e){var t=e.itemsCount,n=e.pageSize,a=e.currentPage,c=e.onPageChange,s=Math.ceil(t/n);if(1===s)return null;var o=te.a.range(1,s+1),i=o.slice(a-1,a+4);if(a===o[o.length-1]&&(i=o.slice(a-5,a)),i.length<5){var u,l=5-i.length;(u=i).unshift.apply(u,Object(h.a)(o.slice(a-1-l,a-1)))}return Object(r.jsx)("nav",{children:Object(r.jsxs)("ul",{className:"pagination",style:{paddingTop:"1vw"},children:[a>o[0]?Object(r.jsx)("li",{style:{paddingRight:"1vw"},children:Object(r.jsx)("a",{className:"page-link",onClick:function(){return c(a-1)},children:"Previous"})}):"",a>o[0]?Object(r.jsx)("li",{children:Object(r.jsx)("a",{className:"page-link",onClick:function(){return c(1)},children:"1"})}):"",a>o[0]?Object(r.jsx)("li",{children:Object(r.jsx)("a",{className:"page-link",children:"..."})}):"",i.map((function(e){return Object(r.jsx)("li",{className:e===a?"page-item active":"page-item",children:Object(r.jsx)("a",{className:"page-link",onClick:function(){return c(e)},children:e})},e)})),a<o[o.length-5]?Object(r.jsx)("li",{children:Object(r.jsx)("a",{className:"page-link",children:"..."})}):"",a<o[o.length-5]?Object(r.jsx)("li",{children:Object(r.jsx)("a",{className:"page-link",onClick:function(){return c(s)},children:s})}):"",a<o[o.length-1]?Object(r.jsx)("li",{style:{paddingLeft:"1vw"},children:Object(r.jsx)("a",{className:"page-link",onClick:function(){return c(a+1)},children:"Next"})}):""]})})},ae=function(e){var t=e.pokemons,n=Object(c.useState)(9),a=Object(d.a)(n,2),s=a[0],o=(a[1],Object(c.useState)(1)),i=Object(d.a)(o,2),u=i[0],l=i[1],j=t.map((function(e){return Object(r.jsx)(O.a,{xs:4,item:!0,children:Object(r.jsx)($,{pokemon:e})},e.id)}));return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(O.a,{container:!0,spacing:2,children:j}),Object(r.jsx)(ne,{itemsCount:t.length,pageSize:s,currentPage:u,onPageChange:l})]})},re=n(230),ce=n(233),se=n(215),oe=n(209),ie=n(214),ue=n(159),le=n(216),je=n(217),de=n(97),pe=n.n(de),be=n(95),me=n.n(be),fe=n(96),he=n.n(fe),Oe=Object(x.a)((function(e){return Object(re.a)({root:{display:"flex"},menuButton:{marginRight:36},hide:{display:"none"},drawer:{width:175,flexShrink:0,whiteSpace:"nowrap"},toolbar:Object(g.a)({zIndex:-1,display:"flex",alignItems:"center",justifyContent:"flex-end",padding:e.spacing(0,1)},e.mixins.toolbar),content:{flexGrow:1,padding:e.spacing(3)},drawerPaper:{width:175}})}));function ge(){var e=Oe(),t=function(e){switch(e){case 0:return Object(r.jsx)(me.a,{});case 1:return Object(r.jsx)(he.a,{});case 2:return Object(r.jsx)(pe.a,{})}};return Object(r.jsxs)("div",{className:e.root,children:[Object(r.jsx)(ie.a,{}),Object(r.jsxs)(ce.a,{className:e.drawer,variant:"permanent",classes:{paper:e.drawerPaper},children:[Object(r.jsx)(se.a,{}),Object(r.jsx)(F.a,{}),Object(r.jsx)(oe.a,{children:[["Favourites","/fav"],["Teams","/teams"],["Game","/game"]].map((function(e,n){return Object(r.jsxs)(ue.a,{button:!0,component:p.b,to:e[1],children:[Object(r.jsx)(le.a,{children:t(n)}),Object(r.jsx)(je.a,{primary:e[0]})]},e[0])}))})]}),Object(r.jsx)("main",{className:e.content,children:Object(r.jsx)(se.a,{})})]})}var xe=function(e){var t=e.items,n=e.textProperty,a=void 0===n?"name":n,c=e.valueProperty,s=void 0===c?"_id":c,o=e.selectedItem,i=e.onItemSelect,u=e.isHorizontal,l=void 0!==u&&u;return Object(r.jsx)("ul",{className:"list-group"+(l?" list-group-horizontal":""),children:t.map((function(e){return Object(r.jsx)("li",{onClick:function(){return i(e)},className:e===o?"list-group-item active":"list-group-item",children:e[a]},e[s])}))})},ve="/generation";function ke(){return we.apply(this,arguments)}function we(){return(we=Object(j.a)(l.a.mark((function e(){var t,n,a,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,z.get(ve);case 2:for(t=e.sent,n=t.data,a=n.results,r=1;r<=a.length;r++)a[r-1]._id=r;return e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var ye="/type";function Ce(){return Ne.apply(this,arguments)}function Ne(){return(Ne=Object(j.a)(l.a.mark((function e(){var t,n,a,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,z.get(ye,{params:{limit:18,offset:0}});case 2:for(t=e.sent,n=t.data,a=n.results,r=1;r<=a.length;r++)a[r-1]._id=r;return e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var Se=function(e){var t=e.value,n=e.onChange;return Object(r.jsx)("input",{type:"text",name:"query",className:"form-control my-3",placeholder:"Search...",value:t,onChange:function(e){return n(e.currentTarget.value)}})};var Ie=function(e){var t=e.pokemons,n=Object(c.useState)([{name:"generation"},{name:"type"}]),a=Object(d.a)(n,2),s=(a[0],a[1],Object(c.useState)([])),o=Object(d.a)(s,2),i=o[0],u=o[1],p=Object(c.useState)([]),b=Object(d.a)(p,2),m=(b[0],b[1]),f=Object(c.useState)([]),O=Object(d.a)(f,2),g=(O[0],O[1]),x=Object(c.useState)(1),v=Object(d.a)(x,2),k=v[0],w=v[1],y=Object(c.useState)(9),C=Object(d.a)(y,2),N=C[0],S=(C[1],Object(c.useState)("")),I=Object(d.a)(S,2),P=I[0],F=I[1],T=Object(c.useState)({name:"type"}),E=Object(d.a)(T,2),L=E[0],R=(E[1],Object(c.useState)(null)),_=Object(d.a)(R,2),A=_[0],D=_[1],W=Object(c.useState)(null),B=Object(d.a)(W,2);B[0],B[1];Object(c.useEffect)((function(){(function(){var e=Object(j.a)(l.a.mark((function e(){var t,n,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ke();case 2:return t=e.sent,n=[{_id:"",name:"All Generations"}].concat(Object(h.a)(t)),e.next=6,Ce();case 6:t=e.sent,a=[{_id:"",name:"All Types"}].concat(Object(h.a)(t)),m(n),g(a),u(a);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var U=function(){var e=t;if(L&&A&&A._id)switch(L.name){case"generation":break;case"type":e=t.filter((function(e){return e.type[0]==A.name||e.type[1]==A.name}))}P&&(e=e.filter((function(e){return e.name.toLowerCase().startsWith(P.toLowerCase())})));var n=function(e,t,n){var a=(t-1)*n;return te()(e).slice(a).take(n).value()}(e,k,N);return{totalCount:e.length,currPagePokemons:n}}(),z=U.totalCount,K=U.currPagePokemons;return Object(r.jsxs)("div",{className:"row",style:{margin:0},children:[Object(r.jsx)("div",{className:"col-2",children:Object(r.jsx)(ge,{})}),Object(r.jsx)("div",{className:"col-2",style:{marginTop:"2vw"},children:Object(r.jsx)(xe,{items:i,selectedItem:A,onItemSelect:function(e){D(e),F(""),w(1)}})}),Object(r.jsxs)("div",{className:"col-8",style:{marginTop:"1vw"},children:[Object(r.jsx)(Se,{value:P,onChange:function(e){F(e),w(1)}}),Object(r.jsx)(ae,{pokemons:K}),Object(r.jsx)(ne,{itemsCount:z,pageSize:N,currentPage:k,onPageChange:w})]})]})},Pe=n(218),Fe=n(98),Te=n.n(Fe),Ee="/auth";function Le(e,t){return Re.apply(this,arguments)}function Re(){return(Re=Object(j.a)(l.a.mark((function e(t,n){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,U.post(Ee,{userName:t,userPassword:n});case 3:return a=e.sent,localStorage.setItem("userKey",JSON.stringify(a.data)),console.log(localStorage.getItem("userKey")),e.abrupt("return",a.data);case 9:if(e.prev=9,e.t0=e.catch(0),console.log(e.t0),!e.t0.response){e.next=16;break}throw new Error(e.t0.response.data);case 16:throw new Error("OOps Something went wrong?");case 17:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}var _e={login:Le,logout:function(){localStorage.removeItem("userKey")},getCurrentUser:function(){try{return localStorage.getItem("userKey")}catch(e){return null}}},Ae=Object(x.a)((function(e){return Object(re.a)({root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},appBar:{zIndex:e.zIndex.drawer+1},title:{flexGrow:1}})})),De=function(){var e=Ae();_e.getCurrentUser();return Object(r.jsx)("div",{className:e.root,children:Object(r.jsx)(Pe.a,{className:e.appBar,position:"fixed",style:{backgroundColor:"#c91104",width:"100vw"},children:Object(r.jsxs)(se.a,{children:[Object(r.jsx)(N.a,{edge:"start",className:e.menuButton,color:"inherit","aria-label":"menu",component:p.b,to:"/",children:Object(r.jsx)(Te.a,{})}),Object(r.jsx)(y.a,{variant:"h6",className:e.title,children:"Home"}),Object(r.jsxs)("div",{children:[Object(r.jsx)(P.a,{color:"inherit",component:p.b,to:"/login",children:"Login"}),Object(r.jsx)(P.a,{color:"inherit",component:p.b,to:"/register",children:"Register"})]}),Object(r.jsx)(P.a,{color:"inherit",component:p.b,to:"/logout",children:"Logout"})]})})})},We=function(){return Object(r.jsx)("div",{children:Object(r.jsx)("img",{src:"/page404_LI.jpg",alt:"Page not found",style:{width:"100%",height:"50vw"}})})},Be=n(3),Ue=function(e){e.path;var t=e.component,n=e.render,a=Object(Be.a)(e,["path","component","render"]);return Object(r.jsx)(b.b,Object(g.a)(Object(g.a)({},a),{},{render:function(e){return _e.getCurrentUser()?t?Object(r.jsx)(t,Object(g.a)({},e)):n(e):Object(r.jsx)(b.a,{to:{pathname:"/login",state:{from:e.location}}})}}))},ze=n(231),Ke=n(220),qe=n(99),Ge=n.n(qe),Je=n(219),Me=Object(x.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItem:"center,"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}})),He=function(e){var t=Object(c.useState)(""),n=Object(d.a)(t,2),a=n[0],s=n[1],o=Object(c.useState)(""),i=Object(d.a)(o,2),u=i[0],p=i[1],m=Me(),f=Object(b.g)(),h=function(){var e=Object(j.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,Le(a,u);case 4:f.push("/"),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(1),p(""),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}();return Object(r.jsxs)(Je.a,{component:"main",maxWidth:"xs",children:[Object(r.jsx)(ie.a,{}),Object(r.jsxs)("div",{className:m.paper,children:[Object(r.jsx)(ze.a,{className:m.avatar,children:Object(r.jsx)(Ge.a,{})}),Object(r.jsx)(y.a,{component:"h1",variant:"h5",children:"Sign in"}),Object(r.jsxs)("form",{className:m.form,onSubmit:h,children:[Object(r.jsx)(T.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Username",name:"email",autoComplete:"off",autoFocus:!0,value:a,onChange:function(e){s(e.target.value)}}),Object(r.jsx)(T.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",value:u,onChange:function(e){p(e.target.value)}}),Object(r.jsx)(P.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:m.submit,children:"Sign In"}),Object(r.jsx)(O.a,{container:!0,children:Object(r.jsx)(O.a,{item:!0,children:Object(r.jsx)(Ke.a,{href:"/register",variant:"body2",children:"Don't have an account? Sign Up"})})})]})]})]})},Ve=n(100),Qe=n.n(Ve),Xe=Object(x.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItem:"center,"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}})),Ye=function(e){var t=Xe(),n=Object(b.g)(),a=Object(c.useState)(""),s=Object(d.a)(a,2),o=s[0],i=s[1],u=Object(c.useState)(""),p=Object(d.a)(u,2),m=p[0],f=p[1],h=Object(c.useState)(""),g=Object(d.a)(h,2),x=g[0],v=g[1],k=Object(c.useState)(""),w=Object(d.a)(k,2),C=w[0],N=w[1],S=function(){var e=Object(j.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault();try{a={userId:0,userFirstName:o,userLastName:m,userName:x,userPassword:C},U.post("/user",{userName:a.userName,userPassword:a.userPassword,userFirstname:a.userFirstName,userLastname:a.userLastName}),n.push("/")}catch(t){console.log(t)}case 2:case"end":return e.stop()}var a}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(r.jsxs)(Je.a,{component:"main",maxWidth:"xs",children:[Object(r.jsx)(ie.a,{}),Object(r.jsxs)("div",{className:t.paper,children:[Object(r.jsx)(ze.a,{className:t.avatar,children:Object(r.jsx)(Qe.a,{})}),Object(r.jsx)(y.a,{component:"h1",variant:"h5",children:"Register"}),Object(r.jsxs)("form",{className:t.form,onSubmit:S,children:[Object(r.jsx)(T.a,{margin:"normal",required:!0,fullWidth:!0,id:"firstName",label:"First Name",name:"firstName",autoComplete:"Name",autoFocus:!0,value:o,onChange:function(e){i(e.target.value)}}),Object(r.jsx)(T.a,{margin:"normal",required:!0,fullWidth:!0,name:"lastName",label:"Last Name",id:"lastName",autoComplete:"Surname",value:m,onChange:function(e){f(e.target.value)}}),Object(r.jsx)(T.a,{margin:"normal",required:!0,fullWidth:!0,id:"username",label:"Username",name:"username",autoComplete:"username",autoFocus:!0,value:x,onChange:function(e){v(e.target.value)}}),Object(r.jsx)(T.a,{margin:"normal",required:!0,fullWidth:!0,id:"password",label:"Password",name:"password",type:"password",autoComplete:"password",autoFocus:!0,value:C,onChange:function(e){N(e.target.value)}}),Object(r.jsx)(P.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:t.submit,children:"Register"}),Object(r.jsx)(O.a,{container:!0,children:Object(r.jsx)(O.a,{item:!0,children:Object(r.jsx)(Ke.a,{href:"/login",variant:"body2",children:"Already have an account? Login"})})})]})]})]})},Ze=function(e){var t=e.pokemons,n=Object(c.useState)([]),a=Object(d.a)(n,2),s=a[0],o=a[1],i=Object(c.useState)([]),u=Object(d.a)(i,2),p=(u[0],u[1],Object(c.useState)(9)),b=Object(d.a)(p,2),m=b[0],f=(b[1],Object(c.useState)(1)),h=Object(d.a)(f,2),g=h[0],x=h[1],v=Object(c.useState)(!1),k=Object(d.a)(v,2),w=k[0],y=k[1],C=JSON.parse(localStorage.getItem("userKey")).userId;Object(c.useEffect)((function(){(function(){var e=Object(j.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=o,e.next=3,G(C);case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()(),y(!1)}),[w]);var N=function(){console.log("clocked "),y(!0)};console.log();var S=t.map((function(e){for(var t=0;t<s.length;t++)if(e.id===s[t].favPokeId){return Object(r.jsx)(O.a,{xs:2,item:!0,children:Object(r.jsx)($,{pokemon:e,favorite:s[t],isfavorite:!0,trigger:N})},e.id)}}));return Object(r.jsxs)("div",{children:[Object(r.jsx)(O.a,{container:!0,spacing:2,children:S}),Object(r.jsx)(ne,{itemsCount:s.length,pageSize:m,currentPage:g,onPageChange:x})]})},$e=n(223),et=n(221),tt=n(222),nt=n(102),at=n.n(nt),rt=n(101),ct=n.n(rt),st=Object(x.a)({root:{marginTop:25,minWidth:275},title:{color:"white",fontSize:24},custom:{color:"white"}}),ot=function(e){var t=st(),n=Object(c.useState)([]),a=Object(d.a)(n,2),s=a[0],o=a[1],i=Object(c.useState)(!1),u=Object(d.a)(i,2),p=u[0],b=u[1],m=Object(c.useContext)(xt);Object(c.useEffect)((function(){(function(){var t=Object(j.a)(l.a.mark((function t(){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=o,t.next=3,q(e.id);case 3:t.t1=t.sent,(0,t.t0)(t.t1);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()(),b(!1)}),[p]);var f=function(){var e=Object(j.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,n=t,U.delete("/team/".concat(n)),void console.log("Success deleted!");case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.log(e.t0);case 8:case"end":return e.stop()}var n}),e,null,[[0,5]])})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=Object(j.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,V(t);case 3:console.log("Delete succeed"),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}(),g=m.map((function(e){for(var n=function(n){if(e.id===s[n].teamPokeId)return{v:Object(r.jsx)("div",{children:Object(r.jsx)(O.a,{xs:4,item:!0,children:Object(r.jsx)(oe.a,{children:Object(r.jsx)("div",{className:"row",children:Object(r.jsxs)(ue.a,{className:t.custom,alignItems:"flex-start",children:[Object(r.jsx)(et.a,{children:Object(r.jsx)(ze.a,{alt:e.name,src:e.picture})}),Object(r.jsx)(je.a,{children:e.name}),Object(r.jsx)(tt.a,{onClick:function(){b(!0)},children:Object(r.jsx)(N.a,{className:"ml-auto",edge:"end",style:{color:"white"},onClick:function(){h(s[n].id)},children:Object(r.jsx)(ct.a,{})})})]})})})})},e.id)}},a=0;a<s.length;a++){var c=n(a);if("object"===typeof c)return c.v}}));return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)(v.a,{className:t.root,variant:"outlined",children:[Object(r.jsxs)(w.a,{style:{backgroundColor:"black"},children:[Object(r.jsxs)(y.a,{className:t.title,color:"textSecondary",gutterBottom:!0,children:["Pokemon Team",Object(r.jsx)("span",{children:" "}),e.name]}),Object(r.jsx)("div",{children:g})]}),Object(r.jsx)($e.a,{onClick:e.triger,style:{backgroundColor:"grey"},children:Object(r.jsx)(N.a,{onClick:function(){return f(e.id)},children:Object(r.jsx)(at.a,{})})})]})})},it=n(224),ut=n(228),lt=n(226),jt=n(227),dt=n(225),pt=function(e){var t=Object(c.useState)([]),n=Object(d.a)(t,2),a=n[0],o=n[1],i=s.a.useState(!1),u=Object(d.a)(i,2),p=u[0],b=u[1],m=Object(c.useState)(""),f=Object(d.a)(m,2),h=f[0],g=f[1],x=Object(c.useState)(!1),v=Object(d.a)(x,2),k=v[0],w=v[1],y=function(){b(!1)},C=JSON.parse(localStorage.getItem("userKey")),N=[],S=function(){var e=Object(j.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault();try{n={userId:C.userId,teamName:h},console.log("New team",n),M(n),w(!0)}catch(t){console.log("I am hrere"),console.log(t)}case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();Object(c.useEffect)((function(){(function(){var e=Object(j.a)(l.a.mark((function e(){var t,n,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,X(C.userId);case 2:for(t=e.sent,n=t.userTeams,a=0;a<n.length;a++)N.push(n[a]);o([].concat(N));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()(),w(!1)}),[k]);var I=function(){w(!0)},F=a.map((function(e){return Object(r.jsxs)(O.a,{xs:4,item:!0,children:[Object(r.jsx)("div",{},e.teamid),Object(r.jsx)(ot,{triger:I,id:e.teamid,name:e.teamName})]})}));return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(O.a,{container:!0,spacing:3,children:F}),Object(r.jsx)(P.a,{variant:"outlined",color:"primary",onClick:function(){b(!0)},children:"Create New Team"}),Object(r.jsxs)(it.a,{open:p,onClose:y,"aria-labelledby":"form-dialog-title",children:[Object(r.jsx)(dt.a,{id:"form-dialog-title",children:"New Team"}),Object(r.jsxs)(lt.a,{children:[Object(r.jsx)(jt.a,{children:"Enter Team Name"}),Object(r.jsx)(T.a,{autoFocus:!0,margin:"dense",id:"name",label:"Team Name",type:"text",value:h,onChange:function(e){g(e.target.value)},fullWidth:!0})]}),Object(r.jsxs)(ut.a,{children:[Object(r.jsx)(P.a,{onClick:y,color:"primary",children:"Cancel"}),Object(r.jsx)(P.a,{type:"submit",onClick:S,color:"primary",children:"Create"})]})]})]})},bt="/pokemon";function mt(e){return"".concat(bt,"/").concat(e)}var ft=function(){var e=Object(j.a)(l.a.mark((function e(){var t,n,a,r,c,s,o=arguments;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=o.length>0&&void 0!==o[0]?o[0]:0,n=o.length>1&&void 0!==o[1]?o[1]:2e3,e.prev=2,a={params:{offset:t,limit:n}},e.next=6,z.get(bt,a);case 6:return r=e.sent,c=r.data,s=c.results.map((function(e){return ht(e.name)})),e.next=11,Promise.all(s);case 11:return e.abrupt("return",e.sent);case 14:throw e.prev=14,e.t0=e.catch(2),new Error;case 17:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(){return e.apply(this,arguments)}}(),ht=function(){var e=Object(j.a)(l.a.mark((function e(t){var n,a,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,z.get(mt(t));case 3:return n=e.sent,a=n.data,(r=new A).id=a.id,r.name=a.name,r.picture=a.sprites.front_default,r.weight=a.weight,r.type=[a.types[0].type.name,a.types[1]&&a.types[1].type.name],e.abrupt("return",r);case 14:throw e.prev=14,e.t0=e.catch(0),new Error;case 17:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(t){return e.apply(this,arguments)}}(),Ot=function(){var e=Object(c.useState)([]),t=Object(d.a)(e,2),n=t[0],s=t[1],o=Object(c.useState)({name:"bulbasaur",id:1,weight:20,picture:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",type:[a.Grass,a.Poison]}),i=Object(d.a)(o,2),u=i[0],p=i[1],b=Object(c.useState)(!0),m=Object(d.a)(b,2),f=m[0],g=m[1],x=function(){var e=Math.ceil(1),t=Math.floor(500);return Math.floor(Math.random()*(t-e+1))+e};console.log(x()),Object(c.useEffect)((function(){(console.log("i am calling "),f)&&function(){var e=Object(j.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=p,e.next=3,K(x());case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()();g(!1)}),[f]),console.log(u);var v=n.map((function(e){return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(O.a,{item:!0,xs:3,alignContent:"flex-start",children:Object(r.jsx)($,{pokemon:e})},e.id)})})),k=function(){return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)(O.a,{container:!0,direction:"column",justify:"center",alignItems:"center",spacing:1,children:[Object(r.jsx)(O.a,{item:!0,xs:12,children:Object(r.jsx)($,{pokemon:u})}),Object(r.jsxs)(O.a,{item:!0,xs:12,children:[Object(r.jsx)(P.a,{variant:"outlined",color:"primary",onClick:function(){return e=u,s((function(t){return t.filter((function(t){return e.id==t.id})).length>0?t:[].concat(Object(h.a)(t),[e])})),void g(!0);var e},children:"Catch"}),Object(r.jsx)(P.a,{variant:"outlined",color:"secondary",onClick:function(){return g(!0)},children:"Skip"})]})]})})};return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(k,{}),Object(r.jsx)(O.a,{container:!0,direction:"row",justify:"flex-start",alignItems:"flex-start",spacing:1,children:v})]})},gt=function(){return _e.logout(),Object(b.g)().push("/"),null};m.b.add(f.c,f.b,f.a);var xt=s.a.createContext(void 0),vt=s.a.createContext(void 0);var kt=function(){var e=Object(c.useState)(),t=Object(d.a)(e,2),n=t[0],a=(t[1],Object(c.useState)([])),s=Object(d.a)(a,2),o=s[0],i=s[1];return Object(c.useEffect)((function(){(function(){var e=Object(j.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ft();case 2:t=e.sent,i(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(r.jsx)(vt.Provider,{value:n,children:Object(r.jsx)(xt.Provider,{value:o,children:Object(r.jsxs)(p.a,{children:[Object(r.jsx)(De,{}),Object(r.jsxs)(b.d,{children:[Object(r.jsx)(b.b,{path:"/login",component:He}),Object(r.jsx)(b.b,{path:"/logout",component:gt}),Object(r.jsx)(Ue,{path:"/fav",render:function(){return Object(r.jsx)(Ze,{pokemons:o})}}),Object(r.jsx)(Ue,{path:"/teams",component:pt}),Object(r.jsx)(b.b,{path:"/register",component:Ye}),Object(r.jsx)(b.b,{path:"/pokemons",render:function(){return Object(r.jsx)(Ie,{pokemons:o})}}),Object(r.jsx)(Ue,{path:"/game",render:function(){return Object(r.jsx)(Ot,{pokemons:o})}}),Object(r.jsx)(b.b,{path:"/not-found",component:We}),Object(r.jsx)(b.a,{exact:!0,from:"/",to:"/pokemons"}),Object(r.jsx)(b.a,{to:"/not-found"})]})]})})})},wt=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,234)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),c(e),s(e)}))};i.a.render(Object(r.jsx)(kt,{}),document.getElementById("root")),wt()}},[[157,1,2]]]);
//# sourceMappingURL=main.d5187f33.chunk.js.map