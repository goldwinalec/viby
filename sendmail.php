<?php
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    require 'phpmailer/src/Exception.php';
    require 'phpmailer/src/PHPMailer.php';


    $mail = new PHPMailer(true);
    $mail->CharSet = 'UTF-8';
    $mail->setLanguage('ru', 'phpmailer/language/');
    $mail->IsHTML(true);

    // От кого письмо
    $mail->setFrom('a-g1997@yandex.ru', 'viby.online');
    // Кому отправить
    $mail->addAddress('a-g1997@yandex.ru');
    // Тема письма
    $mail->Subject = 'Заявка с сайта viby.online';

    // Тело письма
    $body = '<h1>Пользователь оставил заявку</h1>';

    if(trim(!empty($_POST['email']))){
        $body.='<p><strong>E-mail:</strong> '.$_POST['email'].'</p>'
    }

    $mail->Body = $body;

    // Отправка письма 
    if(!$mail->send()){
        $message = 'Ошибка';
    } else {
        $message = 'Данные отправлены!';
    }

    $response = ['message' => $message];

    header('Content-type: application/json');
    echo json_encode($response);
?>