"use strict";(self.webpackChunkPhonebook_Frontend=self.webpackChunkPhonebook_Frontend||[]).push([[432],{3230:function(e,n,t){t.d(n,{t:function(){return Z},l0:function(){return A},bY:function(){return U.Z},__:function(){return k},U0:function(){return S},B2:function(){return y},Mm:function(){return R}});var r,a,o,u,i,l=t(9439),s=t(2791),c=t(9434),d=t(5984),m=t(9883),f=function(e,n,t){return""===n.trim()&&(t({type:"warning",message:"".concat(e," field can't be empty.")}),!0)},p=function(e,n){return!!new RegExp("^\\S+@\\S+\\.\\S+$").test(e.trim())||(n({type:"error",message:"Email is not valid."}),!1)},x=function(e,n){return!!/^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d.,-]{8,}$/.test(e.trim())||(n({type:"error",message:"Password must contain at least one letter, one digit, and be at least 8 characters long."}),!1)},b=function(e,n){return!!/^[a-zA-Z0-9_]{4,20}$/.test(e.trim())||(n({type:"error",message:"Username must be 4-20 characters long and contain only letters, numbers and underscores."}),!1)},g=function(e,n,t){return e===n||(t({type:"error",message:"Password confirmation does not match."}),!1)},h=function(e,n,t){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3],a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;f(e,n,t)||("Username"!==e||b(n,t))&&("Email"!==e||p(n,t))&&("Password"!==e||x(n,t))&&(r&&!g(n,a,t)||t({type:"success",message:"".concat(e," is valid.")}))},v=(t(1615),t(3329)),Z=function(){var e=(0,s.useState)(null),n=(0,l.Z)(e,2),t=n[0],r=n[1],a=(0,s.useState)(null),o=(0,l.Z)(a,2),u=o[0],i=o[1],x=(0,s.useState)(null),b=(0,l.Z)(x,2),g=b[0],h=b[1],Z=(0,s.useState)(""),w=(0,l.Z)(Z,2),S=w[0],y=w[1],j=(0,s.useState)(""),C=(0,l.Z)(j,2),P=C[0],B=C[1],T=(0,s.useState)(""),E=(0,l.Z)(T,2),z=E[0],_=E[1],L=(0,c.I0)(),$=(0,c.v9)(m.Af),D=(0,s.useRef)((0,d.x0)()),I=(0,s.useRef)((0,d.x0)()),F=(0,s.useRef)((0,d.x0)()),M=(0,s.useMemo)((function(){return function(e,n,t){var r,a;f(e,n,t)||("Phone number"!==e||(r=n,a=t,new RegExp("^\\w+([.-]?\\w+)*@\\w+([.-]?\\w+)*(\\.\\w{2,8})+$").test(r.trim())||(a({type:"error",message:"Phone number can only contain numbers, spaces, dashes, and parentheses."}),0))||"Email"!==e||p(n,t))&&(function(e,n,t,r){return!!e.find((function(e){return e[n.toLowerCase()]===t.trim()}))&&(r({type:"error",message:"".concat(n,' "').concat(t.trim(),'" is already exists.')}),!0)}($,e,n,t)||t({type:"success",message:"".concat(e,' "').concat(n.trim(),'" is available.')}))}}),[$]);return(0,v.jsxs)(A,{onSubmit:function(e){e.preventDefault();var n=$.find((function(e){return e.name.toLowerCase()===S.toLowerCase()})),t=$.find((function(e){return e.phone===P}));if(!n&&!t){var a={id:(0,d.x0)(),name:S,phone:P,email:z};L((0,m.uK)(a)),y(""),B(""),_(""),r(null),i(null),h(null)}},children:[(0,v.jsx)(k,{labelTitle:"Name",type:"text",name:"name",value:S,onChange:function(e){return y(e.target.value)},onBlur:function(){return M("Name",S,r)},validationStatus:t,id:D.current,title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"}),(0,v.jsx)(U.Z,{fieldAlert:t}),(0,v.jsx)(k,{labelTitle:"Phone",type:"tel",name:"phone",value:P,onChange:function(e){return B(e.target.value)},onBlur:function(){return M("Phone number",P,i)},validationStatus:u,id:I.current,title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"}),(0,v.jsx)(U.Z,{fieldAlert:u}),(0,v.jsx)(k,{labelTitle:"Email",type:"email",name:"email",value:z,onChange:function(e){return _(e.target.value)},onBlur:function(){return M("Email",z,h)},validationStatus:g,id:F.current,title:"Email must be a valid email address, for example johndoe@example.com. It may contain letters, numbers, dots, hyphens and underscores, followed by an @ symbol, and ending with a domain name."}),(0,v.jsx)(U.Z,{fieldAlert:g}),(0,v.jsx)(R,{buttonText:"Add contact"})]})},w=t(6039),S=function(){var e=(0,s.useState)(""),n=(0,l.Z)(e,2),t=n[0],r=n[1],a=(0,s.useState)(""),o=(0,l.Z)(a,2),u=o[0],i=o[1],d=(0,s.useState)(null),m=(0,l.Z)(d,2),f=m[0],p=m[1],x=(0,s.useState)(null),b=(0,l.Z)(x,2),g=b[0],Z=b[1],S=(0,c.I0)();return(0,v.jsxs)(A,{onSubmit:function(e){e.preventDefault(),S((0,w.b4)({email:t,password:u})),r(""),i(""),p(null),Z(null)},children:[(0,v.jsx)(k,{labelTitle:"Email",type:"email",name:"email",value:t,onChange:function(e){return r(e.target.value)},onBlur:function(){return h("Email",t,p)},validationStatus:f}),(0,v.jsx)(U.Z,{fieldAlert:f}),(0,v.jsx)(k,{labelTitle:"Password",type:"password",name:"password",value:u,onChange:function(e){return i(e.target.value)},onBlur:function(){h("Password",u,Z)},validationStatus:g}),(0,v.jsx)(U.Z,{fieldAlert:g}),(0,v.jsx)(R,{buttonText:"Log in"})]})},y=function(){var e=(0,s.useState)(""),n=(0,l.Z)(e,2),t=n[0],r=n[1],a=(0,s.useState)(""),o=(0,l.Z)(a,2),u=o[0],i=o[1],d=(0,s.useState)(""),m=(0,l.Z)(d,2),f=m[0],p=m[1],x=(0,s.useState)(""),b=(0,l.Z)(x,2),g=b[0],Z=b[1],S=(0,s.useState)(null),y=(0,l.Z)(S,2),j=y[0],C=y[1],P=(0,s.useState)(null),B=(0,l.Z)(P,2),T=B[0],E=B[1],z=(0,s.useState)(null),_=(0,l.Z)(z,2),L=_[0],$=_[1],D=(0,s.useState)(null),I=(0,l.Z)(D,2),F=I[0],M=I[1],N=(0,c.I0)(),V=(0,c.v9)((function(e){return e.auth})),q=V.isLoading,H=V.error;return(0,v.jsxs)(A,{onSubmit:function(e){e.preventDefault(),f===g&&(N((0,w.z2)({name:t,email:u,password:f})),q||H||(r(""),i(""),p(""),Z(""),C(null),E(null),$(null),M(null)))},children:[(0,v.jsx)(k,{labelTitle:"Username",type:"text",name:"name",value:t,onChange:function(e){return r(e.target.value)},onBlur:function(){return h("Username",t,C)},validationStatus:j}),(0,v.jsx)(U.Z,{fieldAlert:j}),(0,v.jsx)(k,{labelTitle:"Email",type:"email",name:"email",value:u,onChange:function(e){return i(e.target.value)},onBlur:function(){return h("Email",u,E)},validationStatus:T}),(0,v.jsx)(U.Z,{fieldAlert:T}),(0,v.jsx)(k,{labelTitle:"Password",type:"password",name:"password",value:f,onChange:function(e){return p(e.target.value)},onBlur:function(){h("Password",f,$)},validationStatus:L}),(0,v.jsx)(U.Z,{fieldAlert:L}),(0,v.jsx)(k,{labelTitle:"Confirm Password",type:"password",name:"confirm",value:g,onChange:function(e){return Z(e.target.value)},onBlur:function(){h("Confirm Password",g,M,!0,f)},validationStatus:F}),(0,v.jsx)(U.Z,{fieldAlert:F}),(0,v.jsx)(R,{buttonText:"Register"})]})},j=t(168),C=t(6444),P=C.ZP.form(r||(r=(0,j.Z)(["\n  display: flex;\n  flex-direction: column;\n  min-width: 250px;\n  margin-bottom: 20px;\n"]))),A=function(e){var n=e.onSubmit,t=e.children;return(0,v.jsx)(P,{onSubmit:n,children:t})},B=C.ZP.label(a||(a=(0,j.Z)(["\n  color: ",";\n"])),(function(e){return e.theme.colors.label})),T=C.ZP.span(o||(o=(0,j.Z)(["\n  display: block;\n  margin-bottom: 5px;\n  font-size: 1.1em;\n  font-weight: bold;\n"]))),E=C.ZP.input(u||(u=(0,j.Z)(["\n  padding: 5px;\n  border-radius: 5px;\n  border: 2px solid\n    ",";\n  width: 100%;\n  box-sizing: border-box;\n"])),(function(e){var n=e.theme,t=e.validationStatus;switch(null===t||void 0===t?void 0:t.type){case"error":return"red";case"warning":return"orange";case"success":return"green";default:return n.colors.inputBorder}})),k=function(e){var n=e.labelTitle,t=e.type,r=e.name,a=e.value,o=e.onChange,u=e.onBlur,i=e.validationStatus,l=e.id,s=e.title;return(0,v.jsxs)(B,{children:[(0,v.jsx)(T,{children:n}),(0,v.jsx)(E,{type:t,name:r,value:a,onChange:o,onBlur:u,validationStatus:i,id:l,title:s,required:!0})]})},z=C.ZP.button(i||(i=(0,j.Z)(["\n  margin-top: 10px;\n  padding: 5px 10px;\n  border-radius: 5px;\n  border: none;\n  background-color: ",";\n  color: ",";\n  cursor: pointer;\n  width: 100%;\n  box-sizing: border-box;\n\n  &:hover {\n    background-color: ",";\n  }\n"])),(function(e){return e.theme.colors.buttonBackgroundDefault}),(function(e){return e.theme.colors.buttonText}),(function(e){return e.theme.colors.buttonBackgroundHover})),R=function(e){var n=e.buttonText;return(0,v.jsx)(z,{type:"submit",children:n})},U=t(8262)},8432:function(e,n,t){t.r(n);var r=t(6652),a=t(3230),o=t(3329);n.default=function(){return(0,o.jsx)(r.$0,{children:(0,o.jsxs)(r.W2,{children:[(0,o.jsx)(r.U3,{title:"Register new user"}),(0,o.jsx)(a.B2,{}),(0,o.jsx)(r.AV,{type:"register"})]})})}},5984:function(e,n,t){t.d(n,{x0:function(){return r}});var r=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(e)).reduce((function(e,n){return e+=(n&=63)<36?n.toString(36):n<62?(n-26).toString(36).toUpperCase():n>62?"-":"_"}),"")}}}]);
//# sourceMappingURL=432.ceadfc96.chunk.js.map