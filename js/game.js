// import {
//   getRandomNumber,
//   getDistance,
//   getDistanceHint
// } from './helper';


// alert('works');

//  Definir el ancho y alto con constantes
const WIDTH = 400;
const HEIGH = 400;


// Generando el mapa del tesoro 

let target = {
  x: getRandomNumber(WIDTH),
  y: getRandomNumber(HEIGH)
};

// Obtener el clik del usuario 

let $map = document.querySelector('#map');  // $ hae referencia al HTML
let $distance = document.querySelector('#distance');
let clicks = 0;
// Obtener cuando da click e usuario 

// Escucha al elemento click 

$map.addEventListener('click', function (e) {
  console.log('click');
  clicks++;
   // Cordenada del usuario let distancie 
  let distance = getDistance(e, target);
  let distanceHint = getDistanceHint(distance);
  $distance.innerHTML = `<h1>${distanceHint}</h1>`;

// Cuando el usuario esta bastante cerca 

  if (distance < 20 ) {
    alert(`Encontraste el tesoro ! en  ${clicks} clicks!`);
    location.reload();
  }
});
