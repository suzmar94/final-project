(this.webpackJsonpproject=this.webpackJsonpproject||[]).push([[0],{32:function(e,t,a){e.exports=a(60)},37:function(e,t,a){},60:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(29),c=a.n(l),o=(a(37),a(10)),s=a(8),m=a(2),i=function(){return r.a.createElement("div",{className:"contact"},r.a.createElement("p",{className:"contact-us"},"Contact us"),r.a.createElement("br",null),r.a.createElement("p",{className:"border-bottom"},"You can reach us here"),r.a.createElement("div",{className:"mt-3"},r.a.createElement("span",null,"By phone at: +381 69 00 000"),r.a.createElement("br",null),r.a.createElement("span",null,"By email at: info@elrincondesusi.org")),r.a.createElement("br",null),r.a.createElement("p",{className:"border-bottom"},"Customer Service hours:"),r.a.createElement("div",{className:"mt-3"},r.a.createElement("span",null,"Monday to Friday, 9am to 13pm")))},u=a(12),E=a(13),b=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("footer",null,r.a.createElement("div",{className:"footer-container"},r.a.createElement("div",{className:"btn-container"},r.a.createElement("a",{href:"https://www.instagram.com/accounts/login/",target:"_blank",rel:"noopener noreferrer",className:"btn-floating btn-lg btn-ins",type:"button",role:"button"},r.a.createElement(u.a,{icon:E.b,size:"2x"})),r.a.createElement("a",{href:"https://www.facebook.com/",target:"_blank",rel:"noopener noreferrer",className:"btn-floating btn-lg btn-fb",type:"button",role:"button"},r.a.createElement(u.a,{icon:E.a,size:"2x"})),r.a.createElement("a",{href:"https://www.youtube.com/watch?v=bBDV1wOkGnE",target:"_blank",rel:"noopener noreferrer",className:"btn-floating btn-lg btn-yt",type:"button",role:"button"},r.a.createElement(u.a,{icon:E.c,size:"2x"}))),r.a.createElement("div",{className:"copyright"},"\xa9 2020 Copyright: EL RINC\xd3N DE SUSI"))))},p=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("nav",{id:"nav"},r.a.createElement(s.b,{to:"/",className:"navigacija"},r.a.createElement("b",null,"EL RINC\xd3N DE SUSI")),r.a.createElement(s.b,{to:"/",className:"navigacija"},"HOME"),r.a.createElement(s.b,{to:"/works",className:"navigacija"},"WORKS"),r.a.createElement(s.b,{to:"/contacts",className:"navigacija"},"CONTACT")))},d=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",{id:"home"},r.a.createElement("b",null,"EL RINC\xd3N DE SUSI")," is a serbian non-profit organization of former students of the Faculty of Philology, course Spanish language, literature and culture, headquarted in Belgrade.",r.a.createElement("br",null),"Our goal is to facilitate and help current students of the mentioned faculty to write seminar papers, which are many during studies on this faculty, by giving them our papers both seminar and many others in Serbian and Spanish language.",r.a.createElement("br",null),"All posted works on this site passed with a high number of points; in most cases with maximum.",r.a.createElement("br",null),"Also, our organization offers you a possibility to contribute to this project of ours by sending us your works (seminary or other type) with the achieved number of points, which we will post after the checking."))},f=function(e){var t=e.setUser,a=Object(n.useState)(""),l=Object(o.a)(a,2),c=l[0],s=l[1],i=Object(n.useState)(""),u=Object(o.a)(i,2),E=u[0],b=u[1],p=Object(m.g)();return r.a.createElement(r.a.Fragment,null,r.a.createElement("h6",{className:"h5"},"In order to check out our works, please login!"),r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),console.log({name:c,password:E}),t(c),p.push("/works")},className:"loginform form-group"},r.a.createElement("label",{className:"lejbel"},"Username:"),r.a.createElement("input",{className:"form-control",value:c,onChange:function(e){return s(e.target.value)},type:"text",placeholder:"Username...",name:"email"}),r.a.createElement("label",{className:"lejbel"},"Password:"),r.a.createElement("input",{className:"form-control",value:E,onChange:function(e){return b(e.target.value)},type:"password",placeholder:"Password...",name:"password"}),r.a.createElement("br",null),r.a.createElement("input",{className:"btn btn-dark",type:"submit"})))},h=function(e){var t=e.title,a=e.description;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"work"},r.a.createElement("img",{id:"slika",src:"https://blog.macsales.com/wp-content/uploads/2019/10/ReducePDF-286x325.jpg",alt:""}),r.a.createElement("div",{id:"opis"},r.a.createElement("p",null,t),r.a.createElement("hr",null),r.a.createElement("p",null,a))))},g=function(e){var t=e.arr,a=e.setFilter,n=e.filter;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement("input",{className:"form-control",onChange:function(e){a(e.target.value)}}),r.a.createElement("div",{className:"work-list mt-3"},t.filter((function(e){return e.description.toLowerCase().includes(n.toLowerCase())})).map((function(e){return r.a.createElement(h,{key:e.id,title:e.title,description:e.description})})))))},w=a(31),v=a.n(w);var N=function(){var e=Object(n.useState)(null),t=Object(o.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)([]),u=Object(o.a)(c,2),E=u[0],h=u[1],w=Object(n.useState)(""),N=Object(o.a)(w,2),y=N[0],k=N[1];return Object(n.useEffect)((function(){v.a.get("https://us-central1-seminarski-radovi-api.cloudfunctions.net/app/seminaryWorks").then((function(e){console.log(e.data),h(e.data)}))}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(s.a,null,r.a.createElement("nav",{className:"navbar navbar-dark bg-dark"},r.a.createElement(p,null)),r.a.createElement("main",null,r.a.createElement(m.d,null,r.a.createElement(m.b,{exact:!0,path:"/"},r.a.createElement(d,null)),r.a.createElement(m.b,{path:"/works"},a?r.a.createElement(g,{arr:E,setFilter:k,filter:y}):r.a.createElement(m.a,{to:"/login"})),r.a.createElement(m.b,{path:"/contacts"},r.a.createElement(i,null)),r.a.createElement(m.b,{path:"/login"},r.a.createElement(f,{setUser:l}))))),r.a.createElement(b,null))};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(N,null)),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.f05525c7.chunk.js.map