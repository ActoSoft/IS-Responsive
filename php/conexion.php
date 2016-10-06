<?php

$host = "";
$user = "";
$pass = "";
$basedatos = "Comentarios";
$conexion = mysql_connect($host, $user, $pass) or die ("Problemas en la conexion");
mysql_select_db($basedatos, $conexion) or die ("Problemas con la base de datos");

?>