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

    function getNewCurrentItems(){

        $conn=openDB();

        try {
  
            $conn->beginTransaction();

            $riderName = $_REQUEST['rider'];

            $selectSql = "select mensaje from notis_usuario where rider = '" . $riderName . "' and leido = false";

            $select = $conn->prepare($selectSql);
            $select->execute();

            $data = $select->fetch();

            echo json_encode($data);

            $conn->commit();

        }catch (Exception $e) {
        
            $conn->rollBack();
        }

        $conn=closeDB();

        
    }
	

    getNewCurrentItems();

?>