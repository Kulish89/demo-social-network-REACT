(this["webpackJsonpmy-project-1"]=this["webpackJsonpmy-project-1"]||[]).push([[3],{298:function(e,t,s){"use strict";s.d(t,"a",(function(){return p}));var o=s(3),n=s(37),i=s(38),c=s(39),a=s(40),r=s(0),l=s.n(r),j=s(14),u=s(9),d=s(1),b=function(e){return{isAuth:e.auth.isAuth}},p=function(e){var t=function(t){Object(c.a)(r,t);var s=Object(a.a)(r);function r(){return Object(n.a)(this,r),s.apply(this,arguments)}return Object(i.a)(r,[{key:"render",value:function(){return this.props.isAuth?Object(d.jsx)(e,Object(o.a)({},this.props)):Object(d.jsx)(u.a,{to:"/login"})}}]),r}(l.a.Component);return Object(j.b)(b)(t)}},300:function(e,t,s){e.exports={background:"ProfileInfo_background__2YQ7W",mainInfoAboutProfile:"ProfileInfo_mainInfoAboutProfile__3Y5to",inputUploadFile:"ProfileInfo_inputUploadFile__2o2t7",labelUploadFile:"ProfileInfo_labelUploadFile__1Qkj3",userImg:"ProfileInfo_userImg__2fbu8",status:"ProfileInfo_status__229Uv",statusTextarea:"ProfileInfo_statusTextarea__Ttalm",descriptionProfile:"ProfileInfo_descriptionProfile__17pTV",contacts:"ProfileInfo_contacts__yR6yD",dropdownButton:"ProfileInfo_dropdownButton__1XtB3",dropdownContainer:"ProfileInfo_dropdownContainer__r3xdd",active:"ProfileInfo_active__1Oh18"}},301:function(e,t,s){e.exports={posts:"MyPosts_posts__18XIu"}},302:function(e,t,s){e.exports={post:"Post_post__12H-7",photo:"Post_photo__3QEDs",message:"Post_message__1Vuvk"}},304:function(e,t,s){"use strict";s.r(t);var o=s(3),n=s(37),i=s(38),c=s(39),a=s(40),r=s(0),l=s.n(r),j=s(14),u=s(98),d=s(91),b=s(132),p=s(31),f=s(65),h=s(26),O=s(301),x=s.n(O),m=s(302),v=s.n(m),P=s(99),_=s(1);var g=function(e){return Object(_.jsxs)("div",{className:v.a.post,children:[Object(_.jsx)("div",{className:v.a.photo,children:Object(_.jsx)("img",{src:P.a})}),Object(_.jsx)("div",{className:v.a.message,children:e.message})]})},k=Object(f.a)(300),I=Object(b.a)({form:"newPostTextForm"})((function(e){return Object(_.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(_.jsx)(d.a,{component:h.b,name:"newPostText",placeholder:"Write your new post!",validate:[f.b,k]}),Object(_.jsx)(d.a,{component:"button",name:"addPost",children:"Send"})]})})),w=l.a.memo((function(e){var t=e.posts.map((function(e){return Object(_.jsx)(g,{message:e.message},e.id)}));return Object(_.jsxs)("div",{children:[Object(_.jsxs)("div",{className:x.a.posts,children:[Object(_.jsx)("h3",{children:"My posts"}),Object(_.jsx)("div",{children:"New post"}),Object(_.jsx)(I,{onSubmit:function(t,s){e.addNewPost(t.newPostText),s(Object(p.a)("newPostTextForm"))}})]}),Object(_.jsx)("div",{children:t})]})})),y=Object(j.b)((function(e){return{posts:e.profilePage.posts}}),{addNewPost:u.a})(w),N=s(100),S=s(67),F=s(300),A=s.n(F),T=function(e){var t=Object(r.useState)(!1),s=Object(N.a)(t,2),o=s[0],n=s[1],i=Object(r.useState)(e.status),c=Object(N.a)(i,2),a=c[0],l=c[1];Object(r.useEffect)((function(){l(e.status)}),[e.status]);return Object(_.jsxs)("div",{children:[!o&&Object(_.jsx)("div",{className:A.a.status,children:Object(_.jsx)("span",{onDoubleClick:function(){n(!0)},children:'"'.concat(a,'"')||!1})}),o&&e.isOwner&&Object(_.jsx)("div",{className:A.a.status,children:Object(_.jsx)("textarea",{className:A.a.statusTextarea,autoFocus:!0,onChange:function(e){l(e.currentTarget.value)},onBlur:function(){n(!1),e.updateStatus(a)},value:a})})]})},C=s(35),U=s.n(C),M=Object(b.a)({form:"edit-profile"})((function(e){var t=e.handleSubmit,s=e.profile,o=e.error;return Object(_.jsxs)("form",{onSubmit:t,children:[Object(_.jsx)("div",{children:Object(_.jsx)("button",{children:"Save"})}),o&&Object(_.jsxs)("div",{className:U.a.formError,children:[" ",o]}),Object(_.jsxs)("div",{children:[Object(_.jsx)("b",{children:"Full name:"})," ",Object(h.c)("Full Name",h.a,[],"fullName")]}),Object(_.jsxs)("div",{children:[Object(_.jsx)("b",{children:"Looking for a job:"})," ",Object(h.c)("",h.a,[],"lookingForAJob",{type:"checkbox"})]}),Object(_.jsxs)("div",{children:[Object(_.jsx)("b",{children:"My professional skills:"})," ",Object(h.c)("My professional skills",h.b,[],"lookingForAJobDescription")]}),Object(_.jsxs)("div",{children:[Object(_.jsx)("b",{children:"About me:"})," ",Object(h.c)("About me",h.b,[],"aboutMe")]}),Object(_.jsxs)("div",{children:[Object(_.jsx)("b",{children:"Contacts:"}),Object.keys(s.contacts).map((function(e){return Object(_.jsxs)("div",{children:[Object(_.jsxs)("b",{children:[e,":"]}),Object(h.c)(e,h.a,[],"contacts."+e)]},e)}))]})]})})),D=function(e){var t=e.profile,s=e.isOwner,o=e.goToEditMode,n=l.a.useState(!1),i=Object(N.a)(n,2),c=i[0],a=i[1];return Object(_.jsxs)("div",{className:A.a.descriptionProfile,children:[Object(_.jsxs)("div",{children:[Object(_.jsx)("b",{children:"Full name:"})," ",t.fullName]}),Object(_.jsxs)("div",{children:[Object(_.jsx)("b",{children:"Looking for a job:"})," ",t.lookingForAJob?"yes":"no"]}),t.lookingForAJob&&Object(_.jsxs)("div",{children:[Object(_.jsx)("b",{children:"My professional skills:"})," ",t.lookingForAJobDescription]}),Object(_.jsxs)("div",{children:[Object(_.jsx)("b",{children:"About me:"})," ",t.aboutMe]}),Object(_.jsxs)("div",{children:[Object(_.jsxs)("b",{className:A.a.dropdownButton,onClick:function(){a(!c)},children:["Contacts: ",c?Object(_.jsx)("i",{children:"\u25b2"}):Object(_.jsx)("i",{children:"\u25bc"})]}),Object(_.jsx)("div",{className:c?A.a.dropdownContainer+" "+A.a.active:A.a.dropdownContainer,children:Object.keys(t.contacts).map((function(e){return Object(_.jsx)(J,{contactTitle:e,contactValue:t.contacts[e]},e)}))})]}),s&&c&&Object(_.jsx)("div",{children:Object(_.jsx)("button",{onClick:o,children:"Edit"})})]})},J=function(e){var t=e.contactTitle,s=e.contactValue;return Object(_.jsxs)("div",{className:A.a.contacts,children:[t,": ",s]})},E=function(e){var t=e.profile,s=e.status,o=e.updateStatus,n=e.isOwner,i=e.savePhoto,c=e.saveProfile,a=l.a.useState(!1),r=Object(N.a)(a,2),j=r[0],u=r[1];if(!t)return Object(_.jsx)(S.a,{});return Object(_.jsxs)("div",{children:[Object(_.jsx)("div",{className:A.a.background}),Object(_.jsxs)("div",{className:A.a.mainInfoAboutProfile,children:[Object(_.jsxs)("div",{children:[Object(_.jsx)("div",{children:Object(_.jsx)("img",{src:t.photos.large||P.a,className:A.a.userImg})}),Object(_.jsx)("div",{children:n&&Object(_.jsxs)("label",{className:A.a.labelUploadFile,children:[Object(_.jsx)("input",{type:"file",onChange:function(e){e.target.files.length&&i(e.target.files[0])},className:A.a.inputUploadFile}),Object(_.jsx)("span",{children:"upload file"})]})})]}),Object(_.jsx)(T,{status:s,updateStatus:o,isOwner:n})]}),j?Object(_.jsx)(M,{initialValues:t,onSubmit:function(e){c(e).then((function(){u(!1)}))},profile:t}):Object(_.jsx)(D,{profile:t,isOwner:n,goToEditMode:function(){u(!0)}})]})};var B=function(e){return Object(_.jsxs)("div",{children:[Object(_.jsx)(E,{profile:e.profile,status:e.status,updateStatus:e.updateStatus,isOwner:e.isOwner,savePhoto:e.savePhoto,saveProfile:e.saveProfile}),Object(_.jsx)(y,{})]})},V=s(9),Q=s(298),z=s(10),L=function(e){Object(c.a)(s,e);var t=Object(a.a)(s);function s(){return Object(n.a)(this,s),t.apply(this,arguments)}return Object(i.a)(s,[{key:"refreshProfile",value:function(){var e=this.props.match.params.userId;e||(e=this.props.authorizedUserId)||this.props.history.push("/login"),this.props.getUserProfile(e),this.props.getStatus(e)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e){this.props.match.params.userId!=e.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return Object(_.jsx)(B,Object(o.a)(Object(o.a)({},this.props),{},{isOwner:!this.props.match.params.userId,profile:this.props.state,status:this.props.status,updateStatus:this.props.updateStatus,savePhoto:this.props.savePhoto,saveProfile:this.props.saveProfile}))}}]),s}(l.a.Component);t.default=Object(z.d)(Object(j.b)((function(e){return{state:e.profilePage.profile,status:e.profilePage.status,authorizedUserId:e.auth.userId,isAuth:e.auth.isAuth}}),{getUserProfile:u.d,getStatus:u.c,updateStatus:u.g,savePhoto:u.e,saveProfile:u.f}),V.g,Q.a)(L)}}]);
//# sourceMappingURL=3.ae5d1761.chunk.js.map