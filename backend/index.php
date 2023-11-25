<!DOCTYPE html>
<html lang="es">
<head>
    <title>Backend</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tu Plantilla</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <style>
        /* Estilos personalizados aquí */
    </style>
</head>
<body>
    <header>
        <!-- Encabezado aquí -->
    </header>

    <main>
        <p>Hello Backend!</p>

        <table class="table">
            <thead>
                <tr>
                    <th>Documento</th>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Correo</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>123456789</td>
                    <td>John</td>
                    <td>Doe</td>
                    <td>johndoe@example.com</td>
                </tr>
                <tr>
                    <td>987654321</td>
                    <td>Jane</td>
                    <td>Smith</td>
                    <td>janesmith@example.com</td>
                </tr>
            </tbody>
        </table>

        <form action="http://localhost/universitas/backend/suma.php" method="post"  enctype='multipart/form-data'>
            <div class="form-group">
                <label for="nombre">Nombre</label>
                <input type="text" class="form-control" id="nombre" name="nombre" required>
            </div>
            <div class="form-group">
                <label for="apellido">Apellido</label>
                <input type="text" class="form-control" id="apellido" name="apellido" required>
            </div>
            <div class="form-group">
                <label for="edad">Edad</label>
                <input type="number" class="form-control" id="edad" name="edad" required>
            </div>
            <div class="form-group">
                <label for="correo">Correo</label>
                <input type="email" class="form-control" id="correo" name="correo" required>
            </div>
            <div class="form-group">
                <label for="genero">Género</label>
                <select class="form-control" id="genero" name="genero" required>
                    <option value="masculino">Masculino</option>
                    <option value="femenino">Femenino</option>
                    <option value="otro">Otro</option>
                </select>
            </div>
            <div class="form-group">
                <input type="file" class="form-control-file" id="foto" name="foto" required>
            </div>
            <button type="submit" class="btn btn-primary">Enviar</button>
        </form>
    
  </main>

  <footer>
    <!-- Pie de página aquí -->
  </footer>

  <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.4/dist/umd/popper.min.js"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
  <script>
    // Scripts personalizados aquí
  </script>
</body>
</html>
