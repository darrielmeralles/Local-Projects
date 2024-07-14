<?php
    require('init.php');

    // Catch Payload Object from Ajax
    $payload = @file_get_contents("php://input");
    $data = json_decode($payload);
    if(gettype($data) !== 'object') die(json_encode(["status"=>false,"response"=>"Data is not an object"]));

    switch ($data->action) {
        //LOGIN
        case 'Login':  
            $login = login($data);
            printResponse($login);
            break;

        //GET URL REDIRECTS
        case 'Get Url':  
            $ruleList = ruleList($data);
            printResponse($ruleList);
            break;
        
        //ADD URL REDIRECTS
        case 'Add Url':  
            $ruleList = addUrl($data);
            printResponse($ruleList);
            break;

        //UPDATE URL REDIRECTS
        case 'Update Url':  
            $ruleList = updateUrl($data);
            printResponse($ruleList);
            break;

        //DELETE URL REDIRECTS
        case 'Delete Url':  
            $ruleList = deleteUrl($data);
            printResponse($ruleList);
            break;

        //PUBLISHED SITE
        case 'Published Site':  
            $ruleList = published($data);
            printResponse($ruleList);
            break;

        default:
            print_r('No action');
            break; 
    }
?>