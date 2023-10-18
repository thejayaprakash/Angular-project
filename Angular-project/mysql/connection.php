<?php

header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

if(!isset($_POST)) die();
include('db.php');
session_start();

$con= mysqli_connect('localhost', 'root', '', 'user');

$response=[];
if($con ->connect_error){
die("connection failed:".$con->connect_error);
}


$username = mysqli_real_escape_string($con, $_POST['username']);
$email = mysqli_real_escape_string($con, $_POST['email']);
$password = mysqli_real_escape_string($con, $_POST['password']);
$mobileNo = mysqli_real_escape_string($con, $_POST['mobileNo']);

$query="INSERT INTO register(username,email,password,mobileNo) VALUES ('$username','$email','$password','$mobileNo')";

$result=mysqli_query($con,$query);
if(mysqli_num_rows($result)>0){
$response['status']="inserted";
}
else{
   
    $response['status']='error';
}

echo json_encode($response);
?>