<?php
 
   
include 'email.php';

$title = 'Новое сообщение';


if (!empty($_POST)) {
    
    $send = ' ';  
  

    if (!empty($_POST['form']['FullName'])) {
        $send .= "Имя - " . $_POST['form']['FullName'] . "<br>";
    }
      
    if (!empty($_POST['form']['Phone'])) {
        $send .= "Телефон - " . $_POST['form']['Phone'] . "<br>";
    }

    if (!empty($_POST['form']['Email'])) {
        $send .= "Email - " . $_POST['form']['Email'] . "<br>";
    }

    if (!empty($_POST['form']['Text'])) {
        $send .= "Сообщение - " . $_POST['form']['Text'] . "<br>";
    }

    require ('phpmailer/class.phpmailer.php');
      
    
    $mail = new PHPMailer();
    $mail->CharSet = 'UTF-8';
    $mail->IsMail();
    $mail->Mailer = "mail";
    $mail->SetFrom('noreply@'.$_SERVER['HTTP_HOST'], 'Zakaz Info'); 
    $mail->AddAddress($to);
    $mail->Subject = $title;
    $mail->WordWrap = 80;
    $mail->MsgHTML($send);
  
  
    $mail->IsHTML(true);
    
    // отправка письма
    $mail->Send();  
    
  
    

    $lang = 'ru';
    switch ($_GET['lang']) {
            case 'ru':
                $lang = 'ru';
            break;

            case 'en':
                $lang = 'en';
            break;

            case 'fr':
                $lang = 'fr';
            break;
            
        default:
        $lang = 'ru';
            break;
    }

    header('Location: /'.$lang.'/thx.html');
 
}

 

?>