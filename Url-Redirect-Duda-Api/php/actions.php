<?
require('init.php');

// Catch Payload Object from Ajax
$payload = @file_get_contents("php://input");
$data = json_decode($payload);

if(gettype($data) !== 'object') die(json_encode(["status"=>false,"response"=>"Data is not an object"]));


switch ($data->action) {

    //CREATE URL REDIRECT
    case 'Get Url':  
        $ruleList = ruleList();
            printResponse($ruleList);
        break;

    default:
        print_r('No action');
        break;   
}

?>