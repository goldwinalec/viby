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
    $mail->setFrom('info@viby.online', 'viby.online');
    // Кому отправить (если адресов несколько, перечислить в скобках и кавычках через запятую. Например, $mail->addAddress('info@viby.online', 'info@viby.online');)
    $mail->addAddress('info@viby.online');
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
        // Здесь можно изменить текст после отправки заявки
        $message = 'Данные отправлены!';
    }

    $response = ['message' => $message];

    header('Content-type: application/json');
    echo json_encode($response);
?>