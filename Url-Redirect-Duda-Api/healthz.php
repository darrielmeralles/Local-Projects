<?php
// Simple health check endpoint that returns HTTP 200 OK
header("Content-Type: text/plain");
echo "Site is OK, OK?";
http_response_code(200);
?>