var d = document.getElementById("dibujo");
var lienzo = d.getContext("2d"); //Contexto en el que queremos trabajar
var lineas = 30;
var i = 0;
var color = "#AAF"
var xi = 0;
var xf;
var yi;
var yf = 300;

while(i < lineas)
{
    //console.log("valor de i, iniciando while: " + i);
    yi = 10 * i
    xf = 10 * (i +1);
    //console.log("valor de i despues de xf: " + i);
    dibujar(color,xi,yi,xf,yf)
    //dibujar('#AAF',0,10,20,300)
    i=i+1;
    //console.log("valor de i, terminando while: " + i);
}
dibujar('#AAF',1,1,1,299);
dibujar('#AAF',1,299,299,299);


for(i=0; i<lineas; i++)
{
    xi=300;
    yf=300;

    yi = 10 * i
    xf = xi-(10 * (i+1));
    console.log("xf: " + xf);
    dibujar(color,xi,yi,xf,yf)
}
dibujar('#AAF',299,1,299,299);
dibujar('#AAF',299,299,1,299);



function dibujar(color, xinicial, yinicial, xfinal, yfinal)
{
    lienzo.beginPath(); //Así inicamos un trazo
    lienzo.strokeStyle = color; //Propiedad para asignar el color de la linea
    lienzo.moveTo(xinicial,yinicial); //Metodo para mover el punto donde va a arran el trazo
    lienzo.lineTo(xfinal,yfinal); //Función para trazar la linea
    lienzo.stroke(); //dibuja la linea con el estulo que se definio
    lienzo.closePath();
}