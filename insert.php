<?php
    
    function openDB(){

        $servername = "localhost";
        $username = "root";
        $password = "mysql";
        $conn = null;

        try {
            $conn = new PDO("mysql:host=$servername;dbname=notis", $username, $password);
            $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        } catch(PDOException $e) {
            echo "Connection failed: " . $e->getMessage();
        }

        return $conn;
    }

    function closeDB(){

        return null;
    }

    function crearUsuario(){

        $conn=openDB();

        try {
  
            $conn->beginTransaction();

            $insertSql = "INSERT INTO notis_usuario VALUES (:id,:nombre)";

            $nombre = "prueba";

            $insert = $conn->prepare($insertSql);
            $null = null;
            $insert->bindParam(':id',$null);
            $insert->bindParam(':nombre',$nombre);
            $insert->execute();

            $conn->commit();

        }catch (Exception $e) {
        
            $conn->rollBack();
        }

        $conn=closeDB();
    }
	

    crearUsuario();

?>