"use strict";(self.webpackChunkPhonebook_Frontend=self.webpackChunkPhonebook_Frontend||[]).push([[279],{3230:function(n,e,t){t.d(e,{t:function(){return Z},l0:function(){return B},bY:function(){return F.Z},__:function(){return E},U0:function(){return w},B2:function(){return y},Mm:function(){return D}});var r,a,o,u,i,l=t(9439),s=t(2791),c=t(9434),d=t(5984),m=t(9883),f=function(n,e,t){return""===e.trim()&&(t({type:"warning",message:"".concat(n," field can't be empty.")}),!0)},x=function(n,e){return!!new RegExp("^\\S+@\\S+\\.\\S+$").test(n.trim())||(e({type:"error",message:"Email is not valid."}),!1)},p=function(n,e){return!!/^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d.,-]{8,}$/.test(n.trim())||(e({type:"error",message:"Password must contain at least one letter, one digit, and be at least 8 characters long."}),!1)},h=function(n,e){return!!/^[a-zA-Z0-9_]{4,20}$/.test(n.trim())||(e({type:"error",message:"Username must be 4-20 characters long and contain only letters, numbers and underscores."}),!1)},b=function(n,e,t){return n===e||(t({type:"error",message:"Password confirmation does not match."}),!1)},g=function(n,e,t){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3],a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;f(n,e,t)||("Username"!==n||h(e,t))&&("Email"!==n||x(e,t))&&("Password"!==n||p(e,t))&&(r&&!b(e,a,t)||t({type:"success",message:"".concat(n," is valid.")}))},v=(t(1615),t(3329)),Z=function(){var n=(0,s.useState)(null),e=(0,l.Z)(n,2),t=e[0],r=e[1],a=(0,s.useState)(null),o=(0,l.Z)(a,2),u=o[0],i=o[1],p=(0,s.useState)(null),h=(0,l.Z)(p,2),b=h[0],g=h[1],Z=(0,s.useState)(""),j=(0,l.Z)(Z,2),w=j[0],y=j[1],S=(0,s.useState)(""),P=(0,l.Z)(S,2),C=P[0],A=P[1],k=(0,s.useState)(""),T=(0,l.Z)(k,2),z=T[0],U=T[1],_=(0,c.I0)(),I=(0,c.v9)(m.Af),R=(0,s.useRef)((0,d.x0)()),$=(0,s.useRef)((0,d.x0)()),L=(0,s.useRef)((0,d.x0)()),N=(0,s.useMemo)((function(){return function(n,e,t){var r,a;f(n,e,t)||("Phone number"!==n||(r=e,a=t,new RegExp("^\\w+([.-]?\\w+)*@\\w+([.-]?\\w+)*(\\.\\w{2,8})+$").test(r.trim())||(a({type:"error",message:"Phone number can only contain numbers, spaces, dashes, and parentheses."}),0))||"Email"!==n||x(e,t))&&(function(n,e,t,r){return!!n.find((function(n){return n[e.toLowerCase()]===t.trim()}))&&(r({type:"error",message:"".concat(e,' "').concat(t.trim(),'" is already exists.')}),!0)}(I,n,e,t)||t({type:"success",message:"".concat(n,' "').concat(e.trim(),'" is available.')}))}}),[I]);return(0,v.jsxs)(B,{onSubmit:function(n){n.preventDefault();var e=I.find((function(n){return n.name.toLowerCase()===w.toLowerCase()})),t=I.find((function(n){return n.phone===C}));if(!e&&!t){var a={name:w,phone:C,email:z};_((0,m.uK)(a)),y(""),A(""),U(""),r(null),i(null),g(null)}},children:[(0,v.jsx)(E,{labelTitle:"Name",type:"text",name:"name",value:w,onChange:function(n){return y(n.target.value)},onBlur:function(){return N("Name",w,r)},validationStatus:t,id:R.current,title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"}),(0,v.jsx)(F.Z,{fieldAlert:t}),(0,v.jsx)(E,{labelTitle:"Phone",type:"tel",name:"phone",value:C,onChange:function(n){return A(n.target.value)},onBlur:function(){return N("Phone number",C,i)},validationStatus:u,id:$.current,title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"}),(0,v.jsx)(F.Z,{fieldAlert:u}),(0,v.jsx)(E,{labelTitle:"Email",type:"email",name:"email",value:z,onChange:function(n){return U(n.target.value)},onBlur:function(){return N("Email",z,g)},validationStatus:b,id:L.current,title:"Email must be a valid email address, for example johndoe@example.com. It may contain letters, numbers, dots, hyphens and underscores, followed by an @ symbol, and ending with a domain name."}),(0,v.jsx)(F.Z,{fieldAlert:b}),(0,v.jsx)(D,{buttonText:"Add contact"})]})},j=t(6039),w=function(){var n=(0,s.useState)(""),e=(0,l.Z)(n,2),t=e[0],r=e[1],a=(0,s.useState)(""),o=(0,l.Z)(a,2),u=o[0],i=o[1],d=(0,s.useState)(null),m=(0,l.Z)(d,2),f=m[0],x=m[1],p=(0,s.useState)(null),h=(0,l.Z)(p,2),b=h[0],Z=h[1],w=(0,c.I0)();return(0,v.jsxs)(B,{onSubmit:function(n){n.preventDefault(),w((0,j.b4)({email:t,password:u})),r(""),i(""),x(null),Z(null)},children:[(0,v.jsx)(E,{labelTitle:"Email",type:"email",name:"email",value:t,onChange:function(n){return r(n.target.value)},onBlur:function(){return g("Email",t,x)},validationStatus:f}),(0,v.jsx)(F.Z,{fieldAlert:f}),(0,v.jsx)(E,{labelTitle:"Password",type:"password",name:"password",value:u,onChange:function(n){return i(n.target.value)},onBlur:function(){g("Password",u,Z)},validationStatus:b}),(0,v.jsx)(F.Z,{fieldAlert:b}),(0,v.jsx)(D,{buttonText:"Log in"})]})},y=function(){var n=(0,s.useState)(""),e=(0,l.Z)(n,2),t=e[0],r=e[1],a=(0,s.useState)(""),o=(0,l.Z)(a,2),u=o[0],i=o[1],d=(0,s.useState)(""),m=(0,l.Z)(d,2),f=m[0],x=m[1],p=(0,s.useState)(""),h=(0,l.Z)(p,2),b=h[0],Z=h[1],w=(0,s.useState)(null),y=(0,l.Z)(w,2),S=y[0],P=y[1],C=(0,s.useState)(null),A=(0,l.Z)(C,2),k=A[0],T=A[1],z=(0,s.useState)(null),U=(0,l.Z)(z,2),_=U[0],I=U[1],R=(0,s.useState)(null),$=(0,l.Z)(R,2),L=$[0],N=$[1],K=(0,c.I0)(),M=(0,c.v9)((function(n){return n.auth})),H=M.isLoading,W=M.error;return(0,v.jsxs)(B,{onSubmit:function(n){n.preventDefault(),f===b&&(K((0,j.z2)({name:t,email:u,password:f})),H||W||(r(""),i(""),x(""),Z(""),P(null),T(null),I(null),N(null)))},children:[(0,v.jsx)(E,{labelTitle:"Username",type:"text",name:"name",value:t,onChange:function(n){return r(n.target.value)},onBlur:function(){return g("Username",t,P)},validationStatus:S}),(0,v.jsx)(F.Z,{fieldAlert:S}),(0,v.jsx)(E,{labelTitle:"Email",type:"email",name:"email",value:u,onChange:function(n){return i(n.target.value)},onBlur:function(){return g("Email",u,T)},validationStatus:k}),(0,v.jsx)(F.Z,{fieldAlert:k}),(0,v.jsx)(E,{labelTitle:"Password",type:"password",name:"password",value:f,onChange:function(n){return x(n.target.value)},onBlur:function(){g("Password",f,I)},validationStatus:_}),(0,v.jsx)(F.Z,{fieldAlert:_}),(0,v.jsx)(E,{labelTitle:"Confirm Password",type:"password",name:"confirm",value:b,onChange:function(n){return Z(n.target.value)},onBlur:function(){g("Confirm Password",b,N,!0,f)},validationStatus:L}),(0,v.jsx)(F.Z,{fieldAlert:L}),(0,v.jsx)(D,{buttonText:"Register"})]})},S=t(168),P=t(6444),C=P.ZP.form(r||(r=(0,S.Z)(["\n  display: flex;\n  flex-direction: column;\n  min-width: 250px;\n  margin-bottom: 20px;\n"]))),B=function(n){var e=n.onSubmit,t=n.children;return(0,v.jsx)(C,{onSubmit:e,children:t})},A=P.ZP.label(a||(a=(0,S.Z)(["\n  color: ",";\n"])),(function(n){return n.theme.colors.label})),k=P.ZP.span(o||(o=(0,S.Z)(["\n  display: block;\n  margin-bottom: 5px;\n  font-size: 1.1em;\n  font-weight: bold;\n"]))),T=P.ZP.input(u||(u=(0,S.Z)(["\n  padding: 5px;\n  border-radius: 5px;\n  border: 2px solid\n    ",";\n  width: 100%;\n  box-sizing: border-box;\n"])),(function(n){var e=n.theme,t=n.validationStatus;switch(null===t||void 0===t?void 0:t.type){case"error":return"red";case"warning":return"orange";case"success":return"green";default:return e.colors.inputBorder}})),E=function(n){var e=n.labelTitle,t=n.type,r=n.name,a=n.value,o=n.onChange,u=n.onBlur,i=n.validationStatus,l=n.id,s=n.title;return(0,v.jsxs)(A,{children:[(0,v.jsx)(k,{children:e}),(0,v.jsx)(T,{type:t,name:r,value:a,onChange:o,onBlur:u,validationStatus:i,id:l,title:s,required:!0})]})},z=P.ZP.button(i||(i=(0,S.Z)(["\n  margin-top: 10px;\n  padding: 5px 10px;\n  border-radius: 5px;\n  border: none;\n  background-color: ",";\n  color: ",";\n  cursor: pointer;\n  width: 100%;\n  box-sizing: border-box;\n\n  &:hover {\n    background-color: ",";\n  }\n"])),(function(n){return n.theme.colors.buttonBackgroundDefault}),(function(n){return n.theme.colors.buttonText}),(function(n){return n.theme.colors.buttonBackgroundHover})),D=function(n){var e=n.buttonText;return(0,v.jsx)(z,{type:"submit",children:e})},F=t(8262)},8279:function(n,e,t){t.r(e),t.d(e,{default:function(){return E}});var r,a,o,u,i,l,s,c=t(9434),d=t(2791),m=t(9883),f=t(168),x=t(6444),p=x.ZP.ul(r||(r=(0,f.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n"]))),h=t(3329),b=function(){var n=(0,c.v9)(m.DI),e=(0,c.v9)(m.xU),t=(0,c.v9)(m.zh),r=(0,c.I0)();return(0,d.useEffect)((function(){r((0,m.yF)())}),[r]),(0,h.jsxs)(h.Fragment,{children:[!(null!==n&&void 0!==n&&n.length)&&!t&&!e&&(0,h.jsx)("p",{children:"No contacts found."}),(0,h.jsx)(p,{children:n.map((function(n){var e=n._id,t=n.name,r=n.phone;return(0,h.jsx)(w,{name:t,phone:r,_id:e},e)}))})]})},g=x.ZP.li(a||(a=(0,f.Z)(["\n  display: flex;\n  justify-content: space-between;\n  gap: 20px;\n  align-items: center;\n  padding: 10px;\n  border: 1px solid ",";\n  border-radius: 5px;\n"])),(function(n){return n.theme.colors.itemBorder})),v=x.ZP.ul(o||(o=(0,f.Z)(["\n  max-width: 400px;\n  overflow: hidden;\n"]))),Z=x.ZP.li(u||(u=(0,f.Z)(["\n  &.name {\n    font-size: 16px;\n  }\n"]))),j=x.ZP.button(i||(i=(0,f.Z)(["\n  padding: 5px;\n  border-radius: 5px;\n  border: none;\n  background-color: ",";\n  color: ",";\n  cursor: pointer;\n\n  &:hover {\n    background-color: ",";\n  }\n"])),(function(n){return n.theme.colors.buttonBackgroundDefault}),(function(n){return n.theme.colors.buttonText}),(function(n){return n.theme.colors.buttonBackgroundHover})),w=function(n){var e=n.name,t=n.phone,r=n._id,a=(0,c.I0)();return(0,h.jsxs)(g,{children:[(0,h.jsxs)(v,{children:[(0,h.jsx)(Z,{className:"name",children:e}),(0,h.jsx)(Z,{children:t})]}),(0,h.jsx)(j,{onClick:function(){a((0,m.GK)(r))},children:"Delete"})]})},y=t(9658),S=t(5984),P=x.ZP.label(l||(l=(0,f.Z)(["\n  font-weight: bold;\n  margin-bottom: 5px;\n  display: block;\n  color: ",";\n"])),(function(n){return n.theme.colors.label})),C=x.ZP.input(s||(s=(0,f.Z)(["\n  width: 250px;\n  padding: 5px;\n  border-radius: 5px;\n  border: 1px solid ",";\n  margin-bottom: 20px;\n  box-sizing: border-box;\n"])),(function(n){return n.theme.colors.inputBorder})),B=(0,S.x0)(),A=function(){var n=(0,c.I0)(),e=(0,c.v9)((function(n){return n.filter}));return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(P,{htmlFor:B,children:"Find contacts by name"}),(0,h.jsx)(C,{type:"text",name:"filter",value:e,onChange:function(e){var t=e.target.value;n((0,y.T)(t))},placeholder:"Enter contact name",id:B})]})},k=t(3230),T=t(6652),E=function(){return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(T.$0,{children:(0,h.jsxs)(T.W2,{children:[(0,h.jsx)(T.U3,{title:"Contacts"}),(0,h.jsx)(T.DK,{title:"Add a new one..."}),(0,h.jsx)(k.t,{})]})}),(0,h.jsx)(T.$0,{children:(0,h.jsxs)(T.W2,{children:[(0,h.jsx)(T.DK,{title:"Your Contacts"}),(0,h.jsx)(A,{}),(0,h.jsx)(b,{})]})})]})}},5984:function(n,e,t){t.d(e,{x0:function(){return r}});var r=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(n)).reduce((function(n,e){return n+=(e&=63)<36?e.toString(36):e<62?(e-26).toString(36).toUpperCase():e>62?"-":"_"}),"")}}}]);
//# sourceMappingURL=279.71082390.chunk.js.map