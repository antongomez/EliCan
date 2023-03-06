const buscar = document.getElementById('botonBuscar');
const cita = document.getElementById('cita');
const cita2 = document.getElementById('cita2');

if (buscar) {
    buscar.addEventListener('click', event => {
        cita2.classList.remove("d-none");
        cita.classList.add("h-auto");
    })
}