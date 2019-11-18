<?php
    $data=$_REQUEST['data'];

    if($data==1){
        echo '<ul class="nav nav-tabs">
        <li role="presentation" class="active"><a href="#">Home</a></li>
        <li role="presentation"><a href="#">Profile</a></li>
        <li role="presentation"><a href="#">Messages</a></li>
      </ul>';
    }else if($data ==2){
        echo '<ul class="nav nav-pills">
        <li role="presentation" class="active"><a href="#">Home</a></li>
        <li role="presentation"><a href="#">Profile</a></li>
        <li role="presentation"><a href="#">Messages</a></li>
      </ul>';
    }else{
        echo '<h1>参数错误</h1>';
    }
?>