<?php 

    require_once('functions/duda.php');

    // DUDA
    $DUDA_SANDBOX_KEY = 'MGNiMjcxNWE5NzpEaG03dEs='; // base-64 encoded Duda key
    $DUDA_SANDBOX_ROUTE = 'https://api-sandbox.duda.co/api'; // sandbox endpoint
    $SITE_NAME = "a37fc1cd317c4ceb9d5c6e474c85845a";
    $DUDA_LIVE_KEY = '';
    $DUDA_LIVE_ROUTE = '';
    define('DUDA_API_KEY', $DUDA_SANDBOX_KEY);
    define('DUDA_ROUTE', $DUDA_SANDBOX_ROUTE);
    define('SITE_ALIAS', $SITE_NAME);

?>