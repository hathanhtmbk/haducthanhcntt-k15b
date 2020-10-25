<?php 
require 'db.php';
$data=json_decode(file_get_contents('php://input'),true);
$name=$data['name'];
$about=$data['about'];
$price=$data['price'];
$image="";

$query ="INSERT INTO tbl_maincourse VALUES(null,'$name','$about','$price','$image')";
if(mysqli_query($conn,$query)){
	echo "Success";
}
else
{
	echo "Error";
}
 ?>
