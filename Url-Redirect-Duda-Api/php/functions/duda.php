<?php

//List URL REDIRECT
function ruleList(){

    // $curl = curl_init();
    
    // curl_setopt_array($curl, array(
    //   CURLOPT_URL =>  DUDA_ROUTE."/sites/multiscreen/site/".SITE_ALIAS."/urlrules",
    //   CURLOPT_RETURNTRANSFER => true,
    //   CURLOPT_ENCODING => '',
    //   CURLOPT_MAXREDIRS => 10,
    //   CURLOPT_TIMEOUT => 0,
    //   CURLOPT_FOLLOWLOCATION => true,
    //   CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
    //   CURLOPT_CUSTOMREQUEST => 'GET',
    //   CURLOPT_HTTPHEADER => array(
    //     "Authorization: Basic ".DUDA_API_KEY,
    //     "Content-Type: application/json"
    //   ),
    // ));

    $curl = curl_init();

    curl_setopt_array($curl, array(
      CURLOPT_URL => 'https://api-sandbox.duda.co/api/sites/multiscreen/site/a37fc1cd317c4ceb9d5c6e474c85845a/urlrules',
      CURLOPT_RETURNTRANSFER => true,
      CURLOPT_ENCODING => '',
      CURLOPT_MAXREDIRS => 10,
      CURLOPT_TIMEOUT => 0,
      CURLOPT_FOLLOWLOCATION => true,
      CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
      CURLOPT_CUSTOMREQUEST => 'GET',
      CURLOPT_HTTPHEADER => array(
        'content-type: application/json',
        'Authorization: Basic MGNiMjcxNWE5NzpEaG03dEs='
      ),
    ));

    $resp = curl_exec($curl);
    $responseCode = curl_getinfo($curl, CURLINFO_HTTP_CODE);
  
    curl_close($curl);
    
    $response = json_decode($resp);
  
    if($responseCode == 200 || $responseCode == 204){
        return ["status"=>true,"response"=>$response,"request"=>__FUNCTION__];
    }else{
        return ["status"=>false,"response"=>$response->message,"request"=>__FUNCTION__];
    }

}

?>