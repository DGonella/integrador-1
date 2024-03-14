document.getElementById('alta-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var nombre = document.getElementById('nombre').value;
    var precio = document.getElementById('precio').value;
    var stock = document.getElementById('stock').value;
    var marca = document.getElementById('marca').value;
    var categoria = document.getElementById('categoria').value;
    var descripcionCorta = document.getElementById('descripcion-corta').value;
    var descripcionLarga = document.getElementById('descripcion-larga').value;
    var edadDesde = document.getElementById('edad-desde').value;
    var edadHasta = document.getElementById('edad-hasta').value;
    var foto = document.getElementById('foto').value;

    if (!nombre.match(/^[a-zA-Z\s]+$/)) {
      alert('Nombre inválido. Debe contener solo letras y espacios.');
      return false;
    }

    if (isNaN(parseFloat(precio))) {
      alert('Precio inválido. Debe ser un número.');
      return false;
    }

    if (isNaN(parseInt(stock))) {
      alert('Stock inválido. Debe ser un número entero.');
      return false;
    }

    if (!marca.match(/^[a-zA-Z\s]+$/)) {
      alert('Marca inválida. Debe contener solo letras y espacios.');
      return false;
    }

    if (!categoria.match(/^[a-zA-Z\s]+$/)) {
      alert('Categoría inválida. Debe contener solo letras y espacios.');
      return false;
    }

    if (descripcionCorta.length < 10) {
      alert('La descripción corta debe tener al menos 10 caracteres.');
      return false;
    }

    if (descripcionLarga.length < 20) {
      alert('La descripción larga debe tener al menos 20 caracteres.');
      return false;
    }

    if (isNaN(parseInt(edadDesde)) || isNaN(parseInt(edadHasta))) {
      alert('Edad inválida. Debe ser un número entero.');
      return false;
    }

    alert('Formulario enviado correctamente.');
    return true;
  });