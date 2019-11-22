<?php
    include('./conn.php');

    // 接收前端发送的数据
    $username = $_REQUEST['username'];
    $password = $_REQUEST['password'];

    $sql = "select * from yhm where user_name='$username' and user_password='$password'";

    $res = $mysqli->query($sql);
    if($res->num_rows>0){
        $row = $res->fetch_assoc();
        echo '{"msg":"登录成功"}';
        if($row['user_name']==='lili'){
            echo "<script>location.href='htttp://localhost:8080/changhong/src/html/denglu.html';</script>";
        }
    }else{
        echo "<script>alert('用户名或密码错误');location.href='htp://localhost:8080/changhong/src/html/denglu.html';</script>";
    }

    $mysqli->close();
?>




