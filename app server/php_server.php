<!DOCTYPE html>
<html ng-app="starter">
  <head>
    <meta charset="utf-8">
    
 <script src="https://www.gstatic.com/firebasejs/3.6.9/firebase.js"></script>
<script>
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAv1t3FJEWlc6fTFpuY1CbGdz8CASDqXfY",
    authDomain: "notification-430d4.firebaseapp.com",
    databaseURL: "https://notification-430d4.firebaseio.com",
    storageBucket: "notification-430d4.appspot.com",
    messagingSenderId: "686038483630"
  };
  firebase.initializeApp(config);

var ref = firebase.database().ref();
  var sync = ref.child('promotions');

setTimeout(function(){ 

  sync.on('value', function(snapshot) {
      console.log('firebase not'); 
}); 


}, 5000);
</script>
  </head>           
<?php

 if($_SERVER["REQUEST_METHOD"]=="GET"){
                      createStudent();
                  }
                  function createStudent(){

   
   $dbhost = "localhost";
$dbname = "marksman_wp873";
$dbusername = "marksman_wp873";
$dbpassword = "MxXrVy]O*v60";


$message = 'ye to sirf check';
$title = 'hay';
$path_to_fcm = 'https://fcm.googleapis.com/fcm/send';
$server_key = "AAAAn7sUgq4:APA91bGFCldDTzYDpiSUI0qkZHFbaHKFwy_yoVzf_CtFBM0Z_J8lvoJyui7gzEnWUfEjJsaConIiADOFV2puo0TgFYbxlaGBhRx56hTE7hDPKrp-mh8MMoh4pe9s_T7RSCOeHMYLhO1STgiHeXgkq1KL1p1VrG1M4g";
// $sql = "select fcm_token from fcm info";
// $result = mysqli_query($con,$sql);
// $row = mysqli_fetch_row($result);
// $key = $row[0];

$headers = array(
'Authorization:key=' .$server_key,
'Content-Type:application/json'
);

$fields = array('to'=> 'eCGdHO3B8LU:APA91bHR2WT65s_djUxFeNR0iWVWBBOiq7BSkEqBO5Ga5xXuqj4uUUww9ALQ_5dhdFZ0M5mmz9hD78YjNOvv-lhHmjmRwkdApTM3YDAC7jRXFFPNpMsAmUS1CObhP4yZHr4sXmkSPwHw','notification'=>array('title'=>$title,'body'=>$message));

$payload = json_encode($fields);

$curl_session = curl_init();
curl_setopt($curl_session, CURLOPT_URL, $path_to_fcm);
curl_setopt($curl_session, CURLOPT_POST, true);
curl_setopt($curl_session, CURLOPT_HTTPHEADER, $headers);
curl_setopt($curl_session, CURLOPT_RETURNTRANSFER, true);
curl_setopt($curl_session, CURLOPT_SSL_VERIFYPEER, false);
curl_setopt($curl_session, CURLOPT_IPRESOLVE, CURL_IPRESOLVE_V4);
curl_setopt($curl_session, CURLOPT_POSTFIELDS, $payload);

$result = curl_exec($curl_session);

curl_close($curl_session);
/*
mysqli_close($con);

$connect=  mysqli_connect($dbhost , $dbusername , $dbpassword , $dbname ) ;

$sql = "SELECT * FROM tbl_dryclean_items";  

                   $result=  mysqli_query($connect, $sql);
                   $num_of_rows=  mysqli_num_rows($result);
                   $temp_array=array();
                   if($num_of_rows>0){
                       while($row=  mysqli_fetch_assoc($result))
                       {


                           $temp_array[]=$row;                       }  header('content-type: application/json');
                   echo json_encode(array("result"=>$temp_array));         
                   }
                   
mysqli_close($connect);
*/
    }
?><body >


</body>
</html>