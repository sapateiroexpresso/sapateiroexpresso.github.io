<?php

// Passando os dados obtidos pelo formulário para as variáveis abaixo
$name = $_POST['name'];
$email = $_POST['email'];
$emaildestiny = 'geral@sapateiroexpresso.com'; // Digite seu e-mail aqui, lembrando que o e-mail deve estar em seu servidor web
$subject = $_POST['subject'];
$content = $_POST['content'];
 
 
/* Montando a mensagem a ser enviada no corpo do e-mail. */
$mensagemHTML = '<p><b>Nome:</b> '.$name.'
<p><b>E-Mail:</b> '.$email.'
<p><b>Assunto:</b> '.$subject.'
<p><b>Mensagem:</b> '.$content.'</p>
<hr>';


// O remetente deve ser um e-mail do seu domínio conforme determina a RFC 822.
// O return-path deve ser ser o mesmo e-mail do remetente.
$headers = "MIME-Version: 1.1\r\n";
$headers .= "Content-type: text/html; charset=utf-8\r\n";
$headers .= "From: $email\r\n"; // remetente
$headers .= "Return-Path: $emaildestiny \r\n"; // return-path
$envio = mail($emaildestiny, $subject, $mensagemHTML, $headers); 
 
 if($envio)
echo "<script>alert('Mensagem enviada com sucesso.');location.href='index.php'</script>"; // Página que será redirecionada

?>
