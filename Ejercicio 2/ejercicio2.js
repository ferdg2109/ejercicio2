document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar que el formulario se envíe automáticamente

    // Capturar los valores del formulario
    let nombre = document.getElementById('nombre').value.trim();
    let apellidos = document.getElementById('apellidos').value.trim();
    let edad = parseInt(document.getElementById('edad').value);

    // Validar que los campos no estén vacíos
    if (nombre === "") {
        alert("Por favor, ingresa un nombre.");
        document.getElementById('nombre').focus();
        return;
    }

    if (apellidos === "") {
        alert("Por favor, ingresa los apellidos.");
        document.getElementById('apellidos').focus();
        return;
    }

    if (isNaN(edad) || edad <= 0) {
        alert("Por favor, ingresa una edad válida mayor a 0.");
        document.getElementById('edad').focus();
        return;
    }

    // Si la validación es exitosa, mostrar los datos
    document.getElementById('mostrar-nombre').textContent = nombre;
    document.getElementById('mostrar-apellidos').textContent = apellidos;
    document.getElementById('mostrar-edad').textContent = edad;

    // Mostrar la caja de información
    document.getElementById('info-box').style.display = 'block';
});

document.getElementById('cerrar').addEventListener('click', function() {
    // Ocultar la caja de información
    document.getElementById('info-box').style.display = 'none';

    // Limpiar el formulario
    document.getElementById('formulario').reset();

    // Colocar el foco en el primer campo
    document.getElementById('nombre').focus();
});
