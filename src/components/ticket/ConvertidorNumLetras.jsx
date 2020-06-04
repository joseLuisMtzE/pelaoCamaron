import React from 'react';

const ConvertidorNumLetras = (props) => {
  const { comandas } = props;
  var decena,
    unidad,
    centenas,
    decenas,
    cientos,
    resto,
    letras,
    divisor,
    strMiles,
    strCentenas,
    strMillones, //variables conversion
    decimales = 0,
    sindecimales = 0,
    precioTotal = 0,
    descuentoPorcentaje =
      comandas.comandas && comandas.pago.porcentajeDescuento,
    descuentoCantidad = 0;

  //Para obtejer subtotal, impuestos y precioTotal
  comandas.comandas &&
    props.comandas.comandas.map((comanda) => {
      precioTotal += comanda.cantidad * comanda.platillo.precioConIva;
    });

  //Calcular descuento
  descuentoCantidad = (precioTotal * descuentoPorcentaje) / 100;
  precioTotal = precioTotal - descuentoCantidad;
  //Obtener decimales
  decimales = precioTotal - Math.floor(precioTotal);
  //Conversión del numero decimal a numero entero
  decimales *= 100;
  decimales = Math.round(decimales);
  sindecimales = Math.trunc(decimales);
  precioTotal = precioTotal.toFixed(2);

  function Unidades(num) {
    switch (num) {
      case 1:
        return 'UN';
      case 2:
        return 'DOS';
      case 3:
        return 'TRES';
      case 4:
        return 'CUATRO';
      case 5:
        return 'CINCO';
      case 6:
        return 'SEIS';
      case 7:
        return 'SIETE';
      case 8:
        return 'OCHO';
      case 9:
        return 'NUEVE';
    }

    return '';
  }

  function Decenas(num) {
    decena = Math.floor(num / 10);
    unidad = num - decena * 10;

    switch (decena) {
      case 1:
        switch (unidad) {
          case 0:
            return 'DIEZ';
          case 1:
            return 'ONCE';
          case 2:
            return 'DOCE';
          case 3:
            return 'TRECE';
          case 4:
            return 'CATORCE';
          case 5:
            return 'QUINCE';
          default:
            return 'DIECI' + Unidades(unidad);
        }
      case 2:
        switch (unidad) {
          case 0:
            return 'VEINTE';
          default:
            return 'VEINTI' + Unidades(unidad);
        }
      case 3:
        return DecenasY('TREINTA', unidad);
      case 4:
        return DecenasY('CUARENTA', unidad);
      case 5:
        return DecenasY('CINCUENTA', unidad);
      case 6:
        return DecenasY('SESENTA', unidad);
      case 7:
        return DecenasY('SETENTA', unidad);
      case 8:
        return DecenasY('OCHENTA', unidad);
      case 9:
        return DecenasY('NOVENTA', unidad);
      case 0:
        return Unidades(unidad);
    }
  } //Unidades()

  function DecenasY(strSin, numUnidades) {
    if (numUnidades > 0) return strSin + ' Y ' + Unidades(numUnidades);

    return strSin;
  } //DecenasY()

  function Centenas(num) {
    centenas = Math.floor(num / 100);
    decenas = num - centenas * 100;

    switch (centenas) {
      case 1:
        if (decenas > 0) return 'CIENTO ' + Decenas(decenas);
        return 'CIEN';
      case 2:
        return 'DOSCIENTOS ' + Decenas(decenas);
      case 3:
        return 'TRESCIENTOS ' + Decenas(decenas);
      case 4:
        return 'CUATROCIENTOS ' + Decenas(decenas);
      case 5:
        return 'QUINIENTOS ' + Decenas(decenas);
      case 6:
        return 'SEISCIENTOS ' + Decenas(decenas);
      case 7:
        return 'SETECIENTOS ' + Decenas(decenas);
      case 8:
        return 'OCHOCIENTOS ' + Decenas(decenas);
      case 9:
        return 'NOVECIENTOS ' + Decenas(decenas);
    }

    return Decenas(decenas);
  } //Centenas()

  function Seccion(num, divisor, strSingular, strPlural) {
    cientos = Math.floor(num / divisor);
    resto = num - cientos * divisor;

    letras = '';

    if (cientos > 0)
      if (cientos > 1) letras = Centenas(cientos) + ' ' + strPlural;
      else letras = strSingular;

    if (resto > 0) letras += '';

    return letras;
  } //Seccion()

  function Miles(num) {
    divisor = 1000;
    cientos = Math.floor(num / divisor);
    resto = num - cientos * divisor;

    strMiles = Seccion(num, divisor, 'MIL', 'MIL');
    strCentenas = Centenas(resto);

    if (strMiles == '') return strCentenas;

    return strMiles + ' ' + strCentenas;

    //return Seccion(num, divisor, "UN MIL", "MIL") + " " + Centenas(resto);
  } //Miles()

  function Millones(num) {
    divisor = 1000000;
    cientos = Math.floor(num / divisor);
    resto = num - cientos * divisor;

    strMillones = Seccion(num, divisor, 'UN MILLON', 'MILLONES');
    strMiles = Miles(resto);

    if (strMillones == '') return strMiles;

    return strMillones + ' ' + strMiles;

    //return Seccion(num, divisor, "UN MILLON", "MILLONES") + " " + Miles(resto);
  } //Millones()

  function NumeroALetras(num) {
    var data = {
      numero: num,
      enteros: Math.floor(num),
      letrasCentavos: '',
    };

    data.letrasMonedaPlural = 'PESOS';
    data.letrasMonedaSingular = 'PESO';

    if (data.enteros == 0) return 'CERO ' + data.letrasMonedaPlural;
    if (data.enteros == 1)
      return Millones(data.enteros) + ' ' + data.letrasMonedaSingular;
    else return Millones(data.enteros) + ' ' + data.letrasMonedaPlural + ' ';
  } //NumeroALetras()
  return (
    <div className="Container-ticket">
      <h3>({NumeroALetras(precioTotal) + sindecimales}/100 MXN)</h3>
    </div>
  );
};
export default ConvertidorNumLetras;
