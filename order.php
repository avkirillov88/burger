<!-- Отправка письма о заказе -->

<?php

header('Content-type: application/json');

$name = $_POST['name'];
$phone = $_POST['phone'];
$street = $_POST['street'];
$house = $_POST['house'];
$corpus = $_POST['corpus'];
$flat = $_POST['flat'];
$floor = $_POST['floor'];
$payment = $_POST['payment'];
$comment = $_POST['comment'];

$disturb = $_POST['callback']; // 1 или null
$disturb = isset($disturb) ? 'НЕТ' : 'ДА';

$mail_message = '
    <html>
    <head>
        <title>Заявка</title>
    </head>
    <body>
        <h2>Заказ</h2>
        <ul>
            <li>Имя:' . $name . '</li>
            <li>Телефон: ' . $phone . '</li>
            <li>Улица: ' . $street . '</li>
            <li>Дом: ' . $house . '</li>
            <li>Корпус: ' . $corpus . '</li>
            <li>Квартира: ' . $flat . '</li>
            <li>Этаж: ' . $floor . '</li>
            <li>Способ оплаты: ' . $payment . '</li>
            <li>Комментарий к заказу: ' . $comment . '</li>
            <li>Нужно ли перезванивать клиенту: ' . $disturb . '</li>
        </ul>
    </body>
    </html>';

$result = mail('saive@yandex.ru', 'Тема письма', $mail_message);

echo json_encode(array(
  'status' => $result
));

?>