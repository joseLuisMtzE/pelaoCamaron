(this.webpackJsonpposrestfront=this.webpackJsonpposrestfront||[]).push([[20],{413:function(e,t,a){"use strict";a.d(t,"a",(function(){return c})),a.d(t,"b",(function(){return o}));var n=a(31),r=a.n(n);function c(e){r.a.fire({icon:"error",title:"Error",text:e})}function o(e){r.a.fire({icon:"success",title:"Proceso exitoso!",text:e})}},440:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(){return r.a.createElement("div",{className:"sk-cube-grid"},r.a.createElement("div",{className:"sk-cube sk-cube1"}),r.a.createElement("div",{className:"sk-cube sk-cube2"}),r.a.createElement("div",{className:"sk-cube sk-cube3"}),r.a.createElement("div",{className:"sk-cube sk-cube4"}),r.a.createElement("div",{className:"sk-cube sk-cube5"}),r.a.createElement("div",{className:"sk-cube sk-cube6"}),r.a.createElement("div",{className:"sk-cube sk-cube7"}),r.a.createElement("div",{className:"sk-cube sk-cube8"}),r.a.createElement("div",{className:"sk-cube sk-cube9"}))}},531:function(e,t,a){"use strict";a.r(t);var n=a(26),r=a(0),c=a.n(r),o=a(43),i=a(6),u=a.n(i),s=a(13),l=a(413),m=a(10),b=Object(r.createContext)(),d=function(e){var t=function(){var e=Object(s.a)(u.a.mark((function e(){var t,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(m.c)("GET","categorias?isActive=true");case 3:return t=e.sent,a=t.data.data,e.abrupt("return",a);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),a=function(){var e=Object(s.a)(u.a.mark((function e(t){var a,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(m.c)("POST","categorias",{nombre:t});case 3:return 201===(a=e.sent).status?Object(l.b)("Categoria ".concat(t," creada correctamente")):Object(l.a)("Hubo un error al a\xf1adir la categoria"),n=a.data.data,console.log(n),e.abrupt("return",n);case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}(),i=function(){var e=Object(s.a)(u.a.mark((function e(t,a){var n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(m.c)("PATCH","categorias/".concat(a),{nombre:t});case 3:return 200===(n=e.sent).status?Object(l.b)("Categoria ".concat(t," editada correctamente")):Object(l.a)("Hubo un error al editar la categoria"),r=n.data.data,e.abrupt("return",r);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t,a){return e.apply(this,arguments)}}(),d=function(){var e=Object(s.a)(u.a.mark((function e(t){var a,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(m.c)("DELETE","categorias/".concat(t));case 3:return 204===(a=e.sent).status?Object(l.b)("Categoria borrada correctamente"):Object(l.a)("Hubo un error al borrar la categoria"),n=a.data.data,e.abrupt("return",n);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=Object(s.a)(u.a.mark((function e(){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t();case 2:a=e.sent,g(a);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(r.useEffect)((function(){f()}),[]);var p=Object(r.useState)([]),v=Object(n.a)(p,2),E=v[0],g=v[1],h=Object(r.useState)(null),O=Object(n.a)(h,2),j=O[0],k=O[1],C=function(){var e=Object(s.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return w(),e.next=3,a(t);case 3:(n=e.sent)&&g([].concat(Object(o.a)(E),[{_id:n._id,nombre:n.nombre}]));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),x=function(){var e=Object(s.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return w(),e.next=3,d(t);case 3:g(E.filter((function(e){return e._id!==t})));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),y=function(){var e=Object(s.a)(u.a.mark((function e(t,a){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return w(),n=E.map((function(e){return e._id===a?{_id:a,nombre:t}:e})),e.next=4,i(t,a);case 4:g(n),k(null);case 6:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}();function w(){e.setLoad(!0),setTimeout((function(){e.setLoad(!1)}),1e3)}return c.a.createElement(b.Provider,{value:{categories:E,addCategory:C,removeCategory:x,findItem:function(e){var t=E.find((function(t){return t._id===e}));k(t)},editCategory:y,editItem:j,setEditItem:k}},e.children)},f=a(31),p=a.n(f),v=a(418),E=a.n(v),g=a(415),h=function(e){var t=e.category;var a=Object(r.useContext)(b),n=a.removeCategory,o=a.findItem;return c.a.createElement("li",{className:"list-itemKitchen"},c.a.createElement("span",null,t.nombre),"Due\xf1o"===Object(m.a)()||"Caja"===Object(m.a)()?c.a.createElement("div",null,c.a.createElement("button",{id:"delete-categories",type:"primary",shape:"round",onClick:function(){p.a.fire({title:"\xbfEst\xe1s seguro de eliminarlo?",text:"No podras revertir est\xe1 acci\xf3n!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Si borralo!",cancelButtonText:"Cancelar"}).then((function(e){e.value&&n(t._id)}))},className:"btn-delete-kitchen"},c.a.createElement(E.a,{path:g.b,title:"Eliminar",size:.9,color:"#FFF"})),c.a.createElement("button",{onClick:function(){o(t._id)},id:"edit-categories",type:"primary",shape:"round",className:"btn-edit-kitchen"},c.a.createElement(E.a,{path:g.c,title:"Editar",size:.9,color:"#FFF"}))):null)},O=function(){var e=Object(r.useContext)(b).categories;return c.a.createElement("div",null,e&&e.length?c.a.createElement("ul",{className:"listKitchen"},e.map((function(e){return c.a.createElement(h,{category:e,key:e._id})}))):c.a.createElement("div",{className:"no-areas"},"Por ahora no hay ninguna categoria agregada"))},j=function(){return c.a.createElement("div",{className:"headerKitchen"},c.a.createElement(E.a,{path:g.e,title:"Categorias",size:3,color:"#FFF"}),c.a.createElement("h1",null,"Categor\xedas"))},k=a(16),C=a(410),x=a(528),y=a(202),w=function(e){var t=e.onOk,a=Object(r.useContext)(b),o=a.addCategory,i=a.editItem,u=a.editCategory,s=a.categories,m=Object(r.useState)(""),d=Object(n.a)(m,2),f=d[0],p=d[1],v=x.a.useForm(),E=Object(n.a)(v,1)[0];var g=function(e){null===i?(o(f),p(""),E.setFieldsValue({nameCategory:""})):u(f,i._id),t()};return Object(r.useEffect)((function(){null!==i?(p(i.nombre),E.setFieldsValue({nameCategory:i.nombre})):(p(""),E.setFieldsValue({nameCategory:""}))}),[i]),c.a.createElement(x.a,{name:"categoriesForm",className:"formKitchen",onFinish:function(){void 0===s.find((function(e){return e.nombre===f}))?g():Object(l.a)("No esta permitido repetir categorias")},initialValues:{remember:!0},form:E},c.a.createElement(x.a.Item,{label:"Nombre:",name:"nameCategory",rules:[{required:!0,message:"Por favor ingresa un nombre",whitespace:!0}]},c.a.createElement(y.a,{type:"text",onChange:function(e){p(e.target.value)},value:f})),c.a.createElement(x.a.Item,null,c.a.createElement("button",{className:"add-area-btn",type:"submit"},null!==i?"Editar":"A\xf1adir")))},N=function(){var e=Object(r.useState)({visible:!1}),t=Object(n.a)(e,2),a=t[0],o=t[1],i=Object(r.useContext)(b),u=i.setEditItem,s=i.editItem,l=function(){o({visible:!0})},m=function(){setTimeout((function(){o({visible:!1})}),1e3)};return Object(r.useEffect)((function(){null!==s&&l()}),[s]),c.a.createElement(r.Fragment,null,c.a.createElement(k.a,{type:"primary",shape:"circle",className:"btnModal",onClick:l,style:{margin:6,width:50,height:50,border:"none",boxShadow:"0px 3px 5px 0px grey"}},c.a.createElement(E.a,{path:g.d,title:"a\xf1adir",size:.8,color:"#FFF"})),c.a.createElement(C.a,{title:"Categor\xeda",visible:a.visible,onOk:m,onCancel:function(){null!==s&&u(null),o({visible:!1})},footer:[]},c.a.createElement("div",null,c.a.createElement(w,{onOk:m,showModal:l}))))},F=a(440);t.default=function(){var e=Object(r.useState)(!1),t=Object(n.a)(e,2),a=t[0],o=t[1];return c.a.createElement(r.Fragment,null,c.a.createElement(d,{setLoad:o},c.a.createElement("div",{className:"container-kitchen"},c.a.createElement("center",null,c.a.createElement("div",{className:"headerCRUD"},c.a.createElement(j,null))),a?c.a.createElement(F.a,null):c.a.createElement(O,null),"Due\xf1o"===Object(m.a)()||"Caja"===Object(m.a)()?c.a.createElement(N,null):null)))}}}]);
//# sourceMappingURL=20.df673d6c.chunk.js.map