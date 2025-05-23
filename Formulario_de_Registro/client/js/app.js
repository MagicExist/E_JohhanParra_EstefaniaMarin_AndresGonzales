function validarFormulario() {
  let esValido = true;

  const nombre = document.getElementById('input_nombre').value.trim();
  const apellido = document.getElementById('input_apellido').value.trim();
  const identificacion = document.getElementById('input_identificacion').value.trim();
  const fecha = document.getElementById('input_fecha_nacimiento').value.trim();
  const telefono = document.getElementById('input_telefono').value.trim();
  const email = document.getElementById('input_email').value.trim();
  const redes = document.getElementById('input_red_social').value.trim();
  const formulario = document.getElementById('formulario')

  formulario.addEventListener('submit', function(event) {
    event.preventDefault(); // Esto evita la recarga/redirección
  
    // Aquí puedes validar, enviar datos con fetch/ajax, etc.
    alert('Formulario enviado sin redirección');
  });

  // Limpiar errores
  document.querySelectorAll('.error').forEach(el => el.textContent = '');

  // Validar nombre
  if (!nombre || !/^[a-zA-ZÁÉÍÓÚáéíóúñÑ\s]+$/.test(nombre)) {
    document.getElementById('errorNombre').textContent = 'Ingrese solo letras y no deje vacío.';
    esValido = false;
  }

  if (!apellido || !/^[a-zA-ZÁÉÍÓÚáéíóúñÑ\s]+$/.test(apellido)) {
    document.getElementById('errorApellido').textContent = 'Ingrese solo letras y no deje vacío.';
    esValido = false;
  }
  // Validar identificación
  if (!identificacion || !/^\d+$/.test(identificacion)) {
    document.getElementById('errorIdentificacion').textContent = 'Solo números y no puede estar vacío.';
    esValido = false;
  }

  // Validar fecha (formato DD/MM/YYYY)
  if (!fecha || !/^\d{2}\/\d{2}\/\d{4}$/.test(fecha)) {
    document.getElementById('errorFecha').textContent = 'Formato inválido (DD/MM/YYYY).';
    esValido = false;
  }

  // Validar teléfono
  if (!telefono || !/^\d+$/.test(telefono)) {
    document.getElementById('errorTelefono').textContent = 'Solo números y no puede estar vacío.';
    esValido = false;
  }

  // Validar email
  if (!email || !email.includes('@')) {
    document.getElementById('errorEmail').textContent = 'Debe contener "@" y no puede estar vacío.';
    esValido = false;
  }

  // Validar redes sociales
  if (!redes) {
    document.getElementById('errorRedes').textContent = 'Este campo no puede estar vacío.';
    esValido = false;
  }

  return esValido;
}

document.addEventListener("DOMContentLoaded", function () {
  const formulario = document.querySelector("form");
  const generoSelect = document.getElementById("input_genero");

  formulario.addEventListener("submit", function (event) {
    if (generoSelect.value === "") {
      alert("Por favor, seleccione un género.");
      generoSelect.classList.add("is-invalid"); // clase de Bootstrap para resaltar error
      event.preventDefault(); // evita que se envíe el formulario
    } else {
      generoSelect.classList.remove("is-invalid");
      generoSelect.classList.add("is-valid");
    }
  });
});

