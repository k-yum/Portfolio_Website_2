<?php
 
$post_data = file_get_contents("php://input");
$data = json_decode($post_data);
 
//Just to display the form values
echo "Name : " . $data->name;
echo "Email : " . $data->email;
echo "Message : " . $data->message;
 
// sned an email
$to = $data->email;
 
$subject = 'kevinyum.com contact';
 
$message = $data->message;
 
$headers = 'From: ' . $data->name . 'submit@kevinyum.com' . "\r\n" .
        'Reply-To: kevinyumdesign@gmail.com' . "\r\n" .
        'X-Mailer: PHP/' . phpversion();
 
//php mail function to send email on your email address
mail($to, $subject, $message, $headers);
 
?>