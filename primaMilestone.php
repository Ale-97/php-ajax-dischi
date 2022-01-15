<?php

require_once __DIR__ . "/database/database.php";

foreach($database as $album){
    echo "<br>";
    foreach($album as $key => $data){
        echo $key . ": " . $data . "<br>"; 
    };

};
?>