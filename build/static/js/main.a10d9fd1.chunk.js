(this["webpackJsonpwd4-11"]=this["webpackJsonpwd4-11"]||[]).push([[0],{20:function(e,t,i){},21:function(e,t,i){},51:function(e,t,i){"use strict";i.r(t);var n=i(1),c=i.n(n),s=i(14),o=i.n(s),a=(i(20),i(7)),r=i(2),l=(i(21),i(5)),d=i(4),j=i(0);var b=function(){var e=Object(n.useState)(""),t=Object(d.a)(e,2),i=t[0],c=t[1],s=Object(r.f)();return Object(j.jsx)("section",{style:h.container,children:Object(j.jsxs)("form",{onSubmit:function(e){return function(e,t){e.preventDefault(),console.log("boop-",t),s("/search/"+t)}(e,i)},children:[Object(j.jsx)("input",{style:h.search,name:"searchInput",value:i,onChange:function(e){c(e.target.value)}}),Object(j.jsx)("button",{type:"submit",children:"Search"})]})})},h={container:{position:"absolute",right:0,top:130},search:{backgroundColor:"#FFE6A7",color:"#633817"}},m=i(3);var u=function(){var e="lkziTbYVbS",t="https://api.boardgameatlas.com/api/",i=Object(n.useState)([]),c=Object(d.a)(i,2),s=c[0],o=c[1],a=Object(r.g)().searchQuery;return Object(n.useEffect)((function(){fetch(t+"search?name="+a+"&client_id="+e).then((function(e){return e.json()})).then((function(e){console.log(e),o(e.games)}))}),[a]),Object(j.jsxs)("div",{style:g.div,children:[Object(j.jsx)(b,{}),s.map((function(e,t){return Object(j.jsxs)("article",Object(l.a)(Object(l.a)({},Object(m.css)(p)),{},{children:[Object(j.jsx)("h2",{style:g.gameTitle,children:e.name}),Object(j.jsx)("img",{style:g.img,src:e.images.medium,alt:e.name+"'s box art"}),Object(j.jsxs)("a",{href:"/SelectedGame/".concat(e.id),children:[" ",Object(j.jsx)("button",Object(l.a)({},Object(m.css)(x)))]})]}),e.id)}))]})},g={button:{position:"absolute",width:"100%",height:"100%",top:"0",left:"0",background:"transparent",cursor:"pointer"},card:{backgroundColor:"#633817",display:"flex",flexDirection:"column",width:"calc(85%/5)",paddingBottom:"10px",margin:"20px 0px",position:"relative",transition:"transform 0.25s"},div:{backgroundColor:"#FFE6A7",display:"flex",flexDirection:"row",height:"75%",flexWrap:"wrap",justifyContent:"space-around"},img:{objectFit:"contain",height:"75%",display:"block",marginLeft:"auto",marginRight:"auto",width:"40%"},gameTitle:{color:"#FFE6A7",fontFamily:"Futura PT"}},x=Object(m.css)({position:"absolute",width:"100%",height:"100%",top:"0",left:"0",background:"transparent",cursor:"pointer"}),p=Object(m.css)({backgroundColor:"#633817",display:"flex",flexDirection:"column",width:"calc(85%/5)",paddingBottom:"10px",margin:"20px 0px",position:"relative",transition:"transform 0.25s",":hover":{transform:"scale(1.05)"}});var f=function(){var e=(new Date).getFullYear()-1,t=Object(r.g)().gid,i="https://api.boardgameatlas.com/api/search?client_id=lkziTbYVbS&gt_discount=0.4&limit=5",c="https://api.boardgameatlas.com/api/search?client_id=lkziTbYVbS&order_by=rank&limit=5",s="https://api.boardgameatlas.com/api/search?client_id=lkziTbYVbS&gt_year_published=".concat(e,"&limit=5&skip=1"),o=Object(n.useState)([]),a=Object(d.a)(o,2),b=a[0],h=a[1],u=Object(n.useState)([]),g=Object(d.a)(u,2),x=g[0],p=g[1],f=Object(n.useState)([]),F=Object(d.a)(f,2),k=F[0],S=F[1];return Object(n.useEffect)((function(){console.log(e),fetch(i).then((function(e){return e.json()})).then((function(e){console.log(e),h(e.games)})),fetch(c).then((function(e){return e.json()})).then((function(e){console.log(e),p(e.games)})),fetch(s).then((function(e){return e.json()})).then((function(e){console.log(e),S(e.games)}))}),[t]),Object(j.jsxs)("div",{children:[Object(j.jsxs)("div",{style:O.div,children:[Object(j.jsx)("h2",{style:O.p,children:"Best Discounts Right Now"}),Object(j.jsx)("div",{style:O.div,children:b.map((function(e,t){return Object(j.jsxs)("article",Object(l.a)(Object(l.a)({},Object(m.css)(v)),{},{children:[Object(j.jsx)("h2",{style:O.gameTitle,children:e.name}),Object(j.jsx)("img",{style:O.img,src:e.images.medium,alt:e.name+"'s box art"}),Object(j.jsxs)("ul",{style:O.ul,children:[Object(j.jsxs)("li",{children:["Was: $",e.msrp]}),Object(j.jsxs)("li",{children:["Now: $",e.price]})]}),Object(j.jsxs)("a",{href:"/SelectedGame/".concat(e.id),children:[" ",Object(j.jsx)("button",Object(l.a)({},Object(m.css)(y)))]})]}),e.id)}))})]}),Object(j.jsxs)("div",{style:O.div,children:[Object(j.jsx)("h2",{style:O.p,children:"Top Ranked Games"}),Object(j.jsx)("div",{style:O.div,children:x.map((function(e,t){return Object(j.jsxs)("article",Object(l.a)(Object(l.a)({},Object(m.css)(v)),{},{children:[Object(j.jsx)("h2",{style:O.gameTitle,children:e.name}),Object(j.jsx)("img",{style:O.img,src:e.images.medium,alt:e.name+"'s box art"}),Object(j.jsxs)("a",{href:"/SelectedGame/".concat(e.id),children:[" ",Object(j.jsx)("button",Object(l.a)({},Object(m.css)(y)))]})]}),e.id)}))})]}),Object(j.jsxs)("div",{style:O.div,children:[Object(j.jsx)("h2",{style:O.p,children:"Games Published This Year!"}),Object(j.jsx)("div",{style:O.div,children:k.map((function(e,t){return Object(j.jsxs)("article",Object(l.a)(Object(l.a)({},Object(m.css)(v)),{},{children:[Object(j.jsx)("h2",{style:O.gameTitle,children:e.name}),Object(j.jsx)("img",{style:O.img,src:e.images.medium,alt:e.name+"'s box art"}),Object(j.jsxs)("a",{href:"/SelectedGame/".concat(e.id),children:[" ",Object(j.jsx)("button",Object(l.a)({},Object(m.css)(y)))]})]}),e.id)}))})]})]})},O={button:{position:"absolute",width:"100%",height:"100%",top:"0",left:"0",background:"transparent",cursor:"pointer"},card:{backgroundColor:"#633817",display:"flex",flexDirection:"column",width:"calc(85%/5)",paddingBottom:"10px",margin:"20px 0px",position:"relative",transition:"transform 0.25s"},div:{backgroundColor:"#99582A",display:"flex",flexDirection:"row",height:"75%",flexWrap:"wrap",justifyContent:"space-around",marginTop:"20px"},img:{objectFit:"contain",height:"75%",display:"block",marginLeft:"auto",marginRight:"auto",width:"40%"},gameTitle:{color:"#FFE6A7",fontFamily:"Futura PT"},p:{color:"#FFE6A7"},ul:{color:"#FFE6A7",textAlign:"center",padding:"10px",width:"100%",margin:"0 auto"}},y=Object(m.css)({position:"absolute",width:"100%",height:"100%",top:"0",left:"0",background:"transparent",cursor:"pointer"}),v=Object(m.css)({backgroundColor:"#633817",display:"flex",flexDirection:"column",width:"calc(85%/5)",paddingBottom:"10px",margin:"20px 0px",position:"relative",transition:"transform 0.25s",":hover":{transform:"scale(1.05)"}}),F=i.p+"static/media/logo.7b9c5a2a.png";var k=function(){return Object(j.jsxs)("header",{style:S.header,children:[Object(j.jsxs)("h1",{style:S.title,children:["Board ",Object(j.jsx)("a",{href:"/",children:Object(j.jsx)("img",{src:F,alt:"Board Debut Logo"})})," Debut"]}),Object(j.jsxs)("div",{style:S.links,children:[Object(j.jsx)(a.b,{style:S.link,to:"/",children:"Home"}),Object(j.jsx)(a.b,{style:S.link,to:"/search/hill",children:"Search"}),Object(j.jsx)(a.b,{style:S.link,to:"/Collection",children:"My Collection"}),Object(j.jsx)(a.b,{style:S.link,to:"/Wishlist",children:"Wishlist"})]})]})},S={header:{backgroundColor:"#633817",paddingTop:"1px",marginTop:"-20px"},link:{backgroundColor:"#432818",color:"#FFE6A7",margin:"1rem",padding:"5px",fontFamily:"Montserrat",fontWeight:"bold"},title:{fontFamily:"Baskerville",fontWeight:"bold",color:"#FFE6A7",fontSize:"40px"},links:{display:"inline-block",textAlign:"right"}},w=i(15),T=function e(t){var i=this;Object(w.a)(this,e),this._gKey="",this.getGames=function(){var e=localStorage.getItem(i._gKey);return JSON.parse(e)||[]},this.saveGames=function(e){if(!i.exists(e)){console.log("Saving Game: ",e);var t=i.getGames();t.push(e),localStorage.setItem(i._gKey,JSON.stringify(t))}},this.removeGame=function(e){var t=i.getGames();i.exists(e)?(t.splice(t.indexOf(e),1),localStorage.setItem(i._gKey,JSON.stringify(t))):console.error("removeGame not found")},this.exists=function(e){return i.getGames().indexOf(e)>-1},t?console.log("Local Storage Key: "+t):console.log("You must provide a key!"),this._gKey=t};var C=function(){var e=Object(r.g)().gid,t="https://api.boardgameatlas.com/api/search?client_id=lkziTbYVbS&ids=",i=Object(n.useState)([]),c=Object(d.a)(i,2),s=c[0],o=c[1],a=new T("Collection");return Object(n.useEffect)((function(){!function(e){e=a.getGames();for(var i=0;i<e.length;i++)t+=e[i]+",";fetch(t).then((function(e){return e.json()})).then((function(e){console.log(e),o(e.games),console.log("GAME: "+e[1])}))}(e)}),[e]),Object(j.jsx)("div",{style:G.div,children:s.map((function(e,t){return Object(j.jsxs)("article",Object(l.a)(Object(l.a)({},Object(m.css)(_)),{},{children:[Object(j.jsx)("h2",{style:G.gameTitle,children:e.name}),Object(j.jsx)("img",{style:G.img,src:e.images.medium,alt:e.name+"'s box art"}),Object(j.jsxs)("a",{href:"/SelectedGame/".concat(e.id),children:[" ",Object(j.jsx)("button",Object(l.a)({},Object(m.css)(A)))]})]}),e.id)}))})},G={div:{backgroundColor:"#FFE6A7",display:"flex",flexDirection:"row",height:"75%",flexWrap:"wrap",justifyContent:"space-around"},img:{objectFit:"contain",height:"75%",display:"block",marginLeft:"auto",marginRight:"auto",width:"40%"},gameTitle:{color:"#FFE6A7",fontFamily:"Futura PT"}},A=Object(m.css)({position:"absolute",width:"100%",height:"100%",top:"0",left:"0",background:"transparent",cursor:"pointer"}),_=Object(m.css)({backgroundColor:"#633817",display:"flex",flexDirection:"column",width:"calc(85%/5)",paddingBottom:"10px",margin:"20px 0px",position:"relative",transition:"transform 0.25s",":hover":{transform:"scale(1.05)"}});var D=function(){var e=Object(n.useState)(!1),t=Object(d.a)(e,2),i=t[0],c=t[1],s=Object(n.useState)(!1),o=Object(d.a)(s,2),a=o[0],l=o[1],b=Object(n.useState)([]),h=Object(d.a)(b,2),m=h[0],u=h[1],g=new T("Collection"),x=new T("Wishlist"),p=Object(r.g)().gid,f="lkziTbYVbS",O="https://api.boardgameatlas.com/api/";return Object(n.useEffect)((function(){fetch(O+"search?ids="+p+"&client_id="+f).then((function(e){return e.json()})).then((function(e){console.log(e),u(e.games)})),c(g.exists(p)),l(x.exists(p))}),[]),Object(j.jsxs)("div",{style:E.container,children:[m.map((function(e,t){return Object(j.jsxs)("section",{style:E.container,children:[Object(j.jsx)("div",{style:E.imgBox,children:Object(j.jsx)("img",{style:E.img,src:e.images.medium,alt:e.name+"'s box art"})}),Object(j.jsxs)("div",{style:E.infoBox,children:[Object(j.jsx)("h2",{style:E.title,children:e.name}),Object(j.jsxs)("dl",{style:E.dl,children:[Object(j.jsx)("dd",{style:E.dd,children:"Players:"}),Object(j.jsx)("dt",{style:E.dt,children:" "+e.min_players+"-"+e.max_players}),Object(j.jsx)("dd",{style:E.dd,children:"Time:"}),Object(j.jsx)("dt",{style:E.dt,children:e.min_playtime+"-"+e.max_playtime+"mins"}),Object(j.jsx)("dd",{style:E.dd,children:"Price:"}),Object(j.jsx)("dt",{style:E.dt,children:e.msrp_text}),Object(j.jsx)("dd",{style:E.dd,children:"Ages:"}),Object(j.jsx)("dt",{style:E.dt,children:e.min_age+"+"})]}),Object(j.jsx)("p",{style:E.desc,children:e.description_preview}),Object(j.jsx)("form",{onSubmit:function(t){!function(e,t){e.preventDefault(),console.log("Add Game: ",e,t),g.saveGames(t),i?(g.removeGame(t),c(!1)):(g.saveGames(t),c(!0))}(t,e.id)},children:Object(j.jsx)("button",{style:E.button,type:"submit",children:i?"Remove from collection":"Add to Collection"})}),Object(j.jsx)("form",{onSubmit:function(t){!function(e,t){e.preventDefault(),console.log("Add Game: ",e,t),x.saveGames(t),a?(x.removeGame(t),l(!1)):(x.saveGames(t),l(!0))}(t,e.id)},children:Object(j.jsx)("button",{style:E.button,type:"submit",children:a?"Remove from Wishlist":"Add to Wishlist"})})]})]},e.id)})),Object(j.jsx)("div",{})]})},E={container:{display:"flex",flexDirection:"row"},imgBox:{width:"calc(100%/2 - 20px)",marginTop:"20px",marginRight:"20px"},img:{width:"80%"},infoBox:{width:"calc(100%/2 - 1rem)",display:"flex",flexDirection:"column",textAlign:"left",color:"#633817"},dl:{display:"flex",flexDirection:"row",justifyContent:"center"},title:{textAlign:"center",fontSize:"45px",marginTop:"20px"},dd:{fontFamily:"Futura PT",fontWeight:"bold",fontSize:"24px"},dt:{fontFamily:"Montserrat",fontSize:"20px",marginLeft:"10px",marginTop:"6px"},desc:{fontSize:"20px",fontFamily:"Montserrat",fontWeight:"bold"},button:{backgroundColor:"#633817",color:"#FFE6A7",fontFamily:"Montserrat",padding:"15px",borderRadius:"16px",border:"none",cursor:"pointer",fontWeight:"bold"}};var W=function(){var e=Object(r.g)().gid,t="https://api.boardgameatlas.com/api/search?client_id=lkziTbYVbS&ids=",i=Object(n.useState)([]),c=Object(d.a)(i,2),s=c[0],o=c[1],a=new T("Wishlist");return Object(n.useEffect)((function(){!function(e){e=a.getGames();for(var i=0;i<e.length;i++)t+=e[i]+",";fetch(t).then((function(e){return e.json()})).then((function(e){console.log(e),o(e.games)}))}(e)}),[e]),Object(j.jsx)("div",{style:B.div,children:s.map((function(e,t){return Object(j.jsxs)("article",Object(l.a)(Object(l.a)({},Object(m.css)(P)),{},{children:[Object(j.jsx)("h2",{style:B.gameTitle,children:e.name}),Object(j.jsx)("img",{style:B.img,src:e.images.medium,alt:e.name+"'s box art"}),Object(j.jsx)("h3",{children:e.msrp_text}),Object(j.jsxs)("a",{href:"/SelectedGame/".concat(e.id),children:[" ",Object(j.jsx)("button",Object(l.a)({},Object(m.css)(z)))]})]}),e.id)}))})},B={div:{backgroundColor:"#FFE6A7",display:"flex",flexDirection:"row",height:"75%",flexWrap:"wrap",justifyContent:"space-around"},img:{objectFit:"contain",height:"75%",display:"block",marginLeft:"auto",marginRight:"auto",width:"40%"},gameTitle:{color:"#FFE6A7",fontFamily:"Futura PT"}},z=Object(m.css)({position:"absolute",width:"100%",height:"100%",top:"0",left:"0",background:"transparent",cursor:"pointer"}),P=Object(m.css)({backgroundColor:"#633817",display:"flex",flexDirection:"column",width:"calc(85%/5)",paddingBottom:"10px",margin:"20px 0px",position:"relative",transition:"transform 0.25s",":hover":{transform:"scale(1.05)"}});var R=function(){return Object(j.jsx)("main",{style:Y.main,className:"App",children:Object(j.jsxs)(a.a,{children:[Object(j.jsx)(k,{}),Object(j.jsxs)(r.c,{children:[Object(j.jsx)(r.a,{path:"/",element:Object(j.jsx)(f,{})}),Object(j.jsx)(r.a,{path:"/search/:searchQuery",element:Object(j.jsx)(u,{})}),Object(j.jsx)(r.a,{path:"/SelectedGame/:gid",element:Object(j.jsx)(D,{})}),Object(j.jsx)(r.a,{path:"/Collection",element:Object(j.jsx)(C,{})}),Object(j.jsx)(r.a,{path:"/Wishlist",element:Object(j.jsx)(W,{})})]})]})})},Y={main:{backgroundColor:"#FFE6A7"}},L=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,52)).then((function(t){var i=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,o=t.getTTFB;i(e),n(e),c(e),s(e),o(e)}))};o.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(R,{})}),document.getElementById("root")),L()}},[[51,1,2]]]);
//# sourceMappingURL=main.a10d9fd1.chunk.js.map