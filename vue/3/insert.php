<?php
    $x = 's';
    $dbms = 'mysql';
    $dbname = 'vue';
    $host = 'localhost';
    $user = 'root';
    $password = 'silite';
    $dsn = "$dbms:host=$host;dbname=$dbname";
    $connID = new PDO($dsn , $user, $password);
    $sql = 'insert into `mmp` (Name, Ctime) VALUES ("'. $_POST['name']. '", NOW())';
    $result = $connID->exec($sql);
    echo $result;