(this["webpackJsonpecommerce-front"]=this["webpackJsonpecommerce-front"]||[]).push([[0],{18:function(e,t,a){e.exports=a.p+"static/media/menu.99a849c1.svg"},28:function(e,t,a){e.exports=a.p+"static/media/arrow.ae427edb.svg"},31:function(e,t,a){e.exports=a(55)},54:function(e,t,a){},55:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(17),o=a.n(c),l=a(2),s=a(10),i=a(7),m=a(3),u=a(1),d="http://localhost:8000/api",p=function(e){if("undefined"!==typeof window)return localStorage.removeItem("jwt"),e(),fetch("".concat(d,"/signout"),{method:"GET"}).then((function(e){console.log("signout",e)})).catch((function(e){console.log(e)}))},f=function(){return"undefined"!=typeof window&&(!!localStorage.getItem("jwt")&&JSON.parse(localStorage.getItem("jwt")))},g=function(){return"undefined"!==typeof window&&localStorage.getItem("cart")?JSON.parse(localStorage.getItem("cart")).length:0},E=a(18),h=a.n(E),b=function(e,t){return e.location.pathname===t?{color:"black",background:"#ffffff"}:{color:"#ffffff"}},v=Object(s.g)((function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:e.move},r.a.createElement("ul",{className:"nav nav-tabs bg-success",style:{display:"block",width:"100%",borderBottom:"0px"},onClick:e.onClick},r.a.createElement("li",{className:"nav-item"},r.a.createElement(l.b,{className:"nav-link",to:"/",style:b(e.history,"/")},"Home")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(l.b,{className:"nav-link",to:"/shop",style:b(e.history,"/shop")},"Plantation")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(l.b,{className:"nav-link",to:"/card",style:b(e.history,"/card")},"Basket",r.a.createElement("sup",null,r.a.createElement("small",{className:"cart-badge"},g())))),f()&&0===f().user.role&&r.a.createElement("li",{className:"nav-item"},r.a.createElement(l.b,{className:"nav-link",to:"/user/dashboard",style:b(e.history,"/user/dashboard")},"Dashboard")),f()&&1===f().user.role&&r.a.createElement("li",{className:"nav-item"},r.a.createElement(l.b,{className:"nav-link",to:"/admin/dashboard",style:b(e.history,"/admin/dashboard")},"Dashboard")),!f()&&r.a.createElement(n.Fragment,null,r.a.createElement("li",{className:"nav-item"},r.a.createElement(l.b,{className:"nav-link",to:"/signin",style:b(e.history,"/signin")},"Login")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(l.b,{className:"nav-link",to:"/signup",style:b(e.history,"/signup")},"Signup"))),f()&&r.a.createElement("div",null,r.a.createElement("li",{className:"nav-item"},r.a.createElement("span",{className:"nav-link",style:{cursor:"pointer",color:"#ffffff"},onClick:function(){return p((function(){e.history.push("/")}))}},"Signout"))))))}));var N=Object(s.g)((function(e){var t=Object(n.useState)(!1),a=Object(u.a)(t,2),c=(a[0],a[1],Object(n.useState)("mobile-menu")),o=Object(u.a)(c,2),s=o[0],i=o[1],m=e.history,d=function(e,t){return e.location.pathname===t?{color:"black",background:"#ffffff",border:"1px solid white"}:{color:"#ffffff"}};return r.a.createElement(r.a.Fragment,null,r.a.createElement(v,{move:s,onClick:function(){return i("mobile-menu")}}),r.a.createElement("div",{style:{display:"flex",justifyContent:"space-between",background:"#28A745",height:"43px"}},r.a.createElement("div",{className:"logo"},"wetreenow!"),r.a.createElement("ul",{className:"nav nav-tabs bg-success desktop-only"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(l.b,{className:"nav-link",to:"/",style:d(m,"/")},"Home")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(l.b,{className:"nav-link",to:"/shop",style:d(m,"/shop")},"Plantation")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(l.b,{className:"nav-link",to:"/card",style:d(m,"/card")},"Basket"," ",r.a.createElement("sup",null,r.a.createElement("small",{className:"cart-badge"},g())))),f()&&0===f().user.role&&r.a.createElement("li",{className:"nav-item"},r.a.createElement(l.b,{className:"nav-link",to:"/user/dashboard",style:d(m,"/user/dashboard")},"Dashboard")),f()&&1===f().user.role&&r.a.createElement("li",{className:"nav-item"},r.a.createElement(l.b,{className:"nav-link",to:"/admin/dashboard",style:d(m,"/admin/dashboard")},"Dashboard")),!f()&&r.a.createElement(n.Fragment,null,r.a.createElement("li",{className:"nav-item"},r.a.createElement(l.b,{className:"nav-link",to:"/signin",style:d(m,"/signin")},"Login")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(l.b,{className:"nav-link",to:"/signup",style:d(m,"/signup")},"Signup"))),f()&&r.a.createElement("div",null,r.a.createElement("li",{className:"nav-item"},r.a.createElement("span",{className:"nav-link",style:{cursor:"pointer",color:"#ffffff"},onClick:function(){return p((function(){m.push("/")}))}},"Signout")))),r.a.createElement("div",{className:"hamburger",onClick:function(){return i("mobile-menu move")}},r.a.createElement("img",{src:h.a,className:"icon"}))))})),y=function(e){var t=e.title,a=void 0===t?"Title":t,n=e.description,c=void 0===n?"Description":n,o=e.children,l=e.className;return r.a.createElement("div",null,r.a.createElement(N,null),r.a.createElement("div",{className:"jumbotron"},r.a.createElement("h2",null,a),r.a.createElement("p",{className:"lead"},c)),r.a.createElement("div",{className:l},o))},j=function(){var e=Object(n.useState)({name:"",email:"",password:"",error:"",success:!1}),t=Object(u.a)(e,2),a=t[0],c=t[1],o=a.name,s=a.email,p=a.password,f=a.error,g=a.success,E=function(e){return function(t){c(Object(m.a)({},a,Object(i.a)({error:!1},e,t.target.value)))}},h=function(e){var t;console.log("click submit happened"),e.preventDefault(),c(Object(m.a)({},a,{error:!1})),(t={name:o,email:s,password:p},console.log("signup!!!!!",t.name,t.email,t.password),fetch("".concat(d,"/signup"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return console.log("response from fetch/signup: ",e),e.json()})).catch((function(e){console.log(e)}))).then((function(e){console.log("data in clickSubmit: ",e),e.error?(console.log("submit error: ",e.error),c(Object(m.a)({},a,{error:e.error,success:!1}))):c(Object(m.a)({},a,{name:"",email:"",password:"",error:"",success:!0}))}))};return r.a.createElement(y,{title:"Singup",description:"Signup and plant the trees with wetreenow!",className:"container col-md-4 offset-md-4"},r.a.createElement("div",{className:"alert alert-info",style:{display:g?"":"none"}},"New account is created. Please ",r.a.createElement(l.b,{to:"/signin"}," Signin")),r.a.createElement("div",{className:"alert alert-danger",style:{display:f?"":"none"}},f),r.a.createElement("form",null,r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{className:"text-muted"},"Name"),r.a.createElement("input",{onChange:E("name"),type:"text",className:"form-control",value:o})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{className:"text-muted"},"Email"),r.a.createElement("input",{onChange:E("email"),type:"email",className:"form-control",value:s})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{className:"text-muted"},"Password"),r.a.createElement("input",{onChange:E("password"),type:"password",className:"form-control",value:p})),r.a.createElement("button",{onClick:h,className:"btn btn-primary"},"Submit")))},O=function(){var e=Object(n.useState)({email:"adiadiadi@adi.com",password:"adiadi1",error:"",loading:!1,redirectToReferrer:!1}),t=Object(u.a)(e,2),a=t[0],c=t[1],o=a.email,l=a.password,p=a.error,g=a.loading,E=a.redirectToReferrer,h=f().user,b=function(e){return function(t){c(Object(m.a)({},a,Object(i.a)({error:!1},e,t.target.value)))}},v=function(e){console.log("click submit happened"),e.preventDefault(),c(Object(m.a)({},a,{error:!1,loading:!0})),function(e){return console.log("signin!!!!!",e),fetch("".concat(d,"/signin"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return console.log("response from fetch/signin: ",e),e.json()})).catch((function(e){console.log(e)}))}({email:o,password:l}).then((function(e){console.log("data in clickSubmit: ",e),e.error?(console.log("submit error: ",e.error),c(Object(m.a)({},a,{error:e.error,loading:!1}))):function(e,t){"undefined"!==typeof window&&(localStorage.setItem("jwt",JSON.stringify(e)),t())}(e,(function(){c(Object(m.a)({},a,{redirectToReferrer:!0}))}))}))};return r.a.createElement(y,{title:"Login",description:"Login and change the planet!",className:"container col-md-4 offset-md-4"},g&&r.a.createElement("div",{className:"alert alert-info"},r.a.createElement("h2",null,"Loading...")),r.a.createElement("div",{className:"alert alert-danger",style:{display:p?"":"none"}},p),r.a.createElement("form",null,r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{className:"text-muted"},"Email"),r.a.createElement("input",{onChange:b("email"),type:"email",className:"form-control",value:o})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{className:"text-muted"},"Password"),r.a.createElement("input",{onChange:b("password"),type:"password",className:"form-control",value:l})),r.a.createElement("button",{onClick:v,className:"btn btn-primary"},"Submit")),E?h&&1===h.role?r.a.createElement(s.a,{to:"/admin/dashboard"}):r.a.createElement(s.a,{to:"/user/dashboard"}):f()?r.a.createElement(s.a,{to:"/"}):void 0)},k=a(26),S=a.n(k),w=function(e){return fetch("".concat(d,"/products?sortBy=").concat(e,"&order=desc&limit=4"),{method:"GET"}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))},C=function(){return fetch("".concat(d,"/categories"),{method:"GET"}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))},x=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};console.log("createFilteredProducts!!!!!");var n={limit:t,skip:e,filters:a};return fetch("".concat(d,"/products/by/search/"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(n)}).then((function(e){return console.log("response from fetch/products/by/search/: ",e),e.json()})).catch((function(e){console.log(e)}))},P=function(e){var t=e.item,a=e.url;return r.a.createElement("div",{className:"search-product-img-container"},r.a.createElement("img",{src:"".concat(d,"/").concat(a,"/photo/").concat(t._id),alt:t.name,className:"mb-3",style:{height:"100%",width:"100%",objectFit:"cover"}}))},T=a(27),I=a.n(T),A=function(e){var t=e.product,a=e.showViewProductButton,c=void 0===a||a,o=e.showAddToCartButton,i=void 0===o||o,d=e.cartUpdate,p=void 0!==d&&d,f=(e.showRemoveProductButton,e.setRun),g=void 0===f?function(e){return e}:f,E=e.run,h=void 0===E?void 0:E,b=Object(n.useState)(!1),v=Object(u.a)(b,2),N=v[0],y=v[1],j=Object(n.useState)(t.count),O=Object(u.a)(j,2),k=O[0],S=O[1],w=function(){!function(e,t){var a=[];"undefined"!==typeof window&&(localStorage.getItem("cart")&&(a=JSON.parse(localStorage.getItem("cart"))),a.push(Object(m.a)({},e,{count:1})),a=Array.from(new Set(a.map((function(e){return e._id})))).map((function(e){return a.find((function(t){return t._id===e}))})),localStorage.setItem("cart",JSON.stringify(a)),t())}(t,(function(){y(!0)}))},C=function(e){return function(t){g(!h),S(t.target.value<1?1:t.target.value),t.target.value>=1&&function(e,t){var a=[];"undefined"!==typeof window&&(localStorage.getItem("cart")&&(a=JSON.parse(localStorage.getItem("cart"))),a.map((function(n,r){n._id===e&&(a[r].count=t)})),localStorage.setItem("cart",JSON.stringify(a)))}(e,t.target.value)}};return r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-header name"},t.name),r.a.createElement("div",{className:"card-body"},function(e){if(e)return console.log("shouldRedirect true"),r.a.createElement(s.a,{to:"/cart"})}(N),r.a.createElement(P,{item:t,url:"product"}),r.a.createElement("p",{className:"lead mt-2"},t.description.substring(0,100)),r.a.createElement("p",{className:"black-10"},"\u20ac",t.price),r.a.createElement("p",{className:"black-9"},"Category: ",t.category&&t.category.name),r.a.createElement("p",{className:"black-8"},"Added ",I()(t.createdAt).fromNow()),t.quantity>0?r.a.createElement("span",{className:"badge badge-primary badge-pill"},"In Stock"):r.a.createElement("span",null,"Out Of Stock"),r.a.createElement("br",null),function(e){return e&&r.a.createElement(l.b,{to:"/product/".concat(t._id),className:"mr-1"},r.a.createElement("button",{className:"btn btn-outline-primary mr-2"},"View Product"))}(c),function(e){return e&&r.a.createElement("button",{onClick:w,className:"btn btn-outline-primary mt-2 mb-2"},"Add to card")}(i),(console.log("in show remove button"),!i&&r.a.createElement("button",{onClick:function(){!function(e){console.log("in removeItem productId, count: ",e);var t=[];"undefined"!==typeof window&&(localStorage.getItem("cart")&&(t=JSON.parse(localStorage.getItem("cart"))),t.map((function(a,n){a._id===e&&t.splice(n,1)})),localStorage.setItem("cart",JSON.stringify(t)))}(t._id),g(!h)},className:"btn btn-outline-danger mt-2 mb-2"},"Remove Product")),p&&r.a.createElement("div",null,r.a.createElement("div",{className:"input-group mb-3"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("span",{className:"input-group-text"},"Adjust Quantity"),r.a.createElement("input",{type:"number",className:"form-control",value:k,onChange:C(t._id)}))))))},_=function(){var e=Object(n.useState)({categories:[],category:"",search:"",results:[],searched:!1}),t=Object(u.a)(e,2),a=t[0],c=t[1],o=a.categories,l=a.category,s=a.search,p=a.results,f=a.searched;Object(n.useEffect)((function(){C().then((function(e){e.error?console.log(e.error):c(Object(m.a)({},e,{categories:e}))}))}),[]);var g=function(){console.log(s,l),s&&function(e){var t=S.a.stringify(e);return console.log("query: ",t),fetch("".concat(d,"/products/search?").concat(t),{method:"GET"}).then((function(e){return console.log("response from products!!!: ",e),e.json()})).catch((function(e){return console.log(e)}))}({search:s||void 0,category:l}).then(a).then((function(e){e.error?console.log(e.error):c(Object(m.a)({},a,{results:e,searched:!0}))}))},E=function(e){e.preventDefault(),g()},h=function(e){return function(t){var n;c(Object(m.a)({},a,(n={},Object(i.a)(n,e,t.target.value),Object(i.a)(n,"searched",!1),n)))}},b=function(e,t){return e&&t.length>0?"Found ".concat(t.length," products"):e&&t.length<1?"No products found":void 0};return r.a.createElement("div",{className:"search-container"},r.a.createElement("div",{className:"search-bar"},r.a.createElement("form",{onSubmit:E},r.a.createElement("span",{className:"input-group-text"},r.a.createElement("div",{className:"input-group input-group-lg"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("select",{className:"btn mr-2",onChange:h("category")},r.a.createElement("option",{value:"All"},"Pick Category"),o.map((function(e,t){return r.a.createElement("option",{key:t,value:e._id},e.name)})))),r.a.createElement("input",{type:"search",className:"form-control",onChange:h("search"),placeholder:"Search by name"})),r.a.createElement("div",{className:"btn input-group-append",style:{border:"none"}},r.a.createElement("button",{className:"btn input-group-text"},"Search"))))),r.a.createElement("div",{className:"product-search-container"},function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return r.a.createElement("div",null,r.a.createElement("h2",{className:"mt-4 mb-4"},b(f,e)),r.a.createElement("div",{className:"product-search-container-div"},e.map((function(e,t){return r.a.createElement("div",{className:"search-card-container"},r.a.createElement(A,{product:e,key:t}))}))))}(p)))},B=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)([]),l=Object(u.a)(o,2),s=l[0],i=l[1],m=Object(n.useState)(!1),d=Object(u.a)(m,2),p=(d[0],d[1]);return Object(n.useEffect)((function(){w("createdAt").then((function(e){e.error?p(e.error):i(e)})),w("sold").then((function(e){e.error?p(e.error):c(e)}))}),[]),r.a.createElement(y,{title:"Home Page",description:"On this page you can plant the trees! Every tree you plant gets own id assigned to your account :)",className:"container-fluid"},r.a.createElement(_,null),r.a.createElement("h2",{className:"mb-4",style:{marginLeft:"20px"}},"Most Popular:"),r.a.createElement("div",{className:"product-search-container"},r.a.createElement("div",{className:"product-search-container-div"},a.map((function(e,t){return r.a.createElement("div",{className:"search-card-container",key:t},r.a.createElement(A,{product:e}))})))),r.a.createElement("h2",{className:"mb-4",style:{marginLeft:"20px"}},"Newest:"),r.a.createElement("div",{className:"product-search-container"},r.a.createElement("div",{className:"product-search-container-div"},s.map((function(e,t){return r.a.createElement("div",{className:"search-card-container",key:t},r.a.createElement(A,{product:e}))})))))},D=a(13),J=function(e){var t=e.component,a=Object(D.a)(e,["component"]);return r.a.createElement(s.b,Object.assign({},a,{render:function(e){return f()?r.a.createElement(t,e):r.a.createElement(s.a,{to:{pathname:"/signin",state:{from:e.location}}})}}))},F=function(e){var t=e.component,a=Object(D.a)(e,["component"]);return r.a.createElement(s.b,Object.assign({},a,{render:function(e){return f()&&1===f().user.role?r.a.createElement(t,e):r.a.createElement(s.a,{to:{pathname:"/signin",state:{from:e.location}}})}}))},R=function(){var e=f().user,t=(e._id,e.name),a=e.email,n=e.role;return r.a.createElement(y,{title:"Dashboard",description:"Hey ".concat(t,"!!"),className:"container-fluid"},r.a.createElement("div",{className:"dashboard-container"},r.a.createElement("div",{className:"col-9 width"},r.a.createElement("div",{className:"card mb-5"},r.a.createElement("h3",{className:"card-header"},"User Information"),r.a.createElement("ul",{className:"list-group"},r.a.createElement("li",{className:"list-group-item"},t),r.a.createElement("li",{className:"list-group-item"},a),r.a.createElement("li",{className:"list-group-item"},1===n?"Admin":"Registered User"))),r.a.createElement("div",{className:"card mb-5"},r.a.createElement("h3",{className:"card-header"},"Purchase History"),r.a.createElement("li",{className:"list-group-item"},"history"))),r.a.createElement("div",{className:"user-links"},r.a.createElement("div",{className:"card"},r.a.createElement("h4",{className:"card-header"},"User Links"),r.a.createElement("ul",{className:"list-group"},r.a.createElement("li",{className:"list-group-item"},r.a.createElement(l.b,{className:"nav-link",to:"/card"},"My Card")),r.a.createElement("li",{className:"list-group-item"},r.a.createElement(l.b,{className:"nav-link",to:"/profile/update"},"Update Profile"))))," ")))},L=function(){var e=f().user,t=(e._id,e.name),a=e.email,n=e.role;return r.a.createElement(y,{title:"Dashboard",description:"Hey ".concat(t,"!!"),className:"container-fluid"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-3"},r.a.createElement("div",{className:"card"},r.a.createElement("h4",{className:"card-header"},"Admin Links"),r.a.createElement("ul",{className:"list-group"},r.a.createElement("li",{className:"list-group-item"},r.a.createElement(l.b,{className:"nav-link",to:"/create/category"},"Create Category")),r.a.createElement("li",{className:"list-group-item"},r.a.createElement(l.b,{className:"nav-link",to:"/create/product"},"Create Product"))))," "),r.a.createElement("div",{className:"col-9"},r.a.createElement("div",{className:"card mb-5"},r.a.createElement("h3",{className:"card-header"},"User Information"),r.a.createElement("ul",{className:"list-group"},r.a.createElement("li",{className:"list-group-item"},t),r.a.createElement("li",{className:"list-group-item"},a),r.a.createElement("li",{className:"list-group-item"},1===n?"Admin":"Registered User"))))))},q=function(){var e=Object(n.useState)(""),t=Object(u.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(!1),s=Object(u.a)(o,2),i=s[0],m=s[1],p=Object(n.useState)(!1),g=Object(u.a)(p,2),E=g[0],h=g[1],b=f(),v=b.user,N=b.token,j=function(e){m(""),c(e.target.value)},O=function(e){e.preventDefault(),m(""),h(!1),function(e,t,a){return console.log("createCategory!!!!!"),fetch("".concat(d,"/category/create/").concat(e),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(t)},body:JSON.stringify(a)}).then((function(e){return console.log("response from fetch/createCategory: ",e),e.json()})).catch((function(e){console.log(e)}))}(v._id,N,{name:a}).then((function(e){e.error?m(e.error):(m(""),h(!0))}))};return r.a.createElement(y,{title:"Add a new category",description:"Hey ".concat(v.name,", ready to add a new category!"),className:"container-fluid"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-8 offset-md-2"},function(){if(i)return r.a.createElement("h3",{className:"text-danger"},a," should be unique")}(),function(){if(E)return r.a.createElement("h3",{className:"text-success"},a," is created")}(),r.a.createElement("form",{onSubmit:O},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{className:"text-muted"},"Name"),r.a.createElement("input",{type:"text",className:"form-control",onChange:j,value:a,autoFocus:!0,required:!0})),r.a.createElement("button",{className:"btn btn-outline-primary"},"Create Category")),r.a.createElement("div",{className:"mt-4"},r.a.createElement(l.b,{to:"/admin/dashboard",className:"text-warning"},"Back to Dashboard")))))},G=function(){var e=Object(n.useState)({name:"",description:"",price:"",categories:[],category:"",shipping:"",quantity:"",photo:"",loading:!1,error:"",createdProduct:"",redirectToProfile:!1,formData:new FormData}),t=Object(u.a)(e,2),a=t[0],c=t[1],o=f(),l=o.user,s=o.token,p=a.name,g=a.description,E=a.price,h=a.categories,b=(a.category,a.shipping,a.quantity),v=a.loading,N=a.error,j=a.createdProduct,O=(a.redirectToProfile,a.formData),k=function(){fetch("".concat(d,"/categories"),{method:"GET"}).then((function(e){return e.json()})).catch((function(e){return console.log(e)})).then((function(e){console.log("in getCategories!!!"),e.error?(console.log("error in get categories"),c(Object(m.a)({},a,{error:e.error}))):(console.log("else in get categories"),c(Object(m.a)({},a,{categories:e})))}))};Object(n.useEffect)((function(){console.log("use effetc, page loaded"),k()}),[]);var S=function(e){return function(t){var n="photo"===e?t.target.files[0]:t.target.value;O.set(e,n),c(Object(m.a)({},a,Object(i.a)({},e,n)))}},w=function(e){e.preventDefault(),c(Object(m.a)({},a,{error:"",loading:!0})),function(e,t,a){return console.log("product!!!!!"),fetch("".concat(d,"/product/create/").concat(e),{method:"POST",headers:{Accept:"application/json",Authorization:"Bearer ".concat(t)},body:a}).then((function(e){return console.log("response from fetch/product: ",e),e.json()})).catch((function(e){console.log(e)}))}(l._id,s,O).then((function(e){e.error?c(Object(m.a)({},a,{error:e.error})):c(Object(m.a)({},a,{name:"",description:"",photo:"",price:"",quantity:"",loading:!1,createdProduct:e.name}))}))};return r.a.createElement(y,{title:"Add a new product",description:"Hey, ".concat(l.name,", add a new product!")},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-8 offset-md-2"},v&&r.a.createElement("div",{className:"alert alert-success"},r.a.createElement("h2",null,"Loading...")),r.a.createElement("div",{className:"alert alert-info",style:{display:j?"":"none"}},r.a.createElement("h2",null,"".concat(j)," is created!")),r.a.createElement("div",{className:"alert alert-danger",style:{display:N?"":"none"}},N),r.a.createElement("form",{className:"mb-3",onSubmit:w},r.a.createElement("h4",null,"Post Photo"),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{className:"btn btn-secondary"},r.a.createElement("input",{onChange:S("photo"),type:"file",name:"photo",accept:"image/*"}))),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{className:"text-muted"},"Name"),r.a.createElement("input",{onChange:S("name"),type:"text",className:"form-control",value:p})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{className:"text-muted"},"Description"),r.a.createElement("textarea",{onChange:S("description"),className:"form-control",value:g})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{className:"text-muted"},"Price"),r.a.createElement("input",{onChange:S("price"),type:"number",className:"form-control",value:E})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{className:"text-muted"},"Category"),r.a.createElement("select",{onChange:S("category"),className:"form-control"},r.a.createElement("option",null,"Please select"),h&&h.map((function(e,t){return r.a.createElement("option",{key:t,value:e._id},e.name)})))),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{className:"text-muted"},"Shipping"),r.a.createElement("select",{onChange:S("shipping"),className:"form-control"},r.a.createElement("option",null,"Please select"),r.a.createElement("option",{value:"0"},"No"),r.a.createElement("option",{value:"1"},"Yes"))),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{className:"text-muted"},"Quantity"),r.a.createElement("input",{onChange:S("quantity"),type:"number",className:"form-control",value:b})),r.a.createElement("button",{className:"btn btn-outline-primary"},"Create Product")))))},H=a(12),U=function(e){var t=e.categories,a=e.handleFilters,c=Object(n.useState)([]),o=Object(u.a)(c,2),l=o[0],s=o[1],i=function(e){return function(){var t=l.indexOf(e),n=Object(H.a)(l);-1===t?n.push(e):n.splice(t),s(n),a(n)}};return console.log("categories: ",t),t===[]?r.a.createElement("div",null,"No trees or no internet connection"):t.map((function(e,t){return r.a.createElement("li",{key:t,className:"list-unstyled"},r.a.createElement("input",{onClick:i(e._id),type:"checkbox",value:l.indexOf(-1===e._id),className:"form-check-input"}),r.a.createElement("label",{className:"form-check-label"},e.name))}))},z=function(e){var t=e.prices,a=e.handleFilters,c=Object(n.useState)(0),o=Object(u.a)(c,2),l=(o[0],o[1]),s=function(e){console.log("event.target.value: ",e.target.value),a(e.target.value),l(e.target.value)};return t.map((function(e,t){return r.a.createElement("div",{key:t},r.a.createElement("input",{onClick:s,type:"radio",name:e,value:"".concat(e._id),className:"mr-2 ml-4"}),r.a.createElement("label",{className:"form-check-label"},e.name))}))},M=[{_id:0,name:"Any",array:[]},{_id:1,name:"\u20ac0 to \u20ac9",array:[0,9]},{_id:2,name:"\u20ac10 to \u20ac19",array:[10,19]},{_id:3,name:"\u20ac20 to \u20ac29",array:[20,29]},{_id:4,name:"\u20ac30 to \u20ac39",array:[20,29]},{_id:5,name:"More then \u20ac40",array:[40,1e4]}],Y=a(28),V=a.n(Y),Q=function(){var e=Object(n.useState)({filters:{category:[],price:[]}}),t=Object(u.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)([]),l=Object(u.a)(o,2),s=l[0],i=l[1],d=Object(n.useState)(!1),p=Object(u.a)(d,2),f=(p[0],p[1]),g=Object(n.useState)(6),E=Object(u.a)(g,2),h=E[0],b=(E[1],Object(n.useState)(0)),v=Object(u.a)(b,2),N=v[0],j=v[1],O=Object(n.useState)(0),k=Object(u.a)(O,2),S=k[0],w=k[1],P=Object(n.useState)([]),T=Object(u.a)(P,2),I=T[0],_=T[1],B=Object(n.useState)("filters-icon"),D=Object(u.a)(B,2),J=D[0],F=D[1],R=Object(n.useState)("filters"),L=Object(u.a)(R,2),q=L[0],G=L[1],Y=function(e){x(N,h,e).then((function(e){e.error?f(e.error):(console.log("data: ",e.data),_(e.data),w(e.size),j(0))}))},Q=function(){var e=N+h;x(e,h,a.filters).then((function(t){t.error?f(t.error):(console.log("data: ",t.data),_([].concat(Object(H.a)(I),Object(H.a)(t.data))),w(t.size),j(e))}))};Object(n.useEffect)((function(){C().then((function(e){console.log("in getCategories!!!"),e.error?(console.log("error in get categories"),f({error:e.error})):(console.log("else in get categories"),i(e))})),Y(N,a.filters)}),[]);var K=function(e,t){var n=Object(m.a)({},a);if(n.filters[t]=e,"price"==t){var r=W(e);n.filters[t]=r}Y(a.filters),c(n)},W=function(e){var t=M,a=[];for(var n in t)t[n]._id===parseInt(e)&&(a=t[n].array);return a};return r.a.createElement(y,{title:"Plantation Page",description:"Choose which tree you want to plant. Every single tree grabs 6-7kg carbon from the air per year.",className:"container-fluid"},r.a.createElement("div",{className:"show-filters"},r.a.createElement("div",{style:{width:"40px"}},r.a.createElement("img",{src:V.a,className:J,onClick:function(){F("filters-icon filters-icon-rotate"!==J?"filters-icon filters-icon-rotate":"filters-icon"),G("filters"===q?"filters hide-filters":"filters")}}))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:q},r.a.createElement("div",{className:"filter-div"},r.a.createElement("h4",null,"Filter by categories"),r.a.createElement("ul",null,r.a.createElement(U,{categories:s,handleFilters:function(e){return K(e,"category")}}))),r.a.createElement("div",{className:"filter-div"},r.a.createElement("h4",null,"Filter by price range"),r.a.createElement("div",null,r.a.createElement(z,{prices:M,handleFilters:function(e){return K(e,"price")}})))),r.a.createElement("div",{className:"search-products-div"},I.map((function(e,t){return r.a.createElement("div",{className:"search-card-container",key:t},r.a.createElement(A,{product:e}))}))),r.a.createElement("div",{style:{display:"flex",width:"100%",justifyContent:"center"}},S>0&&S>=h&&r.a.createElement("button",{onClick:Q,className:"btn btn-warning mb-5"},"Load More"))))},K=function(e){var t=Object(n.useState)({}),a=Object(u.a)(t,2),c=a[0],o=a[1],l=Object(n.useState)([]),s=Object(u.a)(l,2),i=s[0],m=s[1],p=Object(n.useState)(!1),f=Object(u.a)(p,2),g=(f[0],f[1]),E=e.match.params.productId;console.log("location: ",E);var h=function(e){(function(e){return fetch("".concat(d,"/product/").concat(e),{method:"GET"}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))})(e).then((function(e){e.error?g(e.error):(o(e),function(e){return fetch("".concat(d,"/products/related/").concat(e),{method:"GET"}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))}(e._id).then((function(e){e.error?g(e.error):m(e)})))}))};return Object(n.useEffect)((function(){var t=e.match.params.productId;h(t)}),[e]),r.a.createElement(y,{title:c&&c.name,description:c&&c.description&&c.description.substring(0,100),className:"container-fluid"},r.a.createElement("div",{className:"product-continer"},r.a.createElement("div",{className:"show-product margin"},c&&c.description&&r.a.createElement(A,{product:c,showViewProductButton:!1})),r.a.createElement("div",{className:"related-product"},r.a.createElement("h4",null,"Related Products"),i.map((function(e,t){return r.a.createElement("div",{className:"mb-3",key:t},r.a.createElement(A,{product:e}))})))))},W=a(14),X=a.n(W),Z=a(29),$=a(30),ee=a.n($),te=function(e){var t=e.products,a=e.setRun,c=e.run,o=void 0===c?void 0:c,s=Object(n.useState)({success:!1,successPay:!1,clientToken:null,error:"",instance:{},address:""}),i=Object(u.a)(s,2),p=i[0],g=i[1],E=f()&&f().user._id,h=f()&&f().token,b=function(e,t){(function(e,t){return console.log("in getBraintreeClientToken"),fetch("".concat(d,"/braintree/getToken/").concat(e),{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(t)}}).then((function(e){return console.log("in getBraintreeClientToken response: ",e),e.json()})).catch((function(e){return console.log(e)}))})(e,t).then((function(e){e.error?g(Object(m.a)({},e,{error:e.error})):(g(Object(m.a)({},e,{clientToken:e.clientToken})),console.log("instance: ",e.instance))}))};Object(n.useEffect)((function(){b(E,h)}),[]);var v,N,y=function(){return t&&t.reduce((function(e,t){return e+t.count*t.price}),0)},j=function(){p.instance.requestPaymentMethod().then((function(e){var t={paymentMethodNonce:e.nonce,amount:y()};console.log("userId, token, paymentData: ",E,h,t),function(e,t,a){return fetch("".concat(d,"/braintree/payment/").concat(e),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(t)},body:JSON.stringify(a)}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))}(E,h,t).then((function(t){var n;g(Object(m.a)({},e,{success:t.success,successPay:!0})),n=function(){console.log("payment success empty cart")},"undefined"!==typeof window&&(localStorage.removeItem("cart"),n()),a(!o)})).catch((function(e){console.log(e)}))})).catch((function(e){console.log("dropin error: ",e),g(Object(m.a)({},p,{error:e.message}))}))},O=function(){return r.a.createElement("div",{onBlur:function(){return g(Object(m.a)({},p,{error:""}))}},null!==p.clientToken&&t.length>0?r.a.createElement("div",null,r.a.createElement(ee.a,{options:{authorization:p.clientToken},onInstance:function(e){return p.instance=e}}),r.a.createElement("button",{onClick:j,className:"btn btn-success btn-block"},"Pay")):null)};return r.a.createElement("div",null,r.a.createElement("h2",null,"Total: \u20ac",y()),(N=p.successPay,r.a.createElement("div",{className:"alert alert-info",style:{display:N?"":"none"}},"Thanks, You are making this planet more green ",r.a.createElement("img",{src:"./ecology.svg",alt:"bla",style:{width:"30px"}}))),(v=p.error,r.a.createElement("div",{className:"alert alert-danger",style:{display:v?"":"none"}},v)),(p.success,f()?r.a.createElement("div",null,O()):r.a.createElement(l.b,{to:"/signin"},r.a.createElement("button",{className:"btn btn-primary"},"Sign in to checkout"))))},ae=function(){var e=Object(n.useState)(0),t=Object(u.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(!1),s=Object(u.a)(o,2),i=s[0],m=s[1];Object(n.useEffect)((function(){Object(Z.a)(X.a.mark((function e(){return X.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{c("undefined"!==typeof window&&localStorage.getItem("cart")?JSON.parse(localStorage.getItem("cart")):[])}catch(t){console.log(t)}case 1:case"end":return e.stop()}}),e)})))()}),[i]),console.log("items in state: ",a.length);return r.a.createElement(y,{title:"Shopping Basket",description:"Manage your real-world-changing energy in your basket",className:"container-fluid"},r.a.createElement("div",{className:"card-container"},r.a.createElement("div",{className:"col-6 margin"},r.a.createElement("h2",{className:"mb-4"},"Your card summary"),r.a.createElement("hr",null),r.a.createElement(te,{products:a,setRun:m})),r.a.createElement("div",{className:"col-6"},a.length>0?function(e){return r.a.createElement("div",null,r.a.createElement("h3",null,"Your basket has ",e.length," items."),e&&e.map((function(e,t){return r.a.createElement(A,{key:t,product:e,showAddToCartButton:!1,cartUpdate:!0,setRun:m,run:i})})))}(a):r.a.createElement("h3",null,"Your basket is empty. ",r.a.createElement("br",null),r.a.createElement(l.b,{to:"/shop"},"Continue Shopping")))))},ne=(a(54),function(){return r.a.createElement(l.a,null,r.a.createElement(s.d,null,r.a.createElement(s.b,{exact:!0,path:"/",component:B}),r.a.createElement(s.b,{path:"/shop",component:Q}),r.a.createElement(s.b,{path:"/signin",component:O}),r.a.createElement(s.b,{path:"/signup",component:j}),r.a.createElement(J,{path:"/user/dashboard",exact:!0,component:R}),r.a.createElement(F,{path:"/admin/dashboard",exact:!0,component:L}),r.a.createElement(F,{path:"/create/category",exact:!0,component:q}),r.a.createElement(F,{path:"/create/product",exact:!0,component:G}),r.a.createElement(s.b,{exact:!0,path:"/product/:productId",component:K}),r.a.createElement(s.b,{exact:!0,path:"/card",component:ae})))});o.a.render(r.a.createElement(ne,null),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.b69f9643.chunk.js.map