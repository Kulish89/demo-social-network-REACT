(this["webpackJsonpmy-project-1"]=this["webpackJsonpmy-project-1"]||[]).push([[4],{298:function(e,s,a){"use strict";a.d(s,"a",(function(){return b}));var t=a(3),n=a(37),i=a(38),c=a(39),o=a(40),r=a(0),g=a.n(r),d=a(14),j=a(9),u=a(1),l=function(e){return{isAuth:e.auth.isAuth}},b=function(e){var s=function(s){Object(c.a)(r,s);var a=Object(o.a)(r);function r(){return Object(n.a)(this,r),a.apply(this,arguments)}return Object(i.a)(r,[{key:"render",value:function(){return this.props.isAuth?Object(u.jsx)(e,Object(t.a)({},this.props)):Object(u.jsx)(j.a,{to:"/login"})}}]),r}(g.a.Component);return Object(d.b)(l)(s)}},299:function(e,s,a){e.exports={dialogsSection:"Dialogs_dialogsSection__319av",dialog:"Dialogs_dialog__3sQPi",active:"Dialogs_active__XTggp",message:"Dialogs_message__1F9gw",messages:"Dialogs_messages__3ZK7x"}},305:function(e,s,a){"use strict";a.r(s);var t=a(110),n=a(14),i=(a(0),a(91)),c=a(132),o=a(31),r=a(65),g=a(26),d=a(15),j=a(299),u=a.n(j),l=a(1),b=function(e){return Object(l.jsxs)("div",{className:u.a.dialog+" "+u.a.active,children:[Object(l.jsx)("img",{src:e.avatar}),Object(l.jsx)(d.b,{to:"/dialogs/"+e.id,children:e.name})]})},m=function(e){var s=e.message;return Object(l.jsx)("div",{className:u.a.message,children:s})},O=Object(r.a)(100),h=Object(c.a)({form:"dialogNewMessageForm"})((function(e){return Object(l.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(l.jsx)(i.a,{component:g.b,validate:[r.b,O],name:"newMessageText",placeholder:"Write your message!"}),Object(l.jsx)(i.a,{component:"button",name:"addMessage",children:"Send"})]})}));var v=function(e){var s=e.dialogs,a=e.messages,t=e.sendNewMessage,n=s.map((function(e){return Object(l.jsx)(b,{name:e.name,avatar:e.avatar},e.id)})),i=a.map((function(e){return Object(l.jsx)(m,{message:e.message},e.id)}));return Object(l.jsxs)("div",{className:u.a.dialogsSection,children:[Object(l.jsx)("div",{className:u.a.dialogs,children:n}),Object(l.jsxs)("div",{className:u.a.messages,children:[i,Object(l.jsx)("div",{children:Object(l.jsx)(h,{onSubmit:function(e,s,a){t(e.newMessageText),s(Object(o.a)("dialogNewMessageForm"))}})})]})]})},p=a(298),f=a(10),x=Object(f.d)(Object(n.b)((function(e){return{dialogs:e.dialogsPage.dialogs,messages:e.dialogsPage.messages}}),{sendNewMessage:t.b}),p.a)(v);s.default=x}}]);
//# sourceMappingURL=4.4c6603dc.chunk.js.map