<?php 
    require_once('functions/duda.php');
    require_once('functions/login.php');

    // DUDA
    $DUDA_SANDBOX_KEY = 'MGNiMjcxNWE5NzpEaG03dEs='; // base-64 encoded Duda key
    $DUDA_SANDBOX_ROUTE = 'https://api-sandbox.duda.co/api'; // sandbox endpoint
    // $SITE_NAME = "a37fc1cd317c4ceb9d5c6e474c85845a";
    $DUDA_LIVE_KEY = 'NTM3MDRkZWZkYjp1SWx0cHR4bFBKbTE=';
    $DUDA_LIVE_ROUTE = 'https://api.duda.co/api';
    define('DUDA_API_KEY', $DUDA_LIVE_KEY);
    define('DUDA_ROUTE', $DUDA_LIVE_ROUTE);
    // define('SITE_ALIAS', $SITE_NAME);

    // DEFAULT LOGINS
    $USERNAME = 'admin';
    $PASSWORD = 'admin';
    define('DEFAULT_USERNAME', $USERNAME);
    define('DEFAULT_PASSWORD', $PASSWORD);

    // Actions Custom Function for front-end handling data/error
    function printResponse($response){
        $response = json_decode(json_encode($response));
        if($response->status){
            print_r(json_encode($response));
        }else {
            die(json_encode($response));
        }
    }
?>