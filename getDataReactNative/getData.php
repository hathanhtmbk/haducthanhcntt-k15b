<?php 
	require 'db.php';
	$query="SELECT * FROM tbl_maincourse";
	$data=mysqli_query($conn,$query);

	class MainCourse{
		function MainCourse($id,$name,$about,$price,$image){
			$this->id=$id;
			$this->name=$name;
			$this->about=$about;
			$this->price=$price;
			$this->image=$image;
			
		}
	}
		$arrayJson=array();
		while ($row=mysqli_fetch_assoc($data)) {
		array_push($arrayJson, new MainCourse($row['id'],$row['name'],$row['about'],$row['price'],$row['image']));
	}

	echo json_encode($arrayJson);

	
 ?>