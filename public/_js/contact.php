<?php
   /*
   * Collect all Details from Angular HTTP Request.
   */ 
    $postdata 	= file_get_contents("php://input");
    $request 	= json_decode($postdata);
    $name 		= $request->name;
	$email 		= $request->email;
	$message 	= $request->message;
    /*
     * You can use parameter for further work.
    */  
	echo  contactus($email, $name, $message);
	// Contact US
	function contactus($to, $name, $message){
			$response = array();
			if(!empty($to)){
					// To send HTML mail, the Content-type header must be set
					$headers  = 'MIME-Version: 1.0' . "\r\n";
					$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
					
					// Additional headers
					$headers .= 'To: Kevin <kevinyumdesign@gmail.com>' . "\r\n";
					$headers .= 'From: ' . ucwords($name) . ' <'. $to. '>' . "\r\n";
					//$headers .= 'Cc: cc@xyz.com' . "\r\n";
					//$headers .= 'Bcc: bcc@xyz.com' . "\r\n";

					$message = '<div  style="background:#F5F5F5; padding:10px;">
									<p>'.$message.'</p><br />
									<div>Name : '.$name.'</div><br />
							   </div>';
					mail($to, $message, $headers);
					$response['response'] = 'success';
				
			}else{
				$response['response'] = 'error man';
			}
			echo $response['response'];
	}/*...ends[contactus]...*/
  
?>