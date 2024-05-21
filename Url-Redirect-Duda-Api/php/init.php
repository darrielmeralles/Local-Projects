<?php 

    require_once('duda.php');

    // DUDA
    $DUDA_SANDBOX_KEY = 'MGNiMjcxNWE5NzpEaG03dEs='; // base-64 encoded Duda key
    $DUDA_SANDBOX_ROUTE = 'https://api-sandbox.duda.co/api'; // sandbox endpoint
    $DUDA_LIVE_KEY = '';
    $DUDA_LIVE_ROUTE = '';
    define('DUDA_API_KEY', $DUDA_SANDBOX_KEY);
    define('DUDA_ROUTE', $DUDA_SANDBOX_ROUTE);

?>