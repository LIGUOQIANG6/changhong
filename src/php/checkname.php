<?php

    header('Access-Control-Allow-Origin:*'); // CORS

    include('./conn.php');

    $username = $_REQUEST['username'];
    $password=$_REQUEST['password'];
    $sql = "select * from yhm where user_name='$username'";

    // echo '156';
    $res = $mysqli->query($sql);
    if($res->num_rows>0){
        echo '{"status":200,"msg":"用户名已存在"}';
        // echo '<script>location.href="../zhuce.html";</script>';
        $mysqli->close();
        die;
    }
    $insertSql = "insert into yhm(user_name,user_password) VALUES('$username','$password')";
    $resa = $mysqli->query($insertSql);
    // $resa = $mysqli->query($insertSql);

    // 当使用query函数执行插入操作的时候  返回的是插入的行数
    // $resa = $mysqli->query($insertSql);

    if($resa){
        echo '{"msg":"注册成功"}';
        // '<script>location.href="../shouye.html";</script>';
    }
    $mysqli->close();
?>