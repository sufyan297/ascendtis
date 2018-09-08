<?php
require 'vendor/autoload.php';
$client = new \GuzzleHttp\Client();
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

$endpoint = "http://api.elasticemail.com/v2/"; //https://
$url = $endpoint."email/send?apikey=".$apikey."&bodyHtml=".$bodyHtml."&from=".$from."&fromName=".$fromName."&to=".$to."&subject=".$subject;
// Send an asynchronous request.
$request = new \GuzzleHttp\Psr7\Request('GET', $url);
$promise = $client->sendAsync($request)->then(function ($response) {
    echo $response->getBody();
    header('Location: http://localhost/ascendtis/?mail_sent=1'); //https://ascendtis.com/?mail_sent=1
});
$promise->wait();
?>