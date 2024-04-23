<?php
// Получаем данные из POST-запроса
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

// Проверяем, был ли загружен файл
if(isset($_FILES['file']) && $_FILES['file']['error'] === UPLOAD_ERR_OK) {
    $file = $_FILES['file']['tmp_name'];
    $file_name = $_FILES['file']['name'];
    $file_type = $_FILES['file']['type'];
    
    // Добавляем вложение к письму
    $attachments = array(
        'name' => $file_name,
        'content' => file_get_contents($file),
        'type' => $file_type
    );
}

// Устанавливаем адрес получателя
$to = 'info@rdcenter.ru';
// Устанавливаем тему письма
$subject = 'Новое письмо с сайта R&D Center';

// Создаем заголовки письма
$headers = "From: $name <$email>\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "Content-Type: multipart/mixed; boundary=\"boundary\"\r\n";

// Создаем тело письма
$body = "--boundary\r\n";
$body .= "Content-Type: text/plain; charset=\"utf-8\"\r\n";
$body .= "Content-Transfer-Encoding: 8bit\r\n";
$body .= "\r\n";
$body .= "Имя: $name\r\n";
$body .= "Email: $email\r\n";
$body .= "Сообщение: $message\r\n";
$body .= "\r\n";

// Добавляем вложение, если оно есть
if(isset($attachments)) {
    $attachment = chunk_split(base64_encode($attachments['content']));
    $body .= "--boundary\r\n";
    $body .= "Content-Type: $attachments[type]; name=\"$attachments[name]\"\r\n";
    $body .= "Content-Disposition: attachment; filename=\"$attachments[name]\"\r\n";
    $body .= "Content-Transfer-Encoding: base64\r\n";
    $body .= "\r\n";
    $body .= $attachment;
    $body .= "\r\n";
    $body .= "--boundary--";
}

// Отправляем письмо
$success = mail($to, $subject, $body, $headers);
if (!$success) {
    $errorMessage = error_get_last()['message'];
    echo $errorMessage;
}else{
        echo 'Письмо успешно отправлено!';

}

?>
