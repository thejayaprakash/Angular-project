<?php

$con= mysqli_connect('localhost', 'root', '', 'user');


if ($con) {
    echo "Connection successful!";
    // You can perform database operations here
} else {
    echo "Connection failed: " . mysqli_connect_error();
}

?>