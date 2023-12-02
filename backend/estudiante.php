<?php

    function insertarEstudiante($nombre, $cedula, $fechaNacimiento) {
        include_once("conexion_db.php");
        $sql = "INSERT INTO estudiante (nombre, cedula, fecha_nacimiento) VALUES ('$nombre', '$cedula', '$fechaNacimiento')";
        $respuseta = $mysqli->query($sql);
        return $respuseta;
    }

    function consultarEstudiante($cedula) {
        include_once("conexion_db.php");
        $sql = "SELECT * FROM estudiante";
        $respuseta = $mysqli->query($sql);

        while ( $fila = $respuseta->fetch_assoc() ) {
            echo "estudiante:".$fila["nombre"]."<br/>";
        }
    }

    function sumarNumero($numero1, $numero2) {
        return $numero1 + $numero2;
    }

    function eliminarEstudiante($cedula) {
        echo "El estudiante con cedula $cedula fue eliminado";
    }
?>