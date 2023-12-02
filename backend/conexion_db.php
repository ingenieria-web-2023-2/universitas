<?php

    $host= '127.0.0.1';
    $puerto = 3306;
    $basedatos= 'universitas';
    $usuario= 'root';
    $contrasena= '';

    //MySQLi
    $mysqli = new mysqli("$host:$puerto", $usuario, $contrasena, $basedatos);
    if ($mysqli->connect_errno) {
    die( "Fallo la conexión al servidor MySQLi: (" . $mysqli -> mysqli_connect_errno() 
    . ") " . $mysqli -> mysqli_connect_error());
    }
?>