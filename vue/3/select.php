<?php
    $dbms = 'mysql';
    $dbname = 'vue';
    $host = 'localhost';
    $user = 'root';
    $password = 'silite';
    $dsn = "$dbms:host=$host;dbname=$dbname";
    $connID = new PDO($dsn , $user, $password);
//    try {
//        $connID = new PDO($dsn , $user, $password);
//        echo "right";
//    }catch(Exception $e){
//        echo $e->getMessage()."<br>";
//    }

    $result = $connID->query('select * from mmp;')->fetchAll();
    $data = Array();
    for ($i = 0; $i < count($result); $i ++) {
        $data[$i]['id'] = $result[$i]['id'];
        $data[$i]['name'] = $result[$i]['Name'];
        $data[$i]['ctime'] = $result[$i]['Ctime'];
    }
    $json = json_encode($data);
    exit($json);
