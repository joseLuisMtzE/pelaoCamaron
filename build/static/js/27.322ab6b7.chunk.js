(this.webpackJsonpposrestfront=this.webpackJsonpposrestfront||[]).push([[27],{427:function(e,a,t){e.exports=t.p+"static/media/logo.849cda1b.png"},526:function(e,a,t){"use strict";t.r(a);var n=t(6),c=t.n(n),r=t(13),l=t(26),s=t(0),o=t.n(s),m=t(427),E=t.n(m),i=function(e){var a=e.info,t=new Date;return o.a.createElement("div",{className:"Container-ticket"},o.a.createElement("div",{className:"LogoCamaron-posicion"},o.a.createElement("img",{src:E.a,alt:"Logo Camaron Pelao",width:250})),o.a.createElement("h4",null,"MARISCOS EL PELAO CAMARON"),o.a.createElement("span",{className:"Space-span"},"MARIELA SALAS TORRES"),o.a.createElement("br",null),o.a.createElement("span",{className:"Space-span"},"R\xc9GIMEN: INCORPORACI\xd3N FISCAL"),o.a.createElement("span",{className:"Space-span"},"M\xc1TRIZ:"),o.a.createElement("span",{className:"Space-span"},"RFC: SATF871021H94"),o.a.createElement("span",{className:"Space-span"},"AV. V CARRANZA 1649 NULL COLONIA"),o.a.createElement("span",{className:"Space-span"},"RESIDENCIAL ESMERALDA CP 28017"),o.a.createElement("span",{className:"Space-span"},"COLIMA COLIMA"),o.a.createElement("span",{className:"Space-span"},"TEL\xc9FONO:312 323 66 76"),o.a.createElement("br",null),o.a.createElement("span",{className:"Space-span"},"SUCURSAL:"),o.a.createElement("span",{className:"Space-span"},"AV. V CARRANZA 1649 NULL COLONIA"),o.a.createElement("span",{className:"Space-span"},"RESIDENCIAL ESMERALDA CP 28017"),o.a.createElement("span",{className:"Space-span"},"COLIMA COLIMA"),o.a.createElement("span",{className:"Space-span"},"TEL\xc9FONO:312 323 66 76"),o.a.createElement("br",null),o.a.createElement("strong",{className:"Space-span"},"FOLIO TICKET #",a.folio),o.a.createElement("span",{className:"Space-span"},"MESA: ",a.mesa&&a.mesa.noMesa),o.a.createElement("span",{className:"Space-span"},"PERSONAS: ",a.numPersonas," "),o.a.createElement("span",{className:"Space-span"},"FECHA VENTA: ",a.fecha),o.a.createElement("span",{className:"Space-span"},"FECHA REIMPRESI\xd3N:"," ","".concat(t.getDate(),"/").concat(t.getMonth()+1,"/").concat(t.getFullYear()," ").concat(t.toLocaleString("en-US",{hour:"numeric",minute:"numeric",hour12:!0}))),o.a.createElement("br",null))},u=function(e){var a=e.comanda;return"Cerrada"===a.estado?o.a.createElement("tr",{key:a._id},o.a.createElement("td",{className:"Tabla-tds-comandas"},a.cantidad),o.a.createElement("td",{className:"Tabla-tds-comandas"},a.platillo.nombre),o.a.createElement("td",{className:"Tabla-tds-comandas"},"$",a.platillo.precioConIva.toFixed(2)),o.a.createElement("td",{className:"Tabla-tds-comandas"},"$",(a.cantidad*a.platillo.precioConIva).toFixed(2))):null},p=function(e){var a=e.comandas,t=!1,n=(a.comandas&&a.pago.porcentajeDescuento,a.pago&&a.pago.precioTotal);return t="En proceso"===a.estado,o.a.createElement("div",{className:"Container-ticket"},o.a.createElement("hr",null),o.a.createElement("table",{className:"Table-ticket",id:"tableProductos"},o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",null,"CANTIDAD"),o.a.createElement("th",null,"PLATILLO"),o.a.createElement("th",null,"PRECIO"),o.a.createElement("th",null,"IMPORTE"))),o.a.createElement("tbody",null,a.comandas&&e.comandas.comandas.map((function(e){return o.a.createElement(u,{comanda:e})})),o.a.createElement("tr",{className:"datos-pago"},o.a.createElement("td",{colSpan:3},"% DE DESCUENTO"),o.a.createElement("td",null,a.pago&&a.pago.porcentajeDescuento,"%")),!t&&o.a.createElement(o.a.Fragment,null,0!==a.length?o.a.createElement("tr",null,o.a.createElement("td",{colSpan:3},"DESCUENTO"),o.a.createElement("td",null,"$",(a.pago&&a.pago.cantidadDescuento).toFixed(2))):null,o.a.createElement("tr",null,o.a.createElement("td",{colSpan:3},"TIPO DE PAGO"),o.a.createElement("td",null,a.pago&&a.pago.tipoPago)),o.a.createElement("tr",null,o.a.createElement("td",{colSpan:3},"PAGO CON"),o.a.createElement("td",null,"$",a.pago&&a.pago.pagoCon)),o.a.createElement("tr",null,o.a.createElement("td",{colSpan:3},"CAMBIO"),o.a.createElement("td",null,"$",a.pago&&a.pago.cambio)),o.a.createElement("tr",null,o.a.createElement("td",{colSpan:3},"IMPUESTOS"),o.a.createElement("td",null,"$",(0).toFixed(2)))),o.a.createElement("tr",null,o.a.createElement("td",{colSpan:3},"SUB-TOTAL"),o.a.createElement("td",null,"$",a.pago&&a.pago.subTotal)),0!==a.length?o.a.createElement("tr",null,o.a.createElement("td",{colSpan:3},o.a.createElement("h2",null,"TOTAL: ")),o.a.createElement("td",null,o.a.createElement("h2",null,"$",n.toFixed(2)))):null)))},d=function(e){var a=!1;return e.domicilio?(a=!0,o.a.createElement("div",null,a&&o.a.createElement("div",{className:"Container-ticket"},o.a.createElement("strong",{className:"Space-span"}," DOMICILIO "),o.a.createElement("span",{className:"Space-span"}," ","CLIENTE: ",e.domicilio&&e.domicilio.nombreCliente),o.a.createElement("span",{className:"Space-span"}," TEL\xc9FONO: "),o.a.createElement("span",{className:"Space-span"}," ","CALLE: ",e.domicilio&&e.domicilio.calle),o.a.createElement("span",{className:"Space-span"}," ","NUMERO EXTERIOR: ",e.domicilio&&e.domicilio.numeroExterior),o.a.createElement("span",{className:"Space-span"}," ","NUMERO INTERIOR: ",e.domicilio&&e.domicilio.numeroInterior),o.a.createElement("span",{className:"Space-span"}," ","COLONIA: ",e.domicilio&&e.domicilio.colonia),o.a.createElement("span",{className:"Space-span"}," ","REFERENCIAS: ",e.domicilio&&e.domicilio.referencia),o.a.createElement("span",{className:"Space-span"}," ","PAGAR\xc1 CON: $",e.domicilio&&e.domicilio.pagaraCon),o.a.createElement("span",{className:"Space-span"}," ","CAMBIO: ",e.domicilio&&e.domicilio.cambio),o.a.createElement("br",null))||"")):""},N=function(e){var a,t,n,c,r,l,s,m,E,i,u,p,d=e.comandas,N=0,S=0,O=d.comandas&&d.pago.porcentajeDescuento,C=d.pago&&d.pago.precioTotal;function I(e){switch(e){case 1:return"UN";case 2:return"DOS";case 3:return"TRES";case 4:return"CUATRO";case 5:return"CINCO";case 6:return"SEIS";case 7:return"SIETE";case 8:return"OCHO";case 9:return"NUEVE";default:return""}}function A(e){switch(a=Math.floor(e/10),t=e-10*a,a){case 1:switch(t){case 0:return"DIEZ";case 1:return"ONCE";case 2:return"DOCE";case 3:return"TRECE";case 4:return"CATORCE";case 5:return"QUINCE";default:return"DIECI"+I(t)}case 2:switch(t){case 0:return"VEINTE";default:return"VEINTI"+I(t)}case 3:return T("TREINTA",t);case 4:return T("CUARENTA",t);case 5:return T("CINCUENTA",t);case 6:return T("SESENTA",t);case 7:return T("SETENTA",t);case 8:return T("OCHENTA",t);case 9:return T("NOVENTA",t);case 0:return I(t);default:return""}}function T(e,a){return a>0?e+" Y "+I(a):e}function f(e){switch(n=Math.floor(e/100),c=e-100*n,n){case 1:return c>0?"CIENTO "+A(c):"CIEN";case 2:return"DOSCIENTOS "+A(c);case 3:return"TRESCIENTOS "+A(c);case 4:return"CUATROCIENTOS "+A(c);case 5:return"QUINIENTOS "+A(c);case 6:return"SEISCIENTOS "+A(c);case 7:return"SETECIENTOS "+A(c);case 8:return"OCHOCIENTOS "+A(c);case 9:return"NOVECIENTOS "+A(c)}return A(c)}function h(e,a,t,n){return r=Math.floor(e/a),l=e-r*a,s="",r>0&&(s=r>1?f(r)+" "+n:t),l>0&&(s+=""),s}function M(e){return m=1e6,r=Math.floor(e/m),l=e-r*m,u=h(e,m,"UN MILLON","MILLONES"),E=function(e){return m=1e3,r=Math.floor(e/m),l=e-r*m,E=h(e,m,"MIL","MIL"),i=f(l),""===E?i:E+" "+i}(l),""===u?E:u+" "+E}return d.comandas&&e.comandas.comandas.map((function(e){return S+=e.cantidad*e.platillo.precioConIva,""})),S-=S*O/100,C-=N=C-Math.floor(C),N*=100,N=Math.round(N),p=Math.trunc(N),o.a.createElement("div",{className:"Container-ticket"},o.a.createElement("h3",null,"(",function e(a,t){var n={numero:a,enteros:Math.floor(a),centavos:Math.round(100*a)-100*Math.floor(a),letrasCentavos:""};return void 0===t||!1===t?(n.letrasMonedaPlural="PESOS",n.letrasMonedaSingular="PESO"):(n.letrasMonedaPlural="CENTAVOS",n.letrasMonedaSingular="CENTAVO"),n.centavos>0&&(n.letrasCentavos="CON "+e(n.centavos,!0)),0===n.enteros?"CERO "+n.letrasMonedaPlural+" "+n.letrasCentavos:1===n.enteros?M(n.enteros)+" "+n.letrasMonedaSingular+" "+n.letrasCentavos:M(n.enteros)+" "+n.letrasMonedaPlural+" "+n.letrasCentavos}(C)+p,"/100 MXN)"))},S=t(16),O={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M732 120c0-4.4-3.6-8-8-8H300c-4.4 0-8 3.6-8 8v148h440V120zm120 212H172c-44.2 0-80 35.8-80 80v328c0 17.7 14.3 32 32 32h168v132c0 4.4 3.6 8 8 8h424c4.4 0 8-3.6 8-8V772h168c17.7 0 32-14.3 32-32V412c0-44.2-35.8-80-80-80zM664 844H360V568h304v276zm164-360c0 4.4-3.6 8-8 8h-40c-4.4 0-8-3.6-8-8v-40c0-4.4 3.6-8 8-8h40c4.4 0 8 3.6 8 8v40z"}}]},name:"printer",theme:"filled"},C=t(127),I=function(e,a){return s.createElement(C.a,Object.assign({},e,{ref:a,icon:O}))};I.displayName="PrinterFilled";var A=s.forwardRef(I),T=t(10),f=function(){return o.a.createElement("div",{className:"Container-ticket"},o.a.createElement("hr",null),o.a.createElement("span",{className:"Space-span"},"\xa1GRACIAS POR SU VISITA!"),o.a.createElement("span",{className:"Space-span"},"ESTE DOCUMENTO NO TIENE VALOR FISCAL"),"Cocina"===Object(T.a)()?null:o.a.createElement(S.a,{style:{display:"flex",width:120,height:50,boxShadow:"0px 3px 5px 0px grey"},id:"Button-print",type:"primary",htmlType:"button",onClick:window.print,icon:o.a.createElement(A,null)},"Imprimir"),o.a.createElement("br",null),o.a.createElement("br",null))};a.default=function(e){var a=Object(s.useState)([]),t=Object(l.a)(a,2),n=t[0],m=t[1],E=e.match.params.id,u=function(){var e=Object(r.a)(c.a.mark((function e(){var a,t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(T.c)("GET","ordenes/".concat(E));case 3:return a=e.sent,t=a.data.data,e.abrupt("return",t);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),S=function(){var e=Object(r.a)(c.a.mark((function e(){var a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u();case 2:a=e.sent,m(a);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(s.useEffect)((function(){S()}),[]),o.a.createElement(s.Fragment,null,o.a.createElement(i,{info:n}),n.domicilio?o.a.createElement(d,{domicilio:n.domicilio}):null,o.a.createElement(p,{comandas:n}),o.a.createElement(N,{comandas:n}),o.a.createElement(f,null))}}}]);
//# sourceMappingURL=27.322ab6b7.chunk.js.map