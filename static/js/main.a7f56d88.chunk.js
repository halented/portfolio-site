(this.webpackJsonptemp=this.webpackJsonptemp||[]).push([[0],{80:function(e,t,a){},81:function(e,t,a){},88:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(21),i=a.n(r),o=(a(80),a(81),a(54)),s=a(31),l=a(94),d=a(91),j=a(96),h=a(97),b=a(18),p={textAlign:"center"},m={display:"flex",alignItems:"center",flexDirection:"column"},f={menuBox:Object(b.a)({padding:"5%",paddingTop:"2.5%",paddingBottom:"0%"},m),dropdown:Object(b.a)(Object(b.a)({},m),{},{border:"none"}),menuItem:{margin:"0%",padding:"0%",height:"40%"},headers:Object(b.a)(Object(b.a)({marginTop:"0%",backgroundColor:"#9ac6c8ff"},p),{},{fontSize:20}),pageName:{fontWeight:"700",fontFamily:"'Comfortaa', cursive"},profileHeader:Object(b.a)(Object(b.a)({},p),{},{fontFamily:"'Comfortaa', cursive"}),infoBody:Object(b.a)(Object(b.a)({},p),{},{fontFamily:"'Courier New', monospace"}),buttonBox:{display:"flex",justifyContent:"space-evenly",marginTop:"10%"},contactBox:Object(b.a)({},m),contactPoint:{display:"flex",flexDirection:"row",justifyContent:"center",width:"90%"},contactIcon:{fontSize:50,width:"50%",display:"flex",justifyContent:"flex-end",paddingRight:"8%"},contactDetail:{fontSize:25,width:"50%",display:"flex",justifyContent:"flex-start"},projectBox:Object(b.a)(Object(b.a)({},m),{},{width:"100%"}),imageAndDetailsBox:Object(b.a)(Object(b.a)({},m),{},{marginTop:"3%"}),projectName:Object(b.a)(Object(b.a)({},m),{},{fontSize:25}),projectImage:{width:"50%"},projectDetails:Object(b.a)(Object(b.a)({},m),{},{width:"51%"}),projectBlurb:{position:"absolute",padding:"5%",overflow:"scroll",maxWidth:"80%",maxHeight:"25%"},dogPic:{width:"50%",padding:"1%",borderRadius:"10px",transition:"transform .3s"}},u=a(1),g=function(){var e=Object(n.useState)(!1),t=Object(o.a)(e,2),a=t[0],c=t[1],r=function(){c((function(e){return!e}))};return Object(u.jsxs)("div",{style:f.menuBox,children:[Object(u.jsx)("div",{style:{display:"inline-grid"},children:a?Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(j.a,{style:{fontSize:"25px",color:"rgb(70,70,70)"},onClick:r}),Object(u.jsxs)(l.a,{style:f.dropdown,onClick:r,children:[Object(u.jsx)(l.a.Item,{className:"menuItem",style:f.menuItem,children:Object(u.jsx)(s.b,{to:"/",children:"About"})},"1"),Object(u.jsx)(l.a.Item,{className:"menuItem",style:f.menuItem,children:Object(u.jsx)(s.b,{to:"/contact",children:"Contact"})},"2"),Object(u.jsx)(l.a.Item,{className:"menuItem",style:f.menuItem,children:Object(u.jsx)(s.b,{to:"/projects",children:"Projects"})},"3"),Object(u.jsx)(l.a.Item,{style:f.menuItem,children:Object(u.jsx)(s.b,{to:"/dog-pics",className:"menuItem",children:"Dog Pics"})},"4"),Object(u.jsx)(l.a.Item,{className:"menuItem",style:f.menuItem,children:Object(u.jsx)("a",{href:"https://www.canva.com/design/DAEURCynL2w/7MzSvI2MK6ElONcCjpZs6g/view?utm_content=DAEURCynL2w&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink",target:"_blank",rel:"noopener noreferrer",children:"Resume"})},"5")]})]}):Object(u.jsx)(h.a,{style:{fontSize:"25px",color:"rgb(70,70,70)"},onClick:function(e){r()}})}),Object(u.jsx)(d.a,{style:{marginTop:"1%"}})]})},x=a(92).a.Header;var O=function(e){var t=e.pageName;return Object(u.jsxs)(x,{style:f.headers,children:[Object(u.jsx)("span",{style:f.pageName,children:t})," | hal dunn"]})},y=a(55),w=a(98),v=a(99),k=a(100),I=a(101),T=a(102),C=a(103),B={phone:Object(u.jsx)(w.a,{style:f.contactIcon}),email:Object(u.jsx)(v.a,{style:f.contactIcon}),github:Object(u.jsx)(k.a,{style:f.contactIcon}),blog:Object(u.jsx)(I.a,{style:f.contactIcon}),linkedin:Object(u.jsx)(T.a,{style:f.contactIcon}),twitter:Object(u.jsx)(C.a,{style:f.contactIcon})},E={phone:Object(u.jsx)("a",{href:"tel:206-551-5709",children:"206-551-5709"}),email:Object(u.jsx)("a",{"data-for":"email","data-tip":"heyhal19@gmail.com",href:"mailto:heyhal19@gmail.com",children:"HeyHal19"}),github:Object(u.jsx)("a",{href:"https://github.com/halented",target:"_blank",rel:"noreferrer",children:"Github"}),blog:Object(u.jsx)("a",{href:"https://dev.to/halented",target:"_blank",rel:"noreferrer",children:"Dev.to"}),linkedin:Object(u.jsx)("a",{href:"https://www.linkedin.com/in/halented/",target:"_blank",rel:"noreferrer",children:"LinkedIn"}),twitter:Object(u.jsx)("a",{href:"https://twitter.com/hey_hal_",target:"_blank",rel:"noreferrer",children:"Twitter"})};var D=function(e){var t=e.point;return Object(u.jsxs)("div",{style:f.contactPoint,children:[B[[t]],Object(u.jsxs)("div",{style:f.contactDetail,children:[E[[t]],"email"===t?Object(u.jsx)(y.a,{id:"email",place:"top",type:"dark",effect:"solid"}):null]})]})},F=a(93),H=["phone","email","github","linkedin","blog","twitter"];var R=function(){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(O,{pageName:"contact"}),Object(u.jsx)(F.a,{children:Object(u.jsx)("div",{style:f.contactBox,children:H.map((function(e){return Object(u.jsx)(D,{point:e},e)}))})})]})};var N=function(e){var t=e.dog,a=e.instaOpen;return Object(u.jsx)("img",{onClick:function(){return a(t.path)},src:t.image,alt:"instagram of my dogs/me",style:f.dogPic,className:"dogPic"})},S=[{path:"Bn2FgpOB0xL/",image:a.p+"static/media/dog1.028ca9e3.jpg"},{path:"BbXUoRmAb6S/",image:a.p+"static/media/dog2.d306e7ff.jpg"},{path:"BZytMgggbbn/",image:a.p+"static/media/dog3.ebdc8341.jpg"},{path:"BzWeFB4HVph/",image:a.p+"static/media/dog4.a7ee69c4.jpg"},{path:"BxVxSdyBopD/",image:a.p+"static/media/dog5.b9689d53.jpg"},{path:"Br3X2fvhHPs/",image:a.p+"static/media/dog6.933979bd.jpg"},{path:"BrF--SZhin_/",image:a.p+"static/media/dog7.b09df16f.jpg"},{path:"Bl1ZlswBtJm/",image:a.p+"static/media/dog8.1874ac04.jpg"},{path:"CDsBIJ9JCQl/",image:a.p+"static/media/dog9.58554b9f.jpg"}];var P=function(){var e=function(e){window.open("https://www.instagram.com/p/".concat(e),"_blank")};return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(O,{pageName:"dog pics"}),Object(u.jsx)(F.a,{children:S.map((function(t){return Object(u.jsx)(N,{dog:t,instaOpen:e})}))})]})},A=a(95);var _=function(){return Object(u.jsxs)("div",{style:f.buttonBox,children:[Object(u.jsx)(s.b,{to:"/projects",children:Object(u.jsx)(A.a,{style:{backgroundColor:"#9ac6c8ff",fontWeight:"bold"},children:"PROJECTS"})}),Object(u.jsx)(s.b,{to:"contact",children:Object(u.jsx)(A.a,{style:{backgroundColor:"#9ac6c8ff",fontWeight:"bold"},children:"CONTACT"})})]})};var z=function(){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("a",{"data-for":"main","data-tip":"The Japanese House,<br />Frank Ocean,<br />Coheed & Camrbia,<br />Feist...<br />to name a few.",children:"music"}),Object(u.jsx)(y.a,{id:"main",place:"top",type:"dark",effect:"solid",multiline:!0})]})};var L=function(){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(O,{pageName:"about"}),Object(u.jsxs)(F.a,{children:[Object(u.jsx)("h1",{style:f.profileHeader,children:"FULL STACK SOFTWARE ENGINEER"}),Object(u.jsxs)("p",{style:f.infoBody,children:["Hi! I'm Hal.\ud83d\udc4b I've got a lot of interests in life -- JavaScript, backpacking, turn-based RPGs, ",Object(u.jsx)(z,{}),", and someday finally tiring out my border collie. I'm proudly from some random town in Ohio, where I earned my Bachelor's degree, and am currently living in Seattle, where I taught software engineering at Flatiron School for nearly 2 years.",Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),"While I have a real love for training and education, I'm making the move to use my compassionate ear and software engineering expertise as a part of an engineering team, so I can spend more time exploring & expanding my technical interests. If you've made it here, feel free to drop a line -- I'd love to discuss what brought you."]}),Object(u.jsx)(_,{})]})]})},W=a.p+"static/media/card.b59935b3.png",J={Twitflip:Object(u.jsxs)("div",{children:[Object(u.jsx)("span",{style:{fontWeight:"bold"},children:Object(u.jsx)("a",{href:"http://twitflip.herokuapp.com/",children:"Twitflip"})})," is a web app for searching/organzanizing Tweets using Twitter API's internal tool to search for specific Tweets, filtered out by positive or negative tones. The project uses ",Object(u.jsx)("a",{href:"https://github.com/jnunemaker/httparty",children:"HTTParty"})," to query the ",Object(u.jsx)("a",{href:"https://developer.twitter.com/en/docs/twitter-api",children:"Twitter API"})," and return results to the user, which can be saved to their account in different collections. The frontend builds pathing with ",Object(u.jsx)("a",{href:"https://reactrouter.com/",children:"React-Router"})," and modular components, which are reused throughout to app to improve efficiency. ",Object(u.jsx)("br",{}),Object(u.jsx)("br",{})," The project is hosted ",Object(u.jsx)("a",{href:"http://twitflip.herokuapp.com/",children:"HERE"}),". ",Object(u.jsx)("br",{})," The GitHub repository for the frontend can be found ",Object(u.jsx)("a",{href:"https://github.com/halented/twitflip",children:"HERE"})," and the backend can be found ",Object(u.jsx)("a",{href:"https://github.com/halented/twitflip-backend",children:"HERE"}),"."]}),DnDLuxe:Object(u.jsxs)("div",{children:[Object(u.jsx)("span",{style:{fontWeight:"bold"},children:Object(u.jsx)("a",{href:"https://dndluxe.herokuapp.com/login",children:"DnDLuxe"})})," is a web app created to help players of the tabletop game Dungeons & Dragons create and update their DnD characters, in addition to joining games with other players. The frontend manages state with the ",Object(u.jsx)("a",{href:"https://react-redux.js.org/",children:"Redux"})," pattern and the ",Object(u.jsx)("a",{href:"https://github.com/reduxjs/redux-thunk",children:"Thunk"})," library. The app has login which uses ",Object(u.jsx)("a",{href:"https://github.com/jwt/ruby-jwt",children:"JWT"})," tokens to secure the user's info. The data is stored in a relational database, set up with ",Object(u.jsx)("a",{href:"https://www.postgresql.org/",children:"PostgreSQL"}),".",Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),"The project is hosted ",Object(u.jsx)("a",{href:"https://dndluxe.herokuapp.com/login",children:"HERE"}),". ",Object(u.jsx)("br",{})," The GitHub repository for the frontend can be found ",Object(u.jsx)("a",{href:"https://github.com/halented/dndeluxe-frontend",children:"HERE"})," and the backend can be found ",Object(u.jsx)("a",{href:"https://github.com/halented/dndeluxe-backend",children:"HERE"}),"."]}),Finally:Object(u.jsxs)("div",{children:[Object(u.jsx)("span",{style:{fontWeight:"bold"},children:Object(u.jsx)("a",{href:"https://finally-app.herokuapp.com/#/",children:"Finally!"})})," is a web app intended for extroverts to monitor and analyze their social activity with introverted friends. Users can add introverts to their friend list, record hangout sessions, and view year-by-year data of their logged social activity. The site incorperates ",Object(u.jsx)("a",{href:"https://reactjs.org/docs/hooks-intro.html",children:"React Hooks"})," for state management and persists user data with async calls using the ",Object(u.jsx)("a",{href:"https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch",children:"Fetch API"}),". The app also uses the ",Object(u.jsx)("a",{href:"https://formidable.com/open-source/victory/",children:"Victory Graphing Library"})," to crunch user records into charted data for easy review.",Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),"The project is hosted ",Object(u.jsx)("a",{href:"https://finally-app.herokuapp.com/#/",children:"HERE"}),". ",Object(u.jsx)("br",{})," The GitHub repository for the frontend can be found ",Object(u.jsx)("a",{href:"https://github.com/halented/finally-frontend",children:"HERE"})," and the backend can be found ",Object(u.jsx)("a",{href:"https://github.com/halented/finally-backend",children:"HERE"}),"."]})};var G=function(e){var t=e.project,a=e.flipCard;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("img",{src:W,style:f.projectDetails,onClick:a,alt:"blank space for background purposes"}),Object(u.jsx)("div",{style:f.projectBlurb,onClick:a,children:J[[t]]})]})},U=a.p+"static/media/dndluxe.c9fac8e5.png",M={Twitflip:a.p+"static/media/twitflip.ecea0269.png",DnDLuxe:U,Finally:a.p+"static/media/finally.af07a0c3.png"};var Z=function(e){var t=e.project,a=e.flipCard,n="screenshot of ".concat(t," project");return Object(u.jsx)("img",{src:M[[t]],style:f.projectImage,className:"projectImage",onClick:a,alt:n})};var V=function(e){var t=e.project,a=Object(n.useState)(!0),c=Object(o.a)(a,2),r=c[0],i=c[1],s=function(){i((function(e){return!e}))};return Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{style:f.imageAndDetailsBox,children:r?Object(u.jsx)(Z,{project:t,flipCard:s}):Object(u.jsx)(G,{project:t,flipCard:s})}),Object(u.jsx)("div",{style:f.projectName,children:t})]})},q=["Finally","DnDLuxe","Twitflip"];var K=function(){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(O,{pageName:"projects"}),Object(u.jsx)(F.a,{style:f.projectBox,children:q.map((function(e){return Object(u.jsx)(V,{project:e},e)}))})]})},Q=a(17);var X=function(){return Object(u.jsxs)(s.a,{basename:"/",children:[Object(u.jsx)(g,{}),Object(u.jsxs)("div",{children:[Object(u.jsx)(Q.a,{exact:!0,path:"/",component:L}),Object(u.jsx)(Q.a,{path:"/projects",component:K}),Object(u.jsx)(Q.a,{path:"/contact",component:R}),Object(u.jsx)(Q.a,{path:"/dog-pics",component:P})]})]})};i.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(X,{})}),document.getElementById("root"))}},[[88,1,2]]]);
//# sourceMappingURL=main.a7f56d88.chunk.js.map