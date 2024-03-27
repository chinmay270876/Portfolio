<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $fullname = $_POST['fullname'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    $to = "chinmay.pawan@gmail.com"; // 
    $subject = $subject;
    $body = "Name: $fullname\nEmail: $email\nPhone: $phone\n\n$message";

    if (mail($to, $subject, $body)) {
        echo "<script>alert('Message sent successfully.');</script>";
    } else {
        echo "<script>alert('Error occurred, please try again.');</script>";
    }
}
?>
