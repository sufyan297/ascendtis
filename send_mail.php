<?php
require 'vendor/autoload.php';
$client = new \GuzzleHttp\Client();


if (!isset($_POST['recaptcha']) || empty($_POST['recaptcha'])) {
    header('Location: https://ascendtis.com/');
} else {

    //recaptcha test
    $recaptchaEndpoint = 'https://www.google.com/recaptcha/api/siteverify';
    $recaptchaSecret = getenv('ASCENDTIS_RECAPTCHA_SECRET');
    $recaptchaResponse = $client->post($recaptchaEndpoint,[
        'form_params' => [
            'secret' => $recaptchaSecret, 'response' => $_POST['recaptcha']
        ] 
    ]);

    $json_response = $recaptchaResponse->getBody();
    $resp = json_decode($json_response, true);

    print_r($resp);

    if (isset($resp['success']) == true && $resp['score'] >= 0.5) {

        //variables
        $apikey = getenv("ELASTICEMAIL_API_KEY");
        $email = $_POST['email'];
        $name = $_POST['name'];
        $interested_in = $_POST['interested_in'];
        $message = $_POST['message'];
        $subject = "Contact Us Request - Ascendtis";
        $to = "support@ascendtis.com";
        $from = "noreply@ascendtis.com";
        $fromName = "Ascendtis Support";
        $bodyHtml = "
        <h1> Contact Us </h1>
        <br/>
        <br/>
        <b>Name: </b> $name<br/>
        <b>Email: </b> $email<br/>
        <b>Interested In: </b> $interested_in <br/>
        <b>Message: </b> $message<br/>
        ";
        
        $endpoint = "https://api.elasticemail.com/v2/"; //https://
        $url = $endpoint."email/send?apikey=".$apikey."&bodyHtml=".$bodyHtml."&from=".$from."&fromName=".$fromName."&to=".$to."&subject=".$subject;
        // Send an asynchronous request.
        $request = new \GuzzleHttp\Psr7\Request('GET', $url);
        $promise = $client->sendAsync($request)->then(function ($response) {
            echo $response->getBody();
            header('Location: https://ascendtis.com/?mail_sent=1');
        });
        $promise->wait();
        
    } else {
        header('Location: https://ascendtis.com');
    }

}

?>