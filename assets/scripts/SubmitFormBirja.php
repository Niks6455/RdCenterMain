<?php
// Получаем данные из POST-запроса
$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];

// Устанавливаем адрес получателя
$to = 'info@rdcenter.ru';
// Устанавливаем тему письма
$subject = 'Новое письмо с сайта R&D Center';

// Создаем заголовки письма
$headers = "From: $name <$email>\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "Content-Type: text/plain; charset=\"utf-8\"\r\n";

// Создаем тело письма
$body = "Заполнена заявка на странице биржи практик, просьба связаться с отправителем.\n\n";
$body .= "Имя: $name\n";
$body .= "Номер телефона: $phone\n";
$body .= "Email: $email\n";

// Отправляем письмо
$success = mail($to, $subject, $body, $headers);
if (!$success) {
    $errorMessage = error_get_last()['message'];
    echo $errorMessage;
} else {
    echo 'Письмо успешно отправлено!';
}
?>
