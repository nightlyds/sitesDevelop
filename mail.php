<?
if(isset($_POST['email'])&&$_POST['email']!=""){ //Проверка отправилось ли наше поля name и не пустые ли они
        $to = 'super.art1989@mail.ru'; // yacor@inbox.ru Почта получателя, через запятую можно указать сколько угодно адресов
        $subject = 'Заявка'; //Загаловок сообщения
        $message = '
                <html>
                    <head>
                        <title>'.$subject.'</title>
                    </head>
                    <body>
                    	<p>Мыло заказщика: '.$_POST['email'].'</p>  
                        <p>Сайт: '.$_POST['Site'].'</p>                        
                        <p>Имя: '.$_POST['Name'].'</p>  
                        <p>Имя: '.$_POST['Phone'].'</p>                        
                    </body>
                </html>'; //Текст нащего сообщения можно использовать HTML теги
        $headers  = "Content-type: text/html; charset=utf-8 \r\n"; //Кодировка письма
        $headers .= "From: Клиент <from@example.com>\r\n"; //Наименование и почта отправителя
        mail($to, $subject, $message, $headers); //Отправка письма с помощью функции mail
} 
?>