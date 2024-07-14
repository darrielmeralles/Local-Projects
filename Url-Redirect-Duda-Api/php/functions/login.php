<?php
    function login($data) {
        if($data->username == DEFAULT_USERNAME && $data->password == DEFAULT_PASSWORD) {
			return ["status"=>true,"response"=>'Login successful!',"request"=>__FUNCTION__];
		}else{
			return ["status"=>false,"response"=>'You have entered an invalid username or password!',"request"=>__FUNCTION__];
		}
    }
?>