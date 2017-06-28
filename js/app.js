var estudiantes = [];

function obtenerListaEstudiantes() {
    // TO DO: Retornar la lista de estudiantes

return estudiantes;
console.log(estudiantes);
}

function agregarEstudiante() {
    // TO DO: Preguntar al usuario por el nombre, puntos técnicos y puntos de HSE de un estudiante
    // Hint: El estudiante debe ser agregado a la lista de estudiantes
    // TO DO: Retornar el estudiante recientemente creado
    var nombre,puntostecnicos,hse;
    var array=[];

    nombre= prompt("Ingrese nombre de estudiante:",'');
    puntostecnicos= prompt("Ingrese porcentaje tecnico de estudiante:",'');
    hse= prompt("Ingrese habilidades socioemocionales de estudiante:",'');
    nombre=nombre.toLowerCase();
    //insertando en un array
    arr.push(nombre);
    arr.push(puntostecnicos);
    arr.push(hse);

          var texto={};

          for(var i=0;i<array.length;i++)
            {
              texto[ "nombre"+(i+1)] = array[i];

            }

     estudiantes.push(texto);

     console.log(estudiantes);
     var a=texto;

         return a;

}

 function mostrar(estudiante) {
     // TO DO: Completar el template para que muestre las propiedades correctas del estudiante
     var resultado = "";

           resultado += "<div class='row'>";
           resultado += "<div class='col m12'>";
           resultado += "<div class='card blue-grey darken-1'>";
           resultado += "<div class='card-content white-text'>";

          resultado += "<p><strong>Nombre:</strong> " + estudiante.nombre1 + "</p>";
          resultado += "<p><strong>Puntos Técnicos:</strong> " + estudiante.nombre2 + "</p>";
          resultado += "<p><strong>Puntos HSE:</strong> " + estudiante.nombre3 + "</p>";

          resultado += "</div>";
          resultado += "</div>";
          resultado += "</div>";
          resultado += "</div>";

     return resultado;
 }
 function mostrarLista(estudiantes) {
     // TO DO: Iterar la lista del estudiantes para devolverlos en el formato que usa la función mostrar(estudiante)
     // Retornar el template de todos los estudiantes

  console.log(estudiantes);

          var resultado = "";
          resultado += "<div class='row'>";
          resultado += "<div class='col m12'>";
          resultado += "<div class='card blue-grey darken-1'>";
          resultado += "<div class='card-content white-text'>";
          for(var i=0; i<estudiantes.length; i++)
       {
         resultado += "<p><strong>Nombre:</strong> " + estudiantes[i].nombre1 + "</p>";
          resultado += "<p><strong>Puntos Técnicos:</strong> " + estudiantes[i].nombre2 + "</p>";
          resultado += "<p><strong>Puntos HSE:</strong> " + estudiantes[i].nombre3 + "</p>";

        }

        resultado += "</div>";
        resultado += "</div>";
        resultado += "</div>";
        resultado += "</div>";
        return resultado;

 }

 function buscar(nombre, estudiantes) {
     nombre=nombre.toLowerCase();
     var res="";

     for(var i=0; i<=estudiantes.length; i++)
      {
           if( nombre == estudiantes[i].nombre1)
           {
             res=estudiantes[i];

             return res;

           }
      }
 }

 function topTecnico(estudiantes) {

     var res = [];

     var newEstu=[];
     for(var i=0; i< estudiantes.length; i++)
     {

        newEstu[i] = estudiantes[i].nombre2;

     }
      newEstu.sort();
      var k = 0;
      for(var i=newEstu.length; i >= 0; i--)
      {
        console.log('primero en la lista '+newEstu[i]);
        for(var j = 0; j < estudiantes.length; j++){

          if(newEstu[i] === estudiantes[j].nombre2){
            res[k] = estudiantes[j];
            k++;
          }
        }
      }

      console.log(res);
     return res;

 }

function topHSE(estudiantes) {


     var res = [];

    var newEstu=[];
    for(var i=0; i< estudiantes.length; i++)
    {

       newEstu[i] = estudiantes[i].nombre3;

    }
     newEstu.sort();
     var k = 0;
     for(var i=newEstu.length; i >= 0; i--)
     {
       for(var j = 0; j < estudiantes.length; j++){

         if(newEstu[i] === estudiantes[j].nombre3){
           res[k] = estudiantes[j];
           k++;
         }
       }
     }

     console.log(res);
    return res;
 }
