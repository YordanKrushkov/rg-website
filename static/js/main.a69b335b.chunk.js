(this.webpackJsonphome=this.webpackJsonphome||[]).push([[0],{14:function(e,t,a){e.exports={wrapper:"Add_wrapper__3SVsZ",title:"Add_title__1rTF-",form:"Add_form__2bzu6",addPhotos:"Add_addPhotos__TpaKd",addFile:"Add_addFile__2TCWK",input:"Add_input__2BuIi",selectWrapper:"Add_selectWrapper__1cS0r",select:"Add_select__MNMB-",sizeWrapper:"Add_sizeWrapper__2Qd6E",size:"Add_size__2zZ0c",button:"Add_button__1ylF3",textarea:"Add_textarea__1C3Ne"}},16:function(e,t,a){e.exports={wrapper:"About_wrapper__2p1QZ",body:"About_body__JQKQi",info:"About_info__MpZcw",addFile:"About_addFile__1ElP6",imgWrapper:"About_imgWrapper__2pMpK",img:"About_img__18b-w",text:"About_text__taw2S",icon:"About_icon__1AzA5",iconOne:"About_iconOne__qL_0S",p:"About_p__1sIkN",form:"About_form___Jiui",textArea:"About_textArea__1esEu",button:"About_button__9wZib"}},22:function(e,t,a){e.exports={wrapper:"Title_wrapper__PQal-",between:"Title_between__12CzV",titleWrapper:"Title_titleWrapper__1V9Xi",name:"Title_name__1dvMw",prof:"Title_prof__37qtA",gallery:"Title_gallery__vm5Dn",ripple:"Title_ripple__2KLld",div:"Title_div__2LND1"}},24:function(e,t,a){e.exports={wrapper:"Login_wrapper__2P8nt",title:"Login_title__2hX-a",form:"Login_form__kZPYC",input:"Login_input__1Dn8-",button:"Login_button__3jDKZ"}},25:function(e,t,a){e.exports={container:"Delete_container__3y9U9",wrapper:"Delete_wrapper__hMtmi",h5:"Delete_h5__1RcGY",buttonsWrapper:"Delete_buttonsWrapper__2ncC_",button:"Delete_button__2slPs"}},28:function(e,t,a){e.exports={container:"Gallery_container__4qC6Y",wrapper:"Gallery_wrapper__1RoWk",imgWrapper:"Gallery_imgWrapper__P_BIa",img:"Gallery_img__lTAwh"}},30:function(e,t,a){e.exports={wrapper:"Live_wrapper__2hI3z",instruction:"Live_instruction__39m40",iframe:"Live_iframe__27NJi"}},35:function(e,t,a){e.exports={wrapper:"Background_wrapper__3w7QN",img:"Background_img__dvmUX"}},4:function(e,t,a){e.exports={wrapper:"Header_wrapper__1bbAe",nav:"Header_nav__1BLXS",ul:"Header_ul__ZC1yY",li:"Header_li__2TNZh",border:"Header_border__1T09m",link:"Header_link__1F1vd",mobileMenu:"Header_mobileMenu__1zQ_W",mobile:"Header_mobile__1kxLe",mobileUl:"Header_mobileUl__2G7iF",mobileLi:"Header_mobileLi__3_tBR",mobileLink:"Header_mobileLink__3xaDp"}},43:function(e,t,a){e.exports={ring:"Loader_ring__3zkCE"}},5:function(e,t,a){e.exports={wrapper:"Contacts_wrapper__PyD0Y",container:"Contacts_container__2xL1F",nameWrapper:"Contacts_nameWrapper__206OL",author:"Contacts_author__3u16Q",socialMedia:"Contacts_socialMedia__Jyomr",icons:"Contacts_icons__1Kt-a",title:"Contacts_title__1B7vL",header:"Contacts_header__3TZbz",img:"Contacts_img__2n9Xq",contactsWrapper:"Contacts_contactsWrapper__3VUcp",contactInfo:"Contacts_contactInfo__a2-KQ",formWrapper:"Contacts_formWrapper__2xVMx",form:"Contacts_form__1WSBA",input:"Contacts_input__2hi7P",textarea:"Contacts_textarea__bSogt",button:"Contacts_button__dDnea",span:"Contacts_span__3qEOi",hidden:"Contacts_hidden__2DTqq",name:"Contacts_name__2PBm-",inputEdit:"Contacts_inputEdit__20OJu",divWrapper:"Contacts_divWrapper__2mJte",editSocial:"Contacts_editSocial__2a4hJ",updateForm:"Contacts_updateForm__3TUnY"}},51:function(e,t,a){},52:function(e,t,a){},6:function(e,t,a){e.exports={h2:"editDetails_h2__2QB6S",wrapper:"editDetails_wrapper__1kNK4",form:"editDetails_form__1hNYy",h6:"editDetails_h6__1_dN3",addFile:"editDetails_addFile__3ZVNh",title:"editDetails_title__3rqPt",details:"editDetails_details__baBgM",select:"editDetails_select__1Acyb",sizeWrapper:"editDetails_sizeWrapper__8Qlij",size:"editDetails_size__1oy6l",textarea:"editDetails_textarea__2MQzM",button:"editDetails_button__1KEQd",addPhotos:"editDetails_addPhotos__SRxQ3",option:"editDetails_option__1hWOh",delete:"editDetails_delete__2JVjV"}},65:function(e,t,a){"use strict";a.r(t);var n=a(2),c=a.n(n),s=a(38),i=a.n(s),r=(a(51),a(52),a(4)),o=a.n(r),l=a(10),d=a(42),u=a(8),p=a(39),m=a(40),j=a(46),b=a(45),h=a(3),_=a.n(h),O=a(9),x=function(e){var t=document.cookie.match("(^|;) ?"+e+"=([^;]*)(;|$)");return t?t[2]:null},f=function(){var e=Object(O.a)(_.a.mark((function e(t){var a,n;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://rg-gallerybackend.herokuapp.com//verify",{method:"POST",headers:{"Content-Type":"application/json",Authorization:x(t)}});case 2:return a=e.sent,e.next=5,a.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=a(1),v=Object(n.createContext)(),y=function(e){Object(j.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(p.a)(this,a);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={isAuthenticated:null,userEmail:""},e.login=function(t){e.setState({isAuthenticated:!0,userEmail:t})},e.logout=function(){document.cookie="x-auth-token=",localStorage.removeItem("user"),e.setState({isAuthenticated:!1,userEmail:""})},e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this;f("x-auth-token").then((function(t){t&&t.auth?e.setState({isAuthenticated:!0,userEmail:localStorage.getItem("user")}):e.logout()})).catch((function(t){return e.logout()}))}},{key:"render",value:function(){return Object(g.jsx)(v.Provider,{value:Object(u.a)(Object(u.a)({},this.state),{},{login:this.login,logout:this.logout}),children:this.props.children})}}]),a}(n.Component),N=function(){var e=Object(n.useContext)(v).isAuthenticated,t=document.getElementById("mobileNav"),a=document.getElementById("wrapper"),c=function(e,t){t.style.height="265px",e.style.display="block"},s=function(e,t){e.style.display="none",t.style.height="0px"};return Object(g.jsxs)("div",{className:o.a.wrapper,id:"wrapper",children:[Object(g.jsx)("nav",{className:o.a.nav,children:Object(g.jsxs)("ul",{className:o.a.ul,children:[Object(g.jsx)("li",{className:o.a.li,children:Object(g.jsx)(l.b,{to:"/",className:o.a.link,children:"Home"})}),Object(g.jsx)("li",{className:"".concat(o.a.li," ").concat(o.a.border),children:Object(g.jsx)(l.b,{to:"/about",className:o.a.link,children:"About"})}),Object(g.jsx)("li",{className:"".concat(o.a.li," ").concat(o.a.border),children:Object(g.jsx)(l.b,{to:"/portraits",className:o.a.link,children:"Portraits"})}),Object(g.jsx)("li",{className:"".concat(o.a.li," ").concat(o.a.border),children:Object(g.jsx)(l.b,{to:"/abstracts",className:o.a.link,children:"Abstracts"})}),Object(g.jsx)("li",{className:"".concat(o.a.li," ").concat(o.a.border),children:Object(g.jsx)(l.b,{to:"/landscapes",className:o.a.link,children:"Landscapes"})}),Object(g.jsx)("li",{className:"".concat(o.a.li," ").concat(o.a.border),children:Object(g.jsx)(l.b,{to:"/contacts",className:o.a.link,children:"Contacts"})}),e?Object(g.jsx)("li",{className:"".concat(o.a.li," ").concat(o.a.border),children:Object(g.jsx)(l.b,{to:"/add",className:o.a.link,children:"Add"})}):null]})}),Object(g.jsx)(d.a,{className:o.a.mobileMenu,onClick:function(e){"none"===t.style.display||""===t.style.display?c(t,a):s(t,a)}}),Object(g.jsx)("nav",{className:o.a.mobile,id:"mobileNav",onClick:function(e){"A"===e.target.tagName&&s(t,a)},children:Object(g.jsxs)("ul",{className:o.a.mobileUl,children:[Object(g.jsx)("li",{className:o.a.mobileLi,children:Object(g.jsx)(l.b,{to:"/",className:o.a.mobileLink,children:"Home"})}),Object(g.jsx)("li",{className:"".concat(o.a.mobileLi),children:Object(g.jsx)(l.b,{to:"/about",className:o.a.mobileLink,children:"About"})}),Object(g.jsx)("li",{className:"".concat(o.a.mobileLi),children:Object(g.jsx)(l.b,{to:"/portraits",className:o.a.mobileLink,children:"Portraits"})}),Object(g.jsx)("li",{className:"".concat(o.a.mobileLi),children:Object(g.jsx)(l.b,{to:"/abstracts",className:o.a.mobileLink,children:"Abstracts"})}),Object(g.jsx)("li",{className:"".concat(o.a.mobileLi),children:Object(g.jsx)(l.b,{to:"/landscapes",className:o.a.mobileLink,children:"Landscapes"})}),Object(g.jsx)("li",{className:"".concat(o.a.mobileLi),children:Object(g.jsx)(l.b,{to:"/contacts",className:o.a.mobileLink,children:"Contacts"})}),e?Object(g.jsx)("li",{className:"".concat(o.a.mobileLi),children:Object(g.jsx)(l.b,{to:"/add",className:o.a.mobileLink,children:"Add"})}):null]})})]})},k=a(12),w=a(22),C=a.n(w),I=function(){return Object(g.jsxs)("div",{className:C.a.wrapper,children:[Object(g.jsx)("div",{className:C.a.between,children:Object(g.jsxs)("div",{className:C.a.titleWrapper,children:[Object(g.jsx)("h1",{className:C.a.name,children:"Ralitsa Georgieva"}),Object(g.jsx)("h6",{className:C.a.prof,children:"Artist"})]})}),Object(g.jsx)(l.b,{to:"/live",children:Object(g.jsxs)("button",{className:C.a.gallery,children:["Live gallery",Object(g.jsxs)("div",{className:C.a.ripple,children:[Object(g.jsx)("div",{className:C.a.div}),Object(g.jsx)("div",{className:C.a.div})]})]})})]})},S=a(35),E=a.n(S),D=a.p+"static/media/cover.e603a15e.jpg",T=function(){return Object(g.jsx)("div",{className:E.a.wrapper,children:Object(g.jsx)("img",{className:E.a.img,src:D,alt:""})})},W=a(11),A=a(16),P=a.n(A),B=a(19),L=function(){var e=Object(O.a)(_.a.mark((function e(){var t,a;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://rg-gallerybackend.herokuapp.com/user",{method:"GET",headers:{Auth:x("x-auth-token")}});case 2:return t=e.sent,e.next=5,t.json();case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),M=function(e){document.getElementById(e).style.display="flex"},F=function(e){document.getElementById(e).style.display="none"},z=function(e){document.getElementById(e).click()},H=a(15),J=function(){var e=Object(O.a)(_.a.mark((function e(t,a,n){var c,s,i,r;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=t.target.files,(s=new FormData).append("file",c[0]),s.append("upload_preset","rgArtGallery"),e.next=6,fetch("".concat("https://api.cloudinary.com/v1_1/rggallery/image/upload"),{method:"POST",body:s});case 6:return i=e.sent,e.next=9,i.json();case 9:return r=e.sent,e.next=12,fetch("https://rg-gallerybackend.herokuapp.com//updateUser",{method:"POST",body:JSON.stringify(Object(H.a)({id:a._id},n,r.secure_url)),headers:{"Content-Type":"application/json"}});case 12:case"end":return e.stop()}}),e)})));return function(t,a,n){return e.apply(this,arguments)}}(),q=a(43),G=a.n(q),Q=function(){return Object(g.jsx)("div",{className:G.a.ring})},U=function(){var e=Object(n.useState)({}),t=Object(W.a)(e,2),a=t[0],c=t[1],s=Object(n.useContext)(v).isAuthenticated,i=Object(n.useState)({description:""}),r=Object(W.a)(i,2),o=r[0],l=r[1],d=function(){var e=Object(O.a)(_.a.mark((function e(t){return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),document.getElementById("paragraph").style.display="block",document.getElementById("about").style.display="none",document.getElementById("aboutForm").style.display="none",e.next=6,fetch("https://rg-gallerybackend.herokuapp.com/updateUser",{method:"POST",body:JSON.stringify({id:a._id,bio:o.description}),headers:{"Content-Type":"application/json"}});case 6:e.sent;case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){L().then((function(e){return c(Object(u.a)({},e))})).catch((function(e){console.log("cv error:",e)}))}),[J,d]),Object(g.jsx)("div",{className:P.a.wrapper,children:Object(g.jsx)("div",{className:P.a.body,children:a.img?Object(g.jsxs)("div",{className:P.a.info,onMouseEnter:function(){return s?M("editText"):null},onMouseLeave:function(){return F("editText")},children:[Object(g.jsxs)("div",{className:P.a.imgWrapper,onMouseEnter:function(){return s?M("editProfileImg"):null},onMouseLeave:function(){return F("editProfileImg")},children:[Object(g.jsx)(B.a,{className:P.a.iconOne,id:"editProfileImg",onClick:function(){z("profileImgInput")}}),Object(g.jsx)("input",{className:P.a.addFile,id:"profileImgInput",type:"file",multiple:"multiple",onChange:function(e){J(e,a,"img")}}),a.img?Object(g.jsx)("img",{className:P.a.img,src:a.img,alt:"Ralitsa"}):Object(g.jsx)(Q,{})]}),Object(g.jsxs)("div",{className:P.a.text,children:[Object(g.jsx)(B.a,{className:P.a.icon,id:"editText",onClick:function(){return function(e,t){var n=document.getElementById(e);document.getElementById(t),"none"===n.style.display||""===n.style.display?(document.getElementById(e).style.display="block",document.getElementById(t).style.display="none"):(document.getElementById(e).style.display="none",document.getElementById(t).style.display="block"),document.getElementById("about").value=a.bio}("aboutForm","paragraph")}}),a.bio?Object(g.jsx)("p",{className:P.a.p,id:"paragraph",children:a.bio}):Object(g.jsx)(Q,{}),Object(g.jsxs)("form",{className:P.a.form,id:"aboutForm",onSubmit:d,children:[Object(g.jsx)("textarea",{className:P.a.textArea,name:"about",id:"about",onChange:function(e){l({description:e.target.value})}}),Object(g.jsx)("button",{className:P.a.button,type:"submit",id:"textButton",children:"Submit"})]})]})]}):Object(g.jsx)(Q,{})})})},K=a(5),Y=a.n(K),Z=a(36),R=a(44),V=a.n(R),X=function(){var e=Object(n.useContext)(v).isAuthenticated,t=Object(n.useState)({}),a=Object(W.a)(t,2),c=a[0],s=a[1],i=Object(n.useState)({}),r=Object(W.a)(i,2),o=r[0],l=r[1],d=function(e){var t,a,n,c;"nameTitle"===e.target.id&&(a=e.target.value.split(" ")),a&&(n=a[0],c=a[1]),l((t={},Object(H.a)(t,"nameTitle"!=e.target.id,e.target.value),Object(H.a)(t,"name",n),Object(H.a)(t,"surname",c),t))};Object(n.useEffect)((function(){L().then((function(e){return s(Object(u.a)({},e))})).catch((function(e){console.log("cv error:",e)}))}),[J]);var p=function(){var e=Object(O.a)(_.a.mark((function e(t){return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),document.getElementById("contactInfo").style.display="block",document.getElementById("updateInfo").style.display="none",document.getElementById("contactWrapper").style.height="800px",e.next=6,fetch("https://rg-gallerybackend.herokuapp.com//updateUser",{method:"POST",body:JSON.stringify(Object(u.a)({id:c._id},o)),headers:{"Content-Type":"application/json"}});case 6:e.sent;case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){}),[p]);return Object(g.jsx)("div",{className:Y.a.wrapper,id:"contactWrapper",children:Object(g.jsxs)("div",{className:Y.a.container,children:[Object(g.jsxs)("div",{className:Y.a.header,onMouseEnter:function(){return e?M("coverImg"):null},onMouseLeave:function(){return F("coverImg")},children:[c.cover?Object(g.jsx)("img",{className:Y.a.img,src:c.cover,alt:"header"}):Object(g.jsx)(Q,{}),Object(g.jsx)("span",{className:Y.a.span,id:"coverImg",children:Object(g.jsx)(B.a,{onClick:function(){z("cover")}})}),Object(g.jsx)("input",{className:Y.a.hidden,id:"cover",type:"file",onChange:function(e){J(e,c,"cover")}})]}),Object(g.jsxs)("div",{className:Y.a.contactsWrapper,onMouseEnter:function(){return e?M("changeInfo"):null},onMouseLeave:function(){return F("changeInfo")},children:[Object(g.jsxs)("div",{className:Y.a.contactInfo,id:"contactInfo",children:[c.name?Object(g.jsxs)("h1",{className:Y.a.author,children:[c.name," ",c.surname]}):null,Object(g.jsx)("span",{className:Y.a.name,id:"changeInfo",onClick:function(){return function(e,t){document.getElementById(e).style.display="block",document.getElementById(t).style.display="none",document.getElementById("contactWrapper").style.height="930px";var a=document.getElementById("nameTitle"),n=document.getElementById("fb"),s=document.getElementById("insta"),i=document.getElementById("pin");a&&n&&s&&i&&(a.value="".concat(c.name," ").concat(c.surname),n.value=c.fb,s.value=c.insta,i.value=c.pin)}("updateInfo","contactInfo")},children:Object(g.jsx)(B.a,{})}),c.fb?Object(g.jsxs)("div",{className:Y.a.socialMedia,children:[Object(g.jsx)("a",{href:c.fb,target:"blank",children:Object(g.jsx)(B.b,{className:Y.a.icons})}),Object(g.jsx)("a",{href:c.insta,target:"blank",children:Object(g.jsx)(Z.a,{className:Y.a.icons})}),Object(g.jsx)("a",{href:c.pin,target:"blank",children:Object(g.jsx)(B.c,{className:Y.a.icons})})]}):null]}),Object(g.jsxs)("form",{className:Y.a.updateForm,id:"updateInfo",onSubmit:p,children:[Object(g.jsxs)("div",{className:Y.a.nameWrapper,children:[Object(g.jsx)(B.d,{className:Y.a.icons}),Object(g.jsx)("input",{className:Y.a.inputEdit,type:"text",id:"nameTitle",onChange:d})]}),Object(g.jsxs)("div",{className:Y.a.editSocial,children:[Object(g.jsxs)("div",{className:Y.a.divWrapper,children:[Object(g.jsx)(B.b,{className:Y.a.icons}),Object(g.jsx)("input",{className:Y.a.inputEdit,id:"fb",type:"text",onChange:d})]}),Object(g.jsxs)("div",{className:Y.a.divWrapper,children:[Object(g.jsx)(Z.a,{className:Y.a.icons}),Object(g.jsx)("input",{className:Y.a.inputEdit,id:"insta",type:"text",onChange:d})]}),Object(g.jsxs)("div",{className:Y.a.divWrapper,children:[Object(g.jsx)(B.c,{className:Y.a.icons}),Object(g.jsx)("input",{className:Y.a.inputEdit,id:"pin",type:"text",onChange:d})]})]}),Object(g.jsx)("button",{className:Y.a.button,children:"UPDATE"})]})]}),c.email?Object(g.jsxs)("div",{className:Y.a.formWrapper,children:[Object(g.jsx)("h1",{className:Y.a.title,children:"Say hello"}),Object(g.jsxs)("form",{className:Y.a.form,onSubmit:function(e){e.preventDefault(),V.a.sendForm("service_fe5eeh2","template_phwyfc2",e.target,"user_guUortiRQj9e60clgIKdI").then((function(e){console.log(e.text)}),(function(e){console.log(e.text)})),e.target.reset()},children:[Object(g.jsx)("input",{className:Y.a.input,type:"text",id:"name",name:"name",placeholder:"Name"}),Object(g.jsx)("input",{className:Y.a.input,type:"email",id:"email",name:"email",placeholder:"Email"}),Object(g.jsx)("input",{className:Y.a.input,type:"text",id:"subject",placeholder:"Subject",name:"subject"}),Object(g.jsx)("textarea",{className:Y.a.textarea,name:"message",id:"message",cols:"30",rows:"10",placeholder:"Message"}),Object(g.jsx)("button",{className:Y.a.button,children:"Send"})]})]}):null]})})},$=a(24),ee=a.n($),te=function(){var e=Object(O.a)(_.a.mark((function e(t,a,n,c){var s,i,r;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(t,{method:"POST",body:JSON.stringify(a),headers:{"Content-Type":"application/json"}});case 3:return s=e.sent,i=s.headers.get("Authorization"),document.cookie="x-auth-token=".concat(i),e.next=8,s.json();case 8:(r=e.sent).email&&i&&r._id?n({email:r.email,id:r._id}):c(r),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),c(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t,a,n,c){return e.apply(this,arguments)}}(),ae=function(){var e=Object(n.useState)({email:"",password:""}),t=Object(W.a)(e,2),a=t[0],c=t[1],s=Object(n.useContext)(v),i=Object(k.f)(),r=function(e){c(Object(u.a)(Object(u.a)({},a),{},Object(H.a)({},e.target.name,e.target.value)))};return Object(g.jsxs)("div",{className:ee.a.wrapper,children:[Object(g.jsx)("h1",{className:ee.a.title,children:"Login"}),Object(g.jsxs)("form",{className:ee.a.form,onSubmit:function(e){e.preventDefault();var t=a.email,n=a.password;console.log(t,n),te("https://rg-gallerybackend.herokuapp.com//login",{email:t,password:n},(function(e){s.login(e.email),localStorage.setItem("user",e.email),i.push("rg-website/")}),(function(e){console.log("error submit",e)}))},children:[Object(g.jsx)("input",{className:ee.a.input,type:"email",name:"email",onChange:r}),Object(g.jsx)("input",{className:ee.a.input,type:"password",name:"password",onChange:r}),Object(g.jsx)("button",{className:ee.a.button,children:"Log in"})]})]})},ne=a(21),ce=a(14),se=a.n(ce),ie=function(){var e=Object(k.f)(),t=[],a=Object(n.useState)(t),c=Object(W.a)(a,2),s=c[0],i=c[1],r=Object(n.useState)(t),o=Object(W.a)(r,2),l=o[0],d=o[1],p=Object(n.useState)({imgs:[],profile:"",title:"",material:"",mediums:"",subject:"",width:"",length:"",depth:"",description:""}),m=Object(W.a)(p,2),j=m[0],b=m[1],h=function(){var e=Object(O.a)(_.a.mark((function e(t){var a,n,c,s,r,o;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=t.target.files){e.next=3;break}return e.abrupt("return");case 3:return n=a[0].name,d((function(e){return[].concat(Object(ne.a)(e),[n])})),(c=new FormData).append("file",a[0]),c.append("upload_preset","rgArtGallery"),e.next=10,fetch("".concat("https://api.cloudinary.com/v1_1/rggallery/image/upload"),{method:"POST",body:c});case 10:return s=e.sent,e.next=13,s.json();case 13:r=e.sent,o=r.secure_url,i((function(e){return[].concat(Object(ne.a)(e),[o])}));case 16:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),x=function(e){var t;b(Object(u.a)(Object(u.a)({},j),{},(t={},Object(H.a)(t,e.target.id,e.target.value),Object(H.a)(t,"profile",s[0]),Object(H.a)(t,"imgs",s),t)))},f=function(){var t=Object(O.a)(_.a.mark((function t(a){return _.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),t.next=3,fetch("https://rg-gallerybackend.herokuapp.com/create",{method:"POST",body:JSON.stringify(Object(u.a)({},j)),headers:{"Content-Type":"application/json"}});case 3:t.sent,e.push("rg-website/");case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(n.useEffect)((function(){}),[l]),Object(g.jsxs)("div",{className:se.a.wrapper,children:[Object(g.jsx)("h1",{className:se.a.title,children:"Add Painting"}),Object(g.jsxs)("form",{className:se.a.form,onSubmit:f,children:[Object(g.jsx)("span",{id:"addPhotos",className:se.a.addPhotos,onClick:function(){z("fileInput")},children:"Add Photos"}),Object(g.jsx)("input",{className:se.a.addFile,id:"fileInput",type:"file",multiple:"multiple",onChange:h}),Object(g.jsx)("ul",{children:l?l.map((function(e){return Object(g.jsx)("li",{children:e},e)})):null}),Object(g.jsx)("input",{className:se.a.input,type:"text",id:"title",placeholder:"Title",onChange:x}),Object(g.jsxs)("div",{className:se.a.selectWrapper,children:[Object(g.jsxs)("select",{name:"material",className:se.a.select,id:"material",onChange:x,children:[Object(g.jsx)("option",{value:"",children:"Material"}),Object(g.jsx)("option",{value:"canvas",children:"Canvas"}),Object(g.jsx)("option",{value:"paper",children:"Paper"}),Object(g.jsx)("option",{value:"canvas board",children:"Canvas board"})]}),Object(g.jsxs)("select",{name:"mediums",className:se.a.select,id:"mediums",onChange:x,children:[Object(g.jsx)("option",{value:"",children:"Mediums"}),Object(g.jsx)("option",{value:"acrylic",children:"Acrylic"}),Object(g.jsx)("option",{value:"oil",children:"Oil"}),Object(g.jsx)("option",{value:"watercolor",children:"Watercolor"}),Object(g.jsx)("option",{value:"mixed media",children:"Mixed Media"})]}),Object(g.jsxs)("select",{name:"subject",className:se.a.select,id:"subject",onChange:x,children:[Object(g.jsx)("option",{value:"",children:"Subject"}),Object(g.jsx)("option",{value:"portrait",children:"Portrait"}),Object(g.jsx)("option",{value:"abstract",children:"Abstract"}),Object(g.jsx)("option",{value:"landscape",children:"Landscape"})]})]}),Object(g.jsxs)("div",{className:se.a.sizeWrapper,children:[Object(g.jsx)("input",{className:se.a.size,id:"width",type:"text",placeholder:"Width",onChange:x}),Object(g.jsx)("input",{className:se.a.size,id:"length",type:"text",placeholder:"Length",onChange:x}),Object(g.jsx)("input",{className:se.a.size,id:"depth",type:"text",placeholder:"Depth",onChange:x})]}),Object(g.jsx)("textarea",{className:se.a.textarea,id:"description",placeholder:"Art Description",onChange:x}),Object(g.jsx)("button",{className:se.a.button,children:"Submit"})]})]})},re=a(7),oe=a.n(re),le=function(){var e=Object(O.a)(_.a.mark((function e(t){var a,n;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://rg-gallerybackend.herokuapp.com//getone",{method:"GET",headers:{key:t}});case 2:return a=e.sent,e.next=5,a.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),de=a(6),ue=a.n(de),pe=function(e,t,a,c){var s=Object(k.f)(),i=[],r=Object(n.useState)(i),o=Object(W.a)(r,2),l=o[0],d=o[1],p=Object(n.useState)(i),m=Object(W.a)(p,2),j=m[0],b=m[1],h=Object(n.useState)({}),x=Object(W.a)(h,2),f=x[0],v=x[1];Object(n.useEffect)((function(){v({imgs:e.imgs,title:e.title,material:e.material,mediums:e.mediums,subject:e.subject,width:e.width,length:e.length,depth:e.depth,description:e.description})}),[]),Object(n.useEffect)((function(){var e=document.getElementsByClassName(ue.a.wrapper)[0];!1===t?e&&(e.style.display="none"):!0===t&&e&&(e.style.display="block")}),[t]);var y=function(){var t=Object(O.a)(_.a.mark((function t(a){var n,c,s,i,r,o;return _.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=a.target.files){t.next=3;break}return t.abrupt("return");case 3:return c=n[0].name,(s=new FormData).append("file",n[0]),s.append("upload_preset","rgArtGallery"),t.next=9,fetch("".concat("https://api.cloudinary.com/v1_1/rggallery/image/upload"),{method:"POST",body:s});case 9:return i=t.sent,t.next=12,i.json();case 12:return r=t.sent,t.next=15,r.secure_url;case 15:return(o=t.sent)&&b((function(e){return[].concat(Object(ne.a)(e),[c])})),t.next=19,d((function(e){return[].concat(Object(ne.a)(e),[o])}));case 19:return t.next=21,v(Object(u.a)(Object(u.a)({},f),{},{imgs:[].concat(Object(ne.a)(e.imgs),Object(ne.a)(l))}));case 21:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),N=function(){var e=Object(O.a)(_.a.mark((function e(t){return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:v(Object(u.a)(Object(u.a)({},f),{},Object(H.a)({},t.target.id,t.target.value)));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w=function(){var t=Object(O.a)(_.a.mark((function t(n){var c,i;return _.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.next=3,fetch("https://rg-gallerybackend.herokuapp.com//updateone",{method:"POST",body:JSON.stringify(Object(u.a)(Object(u.a)({id:e._id},f),{},{imgs:[].concat(Object(ne.a)(e.imgs),Object(ne.a)(l))})),headers:{"Content-Type":"application/json"}});case 3:t.sent,a(!1),c=document.querySelector("#infoWrapper"),i=document.getElementById("editPainting"),c.style.display="block",i.style.display="block",s.push("rg-website/details:".concat(e._id)),Array.from(document.getElementsByClassName(ue.a.h6)).map((function(e){return e.remove()}));case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();Object(n.useEffect)((function(){}),[j,f,w,y]);return Object(g.jsxs)("div",{className:ue.a.wrapper,id:"editWrapper",children:[Object(g.jsx)("h2",{className:ue.a.h2,children:"Edit painting"}),Object(g.jsxs)("form",{className:ue.a.form,onSubmit:w,children:[Object(g.jsx)("span",{id:"addPhotos",className:ue.a.addPhotos,onClick:function(){z("fileInput")},children:"Add Photos"}),Object(g.jsx)("input",{className:ue.a.addFile,id:"fileInput",type:"file",multiple:"multiple",onChange:y}),j===[]?Object(g.jsx)("h6",{children:"'yes'"}):j.map((function(e){return Object(g.jsx)("h6",{className:ue.a.h6,children:e},e)})),Object(g.jsx)("input",{className:ue.a.title,type:"text",name:"title",id:"title",onChange:N}),Object(g.jsxs)("div",{className:ue.a.details,children:[Object(g.jsxs)("select",{name:"material",className:ue.a.select,id:"material",onChange:N,children:[Object(g.jsx)("option",{className:ue.a.option,value:"",children:e.material}),Object(g.jsx)("option",{className:ue.a.option,value:"canvas",children:"Canvas"}),Object(g.jsx)("option",{className:ue.a.option,value:"paper",children:"Paper"}),Object(g.jsx)("option",{className:ue.a.option,value:"canvas board",children:"Canvas board"})]}),Object(g.jsxs)("select",{name:"mediums",className:ue.a.select,id:"mediums",onChange:N,children:[Object(g.jsx)("option",{className:ue.a.option,value:"",children:e.mediums}),Object(g.jsx)("option",{className:ue.a.option,value:"acrylic",children:"Acrylic"}),Object(g.jsx)("option",{className:ue.a.option,value:"oil",children:"Oil"}),Object(g.jsx)("option",{className:ue.a.option,value:"watercolor",children:"Watercolor"}),Object(g.jsx)("option",{className:ue.a.option,value:"mixed media",children:"Mixed Media"})]}),Object(g.jsxs)("select",{name:"subject",className:ue.a.select,id:"subject",onChange:N,children:[Object(g.jsx)("option",{className:ue.a.option,value:"",children:e.subject}),Object(g.jsx)("option",{className:ue.a.option,value:"portrait",children:"Portrait"}),Object(g.jsx)("option",{className:ue.a.option,value:"abstract",children:"Abstract"}),Object(g.jsx)("option",{className:ue.a.option,value:"landscape",children:"Landscape"})]})]}),Object(g.jsxs)("div",{className:ue.a.sizeWrapper,children:[Object(g.jsx)("input",{className:ue.a.size,id:"length",type:"text",placeholder:"Length",onChange:N}),Object(g.jsx)("input",{className:ue.a.size,id:"width",type:"text",placeholder:"Width",onChange:N}),Object(g.jsx)("input",{className:ue.a.size,id:"depth",type:"text",placeholder:"Depth",onChange:N})]}),Object(g.jsx)("textarea",{className:ue.a.textarea,id:"description",placeholder:"Art Description",onChange:N}),Object(g.jsx)("button",{type:"submit",className:ue.a.button,children:"Submit"})]}),Object(g.jsx)("button",{className:"".concat(ue.a.button," ").concat(ue.a.delete),onClick:function(t){var a=document.getElementById("confirm");a.style.display="block",a.addEventListener("click",function(){var t=Object(O.a)(_.a.mark((function t(n){return _.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("BUTTON"!==n.target.tagName||"Yes"!==n.target.innerHTML){t.next=8;break}return t.next=3,fetch("https://rg-gallerybackend.herokuapp.com//delete",{method:"DELETE",body:JSON.stringify({id:e._id}),headers:{"Content-Type":"application/json"}});case 3:t.sent,a.style.display="none",s.push("rg-website/"),t.next=9;break;case 8:"BUTTON"===n.target.tagName&&"No"===n.target.innerHTML&&(a.style.display="none");case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},children:"Delete"})]})},me=a(37),je=a(25),be=a.n(je),he=function(e){return Object(g.jsx)("div",{className:be.a.container,id:"confirm",children:Object(g.jsxs)("div",{className:be.a.wrapper,children:[Object(g.jsx)("h5",{className:be.a.h5,children:"Are you sure you want to delete this item?"}),Object(g.jsxs)("div",{className:be.a.buttonsWrapper,children:[Object(g.jsx)("button",{className:be.a.button,children:"Yes"}),Object(g.jsx)("button",{className:be.a.button,children:"No"})]})]})})},_e=function(){var e=0,t="",a=Object(n.useContext)(v).isAuthenticated,c=Object(n.useState)({}),s=Object(W.a)(c,2),i=s[0],r=s[1],o=Object(n.useState)(!1),l=Object(W.a)(o,2),d=l[0],p=l[1],m=Object(n.useState)({backgroundImage:"none",backgroundPosition:"0% 0%"}),j=Object(W.a)(m,2),b=j[0],h=j[1],x=Object(k.f)().location.pathname.split(":")[1];Object(n.useEffect)((function(){le(x).then((function(e){return r(Object(u.a)({},e))})).catch((function(e){console.log("cv error:",e)}))}),[d]);var f=function(e){var t=document.getElementById("mainProfile").firstChild.firstChild;if("IMG"===e.target.tagName){var a=e.target.src;t.src=a}h({backgroundImage:"none",backgroundPosition:""})},y=function(){var e=Object(O.a)(_.a.mark((function e(t){var a;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a=t.dataTransfer.getData("text"),t.target.src=a,e.next=5,fetch("https://rg-gallerybackend.herokuapp.com//updateone",{method:"POST",body:JSON.stringify({id:x,profile:a}),headers:{"Content-Type":"application/json"}});case 5:e.sent;case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),N=function(e){e.dataTransfer.setData("text",e.target.src)},w=function(e){var t=document.querySelector("#infoWrapper"),a=document.getElementById("editPainting"),n=document.getElementById("editWrapper");"none"!==t.style.display||!0===n?(t.style.display="none",a.style.display="none",p(!0)):(console.log("here"),t.style.display="block",a.style.display="block",p(!1)),console.log(t.style.display);var c=document.querySelector("#title"),s=document.querySelector("#length"),r=document.querySelector("#width"),o=document.querySelector("#depth"),l=document.querySelector("#description");c&&(c.value=i.title),s&&r&&o&&(s.value=i.length,r.value=i.width,o.value=i.depth),l&&(l.value=i.description)},C=function(e){var t=e.target.getBoundingClientRect(),a=t.left,n=t.top,c=t.width,s=t.height,i=(e.pageX-a)/c*100,r=(e.pageY-n)/s*75,o=e.target.src;h({backgroundImage:"url(".concat(o,")"),backgroundPosition:"".concat(i,"% ").concat(r,"%")})},I=function(e){var a=document.getElementById("confirm");"path"===e.target.tagName&&(t=e.target.parentElement.parentElement.firstChild.src),"svg"===e.target.tagName&&(t=e.target.parentElement.firstChild.src);var n=i.imgs.indexOf(t);a.style.display="block",a.addEventListener("click",function(){var e=Object(O.a)(_.a.mark((function e(t){return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("BUTTON"!==t.target.tagName||"Yes"!==t.target.innerHTML){e.next=10;break}if(!(n>-1)){e.next=8;break}return i.imgs.splice(n,1),r(Object(u.a)({},i)),e.next=6,fetch("https://rg-gallerybackend.herokuapp.com//updateone",{method:"POST",body:JSON.stringify(Object(u.a)({id:i._id},i)),headers:{"Content-Type":"application/json"}});case 6:e.sent,a.style.display="none";case 8:e.next=11;break;case 10:"BUTTON"===t.target.tagName&&"No"===t.target.innerHTML&&(a.style.display="none");case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())};return Object(n.useEffect)((function(){}),[f,C,y]),Object(g.jsxs)("div",{className:oe.a.container,children:[Object(g.jsx)(he,{}),Object(g.jsxs)("div",{className:oe.a.headerWrapper,children:[Object(g.jsxs)("div",{className:oe.a.mainPhotoWrapper,id:"mainProfile",children:[Object(g.jsx)("div",{style:b,className:oe.a.profilePictureWrapper,onDrop:a?y:null,onDragOver:a?function(e){e.preventDefault()}:null,onMouseMove:C,onMouseLeave:function(){h({backgroundImage:"none",backgroundPosition:""})},children:Object(g.jsx)("img",{className:oe.a.mainPhoto,src:i.profile?i.profile:"",alt:i.title})}),Object(g.jsx)("div",{className:oe.a.smallImagesWrapper,onClick:f,children:i.imgs?i.imgs.map((function(t){return Object(g.jsxs)("div",{className:oe.a.smallImage,children:[Object(g.jsx)("img",{className:oe.a.smallImages,draggable:"true",onDrag:a?N:null,src:t,alt:i.title}),d?Object(g.jsx)(me.a,{className:oe.a.close,onClick:I}):null]},e++)})):null})]}),pe(i,d,p),d?Object(g.jsx)(me.a,{className:oe.a.closeForm,onClick:w}):null,a?Object(g.jsx)(B.a,{className:oe.a.editButton,id:"editPainting",onClick:w}):null,Object(g.jsxs)("div",{className:oe.a.infoWrapper,id:"infoWrapper",children:[Object(g.jsx)("h1",{className:oe.a.title,children:i.title}),Object(g.jsxs)("div",{className:oe.a.details,children:[Object(g.jsxs)("div",{className:oe.a.dWrapper,children:[Object(g.jsx)("h5",{className:oe.a.detailsText,children:"Material: "}),Object(g.jsx)("span",{className:oe.a.span,children:i.material})]}),Object(g.jsxs)("div",{className:oe.a.dWrapper,children:[Object(g.jsx)("h5",{className:oe.a.detailsText,children:"Mediums:"}),Object(g.jsx)("span",{className:oe.a.span,children:i.mediums})]}),Object(g.jsxs)("div",{className:oe.a.dWrapper,children:[Object(g.jsx)("h5",{className:oe.a.detailsText,children:"Subject:"}),Object(g.jsx)("span",{className:oe.a.span,children:i.subject})]}),Object(g.jsxs)("div",{className:oe.a.dWrapper,children:[Object(g.jsx)("h5",{className:oe.a.detailsText,children:"Size:"})," ",Object(g.jsxs)("span",{children:[i.length," cm x ",i.width," cm x ",i.depth," cm"]})]})]}),Object(g.jsxs)("div",{className:oe.a.description,children:[Object(g.jsx)("h2",{className:oe.a.h2,children:"Description"}),Object(g.jsx)("p",{className:oe.a.p,children:i.description})]})]})]})]})},Oe=a(28),xe=a.n(Oe),fe=function(){var e=Object(O.a)(_.a.mark((function e(t){var a,n;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://rg-gallerybackend.herokuapp.com//get",{method:"GET",headers:{gallery:t}});case 2:return a=e.sent,e.next=5,a.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ge=function(){var e=Object(n.useState)({}),t=Object(W.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(!0),i=Object(W.a)(s,2),r=i[0],o=i[1],l=Object(k.f)(),d=l.location.pathname.split("/")[1].slice(0,-1);Object(n.useEffect)((function(){fe(d).then((function(e){c(Object(u.a)({},e)),o(!1)})).catch((function(e){console.log("cv error:",e)}))}),[]);return Object(g.jsx)("div",{className:xe.a.container,children:Object(g.jsx)("div",{className:xe.a.wrapper,onClick:function(e){"IMG"===e.target.tagName&&l.push("rg-website/details:".concat(e.target.id))},children:r?Object(g.jsx)(Q,{}):Object.values(a).map((function(e){return Object(g.jsx)("div",{className:xe.a.imgWrapper,children:Object(g.jsx)("img",{id:e._id,className:xe.a.img,src:e.profile,alt:e.title})},e._id)}))})})},ve=a(30),ye=a.n(ve),Ne=function(e){document.getElementsByClassName("fullscreen")[0];console.log(e.target)},ke=function(){return Object(g.jsxs)("div",{className:ye.a.wrapper,onClick:Ne,onKeyDown:function(){console.log("here")},children:[Object(g.jsx)("h1",{className:ye.a.instruction,children:'Press "Click" to start and double "ESC" for exit'}),Object(g.jsx)("iframe",{className:ye.a.iframe,src:"https://yordankrushkov.github.io/livegallery/",frameborder:"0",allowFullScreen:!0})]})};var we=function(){var e=Object(n.useContext)(v).isAuthenticated;return Object(g.jsx)(l.a,{children:Object(g.jsxs)("div",{className:"App",children:[Object(g.jsx)(N,{}),Object(g.jsx)(T,{}),Object(g.jsx)(k.c,{}),Object(g.jsx)(k.a,{exact:!0,path:"rg-website/",component:I}),Object(g.jsx)(k.a,{path:"rg-website/about",component:U}),Object(g.jsx)(k.a,{path:"/portraits",component:ge}),Object(g.jsx)(k.a,{path:"rg-website/abstracts",component:ge}),Object(g.jsx)(k.a,{path:"rg-website/landscapes",component:ge}),Object(g.jsx)(k.a,{path:"rg-website/contacts",component:X}),Object(g.jsx)(k.a,{path:"rg-website/login",component:ae}),Object(g.jsx)(k.a,{path:"rg-website/live",component:ke}),e?Object(g.jsx)(k.a,{path:"/add",component:ie}):null,Object(g.jsx)(k.a,{path:"rg-website/details:id",component:_e}),Object(g.jsx)(k.c,{})]})})},Ce=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,66)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;a(e),n(e),c(e),s(e),i(e)}))};i.a.render(Object(g.jsx)(c.a.StrictMode,{children:Object(g.jsx)(y,{children:Object(g.jsx)(we,{})})}),document.getElementById("root")),Ce()},7:function(e,t,a){e.exports={container:"Details_container__2Bh_S",headerWrapper:"Details_headerWrapper__3fMkr",details:"Details_details__2vueY",dWrapper:"Details_dWrapper__3kqTI",mainPhotoWrapper:"Details_mainPhotoWrapper__2uGsd",profilePictureWrapper:"Details_profilePictureWrapper__2fMPd",mainPhoto:"Details_mainPhoto__3yzHS",smallImagesWrapper:"Details_smallImagesWrapper__1afCc",smallImages:"Details_smallImages__2Hhb-",smallImage:"Details_smallImage__37nul",close:"Details_close__3eKpB",closeForm:"Details_closeForm__10xX6",editButton:"Details_editButton__12aXi",title:"Details_title__3zab_",description:"Details_description__3Q9L_",detailsText:"Details_detailsText__3cvRV",p:"Details_p__28P4r","magnifying-glass":"Details_magnifying-glass__1B_38",h2:"Details_h2__2XEIz",span:"Details_span__2953D",infoWrapper:"Details_infoWrapper__2BsSc"}}},[[65,1,2]]]);
//# sourceMappingURL=main.a69b335b.chunk.js.map