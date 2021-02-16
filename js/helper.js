

// Funciones que se utilizan a lo largo del juego / Reutilizar

// Generador de numeros aleatorios 

// Aplicando nueva version de javascript e6 con funciones flechas

let getRandomNumber = size => {     // Math biblioteca de js que nos deja acceder funciones matematicas con un metodo floor que se encarga dejando el numero entero  

  return Math.floor(Math.random() * size); // que tome lo de por * el size anteriors
}


// Funcion para unir puntos / Medir la distancia entre 2 puntos con pitagoras

// Tomando los puntos

let getDistance = (e, target) => { // e De Evento cuando el usuario da click y despues donde esta el mapa del tesoro
  let diffX = e.offsetX - target.x;
  let diffY = e.offsetY - target.y;
  return Math.sqrt((diffX * diffX) + (diffY * diffY)); // Alicando el teoremade pitagoras

}




// Dar pistas al usuario con parametros al hacer click

let getDistanceHint = distance => {
  if (distance < 30) {
    return "Extremadamente Caliente 🥵";
  } else if (distance < 40) {
    return "Muy Caliente 🤯";
  } else if (distance < 60) {
    return "Caliente 🤒";
  } else if (distance < 100) {
    return "Calido 😳";
  } else if (distance < 180) {
    return "Frio 🥶";
  } else if (distance < 360) {
    return "Muy frio 😱";
  } else {
    return "Congelado 😵";
  }
}
