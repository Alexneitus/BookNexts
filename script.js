const imagenes = [
  "https://letrasclaras.net/wp-content/uploads/interfaz-moderna-biblioteca-virtual.webp",
  "https://i0.wp.com/imgs.hipertextual.com/wp-content/uploads/2011/10/webgl-bookcase.jpg?fit=1226%2C690&quality=50&strip=all&ssl=1",
  "https://cdn.domestika.org/c_fill,dpr_auto,f_auto,q_auto/v1704314374/content-items/014/754/935/interior_La%2520Biblioteca%2520de%2520los%2520nuevos%2520comienzos%2520by%2520Michiko%2520Aoyama-original.jpg?1704314374",
];

let indiceActual = 0;

function cambiarImagen(direccion) {
  indiceActual += direccion;
  if (indiceActual < 0) {
    indiceActual = imagenes.length - 1;
  } else if (indiceActual >= imagenes.length) {
    indiceActual = 0;
  }

  document.getElementById("carousel-image").src = imagenes[indiceActual];
}
