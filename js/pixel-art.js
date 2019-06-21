var nombreColores = ['White', 'LightYellow',
  'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod', 'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan',
  'Khaki', 'Yellow', 'Gold', 'Orange', 'DarkOrange', 'OrangeRed', 'Tomato', 'Coral', 'DarkSalmon', 'LightSalmon', 'LightCoral', 'Salmon', 'PaleVioletRed',
  'Pink', 'LightPink', 'HotPink', 'DeepPink', 'MediumVioletRed', 'Crimson', 'Red', 'FireBrick', 'DarkRed', 'Maroon',
  'Brown', 'Sienna', 'SaddleBrown', 'IndianRed', 'RosyBrown',
  'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru',
  'Chocolate', 'DarkKhaki', 'DarkSeaGreen', 'MediumAquaMarine',
  'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'OliveDrab', 'Olive', 'DarkOliveGreen', 'YellowGreen', 'LawnGreen',
  'Chartreuse', 'GreenYellow', 'Lime', 'SpringGreen', 'LimeGreen',
  'LightGreen', 'PaleGreen', 'PaleTurquoise',
  'AquaMarine', 'Cyan', 'Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'DeepSkyBlue',
  'LightSeaGreen', 'CadetBlue', 'DarkCyan', 'Teal', 'Steelblue', 'LightSteelBlue', 'Honeydew', 'LightCyan',
  'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue',
  'DodgerBlue', 'CornflowerBlue', 'RoyalBlue', 'SlateBlue',
  'MediumSlateBlue', 'DarkSlateBlue', 'Indigo', 'Purple', 'DarkMagenta', 'Blue',
  'MediumBlue', 'DarkBlue', 'Navy', 'Thistle',
  'Plum', 'Violet', 'Orchid', 'DarkOrchid', 'Fuchsia', 'Magenta', 'MediumOrchid',
  'BlueViolet', 'DarkViolet', 'DarkOrchid',
  'MediumPurple', 'Lavender', 'Gainsboro', 'LightGray', 'Silver', 'DarkGray', 'Gray',
  'DimGray', 'LightSlateGray', 'DarkSlateGray', 'Black'
];

// Variable para guardar el elemento 'color-personalizado'
// Es decir, el que se elige con la rueda de color.
var colorPersonalizado = document.getElementById('color-personalizado');

colorPersonalizado.addEventListener('change', (function() {
    // Se guarda el color de la rueda en colorActual
    colorActual = colorPersonalizado.value;
    // Completar para que cambie el indicador-de-color al colorActual
    indicadorDeColor.style.backgroundColor = colorActual;

  })
);

//elementos del DOM
var paleta = document.getElementById('paleta');
var grillaPixeles = document.getElementById('grilla-pixeles');
var cadaColor = document.getElementsByClassName('color-paleta');
var indicadorDeColor = document.getElementById('indicador-de-color');
var pixelesGrilla = document.getElementById('grilla-pixeles').children;
// var botonBorrar = $('#borrar');



//generar paleta de colores guia 1
function generarPaletaDeColores() {
  for (var i = 0; i < nombreColores.length; i++) {
    var div = document.createElement('div');
    div.classList = 'color-paleta';
    div.style.backgroundColor = nombreColores[i];
    paleta.appendChild(div);
  }
}

// generar grilla de pixeles guia 1
function generarGrillaPixeles() {
  for (var i = 0; i < 1750; i++) {
    var div = document.createElement('div');
    grillaPixeles.appendChild(div);
  }
}

// actualizar indicar de color guia 2
function eventoIndicadorDeColor() {
  for (var i = 0; i < cadaColor.length; i++) {
    cadaColor[i].addEventListener('click', indicarColor);
  }
}

function indicarColor(e) {
  indicadorDeColor.style.backgroundColor = e.target.style.backgroundColor;
}

// pintar pixeles guia 2
function eventoPixelesGrilla() {
  for (var i = 0; i < pixelesGrilla.length; i++) {
    pixelesGrilla[i].addEventListener('click', pintarPixel);
  }
}

function pintarPixel(e) {
  e.target.style.backgroundColor = indicadorDeColor.style.backgroundColor;
}

// borrar pixeles guia 3
// botonBorrar.click(borrarGrilla);
// function borrarGrilla() {
//   var $pixelesGrilla = $('#grilla-pixeles div').animate (
//     {'backgroundColor':'white'}, 500);
// }


// ejecutando funciones

generarGrillaPixeles();
generarPaletaDeColores();
eventoIndicadorDeColor();
eventoPixelesGrilla();
