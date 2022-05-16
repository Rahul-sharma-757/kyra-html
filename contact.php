<?php 
if ($_POST['name'] && $_POST['email'] && $_POST['company'] && $_POST['message']) {
  if ($_POST['company']) {
    mail(
        "hr@prlxweb.com, parallaxweb.in@gmail.com, rahul.prlxweb@gmail.com",
        "[Kyra Technologies] New message from ".$_POST['email'],
        "Message - ".$_POST['message'],
        "Name - ".$_POST['name'] . ", Company - " .$_POST['company'] . ", Email - " .$_POST['email']
      );
      echo "<h1 style = 'text-align: center;'>Thank you for your message. Your message was Successfully Received.</h1>
      ";
  } else {
    echo "<h1>Something went wrong! </h1>";
  }
}	
?>