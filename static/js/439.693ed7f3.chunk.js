"use strict";(self.webpackChunkPhonebook_Frontend=self.webpackChunkPhonebook_Frontend||[]).push([[439],{7439:function(e,n,o){o.d(n,{t:function(){return E},l0:function(){return H},bY:function(){return re.Z},__:function(){return oe},U0:function(){return F},B2:function(){return k},Mm:function(){return te}});var a,t,r,d,i,c,s,m,u,l,p,h,g,f,b=o(9439),x=o(2791),S=o(9434),v=o(5984),y=o(9883),C=/^[a-zA-Z0-9_.-]+$/,M=/^[^-.].*[^-.]$/,Z=/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,8})+$/,w=/^\+?\d{6,12}$/,A=/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d.,-]*$/,P=function(e,n,o){return""===n.trim()&&(o({type:"warning",message:"".concat(e," field can't be empty")}),!0)},B=function(e,n){return e.trim().length<6||e.trim().length>30?(n({type:"error",message:"Name must be 6-30 characters long"}),!1):C.test(e.trim())?!!M.test(e.trim())||(n({type:"error",message:"Name cannot begin or end with a hyphen or a period"}),!1):(n({type:"error",message:"Name can only include letters, numbers, underscores, hyphens, and periods"}),!1)},T=function(e,n){return!!Z.test(e.trim())||(n({type:"error",message:"Email is not valid"}),!1)},I=function(e,n){return e.trim().length<6?(n({type:"error",message:"Password must be at least 6 characters long"}),!1):!!A.test(e.trim())||(n({type:"error",message:"Password must contain at least one letter, one digit, and can include periods, commas, and hyphens"}),!1)},G=function(e,n,o){return e!==n?(o({type:"error",message:"Password confirmation does not match"}),!1):n.trim().length<6?(o({type:"error",message:"Password must be at least 6 characters long"}),!1):!!A.test(n.trim())||(o({type:"error",message:"Password must contain at least one letter, one digit, and can include periods, commas, and hyphens"}),!1)},N=function(e,n,o){var a=arguments.length>3&&void 0!==arguments[3]&&arguments[3],t=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;P(e,n,o)||("Name"!==e||B(n,o))&&("Email"!==e||T(n,o))&&("Password"!==e||I(n,o))&&(a&&!G(n,t,o)||o({type:"success",message:"".concat(e," is valid")}))},j=(o(1615),[{name:"Afghanistan",code:"AF",phone:93},{name:"Aland Islands",code:"AX",phone:358},{name:"Albania",code:"AL",phone:355},{name:"Algeria",code:"DZ",phone:213},{name:"American Samoa",code:"AS",phone:1684},{name:"Andorra",code:"AD",phone:376},{name:"Angola",code:"AO",phone:244},{name:"Anguilla",code:"AI",phone:1264},{name:"Antarctica",code:"AQ",phone:672},{name:"Antigua and Barbuda",code:"AG",phone:1268},{name:"Argentina",code:"AR",phone:54},{name:"Armenia",code:"AM",phone:374},{name:"Aruba",code:"AW",phone:297},{name:"Australia",code:"AU",phone:61},{name:"Austria",code:"AT",phone:43},{name:"Azerbaijan",code:"AZ",phone:994},{name:"Bahamas",code:"BS",phone:1242},{name:"Bahrain",code:"BH",phone:973},{name:"Bangladesh",code:"BD",phone:880},{name:"Barbados",code:"BB",phone:1246},{name:"Belarus",code:"BY",phone:375},{name:"Belgium",code:"BE",phone:32},{name:"Belize",code:"BZ",phone:501},{name:"Benin",code:"BJ",phone:229},{name:"Bermuda",code:"BM",phone:1441},{name:"Bhutan",code:"BT",phone:975},{name:"Bolivia",code:"BO",phone:591},{name:"Bonaire, Sint Eustatius and Saba",code:"BQ",phone:599},{name:"Bosnia and Herzegovina",code:"BA",phone:387},{name:"Botswana",code:"BW",phone:267},{name:"Bouvet Island",code:"BV",phone:55},{name:"Brazil",code:"BR",phone:55},{name:"British Indian Ocean Territory",code:"IO",phone:246},{name:"Brunei Darussalam",code:"BN",phone:673},{name:"Bulgaria",code:"BG",phone:359},{name:"Burkina Faso",code:"BF",phone:226},{name:"Burundi",code:"BI",phone:257},{name:"Cambodia",code:"KH",phone:855},{name:"Cameroon",code:"CM",phone:237},{name:"Canada",code:"CA",phone:1},{name:"Cape Verde",code:"CV",phone:238},{name:"Cayman Islands",code:"KY",phone:1345},{name:"Central African Republic",code:"CF",phone:236},{name:"Chad",code:"TD",phone:235},{name:"Chile",code:"CL",phone:56},{name:"China",code:"CN",phone:86},{name:"Christmas Island",code:"CX",phone:61},{name:"Cocos (Keeling) Islands",code:"CC",phone:672},{name:"Colombia",code:"CO",phone:57},{name:"Comoros",code:"KM",phone:269},{name:"Congo",code:"CG",phone:242},{name:"Congo, Democratic Republic of the Congo",code:"CD",phone:242},{name:"Cook Islands",code:"CK",phone:682},{name:"Costa Rica",code:"CR",phone:506},{name:"Cote D'Ivoire",code:"CI",phone:225},{name:"Croatia",code:"HR",phone:385},{name:"Cuba",code:"CU",phone:53},{name:"Curacao",code:"CW",phone:599},{name:"Cyprus",code:"CY",phone:357},{name:"Czech Republic",code:"CZ",phone:420},{name:"Denmark",code:"DK",phone:45},{name:"Djibouti",code:"DJ",phone:253},{name:"Dominica",code:"DM",phone:1767},{name:"Dominican Republic",code:"DO",phone:1809},{name:"Ecuador",code:"EC",phone:593},{name:"Egypt",code:"EG",phone:20},{name:"El Salvador",code:"SV",phone:503},{name:"Equatorial Guinea",code:"GQ",phone:240},{name:"Eritrea",code:"ER",phone:291},{name:"Estonia",code:"EE",phone:372},{name:"Ethiopia",code:"ET",phone:251},{name:"Falkland Islands (Malvinas)",code:"FK",phone:500},{name:"Faroe Islands",code:"FO",phone:298},{name:"Fiji",code:"FJ",phone:679},{name:"Finland",code:"FI",phone:358},{name:"France",code:"FR",phone:33},{name:"French Guiana",code:"GF",phone:594},{name:"French Polynesia",code:"PF",phone:689},{name:"French Southern Territories",code:"TF",phone:262},{name:"Gabon",code:"GA",phone:241},{name:"Gambia",code:"GM",phone:220},{name:"Georgia",code:"GE",phone:995},{name:"Germany",code:"DE",phone:49},{name:"Ghana",code:"GH",phone:233},{name:"Gibraltar",code:"GI",phone:350},{name:"Greece",code:"GR",phone:30},{name:"Greenland",code:"GL",phone:299},{name:"Grenada",code:"GD",phone:1473},{name:"Guadeloupe",code:"GP",phone:590},{name:"Guam",code:"GU",phone:1671},{name:"Guatemala",code:"GT",phone:502},{name:"Guernsey",code:"GG",phone:44},{name:"Guinea",code:"GN",phone:224},{name:"Guinea-Bissau",code:"GW",phone:245},{name:"Guyana",code:"GY",phone:592},{name:"Haiti",code:"HT",phone:509},{name:"Heard Island and McDonald Islands",code:"HM",phone:0},{name:"Holy See (Vatican City State)",code:"VA",phone:39},{name:"Honduras",code:"HN",phone:504},{name:"Hong Kong",code:"HK",phone:852},{name:"Hungary",code:"HU",phone:36},{name:"Iceland",code:"IS",phone:354},{name:"India",code:"IN",phone:91},{name:"Indonesia",code:"ID",phone:62},{name:"Iran, Islamic Republic of",code:"IR",phone:98},{name:"Iraq",code:"IQ",phone:964},{name:"Ireland",code:"IE",phone:353},{name:"Isle of Man",code:"IM",phone:44},{name:"Israel",code:"IL",phone:972},{name:"Italy",code:"IT",phone:39},{name:"Jamaica",code:"JM",phone:1876},{name:"Japan",code:"JP",phone:81},{name:"Jersey",code:"JE",phone:44},{name:"Jordan",code:"JO",phone:962},{name:"Kazakhstan",code:"KZ",phone:7},{name:"Kenya",code:"KE",phone:254},{name:"Kiribati",code:"KI",phone:686},{name:"Korea, Democratic People's Republic of",code:"KP",phone:850},{name:"Korea, Republic of",code:"KR",phone:82},{name:"Kosovo",code:"XK",phone:383},{name:"Kuwait",code:"KW",phone:965},{name:"Kyrgyzstan",code:"KG",phone:996},{name:"Lao People's Democratic Republic",code:"LA",phone:856},{name:"Latvia",code:"LV",phone:371},{name:"Lebanon",code:"LB",phone:961},{name:"Lesotho",code:"LS",phone:266},{name:"Liberia",code:"LR",phone:231},{name:"Libyan Arab Jamahiriya",code:"LY",phone:218},{name:"Liechtenstein",code:"LI",phone:423},{name:"Lithuania",code:"LT",phone:370},{name:"Luxembourg",code:"LU",phone:352},{name:"Macao",code:"MO",phone:853},{name:"Macedonia, the Former Yugoslav Republic of",code:"MK",phone:389},{name:"Madagascar",code:"MG",phone:261},{name:"Malawi",code:"MW",phone:265},{name:"Malaysia",code:"MY",phone:60},{name:"Maldives",code:"MV",phone:960},{name:"Mali",code:"ML",phone:223},{name:"Malta",code:"MT",phone:356},{name:"Marshall Islands",code:"MH",phone:692},{name:"Martinique",code:"MQ",phone:596},{name:"Mauritania",code:"MR",phone:222},{name:"Mauritius",code:"MU",phone:230},{name:"Mayotte",code:"YT",phone:262},{name:"Mexico",code:"MX",phone:52},{name:"Micronesia, Federated States of",code:"FM",phone:691},{name:"Moldova, Republic of",code:"MD",phone:373},{name:"Monaco",code:"MC",phone:377},{name:"Mongolia",code:"MN",phone:976},{name:"Montenegro",code:"ME",phone:382},{name:"Montserrat",code:"MS",phone:1664},{name:"Morocco",code:"MA",phone:212},{name:"Mozambique",code:"MZ",phone:258},{name:"Myanmar",code:"MM",phone:95},{name:"Namibia",code:"NA",phone:264},{name:"Nauru",code:"NR",phone:674},{name:"Nepal",code:"NP",phone:977},{name:"Netherlands",code:"NL",phone:31},{name:"Netherlands Antilles",code:"AN",phone:599},{name:"New Caledonia",code:"NC",phone:687},{name:"New Zealand",code:"NZ",phone:64},{name:"Nicaragua",code:"NI",phone:505},{name:"Niger",code:"NE",phone:227},{name:"Nigeria",code:"NG",phone:234},{name:"Niue",code:"NU",phone:683},{name:"Norfolk Island",code:"NF",phone:672},{name:"Northern Mariana Islands",code:"MP",phone:1670},{name:"Norway",code:"NO",phone:47},{name:"Oman",code:"OM",phone:968},{name:"Pakistan",code:"PK",phone:92},{name:"Palau",code:"PW",phone:680},{name:"Palestinian Territory, Occupied",code:"PS",phone:970},{name:"Panama",code:"PA",phone:507},{name:"Papua New Guinea",code:"PG",phone:675},{name:"Paraguay",code:"PY",phone:595},{name:"Peru",code:"PE",phone:51},{name:"Philippines",code:"PH",phone:63},{name:"Pitcairn",code:"PN",phone:64},{name:"Poland",code:"PL",phone:48},{name:"Portugal",code:"PT",phone:351},{name:"Puerto Rico",code:"PR",phone:1787},{name:"Qatar",code:"QA",phone:974},{name:"Reunion",code:"RE",phone:262},{name:"Romania",code:"RO",phone:40},{name:"Russian Federation",code:"RU",phone:7},{name:"Rwanda",code:"RW",phone:250},{name:"Saint Barthelemy",code:"BL",phone:590},{name:"Saint Helena",code:"SH",phone:290},{name:"Saint Kitts and Nevis",code:"KN",phone:1869},{name:"Saint Lucia",code:"LC",phone:1758},{name:"Saint Martin",code:"MF",phone:590},{name:"Saint Pierre and Miquelon",code:"PM",phone:508},{name:"Saint Vincent and the Grenadines",code:"VC",phone:1784},{name:"Samoa",code:"WS",phone:684},{name:"San Marino",code:"SM",phone:378},{name:"Sao Tome and Principe",code:"ST",phone:239},{name:"Saudi Arabia",code:"SA",phone:966},{name:"Senegal",code:"SN",phone:221},{name:"Serbia",code:"RS",phone:381},{name:"Serbia and Montenegro",code:"CS",phone:381},{name:"Seychelles",code:"SC",phone:248},{name:"Sierra Leone",code:"SL",phone:232},{name:"Singapore",code:"SG",phone:65},{name:"St Martin",code:"SX",phone:721},{name:"Slovakia",code:"SK",phone:421},{name:"Slovenia",code:"SI",phone:386},{name:"Solomon Islands",code:"SB",phone:677},{name:"Somalia",code:"SO",phone:252},{name:"South Africa",code:"ZA",phone:27},{name:"South Georgia and the South Sandwich Islands",code:"GS",phone:500},{name:"South Sudan",code:"SS",phone:211},{name:"Spain",code:"ES",phone:34},{name:"Sri Lanka",code:"LK",phone:94},{name:"Sudan",code:"SD",phone:249},{name:"Suriname",code:"SR",phone:597},{name:"Svalbard and Jan Mayen",code:"SJ",phone:47},{name:"Swaziland",code:"SZ",phone:268},{name:"Sweden",code:"SE",phone:46},{name:"Switzerland",code:"CH",phone:41},{name:"Syrian Arab Republic",code:"SY",phone:963},{name:"Taiwan, Province of China",code:"TW",phone:886},{name:"Tajikistan",code:"TJ",phone:992},{name:"Tanzania, United Republic of",code:"TZ",phone:255},{name:"Thailand",code:"TH",phone:66},{name:"Timor-Leste",code:"TL",phone:670},{name:"Togo",code:"TG",phone:228},{name:"Tokelau",code:"TK",phone:690},{name:"Tonga",code:"TO",phone:676},{name:"Trinidad and Tobago",code:"TT",phone:1868},{name:"Tunisia",code:"TN",phone:216},{name:"Turkey",code:"TR",phone:90},{name:"Turkmenistan",code:"TM",phone:7370},{name:"Turks and Caicos Islands",code:"TC",phone:1649},{name:"Tuvalu",code:"TV",phone:688},{name:"Uganda",code:"UG",phone:256},{name:"Ukraine",code:"UA",phone:380},{name:"United Arab Emirates",code:"AE",phone:971},{name:"United Kingdom",code:"GB",phone:44},{name:"United States",code:"US",phone:1},{name:"United States Minor Outlying Islands",code:"UM",phone:1},{name:"Uruguay",code:"UY",phone:598},{name:"Uzbekistan",code:"UZ",phone:998},{name:"Vanuatu",code:"VU",phone:678},{name:"Venezuela",code:"VE",phone:58},{name:"Viet Nam",code:"VN",phone:84},{name:"Virgin Islands, British",code:"VG",phone:1284},{name:"Virgin Islands, U.s.",code:"VI",phone:1340},{name:"Wallis and Futuna",code:"WF",phone:681},{name:"Western Sahara",code:"EH",phone:212},{name:"Yemen",code:"YE",phone:967},{name:"Zambia",code:"ZM",phone:260},{name:"Zimbabwe",code:"ZW",phone:263}]),L=o(3329),E=function(){var e=(0,x.useState)(null),n=(0,b.Z)(e,2),o=n[0],a=n[1],t=(0,x.useState)(null),r=(0,b.Z)(t,2),d=r[0],i=r[1],c=(0,x.useState)(null),s=(0,b.Z)(c,2),m=s[0],u=s[1],l=(0,x.useState)(""),p=(0,b.Z)(l,2),h=p[0],g=p[1],f=(0,x.useState)(""),C=(0,b.Z)(f,2),M=C[0],Z=C[1],A=(0,x.useState)(""),B=(0,b.Z)(A,2),I=B[0],G=B[1],N=(0,S.v9)(y.Af),E=(0,x.useRef)((0,v.x0)()),R=(0,x.useRef)((0,v.x0)()),F=(0,x.useRef)((0,v.x0)()),k=(0,x.useRef)(null),K=(0,x.useState)(j[235]),D=(0,b.Z)(K,2),U=D[0],z=D[1],O=(0,x.useState)(""),V=(0,b.Z)(O,2),J=V[0],W=V[1],Y=(0,x.useState)(!1),Q=(0,b.Z)(Y,2),q=Q[0],X=Q[1],$=(0,S.I0)(),_=function(){X(!0)},ee=function(){return X(!1)},ne=function(e){k.current&&!k.current.contains(e.target)&&X(!1)};(0,x.useEffect)((function(){return document.addEventListener("mousedown",ne),function(){document.removeEventListener("mousedown",ne)}}),[]);var ae=J?j.filter((function(e){return e.name.toLowerCase().includes(J)})):j,de=(0,x.useMemo)((function(){return function(e,n,o){var a,t;P(e,n,o)||("Name"!==e||function(e,n){return!(e.trim().length<1||e.trim().length>100)||(n({type:"error",message:"Name must be at least 3 characters long"}),!1)}(n,o))&&("Phone"!==e||(a=n,t=o,w.test(a.trim())||(t({type:"error",message:"Phone number can only contain numbers, spaces, dashes, and parentheses"}),0)))&&("Email"!==e||T(n,o))&&(function(e,n,o,a){return!!e.find((function(e){return e[n.toLowerCase()]===o.trim()}))&&(a({type:"error",message:"".concat(n,' "').concat(o.trim(),'" is already exists')}),!0)}(N,e,n,o)||o({type:"success",message:"".concat(e,' "').concat(n.trim(),'" is available.')}))}}),[N]);return(0,L.jsxs)(H,{onSubmit:function(e){e.preventDefault();var n=N.find((function(e){return e.name.toLowerCase()===h.toLowerCase()})),o=N.find((function(e){return e.phone===M}));if(!n&&!o){var t={name:h,phone:"+".concat(U.phone).concat(M),email:I};$((0,y.uK)(t)),g(""),Z(""),G(""),a(null),i(null),u(null)}},children:[(0,L.jsx)(oe,{id:E.current,labelTitle:"Name",type:"text",name:"name",value:h,onFocus:ee,onChange:function(e){return g(e.target.value)},onBlur:function(){return de("Name",h,a)},title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",validationStatus:o,maxLength:100}),(0,L.jsx)(re.Z,{fieldAlert:o}),(0,L.jsx)(oe,{id:R.current,labelTitle:"Phone",type:"tel",name:"phone",value:M,onFocus:ee,onChange:function(e){var n=e.target.value.replace(/\D/g,"");Z(n)},onBlur:function(){return de("Phone",M,i)},title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",validationStatus:d,maxLength:12,handleTogglerMousedown:function(e){X(!q)},handleTogglerFocus:_,countrySelectorRef:k,selectedCountry:U,selectOption:function(e){z(e),X(!1),W("")},countrySearchQuery:J,isActive:q,filteredCountries:ae,searchCountry:function(e){W(e.target.value.toLowerCase())},handleFocus:_}),(0,L.jsx)(re.Z,{fieldAlert:d}),(0,L.jsx)(oe,{id:F.current,labelTitle:"Email",type:"email",name:"email",value:I,onFocus:ee,onChange:function(e){return G(e.target.value)},onBlur:function(){return de("Email",I,u)},title:"Email must be a valid email address, for example johndoe@example.com. It may contain letters, numbers, dots, hyphens and underscores, followed by an @ symbol, and ending with a domain name.",validationStatus:m,maxLength:100}),(0,L.jsx)(re.Z,{fieldAlert:m}),(0,L.jsx)(te,{buttonText:"Add contact"})]})},R=o(6039),F=function(){var e=(0,x.useState)(""),n=(0,b.Z)(e,2),o=n[0],a=n[1],t=(0,x.useState)(""),r=(0,b.Z)(t,2),d=r[0],i=r[1],c=(0,x.useState)(null),s=(0,b.Z)(c,2),m=s[0],u=s[1],l=(0,x.useState)(null),p=(0,b.Z)(l,2),h=p[0],g=p[1],f=(0,S.I0)();return(0,L.jsxs)(H,{onSubmit:function(e){e.preventDefault(),f((0,R.b4)({email:o,password:d})),a(""),i(""),u(null),g(null)},children:[(0,L.jsx)(oe,{labelTitle:"Email",type:"email",name:"email",value:o,onChange:function(e){return a(e.target.value)},onBlur:function(){return N("Email",o,u)},validationStatus:m}),(0,L.jsx)(re.Z,{fieldAlert:m}),(0,L.jsx)(oe,{labelTitle:"Password",type:"password",name:"password",value:d,onChange:function(e){return i(e.target.value)},onBlur:function(){N("Password",d,g)},validationStatus:h}),(0,L.jsx)(re.Z,{fieldAlert:h}),(0,L.jsx)(te,{buttonText:"Log in"})]})},k=function(){var e=(0,x.useState)(""),n=(0,b.Z)(e,2),o=n[0],a=n[1],t=(0,x.useState)(""),r=(0,b.Z)(t,2),d=r[0],i=r[1],c=(0,x.useState)(""),s=(0,b.Z)(c,2),m=s[0],u=s[1],l=(0,x.useState)(""),p=(0,b.Z)(l,2),h=p[0],g=p[1],f=(0,x.useState)(null),v=(0,b.Z)(f,2),y=v[0],C=v[1],M=(0,x.useState)(null),Z=(0,b.Z)(M,2),w=Z[0],A=Z[1],P=(0,x.useState)(null),B=(0,b.Z)(P,2),T=B[0],I=B[1],G=(0,x.useState)(null),j=(0,b.Z)(G,2),E=j[0],F=j[1],k=(0,S.I0)(),K=(0,S.v9)((function(e){return e.auth})),D=K.isLoading,U=K.error;(0,x.useEffect)((function(){D||U||(a(""),i(""),u(""),g(""),C(null),A(null),I(null),F(null))}),[D,U]);return(0,L.jsxs)(H,{onSubmit:function(e){e.preventDefault(),m===h&&k((0,R.z2)({name:o,email:d,password:m}))},children:[(0,L.jsx)(oe,{labelTitle:"Name",type:"text",name:"name",value:o,onChange:function(e){return a(e.target.value)},onBlur:function(){return N("Name",o,C)},validationStatus:y}),(0,L.jsx)(re.Z,{fieldAlert:y}),(0,L.jsx)(oe,{labelTitle:"Email",type:"email",name:"email",value:d,onChange:function(e){return i(e.target.value)},onBlur:function(){return N("Email",d,A)},validationStatus:w}),(0,L.jsx)(re.Z,{fieldAlert:w}),(0,L.jsx)(oe,{labelTitle:"Password",type:"password",name:"password",value:m,onChange:function(e){return u(e.target.value)},onBlur:function(){N("Password",m,I)},validationStatus:T}),(0,L.jsx)(re.Z,{fieldAlert:T}),(0,L.jsx)(oe,{labelTitle:"Confirm Password",type:"password",name:"confirm",value:h,onChange:function(e){return g(e.target.value)},onBlur:function(){N("Confirm Password",h,F,!0,m)},validationStatus:E}),(0,L.jsx)(re.Z,{fieldAlert:E}),(0,L.jsx)(te,{buttonText:"Register"})]})},K=o(168),D=o(6444),U=D.ZP.form(a||(a=(0,K.Z)(["\n  display: flex;\n  flex-direction: column;\n  min-width: 250px;\n  margin-bottom: 20px;\n"]))),H=function(e){var n=e.onSubmit,o=e.children;return(0,L.jsx)(U,{onSubmit:n,children:o})},z=D.ZP.div(t||(t=(0,K.Z)(["\n  position: relative;\n"]))),O=D.ZP.label(r||(r=(0,K.Z)(["\n  color: ",";\n"])),(function(e){return e.theme.colors.label})),V=D.ZP.span(d||(d=(0,K.Z)(["\n  display: block;\n  margin-bottom: 5px;\n  font-size: 1.1em;\n  font-weight: bold;\n"]))),J=D.ZP.input(i||(i=(0,K.Z)(["\n  padding: 5px;\n  border-radius: 5px;\n  outline: none;\n  border: none;\n  box-shadow: 0 0 0 2px\n    ",";\n  width: 100%;\n  box-sizing: border-box;\n  padding-left: ",";\n"])),(function(e){var n=e.theme,o=e.validationStatus;switch(null===o||void 0===o?void 0:o.type){case"error":return"red";case"warning":return"orange";case"success":return"green";default:return n.colors.inputBorder}}),(function(e){return"tel"===e.type?"115px":"5px"})),W=D.ZP.div(c||(c=(0,K.Z)(["\n  line-height: 1.15;\n  position: absolute;\n  z-index: 1;\n  bottom: 0;\n  border-top-left-radius: 5px;\n  border-bottom-left-radius: 5px;\n  background-color: #ffffff;\n  border: 0px solid transparent;\n\n  box-sizing: border-box;\n"]))),Y=D.ZP.div(s||(s=(0,K.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 110px;\n  padding: 0 5px;\n  padding: 5px;\n  text-align: center;\n  cursor: pointer;\n\n  svg {\n    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.1);\n  }\n\n  span,\n  svg {\n    pointer-events: none;\n    user-select: none;\n  }\n"]))),Q=D.ZP.div(m||(m=(0,K.Z)(["\n  position: absolute;\n  top: 150%;\n  width: 300%;\n  background-color: #ffffff;\n  display: ",";\n  border-radius: 5px;\n  outline: none;\n  border: none;\n  box-shadow: 0 0 0 2px ",";\n  /* padding: 2px; */\n"])),(function(e){return e.isActive?"block":"none"}),(function(e){return e.theme.colors.inputBorder})),q=D.ZP.input(u||(u=(0,K.Z)(["\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n  width: 100%;\n  padding: 5px;\n  font-size: 1.1rem;\n  border: none;\n  outline: none;\n\n  &:focus {\n    box-shadow: 0 0 0 2px ",";\n  }\n"])),(function(e){return e.theme.colors.mainTextAccent})),X=D.ZP.div(l||(l=(0,K.Z)(["\n  padding: 2px;\n"]))),$=D.ZP.ul(p||(p=(0,K.Z)(["\n  max-height: 400px;\n  overflow: overlay;\n\n  &::-webkit-scrollbar {\n    width: 0.6rem;\n    border-radius: 5px;\n    padding: 2px;\n  }\n\n  &::-webkit-scrollbar-thumb {\n    height: 10%;\n    background-color: #bcbcbc; /* \u0422\u0435\u043c\u043d\u0456\u0448\u0438\u0439 \u043a\u043e\u043b\u0456\u0440 \u0434\u043b\u044f \u0431\u0456\u043b\u044c\u0448\u043e\u0457 \u0432\u0438\u0434\u0438\u043c\u043e\u0441\u0442\u0456 */\n    border-radius: 5px; /* \u041f\u043b\u0430\u0432\u043d\u0456 \u043a\u0443\u0442\u0438 \u0434\u043b\u044f \u0442\u0443\u043c\u0431\u0438 */\n    &:hover {\n      background-color: #a0a0a0; /* \u0417\u043c\u0456\u043d\u0430 \u043a\u043e\u043b\u044c\u043e\u0440\u0443 \u043f\u0440\u0438 \u043d\u0430\u0432\u0435\u0434\u0435\u043d\u043d\u0456 */\n    }\n  }\n"]))),_=D.ZP.li(h||(h=(0,K.Z)(["\n  padding: 1rem;\n  display: flex;\n  justify-content: space-between;\n  cursor: pointer;\n  display: ",";\n\n  svg {\n    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.1);\n  }\n\n  &:not(:last-child) {\n    border-bottom: 0.1rem solid #eee;\n  }\n\n  &:hover {\n    background-color: lightcyan;\n  }\n"])),(function(e){return e.isHidden?"none":"flex"})),ee=D.ZP.span(g||(g=(0,K.Z)(["\n  margin-left: 0.4rem;\n"]))),ne=o(2711),oe=function(e){var n=e.id,o=e.labelTitle,a=e.type,t=e.name,r=e.value,d=e.onFocus,i=e.onChange,c=e.onBlur,s=e.title,m=e.validationStatus,u=e.maxLength,l=e.handleTogglerMousedown,p=e.handleTogglerFocus,h=e.selectedCountry,g=e.selectOption,f=e.countrySearchQuery,b=e.isActive,x=e.filteredCountries,S=e.searchCountry,v=e.countrySelectorRef;return(0,L.jsxs)(z,{children:["tel"===a&&(0,L.jsxs)(W,{ref:v,validationStatus:m,children:[(0,L.jsxs)(Y,{tabIndex:"0",onMouseDown:l,onFocus:p,isActive:b,children:[(0,L.jsx)(ne.JO,{icon:"flag:".concat(h.code.toLowerCase(),"-4x3")}),(0,L.jsxs)("span",{children:["+",h.phone]})]}),(0,L.jsxs)(Q,{isActive:b,children:[(0,L.jsx)(q,{type:"text",placeholder:"Search Country Name",value:f,onChange:S}),(0,L.jsx)(X,{children:(0,L.jsx)($,{children:x.map((function(e){return(0,L.jsxs)(_,{onClick:function(){return g(e)},children:[(0,L.jsxs)("div",{children:[(0,L.jsx)(ne.JO,{icon:"flag:".concat(e.code.toLowerCase(),"-4x3")}),(0,L.jsx)(ee,{children:e.name})]}),(0,L.jsxs)("strong",{children:["+",e.phone]})]},e.code)}))})})]})]}),(0,L.jsxs)(O,{children:[(0,L.jsx)(V,{children:o}),(0,L.jsx)(J,{id:n,type:a,name:t,value:r,onFocus:d,onChange:i,onBlur:c,title:s,validationStatus:m,maxLength:u,required:!0})]})]})},ae=D.ZP.button(f||(f=(0,K.Z)(["\n  margin-top: 10px;\n  padding: 5px 10px;\n  border-radius: 5px;\n  border: none;\n  background-color: ",";\n  color: ",";\n  cursor: pointer;\n  width: 100%;\n  box-sizing: border-box;\n\n  &:hover {\n    background-color: ",";\n  }\n"])),(function(e){return e.theme.colors.buttonBackgroundDefault}),(function(e){return e.theme.colors.buttonText}),(function(e){return e.theme.colors.buttonBackgroundHover})),te=function(e){var n=e.buttonText;return(0,L.jsx)(ae,{type:"submit",children:n})},re=o(8262)}}]);
//# sourceMappingURL=439.693ed7f3.chunk.js.map