const input = document.getElementById('tareaIngresada');
const boton = document.getElementById('botonAgregar');
const lista = document.querySelector('#listaTareas');

// Función para agregar tarea
boton.onclick = function() {
    if (input.value === '') return;

    // crear elemento de lista 
    const li = document.createElement('li');
    li.textContent = input.value + ' ';
    li.classList.add('agregar-tarea')

    // botón de eliminar
    const botonEliminar= document.createElement('button');
    botonEliminar.textContent = 'Eliminar';
    botonEliminar.classList.add('eliminar-boton');
    li.appendChild(botonEliminar)

    // Eliminar tarea   
    
    botonEliminar.onclick = function() {
        li.remove();
    };


    // Agregar a la lista
    lista.appendChild(li);

    li.addEventListener('click', () => {
        li.classList.toggle('completed');
    });

    // Limpiar el campo
    input.value = '';
};