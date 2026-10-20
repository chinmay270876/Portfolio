<?php
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Location: index.html');
    exit;
}

function field(string $key): string
{
    $value = $_POST[$key] ?? '';
    if (!is_string($value)) {
        return '';
    }

    return trim(str_replace(["\r", "\n"], ' ', $value));
}

$fullname = field('fullname');
$email = field('email');
$phone = field('phone');
$subject = field('subject');
$message = trim(str_replace(["\r\n", "\r"], "\n", (string) ($_POST['message'] ?? '')));

$phoneOk = $phone === '' || preg_match('/^[+0-9().\\-\\s]{7,20}$/', $phone) === 1;
$valid = $fullname !== ''
    && $subject !== ''
    && $message !== ''
    && filter_var($email, FILTER_VALIDATE_EMAIL)
    && $phoneOk;

$sent = false;
if ($valid) {
    $body = "Name: {$fullname}\nEmail: {$email}\nPhone: {$phone}\n\n{$message}";
    $headers = 'Reply-To: ' . $email;
    $sent = @mail('chinmay.pawan@gmail.com', $subject, $body, $headers);
}

$title = $sent ? 'Message sent' : 'Message not sent';
$notice = $sent
    ? 'Thanks. Your message was sent.'
    : 'The message could not be sent. Check the form and try again, or email chinmay.pawan@gmail.com.';
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo htmlspecialchars($title, ENT_QUOTES, 'UTF-8'); ?></title>
</head>
<body>
    <p><?php echo htmlspecialchars($notice, ENT_QUOTES, 'UTF-8'); ?></p>
    <p><a href="index.html">Back to the portfolio</a></p>
</body>
</html>
