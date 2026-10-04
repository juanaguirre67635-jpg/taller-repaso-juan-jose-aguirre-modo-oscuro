
// =======================================================
// RETO 1: MODO OSCURO INTERACTIVO
// =======================================================

// 1. SELECCIÓN DE ELEMENTOS DEL DOM

// getElementById sirve para buscar y seleccionar un elemento
// del HTML por medio de su identificador (id). Le pasamos
// 'btn-toggle-tema' porque ese es el id del botón que queremos
// utilizar para activar el modo oscuro.

const btnTema = document.getElementById('btn-toggle-tema');

// Seleccionamos document.body porque queremos acceder
// directamente al cuerpo de la página HTML, donde se aplicarán
// los cambios de apariencia, como el modo oscuro.

const body = document.body;

// 2. MANEJO DE EVENTOS

// El evento 'click' se activa cuando el usuario hace clic
// sobre el botón. La función anónima es la acción que se
// ejecutará automáticamente cuando ocurra ese evento.

btnTema.addEventListener('click', function() {

// classList.toggle('tema-oscuro') sirve para agregar o quitar
// la clase 'tema-oscuro' del elemento. Si la clase no existe,
// la agrega; si ya existe, la elimina. De esta manera,
// podemos alternar entre el modo claro y el modo oscuro.

    body.classList.toggle('tema-oscuro');

    // Cambiar el texto del botón dependiendo del estado
 if (body.classList.contains('tema-oscuro')) {
 btnTema.textContent = "☀️ Modo Claro";
 } else {
 btnTema.textContent = "🌙 Modo Oscuro";
 }
});
// =======================================================
 // RETO 2: SALUDO DINÁMICO
 // =======================================================

 // 1. SELECCIÓN DEL CONTENEDOR[cite: 2]
 const textoSaludo = document.getElementById('saludo-tiempo-real');

 // 2. LÓGICA DE TIEMPO
 const fechaActual = new Date();
 const horaActual = fechaActual.getHours();
 let mensaje = "";

 if (horaActual >= 6 && horaActual < 12) {
 mensaje = "¡Buenos días! Espero que tengas una excelente mañana.";
 } else if (horaActual >= 12 && horaActual < 18) {
 mensaje = "¡Buenas tardes! Gracias por visitar mi perfil.";
 } else {
 mensaje = "¡Buenas noches! Descubre mi trabajo.";
 }

// 3. INYECCIÓN EN EL DOM[cite: 2]
// textContent permite agregar texto normal dentro de un elemento, 
// mientras que innerHTML permite insertar texto junto con etiquetas
// HTML, como párrafos, títulos o enlaces. En este caso usamos
// textContent porque solo necesitamos mostrar un mensaje de texto,
// sin agregar etiquetas HTML. Además, es más seguro porque evita 
// que el contenido se interprete como código HTML.
 textoSaludo.textContent = mensaje;

