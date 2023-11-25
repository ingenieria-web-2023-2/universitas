<?php 
    echo 'Hola poli!!!!';
    echo "Hola clase";

    $numero1 = 5;
    $numero2 = 10;
    $suma = $numero1 + $numero2;

    echo "<br/><br/><br/>";
    echo "La suma de $numero1 + $numero2 es: $suma";

    //echo phpinfo();
    echo gettype($suma);

    /** 
     * Arreglos 
     * */
    $arreglo = array(1,2,3,true,5,6,7,"Hola",9,array(2.3,4.5,6.7));
    array_push($arreglo, "Julian", "oscar", "daniel"); 
    echo "<pre>";
    print_r($arreglo);
    var_dump($arreglo);
    echo $arreglo[9][1];
    

    $semanas = [
        "julian1" => "Miercoles",
        "Martes",
        "Lunes",
    ];
    asort($semanas);
    print_r($semanas);


    $numeros = array_fill(1000,2000, 6);

    //var_dump($numeros);

    /**
     * $_SERVER
     */

    print_r($_SERVER);


    /**
     * $_GET
     */
    print_r($_GET);
    echo "</pre>";
?>