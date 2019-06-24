var miTitulo = document.querySelector('h1');
miTitulo.innerHTML = 'Hello World!';

function multiplica(num1, num2) {
  var resultado = num1 * num2;
  return resultado
}

document.querySelector('h1').onclick = function() {
  alert('Ouch! Deja de pincharme!');
}

var miImage = document.querySelector('img');

miImage.onclick = function () {
    var miSrc = miImage.getAttribute('src');
    if (miSrc === 'images/firefox.png') {
      miImage.setAttribute('src','images/family.jpg');
    } else {
      miImage.setAttribute('src', 'images/firefox.png');
    }
}

var miBoton = document.querySelector('button');

function establecerNombreUsuario() {
  var miNombre = prompt('Por favor, ingresa tu nombre.');
  localStorage.setItem('nombre', miNombre);
  miTitulo.textContent = 'Mozilla es fresco, ' + miNombre;
}

if (!localStorage.getItem('nombre')) {
  establecerNombreUsuario();
} else {
  var nombreAlmacenado = localStorage.getItem('nombre');
  miTitulo.textContent = 'Mozilla es fresco, ' + nombreAlmacenado;
}

miBoton.onclick = function() {
  establecerNombreUsuario();
}