(this["webpackJsonpwd4-11"]=this["webpackJsonpwd4-11"]||[]).push([[0],{20:function(e,t,i){},21:function(e,t,i){},51:function(e,t,i){"use strict";i.r(t);var n=i(1),a=i.n(n),o=i(14),s=i.n(o),c=(i(20),i(6)),r=i(2),l=(i(21),i(4)),d=i(5),b=i(0);var m=function(){var e=Object(n.useState)(""),t=Object(d.a)(e,2),i=t[0],a=t[1],o=Object(r.f)();return Object(b.jsx)("section",{className:"searchBar",style:j.container,children:Object(b.jsxs)("form",{onSubmit:function(e){return function(e,t){e.preventDefault(),console.log("boop-",t),o("/search/"+t)}(e,i)},children:[Object(b.jsx)("input",{className:"subHead",style:j.search,name:"searchInput",value:i,onChange:function(e){a(e.target.value)}}),Object(b.jsx)("button",{className:"info",style:j.btn,type:"submit",children:"Search"})]})})},j={container:{},search:{color:"#633817",backgroundColor:"#BB9457",border:"none",fontWeight:"900",marginTop:"10px",padding:"5px",borderRadius:"10px",fontFamily:"Futura PT",fontSize:"16px"},btn:{backgroundColor:"#633817",color:"#FFE6A7",fontFamily:"Montserrat",borderRadius:"18px",border:"none",cursor:"pointer",fontWeight:"bold",margin:"10px 30px 0px 0px",padding:"6px",fontSize:"16px"}},p=i(3);var x=function(){var e="lkziTbYVbS",t="https://api.boardgameatlas.com/api/",i=Object(n.useState)([]),a=Object(d.a)(i,2),o=a[0],s=a[1],j=Object(r.g)().searchQuery;return Object(n.useEffect)((function(){fetch(t+"search?name="+j+"&client_id="+e).then((function(e){return e.json()})).then((function(e){console.log(e),s(e.games)}))}),[j]),Object(b.jsxs)("section",{style:h.container,children:[Object(b.jsx)(m,{}),Object(b.jsxs)("div",{style:h.div,children:[0===o.length?Object(b.jsx)("h1",{style:h.empty,children:"Loading..."}):"",o.map((function(e,t){return Object(b.jsxs)("article",Object(l.a)(Object(l.a)({className:"cardArt"},Object(p.css)(g)),{},{children:[Object(b.jsx)("h2",{className:"subHead",style:h.gameTitle,children:e.name}),Object(b.jsx)("img",{style:h.img,src:e.images.medium,alt:e.name+"'s box art"}),Object(b.jsx)(c.b,{to:"/SelectedGame/".concat(e.id),children:Object(b.jsx)("button",Object(l.a)({},Object(p.css)(u)))})]}),e.id)}))]})]})},h={button:{position:"absolute",width:"100%",height:"100%",top:"0",left:"0",background:"transparent",cursor:"pointer"},card:{backgroundColor:"#633817",display:"flex",flexDirection:"column",width:"calc(85%/5)",paddingBottom:"10px",margin:"20px 0px",position:"relative",transition:"transform 0.25s"},div:{backgroundColor:"#FFE6A7",display:"flex",flexDirection:"row",height:"75%",flexWrap:"wrap",justifyContent:"space-around"},img:{objectFit:"contain",height:"75%",display:"block",marginLeft:"auto",marginRight:"auto",width:"40%"},gameTitle:{color:"#FFE6A7",fontFamily:"Futura PT"},container:{backgroundColor:"#FFE6A7",display:"flex",flexDirection:"column",height:"75%",flexWrap:"wrap",justifyContent:"space-around"},empty:{backgroundColor:"#633817",paddingBottom:"10px",margin:"20px 0px",position:"relative",color:"#FFE6A7",padding:"5px 20px",boxShadow:"10px 5px 5px #432818",borderRadius:"12px",marginBottom:"200px"}},u=Object(p.css)({position:"absolute",width:"100%",height:"100%",top:"0",left:"0",background:"transparent",cursor:"pointer",border:"none"}),g=Object(p.css)({backgroundColor:"#633817",display:"flex",flexDirection:"column",paddingBottom:"10px",margin:"20px 0px",position:"relative",transition:"transform 0.25s",borderRadius:"12px",boxShadow:"10px 5px 5px #432818",":hover":{transform:"scale(1.05)"}});var f=function(e){return Object(b.jsxs)("article",Object(l.a)(Object(l.a)({className:"cardArt"},Object(p.css)(v)),{},{children:[Object(b.jsx)("h2",{className:"subHead",style:O.gameTitle,children:e.name}),Object(b.jsx)("img",{style:O.img,src:e.image,alt:e.name+"'s box art"}),Object(b.jsx)("h3",{style:O.subInfo,children:e.info}),Object(b.jsx)(c.b,{to:"/SelectedGame/".concat(e.id),children:Object(b.jsx)("button",Object(l.a)({},Object(p.css)(y)))})]}))},O={img:{objectFit:"contain",height:"75%",display:"block",marginLeft:"auto",marginRight:"auto",width:"40%"},gameTitle:{color:"#FFE6A7",fontFamily:"Futura PT"},subInfo:{color:"#FFE6A7",textAlign:"center",padding:"10px",width:"100%",margin:"0 auto"}},y=Object(p.css)({position:"absolute",width:"100%",height:"100%",top:"0",left:"0",background:"transparent",cursor:"pointer",border:"none"}),v=Object(p.css)({backgroundColor:"#633817",display:"flex",flexDirection:"column",paddingBottom:"10px",margin:"20px 0px",position:"relative",transition:"transform 0.25s",borderRadius:"12px",boxShadow:"10px 5px 5px #432818",":hover":{transform:"scale(1.05)"}});var F=function(e){return Object(b.jsxs)("article",Object(l.a)(Object(l.a)({className:"cardArt"},Object(p.css)(S)),{},{children:[Object(b.jsx)("h2",{className:"subHead",style:k.gameTitle,children:e.name}),Object(b.jsx)("img",{style:k.img,src:e.image,alt:e.name+"'s box art"}),Object(b.jsxs)("ul",{style:k.ul,children:[Object(b.jsxs)("li",{style:k.was,children:["Was: $",e.msrp]}),Object(b.jsxs)("li",{children:["Now: $",e.price]})]}),Object(b.jsx)(c.b,{to:"/SelectedGame/".concat(e.id),children:Object(b.jsx)("button",Object(l.a)({},Object(p.css)(w)))})]}))},k={img:{objectFit:"contain",height:"75%",display:"block",marginLeft:"auto",marginRight:"auto",width:"40%"},gameTitle:{color:"#FFE6A7",fontFamily:"Futura PT"},ul:{color:"#FFE6A7",textAlign:"center",padding:"10px",width:"100%",margin:"0 auto"},was:{textDecoration:"line-through"}},w=Object(p.css)({position:"absolute",width:"100%",height:"100%",top:"0",left:"0",background:"transparent",cursor:"pointer",border:"none"}),S=Object(p.css)({backgroundColor:"#633817",display:"flex",flexDirection:"column",paddingBottom:"10px",margin:"20px 0px",position:"relative",transition:"transform 0.25s",borderRadius:"12px",boxShadow:"10px 5px 5px #432818",":hover":{transform:"scale(1.05)"}});var A=function(e){return Object(b.jsxs)("article",Object(l.a)(Object(l.a)({className:"cardArt"},Object(p.css)(N)),{},{children:[Object(b.jsx)("h2",{className:"subHead",style:C.gameTitle,children:e.name}),Object(b.jsx)("img",{style:C.img,src:e.image,alt:e.name+"'s box art"}),Object(b.jsxs)("h3",{style:C.subInfo,children:["Rank: ",e.rank]}),Object(b.jsxs)("h3",{style:C.subInfo,children:["User Rating: ",e.rating]}),Object(b.jsx)(c.b,{to:"/SelectedGame/".concat(e.id),children:Object(b.jsx)("button",Object(l.a)({},Object(p.css)(T)))})]}))},C={img:{objectFit:"contain",height:"75%",display:"block",marginLeft:"auto",marginRight:"auto",width:"40%"},gameTitle:{color:"#FFE6A7",fontFamily:"Futura PT"},subInfo:{color:"#FFE6A7",textAlign:"center",padding:"10px",width:"100%",margin:"0 auto"}},T=Object(p.css)({position:"absolute",width:"100%",height:"100%",top:"0",left:"0",background:"transparent",cursor:"pointer",border:"none"}),N=Object(p.css)({backgroundColor:"#633817",display:"flex",flexDirection:"column",paddingBottom:"10px",margin:"20px 0px",position:"relative",transition:"transform 0.25s",borderRadius:"12px",boxShadow:"10px 5px 5px #432818",":hover":{transform:"scale(1.05)"}});var _=function(){var e=(new Date).getFullYear()-1,t=Object(r.g)().gid,i="https://api.boardgameatlas.com/api/search?client_id=lkziTbYVbS&gt_discount=0.4&limit=5",a="https://api.boardgameatlas.com/api/search?client_id=lkziTbYVbS&order_by=rank&limit=5",o="https://api.boardgameatlas.com/api/search?client_id=lkziTbYVbS&gt_year_published=".concat(e,"&limit=5&order_by=rank&ascending=true&skip=1"),s=Object(n.useState)([]),c=Object(d.a)(s,2),l=c[0],m=c[1],j=Object(n.useState)([]),p=Object(d.a)(j,2),x=p[0],h=p[1],u=Object(n.useState)([]),g=Object(d.a)(u,2),O=g[0],y=g[1];return Object(n.useEffect)((function(){console.log(e),fetch(i).then((function(e){return e.json()})).then((function(e){console.log(e),m(e.games)})),fetch(a).then((function(e){return e.json()})).then((function(e){console.log(e),h(e.games)})),fetch(o).then((function(e){return e.json()})).then((function(e){console.log(e),y(e.games)}))}),[t]),Object(b.jsxs)("div",{children:[Object(b.jsxs)("div",{style:B.div,children:[Object(b.jsx)("h2",{style:B.subHead,children:"Best Discounts Right Now"}),Object(b.jsxs)("div",{style:B.div,children:[0===l.length?Object(b.jsx)("h1",{style:B.loading,children:"Loading..."}):"",l.map((function(e,t){return Object(b.jsx)(F,{id:e.id,name:e.name,image:e.images.medium,msrp:e.msrp,price:e.price},e.id)}))]})]}),Object(b.jsxs)("div",{style:B.div,children:[Object(b.jsx)("h2",{style:B.subHead,children:"Best Games Published This Year!"}),Object(b.jsxs)("div",{style:B.div,children:[0===l.length?Object(b.jsx)("h1",{style:B.loading,children:"Loading..."}):"",O.map((function(e,t){return Object(b.jsx)(f,{id:e.id,name:e.name,image:e.images.medium,info:void 0!==e.msrp_text?e.msrp_text:"Price Unavailable"},e.id)}))]})]}),Object(b.jsxs)("div",{style:B.div,children:[Object(b.jsx)("h2",{style:B.subHead,children:"Top Ranked Games"}),Object(b.jsxs)("div",{style:B.div,children:[0===l.length?Object(b.jsx)("h1",{style:B.loading,children:"Loading..."}):"",x.map((function(e,t){return Object(b.jsx)(A,{id:e.id,name:e.name,image:e.images.medium,rank:e.rank,rating:e.average_user_rating.toFixed(2)},e.id)}))]})]})]})},B={div:{backgroundColor:"#99582A",display:"flex",flexDirection:"row",height:"75%",flexWrap:"wrap",justifyContent:"space-around",marginTop:"20px"},subHead:{color:"#FFE6A7",width:"100%"},loading:{color:"#FFE6A7",height:"250px"}},E=i.p+"static/media/logo.7b9c5a2a.png";var G=function(){return Object(b.jsxs)("header",{style:R.header,children:[Object(b.jsxs)("h1",{className:"heading",style:R.title,children:["Board ",Object(b.jsx)("a",{href:"/",children:Object(b.jsx)("img",{src:E,alt:"Board Debut Logo"})})," Debut"]}),Object(b.jsxs)("div",{className:"headLinks",style:R.links,children:[Object(b.jsx)(c.b,{className:"info",style:R.link,to:"/",children:"Home"}),Object(b.jsx)(c.b,{className:"info",style:R.link,to:"/search/hill",children:"Search"}),Object(b.jsx)(c.b,{className:"info",style:R.link,to:"/Collection",children:"My Collection"}),Object(b.jsx)(c.b,{className:"info",style:R.link,to:"/Wishlist",children:"Wishlist"})]})]})},R={header:{backgroundColor:"#633817",paddingTop:"1px",marginTop:"-20px",display:"flex",flexDirection:"column"},link:{backgroundColor:"#432818",color:"#FFE6A7",margin:"1rem",padding:"5px",fontFamily:"Montserrat",fontWeight:"bold"},title:{fontFamily:"Baskerville",fontWeight:"bold",color:"#FFE6A7",fontSize:"40px",marginBottom:"5px"},links:{display:"inline-block",marginBottom:"5px"}},D=i(15),W=function e(t){var i=this;Object(D.a)(this,e),this._gKey="",this.getGames=function(){var e=localStorage.getItem(i._gKey);return JSON.parse(e)||[]},this.saveGames=function(e){if(!i.exists(e)){console.log("Saving Game: ",e);var t=i.getGames();t.push(e),localStorage.setItem(i._gKey,JSON.stringify(t))}},this.removeGame=function(e){var t=i.getGames();i.exists(e)?(t.splice(t.indexOf(e),1),localStorage.setItem(i._gKey,JSON.stringify(t))):console.error("removeGame not found")},this.exists=function(e){return i.getGames().indexOf(e)>-1},t?console.log("Local Storage Key: "+t):console.log("You must provide a key!"),this._gKey=t};var L=function(){var e=Object(r.g)().gid,t="https://api.boardgameatlas.com/api/search?client_id=lkziTbYVbS&ids=",i=Object(n.useState)([]),a=Object(d.a)(i,2),o=a[0],s=a[1],m=new W("Collection");return Object(n.useEffect)((function(){!function(e){if(e=m.getGames(),console.log(e),0===e.length)return;for(var i=0;i<e.length;i++)t+=e[i]+",";fetch(t).then((function(e){return e.json()})).then((function(e){console.log(e),s(e.games),console.log("GAME: "+e[1])}))}(e)}),[e]),Object(b.jsxs)("div",{style:P.div,children:[0===o.length?Object(b.jsx)("h1",{style:P.empty,children:"Looks like your collection is empty..."}):"",o.map((function(e,t){return Object(b.jsxs)("article",Object(l.a)(Object(l.a)({className:"cardArt"},Object(p.css)(H)),{},{children:[Object(b.jsx)("h2",{className:"suHead",style:P.gameTitle,children:e.name}),Object(b.jsx)("img",{style:P.img,src:e.images.medium,alt:e.name+"'s box art"}),Object(b.jsx)(c.b,{to:"/SelectedGame/".concat(e.id),children:Object(b.jsx)("button",Object(l.a)({},Object(p.css)(z)))})]}),e.id)}))]})},P={div:{backgroundColor:"#FFE6A7",display:"flex",flexDirection:"row",height:"75%",flexWrap:"wrap",justifyContent:"space-around"},img:{objectFit:"contain",height:"75%",display:"block",marginLeft:"auto",marginRight:"auto",width:"40%"},gameTitle:{color:"#FFE6A7",fontFamily:"Futura PT"},empty:{backgroundColor:"#633817",paddingBottom:"10px",margin:"20px 0px",position:"relative",color:"#FFE6A7",padding:"5px 20px",boxShadow:"10px 5px 5px #432818",borderRadius:"12px",marginBottom:"200px"}},z=Object(p.css)({position:"absolute",width:"100%",height:"100%",top:"0",left:"0",background:"transparent",cursor:"pointer",border:"none"}),H=Object(p.css)({backgroundColor:"#633817",display:"flex",flexDirection:"column",paddingBottom:"10px",margin:"20px 0px",position:"relative",transition:"transform 0.25s",boxShadow:"10px 5px 5px #432818",borderRadius:"12px",":hover":{transform:"scale(1.05)"}});var I=function(){var e=Object(n.useState)(!1),t=Object(d.a)(e,2),i=t[0],a=t[1],o=Object(n.useState)(!1),s=Object(d.a)(o,2),c=s[0],l=s[1],m=Object(n.useState)([]),j=Object(d.a)(m,2),p=j[0],x=j[1],h=new W("Collection"),u=new W("Wishlist"),g=Object(r.g)().gid,f="lkziTbYVbS",O="https://api.boardgameatlas.com/api/";return Object(n.useEffect)((function(){fetch(O+"search?ids="+g+"&client_id="+f).then((function(e){return e.json()})).then((function(e){console.log(e),x(e.games)})),a(h.exists(g)),l(u.exists(g))}),[]),Object(b.jsxs)("div",{className:"selectPage",style:M.container,children:[p.map((function(e,t){return Object(b.jsxs)("section",{style:M.container,children:[Object(b.jsx)("div",{className:"imgBox",style:M.imgBox,children:Object(b.jsx)("img",{style:M.img,src:e.images.medium,alt:e.name+"'s box art"})}),Object(b.jsxs)("div",{className:"infoBox",style:M.infoBox,children:[Object(b.jsx)("h2",{style:M.title,children:e.name}),Object(b.jsxs)("dl",{className:"dl",style:M.dl,children:[Object(b.jsx)("dd",{className:"subHead",style:M.dd,children:"Players:"}),Object(b.jsx)("dt",{className:"info",style:M.dt,children:void 0!==e.min_players||null!==e.min_players||""!==e.min_players?e.min_players+"-"+e.max_players:"Unavailable"}),Object(b.jsx)("dd",{className:"subHead",style:M.dd,children:"Time:"}),Object(b.jsx)("dt",{className:"info",style:M.dt,children:void 0!==e.min_playtime||null!==e.min_playtime||""!==e.min_playtime?e.min_playtime+"-"+e.max_playtime+"mins":"Unavailable"}),Object(b.jsx)("dd",{className:"subHead",style:M.dd,children:"Price:"}),Object(b.jsx)("dt",{className:"info",style:M.dt,children:void 0===e.msrp_text&&null===e.msrp_text&&""===e.msrp_text||0===e.msrp?"Unavailable":e.msrp_text}),Object(b.jsx)("dd",{className:"subHead",style:M.dd,children:"Ages:"}),Object(b.jsx)("dt",{className:"info",style:M.dt,children:void 0!==e.min_age||null!==e.min_age||""!==e.min_age?e.min_age:"Unavailable"})]}),Object(b.jsx)("p",{className:"info",style:M.desc,children:e.description_preview}),Object(b.jsxs)("div",{style:M.btns,children:[Object(b.jsx)("form",{onSubmit:function(t){!function(e,t){e.preventDefault(),console.log("Add Game: ",e,t),h.saveGames(t),i?(h.removeGame(t),a(!1)):(h.saveGames(t),a(!0))}(t,e.id)},children:i?Object(b.jsx)("button",{style:M.button2,type:"submit",children:"remove from my Collection"}):Object(b.jsx)("button",{style:M.button,type:"submit",children:"Add to Collection"})}),Object(b.jsx)("form",{onSubmit:function(t){!function(e,t){e.preventDefault(),console.log("Add Game: ",e,t),u.saveGames(t),c?(u.removeGame(t),l(!1)):(u.saveGames(t),l(!0))}(t,e.id)},children:c?Object(b.jsx)("button",{className:"info",style:M.button2,type:"submit",children:"remove from my Wishlist"}):Object(b.jsx)("button",{className:"info",style:M.button,type:"submit",children:"Add to Wishlist"})})]})]})]},e.id)})),Object(b.jsx)("div",{})]})},M={container:{display:"flex",flexDirection:"row"},imgBox:{width:"calc(100%/2 - 20px)",backgroundColor:"white",margin:"20px 20px 0px 100px",height:"75%"},img:{width:"100%",marginTop:"40px"},infoBox:{width:"calc(100%/2 - 1rem)",display:"flex",flexDirection:"column",textAlign:"center",color:"#633817",marginRight:"100px"},dl:{display:"flex",flexDirection:"row",justifyContent:"center"},title:{textAlign:"center",fontSize:"45px",marginTop:"20px"},dd:{fontFamily:"Futura PT",fontWeight:"bold",fontSize:"24px"},dt:{fontFamily:"Montserrat",fontSize:"20px",marginLeft:"10px",marginTop:"6px"},desc:{fontSize:"20px",fontFamily:"Montserrat",fontWeight:"bold"},button:{backgroundColor:"#633817",color:"#FFE6A7",fontFamily:"Montserrat",padding:"15px",borderRadius:"12px",border:"none",cursor:"pointer",fontWeight:"bold",marginRight:"10px"},button2:{backgroundColor:"#9E2A2B",color:"#FFE6A7",fontFamily:"Montserrat",padding:"15px",borderRadius:"12px",border:"none",cursor:"pointer",fontWeight:"bold",marginRight:"10px"},btns:{display:"flex"}};var Y=function(){var e=Object(r.g)().gid,t="https://api.boardgameatlas.com/api/search?client_id=lkziTbYVbS&ids=",i=Object(n.useState)([]),a=Object(d.a)(i,2),o=a[0],s=a[1],m=new W("Wishlist");return Object(n.useEffect)((function(){!function(e){e=m.getGames();for(var i=0;i<e.length;i++)t+=e[i]+",";fetch(t).then((function(e){return e.json()})).then((function(e){console.log(e),s(e.games)}))}(e)}),[e]),Object(b.jsxs)("div",{style:U.div,children:[0===o.length?Object(b.jsx)("h1",{style:U.empty,children:"Looks like your wishlist is empty..."}):"",o.map((function(e,t){return Object(b.jsxs)("article",Object(l.a)(Object(l.a)({className:"cardArt"},Object(p.css)(K)),{},{children:[Object(b.jsx)("h2",{className:"subHead",style:U.gameTitle,children:e.name}),Object(b.jsx)("img",{style:U.img,src:e.images.medium,alt:e.name+"'s box art"}),Object(b.jsx)("h3",{style:U.gameTitle,children:e.msrp_text}),Object(b.jsx)(c.b,{to:"/SelectedGame/".concat(e.id),children:Object(b.jsx)("button",Object(l.a)({},Object(p.css)(V)))})]}),e.id)}))]})},U={div:{backgroundColor:"#FFE6A7",display:"flex",flexDirection:"row",height:"75%",flexWrap:"wrap",justifyContent:"space-around"},img:{objectFit:"contain",height:"75%",display:"block",marginLeft:"auto",marginRight:"auto",width:"40%"},gameTitle:{color:"#FFE6A7",fontFamily:"Futura PT"},empty:{backgroundColor:"#633817",paddingBottom:"10px",margin:"20px 0px",position:"relative",color:"#FFE6A7",padding:"5px 20px",boxShadow:"10px 5px 5px #432818",borderRadius:"12px",marginBottom:"200px"}},V=Object(p.css)({position:"absolute",width:"100%",height:"100%",top:"0",left:"0",background:"transparent",cursor:"pointer",border:"none"}),K=Object(p.css)({backgroundColor:"#633817",display:"flex",flexDirection:"column",paddingBottom:"10px",margin:"20px 0px",position:"relative",borderRadius:"12px",boxShadow:"10px 5px 5px #432818",transition:"transform 0.25s",":hover":{transform:"scale(1.05)"}});var J=function(){return Object(b.jsxs)("footer",{style:q.footer,children:[Object(b.jsx)("h2",{className:"heading",style:q.header,children:"Contact Us"}),Object(b.jsxs)("form",{action:"#urlfordata",method:"POST",children:[Object(b.jsx)("div",{children:Object(b.jsx)("input",{style:q.input,type:"text",id:"name",name:"name",placeholder:"Name",required:"required"})}),Object(b.jsx)("div",{children:Object(b.jsx)("input",{style:q.input,type:"email",id:"email",name:"email",placeholder:"Email",required:"required"})}),Object(b.jsx)("div",{children:Object(b.jsx)("textarea",{style:q.input,name:"message",id:"message",placeholder:"Message",cols:"40",rows:"3"})}),Object(b.jsx)("div",{children:Object(b.jsx)("button",{style:q.btn,type:"submit",children:"+ Send Message"})})]}),Object(b.jsxs)("ul",{style:q.links,children:[Object(b.jsx)("li",{children:Object(b.jsx)("a",{style:q.link,href:"/",children:"LinkedIn"})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{style:q.link,href:"/",children:"Twitter"})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{style:q.link,href:"/",children:"Facebook"})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{style:q.link,href:"/",children:"Instagram"})})]}),Object(b.jsxs)("p",{children:["\xa9 2021 BoardDebut. All rights reserved. ",Object(b.jsx)("a",{style:q.link,href:"/",children:"Terms and Conditions"})]}),Object(b.jsx)("p",{children:Object(b.jsx)("a",{style:q.link,href:"/",children:"Privacy Policy"})})]})},q={footer:{backgroundColor:"#633817",color:"#FFE6A7",paddingBottom:"100px"},header:{fontFamily:"Baskerville",fontWeight:"bold",color:"#FFE6A7",fontSize:"40px",marginBottom:"5px",paddingTop:"10px"},links:{display:"flex",justifyContent:"center"},link:{color:"#FFE6A7",marginLeft:"10px"},input:{color:"#633817",backgroundColor:"#BB9457",border:"none",fontWeight:"900",marginTop:"10px",padding:"5px",fontSize:"16px"},btn:{backgroundColor:"#432818",color:"#FFE6A7",fontFamily:"Montserrat",borderRadius:"12px",border:"none",cursor:"pointer",fontWeight:"bold",margin:"10px 30px 0px 0px",padding:"5px"}};var Q=function(){return Object(b.jsx)("main",{style:$.main,className:"App",children:Object(b.jsxs)(c.a,{children:[Object(b.jsx)(G,{}),Object(b.jsxs)(r.c,{children:[Object(b.jsx)(r.a,{path:"/",element:Object(b.jsx)(_,{})}),Object(b.jsx)(r.a,{path:"/search/:searchQuery",element:Object(b.jsx)(x,{})}),Object(b.jsx)(r.a,{path:"/SelectedGame/:gid",element:Object(b.jsx)(I,{})}),Object(b.jsx)(r.a,{path:"/Collection",element:Object(b.jsx)(L,{})}),Object(b.jsx)(r.a,{path:"/Wishlist",element:Object(b.jsx)(Y,{})})]}),Object(b.jsx)(J,{})]})})},$={main:{backgroundColor:"#FFE6A7"}},X=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,52)).then((function(t){var i=t.getCLS,n=t.getFID,a=t.getFCP,o=t.getLCP,s=t.getTTFB;i(e),n(e),a(e),o(e),s(e)}))};s.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(Q,{})}),document.getElementById("root")),X()}},[[51,1,2]]]);
//# sourceMappingURL=main.59e23e59.chunk.js.map