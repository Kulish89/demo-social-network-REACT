(this["webpackJsonpmy-project-1"]=this["webpackJsonpmy-project-1"]||[]).push([[4],{298:function(e,s,a){e.exports={dialogs:"Dialogs_dialogs__2uAJv",dialogsItems:"Dialogs_dialogsItems__1Cmdt",dialog:"Dialogs_dialog__3G5Ja",active:"Dialogs_active__T0zyh",messages:"Dialogs_messages__3Q1d2"}},304:function(e,s,a){"use strict";a.r(s);var t=a(105),i=a(12),n=(a(0),a(86)),c=a(127),o=a(83),d=a(37),r=a(13),g=a(298),l=a.n(g),m=a(1),j=function(e){return Object(m.jsxs)("div",{className:l.a.dialog+" "+l.a.active,children:[Object(m.jsx)("img",{src:e.avatar}),Object(m.jsx)(r.b,{to:"/dialogs/"+e.id,children:e.name})]})},b=function(e){var s=e.message;return Object(m.jsx)("div",{className:l.a.message,children:s})},u=Object(o.a)(100),O=Object(c.a)({form:"dialogNewMessageForm"})((function(e){return Object(m.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(m.jsx)(n.a,{component:d.b,validate:[o.b,u],name:"newMwssageText",placeholder:"Write your message!"}),Object(m.jsx)(n.a,{component:"button",name:"addMessage",children:"Send"})]})}));var v=function(e){var s=e.dialogs,a=e.messages,t=e.addNewMessage,i=s.map((function(e){return Object(m.jsx)(j,{id:e.id,name:e.name,avatar:e.avatar})})),n=a.map((function(e){return Object(m.jsx)(b,{message:e.message})}));return Object(m.jsxs)("div",{className:l.a.dialogs,children:[Object(m.jsx)("div",{className:l.a.dialogsItems,children:i}),Object(m.jsxs)("div",{className:l.a.messages,children:[n,Object(m.jsx)("div",{children:Object(m.jsx)(O,{onSubmit:function(e){t(e.newMwssageText)}})})]})]})},x=a(96),f=a(9),h=Object(f.d)(Object(i.b)((function(e){return{dialogs:e.dialogsPage.dialogs,messages:e.dialogsPage.messages}}),(function(e){return{addNewMessage:function(s){e(Object(t.b)(s))}}})),x.a)(v);s.default=h}}]);
//# sourceMappingURL=4.6039c10c.chunk.js.map