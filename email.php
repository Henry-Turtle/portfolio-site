<?php

$name = $_POST['contact-name'];
$email = $_POST['contact-email'];
$message = $_POST['contact-message'];

mail("212whiteh@gmail.com", "Message from Website - " . $name, $message . "\n" . "Contact me at ".$email);

echo "<h1>HI</h1>";
?>