document.addEventListener('DOMContentLoaded', () => {
    const baseUrl = 'http://localhost:3000/api/proyectos/tipos';
    const btnListar = document.getElementById('btn-listar');
    const btnCrear = document.getElementById('btn-crear');
    const btnActualizar = document.getElementById('btn-actualizar');
    const btnEliminar = document.getElementById('btn-eliminar');
    const proyectoForm = document.getElementById('proyecto-form');
    const statusCodeElement = document.getElementById('status-code');
    const responseMessageElement = document.getElementById('response-message');
  
    function showResponse(statusCode, message) {
      statusCodeElement.textContent = statusCode;
  
      if (statusCode >= 200 && statusCode < 300) {
        statusCodeElement.style.color = 'green';
      } else if (statusCode >= 400 && statusCode < 500) {
        statusCodeElement.style.color = 'orange';
      } else if (statusCode >= 500) {
        statusCodeElement.style.color = 'red';
      } else {
        statusCodeElement.style.color = 'black';
      }
  
      responseMessageElement.textContent = typeof message === 'object'
        ? JSON.stringify(message, null, 2)
        : message;
    }
  
    function validarCampos() {
      const id = document.getElementById('id').value.trim();
      const codigo = document.getElementById('codigo').value.trim();
      const abreviatura = document.getElementById('abreviatura').value.trim();
      const descripcion = document.getElementById('descripcion').value.trim();
      const fecha_registro  = document.getElementById('fecha_registro').value.trim();
  

      if (!/^\d{8}$/.test(codigo)) {
        alert('El código debe contener exactamente 8 dígitos numéricos.');
        return false;
      }
  
      if (abreviatura.length !== 6) {
        alert('La abreviatura debe contener exactamente 6 caracteres.');
        return false;
      }
  
      if (!descripcion) {
        alert('La descripción no puede estar vacía.');
        return false;
      }
  
      if (!fecha_registro ) {
        alert('La fecha_registro  de registro no puede estar vacía.');
        return false;
      }
  
      return true;
    }
  
    // Listar tipos de proyecto (GET)
    btnListar.addEventListener('click', async () => {
      try {
        const response = await fetch(baseUrl);
        const data = await response.json();
        showResponse(response.status, data);
      } catch (error) {
        showResponse(500, { error: error.message });
      }
    });
  
    // Crear tipo de proyecto (POST)
    btnCrear.addEventListener('click', async () => {
      if (!validarCampos("POST")) return;
  
      const formData = new FormData(proyectoForm);
      const tipoProyecto = {
        codigo: formData.get('codigo'),
        descripcion: formData.get('descripcion'),
        abreviatura: formData.get('abreviatura'),
        fecha_registro: formData.get('fecha_registro')
      };
  
      try {
        const response = await fetch(baseUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(tipoProyecto)
        });
        const data = await response.json();
        showResponse(response.status, data);
      } catch (error) {
        showResponse(500, { error: error.message });
      }
    });
  
    // Actualizar tipo de proyecto (PUT)
    btnActualizar.addEventListener('click', async () => {
      if (!validarCampos()) return;
  
      const formData = new FormData(proyectoForm);
      const id = formData.get('id');
  
      if (!id) {
        showResponse(400, { error: 'Se requiere un ID para actualizar' });
        return;
      }
  
      const tipoProyecto = {
        id: formData.get('id'),
        codigo: formData.get('codigo'),
        descripcion: formData.get('descripcion'),
        abreviatura: formData.get('abreviatura'),
        fecha_registro: formData.get('fecha_registro')
      };
  
      try {
        const response = await fetch(`${baseUrl}/${id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(tipoProyecto)
        });
        const data = await response.json();
        showResponse(response.status, data);
      } catch (error) {
        showResponse(500, { error: error.message });
      }
    });
  
    // Eliminar tipo de proyecto (DELETE)
    btnEliminar.addEventListener('click', async () => {
      const id = document.getElementById('id').value;
  
      if (!id) {
        showResponse(400, { error: 'Se requiere un ID para eliminar' });
        return;
      }
  
      if (!confirm('¿Está seguro de eliminar este tipo de proyecto?')) return;
  
      try {
        const response = await fetch(`${baseUrl}/${id}`, {
          method: 'DELETE'
        });
        const data = await response.json();
        showResponse(response.status, data);
      } catch (error) {
        showResponse(500, { error: error.message });
      }
    });
  
    // Menú lateral
    const toggleBtn = document.getElementById('toggle-menu');
    const menu = document.querySelector('.container2');
  
    toggleBtn.addEventListener('click', () => {
      menu.classList.toggle('active');
    });
  });
  