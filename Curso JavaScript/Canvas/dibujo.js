var d = document.getElementById("dibujo");
var lienzo = d.getContext("2d"); //Contexto en el que queremos trabajar
var lineas = 30;
var i = 0;

dibujar('#AAF',0,0,10,300)
dibujar('AAF',0,10,20,300)

function dibujar(color, xinicial, yinicial, xfinal, yfinal)
{
    lienzo.beginPath(); //Así inicamos un trazo
    lienzo.strokeStyle = color; //Propiedad para asignar el color de la linea
    lienzo.moveTo(xinicial,yinicial); //Metodo para mover el punto donde va a arran el trazo
    lienzo.lineTo(xfinal,yfinal); //Función para trazar la linea
    lienzo.stroke(); //dibuja la linea con el estulo que se definio
    lienzo.closePath();
}