<?php

include 'conexion.php';
header("Content-Type: text/html;charset=utf-8");

$Nombre = $_POST['name'];
$Correo = $_POST['email'];
$Comentario = $_POST['correo'];

mysql_query("SET NAMES 'utf8'");

$query = "INSERT INTO Comentarios(Nombre, Correo, Comentario) values ('$Nombre','$Apellido','$Comentario)";
mysql_query($query, $conexion) or die ("Problemas al guardar comentario, intenta de nuevo más tarde");

header("Location: ../comentarioenviado.html")

?>