define(['jquery', 'jquery.md5'], function ($, md5) {
    // 登录
    return {
        // 测试
        ceshi: function () {
            console.log(89)
        },
        // 登录
        regEv: function () {
            $("#btn").on('click', function () {
                // if (Array.from($("form>.block")).length) {
                //     alert('请按格式填写表单');
                // } else {
                    console.log(1)
                $.ajax({
                    url: 'http://localhost:8080/changhong/src/php/denglu.php',
                    type: 'post',
                    dataType: 'json',
                    data: {
                        username: $('#username').val(),
                        password: $.md5($('#password').val())
                    },
                    success: function (res) {
                        alert(res['msg']);
                        if (res['msg'] = '登录成功') {
                            location.href = "../shouye.html"
                        }
                    }
                });
                // }
            })
        }
    }
});