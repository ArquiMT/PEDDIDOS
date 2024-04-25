<?php
$servidor = "localhost";
$usuario = "root";
$contrasena = "";
$basedatos = "peddidos";

$conexion = mysqli_connect($servidor, $usuario, $contrasena, $basedatos);

// Verificar si se ha enviado el formulario para agregar un producto
if (isset($_POST['agree-food'])) {
    if (strlen($_POST['FoodName']) >= 1 && strlen($_POST['Categoria']) >= 1 && strlen($_POST['Precio']) >= 1) {
        $FoodName = trim($_POST['FoodName']);
        $Categoria = trim($_POST['Categoria']);
        $Precio = trim($_POST['Precio']);
        $rutaImagen = $_POST['rutaImagen'];  // Obtener la ruta de la imagen

        // Verificar si el producto ya existe
        $consultaExistencia = "SELECT FoodName FROM food WHERE FoodName = '$FoodName'";
        $resultadoExistencia = mysqli_query($conexion, $consultaExistencia);

        if (mysqli_num_rows($resultadoExistencia) > 0) {
        } else {
            // Insertar el nuevo producto con la imagen
            $consulta = "INSERT INTO `food`(`FoodName`, `Categoria`, `Precio`, `Imagen`) VALUES ('$FoodName','$Categoria','$Precio','$rutaImagen')";
            $resultado = mysqli_query($conexion, $consulta);
        }
    }
}

// Código para mostrar los productos con sus imágenes
$sqlMostrarfood = "SELECT * FROM food";
$resultadoMostrarfood = mysqli_query($conexion, $sqlMostrarfood);

if ($resultadoMostrarfood->num_rows > 0) {
    echo "<div class=\"contentfoods\">";
    while ($fila = $resultadoMostrarfood->fetch_assoc()) {
        echo "<div class=\"contenproduct\">";
        echo "<div class=\"circle\"></div>";  // Círculo a la izquierda
        echo "<div>";
        echo "<strong>Producto:</strong> " . $fila["FoodName"] . "<br>";
        echo "<strong>Categoria:</strong> " . $fila["Categoria"] . "<br>";
        echo "<strong>Precio:</strong> $" . $fila["Precio"] . "<br>";
        echo "<img src='" . $fila["Imagen"] . "' alt='Imagen del producto' style='width:100px;height:100px;'>";  // Mostrar la imagen
        echo "</div>";
        echo "<button class=\"edit-button\">Editar</button>";  // Botón Editar
        echo "</div>";
    }
    echo "</div>";
} else {
    echo "<p>AUN NO HAY PRODUCTOS QUE VENDER</p>";
}

mysqli_close($conexion);
?>
